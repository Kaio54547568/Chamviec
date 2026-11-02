import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, existsSync } from 'node:fs';
import { DEFAULT_PROFILE, loadStudentProfile, resetProfile } from '../src/utils/storage.ts';
import { RIASEC_CODES, RIASEC_MAX_SCORES, hasCompletedRiasec } from '../src/utils/riasec.ts';
import { generateRecommendations, generateActionPlan } from '../src/utils/recommendation.ts';
import { getTestAttemptKey } from '../src/utils/testAttempt.ts';
import { isEnterpriseBatchOpen } from '../src/utils/enterpriseAvailability.ts';
import { ENTERPRISE_BATCHES, ENTERPRISE_REGISTRATIONS } from '../src/server/enterpriseAndQuotaService.ts';
import registerEnterprise from '../api/enterprise-register.ts';
import { enterpriseAdminHandler, grantCreditHandler, eieHandler } from '../src/server/supplementalApi.ts';

function memoryStorage() {
  const values = new Map<string, string>();
  return { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => { values.set(key, value); }, removeItem: (key: string) => { values.delete(key); }, clear: () => values.clear(), key: () => null, get length() { return values.size; } };
}
function response() {
  return { statusCode: 200, body: undefined as any, headers: {} as Record<string, string>, setHeader(key: string, value: string) { this.headers[key] = value; }, status(code: number) { this.statusCode = code; return this; }, json(body: any) { this.body = body; return this; }, end() { return this; } };
}

test('new and reset profiles have no fabricated results; existing saved profiles survive', () => {
  const store = memoryStorage();
  Object.defineProperty(globalThis, 'localStorage', { value: store, configurable: true });
  const fresh = loadStudentProfile();
  assert.equal(hasCompletedRiasec(fresh), false);
  for (const field of ['favoriteSubjects', 'savedCareers', 'savedUniversities', 'reflections'] as const) assert.deepEqual(fresh[field], []);
  const saved = { ...fresh, notes: 'Keep my notes', riasecAnswerCount: 24, riasecScores: { R: 20, I: 19, A: 18, S: 17, E: 16, C: 15 } };
  store.setItem('cham_viec_student_profile_v2', JSON.stringify(saved));
  assert.equal(loadStudentProfile().notes, saved.notes);
  assert.equal(hasCompletedRiasec(loadStudentProfile()), true);
  assert.equal(hasCompletedRiasec(resetProfile()), false);
});

test('empty and incomplete surveys produce neither recommendations nor a personal action plan', () => {
  for (const profile of [DEFAULT_PROFILE, { ...DEFAULT_PROFILE, riasecAnswerCount: 23, riasecScores: { R: 20, I: 20, A: 20, S: 20, E: 20, C: 15 } }]) {
    assert.deepEqual(generateRecommendations(profile).recommendations, []);
    assert.deepEqual(generateActionPlan(profile), []);
  }
});

test('RIASEC uses 20 points per group and distinguishes different rating intensities', () => {
  assert.deepEqual(RIASEC_CODES.map(code => RIASEC_MAX_SCORES[code]), [20, 20, 20, 20, 20, 20]);
  const low = generateRecommendations({ ...DEFAULT_PROFILE, riasecAnswerCount: 24, riasecScores: { R: 9, I: 8, A: 7, S: 6, E: 5, C: 4 } });
  const high = generateRecommendations({ ...DEFAULT_PROFILE, riasecAnswerCount: 24, riasecScores: { R: 20, I: 19, A: 18, S: 17, E: 16, C: 15 } });
  assert.ok(low.recommendations.length > 0);
  assert.notDeepEqual(low.recommendations.map(r => r.breakdown.riasecScore), high.recommendations.map(r => r.breakdown.riasecScore));
  const allMax = generateRecommendations({ ...DEFAULT_PROFILE, riasecAnswerCount: 24, riasecScores: { R: 20, I: 20, A: 20, S: 20, E: 20, C: 20 } });
  assert.ok(allMax.recommendations.some(r => r.breakdown.riasecScore === 45));
});

test('complete legacy survey profiles remain usable', () => {
  assert.equal(hasCompletedRiasec({ ...DEFAULT_PROFILE, riasecAnswerCount: undefined, riasecScores: { R: 10, I: 12, A: 8, S: 6, E: 7, C: 9 } }), true);
});

test('survey retries retain their key; edits and resets get new keys', () => {
  const store = memoryStorage();
  const answers = { q1: { rating: 3, hasTried: false } };
  const first = getTestAttemptKey(answers, store);
  assert.equal(getTestAttemptKey(answers, store), first);
  const edited = getTestAttemptKey({ q1: { rating: 5, hasTried: false } }, store);
  assert.notEqual(edited, first);
  store.removeItem('cham_viec_test_idem_key');
  assert.notEqual(getTestAttemptKey({ q1: { rating: 5, hasTried: false } }, store), edited);
});

test('enterprise deadlines include the last millisecond of the day in Vietnam', () => {
  const batch = { ...ENTERPRISE_BATCHES[0], status: 'DANG_MO' as const, deadlineDate: '2026-11-02', scheduleDate: '2026-11-03', registeredSlots: 0 };
  assert.equal(isEnterpriseBatchOpen(batch, new Date('2026-11-02T16:59:59.999Z')), true);
  assert.equal(isEnterpriseBatchOpen(batch, new Date('2026-11-02T17:00:00.000Z')), false);
  assert.equal(isEnterpriseBatchOpen({ ...batch, status: 'SAP_MO' }, new Date('2026-11-01')), false);
  assert.equal(isEnterpriseBatchOpen({ ...batch, status: 'DA_HOAN_THANH' }, new Date('2026-11-01')), false);
  assert.equal(isEnterpriseBatchOpen({ ...batch, registeredSlots: batch.totalSlots }, new Date('2026-11-01')), false);
});

test('enterprise API rejects expired batches without consuming a seat', async () => {
  const batch = ENTERPRISE_BATCHES[0];
  const slotsBefore = batch.registeredSlots;
  const result = response();
  await registerEnterprise({ method: 'POST', body: { batchId: batch.id, studentName: 'Audit Test', studentEmail: 'audit@example.invalid', schoolName: 'Test' } }, result);
  assert.equal(result.statusCode, 409);
  assert.equal(result.body.error, 'BATCH_CLOSED');
  assert.equal(batch.registeredSlots, slotsBefore);
});

test('admin APIs fail closed without configuration or a valid token', () => {
  const previous = process.env.ADMIN_API_TOKEN;
  try {
    delete process.env.ADMIN_API_TOKEN;
    const disabled = response();
    enterpriseAdminHandler({ method: 'GET', headers: {} }, disabled);
    assert.equal(disabled.statusCode, 503);
    process.env.ADMIN_API_TOKEN = 'regression-test-secret';
    for (const [handler, method] of [[enterpriseAdminHandler, 'GET'], [enterpriseAdminHandler, 'PATCH'], [grantCreditHandler, 'POST']] as const) {
      const unauthorized = response();
      handler({ method, headers: {} }, unauthorized);
      assert.equal(unauthorized.statusCode, 401);
      assert.equal(unauthorized.body.data, undefined);
    }
    const authorized = response();
    enterpriseAdminHandler({ method: 'GET', headers: { authorization: 'Bearer regression-test-secret' } }, authorized);
    assert.equal(authorized.statusCode, 200);
    assert.equal(authorized.body.total, ENTERPRISE_REGISTRATIONS.length);
    const invalid = response();
    enterpriseAdminHandler({ method: 'PATCH', headers: { authorization: 'Bearer regression-test-secret' }, query: { code: ENTERPRISE_REGISTRATIONS[0].registrationCode }, body: { status: 'INVALID' } }, invalid);
    assert.equal(invalid.statusCode, 400);
  } finally {
    if (previous === undefined) delete process.env.ADMIN_API_TOKEN; else process.env.ADMIN_API_TOKEN = previous;
  }
});

test('EIE registration validates requests and normalizes emails before detecting duplicates', () => {
  const invalid = response();
  eieHandler({ method: 'POST', body: { fullName: ' ', contactEmail: 'bad' } }, invalid);
  assert.equal(invalid.statusCode, 400);
  const first = response();
  eieHandler({ method: 'POST', body: { fullName: 'Test', contactEmail: ' Audit@Example.invalid ' } }, first);
  assert.equal(first.body.success, true);
  const duplicate = response();
  eieHandler({ method: 'POST', body: { fullName: 'Test', contactEmail: 'audit@example.invalid' } }, duplicate);
  assert.equal(duplicate.body.alreadyRegistered, true);
  assert.equal(first.body.data.registrationCode, duplicate.body.data.registrationCode);
});

test('every Vercel API rewrite points to an existing serverless handler', () => {
  const { rewrites } = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
  for (const route of rewrites) assert.ok(existsSync(new URL(`..${route.destination.split('?')[0]}.ts`, import.meta.url)), route.source);
  for (const source of ['/api/eie/register-english-account', '/api/enterprise/registrations', '/api/enterprise/registrations/:code/status', '/api/test-quota/grant-credit']) {
    assert.ok(rewrites.some((r: any) => r.source === source), source);
  }
});
