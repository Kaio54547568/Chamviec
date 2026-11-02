import { useLanguage } from '../i18n/LanguageContext';

export function IncompleteProfileNotice() {
  const { language } = useLanguage();
  return (
    <div role="status" className="rounded-2xl border border-teal-200 bg-teal-50 p-6 my-6">
      <h2 className="font-bold text-teal-900">{language === 'vi' ? 'Chưa đủ dữ liệu để đưa ra kết quả' : 'More information is needed'}</h2>
      <p className="mt-2 text-sm text-slate-700">{language === 'vi' ? 'Hãy hoàn thành 24 câu khảo sát RIASEC để xem gợi ý nghề và báo cáo cá nhân.' : 'Complete all 24 RIASEC questions to see your career recommendations and personal report.'}</p>
      <a className="inline-block mt-3 font-semibold text-teal-800 underline" href={`?tab=profile&lang=${language}`}>{language === 'vi' ? 'Đi đến khảo sát' : 'Go to questionnaire'}</a>
    </div>
  );
}
