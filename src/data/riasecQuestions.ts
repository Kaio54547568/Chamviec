import { RiasecCode } from '../types';

export interface RiasecQuestion {
  id: string;
  code: RiasecCode;
  groupLabel: {
    vi: string;
    en: string;
  };
  text: {
    vi: string;
    en: string;
  };
  hint: {
    vi: string;
    en: string;
  };
  // Backward compatibility properties for any consumers still reading flat strings
  activityText: string;
  activityTextEn: string;
  vietnameseContextTip: string;
  contextTipEn: string;
}

export const RIASEC_INFO: Record<
  RiasecCode,
  {
    name: string;
    title: {
      vi: string;
      en: string;
    };
    description: {
      vi: string;
      en: string;
    };
    color: string;
    bgLight: string;
    titleVi: string;
    titleEn: string;
    descriptionEn: string;
  }
> = {
  R: {
    name: 'Realistic',
    title: {
      vi: 'Thực hành & Kỹ thuật',
      en: 'Realistic: Practical & Technical'
    },
    titleVi: 'Thực hành & Kỹ thuật',
    titleEn: 'Realistic: Practical & Technical',
    description: {
      vi: 'Thích làm việc với đồ vật, máy móc, công cụ, cây cối, động vật hoặc các hoạt động thể chất ngoài trời.',
      en: 'Enjoys working with physical objects, tools, machinery, plants, animals, and outdoor hands-on activities.'
    },
    descriptionEn: 'Enjoys working with physical objects, tools, machinery, plants, animals, and outdoor hands-on activities.',
    color: 'text-emerald-700',
    bgLight: 'bg-emerald-50 border-emerald-200'
  },
  I: {
    name: 'Investigative',
    title: {
      vi: 'Nghiên cứu & Khám phá',
      en: 'Investigative: Scientific & Analytical'
    },
    titleVi: 'Nghiên cứu & Khám phá',
    titleEn: 'Investigative: Scientific & Analytical',
    description: {
      vi: 'Thích quan sát, học hỏi, tìm hiểu nguyên nhân, giải quyết bài toán phức tạp và tư duy logic.',
      en: 'Enjoys observing, learning, analyzing underlying causes, solving complex puzzles, and applying logical reasoning.'
    },
    descriptionEn: 'Enjoys observing, learning, analyzing underlying causes, solving complex puzzles, and applying logical reasoning.',
    color: 'text-blue-700',
    bgLight: 'bg-blue-50 border-blue-200'
  },
  A: {
    name: 'Artistic',
    title: {
      vi: 'Nghệ thuật & Sáng tạo',
      en: 'Artistic: Creative & Expressive'
    },
    titleVi: 'Nghệ thuật & Sáng tạo',
    titleEn: 'Artistic: Creative & Expressive',
    description: {
      vi: 'Thích thể hiện bản thân qua hình ảnh, âm nhạc, viết lách, thiết kế, không gò bó trong quy tắc rập khuôn.',
      en: 'Enjoys creative self-expression through visuals, music, writing, and design without rigid constraints.'
    },
    descriptionEn: 'Enjoys creative self-expression through visuals, music, writing, and design without rigid constraints.',
    color: 'text-purple-700',
    bgLight: 'bg-purple-50 border-purple-200'
  },
  S: {
    name: 'Social',
    title: {
      vi: 'Xã hội & Hỗ trợ con người',
      en: 'Social: Helping & Educational'
    },
    titleVi: 'Xã hội & Hỗ trợ con người',
    titleEn: 'Social: Helping & Educational',
    description: {
      vi: 'Thích giúp đỡ, giảng giải, chăm sóc, lắng nghe và đồng hành cùng sự tiến bộ của người khác.',
      en: 'Enjoys helping, mentoring, listening, caring, and supporting the personal growth and well-being of others.'
    },
    descriptionEn: 'Enjoys helping, mentoring, listening, caring, and supporting the personal growth and well-being of others.',
    color: 'text-amber-700',
    bgLight: 'bg-amber-50 border-amber-200'
  },
  E: {
    name: 'Enterprising',
    title: {
      vi: 'Quản lý & Thuyết phục',
      en: 'Enterprising: Leadership & Persuasion'
    },
    titleVi: 'Quản lý & Thuyết phục',
    titleEn: 'Enterprising: Leadership & Persuasion',
    description: {
      vi: 'Thích dẫn dắt đội nhóm, thuyết phục mọi người, đàm phán kinh doanh và đưa ra quyết định hành động.',
      en: 'Enjoys leading teams, persuading stakeholders, negotiating, initiating ventures, and making strategic decisions.'
    },
    descriptionEn: 'Enjoys leading teams, persuading stakeholders, negotiating, initiating ventures, and making strategic decisions.',
    color: 'text-orange-700',
    bgLight: 'bg-orange-50 border-orange-200'
  },
  C: {
    name: 'Conventional',
    title: {
      vi: 'Quy trình & Tổ chức dữ liệu',
      en: 'Conventional: Systematic & Detail-Oriented'
    },
    titleVi: 'Quy trình & Tổ chức dữ liệu',
    titleEn: 'Conventional: Systematic & Detail-Oriented',
    description: {
      vi: 'Thích sự ngăn nắp, rõ ràng, làm việc với số liệu, quy trình chuẩn mực và lưu trữ hồ sơ cẩn thận.',
      en: 'Enjoys systematic organization, structured processes, clear guidelines, quantitative data, and meticulous records.'
    },
    descriptionEn: 'Enjoys systematic organization, structured processes, clear guidelines, quantitative data, and meticulous records.',
    color: 'text-teal-700',
    bgLight: 'bg-teal-50 border-teal-200'
  }
};

export const RIASEC_QUESTIONS: RiasecQuestion[] = [
  // Realistic (R) - 4 standardized items
  {
    id: 'r1',
    code: 'R',
    groupLabel: {
      vi: 'Thực hành & Kỹ thuật',
      en: 'Realistic: Practical & Technical'
    },
    text: {
      vi: 'Tự tay tháo lắp, sửa chữa các vật dụng đơn giản trong gia đình hoặc xe đạp/quạt máy',
      en: 'Take apart, reassemble, or repair simple household items, bicycles, or electric fans.'
    },
    hint: {
      vi: 'Ví dụ: Thay bóng đèn, siết ốc xích xe đạp, gắn dây nối điện gia đình an toàn.',
      en: 'Examples: Replace a light bulb, tighten bicycle chain bolts, or safely connect a household extension lead.'
    },
    activityText: 'Tự tay tháo lắp, sửa chữa các vật dụng đơn giản trong gia đình hoặc xe đạp/quạt máy',
    activityTextEn: 'Take apart, reassemble, or repair simple household items, bicycles, or electric fans.',
    vietnameseContextTip: 'Ví dụ: Thay bóng đèn, siết ốc xích xe đạp, gắn dây nối điện gia đình an toàn.',
    contextTipEn: 'Examples: Replace a light bulb, tighten bicycle chain bolts, or safely connect a household extension lead.'
  },
  {
    id: 'r2',
    code: 'R',
    groupLabel: {
      vi: 'Thực hành & Kỹ thuật',
      en: 'Realistic: Practical & Technical'
    },
    text: {
      vi: 'Tham gia trồng cây, chăm sóc hoa màu trong vườn hoặc vật nuôi quanh nhà',
      en: 'Planting trees, caring for crops in the garden, or raising domestic animals and pets.'
    },
    hint: {
      vi: 'Ví dụ: Theo dõi hạt nảy mầm, tỉa cành, trộn đất dinh dưỡng trong vườn trường.',
      en: 'Examples: Monitoring seed germination, pruning branches, mixing nutrient soil in school gardens.'
    },
    activityText: 'Tham gia trồng cây, chăm sóc hoa màu trong vườn hoặc vật nuôi quanh nhà',
    activityTextEn: 'Planting trees, caring for crops in the garden, or raising domestic animals and pets.',
    vietnameseContextTip: 'Ví dụ: Theo dõi hạt nảy mầm, tỉa cành, trộn đất dinh dưỡng trong vườn trường.',
    contextTipEn: 'Examples: Monitoring seed germination, pruning branches, mixing nutrient soil in school gardens.'
  },
  {
    id: 'r3',
    code: 'R',
    groupLabel: {
      vi: 'Thực hành & Kỹ thuật',
      en: 'Realistic: Practical & Technical'
    },
    text: {
      vi: 'Làm việc với các công cụ cơ khí, máy móc hoặc đo đạc ngoài trời',
      en: 'Working with mechanical tools, machinery, or conducting outdoor physical measurements.'
    },
    hint: {
      vi: 'Ví dụ: Dùng thước cuộn đo đạc phòng học, thử nghiệm mô hình xe thế năng.',
      en: 'Examples: Using a tape measure to survey room layouts, testing gravity-powered model cars.'
    },
    activityText: 'Làm việc với các công cụ cơ khí, máy móc hoặc đo đạc ngoài trời',
    activityTextEn: 'Working with mechanical tools, machinery, or conducting outdoor physical measurements.',
    vietnameseContextTip: 'Ví dụ: Dùng thước cuộn đo đạc phòng học, thử nghiệm mô hình xe thế năng.',
    contextTipEn: 'Examples: Using a tape measure to survey room layouts, testing gravity-powered model cars.'
  },
  {
    id: 'r4',
    code: 'R',
    groupLabel: {
      vi: 'Thực hành & Kỹ thuật',
      en: 'Realistic: Practical & Technical'
    },
    text: {
      vi: 'Lắp ráp mô hình kỹ thuật, robot đồ chơi hoặc mạch điện tử mini',
      en: 'Assembling technical models, hobby robotics, or mini electronic circuit boards.'
    },
    hint: {
      vi: 'Ví dụ: Lắp ráp bộ mạch STEM, nối dây đèn LED nhấp nháy.',
      en: 'Examples: Building STEM circuit kits, wiring flashing LED displays.'
    },
    activityText: 'Lắp ráp mô hình kỹ thuật, robot đồ chơi hoặc mạch điện tử mini',
    activityTextEn: 'Assembling technical models, hobby robotics, or mini electronic circuit boards.',
    vietnameseContextTip: 'Ví dụ: Lắp ráp bộ mạch STEM, nối dây đèn LED nhấp nháy.',
    contextTipEn: 'Examples: Building STEM circuit kits, wiring flashing LED displays.'
  },

  // Investigative (I) - 4 standardized items
  {
    id: 'i1',
    code: 'I',
    groupLabel: {
      vi: 'Nghiên cứu & Khám phá',
      en: 'Investigative: Scientific & Analytical'
    },
    text: {
      vi: 'Tìm tòi giải thích nguyên nhân đằng sau một hiện tượng tự nhiên hoặc thí nghiệm khoa học',
      en: 'Investigating and explaining scientific principles behind natural phenomena or experiments.'
    },
    hint: {
      vi: 'Ví dụ: Vì sao lá đổi màu, tại sao phản ứng hóa học tạo kết tủa.',
      en: 'Examples: Why leaves change color in autumn, why chemical reactions form precipitates.'
    },
    activityText: 'Tìm tòi giải thích nguyên nhân đằng sau một hiện tượng tự nhiên hoặc thí nghiệm khoa học',
    activityTextEn: 'Investigating and explaining scientific principles behind natural phenomena or experiments.',
    vietnameseContextTip: 'Ví dụ: Vì sao lá đổi màu, tại sao phản ứng hóa học tạo kết tủa.',
    contextTipEn: 'Examples: Why leaves change color in autumn, why chemical reactions form precipitates.'
  },
  {
    id: 'i2',
    code: 'I',
    groupLabel: {
      vi: 'Nghiên cứu & Khám phá',
      en: 'Investigative: Scientific & Analytical'
    },
    text: {
      vi: 'Giải quyết các bài toán hóc búa, câu đố logic hoặc tìm kiếm lỗ hổng trong thuật toán',
      en: 'Solving challenging math problems, logic puzzles, or finding bugs in algorithms.'
    },
    hint: {
      vi: 'Ví dụ: Giải đố Sudoku, bài toán hình học khó, tìm lỗi trong đoạn mã lập trình.',
      en: 'Examples: Solving Sudoku puzzles, proving geometry theorems, fixing bugs in code.'
    },
    activityText: 'Giải quyết các bài toán hóc búa, câu đố logic hoặc tìm kiếm lỗ hổng trong thuật toán',
    activityTextEn: 'Solving challenging math problems, logic puzzles, or finding bugs in algorithms.',
    vietnameseContextTip: 'Ví dụ: Giải đố Sudoku, bài toán hình học khó, tìm lỗi trong đoạn mã lập trình.',
    contextTipEn: 'Examples: Solving Sudoku puzzles, proving geometry theorems, fixing bugs in code.'
  },
  {
    id: 'i3',
    code: 'I',
    groupLabel: {
      vi: 'Nghiên cứu & Khám phá',
      en: 'Investigative: Scientific & Analytical'
    },
    text: {
      vi: 'Đọc kỹ tài liệu khoa học, bài viết phân tích số liệu hoặc tra cứu nguồn gốc thông tin',
      en: 'Reading scientific papers, data analysis reports, or tracing factual origins of information.'
    },
    hint: {
      vi: 'Ví dụ: Đọc các bài báo khoa học khám phá vũ trụ, phân tích biểu đồ dịch bệnh.',
      en: 'Examples: Reading articles on space exploration, analyzing charts on public health trends.'
    },
    activityText: 'Đọc kỹ tài liệu khoa học, bài viết phân tích số liệu hoặc tra cứu nguồn gốc thông tin',
    activityTextEn: 'Reading scientific papers, data analysis reports, or tracing factual origins of information.',
    vietnameseContextTip: 'Ví dụ: Đọc các bài báo khoa học khám phá vũ trụ, phân tích biểu đồ dịch bệnh.',
    contextTipEn: 'Examples: Reading articles on space exploration, analyzing charts on public health trends.'
  },
  {
    id: 'i4',
    code: 'I',
    groupLabel: {
      vi: 'Nghiên cứu & Khám phá',
      en: 'Investigative: Scientific & Analytical'
    },
    text: {
      vi: 'Tự mình làm một dự án nghiên cứu nhỏ về một đề tài em thắc mắc',
      en: 'Conducting an independent mini-research project on a topic that sparks your curiosity.'
    },
    hint: {
      vi: 'Ví dụ: Khảo sát thói quen dùng mạng xã hội của các bạn trong lớp.',
      en: 'Examples: Surveying classmate habits on social media screen time and studying the data.'
    },
    activityText: 'Tự mình làm một dự án nghiên cứu nhỏ về một đề tài em thắc mắc',
    activityTextEn: 'Conducting an independent mini-research project on a topic that sparks your curiosity.',
    vietnameseContextTip: 'Ví dụ: Khảo sát thói quen dùng mạng xã hội của các bạn trong lớp.',
    contextTipEn: 'Examples: Surveying classmate habits on social media screen time and studying the data.'
  },

  // Artistic (A) - 4 standardized items
  {
    id: 'a1',
    code: 'A',
    groupLabel: {
      vi: 'Nghệ thuật & Sáng tạo',
      en: 'Artistic: Creative & Expressive'
    },
    text: {
      vi: 'Vẽ tranh, thiết kế poster, banner sự kiện hoặc chụp ảnh phong cảnh độc đáo',
      en: 'Drawing, designing event posters and digital banners, or capturing creative photography.'
    },
    hint: {
      vi: 'Ví dụ: Thiết kế slide thuyết trình bằng Canva, vẽ bìa tập san của lớp.',
      en: 'Examples: Designing presentation slides in Canva, illustrating the school newsletter cover.'
    },
    activityText: 'Vẽ tranh, thiết kế poster, banner sự kiện hoặc chụp ảnh phong cảnh độc đáo',
    activityTextEn: 'Drawing, designing event posters and digital banners, or capturing creative photography.',
    vietnameseContextTip: 'Ví dụ: Thiết kế slide thuyết trình bằng Canva, vẽ bìa tập san của lớp.',
    contextTipEn: 'Examples: Designing presentation slides in Canva, illustrating the school newsletter cover.'
  },
  {
    id: 'a2',
    code: 'A',
    groupLabel: {
      vi: 'Nghệ thuật & Sáng tạo',
      en: 'Artistic: Creative & Expressive'
    },
    text: {
      vi: 'Viết truyện ngắn, bài thơ, tản văn hoặc kịch bản diễn kịch',
      en: 'Writing short stories, poetry, essays, or theatrical play scripts.'
    },
    hint: {
      vi: 'Ví dụ: Soạn lời kịch bản cho tiểu phẩm văn nghệ ngày 20/11.',
      en: 'Examples: Scripting a short comedy drama for the annual Teachers Day performance.'
    },
    activityText: 'Viết truyện ngắn, bài thơ, tản văn hoặc kịch bản diễn kịch',
    activityTextEn: 'Writing short stories, poetry, essays, or theatrical play scripts.',
    vietnameseContextTip: 'Ví dụ: Soạn lời kịch bản cho tiểu phẩm văn nghệ ngày 20/11.',
    contextTipEn: 'Examples: Scripting a short comedy drama for the annual Teachers Day performance.'
  },
  {
    id: 'a3',
    code: 'A',
    groupLabel: {
      vi: 'Nghệ thuật & Sáng tạo',
      en: 'Artistic: Creative & Expressive'
    },
    text: {
      vi: 'Chơi nhạc cụ, hát, hòa âm hoặc quay dựng các video clip ngắn có phong cách riêng',
      en: 'Playing musical instruments, singing, beat-making, or editing stylized video clips.'
    },
    hint: {
      vi: 'Ví dụ: Cắt ghép video kỷ niệm lớp bằng CapCut, chọn nhạc nền phù hợp cảm xúc.',
      en: 'Examples: Editing graduation memory videos with CapCut, choosing emotive soundtrack tracks.'
    },
    activityText: 'Chơi nhạc cụ, hát, hòa âm hoặc quay dựng các video clip ngắn có phong cách riêng',
    activityTextEn: 'Playing musical instruments, singing, beat-making, or editing stylized video clips.',
    vietnameseContextTip: 'Ví dụ: Cắt ghép video kỷ niệm lớp bằng CapCut, chọn nhạc nền phù hợp cảm xúc.',
    contextTipEn: 'Examples: Editing graduation memory videos with CapCut, choosing emotive soundtrack tracks.'
  },
  {
    id: 'a4',
    code: 'A',
    groupLabel: {
      vi: 'Nghệ thuật & Sáng tạo',
      en: 'Artistic: Creative & Expressive'
    },
    text: {
      vi: 'Thích suy nghĩ tự do, tìm giải pháp mới lạ không theo lối mòn quen thuộc',
      en: 'Thinking freely outside the box to brainstorm novel, non-traditional solutions.'
    },
    hint: {
      vi: 'Ví dụ: Đề xuất cách trang trí phòng học độc đáo trong dịp Tết.',
      en: 'Examples: Proposing aesthetic, innovative classroom decorations for the spring festival.'
    },
    activityText: 'Thích suy nghĩ tự do, tìm giải pháp mới lạ không theo lối mòn quen thuộc',
    activityTextEn: 'Thinking freely outside the box to brainstorm novel, non-traditional solutions.',
    vietnameseContextTip: 'Ví dụ: Đề xuất cách trang trí phòng học độc đáo trong dịp Tết.',
    contextTipEn: 'Examples: Proposing aesthetic, innovative classroom decorations for the spring festival.'
  },

  // Social (S) - 4 standardized items
  {
    id: 's1',
    code: 'S',
    groupLabel: {
      vi: 'Xã hội & Hỗ trợ con người',
      en: 'Social: Helping & Educational'
    },
    text: {
      vi: 'Giảng giải lại bài học khó cho bạn bè cùng lớp hiểu rõ hơn',
      en: 'Explaining challenging academic concepts to classmates until they clearly understand.'
    },
    hint: {
      vi: 'Ví dụ: Ngồi lại chỉ bạn cách giải bài tập Toán hoặc cấu trúc Tiếng Anh.',
      en: 'Examples: Staying after class to tutor a friend in calculus exercises or English grammar.'
    },
    activityText: 'Giảng giải lại bài học khó cho bạn bè cùng lớp hiểu rõ hơn',
    activityTextEn: 'Explaining challenging academic concepts to classmates until they clearly understand.',
    vietnameseContextTip: 'Ví dụ: Ngồi lại chỉ bạn cách giải bài tập Toán hoặc cấu trúc Tiếng Anh.',
    contextTipEn: 'Examples: Staying after class to tutor a friend in calculus exercises or English grammar.'
  },
  {
    id: 's2',
    code: 'S',
    groupLabel: {
      vi: 'Xã hội & Hỗ trợ con người',
      en: 'Social: Helping & Educational'
    },
    text: {
      vi: 'Lắng nghe tâm sự, động viên và chia sẻ với người đang gặp chuyện buồn',
      en: 'Listening empathetically, comforting, and offering encouragement to friends in distress.'
    },
    hint: {
      vi: 'Ví dụ: Là người bạn đáng tin cậy để bạn bè tâm sự chuyện học tập, gia đình.',
      en: 'Examples: Being a trustworthy confidant when friends need advice regarding family or study pressure.'
    },
    activityText: 'Lắng nghe tâm sự, động viên và chia sẻ với người đang gặp chuyện buồn',
    activityTextEn: 'Listening empathetically, comforting, and offering encouragement to friends in distress.',
    vietnameseContextTip: 'Ví dụ: Là người bạn đáng tin cậy để bạn bè tâm sự chuyện học tập, gia đình.',
    contextTipEn: 'Examples: Being a trustworthy confidant when friends need advice regarding family or study pressure.'
  },
  {
    id: 's3',
    code: 'S',
    groupLabel: {
      vi: 'Xã hội & Hỗ trợ con người',
      en: 'Social: Helping & Educational'
    },
    text: {
      vi: 'Tham gia các hoạt động tình nguyện, giúp đỡ người già neo đơn hoặc trẻ em khó khăn',
      en: 'Participating in community volunteering to assist vulnerable seniors or disadvantaged children.'
    },
    hint: {
      vi: 'Ví dụ: Quyên góp sách vở, dạy kèm cho các em nhỏ ở điểm trường vùng cao.',
      en: 'Examples: Donating books and tutoring younger pupils at remote highland schools.'
    },
    activityText: 'Tham gia các hoạt động tình nguyện, giúp đỡ người già neo đơn hoặc trẻ em khó khăn',
    activityTextEn: 'Participating in community volunteering to assist vulnerable seniors or disadvantaged children.',
    vietnameseContextTip: 'Ví dụ: Quyên góp sách vở, dạy kèm cho các em nhỏ ở điểm trường vùng cao.',
    contextTipEn: 'Examples: Donating books and tutoring younger pupils at remote highland schools.'
  },
  {
    id: 's4',
    code: 'S',
    groupLabel: {
      vi: 'Xã hội & Hỗ trợ con người',
      en: 'Social: Helping & Educational'
    },
    text: {
      vi: 'Chăm sóc người ốm, sơ cứu vết thương hoặc quan tâm đến sức khỏe người xung quanh',
      en: 'Administering basic first aid, caring for sick individuals, and promoting health & well-being.'
    },
    hint: {
      vi: 'Ví dụ: Giúp bạn băng bó vết trầy xước trong giờ thể dục, pha nước ấm khi bạn sốt.',
      en: 'Examples: Bandaging a classmate’s scrape during PE class, bringing warm tea when someone is ill.'
    },
    activityText: 'Chăm sóc người ốm, sơ cứu vết thương hoặc quan tâm đến sức khỏe người xung quanh',
    activityTextEn: 'Administering basic first aid, caring for sick individuals, and promoting health & well-being.',
    vietnameseContextTip: 'Ví dụ: Giúp bạn băng bó vết trầy xước trong giờ thể dục, pha nước ấm khi bạn sốt.',
    contextTipEn: 'Examples: Bandaging a classmate’s scrape during PE class, bringing warm tea when someone is ill.'
  },

  // Enterprising (E) - 4 standardized items
  {
    id: 'e1',
    code: 'E',
    groupLabel: {
      vi: 'Quản lý & Thuyết phục',
      en: 'Enterprising: Leadership & Persuasion'
    },
    text: {
      vi: 'Xung phong nhận vai trò nhóm trưởng, điều phối phân công công việc cho các thành viên',
      en: 'Stepping up as team leader to coordinate project milestones and delegate tasks effectively.'
    },
    hint: {
      vi: 'Ví dụ: Lập kế hoạch phân công bài tập lớn, đốc thúc các bạn nộp bài đúng hạn.',
      en: 'Examples: Creating action plans for group assignments, keeping teammates on track for deadlines.'
    },
    activityText: 'Xung phong nhận vai trò nhóm trưởng, điều phối phân công công việc cho các thành viên',
    activityTextEn: 'Stepping up as team leader to coordinate project milestones and delegate tasks effectively.',
    vietnameseContextTip: 'Ví dụ: Lập kế hoạch phân công bài tập lớn, đốc thúc các bạn nộp bài đúng hạn.',
    contextTipEn: 'Examples: Creating action plans for group assignments, keeping teammates on track for deadlines.'
  },
  {
    id: 'e2',
    code: 'E',
    groupLabel: {
      vi: 'Quản lý & Thuyết phục',
      en: 'Enterprising: Leadership & Persuasion'
    },
    text: {
      vi: 'Thuyết phục người khác ủng hộ một ý kiến hoặc giải pháp mà em tin là đúng',
      en: 'Persuading others to endorse an initiative, viewpoint, or strategy that you champion.'
    },
    hint: {
      vi: 'Ví dụ: Đại diện nhóm tranh luận trong buổi thảo luận trên lớp.',
      en: 'Examples: Leading team rebuttals during competitive in-class debates.'
    },
    activityText: 'Thuyết phục người khác ủng hộ một ý kiến hoặc giải pháp mà em tin là đúng',
    activityTextEn: 'Persuading others to endorse an initiative, viewpoint, or strategy that you champion.',
    vietnameseContextTip: 'Ví dụ: Đại diện nhóm tranh luận trong buổi thảo luận trên lớp.',
    contextTipEn: 'Examples: Leading team rebuttals during competitive in-class debates.'
  },
  {
    id: 'e3',
    code: 'E',
    groupLabel: {
      vi: 'Quản lý & Thuyết phục',
      en: 'Enterprising: Leadership & Persuasion'
    },
    text: {
      vi: 'Thử kinh doanh một món đồ nhỏ, gây quỹ hội chợ hoặc tìm kiếm tài trợ cho câu lạc bộ',
      en: 'Organizing mini fundraising sales, managing club budgets, or seeking sponsorships.'
    },
    hint: {
      vi: 'Ví dụ: Bán thiệp hoa handmade gây quỹ từ thiện tại hội trại xuân trường.',
      en: 'Examples: Selling handmade cards at the spring festival to raise charity funds for club operations.'
    },
    activityText: 'Thử kinh doanh một món đồ nhỏ, gây quỹ hội chợ hoặc tìm kiếm tài trợ cho câu lạc bộ',
    activityTextEn: 'Organizing mini fundraising sales, managing club budgets, or seeking sponsorships.',
    vietnameseContextTip: 'Ví dụ: Bán thiệp hoa handmade gây quỹ từ thiện tại hội trại xuân trường.',
    contextTipEn: 'Examples: Selling handmade cards at the spring festival to raise charity funds for club operations.'
  },
  {
    id: 'e4',
    code: 'E',
    groupLabel: {
      vi: 'Quản lý & Thuyết phục',
      en: 'Enterprising: Leadership & Persuasion'
    },
    text: {
      vi: 'Dám đứng ra đưa ra quyết định khi cả nhóm đang lưỡng lự chưa biết chọn phương án nào',
      en: 'Making decisive choices confidently when the entire group is hesitating at a crossroads.'
    },
    hint: {
      vi: 'Ví dụ: Chốt phương án trang phục biểu diễn khi thời gian gấp gáp.',
      en: 'Examples: Finalizing stage costume designs under tight deadlines to prevent delays.'
    },
    activityText: 'Dám đứng ra đưa ra quyết định khi cả nhóm đang lưỡng lự chưa biết chọn phương án nào',
    activityTextEn: 'Making decisive choices confidently when the entire group is hesitating at a crossroads.',
    vietnameseContextTip: 'Ví dụ: Chốt phương án trang phục biểu diễn khi thời gian gấp gáp.',
    contextTipEn: 'Examples: Finalizing stage costume designs under tight deadlines to prevent delays.'
  },

  // Conventional (C) - 4 standardized items
  {
    id: 'c1',
    code: 'C',
    groupLabel: {
      vi: 'Quy trình & Tổ chức dữ liệu',
      en: 'Conventional: Systematic & Detail-Oriented'
    },
    text: {
      vi: 'Sắp xếp tập sách, tài liệu học tập hoặc các tệp tin trên máy tính một cách ngăn nắp',
      en: 'Organizing notes, study archives, and computer folders systematically with clear naming.'
    },
    hint: {
      vi: 'Ví dụ: Tạo các thư mục môn học rõ ràng, ghi chú hạn nộp bài trong sổ tay.',
      en: 'Examples: Structuring cloud drive folders by subject code, tracking deadlines in a planner.'
    },
    activityText: 'Sắp xếp tập sách, tài liệu học tập hoặc các tệp tin trên máy tính một cách ngăn nắp',
    activityTextEn: 'Organizing notes, study archives, and computer folders systematically with clear naming.',
    vietnameseContextTip: 'Ví dụ: Tạo các thư mục môn học rõ ràng, ghi chú hạn nộp bài trong sổ tay.',
    contextTipEn: 'Examples: Structuring cloud drive folders by subject code, tracking deadlines in a planner.'
  },
  {
    id: 'c2',
    code: 'C',
    groupLabel: {
      vi: 'Quy trình & Tổ chức dữ liệu',
      en: 'Conventional: Systematic & Detail-Oriented'
    },
    text: {
      vi: 'Kiểm tra kỹ lưỡng các số liệu thu chi, bảng điểm hoặc danh sách thành viên không để sai sót',
      en: 'Carefully auditing expense receipts, rosters, score sheets, and schedules to eliminate errors.'
    },
    hint: {
      vi: 'Ví dụ: Làm thủ quỹ của lớp, ghi chép tiền quỹ lớp minh bạch từng đồng.',
      en: 'Examples: Managing the class treasury, balancing income and receipts down to every penny.'
    },
    activityText: 'Kiểm tra kỹ lưỡng các số liệu thu chi, bảng điểm hoặc danh sách thành viên không để sai sót',
    activityTextEn: 'Carefully auditing expense receipts, rosters, score sheets, and schedules to eliminate errors.',
    vietnameseContextTip: 'Ví dụ: Làm thủ quỹ của lớp, ghi chép tiền quỹ lớp minh bạch từng đồng.',
    contextTipEn: 'Examples: Managing the class treasury, balancing income and receipts down to every penny.'
  },
  {
    id: 'c3',
    code: 'C',
    groupLabel: {
      vi: 'Quy trình & Tổ chức dữ liệu',
      en: 'Conventional: Systematic & Detail-Oriented'
    },
    text: {
      vi: 'Làm việc theo đúng quy trình từng bước đã được hướng dẫn rõ ràng từ trước',
      en: 'Following step-by-step standard operating procedures with accuracy and diligence.'
    },
    hint: {
      vi: 'Ví dụ: Tuân thủ nghiêm ngặt các bước an toàn trong phòng thực hành hóa học.',
      en: 'Examples: Strictly adhering to lab safety protocols and chemical experiment workflows.'
    },
    activityText: 'Làm việc theo đúng quy trình từng bước đã được hướng dẫn rõ ràng từ trước',
    activityTextEn: 'Following step-by-step standard operating procedures with accuracy and diligence.',
    vietnameseContextTip: 'Ví dụ: Tuân thủ nghiêm ngặt các bước an toàn trong phòng thực hành hóa học.',
    contextTipEn: 'Examples: Strictly adhering to lab safety protocols and chemical experiment workflows.'
  },
  {
    id: 'c4',
    code: 'C',
    groupLabel: {
      vi: 'Quy trình & Tổ chức dữ liệu',
      en: 'Conventional: Systematic & Detail-Oriented'
    },
    text: {
      vi: 'Thích môi trường làm việc có kỷ luật rõ ràng, có hướng dẫn chi tiết và ít bị xáo trộn bất ngờ',
      en: 'Preferring a structured environment with predictable timetables and unambiguous guidelines.'
    },
    hint: {
      vi: 'Ví dụ: Thích thời khóa biểu cố định, công việc có kế hoạch trước nhiều tuần.',
      en: 'Examples: Thriving with established schedules where tasks are outlined weeks in advance.'
    },
    activityText: 'Thích môi trường làm việc có kỷ luật rõ ràng, có hướng dẫn chi tiết và ít bị xáo trộn bất ngờ',
    activityTextEn: 'Preferring a structured environment with predictable timetables and unambiguous guidelines.',
    vietnameseContextTip: 'Ví dụ: Thích thời khóa biểu cố định, công việc có kế hoạch trước nhiều tuần.',
    contextTipEn: 'Examples: Thriving with established schedules where tasks are outlined weeks in advance.'
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
