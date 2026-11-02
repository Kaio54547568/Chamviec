import {
  Career,
  Major,
  University,
  AdmissionRecord,
  CareerTask,
  VideoStory,
  EnterpriseBatch,
} from '../types';
import {
  AdmissionTickerItem,
  MoetRegulationItem,
  OfficialExamLibraryItem,
  PracticeExamSet,
} from '../data/admissions2026';

// ============================================================================
// 1. HIGH SCHOOL SUBJECTS & COMMON TERMS LOCALIZATION
// ============================================================================
const SUBJECT_EN_MAP: Record<string, string> = {
  'Toán học': 'Mathematics',
  'Toán': 'Mathematics',
  'Vật lý': 'Physics',
  'Hóa học': 'Chemistry',
  'Sinh học': 'Biology',
  'Ngữ văn': 'Literature',
  'Văn': 'Literature',
  'Tiếng Anh': 'English',
  'Ngoại ngữ': 'Foreign Languages',
  'Tin học': 'Computer Science',
  'Lịch sử': 'History',
  'Địa lý': 'Geography',
  'GDKT & PL': 'Economics & Law',
  'Giáo dục kinh tế & Pháp luật': 'Economics & Law',
  'Kinh tế & Pháp luật': 'Economics & Law',
  'Kinh tế - Pháp luật': 'Economics & Law',
  'Công nghệ': 'Technology',
  'Mỹ thuật': 'Fine Arts',
  'Mỹ thuật / Âm nhạc': 'Fine Arts / Music',
  'Âm nhạc': 'Music',
  'Thể chất': 'Physical Education',
  'Khoa học tự nhiên': 'Natural Sciences',
  'Khoa học xã hội': 'Social Sciences',
  'Toán học (Thống kê)': 'Mathematics (Statistics)',
  'Tiếng Anh (Đọc tài liệu)': 'English (Technical Reading)',
  'Ngoại ngữ (Anh/Nhật/Hàn/Trung)': 'Foreign Languages (EN/JP/KR/ZH)',
  'Ngoại ngữ (Anh, Trung, Nhật, Hàn)': 'Foreign Languages (EN, ZH, JP, KR)',
};

export function localizeSubject(subj: string, lang: 'vi' | 'en'): string {
  if (lang === 'vi' || !subj) return subj;
  if (SUBJECT_EN_MAP[subj]) return SUBJECT_EN_MAP[subj];
  let out = subj;
  for (const [vi, en] of Object.entries(SUBJECT_EN_MAP)) {
    if (out.includes(vi)) {
      out = out.replace(new RegExp(vi, 'g'), en);
    }
  }
  return out;
}

const CATEGORY_EN_MAP: Record<string, string> = {
  'Công nghệ thông tin & AI': 'Information Technology & AI',
  'Công nghệ thông tin & Trí tuệ nhân tạo': 'Information Technology & AI',
  'Công nghệ thông tin & Máy tính': 'IT & Computer Science',
  'Công nghệ thông tin': 'Information Technology',
  'Kỹ thuật, Cơ khí & Tự động hóa': 'Engineering, Mechanics & Automation',
  'Kỹ thuật - Chế tạo & Tự động hoá': 'Engineering, Manufacturing & Automation',
  'Kỹ thuật - Chế tạo': 'Engineering & Manufacturing',
  'Điện tử - Viễn thông & Bán dẫn': 'Electronics, Telecom & Semiconductors',
  'Kỹ thuật Cơ khí, Điện & Bán dẫn': 'Mechanical, Electrical & Semiconductor Eng.',
  'Kinh tế, Tài chính & Quản trị': 'Economics, Finance & Management',
  'Kinh tế - Tài chính & Ngân hàng': 'Economics, Finance & Banking',
  'Kinh doanh - Thương mại & Marketing': 'Business, Commerce & Marketing',
  'Kinh doanh, Tài chính & Quản lý': 'Business, Finance & Management',
  'Y tế & Chăm sóc sức khỏe': 'Healthcare & Medicine',
  'Y khoa - Dược học & Khoa học Sức khỏe': 'Medicine, Pharmacy & Health Sciences',
  'Y dược & Chăm sóc sức khỏe': 'Medicine, Pharmacy & Healthcare',
  'Y tế & Sức khỏe': 'Healthcare & Medicine',
  'Giáo dục & Đào tạo': 'Education & Pedagogy',
  'Giáo dục - Sư phạm & Khảo thí': 'Education, Pedagogy & Assessment',
  'Giáo dục & Sư phạm': 'Education & Pedagogy',
  'Truyền thông, Báo chí & Marketing': 'Media, Journalism & Marketing',
  'Truyền thông - Báo chí & Xuất bản': 'Media, Journalism & Publishing',
  'Báo chí, Truyền thông & Marketing': 'Journalism, Media & Marketing',
  'Thiết kế, Nghệ thuật & Sáng tạo': 'Design, Arts & Creative Industries',
  'Nghệ thuật - Thiết kế & Sáng tạo Số': 'Arts, Design & Digital Creativity',
  'Nghệ thuật, Thiết kế & Đa phương tiện': 'Arts, Design & Multimedia',
  'Nông - Lâm - Ngư nghiệp & Môi trường': 'Agriculture, Forestry, Fisheries & Environment',
  'Nông nghiệp - Lâm nghiệp & Thủy sản': 'Agriculture, Forestry & Fisheries',
  'Nông nghiệp công nghệ cao': 'High-Tech Agriculture',
  'Nông nghiệp CNC & Môi trường': 'High-Tech Agriculture & Environment',
  'Du lịch, Khách sạn & Dịch vụ': 'Tourism, Hospitality & Services',
  'Du lịch - Khách sạn & Ẩm thực': 'Tourism, Hospitality & Culinary Arts',
  'Dịch vụ, Du lịch & Ẩm thực': 'Services, Tourism & Culinary Arts',
  'Luật, Hành chính & Khoa học Xã hội': 'Law, Public Admin & Social Sciences',
  'Luật học - Quản lý Nhà nước & Chính sách': 'Law, Public Governance & Policy',
  'Khoa học Xã hội - Nhân văn & Tâm lý': 'Social Sciences, Humanities & Psychology',
  'Pháp luật & Khoa học xã hội': 'Law & Social Sciences',
  'Xây dựng & Kiến trúc': 'Construction & Architecture',
  'Xây dựng - Kiến trúc & Đô thị': 'Construction, Architecture & Urban Planning',
  'Kiến trúc & Xây dựng': 'Architecture & Construction',
  'Logistics & Chuỗi cung ứng': 'Logistics & Supply Chain',
  'Logistics - Vận tải & Chuỗi Cung ứng': 'Logistics, Transport & Supply Chain',
  'Ngôn ngữ & Văn hóa quốc tế': 'Languages & International Studies',
  'Ngôn ngữ - Văn hoá & Quan hệ Quốc tế': 'Languages, Culture & International Relations',
  'Thủ công mỹ nghệ & Di sản': 'Traditional Crafts & Cultural Heritage',
  'Khoa học cơ bản & Nghiên cứu': 'Natural Sciences & Research',
  'Khoa học Tự nhiên & Đời sống': 'Natural & Life Sciences',
  'Năng lượng - Môi trường & Biến đổi Khí hậu': 'Energy, Environment & Climate Change',
  'Thể dục - Thể thao & Chăm sóc Thể chất': 'Sports Science & Physical Wellness',
  'An ninh mạng & An toàn Thông tin Quốc gia': 'Cybersecurity & Information Assurance',
  'Tâm lý & Công tác xã hội': 'Psychology & Social Work',
  'An ninh - Quốc phòng': 'Security & Defense',
  'Thương mại điện tử & Logistics': 'E-Commerce & Logistics',
  'Sản xuất & Chế biến': 'Manufacturing & Processing',
};

export function localizeCategoryLabel(label: string, lang: 'vi' | 'en'): string {
  if (lang === 'vi' || !label) return label;
  if (CATEGORY_EN_MAP[label]) return CATEGORY_EN_MAP[label];
  return label
    .replace('Công nghệ thông tin', 'Information Technology')
    .replace('Kỹ thuật', 'Engineering')
    .replace('Kinh tế', 'Economics')
    .replace('Tài chính', 'Finance')
    .replace('Quản trị', 'Management')
    .replace('Y tế', 'Healthcare')
    .replace('Giáo dục', 'Education')
    .replace('Truyền thông', 'Media & Communications')
    .replace('Nông nghiệp', 'Agriculture')
    .replace('Môi trường', 'Environment')
    .replace('Du lịch', 'Tourism')
    .replace('Dịch vụ', 'Services')
    .replace('Thiết kế', 'Design')
    .replace('Nghệ thuật', 'Arts')
    .replace('Xây dựng', 'Civil Engineering')
    .replace('Kiến trúc', 'Architecture')
    .replace('Ngôn ngữ', 'Languages')
    .replace('Xã hội', 'Social Sciences');
}

// ============================================================================
// 2. CAREER LOCALIZATION
// ============================================================================
const WORK_ENV_EN_MAP: Record<string, string> = {
  'Văn phòng công nghệ, làm việc nhóm Agile hoặc làm việc từ xa (Remote/Hybrid).':
    'Tech office, Agile team collaboration, or flexible Remote/Hybrid work environment.',
  'Văn phòng hiện đại, trung tâm nghiên cứu phát triển (R&D), làm việc với hệ thống máy chủ đám mây.':
    'Modern office, R&D center, working with cloud computing and server clusters.',
  'Văn phòng doanh nghiệp, ngân hàng, công ty kiểm toán hoặc bộ phận kế hoạch tài chính.':
    'Corporate office, commercial bank, auditing firm, or financial planning department.',
  'Bệnh viện, trung tâm y tế, phòng khám chuyên khoa hoặc viện nghiên cứu y sinh.':
    'Hospitals, medical centers, specialized clinics, or biomedical research institutes.',
  'Trường học công lập/tư thục, trung tâm giáo dục, tổ chức đào tạo học thuật.':
    'Public/private schools, educational centers, and academic training institutions.',
  'Nhà máy sản xuất tự động hóa, xưởng cơ khí chính xác, khu công nghiệp công nghệ cao.':
    'Automated manufacturing plants, precision mechanical workshops, and high-tech industrial parks.',
  'Phòng sạch (Cleanroom), phòng lab đo kiểm vi mạch (ATE Lab), trung tâm R&D thiết kế chip.':
    'Semiconductor cleanrooms, Automated Test Equipment (ATE) labs, and IC design R&D centers.',
  'Công trường xây dựng, văn phòng tư vấn thiết kế kiến trúc - kết cấu, ban quản lý dự án.':
    'Construction sites, architectural & structural design studios, and project management offices.',
  'Trang trại thông minh (Smart Farm), nhà màng IoT, viện giống cây trồng hoặc phòng lab sinh học.':
    'Smart farms, IoT greenhouses, crop research institutes, or biotechnology laboratories.',
  'Tòa soạn báo, đài truyền hình, agency quảng cáo sáng tạo, phim trường truyền thông số.':
    'Newsrooms, broadcasting stations, creative advertising agencies, and digital media studios.',
  'Khách sạn, khu nghỉ dưỡng (Resort), công ty lữ hành quốc tế, trung tâm hội nghị sự kiện.':
    'Hotels, resorts, international travel agencies, and convention & event centers.',
  'Hội nghị quốc tế, phòng họp thương mại, cơ quan ngoại giao, văn phòng đa quốc gia.':
    'International conferences, business negotiation rooms, diplomatic missions, and multinational offices.',
  'Quầy giao dịch ngân hàng, văn phòng tư vấn tài chính, đi khảo sát thực địa khách hàng.':
    'Bank transaction counters, financial advisory offices, and client fieldwork sites.',
};

export function hasVietnameseChars(str: string): boolean {
  return /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(str || '');
}

export function localizeCareer(career: Career, lang: 'vi' | 'en'): Career {
  if (lang === 'vi') return career;

  const enTitle = career.englishTitle || career.title;
  const enCat = localizeCategoryLabel(career.categoryLabel, 'en');
  const enSubjects = career.highSchoolSubjects.map((s) => localizeSubject(s, 'en'));
  const riasecStr = career.riasecCodes.join('-');

  const shortSummaryEn = !hasVietnameseChars(career.shortSummary)
    ? career.shortSummary
    : `Professional role in ${enCat} (${enTitle}) aligned with Holland code ${riasecStr}. Combines foundational knowledge in ${enSubjects.slice(0, 3).join(', ')} with practical problem-solving and modern industry tools.`;

  const workEnvEn = !hasVietnameseChars(career.workEnvironment)
    ? career.workEnvironment
    : WORK_ENV_EN_MAP[career.workEnvironment] ||
      `Professional workspace in ${enCat}: collaborative offices, specialized labs, or field operations depending on project stage.`;

  const entryPathwayEn = !hasVietnameseChars(career.entryPathway)
    ? career.entryPathway
    : `High School (${enSubjects.slice(0, 3).join(', ')}) → University Bachelor's / Engineering Degree or Specialized College Program → Industry Internship → Junior ${enTitle} → Senior Specialist / Team Lead.`;

  const typicalTasksEn = career.typicalTasks.map((task, idx) => {
    if (!hasVietnameseChars(task)) return task;
    const templates = [
      `Plan, analyze requirements, and execute core daily workflows as a ${enTitle}.`,
      `Apply specialized tools (${career.toolsUsed.slice(0, 2).join(', ') || 'industry software'}) to build, inspect, or optimize deliverables.`,
      `Collaborate with cross-functional teams, stakeholders, or clients to ensure quality standards and safety compliance.`,
      `Review performance metrics, troubleshoot technical or operational issues, and document improvements.`,
    ];
    return templates[idx % templates.length];
  });

  const deliverablesEn = (career.deliverables || []).map((deliv, idx) => {
    if (!hasVietnameseChars(deliv)) return deliv;
    const templates = [
      `Verified technical specifications, operational plans, or design blueprints for ${enTitle}.`,
      `Quality-checked products, analytical reports, or service outcomes meeting industry standards.`,
      `Process documentation, performance dashboards, and stakeholder recommendations.`,
    ];
    return templates[idx % templates.length];
  });

  const toolsEn = career.toolsUsed.map((tool) => {
    if (!hasVietnameseChars(tool)) return tool;
    const cleaned = tool
      .replace(/Phần mềm chuyên dụng/gi, 'Specialized Industry Software')
      .replace(/Thiết bị đo kiểm/gi, 'Diagnostic & Testing Instruments')
      .replace(/Hệ thống quản lý/gi, 'Management Information System')
      .replace(/Công cụ văn phòng/gi, 'Productivity & Analytics Suite');
    return hasVietnameseChars(cleaned) ? 'Standard Industry Hardware & Software Suite' : cleaned;
  });

  const tradeoffsEn = career.difficultiesAndTradeoffs.map((diff, idx) => {
    if (!hasVietnameseChars(diff)) return diff;
    const templates = [
      `Requires continuous learning and discipline to keep pace with evolving standards in ${enCat}.`,
      `High responsibility for accuracy, deadlines, and real-world impact during peak project phases.`,
      `Initial entry stage demands strong foundational skills in ${enSubjects.slice(0, 2).join(' & ')} and hands-on practice.`,
    ];
    return templates[idx % templates.length];
  });

  const skillsEn = career.coreSkills.map((sk, idx) => {
    if (!hasVietnameseChars(sk)) return sk;
    const skillTemplates = [
      `Core Technical & Domain Proficiency (${enTitle})`,
      `Analytical Thinking & Structured Problem Solving`,
      `Team Collaboration & Professional Communication`,
      `Practical Tool Mastery & Quality Assurance`,
    ];
    return skillTemplates[idx % skillTemplates.length];
  });

  return {
    ...career,
    title: enTitle,
    categoryLabel: enCat,
    shortSummary: shortSummaryEn,
    workEnvironment: workEnvEn,
    typicalTasks: typicalTasksEn,
    deliverables: deliverablesEn.length > 0 ? deliverablesEn : ['Technical documentation, verified reports, and project deliverables'],
    toolsUsed: toolsEn,
    difficultiesAndTradeoffs: tradeoffsEn,
    coreSkills: skillsEn,
    highSchoolSubjects: enSubjects,
    entryPathway: entryPathwayEn,
  };
}

// ============================================================================
// 3. MAJOR, UNIVERSITY & ADMISSION RECORD LOCALIZATION
// ============================================================================
const MAJOR_NAME_EN_MAP: Record<string, string> = {
  'Khoa học máy tính': 'Computer Science',
  'Kỹ thuật phần mềm': 'Software Engineering',
  'Công nghệ thông tin': 'Information Technology',
  'Trí tuệ nhân tạo': 'Artificial Intelligence & Data Science',
  'An toàn thông tin': 'Information Security (Cybersecurity)',
  'Hệ thống thông tin quản lý': 'Management Information Systems (MIS)',
  'Kỹ thuật máy tính & Thiết kế vi mạch': 'Computer Engineering & IC Design',
  'Thiết kế vi mạch bán dẫn': 'Semiconductor IC Design',
  'Kỹ thuật Điện tử - Viễn thông': 'Electronics & Telecommunications Engineering',
  'Kỹ thuật Điều khiển và Tự động hóa': 'Control & Automation Engineering',
  'Kỹ thuật Cơ điện tử': 'Mechatronics Engineering',
  'Kỹ thuật Ô tô': 'Automotive Engineering',
  'Công nghệ kỹ thuật ô tô': 'Automotive Engineering Technology',
  'Kỹ thuật Cơ khí': 'Mechanical Engineering',
  'Kỹ thuật Điện': 'Electrical Engineering',
  'Kỹ thuật Xây dựng': 'Civil & Structural Engineering',
  'Kiến trúc': 'Architecture & Urban Design',
  'Quản trị kinh doanh': 'Business Administration',
  'Tài chính - Ngân hàng': 'Finance & Banking',
  'Kế toán': 'Accounting & Auditing',
  'Kinh tế quốc tế': 'International Economics',
  'Kinh doanh quốc tế': 'International Business',
  'Thương mại điện tử': 'E-Commerce',
  'Marketing': 'Marketing & Brand Management',
  'Logistics và Quản lý chuỗi cung ứng': 'Logistics & Supply Chain Management',
  'Y khoa': 'General Medicine (Doctor of Medicine)',
  'Y đa khoa': 'General Medicine (Doctor of Medicine)',
  'Dược học': 'Pharmacy & Pharmaceutical Sciences',
  'Điều dưỡng': 'Nursing & Patient Care',
  'Kỹ thuật xét nghiệm y học': 'Medical Laboratory Technology',
  'Răng - Hàm - Mặt': 'Odonto-Stomatology (Dentistry)',
  'Sư phạm Toán học': 'Mathematics Teacher Education',
  'Sư phạm Ngữ văn': 'Literature Teacher Education',
  'Sư phạm Tiếng Anh': 'English Teacher Education',
  'Giáo dục Tiểu học': 'Primary Education',
  'Giáo dục Mầm non': 'Early Childhood Education',
  'Ngôn ngữ Anh': 'English Language & Translation Studies',
  'Ngôn ngữ Trung Quốc': 'Chinese Language Studies',
  'Ngôn ngữ Nhật': 'Japanese Language Studies',
  'Ngôn ngữ Hàn Quốc': 'Korean Language Studies',
  'Báo chí': 'Journalism & News Media',
  'Truyền thông đa phương tiện': 'Multimedia Communications',
  'Quan hệ công chúng': 'Public Relations (PR)',
  'Thiết kế đồ họa': 'Graphic & Interactive Design',
  'Luật': 'Law & Legal Studies',
  'Luật kinh tế': 'Economic Law',
  'Tâm lý học': 'Psychology',
  'Công tác xã hội': 'Social Work',
  'Quản trị dịch vụ du lịch và lữ hành': 'Tourism & Travel Management',
  'Quản trị khách sạn': 'Hospitality & Hotel Management',
  'Nông nghiệp công nghệ cao': 'High-Tech Agriculture',
  'Khoa học cây trồng': 'Crop Science & Agronomy',
  'Công nghệ sinh học': 'Biotechnology',
  'Công nghệ thực phẩm': 'Food Science & Technology',
  'Thú y': 'Veterinary Medicine',
  'Lâm học': 'Forestry & Ecosystem Management',
  'Kinh tế nông nghiệp': 'Agricultural Economics',
};

export function localizeMajorName(name: string, lang: 'vi' | 'en'): string {
  if (lang === 'vi' || !name) return name;
  if (MAJOR_NAME_EN_MAP[name]) return MAJOR_NAME_EN_MAP[name];

  for (const [vi, en] of Object.entries(MAJOR_NAME_EN_MAP)) {
    if (name.toLowerCase() === vi.toLowerCase()) return en;
  }

  return name
    .replace(/^Kỹ thuật /i, 'Engineering in ')
    .replace(/^Công nghệ kỹ thuật /i, 'Engineering Technology in ')
    .replace(/^Công nghệ /i, 'Technology in ')
    .replace(/^Sư phạm /i, 'Teacher Education in ')
    .replace(/^Quản trị /i, 'Management of ')
    .replace(/^Ngôn ngữ /i, 'Language Studies: ')
    .replace(/^Kinh tế /i, 'Economics: ')
    .replace(/^Khoa học /i, 'Science of ');
}

export function localizeMajor(major: Major, lang: 'vi' | 'en'): Major {
  if (lang === 'vi') return major;
  const enName = localizeMajorName(major.name, 'en');
  const enCatName = localizeCategoryLabel(major.categoryName, 'en');
  return {
    ...major,
    name: enName,
    categoryName: enCatName,
    field: localizeCategoryLabel(major.field, 'en'),
    description: !hasVietnameseChars(major.description)
      ? major.description
      : `Academic program in ${enName} (${enCatName}, MOET Code: ${major.code}). Equips students with foundational theory, practical lab skills, and professional competencies over ${major.durationYears} years.`,
    suitableSubjects: major.suitableSubjects.map((s) => localizeSubject(s, 'en')),
  };
}

const REGION_EN_MAP: Record<string, string> = {
  'Miền Bắc': 'Northern Region',
  'Miền Trung': 'Central & Highlands Region',
  'Miền Nam': 'Southern Region',
};

const OWNERSHIP_EN_MAP: Record<string, string> = {
  'Công lập': 'Public University',
  'Tư thục': 'Private University',
  'Quốc tế': 'International / Joint University',
};

export function localizeRegion(region: string, lang: 'vi' | 'en'): string {
  if (lang === 'vi' || !region) return region;
  return REGION_EN_MAP[region] || region;
}

export function localizeOwnership(ownership: string, lang: 'vi' | 'en'): string {
  if (lang === 'vi' || !ownership) return ownership;
  return OWNERSHIP_EN_MAP[ownership] || ownership;
}

export function localizeUniversityName(name: string, lang: 'vi' | 'en'): string {
  if (lang === 'vi' || !name) return name;
  return name
    .replace('Đại học Bách khoa Hà Nội', 'Hanoi University of Science and Technology (HUST)')
    .replace('Trường Đại học Công nghệ - ĐHQGHN', 'VNU University of Engineering and Technology (UET)')
    .replace('Trường Đại học Kinh tế Quốc dân', 'National Economics University (NEU)')
    .replace('Đại học Kinh tế Quốc dân', 'National Economics University (NEU)')
    .replace('Trường Đại học Ngoại thương', 'Foreign Trade University (FTU)')
    .replace('Trường Đại học Y Hà Nội', 'Hanoi Medical University (HMU)')
    .replace('Trường Đại học Sư phạm Hà Nội', 'Hanoi National University of Education (HNUE)')
    .replace('Trường Đại học Bách khoa - ĐHQG TP.HCM', 'VNU-HCM University of Technology (HCMUT)')
    .replace('Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM', 'VNU-HCM University of Information Technology (UIT)')
    .replace('Trường Đại học Y Dược TP.HCM', 'University of Medicine and Pharmacy at HCMC (UMP)')
    .replace('Đại học Kinh tế TP.HCM', 'University of Economics Ho Chi Minh City (UEH)')
    .replace('Trường Đại học Sư phạm Kỹ thuật TP.HCM', 'HCMC University of Technology and Education (HCMUTE)')
    .replace('Trường Đại học Cần Thơ', 'Can Tho University (CTU)')
    .replace('Đại học Cần Thơ', 'Can Tho University (CTU)')
    .replace('Trường Đại học Bách khoa - ĐH Đà Nẵng', 'DUT - University of Danang')
    .replace('Trường Đại học Kinh tế - ĐH Đà Nẵng', 'DUE - University of Danang')
    .replace('Trường Đại học Sư phạm - ĐH Đà Nẵng', 'UED - University of Danang')
    .replace('Trường Đại học Tây Bắc', 'Tay Bac University (Northwest)')
    .replace('Trường Đại học Tây Nguyên', 'Tay Nguyen University (Central Highlands)')
    .replace('Trường Đại học Nông Lâm TP.HCM', 'Nong Lam University HCMC')
    .replace('Học viện Nông nghiệp Việt Nam', 'Vietnam National University of Agriculture (VNUA)')
    .replace('Trường Đại học FPT', 'FPT University')
    .replace('Trường Đại học Khoa học Xã hội và Nhân văn', 'University of Social Sciences and Humanities (USSH)')
    .replace('Trường Đại học Ngoại ngữ', 'University of Languages and International Studies (ULIS)')
    .replace('Học viện Ngân hàng', 'Banking Academy of Vietnam')
    .replace('Học viện Tài chính', 'Academy of Finance')
    .replace('Học viện Báo chí và Tuyên truyền', 'Academy of Journalism and Communication (AJC)')
    .replace('Trường Đại học Luật Hà Nội', 'Hanoi Law University (HLU)')
    .replace('Trường Đại học Luật TP.HCM', 'Ho Chi Minh City University of Law')
    .replace('Trường Đại học Xây dựng Hà Nội', 'Hanoi University of Civil Engineering (HUCE)')
    .replace('Trường Đại học Kiến trúc Hà Nội', 'Hanoi Architectural University (HAU)')
    .replace('Trường Đại học Kiến trúc TP.HCM', 'Ho Chi Minh City University of Architecture (UAH)')
    .replace('Trường Đại học Giao thông Vận tải', 'University of Transport and Communications (UTC)')
    .replace('Trường Đại học Dược Hà Nội', 'Hanoi University of Pharmacy (HUP)')
    .replace('Trường Đại học Thương mại', 'Thuongmai University (TMU)')
    .replace('Trường Đại học Hà Nội', 'Hanoi University (HANU)')
    .replace(/^Trường Đại học /i, 'University of ')
    .replace(/^Đại học /i, 'University of ')
    .replace(/^Học viện /i, 'Academy of ')
    .replace(/^Trường Cao đẳng /i, 'College of ');
}

export function localizeUniversity(uni: University, lang: 'vi' | 'en'): University {
  if (lang === 'vi') return uni;
  return {
    ...uni,
    name: localizeUniversityName(uni.name || uni.officialName, 'en'),
    officialName: localizeUniversityName(uni.officialName || uni.name || '', 'en'),
  };
}

export function localizeAdmissionRecord(rec: AdmissionRecord, lang: 'vi' | 'en'): AdmissionRecord {
  if (lang === 'vi') return rec;

  const progMap: Record<string, string> = {
    'Chuẩn': 'Standard Program',
    'Đại trà': 'Standard Program',
    'Chất lượng cao': 'High-Quality Program',
    'Tiên tiến': 'Advanced International Program',
    'Tài năng': 'Talented / Honors Program',
    'Liên kết quốc tế': 'International Joint Program',
    'Song bằng': 'Dual-Degree Program',
  };

  const methodEn = (rec.method || '')
    .replace('Điểm thi THPT', 'High School Graduation Exam Score')
    .replace('Điểm thi tốt nghiệp THPT', 'High School Graduation Exam Score')
    .replace('Xét điểm thi tốt nghiệp THPT', 'High School Graduation Exam Score')
    .replace('Đề án 2025 (GDPT 2018)', '2025 Official Admission Scheme (2018 Curriculum)')
    .replace('Đánh giá năng lực', 'Aptitude Assessment (HSA / VNU-HCM)')
    .replace('Đánh giá tư duy', 'Thinking Skills Assessment (TSA)')
    .replace('Xét tuyển kết hợp', 'Combined Admission (IELTS/SAT + Exam)');

  const scaleEn = (rec.scoreScale || 'Thang 30')
    .replace('Thang 30', '30-Point Scale')
    .replace('Thang 40', '40-Point Scale')
    .replace('Thang 100', '100-Point Scale')
    .replace('Thang 150', '150-Point Scale (HSA)')
    .replace('Thang 1200', '1200-Point Scale (VNU-HCM)');

  const formulaEn = (rec.calculationFormula || '')
    .replace('Tổng 3 môn không nhân hệ số + Điểm ưu tiên', 'Sum of 3 subjects (unweighted) + Priority Points')
    .replace('Toán nhân hệ số 2', 'Mathematics weighted x2')
    .replace('Tiếng Anh nhân hệ số 2', 'English weighted x2')
    .replace('Điểm ưu tiên', 'Priority Bonus');

  const tuitionEn = (rec.tuitionInfo || '')
    .replace(/triệu\/năm/gi, 'M VND/year')
    .replace(/triệu đồng\/năm/gi, 'M VND/year')
    .replace(/Miễn học phí \(Ngành Sư phạm - NĐ 116\)/gi, '100% Tuition Exempt (Pedagogy Decree 116)')
    .replace(/Miễn học phí/gi, 'Tuition Exempt')
    .replace(/Khoảng/gi, 'Approx.');

  const subCriteriaEn = (rec.subCriteria || '')
    .replace(/Ưu tiên điểm Toán/gi, 'Tie-breaker: Higher Math score')
    .replace(/Ưu tiên điểm Ngữ văn/gi, 'Tie-breaker: Higher Literature score')
    .replace(/Ưu tiên điểm Tiếng Anh/gi, 'Tie-breaker: Higher English score')
    .replace(/Ưu tiên thứ tự nguyện vọng/gi, 'Tie-breaker: Higher preference order (NV1)')
    .replace(/Thứ tự nguyện vọng/gi, 'Preference order');

  const sourceDocEn = (rec.sourceDocument || '')
    .replace(/Đề án tuyển sinh/gi, 'Official Admission Scheme')
    .replace(/Công bố điểm chuẩn/gi, 'Official Cutoff Announcement')
    .replace(/Quyết định điểm chuẩn/gi, 'Official Cutoff Decision');

  return {
    ...rec,
    universityName: localizeUniversityName(rec.universityName || '', 'en'),
    majorName: localizeMajorName(rec.majorName || '', 'en'),
    campus: (rec.campus || '').replace('Cơ sở chính', 'Main Campus').replace('Phân hiệu', 'Branch Campus'),
    programName: progMap[rec.programName || ''] || rec.programName || 'Standard Program',
    method: hasVietnameseChars(methodEn) ? 'High School Graduation Exam Score' : methodEn,
    scoreScale: hasVietnameseChars(scaleEn) ? '30-Point Scale' : scaleEn,
    calculationFormula: hasVietnameseChars(formulaEn) ? 'Sum of 3 combination subjects + Regional/Policy Priority Points' : formulaEn,
    tuitionInfo: hasVietnameseChars(tuitionEn) ? tuitionEn.replace(/triệu/gi, 'M VND').replace(/năm/gi, 'yr') : tuitionEn,
    subCriteria: hasVietnameseChars(subCriteriaEn) ? 'Tie-breaker: Key subject score & Preference rank (NV1)' : subCriteriaEn,
    sourceDocument: hasVietnameseChars(sourceDocEn) ? `Official University Admission Decision (${rec.year})` : sourceDocEn,
  };
}

// ============================================================================
// 4. SIMULATION TASKS LOCALIZATION (ALL TASKS IN /src/data/tasks.ts)
// ============================================================================
const TASK_EN_TRANSLATIONS: Record<string, Partial<CareerTask>> = {
  'task-thiet-ke': {
    careerTitle: 'UI/UX & Graphic Designer',
    title: 'Design Challenge: Event Poster Layout & Accessible Contrast',
    scenario:
      'Your high school is hosting the "Green Highlands Book & Culture Fair". The Organizing Committee asked you to design the main digital poster so students and parents can read key information within 3 seconds on mobile screens.',
    instructions: [
      'Stage 1: Establish visual hierarchy for the 4 information blocks.',
      'Stage 2: Select color contrast between background and text to ensure readability in bright sunlight.',
      'Stage 3: Choose a clear Call-to-Action (CTA) layout.',
    ],
    stages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Establish Visual Hierarchy',
        description:
          'You have 4 elements: (1) Event Title "Green Highlands Book Fair", (2) Date & Venue, (3) 10-line list of sponsors, (4) Illustration. How will you size and arrange them?',
        options: [
          {
            id: 'tk-opt-1',
            label: 'Option A: Make all 4 text blocks the exact same font size for fairness',
            reasoning: 'Equal sizing eliminates focal points; viewers do not know where to look first.',
            outcomeDescription: 'Students walk past the poster because it looks like a dense wall of text.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
          {
            id: 'tk-opt-2',
            label: 'Option B: Event Title largest in the center (40%), Date & Venue bold below (25%), Sponsor logos neatly at the bottom (10%)',
            reasoning: 'Follows standard visual scanning flow (Z-pattern / F-pattern), helping viewers grasp the core message in 3 seconds.',
            outcomeDescription: 'Awesome! Viewers immediately remember the event name and Sunday 8:00 AM schedule.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'tk-opt-3',
            label: 'Option C: Make the sponsor list largest at the top, and hide the event title in a bottom corner',
            reasoning: 'Reverses information priority, confusing viewers about what the event actually is.',
            outcomeDescription: 'Students mistake the poster for a commercial advertisement and ignore it.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
        ],
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Color Contrast & Accessibility',
        description: 'The poster will be shared on smartphones outdoors. Which background and text pairing works best?',
        options: [
          {
            id: 'tk-opt-4',
            label: 'Option A: Neon yellow text (#FFFF00) on a bright white background (#FFFFFF)',
            reasoning: 'Contrast ratio is only 1.07:1 (far below the WCAG 4.5:1 standard), causing severe eye strain.',
            outcomeDescription: 'Nobody can read the event date without squinting.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
          {
            id: 'tk-opt-5',
            label: 'Option B: Deep forest green background (#064E3B) with crisp cream-white typography (#ECFDF5) and warm amber accents',
            reasoning: 'High contrast ratio (>10:1), evokes the "Green Highlands" theme while remaining crisp on mobile screens.',
            outcomeDescription: 'The poster looks harmonious, professional, and effortless to read for both students and parents!',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
        ],
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Optimizing the Registration Call-to-Action (CTA)',
        description: 'You want students to register for the book exchange booth. How do you design the registration area?',
        options: [
          {
            id: 'tk-opt-6',
            label: 'Option A: Print a 95-character raw Google Forms URL in tiny text at the bottom edge',
            reasoning: 'Nobody will manually type a 95-character URL from an image into their phone browser.',
            outcomeDescription: 'Only 2 students register after 3 days of posting.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
          {
            id: 'tk-opt-7',
            label: 'Option B: Place a high-contrast QR Code inside a rounded frame with the action label "Scan QR to Claim Free Book Voucher in 30s"',
            reasoning: 'Combines frictionless interaction (QR scan) with a clear user benefit.',
            outcomeDescription: 'Over 350 students scan the QR code and register on the very first day!',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
        ],
      },
    ],
    rubric: [
      { criterion: 'Visual Hierarchy Thinking', description: 'Prioritizes core information so viewers grasp the message immediately.' },
      { criterion: 'User Empathy & Accessibility', description: 'Selects readable contrast and convenient QR interaction for mobile users.' },
      { criterion: 'Design Self-Reflection', description: 'Recognizes that graphic design is visual problem-solving, not just decoration.' },
    ],
  },
  'task-marketing': {
    careerTitle: 'Marketing & Digital Marketing Specialist',
    title: 'Marketing Challenge: Launching a New Low-Sugar Milk Tea for Gen Z',
    scenario:
      'Your beverage company is launching a bottled low-sugar milk tea made with authentic Moc Chau Oolong tea aimed at Gen Z students. With a 30 million VND marketing budget for the launch week, your mission is to position the core tagline, allocate channels, and optimize conversion.',
    instructions: [
      'Stage 1: Select a core campaign tagline that resonates with Gen Z psychology.',
      'Stage 2: Allocate the 30M VND budget between TikTok KOC videos and campus tasting booths.',
      'Stage 3: Analyze 48-hour conversion metrics and fix checkout friction.',
    ],
    stages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Choosing the Core Campaign Tagline',
        description:
          'Gen Z cares about health and low sugar, yet refuses to sacrifice rich tea flavor and convenience. Which campaign tagline do you choose?',
        options: [
          {
            id: 'mkt-opt-1',
            label: 'Option A: "Nutritious Beverage Meeting #1 National Food Safety Standards"',
            reasoning: 'Sounds like a dry bureaucratic announcement; fails to spark emotional connection with youth.',
            outcomeDescription: 'Video completion rate hits only 1.2% as students scroll past immediately.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
          {
            id: 'mkt-opt-2',
            label: 'Option B: "Bold Oolong Taste, Light on Sugar – Recharge Your Mood All Day"',
            reasoning: 'Speaks Gen Z’s language: mood boost, low-sugar fitness, and authentic bold tea aroma.',
            outcomeDescription: 'Awesome! The teaser video achieves a 38% retention rate with hundreds of comments asking where to buy.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'mkt-opt-3',
            label: 'Option C: "Drink This Milk Tea and You Are Guaranteed to Score #1 in University Entrance Exams"',
            reasoning: 'False advertising and unrealistic claims violate marketing ethics.',
            outcomeDescription: 'Social media backlash erupts over deceptive claims, causing a PR crisis on day one.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
        ],
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Allocating the 30 Million VND Launch Budget',
        description: 'How do you maximize both brand awareness and real product trials on a 30M VND budget?',
        options: [
          {
            id: 'mkt-opt-4',
            label: 'Option A: 70% partnering with student TikTok KOCs for authentic reviews + 30% free tasting booths near schools',
            reasoning: 'Balances online social proof with offline sensory product trials.',
            outcomeDescription: 'Brand search volume jumps 5x and pilot stores sell out within 3 days!',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'mkt-opt-5',
            label: 'Option B: Spend all 30M VND hiring one A-list singer for a single Facebook post',
            reasoning: 'Exhausts the entire budget on one post with zero follow-up or product sampling.',
            outcomeDescription: 'High likes from celebrity fans, but actual store purchases remain very low.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Reading Funnel Metrics & Fixing Conversion Drop-off',
        description:
          'After 48 hours: 5,000 store clicks but only 120 orders. Quick surveys show students find shipping fees too expensive for a single bottle. What do you do?',
        options: [
          {
            id: 'mkt-opt-6',
            label: 'Option A: Launch a "3-Bottle Combo + Free Shipping" bundle and partner with local school convenience stores for zero-shipping pickup',
            reasoning: 'Directly solves the shipping fee pain point while increasing average order value (AOV).',
            outcomeDescription: 'Conversion rate surges to 8.5% and partner stores request urgent restocks!',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'mkt-opt-7',
            label: 'Option B: Double the ad spend to push more traffic into the same store link',
            reasoning: 'Pouring more money into a leaky conversion funnel wastes budget without fixing the root barrier.',
            outcomeDescription: 'Ad costs double while order volume stays stagnant due to high shipping fees.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
    ],
    rubric: [
      { criterion: 'Customer Insight Empathy', description: 'Understands target audience language, habits, and genuine needs.' },
      { criterion: 'Budget & Funnel Optimization', description: 'Balances reach with conversion metrics instead of vanity likes.' },
      { criterion: 'Marketing Self-Reflection', description: 'Reflects on whether combining creative messaging with data analytics excites you.' },
    ],
  },
  'task-data-analyst': {
    careerTitle: 'Business & Data Analyst',
    title: 'Data Challenge: Uncovering Sales Trends from Bookstore Datasets',
    scenario:
      'You receive the 6-month revenue dataset for a 15-branch bookstore chain. Total revenue dropped by 12% year-over-year, and the Director suspects staff laziness. As a Data Analyst, your job is to drill down into the data to uncover the true root cause.',
    instructions: [
      'Stage 1: Break down revenue by product category (Textbooks, Comics, Stationery, Life Skills Books).',
      'Stage 2: Cross-examine offline store foot traffic vs. online e-commerce pricing.',
      'Stage 3: Present an evidence-based visual dashboard recommendation to the Board.',
    ],
    stages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Category Drill-down Analysis',
        description:
          'Segmenting revenue by product category reveals:\n• Textbooks & School Supplies: +8% growth\n• Educational Toys: +3% growth\n• Literature & Self-Help Books: -35% drop\n\nWhat is your initial analytical conclusion?',
        options: [
          {
            id: 'da-opt-1',
            label: 'Option A: The decline is not store-wide; it is specifically concentrated in the Literature & Self-Help segment',
            reasoning: 'Applies analytical drill-down to isolate the exact segment driving variance instead of generalizing.',
            outcomeDescription: 'Spot on! The Director agrees that penalizing all store staff would be unfounded.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'da-opt-2',
            label: 'Option B: Conclude that Literature section staff are intentionally refusing to advise customers',
            reasoning: 'Subjective blame without customer behavior or market pricing evidence.',
            outcomeDescription: 'Staff feel demoralized because visitors mentioned reading summaries and buying online instead.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Cross-Checking Channels & Price Elasticity',
        description:
          'Comparing channels shows: In-store visits fell 25%, while online searches rose 40%—yet online bounce rate hit 75% because your online price is 15,000 VND/book higher than competing marketplaces. What does the data tell you?',
        options: [
          {
            id: 'da-opt-3',
            label: 'Option A: Young readers shifted to online book shopping, but abandon checkout because our online pricing lacks competitiveness',
            reasoning: 'Synthesizes multiple data signals (lower foot traffic + higher search + price-driven bounce rate) into a coherent insight.',
            outcomeDescription: 'Valuable insight! Leadership realizes the bottleneck is digital pricing strategy, not book quality.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'da-opt-4',
            label: 'Option B: Shut down the online store completely to force customers back to physical branches',
            reasoning: 'Fights against digital consumer behavior and pushes customers permanently to competitors.',
            outcomeDescription: 'Revenue drops even further as readers buy exclusively from competing online platforms.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
        ],
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Data Storytelling & Executive Dashboard',
        description: 'In the board meeting, how do you present your report most persuasively?',
        options: [
          {
            id: 'da-opt-5',
            label: 'Option A: Present an Online vs. Offline trend chart, show break-even pricing models, and propose weekend author book-signing events at physical stores',
            reasoning: 'Data-driven solution: optimizes online conversion via pricing while turning physical stores into cultural hubs.',
            outcomeDescription: 'The Board applauds and immediately approves your Q3 business recovery strategy!',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'da-opt-6',
            label: 'Option B: Read aloud 500 rows of raw Excel numbers without charts or visual takeaways',
            reasoning: 'Information overload obscures key insights and leaves stakeholders confused.',
            outcomeDescription: 'Shareholders lose focus and the meeting ends without any actionable decision.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
    ],
    rubric: [
      { criterion: 'Analytical Drill-down Skill', description: 'Deconstructs aggregate metrics into segments to pinpoint root causes.' },
      { criterion: 'Business & Market Linking', description: 'Connects numerical anomalies with real-world buyer behavior.' },
      { criterion: 'Data Storytelling Reflection', description: 'Evaluates your patience and excitement when discovering stories behind numbers.' },
    ],
  },
  'task-du-lieu': {
    careerTitle: 'Business & Data Analyst',
    title: 'Data Challenge: Diagnosing a Sudden 30% Drop in Bookstore Revenue',
    scenario:
      'You are a Junior Data Analyst for a chain of 5 student bookstores. In October, total revenue suddenly dropped by 30% compared to September, even though it is back-to-school season. The Director gives you the sales dataset to find the root cause before the afternoon meeting.',
    instructions: [
      'Stage 1: Drill down into the dataset by channel and branch instead of guessing.',
      'Stage 2: Cross-check customer behavior and pricing factors.',
      'Stage 3: Present an actionable dashboard recommendation to leadership.',
    ],
    stages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Data Drill-down & Segmentation',
        description: 'Looking at the overall "-30% revenue" number is not enough. How will you slice the data first?',
        options: [
          {
            id: 'da-opt-1',
            label: 'Option A: Immediately blame the sales staff at all 5 stores and propose cutting their bonuses',
            reasoning: 'Jumping to conclusions without data evidence destroys team morale and misses the real cause.',
            outcomeDescription: 'Staff protest because store foot traffic was actually normal, and the real issue remains hidden.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
          {
            id: 'da-opt-2',
            label: 'Option B: Segment revenue by Sales Channel (In-store vs. Online Website) and by Product Category (Reference Books vs. Stationery)',
            reasoning: 'Standard analytical drill-down technique to isolate where the variance actually occurred.',
            outcomeDescription: 'Discovery! In-store sales stayed stable, while Online Reference Book orders dropped by 68%.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
        ],
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Root-Cause Hypothesis Testing',
        description: 'Why did Online Reference Book sales drop by 68%? You check website logs and competitor data. What do you do?',
        options: [
          {
            id: 'da-opt-3',
            label: 'Option A: Analyze checkout funnel drop-offs and compare shipping fees + discount codes against e-commerce marketplaces',
            reasoning: 'Combines quantitative funnel conversion rates with external market benchmarking.',
            outcomeDescription: 'You find that a website update broke the "Free Shipping over 150k" voucher, causing 75% cart abandonment at checkout!',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'da-opt-4',
            label: 'Option B: Shut down the online store completely to force customers to visit physical shops',
            reasoning: 'Goes against digital consumer behavior and drives customers straight to competitors.',
            outcomeDescription: 'Total revenue drops even further as online shoppers switch to competing bookstores.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
        ],
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Data Storytelling & Dashboard Proposal',
        description: 'In the executive meeting, how will you present your findings most persuasively?',
        options: [
          {
            id: 'da-opt-5',
            label: 'Option A: Present a comparison chart of Online vs. Offline trends, highlight the checkout voucher bug, and propose fixing the voucher + hosting weekend author book-signing events',
            reasoning: 'Actionable, evidence-based storytelling: pairs root-cause data with concrete recovery solutions.',
            outcomeDescription: 'The Board applauds your clarity and immediately approves the Q4 recovery plan!',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'da-opt-6',
            label: 'Option B: Read aloud 500 rows of raw Excel numbers without any charts or summary',
            reasoning: 'Information overload without synthesis leaves decision-makers confused.',
            outcomeDescription: 'Board members lose track of the main point and adjourn the meeting without a decision.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
    ],
    rubric: [
      { criterion: 'Analytical Drill-down Skill', description: 'Segments aggregate metrics into channels and categories to isolate root causes.' },
      { criterion: 'Business Context Linking', description: 'Connects numerical anomalies to real-world user behavior and market dynamics.' },
      { criterion: 'Data Storytelling Reflection', description: 'Transforms raw tables into clear visual insights for decision-making.' },
    ],
  },
  'task-giao-vien': {
    careerTitle: 'High School Teacher',
    title: 'Pedagogy Challenge: Explaining Newton’s Law & Classroom Empathy',
    durationMinutes: 12,
    scenario:
      'You are a young Physics teacher leading a Grade 10 lesson on "Newton’s First Law (Inertia)". In your class of 40 students, some grasp concepts quickly, some struggle with formulas, and a student in the back row is distracted and anxious.',
    instructions: [
      'Stage 1: Choose an engaging hook to explain an abstract physics concept.',
      'Stage 2: Handle a distracted, embarrassed student with pedagogical empathy.',
      'Stage 3: Assign a meaningful real-world reflection activity before the bell rings.',
    ],
    stages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Introducing the Concept of Inertia',
        description: 'When opening the lesson on Inertia, which teaching approach do you choose?',
        options: [
          {
            id: 'gv-opt-1',
            label: 'Option A: Read the textbook definition aloud and order the class to copy it 3 times',
            reasoning: 'Rote memorization without experiential connection fails to spark scientific curiosity.',
            outcomeDescription: 'Students copy silently with glazed eyes and cannot explain why bus passengers lean forward when braking.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
          {
            id: 'gv-opt-2',
            label: 'Option B: Start with a real-life question: "Why do passengers lean forward when a bus brakes suddenly?" paired with a quick tabletop demonstration',
            reasoning: 'Connects everyday life to physics principles, activating natural curiosity.',
            outcomeDescription: 'Hands shoot up across the room! Students eagerly relate their daily bus and bicycle rides to Newton’s First Law.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'gv-opt-3',
            label: 'Option C: Project advanced university calculus equations immediately on the board',
            reasoning: 'Overly complex math intimidates average students and causes them to tune out early.',
            outcomeDescription: 'Only 2 top students follow along while over 30 students feel overwhelmed.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Classroom Management & Student Empathy',
        description: 'You notice Nam in the back row doodling with his head down. When called upon, he stammers and looks down in embarrassment. How do you respond?',
        options: [
          {
            id: 'gv-opt-4',
            label: 'Option A: Scold him harshly in front of the whole class and log a disciplinary penalty',
            reasoning: 'Public shaming damages student self-esteem and creates resentment toward the subject.',
            outcomeDescription: 'The class falls silent out of fear, and Nam withdraws completely from future lessons.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
          {
            id: 'gv-opt-5',
            label: 'Option B: Smile reassuringly: "No worries Nam, let’s break this down step by step", give a simple hint, and chat privately during break time to listen',
            reasoning: 'Protects the student’s dignity in front of peers while maintaining warmth and educational care.',
            outcomeDescription: 'Nam answers the guided hint successfully, and during break shares family difficulties so you can support him.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'gv-opt-6',
            label: 'Option C: Ignore him completely so you can finish the slides on schedule',
            reasoning: 'Avoids conflict momentarily but leaves a struggling student behind.',
            outcomeDescription: 'Your slides finish on time, but Nam falls further behind in subsequent weeks.',
            feedbackTone: 'neutral',
            scoreDelta: 1,
          },
        ],
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Lesson Wrap-up & Real-World Application',
        description: 'To consolidate learning before the bell rings, which activity do you assign?',
        options: [
          {
            id: 'gv-opt-7',
            label: 'Option A: Mini-challenge: "Find 1 application of Inertia in traffic safety (e.g., seatbelts or helmets) to share in 1 minute next class"',
            reasoning: 'Encourages students to observe the real world and value traffic safety.',
            outcomeDescription: 'Students leave class smiling and excited to observe physics in everyday life.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'gv-opt-8',
            label: 'Option B: Assign 20 repetitive calculation problems due tomorrow morning',
            reasoning: 'Creates homework overload and reduces intrinsic motivation.',
            outcomeDescription: 'Students groan in exhaustion and several copy answers online just to get by.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
    ],
    rubric: [
      { criterion: 'Pedagogical Clarity & Engagement', description: 'Uses relatable real-world examples to make abstract concepts intuitive.' },
      { criterion: 'Empathy & Classroom Leadership', description: 'Respects student dignity and resolves classroom challenges with calm humanity.' },
      { criterion: 'Teaching Self-Reflection', description: 'Reflects on patience, communication, and joy in helping others grow.' },
    ],
  },
  'task-lap-trinh': {
    careerTitle: 'Software Engineer / Developer',
    title: 'Algorithm Challenge: Debugging an Online Bus Ticket Booking System',
    durationMinutes: 12,
    scenario:
      'You are developing an "Online Bus Ticket Booking" app for commuters. The system has two critical bugs: passengers can book tickets even when their wallet balance is 0 VND, and sometimes the exact same seat #12 is sold to 2 different passengers at the same second!',
    instructions: [
      'Stage 1: Inspect the pseudocode and fix the wallet balance validation bug.',
      'Stage 2: Prevent double-booking (Race Condition) when two users click the same seat simultaneously.',
      'Stage 3: Write a clear, reassuring error message for users in weak-signal areas.',
    ],
    stages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Fixing the Wallet Balance Logic Bug',
        description: 'Current code reads:\n\n`if (balance >= 0) { issueTicket(); }`\n\nWhat is wrong here when a ticket costs 20,000 VND?',
        options: [
          {
            id: 'code-opt-1',
            label: 'Option A: Fix to: `if (balance >= ticketPrice) { balance = balance - ticketPrice; issueTicket(); }`',
            reasoning: 'Verifies that balance covers the specific ticket price and deducts the fare atomically.',
            outcomeDescription: 'Spot on! The zero-balance booking exploit is completely resolved.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'code-opt-2',
            label: 'Option B: Fix to: `if (balance != 0) { issueTicket(); }`',
            reasoning: 'Still flawed: a user with 1,000 VND can still buy a 20,000 VND ticket.',
            outcomeDescription: 'Financial loss continues because the code does not compare against `ticketPrice`.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
          {
            id: 'code-opt-3',
            label: 'Option C: Delete the balance check altogether so the app runs faster',
            reasoning: 'Breaks core payment business logic.',
            outcomeDescription: 'Bus operators lose revenue and shut down the system.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
        ],
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Handling Seat Double-Booking (Race Condition)',
        description: 'When 2 passengers tap Seat #12 at the exact same millisecond, which workflow prevents duplicate tickets?',
        options: [
          {
            id: 'code-opt-4',
            label: 'Option A: Implement a temporary 5-minute Seat Lock (Reservation Lock): whoever clicks first locks Seat #12 for checkout; the second user sees "Seat is currently being held"',
            reasoning: 'Industry-standard concurrency control used in airline and railway ticketing systems.',
            outcomeDescription: 'Excellent! Zero duplicate seat sales and smooth passenger boarding.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'code-opt-5',
            label: 'Option B: Let both passengers pay first, then randomly cancel one person’s ticket later',
            reasoning: 'Creates a terrible user experience after taking customers’ money.',
            outcomeDescription: 'Passengers flood the hotline with complaints about unfair cancellations.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Designing User-Friendly Error Messages for Weak 4G',
        description: 'When a commuter’s mobile connection drops mid-transaction, which message is most helpful and reassuring?',
        options: [
          {
            id: 'code-opt-6',
            label: 'Option A: "Network signal interrupted! We are verifying your payment status over the next 30 seconds so you won’t be charged twice. Please wait before tapping Pay again."',
            reasoning: 'Clear, empathetic language that explains system state and prevents duplicate clicks.',
            outcomeDescription: 'Users feel reassured and do not spam the payment button.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'code-opt-7',
            label: 'Option B: "Fatal Exception 504: Gateway Socket Timeout at Port 8080"',
            reasoning: 'Cryptic technical jargon scares non-technical users.',
            outcomeDescription: 'Passengers panic thinking their money vanished and call support.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
    ],
    rubric: [
      { criterion: 'Algorithmic & Boundary Logic', description: 'Identifies edge conditions and state transitions accurately.' },
      { criterion: 'Human-Centered Software Design', description: 'Writes resilient systems and clear feedback for everyday users.' },
      { criterion: 'Engineering Self-Reflection', description: 'Evaluates patience and enjoyment when debugging complex logical problems.' },
    ],
  },
  'task-ky-su': {
    careerTitle: 'Civil & Structural Engineer',
    title: 'Structural Challenge: Designing a Flood-Resilient Rural Bridge on a Budget',
    durationMinutes: 12,
    scenario:
      'You are the lead civil engineer designing a community bridge across a mountain stream in Northern Vietnam before the rainy season. The total grant budget is capped at 450 million VND, span length is 18 meters, and the bridge must support 5-ton agricultural trucks and flash floods.',
    instructions: [
      'Stage 1: Select an abutment foundation suited for a boulder-strewn mountain stream.',
      'Stage 2: Balance girder material costs vs. load capacity and mountain transport constraints.',
      'Stage 3: Design safety railings and non-slip decking for school children walking in winter fog.',
    ],
    stages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Selecting Flood-Resilient Bridge Foundations',
        description: 'The streambed has loose cobbles over bedrock and experiences strong flash floods. Which foundation design do you choose?',
        options: [
          {
            id: 'ks-opt-1',
            label: 'Option A: Shallow unreinforced footing resting directly on loose sand',
            reasoning: 'Cheap upfront but extremely vulnerable to scour and collapse during the first flash flood.',
            outcomeDescription: 'Dangerous! Flood simulation shows severe foundation erosion and abutment tilting.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
          {
            id: 'ks-opt-2',
            label: 'Option B: Deep rock-socketed concrete piles combined with upstream gabion stone riprap protection',
            reasoning: 'Uses 35% of the budget but guarantees structural stability against mountain flash floods.',
            outcomeDescription: 'Rock-solid! The foundation withstands peak hydraulic scour tests.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
        ],
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Girder Material Trade-off (Budget vs. Transportability)',
        description: 'With 290 million VND remaining for the 18m span, which girder solution works best for narrow mountain roads?',
        options: [
          {
            id: 'ks-opt-3',
            label: 'Option A: Modular anti-rust galvanized steel truss girders (250M VND, 8-ton load rating, 7-day assembly)',
            reasoning: 'Lightweight modules can be transported up winding mountain passes without heavy cranes and stay within budget.',
            outcomeDescription: 'Optimal engineering! Delivered and assembled smoothly with local community support.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'ks-opt-4',
            label: 'Option B: Single-piece 25-ton precast concrete T-beam shipped from the city (310M VND)',
            reasoning: 'Exceeds budget by 20M VND and heavy transport trucks cannot navigate hairpin mountain turns.',
            outcomeDescription: 'The transport trailer gets stuck at a mountain pass, halting the entire project.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Pedestrian Safety in Dense Mountain Fog',
        description: 'Primary school children cross this bridge daily in dense winter fog. What safety features do you include?',
        options: [
          {
            id: 'ks-opt-5',
            label: 'Option A: 1.2m high protective mesh railings, reflective edge markers, and anti-slip grooved decking',
            reasoning: 'Protects children from slipping and ensures high visibility in foggy mountain mornings.',
            outcomeDescription: 'Villagers and teachers praise your thoughtful, life-saving engineering design!',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'ks-opt-6',
            label: 'Option B: Omit railings to save 10 million VND',
            reasoning: 'Violates national bridge safety standards (TCVN 11823:2017) and endangers human life.',
            outcomeDescription: 'The project fails safety inspection and cannot be opened.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
        ],
      },
    ],
    rubric: [
      { criterion: 'Structural Safety & Engineering Ethics', description: 'Prioritizes human safety and hydraulic resilience above shortcuts.' },
      { criterion: 'Field & Budget Optimization', description: 'Accounts for real-world terrain, logistics, and budget constraints.' },
      { criterion: 'Engineering Self-Reflection', description: 'Experiences the pride and responsibility of building community infrastructure.' },
    ],
  },
  'task-truyen-thong': {
    careerTitle: 'Media & Journalism Specialist',
    title: 'Editorial Challenge: Fact-Checking Viral Fake News & Protecting Farmers',
    durationMinutes: 12,
    scenario:
      'A sensational viral video claims: "All red-flesh dragon fruit in Province X is contaminated with a strange toxin!" The clip hits 500,000 views in 4 hours, causing traders to cancel orders from hundreds of honest farming households right at harvest.',
    instructions: [
      'Stage 1: Verify the authenticity and origin of the viral clip using multi-source fact-checking.',
      'Stage 2: Interview agricultural scientists and plant protection authorities for lab evidence.',
      'Stage 3: Publish a clear, objective verification report with an infographic to restore consumer trust.',
    ],
    stages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Digital Fact-Checking & Source Verification',
        description: 'When you receive the viral clip link, what is your first journalistic step?',
        options: [
          {
            id: 'tt-opt-1',
            label: 'Option A: Immediately repost it with a sensational caption to get clicks',
            reasoning: 'Spreading unverified panic violates journalism ethics and harms innocent farmers.',
            outcomeDescription: 'Public panic escalates and farmers suffer severe financial losses.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
          {
            id: 'tt-opt-2',
            label: 'Option B: Trace the original uploader account, inspect video metadata/timestamps, and cross-check with local agricultural authorities',
            reasoning: 'Follows professional journalistic fact-checking protocol.',
            outcomeDescription: 'You discover the clip was spliced from an old pest-control experiment by a clickbait page.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
        ],
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Gathering Scientific & Official Evidence',
        description: 'Who do you interview to provide credible proof to the public?',
        options: [
          {
            id: 'tt-opt-3',
            label: 'Option A: Interview the Provincial Plant Protection Department and Fruit Research Institute, obtaining official VietGAP lab test certificates',
            reasoning: 'Authoritative scientific sources provide indisputable evidence.',
            outcomeDescription: 'Lab results confirm 100% of periodic samples meet VietGAP food safety standards.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'tt-opt-4',
            label: 'Option B: Only ask a few random passersby for their personal opinions',
            reasoning: 'Subjective rumors cannot counter a viral misinformation crisis.',
            outcomeDescription: 'Readers remain skeptical because the article lacks scientific test data.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Publishing the Fact-Check & Infographic',
        description: 'Which editorial style do you choose for your official response article?',
        options: [
          {
            id: 'tt-opt-5',
            label: 'Option A: Clear headline: "Fact-Check on Dragon Fruit Rumors: Official Lab Tests Confirm Safety", paired with a visual infographic and fresh fruit buying guide',
            reasoning: 'Transparent, calm, evidence-based journalism that informs readers and protects farmers.',
            outcomeDescription: 'The article is widely shared, consumer confidence returns, and farm orders resume!',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'tt-opt-6',
            label: 'Option B: Write an angry rant filled with personal insults',
            reasoning: 'Loses journalistic objectivity and distracts from the scientific facts.',
            outcomeDescription: 'The comment section turns into an argument instead of sharing the safety verification.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
    ],
    rubric: [
      { criterion: 'Multi-Source Fact-Checking', description: 'Investigates digital origins and cross-verifies claims before publishing.' },
      { criterion: 'Journalistic Ethics & Social Impact', description: 'Uses objective reporting to protect public trust and honest livelihoods.' },
      { criterion: 'Media Self-Reflection', description: 'Evaluates clarity of expression and resilience under fast-paced news pressure.' },
    ],
  },
  'task-nong-nghiep': {
    careerTitle: 'High-Tech Agricultural Engineer',
    title: 'Agronomy Challenge: Diagnosing Citrus Disease & Bio-Safe Treatment',
    durationMinutes: 12,
    scenario:
      'You are an agricultural engineer managing a 5-hectare organic orange orchard during the young fruit stage. IoT sensors report 92% humidity after days of drizzle. Lower branches show raised rusty-brown leaf spots with yellow halos.',
    instructions: [
      'Stage 1: Combine visual leaf pathology symptoms with IoT sensor data to diagnose the disease.',
      'Stage 2: Choose an eco-friendly biological treatment protocol to preserve organic certification.',
      'Stage 3: Adjust drip-fertigation nutrients to strengthen cell walls and fruit retention.',
    ],
    stages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Plant Pathology & IoT Diagnosis',
        description: 'Raised corky brown spots with yellow halos appearing at 92% humidity indicate which condition?',
        options: [
          {
            id: 'nn-opt-1',
            label: 'Option A: Citrus Canker caused by Xanthomonas bacteria thriving in high humidity',
            reasoning: 'Accurately links characteristic lesions with wet microclimate sensor readings.',
            outcomeDescription: 'Correct! Early detection on lower branches allows targeted containment.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'nn-opt-2',
            label: 'Option B: Leaf scorch caused by severe drought',
            reasoning: 'Contradicts IoT sensor data showing 92% humidity and continuous rain.',
            outcomeDescription: 'Over-watering worsens bacterial spread across the orchard.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
        ],
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Eco-Friendly Treatment (Chemical vs. Biological Trade-off)',
        description: 'The farm owner panics and wants to spray banned toxic synthetic pesticides at double dosage. What do you advise?',
        options: [
          {
            id: 'nn-opt-3',
            label: 'Option A: Prune infected branches for aeration, apply approved bio-copper and antagonistic Bacillus subtilis probiotics to protect organic certification',
            reasoning: 'Protects soil microbiome, groundwater, and export-grade VietGAP/Organic standards.',
            outcomeDescription: 'Within 5 days, lesions dry up without spreading and soil health remains vibrant.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'nn-opt-4',
            label: 'Option B: Spray double-dose toxic chemical pesticides',
            reasoning: 'Leaves chemical residues on fruit, destroys beneficial insects, and revokes organic certification.',
            outcomeDescription: 'The farm loses its VietGAP certification and export contracts.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Precision Drip Fertigation Tuning',
        description: 'Through the automated drip system, which nutrients do you supplement to strengthen citrus cell walls?',
        options: [
          {
            id: 'nn-opt-5',
            label: 'Option A: Supplement organic Calcium-Boron (Ca-B) and biological Potassium',
            reasoning: 'Calcium fortifies cell walls against bacterial entry while Boron improves young fruit retention.',
            outcomeDescription: 'Young oranges grow firm, glossy, and resilient!',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'nn-opt-6',
            label: 'Option B: Dump excessive synthetic Urea nitrogen fertilizer',
            reasoning: 'Excess nitrogen creates thin, watery leaf tissue that attracts pests and bacteria.',
            outcomeDescription: 'Weak new shoots trigger a second wave of leafminer and bacterial infection.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
    ],
    rubric: [
      { criterion: 'Biological Observation & IoT Analytics', description: 'Synthesizes visual crop symptoms with environmental sensor data.' },
      { criterion: 'Sustainable Agriculture Mindset', description: 'Protects consumer health, soil ecology, and clean farming standards.' },
      { criterion: 'Agronomy Self-Reflection', description: 'Reflects on patience and connection with nature and modern agritech.' },
    ],
  },
  'task-y-te': {
    careerTitle: 'Registered Nurse / Healthcare Professional',
    title: 'Clinical Challenge: Emergency Triage & Empathetic Communication',
    durationMinutes: 12,
    scenario:
      'You are the triage nurse on duty at a district hospital emergency room. Two patients arrive simultaneously: Patient 1 is a 54-year-old man with hypertension clutching his left chest, sweating profusely, and short of breath; Patient 2 is a young man with a minor forearm skin scrape bleeding lightly, whose family member is shouting loudly demanding immediate bandaging.',
    instructions: [
      'Stage 1: Prioritize emergency triage based on life-threatening vital signs.',
      'Stage 2: De-escalate the anxious family member empathetically without delaying critical care.',
      'Stage 3: Deliver a structured SBAR clinical handover report to the attending physician.',
    ],
    stages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Emergency Triage Prioritization',
        description: 'Who must be admitted to the resuscitation bay first?',
        options: [
          {
            id: 'yt-opt-1',
            label: 'Option A: Immediately admit the 54-year-old man with left chest pain and diaphoresis for ECG and oxygen support',
            reasoning: 'Classic signs of Acute Myocardial Infarction (heart attack), where every minute counts.',
            outcomeDescription: 'Life-saving decision! The ECG detects acute ischemia and the doctor intervenes in time.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'yt-opt-2',
            label: 'Option B: Treat the minor forearm scrape first because his family is shouting the loudest',
            reasoning: 'Confuses noise level with medical urgency; a superficial scrape is not life-threatening.',
            outcomeDescription: 'The chest-pain patient collapses in the hallway, creating a critical emergency.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
        ],
      },
      {
        stageNumber: 2,
        title: 'Stage 2: De-escalating Anxious Relatives with Empathy',
        description: 'The young man’s relative slams the desk asking: "Why aren’t you bandaging my son first?" How do you respond?',
        options: [
          {
            id: 'yt-opt-3',
            label: 'Option C: Snap back angrily: "Can’t you see someone is dying? Sit outside and wait!"',
            reasoning: 'Escalates tension and triggers hospital conflict.',
            outcomeDescription: 'The relative loses temper and causes a commotion in the ER.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
          {
            id: 'yt-opt-4',
            label: 'Option D: Calm, warm eye contact: "I understand you’re worried. We’ve applied sterile gauze to stop his bleeding safely. The gentleman next door is having a heart emergency requiring 3 minutes of life-saving stabilization, and I have your sterile tray ready right here to clean and dress your son’s arm immediately after."',
            reasoning: 'Combines clinical reassurance, visible care, and firm medical triage ethics.',
            outcomeDescription: 'The family member calms down, nods in understanding, and cooperates peacefully.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
        ],
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Clinical Handover Report (SBAR Standard)',
        description: 'When the ER doctor rushes in, how do you summarize the chest-pain patient most effectively?',
        options: [
          {
            id: 'yt-opt-5',
            label: 'Option E: SBAR Report: "54-year-old male, history of hypertension, onset of crushing left chest pain radiating to jaw 30 mins ago. BP 160/95 mmHg, SpO2 93%, HR 110 bpm, on 3L/min O2 and cardiac monitor attached."',
            reasoning: 'Concise, metric-driven clinical communication that enables instant medical orders.',
            outcomeDescription: 'The physician commends your precision and initiates treatment without a second wasted.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'yt-opt-6',
            label: 'Option F: Vague summary: "Doctor, there is an uncle here with a stomachache or chest ache, please check him."',
            reasoning: 'Lacks all vital signs and clinical context, wasting golden resuscitation time.',
            outcomeDescription: 'The doctor has to re-measure vitals from scratch, delaying care.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
    ],
    rubric: [
      { criterion: 'Clinical Triage Judgment', description: 'Distinguishes life-threatening physiological signs from non-urgent complaints.' },
      { criterion: 'Empathetic Healthcare Communication', description: 'De-escalates patient and family anxiety with warmth and professionalism.' },
      { criterion: 'Medical Calling Self-Reflection', description: 'Reflects on composure and compassion in high-stakes healthcare.' },
    ],
  },
  'task-phien-dich': {
    careerTitle: 'Conference & Business Interpreter',
    title: 'Interpretation Challenge: International Green Energy Negotiation',
    durationMinutes: 15,
    scenario:
      'You are the interpreter for a European clean-energy delegation negotiating an offshore wind technology transfer with Vietnamese enterprise leaders. Your mission is to prepare technical terminology, convey cultural idioms accurately, and uphold strict accuracy.',
    instructions: [
      'Stage 1: Build a rapid technical glossary before the negotiation starts.',
      'Stage 2: Interpret English business idioms naturally without literal word-for-word confusion.',
      'Stage 3: Immediately correct a critical financial figure slip-up with professional integrity.',
    ],
    stages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Pre-Meeting Technical Glossary Preparation',
        description: '30 minutes before the meeting, a 40-page document on "Carbon Offset & PPA Contracts" arrives. What do you prioritize?',
        options: [
          {
            id: 'pd-opt-1',
            label: 'Option A: Rapidly extract and note key domain terms (PPA - Power Purchase Agreement, Levelized Cost of Electricity, Carbon Credit) into your interpreter notepad',
            reasoning: 'Targeted glossary preparation is the lifeline of professional conference interpreters.',
            outcomeDescription: 'Outstanding! When speakers discuss PPAs and Net Zero, you interpret effortlessly and accurately.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'pd-opt-2',
            label: 'Option B: Skip reading the document, assuming conversational English fluency is enough to improvise',
            reasoning: 'General fluency cannot substitute for specialized energy-contract terminology.',
            outcomeDescription: 'You freeze for 10 seconds when the delegate mentions "Levelized Cost of Electricity".',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Handling Idioms & Cultural Nuances',
        description: 'The foreign delegation head smiles and says: "We need to address the elephant in the room regarding grid curtailment before signing." How do you interpret this?',
        options: [
          {
            id: 'pd-opt-3',
            label: 'Option C: Convey the true idiomatic meaning: "We need to candidly address the major, obvious issue everyone has been avoiding regarding power grid curtailment before signing."',
            reasoning: 'Captures the exact pragmatic meaning and diplomatic tone of "elephant in the room".',
            outcomeDescription: 'Both delegations nod in appreciation of your sharp, natural interpretation.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'pd-opt-4',
            label: 'Option D: Translate word-for-word: "We need to solve the elephant inside this meeting room regarding the electric grid."',
            reasoning: 'Literal translation of idioms confuses listeners and disrupts negotiation flow.',
            outcomeDescription: 'Delegates look around the room puzzled, causing an awkward pause.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
        ],
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Ethical Correction of Financial Figures',
        description: 'The speaker says "The initial Capex is fourteen point five million dollars ($14.5M)", but you accidentally say "forty-five million dollars ($45M)". What do you do?',
        options: [
          {
            id: 'pd-opt-5',
            label: 'Option E: Politely interject immediately: "Interpreter correction: the exact initial capital expenditure is 14.5 million USD."',
            reasoning: 'Accuracy and honesty are paramount in interpretation; correcting a $30M discrepancy immediately protects both parties.',
            outcomeDescription: 'Both delegations respect your professionalism and ethical integrity.',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'pd-opt-6',
            label: 'Option F: Stay silent out of fear of embarrassment',
            reasoning: 'Leaving a $14.5M vs. $45M error uncorrected can derail the entire investment deal.',
            outcomeDescription: 'Confusion erupts when contract numbers do not match your interpretation.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
        ],
      },
    ],
    rubric: [
      { criterion: 'Bilingual Reflex & Domain Terminology', description: 'Prepares and renders technical energy and financial terms accurately.' },
      { criterion: 'Cross-Cultural Pragmatics', description: 'Interprets idioms and diplomatic nuances naturally across cultures.' },
      { criterion: 'Professional Integrity', description: 'Prioritizes factual accuracy and transparency under high pressure.' },
    ],
  },
  'task-ngan-hang': {
    careerTitle: 'Bank Teller & Financial Advisor',
    title: 'Banking Challenge: Detecting Elder Fraud & End-of-Day Cash Reconciliation',
    durationMinutes: 15,
    scenario:
      'You are working at Counter #2 of a commercial bank branch on a busy Monday morning. An elderly customer arrives trembling, on the phone with a stranger, demanding to liquidate her entire 500M VND retirement savings book early to wire to an unknown personal account.',
    instructions: [
      'Stage 1: Observe behavioral red flags of high-tech telecom impersonation fraud.',
      'Stage 2: Delay the suspicious transfer tactfully and coordinate with your supervisor & local police.',
      'Stage 3: Reconcile end-of-day cash vault discrepancies according to strict banking audit rules.',
    ],
    stages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Identifying Financial Fraud Red Flags',
        description: 'Mrs. Hoa (68) trembles while staying on a phone call, asking to withdraw 500M VND 6 months before maturity to transfer to an unfamiliar personal account. How do you respond?',
        options: [
          {
            id: 'nh-opt-1',
            label: 'Option A: Offer her a seat and warm water, gently explain the 30M VND interest loss from early withdrawal, and ask kindly if someone on the phone is pressuring or threatening her',
            reasoning: 'Combines empathetic customer care with anti-fraud vigilance to slow down panic-driven transfers.',
            outcomeDescription: 'Mrs. Hoa hesitates and shows you your phone: a scammer is impersonating an investigator demanding money!',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'nh-opt-2',
            label: 'Option B: Process the 500M VND withdrawal immediately without asking questions',
            reasoning: 'Ignores clear elder-fraud warning signs, resulting in devastating loss for the customer.',
            outcomeDescription: 'The scammer drains all 500M VND within 2 minutes, leaving Mrs. Hoa in tears.',
            feedbackTone: 'warning',
            scoreDelta: 0,
          },
        ],
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Escalating & Protecting Customer Assets',
        description: 'The scammer on the phone shouts at Mrs. Hoa to transfer immediately. She panics again. What do you do?',
        options: [
          {
            id: 'nh-opt-3',
            label: 'Option C: Trigger the silent alert to the Branch Supervisor and security/local police while calmly reassuring Mrs. Hoa that real authorities never demand money transfers over the phone',
            reasoning: 'Follows official bank anti-fraud escalation protocol.',
            outcomeDescription: 'The supervisor and local police officer arrive promptly, saving Mrs. Hoa’s entire 500M VND retirement fund!',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'nh-opt-4',
            label: 'Option D: Snatch the customer’s phone and shout back at the scammer',
            reasoning: 'Unprofessional conduct that frightens the elderly customer further.',
            outcomeDescription: 'The counter area becomes chaotic and the customer remains distressed.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
      {
        stageNumber: 3,
        title: 'Stage 3: End-of-Day Cash Vault Balancing',
        description: 'At 5:00 PM closing, your physical cash count is 500,000 VND short compared to the Core Banking ledger. What do you do?',
        options: [
          {
            id: 'nh-opt-5',
            label: 'Option E: Report immediately to the Cash Supervisor, audit every transaction slip, and inspect the cash-counting machine tray under camera supervision',
            reasoning: 'Adheres strictly to financial transparency and audit compliance.',
            outcomeDescription: 'Inspection reveals a 500,000 VND note stuck beneath the counting machine roller. The vault balances 100%!',
            feedbackTone: 'positive',
            scoreDelta: 3,
          },
          {
            id: 'nh-opt-6',
            label: 'Option F: Secretly slip 500,000 VND from your personal wallet into the drawer to go home early',
            reasoning: 'Violates bank treasury regulations and hides operational discrepancies.',
            outcomeDescription: 'Internal audit flags the unrecorded discrepancy and issues a compliance warning.',
            feedbackTone: 'warning',
            scoreDelta: 1,
          },
        ],
      },
    ],
    rubric: [
      { criterion: 'Customer Empathy & Fraud Vigilance', description: 'Spots psychological distress to protect customers from financial scams.' },
      { criterion: 'Procedural Escalation & Teamwork', description: 'Coordinates calmly with supervisors and authorities.' },
      { criterion: 'Financial Integrity & Precision', description: 'Upholds 100% transparency in cash handling and ledger reconciliation.' },
    ],
  },
};

export function localizeTask(task: CareerTask, lang: 'vi' | 'en'): CareerTask {
  if (lang === 'vi') return task;
  const enOverride = TASK_EN_TRANSLATIONS[task.id];
  if (enOverride) {
    return {
      ...task,
      ...enOverride,
    } as CareerTask;
  }
  return task;
}

// ============================================================================
// 5. VIDEO STORIES LOCALIZATION (/src/data/videoStories.ts)
// ============================================================================
const VIDEO_STORY_EN_MAP: Record<string, Partial<VideoStory>> = {
  'story-it-1': {
    title: 'Career Orientation 4.0: Information Technology & Software Engineering',
    channelName: 'VTV7 (National Educational Television)',
    personName: 'Software Engineers & Academic Advisors',
    characterName: 'IT Engineers & VTV7 Career Advisors',
    organization: 'Career Orientation 4.0 - VTV7',
    careerTitle: 'Software Engineer / IT Specialist',
    takeaway: 'Software engineering is not just coding alone at night—it is continuous problem-solving, systems architecture, and teamwork to build digital products serving millions.',
    summary: 'An inside look into the daily workflow of software engineers and university IT training programs in Vietnam: from algorithmic foundations and product debugging to specializations in AI, Cloud, Cybersecurity, and Data Engineering.',
    keyTimestamps: [
      { time: '01:15', label: 'Core competencies required for IT & Computer Science students' },
      { time: '05:30', label: 'Inside a real software company: Agile standups & code review' },
      { time: '10:45', label: 'Specializations: Software Engineering, Data Science, AI & InfoSec' },
      { time: '15:20', label: 'Advice for high school students on Math, Logic & English preparation' },
    ],
    realHardships: [
      'Rapid technological obsolescence requires lifelong self-study of new frameworks and languages.',
      'Extended screen time and high cognitive load when troubleshooting production incidents.',
      'Requires strong English reading skills to understand global technical documentation.',
    ],
    reflectionQuestions: [
      'Do you enjoy breaking down a complex problem into smaller logical steps?',
      'How do you feel when a piece of code or math problem takes several hours to debug?',
      'Which branch excites you more: building user interfaces, backend systems, or AI data models?',
      'How can you strengthen your Mathematics and English skills starting this semester?',
      'Would you like to try the Algorithm Debugging challenge in the Career Simulation tab?',
    ],
  },
  'story-media-1': {
    title: 'Knocking on Career Doors: Advertising, Media & Public Relations',
    channelName: 'VTV7 (National Educational Television)',
    personName: 'Creative Director & Media Specialist',
    characterName: 'Media Strategist & M.A. Phoenix Ho',
    organization: 'Knocking on Career Doors - VTV7',
    careerTitle: 'Media, Journalism & PR Specialist',
    takeaway: 'Media & communications blends creative storytelling with audience data research and high-pressure campaign execution.',
    summary: 'Follow a high school student visiting a professional creative agency. Learn how a communication campaign is born—from consumer insight research and brainstorming to copywriting, visual production, and crisis management.',
    keyTimestamps: [
      { time: '01:20', label: 'Holland Code fit: Artistic (A), Enterprising (E) & Social (S)' },
      { time: '06:10', label: 'Brainstorming a creative brief with the agency team' },
      { time: '11:30', label: 'Copywriting, visual storytelling, and measuring campaign impact' },
      { time: '16:40', label: 'Career pathways in Journalism, PR, Digital Marketing & Multimedia' },
    ],
    realHardships: [
      'Tight campaign deadlines and constant pressure to generate fresh, original ideas.',
      'Facing public feedback and handling communication crises across social media 24/7.',
      'Creative concepts often go through 5–10 rounds of client revisions before approval.',
    ],
    reflectionQuestions: [
      'Do you enjoy observing human behavior and telling compelling stories through words or visuals?',
      'How do you handle constructive criticism when others ask you to revise your creative work?',
      'Do you prefer strategic planning, writing content, or producing visual/video media?',
      'What social value should a responsible media message bring to the community?',
      'Would you like to try the Fact-Checking & Media Crisis simulation in Career Simulation?',
    ],
  },
  'story-event-1': {
    title: 'Behind the Stage Lights: Event Management Professional',
    channelName: 'VTV7 (National Educational Television)',
    personName: 'Event Director & Student Trainee',
    characterName: 'Event Specialist & M.A. Phoenix Ho',
    organization: 'Knocking on Career Doors - VTV7',
    careerTitle: 'Event & Festival Management Specialist',
    takeaway: 'Event management is the art of meticulous planning, real-time crisis improvisation, and orchestrating collective emotion.',
    summary: 'A multi-faceted look behind dazzling stage lights: overnight logistics preparation, stage measurement, sound/lighting checks, and Plan B contingencies when unexpected weather or technical glitches strike.',
    keyTimestamps: [
      { time: '01:30', label: 'Personality fit: Enterprising (E) and Realistic (R)' },
      { time: '05:40', label: 'On-site pre-show checklist: Audio, lighting, and crowd safety' },
      { time: '10:25', label: 'Handling live emergencies when speakers are delayed or gear fails' },
      { time: '16:50', label: 'The rewarding moment when an event concludes to audience applause' },
    ],
    realHardships: [
      'Demands strong physical stamina—moving continuously on-site from early morning till late night.',
      'Real-time live pressure: there is no "Ctrl+Z" undo button during a live event.',
      'Frequent work on weekends and holidays when everyone else is relaxing.',
    ],
    reflectionQuestions: [
      'Are you confident in staying calm and improvising when unexpected issues happen in front of a crowd?',
      'Do you enjoy coordinating behind the scenes to connect people in a major school program?',
      'How would you rate your physical stamina and stress tolerance?',
      'Have you ever joined a school club or event organizing committee?',
      'What did you learn from the importance of preparing a Plan B in the video?',
    ],
  },
  'story-pharma-1': {
    title: 'Passion for Science: The Pharmacist Profession',
    channelName: 'VTV7 (National Educational Television)',
    personName: 'Clinical Pharmacist & R&D Specialist',
    characterName: 'M.Pharm. Truong Thi Hoa & VTV7',
    organization: 'Knocking on Career Doors - VTV7',
    careerTitle: 'Pharmacist / Pharmaceutical Scientist',
    takeaway: 'A pharmacist is not merely a dispenser of medicine, but a healthcare scientist safeguarding drug safety, interactions, and patient lives.',
    summary: 'Follow a student into a pharmaceutical testing laboratory and hospital pharmacy. Discover the diverse career tracks after graduating from Pharmacy: Clinical Pharmacy, GMP Formulation R&D, Quality Assurance (QA/QC), Regulatory Affairs, and Distribution.',
    keyTimestamps: [
      { time: '01:05', label: 'Pharmacist Holland Code: Investigative (I) and Conventional (C)' },
      { time: '05:15', label: 'Active ingredient analysis inside a pharmaceutical chemistry lab' },
      { time: '11:00', label: 'Prescription counseling and dangerous drug-interaction warnings' },
      { time: '17:30', label: 'The 5-year university Pharmacy roadmap and licensure requirements' },
    ],
    realHardships: [
      'Massive volume of Chemistry, Biology, and Latin pharmacological nomenclature requiring sharp memory.',
      'Absolute legal and ethical responsibility: a single decimal error in dosage can endanger a life.',
      '5-year formal university training with highly competitive admission cutoff scores.',
    ],
    reflectionQuestions: [
      'Do you enjoy Chemistry and Biology classes in high school?',
      'Are you naturally meticulous, organized, and respectful of strict laboratory protocols?',
      'Are you more drawn to laboratory drug formulation R&D or direct patient counseling?',
      'How are you and your family preparing for a 5-year medical/pharmaceutical degree?',
      'Would you like to look up Pharmacy cutoff scores across Vietnamese universities in the Admissions tab?',
    ],
  },
  'story-doc-vtv24': {
    title: 'Medical Graduates & The National Medical Licensing Examination',
    channelName: 'VTV24 (Digital Content Production Center)',
    personName: 'VTV24 Medical Correspondent & National Medical Council',
    characterName: 'Physicians & Ministry of Health Representatives',
    organization: 'Vietnam Television (VTV)',
    careerTitle: 'General Practitioner / Medical Doctor (MD)',
    takeaway: 'Becoming a doctor is a lifelong learning journey; the revised Law on Medical Examination and Treatment standardizes national licensing to ensure patient safety.',
    summary: 'A report on the milestone reform in Vietnamese medical education: graduating from a 6-year medical university is just the beginning. Young doctors complete 18 months of hospital clinical practice and pass the National Medical Council competency exam for independent licensure.',
    keyTimestamps: [
      { time: '00:45', label: 'New Medical Law regulations: National Licensing Examination' },
      { time: '03:10', label: 'Final-year medical students share insights on night shifts and study load' },
      { time: '05:30', label: 'Elevating clinical standards and patient safety across Vietnam' },
    ],
    realHardships: [
      'Longest training duration in higher education (6 years MD + 18 months clinical practice + residency).',
      'Overnight hospital shifts facing life-or-death emergencies and anxious patient families.',
      'Requires long-term perseverance and family support during early training years.',
    ],
    reflectionQuestions: [
      'Are you and your family prepared for a dedicated 7–9 year medical training journey?',
      'Can you remain calm and compassionate when facing trauma, blood, and acute patient distress?',
      'What is your deepest motivation for wanting to wear the white medical coat?',
      'Do you know which accredited medical universities across Vietnam match your target score?',
    ],
  },
  'story-teacher-muonglat': {
    title: 'Inspiring Story: The Devoted Preschool Teacher in Remote Muong Lat Highlands',
    channelName: 'VTV24 (Digital Content Production Center)',
    personName: 'Highland Teacher in Muong Lat',
    characterName: 'Highland Teacher - Muong Lat Kindergarten',
    organization: 'Muong Lat Remote School Campus, Thanh Hoa',
    careerTitle: 'Early Childhood & Highland Educator',
    takeaway: 'Teaching in remote highlands is not just delivering literacy—it is unconditional love, quiet sacrifice, and empowering ethnic minority children.',
    summary: 'A deeply moving story of a young male teacher who braves steep mountain roads without grid electricity or phone signal to teach, cook lunch, and care for H’Mong and Thai ethnic children in Muong Lat.',
    keyTimestamps: [
      { time: '00:30', label: 'Crossing muddy mountain streams to reach the remote village classroom' },
      { time: '02:45', label: 'Teaching literacy, cooking warm lunches, and caring for young pupils' },
      { time: '05:10', label: 'Heartfelt trust and gratitude from ethnic minority parents' },
      { time: '07:30', label: 'Lighting up hope and future opportunities for highland children' },
    ],
    realHardships: [
      'Austere living conditions far from home with freezing mountain winters.',
      'Initial language barriers when helping ethnic children learn Vietnamese.',
      'Requires boundless patience, love for children, and community dedication.',
    ],
    reflectionQuestions: [
      'Watching this story, how do you feel about your own learning conditions compared to highland pupils?',
      'If you pursue education, would you be willing to contribute to underserved communities?',
      'How does Decree 116 (100% tuition exemption & living allowance for pedagogy students) support future teachers?',
      'What quality makes a teacher truly unforgettable in a student’s life?',
    ],
  },
  'story-teacher-talk': {
    title: 'Spotlight: The Unseen Pressures & Pride of the Teaching Profession',
    channelName: 'VTV24 (Motion 24h)',
    personName: 'Public High School & Middle School Teachers',
    characterName: 'High School & Secondary Educators',
    organization: 'Vietnam Television (VTV)',
    careerTitle: 'High School & Secondary Teacher',
    takeaway: 'Modern teaching requires passion for mentoring youth and adaptability to the competency-based 2018 General Education Curriculum.',
    summary: 'An honest conversation about life behind the podium: designing interactive digital lessons under the 2018 curriculum, collaborating with parents, understanding Gen Z psychology, and salary policy reforms.',
    keyTimestamps: [
      { time: '01:00', label: 'Daily reality: Digital lesson planning and continuous competency assessment' },
      { time: '04:20', label: 'Navigating parent expectations and Gen Z student psychology' },
      { time: '08:00', label: 'Education policy reforms and honoring the teaching profession' },
    ],
    realHardships: [
      'Work extends beyond classroom hours with evening lesson preparation and grading.',
      'Requires emotional intelligence and patience to guide 40 diverse student personalities.',
      'Demands continuous mastery of EdTech tools and active pedagogy.',
    ],
    reflectionQuestions: [
      'Do you enjoy explaining concepts until others have an "Aha!" moment?',
      'If a student is uncooperative in class, would you choose punishment or empathetic listening?',
      'How do you view the career stability and social meaning of the teaching profession?',
    ],
  },
  'story-vtvgo-engineers': {
    title: 'Behind the Scenes with VTVgo Cloud & Streaming System Engineers',
    channelName: 'VTV24 (Digital Content Production Center)',
    personName: 'VTVgo Engineering Team',
    characterName: 'Cloud Infrastructure & App Engineers at VTV Digital',
    organization: 'VTV Digital Center',
    careerTitle: 'Systems / Cloud & DevOps Engineer',
    takeaway: 'Serving millions of concurrent live viewers requires distributed cloud architecture, 24/7 monitoring, and seamless engineering teamwork.',
    summary: 'Go inside the technical operations center of VTVgo, Vietnam’s national digital television platform. See how cloud, CDN, and low-latency video streaming engineers handle massive traffic spikes during live football finals and national events.',
    keyTimestamps: [
      { time: '01:10', label: 'Inside the 24/7 network & server load monitoring center during prime time' },
      { time: '03:40', label: 'Real-time incident response to guarantee uninterrupted live broadcasting' },
      { time: '06:15', label: 'Young Vietnamese engineers building scalable national digital infrastructure' },
    ],
    realHardships: [
      'On-call shifts during major national events and holidays; 1 minute of downtime affects millions.',
      'Demands deep expertise in computer networking, streaming protocols, and cybersecurity.',
      'Constant vigilance against DDoS attacks and cloud infrastructure bottlenecks.',
    ],
    reflectionQuestions: [
      'Are you curious about how live video travels from a server to millions of phones in milliseconds?',
      'Do you prefer user-facing Frontend development or high-scale Backend/Cloud infrastructure?',
      'Would you like to test your engineering skills in our 3D Lab simulations?',
    ],
  },
  'story-barista-1': {
    title: 'Pursuing Passion: The Professional Barista & Beverage Artisan',
    channelName: 'VTV7 (National Educational Television)',
    personName: 'Professional Barista & M.A. Phoenix Ho',
    characterName: 'Master Barista & Student Trainee',
    organization: 'Knocking on Career Doors - VTV7',
    careerTitle: 'Professional Barista & F&B Specialist',
    takeaway: 'Being a Barista is much more than pressing an espresso button—it combines coffee bean science, temperature/pressure calibration, and warm hospitality.',
    summary: 'Explore the world of Vietnamese Robusta and Arabica specialty coffee. Learn espresso grind calibration, milk micro-foam steaming for Latte Art, and career growth from Barista to F&B Store Manager, Q-Grader, or café founder.',
    keyTimestamps: [
      { time: '01:15', label: 'Holland Code fit: Realistic (R), Artistic (A) and Social (S)' },
      { time: '05:30', label: 'Calibrating grind size, extraction time, and espresso pressure' },
      { time: '11:20', label: 'Practicing milk steaming and pouring a tulip Latte Art pattern' },
      { time: '17:00', label: 'Turning culinary passion into a sustainable F&B management career' },
    ],
    realHardships: [
      'Standing continuously for 8-hour shifts while maintaining strict food hygiene standards.',
      'Entry-level income requires patience while honing sensory and management skills.',
      'High-speed service pressure during morning and lunch rush hours.',
    ],
    reflectionQuestions: [
      'Do you enjoy crafting delicious beverages and bringing joy to customers?',
      'Are you meticulous enough to calibrate every gram of coffee and second of extraction?',
      'What global career opportunities can Vietnam’s position as a top coffee exporter create?',
    ],
  },
  'story-flower-1': {
    title: 'Self-Discovery: Floral Design & Botanical Artistry',
    channelName: 'VTV7 (National Educational Television)',
    personName: 'Master Florist & M.A. Phoenix Ho',
    characterName: 'Master Florist & Student Trainee',
    organization: 'Knocking on Career Doors - VTV7',
    careerTitle: 'Floral Designer / Botanical Artist',
    takeaway: 'Floral design blends color harmony, botanical preservation science, and heartfelt emotional storytelling.',
    summary: 'Follow a student learning spatial composition, warm-cool color theory, and botanical care to craft floral arrangements for conferences, weddings, and meaningful gifts.',
    keyTimestamps: [
      { time: '01:00', label: 'Holland Code: Artistic (A) and hands-on Realistic (R) dexterity' },
      { time: '04:30', label: 'Selecting fresh blooms at the 4:00 AM wholesale flower market' },
      { time: '10:00', label: 'Triangular floral composition and complementary color pairing' },
      { time: '15:40', label: 'The joy of delivering emotional messages through living art' },
    ],
    realHardships: [
      'Waking up at 3:00–4:00 AM to source fresh flowers at wholesale markets.',
      'Hands are constantly exposed to cold water, rose thorns, and stem conditioning solutions.',
      'Perishable inventory risk during hot weather or peak holiday seasons (Mar 8, Oct 20, Nov 20).',
    ],
    reflectionQuestions: [
      'Are you skilled with your hands in crafts, painting, or spatial arrangement?',
      'Can you handle intense seasonal workloads during major holidays?',
      'How can traditional floral artistry be combined with modern e-commerce branding?',
    ],
  },
  'story-actor-1': {
    title: 'Crossroads: Stage & Screen Acting Profession',
    channelName: 'VTV7 (National Educational Television)',
    personName: 'Stage Actor & M.A. Phoenix Ho',
    characterName: 'Performing Artist & VTV7 Guest',
    organization: 'Knocking on Career Doors - VTV7',
    careerTitle: 'Stage & Film Actor / Performing Artist',
    takeaway: 'Professional acting demands vocal discipline, physical expression, and the courage to step outside your emotional comfort zone.',
    summary: 'Visit the rehearsal stage of the Youth Theater. Learn diaphragmatic breathing, diction training, emotional empathy, and how actors persevere through dozens of casting rejections before earning a lead role.',
    keyTimestamps: [
      { time: '01:20', label: 'Identifying performing arts aptitude through interactive exercises' },
      { time: '06:00', label: 'Physical movement liberation and stage voice projection training' },
      { time: '12:15', label: 'Stepping into a complex dramatic character scene' },
      { time: '18:30', label: 'Expert advice on financial resilience and mental preparation in the arts' },
    ],
    realHardships: [
      'Fierce competition at castings; roles are fewer than graduates.',
      'Project-based irregular income requiring financial planning.',
      'Demands strong mental health to detach safely after playing intense dramatic roles.',
    ],
    reflectionQuestions: [
      'How do you cope with rejection when auditioning or competing?',
      'Do you naturally observe and empathize with diverse human life stories?',
      'What is your family’s perspective on pursuing professional performing arts?',
    ],
  },
  'story-photo-1': {
    title: 'Storytelling with Light: Commercial & Artistic Photographer',
    channelName: 'VTV7 (National Educational Television)',
    personName: 'Commercial Photographer & M.A. Phoenix Ho',
    characterName: 'Commercial Photographer & Student Trainee',
    organization: 'Knocking on Career Doors - VTV7',
    careerTitle: 'Commercial & Artistic Photographer',
    takeaway: 'A photographer is a storyteller using light; camera gear is just the tool, while aesthetic vision and human connection create the value.',
    summary: 'Experience a professional studio portrait and product shoot. Learn studio lighting setup (softbox, reflector), directing subjects naturally, and color grading in post-production.',
    keyTimestamps: [
      { time: '01:10', label: 'Holland Code: Artistic (A) and Technical Equipment (R)' },
      { time: '05:00', label: 'Mastering the Exposure Triangle: Aperture, Shutter Speed, and ISO' },
      { time: '10:45', label: 'Communicating with subjects to capture natural expressions' },
      { time: '16:20', label: 'Building a personal portfolio and finding commercial clients' },
    ],
    realHardships: [
      'Significant upfront investment in camera bodies, lenses, and lighting gear.',
      'Carrying 10–15kg equipment backpacks during outdoor location shoots.',
      'Hours of post-production culling and color-grading thousands of RAW files.',
    ],
    reflectionQuestions: [
      'Do you prefer capturing landscapes, human portraits, or commercial product photography?',
      'Do you have the patience to retouch and color-grade photos for hours?',
      'In an era where everyone has a smartphone camera, what distinguishes a professional photographer?',
    ],
  },
  'story-pottery-battrang': {
    title: 'Bringing a 700-Year Ceramic Village into the Digital Era (Bat Trang Pottery)',
    channelName: 'VTV24 (Digital Content Production Center)',
    personName: 'Young Ceramic Artisans of Bat Trang',
    characterName: 'Gen Z Ceramic Artisan & Digital Entrepreneur',
    organization: 'Bat Trang Traditional Pottery Village, Hanoi',
    careerTitle: 'Ceramic Artisan & Craft Entrepreneur',
    takeaway: 'Traditional craft villages are thriving anew by combining ancestral glazing secrets with 3D modeling and global e-commerce.',
    summary: 'Meet Gen Z artisans in Bat Trang who inherit traditional clay-throwing and kiln-firing techniques while integrating 3D prototype printing and cross-border livestream e-commerce to export to Japan and Europe.',
    keyTimestamps: [
      { time: '00:45', label: 'Wheel-throwing clay and traditional ash-glaze formulation' },
      { time: '02:30', label: 'Gen Z artisans applying 3D scanning and contemporary minimalist designs' },
      { time: '04:15', label: 'Omnichannel storytelling bringing Vietnamese ceramics to global buyers' },
    ],
    realHardships: [
      'Working amidst clay dust and high temperatures near gas/electric kilns.',
      'Kiln firing risks (cracking or glaze color variance) if temperature curves fluctuate.',
      'Requires years of patient hand-eye practice to master wheel throwing.',
    ],
    reflectionQuestions: [
      'Does your hometown or province have a traditional craft village or specialty product?',
      'How can young people preserve cultural heritage while creating modern economic value?',
      'Would you like to combine artistic craftsmanship with digital business skills?',
    ],
  },
  'story-pottery-bautruc': {
    title: 'Bau Truc Cham Pottery Expands Markets Through Digital Transformation',
    channelName: 'VTV24 (Digital Content Production Center)',
    personName: 'Cham Ethnic Artisans in Ninh Thuan',
    characterName: 'UNESCO Heritage Artisans of Bau Truc Village',
    organization: 'Bau Truc Pottery Village, Ninh Thuan',
    careerTitle: 'Traditional Heritage Artisan & Cultural Tourism Specialist',
    takeaway: 'Hand-shaping pottery without a potter’s wheel is a UNESCO Intangible Cultural Heritage of the Cham people that blends cultural pride with experiential tourism.',
    summary: 'Discover Bau Truc—one of Southeast Asia’s oldest pottery villages. Cham women walk backward around clay pillars to shape vessels entirely by hand and fire them in open-air straw kilns, now reaching tourists and online buyers nationwide.',
    keyTimestamps: [
      { time: '00:30', label: 'Unique wheel-less hand-shaping technique walking around the clay' },
      { time: '02:15', label: 'Creating natural earth-red hues using native persimmon and tree bark extracts' },
      { time: '04:00', label: 'UNESCO heritage recognition and youth-led digital market expansion' },
    ],
    realHardships: [
      'Harvesting river-bed clay is physically demanding and weather-dependent.',
      '100% hand-forming requires remarkable footwork stamina and concentration.',
      'Needs young successors and digital storytelling to compete with mass-produced goods.',
    ],
    reflectionQuestions: [
      'What impresses you most about the cultural heritage of Vietnam’s ethnic communities?',
      'How can experiential tourism and e-commerce uplift rural craft communities?',
      'Would you like to explore cultural preservation and tourism majors in CHẠM VIỆC?',
    ],
  },
  'story-agri-vtv24': {
    title: 'Thriving with High-Tech Smart Agriculture Models',
    channelName: 'VTV24 (Digital Content Production Center)',
    personName: 'Young Agricultural Engineers & Agritech Founders',
    characterName: 'Digital Agronomy Engineer & Farm Founder',
    organization: 'High-Tech Agricultural Cooperative',
    careerTitle: 'High-Tech Agricultural Engineer',
    takeaway: 'Modern agriculture replaces guesswork with smart greenhouses, IoT microclimate sensors, drip fertigation, and export-grade VietGAP standards.',
    summary: 'An inspiring report on young university-trained agricultural engineers returning to their hometowns to build smart hydroponic melon and cherry tomato greenhouses controlled via smartphone, achieving 5x traditional yields.',
    keyTimestamps: [
      { time: '00:50', label: 'Inside the automated greenhouse: Temperature, humidity & ventilation control' },
      { time: '02:40', label: 'Precision drip fertigation and monitoring EC / pH nutrient levels' },
      { time: '05:15', label: 'Economic impact: Billions in revenue and local rural job creation' },
    ],
    realHardships: [
      'Substantial initial capital investment for greenhouse frames and IoT sensor networks.',
      'Requires daily biological vigilance so plant pathogens do not spread inside enclosed greenhouses.',
      'Workplaces are primarily in suburban or rural farming regions, requiring patience with crop cycles.',
    ],
    reflectionQuestions: [
      'Do you enjoy working close to nature and watching healthy crops thrive through science?',
      'What potential do you see for high-tech agriculture in your home province?',
      'Would you like to test your skills in our 3D Smart Greenhouse Lab right now?',
    ],
  },
  'story-agri-sensor': {
    title: 'Agriculture 4.0: Automated IoT Sensors for Highland Strawberry Farming',
    channelName: 'VTV Index (Science, Technology & Investment)',
    personName: 'Agricultural IoT Engineer',
    characterName: 'Smart Farm Automation Engineer in Da Lat',
    organization: 'Da Lat Smart Agriculture Farm',
    careerTitle: 'Agricultural Automation / IoT Farm Specialist',
    takeaway: 'Combining IoT microclimate sensors with plant physiology creates breakthroughs in fruit sweetness and yield consistency.',
    summary: 'See how Japanese-variety strawberries are grown in Da Lat’s highlands using PAR light sensors, soil moisture probes, and automated misting/shading systems that trigger whenever greenhouse temperatures exceed 28°C.',
    keyTimestamps: [
      { time: '00:40', label: 'How greenhouse microclimate sensor clusters work' },
      { time: '02:10', label: 'Programming automated responses for heatwaves and heavy rain' },
      { time: '03:50', label: 'Uniform Brix sweetness and agro-tourism appeal' },
    ],
    realHardships: [
      'Requires dual knowledge of plant biology and embedded IoT electronics.',
      'Power outages or connectivity drops require backup generators to prevent crop heat shock.',
      'Maintaining electronic sensors in continuously humid environments.',
    ],
    reflectionQuestions: [
      'Are you excited by how IoT and automation can reduce manual labor for farmers?',
      'Do you prefer hardware sensor engineering or biological crop nutrition?',
      'Have you tried tuning Lux, Moisture, and EC in our 3D Smart Greenhouse simulation?',
    ],
  },
};

export function localizeVideoStory(video: VideoStory, lang: 'vi' | 'en'): VideoStory {
  if (lang === 'vi') return video;
  const en = VIDEO_STORY_EN_MAP[video.id];
  if (en) {
    return {
      ...video,
      ...en,
    };
  }
  return video;
}

// ============================================================================
// 6. ENTERPRISE BATCHES LOCALIZATION
// ============================================================================
const ENTERPRISE_BATCH_EN_MAP: Record<string, Partial<EnterpriseBatch>> = {
  'batch-fpt-01': {
    programName: 'A Day as an AI & Software Engineer at FPT Software',
    enterpriseName: 'FPT Software & FPT Telecom',
    careerCategory: 'Information Technology',
    location: 'Hanoi',
    address: 'F-Ville 2, Hoa Lac High-Tech Park, Thach That, Hanoi',
    targetGrade: 'Grades 10 - 12',
    inclusions: [
      'Round-trip shuttle bus from central Hanoi to Hoa Lac High-Tech Park',
      'Standard lunch at the F-Ville campus cafeteria',
      'Hands-on visit to the AI Lab and Software Testing Center',
      'Direct Q&A session with Senior Solution Architects & HR Directors',
      'Certificate of Participation issued by CHẠM VIỆC & FPT',
    ],
    exclusions: ['Personal expenses outside the program schedule'],
    scheduleTimeline: [
      { time: '08:00', activity: 'Gather at VNU Hanoi Gate (Xuan Thuy) & depart' },
      { time: '09:00', activity: 'Check-in & tour the green architecture of F-Ville tech village' },
      { time: '10:00', activity: 'Hands-on logic problem-solving challenge with mentor engineers' },
      { time: '12:00', activity: 'Lunch & campus culture exchange with engineering interns' },
      { time: '13:30', activity: 'Explore the Generative AI Research Lab' },
      { time: '15:30', activity: 'Career panel: IT & AI Industry Trends 2025–2030' },
      { time: '16:30', activity: 'Certificate presentation & return bus to Hanoi' },
    ],
    cancellationPolicy: 'Students may cancel and transfer their slot up to 5 days before the event.',
    contactPerson: 'Ms. Mai Lan - FPT Career Orientation Board',
  },
  'batch-vinfast-01': {
    programName: 'Factory Tour: Smart Electric Vehicle Manufacturing Complex',
    enterpriseName: 'VinFast Auto',
    careerCategory: 'Engineering & Manufacturing',
    location: 'Hai Phong',
    address: 'Dinh Vu - Cat Hai Economic Zone, Hai Phong City',
    targetGrade: 'Grades 11 - 12',
    inclusions: [
      'High-quality round-trip coach from Hanoi & Hai Phong',
      'Safety helmet and audio tour headset inside the automated shops',
      'Nutritious lunch at the engineering staff cafeteria',
      'Live observation of chassis welding by hundreds of automated ABB robots',
      'Full-trip event insurance',
    ],
    exclusions: ['Personal souvenir expenses'],
    scheduleTimeline: [
      { time: '08:00', activity: 'Student pickup & industrial safety briefing' },
      { time: '09:30', activity: 'Documentary screening on Made-in-Vietnam electric vehicle engineering' },
      { time: '10:15', activity: 'Tour the Stamping Shop and Automated Robot Welding Shop' },
      { time: '12:00', activity: 'Rest & lunch break' },
      { time: '13:30', activity: 'Tour the EV Battery Pack Assembly and Electrostatic Paint Shop' },
      { time: '15:00', activity: 'Q&A with Mechanical, Mechatronics, and Automation Engineers' },
      { time: '16:30', activity: 'Wrap-up reflection & departure' },
    ],
    cancellationPolicy: '100% refund if notified 7 days prior; 50% refund if notified 3 days prior.',
    contactPerson: 'Eng. Vu Minh Tri',
  },
  'batch-dalat-farm-01': {
    programName: 'Digital Agronomy Journey: High-Tech Smart Greenhouses',
    enterpriseName: 'Dalat Hasfarm & Lam Dong High-Tech Agriculture',
    careerCategory: 'High-Tech Agriculture',
    location: 'Lam Dong',
    address: 'Da Ron Commune, Don Duong District, Lam Dong Province',
    targetGrade: 'Grades 10 - 12',
    inclusions: [
      'Shuttle bus from Da Lat Station to Don Duong high-tech farm',
      'Bio-safety lab coat for entering quarantine greenhouses',
      'Hands-on testing of soil moisture, EC levels, and Israeli drip irrigation',
      'Organic farm-to-table lunch',
      'Complimentary high-tech potted seedling to take home',
    ],
    exclusions: ['Travel to Lam Dong Province'],
    scheduleTimeline: [
      { time: '08:30', activity: 'Welcome & bio-security shoe sanitization before nursery entry' },
      { time: '09:00', activity: 'Explore evaporative cooling pads and automated convection fans' },
      { time: '10:30', activity: 'Measure hydroponic EC nutrient indices and soil microbiology' },
      { time: '12:00', activity: 'Organic lunch with agricultural biotechnology specialists' },
      { time: '13:30', activity: 'Workshop: Exporting Vietnamese produce to Japan & EU markets' },
      { time: '15:30', activity: 'Q&A on agronomy careers and university programs' },
    ],
    cancellationPolicy: 'Students may cancel up to 4 days prior.',
    contactPerson: 'Ms. Nguyen Thu Thao',
  },
  'batch-vinmec-01': {
    programName: 'A Day in Medical Ethics & Modern Healthcare Technology',
    enterpriseName: 'Vinmec International General Hospital',
    careerCategory: 'Healthcare & Medicine',
    location: 'Hanoi',
    address: '458 Minh Khai, Times City Urban Area, Hai Ba Trung, Hanoi',
    targetGrade: 'Grades 11 - 12',
    inclusions: [
      'Medical practice coat and antibacterial surgical masks',
      'Guided visit to the 3.0 Tesla MRI and 512-slice CT diagnostic imaging center',
      'Hands-on Cardiopulmonary Resuscitation (CPR) training on medical mannequins',
      'Mentorship session with resident physicians and clinical pharmacists',
      'Light lunch at the hospital seminar hall',
    ],
    exclusions: ['Personal transportation to the hospital'],
    scheduleTimeline: [
      { time: '09:00', activity: 'Check-in, white coat fitting & sterile protocol briefing' },
      { time: '09:30', activity: 'Observe the Emergency Center and pediatric triage workflow' },
      { time: '11:00', activity: 'Hands-on CPR & airway obstruction first-aid practice on mannequins' },
      { time: '12:30', activity: 'Lunch & conversation with attending surgeons' },
      { time: '14:00', activity: 'Tour the automated biochemistry & clinical pathology laboratory' },
    ],
    cancellationPolicy: 'Notify at least 5 days in advance for full refund/slot transfer.',
    contactPerson: 'Dr. Le Thanh Ha - Medical Education Coordinator',
  },
};

export function localizeEnterpriseBatch(batch: EnterpriseBatch, lang: 'vi' | 'en'): EnterpriseBatch {
  if (lang === 'vi') return batch;
  const en = ENTERPRISE_BATCH_EN_MAP[batch.id];
  if (en) {
    return {
      ...batch,
      ...en,
    };
  }
  return {
    ...batch,
    careerCategory: localizeCategoryLabel(batch.careerCategory, 'en'),
  };
}

// ============================================================================
// 7. ADMISSIONS 2026 DATA LOCALIZATION (/src/data/admissions2026.ts)
// ============================================================================
export function getLocalizedTicker2026(items: AdmissionTickerItem[], lang: 'vi' | 'en'): AdmissionTickerItem[] {
  if (lang === 'vi') return items;
  const enMap: Record<string, Partial<AdmissionTickerItem>> = {
    'tick-1': {
      text: 'Circular 06/2026/TT-BGDDT: Candidates may register a maximum of 15 university admission preferences; teacher training programs only consider preferences #1 through #5.',
      sourceLabel: 'MOET Admissions Portal',
    },
    'tick-2': {
      text: '2026 Transcript Admission Rule: Must evaluate all 6 high school semesters across at least 3 subjects, with Mathematics or Literature accounting for at least 1/3 of total weight.',
      sourceLabel: 'Government News Portal',
    },
    'tick-3': {
      text: '2026 Priority Points Cap: Total regional and policy priority points are capped at 3.0 points (on a 30-point scale) and taper linearly for scores of 22.5 and above.',
      sourceLabel: 'Circular 06/2026/TT-BGDDT',
    },
    'tick-4': {
      text: 'VNU Hanoi HSA & HUST TSA: Official 2026 exam structure handbooks and reference question repositories have been published.',
      sourceLabel: 'CET-VNU & HUST Testing Centers',
    },
    'tick-5': {
      text: 'CHẠM VIỆC & EIE Education: Free Academic English prep accounts sponsored for high school students preparing for 2026 Aptitude & University Exams.',
      sourceLabel: 'EIE Education Partnership',
    },
  };

  return items.map((item) => (enMap[item.id] ? { ...item, ...enMap[item.id] } : item));
}

export function getLocalizedMoetRegulations2026(
  items: MoetRegulationItem[],
  lang: 'vi' | 'en'
): MoetRegulationItem[] {
  if (lang === 'vi') return items;
  const enMap: Record<string, Partial<MoetRegulationItem>> = {
    'tt-06-2026': {
      documentNumber: 'Circular 06/2026/TT-BGDDT',
      title: 'Regulations on University Admissions and Early Childhood Education College Admissions',
      scope: 'Applies nationwide to all universities and colleges offering Early Childhood Education programs.',
      officialSourceLabel: 'MOET Admissions Portal',
      keyRules: [
        {
          ruleTitle: 'Maximum 15 Admission Preferences (Nguyen Vong)',
          description: 'Each candidate may register up to 15 admission preferences across majors and universities on the national MOET admissions system.',
          articleRef: 'Article 14, Clause 2, Circular 06/2026',
          exceptionsAndNotes: 'Preferences are ranked in priority order from #1 onward; candidates are admitted only to their highest qualified preference.',
        },
        {
          ruleTitle: 'Priority Rule for Teacher Training (Pedagogy) Programs',
          description: 'For teacher education programs, universities only consider candidates who rank pedagogy majors within preferences #1 to #5.',
          articleRef: 'Article 14, Clause 3, Circular 06/2026',
          exceptionsAndNotes: 'Preferences #6 and lower are not eligible for pedagogy admission to ensure career commitment and Decree 116 tuition funding allocation.',
        },
        {
          ruleTitle: 'Standardized High School Transcript Evaluation (All 6 Semesters)',
          description: 'Transcript-based admission methods must evaluate academic results from all 6 high school semesters (Grades 10, 11, and 12) across at least 3 subjects.',
          articleRef: 'Article 8, Clause 4, Circular 06/2026',
          exceptionsAndNotes: 'Within any transcript subject combination, Mathematics or Literature must account for at least 1/3 of the total weight (minimum 10/30 points).',
        },
        {
          ruleTitle: 'Regional & Policy Priority Points Calculation',
          description: 'Combined regional and policy priority points cannot exceed 3.0 points on a 30-point scale. For candidates scoring 22.5 or higher, priority points taper linearly: Priority = [(30 - Total Score) / 7.5] × Base Priority.',
          articleRef: 'Article 7, Circular 06/2026',
          exceptionsAndNotes: 'No bonus or priority points may exceed the 3.0-point ceiling under any circumstance.',
        },
        {
          ruleTitle: 'International Foreign Language Certificates (IELTS, TOEFL, VSTEP...)',
          description: 'Foreign language certificates may be used to convert foreign language exam scores or award bonus points in accordance with each institution’s published admission scheme.',
          articleRef: 'Article 9, Circular 06/2026',
          exceptionsAndNotes: 'Each university must publicly disclose its certificate conversion table in its official admission scheme.',
        },
        {
          ruleTitle: 'Quality Assurance Floor Score Clarification (15/30 Threshold)',
          description: 'The 15/30 threshold is a minimum application floor for certain methods/majors per institutional schemes—NOT an automatic admission guarantee.',
          articleRef: 'Article 11, Circular 06/2026',
          exceptionsAndNotes: 'Medicine, Pharmacy, Dentistry, and Pedagogy programs remain subject to dedicated national MOET quality assurance floor scores.',
        },
      ],
    },
    'qd-3037-2025': {
      documentNumber: 'Decision 3037/QD-BGDDT',
      title: 'Master Implementation Timeline for 2026 University and College Admissions',
      scope: 'National schedule and milestones for the entire higher education admission system in 2026.',
      officialSourceLabel: 'Official Decision 3037/QD-BGDDT',
      keyRules: [
        {
          ruleTitle: 'Online Preference Registration & Adjustment Window',
          description: 'Candidates may register and adjust their admission preferences an unlimited number of times within the official window after High School Graduation Exam scores are announced.',
          articleRef: 'Appendix I, Plan 3037/QD-BGDDT',
          exceptionsAndNotes: 'All preference registrations are completed on the central MOET portal; no institution may demand original documents prior to official admission notice.',
        },
        {
          ruleTitle: 'National Virtual Filtering & Cutoff Announcement',
          description: 'The national admission system conducts 6 consecutive rounds of centralized virtual filtering before universities publish official cutoff scores.',
          articleRef: 'Appendix II, Plan 3037/QD-BGDDT',
          exceptionsAndNotes: 'Candidates admitted to Preference #1 are not considered for subsequent preferences.',
        },
      ],
    },
    'cv-2304-2026': {
      documentNumber: 'Official Dispatch 2304/BGDDT-GDDH',
      title: 'Detailed Guidelines on 2026 University and Early Childhood College Admissions',
      scope: 'Detailed operational instructions for candidates, high schools, provincial Departments of Education, and universities.',
      officialSourceLabel: 'Government Policy & Legislation Portal',
      keyRules: [
        {
          ruleTitle: 'Candidate Account Security & Anti-Fraud Protection',
          description: 'The MOET admission portal account issued via high schools is the personal credential of each candidate. Never share your password with third-party brokers or counseling centers.',
          articleRef: 'Section III, Dispatch 2304/BGDDT-GDDH',
          exceptionsAndNotes: 'If a password is lost, contact your high school reception point directly to receive a secure OTP reset.',
        },
        {
          ruleTitle: 'Mandatory Online Enrollment Confirmation',
          description: 'Upon admission, candidates must confirm enrollment online via the MOET portal before the statutory deadline. Failure to confirm forfeits admission status.',
          articleRef: 'Section V, Dispatch 2304/BGDDT-GDDH',
          exceptionsAndNotes: 'Only programs with remaining quotas after Round 1 may conduct supplementary admission rounds.',
        },
      ],
    },
  };

  return items.map((item) => (enMap[item.id] ? { ...item, ...enMap[item.id] } : item));
}

export function getLocalizedOfficialExamLibraries(
  items: OfficialExamLibraryItem[],
  lang: 'vi' | 'en'
): OfficialExamLibraryItem[] {
  if (lang === 'vi') return items;
  const enMap: Record<string, Partial<OfficialExamLibraryItem>> = {
    'lib-hsa-guide': {
      examName: 'HSA Aptitude Assessment — VNU Hanoi',
      organizer: 'VNU Center for Educational Testing (CET-VNU)',
      documentType: 'Exam Interface Guide' as any,
      accessCondition: 'Free Public Access' as any,
      description: 'Step-by-step guide to CBT interface navigation, permitted calculators, and time allocation across the 3 exam sections: Quantitative, Qualitative, and Science/English.',
    },
    'lib-hsa-reference': {
      examName: 'HSA Official Online Practice Portal — VNU Hanoi',
      organizer: 'VNU Center for Educational Testing (CET-VNU)',
      documentType: 'Official Reference Test' as any,
      accessCondition: 'Free Account Required' as any,
      description: 'Official computer-based practice portal operated by CET-VNU so candidates can familiarize themselves with the real exam software.',
    },
    'lib-dgnl-hcm': {
      examName: 'V-ACT Aptitude Assessment — VNU Ho Chi Minh City',
      organizer: 'VNU-HCM Center for Educational Testing & Quality Assessment',
      documentType: 'Sample Exam' as any,
      accessCondition: 'Free Public Access' as any,
      description: '120 multiple-choice questions in 150 minutes: Language Use (Vietnamese & English), Mathematics & Logic, Data Analysis, and Scientific Problem Solving.',
    },
    'lib-tsa-handbook': {
      examName: 'TSA Thinking Skills Assessment Handbook — HUST',
      organizer: 'Hanoi University of Science and Technology & Bach Khoa Publishing',
      documentType: 'Structure Handbook' as any,
      accessCondition: 'Free Public Access' as any,
      description: 'Free official e-book detailing the 3 TSA sections: Mathematical Thinking (40 pts / 60m), Reading Comprehension (20 pts / 30m), and Scientific Reasoning (40 pts / 60m).',
    },
    'lib-spt-hnue': {
      examName: 'SPT Competency Assessment Exam — Hanoi National Univ. of Education',
      organizer: 'Hanoi National University of Education (HNUE)',
      documentType: 'Sample Exam' as any,
      accessCondition: 'Free Public Access' as any,
      description: 'Subject-based competency tests (Math, Literature, English, Physics, Chemistry, Biology, History, Geography) combining objective multiple-choice and structured essays.',
    },
  };

  return items.map((item) => (enMap[item.id] ? { ...item, ...enMap[item.id] } : item));
}

export function getLocalizedPracticeExamSets(
  sets: PracticeExamSet[],
  lang: 'vi' | 'en'
): PracticeExamSet[] {
  if (lang === 'vi') return sets;
  const enSets: Record<string, Partial<PracticeExamSet>> = {
    'practice-hsa-01': {
      title: 'Skill Practice: HSA Quantitative Reasoning & Applied Data Analysis',
      subtitle: 'Practice applied mathematical modeling, probability, and data chart interpretation aligned with VNU Hanoi HSA standards.',
      typeLabel: 'In-App Curated Practice Set' as any,
      organizer: 'CHẠM VIỆC Math & Aptitude Academic Board (Powered by EIE Education)',
      scoringMatrix: '1.0 point per correct answer; deterministic source-code grading with full step-by-step solutions.',
      questions: [
        {
          id: 'q-hsa-01',
          examType: 'HSA',
          skillDomain: 'quantitative',
          skillDomainLabel: 'Quantitative Reasoning',
          difficulty: 'Comprehension' as any,
          timeEstimateSeconds: 120,
          questionText:
            'A high-tech farm in Lam Dong installs an automated drip fertigation tank holding 2,400 liters of nutrient solution. Each hour of operation consumes 15% of the remaining solution in the tank. After exactly 2 hours of operation, how many liters of nutrient solution remain in the tank?',
          options: [
            { id: 'A', text: '1,680 liters' },
            { id: 'B', text: '1,734 liters' },
            { id: 'C', text: '2,040 liters' },
            { id: 'D', text: '1,920 liters' },
          ],
          correctOptionId: 'B',
          detailedExplanation:
            'Solution: After Hour 1, the remaining solution is 2,400 × (1 - 0.15) = 2,400 × 0.85 = 2,040 liters. After Hour 2, the system consumes 15% of the remaining 2,040 liters, leaving 2,040 × 0.85 = 1,734 liters. Correct answer: B.',
          authorLabel: 'M.Sc. Nguyen Hoang (CHẠM VIỆC EdTech)',
          reviewedBy: 'EIE Education Mathematics Academic Council',
          status: 'APPROVED',
        },
        {
          id: 'q-hsa-02',
          examType: 'HSA',
          skillDomain: 'quantitative',
          skillDomainLabel: 'Probability & Statistics',
          difficulty: 'Application' as any,
          timeEstimateSeconds: 150,
          questionText:
            'In a career interest survey of 100 high school students, 65 enjoy Realistic/Engineering (R), 50 enjoy Investigative/Science (I), and 30 enjoy both R and I. If one student is selected at random from the 100 students, what is the probability that the student enjoys NEITHER (R) nor (I)?',
          options: [
            { id: 'A', text: '0.15' },
            { id: 'B', text: '0.20' },
            { id: 'C', text: '0.35' },
            { id: 'D', text: '0.10' },
          ],
          correctOptionId: 'A',
          detailedExplanation:
            'Solution: By the inclusion-exclusion principle, the number of students who like at least one group is |R ∪ I| = |R| + |I| - |R ∩ I| = 65 + 50 - 30 = 85 students. Those who like neither = 100 - 85 = 15 students. Probability = 15 / 100 = 0.15. Correct answer: A.',
          authorLabel: 'M.Sc. Nguyen Hoang (CHẠM VIỆC EdTech)',
          reviewedBy: 'EIE Education Mathematics Academic Council',
          status: 'APPROVED',
        },
        {
          id: 'q-hsa-03',
          examType: 'HSA',
          skillDomain: 'data_analysis',
          skillDomainLabel: 'Data & Chart Analysis',
          difficulty: 'Comprehension' as any,
          timeEstimateSeconds: 120,
          stimulusText:
            'Enrollment quota breakdown of University X: High School Graduation Exam accounts for 45%; Aptitude Test (HSA/VNU) accounts for 35%; Combined International Certificate admission accounts for 15%; Other methods account for 5%. Total enrollment quota is 4,000 students.',
          questionText:
            'Based on the data above, how many more students are admitted via the Aptitude Test (HSA) compared to the Combined International Certificate method?',
          options: [
            { id: 'A', text: '600 students' },
            { id: 'B', text: '800 students' },
            { id: 'C', text: '1,400 students' },
            { id: 'D', text: '400 students' },
          ],
          correctOptionId: 'B',
          detailedExplanation:
            'Solution: HSA quota = 4,000 × 35% = 1,400 students. Combined Certificate quota = 4,000 × 15% = 600 students. Difference = 1,400 - 600 = 800 students (or 4,000 × (35% - 15%) = 800). Correct answer: B.',
          authorLabel: 'CHẠM VIỆC Admissions Research Team',
          reviewedBy: 'EIE Education Assessment Specialist',
          status: 'APPROVED',
        },
        {
          id: 'q-hsa-04',
          examType: 'HSA',
          skillDomain: 'scientific_logic',
          skillDomainLabel: 'Analytical & Scientific Logic',
          difficulty: 'Application' as any,
          timeEstimateSeconds: 180,
          questionText:
            'Four students—An, Binh, Cuc, and Duong—each choose one of four distinct majors: Medicine, Automotive Engineering, Information Technology, and Graphic Design. Given:\n1. An studies neither Medicine nor Information Technology.\n2. Binh only pursues a major centered on creative visual arts.\n3. The Medicine student has never met Duong (and Cúc works directly with software source code).\nWhich major does Duong pursue?',
          options: [
            { id: 'A', text: 'Medicine' },
            { id: 'B', text: 'Automotive Engineering' },
            { id: 'C', text: 'Information Technology' },
            { id: 'D', text: 'Graphic Design' },
          ],
          correctOptionId: 'A',
          detailedExplanation:
            'Solution: From (2), Binh studies Graphic Design. Cuc works with software source code so Cuc studies Information Technology. That leaves An and Duong with Medicine and Automotive Engineering. From (1), An does not study Medicine, so An studies Automotive Engineering. Therefore, Duong studies Medicine. Correct answer: A.',
          authorLabel: 'CHẠM VIỆC Logical Reasoning Team',
          reviewedBy: 'EIE Education Scientific Council',
          status: 'APPROVED',
        },
      ],
    },
    'practice-tsa-01': {
      title: 'Skill Practice: TSA Scientific Reading Comprehension & Critical Reasoning',
      subtitle: 'Practice synthesizing scientific passages, identifying core mechanisms, and technical English aligned with HUST TSA standards.',
      typeLabel: 'In-App Curated Practice Set' as any,
      organizer: 'CHẠM VIỆC Reading & Critical Thinking Board (Powered by EIE Education)',
      scoringMatrix: 'Automated grading aligned with HUST TSA standards, complete with detailed explanations.',
      questions: [
        {
          id: 'q-tsa-01',
          examType: 'TSA',
          skillDomain: 'verbal_vietnamese',
          skillDomainLabel: 'Scientific Reading Comprehension',
          difficulty: 'Comprehension' as any,
          timeEstimateSeconds: 150,
          stimulusText:
            'Solid-state batteries are considered a breakthrough shaping the future of electric vehicles (EVs) and mobile devices. Unlike conventional lithium-ion batteries that use liquid or gel electrolytes prone to catching fire during short circuits or thermal runaway, solid-state batteries replace them entirely with solid electrolytes (such as ceramics or specialized polymers). This shift not only virtually eliminates fire and explosion hazards but also enables the use of a pure lithium-metal anode, boosting energy density per kilogram by 50% to 80%. However, the biggest barriers today lie in prohibitive manufacturing costs and micro-cracking at the solid–solid interface after repeated charge–discharge cycles.',
          questionText:
            'According to the passage, what is the fundamental structural advantage that makes solid-state batteries safer than conventional lithium-ion batteries?',
          options: [
            { id: 'A', text: 'Solid-state batteries are physically larger, allowing faster natural heat dissipation.' },
            { id: 'B', text: 'A solid electrolyte replaces the flammable liquid electrolyte, eliminating thermal ignition risk.' },
            { id: 'C', text: 'Solid-state batteries do not use any lithium metal inside the cell.' },
            { id: 'D', text: 'Lower manufacturing costs allow easier quality control.' },
          ],
          correctOptionId: 'B',
          detailedExplanation:
            'Solution: The passage states explicitly that solid-state batteries replace flammable liquid/gel electrolytes with solid electrolytes (ceramics/polymers), virtually eliminating fire and explosion risks. Correct answer: B.',
          authorLabel: 'CHẠM VIỆC Reading Comprehension Team',
          reviewedBy: 'EIE Education Language Department',
          status: 'APPROVED',
        },
        {
          id: 'q-tsa-02',
          examType: 'TSA',
          skillDomain: 'verbal_vietnamese',
          skillDomainLabel: 'Critical Thinking & Inference',
          difficulty: 'Advanced Application' as any,
          timeEstimateSeconds: 180,
          stimulusText: 'Refer to the Solid-State Battery scientific passage in Question 1.',
          questionText:
            'Which of the following is the primary technical and economic challenge hindering mass commercialization of solid-state batteries today?',
          options: [
            { id: 'A', text: 'Their energy density per kg is lower than liquid lithium-ion batteries.' },
            { id: 'B', text: 'Ceramic electrolytes are radioactive and banned from transport.' },
            { id: 'C', text: 'High manufacturing costs and interfacial micro-cracking between solid layers after repeated charge cycles.' },
            { id: 'D', text: 'Incompatibility with three-phase AC electric motors.' },
          ],
          correctOptionId: 'C',
          detailedExplanation:
            'Solution: The final sentence highlights the two key barriers: prohibitive manufacturing costs and micro-cracking at the solid–solid contact interface after repeated charge–discharge cycles. Correct answer: C.',
          authorLabel: 'CHẠM VIỆC Reading Comprehension Team',
          reviewedBy: 'EIE Education Language Department',
          status: 'APPROVED',
        },
        {
          id: 'q-tsa-03',
          examType: 'TSA',
          skillDomain: 'verbal_english',
          skillDomainLabel: 'Academic & Technical English',
          difficulty: 'Comprehension' as any,
          timeEstimateSeconds: 120,
          questionText:
            'Choose the word that best fits the blank: "Green hydrogen is produced by ________ water using renewable electricity, generating zero carbon emissions during the entire lifecycle."',
          options: [
            { id: 'A', text: 'evaporating' },
            { id: 'B', text: 'electrolyzing' },
            { id: 'C', text: 'condensing' },
            { id: 'D', text: 'contaminating' },
          ],
          correctOptionId: 'B',
          detailedExplanation:
            'Solution: "Electrolyzing" refers to water electrolysis—splitting H2O into hydrogen (H2) and oxygen (O2) using renewable electricity. Evaporating, condensing, and contaminating do not fit the chemical process. Correct answer: B.',
          authorLabel: 'EIE Education Academic English Board',
          reviewedBy: 'M.A. Le Minh Trang (EIE Academic Director)',
          status: 'APPROVED',
        },
      ],
    },
  };

  return sets.map((s) => (enSets[s.id] ? ({ ...s, ...enSets[s.id] } as PracticeExamSet) : s));
}
