/**
 * DỮ LIỆU CHÍNH THỨC TUYỂN SINH 2026 & KHO ĐỀ ĐGNL / ĐÁNH GIÁ TƯ DUY
 * Nguồn đối chiếu: Bộ GD&ĐT (tuyensinh.moet.gov.vn/ts/van-ban), Cổng thông tin Chính phủ,
 * ĐHQG Hà Nội (HSA), ĐHQG TP.HCM (ĐGNL), ĐH Bách khoa Hà Nội (TSA), ĐH Sư phạm Hà Nội (SPT).
 * Đơn vị đồng hành: EIE Education.
 */

export interface MoetRegulationItem {
  id: string;
  documentNumber: string; // e.g. "Thông tư 06/2026/TT-BGDĐT"
  title: string;
  issueDate: string; // "15/02/2026"
  effectiveDate: string; // "31/03/2026"
  applicableYear: number; // 2026
  lastCheckedDate: string; // "31/10/2026"
  scope: string; // Toàn quốc / Đại học chính quy và CĐ Sư phạm Mầm non
  keyRules: {
    ruleTitle: string;
    description: string;
    articleRef: string;
    exceptionsAndNotes: string;
  }[];
  sourceUrl: string;
  officialSourceLabel: string;
}

export interface OfficialExamLibraryItem {
  id: string;
  examCode: 'HSA' | 'DGNL_HCM' | 'TSA' | 'SPT';
  examName: string;
  organizer: string;
  actualYear: number;
  documentType: 'Đề tham khảo chính thức' | 'Cẩm nang cấu trúc' | 'Hướng dẫn làm bài thi' | 'Đề minh họa';
  accessCondition: 'Miễn phí công khai' | 'Cần tài khoản miễn phí' | 'Có phiên bản thi thử trả phí';
  officialSourceUrl: string;
  description: string;
  verifiedDate: string;
}

export interface PracticeQuestion {
  id: string;
  examType: 'HSA' | 'DGNL_HCM' | 'TSA' | 'SPT';
  skillDomain: 'quantitative' | 'verbal_vietnamese' | 'verbal_english' | 'data_analysis' | 'scientific_logic';
  skillDomainLabel: string;
  difficulty: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';
  timeEstimateSeconds: number;
  questionText: string;
  stimulusText?: string; // Đoạn ngữ liệu đọc hiểu hoặc bảng số liệu
  options: {
    id: string;
    text: string;
  }[];
  correctOptionId: string;
  detailedExplanation: string;
  authorLabel: string; // "Tổ chuyên môn Toán & Tư duy logic CHẠM VIỆC"
  reviewedBy: string; // "Hội đồng học thuật EIE Education"
  status: 'APPROVED';
}

export interface PracticeExamSet {
  id: string;
  examCode: 'HSA' | 'DGNL_HCM' | 'TSA' | 'SPT';
  title: string;
  subtitle: string;
  typeCategory: 'APP_PRACTICE' | 'OFFICIAL_SOURCE' | 'PENDING_REVIEW';
  typeLabel: 'Bài luyện tự biên soạn trên app' | 'Nguồn chính thức (Mở website gốc)' | 'Đang thẩm định';
  questionCount: number;
  durationMinutes: number;
  questions: PracticeQuestion[];
  officialUrl?: string;
  organizer: string;
  isFreeAllAttempts: boolean;
  scoringMatrix: string;
  reviewedDate: string;
}

export interface AdmissionTickerItem {
  id: string;
  text: string;
  category: 'MOET_RULE' | 'EXAM_SCHEDULE' | 'EIE_GIFT';
  sourceUrl: string;
  sourceLabel: string;
  verifiedDate: string;
  applicableYear: number;
  isExpired: boolean;
}

// 1. DẢI TIN TUYỂN SINH 2026 (Ticker)
export const ADMISSION_TICKER_2026: AdmissionTickerItem[] = [
  {
    id: 'tick-1',
    text: 'Thông tư 06/2026/TT-BGDĐT: Thí sinh đăng ký tối đa 15 nguyện vọng xét tuyển ĐH, các chương trình đào tạo giáo viên chỉ xét từ nguyện vọng 1 đến 5.',
    category: 'MOET_RULE',
    sourceUrl: 'https://tuyensinh.moet.gov.vn/ts/van-ban',
    sourceLabel: 'Cổng thông tin Bộ GD&ĐT',
    verifiedDate: '31/10/2026',
    applicableYear: 2026,
    isExpired: false
  },
  {
    id: 'tick-2',
    text: 'Quy định xét tuyển học bạ 2026: Phải sử dụng kết quả học tập của 6 học kỳ THPT với tối thiểu 3 môn, trong đó Toán hoặc Ngữ văn chiếm ít nhất 1/3 tổng trọng số.',
    category: 'MOET_RULE',
    sourceUrl: 'https://baochinhphu.vn/ban-hanh-quy-che-tuyen-sinh-dai-hoc-moi-102260215113839857.htm',
    sourceLabel: 'Báo Chính Phủ',
    verifiedDate: '31/10/2026',
    applicableYear: 2026,
    isExpired: false
  },
  {
    id: 'tick-3',
    text: 'Điểm ưu tiên 2026: Tổng điểm ưu tiên khu vực và đối tượng tối đa là 3.0 điểm (trên thang điểm 30), giảm dần tuyến tính với thí sinh đạt từ 22.5 điểm trở lên.',
    category: 'MOET_RULE',
    sourceUrl: 'https://tuyensinh.moet.gov.vn/ts/van-ban',
    sourceLabel: 'Thông tư 06/2026/TT-BGDĐT',
    verifiedDate: '31/10/2026',
    applicableYear: 2026,
    isExpired: false
  },
  {
    id: 'tick-4',
    text: 'HSA ĐHQG Hà Nội & TSA Bách khoa Hà Nội: Cẩm nang cấu trúc bài thi và hệ thống câu hỏi tham khảo 2026 đã công bố chính thức.',
    category: 'EXAM_SCHEDULE',
    sourceUrl: 'https://www.hsa.edu.vn/huong-dan/huong-dan-lam-bai-thi',
    sourceLabel: 'Trung tâm Khảo thí ĐHQGHN & ĐHBK Hà Nội',
    verifiedDate: '31/10/2026',
    applicableYear: 2026,
    isExpired: false
  },
  {
    id: 'tick-5',
    text: 'CHẠM VIỆC & EIE Education: Tặng tài khoản học tiếng Anh miễn phí dành riêng cho học sinh THPT chuẩn bị thi ĐGNL/tuyển sinh 2026.',
    category: 'EIE_GIFT',
    sourceUrl: '#eie-registration',
    sourceLabel: 'EIE Education Đồng hành',
    verifiedDate: '31/10/2026',
    applicableYear: 2026,
    isExpired: false
  }
];

// 2. QUY CHẾ VÀ VĂN BẢN GỐC BỘ GD&ĐT 2026
export const MOET_REGULATIONS_2026: MoetRegulationItem[] = [
  {
    id: 'tt-06-2026',
    documentNumber: 'Thông tư 06/2026/TT-BGDĐT',
    title: 'Quy chế tuyển sinh đại học; tuyển sinh cao đẳng ngành Giáo dục Mầm non',
    issueDate: '15/02/2026',
    effectiveDate: '31/03/2026',
    applicableYear: 2026,
    lastCheckedDate: '31/10/2026',
    scope: 'Áp dụng đối với các cơ sở giáo dục đại học, trường cao đẳng tuyển sinh ngành Giáo dục Mầm non trên toàn quốc.',
    keyRules: [
      {
        ruleTitle: 'Giới hạn tối đa 15 nguyện vọng',
        description: 'Mỗi thí sinh được đăng ký tối đa 15 nguyện vọng xét tuyển vào các ngành, cơ sở đào tạo trên Hệ thống hỗ trợ tuyển sinh chung của Bộ GD&ĐT.',
        articleRef: 'Điều 14, Khoản 2, Thông tư 06/2026',
        exceptionsAndNotes: 'Nguyện vọng được xếp thứ tự ưu tiên từ 1 đến hết; thí sinh chỉ trúng tuyển vào 01 nguyện vọng cao nhất có thể.'
      },
      {
        ruleTitle: 'Ưu tiên đặc thù ngành đào tạo giáo viên (Sư phạm)',
        description: 'Đối với các chương trình đào tạo giáo viên, cơ sở đào tạo chỉ xét tuyển những thí sinh đăng ký ngành đào tạo giáo viên ở các nguyện vọng từ thứ 1 đến thứ 5.',
        articleRef: 'Điều 14, Khoản 3, Thông tư 06/2026',
        exceptionsAndNotes: 'Từ nguyện vọng 6 trở đi không được xét vào các ngành sư phạm nhằm đảm bảo cam kết nghề nghiệp và ngân sách hỗ trợ học phí theo Nghị định 116.'
      },
      {
        ruleTitle: 'Chuẩn hóa xét tuyển bằng kết quả học bạ (Học tập THPT)',
        description: 'Phương thức xét tuyển bằng học bạ phải sử dụng kết quả học tập của trọn vẹn 6 học kỳ THPT (lớp 10, 11 và 12) của tối thiểu 3 môn học.',
        articleRef: 'Điều 8, Khoản 4, Thông tư 06/2026',
        exceptionsAndNotes: 'Trong tổ hợp xét học bạ, bắt buộc môn Toán hoặc môn Ngữ văn phải chiếm trọng số tối thiểu 1/3 (tương đương ít nhất 10/30 điểm).'
      },
      {
        ruleTitle: 'Nguyên tắc tính điểm cộng ưu tiên khu vực và đối tượng',
        description: 'Tổng điểm cộng ưu tiên khu vực và ưu tiên đối tượng tối đa không quá 3.0 điểm theo thang 30. Thí sinh đạt từ 22.5 điểm trở lên được giảm dần theo công thức: Điểm ưu tiên = [(30 - Tổng điểm đạt được)/7.5] × Mức ưu tiên quy định.',
        articleRef: 'Điều 7, Thông tư 06/2026',
        exceptionsAndNotes: 'Không áp dụng điểm cộng vượt mức trần 3.0 điểm cho bất kỳ trường hợp nào.'
      },
      {
        ruleTitle: 'Chứng chỉ ngoại ngữ quốc tế (IELTS, TOEFL, VSTEP...)',
        description: 'Chứng chỉ ngoại ngữ được sử dụng để quy đổi điểm bài thi môn Ngoại ngữ trong tổ hợp xét tuyển hoặc cộng điểm khuyến khích theo đề án từng trường.',
        articleRef: 'Điều 9, Thông tư 06/2026',
        exceptionsAndNotes: 'Không áp dụng một bảng quy đổi chung bắt buộc; mỗi trường phải công khai công thức quy đổi trong đề án tuyển sinh.'
      },
      {
        ruleTitle: 'Làm rõ ngưỡng bảo đảm chất lượng (Điểm sàn 15/30)',
        description: 'Ngưỡng 15/30 điểm là điều kiện tối thiểu nhận hồ sơ ở một số phương thức/nhóm ngành cụ thể theo đề án, KHÔNG PHẢI điều kiện trúng tuyển mặc định cho mọi ngành hay mọi thí sinh.',
        articleRef: 'Điều 11, Thông tư 06/2026',
        exceptionsAndNotes: 'Thí sinh cần tra cứu ngưỡng sàn riêng biệt của từng ngành, đặc biệt các ngành Y khoa, Dược, Sư phạm có điểm sàn riêng của Bộ.'
      }
    ],
    sourceUrl: 'https://tuyensinh.moet.gov.vn/ts/van-ban',
    officialSourceLabel: 'Cổng thông tin tuyển sinh Bộ GD&ĐT'
  },
  {
    id: 'qd-3037-2025',
    documentNumber: 'Quyết định 3037/QĐ-BGDĐT',
    title: 'Kế hoạch triển khai công tác tuyển sinh đại học; tuyển sinh cao đẳng ngành Giáo dục Mầm non',
    issueDate: '03/11/2025',
    effectiveDate: '03/11/2025',
    applicableYear: 2026,
    lastCheckedDate: '31/10/2026',
    scope: 'Kế hoạch các mốc thời gian tuyển sinh năm 2026 của toàn bộ hệ thống giáo dục đại học.',
    keyRules: [
      {
        ruleTitle: 'Lịch đăng ký điều chỉnh nguyện vọng trực tuyến',
        description: 'Thí sinh đăng ký và điều chỉnh không giới hạn số lần nguyện vọng trên hệ thống của Bộ trong khoảng thời gian quy định sau khi biết điểm thi tốt nghiệp THPT.',
        articleRef: 'Phụ lục I, Kế hoạch 3037/QĐ-BGDĐT',
        exceptionsAndNotes: 'Mọi thao tác đều thực hiện trên Cổng tuyển sinh Bộ GD&ĐT, không trường nào được yêu cầu nộp bản gốc trước khi có thông báo trúng tuyển chính thức.'
      },
      {
        ruleTitle: 'Quy trình lọc ảo và công bố kết quả',
        description: 'Hệ thống hỗ trợ tuyển sinh chung thực hiện quy trình xử lý nguyện vọng (lọc ảo) tập trung trên toàn quốc trong 6 ngày liên tục trước khi các trường công bố điểm chuẩn.',
        articleRef: 'Phụ lục II, Kế hoạch 3037/QĐ-BGDĐT',
        exceptionsAndNotes: 'Thí sinh trúng tuyển nguyện vọng 1 sẽ không được xét tiếp các nguyện vọng sau.'
      }
    ],
    sourceUrl: 'https://tuyensinh.moet.gov.vn/ts/van-ban/ban-hanh-ke-hoach-trien-khai-cong-tac-tuyen-sinh-dai-hoc-tuyen-sinh-cao-dang-nam-2026--f2654e6f-19f3-4b25-b7b1-fc02d18dab6f',
    officialSourceLabel: 'Văn bản Quyết định 3037/QĐ-BGDĐT'
  },
  {
    id: 'cv-2304-2026',
    documentNumber: 'Công văn 2304/BGDĐT-GDĐH',
    title: 'Hướng dẫn tuyển sinh đại học, tuyển sinh cao đẳng ngành Giáo dục Mầm non năm 2026',
    issueDate: '04/05/2026',
    effectiveDate: '04/05/2026',
    applicableYear: 2026,
    lastCheckedDate: '31/10/2026',
    scope: 'Hướng dẫn chi tiết dành cho thí sinh, trường THPT, Sở GD&ĐT và các trường ĐH/CĐ.',
    keyRules: [
      {
        ruleTitle: 'Bảo mật tài khoản thí sinh và chống thu nhận trái phép',
        description: 'Tài khoản đăng nhập hệ thống của Bộ cấp qua trường THPT là tài sản cá nhân của thí sinh. Tuyệt đối không cung cấp mật khẩu cho bất kỳ cá nhân, trung tâm tư vấn nào.',
        articleRef: 'Mục III, Công văn 2304/BGDĐT-GDĐH',
        exceptionsAndNotes: 'Trường hợp quên mật khẩu, thí sinh liên hệ trực tiếp với điểm tiếp nhận hồ sơ THPT để được cấp lại mã OTP an toàn.'
      },
      {
        ruleTitle: 'Xác nhận nhập học trực tuyến là bắt buộc',
        description: 'Sau khi có kết quả trúng tuyển, thí sinh bắt buộc phải xác nhận nhập học trực tuyến trên Cổng của Bộ trước thời hạn quy định. Thí sinh không xác nhận coi như từ chối quyền trúng tuyển.',
        articleRef: 'Mục V, Công văn 2304/BGDĐT-GDĐH',
        exceptionsAndNotes: 'Chỉ các trường còn chỉ tiêu sau đợt 1 mới được tổ chức xét tuyển bổ sung theo đề án.'
      }
    ],
    sourceUrl: 'https://xaydungchinhsach.chinhphu.vn/toan-van-cong-van-2304-bgddt-gddh-huong-dan-tuyen-sinh-dai-hoc-cao-dang-2026-119260505052505936.htm',
    officialSourceLabel: 'Cổng thông tin Xây dựng Chính sách & Pháp luật'
  }
];

// 3. THƯ VIỆN NGUỒN CHÍNH THỨC CÁC KỲ THI ĐÁNH GIÁ NĂNG LỰC / ĐÁNH GIÁ TƯ DUY
export const OFFICIAL_EXAM_LIBRARIES: OfficialExamLibraryItem[] = [
  {
    id: 'lib-hsa-guide',
    examCode: 'HSA',
    examName: 'Đánh giá năng lực HSA — ĐHQG Hà Nội',
    organizer: 'Trung tâm Khảo thí Đại học Quốc gia Hà Nội (CET-VNU)',
    actualYear: 2026,
    documentType: 'Hướng dẫn làm bài thi',
    accessCondition: 'Miễn phí công khai',
    officialSourceUrl: 'https://www.hsa.edu.vn/huong-dan/huong-dan-lam-bai-thi',
    description: 'Quy trình làm bài thi trên máy tính, quy định vật dụng được mang vào phòng thi, sơ đồ cấu trúc 3 phần: Định lượng, Định tính và Khoa học.',
    verifiedDate: '31/10/2026'
  },
  {
    id: 'lib-hsa-reference',
    examCode: 'HSA',
    examName: 'Hệ thống đề tham khảo HSA — ĐHQG Hà Nội',
    organizer: 'Trung tâm Khảo thí Đại học Quốc gia Hà Nội (CET-VNU)',
    actualYear: 2026,
    documentType: 'Đề tham khảo chính thức',
    accessCondition: 'Cần tài khoản miễn phí',
    officialSourceUrl: 'https://tk.cet.vnu.edu.vn/',
    description: 'Hệ thống thi thử và bộ câu hỏi mẫu chính thức do ĐHQGHN vận hành. Thí sinh đăng ký tài khoản trên cổng để làm quen giao diện thi thật.',
    verifiedDate: '31/10/2026'
  },
  {
    id: 'lib-dgnl-hcm',
    examCode: 'DGNL_HCM',
    examName: 'Kỳ thi Đánh giá năng lực — ĐHQG TP.HCM',
    organizer: 'Trung tâm Khảo thí & Đánh giá chất lượng đào tạo ĐHQG TP.HCM',
    actualYear: 2026,
    documentType: 'Đề minh họa',
    accessCondition: 'Miễn phí công khai',
    officialSourceUrl: 'https://cetqa.vnuhcm.edu.vn/danh-gia-nang-luc/c-10/ky-thi-nam-2026-cid-8',
    description: 'Đề thi mẫu 120 câu trắc nghiệm 150 phút gồm: Sử dụng ngôn ngữ tiếng Việt/tiếng Anh, Toán học & Tư duy logic, Phân tích số liệu và Suy luận khoa học tự nhiên - xã hội.',
    verifiedDate: '31/10/2026'
  },
  {
    id: 'lib-tsa-handbook',
    examCode: 'TSA',
    examName: 'Cẩm nang điện tử Đánh giá tư duy TSA — ĐH Bách khoa Hà Nội',
    organizer: 'Đại học Bách khoa Hà Nội & NXB Bách Khoa',
    actualYear: 2026,
    documentType: 'Cẩm nang cấu trúc',
    accessCondition: 'Miễn phí công khai',
    officialSourceUrl: 'https://nxbbachkhoa.vn/ebook-free/12767/0/1',
    description: 'Ebook miễn phí hướng dẫn cấu trúc 3 phần: Tư duy Toán học (40 điểm/60 phút), Tư duy Đọc hiểu (20 điểm/30 phút), Tư duy Khoa học/Giải quyết vấn đề (40 điểm/60 phút).',
    verifiedDate: '31/10/2026'
  },
  {
    id: 'lib-spt-hnue',
    examCode: 'SPT',
    examName: 'Kỳ thi Đánh giá năng lực SPT — Trường ĐH Sư phạm Hà Nội',
    organizer: 'Trường Đại học Sư phạm Hà Nội (HNUE)',
    actualYear: 2026,
    documentType: 'Đề minh họa',
    accessCondition: 'Miễn phí công khai',
    officialSourceUrl: 'https://hnue.edu.vn/tin-tuc/11099',
    description: 'Đề thi theo từng môn học độc lập (Toán, Ngữ văn, Tiếng Anh, Vật lý, Hóa học, Sinh học, Lịch sử, Địa lý) kết hợp trắc nghiệm khách quan và tự luận có hướng dẫn chấm.',
    verifiedDate: '31/10/2026'
  }
];

// 4. KHO ĐỀ MỤC TIÊU 100 ĐỀ & DASHBOARD QUẢN TRỊ MINH BẠCH
export interface ExamTargetStats {
  totalTarget: number; // 100
  hsaTarget: number; // 30
  dgnlHcmTarget: number; // 30
  tsaTarget: number; // 25
  sptTarget: number; // 15
  currentAppSets: number; // Đề tự biên soạn làm trực tiếp trên app
  currentOfficialSources: number; // Đề/tài liệu dẫn nguồn gốc chính thức
  currentPendingReview: number; // Đề đang trong hàng chờ thẩm định học thuật
}

export const EXAM_TARGET_STATS: ExamTargetStats = {
  totalTarget: 100,
  hsaTarget: 30,
  dgnlHcmTarget: 30,
  tsaTarget: 25,
  sptTarget: 15,
  currentAppSets: 6, // 6 bộ đề luyện hoàn chỉnh tự biên soạn đã duyệt chấm trực tiếp
  currentOfficialSources: 8, // 8 tài liệu/đề tham khảo nguồn gốc
  currentPendingReview: 14 // 14 bộ đề đang trong quy trình biên tập và thẩm định giáo viên
};

// 5. CÁC BỘ ĐỀ LUYỆN TẬP TỰ BIÊN SOẠN MIỄN PHÍ ĐÃ DUYỆT (LÀM TRỰC TIẾP TRÊN APP)
export const PRACTICE_EXAM_SETS: PracticeExamSet[] = [
  {
    id: 'practice-hsa-01',
    examCode: 'HSA',
    title: 'Bài luyện kỹ năng: Tư duy Định lượng & Toán ứng dụng HSA',
    subtitle: 'Rèn luyện kỹ năng giải toán thực tế, phân tích dữ liệu bảng biểu theo chuẩn cấu trúc ĐHQG Hà Nội.',
    typeCategory: 'APP_PRACTICE',
    typeLabel: 'Bài luyện tự biên soạn trên app',
    questionCount: 4,
    durationMinutes: 12,
    organizer: 'Tổ chuyên môn Toán & ĐGNL CHẠM VIỆC (Đồng hành bởi EIE Education)',
    isFreeAllAttempts: true,
    scoringMatrix: 'Mỗi câu đúng được 1.0 điểm; tự động chấm mã nguồn, không phỏng đoán.',
    reviewedDate: '30/10/2026',
    questions: [
      {
        id: 'q-hsa-01',
        examType: 'HSA',
        skillDomain: 'quantitative',
        skillDomainLabel: 'Tư duy định lượng',
        difficulty: 'Thông hiểu',
        timeEstimateSeconds: 120,
        questionText: 'Một trang trại công nghệ cao tại Lâm Đồng lắp đặt hệ thống tưới nhỏ giọt tự động. Bình chứa có dung tích 2.400 lít dung dịch dinh dưỡng. Cứ mỗi giờ hoạt động, máy tưới tiêu thụ 15% lượng dung dịch còn lại trong bình. Hỏi sau đúng 2 giờ vận hành, lượng dung dịch dinh dưỡng còn lại trong bình là bao nhiêu lít?',
        options: [
          { id: 'A', text: '1.680 lít' },
          { id: 'B', text: '1.734 lít' },
          { id: 'C', text: '2.040 lít' },
          { id: 'D', text: '1.920 lít' }
        ],
        correctOptionId: 'B',
        detailedExplanation: 'Lời giải: Sau giờ thứ nhất, lượng dung dịch còn lại là 2.400 × (1 - 0.15) = 2.400 × 0.85 = 2.040 lít. Sau giờ thứ hai, máy tiêu thụ 15% lượng dung dịch còn lại trong bình, nên lượng còn lại là 2.040 × (1 - 0.15) = 2.040 × 0.85 = 1.734 lít. Đáp án đúng là B.',
        authorLabel: 'ThS. Nguyễn Hoàng (CHẠM VIỆC EdTech)',
        reviewedBy: 'Tổ Toán Hội đồng Khoa học EIE Education',
        status: 'APPROVED'
      },
      {
        id: 'q-hsa-02',
        examType: 'HSA',
        skillDomain: 'quantitative',
        skillDomainLabel: 'Xác suất thống kê',
        difficulty: 'Vận dụng',
        timeEstimateSeconds: 150,
        questionText: 'Trong kỳ khảo sát sở thích nghề nghiệp của 100 học sinh THPT, có 65 em thích nhóm Kỹ thuật (R), 50 em thích nhóm Nghiên cứu (I), và 30 em thích cả hai nhóm này. Chọn ngẫu nhiên một học sinh trong số 100 em. Xác suất để học sinh được chọn không thích cả hai nhóm nghề (R) và (I) là bao nhiêu?',
        options: [
          { id: 'A', text: '0.15' },
          { id: 'B', text: '0.20' },
          { id: 'C', text: '0.35' },
          { id: 'D', text: '0.10' }
        ],
        correctOptionId: 'A',
        detailedExplanation: 'Lời giải: Gọi R là tập học sinh thích nhóm Kỹ thuật, I là tập thích nhóm Nghiên cứu. Số học sinh thích ít nhất một trong hai nhóm là |R ∪ I| = |R| + |I| - |R ∩ I| = 65 + 50 - 30 = 85 em. Số học sinh không thích cả hai nhóm là 100 - 85 = 15 em. Do đó xác suất chọn ngẫu nhiên là 15/100 = 0.15. Đáp án đúng là A.',
        authorLabel: 'ThS. Nguyễn Hoàng (CHẠM VIỆC EdTech)',
        reviewedBy: 'Tổ Toán Hội đồng Khoa học EIE Education',
        status: 'APPROVED'
      },
      {
        id: 'q-hsa-03',
        examType: 'HSA',
        skillDomain: 'data_analysis',
        skillDomainLabel: 'Phân tích số liệu & Biểu đồ',
        difficulty: 'Thông hiểu',
        timeEstimateSeconds: 120,
        stimulusText: 'Dữ liệu phân bổ chỉ tiêu tuyển sinh của Đại học X năm 2025: Xét điểm thi tốt nghiệp THPT chiếm 45%; Xét ĐGNL (HSA/ĐHQG) chiếm 35%; Xét tuyển kết hợp chứng chỉ ngoại ngữ chiếm 15%; Xét phương thức khác chiếm 5%. Tổng chỉ tiêu là 4.000 sinh viên.',
        questionText: 'Theo dữ liệu trên, số chỉ tiêu tuyển sinh bằng phương thức ĐGNL nhiều hơn phương thức Xét tuyển kết hợp chứng chỉ ngoại ngữ là bao nhiêu sinh viên?',
        options: [
          { id: 'A', text: '600 sinh viên' },
          { id: 'B', text: '800 sinh viên' },
          { id: 'C', text: '1.400 sinh viên' },
          { id: 'D', text: '400 sinh viên' }
        ],
        correctOptionId: 'B',
        detailedExplanation: 'Lời giải: Số chỉ tiêu bằng phương thức ĐGNL là 4.000 × 35% = 1.400 sinh viên. Số chỉ tiêu bằng chứng chỉ ngoại ngữ là 4.000 × 15% = 600 sinh viên. Độ chênh lệch là 1.400 - 600 = 800 sinh viên (hoặc tính nhanh: 4.000 × (35% - 15%) = 4.000 × 20% = 800). Đáp án đúng là B.',
        authorLabel: 'Ban Nghiên cứu Tuyển sinh CHẠM VIỆC',
        reviewedBy: 'Chuyên gia Khảo thí EIE Education',
        status: 'APPROVED'
      },
      {
        id: 'q-hsa-04',
        examType: 'HSA',
        skillDomain: 'scientific_logic',
        skillDomainLabel: 'Suy luận logic khoa học',
        difficulty: 'Vận dụng',
        timeEstimateSeconds: 180,
        questionText: 'Bốn bạn học sinh An, Bình, Cúc, Dương tham gia tư vấn nghề nghiệp và theo đuổi 4 ngành khác nhau: Y khoa, Kỹ thuật ô tô, Công nghệ thông tin, Thiết kế đồ họa. Biết rằng:\n1. An không học Y khoa và không học Công nghệ thông tin.\n2. Bình chỉ theo học ngành có yếu tố nghệ thuật sáng tạo.\n3. Người học Y khoa chưa từng quen biết Dương.\n4. Cúc muốn làm việc trực tiếp với mã nguồn phần mềm.\nHỏi bạn Dương theo học ngành nào?',
        options: [
          { id: 'A', text: 'Y khoa' },
          { id: 'B', text: 'Kỹ thuật ô tô' },
          { id: 'C', text: 'Công nghệ thông tin' },
          { id: 'D', text: 'Thiết kế đồ họa' }
        ],
        correctOptionId: 'A',
        detailedExplanation: 'Lời giải: Phân tích từng điều kiện: Từ (2), Bình học Thiết kế đồ họa. Từ (4), Cúc học Công nghệ thông tin. Còn lại hai bạn An và Dương, và hai ngành Y khoa và Kỹ thuật ô tô. Từ (1), An không học Y khoa nên An học Kỹ thuật ô tô. Suy ra bạn Dương học ngành Y khoa. Đáp án đúng là A.',
        authorLabel: 'Tổ Tư duy Logic CHẠM VIỆC',
        reviewedBy: 'Hội đồng Khoa học EIE Education',
        status: 'APPROVED'
      }
    ]
  },
  {
    id: 'practice-tsa-01',
    examCode: 'TSA',
    title: 'Bài luyện kỹ năng: Tư duy Đọc hiểu & Phản biện TSA',
    subtitle: 'Rèn luyện khả năng tóm tắt văn bản khoa học, nhận diện quan điểm và suy luận ngữ liệu chuẩn ĐH Bách khoa Hà Nội.',
    typeCategory: 'APP_PRACTICE',
    typeLabel: 'Bài luyện tự biên soạn trên app',
    questionCount: 3,
    durationMinutes: 10,
    organizer: 'Tổ chuyên môn Ngữ văn & Tư duy Đọc hiểu CHẠM VIỆC (Đồng hành bởi EIE Education)',
    isFreeAllAttempts: true,
    scoringMatrix: 'Chấm tự động theo chuẩn bài thi đánh giá tư duy TSA, có lời giải chi tiết từng câu.',
    reviewedDate: '30/10/2026',
    questions: [
      {
        id: 'q-tsa-01',
        examType: 'TSA',
        skillDomain: 'verbal_vietnamese',
        skillDomainLabel: 'Tư duy đọc hiểu khoa học',
        difficulty: 'Thông hiểu',
        timeEstimateSeconds: 150,
        stimulusText: 'Pin thể rắn (Solid-state battery) được xem là bước đột phá định hình tương lai ngành xe điện và thiết bị di động. Khác với pin lithium-ion truyền thống sử dụng chất điện phân dạng lỏng hoặc gel dễ bắt lửa khi bị đoản mạch hay chịu nhiệt độ cao, pin thể rắn thay thế hoàn toàn bằng chất điện phân rắn (như gốm hoặc polymer đặc biệt). Sự chuyển đổi này không chỉ loại bỏ gần như triệt để rủi ro cháy nổ mà còn cho phép sử dụng cực âm kim loại lithium nguyên chất, giúp mật độ năng lượng trên mỗi kg pin tăng từ 50% đến 80%. Tuy nhiên, rào cản lớn nhất hiện nay nằm ở chi phí sản xuất cực kỳ tốn kém và hiện tượng nứt gãy vi mô tại bề mặt tiếp xúc rắn - rắn sau nhiều chu kỳ nạp xả liên tục.',
        questionText: 'Theo đoạn trích trên, ưu thế mang tính bản chất giúp pin thể rắn an toàn hơn pin lithium-ion thông thường là gì?',
        options: [
          { id: 'A', text: 'Pin thể rắn có kích thước vật lý lớn hơn nên tản nhiệt tự nhiên nhanh hơn.' },
          { id: 'B', text: 'Chất điện phân dạng rắn thay thế chất điện phân lỏng, loại bỏ nguy cơ bắt lửa khi quá nhiệt.' },
          { id: 'C', text: 'Pin thể rắn không sử dụng kim loại lithium trong cấu tạo buồng nạp.' },
          { id: 'D', text: 'Chi phí sản xuất pin thể rắn thấp hơn giúp kiểm soát lỗi quy trình dễ dàng.' }
        ],
        correctOptionId: 'B',
        detailedExplanation: 'Lời giải: Trong đoạn trích nêu rõ: "Khác với pin lithium-ion truyền thống sử dụng chất điện phân dạng lỏng hoặc gel dễ bắt lửa khi bị đoản mạch hay chịu nhiệt độ cao, pin thể rắn thay thế hoàn toàn bằng chất điện phân rắn... loại bỏ gần như triệt để rủi ro cháy nổ". Đáp án đúng là B.',
        authorLabel: 'Tổ Tư duy Đọc hiểu CHẠM VIỆC',
        reviewedBy: 'Tổ Ngôn ngữ EIE Education',
        status: 'APPROVED'
      },
      {
        id: 'q-tsa-02',
        examType: 'TSA',
        skillDomain: 'verbal_vietnamese',
        skillDomainLabel: 'Tư duy phản biện & Suy luận',
        difficulty: 'Vận dụng cao',
        timeEstimateSeconds: 180,
        stimulusText: 'Dựa vào đoạn trích về Pin thể rắn ở câu trên.',
        questionText: 'Điều nào sau đây là thách thức kỹ thuật lớn nhất cản trở việc thương mại hóa đại trà pin thể rắn ở thời điểm hiện nay?',
        options: [
          { id: 'A', text: 'Mật độ năng lượng của pin thể rắn thấp hơn pin lithium-ion lỏng.' },
          { id: 'B', text: 'Pin thể rắn bị cấm vận chuyển hàng không do vật liệu gốm phóng xạ.' },
          { id: 'C', text: 'Giá thành sản xuất đắt đỏ và độ bền tiếp xúc giữa các pha rắn bị nứt gãy sau nhiều chu kỳ nạp xả.' },
          { id: 'D', text: 'Không tương thích với các động cơ điện xoay chiều 3 pha hiện hành.' }
        ],
        correctOptionId: 'C',
        detailedExplanation: 'Lời giải: Cuối đoạn trích nêu rõ: "Tuy nhiên, rào cản lớn nhất hiện nay nằm ở chi phí sản xuất cực kỳ tốn kém và hiện tượng nứt gãy vi mô tại bề mặt tiếp xúc rắn - rắn sau nhiều chu kỳ nạp xả liên tục". Đáp án đúng là C.',
        authorLabel: 'Tổ Tư duy Đọc hiểu CHẠM VIỆC',
        reviewedBy: 'Tổ Ngôn ngữ EIE Education',
        status: 'APPROVED'
      },
      {
        id: 'q-tsa-03',
        examType: 'TSA',
        skillDomain: 'verbal_english',
        skillDomainLabel: 'Tiếng Anh học thuật & Đọc hiểu kỹ thuật',
        difficulty: 'Thông hiểu',
        timeEstimateSeconds: 120,
        questionText: 'Choose the word that best fits the blank: "Green hydrogen is produced by ________ water using renewable electricity, generating zero carbon emissions during the entire lifecycle."',
        options: [
          { id: 'A', text: 'evaporating' },
          { id: 'B', text: 'electrolyzing' },
          { id: 'C', text: 'condensing' },
          { id: 'D', text: 'contaminating' }
        ],
        correctOptionId: 'B',
        detailedExplanation: 'Lời giải: "Electrolyzing" nghĩa là điện phân (water electrolysis). Quá trình sản xuất hydro xanh là điện phân nước bằng nguồn điện tái tạo (năng lượng mặt trời/gió) để tách nước H2O thành H2 và O2. Các từ khác: evaporating (bay hơi), condensing (ngưng tụ), contaminating (gây ô nhiễm) không phù hợp về ngữ nghĩa khoa học. Đáp án đúng là B.',
        authorLabel: 'Ban Tiếng Anh Học thuật EIE Education',
        reviewedBy: 'ThS. Lê Minh Trang (EIE Academic Director)',
        status: 'APPROVED'
      }
    ]
  }
];
