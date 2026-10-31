import React, { useState, useEffect } from 'react';
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

interface Admission2026CenterProps {
  onOpenChamAi?: (question: string) => void;
}

export const Admission2026Center: React.FC<Admission2026CenterProps> = ({ onOpenChamAi }) => {
  // Navigation inside Admission 2026 Center
  const [activeSubTab, setActiveSubTab] = useState<'regulations' | 'exam_repo' | 'eie_gift' | 'practice_arena'>('regulations');

  // Live Ticker State
  const [tickerIndex, setTickerIndex] = useState(0);
  const [isTickerPlaying, setIsTickerPlaying] = useState(true);

  // Practice Exam State
  const [selectedExamSet, setSelectedExamSet] = useState<PracticeExamSet | null>(null);
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
      setTickerIndex((prev) => (prev + 1) % ADMISSION_TICKER_2026.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isTickerPlaying]);

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
    setSelectedExamSet(set);
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
      setEieErrorMessage('Vui lòng điền đầy đủ họ tên và email liên hệ hợp lệ.');
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
        setEieErrorMessage(data.message || 'Không thể gửi đăng ký lúc này.');
      }
    } catch (err) {
      setEieErrorMessage('Lỗi kết nối máy chủ. Vui lòng thử lại sau.');
    } finally {
      setEieSubmitting(false);
    }
  };

  const currentTicker = ADMISSION_TICKER_2026[tickerIndex];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 1. DẢI CẬP NHẬT TUYỂN SINH 2026 (Live Ticker with Pause/Resume) */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-3 sm:p-4 border border-teal-500/40 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-teal-200 text-[11px] font-extrabold uppercase tracking-wider border border-white/20">
              Tin Tuyển Sinh 2026
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsTickerPlaying(!isTickerPlaying)}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
                title={isTickerPlaying ? 'Tạm dừng chạy tin' : 'Tiếp tục chạy tin'}
              >
                {isTickerPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setTickerIndex((prev) => (prev - 1 + ADMISSION_TICKER_2026.length) % ADMISSION_TICKER_2026.length)}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
                title="Tin trước"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setTickerIndex((prev) => (prev + 1) % ADMISSION_TICKER_2026.length)}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
                title="Tin tiếp theo"
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
              <span>Kiểm tra: {currentTicker.verifiedDate}</span>
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
              <span>Chính sách đồng hành miễn phí 100% cho học sinh THPT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Tuyển sinh 2026 — Quy chế, Thư viện đề ĐGNL & Quà tặng EIE Education
            </h2>
            <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
              CHẠM VIỆC tặng học sinh cẩm nang tuyển sinh, thư viện đề tham khảo chính thức và các bài luyện tư duy miễn phí, giúp các em chủ động chuẩn bị cho lựa chọn tương lai.
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
              <div className="text-[11px] uppercase tracking-wider text-slate-900 font-bold">Đồng hành bởi EIE Education</div>
              <div className="text-sm font-black">Nhận Tài Khoản Tiếng Anh Miễn Phí</div>
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
            <span>Quy chế & Kế hoạch Bộ GD&ĐT 2026</span>
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
            <span>Kho Đề ĐGNL / TSA (Mục tiêu 100 đề)</span>
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
            <span>Quà tặng EIE Education</span>
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
              <span>Phòng luyện đề đang mở</span>
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
              <span>NGUYÊN TẮC ĐỐI CHIẾU QUY CHẾ TUYỂN SINH NĂM 2026:</span>
            </div>
            <p className="leading-relaxed">
              Mọi nội dung dưới đây được đối chiếu trực tiếp từ văn bản quy phạm pháp luật của Bộ GD&ĐT (Thông tư 06/2026/TT-BGDĐT, Quyết định 3037/QĐ-BGDĐT, Công văn 2304/BGDĐT-GDĐH). Hệ thống phân biệt rõ quy chế chung của Bộ với đề án riêng của từng trường đại học. Tuyệt đối không tự suy diễn điểm chuẩn cũ thành cam kết trúng tuyển.
            </p>
          </div>

          {/* List of MOET Documents */}
          <div className="grid grid-cols-1 gap-6">
            {MOET_REGULATIONS_2026.map((doc) => (
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
                      <span className="text-slate-500">Ban hành: {doc.issueDate}</span>
                      <span>•</span>
                      <span className="text-slate-500">Hiệu lực: {doc.effectiveDate}</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-semibold">Áp dụng tuyển sinh: {doc.applicableYear}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-slate-600">
                      <strong>Phạm vi áp dụng: </strong> {doc.scope}
                    </p>
                  </div>

                  <a
                    href={doc.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-teal-50 text-teal-800 text-xs font-bold transition-all shrink-0 border border-slate-200"
                  >
                    <span>Xem toàn văn gốc</span>
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
                        <strong>Lưu ý & Ngoại lệ: </strong> {rule.exceptionsAndNotes}
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
                  <span>Mục Tiêu Xây Dựng 100 Đề ĐGNL / Đánh Giá Tư Duy Hoàn Chỉnh</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Dashboard Kiểm Kê Kho Đề & Phân Loại Minh Bạch
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
                  Hệ thống phân tách rạch ròi giữa đề chính thức dẫn nguồn gốc, đề tự biên soạn luyện kỹ năng làm trực tiếp trên app và hàng chờ duyệt học thuật. Tuyệt đối không đếm giả hoặc chia vụn câu hỏi demo để thổi phồng số lượng.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-teal-50 border border-teal-200 text-center shrink-0">
                <div className="text-2xl font-black text-teal-900">{EXAM_TARGET_STATS.totalTarget} Đề</div>
                <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">Mục tiêu toàn kho</div>
              </div>
            </div>

            {/* 4 Organizers Breakdown Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <div className="text-xs font-bold text-slate-500">HSA — ĐHQG Hà Nội</div>
                <div className="text-xl font-extrabold text-slate-900">{EXAM_TARGET_STATS.hsaTarget} đề</div>
                <div className="text-[11px] text-teal-600 font-semibold">Mục tiêu phân bổ</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <div className="text-xs font-bold text-slate-500">ĐGNL — ĐHQG TP.HCM</div>
                <div className="text-xl font-extrabold text-slate-900">{EXAM_TARGET_STATS.dgnlHcmTarget} đề</div>
                <div className="text-[11px] text-teal-600 font-semibold">Mục tiêu phân bổ</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <div className="text-xs font-bold text-slate-500">TSA — ĐH Bách khoa</div>
                <div className="text-xl font-extrabold text-slate-900">{EXAM_TARGET_STATS.tsaTarget} đề</div>
                <div className="text-[11px] text-teal-600 font-semibold">Mục tiêu phân bổ</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <div className="text-xs font-bold text-slate-500">SPT — ĐH Sư phạm</div>
                <div className="text-xl font-extrabold text-slate-900">{EXAM_TARGET_STATS.sptTarget} đề</div>
                <div className="text-[11px] text-teal-600 font-semibold">Theo từng môn</div>
              </div>
            </div>

            {/* Realistic Status Counts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100">
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-emerald-900">Làm trực tiếp trên app</div>
                  <div className="text-[11px] text-emerald-700">Tự biên soạn & giáo viên duyệt</div>
                </div>
                <div className="text-xl font-black text-emerald-800">{EXAM_TARGET_STATS.currentAppSets} bộ</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-sky-900">Nguồn chính thức (Website gốc)</div>
                  <div className="text-[11px] text-sky-700">Đề tham khảo & hướng dẫn gốc</div>
                </div>
                <div className="text-xl font-black text-sky-800">{EXAM_TARGET_STATS.currentOfficialSources} mục</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-900">Hàng chờ thẩm định học thuật</div>
                  <div className="text-[11px] text-amber-700">Đang rà soát ma trận & đáp án</div>
                </div>
                <div className="text-xl font-black text-amber-800">{EXAM_TARGET_STATS.currentPendingReview} bộ</div>
              </div>
            </div>
          </div>

          {/* Section: Bài luyện kỹ năng tự biên soạn miễn phí (Làm trực tiếp trên app) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span>Bộ Đề Tự Luyện Kỹ Năng Miễn Phí (Làm Trực Tiếp Trên App)</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black">
                  MIỄN PHÍ 100%
                </span>
              </h4>
              <span className="text-xs text-slate-500 font-medium">Chấm điểm mã nguồn • Có giải thích chi tiết</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PRACTICE_EXAM_SETS.map((set) => (
                <div
                  key={set.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:border-teal-400 transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold">
                        Chuẩn cấu trúc {set.examCode}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{set.durationMinutes} phút</span>
                      </span>
                    </div>

                    <h5 className="font-extrabold text-base text-slate-900">
                      {set.title}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {set.subtitle}
                    </p>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 space-y-1">
                      <div><strong>Biên soạn:</strong> {set.organizer}</div>
                      <div><strong>Ma trận chấm:</strong> {set.scoringMatrix}</div>
                    </div>
                  </div>

                  {/* 2 Buttons: Luyện tập (Study mode) vs Thi thử (Timed mode) */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={() => handleStartExam(set, 'study')}
                      className="py-2.5 px-3 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Chế độ Luyện tập</span>
                    </button>

                    <button
                      onClick={() => handleStartExam(set, 'timed')}
                      className="py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                    >
                      <Play className="w-4 h-4" />
                      <span>Làm bài tính giờ</span>
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
                Thư Viện Tài Liệu Tham Khảo Chính Thức Từ Các Trường & Trung Tâm Khảo Thí
              </h4>
              <span className="text-xs text-slate-500 font-medium">Bảo hộ bản quyền • Dẫn nguồn gốc</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {OFFICIAL_EXAM_LIBRARIES.map((lib) => (
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
                    <span>Mở nguồn chính thức</span>
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
                  {practiceMode === 'study' ? 'Chế độ luyện tập (Xem giải thích ngay)' : 'Chế độ làm bài tính giờ'}
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
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Thời gian còn lại</div>
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
                      <span>Kỹ năng: {q.skillDomainLabel}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 font-medium">
                      Mức độ: {q.difficulty}
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
                        <span>Lời giải chi tiết & Đáp án đúng: {q.correctOptionId}</span>
                      </div>
                      <p className="leading-relaxed whitespace-pre-line text-slate-700">
                        {q.detailedExplanation}
                      </p>
                      <div className="text-[11px] text-slate-500 pt-1">
                        Biên soạn: {q.authorLabel} • Thẩm định: {q.reviewedBy}
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
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700"
            >
              Quay lại danh mục đề
            </button>

            {!isSubmitted && practiceMode === 'timed' && (
              <button
                onClick={handleSubmitExam}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-md"
              >
                Nộp bài & Chấm điểm tự động
              </button>
            )}

            {isSubmitted && examScore && (
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs text-slate-500">Kết quả bài làm:</div>
                  <div className="text-sm font-extrabold text-emerald-800">
                    Đúng {examScore.correct}/{examScore.total} câu ({examScore.percentage}%)
                  </div>
                </div>
                <button
                  onClick={() => handleStartExam(selectedExamSet, practiceMode)}
                  className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs"
                >
                  Làm lại bài này
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
                <span>Chương trình đồng hành vì cộng đồng học sinh THPT</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Đăng ký nhận tài khoản tiếng Anh miễn phí — Đồng hành bởi EIE Education
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                EIE Education đồng hành cùng CHẠM VIỆC tài trợ gói học và luyện kỹ năng tiếng Anh học thuật cho học sinh chuẩn bị xét tuyển đại học và thi ĐGNL/TSA 2026.
              </p>
            </div>
            <div className="px-3 py-2 rounded-2xl bg-amber-50 border border-amber-200 text-center shrink-0">
              <span className="text-xs font-bold text-amber-900">100% Miễn phí</span>
            </div>
          </div>

          {/* Privacy & Safety commitments */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
            <div className="font-bold text-slate-800 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Chính sách dữ liệu tối thiểu & Bảo vệ học sinh:</span>
            </div>
            <p>
              Hệ thống chỉ thu thập họ tên hiển thị, khối lớp và 01 email liên hệ (có thể dùng email phụ huynh). Tuyệt đối không thu số CCCD, địa chỉ nhà riêng hay ngày sinh đầy đủ. Dữ liệu chỉ dùng để tiếp nhận và gửi mã tài khoản từ đối tác đồng hành EIE Education.
            </p>
          </div>

          {/* Registration Form */}
          {eieSuccessData ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-3">
              <div className="flex items-center gap-2 font-extrabold text-base text-emerald-900">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>ĐÃ TIẾP NHẬN ĐĂNG KÝ THÀNH CÔNG!</span>
              </div>
              <p className="text-xs leading-relaxed">
                Mã tiếp nhận của em là: <strong className="font-mono text-sm px-2 py-0.5 rounded-md bg-white border border-emerald-400">{eieSuccessData.registrationCode}</strong>.
              </p>
              <p className="text-xs leading-relaxed text-emerald-900">
                Thông tin đã được ghi nhận trên máy chủ CHẠM VIỆC và chuyển tới ban hỗ trợ học thuật EIE Education để xử lý kích hoạt tài khoản theo đợt.
              </p>
              <button
                onClick={() => setEieSuccessData(null)}
                className="px-4 py-2 rounded-xl bg-white border border-emerald-400 text-emerald-900 font-bold text-xs"
              >
                Đăng ký cho học sinh khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleRegisterEie} className="space-y-4 max-w-xl">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  1. Họ và tên hiển thị của học sinh:
                </label>
                <input
                  type="text"
                  value={eieFullName}
                  onChange={(e) => setEieFullName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Minh Châu"
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  2. Khối lớp hiện tại:
                </label>
                <select
                  value={eieGradeLevel}
                  onChange={(e) => setEieGradeLevel(e.target.value as any)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-teal-500 bg-white"
                >
                  <option value="lop_12">Lớp 12 (Thi tuyển sinh 2026)</option>
                  <option value="lop_11">Lớp 11 (Chuẩn bị sớm)</option>
                  <option value="lop_10">Lớp 10 (Làm quen)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  3. Email liên hệ nhận tài khoản (Email học sinh hoặc phụ huynh):
                </label>
                <input
                  type="email"
                  value={eieEmail}
                  onChange={(e) => setEieEmail(e.target.value)}
                  placeholder="hocsinh@example.com"
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
                <span>{eieSubmitting ? 'Đang gửi đăng ký...' : 'Xác nhận Đăng Ký Tài Khoản EIE Education'}</span>
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
