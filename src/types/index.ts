/**
 * Data models for CHẠM VIỆC - Hướng Nghiệp & Tuyển Sinh
 */

export type GradeLevel = 'lop_10' | 'lop_11' | 'lop_12' | 'da_tot_nghiep' | 'chua_biet';

export type RiasecCode = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export interface RiasecScore {
  R: number; // Realistic - Thực hành / Kỹ thuật
  I: number; // Investigative - Nghiên cứu
  A: number; // Artistic - Nghệ thuật / Sáng tạo
  S: number; // Social - Xã hội / Hỗ trợ
  E: number; // Enterprising - Quản lý / Thuyết phục
  C: number; // Conventional - Quy trình / Tổ chức
}

export interface CareerValue {
  id: string;
  name: string;
  description: string;
}

export interface MatchScoreBreakdown {
  riasecScore: number; // normalized interest score, 0–100
  competencyScore: number; // not scored
  valuesScore: number; // not scored
  subjectsScore: number; // normalized favorite-subject score, 0–100
  environmentScore: number; // not scored
  total: number; // max 100
  explanation: string;
}

export interface StudentProfile {
  riasecAnswerCount?: number;
  id: string;
  updatedAt: string;
  grade: GradeLevel;
  favoriteSubjects: string[];
  academicStrengths: string[];
  activities: string[];
  careersExplored: string[];
  priorityValues: string[]; // max 3-4 selected
  preferredRegions: string[]; // Miền Bắc, Miền Trung, Miền Nam, Gần nhà
  preferredProvinces?: string[]; // Hà Nội, TP.HCM, v.v.
  budgetRange: string; // Thấp, Trung bình, Không giới hạn, v.v.
  scholarshipInterest: boolean;
  notes: string;
  riasecScores: RiasecScore;
  completedTasks: string[]; // task IDs
  savedAdmissions: string[]; // AdmissionRecord IDs
  savedCareers: string[]; // Career IDs
  savedMajors: string[]; // Major IDs
  savedUniversities: string[]; // University IDs
  savedVideos: string[]; // VideoStory IDs
  estimatedScore?: number; // Điểm thi tốt nghiệp dự kiến (ví dụ: 25.5)
  targetCombinations?: string[]; // Tổ hợp xét tuyển dự kiến (ví dụ: ['D01', 'A00'])
  reflections: ReflectionRecord[];
}

export interface ReflectionRecord {
  id: string;
  taskId?: string;
  videoId?: string;
  date: string;
  title: string;
  keyInsights: string;
  readinessForChallenges: string;
  differencesNoticed: string;
  nextMicroAction: string;
}

export interface CareerPathwayItem {
  level: 'Đại học' | 'Cao đẳng' | 'Trung cấp' | 'Đào tạo nghề' | 'Thực hành tự do';
  description: string;
}

export interface Career {
  id: string;
  title: string;
  englishTitle?: string;
  synonyms?: string[];
  group?: string;
  category: string;
  categoryLabel: string;
  riasecCodes: RiasecCode[];
  shortSummary: string;
  dailyRoutine?: string[];
  typicalTasks: string[];
  deliverables?: string[]; // Sản phẩm đầu ra
  toolsUsed: string[];
  workEnvironment: string;
  difficultiesAndTradeoffs: string[];
  coreSkills: string[];
  highSchoolSubjects: string[];
  entryPathway: string;
  entryPathways?: CareerPathwayItem[]; // Đa dạng đường học tập
  trialActivity?: string; // Hoạt động thử sức THPT
  linkedMajorIds?: string[];
  simulationTaskId?: string | null;
  has3D?: boolean;
  experienceType?: '3D_INTERACTIVE' | 'SCENARIO_SIMULATION' | 'CAREER_PROFILE';
  status?: 'HOAN_THANH' | 'NHAP';
  imageUrl?: string;
  imageAlt?: string;
  dataSource: string;
  lastUpdated: string;
}

export interface MajorCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface Major {
  id: string;
  code: string;
  name: string;
  category: string; // 'cong-nghe', 'kinh-te', 'ngon-ngu', 'xa-hoi', 'suc-khoe', 'su-pham', 'nong-nghiep'
  categoryName: string;
  field: string;
  durationYears: number;
  description: string;
  suitableSubjects: string[];
  suitableRiasec: RiasecCode[];
  linkedCareerIds: string[];
}

export interface University {
  id: string;
  institutionCode: string; // e.g. "BKA", "FTU", "QHI", "KSA", "YHB", etc.
  officialName: string;
  shortName: string;
  aliases: string[];
  province: string;
  region: 'Miền Bắc' | 'Miền Trung' | 'Miền Nam';
  address: string;
  ownershipType: 'Công lập' | 'Tư thục' | 'Quốc tế';
  officialWebsite: string;
  admissionWebsite: string;
  logo?: string;
  lastVerifiedDate: string;
  source: string;
  // Backward compatibility fields
  code?: string;
  name?: string;
  city?: string;
  website?: string;
  type?: 'CongLap' | 'TuThuc' | 'QuocTe';
}

export interface AdmissionRecord {
  id: string;
  universityId: string;
  universityName: string;
  campus: string; // e.g. "Cơ sở chính - Cầu Giấy, Hà Nội"
  majorCode: string;
  majorName: string;
  programName: string; // "Chuẩn", "Chất lượng cao", "Tiên tiến", "Song bằng"
  program?: string; // alias for programName
  year: number;
  scoreType?: 'cutoff' | 'floor';
  admissionCode?: string; // Institutional application code; may differ from MOET major code
  sourcePage?: number;
  sourceSha256?: string;
  sourceDataUrl?: string;
  sourceType?: 'official' | 'reference';
  applicantGroup?: string;
  campusProvince?: string | null;
  campusRegion?: string | null;
  method: string; // "Điểm thi tốt nghiệp THPT", "Đánh giá năng lực ĐHQG", "Xét học bạ THPT", v.v.
  methodName?: string; // alias for method
  admissionMethods?: string[];
  subjectCombination: string; // "A00 (Toán, Lý, Hóa)", "D01 (Toán, Văn, Anh)", v.v.
  subjectCombinations?: string[];
  cutoffScore: number;
  benchmarkScore?: number; // alias for cutoffScore
  scoreScale: string; // "Thang 30", "Thang 40 (Toán x2)", "Thang 1200 (ĐGNL)"
  calculationFormula: string; // e.g. "Toán + Lý + Hóa + Điểm ưu tiên"
  subCriteria: string; // Điều kiện phụ (tiêu chí phụ khi bằng điểm)
  tuitionInfo: string;
  tuition?: string; // alias
  sourceUrl: string;
  sourceDocument: string;
  source?: string; // alias for sourceDocument
  verifiedDate: string;
  isVerifiedOfficial: boolean; // true = nguồn đề án / cổng thông tin trường
  isDemoData?: boolean;
}

export interface UniversityProgram {
  id: string;
  universityId: string;
  year: number;
  admissionCode: string;
  name: string;
  campus: string;
  kind: 'program' | 'group' | 'specialization';
  parentName: string;
  sourceUrl: string;
  sourceType: 'official' | 'reference';
  isVerifiedOfficial: boolean;
  verifiedDate: string;
  sourceSha256: string;
}

export interface AdmissionCoverage {
  id: string;
  universityId: string;
  programs: number;
  catalogueYear: number;
  checkedAt: string;
  note: string;
  years: {
    year: number;
    records: number;
    officialRecords: number;
    referenceRecords: number;
    unknownScaleRecords: number;
    status: 'published' | 'criteria_based';
    sources: string[];
  }[];
}

export interface VideoStory {
  id: string;
  youtubeId: string;
  youtubeVideoId?: string;
  youtubeUrl?: string;
  thumbnailUrl?: string;
  duration?: string;
  title: string;
  channelName: string;
  personName?: string;
  characterName: string;
  organization?: string;
  careerTitle: string;
  careerId: string;
  publishDate: string;
  verifiedDate: string;
  lastChecked?: string;
  summary: string;
  takeaway?: string; // Điều đáng học hỏi
  language?: 'Tiếng Việt' | 'Tiếng Anh';
  keyTimestamps: { time: string; label: string }[];
  realHardships: string[];
  reflectionQuestions: string[];
  isVerified: boolean;
  verified?: boolean;
  category?: string;
}

export interface CareerTask {
  id: string;
  careerId: string;
  careerTitle: string;
  title: string;
  durationMinutes: number;
  scenario: string;
  instructions: string[];
  stages: {
    stageNumber: number;
    title: string;
    description: string;
    options: {
      id: string;
      label: string;
      reasoning: string;
      outcomeDescription: string;
      feedbackTone: 'positive' | 'warning' | 'neutral';
      scoreDelta: number;
    }[];
  }[];
  rubric: {
    criterion: string;
    description: string;
  }[];
}

export interface RecommendationSnapshot {
  ruleVersion: string;
  generatedDate: string;
  recommendations: {
    career: Career;
    matchScore: number; // Transparent score 1-100 (explicitly rule-based)
    breakdown: MatchScoreBreakdown;
    hollandFitReason: string;
    evidenceFromProfile: string[];
    valuesTradeoffs: string[];
    skillsToCultivate: string[];
    missingInformation: string[];
    suggestedTask: { id: string; title: string };
    linkedMajors: Major[];
  }[];
}

export interface ActionPlanItem {
  id: string;
  timeframe: '30_days' | '60_days' | '90_days';
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  category: 'explore' | 'skill' | 'admission' | 'consult';
}

// Enterprise Tour / Experience Batch Types
export interface EnterprisePartner {
  id: string;
  name: string;
  displayName: string;
  sector: string;
  location: string;
  address: string;
  confirmationDate: string;
  confirmationStatus: 'AGREED_IN_PRINCIPLE';
  sourceDocument: string;
  sourceSha256: string;
}

export type BatchStatus = 'SAP_MO' | 'DANG_MO' | 'HET_CHO' | 'DA_HOAN_THANH';
export type RegistrationStatus = 'DA_TIEP_NHAN' | 'CHO_THANH_TOAN' | 'DA_THANH_TOAN' | 'DA_XAC_NHAN' | 'DA_HUY';

export interface EnterpriseBatch {
  id: string;
  code: string; // e.g. "CV-BATCH-TECH-01"
  programName: string;
  enterpriseName: string;
  careerCategory: string; // Công nghệ thông tin, Kỹ thuật - Chế tạo, Nông nghiệp CNC, Y tế, Khách sạn - Dịch vụ
  location: string;
  address: string;
  scheduleDate: string; // YYYY-MM-DD
  timeRange: string; // e.g. "08:30 - 16:30"
  deadlineDate: string;
  targetGrade: string; // e.g. "Lớp 10 - 12"
  totalSlots: number;
  registeredSlots: number;
  ticketPriceVND: number;
  inclusions: string[];
  exclusions: string[];
  scheduleTimeline: { time: string; activity: string }[];
  cancellationPolicy: string;
  status: BatchStatus;
  contactPerson: string;
  contactPhone: string;
  contactEmail: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface EnterpriseRegistration {
  registrationCode: string; // e.g. "CV-EXP-829143"
  batchId: string;
  batchName: string;
  enterpriseName: string;
  studentName: string;
  schoolName: string;
  grade: string;
  studentEmail: string;
  studentPhone?: string;
  isInternationalStudent: boolean;
  guardianName?: string;
  guardianPhone?: string;
  specialRequests?: string;
  registeredAt: string;
  status: RegistrationStatus;
  ticketPriceVND: number;
}

export interface TestQuotaInfo {
  email: string;
  verified: boolean;
  totalAttempts: number;
  freeAttemptUsed: boolean;
  retakeCredits: number;
  feePerRetakeVND: number;
  paymentGatewayStatus: 'NOT_CONFIGURED' | 'READY';
  noticeMessage?: string;
}

