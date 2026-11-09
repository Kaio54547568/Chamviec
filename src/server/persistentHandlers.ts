import { randomUUID } from 'node:crypto';
import { database, authenticatedUser, checked, endpoint } from './database.ts';
import { ENTERPRISE_BATCHES } from './enterpriseAndQuotaService.ts';
import { EnterpriseBatch, EnterpriseRegistration } from '../types';

const localBatches: EnterpriseBatch[] = ENTERPRISE_BATCHES.map((b) => ({ ...b }));
const localEnterpriseRegistrations: EnterpriseRegistration[] = [];
const localEieRegistrations: any[] = [];

async function optionalUser(req: any) {
  try {
    return await authenticatedUser(req, false);
  } catch {
    return null;
  }
}

export const batchesHandler = endpoint(async (req, res) => {
  if (req.method !== 'GET') return res.status(405).end();
  try {
    const rows = checked(await database().from('enterprise_batches').select('*').order('id'));
    if (rows && rows.length > 0) {
      return res.json({
        success: true,
        data: rows.map((r: any) => ({ ...r.data, registeredSlots: r.registered_slots })),
      });
    }
  } catch {
    // Fallback to local enterprise batches
  }
  return res.json({ success: true, data: localBatches });
});

export const quotaHandler = endpoint(async (req, res) => {
  if (req.method !== 'GET') return res.status(405).end();
  const u = await optionalUser(req);
  if (u) {
    try {
      const q = checked(
        await database().from('survey_quotas').select('*').eq('user_id', u.id).maybeSingle()
      );
      return res.json({
        success: true,
        data: {
          email: u.email,
          verified: true,
          totalAttempts: q?.attempts || 0,
          freeAttemptUsed: !!q?.attempts,
          retakeCredits: q?.credits ?? 99,
          feePerRetakeVND: 0,
          paymentGatewayStatus: 'NOT_CONFIGURED',
          noticeMessage: 'Bạn có thể làm khảo sát RIASEC miễn phí và xem gợi ý hướng nghiệp ngay.',
        },
      });
    } catch {
      // Fallback below
    }
  }
  return res.json({
    success: true,
    data: {
      email: u?.email || 'guest@chamviec.vn',
      verified: true,
      totalAttempts: 0,
      freeAttemptUsed: false,
      retakeCredits: 99,
      feePerRetakeVND: 0,
      paymentGatewayStatus: 'NOT_CONFIGURED',
      noticeMessage: 'Bạn có thể làm khảo sát RIASEC miễn phí và xem gợi ý hướng nghiệp ngay.',
    },
  });
});

export const attemptsHandler = endpoint(async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();
  const b = req.body || {};
  const answers = b.answers;
  const { RIASEC_QUESTIONS } = await import('../data/riasecQuestions.ts');
  if (
    !answers ||
    !RIASEC_QUESTIONS.every(
      (q) =>
        Number.isInteger(answers[q.id]?.rating) &&
        answers[q.id].rating >= 1 &&
        answers[q.id].rating <= 5
    )
  ) {
    return res
      .status(400)
      .json({ success: false, message: 'Vui lòng hoàn thành đủ 24 câu khảo sát.' });
  }
  const scores: Record<string, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  for (const q of RIASEC_QUESTIONS) scores[q.code] += answers[q.id].rating;

  const u = await optionalUser(req);
  if (u && typeof b.idempotencyKey === 'string' && b.idempotencyKey.length <= 200) {
    try {
      const db = database();
      const result = checked(
        await db.rpc('submit_survey', {
          p_user: u.id,
          p_key: b.idempotencyKey,
          p_scores: scores,
        })
      );
      const old = checked(
        await db.from('profiles').select('data').eq('user_id', u.id).maybeSingle()
      );
      checked(
        await db.from('profiles').upsert({
          user_id: u.id,
          data: { ...old?.data, id: u.id, riasecScores: scores, riasecAnswerCount: 24 },
          answers,
        })
      );
      return res.json({
        success: true,
        attemptNumber: result?.attemptNumber || 1,
        scores,
      });
    } catch {
      // Fallback for guest / offline DB
    }
  }

  return res.json({ success: true, attemptNumber: 1, scores });
});

export const registerHandler = endpoint(async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();
  const b = req.body || {};
  if (
    !['batchId', 'studentName', 'schoolName'].every(
      (k) => typeof b[k] === 'string' && b[k].trim()
    )
  ) {
    return res
      .status(400)
      .json({ success: false, message: 'Vui lòng điền tên và trường học.' });
  }

  const u = await optionalUser(req);
  const allowed = [
    'studentName',
    'schoolName',
    'grade',
    'studentEmail',
    'studentPhone',
    'guardianName',
    'guardianPhone',
    'specialRequests',
    'isInternationalStudent',
  ];
  const payload = Object.fromEntries(
    allowed.filter((k) => b[k] !== undefined).map((k) => [k, b[k]])
  );
  payload.studentEmail = payload.studentEmail || u?.email || 'hocsinh@chamviec.vn';

  if (u) {
    try {
      const { data, error } = await database().rpc('register_enterprise', {
        p_user: u.id,
        p_batch: b.batchId,
        p_data: payload,
      });
      if (!error && data) {
        return res.status(201).json({ success: true, data });
      }
    } catch {
      // Fallback to local registration
    }
  }

  const batch = localBatches.find((item) => item.id === b.batchId) || localBatches[0];
  if (!batch) {
    return res
      .status(404)
      .json({ success: false, message: 'Không tìm thấy đợt trải nghiệm.' });
  }
  if (batch.registeredSlots >= batch.totalSlots) {
    return res
      .status(409)
      .json({ success: false, message: 'Chương trình đã hết chỗ.' });
  }

  batch.registeredSlots += 1;
  const registration: EnterpriseRegistration = {
    registrationCode: `CV-REG-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
    batchId: batch.id,
    batchName: batch.programName,
    enterpriseName: batch.enterpriseName,
    studentName: String(b.studentName).trim(),
    schoolName: String(b.schoolName).trim(),
    grade: String(b.grade || 'Lớp 11'),
    studentEmail: String(payload.studentEmail),
    studentPhone: String(b.studentPhone || ''),
    isInternationalStudent: Boolean(b.isInternationalStudent),
    guardianName: b.guardianName ? String(b.guardianName) : undefined,
    guardianPhone: b.guardianPhone ? String(b.guardianPhone) : undefined,
    specialRequests: b.specialRequests ? String(b.specialRequests) : undefined,
    ticketPriceVND: batch.ticketPriceVND,
    status: 'DA_TIEP_NHAN',
    registeredAt: new Date().toISOString(),
  };
  localEnterpriseRegistrations.unshift(registration);
  return res.status(201).json({ success: true, data: registration });
});

export const enterpriseAdminHandler = endpoint(async (req, res) => {
  if (req.method === 'GET') {
    try {
      const rows = checked(await database().from('enterprise_registrations').select('*'));
      return res.json({
        success: true,
        total: rows.length,
        data: rows.map((r: any) => ({ ...r.data, userId: r.user_id })),
      });
    } catch {
      return res.json({
        success: true,
        total: localEnterpriseRegistrations.length,
        data: localEnterpriseRegistrations,
      });
    }
  }
  if (req.method === 'PATCH') {
    const status = req.body?.status;
    const code = req.params?.code || req.query?.code;
    if (
      !['DA_TIEP_NHAN', 'CHO_THANH_TOAN', 'DA_THANH_TOAN', 'DA_XAC_NHAN', 'DA_HUY'].includes(
        status
      )
    ) {
      return res.status(400).json({ success: false, message: 'Trạng thái không hợp lệ.' });
    }
    try {
      const db = database();
      const rows = checked(
        await db
          .from('enterprise_registrations')
          .select('*')
          .contains('data', { registrationCode: code })
      );
      if (rows[0]) {
        checked(
          await db
            .from('enterprise_registrations')
            .update({ data: { ...rows[0].data, status } })
            .eq('id', rows[0].id)
        );
        return res.json({ success: true });
      }
    } catch {
      // Fallback to local update
    }
    const localItem = localEnterpriseRegistrations.find((r) => r.registrationCode === code);
    if (!localItem) return res.status(404).json({ success: false });
    localItem.status = status as any;
    return res.json({ success: true });
  }
  return res.status(405).end();
});

export const grantCreditHandler = endpoint(async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();
  return res.json({ success: true });
});

export const eieHandler = endpoint(async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { count, error } = await database()
        .from('eie_registrations')
        .select('*', { count: 'exact', head: true });
      if (!error) return res.json({ success: true, count });
    } catch {
      // Fallback
    }
    return res.json({ success: true, count: localEieRegistrations.length });
  }
  if (req.method !== 'POST') return res.status(405).end();
  const b = req.body || {};
  if (
    typeof b.fullName !== 'string' ||
    !b.fullName.trim() ||
    !['lop_10', 'lop_11', 'lop_12'].includes(b.gradeLevel)
  ) {
    return res
      .status(400)
      .json({ success: false, message: 'Họ tên hoặc khối lớp không hợp lệ.' });
  }

  const u = await optionalUser(req);
  if (u) {
    try {
      const db = database();
      let row = checked(
        await db.from('eie_registrations').select('data').eq('user_id', u.id).maybeSingle()
      );
      if (!row) {
        checked(
          await db.from('eie_registrations').upsert(
            {
              user_id: u.id,
              data: {
                registrationCode: `EIE-${randomUUID()}`,
                fullName: b.fullName.trim(),
                contactEmail: b.contactEmail || u.email,
                gradeLevel: b.gradeLevel,
                status: 'PENDING_RECEIVED',
                createdAt: new Date().toISOString(),
              },
            },
            { onConflict: 'user_id', ignoreDuplicates: true }
          )
        );
        row = checked(
          await db.from('eie_registrations').select('data').eq('user_id', u.id).single()
        );
      }
      if (row?.data) {
        return res.json({
          success: true,
          data: row.data,
          message: 'Đã tiếp nhận đăng ký EIE.',
        });
      }
    } catch {
      // Fallback to local registration
    }
  }

  const record = {
    registrationCode: `EIE-${randomUUID().slice(0, 8).toUpperCase()}`,
    fullName: b.fullName.trim(),
    contactEmail: b.contactEmail || u?.email || 'hocsinh@chamviec.vn',
    gradeLevel: b.gradeLevel,
    status: 'PENDING_RECEIVED',
    createdAt: new Date().toISOString(),
  };
  localEieRegistrations.push(record);
  return res.json({
    success: true,
    data: record,
    message: 'Đã tiếp nhận đăng ký EIE.',
  });
});
