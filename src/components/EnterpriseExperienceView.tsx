import { isEnterpriseBatchOpen } from '../utils/enterpriseAvailability';
import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  Ticket, 
  X, 
  ShieldCheck, 
  ExternalLink, 
  ChevronRight,
  Download,
  Filter,
  Search,
  Lock,
  Globe
} from 'lucide-react';
import { EnterpriseBatch, EnterpriseRegistration } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { localizeEnterpriseBatch } from '../utils/i18nData';

export const EnterpriseExperienceView: React.FC = () => {
  const { t, language } = useLanguage();
  const [batches, setBatches] = useState<EnterpriseBatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBatch, setSelectedBatch] = useState<EnterpriseBatch | null>(null);

  const localizedBatches = React.useMemo(
    () => batches.map((b) => localizeEnterpriseBatch(b, language)),
    [batches, language]
  );

  const activeBatch = React.useMemo(() => {
    if (!selectedBatch) return null;
    const raw = batches.find((b) => b.id === selectedBatch.id) || selectedBatch;
    return localizeEnterpriseBatch(raw, language);
  }, [selectedBatch, batches, language]);

  // Registration Form State
  const [studentName, setStudentName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [grade, setGrade] = useState('Lớp 11');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [isInternational, setIsInternational] = useState(false);
  const [guardianName, setGuardianName] = useState('');
  const [guardianPhone, setGuardianPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmedRegistration, setConfirmedRegistration] = useState<EnterpriseRegistration | null>(null);

  // Admin View State
  const [showAdminTab, setShowAdminTab] = useState(false);
  const [adminToken, setAdminToken] = useState('');
  const [adminError, setAdminError] = useState<string | null>(null);
  const [adminRegistrations, setAdminRegistrations] = useState<EnterpriseRegistration[]>([]);
  const [adminSearch, setAdminSearch] = useState('');

  // Fetch batches on mount
  useEffect(() => {
    fetchBatches();
  }, []);

  const fetchBatches = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/enterprise/batches');
      const data = await res.json();
      if (data.success && data.data) {
        setBatches(data.data);
      }
    } catch (e) {
      console.error('Failed to load enterprise batches:', e);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAdminRegistrations = async () => {
    try {
      setAdminError(null);
      const res = await fetch('/api/enterprise/registrations', { headers: { Authorization: `Bearer ${adminToken}` } });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Unable to load registrations');
      setAdminRegistrations(data.data);
    } catch (e) {
      setAdminRegistrations([]);
      setAdminError(e instanceof Error ? e.message : 'Unable to load registrations');
    }
  };

  const handleOpenRegisterModal = (batch: EnterpriseBatch) => {
    setSelectedBatch(batch);
    setSubmitError(null);
    setConfirmedRegistration(null);
  };

  const handleCloseModal = () => {
    setSelectedBatch(null);
    setConfirmedRegistration(null);
    setSubmitError(null);
  };

  const handleSubmitRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBatch) return;

    if (!agreeTerms) {
      setSubmitError(language === 'vi' ? 'Vui lòng xác nhận đồng ý với quy định tham quan & an toàn doanh nghiệp.' : 'Please agree to corporate site tour and safety regulations.');
      return;
    }

    if (!isInternational && !studentPhone) {
      setSubmitError(language === 'vi' ? 'Học sinh trong nước vui lòng cung cấp số điện thoại liên hệ.' : 'Domestic students must provide a contact phone number.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/enterprise/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          batchId: selectedBatch.id,
          studentName,
          schoolName,
          grade,
          studentEmail,
          studentPhone,
          isInternationalStudent: isInternational,
          guardianName,
          guardianPhone,
          specialRequests
        })
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        setSubmitError(resData.message || (language === 'vi' ? 'Đăng ký không thành công. Vui lòng thử lại.' : 'Registration failed. Please try again.'));
        return;
      }

      setConfirmedRegistration(resData.data);
      // Refresh batch slots
      fetchBatches();
    } catch (err: any) {
      setSubmitError(language === 'vi' ? 'Lỗi kết nối máy chủ. Vui lòng kiểm tra mạng và thử lại.' : 'Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExportCSV = () => {
    if (adminRegistrations.length === 0) return;
    const headers = ['Mã phiếu', 'Tên học sinh', 'Đợt trải nghiệm', 'Doanh nghiệp', 'Trường', 'Khối', 'Email', 'SĐT', 'Quốc tế', 'Người giám hộ', 'Trạng thái', 'Ngày đăng ký'];
    const rows = adminRegistrations.map(r => [
      r.registrationCode,
      `"${r.studentName}"`,
      `"${r.batchName}"`,
      `"${r.enterpriseName}"`,
      `"${r.schoolName}"`,
      r.grade,
      r.studentEmail,
      r.studentPhone || 'N/A',
      r.isInternationalStudent ? 'Có' : 'Không',
      `"${r.guardianName || 'N/A'}"`,
      r.status,
      r.registeredAt
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `CHAM_VIEC_Dang_Ky_Doanh_Nghiep_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleStatusChange = async (code: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/enterprise/registrations/${code}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminToken}` },
        body: JSON.stringify({ status: newStatus })
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Unable to update registration');
      }
      await fetchAdminRegistrations();
    } catch (e) {
      setAdminError(e instanceof Error ? e.message : 'Unable to update registration');
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-900 text-xs font-bold border border-indigo-200">
            <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
            <span>
              {language === 'vi'
                ? 'Trải nghiệm nghề thật tại doanh nghiệp đối tác'
                : 'Real-World Career Immersion at Partner Enterprises'}
            </span>
          </div>

          <button
            onClick={() => {
              setShowAdminTab(!showAdminTab);
              setAdminRegistrations([]);
              setAdminToken('');
              setAdminError(null);
            }}
            className="text-xs font-semibold text-slate-500 hover:text-indigo-600 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 hover:bg-slate-200/80"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>
              {showAdminTab
                ? (language === 'vi' ? 'Xem danh sách đợt mở' : 'View Open Batches')
                : t.enterprise.adminPortal}
            </span>
          </button>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t.enterprise.title}
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          {t.enterprise.subtitle}
        </p>

        <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-900 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <span>
            {language === 'vi'
              ? 'Mọi đợt trải nghiệm đều được xác minh thực tế với ban lãnh đạo doanh nghiệp. Có xe đưa đón học sinh, bảo hiểm sự kiện và người phụ trách chuyên trách đi kèm theo đoàn.'
              : 'All enterprise tours are officially verified with host partners, featuring dedicated chaperones, event insurance, and student shuttle services.'}
          </span>
        </div>
      </div>

      {/* ADMIN VIEW PORTAL */}
      {showAdminTab ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                {language === 'vi'
                  ? 'Quản trị danh sách học sinh đăng ký trải nghiệm'
                  : 'Enterprise Immersion Student Registration Management'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'vi' ? (
                  <>Tổng cộng có <strong>{adminRegistrations.length}</strong> hồ sơ đã đăng ký qua hệ thống.</>
                ) : (
                  <>Total of <strong>{adminRegistrations.length}</strong> student registrations recorded.</>
                )}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleExportCSV}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{language === 'vi' ? 'Xuất file Excel/CSV' : 'Export Excel/CSV'}</span>
              </button>
            </div>
          </div>

          <form onSubmit={e => { e.preventDefault(); fetchAdminRegistrations(); }} className="flex flex-wrap items-end gap-3">
            <label className="text-sm font-semibold">
              {language === 'vi' ? 'Khóa quản trị' : 'Admin access key'}
              <input type="password" autoComplete="off" required value={adminToken}
                onChange={e => { setAdminToken(e.target.value); setAdminRegistrations([]); setAdminError(null); }}
                className="block mt-1 p-2 rounded-lg border border-slate-300" />
            </label>
            <button type="submit" disabled={!adminToken.trim()} className="rounded-lg bg-indigo-700 px-4 py-2 text-sm text-white disabled:opacity-50">
              {language === 'vi' ? 'Tải danh sách' : 'Load registrations'}
            </button>
          </form>
          {adminError && <p role="alert" className="text-sm text-rose-700">{adminError}</p>}

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">{language === 'vi' ? 'Mã phiếu' : 'Pass Code'}</th>
                  <th className="p-3">{language === 'vi' ? 'Học sinh' : 'Student'}</th>
                  <th className="p-3">{language === 'vi' ? 'Trường / Khối' : 'School / Grade'}</th>
                  <th className="p-3">{language === 'vi' ? 'Chương trình' : 'Program'}</th>
                  <th className="p-3">{language === 'vi' ? 'Liên hệ' : 'Contact'}</th>
                  <th className="p-3">{language === 'vi' ? 'Trạng thái' : 'Status'}</th>
                  <th className="p-3">{language === 'vi' ? 'Hành động' : 'Action'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {adminRegistrations.map((reg) => (
                  <tr key={reg.registrationCode} className="hover:bg-slate-50/60">
                    <td className="p-3 font-mono font-bold text-indigo-700">{reg.registrationCode}</td>
                    <td className="p-3">
                      <div className="font-bold text-slate-900">{reg.studentName}</div>
                      {reg.isInternationalStudent && (
                        <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded font-medium">
                          {language === 'vi' ? 'Quốc tế' : 'International'}
                        </span>
                      )}
                    </td>
                    <td className="p-3 text-slate-600">{reg.schoolName} ({reg.grade})</td>
                    <td className="p-3">
                      <div className="font-medium text-slate-900">{reg.batchName}</div>
                      <div className="text-[11px] text-slate-500">{reg.enterpriseName}</div>
                    </td>
                    <td className="p-3 text-slate-600">
                      <div>{reg.studentEmail}</div>
                      <div className="text-[11px] text-slate-400">
                        {reg.studentPhone || (language === 'vi' ? 'Chưa cung cấp' : 'Not provided')}
                      </div>
                    </td>
                    <td className="p-3">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        reg.status === 'DA_XAC_NHAN' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        reg.status === 'DA_TIEP_NHAN' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                        reg.status === 'CHO_THANH_TOAN' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {reg.status === 'DA_XAC_NHAN'
                          ? (language === 'vi' ? 'Đã xác nhận' : 'Confirmed')
                          : reg.status === 'DA_TIEP_NHAN'
                          ? (language === 'vi' ? 'Đã tiếp nhận' : 'Received')
                          : reg.status === 'CHO_THANH_TOAN'
                          ? (language === 'vi' ? 'Chờ thanh toán' : 'Pending Payment')
                          : reg.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <select
                        value={reg.status}
                        onChange={(e) => handleStatusChange(reg.registrationCode, e.target.value)}
                        className="py-1 px-2 rounded-lg border border-slate-300 text-[11px] font-medium bg-white"
                      >
                        <option value="DA_TIEP_NHAN">{language === 'vi' ? 'Đã tiếp nhận' : 'Received'}</option>
                        <option value="CHO_THANH_TOAN">{language === 'vi' ? 'Chờ thanh toán' : 'Pending Payment'}</option>
                        <option value="DA_THANH_TOAN">{language === 'vi' ? 'Đã thanh toán' : 'Paid'}</option>
                        <option value="DA_XAC_NHAN">{language === 'vi' ? 'Đã xác nhận' : 'Confirmed'}</option>
                        <option value="DA_HUY">{language === 'vi' ? 'Đã hủy' : 'Cancelled'}</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* PUBLIC BATCHES LIST */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {localizedBatches.map((batch) => {
            const slotsRemaining = batch.totalSlots - batch.registeredSlots;
            const isFull = slotsRemaining <= 0 || batch.status === 'HET_CHO';
            const isClosed = !isEnterpriseBatchOpen(batch);

            return (
              <div
                key={batch.id}
                className="bg-white rounded-3xl border border-slate-200/80 hover:border-teal-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                    <img
                      src={batch.imageUrl || 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80'}
                      alt={batch.imageAlt || batch.programName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                        {batch.careerCategory}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-amber-400 text-slate-950 text-[10px] font-black uppercase">
                        {batch.code}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="font-bold flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-amber-300" />
                        {batch.enterpriseName}
                      </span>
                      <span className="text-[11px] font-medium bg-emerald-600/90 px-2 py-0.5 rounded">
                        {batch.location}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Program Title */}
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl leading-snug">
                        {batch.programName}
                      </h3>
                    </div>

                  {/* Key Logistics Grid */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-400 block">{t.enterprise.schedule}</span>
                        <strong className="text-slate-800">{batch.scheduleDate}</strong>
                        <div className="text-[11px] text-slate-500">{batch.timeRange}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-400 block">{t.enterprise.location}</span>
                        <strong className="text-slate-800">{batch.location}</strong>
                        <div className="text-[11px] text-slate-500 truncate max-w-[140px]">{batch.address}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-400 block">{language === 'vi' ? 'Số lượng & Đối tượng:' : 'Slots & Eligibility:'}</span>
                        <strong className={isFull ? 'text-rose-600' : 'text-emerald-700'}>
                          {isFull ? t.enterprise.fullSlots : `${slotsRemaining} ${t.enterprise.slotsLeft}`}
                        </strong>
                        <div className="text-[11px] text-slate-500">{batch.targetGrade}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-400 block">{t.enterprise.deadline}</span>
                        <strong className="text-slate-800">{batch.deadlineDate}</strong>
                        <div className="text-[11px] text-slate-500">
                          {batch.ticketPriceVND === 0 ? (
                            <span className="text-emerald-600 font-bold">{t.enterprise.freePrice}</span>
                          ) : (
                            <span className="font-mono">{batch.ticketPriceVND.toLocaleString()} đ</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Program Highlights */}
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <span className="font-bold text-slate-800 block">{t.enterprise.included}</span>
                    <ul className="space-y-1 text-[11px]">
                      {batch.inclusions.slice(0, 3).map((inc, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <div>
                    <span className="text-[11px] text-slate-400 block">{t.enterprise.price}</span>
                    <span className="font-extrabold text-base text-slate-900">
                      {batch.ticketPriceVND === 0 ? (
                        <span className="text-emerald-600">{language === 'vi' ? '0 VNĐ (Tài trợ 100%)' : '0 VND (Fully Sponsored)'}</span>
                      ) : (
                        <span>{batch.ticketPriceVND.toLocaleString()} VNĐ</span>
                      )}
                    </span>
                  </div>

                  <button
                    disabled={isClosed}
                    onClick={() => handleOpenRegisterModal(batch)}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 ${
                      isClosed
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-teal-700 hover:bg-teal-800 text-white shadow-teal-700/20'
                    }`}
                  >
                    <span>{isFull ? t.enterprise.fullSlots : isClosed ? (language === 'vi' ? 'Đã đóng / Chưa mở đăng ký' : 'Registration closed / Not open') : t.enterprise.registerBtn}</span>
                    {!isClosed && <ChevronRight className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* REGISTRATION MODAL WITH PROMINENT CLOSE BUTTON */}
      {activeBatch && (
        <div 
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 my-auto max-h-[92vh] overflow-y-auto relative"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-200 gap-3">
              <div>
                <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                  {activeBatch.careerCategory}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  {language === 'vi' ? `Đăng ký: ${activeBatch.programName}` : `Register: ${activeBatch.programName}`}
                </h3>
                <div className="text-xs text-slate-500">
                  {language === 'vi' ? 'Doanh nghiệp tiếp nhận:' : 'Host Enterprise:'}{' '}
                  <strong>{activeBatch.enterpriseName}</strong>
                </div>
              </div>

              {/* Close Button X */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors shrink-0 shadow-xs"
                title={t.common.close}
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* If Confirmed Success, display Voucher Pass */}
            {confirmedRegistration ? (
              <div className="space-y-6 text-center py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-extrabold text-slate-900">
                    {t.enterprise.regSuccessTitle}
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    {t.enterprise.regSuccessNote}
                  </p>
                </div>

                {/* Voucher Pass Card */}
                <div className="p-5 rounded-2xl bg-indigo-50/80 border-2 border-dashed border-indigo-300 text-left space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-indigo-200">
                    <span className="text-[11px] font-bold text-indigo-900 uppercase">{language === 'vi' ? 'Phiếu Trải Nghiệm Doanh Nghiệp' : 'Enterprise Immersion Pass'}</span>
                    <span className="font-mono font-extrabold text-indigo-700 text-sm bg-white px-2 py-0.5 rounded-lg border border-indigo-200">
                      {confirmedRegistration.registrationCode}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500 block">{language === 'vi' ? 'Học sinh:' : 'Student:'}</span>
                      <strong className="text-slate-900">{confirmedRegistration.studentName}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">{language === 'vi' ? 'Trường & Khối:' : 'School & Grade:'}</span>
                      <strong className="text-slate-900">{confirmedRegistration.schoolName} ({confirmedRegistration.grade})</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">{language === 'vi' ? 'Địa điểm:' : 'Location:'}</span>
                      <strong className="text-slate-900">{activeBatch.location}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">{language === 'vi' ? 'Thời gian:' : 'Schedule:'}</span>
                      <strong className="text-slate-900">{activeBatch.scheduleDate}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleCloseModal}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
                  >
                    {t.common.close}
                  </button>
                </div>
              </div>
            ) : (
              /* Registration Form */
              <form onSubmit={handleSubmitRegistration} className="space-y-4 text-xs">
                {submitError && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">{language === 'vi' ? 'Họ và tên học sinh *' : 'Student Full Name *'}</label>
                    <input
                      required
                      type="text"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder={language === "vi" ? "Nguyễn Văn A" : "Alex Nguyen"}
                      className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">{language === 'vi' ? 'Khối lớp *' : 'Grade Level *'}</label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
                    >
                      <option value="Lớp 10">{language === "vi" ? "Lớp 10 (THPT)" : "Grade 10"}</option>
                      <option value="Lớp 11">{language === "vi" ? "Lớp 11 (THPT)" : "Grade 11"}</option>
                      <option value="Lớp 12">{language === "vi" ? "Lớp 12 (THPT)" : "Grade 12"}</option>
                      <option value="Sinh viên / Tự do">{language === "vi" ? "Khác" : "Other / Independent"}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">{language === 'vi' ? 'Trường THPT đang theo học *' : 'Current High School *'}</label>
                  <input
                    required
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder={language === "vi" ? "THPT Chuyên Chu Văn An, THPT Dân tộc nội trú..." : "High School name..."}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">{language === 'vi' ? 'Email nhận vé trải nghiệm *' : 'Email to Receive Pass *'}</label>
                    <input
                      required
                      type="email"
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                      placeholder="student@gmail.com"
                      className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="font-bold text-slate-700">{language === 'vi' ? 'Số điện thoại' : 'Phone Number'} {!isInternational && '*'}</label>
                      <label className="inline-flex items-center gap-1 text-[11px] text-slate-500 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isInternational}
                          onChange={(e) => setIsInternational(e.target.checked)}
                          className="rounded text-indigo-600"
                        />
                        <span>{language === 'vi' ? 'Học sinh quốc tế' : 'International Student'}</span>
                      </label>
                    </div>
                    <input
                      type="tel"
                      value={studentPhone}
                      onChange={(e) => setStudentPhone(e.target.value)}
                      placeholder={isInternational ? (language === 'vi' ? 'Không bắt buộc nếu chưa có SIM VN' : 'Optional if no VN SIM') : '0912 345 678'}
                      className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Minor Guardian Contact */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider">
                    {language === 'vi' ? 'Thông tin Phụ huynh / Người giám hộ (dành cho học sinh dưới 18 tuổi):' : 'Parent / Guardian Contact (for students under 18):'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={guardianName}
                      onChange={(e) => setGuardianName(e.target.value)}
                      placeholder={language === "vi" ? "Họ tên phụ huynh" : "Parent / Guardian Name"}
                      className="w-full p-2 rounded-lg border border-slate-300 bg-white"
                    />
                    <input
                      type="tel"
                      value={guardianPhone}
                      onChange={(e) => setGuardianPhone(e.target.value)}
                      placeholder={language === "vi" ? "Số điện thoại phụ huynh" : "Guardian Phone Number"}
                      className="w-full p-2 rounded-lg border border-slate-300 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">{language === 'vi' ? 'Ghi chú hoặc nguyện vọng đặc biệt (nếu có)' : 'Special Requests or Notes (Optional)'}</label>
                  <input
                    type="text"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder={language === "vi" ? "Ví dụ: Ăn chay, say xe, cần hỗ trợ nghe thuyết minh song ngữ..." : "E.g. Vegetarian meal, motion sickness, bilingual commentary..."}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                {/* Consent Checkbox */}
                <label className="flex items-start gap-2 pt-2 cursor-pointer">
                  <input
                    required
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-[11px] text-slate-600 leading-relaxed">
                    {language === 'vi'
                      ? 'Tôi cam kết thông tin khai báo là chính xác, đồng ý tuân thủ nội quy an toàn lao động và hướng dẫn của trưởng đoàn CHẠM VIỆC trong suốt hành trình trải nghiệm.'
                      : 'I certify that the provided information is accurate and agree to adhere to workplace safety rules and CHẠM VIỆC trip coordinator instructions.'}
                  </span>
                </label>

                {/* Modal Footer */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50"
                  >
                    {t.common.cancel}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 disabled:opacity-50"
                  >
                    {isSubmitting ? t.common.loading : (language === 'vi' ? 'Xác nhận giữ chỗ ngay' : 'Confirm Registration')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
