import { ENTERPRISE_BATCHES, ENTERPRISE_REGISTRATIONS } from '../src/server/enterpriseAndQuotaService.ts';

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

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const {
      batchId,
      studentName,
      schoolName,
      grade,
      studentEmail,
      studentPhone,
      isInternationalStudent,
      guardianName,
      guardianPhone,
      specialRequests
    } = body;

    if (!batchId || !studentName || !studentEmail || !schoolName) {
      return res.status(400).json({
        success: false,
        error: 'MISSING_REQUIRED_FIELDS',
        message: 'Vui lòng điền đầy đủ: Đợt trải nghiệm, Họ tên học sinh, Trường học và Email liên hệ.'
      });
    }

    const batch = ENTERPRISE_BATCHES.find(b => b.id === batchId);
    if (!batch) {
      return res.status(404).json({
        success: false,
        error: 'BATCH_NOT_FOUND',
        message: 'Không tìm thấy đợt trải nghiệm yêu cầu.'
      });
    }

    if (batch.registeredSlots >= batch.totalSlots || batch.status === 'HET_CHO') {
      return res.status(409).json({
        success: false,
        error: 'BATCH_FULL',
        message: 'Đợt trải nghiệm này hiện đã hết chỗ. Vui lòng chọn đợt khác hoặc tham gia danh sách chờ.'
      });
    }

    batch.registeredSlots += 1;
    if (batch.registeredSlots >= batch.totalSlots) {
      batch.status = 'HET_CHO';
    }

    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const registrationCode = `CV-EXP-${randomSuffix}`;

    const newRegistration = {
      registrationCode,
      batchId: batch.id,
      batchName: batch.programName,
      enterpriseName: batch.enterpriseName,
      studentName: studentName.trim(),
      schoolName: schoolName.trim(),
      grade: grade || 'Lớp 11',
      studentEmail: studentEmail.trim().toLowerCase(),
      studentPhone: studentPhone ? studentPhone.trim() : undefined,
      isInternationalStudent: Boolean(isInternationalStudent),
      guardianName: guardianName ? guardianName.trim() : undefined,
      guardianPhone: guardianPhone ? guardianPhone.trim() : undefined,
      specialRequests: specialRequests ? specialRequests.trim() : undefined,
      registeredAt: new Date().toISOString(),
      status: (batch.ticketPriceVND === 0 ? 'DA_XAC_NHAN' : 'DA_TIEP_NHAN') as any,
      ticketPriceVND: batch.ticketPriceVND,
    };

    ENTERPRISE_REGISTRATIONS.unshift(newRegistration);

    return res.status(201).json({
      success: true,
      data: newRegistration,
      message: 'Đăng ký trải nghiệm doanh nghiệp thành công!'
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'SERVER_ERROR',
      message: err?.message || 'Lỗi xử lý đăng ký'
    });
  }
}
