import React, { useState, useEffect, useMemo } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink, 
  ShieldCheck, 
  Gift, 
  FileText, 
  Play, 
  Pause, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Send, 
  HelpCircle, 
  Info, 
  Layers, 
  Check, 
  X,
  Target,
  BarChart,
  Award
} from 'lucide-react';
import { 
  ADMISSION_TICKER_2026, 
  MOET_REGULATIONS_2026, 
  OFFICIAL_EXAM_LIBRARIES, 
  EXAM_TARGET_STATS, 
  PRACTICE_EXAM_SETS,
  PracticeExamSet,
  PracticeQuestion
} from '../data/admissions2026';
import { useLanguage } from '../i18n/LanguageContext';
import {
  getLocalizedTicker2026,
  getLocalizedMoetRegulations2026,
  getLocalizedOfficialExamLibraries,
  getLocalizedPracticeExamSets
} from '../utils/i18nData';

interface Admission2026CenterProps {
  onOpenChamAi?: (question: string) => void;
}

export const Admission2026Center: React.FC<Admission2026CenterProps> = ({ onOpenChamAi }) => {
  const { t, language } = useLanguage();
  // Navigation inside Admission 2026 Center
  const [activeSubTab, setActiveSubTab] = useState<'regulations' | 'exam_repo' | 'eie_gift' | 'practice_arena'>('regulations');

  // Localized Data
  const localizedTickers = useMemo(() => getLocalizedTicker2026(ADMISSION_TICKER_2026, language), [language]);
  const localizedRegulations = useMemo(() => getLocalizedMoetRegulations2026(MOET_REGULATIONS_2026, language), [language]);
  const localizedLibraries = useMemo(() => getLocalizedOfficialExamLibraries(OFFICIAL_EXAM_LIBRARIES, language), [language]);
  const localizedPracticeSets = useMemo(() => getLocalizedPracticeExamSets(PRACTICE_EXAM_SETS, language), [language]);

  // Live Ticker State
  const [tickerIndex, setTickerIndex] = useState(0);
  const [isTickerPlaying, setIsTickerPlaying] = useState(true);

  // Practice Exam State
  const [selectedExamSetId, setSelectedExamSetId] = useState<string | null>(null);
  const selectedExamSet = useMemo(
    () => localizedPracticeSets.find((s) => s.id === selectedExamSetId) || null,
    [localizedPracticeSets, selectedExamSetId]
  );
  const [practiceMode, setPracticeMode] = useState<'study' | 'timed'>('study'); // study: instant explanations; timed: test with timer
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(600);
  const [examScore, setExamScore] = useState<{ correct: number; total: number; percentage: number } | null>(null);

  // EIE Education English Account Registration State
  const [eieFullName, setEieFullName] = useState('');
  const [eieGradeLevel, setEieGradeLevel] = useState<'lop_10' | 'lop_11' | 'lop_12'>('lop_12');
  const [eieEmail, setEieEmail] = useState('');
  const [eieSubmitting, setEieSubmitting] = useState(false);
  const [eieSuccessData, setEieSuccessData] = useState<{ registrationCode: string; message: string } | null>(null);
  const [eieErrorMessage, setEieErrorMessage] = useState<string | null>(null);

  // Ticker timer
  useEffect(() => {
    if (!isTickerPlaying) return;
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % localizedTickers.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isTickerPlaying, localizedTickers.length]);

  // Timed exam countdown
  useEffect(() => {
    if (selectedExamSet && practiceMode === 'timed' && !isSubmitted && timeRemainingSeconds > 0) {
      const timer = setInterval(() => {
        setTimeRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [selectedExamSet, practiceMode, isSubmitted, timeRemainingSeconds]);

  // Handle start practice exam
  const handleStartExam = (set: PracticeExamSet, mode: 'study' | 'timed') => {
    setSelectedExamSetId(set.id);
    setPracticeMode(mode);
    setUserAnswers({});
    setIsSubmitted(false);
    setTimeRemainingSeconds(set.durationMinutes * 60);
    setExamScore(null);
    setActiveSubTab('practice_arena');
  };

  // Handle select question option
  const handleSelectOption = (questionId: string, optionId: string) => {
    if (isSubmitted && practiceMode === 'timed') return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  // Submit and grade exam
  const handleSubmitExam = () => {
    if (!selectedExamSet) return;
    let correctCount = 0;
    selectedExamSet.questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctOptionId) {
        correctCount += 1;
      }
    });
    const total = selectedExamSet.questions.length;
    const percentage = Math.round((correctCount / total) * 100);
    setExamScore({ correct: correctCount, total, percentage });
    setIsSubmitted(true);
  };

  // Submit EIE Registration
  const handleRegisterEie = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!eieFullName.trim() || !eieEmail.trim() || !eieEmail.includes('@')) {
      setEieErrorMessage(
        language === 'vi'
          ? 'Vui lòng điền đầy đủ họ tên và email liên hệ hợp lệ.'
          : 'Please enter a valid full name and contact email address.'
      );
      return;
    }

    setEieSubmitting(true);
    setEieErrorMessage(null);

    try {
      const res = await fetch('/api/eie/register-english-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: eieFullName,
          gradeLevel: eieGradeLevel,
          contactEmail: eieEmail
        })
      });
      const data = await res.json();
      if (data.success) {
        setEieSuccessData({
          registrationCode: data.data.registrationCode,
          message: data.message
        });
      } else {
        setEieErrorMessage(
          data.message || (language === 'vi' ? 'Không thể gửi đăng ký lúc này.' : 'Unable to submit registration right now.')
        );
      }
    } catch (err) {
      setEieErrorMessage(
        language === 'vi' ? 'Lỗi kết nối máy chủ. Vui lòng thử lại sau.' : 'Server connection error. Please try again later.'
      );
    } finally {
      setEieSubmitting(false);
    }
  };

  const currentTicker = localizedTickers[tickerIndex] || localizedTickers[0];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 1. DẢI CẬP NHẬT TUYỂN SINH 2026 (Live Ticker with Pause/Resume) */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-3 sm:p-4 border border-teal-500/40 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-teal-200 text-[11px] font-extrabold uppercase tracking-wider border border-white/20">
              {language === 'vi' ? 'Tin Tuyển Sinh 2026' : '2026 Admissions Live'}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsTickerPlaying(!isTickerPlaying)}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
                title={isTickerPlaying ? (language === 'vi' ? 'Tạm dừng chạy tin' : 'Pause ticker') : (language === 'vi' ? 'Tiếp tục chạy tin' : 'Resume ticker')}
              >
                {isTickerPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setTickerIndex((prev) => (prev - 1 + localizedTickers.length) % localizedTickers.length)}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
                title={language === 'vi' ? 'Tin trước' : 'Previous update'}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setTickerIndex((prev) => (prev + 1) % localizedTickers.length)}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
                title={language === 'vi' ? 'Tin tiếp theo' : 'Next update'}
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-200">
            <div className="font-medium line-clamp-2 sm:line-clamp-1">
              {currentTicker.text}
            </div>
            <div className="flex items-center gap-3 shrink-0 text-[11px] text-teal-300">
              <span>{language === 'vi' ? 'Kiểm tra:' : 'Verified:'} {currentTicker.verifiedDate}</span>
              {currentTicker.sourceUrl.startsWith('http') && (
                <a
                  href={currentTicker.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline text-amber-300 font-bold"
                >
                  <span>{currentTicker.sourceLabel}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. HEADER BANNER & GIFT TEASER */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-teal-500/30 shadow-xl space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-400/30">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{language === 'vi' ? 'Chính sách đồng hành miễn phí 100% cho học sinh THPT' : '100% Free Support Policy for High School Students'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {language === 'vi' ? 'Tuyển sinh 2026 — Quy chế, Thư viện đề ĐGNL & Quà tặng EIE Education' : 'Admissions 2026 — Regulations, Exam Library & EIE Education Gift'}
            </h2>
            <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
              {language === 'vi' ? 'CHẠM VIỆC tặng học sinh cẩm nang tuyển sinh, thư viện đề tham khảo chính thức và các bài luyện tư duy miễn phí, giúp các em chủ động chuẩn bị cho lựa chọn tương lai.' : 'CHẠM VIỆC provides students with enrollment handbooks, verified standardized exam libraries, and free thinking skills practice to prepare proactively for their future.'}
            </p>
          </div>

          <button
            onClick={() => setActiveSubTab('eie_gift')}
            className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm shadow-xl hover:scale-105 transition-all shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-white/25 flex items-center justify-center">
              <Gift className="w-6 h-6 text-slate-950" />
            </div>
            <div className="text-left">
              <div className="text-[11px] uppercase tracking-wider text-slate-900 font-bold">{language === 'vi' ? 'Đồng hành bởi EIE Education' : 'Partnered with EIE Education'}</div>
              <div className="text-sm font-black">{language === 'vi' ? 'Nhận Tài Khoản Tiếng Anh Miễn Phí' : 'Get Free English Prep Account'}</div>
            </div>
          </button>
        </div>

        {/* SUB NAVIGATION TABS */}
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800">
          <button
            onClick={() => setActiveSubTab('regulations')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeSubTab === 'regulations'
                ? 'bg-teal-500 text-slate-950 shadow-md'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{language === 'vi' ? 'Quy chế & Kế hoạch Bộ GD&ĐT 2026' : 'MOET 2026 Regulations & Timeline'}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('exam_repo')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeSubTab === 'exam_repo'
                ? 'bg-teal-500 text-slate-950 shadow-md'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{language === 'vi' ? 'Kho Đề ĐGNL / TSA (Mục tiêu 100 đề)' : 'HSA / TSA Exam Repo (100-Exam Target)'}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('eie_gift')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeSubTab === 'eie_gift'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-slate-800/80 text-amber-300 hover:bg-slate-800'
            }`}
          >
            <Gift className="w-4 h-4" />
            <span>{language === 'vi' ? 'Quà tặng EIE Education' : 'EIE Education Free Prep Grant'}</span>
          </button>

          {selectedExamSet && (
            <button
              onClick={() => setActiveSubTab('practice_arena')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeSubTab === 'practice_arena'
                  ? 'bg-indigo-500 text-white shadow-md'
                  : 'bg-slate-800/80 text-indigo-300 hover:bg-slate-800'
              }`}
            >
              <Play className="w-4 h-4" />
              <span>{language === 'vi' ? 'Phòng luyện đề đang mở' : 'Active Practice Room'}</span>
            </button>
          )}
        </div>
      </div>

      {/* 3. CONTENT AREA BASED ON SUB-TAB */}
      {activeSubTab === 'regulations' && (
        <div className="space-y-6">
          {/* Transparency & Ethical Principle */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 text-xs sm:text-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
              <span>
                {language === 'vi'
                  ? 'NGUYÊN TẮC ĐỐI CHIẾU QUY CHẾ TUYỂN SINH NĂM 2026:'
                  : '2026 ADMISSIONS REGULATION VERIFICATION PRINCIPLES:'}
              </span>
            </div>
            <p className="leading-relaxed">
              {language === 'vi'
                ? 'Mọi nội dung dưới đây được đối chiếu trực tiếp từ văn bản quy phạm pháp luật của Bộ GD&ĐT (Thông tư 06/2026/TT-BGDĐT, Quyết định 3037/QĐ-BGDĐT, Công văn 2304/BGDĐT-GDĐH). Hệ thống phân biệt rõ quy chế chung của Bộ với đề án riêng của từng trường đại học. Tuyệt đối không tự suy diễn điểm chuẩn cũ thành cam kết trúng tuyển.'
                : 'All regulations below are verified directly against official legal documents issued by the Ministry of Education and Training (Circular 06/2026/TT-BGDDT, Decision 3037/QD-BGDDT, Official Dispatch 2304/BGDDT-GDDH). The system clearly distinguishes national MOET regulations from individual university enrollment schemes and never extrapolates past cutoff scores as admission guarantees.'}
            </p>
          </div>

          {/* List of MOET Documents */}
          <div className="grid grid-cols-1 gap-6">
            {localizedRegulations.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-800 font-extrabold">
                        {doc.documentNumber}
                      </span>
                      <span className="text-slate-500">{language === 'vi' ? 'Ban hành:' : 'Issued:'} {doc.issueDate}</span>
                      <span>•</span>
                      <span className="text-slate-500">{language === 'vi' ? 'Hiệu lực:' : 'Effective:'} {doc.effectiveDate}</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-semibold">{language === 'vi' ? 'Áp dụng tuyển sinh:' : 'Admission Cycle:'} {doc.applicableYear}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-slate-600">
                      <strong>{language === 'vi' ? 'Phạm vi áp dụng: ' : 'Scope of Application: '}</strong> {doc.scope}
                    </p>
                  </div>

                  <a
                    href={doc.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-teal-50 text-teal-800 text-xs font-bold transition-all shrink-0 border border-slate-200"
                  >
                    <span>{language === 'vi' ? 'Xem toàn văn gốc' : 'View Official Document'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Key Rules Accordion/Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doc.keyRules.map((rule, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-teal-300 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-sm text-slate-900">
                          {rule.ruleTitle}
                        </span>
                        <span className="text-[11px] font-mono font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-md">
                          {rule.articleRef}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {rule.description}
                      </p>
                      <div className="p-2 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-600 italic">
                        <strong>{language === 'vi' ? 'Lưu ý & Ngoại lệ: ' : 'Notes & Exceptions: '}</strong> {rule.exceptionsAndNotes}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* EXAM REPOSITORY & 100 EXAM GOAL DASHBOARD */}
      {activeSubTab === 'exam_repo' && (
        <div className="space-y-6">
          {/* Target 100 Dashboard */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold mb-1">
                  <Target className="w-3.5 h-3.5 text-teal-600" />
                  <span>
                    {language === 'vi'
                      ? 'Mục Tiêu Xây Dựng 100 Đề ĐGNL / Đánh Giá Tư Duy Hoàn Chỉnh'
                      : 'Target: 100 Complete Aptitude & Thinking Skills Exam Sets'}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {language === 'vi'
                    ? 'Dashboard Kiểm Kê Kho Đề & Phân Loại Minh Bạch'
                    : 'Exam Repository Inventory & Transparent Classification'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
                  {language === 'vi'
                    ? 'Hệ thống phân tách rạch ròi giữa đề chính thức dẫn nguồn gốc, đề tự biên soạn luyện kỹ năng làm trực tiếp trên app và hàng chờ duyệt học thuật. Tuyệt đối không đếm giả hoặc chia vụn câu hỏi demo để thổi phồng số lượng.'
                    : 'Our platform strictly separates official source-linked reference exams, in-app curated skill practice sets, and academic review queues. We never inflate numbers or fragment demo questions.'}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-teal-50 border border-teal-200 text-center shrink-0">
                <div className="text-2xl font-black text-teal-900">
                  {EXAM_TARGET_STATS.totalTarget} {language === 'vi' ? 'Đề' : 'Sets'}
                </div>
                <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                  {language === 'vi' ? 'Mục tiêu toàn kho' : 'Repository Target'}
                </div>
              </div>
            </div>

            {/* 4 Organizers Breakdown Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <div className="text-xs font-bold text-slate-500">{language === 'vi' ? 'HSA — ĐHQG Hà Nội' : 'HSA — VNU Hanoi'}</div>
                <div className="text-xl font-extrabold text-slate-900">{EXAM_TARGET_STATS.hsaTarget} {language === 'vi' ? 'đề' : 'sets'}</div>
                <div className="text-[11px] text-teal-600 font-semibold">{language === 'vi' ? 'Mục tiêu phân bổ' : 'Allocated Target'}</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <div className="text-xs font-bold text-slate-500">{language === 'vi' ? 'ĐGNL — ĐHQG TP.HCM' : 'V-ACT — VNU-HCM'}</div>
                <div className="text-xl font-extrabold text-slate-900">{EXAM_TARGET_STATS.dgnlHcmTarget} {language === 'vi' ? 'đề' : 'sets'}</div>
                <div className="text-[11px] text-teal-600 font-semibold">{language === 'vi' ? 'Mục tiêu phân bổ' : 'Allocated Target'}</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <div className="text-xs font-bold text-slate-500">{language === 'vi' ? 'TSA — ĐH Bách khoa' : 'TSA — HUST'}</div>
                <div className="text-xl font-extrabold text-slate-900">{EXAM_TARGET_STATS.tsaTarget} {language === 'vi' ? 'đề' : 'sets'}</div>
                <div className="text-[11px] text-teal-600 font-semibold">{language === 'vi' ? 'Mục tiêu phân bổ' : 'Allocated Target'}</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <div className="text-xs font-bold text-slate-500">{language === 'vi' ? 'SPT — ĐH Sư phạm' : 'SPT — HNUE'}</div>
                <div className="text-xl font-extrabold text-slate-900">{EXAM_TARGET_STATS.sptTarget} {language === 'vi' ? 'đề' : 'sets'}</div>
                <div className="text-[11px] text-teal-600 font-semibold">{language === 'vi' ? 'Theo từng môn' : 'By Subject'}</div>
              </div>
            </div>

            {/* Realistic Status Counts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100">
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-emerald-900">{language === 'vi' ? 'Làm trực tiếp trên app' : 'Interactive In-App Sets'}</div>
                  <div className="text-[11px] text-emerald-700">{language === 'vi' ? 'Tự biên soạn & giáo viên duyệt' : 'Curated & faculty-reviewed'}</div>
                </div>
                <div className="text-xl font-black text-emerald-800">{EXAM_TARGET_STATS.currentAppSets} {language === 'vi' ? 'bộ' : 'sets'}</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-sky-900">{language === 'vi' ? 'Nguồn chính thức (Website gốc)' : 'Official Sources (Direct Links)'}</div>
                  <div className="text-[11px] text-sky-700">{language === 'vi' ? 'Đề tham khảo & hướng dẫn gốc' : 'Official sample papers & guides'}</div>
                </div>
                <div className="text-xl font-black text-sky-800">{EXAM_TARGET_STATS.currentOfficialSources} {language === 'vi' ? 'mục' : 'items'}</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-900">{language === 'vi' ? 'Hàng chờ thẩm định học thuật' : 'Academic Review Queue'}</div>
                  <div className="text-[11px] text-amber-700">{language === 'vi' ? 'Đang rà soát ma trận & đáp án' : 'Verifying blueprints & solutions'}</div>
                </div>
                <div className="text-xl font-black text-amber-800">{EXAM_TARGET_STATS.currentPendingReview} {language === 'vi' ? 'bộ' : 'sets'}</div>
              </div>
            </div>
          </div>

          {/* Section: Bài luyện kỹ năng tự biên soạn miễn phí (Làm trực tiếp trên app) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span>
                  {language === 'vi'
                    ? 'Bộ Đề Tự Luyện Kỹ Năng Miễn Phí (Làm Trực Tiếp Trên App)'
                    : 'Free Interactive Skill Practice Sets (Take Directly In-App)'}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black">
                  {language === 'vi' ? 'MIỄN PHÍ 100%' : '100% FREE'}
                </span>
              </h4>
              <span className="text-xs text-slate-500 font-medium">
                {language === 'vi' ? 'Chấm điểm mã nguồn • Có giải thích chi tiết' : 'Deterministic Grading • Detailed Explanations'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {localizedPracticeSets.map((set) => (
                <div
                  key={set.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:border-teal-400 transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold">
                        {language === 'vi' ? `Chuẩn cấu trúc ${set.examCode}` : `${set.examCode} Standard Format`}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{set.durationMinutes} {language === 'vi' ? 'phút' : 'mins'}</span>
                      </span>
                    </div>

                    <h5 className="font-extrabold text-base text-slate-900">
                      {set.title}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {set.subtitle}
                    </p>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 space-y-1">
                      <div><strong>{language === 'vi' ? 'Biên soạn:' : 'Compiled by:'}</strong> {set.organizer}</div>
                      <div><strong>{language === 'vi' ? 'Ma trận chấm:' : 'Scoring Matrix:'}</strong> {set.scoringMatrix}</div>
                    </div>
                  </div>

                  {/* 2 Buttons: Luyện tập (Study mode) vs Thi thử (Timed mode) */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={() => handleStartExam(set, 'study')}
                      className="py-2.5 px-3 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>{language === 'vi' ? 'Chế độ Luyện tập' : 'Study Mode'}</span>
                    </button>

                    <button
                      onClick={() => handleStartExam(set, 'timed')}
                      className="py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                    >
                      <Play className="w-4 h-4" />
                      <span>{language === 'vi' ? 'Làm bài tính giờ' : 'Timed Exam Mode'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Thư viện nguồn chính thức (Mở website gốc) */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-extrabold text-slate-900">
                {language === 'vi'
                  ? 'Thư Viện Tài Liệu Tham Khảo Chính Thức Từ Các Trường & Trung Tâm Khảo Thí'
                  : 'Official Reference Library From Universities & Testing Centers'}
              </h4>
              <span className="text-xs text-slate-500 font-medium">
                {language === 'vi' ? 'Bảo hộ bản quyền • Dẫn nguồn gốc' : 'Copyright Compliant • Direct Official Links'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {localizedLibraries.map((lib) => (
                <div
                  key={lib.id}
                  className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                        {lib.documentType} ({lib.actualYear})
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        {lib.accessCondition}
                      </span>
                    </div>

                    <h5 className="font-extrabold text-sm sm:text-base text-slate-900">
                      {lib.examName}
                    </h5>
                    <div className="text-xs font-semibold text-teal-800">
                      {lib.organizer}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {lib.description}
                    </p>
                  </div>

                  <a
                    href={lib.officialSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-teal-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <span>{language === 'vi' ? 'Mở nguồn chính thức' : 'Open Official Source'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. PHÒNG LUYỆN ĐỀ ĐANG MỞ (PRACTICE ARENA) */}
      {activeSubTab === 'practice_arena' && selectedExamSet && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 font-bold">
                  {selectedExamSet.examCode}
                </span>
                <span className="text-slate-500">
                  {practiceMode === 'study'
                    ? (language === 'vi' ? 'Chế độ luyện tập (Xem giải thích ngay)' : 'Study Mode (Instant Explanations)')
                    : (language === 'vi' ? 'Chế độ làm bài tính giờ' : 'Timed Exam Mode')}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                {selectedExamSet.title}
              </h3>
            </div>

            {practiceMode === 'timed' && (
              <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-slate-900 text-white px-4 shrink-0">
                <Clock className="w-5 h-5 text-amber-400" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                    {language === 'vi' ? 'Thời gian còn lại' : 'Time Remaining'}
                  </div>
                  <div className="text-lg font-mono font-black text-amber-300">
                    {Math.floor(timeRemainingSeconds / 60)}:{(timeRemainingSeconds % 60).toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Exam Questions List */}
          <div className="space-y-6">
            {selectedExamSet.questions.map((q, index) => {
              const selectedOption = userAnswers[q.id];
              const isCorrect = selectedOption === q.correctOptionId;
              const showExplanation = practiceMode === 'study' ? !!selectedOption : isSubmitted;

              return (
                <div
                  key={q.id}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4"
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 font-bold text-slate-700">
                      <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <span>{language === 'vi' ? 'Kỹ năng:' : 'Skill:'} {q.skillDomainLabel}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 font-medium">
                      {language === 'vi' ? 'Mức độ:' : 'Difficulty:'} {q.difficulty}
                    </span>
                  </div>

                  {q.stimulusText && (
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      {q.stimulusText}
                    </div>
                  )}

                  <div className="font-bold text-sm sm:text-base text-slate-900 whitespace-pre-line">
                    {q.questionText}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-2">
                    {q.options.map((opt) => {
                      const isChosen = selectedOption === opt.id;
                      let optionStyle = 'bg-white border-slate-200 hover:border-teal-400 text-slate-800';

                      if (showExplanation) {
                        if (opt.id === q.correctOptionId) {
                          optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                        } else if (isChosen && !isCorrect) {
                          optionStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                        }
                      } else if (isChosen) {
                        optionStyle = 'bg-teal-50 border-teal-600 text-teal-950 font-bold';
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectOption(q.id, opt.id)}
                          className={`flex items-start gap-3 p-3 rounded-xl border text-left text-xs sm:text-sm transition-all ${optionStyle}`}
                        >
                          <span className="w-5 h-5 rounded-full border flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                            {opt.id}
                          </span>
                          <span>{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Detailed Explanation */}
                  {showExplanation && (
                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 space-y-1 animate-in fade-in">
                      <div className="font-extrabold flex items-center gap-1.5 text-emerald-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>{language === 'vi' ? `Lời giải chi tiết & Đáp án đúng: ${q.correctOptionId}` : `Detailed Solution & Correct Answer: ${q.correctOptionId}`}</span>
                      </div>
                      <p className="leading-relaxed whitespace-pre-line text-slate-700">
                        {q.detailedExplanation}
                      </p>
                      <div className="text-[11px] text-slate-500 pt-1">
                        {language === 'vi' ? `Biên soạn: ${q.authorLabel} • Thẩm định: ${q.reviewedBy}` : `Authored by: ${q.authorLabel} • Reviewed by: ${q.reviewedBy}`}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={() => setActiveSubTab('exam_repo')}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 cursor-pointer"
            >
              {language === 'vi' ? 'Quay lại danh mục đề' : 'Back to Exam Catalog'}
            </button>

            {!isSubmitted && practiceMode === 'timed' && (
              <button
                onClick={handleSubmitExam}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-md cursor-pointer"
              >
                {language === 'vi' ? 'Nộp bài & Chấm điểm tự động' : 'Submit & Grade Exam'}
              </button>
            )}

            {isSubmitted && examScore && (
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs text-slate-500">{language === 'vi' ? 'Kết quả bài làm:' : 'Exam Result:'}</div>
                  <div className="text-sm font-extrabold text-emerald-800">
                    {language === 'vi' ? `Đúng ${examScore.correct}/${examScore.total} câu (${examScore.percentage}%)` : `${examScore.correct}/${examScore.total} correct (${examScore.percentage}%)`}
                  </div>
                </div>
                <button
                  onClick={() => handleStartExam(selectedExamSet, practiceMode)}
                  className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs cursor-pointer"
                >
                  {language === 'vi' ? 'Làm lại bài này' : 'Retake Exam'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 6. ĐĂNG KÝ NHẬN TÀI KHOẢN TIẾNG ANH MIỄN PHÍ — EIE EDUCATION */}
      {activeSubTab === 'eie_gift' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold">
                <Gift className="w-3.5 h-3.5 text-amber-600" />
                <span>
                  {language === 'vi'
                    ? 'Chương trình đồng hành vì cộng đồng học sinh THPT'
                    : 'Community Academic Grant for High School Students'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {language === 'vi'
                  ? 'Đăng ký nhận tài khoản tiếng Anh miễn phí — Đồng hành bởi EIE Education'
                  : 'Register for a Free Academic English Prep Account — Partnered with EIE Education'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                {language === 'vi'
                  ? 'EIE Education đồng hành cùng CHẠM VIỆC tài trợ gói học và luyện kỹ năng tiếng Anh học thuật cho học sinh chuẩn bị xét tuyển đại học và thi ĐGNL/TSA 2026.'
                  : 'EIE Education partners with CHẠM VIỆC to sponsor academic English learning and test-prep accounts for students preparing for 2026 university admissions and HSA/TSA exams.'}
              </p>
            </div>
            <div className="px-3 py-2 rounded-2xl bg-amber-50 border border-amber-200 text-center shrink-0">
              <span className="text-xs font-bold text-amber-900">{language === 'vi' ? '100% Miễn phí' : '100% Free'}</span>
            </div>
          </div>

          {/* Privacy & Safety commitments */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
            <div className="font-bold text-slate-800 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>
                {language === 'vi'
                  ? 'Chính sách dữ liệu tối thiểu & Bảo vệ học sinh:'
                  : 'Minimal Data Collection & Student Privacy Commitment:'}
              </span>
            </div>
            <p>
              {language === 'vi'
                ? 'Hệ thống chỉ thu thập họ tên hiển thị, khối lớp và 01 email liên hệ (có thể dùng email phụ huynh). Tuyệt đối không thu số CCCD, địa chỉ nhà riêng hay ngày sinh đầy đủ. Dữ liệu chỉ dùng để tiếp nhận và gửi mã tài khoản từ đối tác đồng hành EIE Education.'
                : 'We only collect your display name, grade level, and a single contact email (parent email is accepted). We never collect national ID numbers, home addresses, or full dates of birth. Data is strictly used to issue your EIE Education scholarship account.'}
            </p>
          </div>

          {/* Registration Form */}
          {eieSuccessData ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-3">
              <div className="flex items-center gap-2 font-extrabold text-base text-emerald-900">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>{language === 'vi' ? 'ĐÃ TIẾP NHẬN ĐĂNG KÝ THÀNH CÔNG!' : 'REGISTRATION RECEIVED SUCCESSFULLY!'}</span>
              </div>
              <p className="text-xs leading-relaxed">
                {language === 'vi' ? 'Mã tiếp nhận của em là:' : 'Your confirmation code is:'}{' '}
                <strong className="font-mono text-sm px-2 py-0.5 rounded-md bg-white border border-emerald-400">{eieSuccessData.registrationCode}</strong>.
              </p>
              <p className="text-xs leading-relaxed text-emerald-900">
                {language === 'vi'
                  ? 'Thông tin đã được ghi nhận trên máy chủ CHẠM VIỆC và chuyển tới ban hỗ trợ học thuật EIE Education để xử lý kích hoạt tài khoản theo đợt.'
                  : 'Your request has been logged by CHẠM VIỆC and forwarded to the EIE Education Academic Support team for batch account activation.'}
              </p>
              <button
                onClick={() => setEieSuccessData(null)}
                className="px-4 py-2 rounded-xl bg-white border border-emerald-400 text-emerald-900 font-bold text-xs"
              >
                {language === 'vi' ? 'Đăng ký cho học sinh khác' : 'Register another student'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleRegisterEie} className="space-y-4 max-w-xl">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  {language === 'vi' ? '1. Họ và tên hiển thị của học sinh:' : '1. Student Display Name:'}
                </label>
                <input
                  type="text"
                  value={eieFullName}
                  onChange={(e) => setEieFullName(e.target.value)}
                  placeholder={language === 'vi' ? 'Ví dụ: Nguyễn Minh Châu' : 'e.g., Nguyen Minh Chau'}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  {language === 'vi' ? '2. Khối lớp hiện tại:' : '2. Current Grade Level:'}
                </label>
                <select
                  value={eieGradeLevel}
                  onChange={(e) => setEieGradeLevel(e.target.value as any)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-teal-500 bg-white"
                >
                  <option value="lop_12">{language === 'vi' ? 'Lớp 12 (Thi tuyển sinh 2026)' : 'Grade 12 (2026 University Applicant)'}</option>
                  <option value="lop_11">{language === 'vi' ? 'Lớp 11 (Chuẩn bị sớm)' : 'Grade 11 (Early Preparation)'}</option>
                  <option value="lop_10">{language === 'vi' ? 'Lớp 10 (Làm quen)' : 'Grade 10 (Foundation Exploration)'}</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  {language === 'vi'
                    ? '3. Email liên hệ nhận tài khoản (Email học sinh hoặc phụ huynh):'
                    : '3. Contact Email for Account Delivery (Student or Parent Email):'}
                </label>
                <input
                  type="email"
                  value={eieEmail}
                  onChange={(e) => setEieEmail(e.target.value)}
                  placeholder={language === 'vi' ? 'hocsinh@example.com' : 'student@example.com'}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-teal-500"
                  required
                />
              </div>

              {eieErrorMessage && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs">
                  {eieErrorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={eieSubmitting}
                className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>
                  {eieSubmitting
                    ? (language === 'vi' ? 'Đang gửi đăng ký...' : 'Submitting registration...')
                    : (language === 'vi' ? 'Xác nhận Đăng Ký Tài Khoản EIE Education' : 'Confirm EIE Education Free Account Registration')}
                </span>
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
