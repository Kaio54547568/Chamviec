import { timingSafeEqual, randomUUID } from 'node:crypto';
import { ENTERPRISE_REGISTRATIONS, grantCredit } from './enterpriseAndQuotaService.ts';
import type { RegistrationStatus } from '../types/index.ts';

// Both Express and the Vercel entry points use these handlers.
function requireAdmin(req: any, res: any): boolean {
  const configured = process.env.ADMIN_API_TOKEN?.trim();
  if (!configured) {
    res.status(503).json({ success: false, error: 'ADMIN_NOT_CONFIGURED', message: 'Chức năng quản trị chưa được cấu hình.' });
    return false;
  }
  const header = req.headers?.authorization;
  const supplied = typeof header === 'string' && header.startsWith('Bearer ') ? header.slice(7) : '';
  const expected = Buffer.from(configured);
  const actual = Buffer.from(supplied);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) {
    res.status(401).json({ success: false, error: 'UNAUTHORIZED', message: 'Khóa quản trị không hợp lệ.' });
    return false;
  }
  res.setHeader('Cache-Control', 'no-store');
  return true;
}

function readBody(req: any): any {
  return typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
}

const REGISTRATION_STATUSES: RegistrationStatus[] = ['DA_TIEP_NHAN', 'CHO_THANH_TOAN', 'DA_THANH_TOAN', 'DA_XAC_NHAN', 'DA_HUY'];

export function enterpriseAdminHandler(req: any, res: any) {
  if (!['GET', 'PATCH'].includes(req.method)) return res.status(405).json({ success: false, message: 'Method not allowed' });
  if (!requireAdmin(req, res)) return;
  if (req.method === 'GET') {
    return res.status(200).json({ success: true, total: ENTERPRISE_REGISTRATIONS.length, data: ENTERPRISE_REGISTRATIONS });
  }
  try {
    const { status } = readBody(req);
    if (!REGISTRATION_STATUSES.includes(status)) return res.status(400).json({ success: false, message: 'Trạng thái không hợp lệ.' });
    const code = req.params?.code || req.query?.code;
    const registration = ENTERPRISE_REGISTRATIONS.find(r => r.registrationCode === code);
    if (!registration) return res.status(404).json({ success: false, message: 'Không tìm thấy phiếu đăng ký.' });
    registration.status = status;
    return res.status(200).json({ success: true, data: registration });
  } catch {
    return res.status(400).json({ success: false, message: 'Dữ liệu không hợp lệ.' });
  }
}

export function grantCreditHandler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' });
  if (!requireAdmin(req, res)) return;
  try {
    const { email, amount = 1 } = readBody(req);
    if (typeof email !== 'string' || !email.trim() || !Number.isSafeInteger(amount) || amount <= 0) {
      return res.status(400).json({ success: false, message: 'Email và số tín chỉ không hợp lệ.' });
    }
    return res.status(200).json({ success: true, data: grantCredit(email, amount) });
  } catch {
    return res.status(400).json({ success: false, message: 'Dữ liệu không hợp lệ.' });
  }
}

interface EieRegistration {
  registrationCode: string;
  fullName: string;
  gradeLevel: string;
  contactEmail: string;
  partnerUnit: string;
  status: 'PENDING_RECEIVED';
  createdAt: string;
}
// Persistence must be supplied by the deployment's chosen database.
const eieRegistrations = new Map<string, EieRegistration>();

export function eieHandler(req: any, res: any) {
  if (req.method === 'GET') return res.status(200).json({ success: true, count: eieRegistrations.size, partner: 'EIE Education' });
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' });
  try {
    const { fullName, contactEmail, gradeLevel = 'lop_12' } = readBody(req);
    if (typeof fullName !== 'string' || !fullName.trim() || typeof contactEmail !== 'string'
      || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail.trim()) || !['lop_10', 'lop_11', 'lop_12'].includes(gradeLevel)) {
      return res.status(400).json({ success: false, message: 'Vui lòng điền họ tên, khối lớp và email hợp lệ.' });
    }
    const email = contactEmail.trim().toLowerCase();
    const existing = eieRegistrations.get(email);
    if (existing) return res.status(200).json({ success: true, alreadyRegistered: true, data: existing, message: 'Email này đã được ghi nhận trong danh sách tiếp nhận của EIE Education.' });
    const registration: EieRegistration = {
      registrationCode: `EIE-${randomUUID()}`, fullName: fullName.trim(), gradeLevel,
      contactEmail: email, partnerUnit: 'EIE Education', status: 'PENDING_RECEIVED', createdAt: new Date().toISOString(),
    };
    eieRegistrations.set(email, registration);
    return res.status(200).json({ success: true, data: registration, message: 'Đã tiếp nhận đăng ký nhận tài khoản tiếng Anh miễn phí từ EIE Education!' });
  } catch {
    return res.status(400).json({ success: false, message: 'Dữ liệu không hợp lệ.' });
  }
}
