import { registerTestAttempt } from '../src/server/enterpriseAndQuotaService.ts';

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
  const { email, idempotencyKey, riasecScores } = body;

  if (!idempotencyKey) {
    return res.status(400).json({ success: false, error: 'MISSING_IDEMPOTENCY_KEY', message: 'Yêu cầu khóa định danh lần nộp.' });
  }

  const result = registerTestAttempt({
    email: email || 'student@chamviec.vn',
    idempotencyKey,
    riasecScores: riasecScores || {}
  });

  if (!result.allowed) {
    return res.status(402).json({
      success: false,
      error: 'PAYMENT_OR_CREDIT_REQUIRED',
      feeVND: result.feeVND,
      message: result.errorMessage
    });
  }

  return res.status(200).json({
    success: true,
    attemptNumber: result.attemptNumber,
    message: result.attemptNumber === 1 ? 'Lần làm bài thứ 1 miễn phí thành công!' : 'Đã sử dụng 1 tín chỉ khảo sát thành công!'
  });
}
