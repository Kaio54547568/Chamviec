import os

code = '''import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  HelpCircle, 
  PlayCircle, 
  GraduationCap, 
  AlertTriangle, 
  TrendingUp, 
  CheckCircle2, 
  Bookmark, 
  ArrowRight,
  Info,
  ShieldCheck,
  Building,
  Tag,
  Search,
  Filter,
  Layers,
  Scale,
  X,
  Check,
  ExternalLink,
  ChevronRight,
  SlidersHorizontal,
  Compass
} from 'lucide-react';
import { StudentProfile, Career } from '../types';
import { generateRecommendations } from '../utils/recommendation';
import { saveStudentProfile } from '../utils/storage';
import { CAREERS_DATA } from '../data/careers';

interface RecommendationsViewProps {
  profile: StudentProfile;
  setProfile: React.Dispatch<React.SetStateAction<StudentProfile>>;
  onOpenTask: (taskId: string) => void;
  onSelectMajor: (majorId: string) => void;
}

// 20 Standard Groups
const CAREER_GROUPS_LIST = [
  { id: 'ALL', name: 'Tất cả 20 nhóm' },
  { id: 'cong-nghe-thong-tin', name: 'Công nghệ thông tin & Trí tuệ nhân tạo' },
  { id: 'ky-thuat-che-tao', name: 'Kỹ thuật - Chế tạo & Tự động hoá' },
  { id: 'dien-tu-ban-dan', name: 'Điện tử - Viễn thông & Bán dẫn' },
  { id: 'xay-dung-kien-truc', name: 'Xây dựng - Kiến trúc & Đô thị' },
  { id: 'y-khoa-suc-khoe', name: 'Y khoa - Dược học & Khoa học Sức khỏe' },
  { id: 'kinh-te-tai-chinh', name: 'Kinh tế - Tài chính & Ngân hàng' },
  { id: 'kinh-doanh-thuong-mai', name: 'Kinh doanh - Thương mại & Marketing' },
  { id: 'luat-chinh-tri', name: 'Luật học - Quản lý Nhà nước & Chính sách' },
  { id: 'giao-duc-su-pham', name: 'Giáo dục - Sư phạm & Khảo thí' },
  { id: 'khoa-hoc-tu-nhien', name: 'Khoa học Tự nhiên & Đời sống' },
  { id: 'nong-lam-thuy-san', name: 'Nông nghiệp - Lâm nghiệp & Thủy sản' },
  { id: 'khoa-hoc-xa-hoi', name: 'Khoa học Xã hội - Nhân văn & Tâm lý' },
  { id: 'ngon-ngu-quoc-te', name: 'Ngôn ngữ - Văn hoá & Quan hệ Quốc tế' },
  { id: 'truyen-thong-bao-chi', name: 'Truyền thông - Báo chí & Xuất bản' },
  { id: 'nghe-thuat-thiet-ke', name: 'Nghệ thuật - Thiết kế & Sáng tạo Số' },
  { id: 'du-lich-khach-san', name: 'Du lịch - Khách sạn & Ẩm thực' },
  { id: 'logistics-chuoi-cung-ung', name: 'Logistics - Vận tải & Chuỗi Cung ứng' },
  { id: 'nang-luong-moi-truong', name: 'Năng lượng - Môi trường & Biến đổi Khí hậu' },
  { id: 'the-thao-suc-khoe', name: 'Thể dục - Thể thao & Chăm sóc Thể chất' },
  { id: 'an-ninh-cong-nghe', name: 'An ninh mạng & An toàn Thông tin Quốc gia' },
];

function cleanVietnamese(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .trim();
}

export const RecommendationsView: React.FC<RecommendationsViewProps> = ({
  profile,
  setProfile,
  onOpenTask,
  onSelectMajor
}) => {
  const [activeTab, setActiveTab] = useState<'recommended' | 'directory'>('recommended');
  const [feedbackState, setFeedbackState] = useState<Record<string, string>>({});
  
  // Directory state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('ALL');
  const [selectedExpType, setSelectedExpType] = useState<string>('ALL');
  const [comparisonList, setComparisonList] = useState<Career[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [selectedCareerDetail, setSelectedCareerDetail] = useState<Career | null>(null);

  const snapshot = generateRecommendations(profile);

  const handleToggleSaveCareer = (careerId: string) => {
    const current = [...profile.savedCareers];
    const index = current.indexOf(careerId);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(careerId);
    }
    const updated = { ...profile, savedCareers: current };
    setProfile(updated);
    saveStudentProfile(updated);
  };

  const handleSetFeedback = (careerId: string, feedback: string) => {
    setFeedbackState({ ...feedbackState, [careerId]: feedback });
  };

  const handleToggleCompare = (career: Career) => {
    if (comparisonList.some(c => c.id === career.id)) {
      setComparisonList(comparisonList.filter(c => c.id !== career.id));
    } else {
      if (comparisonList.length >= 3) {
        return; // Max 3
      }
      setComparisonList([...comparisonList, career]);
    }
  };

  // Filter careers in Directory
  const filteredCareers = useMemo(() => {
    let result = CAREERS_DATA;

    if (selectedGroup !== 'ALL') {
      result = result.filter(c => c.group === selectedGroup);
    }

    if (selectedExpType !== 'ALL') {
      result = result.filter(c => c.experienceType === selectedExpType);
    }

    if (searchQuery.trim()) {
      const q = cleanVietnamese(searchQuery);
      result = result.filter(c => {
        const titleMatch = cleanVietnamese(c.title).includes(q);
        const engMatch = cleanVietnamese(c.englishTitle || '').includes(q);
        const summaryMatch = cleanVietnamese(c.shortSummary).includes(q);
        const tasksMatch = c.typicalTasks?.some(t => cleanVietnamese(t).includes(q));
        const synMatch = c.synonyms?.some(s => cleanVietnamese(s).includes(q));
        const subjectsMatch = c.highSchoolSubjects.some(s => cleanVietnamese(s).includes(q));
        return titleMatch || engMatch || summaryMatch || tasksMatch || synMatch || subjectsMatch;
      });
    }

    return result;
  }, [selectedGroup, selectedExpType, searchQuery]);

  return (
    <div className="space-y-8 pb-20">
      {/* View Switcher Top Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold">
              <Compass className="w-3.5 h-3.5 text-teal-600" />
              <span>Kho Dữ Liệu {CAREERS_DATA.length} Nghề Nghiệp & 20 Nhóm Ngành</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {activeTab === 'recommended' 
                ? 'Đề Xuất Hướng Nghiệp Theo Hồ Sơ Của Em'
                : `Khám Phá Toàn Bộ ${CAREERS_DATA.length} Nghề Nghiệp Chuẩn Quốc Gia`}
            </h1>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl shrink-0 self-start sm:self-center">
            <button
              onClick={() => setActiveTab('recommended')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'recommended'
                  ? 'bg-white text-teal-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Gợi ý cho em ({snapshot.recommendations.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('directory')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'directory'
                  ? 'bg-white text-teal-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-teal-600" />
              <span>Kho {CAREERS_DATA.length} Nghề</span>
            </button>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          {activeTab === 'recommended'
            ? 'Các gợi ý này được tổng hợp từ điểm số Holland (RIASEC), môn học yêu thích và hoạt động em đã thử nghiệm. CHẠM VIỆC không gắn nhãn em vào bất kỳ nghề cố định nào; mỗi nghề đều kèm theo lý do, đánh đổi và kỹ năng cần rèn luyện.'
            : `Hệ thống cơ sở dữ liệu hướng nghiệp toàn diện gồm 200 nghề nghiệp được phân bổ chính xác vào 20 nhóm ngành (10 nghề/nhóm), hỗ trợ tìm kiếm không dấu, so sánh đối đầu 3 nghề và liên kết trực tiếp phòng thí nghiệm 3D.`}
        </p>

        {activeTab === 'recommended' && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <em>Nguyên tắc minh bạch:</em> Điểm tương thích là chỉ số tham chiếu quy tắc thiết kế (rule-based score), không phải là xác suất trúng tuyển đại học hay tỷ lệ thành công trong tương lai.
            </span>
          </div>
        )}
      </div>

      {/* TAB 1: RECOMMENDED CAREERS */}
      {activeTab === 'recommended' && (
        <div className="space-y-6">
          {snapshot.recommendations.map((rec, index) => {
            const isSaved = profile.savedCareers.includes(rec.career.id);
            const feedback = feedbackState[rec.career.id];

            return (
              <div
                key={rec.career.id}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:border-teal-300 transition-all"
              >
                {/* Card Top Banner */}
                <div className="bg-gradient-to-r from-teal-900 to-emerald-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-teal-200">
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <span>Lĩnh vực: {rec.career.categoryLabel}</span>
                      <span>•</span>
                      <span>Nhóm RIASEC: {rec.career.riasecCodes.join(', ')}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                      {rec.career.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-right">
                      <div className="text-[10px] text-teal-200 font-medium uppercase tracking-wider">
                        Mức độ phù hợp tham khảo
                      </div>
                      <div className="text-lg font-black text-amber-300">
                        {rec.matchScore} <span className="text-xs font-normal text-white">/ 100</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleToggleSaveCareer(rec.career.id)}
                      className={`p-2.5 rounded-xl transition-colors ${
                        isSaved
                          ? 'bg-amber-500 text-slate-950 font-bold'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                      title={isSaved ? 'Đã lưu vào hồ sơ' : 'Lưu nghề này'}
                    >
                      <Bookmark className="w-5 h-5 fill-current" />
                    </button>
                  </div>
                </div>

                {/* Card Body Grid */}
                <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm">
                  {/* Workplace Photography & Short Summary */}
                  <div className="flex flex-col md:flex-row gap-5 items-stretch bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <div className="w-full md:w-64 h-44 sm:h-48 md:h-auto rounded-xl overflow-hidden shrink-0 relative bg-slate-900 group">
                      <img
                        src={rec.career.imageUrl || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'}
                        alt={rec.career.imageAlt || rec.career.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2 left-2 right-2 text-[10px] text-white/90 bg-slate-950/70 backdrop-blur-xs px-2 py-1 rounded">
                        <span>Môi trường: {rec.career.categoryLabel}</span>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-2">
                        <div className="text-[11px] font-bold text-teal-800 uppercase tracking-wider">
                          Tổng quan nghề nghiệp
                        </div>
                        <p className="text-slate-700 leading-relaxed text-sm font-medium">
                          {rec.career.shortSummary}
                        </p>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          <strong>Môi trường làm việc:</strong> {rec.career.workEnvironment}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                        <span><strong>Công cụ chính:</strong> {rec.career.toolsUsed.slice(0, 4).join(', ')}</span>
                        <span>·</span>
                        <span><strong>Môn học:</strong> {rec.career.highSchoolSubjects.join(', ')}</span>
                      </div>
                    </div>
                  </div>

                  {/* 4 Explanatory Pillars */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Pillar 1: Lý do phù hợp */}
                    <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/80 space-y-2">
                      <div className="flex items-center gap-2 text-teal-900 font-bold text-xs uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-teal-600" />
                        <span>1. Lý do phù hợp theo sở thích & bằng chứng</span>
                      </div>
                      <p className="text-slate-800 leading-relaxed font-medium">
                        {rec.hollandFitReason}
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                        {rec.evidenceFromProfile.map((evi, i) => (
                          <li key={i}>{evi}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Pillar 2: Đánh đổi thực tế */}
                    <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                      <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span>2. Khó khăn & Những đánh đổi thực tế</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 pl-1 leading-relaxed">
                        {rec.valuesTradeoffs.map((td, i) => (
                          <li key={i}>{td}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Pillar 3: Kỹ năng cần rèn luyện */}
                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-2">
                      <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                        <span>3. Kỹ năng cần phát triển thêm</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 pl-1">
                        {rec.skillsToCultivate.map((sk, i) => (
                          <li key={i}>{sk}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Pillar 4: Những dữ liệu còn thiếu */}
                    <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wider">
                        <Info className="w-4 h-4 text-slate-500" />
                        <span>4. Những dữ liệu hồ sơ còn thiếu để kết luận</span>
                      </div>
                      {rec.missingInformation.length > 0 ? (
                        <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                          {rec.missingInformation.map((mis, i) => (
                            <li key={i}>{mis}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-slate-600">Hồ sơ đã ghi nhận khá đầy đủ thông tin trải nghiệm cơ bản.</p>
                      )}
                    </div>
                  </div>

                  {/* Linked majors */}
                  <div className="pt-2">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-teal-600" />
                      <span>Các ngành đại học liên quan trực tiếp:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {rec.linkedMajors.map((m) => (
                        <button
                          key={m.id}
                          onClick={() => onSelectMajor(m.id)}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-teal-50 hover:text-teal-800 border border-slate-200 text-xs font-semibold transition-colors flex items-center gap-1.5"
                        >
                          <span>{m.name} ({m.code})</span>
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Call to action & Student Feedback */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 hidden sm:inline">Bước tiếp theo nên thử:</span>
                      <button
                        onClick={() => onOpenTask(rec.suggestedTask.id)}
                        className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-xs transition-colors flex items-center gap-2"
                      >
                        <PlayCircle className="w-4 h-4" />
                        <span>Thử nhiệm vụ mô phỏng: {rec.suggestedTask.title}</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-400">Gợi ý này có khớp với em?</span>
                      {feedback ? (
                        <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                          ✓ {feedback}
                        </span>
                      ) : (
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleSetFeedback(rec.career.id, 'Rất hợp cảm nhận')}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium"
                          >
                            Rất hợp
                          </button>
                          <button
                            onClick={() => handleSetFeedback(rec.career.id, 'Chưa thấy thuyết phục')}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium"
                          >
                            Chưa hợp
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 2: COMPLETE CAREER DIRECTORY (200 CAREERS) */}
      {activeTab === 'directory' && (
        <div className="space-y-6">
          {/* Controls: Search & Filters */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex flex-col md:flex-row gap-3">
              {/* Search input with unaccented support */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm theo tên nghề, tiếng Anh, kỹ năng, môn học THPT... (hỗ trợ có dấu và không dấu)"
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 text-xs font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Experience Type Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto shrink-0">
                {[
                  { id: 'ALL', label: `Tất cả (${CAREERS_DATA.length})` },
                  { id: '3D_INTERACTIVE', label: 'Mô phỏng 3D WebGL (4)' },
                  { id: 'SCENARIO_SIMULATION', label: 'Thử vai tình huống (6)' },
                  { id: 'CAREER_PROFILE', label: 'Hồ sơ nghề nghiệp' },
                ].map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedExpType(exp.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                      selectedExpType === exp.id
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {exp.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 20 Navigation Groups Badges */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-teal-600" />
                <span>20 Nhóm ngành định hướng (10 nghề mỗi nhóm):</span>
              </div>

              <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1">
                {CAREER_GROUPS_LIST.map((grp) => {
                  const count = grp.id === 'ALL' 
                    ? CAREERS_DATA.length 
                    : CAREERS_DATA.filter(c => c.group === grp.id).length;

                  return (
                    <button
                      key={grp.id}
                      onClick={() => setSelectedGroup(grp.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                        selectedGroup === grp.id
                          ? 'bg-teal-700 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60'
                      }`}
                    >
                      <span>{grp.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        selectedGroup === grp.id ? 'bg-teal-800 text-teal-200' : 'bg-white text-slate-500'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span>
                Hiển thị <strong>{filteredCareers.length}</strong> / <strong>{CAREERS_DATA.length}</strong> nghề nghiệp
              </span>
              {comparisonList.length > 0 && (
                <span className="text-teal-700 font-bold">
                  Đã chọn {comparisonList.length}/3 nghề để so sánh
                </span>
              )}
            </div>
          </div>

          {/* Careers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCareers.map((career) => {
              const isComparing = comparisonList.some(c => c.id === career.id);
              const isSaved = profile.savedCareers.includes(career.id);

              return (
                <div
                  key={career.id}
                  className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between group ${
                    isComparing
                      ? 'border-teal-500 ring-2 ring-teal-300 shadow-md'
                      : 'border-slate-200 hover:border-teal-400 hover:shadow-lg'
                  }`}
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={career.imageUrl}
                        alt={career.imageAlt || career.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                      {/* Experience Type Tag */}
                      <div className="absolute top-3 left-3">
                        {career.experienceType === '3D_INTERACTIVE' ? (
                          <span className="px-2.5 py-1 rounded-lg bg-cyan-500/90 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-xs flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            <span>Mô phỏng 3D</span>
                          </span>
                        ) : career.experienceType === 'SCENARIO_SIMULATION' ? (
                          <span className="px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-xs flex items-center gap-1">
                            <PlayCircle className="w-3 h-3" />
                            <span>Thử vai</span>
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 text-white text-[10px] font-bold border border-white/20">
                            {career.categoryLabel}
                          </span>
                        )}
                      </div>

                      {/* RIASEC Code */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-amber-400 text-slate-950 text-[10px] font-black font-mono">
                          {career.riasecCodes.join('')}
                        </span>
                        <button
                          onClick={() => handleToggleSaveCareer(career.id)}
                          className={`p-1.5 rounded-lg backdrop-blur-md transition-colors ${
                            isSaved ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-black/40 text-white hover:bg-black/60'
                          }`}
                          title="Lưu nghề này"
                        >
                          <Bookmark className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>

                      <div className="absolute bottom-2.5 left-3 right-3 text-white">
                        <div className="text-[10px] text-teal-300 font-medium truncate">
                          {career.englishTitle}
                        </div>
                        <h3 className="font-bold text-sm text-white truncate group-hover:text-amber-300 transition-colors">
                          {career.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content details */}
                    <div className="p-4 space-y-3">
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {career.shortSummary}
                      </p>

                      <div className="text-[11px] text-slate-500 space-y-1 pt-2 border-t border-slate-100">
                        <div className="line-clamp-1">
                          <strong>Môn THPT:</strong> {career.highSchoolSubjects.join(', ')}
                        </div>
                        <div className="line-clamp-1">
                          <strong>Công cụ:</strong> {career.toolsUsed.slice(0, 3).join(', ')}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between gap-2 mt-2">
                    <button
                      onClick={() => handleToggleCompare(career)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                        isComparing
                          ? 'bg-teal-700 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <Scale className="w-3.5 h-3.5" />
                      <span>{isComparing ? '✓ Đã chọn' : 'So sánh'}</span>
                    </button>

                    <button
                      onClick={() => setSelectedCareerDetail(career)}
                      className="px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs transition-colors flex items-center gap-1"
                    >
                      <span>Chi tiết</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* STICKY BOTTOM COMPARISON BAR (When 1-3 careers selected) */}
      {comparisonList.length > 0 && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-24 z-40 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center justify-between gap-4 animate-in slide-in-from-bottom-4">
          <div className="flex items-center gap-3">
            <Scale className="w-5 h-5 text-teal-400" />
            <div>
              <div className="text-xs font-bold text-white">
                Đang chọn {comparisonList.length}/3 nghề để so sánh
              </div>
              <div className="text-[10px] text-slate-400 truncate max-w-xs">
                {comparisonList.map(c => c.title).join(' • ')}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setComparisonList([])}
              className="text-xs text-slate-400 hover:text-white px-2 py-1"
            >
              Xóa chọn
            </button>
            <button
              onClick={() => setIsCompareModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <span>Xem Bảng So Sánh</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 3-CAREER COMPARISON MODAL */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Header */}
            <div className="sticky top-0 bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800 z-10">
              <div className="flex items-center gap-2.5">
                <Scale className="w-5 h-5 text-teal-400" />
                <h3 className="font-extrabold text-base sm:text-lg">
                  So Sánh Đối Đầu {comparisonList.length} Ngành Nghề
                </h3>
              </div>
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Table Comparison Grid */}
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="p-3 w-40 font-bold text-slate-500 uppercase tracking-wider bg-slate-50">
                      Tiêu chí so sánh
                    </th>
                    {comparisonList.map((c) => (
                      <th key={c.id} className="p-3 font-extrabold text-slate-900 text-sm">
                        <div className="text-teal-700 text-xs font-semibold">{c.categoryLabel}</div>
                        <div>{c.title}</div>
                        <div className="text-[10px] text-slate-500 font-normal">{c.englishTitle}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3 font-bold text-slate-700 bg-slate-50">Mã RIASEC</td>
                    {comparisonList.map(c => (
                      <td key={c.id} className="p-3">
                        <span className="px-2 py-0.5 rounded font-bold font-mono bg-amber-100 text-amber-900">
                          {c.riasecCodes.join(' - ')}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700 bg-slate-50">Tóm tắt nghề</td>
                    {comparisonList.map(c => (
                      <td key={c.id} className="p-3 text-slate-700 leading-relaxed">
                        {c.shortSummary}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700 bg-slate-50">Nhiệm vụ điển hình</td>
                    {comparisonList.map(c => (
                      <td key={c.id} className="p-3">
                        <ul className="list-disc list-inside space-y-1 text-slate-600">
                          {c.typicalTasks.slice(0, 3).map((t, idx) => (
                            <li key={idx}>{t}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700 bg-slate-50">Sản phẩm đầu ra</td>
                    {comparisonList.map(c => (
                      <td key={c.id} className="p-3 text-slate-700">
                        {c.deliverables.slice(0, 3).join(', ')}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700 bg-slate-50">Công cụ chính</td>
                    {comparisonList.map(c => (
                      <td key={c.id} className="p-3 text-slate-700">
                        {c.toolsUsed.slice(0, 4).join(', ')}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700 bg-slate-50">Khó khăn & Đánh đổi</td>
                    {comparisonList.map(c => (
                      <td key={c.id} className="p-3 text-rose-900 bg-rose-50/40 leading-relaxed">
                        {c.difficultiesAndTradeoffs[0]}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700 bg-slate-50">Môn học THPT thế mạnh</td>
                    {comparisonList.map(c => (
                      <td key={c.id} className="p-3 text-teal-800 font-semibold">
                        {c.highSchoolSubjects.join(', ')}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700 bg-slate-50">Lộ trình đào tạo</td>
                    {comparisonList.map(c => (
                      <td key={c.id} className="p-3 text-slate-700">
                        {c.entryPathway}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700 bg-slate-50">Thử nghiệm thực tế</td>
                    {comparisonList.map(c => (
                      <td key={c.id} className="p-3">
                        {c.simulationTaskId ? (
                          <button
                            onClick={() => {
                              setIsCompareModalOpen(false);
                              onOpenTask(c.simulationTaskId!);
                            }}
                            className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5"
                          >
                            <PlayCircle className="w-4 h-4" />
                            <span>Vào phòng thử vai</span>
                          </button>
                        ) : (
                          <span className="text-slate-400">Xem hồ sơ nghề</span>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SINGLE CAREER DETAIL MODAL */}
      {selectedCareerDetail && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Header with photo */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-slate-900 overflow-hidden">
              <img
                src={selectedCareerDetail.imageUrl}
                alt={selectedCareerDetail.imageAlt || selectedCareerDetail.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button
                onClick={() => setSelectedCareerDetail(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-black/50 hover:bg-black/80 text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className="px-2.5 py-1 rounded-lg bg-teal-500 text-slate-950 text-[10px] font-black uppercase">
                  {selectedCareerDetail.categoryLabel}
                </span>
                <h2 className="text-2xl font-black">{selectedCareerDetail.title}</h2>
                <p className="text-xs text-teal-200">{selectedCareerDetail.englishTitle}</p>
              </div>
            </div>

            <div className="p-6 space-y-5 text-xs sm:text-sm">
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">Mô tả công việc</h4>
                <p className="text-slate-700 leading-relaxed font-medium">{selectedCareerDetail.shortSummary}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="font-bold text-teal-900">Nhiệm vụ chính hàng ngày:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                    {selectedCareerDetail.typicalTasks.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
                  <h4 className="font-bold text-amber-900">Khó khăn & Đánh đổi thực tế:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 pl-1">
                    {selectedCareerDetail.difficultiesAndTradeoffs.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-100">
                  <div className="font-bold text-slate-500 uppercase text-[10px]">Môn học THPT:</div>
                  <div className="font-semibold text-slate-800 mt-1">{selectedCareerDetail.highSchoolSubjects.join(', ')}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-100">
                  <div className="font-bold text-slate-500 uppercase text-[10px]">Công cụ & Phần mềm:</div>
                  <div className="font-semibold text-slate-800 mt-1">{selectedCareerDetail.toolsUsed.join(', ')}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-100">
                  <div className="font-bold text-slate-500 uppercase text-[10px]">Nhóm sở thích Holland:</div>
                  <div className="font-bold text-amber-600 mt-1">{selectedCareerDetail.riasecCodes.join(' - ')}</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-1">
                <h4 className="font-bold text-blue-900">Lộ trình đào tạo & gia nhập nghề:</h4>
                <p className="text-slate-700">{selectedCareerDetail.entryPathway}</p>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  onClick={() => {
                    handleToggleCompare(selectedCareerDetail);
                    setSelectedCareerDetail(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                >
                  + Thêm vào bảng so sánh
                </button>
                {selectedCareerDetail.simulationTaskId && (
                  <button
                    onClick={() => {
                      const taskId = selectedCareerDetail.simulationTaskId!;
                      setSelectedCareerDetail(null);
                      onOpenTask(taskId);
                    }}
                    className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5"
                  >
                    <PlayCircle className="w-4 h-4" />
                    <span>Thử vai nghề này</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
'''

with open('/app/applet/src/components/RecommendationsView.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("RecommendationsView.tsx upgraded with 200 careers directory, 20 groups, and 3-way comparison!")
