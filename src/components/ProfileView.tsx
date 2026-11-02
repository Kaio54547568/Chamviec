import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  User, 
  HelpCircle, 
  RefreshCw, 
  Download, 
  CheckCircle2, 
  Info, 
  AlertCircle,
  BarChart3,
  Bookmark,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Lock
} from 'lucide-react';
import { GradeLevel, RiasecCode, StudentProfile, TestQuotaInfo } from '../types';
import { RIASEC_INFO, RIASEC_QUESTIONS, CAREER_VALUES_LIST } from '../data/riasecQuestions';
import { exportProfileToJson, resetProfile, saveStudentProfile } from '../utils/storage';
import { useLanguage } from '../i18n/LanguageContext';

interface ProfileViewProps {
  profile: StudentProfile;
  setProfile: React.Dispatch<React.SetStateAction<StudentProfile>>;
  onGoToRecommendations: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  profile,
  setProfile,
  onGoToRecommendations
}) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'riasec' | 'profile'>('riasec');
  const [questionAnswers, setQuestionAnswers] = useState<Record<string, { rating: number; hasTried: boolean }>>(() => {
    // Restore past answers if saved
    try {
      const saved = localStorage.getItem('cham_viec_riasec_answers');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return {};
  });
  const [saveToast, setSaveToast] = useState(false);

  // Quota & Retake Policy State
  const [quotaInfo, setQuotaInfo] = useState<TestQuotaInfo | null>(null);
  const [isSubmittingAttempt, setIsSubmittingAttempt] = useState(false);
  const [quotaNotice, setQuotaNotice] = useState<string | null>(null);
  const [idempotencyKey] = useState<string>(() => {
    let key = sessionStorage.getItem('cham_viec_test_idem_key');
    if (!key) {
      key = `CV-TEST-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      sessionStorage.setItem('cham_viec_test_idem_key', key);
    }
    return key;
  });

  // Fetch quota from server on mount
  useEffect(() => {
    fetchQuota();
  }, []);

  const fetchQuota = async () => {
    try {
      const res = await fetch('/api/test-quota?email=student@chamviec.vn');
      const data = await res.json();
      if (data.success && data.data) {
        setQuotaInfo(data.data);
      }
    } catch (e) {
      console.warn('Could not fetch test quota:', e);
    }
  };

  // 5-point Likert Scale options
  const SCALE_OPTIONS = [
    { val: 1, label: t.riasec.scale1, shortLabel: '1' },
    { val: 2, label: t.riasec.scale2, shortLabel: '2' },
    { val: 3, label: t.riasec.scale3, shortLabel: '3' },
    { val: 4, label: t.riasec.scale4, shortLabel: '4' },
    { val: 5, label: t.riasec.scale5, shortLabel: '5' },
  ];

  // Subject options
  const SUBJECT_OPTIONS = language === 'vi' ? [
    'Toán học', 'Ngữ văn', 'Tiếng Anh', 'Vật lý', 'Hóa học', 'Sinh học', 
    'Lịch sử', 'Địa lý', 'Tin học', 'Giáo dục kinh tế & Pháp luật', 'Công nghệ', 'Mỹ thuật / Âm nhạc'
  ] : [
    'Mathematics', 'Literature', 'English', 'Physics', 'Chemistry', 'Biology',
    'History', 'Geography', 'Informatics / CS', 'Economics & Law', 'Technology / Engineering', 'Arts / Music'
  ];

  const handleUpdateField = (key: keyof StudentProfile, value: any) => {
    const updated = { ...profile, [key]: value };
    setProfile(updated);
    saveStudentProfile(updated);
    showSavedIndicator();
  };

  const showSavedIndicator = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const toggleArrayItem = (key: 'favoriteSubjects' | 'priorityValues' | 'preferredRegions', item: string) => {
    const current = [...(profile[key] as string[])];
    const index = current.indexOf(item);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(item);
    }
    handleUpdateField(key, current);
  };

  const handleAnswerQuestion = (qId: string, code: RiasecCode, rating: number, hasTried: boolean) => {
    const nextAnswers = {
      ...questionAnswers,
      [qId]: { rating, hasTried }
    };
    setQuestionAnswers(nextAnswers);
    try {
      localStorage.setItem('cham_viec_riasec_answers', JSON.stringify(nextAnswers));
    } catch (e) {
      // ignore
    }

    // Recalculate scores for RIASEC
    const newScores: Record<RiasecCode, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    RIASEC_QUESTIONS.forEach((q) => {
      const ans = nextAnswers[q.id];
      if (ans) {
        newScores[q.code] += ans.rating;
      }
    });

    const updatedProfile = {
      ...profile,
      riasecScores: newScores
    };
    setProfile(updatedProfile);
    saveStudentProfile(updatedProfile);
    showSavedIndicator();
  };

  const handleSubmitCompleteTest = async () => {
    setIsSubmittingAttempt(true);
    setQuotaNotice(null);

    try {
      const res = await fetch('/api/test-attempts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'student@chamviec.vn',
          idempotencyKey,
          riasecScores: profile.riasecScores,
        })
      });

      const resData = await res.json();

      if (res.status === 402) {
        // Payment required
        setQuotaNotice(resData.message || t.riasec.retakePrompt);
      } else if (resData.success) {
        fetchQuota();
        onGoToRecommendations();
      }
    } catch (e) {
      // If offline/network issue, still allow navigating to recommendations locally
      onGoToRecommendations();
    } finally {
      setIsSubmittingAttempt(false);
    }
  };

  const handleResetData = () => {
    if (window.confirm(language === 'vi' ? 'Em có chắc chắn muốn làm mới toàn bộ kết quả khảo sát trên thiết bị này không?' : 'Are you sure you want to reset all test results?')) {
      const clean = resetProfile();
      setProfile(clean);
      setQuestionAnswers({});
      localStorage.removeItem('cham_viec_riasec_answers');
      sessionStorage.removeItem('cham_viec_test_idem_key');
    }
  };

  // Count answered questions
  const answeredCount = Object.keys(questionAnswers).length;
  const progressPercent = Math.round((answeredCount / RIASEC_QUESTIONS.length) * 100);

  // Find top RIASEC dimensions
  const sortedRiasec = (Object.keys(profile.riasecScores) as RiasecCode[]).sort(
    (a, b) => (profile.riasecScores[b] || 0) - (profile.riasecScores[a] || 0)
  );

  return (
    <div className="space-y-8 pb-16">
      {/* Header & Tabs */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-900 text-xs font-bold border border-teal-200">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>{language === "vi" ? "Cơ sở khoa học: RIASEC (John Holland) & SCCT" : "Scientific Framework: RIASEC (John Holland) & SCCT"}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              {t.riasec.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed mt-1">
              {t.riasec.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('riasec')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'riasec'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {language === "vi" ? "1. Khảo sát câu hỏi (RIASEC)" : "1. RIASEC Assessment"}
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'profile'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {language === "vi" ? "2. Hồ sơ học tập & Nguyện vọng" : "2. Academic Profile & Goals"}
            </button>
          </div>
        </div>

        {/* Retake Policy & Attempt Quota Banner */}
        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <div className="font-bold flex items-center gap-2">
                <span>{t.riasec.freeFirstAttempt}</span>
                <span className="text-[11px] font-normal text-amber-800">
                  ({t.riasec.attemptUsed} <strong>{quotaInfo?.totalAttempts ?? 1}</strong> {language === "vi" ? "lần" : "times"})
                </span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                {t.riasec.retakePrompt}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] font-mono font-bold bg-white px-2.5 py-1 rounded-lg border border-amber-200 text-amber-900">
              {t.riasec.retakeCreditStatus} {quotaInfo?.retakeCredits ?? 0}
            </span>
          </div>
        </div>

        {quotaNotice && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{quotaNotice}</span>
          </div>
        )}

        {/* Progress Bar */}
        <div className="space-y-1.5 pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span>{t.riasec.progress}: {answeredCount} / {RIASEC_QUESTIONS.length} {language === "vi" ? "câu" : "questions"}</span>
            <span className="font-mono text-teal-700">{progressPercent}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-teal-600 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* TAB 1: RIASEC QUESTIONNAIRE */}
      {activeTab === 'riasec' && (
        <div className="space-y-6">
          {/* Top 3 RIASEC Summary Card (if answered > 0) */}
          {answeredCount > 0 && (
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-teal-600" />
                <span>{t.riasec.resultsTitle}</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {sortedRiasec.map((code) => {
                  const info = RIASEC_INFO[code];
                  const score = profile.riasecScores[code] || 0;
                  return (
                    <div
                      key={code}
                      className={`p-3 rounded-2xl border text-center space-y-1 ${info.bgLight}`}
                    >
                      <div className="font-extrabold text-lg font-mono text-slate-900">
                        {code}
                      </div>
                      <div className={`font-bold text-xs ${info.color}`}>
                        {language === "vi" ? info.titleVi : info.name}
                      </div>
                      <div className="font-extrabold text-sm text-slate-800">
                        {score} {language === "vi" ? "đ" : "pts"}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 60 Standard Questions List */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-bold text-slate-800">
                {language === "vi" ? `Thang đo 5 mức độ: 1 (${t.riasec.scale1}) đến 5 (${t.riasec.scale5})` : `5-Point Likert Scale: 1 (${t.riasec.scale1}) to 5 (${t.riasec.scale5})`}
              </span>
              <button
                onClick={handleResetData}
                className="text-xs text-rose-600 hover:underline flex items-center gap-1 font-semibold"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{language === "vi" ? "Làm mới kết quả" : "Reset Assessment"}</span>
              </button>
            </div>

            <div className="space-y-4">
              {RIASEC_QUESTIONS.map((q, idx) => {
                const ans = questionAnswers[q.id] || { rating: 0, hasTried: false };
                const info = RIASEC_INFO[q.code];

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      ans.rating > 0
                        ? 'bg-slate-50/70 border-slate-200'
                        : 'bg-white border-slate-200 hover:border-teal-300'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1 max-w-2xl">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-slate-400">
                            #{idx + 1}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${info.bgLight} ${info.color}`}>
                            {language === "vi" ? `Nhóm ${q.code} - ${info.titleVi}` : `Group ${q.code} - ${info.name}`}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                          {language === "en" && q.activityTextEn ? q.activityTextEn : q.activityText}
                        </p>
                        <p className="text-[11px] text-slate-500 italic">
                          {language === "vi" ? `💡 Gợi ý thực tế: ${q.vietnameseContextTip}` : `💡 Practical example: ${q.contextTipEn || q.vietnameseContextTip}`}
                        </p>
                      </div>

                      {/* 5-point Likert Scale Buttons */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        {SCALE_OPTIONS.map((btn) => (
                          <button
                            key={btn.val}
                            type="button"
                            onClick={() =>
                              handleAnswerQuestion(q.id, q.code, btn.val, ans.hasTried)
                            }
                            className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                              ans.rating === btn.val
                                ? 'bg-teal-600 text-white shadow-xs scale-105'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                            }`}
                            title={btn.label}
                          >
                            <span className="sm:hidden">{btn.shortLabel}</span>
                            <span className="hidden sm:inline">{btn.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Next Step Trigger */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                {language === "vi" ? "Lần làm bài đầu tiên miễn phí 100%. Đổi ngôn ngữ giữa chừng không làm mất câu trả lời." : "First assessment is 100% free. Switching languages will not affect your answers."}
              </span>

              <button
                disabled={isSubmittingAttempt}
                onClick={handleSubmitCompleteTest}
                className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
              >
                <span>{isSubmittingAttempt ? (language === 'vi' ? 'Đang xác nhận kết quả...' : 'Validating results...') : (language === 'vi' ? 'Xem gợi ý nghề có giải thích' : 'View Recommended Careers')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ACADEMIC PROFILE & CONDITIONS */}
      {activeTab === 'profile' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-8">
          {/* Grade selection */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-900">
              {language === "vi" ? "1. Em đang là học sinh khối lớp mấy?" : "1. Which high school grade are you currently in?"}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'lop_10', label: language === 'vi' ? 'Lớp 10 (Mới bắt đầu)' : 'Grade 10 (Foundation)' },
                { id: 'lop_11', label: language === 'vi' ? 'Lớp 11 (Xây dựng năng lực)' : 'Grade 11 (Skill Building)' },
                { id: 'lop_12', label: language === 'vi' ? 'Lớp 12 (Chuẩn bị tuyển sinh)' : 'Grade 12 (College Prep)' },
                { id: 'da_tot_nghiep', label: language === 'vi' ? 'Đã tốt nghiệp / Thí sinh tự do' : 'Graduated / Independent' }
              ].map((g) => (
                <button
                  key={g.id}
                  onClick={() => handleUpdateField('grade', g.id as GradeLevel)}
                  className={`p-3 rounded-2xl text-xs font-semibold text-left border transition-all ${
                    profile.grade === g.id
                      ? 'bg-teal-50 border-teal-600 text-teal-900 ring-2 ring-teal-200 font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Favorite Subjects */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-bold text-slate-900">
                {language === "vi" ? "2. Các môn học em cảm thấy yêu thích hoặc có hứng thú nhất (Chọn tối đa 4 môn)" : "2. Academic subjects you enjoy or excel at (Select up to 4)"}
              </label>
              <span className="text-xs text-slate-400">
                {profile.favoriteSubjects.length} {language === "vi" ? "môn đã chọn" : "selected"}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {SUBJECT_OPTIONS.map((sub) => {
                const isSelected = profile.favoriteSubjects.includes(sub);
                return (
                  <button
                    key={sub}
                    onClick={() => toggleArrayItem('favoriteSubjects', sub)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-teal-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {isSelected ? `✓ ${sub}` : sub}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Estimated Score & Target Combination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-900">
                {language === "vi" ? "3. Điểm thi tốt nghiệp THPT dự kiến (Thang 30):" : "3. Estimated Graduation Exam Score (Scale 30):"}
              </label>
              <input
                type="number"
                min={10}
                max={30}
                step={0.25}
                value={profile.estimatedScore || 24}
                onChange={(e) => handleUpdateField('estimatedScore', parseFloat(e.target.value) || 24)}
                className="w-full p-2.5 rounded-xl border border-slate-300 font-mono font-bold text-slate-900 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
              <span className="text-[11px] text-slate-500">{language === "vi" ? "Dùng để gợi ý danh sách trường vừa sức năm 2024–2025." : "Used to suggest realistic target universities for 2024–2025."}</span>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-900">
                {language === "vi" ? "4. Tổ hợp môn xét tuyển mục tiêu:" : "4. Target Subject Combinations:"}
              </label>
              <input
                type="text"
                value={(profile.targetCombinations || ['A00', 'D01']).join(', ')}
                onChange={(e) => handleUpdateField('targetCombinations', e.target.value.split(',').map(s => s.trim()))}
                placeholder="Ví dụ: A00, A01, D01, K01..."
                className="w-full p-2.5 rounded-xl border border-slate-300 font-mono text-slate-900 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
              <span className="text-[11px] text-slate-500">{language === "vi" ? "Bao gồm cả các tổ hợp mới 2025 (K01 Toán-Lý-Tin)." : "Includes new 2025 combinations (K01 Math-Physics-Informatics)."}</span>
            </div>
          </div>

          {/* Next Step */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              {language === "vi" ? "Thông tin học tập sẽ được lưu vào thiết bị và đồng bộ cùng báo cáo hướng nghiệp." : "Academic details are stored locally on your device and synced with your career dossier."}
            </span>
            <button
              onClick={onGoToRecommendations}
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md flex items-center gap-2"
            >
              <span>{language === "vi" ? "Xem gợi ý ngành & nghề phù hợp" : "View Matching Careers & Majors"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
