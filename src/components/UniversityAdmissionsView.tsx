import React, { useState, useMemo, useEffect } from 'react';
import { 
  GraduationCap, 
  Search, 
  Filter, 
  ExternalLink, 
  AlertTriangle, 
  ShieldCheck, 
  Bookmark, 
  Layers, 
  X, 
  Check, 
  Sliders,
  Building,
  RotateCcw,
  Sparkles,
  MapPin,
  Calendar,
  DollarSign,
  HelpCircle,
  TrendingUp,
  Tag,
  BarChart3,
  BookOpen,
  Info,
  CheckCircle2,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { AdmissionRecord, University, StudentProfile } from '../types';
import { ADMISSION_RECORDS, UNIVERSITIES_DATA } from '../data/admissions';
import { ADMISSION_YEARS, latestAdmissionYear, isThptComparable, admissionCampus, admissionCategory } from '../utils/admissionData';
import { UniversityProgramDirectory, AdmissionsCoverage } from './UniversityProgramDirectory';
import { catalogState } from '../utils/catalog';
import { MAJORS_DATA, MAJOR_CATEGORIES } from '../data/majors';
import { removeVietnameseTones, matchQuery, matchUniversity, matchAdmissionRecord } from '../utils/vietnameseSearch';
import { saveStudentProfile } from '../utils/storage';
import { Admission2026Center } from './Admission2026Center';
import { useLanguage } from '../i18n/LanguageContext';
import {
  localizeUniversity,
  localizeAdmissionRecord,
  localizeMajorName,
  localizeRegion,
  localizeOwnership
} from '../utils/i18nData';

interface UniversityAdmissionsViewProps {
  profile: StudentProfile;
  setProfile: React.Dispatch<React.SetStateAction<StudentProfile>>;
  selectedMajorFilter?: string | null;
  onAskAiAboutSchool?: (question: string) => void;
}

export const UniversityAdmissionsView: React.FC<UniversityAdmissionsViewProps> = ({
  profile,
  setProfile,
  selectedMajorFilter = null,
  onAskAiAboutSchool
}) => {
  const { t, language } = useLanguage();
  // Search & Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all'); // Toàn quốc, Miền Bắc, Miền Trung, Miền Nam
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all'); // Tất cả, Công lập, Tư thục, Quốc tế
  const [selectedMajorCategory, setSelectedMajorCategory] = useState<string>('all');
  const [selectedMajorId, setSelectedMajorId] = useState<string>(selectedMajorFilter || 'all');
  const [selectedCombination, setSelectedCombination] = useState<string>('all'); // A00, D01, etc.
  const [selectedYear, setSelectedYear] = useState<number>(latestAdmissionYear());

  const [viewMode, setViewMode] = useState<'admissions2026' | 'search' | 'programs'>('search');
  const [resultsPage, setResultsPage] = useState(0);
  // Score Filter (Section 9)
  const [enableScoreFilter, setEnableScoreFilter] = useState<boolean>(false);
  const [estimatedScore, setEstimatedScore] = useState<number>(profile.estimatedScore || 25.0);

  // Comparison & Saved
  const [comparisonList, setComparisonList] = useState<string[]>([]);
  const [showComparisonModal, setShowComparisonModal] = useState<boolean>(false);



  // Dynamic province list based on selectedRegion (Section 5)
  const provinceList = useMemo(() => {
    const locations = ADMISSION_RECORDS.map(record => {
      const uni = UNIVERSITIES_DATA.find(u => u.id === record.universityId);
      return uni ? admissionCampus(record, uni) : {province:null,region:null};
    }).filter(location => selectedRegion === 'all' || location.region === selectedRegion);
    const list = Array.from(new Set(locations.map(location => location.province))).filter((p):p is string => !!p);
    return list.sort((a, b) => a.localeCompare(b, 'vi'));
  }, [selectedRegion]);

  // Dynamic available majors based on selectedMajorCategory
  const availableMajorsList = useMemo(() => {
    const base = selectedMajorCategory === 'all'
      ? MAJORS_DATA
      : MAJORS_DATA.filter((m) => m.category === selectedMajorCategory);
    const listedNames = new Set(base.map(m => m.name));
    const extra = [...new Map(ADMISSION_RECORDS.filter(r => (selectedYear === 0 || r.year === selectedYear)
      && (selectedMajorCategory === 'all' || admissionCategory(r) === selectedMajorCategory)
      && !listedNames.has(r.majorName)).map(r => [r.majorName, {id:`name:${r.majorName}`,name:r.majorName}])).values()];
    return [...base, ...extra].map((m) => ({
      ...m,
      displayName: localizeMajorName(m.name, language)
    }));
  }, [selectedMajorCategory, language, selectedYear]);

  const MAJOR_CATEGORY_EN: Record<string, string> = {
    all: 'All Major Categories',
    'cong-nghe': 'Engineering & Information Technology',
    'kinh-te': 'Economics – Business & Management',
    'suc-khoe': 'Medicine – Pharmacy & Health Sciences',
    'su-pham': 'Education & Teacher Training',
    'xa-hoi': 'Social Sciences – Humanities – Law',
    'nghe-thuat': 'Arts – Design – Architecture',
    'nong-nghiep': 'Agriculture – Environment – Biotech'
  };

  // Standard combinations list (including 2025 new combinations)
  const COMBINATIONS_LIST = language === 'vi'
    ? [
        { code: 'all', label: 'Tất cả tổ hợp' },
        { code: 'K01', label: 'K01 (Toán, Vật lý, Tin học - Mới 2025)' },
        { code: 'Toán-Tin-Anh', label: 'Toán, Tin học, Tiếng Anh (Mới 2025)' },
        { code: 'A00', label: 'A00 (Toán, Vật lý, Hóa học)' },
        { code: 'A01', label: 'A01 (Toán, Vật lý, Tiếng Anh)' },
        { code: 'B00', label: 'B00 (Toán, Hóa học, Sinh học)' },
        { code: 'B08', label: 'B08 (Toán, Sinh học, Tiếng Anh)' },
        { code: 'C00', label: 'C00 (Ngữ văn, Lịch sử, Địa lý)' },
        { code: 'D01', label: 'D01 (Toán, Ngữ văn, Tiếng Anh)' },
        { code: 'D07', label: 'D07 (Toán, Hóa học, Tiếng Anh)' },
        { code: 'TSA', label: 'Đánh giá tư duy TSA (Bách khoa)' },
        { code: 'ĐGNL', label: 'Đánh giá năng lực (HSA/ĐHQG)' }
      ]
    : [
        { code: 'all', label: 'All Subject Combinations' },
        { code: 'K01', label: 'K01 (Math, Physics, Informatics - New 2025)' },
        { code: 'Toán-Tin-Anh', label: 'Math, Informatics, English (New 2025)' },
        { code: 'A00', label: 'A00 (Math, Physics, Chemistry)' },
        { code: 'A01', label: 'A01 (Math, Physics, English)' },
        { code: 'B00', label: 'B00 (Math, Chemistry, Biology)' },
        { code: 'B08', label: 'B08 (Math, Biology, English)' },
        { code: 'C00', label: 'C00 (Literature, History, Geography)' },
        { code: 'D01', label: 'D01 (Math, Literature, English)' },
        { code: 'D07', label: 'D07 (Math, Chemistry, English)' },
        { code: 'TSA', label: 'TSA Thinking Skills Assessment (HUST)' },
        { code: 'ĐGNL', label: 'Aptitude Test (HSA / VNU)' }
      ];

  // Toggle Save Admission
  const handleToggleSaveAdmission = (id: string) => {
    const current = [...profile.savedAdmissions];
    const index = current.indexOf(id);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(id);
    }
    const updated = { ...profile, savedAdmissions: current };
    setProfile(updated);
    saveStudentProfile(updated);
  };

  // Toggle Save University
  const handleToggleSaveUniversity = (uniId: string) => {
    const current = [...(profile.savedUniversities || [])];
    const index = current.indexOf(uniId);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(uniId);
    }
    const updated = { ...profile, savedUniversities: current };
    setProfile(updated);
    saveStudentProfile(updated);
  };

  // Comparison Handlers
  const handleToggleComparison = (id: string) => {
    if (comparisonList.includes(id)) {
      setComparisonList(comparisonList.filter((item) => item !== id));
    } else {
      if (comparisonList.length >= 3) {
        return;
      }
      setComparisonList([...comparisonList, id]);
    }
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('all');
    setSelectedProvince('all');
    setSelectedType('all');
    setSelectedMajorCategory('all');
    setSelectedMajorId('all');
    setSelectedCombination('all');
    setSelectedYear(latestAdmissionYear());
    setEnableScoreFilter(false);
  };

  // Filter Engine with AND between groups & Accent-Insensitive search
  const filteredRecords = useMemo(() => {
    return ADMISSION_RECORDS.filter((rec) => {
      const uni = UNIVERSITIES_DATA.find((u) => u.id === rec.universityId);
      if (!uni) return false;

      // 1. Search Query: Accent-Insensitive on University name, aliases, code, major name, major code
      if (searchQuery.trim()) {
        const matchesRecord = matchAdmissionRecord(rec, searchQuery, uni);
        if (!matchesRecord) return false;
      }

      if (enableScoreFilter && !isThptComparable(rec)) return false;

      // 2. Year Filter
      if (selectedYear !== 0 && rec.year !== selectedYear) {
        return false;
      }

      // 3. Region Filter
      if (selectedRegion !== 'all') {
        if (admissionCampus(rec, uni).region !== selectedRegion) return false;
      }

      // 4. Province Filter
      if (selectedProvince !== 'all') {
        if (admissionCampus(rec, uni).province !== selectedProvince) return false;
      }

      // 5. Ownership Type
      if (selectedType !== 'all') {
        if (uni.ownershipType !== selectedType) return false;
      }

      // 6. Major Category
      if (selectedMajorCategory !== 'all') {
        if (admissionCategory(rec) !== selectedMajorCategory) {
          return false;
        }
      }

      // 7. Specific Major Filter
      if (selectedMajorId !== 'all') {
        if (selectedMajorId.startsWith('name:') && rec.majorName !== selectedMajorId.slice(5)) return false;
        const targetMajor = MAJORS_DATA.find((m) => m.id === selectedMajorId);
        if (targetMajor) {
          const match =
            rec.majorName.toLowerCase().includes(targetMajor.name.toLowerCase()) ||
            targetMajor.name.toLowerCase().includes(rec.majorName.toLowerCase()) ||
            rec.majorCode === targetMajor.code;
          if (!match) return false;
        }
      }

      // 8. Subject Combination Filter
      if (selectedCombination !== 'all') {
        const hasCombo =
          (rec.subjectCombinations && rec.subjectCombinations.includes(selectedCombination)) ||
          rec.subjectCombination.includes(selectedCombination);
        if (!hasCombo) return false;
      }

      return true;
    });
  }, [
    searchQuery,
    selectedYear,
    selectedRegion,
    selectedProvince,
    selectedType,
    selectedMajorCategory,
    selectedMajorId,
    selectedCombination,
    enableScoreFilter
  ]);

  useEffect(() => setResultsPage(0), [searchQuery, selectedYear, selectedRegion, selectedProvince, selectedType,
    selectedMajorCategory, selectedMajorId, selectedCombination, enableScoreFilter]);
  const resultPages = Math.max(1, Math.ceil(filteredRecords.length / 50));
  const resultPage = Math.min(resultsPage, resultPages - 1);
  const visibleRecords = filteredRecords.slice(resultPage * 50, (resultPage + 1) * 50);

  // Group by Score Category if enabled (Section 9)
  const categorizedRecords = useMemo(() => {
    if (!enableScoreFilter) {
      return { reachable: filteredRecords, consider: [] as AdmissionRecord[] };
    }

    const reachable: AdmissionRecord[] = [];
    const consider: AdmissionRecord[] = [];

    filteredRecords.forEach((rec) => {
      // For standard 30-point scale:
      if (isThptComparable(rec)) {
        if (rec.cutoffScore <= estimatedScore) {
          reachable.push(rec);
        } else {
          consider.push(rec);
        }
      } else {
        // Other scales (e.g. 1200)
        consider.push(rec);
      }
    });

    return { reachable, consider };
  }, [filteredRecords, enableScoreFilter, estimatedScore]);

  return (
    <div className="space-y-8 pb-16">
      {/* Header & Official Warning Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
              <span>{language === 'vi' ? '23 trường · Dữ liệu 2024–2026' : '23 universities · 2024–2026 data'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.admissions.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mt-1 leading-relaxed">
              {language === 'vi' ? 'Tra cứu điểm trúng tuyển theo năm, phương thức và thang điểm. Mỗi bản ghi ghi rõ nguồn chính thức hoặc nguồn tham khảo cần đối chiếu.' : 'Browse admission cutoffs by year, method and score scale. Each record identifies official sources or references requiring confirmation.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetFilters}
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Đặt lại các bộ lọc"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.admissions.resetFilters}</span>
            </button>
          </div>
        </div>

        {/* VIEW NAVIGATION TABS */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl">
            <button onClick={() => setViewMode('programs')} className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold ${viewMode === 'programs' ? 'bg-white text-teal-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}>
              {language === 'vi' ? 'Danh mục ngành của 23 trường' : 'Programs at 23 universities'}
            </button>
            <button
              onClick={() => setViewMode('admissions2026')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                viewMode === 'admissions2026'
                  ? 'bg-gradient-to-r from-teal-700 to-emerald-700 text-white shadow-xs'
                  : 'text-teal-800 hover:bg-teal-50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{t.admissions.tab2026}</span>
              <span className="px-1.5 py-0.5 rounded-md bg-amber-400 text-slate-950 text-[10px] font-black">
                {language === 'vi' ? 'MỚI' : 'NEW'}
              </span>
            </button>
            <button
              onClick={() => setViewMode('search')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                viewMode === 'search'
                  ? 'bg-white text-teal-900 shadow-xs ring-1 ring-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>{t.admissions.tabSearch}</span>
            </button>

          </div>

          <div className="text-xs text-slate-500 font-medium hidden md:block">
            {viewMode === 'admissions2026'
              ? (language === 'vi'
                  ? 'Quy chế Bộ GD&ĐT 2026, Kho 100 Đề ĐGNL & Quà tặng EIE Education'
                  : 'MOET 2026 Regulations, 100+ Competency Exams & EIE Scholarships')
              : viewMode === 'search' 
              ? (language === 'vi'
                  ? `Hiển thị ${filteredRecords.length} phương án tuyển sinh`
                  : `Showing ${filteredRecords.length} admission records`)
              : ''
            }
          </div>
        </div>

        {/* Mandatory Regulatory Warning (Section 9 & 15) */}
        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-300 text-amber-950 text-xs sm:text-sm space-y-1">
          <div className="flex items-center gap-2 font-bold text-amber-900">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>{t.admissions.rulesWarningTitle}</span>
          </div>
          <p className="leading-relaxed pl-6">
            <strong>1.</strong> {t.admissions.rulesWarning1} <br />
            <strong>2.</strong> {t.admissions.rulesWarning2}
          </p>
        </div>
      </div>

      {catalogState.source !== 'database' && <p className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900" role="status">
        {catalogState.source === 'bundled'
          ? (language === 'vi' ? 'Chưa tải được danh mục mới. Đang xem bản lưu tham khảo ngày 07/11/2026.' : 'The current catalog is unavailable. Showing the reference snapshot dated 7 November 2026.')
          : (language === 'vi' ? 'Chưa tải được dữ liệu tuyển sinh. Vui lòng thử tải lại trang.' : 'Admission data is unavailable. Please reload the page.')}
      </p>}
      <AdmissionsCoverage />
      {/* Admission records, program directory and existing admissions resources */}
      {viewMode === 'admissions2026' ? (
        <Admission2026Center onOpenChamAi={onAskAiAboutSchool} />
      ) : viewMode === 'programs' ? (
        <UniversityProgramDirectory />
      ) : (
        /* ========================================================= */
        /* STANDARD SEARCH & BROWSE ADMISSIONS VIEW                  */
        /* ========================================================= */
        <>
          <div className="rounded-2xl border border-teal-200 bg-teal-50 p-4 text-sm text-teal-950">
            {language === 'vi'
              ? 'Tra cứu điểm trúng tuyển 2024–2026. Mỗi bản ghi ghi rõ phương thức, thang điểm và nguồn công bố; dữ liệu còn thiếu không được thay bằng điểm sàn hoặc điểm ước tính.'
              : 'Browse 2024–2026 admission cutoffs with method, score scale and original source. Missing cutoffs are never replaced by application floors or estimates.'}
          </div>

      {/* Comparison Floating Bar */}
      {comparisonList.length > 0 && (
        <div className="sticky top-20 z-30 bg-slate-900 text-white p-4 rounded-2xl shadow-xl flex items-center justify-between gap-4 border border-slate-700 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-teal-400" />
            <div>
              <div className="text-xs font-bold">
                {language === 'vi'
                  ? `Đang chọn ${comparisonList.length}/3 phương án để so sánh`
                  : `Selected ${comparisonList.length}/3 admission options to compare`}
              </div>
              <div className="text-[11px] text-slate-400 hidden sm:block">
                {language === 'vi'
                  ? 'Đối chiếu điểm chuẩn, tổ hợp, học phí và điều kiện phụ cạnh nhau.'
                  : 'Compare cutoff scores, subject combinations, tuition, and sub-criteria side by side.'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setComparisonList([])}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300"
            >
              {language === 'vi' ? 'Hủy' : 'Clear'}
            </button>
            <button
              onClick={() => setShowComparisonModal(true)}
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-xs"
            >
              {language === 'vi' ? 'Xem bảng so sánh ngay' : 'Open Comparison Table'}
            </button>
          </div>
        </div>
      )}

      {/* ADVANCED MULTI-GROUP FILTER PANEL */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
            <Filter className="w-4 h-4 text-teal-600" />
            <span>{language === 'vi' ? 'Bộ lọc tuyển sinh đa tiêu chí' : 'Multi-Criteria Admissions Filter'}</span>
          </div>
          <span className="text-xs text-slate-400">
            {language === 'vi' ? (
              <>Hiển thị <strong>{filteredRecords.length}</strong> kết quả phù hợp</>
            ) : (
              <>Showing <strong>{filteredRecords.length}</strong> matching records</>
            )}
          </span>
        </div>

        {/* Row 1: Search Keyword & Region & Province */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Keyword Search with Accentless & Alias support */}
          <div className="relative sm:col-span-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'vi'
                  ? 'Tìm theo tên trường, mã trường (BKA, FTU...), tên ngành, tổ hợp...'
                  : 'Search by university name, code (BKA, FTU...), major, combination...'
              }
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          {/* FILTER 1: Region */}
          <div>
            <select
              value={selectedRegion}
              onChange={(e) => {
                const newRegion = e.target.value;
                setSelectedRegion(newRegion);
                setSelectedProvince('all');
              }}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white font-medium"
            >
              <option value="all">{language === 'vi' ? 'Khu vực: Toàn quốc' : 'Region: Nationwide'}</option>
              <option value="Miền Bắc">{language === 'vi' ? 'Miền Bắc' : 'Northern Vietnam'}</option>
              <option value="Miền Trung">{language === 'vi' ? 'Miền Trung' : 'Central Vietnam'}</option>
              <option value="Miền Nam">{language === 'vi' ? 'Miền Nam' : 'Southern Vietnam'}</option>
            </select>
          </div>

          {/* FILTER 2: Province (Dynamically cascades based on Region) */}
          <div>
            <select
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white font-medium"
            >
              <option value="all">
                {language === 'vi'
                  ? `Tỉnh / Thành phố: ${selectedRegion === 'all' ? 'Tất cả' : selectedRegion}`
                  : `Province / City: ${selectedRegion === 'all' ? 'All' : localizeRegion(selectedRegion, 'en')}`}
              </option>
              {provinceList.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 2: Ownership Type, Major Category, Specific Major, Combination, Year */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* FILTER 3: Ownership Type */}
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white font-medium"
            >
              <option value="all">{language === 'vi' ? 'Loại trường: Tất cả' : 'Institution Type: All'}</option>
              <option value="Công lập">{language === 'vi' ? 'Trường Công lập' : 'Public University'}</option>
              <option value="Tư thục">{language === 'vi' ? 'Trường Tư thục' : 'Private University'}</option>
              <option value="Quốc tế">{language === 'vi' ? 'Trường Quốc tế' : 'International University'}</option>
            </select>
          </div>

          {/* FILTER 4A: Major Category */}
          <div>
            <select
              value={selectedMajorCategory}
              onChange={(e) => {
                const newCat = e.target.value;
                setSelectedMajorCategory(newCat);
                setSelectedMajorId('all');
              }}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white font-medium"
            >
              {MAJOR_CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {language === 'vi' ? c.name : (MAJOR_CATEGORY_EN[c.id] || c.name)}
                </option>
              ))}
            </select>
          </div>

          {/* FILTER 4B: Specific Major (Filtered by Category) */}
          <div>
            <select
              value={selectedMajorId}
              onChange={(e) => setSelectedMajorId(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white font-medium"
            >
              <option value="all">{language === 'vi' ? 'Ngành học: Tất cả ngành' : 'Major: All Majors'}</option>
              {availableMajorsList.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.displayName}
                </option>
              ))}
            </select>
          </div>

          {/* FILTER 5: Combination */}
          <div>
            <select
              value={selectedCombination}
              onChange={(e) => setSelectedCombination(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white font-medium"
            >
              {COMBINATIONS_LIST.map((cb) => (
                <option key={cb.code} value={cb.code}>
                  {cb.label}
                </option>
              ))}
            </select>
          </div>

          {/* FILTER 6: Year Selector */}
          <div>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white font-semibold text-slate-800"
            >
              {ADMISSION_YEARS.map(year => <option key={year} value={year}>
                {language === 'vi' ? `Năm dữ liệu: ${year}` : `Data year: ${year}`}
              </option>)}
              <option value={0}>{language === 'vi' ? 'Tất cả các năm (2024–2026)' : 'All years (2024–2026)'}</option>
            </select>
          </div>
        </div>

        {/* Row 3: ESTIMATED SCORE FILTER (Section 9) */}
        <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/80 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="enableScore"
                checked={enableScoreFilter}
                onChange={(e) => setEnableScoreFilter(e.target.checked)}
                className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500"
              />
              <label htmlFor="enableScore" className="text-xs font-bold text-teal-950 cursor-pointer">
                {language === 'vi'
                  ? 'Lọc theo Điểm thi tốt nghiệp THPT dự kiến (Thang 30)'
                  : 'Filter by Estimated High School Graduation Exam Score (30-Point Scale)'}
              </label>
            </div>

            {enableScoreFilter && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-600 font-medium">
                  {language === 'vi' ? 'Mức điểm của bạn:' : 'Your estimated score:'}
                </span>
                <input
                  type="number"
                  step="0.1"
                  min="10"
                  max="30"
                  value={estimatedScore}
                  onChange={(e) => setEstimatedScore(parseFloat(e.target.value) || 0)}
                  className="w-20 px-2 py-1 rounded-lg border border-teal-300 text-xs font-bold text-center text-teal-800 focus:outline-none bg-white"
                />
                <span className="text-xs font-bold text-teal-700">{language === 'vi' ? 'điểm' : 'pts'}</span>
              </div>
            )}
          </div>

          {enableScoreFilter && (
            <div className="space-y-1.5 pt-1 text-xs">
              <input
                type="range"
                min="15"
                max="30"
                step="0.25"
                value={estimatedScore}
                onChange={(e) => setEstimatedScore(parseFloat(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer"
              />
              <div className="flex items-center justify-between text-[11px] text-teal-800">
                <span>15 {language === 'vi' ? 'điểm' : 'pts'}</span>
                <span className="font-semibold">
                  {language === 'vi' ? `Đang chọn: ${estimatedScore} điểm` : `Selected: ${estimatedScore} pts`}
                </span>
                <span>30 {language === 'vi' ? 'điểm' : 'pts'}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RESULTS LIST: Divided into "Có thể tham khảo" vs "Cần cân nhắc" if score filter is enabled */}
      <div className="space-y-6">
        {enableScoreFilter && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
              <div className="font-bold text-xs text-emerald-900 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>
                  {language === 'vi'
                    ? `Có thể tham khảo (${categorizedRecords.reachable.length})`
                    : `Within Reach / Target (${categorizedRecords.reachable.length})`}
                </span>
              </div>
              <p className="text-[11px] text-emerald-700 mt-1 leading-normal">
                {language === 'vi'
                  ? `Điểm chuẩn các năm trước tương đối gần hoặc thấp hơn điểm dự kiến ${estimatedScore} của bạn.`
                  : `Historical cutoffs do not exceed your estimated score (${estimatedScore}).`}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
              <div className="font-bold text-xs text-amber-900 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>
                  {language === 'vi'
                    ? `Cần cân nhắc & Nỗ lực thêm (${categorizedRecords.consider.length})`
                    : `Reach / Ambitious Options (${categorizedRecords.consider.length})`}
                </span>
              </div>
              <p className="text-[11px] text-amber-700 mt-1 leading-normal">
                {language === 'vi'
                  ? 'Điểm chuẩn lịch sử cao hơn đáng kể; cần xây dựng phương án dự phòng hoặc nỗ lực nâng điểm.'
                  : 'Historical cutoffs are higher than your current estimate; prepare backup options or aim for higher exam scores.'}
              </p>
            </div>
          </div>
        )}

        {/* RESULTS TABLE */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-bold uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 whitespace-nowrap">{language === 'vi' ? 'Chọn / Lưu' : 'Compare / Save'}</th>
                  <th className="p-3.5 min-w-[210px]">{language === 'vi' ? 'Trường / Địa điểm' : 'University / Location'}</th>
                  <th className="p-3.5 min-w-[190px]">{language === 'vi' ? 'Ngành & Mã xét tuyển' : 'Major & Admission Code'}</th>
                  <th className="p-3.5 whitespace-nowrap">{language === 'vi' ? 'Chương trình' : 'Program'}</th>
                  <th className="p-3.5 whitespace-nowrap">{language === 'vi' ? 'Năm' : 'Year'}</th>
                  <th className="p-3.5 min-w-[150px]">{language === 'vi' ? 'Phương thức' : 'Method'}</th>
                  <th className="p-3.5 min-w-[160px]">{language === 'vi' ? 'Tổ hợp xét tuyển' : 'Combinations'}</th>
                  <th className="p-3.5 whitespace-nowrap text-teal-800 font-extrabold">{language === 'vi' ? 'Điểm chuẩn' : 'Cutoff Score'}</th>
                  <th className="p-3.5 min-w-[140px]">{language === 'vi' ? 'Thang & Cách tính' : 'Scale & Formula'}</th>
                  <th className="p-3.5 min-w-[170px]">{language === 'vi' ? 'Học phí & Tiêu chí phụ' : 'Tuition & Sub-criteria'}</th>
                  <th className="p-3.5 whitespace-nowrap">{language === 'vi' ? 'Nguồn & Trợ lý' : 'Source & AI'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80">
                {filteredRecords.length === 0 ? (
                  <tr>
                    <td colSpan={11} className="p-8 text-center text-slate-400">
                      {language === 'vi'
                        ? 'Không tìm thấy dữ liệu nào phù hợp với bộ lọc hiện tại. Hãy bấm "Đặt lại bộ lọc" để tìm kiếm lại.'
                        : 'No admission records match your current filters. Click "Reset Filters" to start over.'}
                    </td>
                  </tr>
                ) : (
                  visibleRecords.map((rawRec) => {
                    const rec = localizeAdmissionRecord(rawRec, language);
                    const rawUni = UNIVERSITIES_DATA.find((u) => u.id === rawRec.universityId);
                    const uni = rawUni ? localizeUniversity(rawUni, language) : undefined;
                    const isSaved = profile.savedAdmissions.includes(rec.id);
                    const isCompared = comparisonList.includes(rec.id);

                    return (
                      <tr
                        key={rec.id}
                        className={`hover:bg-teal-50/40 transition-colors ${
                          isCompared ? 'bg-amber-50/70' : ''
                        }`}
                      >
                        {/* Comparison & Bookmark */}
                        <td className="p-3.5 min-w-[160px] max-w-[260px] whitespace-normal">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => handleToggleComparison(rec.id)}
                              className={`p-1.5 rounded-lg text-xs font-semibold border transition-all ${
                                isCompared
                                  ? 'bg-amber-500 text-slate-950 border-amber-600'
                                  : 'bg-white text-slate-600 hover:bg-slate-100 border-slate-200'
                              }`}
                              title={language === 'vi' ? 'Thêm vào danh sách so sánh' : 'Add to comparison'}
                            >
                              <Layers className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => handleToggleSaveAdmission(rec.id)}
                              className={`p-1.5 rounded-lg text-xs transition-colors ${
                                isSaved
                                  ? 'text-teal-700 bg-teal-100'
                                  : 'text-slate-400 hover:text-slate-600 bg-slate-50'
                              }`}
                              title={isSaved ? (language === 'vi' ? 'Đã lưu' : 'Saved') : (language === 'vi' ? 'Lưu lại' : 'Save')}
                            >
                              <Bookmark className="w-3.5 h-3.5 fill-current" />
                            </button>
                          </div>
                        </td>

                        {/* University & Location */}
                        <td className="p-3.5">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-900 leading-snug">
                              {rec.universityName}
                            </span>
                            {uni?.institutionCode && (
                              <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
                                {uni.institutionCode}
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            <span>{rec.campus || uni?.province}</span>
                            <span>•</span>
                            <span className="font-semibold text-slate-600">{uni?.ownershipType}</span>
                          </div>
                        </td>

                        {/* Major */}
                        <td className="p-3.5">
                          <div className="font-bold text-teal-800 leading-snug">
                            {rec.majorName}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                            {language === 'vi' ? 'Mã:' : 'Code:'} {rec.admissionCode || rec.majorCode}
                          </div>
                        </td>

                        {/* Program */}
                        <td className="p-3.5 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200">
                            {rec.programName || rec.program}
                          </span>
                        </td>

                        {/* Year */}
                        <td className="p-3.5 whitespace-nowrap">
                          <span className="font-bold text-slate-900 px-2 py-0.5 rounded-md bg-teal-50 text-teal-900 border border-teal-200 text-xs">{rec.year}</span>
                        </td>

                        {/* Method */}
                        <td className="p-3.5 text-slate-700">
                          {rec.method}
                        </td>

                        {/* Combinations */}
                        <td className="p-3.5 font-medium text-slate-800">
                          {rec.subjectCombination}
                        </td>

                        {/* Cutoff Score */}
                        <td className="p-3.5 whitespace-nowrap">
                          <span className={`font-black text-sm ${rec.scoreType === 'floor' ? 'text-indigo-700' : 'text-teal-700'}`}>
                            {rec.cutoffScore}
                          </span>
                          {rec.scoreType === 'floor' && (
                            <span className="block text-[10px] text-indigo-600 font-medium">
                              {language === 'vi' ? 'Điểm sàn nhận hồ sơ' : 'Application floor'}
                            </span>
                          )}
                        </td>

                        {/* Scale & Formula */}
                        <td className="p-3.5 text-slate-600">
                          <div className="font-semibold text-slate-800">{rec.scoreScale}</div>
                          <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                            {rec.calculationFormula}
                          </div>
                        </td>

                        {/* Tuition & Subcriteria */}
                        <td className="p-3.5 text-slate-600">
                          <div className="text-[11px] text-slate-700 font-medium">
                            {rec.tuitionInfo || rec.tuition}
                          </div>
                          {rec.subCriteria && (
                            <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                              <strong>{language === 'vi' ? 'Phụ:' : 'Sub:'}</strong> {rec.subCriteria}
                            </div>
                          )}
                        </td>

                        {/* Source URL & CHẠM AI Trigger */}
                        <td className="p-3.5 whitespace-nowrap space-y-1">
                          <div>
                            <a
                              href={rec.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 hover:text-teal-900 underline"
                              title={rec.sourceDocument}
                            >
                              <span>{rec.isVerifiedOfficial
                                ? (language === 'vi' ? 'Nguồn của trường ↗' : 'University source ↗')
                                : (language === 'vi' ? 'Nguồn tổng hợp ↗' : 'Reference source ↗')}</span>
                            </a>
                            <div className="text-[10px] text-slate-400">
                              {language === 'vi' ? 'Đối chiếu:' : 'Reviewed:'} {rec.verifiedDate}
                            </div>
                            {!rec.isVerifiedOfficial && <p className="text-[10px] text-amber-700">{language === 'vi' ? 'Chưa đối chiếu văn bản trường' : 'University verification pending'}</p>}
                          </div>

                          {onAskAiAboutSchool && (
                            <button
                              onClick={() =>
                                onAskAiAboutSchool(
                                  language === 'vi'
                                    ? `Hãy giải thích chi tiết về cơ hội việc làm và chương trình đào tạo ngành ${rec.majorName} tại ${rec.universityName}?`
                                    : `Please explain the curriculum and career opportunities for ${rec.majorName} at ${rec.universityName}.`
                                )
                              }
                              className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-2 py-0.5 rounded border border-amber-200"
                            >
                              <Sparkles className="w-2.5 h-2.5" />
                              <span>{language === 'vi' ? 'Hỏi CHẠM AI' : 'Ask CHẠM AI'}</span>
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          {filteredRecords.length > 50 && <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 p-4 text-sm">
            <span>{language === 'vi' ? 'Trang' : 'Page'} {resultPage + 1} / {resultPages} · {filteredRecords.length} {language === 'vi' ? 'kết quả' : 'results'}</span>
            <div className="flex gap-2">
              <button disabled={resultPage === 0} onClick={() => setResultsPage(resultPage - 1)} className="rounded-lg border px-4 py-2 disabled:opacity-40">{language === 'vi' ? 'Trước' : 'Previous'}</button>
              <button disabled={resultPage + 1 === resultPages} onClick={() => setResultsPage(resultPage + 1)} className="rounded-lg border px-4 py-2 disabled:opacity-40">{language === 'vi' ? 'Sau' : 'Next'}</button>
            </div>
          </div>}
        </div>
      </div>
      </>
      )}

      {/* COMPARISON MODAL */}
      {showComparisonModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-5xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-teal-600" />
                  <span>
                    {language === 'vi'
                      ? 'Bảng so sánh phương án tuyển sinh (Tối đa 3 trường/ngành)'
                      : 'Side-by-Side Admissions Comparison (Up to 3 Majors/Universities)'}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {language === 'vi'
                    ? 'Đối chiếu khách quan từ cơ sở dữ liệu đã xác minh; không tuyên bố trường nào tốt hơn khi không có tiêu chí cụ thể.'
                    : 'Objective comparison from verified institutional data; CHẠM VIỆC never ranks one university above another without specific criteria.'}
                </p>
              </div>
              <button
                onClick={() => setShowComparisonModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {comparisonList.map((id) => {
                const rawRec = ADMISSION_RECORDS.find((r) => r.id === id);
                if (!rawRec) return null;
                const rec = localizeAdmissionRecord(rawRec, language);
                const rawUni = UNIVERSITIES_DATA.find((u) => u.id === rawRec.universityId);
                const uni = rawUni ? localizeUniversity(rawUni, language) : undefined;

                return (
                  <div
                    key={rec.id}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-teal-800 text-sm">
                        {rec.majorName}
                      </span>
                      <button
                        onClick={() => handleToggleComparison(rec.id)}
                        className="text-slate-400 hover:text-rose-600"
                        title={language === 'vi' ? 'Xóa khỏi so sánh' : 'Remove from comparison'}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-1">
                      <div className="font-bold text-slate-800">{rec.universityName}</div>
                      <div className="text-slate-500 text-[11px]">{uni?.province} • {uni?.ownershipType}</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 font-medium">
                          {language === 'vi' ? `Điểm chuẩn ${rec.year}:` : `${rec.year} Cutoff Score:`}
                        </span>
                        <span className="font-black text-base text-teal-700">
                          {rec.cutoffScore}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600">
                        <strong>{language === 'vi' ? 'Thang điểm:' : 'Scale:'}</strong> {rec.scoreScale}
                      </div>
                      <div className="text-[11px] text-slate-600">
                        <strong>{language === 'vi' ? 'Tổ hợp:' : 'Combinations:'}</strong> {rec.subjectCombination}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="font-bold text-slate-700">{language === 'vi' ? 'Học phí:' : 'Tuition:'}</div>
                      <p className="text-slate-600 leading-normal">{rec.tuitionInfo || rec.tuition}</p>
                    </div>

                    <div className="space-y-1">
                      <div className="font-bold text-slate-700">{language === 'vi' ? 'Điều kiện phụ:' : 'Sub-criteria:'}</div>
                      <p className="text-slate-600 leading-normal">
                        {rec.subCriteria || (language === 'vi' ? 'Không áp dụng' : 'Not applicable')}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                      <a
                        href={rec.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-teal-700 font-semibold underline"
                      >
                        <span>{language === 'vi' ? 'Nguồn chính thức' : 'Official Source'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button
                onClick={() => setShowComparisonModal(false)}
                className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs"
              >
                {language === 'vi' ? 'Đóng bảng so sánh' : 'Close Comparison'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
