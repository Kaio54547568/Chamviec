import React, { useMemo, useState } from 'react';
import { ExternalLink, GraduationCap, Search } from 'lucide-react';
import { ADMISSION_COVERAGE, UNIVERSITY_PROGRAMS, UNIVERSITIES_DATA } from '../data/admissions';
import { matchQuery } from '../utils/vietnameseSearch';
import { useLanguage } from '../i18n/LanguageContext';

export function UniversityProgramDirectory() {
  const { language } = useLanguage();
  const vi = language === 'vi';
  const [school, setSchool] = useState('all');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const rows = useMemo(() => UNIVERSITY_PROGRAMS.filter(p =>
    (school === 'all' || p.universityId === school) && (!query.trim() ||
      [p.name, p.admissionCode, p.parentName, p.campus, UNIVERSITIES_DATA.find(u => u.id === p.universityId)?.officialName]
        .some(value => matchQuery(value || '', query)))
  ).sort((a, b) => a.universityId.localeCompare(b.universityId) || a.name.localeCompare(b.name, 'vi')), [school, query]);
  const pages = Math.max(1, Math.ceil(rows.length / 24));
  const currentPage = Math.min(page, pages - 1);
  return <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 space-y-5">
    <div>
      <h2 className="text-lg font-black text-slate-900 flex items-center gap-2"><GraduationCap className="w-5 h-5 text-teal-700" />
        {vi ? 'Ngành & chương trình đào tạo' : 'Majors & study programs'}</h2>
      <p className="mt-2 text-sm text-slate-600">{vi
        ? `${UNIVERSITY_PROGRAMS.length} mục ngành, nhóm ngành, chương trình và chuyên ngành của ${UNIVERSITIES_DATA.length} trường, theo các công bố 2026. Chọn trường để xem danh mục và nguồn của từng mục.`
        : `${UNIVERSITY_PROGRAMS.length} published majors, admission groups, programs and specializations across ${UNIVERSITIES_DATA.length} universities for 2026. Select a university to browse its directory and sources.`}</p>
    </div>
    <div className="grid gap-3 sm:grid-cols-2">
      <select aria-label={vi ? 'Trường trong danh mục ngành' : 'University program directory'} value={school}
        onChange={e => { setSchool(e.target.value); setPage(0); }} className="min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm">
        <option value="all">{vi ? 'Tất cả 23 trường' : 'All 23 universities'}</option>
        {UNIVERSITIES_DATA.map(u => <option key={u.id} value={u.id}>{u.officialName}</option>)}
      </select>
      <label className="relative"><Search aria-hidden="true" className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
        <input aria-label={vi ? 'Tìm ngành, chương trình' : 'Search study programs'} value={query}
          onChange={e => { setQuery(e.target.value); setPage(0); }} placeholder={vi ? 'Tên ngành, mã xét tuyển, địa điểm…' : 'Program, application code, campus…'}
          className="min-h-11 w-full rounded-xl border border-slate-300 py-2 pl-9 pr-3 text-sm" />
      </label>
    </div>
    {school === 'rmit-vn' && <p className="rounded-xl bg-teal-50 p-4 text-sm text-teal-900">{vi
      ? 'RMIT xét điều kiện học thuật và tiếng Anh của từng chương trình. Không có một mức điểm chuẩn THPT chung để so sánh với các trường khác.'
      : 'RMIT applies program-specific academic and English requirements. A single shared THPT cutoff does not apply.'}</p>}
    <p className="text-xs text-slate-500">{rows.length} {vi ? 'mục phù hợp. Danh mục không đồng nghĩa với việc đang còn chỉ tiêu tuyển sinh.' : 'matching entries. A listed program does not imply that places are currently available.'}</p>
    <div className="grid gap-3 md:grid-cols-2">
      {rows.slice(currentPage * 24, (currentPage + 1) * 24).map(p => <article key={p.id} className="rounded-2xl border border-slate-200 p-4">
        <p className="text-xs font-semibold text-teal-700">{UNIVERSITIES_DATA.find(u => u.id === p.universityId)?.shortName}</p>
        <h3 className="mt-1 font-bold text-slate-900">{p.name}</h3>
        {p.parentName && <p className="mt-1 text-xs text-slate-600">{p.parentName}</p>}
        <p className="mt-2 text-xs text-slate-500">{p.admissionCode && <span>{p.admissionCode} · </span>}{p.campus}</p>
        <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-8 items-center gap-1 text-xs font-semibold text-teal-700 underline">
          {p.isVerifiedOfficial ? (vi ? 'Nguồn của trường' : 'University source') : (vi ? 'Nguồn tổng hợp · chưa đối chiếu chính thức' : 'Reference · official check pending')}
          <ExternalLink className="h-3 w-3" />
        </a>
      </article>)}
    </div>
    {!rows.length && <p className="py-8 text-center text-sm text-slate-500">{vi ? 'Không có mục phù hợp.' : 'No matching programs.'}</p>}
    <div className="flex items-center justify-between gap-3 text-sm">
      <button disabled={currentPage === 0} onClick={() => setPage(currentPage - 1)} className="min-h-10 rounded-xl border px-4 disabled:opacity-40">{vi ? 'Trang trước' : 'Previous'}</button>
      <span>{currentPage + 1} / {pages}</span>
      <button disabled={currentPage + 1 >= pages} onClick={() => setPage(currentPage + 1)} className="min-h-10 rounded-xl border px-4 disabled:opacity-40">{vi ? 'Trang sau' : 'Next'}</button>
    </div>
  </section>;
}

export function AdmissionsCoverage() {
  const { language } = useLanguage();
  const vi = language === 'vi';
  if (!ADMISSION_COVERAGE.length) return null;
  return <details className="rounded-2xl border border-slate-200 bg-white p-4 text-sm">
    <summary className="cursor-pointer font-bold text-slate-700">{vi ? 'Phạm vi cập nhật & nguồn dữ liệu' : 'Coverage & data sources'}</summary>
    <p className="mt-3 text-xs leading-relaxed text-slate-600">{vi
      ? 'Số dưới đây là bản ghi theo năm, phương thức và tổ hợp, không phải số ngành duy nhất. Nguồn tổng hợp được giữ riêng với dữ liệu đã đối chiếu văn bản của trường. Bản ghi chưa rõ thang điểm không được dùng cho bộ lọc điểm THPT dự kiến.'
      : 'Counts represent year/method/combination records, not unique majors. References are distinguished from university-verified records. Records with an unconfirmed scale are excluded from the estimated THPT score filter.'}</p>
    <div className="mt-3 overflow-x-auto"><table className="w-full text-left text-xs">
      <thead><tr className="border-b"><th className="p-2">{vi ? 'Trường' : 'University'}</th>{[2026, 2025, 2024].map(y => <th key={y} className="p-2">{y}</th>)}</tr></thead>
      <tbody>{ADMISSION_COVERAGE.map(c => <tr key={c.id} className="border-b border-slate-100">
        <th className="p-2 font-medium">{UNIVERSITIES_DATA.find(u => u.id === c.universityId)?.shortName}</th>
        {[2026, 2025, 2024].map(y => { const entry = c.years.find(e => e.year === y); return <td key={y} className="p-2">
          {entry?.status === 'criteria_based' ? (vi ? 'Điều kiện riêng' : 'Program requirements') : <>
            {entry?.records ?? 0}<span className="block text-slate-500">{entry?.referenceRecords ? (vi ? `${entry.referenceRecords} từ nguồn tổng hợp` : `${entry.referenceRecords} from references`) : (vi ? 'Nguồn của trường' : 'University source')}</span>
          </>}
        </td>; })}
      </tr>)}</tbody>
    </table></div>
  </details>;
}
