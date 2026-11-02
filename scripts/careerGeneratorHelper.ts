import fs from 'fs';
import path from 'path';

interface CareerDef {
  id: string;
  title: string;
  englishTitle: string;
  synonyms: string[];
  group: string;
  category: string;
  categoryLabel: string;
  riasecCodes: ('R' | 'I' | 'A' | 'S' | 'E' | 'C')[];
  shortSummary: string;
  typicalTasks: string[];
  deliverables: string[];
  toolsUsed: string[];
  workEnvironment: string;
  difficultiesAndTradeoffs: string[];
  coreSkills: string[];
  highSchoolSubjects: string[];
  entryPathways: { level: 'Đại học' | 'Cao đẳng' | 'Trung cấp' | 'Đào tạo nghề' | 'Thực hành tự do'; description: string }[];
  entryPathway: string;
  trialActivity: string;
  has3D?: boolean;
  simulationTaskId?: string;
  experienceType: '3D_INTERACTIVE' | 'SCENARIO_SIMULATION' | 'CAREER_PROFILE';
  status: 'HOAN_THANH';
  imageUrl: string;
  imageAlt: string;
  linkedMajorIds?: string[];
  dailyRoutine?: string[];
  dataSource: string;
  lastUpdated: string;
}

// Helper to assemble career object
function makeCareer(data: Partial<CareerDef> & {
  id: string;
  title: string;
  englishTitle: string;
  group: string;
  category: string;
  categoryLabel: string;
  riasecCodes: ('R' | 'I' | 'A' | 'S' | 'E' | 'C')[];
  shortSummary: string;
  typicalTasks: string[];
  deliverables: string[];
  toolsUsed: string[];
  workEnvironment: string;
  difficultiesAndTradeoffs: string[];
  coreSkills: string[];
  highSchoolSubjects: string[];
  entryPathways: { level: 'Đại học' | 'Cao đẳng' | 'Trung cấp' | 'Đào tạo nghề' | 'Thực hành tự do'; description: string }[];
  trialActivity: string;
  imageUrl: string;
}): CareerDef {
  return {
    id: data.id,
    title: data.title,
    englishTitle: data.englishTitle,
    synonyms: data.synonyms || [],
    group: data.group,
    category: data.category,
    categoryLabel: data.categoryLabel,
    riasecCodes: data.riasecCodes,
    shortSummary: data.shortSummary,
    typicalTasks: data.typicalTasks,
    deliverables: data.deliverables,
    toolsUsed: data.toolsUsed,
    workEnvironment: data.workEnvironment,
    difficultiesAndTradeoffs: data.difficultiesAndTradeoffs,
    coreSkills: data.coreSkills,
    highSchoolSubjects: data.highSchoolSubjects,
    entryPathways: data.entryPathways,
    entryPathway: data.entryPathways.map(p => `${p.level}: ${p.description}`).join(' | '),
    trialActivity: data.trialActivity,
    has3D: data.has3D ?? false,
    simulationTaskId: data.simulationTaskId,
    experienceType: data.experienceType || (data.has3D ? '3D_INTERACTIVE' : (data.simulationTaskId ? 'SCENARIO_SIMULATION' : 'CAREER_PROFILE')),
    status: 'HOAN_THANH',
    imageUrl: data.imageUrl,
    imageAlt: data.imageAlt || `${data.title} đang làm việc thực tế`,
    linkedMajorIds: data.linkedMajorIds || [],
    dailyRoutine: data.dailyRoutine || [
      `Bắt đầu ngày với việc rà soát tiến độ và mục tiêu chuyên môn ưu tiên.`,
      `Trực tiếp xử lý các tác vụ nghiệp vụ cốt lõi và kiểm soát chất lượng sản phẩm.`,
      `Phối hợp liên bộ phận, trao đổi kỹ thuật hoặc tư vấn giải pháp cho khách hàng.`,
      `Ghi nhận nhật ký công việc, đúc rút bài học và nghiên cứu xu hướng mới trong ngành.`
    ],
    dataSource: data.dataSource || 'Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025',
    lastUpdated: '2025-05-01'
  };
}

// Generate the array
export const all200CareersList: CareerDef[] = [];
