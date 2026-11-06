import type { EnterpriseBatch } from '../types';
import { ENTERPRISE_PARTNERS } from '../data/enterprisePartners';
export const enterpriseCatalog:EnterpriseBatch[]=[];
// Local catalogs are a versioned cache. If the database is available it supplies the current records.
export async function loadCatalog(){
 const response=await fetch('/api/account?action=catalog',{signal:AbortSignal.timeout(12000)});if(!response.ok)throw new Error('Không tải được danh mục từ database.');
 const result=await response.json();if(!result.success||!result.data?.length)throw new Error('Database chưa có danh mục.');
 enterpriseCatalog.splice(0,enterpriseCatalog.length,...result.data.filter((r:any)=>r.kind==='enterprise_batches').map((r:any)=>r.data));
 const [careers,majors,admissions,tasks,videos,riasec,center]=await Promise.all([
  import('../data/careers'),import('../data/majors'),import('../data/admissions'),import('../data/tasks'),import('../data/videoStories'),import('../data/riasecQuestions'),import('../data/admissions2026')
 ]);
 const arrays:Record<string,any[]>={careers:careers.CAREERS_DATA,majors:majors.MAJORS_DATA,major_categories:majors.MAJOR_CATEGORIES,universities:admissions.UNIVERSITIES_DATA,admissions:admissions.ADMISSION_RECORDS,tasks:tasks.SIMULATION_TASKS,videos:videos.VIDEO_STORIES_DATA,riasec_questions:riasec.RIASEC_QUESTIONS,career_values:riasec.CAREER_VALUES_LIST,admission_tickers:center.ADMISSION_TICKER_2026,admission_regulations:center.MOET_REGULATIONS_2026,exam_libraries:center.OFFICIAL_EXAM_LIBRARIES,exam_sets:center.PRACTICE_EXAM_SETS};
 Object.assign(riasec.RIASEC_INFO,Object.fromEntries(result.data.filter((r:any)=>r.kind==='riasec_info').map((r:any)=>[r.id,r.data])));
 const stats=result.data.find((r:any)=>r.kind==='exam_stats');if(stats)Object.assign(center.EXAM_TARGET_STATS,stats.data);
 for(const [kind,array] of Object.entries(arrays)){
  const records=result.data.filter((r:any)=>r.kind===kind).map((r:any)=>r.data);if(records.length)array.splice(0,array.length,...records);
 }
 const partners=result.data.filter((r:any)=>r.kind==='enterprise_partners').map((r:any)=>r.data);
 if(partners.length)ENTERPRISE_PARTNERS.splice(0,ENTERPRISE_PARTNERS.length,...partners);
}
