import { StudentProfile, RecommendationSnapshot, RiasecCode, ActionPlanItem } from '../types';
import { CAREERS_DATA } from '../data/careers';
import { MAJORS_DATA } from '../data/majors';
import { SIMULATION_TASKS } from '../data/tasks';
import { hasCompletedRiasec, RIASEC_MAX_SCORES } from './riasec';
import { RIASEC_INFO } from '../data/riasecQuestions';
import { localizeCareer, localizeMajor, localizeTask, localizeSubject } from './i18nData';

export const RULE_ENGINE_VERSION = '2.4.1-transparent-2026';

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
    let riasecPoints = 0;
    const careerCodes = rawCareer.riasecCodes || [];

    if (careerCodes.includes(top1)) {
      const ratio = Math.min(1, Math.max(0, (scores[top1] || 0) / RIASEC_MAX_SCORES[top1]));
      riasecPoints += Math.round(25 * ratio);
    }
    if (careerCodes.includes(top2)) {
      const ratio = Math.min(1, Math.max(0, (scores[top2] || 0) / RIASEC_MAX_SCORES[top2]));
      riasecPoints += Math.round(15 * ratio);
    }
    if (careerCodes.includes(top3)) {
      const ratio = Math.min(1, Math.max(0, (scores[top3] || 0) / RIASEC_MAX_SCORES[top3]));
      riasecPoints += Math.round(5 * ratio);
    }

    let subjectPoints = 0;
    const careerSubjects = rawCareer.highSchoolSubjects || [];
    const matchingSubjects = careerSubjects.filter(
      (s) =>
        favoriteSubjects.includes(s) ||
        academicStrengths.includes(s) ||
        localizedSubjects.includes(localizeSubject(s, lang)) ||
        localizedStrengths.includes(localizeSubject(s, lang))
    );

    if (matchingSubjects.length >= 2) subjectPoints = 20;
    else if (matchingSubjects.length === 1) subjectPoints = 12;
    else if (favoriteSubjects.length === 0) subjectPoints = 8;

    let competencyPoints = 10;
    const completedCareerTasks = SIMULATION_TASKS.filter((t) => {
      if (!completedTasks.includes(t.id)) return false;
      if (t.careerId === rawCareer.id) return true;
      const taskCodes = TASK_RIASEC_MAP[t.id] || [];
      return taskCodes.some((c) => careerCodes.includes(c));
    });

    if (completedCareerTasks.length > 0) {
      competencyPoints = Math.min(20, 12 + completedCareerTasks.length * 4);
    }

    const valuesPoints = priorityValues.length > 0 ? 8 : 6;
    const environmentPoints = 5;
    const totalScore = Math.min(
      98,
      Math.max(42, riasecPoints + subjectPoints + competencyPoints + valuesPoints + environmentPoints)
    );

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

    const hollandFitReason =
      lang === 'en'
        ? `Your dominant Holland codes (${top1} - ${top1Name} & ${top2} - ${top2Name}) align closely with the core work activities of ${career.title} (Group ${careerCodes.join('-')}).`
        : `Tổ hợp mã Holland nổi trội của bạn (${top1} - ${top1Name} & ${top2} - ${top2Name}) tương thích trực tiếp với đặc thù công việc của nghề ${career.title} (Nhóm ${careerCodes.join('-')}).`;

    const explanation =
      lang === 'en'
        ? `Match score ${totalScore}% = Holland RIASEC (${riasecPoints}/45) + Subjects (${subjectPoints}/20) + Simulation Tasks (${competencyPoints}/20) + Values & Environment (${valuesPoints + environmentPoints}/15).`
        : `Điểm tương thích ${totalScore}% = Holland RIASEC (${riasecPoints}/45) + Môn học (${subjectPoints}/20) + Thực hành mô phỏng (${competencyPoints}/20) + Giá trị & Môi trường (${valuesPoints + environmentPoints}/15).`;

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
          ? `Verified through ${completedCareerTasks.length} hands-on simulation task(s)`
          : `Đã kiểm chứng qua ${completedCareerTasks.length} bài tập mô phỏng thực tế`
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
