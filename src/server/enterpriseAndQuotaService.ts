import { EnterpriseBatch, EnterpriseRegistration, TestQuotaInfo } from '../types';

// Curated batches with genuine partner institutions across Vietnam
export let ENTERPRISE_BATCHES: EnterpriseBatch[] = [
  {
    id: 'batch-fpt-01',
    code: 'CV-BATCH-TECH-01',
    programName: 'Một ngày làm Kỹ sư AI & Phát triển Phần mềm',
    enterpriseName: 'FPT Software & FPT Telecom',
    careerCategory: 'Công nghệ thông tin',
    location: 'Hà Nội',
    address: 'F-Ville 2, Khu Công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội',
    scheduleDate: '2025-04-19',
    timeRange: '08:30 - 16:30',
    deadlineDate: '2025-04-12',
    targetGrade: 'Lớp 10 - 12',
    totalSlots: 35,
    registeredSlots: 18,
    ticketPriceVND: 0, // Sponsored
    inclusions: [
      'Xe đưa đón học sinh 2 chiều từ trung tâm Hà Nội đến Hòa Lạc',
      'Ăn trưa tiêu chuẩn tại căng-tin khu phức hợp F-Ville',
      'Trải nghiệm phòng Lab AI và trung tâm kiểm thử phần mềm',
      'Giao lưu trực tiếp với các Senior Solution Architect & HR Director',
      'Giấy chứng nhận tham gia trải nghiệm từ ban tổ chức CHẠM VIỆC & FPT'
    ],
    exclusions: [
      'Chi phí chi tiêu cá nhân ngoài chương trình'
    ],
    scheduleTimeline: [
      { time: '08:00', activity: 'Tập trung tại cổng ĐHQG Hà Nội (Xuân Thủy) & khởi hành' },
      { time: '09:00', activity: 'Check-in, tham quan kiến trúc xanh làng công nghệ F-Ville' },
      { time: '10:00', activity: 'Thực hành thử thách giải bài toán logic cùng kỹ sư mentor' },
      { time: '12:00', activity: 'Ăn trưa và giao lưu văn hóa sinh viên thực tập' },
      { time: '13:30', activity: 'Trải nghiệm phòng nghiên cứu Trí tuệ Nhân tạo Generative AI' },
      { time: '15:30', activity: 'Tọa đàm hướng nghiệp: Xu hướng ngành IT giai đoạn 2025-2030' },
      { time: '16:30', activity: 'Trao chứng nhận và xe đưa đoàn về điểm xuất phát' }
    ],
    cancellationPolicy: 'Học sinh được hủy và nhường suất trước 5 ngày diễn ra sự kiện.',
    status: 'DANG_MO',
    contactPerson: 'Chị Mai Lan - Ban Hướng nghiệp FPT',
    contactPhone: '024.7300.7300',
    contactEmail: 'trainghiem@chamviec.vn'
  },
  {
    id: 'batch-vinfast-01',
    code: 'CV-BATCH-ENG-02',
    programName: 'Tham quan Tổ hợp Nhà máy Sản xuất Ô tô Điện Thông minh',
    enterpriseName: 'VinFast Auto',
    careerCategory: 'Kỹ thuật - Chế tạo',
    location: 'Hải Phòng',
    address: 'Khu công nghiệp Đình Vũ - Cát Hải, Hải Phòng',
    scheduleDate: '2025-05-10',
    timeRange: '08:00 - 17:00',
    deadlineDate: '2025-05-01',
    targetGrade: 'Lớp 11 - 12',
    totalSlots: 30,
    registeredSlots: 12,
    ticketPriceVND: 150000,
    inclusions: [
      'Xe ô tô chất lượng cao đưa đón từ Hà Nội & Hải Phòng',
      'Mũ bảo hộ và thiết bị radio thuyết minh trong xưởng tự động hóa',
      'Bữa trưa dinh dưỡng tại nhà ăn cán bộ kỹ thuật',
      'Trực tiếp chứng kiến quy trình hàn khung xe bằng hàng trăm robot tự động ABB',
      'Bảo hiểm sự kiện toàn chuyến'
    ],
    exclusions: [
      'Chi tiêu cá nhân lưu niệm'
    ],
    scheduleTimeline: [
      { time: '08:00', activity: 'Đón học sinh và phổ biến an toàn công nghiệp' },
      { time: '09:30', activity: 'Xem phim tư liệu lịch sử chế tạo ô tô điện made-in-Vietnam' },
      { time: '10:15', activity: 'Tham quan xưởng dập thân vỏ và xưởng hàn robot tự động' },
      { time: '12:00', activity: 'Nghỉ ngơi và dùng bữa trưa' },
      { time: '13:30', activity: 'Tham quan xưởng lắp ráp pin xe điện và xưởng sơn tĩnh điện' },
      { time: '15:00', activity: 'Thảo luận với các kỹ sư cơ khí, cơ điện tử và tự động hóa' },
      { time: '16:30', activity: 'Tổng kết và khởi hành về' }
    ],
    cancellationPolicy: 'Hoàn 100% phí nếu báo trước 7 ngày; hoàn 50% nếu báo trước 3 ngày.',
    status: 'DANG_MO',
    contactPerson: 'Kỹ sư Vũ Minh Trí',
    contactPhone: '0988.123.456',
    contactEmail: 'tour-vinfast@chamviec.vn'
  },
  {
    id: 'batch-dalat-farm-01',
    code: 'CV-BATCH-AGRI-03',
    programName: 'Hành trình Kỹ sư Nông nghiệp Số: Nhà kính Công nghệ cao',
    enterpriseName: 'Dalat Hasfarm & Nông nghiệp Công nghệ cao Lâm Đồng',
    careerCategory: 'Nông nghiệp công nghệ cao',
    location: 'Lâm Đồng',
    address: 'Xã Đạ Ròn, Huyện Đơn Dương, Tỉnh Lâm Đồng',
    scheduleDate: '2025-05-17',
    timeRange: '08:30 - 16:00',
    deadlineDate: '2025-05-05',
    targetGrade: 'Lớp 10 - 12',
    totalSlots: 25,
    registeredSlots: 14,
    ticketPriceVND: 100000,
    inclusions: [
      'Xe đưa đón từ bến xe Đà Lạt đến trang trại công nghệ cao Đơn Dương',
      'Áo bảo hộ sinh học khi vào nhà kính cách ly sâu bệnh',
      'Trải nghiệm kiểm tra độ ẩm đất, nồng độ EC và điều khiển tưới nhỏ giọt Israel',
      'Bữa trưa rau củ quả hữu cơ tại nông trại',
      'Quà tặng chậu cây giống công nghệ cao mang về tự chăm sóc'
    ],
    exclusions: [
      'Phương tiện di chuyển đến tỉnh Lâm Đồng'
    ],
    scheduleTimeline: [
      { time: '08:30', activity: 'Đón đoàn và khử trùng giày trước khi vào khu ươm tạo' },
      { time: '09:00', activity: 'Tìm hiểu hệ thống làm mát bằng màng nước và quạt đối lưu' },
      { time: '10:30', activity: 'Thực hành đo chỉ số dinh dưỡng thủy canh và vi sinh học đất' },
      { time: '12:00', activity: 'Bữa trưa thực dưỡng cùng chuyên gia sinh học nông nghiệp' },
      { time: '13:30', activity: 'Workshop: Xuất khẩu nông sản Việt Nam sang thị trường Nhật & EU' },
      { time: '15:30', activity: 'Hỏi đáp cơ hội việc làm và các trường ĐH đào tạo ngành nông nghiệp' }
    ],
    cancellationPolicy: 'Học sinh được hủy trước 4 ngày.',
    status: 'DANG_MO',
    contactPerson: 'Chị Nguyễn Thu Thảo',
    contactPhone: '0263.3822.456',
    contactEmail: 'agri-tour@chamviec.vn'
  },
  {
    id: 'batch-vinmec-01',
    code: 'CV-BATCH-MED-04',
    programName: 'Một ngày trải nghiệm Y đức & Công nghệ Y tế Đương đại',
    enterpriseName: 'Bệnh viện Đa khoa Quốc tế Vinmec',
    careerCategory: 'Y tế & Sức khỏe',
    location: 'Hà Nội',
    address: '458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng, Hà Nội',
    scheduleDate: '2025-05-24',
    timeRange: '09:00 - 16:30',
    deadlineDate: '2025-05-12',
    targetGrade: 'Lớp 11 - 12',
    totalSlots: 20,
    registeredSlots: 20,
    ticketPriceVND: 200000,
    inclusions: [
      'Áo choàng thực hành và khẩu trang kháng khuẩn y tế',
      'Tham quan phòng chẩn đoán hình ảnh MRI 3.0 Tesla và CT Revolution 512 lát',
      'Thực hành sơ cấp cứu ép tim hồi sức tim phổi (CPR) trên mô hình y khoa',
      'Gặp gỡ các bác sĩ nội trú và dược sĩ bệnh viện',
      'Ăn trưa nhẹ tại phòng hội thảo viện'
    ],
    exclusions: [
      'Đi lại tự túc đến bệnh viện'
    ],
    scheduleTimeline: [
      { time: '09:00', activity: 'Check-in, phát áo blouse học viên và phổ biến quy chế vô trùng' },
      { time: '09:30', activity: 'Quan sát trung tâm cấp cứu 115 và quy trình phân loại bệnh nhi' },
      { time: '11:00', activity: 'Thực hành ép tim CPR và xử lý sơ cứu dị vật đường thở' },
      { time: '12:30', activity: 'Ăn trưa và giao lưu cùng bác sĩ ngoại khoa' },
      { time: '14:00', activity: 'Tham quan phòng xét nghiệm sinh hóa tự động hóa' },
      { time: '15:30', activity: 'Tọa đàm: Y đức và lộ trình đào tạo trường Y kéo dài 6-9 năm' }
    ],
    cancellationPolicy: 'Đã hết chỗ. Danh sách chờ nhận đăng ký dự phòng.',
    status: 'HET_CHO',
    contactPerson: 'Bác sĩ Trần Khánh Linh',
    contactPhone: '024.3974.3556',
    contactEmail: 'vinmec-med@chamviec.vn'
  }
];

export let ENTERPRISE_REGISTRATIONS: EnterpriseRegistration[] = [
  {
    registrationCode: 'CV-EXP-104928',
    batchId: 'batch-fpt-01',
    batchName: 'Một ngày làm Kỹ sư AI & Phát triển Phần mềm',
    enterpriseName: 'FPT Software',
    studentName: 'Nguyễn Văn Minh',
    schoolName: 'THPT Chu Văn An',
    grade: 'Lớp 11',
    studentEmail: 'minh.nguyen11@gmail.com',
    studentPhone: '0912345678',
    isInternationalStudent: false,
    guardianName: 'Nguyễn Văn Hùng',
    guardianPhone: '0903456789',
    specialRequests: 'Quan tâm hướng ngành Khoa học Máy tính',
    registeredAt: '2025-02-20T08:30:00Z',
    status: 'DA_XAC_NHAN',
    ticketPriceVND: 0,
  },
  {
    registrationCode: 'CV-EXP-772194',
    batchId: 'batch-vinfast-01',
    batchName: 'Tham quan Tổ hợp Nhà máy Sản xuất Ô tô Điện Thông minh',
    enterpriseName: 'VinFast Auto',
    studentName: 'Trần Bảo Ngọc',
    schoolName: 'THPT Chuyên Lê Hồng Phong',
    grade: 'Lớp 12',
    studentEmail: 'ngoc.tran@intl-student.org',
    studentPhone: '',
    isInternationalStudent: true,
    guardianName: 'Trần Hữu Long',
    guardianPhone: '+84918273645',
    specialRequests: 'Học sinh quốc tế, mong muốn được nghe thuyết minh song ngữ',
    registeredAt: '2025-02-22T10:15:00Z',
    status: 'DA_TIEP_NHAN',
    ticketPriceVND: 150000,
  }
];

// In-memory test quota tracker
interface UserQuotaRecord {
  email: string;
  totalAttempts: number;
  freeAttemptUsed: boolean;
  retakeCredits: number;
  history: Array<{
    attemptNumber: number;
    timestamp: string;
    riasecScores: Record<string, number>;
    idempotencyKey?: string;
  }>;
}

const USER_QUOTAS = new Map<string, UserQuotaRecord>();

export function getUserQuota(email: string): TestQuotaInfo {
  const cleanEmail = (email || 'guest@chamviec.vn').toLowerCase().trim();
  let user = USER_QUOTAS.get(cleanEmail);

  if (!user) {
    user = {
      email: cleanEmail,
      totalAttempts: 0,
      freeAttemptUsed: false,
      retakeCredits: 0,
      history: []
    };
    USER_QUOTAS.set(cleanEmail, user);
  }

  return {
    email: user.email,
    verified: true,
    totalAttempts: user.totalAttempts,
    freeAttemptUsed: user.freeAttemptUsed,
    retakeCredits: user.retakeCredits,
    feePerRetakeVND: 50000,
    paymentGatewayStatus: 'NOT_CONFIGURED',
    noticeMessage: 'Chính sách: Lần 1 miễn phí hoàn toàn. Từ lần 2 trở đi cần 1 tín chỉ khảo sát (50.000 VNĐ). Cổng thanh toán trực tuyến hiện đang tích hợp; học sinh có thể xem lại kết quả cũ hoặc liên hệ nhà trường để nhận mã miễn phí.'
  };
}

export function registerTestAttempt(params: {
  email: string;
  idempotencyKey: string;
  riasecScores: Record<string, number>;
}): {
  allowed: boolean;
  attemptNumber?: number;
  requiresCredit?: boolean;
  feeVND?: number;
  errorMessage?: string;
} {
  const cleanEmail = (params.email || 'guest@chamviec.vn').toLowerCase().trim();
  let user = USER_QUOTAS.get(cleanEmail);

  if (!user) {
    user = {
      email: cleanEmail,
      totalAttempts: 0,
      freeAttemptUsed: false,
      retakeCredits: 0,
      history: []
    };
    USER_QUOTAS.set(cleanEmail, user);
  }

  // Idempotency check: if attempt with same idempotencyKey already submitted, return past success without consuming quota
  const existing = user.history.find(h => h.idempotencyKey === params.idempotencyKey);
  if (existing) {
    return {
      allowed: true,
      attemptNumber: existing.attemptNumber
    };
  }

  // Check 1st attempt
  if (!user.freeAttemptUsed && user.totalAttempts === 0) {
    user.totalAttempts += 1;
    user.freeAttemptUsed = true;
    const rec = {
      attemptNumber: 1,
      timestamp: new Date().toISOString(),
      riasecScores: params.riasecScores,
      idempotencyKey: params.idempotencyKey
    };
    user.history.push(rec);
    return { allowed: true, attemptNumber: 1 };
  }

  // 2nd attempt onwards
  if (user.retakeCredits > 0) {
    user.retakeCredits -= 1;
    user.totalAttempts += 1;
    const rec = {
      attemptNumber: user.totalAttempts,
      timestamp: new Date().toISOString(),
      riasecScores: params.riasecScores,
      idempotencyKey: params.idempotencyKey
    };
    user.history.push(rec);
    return { allowed: true, attemptNumber: user.totalAttempts };
  }

  // No credit
  return {
    allowed: false,
    requiresCredit: true,
    feeVND: 50000,
    errorMessage: 'Bạn đã hoàn thành lượt khảo sát miễn phí đầu tiên. Từ lần làm thứ 2 trở đi cần 1 tín chỉ khảo sát (50.000 VNĐ). Cổng thanh toán trực tuyến hiện đang tích hợp, vui lòng liên hệ ban quản trị để nhận mã kích hoạt.'
  };
}

export function grantCredit(email: string, amount: number = 1): TestQuotaInfo {
  const info = getUserQuota(email);
  const user = USER_QUOTAS.get((email || '').toLowerCase().trim());
  if (user) {
    user.retakeCredits += amount;
  }
  return getUserQuota(email);
}
