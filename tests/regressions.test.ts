import assert from 'node:assert/strict';
import { test } from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Navbar } from '../src/components/Navbar.tsx';
import { EnterprisePartners } from '../src/components/EnterprisePartners.tsx';
import { readFileSync, existsSync } from 'node:fs';
import { DEFAULT_PROFILE, loadStudentProfile, resetProfile } from '../src/utils/storage.ts';
import { RIASEC_CODES, RIASEC_MAX_SCORES, hasCompletedRiasec } from '../src/utils/riasec.ts';
import { generateRecommendations, generateActionPlan } from '../src/utils/recommendation.ts';
import { getTestAttemptKey } from '../src/utils/testAttempt.ts';
import { isEnterpriseBatchOpen } from '../src/utils/enterpriseAvailability.ts';
import { ENTERPRISE_BATCHES } from '../src/server/enterpriseAndQuotaService.ts';
import { ENTERPRISE_PARTNERS } from '../src/data/enterprisePartners.ts';
import { getDatabaseConfig, endpoint } from '../src/server/database.ts';
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
  assert.ok(allMax.recommendations.some(r => r.breakdown.riasecScore === 100));
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

test('enterprise API rejects guests without consuming a seat', async () => {
  const batch = ENTERPRISE_BATCHES[0];
  const slotsBefore = batch.registeredSlots;
  const result = response();
  await registerEnterprise({ method: 'POST', body: { batchId: batch.id, studentName: 'Audit Test', studentEmail: 'audit@example.invalid', schoolName: 'Test' } }, result);
  assert.equal(result.statusCode, 401);
  assert.equal(result.body.success, false);
  assert.equal(batch.registeredSlots, slotsBefore);
});

test('enterprise confirmations remain non-bookable partners, with legal names from the documents', () => {
  assert.equal(ENTERPRISE_PARTNERS.length, 15);
  assert.equal(new Set(ENTERPRISE_PARTNERS.map(p => p.id)).size, 15);
  assert.equal(new Set(ENTERPRISE_PARTNERS.map(p => p.sourceSha256)).size, 15);
  for (const partner of ENTERPRISE_PARTNERS) {
    assert.equal(partner.confirmationStatus, 'AGREED_IN_PRINCIPLE');
    for (const unconfirmed of ['scheduleDate', 'deadlineDate', 'totalSlots', 'ticketPriceVND']) assert.equal(unconfirmed in partner, false);
    assert.equal(ENTERPRISE_BATCHES.some(batch => batch.id === partner.id), false);
  }
  assert.equal(ENTERPRISE_PARTNERS.find(p => p.id === 'partner-lita-foods')?.name, 'Công ty Cổ phần LITA Foods');
  assert.equal(ENTERPRISE_PARTNERS.find(p => p.id === 'partner-anh-vu-thinh-phat')?.name, 'Công ty TNHH Anh Vũ Thịnh Phát');
  assert.equal(ENTERPRISE_PARTNERS.find(p => p.id === 'partner-thang-nguyen')?.name, 'Công ty TNHH Đầu tư và Phát triển Thắng Nguyên');
});

test('enterprise navigation is primary and the partner directory does not offer unconfirmed bookings', () => {
  const navigation = renderToStaticMarkup(React.createElement(Navbar, {currentTab: 'enterprise', setCurrentTab: () => {}, profile: DEFAULT_PROFILE, onOpenAssistant: () => {}}));
  const enterprisePosition = navigation.indexOf('aria-label="Trải nghiệm doanh nghiệp"');
  assert.ok(enterprisePosition > 0 && enterprisePosition < navigation.indexOf('<details'));
  assert.equal((navigation.match(/aria-label="Trải nghiệm doanh nghiệp"/g) || []).length, 1);
  const directory = renderToStaticMarkup(React.createElement(EnterprisePartners));
  assert.equal((directory.match(/<article/g) || []).length, 6);
  assert.match(directory, /15 đơn vị đã đồng ý hỗ trợ/);
  assert.match(directory, /Lịch, số chỗ và chi phí trải nghiệm chưa công bố/);
  assert.doesNotMatch(directory, /Đăng ký|giữ chỗ|miễn phí|0 VNĐ/);
});

test('server configuration accepts integration aliases and reports missing settings without claiming an empty database', async () => {
  const url = 'https://example.supabase.co', key = 'server-secret-placeholder';
  assert.deepEqual(getDatabaseConfig({SUPABASE_URL: ` ${url} `, SUPABASE_SECRET_KEY: ` ${key} `}), {url, key});
  assert.deepEqual(getDatabaseConfig({VITE_SUPABASE_URL: url, SUPABASE_SERVICE_ROLE_KEY: key}), {url, key});
  for (const env of [{}, {SUPABASE_URL: url}, {SUPABASE_URL: url, SUPABASE_SECRET_KEY: 'sb_publishable_not_a_server_secret'}]) {
    const result = response();
    await endpoint(async () => getDatabaseConfig(env))({method: 'POST'}, result);
    assert.equal(result.statusCode, 503);
    assert.equal(result.body.code, 'DATABASE_NOT_CONFIGURED');
    assert.doesNotMatch(JSON.stringify(result.body), /chưa được khởi tạo|server-secret|sb_publishable/);
  }
});

test('admin and EIE APIs require an authenticated account', async () => {
  for (const [handler, method] of [[enterpriseAdminHandler, 'GET'], [enterpriseAdminHandler, 'PATCH'], [grantCreditHandler, 'POST'], [eieHandler, 'POST']] as const) {
    const res=response(); await handler({method,headers:{},body:{}},res);
    assert.equal(res.statusCode,401); assert.equal(res.body.data,undefined);
  }
});

test('interest scoring has no floor or invented competency, values and environment points', () => {
 const low=generateRecommendations({...DEFAULT_PROFILE,riasecAnswerCount:24,riasecScores:{R:4,I:4,A:4,S:4,E:4,C:4}});
 assert.ok(low.recommendations.every(r=>r.matchScore===0 && r.breakdown.competencyScore===0 && r.breakdown.valuesScore===0 && r.breakdown.environmentScore===0));
 const high=generateRecommendations({...DEFAULT_PROFILE,riasecAnswerCount:24,riasecScores:{R:20,I:20,A:20,S:20,E:20,C:20}});
 assert.ok(high.recommendations.every(r=>r.matchScore===100));
 assert.ok(high.recommendations.every(r=>r.missingInformation.some(x=>x.includes('chưa phân hóa'))));
});

test('every Vercel API rewrite points to an existing serverless handler', () => {
  const { rewrites } = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
  for (const route of rewrites) assert.ok(existsSync(new URL(`..${route.destination.split('?')[0]}.ts`, import.meta.url)), route.source);
  for (const source of ['/api/eie/register-english-account', '/api/enterprise/registrations', '/api/enterprise/registrations/:code/status', '/api/test-quota/grant-credit']) {
    assert.ok(rewrites.some((r: any) => r.source === source), source);
  }
});
