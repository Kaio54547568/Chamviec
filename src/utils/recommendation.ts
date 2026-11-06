import { StudentProfile, RecommendationSnapshot, RiasecCode, ActionPlanItem } from '../types';
import { CAREERS_DATA } from '../data/careers';
import { MAJORS_DATA } from '../data/majors';
import { SIMULATION_TASKS } from '../data/tasks';
import { hasCompletedRiasec, RIASEC_MAX_SCORES } from './riasec';
import { RIASEC_INFO } from '../data/riasecQuestions';
import { localizeCareer, localizeMajor, localizeTask, localizeSubject } from './i18nData';

export const RULE_ENGINE_VERSION = '3.0.0-interest-80-20';

// Map each task ID to the RIASEC codes of its associated career for fast, crash-safe lookup
const TASK_RIASEC_MAP: Record<string, RiasecCode[]> = (() => {
  const map: Record<string, RiasecCode[]> = {};
  for (const task of SIMULATION_TASKS) {
    const taskAny = task as unknown as { riasecCodes?: RiasecCode[] };
    if (Array.isArray(taskAny.riasecCodes) && taskAny.riasecCodes.length > 0) {
      map[task.id] = taskAny.riasecCodes;
    } else {
      const linkedCareer = CAREERS_DATA.find((c) => c.id === task.careerId);
      map[task.id] = linkedCareer?.riasecCodes || ['I', 'E', 'C'];
    }
  }
  return map;
})();

export function generateRecommendations(
  profile: StudentProfile,
  lang: 'vi' | 'en' = 'vi'
): RecommendationSnapshot {
  if (!hasCompletedRiasec(profile)) {
    return { ruleVersion: RULE_ENGINE_VERSION, generatedDate: new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'vi-VN'), recommendations: [] };
  }
  const scores = profile.riasecScores || { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  const favoriteSubjects = profile.favoriteSubjects || [];
  const academicStrengths = profile.academicStrengths || [];
  const completedTasks = profile.completedTasks || [];
  const priorityValues = profile.priorityValues || [];

  const sortedCodes = (Object.keys(scores) as RiasecCode[]).sort(
    (a, b) => (scores[b] || 0) - (scores[a] || 0)
  );
  const top1 = sortedCodes[0] || 'I';
  const top2 = sortedCodes[1] || 'R';
  const top3 = sortedCodes[2] || 'S';

  const localizedSubjects = favoriteSubjects.map((s) => localizeSubject(s, lang));
  const localizedStrengths = academicStrengths.map((s) => localizeSubject(s, lang));

  // Step 1: Lightweight scoring across all 200 careers (no expensive localization inside the 200-item loop)
  const preliminaryScored = CAREERS_DATA.map((rawCareer) => {
    const careerCodes = rawCareer.riasecCodes || [];
    const riasecPoints = Math.round(careerCodes.reduce((sum, code) => {
      const max = RIASEC_MAX_SCORES[code];
      return sum + Math.max(0, Math.min(100, ((scores[code] || 0) - max / 5) / (max * 0.8) * 100));
    }, 0) / Math.max(1, careerCodes.length));
    const careerSubjects = rawCareer.highSchoolSubjects || [];
    const matchingSubjects = careerSubjects.filter(s => localizedSubjects.includes(localizeSubject(s, lang)));
    const subjectPoints = favoriteSubjects.length && careerSubjects.length
      ? Math.round(matchingSubjects.length / careerSubjects.length * 100) : 0;
    const competencyPoints = 0;
    const valuesPoints = 0;
    const environmentPoints = 0;
    const completedCareerTasks = SIMULATION_TASKS.filter(t => completedTasks.includes(t.id) && t.careerId === rawCareer.id);
    const totalScore = favoriteSubjects.length ? Math.round(riasecPoints * 0.8 + subjectPoints * 0.2) : riasecPoints;

    return {
      rawCareer,
      careerCodes,
      riasecPoints,
      subjectPoints,
      competencyPoints,
      valuesPoints,
      environmentPoints,
      totalScore,
      matchingSubjects,
      completedCareerTasks,
    };
  });

  // Sort and take only top 8 before running full localization
  preliminaryScored.sort((a, b) => b.totalScore - a.totalScore);
  const top8Scored = preliminaryScored.slice(0, 8);

  const top1Info = RIASEC_INFO[top1];
  const top2Info = RIASEC_INFO[top2];
  const top1Name = lang === 'en' ? (top1Info?.title.en || top1) : (top1Info?.title.vi || top1);
  const top2Name = lang === 'en' ? (top2Info?.title.en || top2) : (top2Info?.title.vi || top2);

  // Step 2: Localize only the top 8 recommended careers
  const recommendations = top8Scored.map((item) => {
    const {
      rawCareer,
      careerCodes,
      riasecPoints,
      subjectPoints,
      competencyPoints,
      valuesPoints,
      environmentPoints,
      totalScore,
      matchingSubjects,
      completedCareerTasks,
    } = item;

    const career = localizeCareer(rawCareer, lang);
    const localizedMatchingSubjects = matchingSubjects.map((s) => localizeSubject(s, lang));

    const hollandFitReason = lang === 'en'
      ? `This career maps to RIASEC groups ${careerCodes.join(', ')}. Its interest score is the average of your normalized scores in those groups; it does not measure professional ability.`
      : `Nghề này gắn với nhóm RIASEC ${careerCodes.join(', ')}. Điểm sở thích là trung bình điểm đã quy đổi của bạn ở các nhóm này; chưa phải đánh giá năng lực làm nghề.`;

    const explanation = lang === 'en'
      ? (favoriteSubjects.length ? `Interest fit ${totalScore}/100 = RIASEC ${riasecPoints}/100 × 80% + favorite subjects ${subjectPoints}/100 × 20%.` : `RIASEC interest score ${riasecPoints}/100. Add favorite subjects for a combined score.`)
      : (favoriteSubjects.length ? `Điểm phù hợp sở thích ${totalScore}/100 = RIASEC ${riasecPoints}/100 × 80% + môn yêu thích ${subjectPoints}/100 × 20%.` : `Điểm sở thích RIASEC ${riasecPoints}/100. Chưa bổ sung môn học để tính điểm tổng hợp.`);

    const evidenceFromProfile: string[] = [];
    if (careerCodes.includes(top1)) {
      evidenceFromProfile.push(
        lang === 'en'
          ? `Strong alignment with your #1 RIASEC trait (${top1} - ${scores[top1] || 0} pts)`
          : `Trùng khớp với nhóm sở thích số 1 của bạn (${top1} - ${scores[top1] || 0} điểm)`
      );
    }
    if (localizedMatchingSubjects.length > 0) {
      evidenceFromProfile.push(
        lang === 'en'
          ? `Matches your favorite/strong subjects: ${localizedMatchingSubjects.join(', ')}`
          : `Phù hợp với môn học yêu thích/thế mạnh: ${localizedMatchingSubjects.join(', ')}`
      );
    }
    if (completedCareerTasks.length > 0) {
      evidenceFromProfile.push(
        lang === 'en'
          ? `Tried ${completedCareerTasks.length} related simulation task(s); this does not increase the interest score.`
          : `Đã thử ${completedCareerTasks.length} mô phỏng liên quan; không tự động cộng điểm phù hợp.`
      );
    }
    if (evidenceFromProfile.length === 0) {
      evidenceFromProfile.push(
        lang === 'en'
          ? `Potential exploratory pathway based on your overall RIASEC profile (${top1}${top2}${top3})`
          : `Hướng khám phá mở rộng dựa trên cấu trúc RIASEC tổng thể (${top1}${top2}${top3})`
      );
    }

    const missingInformation: string[] = [];
    if (Math.max(...Object.values(scores)) - Math.min(...Object.values(scores)) <= 2) missingInformation.push(lang === 'en' ? 'Your interests are not clearly differentiated; explore several career groups.' : 'Sở thích chưa phân hóa rõ; nên khám phá thêm nhiều nhóm nghề.');
    if (favoriteSubjects.length === 0) {
      missingInformation.push(
        lang === 'en'
          ? 'Add your favorite high school subjects in your Profile for more accurate academic matching.'
          : 'Chưa cập nhật môn học yêu thích ở THPT trong Hồ sơ cá nhân.'
      );
    }
    if (completedCareerTasks.length === 0) {
      missingInformation.push(
        lang === 'en'
          ? 'Complete at least 1 Career Simulation Task in this field to verify your practical interest.'
          : 'Chưa hoàn thành bài tập mô phỏng thực tế thuộc nhóm ngành này để kiểm chứng cảm nhận.'
      );
    }

    const rawTask =
      SIMULATION_TASKS.find((t) => t.careerId === career.id) ||
      SIMULATION_TASKS.find((t) => (TASK_RIASEC_MAP[t.id] || []).some((c) => careerCodes.includes(c))) ||
      SIMULATION_TASKS[0];
    const localizedSuggestedTask = localizeTask(rawTask, lang);

    const linkedMajors = MAJORS_DATA.filter(
      (m) =>
        (m.linkedCareerIds || []).includes(career.id) ||
        (career.linkedMajorIds || []).includes(m.id)
    ).map((m) => localizeMajor(m, lang));

    return {
      career,
      matchScore: totalScore,
      breakdown: {
        riasecScore: riasecPoints,
        competencyScore: competencyPoints,
        valuesScore: valuesPoints,
        subjectsScore: subjectPoints,
        environmentScore: environmentPoints,
        total: totalScore,
        explanation,
      },
      hollandFitReason,
      evidenceFromProfile,
      valuesTradeoffs: (career.difficultiesAndTradeoffs || []).slice(0, 3),
      skillsToCultivate: career.coreSkills || [],
      missingInformation,
      suggestedTask: {
        id: localizedSuggestedTask.id,
        title: localizedSuggestedTask.title,
      },
      linkedMajors,
    };
  });

  return {
    ruleVersion: RULE_ENGINE_VERSION,
    generatedDate: new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'vi-VN'),
    recommendations,
  };
}

export function generateActionPlan(
  profile: StudentProfile,
  lang: 'vi' | 'en' = 'vi',
  existingSnapshot?: RecommendationSnapshot
): ActionPlanItem[] {
  const snapshot = existingSnapshot || generateRecommendations(profile, lang);
  if (snapshot.recommendations.length === 0) return [];
  const topRec = snapshot.recommendations[0];
  const topCareerTitle = topRec?.career.title || (lang === 'en' ? 'target career' : 'nghề nghiệp mục tiêu');
  const suggestedTaskTitle = topRec?.suggestedTask.title || (lang === 'en' ? 'Career Simulation' : 'Mô phỏng nghề nghiệp');
  const completedTasks = profile.completedTasks || [];
  const savedAdmissions = profile.savedAdmissions || [];

  if (lang === 'en') {
    return [
      {
        id: 'act-1',
        timeframe: '30_days',
        title: `Complete Simulation: "${suggestedTaskTitle}"`,
        description: `Experience a realistic work task for ${topCareerTitle} and record your Kolb reflection.`,
        status: completedTasks.length > 0 ? 'completed' : 'in_progress',
        category: 'explore',
      },
      {
        id: 'act-2',
        timeframe: '30_days',
        title: 'Watch 2 Real Career Stories & Compare Trade-offs',
        description: `Review the daily tasks and challenges of ${topCareerTitle} to verify if the work environment fits you.`,
        status: 'pending',
        category: 'explore',
      },
      {
        id: 'act-3',
        timeframe: '60_days',
        title: 'Shortlist 3 Universities & Check 2025–2026 Cutoffs',
        description: 'Compare historical cutoff scores, tuition ranges, and 2026 subject combinations in the Admissions tab.',
        status: savedAdmissions.length >= 3 ? 'completed' : 'pending',
        category: 'admission',
      },
      {
        id: 'act-4',
        timeframe: '60_days',
        title: 'Build Core Skills & Academic Foundation',
        description: `Focus on core subjects (${topRec?.career.highSchoolSubjects.slice(0, 3).join(', ') || 'Math, English'}) and practice 2026 competency tests.`,
        status: 'pending',
        category: 'skill',
      },
      {
        id: 'act-5',
        timeframe: '90_days',
        title: 'Export Career Report & Discuss with Parents/Teachers',
        description: 'Download your personalized Career Report and review your Safe / Target / Reach university list with your family.',
        status: 'pending',
        category: 'consult',
      },
    ];
  }

  return [
    {
      id: 'act-1',
      timeframe: '30_days',
      title: `Hoàn thành bài tập thử việc: "${suggestedTaskTitle}"`,
      description: `Trải nghiệm tình huống thực tế của nghề ${topCareerTitle} và ghi lại nhật ký phản tư theo chu trình Kolb.`,
      status: completedTasks.length > 0 ? 'completed' : 'in_progress',
      category: 'explore',
    },
    {
      id: 'act-2',
      timeframe: '30_days',
      title: 'Xem 2 câu chuyện người thật việc thật & đối chiếu góc khuất',
      description: `Tìm hiểu kỹ công việc hàng ngày và sự đánh đổi của nghề ${topCareerTitle} để tránh ngộ nhận.`,
      status: 'pending',
      category: 'explore',
    },
    {
      id: 'act-3',
      timeframe: '60_days',
      title: 'Lưu tối thiểu 3 trường Đại học/Cao đẳng vào danh sách so sánh',
      description: 'Đối chiếu điểm chuẩn 2023-2025, học phí và tổ hợp môn xét tuyển 2026 tại mục Tuyển sinh.',
      status: savedAdmissions.length >= 3 ? 'completed' : 'pending',
      category: 'admission',
    },
    {
      id: 'act-4',
      timeframe: '60_days',
      title: 'Rèn luyện môn học nền tảng & Làm đề thi thử 2026',
      description: `Tập trung các môn cốt lõi (${topRec?.career.highSchoolSubjects.slice(0, 3).join(', ') || 'Toán, Tiếng Anh'}) và luyện đề ĐGNL tại Tâm điểm 2026.`,
      status: 'pending',
      category: 'skill',
    },
    {
      id: 'act-5',
      timeframe: '90_days',
      title: 'Xuất Báo cáo hướng nghiệp & Thảo luận cùng Gia đình/Thầy cô',
      description: 'In báo cáo tổng hợp và thống nhất phương án nguyện vọng An toàn - Vừa sức - Thử thách cùng bố mẹ.',
      status: 'pending',
      category: 'consult',
    },
  ];
}
