import { IncompleteProfileNotice } from './IncompleteProfileNotice';
import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Calendar, 
  Bookmark, 
  CheckCircle2, 
  Clock, 
  Building, 
  Sparkles,
  HelpCircle,
  GraduationCap
} from 'lucide-react';
import { StudentProfile } from '../types';
import { generateRecommendations, generateActionPlan } from '../utils/recommendation';
import { exportProfileToJson } from '../utils/storage';
import { ADMISSION_RECORDS } from '../data/admissions';
import { CAREERS_DATA } from '../data/careers';
import { RIASEC_INFO } from '../data/riasecQuestions';
import { useLanguage } from '../i18n/LanguageContext';
import {
  localizeAdmissionRecord,
  localizeCareer,
  localizeSubject,
  localizeRegion
} from '../utils/i18nData';

interface ReportViewProps {
  profile: StudentProfile;
}

export const ReportView: React.FC<ReportViewProps> = ({ profile }) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const snapshot = useMemo(
    () => generateRecommendations(profile, language),
    [profile, language]
  );

  const actionPlan = useMemo(
    () => generateActionPlan(profile, language, snapshot),
    [profile, language, snapshot]
  );

  const savedAdmissionsRecords = useMemo(
    () =>
      ADMISSION_RECORDS.filter((r) => (profile.savedAdmissions || []).includes(r.id)).map((r) =>
        localizeAdmissionRecord(r, language)
      ),
    [profile.savedAdmissions, language]
  );

  const localizedSubjects = useMemo(
    () => (profile.favoriteSubjects || []).map((s) => localizeSubject(s, language)),
    [profile.favoriteSubjects, language]
  );

  const localizedRegions = useMemo(
    () => (profile.preferredRegions || []).map((r) => localizeRegion(r, language)),
    [profile.preferredRegions, language]
  );

  const localizedValues = useMemo(() => {
    const valMap: Record<string, string> = {
      'Thu nhập tốt & cơ hội thăng tiến': 'Competitive Income & Career Growth',
      'Công việc ổn định, bền vững': 'Job Stability & Long-term Security',
      'Được sáng tạo & tự chủ': 'Creativity & Autonomy',
      'Giúp đỡ cộng đồng & xã hội': 'Helping People & Social Impact',
      'Làm việc với công nghệ hiện đại': 'Working with Advanced Technology',
      'Cân bằng công việc & cuộc sống': 'Work-Life Balance',
      'Môi trường năng động, hội nhập quốc tế': 'Dynamic & International Environment',
      'Gần gia đình / phát triển tại địa phương': 'Close to Family / Local Development',
    };
    return (profile.priorityValues || []).map((v) =>
      language === 'en' ? valMap[v] || v : v
    );
  }, [profile.priorityValues, language]);

  const localizedBudget = useMemo(() => {
    const raw = profile.budgetRange || '';
    if (!raw) return language === 'vi' ? 'Chưa ghi' : 'Not specified';
    if (language === 'vi') return raw;
    const budgetMap: Record<string, string> = {
      'Dưới 15 triệu/năm (Ưu tiên trường Công lập / Miễn học phí Sư phạm)':
        'Under 15M VND/yr (Public / Tuition-Exempt Pedagogy)',
      'Dưới 20 triệu/năm': 'Under 20M VND/year',
      'Từ 15 - 30 triệu/năm (Công lập tự chủ)': '15 - 30M VND/yr (Autonomous Public)',
      '20 - 40 triệu/năm': '20 - 40M VND/year',
      'Từ 30 - 60 triệu/năm (Chất lượng cao / Tư thục)':
        '30 - 60M VND/yr (High-Quality / Private)',
      '40 - 80 triệu/năm': '40 - 80M VND/year',
      'Trên 60 triệu/năm (Quốc tế / Liên kết)': 'Over 60M VND/yr (International / Joint)',
      'Trên 80 triệu/năm': 'Over 80M VND/year',
      'Cần hỗ trợ học bổng / Miễn giảm học phí': 'Needs Scholarship / Tuition Waiver Support',
    };
    return (
      budgetMap[raw] ||
      raw.replace(/triệu\/năm/gi, 'M VND/year').replace(/Dưới/gi, 'Under').replace(/Trên/gi, 'Over')
    );
  }, [profile.budgetRange, language]);

  const gradeDisplay =
    profile.grade === 'lop_10'
      ? language === 'vi' ? 'Lớp 10' : 'Grade 10'
      : profile.grade === 'lop_11'
      ? language === 'vi' ? 'Lớp 11' : 'Grade 11'
      : profile.grade === 'lop_12'
      ? language === 'vi' ? 'Lớp 12' : 'Grade 12'
      : language === 'vi' ? 'Tự do' : 'Independent';

  const handleCopySummary = () => {
    const summaryText = language === 'vi' 
      ? `BÁO CÁO HƯỚNG NGHIỆP & TUYỂN SINH - CHẠM VIỆC
Ngày lập: ${new Date().toLocaleDateString('vi-VN')}
Khối lớp: ${gradeDisplay}
Môn học yêu thích: ${localizedSubjects.join(', ') || 'Chưa ghi'}
Điểm sở thích RIASEC: R(${profile.riasecScores.R}), I(${profile.riasecScores.I}), A(${profile.riasecScores.A}), S(${profile.riasecScores.S}), E(${profile.riasecScores.E}), C(${profile.riasecScores.C})
Hướng nghề gợi ý: ${snapshot.recommendations.map(r => r.career.title).join('; ')}
Ngành & trường đã lưu: ${savedAdmissionsRecords.map(a => `${a.universityName} - ${a.majorName} (Điểm: ${a.cutoffScore})`).join('; ') || 'Chưa lưu'}
Kế hoạch 30 ngày: Khám phá 2 nghề và phỏng vấn người làm nghề.`
      : `VOCATIONAL GUIDANCE & ADMISSIONS DOSSIER - CHẠM VIỆC
Generated Date: ${new Date().toLocaleDateString('en-US')}
Grade Level: ${gradeDisplay}
Favorite Subjects: ${localizedSubjects.join(', ') || 'Not specified'}
RIASEC Scores: R(${profile.riasecScores.R}), I(${profile.riasecScores.I}), A(${profile.riasecScores.A}), S(${profile.riasecScores.S}), E(${profile.riasecScores.E}), C(${profile.riasecScores.C})
Suggested Careers: ${snapshot.recommendations.map(r => r.career.title).join('; ')}
Saved Majors & Universities: ${savedAdmissionsRecords.map(a => `${a.universityName} - ${a.majorName} (Cutoff: ${a.cutoffScore})`).join('; ') || 'None saved'}
30-Day Plan: Explore 2 simulation tasks and conduct informational interviews.`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (snapshot.recommendations.length === 0) return <IncompleteProfileNotice />;

  return (
    <div className="space-y-8 pb-16">
      {/* Header & Print Actions */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold mb-2">
            <FileText className="w-3.5 h-3.5 text-teal-600" />
            <span>{language === 'vi' ? 'Hồ sơ Hướng nghiệp Cá nhân' : 'Personal Career Dossier'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {language === 'vi' ? 'Báo cáo tổng hợp & Kế hoạch 30/60/90 ngày' : 'Comprehensive Dossier & 30/60/90 Day Action Plan'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {language === 'vi' ? 'Bản báo cáo này thuộc quyền sở hữu của em, dùng để thảo luận cùng cha mẹ hoặc thầy cô chủ nhiệm.' : 'This report is owned by you, designed for discussion with parents and educators.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>{language === 'vi' ? 'In / Lưu PDF' : 'Print / Save PDF'}</span>
          </button>

          <button
            onClick={handleCopySummary}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? (language === 'vi' ? 'Đã sao chép' : 'Copied') : (language === 'vi' ? 'Sao chép tóm tắt' : 'Copy Summary')}</span>
          </button>

          <button
            onClick={() => exportProfileToJson(profile)}
            className="px-3.5 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-semibold text-xs flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>{language === 'vi' ? 'Xuất JSON' : 'Export JSON'}</span>
          </button>
        </div>
      </div>

      {/* PRINTABLE DOSSIER CONTAINER */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-10">
        {/* Dossier Header */}
        <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img 
              src="/logo.png" 
              alt="CHẠM VIỆC" 
              className="w-14 h-14 object-contain rounded-2xl bg-white p-1 border border-teal-100 shadow-xs shrink-0" 
            />
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">
                {language === 'vi' ? 'CHẠM VIỆC • HƯỚNG NGHIỆP DỰA TRÊN TRẢI NGHIỆM' : 'CHẠM VIỆC • EXPERIENTIAL CAREER GUIDANCE'}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-0.5">
                {language === 'vi' ? 'Bản Tổng hợp Hồ sơ Khám phá & Lựa chọn Tuyển sinh' : 'Career Discovery & College Admissions Dossier'}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {language === 'vi' ? 'Cập nhật lần cuối:' : 'Last updated:'} {new Date(profile.updatedAt).toLocaleDateString(language === 'vi' ? 'vi-VN' : 'en-US')} • {language === 'vi' ? 'Mã hồ sơ:' : 'Dossier ID:'} {profile.id}
              </p>
            </div>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
            {language === 'vi' ? 'Khối:' : 'Level:'} {gradeDisplay}
          </div>
        </div>

        {/* Section 1: Sở thích & Bằng chứng học tập */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>{language === 'vi' ? '1. Sở thích nghề nghiệp & Nền tảng học tập' : '1. Career Interests & Academic Profile'}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-800">{language === 'vi' ? 'Điểm sở thích RIASEC tham khảo:' : 'Reference RIASEC Scores:'}</div>
              <div className="grid grid-cols-3 gap-2 pt-1">
                {(Object.keys(profile.riasecScores) as (keyof typeof profile.riasecScores)[]).map((code) => (
                  <div key={code} className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                    <span className="font-bold text-teal-800">{language === 'vi' ? 'Nhóm' : 'Group'} {code}:</span>{' '}
                    <span className="font-extrabold">{profile.riasecScores[code]} {language === 'vi' ? 'điểm' : 'pts'}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 italic pt-1">
                {language === 'vi'
                  ? '*Sở thích phản ánh xu hướng quan tâm ở thời điểm hiện tại, không phải thước đo cố định năng lực.'
                  : '*Interests reflect your current exploration preferences, not a fixed measure of ability.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-800">{language === 'vi' ? 'Môn học yêu thích & Giá trị ưu tiên:' : 'Favorite Subjects & Priority Values:'}</div>
              <div className="text-slate-700">
                <strong>{language === 'vi' ? 'Môn học:' : 'Subjects:'}</strong> {localizedSubjects.join(', ') || (language === 'vi' ? 'Chưa cập nhật' : 'Not specified')}
              </div>
              <div className="text-slate-700">
                <strong>{language === 'vi' ? 'Giá trị ưu tiên:' : 'Core Values:'}</strong> {localizedValues.join(', ') || (language === 'vi' ? 'Chưa chọn' : 'Not selected')}
              </div>
              <div className="text-slate-700">
                <strong>{language === 'vi' ? 'Ngân sách dự kiến:' : 'Estimated Budget:'}</strong> {localizedBudget}
              </div>
              <div className="text-slate-700">
                <strong>{language === 'vi' ? 'Khu vực mong muốn:' : 'Preferred Region:'}</strong> {localizedRegions.join(', ') || (language === 'vi' ? 'Chưa giới hạn' : 'No preference')}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Gợi ý hướng nghề có giải thích */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-teal-600" />
            <span>{language === 'vi' ? '2. Danh sách hướng nghề gợi ý (Có lý do & Đánh đổi thực tế)' : '2. Recommended Career Options (With Rationale & Trade-offs)'}</span>
          </h3>

          <div className="space-y-3">
            {snapshot.recommendations.map((rec, i) => (
              <div key={rec.career.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900">
                    {i + 1}. {rec.career.title} ({rec.career.categoryLabel})
                  </span>
                  <span className="font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded-md">
                    {language === 'vi' ? 'Phù hợp tham khảo:' : 'Match Score:'} {rec.matchScore}/100
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  <strong>{language === 'vi' ? 'Lý do phù hợp:' : 'Fit Rationale:'}</strong> {rec.hollandFitReason}
                </p>
                <div className="text-slate-600">
                  <strong>{language === 'vi' ? 'Khó khăn & Đánh đổi:' : 'Trade-offs & Hardships:'}</strong> {rec.valuesTradeoffs.join('; ')}
                </div>
                <div className="text-slate-500">
                  <strong>{language === 'vi' ? 'Dữ liệu còn thiếu:' : 'Missing Information:'}</strong> {rec.missingInformation.join('; ') || (language === 'vi' ? 'Đã có thông tin cơ bản' : 'Core baseline complete')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Ngành & Trường đại học đã lưu */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-teal-600" />
            <span>{language === 'vi' ? '3. Ngành & Trường đại học quan tâm (Điểm chuẩn chính thức)' : '3. Saved Majors & Universities (Verified Cutoff Scores)'}</span>
          </h3>

          {savedAdmissionsRecords.length === 0 ? (
            <p className="text-xs text-slate-400 italic">
              {language === 'vi'
                ? 'Em chưa lưu bản ghi tuyển sinh nào. Hãy vào mục "Ngành & Điểm chuẩn" để bấm lưu các phương án quan tâm.'
                : 'No admission records saved yet. Visit "Majors & Cutoffs" to bookmark programs of interest.'}
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <th className="p-2.5">{language === 'vi' ? 'Trường' : 'University'}</th>
                    <th className="p-2.5">{language === 'vi' ? 'Ngành' : 'Major'}</th>
                    <th className="p-2.5">{language === 'vi' ? 'Năm' : 'Year'}</th>
                    <th className="p-2.5">{language === 'vi' ? 'Tổ hợp môn' : 'Subject Combo'}</th>
                    <th className="p-2.5">{language === 'vi' ? 'Điểm chuẩn' : 'Cutoff Score'}</th>
                    <th className="p-2.5">{language === 'vi' ? 'Học phí & Ghi chú' : 'Tuition & Notes'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {savedAdmissionsRecords.map((adm) => (
                    <tr key={adm.id} className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-slate-900">{adm.universityName}</td>
                      <td className="p-2.5 text-teal-800 font-semibold">{adm.majorName}</td>
                      <td className="p-2.5 font-bold">{adm.year}</td>
                      <td className="p-2.5 text-slate-700">{adm.subjectCombination}</td>
                      <td className="p-2.5 font-black text-teal-700">{adm.cutoffScore}</td>
                      <td className="p-2.5 text-slate-500">{adm.tuitionInfo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Section 4: Lịch sử phản tư trải nghiệm */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600" />
            <span>
              {language === 'vi'
                ? '4. Nhật ký phản tư sau các nhiệm vụ mô phỏng & chuyện nghề'
                : '4. Reflection Journal from Career Simulations & Stories'}
            </span>
          </h3>

          {profile.reflections.length === 0 ? (
            <p className="text-xs text-slate-400 italic">
              {language === 'vi'
                ? 'Chưa có bản ghi phản tư. Hãy thử một nhiệm vụ trong phần "Chạm Nghề" hoặc xem video để ghi lại cảm nhận.'
                : 'No reflection entries yet. Complete a task in "Career Sim" or watch a practitioner story to record your insights.'}
            </p>
          ) : (
            <div className="space-y-3">
              {profile.reflections.map((ref) => (
                <div key={ref.id} className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-900 text-sm">{ref.title}</span>
                    <span className="text-[11px] text-slate-400">{ref.date}</span>
                  </div>
                  <p className="text-slate-700"><strong>{language === 'vi' ? 'Cảm nhận & Đúc kết:' : 'Key Insights:'}</strong> {ref.keyInsights}</p>
                  <p className="text-slate-600"><strong>{language === 'vi' ? 'Khó khăn sẵn sàng đón nhận:' : 'Readiness for Challenges:'}</strong> {ref.readinessForChallenges}</p>
                  <p className="text-amber-800 font-semibold"><strong>{language === 'vi' ? 'Hành động tiếp theo:' : 'Next Micro-Action:'}</strong> {ref.nextMicroAction}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section 5: Kế hoạch hành động 30/60/90 ngày */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-teal-600" />
            <span>
              {language === 'vi'
                ? '5. Kế hoạch hành động tiếp theo (30 / 60 / 90 Ngày)'
                : '5. Next Action Plan (30 / 60 / 90 Days)'}
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* 30 Days */}
            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 space-y-3">
              <div className="font-bold text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>{language === 'vi' ? 'Kế hoạch 30 ngày tới' : 'Next 30 Days Plan'}</span>
              </div>
              <div className="space-y-2">
                {actionPlan.filter(p => p.timeframe === '30_days').map(item => (
                  <div key={item.id} className="p-2.5 rounded-xl bg-white border border-teal-100 space-y-1">
                    <div className="font-bold text-slate-800">{item.title}</div>
                    <div className="text-slate-600 leading-relaxed text-[11px]">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 60 Days */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
              <div className="font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>{language === 'vi' ? 'Kế hoạch 60 ngày tới' : 'Next 60 Days Plan'}</span>
              </div>
              <div className="space-y-2">
                {actionPlan.filter(p => p.timeframe === '60_days').map(item => (
                  <div key={item.id} className="p-2.5 rounded-xl bg-white border border-amber-100 space-y-1">
                    <div className="font-bold text-slate-800">{item.title}</div>
                    <div className="text-slate-600 leading-relaxed text-[11px]">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 90 Days */}
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-3">
              <div className="font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>{language === 'vi' ? 'Kế hoạch 90 ngày tới' : 'Next 90 Days Plan'}</span>
              </div>
              <div className="space-y-2">
                {actionPlan.filter(p => p.timeframe === '90_days').map(item => (
                  <div key={item.id} className="p-2.5 rounded-xl bg-white border border-blue-100 space-y-1">
                    <div className="font-bold text-slate-800">{item.title}</div>
                    <div className="text-slate-600 leading-relaxed text-[11px]">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dossier Footer & Signature */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            {language === 'vi'
              ? 'CHẠM VIỆC — Chạm trải nghiệm – Hiểu bản thân – Chọn hướng đi.'
              : 'CHẠM VIỆC — Experience Work – Know Yourself – Choose Your Path.'}
          </div>
          <div className="italic">
            {language === 'vi'
              ? 'Học sinh tự quản lý hồ sơ và quyết định thời điểm chia sẻ.'
              : 'Student-owned dossier; you decide when and with whom to share.'}
          </div>
        </div>
      </div>
    </div>
  );
};
