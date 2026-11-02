import { RiasecCode } from '../types';

export interface RiasecQuestion {
  id: string;
  code: RiasecCode;
  groupLabel: string;
  groupLabelEn?: string;
  activityText: string;
  activityTextEn?: string;
  vietnameseContextTip: string;
  contextTipEn?: string;
}

export const RIASEC_INFO: Record<
  RiasecCode,
  { name: string; titleVi: string; description: string; descriptionEn: string; color: string; bgLight: string }
> = {
  R: {
    name: 'Realistic',
    titleVi: 'Thực hành & Kỹ thuật',
    description: 'Thích làm việc với đồ vật, máy móc, công cụ, cây cối, động vật hoặc các hoạt động thể chất ngoài trời.',
    descriptionEn: 'Enjoys working with physical objects, tools, machinery, plants, animals, and outdoor hands-on activities.',
    color: 'text-emerald-700',
    bgLight: 'bg-emerald-50 border-emerald-200'
  },
  I: {
    name: 'Investigative',
    titleVi: 'Nghiên cứu & Khám phá',
    description: 'Thích quan sát, học hỏi, tìm hiểu nguyên nhân, giải quyết bài toán phức tạp và tư duy logic.',
    descriptionEn: 'Enjoys observing, learning, analyzing underlying causes, solving complex puzzles, and applying logical reasoning.',
    color: 'text-blue-700',
    bgLight: 'bg-blue-50 border-blue-200'
  },
  A: {
    name: 'Artistic',
    titleVi: 'Nghệ thuật & Sáng tạo',
    description: 'Thích thể hiện bản thân qua hình ảnh, âm nhạc, viết lách, thiết kế, không gò bó trong quy tắc rập khuôn.',
    descriptionEn: 'Enjoys creative self-expression through visuals, music, writing, and design without rigid constraints.',
    color: 'text-purple-700',
    bgLight: 'bg-purple-50 border-purple-200'
  },
  S: {
    name: 'Social',
    titleVi: 'Xã hội & Hỗ trợ con người',
    description: 'Thích giúp đỡ, giảng giải, chăm sóc, lắng nghe và đồng hành cùng sự tiến bộ của người khác.',
    descriptionEn: 'Enjoys helping, mentoring, listening, caring, and supporting the personal growth and well-being of others.',
    color: 'text-amber-700',
    bgLight: 'bg-amber-50 border-amber-200'
  },
  E: {
    name: 'Enterprising',
    titleVi: 'Quản lý & Thuyết phục',
    description: 'Thích dẫn dắt đội nhóm, thuyết phục mọi người, đàm phán kinh doanh và đưa ra quyết định hành động.',
    descriptionEn: 'Enjoys leading teams, persuading stakeholders, negotiating, initiating ventures, and making strategic decisions.',
    color: 'text-orange-700',
    bgLight: 'bg-orange-50 border-orange-200'
  },
  C: {
    name: 'Conventional',
    titleVi: 'Quy trình & Tổ chức dữ liệu',
    description: 'Thích sự ngăn nắp, rõ ràng, làm việc với số liệu, quy trình chuẩn mực và lưu trữ hồ sơ cẩn thận.',
    descriptionEn: 'Enjoys systematic organization, structured processes, clear guidelines, quantitative data, and meticulous records.',
    color: 'text-teal-700',
    bgLight: 'bg-teal-50 border-teal-200'
  }
};

export const RIASEC_QUESTIONS: RiasecQuestion[] = [
  // Realistic (R)
  {
    id: 'r1',
    code: 'R',
    groupLabel: 'Thực hành & Kỹ thuật',
    groupLabelEn: 'Realistic & Technical',
    activityText: 'Tự tay tháo lắp, sửa chữa các vật dụng đơn giản trong gia đình hoặc xe đạp/quạt máy',
    activityTextEn: 'Disassembling, assembling, and repairing household appliances, bicycles, or electrical fans',
    vietnameseContextTip: 'Ví dụ: Thay bóng đèn, siết ốc xích xe đạp, gắn dây nối điện gia đình an toàn',
    contextTipEn: 'E.g., Replacing light bulbs, tightening bicycle chains, safely rewiring household plugs'
  },
  {
    id: 'r2',
    code: 'R',
    groupLabel: 'Thực hành & Kỹ thuật',
    groupLabelEn: 'Realistic & Technical',
    activityText: 'Tham gia trồng cây, chăm sóc hoa màu trong vườn hoặc vật nuôi quanh nhà',
    activityTextEn: 'Planting trees, caring for garden crops, or raising domestic animals and pets',
    vietnameseContextTip: 'Ví dụ: Theo dõi hạt nảy mầm, tỉa cành, trộn đất dinh dưỡng trong vườn trường',
    contextTipEn: 'E.g., Monitoring seed germination, pruning branches, mixing nutrient soil in school gardens'
  },
  {
    id: 'r3',
    code: 'R',
    groupLabel: 'Thực hành & Kỹ thuật',
    groupLabelEn: 'Realistic & Technical',
    activityText: 'Làm việc với các công cụ cơ khí, máy móc hoặc đo đạc ngoài trời',
    activityTextEn: 'Operating mechanical tools, machines, or conducting outdoor physical measurements',
    vietnameseContextTip: 'Ví dụ: Dùng thước cuộn đo đạc phòng học, thử nghiệm mô hình xe thế năng',
    contextTipEn: 'E.g., Using measuring tape to survey classroom layouts, testing model gravity cars'
  },
  {
    id: 'r4',
    code: 'R',
    groupLabel: 'Thực hành & Kỹ thuật',
    groupLabelEn: 'Realistic & Technical',
    activityText: 'Lắp ráp mô hình kỹ thuật, robot đồ chơi hoặc mạch điện tử mini',
    activityTextEn: 'Assembling technical models, hobby robotics, or mini electronic breadboard circuits',
    vietnameseContextTip: 'Ví dụ: Lắp ráp bộ mạch STEM, nối dây đèn LED nhấp nháy',
    contextTipEn: 'E.g., Building STEM circuit kits, connecting wires to make blinking LED displays'
  },

  // Investigative (I)
  {
    id: 'i1',
    code: 'I',
    groupLabel: 'Nghiên cứu & Khám phá',
    groupLabelEn: 'Investigative & Scientific',
    activityText: 'Tìm tòi giải thích nguyên nhân đằng sau một hiện tượng tự nhiên hoặc thí nghiệm khoa học',
    activityTextEn: 'Investigating and explaining scientific principles behind natural phenomena or experiments',
    vietnameseContextTip: 'Ví dụ: Vì sao lá đổi màu, tại sao phản ứng hóa học tạo kết tủa',
    contextTipEn: 'E.g., Why leaves change color in autumn, why chemical reactions form precipitates'
  },
  {
    id: 'i2',
    code: 'I',
    groupLabel: 'Nghiên cứu & Khám phá',
    groupLabelEn: 'Investigative & Scientific',
    activityText: 'Giải quyết các bài toán hóc búa, câu đố logic hoặc tìm kiếm lỗ hổng trong thuật toán',
    activityTextEn: 'Solving challenging math problems, logic puzzles, or debugging algorithms',
    vietnameseContextTip: 'Ví dụ: Giải đố Sudoku, bài toán hình học khó, tìm lỗi trong đoạn mã lập trình',
    contextTipEn: 'E.g., Solving Sudoku puzzles, proving geometry theorems, fixing bugs in code'
  },
  {
    id: 'i3',
    code: 'I',
    groupLabel: 'Nghiên cứu & Khám phá',
    groupLabelEn: 'Investigative & Scientific',
    activityText: 'Đọc kỹ tài liệu khoa học, bài viết phân tích số liệu hoặc tra cứu nguồn gốc thông tin',
    activityTextEn: 'Reading scientific papers, data analysis reports, or tracing factual origins of information',
    vietnameseContextTip: 'Ví dụ: Đọc các bài báo khoa học khám phá vũ trụ, phân tích biểu đồ dịch bệnh',
    contextTipEn: 'E.g., Reading articles on space exploration, analyzing charts on public health trends'
  },
  {
    id: 'i4',
    code: 'I',
    groupLabel: 'Nghiên cứu & Khám phá',
    groupLabelEn: 'Investigative & Scientific',
    activityText: 'Tự mình làm một dự án nghiên cứu nhỏ về một đề tài em thắc mắc',
    activityTextEn: 'Conducting an independent mini research project on a topic that sparks your curiosity',
    vietnameseContextTip: 'Ví dụ: Khảo sát thói quen dùng mạng xã hội của các bạn trong lớp',
    contextTipEn: 'E.g., Surveying classmate habits on social media screen time and studying the data'
  },

  // Artistic (A)
  {
    id: 'a1',
    code: 'A',
    groupLabel: 'Nghệ thuật & Sáng tạo',
    groupLabelEn: 'Artistic & Creative',
    activityText: 'Vẽ tranh, thiết kế poster, banner sự kiện hoặc chụp ảnh phong cảnh độc đáo',
    activityTextEn: 'Drawing, designing posters, digital graphics, or capturing creative landscape photography',
    vietnameseContextTip: 'Ví dụ: Thiết kế slide thuyết trình bằng Canva, vẽ bìa tập san của lớp',
    contextTipEn: 'E.g., Designing class presentation slides in Canva, illustrating the school newsletter cover'
  },
  {
    id: 'a2',
    code: 'A',
    groupLabel: 'Nghệ thuật & Sáng tạo',
    groupLabelEn: 'Artistic & Creative',
    activityText: 'Viết truyện ngắn, bài thơ, tản văn hoặc kịch bản diễn kịch',
    activityTextEn: 'Writing short stories, poetry, personal essays, or theatrical play scripts',
    vietnameseContextTip: 'Ví dụ: Soạn lời kịch bản cho tiểu phẩm văn nghệ ngày 20/11',
    contextTipEn: 'E.g., Scripting a short comedy drama for the annual Teachers Day performance'
  },
  {
    id: 'a3',
    code: 'A',
    groupLabel: 'Nghệ thuật & Sáng tạo',
    groupLabelEn: 'Artistic & Creative',
    activityText: 'Chơi nhạc cụ, hát, hòa âm hoặc quay dựng các video clip ngắn có phong cách riêng',
    activityTextEn: 'Playing musical instruments, singing, composing beats, or editing stylized video clips',
    vietnameseContextTip: 'Ví dụ: Cắt ghép video kỷ niệm lớp bằng CapCut, chọn nhạc nền phù hợp cảm xúc',
    contextTipEn: 'E.g., Editing graduation memory videos with CapCut, selecting emotive background tracks'
  },
  {
    id: 'a4',
    code: 'A',
    groupLabel: 'Nghệ thuật & Sáng tạo',
    groupLabelEn: 'Artistic & Creative',
    activityText: 'Thích suy nghĩ tự do, tìm giải pháp mới lạ không theo lối mòn quen thuộc',
    activityTextEn: 'Thinking freely outside the box to brainstorm non-traditional, novel solutions',
    vietnameseContextTip: 'Ví dụ: Đề xuất cách trang trí phòng học độc đáo trong dịp Tết',
    contextTipEn: 'E.g., Proposing innovative and aesthetic decorations for the classroom festival'
  },

  // Social (S)
  {
    id: 's1',
    code: 'S',
    groupLabel: 'Xã hội & Hỗ trợ',
    groupLabelEn: 'Social & Helping',
    activityText: 'Giảng giải lại bài học khó cho bạn bè cùng lớp hiểu rõ hơn',
    activityTextEn: 'Explaining challenging academic concepts to classmates until they clearly understand',
    vietnameseContextTip: 'Ví dụ: Ngồi lại chỉ bạn cách giải bài tập Toán hoặc cấu trúc Tiếng Anh',
    contextTipEn: 'E.g., Staying after class to tutor a friend in solving calculus exercises or English grammar'
  },
  {
    id: 's2',
    code: 'S',
    groupLabel: 'Xã hội & Hỗ trợ',
    groupLabelEn: 'Social & Helping',
    activityText: 'Lắng nghe tâm sự, động viên và chia sẻ với người đang gặp chuyện buồn',
    activityTextEn: 'Listening empathetically, comforting, and offering encouragement to friends facing distress',
    vietnameseContextTip: 'Ví dụ: Là người bạn đáng tin cậy để bạn bè tâm sự chuyện học tập, gia đình',
    contextTipEn: 'E.g., Being a trustworthy confidant when friends need advice regarding family or study pressure'
  },
  {
    id: 's3',
    code: 'S',
    groupLabel: 'Xã hội & Hỗ trợ',
    groupLabelEn: 'Social & Helping',
    activityText: 'Tham gia các hoạt động tình nguyện, giúp đỡ người già neo đơn hoặc trẻ em khó khăn',
    activityTextEn: 'Participating in community volunteering to assist vulnerable seniors or disadvantaged children',
    vietnameseContextTip: 'Ví dụ: Quyên góp sách vở, dạy kèm cho các em nhỏ ở điểm trường vùng cao',
    contextTipEn: 'E.g., Donating books and tutoring younger pupils at remote highland schools'
  },
  {
    id: 's4',
    code: 'S',
    groupLabel: 'Xã hội & Hỗ trợ',
    groupLabelEn: 'Social & Helping',
    activityText: 'Chăm sóc người ốm, sơ cứu vết thương hoặc quan tâm đến sức khỏe người xung quanh',
    activityTextEn: 'Administering basic first aid, caring for sick individuals, and promoting health & well-being',
    vietnameseContextTip: 'Ví dụ: Giúp bạn băng bó vết trầy xước trong giờ thể dục, pha nước ấm khi bạn sốt',
    contextTipEn: 'E.g., Bandaging a classmate’s scrape during PE class, bringing warm tea when someone is ill'
  },

  // Enterprising (E)
  {
    id: 'e1',
    code: 'E',
    groupLabel: 'Quản lý & Thuyết phục',
    groupLabelEn: 'Enterprising & Leadership',
    activityText: 'Xung phong nhận vai trò nhóm trưởng, điều phối phân công công việc cho các thành viên',
    activityTextEn: 'Stepping up as team leader to coordinate project milestones and delegate tasks effectively',
    vietnameseContextTip: 'Ví dụ: Lập kế hoạch phân công bài tập lớn, đốc thúc các bạn nộp bài đúng hạn',
    contextTipEn: 'E.g., Creating action plans for group assignments, keeping teammates on track for deadlines'
  },
  {
    id: 'e2',
    code: 'E',
    groupLabel: 'Quản lý & Thuyết phục',
    groupLabelEn: 'Enterprising & Leadership',
    activityText: 'Thuyết phục người khác ủng hộ một ý kiến hoặc giải pháp mà em tin là đúng',
    activityTextEn: 'Persuading others to endorse an initiative, viewpoint, or strategy that you champion',
    vietnameseContextTip: 'Ví dụ: Đại diện nhóm tranh luận trong buổi thảo luận trên lớp',
    contextTipEn: 'E.g., Leading team rebuttals during competitive in-class debates'
  },
  {
    id: 'e3',
    code: 'E',
    groupLabel: 'Quản lý & Thuyết phục',
    groupLabelEn: 'Enterprising & Leadership',
    activityText: 'Thử kinh doanh một món đồ nhỏ, gây quỹ hội chợ hoặc tìm kiếm tài trợ cho câu lạc bộ',
    activityTextEn: 'Organizing mini fundraising sales, managing club budgets, or seeking sponsorships',
    vietnameseContextTip: 'Ví dụ: Bán thiệp hoa handmade gây quỹ từ thiện tại hội trại xuân trường',
    contextTipEn: 'E.g., Selling handmade cards at the spring festival to raise charity funds for club operations'
  },
  {
    id: 'e4',
    code: 'E',
    groupLabel: 'Quản lý & Thuyết phục',
    groupLabelEn: 'Enterprising & Leadership',
    activityText: 'Dám đứng ra đưa ra quyết định khi cả nhóm đang lưỡng lự chưa biết chọn phương án nào',
    activityTextEn: 'Making decisive choices confidently when the entire group is hesitating at a crossroads',
    vietnameseContextTip: 'Ví dụ: Chốt phương án trang phục biểu diễn khi thời gian gấp gáp',
    contextTipEn: 'E.g., Finalizing stage costume designs under tight deadlines to prevent delays'
  },

  // Conventional (C)
  {
    id: 'c1',
    code: 'C',
    groupLabel: 'Quy trình & Tổ chức',
    groupLabelEn: 'Conventional & Systematic',
    activityText: 'Sắp xếp tập sách, tài liệu học tập hoặc các tệp tin trên máy tính một cách ngăn nắp',
    activityTextEn: 'Organizing notes, study archives, and computer folders systematically with clear nomenclature',
    vietnameseContextTip: 'Ví dụ: Tạo các thư mục môn học rõ ràng, ghi chú hạn nộp bài trong sổ tay',
    contextTipEn: 'E.g., Structuring cloud drive folders by subject code, tracking deadlines in a bullet journal'
  },
  {
    id: 'c2',
    code: 'C',
    groupLabel: 'Quy trình & Tổ chức',
    groupLabelEn: 'Conventional & Systematic',
    activityText: 'Kiểm tra kỹ lưỡng các số liệu thu chi, bảng điểm hoặc danh sách thành viên không để sai sót',
    activityTextEn: 'Carefully auditing expense receipts, rosters, score sheets, and schedules to eliminate errors',
    vietnameseContextTip: 'Ví dụ: Làm thủ quỹ của lớp, ghi chép tiền quỹ lớp minh bạch từng đồng',
    contextTipEn: 'E.g., Managing the class treasury, balancing income and receipts down to every single penny'
  },
  {
    id: 'c3',
    code: 'C',
    groupLabel: 'Quy trình & Tổ chức',
    groupLabelEn: 'Conventional & Systematic',
    activityText: 'Làm việc theo đúng quy trình từng bước đã được hướng dẫn rõ ràng từ trước',
    activityTextEn: 'Following step-by-step standard operating procedures with accuracy and diligence',
    vietnameseContextTip: 'Ví dụ: Tuân thủ nghiêm ngặt các bước an toàn trong phòng thực hành hóa học',
    contextTipEn: 'E.g., Strictly adhering to lab safety protocols and chemical experiment workflows'
  },
  {
    id: 'c4',
    code: 'C',
    groupLabel: 'Quy trình & Tổ chức',
    groupLabelEn: 'Conventional & Systematic',
    activityText: 'Thích môi trường làm việc có kỷ luật rõ ràng, có hướng dẫn chi tiết và ít bị xáo trộn bất ngờ',
    activityTextEn: 'Preferring a structured environment with predictable timetables and unambiguous guidelines',
    vietnameseContextTip: 'Ví dụ: Thích thời khóa biểu cố định, công việc có kế hoạch trước nhiều tuần',
    contextTipEn: 'E.g., Thriving with established schedules where tasks are outlined weeks in advance'
  }
];

export const CAREER_VALUES_LIST = [
  { 
    id: 'sang-tao', 
    name: 'Sáng tạo & Đổi mới', 
    nameEn: 'Creativity & Innovation',
    description: 'Được tự do thử nghiệm ý tưởng mới, không lặp lại khuôn mẫu.',
    descriptionEn: 'Freedom to experiment with fresh ideas without repetitive constraints.'
  },
  { 
    id: 'on-dinh', 
    name: 'Ổn định & An toàn', 
    nameEn: 'Stability & Security',
    description: 'Công việc ít rủi ro biến động, có lộ trình rõ ràng và môi trường chuẩn mực.',
    descriptionEn: 'Low volatility, clear promotion roadmap, and established work environment.'
  },
  { 
    id: 'thu-nhap', 
    name: 'Thu nhập & Tài chính tốt', 
    nameEn: 'High Compensation & Growth',
    description: 'Cơ hội đạt mức thu nhập cao tương xứng với nỗ lực và thời gian bỏ ra.',
    descriptionEn: 'High earning potential reflecting effort and professional excellence.'
  },
  { 
    id: 'cong-dong', 
    name: 'Phục vụ cộng đồng', 
    nameEn: 'Community & Social Impact',
    description: 'Mang lại giá trị thiết thực trực tiếp cho đời sống người khác và xã hội.',
    descriptionEn: 'Delivering tangible, positive benefits to others and broader society.'
  },
  { 
    id: 'tu-chu', 
    name: 'Tự chủ & Linh hoạt', 
    nameEn: 'Autonomy & Flexibility',
    description: 'Chủ động về thời gian, địa điểm hoặc phương pháp làm việc cá nhân.',
    descriptionEn: 'Control over schedule, working location, and task execution methods.'
  },
  { 
    id: 'hoc-hoi', 
    name: 'Học hỏi & Phát triển', 
    nameEn: 'Continuous Learning',
    description: 'Liên tục được nâng cao năng lực chuyên môn và mở rộng tầm nhìn.',
    descriptionEn: 'Constantly upgrading professional skills and broadening horizons.'
  }
];
