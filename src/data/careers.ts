import { Career } from '../types/index.ts';

/**
 * CƠ SỞ DỮ LIỆU CHUẨN HÓA 200 NGHỀ NGHIỆP - CHẠM VIỆC
 * Phân bố chuẩn xác trên 20 nhóm điều hướng (mỗi nhóm 10 nghề).
 * Đầy đủ trường dữ liệu: englishTitle, synonyms, deliverables, entryPathways, trialActivity, status, experienceType.
 */
export const CAREERS_DATA: Career[] = [
  {
    "id": "phien-dich-vien-hoi-nghi",
    "title": "Phiên dịch hội nghị (Simultaneous Interpreter)",
    "englishTitle": "Conference Interpreter",
    "synonyms": [
      "Phiên dịch cabin",
      "Thông dịch viên hội nghị"
    ],
    "group": "ngon-ngu",
    "category": "NgoaiNgu",
    "categoryLabel": "Ngôn ngữ và giao tiếp quốc tế",
    "riasecCodes": [
      "A",
      "S",
      "E"
    ],
    "shortSummary": "Dịch trực tiếp trong buồng cabin tại các hội nghị quốc tế, truyền tải nội dung gần như đồng thời cùng lúc với diễn giả.",
    "typicalTasks": [
      "Nghiên cứu trước tài liệu hội thảo chuyên ngành sâu",
      "Nghe qua tai nghe và chuyển ngữ tức thì trong buồng cabin",
      "Ghi chú thuật ngữ mới và phối hợp cùng cộng sự đổi ca mỗi 30 phút"
    ],
    "deliverables": [
      "Bản dịch nói trực tiếp mượt mà cho thính giả quốc tế",
      "Bảng chú giải thuật ngữ chuyên ngành (Glossary)"
    ],
    "toolsUsed": [
      "Hệ thống tai nghe và micro cabin chuyên dụng",
      "Phần mềm ghi chú thuật ngữ",
      "Từ điển chuyên ngành đa ngữ"
    ],
    "workEnvironment": "Trung tâm hội nghị quốc tế, khách sạn 5 sao, làm việc từ xa qua nền tảng RSI.",
    "difficultiesAndTradeoffs": [
      "Áp lực não bộ cực cao khi dịch đồng thời",
      "Lịch trình di chuyển thất thường và phải học thuật ngữ mới liên tục"
    ],
    "coreSkills": [
      "Phản xạ ngôn ngữ tức thì",
      "Khả năng tập trung cao độ",
      "Vốn từ vựng chuyên ngành sâu"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Ngữ văn",
      "Lịch sử",
      "Địa lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Ngôn ngữ Anh/Pháp/Trung chuyên ngành Biên - Phiên dịch"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Tiếng Anh thương mại"
      },
      {
        "level": "Đào tạo nghề",
        "description": "Chứng chỉ dịch cabin quốc tế"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Ngôn ngữ Anh/Pháp/Trung chuyên ngành Biên - Phiên dịch | Cao đẳng: Cao đẳng Tiếng Anh thương mại | Đào tạo nghề: Chứng chỉ dịch cabin quốc tế",
    "trialActivity": "Nghe một đoạn phát biểu 2 phút trên TED Talk và dịch đuổi sang tiếng Việt bằng giọng nói.",
    "has3D": false,
    "simulationTaskId": "task-phien-dich",
    "experienceType": "SCENARIO_SIMULATION",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Phiên dịch viên cabin làm việc tại hội nghị quốc tế",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "phien-dich-thuong-mai",
    "title": "Phiên dịch thương mại (Business Interpreter)",
    "englishTitle": "Business / Escort Interpreter",
    "synonyms": [
      "Thông dịch viên đàm phán",
      "Phiên dịch tháp tùng doanh nghiệp"
    ],
    "group": "ngon-ngu",
    "category": "NgoaiNgu",
    "categoryLabel": "Ngôn ngữ và giao tiếp quốc tế",
    "riasecCodes": [
      "E",
      "S",
      "C"
    ],
    "shortSummary": "Đồng hành cùng đoàn doanh nghiệp trong các buổi đàm phán hợp đồng, khảo sát nhà xưởng và hội chợ xúc tiến thương mại quốc tế.",
    "typicalTasks": [
      "Chuẩn bị hồ sơ năng lực và điều khoản hợp đồng song ngữ",
      "Dịch nối tiếp trong các cuộc họp thương lượng giá cả",
      "Xử lý các tình huống văn hóa kinh doanh nhạy cảm"
    ],
    "deliverables": [
      "Biên bản ghi nhớ đàm phán song ngữ",
      "Bản dịch trao đổi thương mại"
    ],
    "toolsUsed": [
      "Sổ ghi chú đàm phán",
      "Phần mềm quản lý tài liệu đám mây"
    ],
    "workEnvironment": "Phòng họp doanh nghiệp, nhà máy sản xuất, hội chợ quốc tế.",
    "difficultiesAndTradeoffs": [
      "Thường xuyên đi công tác xa nhà",
      "Chịu trách nhiệm trực tiếp nếu hiểu lầm điều khoản giao dịch"
    ],
    "coreSkills": [
      "Ngoại ngữ thương mại",
      "Nghi thức ngoại giao kinh doanh",
      "Kỹ năng lắng nghe tích cực"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Ngữ văn",
      "Giáo dục kinh tế và pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Ngôn ngữ kết hợp Quản trị kinh doanh/Kinh tế đối ngoại"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Tiếng Anh thương mại"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Ngôn ngữ kết hợp Quản trị kinh doanh/Kinh tế đối ngoại | Cao đẳng: Cao đẳng Tiếng Anh thương mại",
    "trialActivity": "Đọc một email chào hàng bằng tiếng Anh và viết thư hồi đáp bằng tiếng Việt lịch thiệp.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Phiên dịch viên thương mại hỗ trợ đàm phán hợp đồng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "bien-dich-vien-ky-thuat",
    "title": "Biên dịch viên kỹ thuật & pháp lý (Technical & Legal Translator)",
    "englishTitle": "Technical & Legal Translator",
    "synonyms": [
      "Biên dịch tài liệu chuyên ngành",
      "Chuyên viên dịch thuật hợp đồng"
    ],
    "group": "ngon-ngu",
    "category": "NgoaiNgu",
    "categoryLabel": "Ngôn ngữ và giao tiếp quốc tế",
    "riasecCodes": [
      "C",
      "I"
    ],
    "shortSummary": "Chuyển ngữ các tài liệu kỹ thuật phức tạp, hồ sơ thầu, quy chuẩn kỹ thuật và hợp đồng pháp lý đảm bảo độ chính xác tuyệt đối.",
    "typicalTasks": [
      "Tra cứu thuật ngữ luật pháp và kỹ thuật công nghệ",
      "Sử dụng công cụ hỗ trợ dịch thuật (CAT Tools) để duy trì tính nhất quán",
      "Hiệu đính bản dịch theo chuẩn ISO 17100"
    ],
    "deliverables": [
      "Bản dịch hợp đồng pháp lý hoàn chỉnh",
      "Bản dịch hướng dẫn vận hành máy móc"
    ],
    "toolsUsed": [
      "SDL Trados Studio",
      "memoQ",
      "Hệ thống bộ nhớ dịch Translation Memory"
    ],
    "workEnvironment": "Văn phòng dịch thuật, công ty luật, làm việc tự do (Freelance) tại nhà.",
    "difficultiesAndTradeoffs": [
      "Ngồi làm việc với văn bản hàng giờ liền",
      "Sai sót một từ trong hợp đồng có thể gây thiệt hại tài chính lớn"
    ],
    "coreSkills": [
      "Độ cẩn trọng tuyệt đối",
      "Nắm vững cấu trúc ngữ pháp chuyên ngành",
      "Tư duy đối chiếu thuật ngữ"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Ngữ văn",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Ngôn ngữ Anh/Trung/Hàn/Nhật hoặc Cử nhân Luật chuyên ngành Ngoại ngữ"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Ngôn ngữ ứng dụng"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Ngôn ngữ Anh/Trung/Hàn/Nhật hoặc Cử nhân Luật chuyên ngành Ngoại ngữ | Cao đẳng: Cao đẳng Ngôn ngữ ứng dụng",
    "trialActivity": "Thử đối chiếu một bản cam kết bảo mật thông tin (NDA) song ngữ Anh - Việt để tìm sự khác biệt thuật ngữ.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Biên dịch viên kiểm tra tài liệu kỹ thuật trên máy tính",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-ban-dia-hoa",
    "title": "Chuyên viên bản địa hóa phần mềm & trò chơi (Localization Specialist)",
    "englishTitle": "Game & Software Localization Specialist",
    "synonyms": [
      "Chuyên viên L10n",
      "Biên dịch viên game"
    ],
    "group": "ngon-ngu",
    "category": "NgoaiNgu",
    "categoryLabel": "Ngôn ngữ và giao tiếp quốc tế",
    "riasecCodes": [
      "A",
      "C",
      "I"
    ],
    "shortSummary": "Điều chỉnh ngôn ngữ, văn hóa, giao diện và nội dung của game/ứng dụng để người dùng bản địa có trải nghiệm tự nhiên nhất.",
    "typicalTasks": [
      "Dịch chuỗi văn bản giao diện (UI strings) có giới hạn độ dài ký tự",
      "Chuyển hóa lối chơi chữ, hài hước và thần thoại trong game phù hợp văn hóa Việt",
      "Kiểm thử ngôn ngữ trực tiếp trong game (LQA) để sửa lỗi tràn chữ"
    ],
    "deliverables": [
      "Tệp ngôn ngữ JSON/PO đã bản địa hóa",
      "Báo cáo lỗi hiển thị văn bản giao diện"
    ],
    "toolsUsed": [
      "Crowdin",
      "Lokalise",
      "Git",
      "Phần mềm giả lập game"
    ],
    "workEnvironment": "Công ty sản xuất game (Studio Game), công ty phát triển phần mềm toàn cầu.",
    "difficultiesAndTradeoffs": [
      "Phải chơi đi chơi lại nhiều phân cảnh để bắt lỗi văn bản",
      "Áp lực tiến độ phát hành đồng thời trên toàn cầu"
    ],
    "coreSkills": [
      "Cảm thụ văn hóa đại chúng sâu sắc",
      "Vốn từ vựng trẻ trung phong phú",
      "Kỹ năng kiểm thử giao diện"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Ngữ văn",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Ngôn ngữ Anh, Văn học hoặc Công nghệ thông tin"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Ngoại ngữ ứng dụng"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Ngôn ngữ Anh, Văn học hoặc Công nghệ thông tin | Cao đẳng: Cao đẳng Ngoại ngữ ứng dụng",
    "trialActivity": "Xem một câu thoại hài hước trong game tiếng Anh và nghĩ 3 cách dịch tiếng Việt vừa bắt trend vừa tự nhiên.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên bản địa hóa kiểm thử ngôn ngữ trò chơi điện tử",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "giao-vien-ngoai-ngu",
    "title": "Giáo viên tiếng Anh / Ngôn ngữ quốc tế",
    "englishTitle": "ESL / Foreign Language Teacher",
    "synonyms": [
      "Giáo viên ngoại ngữ",
      "Giảng viên tiếng Anh"
    ],
    "group": "ngon-ngu",
    "category": "NgoaiNgu",
    "categoryLabel": "Ngôn ngữ và giao tiếp quốc tế",
    "riasecCodes": [
      "S",
      "A",
      "E"
    ],
    "shortSummary": "Giảng dạy kiến thức ngữ pháp, từ vựng và rèn luyện 4 kỹ năng nghe - nói - đọc - viết cho học sinh, người đi làm.",
    "typicalTasks": [
      "Soạn giáo án và bài giảng tương tác đa phương tiện",
      "Tổ chức các hoạt động thảo luận nhóm và thuyết trình trên lớp",
      "Chấm bài luận và sửa phát âm từng cá nhân"
    ],
    "deliverables": [
      "Kế hoạch bài dạy (Lesson Plan)",
      "Hồ sơ đánh giá tiến bộ học tập của học viên"
    ],
    "toolsUsed": [
      "Canva Giáo dục",
      "Quizizz",
      "Google Classroom",
      "Bảng tương tác thông minh"
    ],
    "workEnvironment": "Trường phổ thông, trung tâm ngoại ngữ, lớp học trực tuyến.",
    "difficultiesAndTradeoffs": [
      "Nói liên tục nhiều giờ liền gây khàn giọng",
      "Phải kiên nhẫn với học viên tiếp thu chậm hoặc thiếu tự tin"
    ],
    "coreSkills": [
      "Phương pháp sư phạm hiện đại",
      "Phát âm chuẩn quốc tế",
      "Khả năng truyền cảm hứng"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Ngữ văn"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Sư phạm Tiếng Anh hoặc Cử nhân Ngôn ngữ Anh có chứng chỉ nghiệp vụ sư phạm"
      },
      {
        "level": "Đào tạo nghề",
        "description": "Chứng chỉ giảng dạy quốc tế CELTA, TESOL hoặc TEFL"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Sư phạm Tiếng Anh hoặc Cử nhân Ngôn ngữ Anh có chứng chỉ nghiệp vụ sư phạm | Đào tạo nghề: Chứng chỉ giảng dạy quốc tế CELTA, TESOL hoặc TEFL",
    "trialActivity": "Thử soạn một trò chơi nhỏ kéo dài 5 phút để dạy 5 từ vựng mới về chủ đề công nghệ.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Giáo viên tiếng Anh giảng dạy tương tác trong lớp học",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-truyen-thong-quoc-te",
    "title": "Chuyên viên quan hệ công chúng quốc tế (Global PR Specialist)",
    "englishTitle": "International PR Specialist",
    "synonyms": [
      "Chuyên viên truyền thông quốc tế",
      "Global Corporate Communications"
    ],
    "group": "ngon-ngu",
    "category": "NgoaiNgu",
    "categoryLabel": "Ngôn ngữ và giao tiếp quốc tế",
    "riasecCodes": [
      "E",
      "A",
      "S"
    ],
    "shortSummary": "Xây dựng thông cáo báo chí, duy trì mối quan hệ với cơ quan thông tấn nước ngoài và đại diện phát ngôn cho tổ chức ra thế giới.",
    "typicalTasks": [
      "Soạn thảo thông cáo báo chí bằng tiếng Anh chuẩn mực",
      "Điều phối phỏng vấn giữa báo chí quốc tế và ban lãnh đạo",
      "Theo dõi dư luận quốc tế và xử lý khủng hoảng truyền thông xuyên biên giới"
    ],
    "deliverables": [
      "Thông cáo báo chí quốc tế",
      "Hồ sơ báo chí truyền thông (Press Kit)"
    ],
    "toolsUsed": [
      "Cision",
      "PR Newswire",
      "Google Alerts",
      "Meltwater"
    ],
    "workEnvironment": "Tập đoàn đa quốc gia, tổ chức phi chính phủ (NGO), cơ quan ngoại giao.",
    "difficultiesAndTradeoffs": [
      "Phải phản ứng ngay lập tức kể cả nửa đêm khi có sự cố báo chí",
      "Nhạy cảm cao về khác biệt văn hóa và chính trị"
    ],
    "coreSkills": [
      "Kỹ năng viết lách báo chí sắc bén",
      "Tư duy quản trị danh tiếng",
      "Giao tiếp thuyết phục"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Ngữ văn",
      "Lịch sử"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quan hệ quốc tế, Báo chí truyền thông hoặc Ngôn ngữ Anh"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quan hệ quốc tế, Báo chí truyền thông hoặc Ngôn ngữ Anh",
    "trialActivity": "Đọc một tin tức sự kiện ở Việt Nam và viết tóm tắt 3 câu bằng tiếng Anh gửi cho phóng viên nước ngoài.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên truyền thông quốc tế trao đổi với đối tác",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-kinh-doanh-quoc-te",
    "title": "Chuyên viên phát triển kinh doanh quốc tế (International Business Developer)",
    "englishTitle": "International Business Development Specialist",
    "synonyms": [
      "Chuyên viên mở rộng thị trường nước ngoài",
      "Global Sales Lead"
    ],
    "group": "ngon-ngu",
    "category": "NgoaiNgu",
    "categoryLabel": "Ngôn ngữ và giao tiếp quốc tế",
    "riasecCodes": [
      "E",
      "C",
      "S"
    ],
    "shortSummary": "Tìm kiếm khách hàng doanh nghiệp nước ngoài, đàm phán hợp đồng xuất khẩu và mở rộng mạng lưới phân phối toàn cầu.",
    "typicalTasks": [
      "Nghiên cứu thị trường và rào cản pháp lý tại quốc gia mục tiêu",
      "Gửi thư ngỏ, gọi điện chào hàng B2B và tham gia hội chợ thương mại",
      "Đàm phán hạn mức tín dụng và điều kiện giao hàng Incoterms"
    ],
    "deliverables": [
      "Hợp đồng mua bán ngoại thương đã ký kết",
      "Kế hoạch phát triển thị trường mới"
    ],
    "toolsUsed": [
      "LinkedIn Sales Navigator",
      "HubSpot CRM",
      "Zoom / Teams",
      "Statista"
    ],
    "workEnvironment": "Văn phòng xuất nhập khẩu, thường xuyên bay công tác nước ngoài.",
    "difficultiesAndTradeoffs": [
      "Chênh lệch múi giờ làm đảo lộn sinh hoạt",
      "Áp lực doanh số (Doanh thu USD) hàng quý"
    ],
    "coreSkills": [
      "Kỹ năng đàm phán thương mại quốc tế",
      "Thấu hiểu văn hóa đối tác",
      "Nhạy bén cơ hội thị trường"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Toán học",
      "Địa lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Kinh tế đối ngoại, Kinh doanh quốc tế hoặc Ngôn ngữ kết hợp Kinh tế"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Kinh doanh quốc tế"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Kinh tế đối ngoại, Kinh doanh quốc tế hoặc Ngôn ngữ kết hợp Kinh tế | Cao đẳng: Cao đẳng Kinh doanh quốc tế",
    "trialActivity": "Tìm kiếm sản phẩm cà phê Việt Nam và viết 1 đoạn giới thiệu hấp dẫn bằng tiếng Anh để chào bán cho nhà phân phối châu Âu.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên phát triển kinh doanh quốc tế đàm phán hợp đồng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-ban-quyen-xuat-ban",
    "title": "Chuyên viên bản quyền và dịch thuật xuất bản (Publishing Rights Manager)",
    "englishTitle": "Publishing Rights & Acquisitions Specialist",
    "synonyms": [
      "Biên tập viên mua bản quyền sách",
      "Quản lý bản quyền xuất bản"
    ],
    "group": "ngon-ngu",
    "category": "NgoaiNgu",
    "categoryLabel": "Ngôn ngữ và giao tiếp quốc tế",
    "riasecCodes": [
      "A",
      "C",
      "I"
    ],
    "shortSummary": "Đánh giá các đầu sách bán chạy trên thế giới, đàm phán mua bản quyền dịch thuật và quản lý tiến độ chuyển ngữ để xuất bản sách.",
    "typicalTasks": [
      "Đọc bản thảo tiếng nước ngoài và viết báo cáo thẩm định nội dung",
      "Thương lượng phí bản quyền (Advance & Royalty) với đại lý nước ngoài",
      "Tuyển chọn và nghiệm thu bản thảo từ các dịch giả uy tín"
    ],
    "deliverables": [
      "Báo cáo thẩm định sách",
      "Hợp đồng chuyển nhượng bản quyền tác phẩm"
    ],
    "toolsUsed": [
      "Frankfurt Book Fair Portal",
      "Phần mềm biên tập văn bản",
      "Hệ thống quản lý bản thảo"
    ],
    "workEnvironment": "Nhà xuất bản, công ty phát hành sách tư nhân, hội chợ sách quốc tế.",
    "difficultiesAndTradeoffs": [
      "Đọc khối lượng sách khổng lồ mỗi tháng",
      "Áp lực đánh giá đúng thị hiếu độc giả trong nước"
    ],
    "coreSkills": [
      "Gu thẩm mỹ văn học",
      "Kỹ năng biên tập ngôn từ tinh tế",
      "Hiểu biết luật sở hữu trí tuệ"
    ],
    "highSchoolSubjects": [
      "Ngữ văn",
      "Tiếng Anh",
      "Lịch sử"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Ngôn ngữ học, Văn học, Xuất bản hoặc Báo chí"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Ngôn ngữ học, Văn học, Xuất bản hoặc Báo chí",
    "trialActivity": "Đọc phần giới thiệu của một cuốn sách best-seller nước ngoài và viết bài review ngắn lý giải tại sao sách nên được dịch sang tiếng Việt.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Biên tập viên xuất bản xem xét bản thảo sách",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "dieu-phoi-vien-du-an-ngo",
    "title": "Điều phối viên dự án phi chính phủ quốc tế (INGO Project Coordinator)",
    "englishTitle": "International NGO Project Coordinator",
    "synonyms": [
      "Cán bộ dự án quốc tế",
      "Điều phối viên cứu trợ nhân đạo"
    ],
    "group": "ngon-ngu",
    "category": "NgoaiNgu",
    "categoryLabel": "Ngôn ngữ và giao tiếp quốc tế",
    "riasecCodes": [
      "S",
      "E",
      "I"
    ],
    "shortSummary": "Kết nối nguồn tài trợ từ các tổ chức quốc tế với các dự án cộng đồng tại địa phương như bảo vệ môi trường, giáo dục trẻ em vùng cao.",
    "typicalTasks": [
      "Viết đề xuất tài trợ (Grant Proposal) bằng tiếng Anh",
      "Tổ chức các chuyến đi thực địa đánh giá nhu cầu người dân",
      "Theo dõi tiến độ giải ngân và báo cáo định kỳ cho nhà tài trợ quốc tế"
    ],
    "deliverables": [
      "Báo cáo tác động dự án (Impact Report)",
      "Đề xuất xin tài trợ hoàn chỉnh"
    ],
    "toolsUsed": [
      "Trello/Asana",
      "KoboToolbox",
      "Excel nâng cao"
    ],
    "workEnvironment": "Văn phòng tổ chức quốc tế kết hợp đi thực địa tại các thôn bản vùng sâu vùng xa.",
    "difficultiesAndTradeoffs": [
      "Điều kiện ăn ở khi đi thực địa cơ sở còn nhiều thiếu thốn",
      "Quy trình kiểm toán và giải trình tài chính cực kỳ nghiêm ngặt"
    ],
    "coreSkills": [
      "Kỹ năng viết đề xuất dự án thuyết phục",
      "Giao tiếp liên văn hóa tôn trọng",
      "Tổ chức sự kiện cộng đồng"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Địa lý",
      "Giáo dục công dân / Kinh tế & Pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quốc tế học, Xã hội học, Công tác xã hội hoặc Ngôn ngữ Anh"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quốc tế học, Xã hội học, Công tác xã hội hoặc Ngôn ngữ Anh",
    "trialActivity": "Thử phác thảo 3 mục tiêu cụ thể bằng tiếng Anh cho một dự án mang thư viện sách đến học sinh miền núi.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Điều phối viên dự án quốc tế làm việc cùng cộng đồng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "huong-dan-vien-du-lich-quoc-te",
    "title": "Hướng dẫn viên du lịch quốc tế (International Tour Guide)",
    "englishTitle": "Inbound / Outbound Tour Guide",
    "synonyms": [
      "Hướng dẫn viên inbound",
      "Hướng dẫn viên outbound"
    ],
    "group": "ngon-ngu",
    "category": "NgoaiNgu",
    "categoryLabel": "Ngôn ngữ và giao tiếp quốc tế",
    "riasecCodes": [
      "E",
      "S",
      "A"
    ],
    "shortSummary": "Dẫn các đoàn khách quốc tế tham quan danh lam thắng cảnh, di sản văn hóa Việt Nam hoặc đưa đoàn người Việt du lịch nước ngoài.",
    "typicalTasks": [
      "Thuyết minh sống động về lịch sử, văn hóa, ẩm thực bằng ngoại ngữ",
      "Điều phối lịch trình xe đưa đón, khách sạn và bữa ăn cho đoàn",
      "Xử lý các sự cố phát sinh như khách lạc đường, mất hộ chiếu hoặc đau ốm"
    ],
    "deliverables": [
      "Nhật ký hành trình tour",
      "Khảo sát độ hài lòng của khách du lịch"
    ],
    "toolsUsed": [
      "Thẻ hướng dẫn viên quốc tế",
      "Micro thuyết minh không dây",
      "Bản đồ số du lịch"
    ],
    "workEnvironment": "Các điểm danh lam thắng cảnh, di tích lịch sử, sân bay, xe du lịch.",
    "difficultiesAndTradeoffs": [
      "Đi lại liên tục, làm việc vào các dịp lễ tết khi mọi người nghỉ ngơi",
      "Phải luôn giữ nụ cười và năng lượng tích cực trước khách hàng"
    ],
    "coreSkills": [
      "Ngoại ngữ giao tiếp lưu loát tự nhiên",
      "Kiến thức lịch sử văn hóa sâu rộng",
      "Kỹ năng ứng biến xử lý tình huống khẩn cấp"
    ],
    "highSchoolSubjects": [
      "Lịch sử",
      "Địa lý",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị du lịch và lữ hành hoặc Ngôn ngữ"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Hướng dẫn du lịch quốc tế"
      },
      {
        "level": "Đào tạo nghề",
        "description": "Chứng chỉ nghiệp vụ hướng dẫn viên du lịch quốc tế"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị du lịch và lữ hành hoặc Ngôn ngữ | Cao đẳng: Cao đẳng Hướng dẫn du lịch quốc tế | Đào tạo nghề: Chứng chỉ nghiệp vụ hướng dẫn viên du lịch quốc tế",
    "trialActivity": "Thử quay một video ngắn 2 phút bằng tiếng Anh giới thiệu một món ăn đường phố nổi tiếng nơi em sống cho du khách nước ngoài.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Hướng dẫn viên du lịch quốc tế thuyết minh tại danh lam thắng cảnh",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-thiet-ke-vi-mach-front-end",
    "title": "Kỹ sư thiết kế vi mạch số (RTL Design Engineer)",
    "englishTitle": "ASIC/SoC RTL Design Engineer",
    "synonyms": [
      "Kỹ sư thiết kế chip bán dẫn",
      "RTL Engineer"
    ],
    "group": "ban-dan",
    "category": "KyThuat",
    "categoryLabel": "Bán dẫn, vi mạch và phần cứng",
    "riasecCodes": [
      "I",
      "R",
      "C"
    ],
    "shortSummary": "Chuyển hóa các yêu cầu kiến trúc vi xử lý thành mã mô tả phần cứng Verilog/SystemVerilog, tạo nên bộ não số của các thiết bị thông minh.",
    "typicalTasks": [
      "Viết mã RTL mô tả chức năng các khối logic vi mạch",
      "Mô phỏng chức năng logic và sửa lỗi timing",
      "Phối hợp với đội ngũ kiểm thử để đạt độ bao phủ kiểm tra 100%"
    ],
    "deliverables": [
      "Bộ mã nguồn RTL chuẩn hóa",
      "Báo cáo tổng hợp logic (Synthesis Report)"
    ],
    "toolsUsed": [
      "Synopsys Design Compiler",
      "Cadence Genus",
      "QuestaSim",
      "Verilog/SystemVerilog"
    ],
    "workEnvironment": "Văn phòng thiết kế vi mạch R&D, máy tính cấu hình cực mạnh chạy Linux.",
    "difficultiesAndTradeoffs": [
      "Thời gian chạy mô phỏng dài hàng giờ liền",
      "Sai sót nhỏ trong mã RTL khi xuất xưởng ra chip vật lý sẽ tốn hàng triệu USD để làm lại"
    ],
    "coreSkills": [
      "Tư duy kiến trúc máy tính",
      "Lập trình phần cứng Verilog/SystemVerilog",
      "Hiểu biết sâu sắc về logic số"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Vật lý",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Thiết kế vi mạch, Kỹ thuật Điện tử - Viễn thông hoặc Kỹ thuật Máy tính"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Thiết kế vi mạch, Kỹ thuật Điện tử - Viễn thông hoặc Kỹ thuật Máy tính",
    "trialActivity": "Tìm hiểu cổng logic AND, OR, NOT và vẽ sơ đồ mạch cộng 1-bit đơn giản.",
    "has3D": true,
    "simulationTaskId": "task-semiconductor-3d",
    "experienceType": "3D_INTERACTIVE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Phiến silicon bán dẫn và vi mạch vi xử lý",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-kiem-thu-vi-mach",
    "title": "Kỹ sư kiểm thử vi mạch (Design Verification Engineer)",
    "englishTitle": "IC Design Verification Engineer",
    "synonyms": [
      "Kỹ sư DV",
      "Kỹ sư kiểm tra tính đúng đắn vi mạch"
    ],
    "group": "ban-dan",
    "category": "KyThuat",
    "categoryLabel": "Bán dẫn, vi mạch và phần cứng",
    "riasecCodes": [
      "I",
      "C"
    ],
    "shortSummary": "Xây dựng môi trường giả lập tinh vi để kiểm tra hàng tỷ tình huống tín hiệu, đảm bảo con chip hoạt động hoàn hảo trước khi gửi nhà máy đúc wafer.",
    "typicalTasks": [
      "Xây dựng môi trường kiểm thử tự động UVM",
      "Viết các kịch bản kiểm tra ngẫu nhiên có ràng buộc",
      "Phân tích độ bao phủ chức năng (Functional Coverage)"
    ],
    "deliverables": [
      "Môi trường kiểm thử UVM hoàn chỉnh",
      "Báo cáo độ bao phủ mã và chức năng"
    ],
    "toolsUsed": [
      "Synopsys VCS",
      "Cadence Xcelium",
      "SystemVerilog UVM",
      "Python"
    ],
    "workEnvironment": "Phòng thiết kế chip, làm việc phối hợp chặt chẽ với kỹ sư RTL.",
    "difficultiesAndTradeoffs": [
      "Công việc đòi hỏi tư duy tìm lỗi và phản biện cực cao",
      "Chiếm tới 70% tổng thời gian trong một dự án thiết kế vi mạch"
    ],
    "coreSkills": [
      "Phương pháp kiểm thử hướng đối tượng UVM",
      "Tư duy tìm lỗi biên (Corner cases)",
      "Kỹ năng tự động hóa bằng script"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Tin học",
      "Vật lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Thiết kế vi mạch, Kỹ thuật Máy tính hoặc Khoa học Máy tính"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Thiết kế vi mạch, Kỹ thuật Máy tính hoặc Khoa học Máy tính",
    "trialActivity": "Tập suy nghĩ các trường hợp kiểm thử cho một chiếc máy rút tiền tự động: rút 0 đồng, nhập sai PIN 3 lần, rút quá số dư.",
    "has3D": true,
    "simulationTaskId": "task-semiconductor-3d",
    "experienceType": "3D_INTERACTIVE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư kiểm thử vi mạch phân tích sóng tín hiệu",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-layout-vi-mach",
    "title": "Kỹ sư thiết kế vật lý vi mạch (Physical Design / Layout Engineer)",
    "englishTitle": "Physical Design & Layout Engineer",
    "synonyms": [
      "Kỹ sư Backend vi mạch",
      "Kỹ sư sắp đặt linh kiện vi mô"
    ],
    "group": "ban-dan",
    "category": "KyThuat",
    "categoryLabel": "Bán dẫn, vi mạch và phần cứng",
    "riasecCodes": [
      "R",
      "I",
      "C"
    ],
    "shortSummary": "Biến sơ đồ logic thành sơ đồ hình học của hàng tỷ bóng bán dẫn nano trên các lớp kim loại của phiến silicon.",
    "typicalTasks": [
      "Quy hoạch mặt bằng chip (Floorplanning)",
      "Sắp xếp vị trí tế bào logic (Placement) và đi dây tín hiệu (Routing)",
      "Đóng timing (Timing Closure) và kiểm tra quy tắc vật lý DRC/LVS"
    ],
    "deliverables": [
      "Tệp layout hình học GDSII sẵn sàng chuyển cho nhà máy đúc chip (Fab)",
      "Báo cáo kiểm tra thời gian trễ"
    ],
    "toolsUsed": [
      "Synopsys IC Compiler II",
      "Cadence Innovus",
      "Calibre DRC/LVS"
    ],
    "workEnvironment": "Phòng R&D công nghệ cao, làm việc với các tiến trình sản xuất tiên tiến 7nm, 5nm, 3nm.",
    "difficultiesAndTradeoffs": [
      "Chạy đua với áp lực thời gian để kịp lịch đúc chip (Tape-out)",
      "Giải quyết bài toán nghẽn tín hiệu và sinh nhiệt phức tạp"
    ],
    "coreSkills": [
      "Kiến thức vật lý bán dẫn",
      "Giải thuật định tuyến và phân bổ không gian",
      "Kiểm soát trễ xung nhịp clock tree"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Toán học",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật Điện tử, Vật lý kỹ thuật bán dẫn hoặc Cơ điện tử"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật Điện tử, Vật lý kỹ thuật bán dẫn hoặc Cơ điện tử",
    "trialActivity": "Chơi trò chơi xếp hình dây nối vi mạch hoặc xem video về quy trình quang khắc EUV.",
    "has3D": true,
    "simulationTaskId": "task-semiconductor-3d",
    "experienceType": "3D_INTERACTIVE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Sơ đồ mạch tích hợp vật lý phóng đại",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-dong-goi-va-kiem-tra-ban-dan",
    "title": "Kỹ sư đóng gói và đo kiểm bán dẫn (OSAT Engineer)",
    "englishTitle": "Semiconductor Packaging & Test Engineer",
    "synonyms": [
      "Kỹ sư OSAT",
      "Kỹ sư đóng vỏ chip BGA"
    ],
    "group": "ban-dan",
    "category": "KyThuat",
    "categoryLabel": "Bán dẫn, vi mạch và phần cứng",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Cắt phiến wafer thành từng con chip nhỏ (die), gắn lên đế tiếp xúc, đúc nhựa bảo vệ và thực hiện đo kiểm điện áp công nghiệp.",
    "typicalTasks": [
      "Giám sát dây chuyền gắn die và hàn dây kết nối siêu mảnh (Wire bonding/Flip-chip)",
      "Thiết kế socket và bảng giao tiếp kiểm thử tải ATE",
      "Phân tích nhiệt và độ bền cơ lý của vỏ chip"
    ],
    "deliverables": [
      "Quy trình đóng gói BGA/QFN đạt chuẩn JEDEC",
      "Chương trình đo kiểm tự động trên máy ATE"
    ],
    "toolsUsed": [
      "Máy kiểm thử ATE Teradyne / Advantest",
      "Kính hiển vi điện tử quét SEM",
      "Phần mềm mô phỏng nhiệt Ansys"
    ],
    "workEnvironment": "Nhà máy bán dẫn công nghệ cao (Intel, Amkor, Hana Micron).",
    "difficultiesAndTradeoffs": [
      "Phải mặc đồ phòng sạch và tuân thủ an toàn tĩnh điện ESD nghiêm ngặt",
      "Ca làm việc liên tục theo nhịp độ xuất xưởng hàng triệu linh kiện"
    ],
    "coreSkills": [
      "Khoa học vật liệu điện tử",
      "Kỹ thuật đo kiểm tự động ATE",
      "Phân tích độ tin cậy và tản nhiệt"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Hóa học",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật Điện tử, Khoa học Vật liệu hoặc Cơ điện tử"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Kỹ thuật Điện tử công nghiệp"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật Điện tử, Khoa học Vật liệu hoặc Cơ điện tử | Cao đẳng: Cao đẳng Kỹ thuật Điện tử công nghiệp",
    "trialActivity": "Quan sát các con chip đen trên bo mạch máy tính cũ xem chân nối xung quanh là chân hàn hay chân bi BGA.",
    "has3D": true,
    "simulationTaskId": "task-semiconductor-3d",
    "experienceType": "3D_INTERACTIVE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Dây chuyền máy móc đóng gói chip bán dẫn tự động",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-ung-dung-vi-mach",
    "title": "Kỹ sư ứng dụng hiện trường vi mạch (Field Application Engineer - FAE)",
    "englishTitle": "Field Application Engineer (Semiconductors)",
    "synonyms": [
      "Kỹ sư FAE chip",
      "Kỹ sư cầu nối khách hàng công nghệ bán dẫn"
    ],
    "group": "ban-dan",
    "category": "KyThuat",
    "categoryLabel": "Bán dẫn, vi mạch và phần cứng",
    "riasecCodes": [
      "E",
      "I",
      "S"
    ],
    "shortSummary": "Hỗ trợ các công ty sản xuất thiết bị điện tử tích hợp con chip của hãng vào bo mạch sản phẩm thương mại của họ.",
    "typicalTasks": [
      "Trình bày tài liệu kỹ thuật và thiết kế mẫu (Reference Design)",
      "Hỗ trợ khách hàng debug lỗi phần cứng và phần mềm nhúng",
      "Thu thập phản hồi về hiệu năng chip để chuyển về đội ngũ thiết kế R&D"
    ],
    "deliverables": [
      "Bo mạch thiết kế mẫu phát triển (Evaluation Board Kit)",
      "Tài liệu hướng dẫn ứng dụng Application Note"
    ],
    "toolsUsed": [
      "Máy hiện sóng Oscilloscope",
      "Bộ phân tích logic Logic Analyzer",
      "Altium Designer",
      "C/C++ nhúng"
    ],
    "workEnvironment": "Văn phòng đại diện hãng bán dẫn (Qualcomm, MediaTek, TI, Renesas, NXP).",
    "difficultiesAndTradeoffs": [
      "Thường xuyên xử lý sự cố gấp khi dây chuyền khách hàng gặp lỗi",
      "Đòi hỏi sự cân bằng cao giữa kiến thức kỹ thuật sâu và kỹ năng ăn nói"
    ],
    "coreSkills": [
      "Khả năng chuẩn đoán lỗi hệ thống nhanh",
      "Giao tiếp kỹ thuật song ngữ",
      "Kỹ năng trình diễn giải pháp"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Tiếng Anh",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật Điện tử - Viễn thông, Điện tử hoặc Cơ điện tử"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật Điện tử - Viễn thông, Điện tử hoặc Cơ điện tử",
    "trialActivity": "Tập giải thích cho một người bạn về sự khác nhau giữa vi xử lý (CPU) và vi điều khiển (MCU).",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư ứng dụng thử nghiệm bo mạch tham chiếu",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-che-tao-phien-ban-dan",
    "title": "Kỹ sư quy trình chế tạo bán dẫn (Semiconductor Process Engineer)",
    "englishTitle": "Semiconductor Process Engineer",
    "synonyms": [
      "Kỹ sư nhà máy đúc chip",
      "Fab Engineer"
    ],
    "group": "ban-dan",
    "category": "KyThuat",
    "categoryLabel": "Bán dẫn, vi mạch và phần cứng",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Tối ưu hóa các công đoạn hóa lý trong nhà máy chế tạo chip: quang khắc, lắng đọng màng mỏng và khắc ăn mòn.",
    "typicalTasks": [
      "Hiệu chuẩn các thông số nhiệt độ, áp suất khí và liều lượng ion cấy",
      "Giám sát tỷ lệ thành phẩm tốt (Yield Management)",
      "Tìm nguyên nhân các hạt bụi siêu vi gây lỗi trên phiến wafer"
    ],
    "deliverables": [
      "Quy trình sản xuất chuẩn hóa SOP",
      "Báo cáo nâng cao tỷ lệ mẻ đúc đạt chuẩn (Yield)"
    ],
    "toolsUsed": [
      "Hệ thống quang khắc DUV/EUV",
      "Thiết bị lắng đọng CVD",
      "Máy đo quang phổ Ellipsometer"
    ],
    "workEnvironment": "Phòng sạch Cleanroom cấp độ ISO Class 1 tại các nhà máy chế tạo chip.",
    "difficultiesAndTradeoffs": [
      "Mặc bộ đồ bảo hộ bunny suit cả ngày",
      "Môi trường dùng hóa chất đặc thù đòi hỏi kỷ luật an toàn tối đa"
    ],
    "coreSkills": [
      "Vật lý bán dẫn và hóa học plasma",
      "Phân tích thống kê quy trình SPC",
      "Kỹ năng giải quyết sự cố"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Hóa học",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Khoa học Vật liệu, Hóa học ứng dụng, Vật lý kỹ thuật hoặc Kỹ thuật Điện tử"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Khoa học Vật liệu, Hóa học ứng dụng, Vật lý kỹ thuật hoặc Kỹ thuật Điện tử",
    "trialActivity": "Tìm hiểu tại sao phòng sạch sản xuất chip lại sạch hơn phòng mổ bệnh viện hàng nghìn lần.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư phòng sạch kiểm tra phiến bán dẫn silicon",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-thuat-vien-phong-sach",
    "title": "Kỹ thuật viên phòng sạch (Cleanroom Production Technician)",
    "englishTitle": "Cleanroom Production Technician",
    "synonyms": [
      "Kỹ thuật viên nhà máy chip",
      "Fab Operator"
    ],
    "group": "ban-dan",
    "category": "KyThuat",
    "categoryLabel": "Bán dẫn, vi mạch và phần cứng",
    "riasecCodes": [
      "R",
      "C"
    ],
    "shortSummary": "Trực tiếp hỗ trợ nạp phôi wafer, kiểm tra tình trạng máy móc định kỳ và giám sát nồng độ bụi trong môi trường chế tạo chip.",
    "typicalTasks": [
      "Mặc trang phục phòng sạch đúng quy chuẩn",
      "Vận chuyển hộp chứa wafer chuyên dụng FOUP giữa các công đoạn",
      "Ghi chép nhật ký vận hành máy móc theo ca kíp"
    ],
    "deliverables": [
      "Nhật ký vận chuyển wafer an toàn",
      "Báo cáo nồng độ bụi định kỳ"
    ],
    "toolsUsed": [
      "Thiết bị đo hạt bụi quang học",
      "Máy nâng wafer chân không"
    ],
    "workEnvironment": "Phòng sạch chế tạo linh kiện điện tử và bán dẫn.",
    "difficultiesAndTradeoffs": [
      "Làm việc theo ca kíp ngày/đêm",
      "Kỷ luật cá nhân rất cao, không được mang điện thoại, mỹ phẩm vào phòng"
    ],
    "coreSkills": [
      "Tính cẩn trọng",
      "Tuân thủ quy trình nghiêm ngặt",
      "Khéo léo đôi bàn tay"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Hóa học"
    ],
    "entryPathways": [
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Kỹ thuật Điện tử hoặc Cơ điện tử"
      },
      {
        "level": "Trung cấp",
        "description": "Trung cấp Kỹ thuật Công nghiệp"
      }
    ],
    "entryPathway": "Cao đẳng: Cao đẳng Kỹ thuật Điện tử hoặc Cơ điện tử | Trung cấp: Trung cấp Kỹ thuật Công nghiệp",
    "trialActivity": "Thực hành các bước rửa tay và mang đồ bảo hộ đúng quy chuẩn.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ thuật viên phòng sạch theo dõi dây chuyền tự động",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-thiet-ke-mach-in-pcb",
    "title": "Kỹ sư thiết kế mạch điện tử (Hardware / PCB Design Engineer)",
    "englishTitle": "Hardware / PCB Design Engineer",
    "synonyms": [
      "Kỹ sư phần cứng",
      "Kỹ sư vẽ bo mạch"
    ],
    "group": "ban-dan",
    "category": "KyThuat",
    "categoryLabel": "Bán dẫn, vi mạch và phần cứng",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Thiết kế bảng mạch in nhiều lớp (PCB) gắn kết vi xử lý, bộ nhớ, cảm biến và nguồn điện tạo nên sản phẩm hoàn chỉnh.",
    "typicalTasks": [
      "Vẽ sơ đồ nguyên lý mạch phần cứng",
      "Thiết kế bố trí linh kiện và đi dây bo mạch nhiều lớp",
      "Hàn linh kiện mẫu, đo kiểm tín hiệu và thử nghiệm EMC"
    ],
    "deliverables": [
      "Bo mạch PCB mẫu chạy thử nghiệm",
      "Tệp sản xuất Gerber gửi xưởng in mạch"
    ],
    "toolsUsed": [
      "Altium Designer",
      "KiCAD",
      "Máy hàn linh kiện dán SMD",
      "Đồng hồ hiện sóng"
    ],
    "workEnvironment": "Phòng R&D công ty phần cứng, xưởng thử nghiệm IoT.",
    "difficultiesAndTradeoffs": [
      "Tiếp xúc với khói thiếc hàn nếu thiếu hút mùi",
      "Phải làm lại mạch nếu đi dây sai tín hiệu cao tần"
    ],
    "coreSkills": [
      "Kỹ năng đọc sơ đồ mạch",
      "Kỹ năng hàn vi mạch chính xác",
      "Phân tích tương thích điện từ"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Tin học",
      "Công nghệ"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật Điện tử, Cơ điện tử hoặc Tự động hóa"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Điện tử Công nghiệp"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật Điện tử, Cơ điện tử hoặc Tự động hóa | Cao đẳng: Cao đẳng Điện tử Công nghiệp",
    "trialActivity": "Tải phần mềm KiCad miễn phí và vẽ thử sơ đồ một mạch đèn nhấp nháy 2 LED.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư hàn vi mạch điện tử trên bảng mạch PCB",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-phan-mem-nhung",
    "title": "Kỹ sư phần mềm nhúng (Embedded Firmware Engineer)",
    "englishTitle": "Embedded Firmware / Systems Engineer",
    "synonyms": [
      "Lập trình viên vi điều khiển",
      "Firmware Developer"
    ],
    "group": "ban-dan",
    "category": "KyThuat",
    "categoryLabel": "Bán dẫn, vi mạch và phần cứng",
    "riasecCodes": [
      "I",
      "R"
    ],
    "shortSummary": "Viết mã phần mềm cấp thấp bằng C/C++ trực tiếp nạp vào vi điều khiển để điều khiển thiết bị ô tô, drone hoặc robot.",
    "typicalTasks": [
      "Viết driver giao tiếp phần cứng UART, SPI, I2C, CAN bus",
      "Tối ưu hóa bộ nhớ RAM/Flash giới hạn và tiêu thụ năng lượng",
      "Gỡ lỗi phần mềm kết hợp đo tín hiệu xung trên phần cứng"
    ],
    "deliverables": [
      "Tệp nhị phân Firmware (.hex/.bin)",
      "Tài liệu kiến trúc giao thức truyền thông"
    ],
    "toolsUsed": [
      "Keil C",
      "STM32CubeIDE",
      "JTAG / ST-Link Debugger",
      "C/C++ nhúng",
      "FreeRTOS"
    ],
    "workEnvironment": "Phòng thí nghiệm IoT, ô tô thông minh, thiết bị y tế.",
    "difficultiesAndTradeoffs": [
      "Lỗi phần mềm có thể làm hỏng linh kiện phần cứng",
      "Gỡ lỗi phức tạp khi xảy ra lỗi ngẫu nhiên về thời gian thực"
    ],
    "coreSkills": [
      "Lập trình C/C++ vi điều khiển",
      "Hiểu biết thanh ghi và ngắt vi xử lý",
      "Kỹ năng đo kiểm dao động ký"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Vật lý",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật Máy tính, Điện tử hoặc Công nghệ thông tin"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Lập trình nhúng & IoT"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật Máy tính, Điện tử hoặc Công nghệ thông tin | Cao đẳng: Cao đẳng Lập trình nhúng & IoT",
    "trialActivity": "Mua một kit Arduino và lập trình cho đèn LED nhấp nháy theo nhịp điệu bài hát.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư nhúng nạp firmware vào bo mạch phát triển",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-mua-hang-linh-kien-dien-tu",
    "title": "Chuyên viên chuỗi cung ứng linh kiện điện tử (Electronics Procurement Specialist)",
    "englishTitle": "Electronics Component Sourcing Specialist",
    "synonyms": [
      "Chuyên viên mua hàng bán dẫn",
      "Buyer linh kiện điện tử"
    ],
    "group": "ban-dan",
    "category": "KyThuat",
    "categoryLabel": "Bán dẫn, vi mạch và phần cứng",
    "riasecCodes": [
      "E",
      "C"
    ],
    "shortSummary": "Theo dõi biến động giá cả và thời gian giao hàng của các dòng chip toàn cầu để đảm bảo nhà máy không bị đứt gãy sản xuất.",
    "typicalTasks": [
      "Đàm phán giá và hợp đồng bao tiêu chip dài hạn với các nhà phân phối lớn",
      "Tìm nguồn linh kiện thay thế tương đương khi chip chính khan hiếm",
      "Kiểm soát hàng giả, hàng nhái linh kiện trôi nổi trên thị trường"
    ],
    "deliverables": [
      "Bảng báo giá dự toán linh kiện BOM",
      "Hợp đồng cung ứng linh kiện ổn định"
    ],
    "toolsUsed": [
      "Octopart",
      "DigiKey / Mouser Portal",
      "Hệ thống SAP ERP"
    ],
    "workEnvironment": "Văn phòng nhà máy sản xuất điện tử EMS (Foxconn, Pegatron, VinFast).",
    "difficultiesAndTradeoffs": [
      "Căng thẳng khi khủng hoảng thiếu chip toàn cầu xảy ra",
      "Đàm phán bằng tiếng Anh liên tục qua nhiều múi giờ"
    ],
    "coreSkills": [
      "Đàm phán thương mại quốc tế",
      "Hiểu biết về mã số linh kiện điện tử",
      "Quản trị rủi ro chuỗi cung ứng"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Toán học",
      "Giáo dục kinh tế và pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Logistics, Kinh doanh quốc tế hoặc Kỹ thuật Điện tử có định hướng kinh tế"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Logistics, Kinh doanh quốc tế hoặc Kỹ thuật Điện tử có định hướng kinh tế",
    "trialActivity": "Lên trang web Octopart.com tra cứu mã một con chip vi điều khiển ESP32 xem giá và lượng hàng tồn kho toàn cầu.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kho linh kiện điện tử và chuyên viên quản lý chuỗi cung ứng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "lap-trinh-vien-fullstack",
    "title": "Lập trình viên Full-stack (Full-stack Web Developer)",
    "englishTitle": "Full-stack Web Developer",
    "synonyms": [
      "Kỹ sư phát triển phần mềm",
      "Web Developer"
    ],
    "group": "phan-mem-ai",
    "category": "CongNghe",
    "categoryLabel": "Phần mềm, AI và dữ liệu",
    "riasecCodes": [
      "I",
      "R",
      "C"
    ],
    "shortSummary": "Thiết kế, xây dựng toàn diện cả giao diện người dùng (Front-end) và hệ thống xử lý máy chủ, cơ sở dữ liệu (Back-end) cho ứng dụng web.",
    "typicalTasks": [
      "Lập trình giao diện tương tác mượt mà bằng React / Vue",
      "Xây dựng RESTful API và GraphQL an toàn bằng Node.js / Go",
      "Tối ưu hóa truy vấn cơ sở dữ liệu và triển khai lên đám mây"
    ],
    "deliverables": [
      "Ứng dụng web hoạt động hoàn chỉnh",
      "Tài liệu API Swagger và bộ mã nguồn chuẩn"
    ],
    "toolsUsed": [
      "VS Code",
      "React / Next.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Git"
    ],
    "workEnvironment": "Văn phòng công nghệ hiện đại hoặc làm việc từ xa (Remote/Hybrid).",
    "difficultiesAndTradeoffs": [
      "Công nghệ thay đổi rất nhanh đòi hỏi tự học liên tục",
      "Áp lực sửa lỗi gấp khi hệ thống chịu tải lớn bị chậm"
    ],
    "coreSkills": [
      "Tư duy logic thuật toán",
      "Kỹ năng tự đọc tài liệu tiếng Anh kỹ thuật",
      "Làm việc nhóm Agile/Scrum"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Toán học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật phần mềm, CNTT hoặc Khoa học máy tính"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Công nghệ thông tin ứng dụng"
      },
      {
        "level": "Đào tạo nghề",
        "description": "Chứng chỉ lập trình Full-stack chuyên sâu"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật phần mềm, CNTT hoặc Khoa học máy tính | Cao đẳng: Cao đẳng Công nghệ thông tin ứng dụng | Đào tạo nghề: Chứng chỉ lập trình Full-stack chuyên sâu",
    "trialActivity": "Tạo một trang web giới thiệu bản thân đơn giản bằng HTML, CSS và JavaScript.",
    "has3D": false,
    "simulationTaskId": "task-lap-trinh",
    "experienceType": "SCENARIO_SIMULATION",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư phần mềm viết mã nguồn",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-ai-machine-learning",
    "title": "Kỹ sư Trí tuệ nhân tạo (AI / Machine Learning Engineer)",
    "englishTitle": "Machine Learning / AI Engineer",
    "synonyms": [
      "Kỹ sư học máy",
      "AI Engineer"
    ],
    "group": "phan-mem-ai",
    "category": "CongNghe",
    "categoryLabel": "Phần mềm, AI và dữ liệu",
    "riasecCodes": [
      "I",
      "R"
    ],
    "shortSummary": "Phát triển và tinh chỉnh các mô hình học sâu, thị giác máy tính và mô hình ngôn ngữ lớn để tự động hóa nhận diện và phân tích thông minh.",
    "typicalTasks": [
      "Thu thập và gán nhãn tập dữ liệu huấn luyện",
      "Huấn luyện và đánh giá mô hình học sâu (CNN, Transformer)",
      "Đóng gói mô hình AI thành API độ trễ thấp phục vụ ứng dụng thực tế"
    ],
    "deliverables": [
      "Mô hình AI đã tối ưu hóa trọng số",
      "Báo cáo độ chính xác (Precision/Recall)"
    ],
    "toolsUsed": [
      "Python",
      "PyTorch",
      "TensorFlow",
      "HuggingFace",
      "NVIDIA CUDA"
    ],
    "workEnvironment": "Phòng lab nghiên cứu AI, các viện công nghệ hoặc công ty phần mềm lớn.",
    "difficultiesAndTradeoffs": [
      "Yêu cầu nền tảng toán học (Đại số tuyến tính, Xác suất thống kê) cực kỳ vững chắc",
      "Chi phí tính toán GPU cao và thời gian huấn luyện dài"
    ],
    "coreSkills": [
      "Tư duy toán học giải tích và xác suất",
      "Thành thạo lập trình Python khoa học dữ liệu",
      "Hiểu biết sâu sắc về kiến trúc mạng nơ-ron"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Tin học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Trí tuệ nhân tạo, Khoa học dữ liệu hoặc Toán - Tin học"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Trí tuệ nhân tạo, Khoa học dữ liệu hoặc Toán - Tin học",
    "trialActivity": "Thử dùng thư viện Scikit-learn phân loại hoa lan theo chiều dài cánh hoa.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư AI huấn luyện mạng nơ-ron sâu",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-phan-tich-du-lieu",
    "title": "Chuyên viên Phân tích Dữ liệu (Data Analyst)",
    "englishTitle": "Data Analyst",
    "synonyms": [
      "Chuyên viên BI",
      "Data Analyst"
    ],
    "group": "phan-mem-ai",
    "category": "CongNghe",
    "categoryLabel": "Phần mềm, AI và dữ liệu",
    "riasecCodes": [
      "I",
      "C",
      "R"
    ],
    "shortSummary": "Khai thác và trực quan hóa các tập dữ liệu lớn nhằm tìm ra quy luật, xu hướng ẩn giấu giúp ban giám đốc ra quyết định kinh doanh chính xác.",
    "typicalTasks": [
      "Truy vấn và làm sạch dữ liệu lớn bằng SQL và Python",
      "Xây dựng các bảng điều khiển trực quan (Dashboard) trên Power BI / Tableau",
      "Thuyết trình kết quả phân tích và đề xuất giải pháp tăng trưởng"
    ],
    "deliverables": [
      "Bảng chỉ số Dashboard trực quan theo thời gian thực",
      "Báo cáo phân tích chuyên sâu các chỉ số kinh doanh"
    ],
    "toolsUsed": [
      "SQL",
      "Power BI",
      "Tableau",
      "Python Pandas",
      "Excel nâng cao"
    ],
    "workEnvironment": "Văn phòng doanh nghiệp bán lẻ, ngân hàng, công ty thương mại điện tử.",
    "difficultiesAndTradeoffs": [
      "Dữ liệu thô thực tế thường lộn xộn và thiếu sót mất nhiều thời gian làm sạch",
      "Phải giải thích số liệu phức tạp cho những người không chuyên về kỹ thuật"
    ],
    "coreSkills": [
      "Kỹ năng kể chuyện bằng dữ liệu (Data Storytelling)",
      "Tư duy phản biện và nhạy cảm với số liệu",
      "Thành thạo truy vấn dữ liệu SQL"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Tin học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Hệ thống thông tin quản lý, Thống kê kinh tế hoặc Khoa học dữ liệu"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Phân tích dữ liệu kinh doanh"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Hệ thống thông tin quản lý, Thống kê kinh tế hoặc Khoa học dữ liệu | Cao đẳng: Cao đẳng Phân tích dữ liệu kinh doanh",
    "trialActivity": "Dùng Excel phân tích bảng chi tiêu gia đình trong 3 tháng và vẽ biểu đồ hình tròn so sánh.",
    "has3D": false,
    "simulationTaskId": "task-lap-trinh",
    "experienceType": "SCENARIO_SIMULATION",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên phân tích dữ liệu trực quan hóa đồ thị",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-du-lieu-lon",
    "title": "Kỹ sư Dữ liệu lớn (Data Engineer)",
    "englishTitle": "Data Engineer",
    "synonyms": [
      "Kỹ sư đường ống dữ liệu",
      "Big Data Engineer"
    ],
    "group": "phan-mem-ai",
    "category": "CongNghe",
    "categoryLabel": "Phần mềm, AI và dữ liệu",
    "riasecCodes": [
      "I",
      "R",
      "C"
    ],
    "shortSummary": "Thiết kế, xây dựng và duy trì các đường ống dữ liệu (Data Pipelines) vận chuyển hàng terabyte dữ liệu mỗi ngày một cách ổn định và an toàn.",
    "typicalTasks": [
      "Xây dựng hệ thống ETL/ELT tự động chuyển đổi dữ liệu",
      "Quản trị kho dữ liệu đám mây (Data Warehouse / Data Lake)",
      "Giám sát hiệu năng và khắc phục sự cố nghẽn dữ liệu"
    ],
    "deliverables": [
      "Hạ tầng kho dữ liệu Snowflake/BigQuery chuẩn hóa",
      "Hệ thống đường ống dữ liệu tự động Airflow"
    ],
    "toolsUsed": [
      "Apache Spark",
      "Airflow",
      "Kafka",
      "SQL",
      "Python",
      "Google BigQuery"
    ],
    "workEnvironment": "Công ty công nghệ, sàn giao dịch, ngân hàng số.",
    "difficultiesAndTradeoffs": [
      "Phải túc trực khi đường ống dữ liệu đêm bị lỗi ảnh hưởng đến báo cáo sáng",
      "Đòi hỏi tư duy tối ưu hóa chi phí lưu trữ đám mây"
    ],
    "coreSkills": [
      "Kiến trúc dữ liệu phân tán",
      "Tối ưu hóa câu lệnh SQL trên bảng hàng tỷ dòng",
      "Lập trình đường ống tự động"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Công nghệ thông tin, Khoa học máy tính hoặc Hệ thống thông tin"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Công nghệ thông tin, Khoa học máy tính hoặc Hệ thống thông tin",
    "trialActivity": "Tìm hiểu khái niệm Data Pipeline và tại sao ngân hàng cần phân tích hàng triệu giao dịch mỗi giây.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư dữ liệu lớn giám sát luồng dữ liệu thời gian thực",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-dien-toan-dam-may-devops",
    "title": "Kỹ sư Điện toán đám mây & DevOps (DevOps / Cloud Engineer)",
    "englishTitle": "Cloud & DevOps Engineer",
    "synonyms": [
      "Kỹ sư hạ tầng đám mây",
      "DevOps Engineer"
    ],
    "group": "phan-mem-ai",
    "category": "CongNghe",
    "categoryLabel": "Phần mềm, AI và dữ liệu",
    "riasecCodes": [
      "R",
      "I",
      "C"
    ],
    "shortSummary": "Tự động hóa quy trình đóng gói phần mềm (CI/CD) và quản trị hạ tầng máy chủ đám mây đảm bảo ứng dụng luôn chạy 24/7 không gián đoạn.",
    "typicalTasks": [
      "Thiết lập chu trình tự động hóa kiểm thử và triển khai CI/CD",
      "Cấu hình cụm máy chủ container Kubernetes",
      "Giám sát tài nguyên máy chủ và bảo vệ chống tấn công mạng"
    ],
    "deliverables": [
      "Đường ống CI/CD tự động hóa hoàn chỉnh",
      "Hạ tầng đám mây định nghĩa bằng mã (Terraform IaC)"
    ],
    "toolsUsed": [
      "Docker",
      "Kubernetes",
      "AWS / GCP",
      "Terraform",
      "GitHub Actions",
      "Linux"
    ],
    "workEnvironment": "Các công ty công nghệ đa quốc gia, làm việc linh hoạt từ xa.",
    "difficultiesAndTradeoffs": [
      "Trực ca on-call đêm để xử lý sự cố máy chủ ngừng hoạt động",
      "Rủi ro cấu hình sai có thể làm sập toàn bộ dịch vụ của công ty"
    ],
    "coreSkills": [
      "Quản trị hệ điều hành Linux chuyên sâu",
      "Tư duy tự động hóa mọi quy trình thủ công",
      "Bảo mật mạng và đám mây"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Tiếng Anh",
      "Vật lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Mạng máy tính, An toàn thông tin hoặc Công nghệ phần mềm"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Quản trị mạng máy tính"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Mạng máy tính, An toàn thông tin hoặc Công nghệ phần mềm | Cao đẳng: Cao đẳng Quản trị mạng máy tính",
    "trialActivity": "Cài đặt một máy ảo Linux Ubuntu trên máy tính cá nhân và thử chạy lệnh kiểm tra dung lượng ổ đĩa.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư DevOps cấu hình hạ tầng đám mây",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "lap-trinh-vien-ung-dung-di-dong",
    "title": "Lập trình viên Ứng dụng di động (Mobile App Developer)",
    "englishTitle": "Mobile Application Developer",
    "synonyms": [
      "Lập trình viên iOS / Android",
      "Mobile Developer"
    ],
    "group": "phan-mem-ai",
    "category": "CongNghe",
    "categoryLabel": "Phần mềm, AI và dữ liệu",
    "riasecCodes": [
      "R",
      "I",
      "A"
    ],
    "shortSummary": "Phát triển các ứng dụng trên smartphone và máy tính bảng chạy hệ điều hành iOS hoặc Android, mang lại trải nghiệm tiện ích cho người dùng.",
    "typicalTasks": [
      "Lập trình chức năng ứng dụng bằng Flutter, React Native, Swift hoặc Kotlin",
      "Tích hợp bản đồ GPS, camera, cảm biến sinh trắc học và thanh toán số",
      "Tối ưu hóa thời lượng pin và xuất bản lên App Store / Google Play"
    ],
    "deliverables": [
      "Tệp cài đặt ứng dụng APK / IPA",
      "Trang thông tin xuất bản ứng dụng trên kho ứng dụng"
    ],
    "toolsUsed": [
      "Flutter",
      "React Native",
      "Swift / SwiftUI",
      "Kotlin",
      "Xcode",
      "Android Studio"
    ],
    "workEnvironment": "Công ty phần mềm di động, startup công nghệ, làm việc tự do.",
    "difficultiesAndTradeoffs": [
      "Phải tương thích với hàng trăm kích thước màn hình và đời máy khác nhau",
      "Quy trình kiểm duyệt gắt gao của Apple App Store"
    ],
    "coreSkills": [
      "Tư duy thiết kế trải nghiệm người dùng trên màn hình cảm ứng",
      "Tối ưu hóa bộ nhớ và hiệu năng di động",
      "Lập trình đa nền tảng"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Toán học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật phần mềm hoặc Công nghệ thông tin"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Lập trình ứng dụng di động"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật phần mềm hoặc Công nghệ thông tin | Cao đẳng: Cao đẳng Lập trình ứng dụng di động",
    "trialActivity": "Tải Flutter hoặc React Native về và chạy thử ứng dụng Hello World trên điện thoại của mình.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Lập trình viên di động thử nghiệm giao diện trên smartphone",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-kiem-thu-phan-mem-qa-qc",
    "title": "Kỹ sư Kiểm thử phần mềm (Software QA / Automation Tester)",
    "englishTitle": "Software QA / Test Automation Engineer",
    "synonyms": [
      "Tester",
      "Chuyên viên kiểm tra chất lượng phần mềm"
    ],
    "group": "phan-mem-ai",
    "category": "CongNghe",
    "categoryLabel": "Phần mềm, AI và dữ liệu",
    "riasecCodes": [
      "C",
      "I"
    ],
    "shortSummary": "Tìm kiếm lỗi, kiểm tra độ bảo mật và tính khả dụng của phần mềm để đảm bảo sản phẩm xuất xưởng không gặp lỗi khi tới tay người dùng.",
    "typicalTasks": [
      "Viết kịch bản kiểm thử chi tiết cho từng tính năng (Test Case)",
      "Viết mã kiểm thử tự động bằng Selenium hoặc Cypress",
      "Thực hiện kiểm thử tải (Load Testing) mô phỏng hàng triệu người truy cập"
    ],
    "deliverables": [
      "Báo cáo lỗi chi tiết kèm video bằng chứng (Bug Report)",
      "Bộ kiểm thử tự động hồi quy (Regression Test Suite)"
    ],
    "toolsUsed": [
      "Jira",
      "Postman",
      "Selenium",
      "Cypress",
      "JMeter",
      "Python/Java"
    ],
    "workEnvironment": "Công ty gia công phần mềm quốc tế, ngân hàng số, công ty thương mại điện tử.",
    "difficultiesAndTradeoffs": [
      "Phải kiểm tra đi kiểm tra lại các tính năng quen thuộc dễ gây nhàm chán",
      "Áp lực tranh luận kỹ thuật với lập trình viên về mức độ nghiêm trọng của lỗi"
    ],
    "coreSkills": [
      "Tư duy cẩn trọng, tỉ mỉ",
      "Khả năng phân tích các tình huống ngoại lệ",
      "Kỹ năng lập trình kiểm thử tự động"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Toán học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Công nghệ thông tin, Hệ thống thông tin"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Công nghệ phần mềm"
      },
      {
        "level": "Đào tạo nghề",
        "description": "Khóa đào tạo Software Tester chuyên nghiệp (ISTQB)"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Công nghệ thông tin, Hệ thống thông tin | Cao đẳng: Cao đẳng Công nghệ phần mềm | Đào tạo nghề: Khóa đào tạo Software Tester chuyên nghiệp (ISTQB)",
    "trialActivity": "Thử vào một trang web mua sắm bất kỳ và tìm xem có nút bấm nào bị lỗi font chữ hoặc bấm không ăn.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư QA kiểm thử tự động hóa trên màn hình máy tính",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "quan-ly-san-pham-cong-nghe",
    "title": "Quản lý sản phẩm công nghệ (Product Manager - PM)",
    "englishTitle": "Digital Product Manager",
    "synonyms": [
      "Giám đốc sản phẩm",
      "Product Owner"
    ],
    "group": "phan-mem-ai",
    "category": "CongNghe",
    "categoryLabel": "Phần mềm, AI và dữ liệu",
    "riasecCodes": [
      "E",
      "I",
      "S"
    ],
    "shortSummary": "Định hướng tầm nhìn, chiến lược tính năng và điều phối sự phối hợp giữa đội lập trình, thiết kế và kinh doanh để tạo ra sản phẩm thành công.",
    "typicalTasks": [
      "Nghiên cứu thị trường và phỏng vấn thấu hiểu nỗi đau của người dùng",
      "Viết tài liệu đặc tả yêu cầu sản phẩm (PRD)",
      "Ưu tiên danh sách tính năng cần phát triển và đo lường chỉ số giữ chân người dùng"
    ],
    "deliverables": [
      "Tài liệu yêu cầu sản phẩm (Product Requirement Document)",
      "Lộ trình phát triển sản phẩm (Product Roadmap)"
    ],
    "toolsUsed": [
      "Figma",
      "Jira",
      "Notion",
      "Mixpanel",
      "Google Analytics"
    ],
    "workEnvironment": "Công ty công nghệ, startup tăng trưởng nhanh.",
    "difficultiesAndTradeoffs": [
      "Chịu trách nhiệm về sự thành bại của sản phẩm nhưng không có quyền chỉ huy trực tiếp ai",
      "Thường xuyên phải nói 'không' với nhiều yêu cầu từ các phòng ban"
    ],
    "coreSkills": [
      "Kỹ năng giao tiếp và thuyết phục xuất sắc",
      "Tư duy kinh doanh kết hợp hiểu biết công nghệ",
      "Ra quyết định dựa trên dữ liệu"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Ngữ văn",
      "Tiếng Anh",
      "Giáo dục kinh tế và pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị kinh doanh, CNTT hoặc Hệ thống thông tin"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị kinh doanh, CNTT hoặc Hệ thống thông tin",
    "trialActivity": "Chọn một ứng dụng em thích nhất trên điện thoại và viết ra 3 tính năng em muốn cải tiến.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Quản lý sản phẩm thảo luận lộ trình cùng đội ngũ",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "lap-trinh-vien-tro-choi-dien-tu",
    "title": "Lập trình viên Trò chơi điện tử (Game Developer)",
    "englishTitle": "Game Developer / Gameplay Programmer",
    "synonyms": [
      "Kỹ sư làm game",
      "Gameplay Programmer"
    ],
    "group": "phan-mem-ai",
    "category": "CongNghe",
    "categoryLabel": "Phần mềm, AI và dữ liệu",
    "riasecCodes": [
      "R",
      "A",
      "I"
    ],
    "shortSummary": "Hiện thực hóa ý tưởng trò chơi bằng mã nguồn, xây dựng cơ chế vật lý va chạm, trí tuệ nhân tạo của quái vật và hiệu ứng hình ảnh sống động.",
    "typicalTasks": [
      "Lập trình cơ chế di chuyển, chiến đấu và tương tác nhân vật trong game",
      "Tối ưu hóa tốc độ khung hình (FPS) trên máy cấu hình yếu",
      "Tích hợp âm thanh, hiệu ứng hạt và hệ thống lưu điểm"
    ],
    "deliverables": [
      "Bản build trò chơi chạy thử nghiệm (Playable Demo)",
      "Bộ mã nguồn logic trò chơi sạch sẽ"
    ],
    "toolsUsed": [
      "Unity (C#)",
      "Unreal Engine (C++ / Blueprints)",
      "Blender",
      "Visual Studio"
    ],
    "workEnvironment": "Các studio game indie hoặc các hãng sản xuất game lớn.",
    "difficultiesAndTradeoffs": [
      "Giai đoạn nước rút trước khi phát hành (crunch time) làm việc ngoài giờ nhiều",
      "Thuật toán toán học hình học không gian 3D tương đối nặng"
    ],
    "coreSkills": [
      "Lập trình C# hoặc C++",
      "Tư duy vật lý và hình học không gian",
      "Niềm đam mê sâu sắc với cơ chế game"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Vật lý",
      "Tin học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật phần mềm hoặc Cử nhân Thiết kế game & Đa phương tiện"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Lập trình game"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật phần mềm hoặc Cử nhân Thiết kế game & Đa phương tiện | Cao đẳng: Cao đẳng Lập trình game",
    "trialActivity": "Tải phần mềm Unity miễn phí và làm theo video hướng dẫn tạo một quả bóng nảy qua các chướng ngại vật.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Lập trình viên trò chơi thử nghiệm môi trường 3D",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-khoa-hoc-du-lieu",
    "title": "Kỹ sư Khoa học dữ liệu (Data Scientist)",
    "englishTitle": "Data Scientist",
    "synonyms": [
      "Nhà khoa học dữ liệu",
      "Data Scientist"
    ],
    "group": "phan-mem-ai",
    "category": "CongNghe",
    "categoryLabel": "Phần mềm, AI và dữ liệu",
    "riasecCodes": [
      "I",
      "C",
      "A"
    ],
    "shortSummary": "Sử dụng toán học cao cấp, thống kê và học máy để giải quyết các bài toán dự báo phức tạp như dự đoán nhu cầu tiêu thụ hay phát hiện gian lận.",
    "typicalTasks": [
      "Xây dựng các mô hình toán thống kê dự báo",
      "Kiểm định giả thuyết A/B Testing để đo lường tác động của tính năng mới",
      "Khám phá các liên kết phi tuyến tính trong tập dữ liệu đa chiều"
    ],
    "deliverables": [
      "Mô hình toán dự báo có độ tin cậy cao",
      "Bài báo cáo khoa học dữ liệu đính kèm khuyến nghị kinh doanh"
    ],
    "toolsUsed": [
      "Python (NumPy, SciPy, Scikit-learn)",
      "R",
      "Jupyter Notebook",
      "SQL"
    ],
    "workEnvironment": "Tập đoàn viễn thông, bảo hiểm, viện nghiên cứu kinh tế số.",
    "difficultiesAndTradeoffs": [
      "Đòi hỏi bằng cấp chuyên môn sâu (Thạc sĩ/Tiến sĩ là một lợi thế)",
      "Nhiều thử nghiệm mô hình thất bại trước khi tìm ra kết quả đúng"
    ],
    "coreSkills": [
      "Toán xác suất thống kê nâng cao",
      "Kỹ năng lập trình phân tích dữ liệu",
      "Khả năng chuyển hóa bài toán thực tế thành bài toán toán học"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Tin học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Toán học, Khoa học dữ liệu, Khoa học máy tính hoặc Thống kê"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Toán học, Khoa học dữ liệu, Khoa học máy tính hoặc Thống kê",
    "trialActivity": "Tìm hiểu thuật toán dự báo thời tiết dựa trên lịch sử nhiệt độ và độ ẩm các năm trước.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhà khoa học dữ liệu phân tích mô hình xác suất",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-thuat-vien-chan-doan-o-to",
    "title": "Kỹ thuật viên chẩn đoán và sửa chữa ô tô (Automotive Diagnostic Technician)",
    "englishTitle": "Automotive Diagnostic & Service Technician",
    "synonyms": [
      "Thợ sửa chữa ô tô",
      "Kỹ thuật viên xưởng dịch vụ ô tô"
    ],
    "group": "o-to-robot",
    "category": "CoKhi",
    "categoryLabel": "Ô tô, cơ điện tử và robot",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Sử dụng máy đọc lỗi chuyên dụng và dụng cụ cơ khí chính xác để kiểm tra động cơ, hệ thống phanh, đánh lửa và điện ô tô hiện đại.",
    "typicalTasks": [
      "Kết nối máy quét OBD-II để đọc mã lỗi chẩn đoán (DTC)",
      "Kiểm tra điện áp ắc quy, bugi đánh lửa và áp suất lọc gió động cơ",
      "Bảo dưỡng hệ thống phanh ABS, thay dầu nhớt và căn chỉnh góc đặt bánh xe"
    ],
    "deliverables": [
      "Biên bản nghiệm thu sửa chữa ô tô",
      "Báo cáo thông số chẩn đoán động cơ đạt chuẩn"
    ],
    "toolsUsed": [
      "Máy chẩn đoán OBD-II",
      "Đồng hồ vạn năng số",
      "Cờ lê cân lực",
      "Cầu nâng 2 trụ thủy lực"
    ],
    "workEnvironment": "Xưởng dịch vụ chính hãng (Toyota, Hyundai, VinFast, Mercedes-Benz), trung tâm bảo hành ô tô hiện đại.",
    "difficultiesAndTradeoffs": [
      "Làm việc với dầu mỡ, nhiệt độ động cơ và tiếng ồn máy móc",
      "Cần nâng vác vật nặng và đứng liên tục nhiều giờ"
    ],
    "coreSkills": [
      "Khả năng đọc hiểu sơ đồ mạch điện xe hơi",
      "Thao tác cơ khí chính xác, an toàn",
      "Tư duy chuẩn đoán suy luận logic lỗi"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Công nghệ",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật Ô tô hoặc Cơ khí động lực"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Công nghệ Ô tô"
      },
      {
        "level": "Trung cấp",
        "description": "Trung cấp Kỹ thuật Sửa chữa Ô tô"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật Ô tô hoặc Cơ khí động lực | Cao đẳng: Cao đẳng Công nghệ Ô tô | Trung cấp: Trung cấp Kỹ thuật Sửa chữa Ô tô",
    "trialActivity": "Mở nắp ca-pô ô tô và quan sát vị trí que thăm dầu động cơ, bình ắc quy và hộp lọc gió.",
    "has3D": true,
    "simulationTaskId": "task-automotive-3d",
    "experienceType": "3D_INTERACTIVE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ thuật viên ô tô kiểm tra khoang động cơ",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-thiet-ke-o-to-dien",
    "title": "Kỹ sư Thiết kế ô tô điện (EV Systems Design Engineer)",
    "englishTitle": "Electric Vehicle (EV) Systems Engineer",
    "synonyms": [
      "Kỹ sư xe điện",
      "EV Powertrain Engineer"
    ],
    "group": "o-to-robot",
    "category": "CoKhi",
    "categoryLabel": "Ô tô, cơ điện tử và robot",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Nghiên cứu và thiết kế hệ thống truyền động điện (EV Powertrain), bộ biến tần inverter và tích hợp hệ thống điều khiển thông minh trên xe điện.",
    "typicalTasks": [
      "Mô phỏng động lực học và hiệu suất tiêu thụ điện của xe trên phần mềm MATLAB",
      "Thiết kế bố trí động cơ điện và hệ thống phanh tái sinh năng lượng",
      "Tối ưu hóa giảm trọng lượng khung gầm bằng vật liệu composite"
    ],
    "deliverables": [
      "Mô hình CAD 3D hệ thống dẫn động điện",
      "Báo cáo mô phỏng quãng đường di chuyển sau một lần sạc"
    ],
    "toolsUsed": [
      "MATLAB / Simulink",
      "Catia",
      "SolidWorks",
      "Ansys Maxwell"
    ],
    "workEnvironment": "Trung tâm R&D hãng sản xuất ô tô điện toàn cầu.",
    "difficultiesAndTradeoffs": [
      "Công nghệ pin và điện cao áp (400V - 800V) đòi hỏi quy chuẩn an toàn điện cực kỳ khắt khe",
      "Áp lực chạy đua công nghệ với các hãng xe điện quốc tế"
    ],
    "coreSkills": [
      "Kiến thức máy điện và điện tử công suất",
      "Mô phỏng động lực học xe hơi",
      "Ngoại ngữ kỹ thuật"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Toán học",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật Ô tô, Kỹ thuật Điện - Điện tử hoặc Cơ điện tử"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật Ô tô, Kỹ thuật Điện - Điện tử hoặc Cơ điện tử",
    "trialActivity": "Tìm hiểu nguyên lý phanh tái sinh: xe điện thu hồi động năng thành điện năng như thế nào khi giảm tốc độ.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Khung gầm ô tô điện và hệ thống pin hiện đại",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-pin-va-tram-sac-xe-dien",
    "title": "Kỹ sư Pin và Trạm sạc xe điện (EV Battery & Charging Station Engineer)",
    "englishTitle": "EV Battery & Charging Infrastructure Engineer",
    "synonyms": [
      "Kỹ sư BMS",
      "Kỹ sư hệ thống pin xe điện"
    ],
    "group": "o-to-robot",
    "category": "CoKhi",
    "categoryLabel": "Ô tô, cơ điện tử và robot",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Phát triển hệ thống quản lý pin thông minh (BMS), kiểm soát nhiệt độ làm mát và xây dựng mạng lưới trạm sạc nhanh cao thế.",
    "typicalTasks": [
      "Lập trình thuật toán ước tính dung lượng pin (SOC) và tuổi thọ pin (SOH)",
      "Thiết kế mạch tản nhiệt chất lỏng bảo vệ các cell pin",
      "Kiểm định an toàn trạm sạc nhanh DC 150kW - 350kW theo tiêu chuẩn CCS2"
    ],
    "deliverables": [
      "Hệ thống phần mềm quản lý pin BMS đạt chuẩn",
      "Bản vẽ thiết kế trạm sạc điện cao thế"
    ],
    "toolsUsed": [
      "Phần mềm mô phỏng nhiệt CFD",
      "Thiết bị đo nạp xả pin công nghiệp",
      "CANoe"
    ],
    "workEnvironment": "Nhà máy sản xuất pin (VinES, CATL), công ty hạ tầng trạm sạc xanh.",
    "difficultiesAndTradeoffs": [
      "Làm việc gần hệ thống pin lưu trữ năng lượng lớn tiềm ẩn nguy cơ chập cháy",
      "Phải thường xuyên kiểm tra thực địa các trạm sạc ngoài trời"
    ],
    "coreSkills": [
      "Hóa lý vật liệu pin Lithium-ion",
      "Kỹ thuật tản nhiệt chất lỏng",
      "Tiêu chuẩn an toàn điện cao áp"
    ],
    "highSchoolSubjects": [
      "Hóa học",
      "Vật lý",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật Hóa học, Kỹ thuật Năng lượng hoặc Kỹ thuật Điện"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật Hóa học, Kỹ thuật Năng lượng hoặc Kỹ thuật Điện",
    "trialActivity": "Xem clip mổ xẻ một bộ pin xe điện để thấy hàng nghìn viên cell pin nhỏ được kết nối với nhau.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư kiểm tra cell pin xe điện và hệ thống tản nhiệt",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-robot-va-canh-tay-may",
    "title": "Kỹ sư Robot và cánh tay máy công nghiệp (Industrial Robotics Engineer)",
    "englishTitle": "Industrial Robotics Engineer",
    "synonyms": [
      "Kỹ sư robot công nghiệp",
      "Robotics Engineer"
    ],
    "group": "o-to-robot",
    "category": "CoKhi",
    "categoryLabel": "Ô tô, cơ điện tử và robot",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Lập trình quỹ đạo chuyển động, tích hợp thị giác máy và vận hành các cánh tay robot hàn, gắp, sơn tự động trong dây chuyền sản xuất.",
    "typicalTasks": [
      "Lập trình điểm di chuyển và vận tốc cánh tay robot 6 bậc tự do",
      "Tích hợp camera AI nhận diện vị trí linh kiện trên băng chuyền",
      "Hiệu chuẩn sai số cơ khí đảm bảo độ lặp lại chính xác dưới 0.05mm"
    ],
    "deliverables": [
      "Chương trình điều khiển robot tự động",
      "Bản vẽ vùng an toàn và lồng bảo vệ robot"
    ],
    "toolsUsed": [
      "Phần mềm RobotStudio (ABB)",
      "KUKA Sim",
      "ROS (Robot Operating System)",
      "Python/C++"
    ],
    "workEnvironment": "Nhà máy lắp ráp điện tử, ô tô, logistics tự động thông minh.",
    "difficultiesAndTradeoffs": [
      "Nguy cơ va chạm cơ khí nếu cài đặt sai quỹ đạo di chuyển của robot",
      "Làm việc trong môi trường nhà máy nhiều tiếng ồn và khói hàn"
    ],
    "coreSkills": [
      "Động học và động lực học robot",
      "Lập trình quỹ đạo điều khiển",
      "An toàn tự động hóa công nghiệp"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Vật lý",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật Robot, Cơ điện tử hoặc Điều khiển & Tự động hóa"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật Robot, Cơ điện tử hoặc Điều khiển & Tự động hóa",
    "trialActivity": "Xem video cánh tay robot hàn thân vỏ ô tô trong nhà máy VinFast hoặc Hyundai.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Cánh tay robot công nghiệp tự động hàn linh kiện",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-co-dien-tu-tu-dong-hoa",
    "title": "Kỹ sư Cơ điện tử tự động hóa (Mechatronics Automation Engineer)",
    "englishTitle": "Mechatronics & Factory Automation Engineer",
    "synonyms": [
      "Kỹ sư tự động hóa",
      "Kỹ sư PLC"
    ],
    "group": "o-to-robot",
    "category": "CoKhi",
    "categoryLabel": "Ô tô, cơ điện tử và robot",
    "riasecCodes": [
      "R",
      "I",
      "C"
    ],
    "shortSummary": "Kết hợp cơ khí chính xác, mạch điện tử và lập trình điều khiển PLC để tự động hóa hoàn toàn các dây chuyền chế biến, đóng gói.",
    "typicalTasks": [
      "Lập trình bộ điều khiển logic khả trình PLC (Siemens, Mitsubishi)",
      "Thiết kế hệ thống giao diện điều khiển giám sát SCADA / HMI",
      "Lắp đặt và hiệu chỉnh các cảm biến quang, cảm biến tiệm cận và van khí nén"
    ],
    "deliverables": [
      "Tủ điện điều khiển tự động hoàn chỉnh",
      "Chương trình điều khiển PLC và giao diện HMI"
    ],
    "toolsUsed": [
      "Siemens TIA Portal",
      "GX Works",
      "EPLAN Electric",
      "SolidWorks"
    ],
    "workEnvironment": "Nhà máy sữa, bia nước giải khát, xí nghiệp dược phẩm, chế biến thực phẩm.",
    "difficultiesAndTradeoffs": [
      "Thường xuyên phải đi công tác theo dự án lắp đặt dây chuyền mới",
      "Áp lực dây chuyền ngừng hoạt động làm chậm tiến độ xuất hàng"
    ],
    "coreSkills": [
      "Lập trình PLC thang điều khiển",
      "Đọc bản vẽ tủ điện công nghiệp",
      "Hiểu biết hệ thống khí nén và thủy lực"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Tin học",
      "Công nghệ"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Cơ điện tử, Kỹ thuật Điều khiển & Tự động hóa"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Điện tự động hóa công nghiệp"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Cơ điện tử, Kỹ thuật Điều khiển & Tự động hóa | Cao đẳng: Cao đẳng Điện tự động hóa công nghiệp",
    "trialActivity": "Tìm hiểu nguyên lý chiếc cảm biến cửa tự động ở siêu thị: làm sao cửa biết có người tới để tự mở.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư lập trình tủ điều khiển PLC trong nhà máy",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-thuat-vien-bao-duong-xe-may-dien",
    "title": "Kỹ thuật viên bảo dưỡng xe máy điện thông minh (Smart E-Motorbike Technician)",
    "englishTitle": "Electric Two-Wheeler Technician",
    "synonyms": [
      "Kỹ thuật viên xe máy điện",
      "Thợ xe điện"
    ],
    "group": "o-to-robot",
    "category": "CoKhi",
    "categoryLabel": "Ô tô, cơ điện tử và robot",
    "riasecCodes": [
      "R"
    ],
    "shortSummary": "Kiểm tra động cơ điện gắn trục (Hub motor), thay thế bộ điều tốc (Controller) và cập nhật phần mềm kết nối thông minh cho xe máy điện.",
    "typicalTasks": [
      "Đo điện áp và cân bằng dung lượng các khối pin xe máy điện",
      "Kiểm tra hệ thống dây điện, cảm biến tay ga và phanh ngắt điện",
      "Kết nối điện thoại để chẩn đoán lỗi phần mềm xe máy điện thông minh"
    ],
    "deliverables": [
      "Phiếu bảo dưỡng định kỳ xe máy điện",
      "Bộ pin xe máy điện đã phục hồi dung lượng"
    ],
    "toolsUsed": [
      "Đồng hồ đo vạn năng",
      "Máy cân bằng cell pin",
      "Phần mềm kết nối Bluetooth chẩn đoán"
    ],
    "workEnvironment": "Cửa hàng bảo hành xe máy điện (VinFast, Dat Bike, Yadea).",
    "difficultiesAndTradeoffs": [
      "Xử lý các tình huống xe bị ngập nước chập mạch điện vào mùa mưa",
      "Công việc cơ khí đòi hỏi sự cẩn thận với điện áp 60V-72V"
    ],
    "coreSkills": [
      "Hiểu biết về mạch điều khiển xe điện",
      "Khéo léo tháo lắp các chi tiết nhựa thân xe",
      "Kỹ năng tư vấn khách hàng"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Công nghệ"
    ],
    "entryPathways": [
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Sửa chữa xe máy & xe điện"
      },
      {
        "level": "Trung cấp",
        "description": "Trung cấp Kỹ thuật Điện tử xe cộ"
      },
      {
        "level": "Đào tạo nghề",
        "description": "Khóa đào tạo sửa chữa xe máy điện chuyên nghiệp"
      }
    ],
    "entryPathway": "Cao đẳng: Cao đẳng Sửa chữa xe máy & xe điện | Trung cấp: Trung cấp Kỹ thuật Điện tử xe cộ | Đào tạo nghề: Khóa đào tạo sửa chữa xe máy điện chuyên nghiệp",
    "trialActivity": "Xem một chiếc xe máy điện Dat Bike hay VinFast và tìm xem vị trí bộ điều khiển nằm ở đâu.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ thuật viên kiểm tra hệ thống điện xe máy điện",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-khi-dong-hoc-va-khung-gam",
    "title": "Kỹ sư Khí động học và Khung gầm ô tô (Aerodynamics & Chassis Engineer)",
    "englishTitle": "Aerodynamics & Chassis Engineer",
    "synonyms": [
      "Kỹ sư khí động học",
      "Chassis Engineer"
    ],
    "group": "o-to-robot",
    "category": "CoKhi",
    "categoryLabel": "Ô tô, cơ điện tử và robot",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Tối ưu hóa hình dáng khí động học để giảm lực cản gió, tăng độ bám đường và thiết kế hệ thống treo êm ái cho xe ô tô.",
    "typicalTasks": [
      "Mô phỏng dòng khí chạy quanh thân xe trong hầm gió ảo bằng CFD",
      "Thiết kế và thử nghiệm hệ thống treo độc lập đa liên kết",
      "Đo độ rung giật, tiếng ồn gió và độ ổn định khi xe vào cua tốc độ cao"
    ],
    "deliverables": [
      "Báo cáo hệ số cản gió Cd đạt chuẩn khí động học",
      "Bản vẽ kết cấu khung gầm và hệ thống treo xe"
    ],
    "toolsUsed": [
      "Ansys Fluent",
      "STAR-CCM+",
      "CATIA Chassis",
      "Thiết bị đo gia tốc"
    ],
    "workEnvironment": "Trung tâm thiết kế thân vỏ xe hơi, phòng thí nghiệm hầm gió.",
    "difficultiesAndTradeoffs": [
      "Mô phỏng luồng khí đòi hỏi siêu máy tính chạy liên tục nhiều ngày",
      "Cân bằng khó khăn giữa tính thẩm mỹ thời trang và hiệu năng khí động học"
    ],
    "coreSkills": [
      "Cơ học chất lưu và khí động học",
      "Thiết kế hệ thống treo và truyền lực",
      "Phân tích phần tử hữu hạn FEA"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật Hàng không, Kỹ thuật Ô tô hoặc Cơ kỹ thuật"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật Hàng không, Kỹ thuật Ô tô hoặc Cơ kỹ thuật",
    "trialActivity": "Tìm hiểu tại sao cánh gió sau của xe thể thao lại giúp xe bám đường tốt hơn khi chạy nhanh.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Mô phỏng khí động học dòng khí trên thân xe ô tô",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "giam-sat-chat-luong-lap-rap-o-to",
    "title": "Giám sát chất lượng dây chuyền lắp ráp ô tô (Automotive QA/QC Inspector)",
    "englishTitle": "Automotive Assembly QC Inspector",
    "synonyms": [
      "Giám sát QA nhà máy ô tô",
      "KCS lắp ráp xe hơi"
    ],
    "group": "o-to-robot",
    "category": "CoKhi",
    "categoryLabel": "Ô tô, cơ điện tử và robot",
    "riasecCodes": [
      "C",
      "R"
    ],
    "shortSummary": "Kiểm tra khe hở thân vỏ, độ khít gioăng cao su, chất lượng sơn và thử nghiệm xe trên đường thử chuyên dụng trước khi xuất xưởng.",
    "typicalTasks": [
      "Dùng dưỡng đo khe hở và máy đo độ dày lớp sơn tĩnh điện",
      "Thử nghiệm phun mưa áp lực cao để phát hiện rò rỉ nước vào cabin",
      "Lái thử xe trên đường dằn xóc, đường nghiêng để kiểm tra tiếng ồn bất thường"
    ],
    "deliverables": [
      "Biên bản kiểm tra xuất xưởng xe mới (PDI)",
      "Báo cáo thống kê lỗi lắp ráp theo ca"
    ],
    "toolsUsed": [
      "Thước đo khe hở laser",
      "Máy đo độ dày lớp sơn",
      "Đường thử xe đa địa hình chuẩn quốc tế"
    ],
    "workEnvironment": "Cuối dây chuyền lắp ráp tại các nhà máy ô tô hiện đại.",
    "difficultiesAndTradeoffs": [
      "Áp lực dừng dây chuyền nếu phát hiện lỗi hàng loạt",
      "Phải kiểm tra tỉ mỉ hàng trăm tiêu chí cho mỗi chiếc xe"
    ],
    "coreSkills": [
      "Tính cẩn trọng, không bỏ sót chi tiết",
      "Hiểu rõ tiêu chuẩn chất lượng xuất xưởng ô tô",
      "Kỹ năng lái thử và cảm nhận xe tốt"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Công nghệ"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Công nghệ Ô tô hoặc Quản lý chất lượng công nghiệp"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Kỹ thuật Công nghệ Ô tô"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Công nghệ Ô tô hoặc Quản lý chất lượng công nghiệp | Cao đẳng: Cao đẳng Kỹ thuật Công nghệ Ô tô",
    "trialActivity": "Quan sát khe hở giữa nắp capo và tai xe của một chiếc ô tô xem có đều tăm tắp từ trên xuống dưới không.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Giám sát kiểm tra khe hở thân xe trên dây chuyền lắp ráp",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-xe-tu-hanh-adas",
    "title": "Kỹ sư Xe tự hành và ADAS (Autonomous Driving / ADAS Engineer)",
    "englishTitle": "Autonomous Vehicle & ADAS Systems Engineer",
    "synonyms": [
      "Kỹ sư xe tự lái",
      "ADAS Engineer"
    ],
    "group": "o-to-robot",
    "category": "CoKhi",
    "categoryLabel": "Ô tô, cơ điện tử và robot",
    "riasecCodes": [
      "I",
      "R"
    ],
    "shortSummary": "Phát triển các thuật toán nhận diện làn đường, cảnh báo va chạm và tự động giữ khoảng cách sử dụng camera AI, Radar và cảm biến LiDAR.",
    "typicalTasks": [
      "Hợp nhất dữ liệu đa cảm biến (Sensor Fusion) giữa Camera, Radar và LiDAR",
      "Lập trình thuật toán tự động giữ làn đường và phanh khẩn cấp tự động (AEB)",
      "Thử nghiệm xe tự hành trong môi trường mô phỏng ảo và trên sa hình thực tế"
    ],
    "deliverables": [
      "Module phần mềm hỗ trợ lái xe an toàn ADAS",
      "Tài liệu kiểm thử an toàn tiêu chuẩn ISO 26262"
    ],
    "toolsUsed": [
      "LiDAR",
      "Radar ô tô",
      "ROS 2",
      "Python / C++",
      "CARLA Simulator"
    ],
    "workEnvironment": "Trung tâm nghiên cứu xe tự hành, công ty công nghệ ô tô thông minh.",
    "difficultiesAndTradeoffs": [
      "Trách nhiệm an toàn sinh mạng con người cực cao khi xe tự lái",
      "Điều kiện giao thông thực tế phức tạp đòi hỏi thuật toán xử lý hàng triệu tình huống bất ngờ"
    ],
    "coreSkills": [
      "Thị giác máy tính và xử lý ảnh",
      "Thuật toán hợp nhất dữ liệu cảm biến",
      "Tiêu chuẩn an toàn chức năng ô tô"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Tin học",
      "Vật lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật Máy tính, Tự động hóa hoặc Khoa học Máy tính"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật Máy tính, Tự động hóa hoặc Khoa học Máy tính",
    "trialActivity": "Tìm hiểu nguyên lý cảm biến LiDAR phát ra hàng triệu tia laser vô hình để vẽ bản đồ 3D xung quanh xe.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Xe tự hành với cảm biến LiDAR quét môi trường xung quanh",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-co-van-dich-vu-o-to",
    "title": "Chuyên viên Cố vấn Dịch vụ Ô tô (Automotive Service Advisor)",
    "englishTitle": "Automotive Service Advisor",
    "synonyms": [
      "Cố vấn dịch vụ",
      "Service Advisor ô tô"
    ],
    "group": "o-to-robot",
    "category": "CoKhi",
    "categoryLabel": "Ô tô, cơ điện tử và robot",
    "riasecCodes": [
      "E",
      "S",
      "R"
    ],
    "shortSummary": "Tiếp nhận xe từ khách hàng, lắng nghe mô tả triệu chứng hư hỏng, lập báo giá sửa chữa và theo dõi tiến độ giao xe đúng hẹn.",
    "typicalTasks": [
      "Khảo sát nhanh tình trạng xe cùng khách hàng tại khu vực tiếp nhận",
      "Lập phiếu yêu cầu sửa chữa và dự toán chi phí phụ tùng",
      "Giải thích rõ ràng các hạng mục cần thay thế và tư vấn gói bảo dưỡng định kỳ"
    ],
    "deliverables": [
      "Lệnh sửa chữa phân bổ cho xưởng (Repair Order)",
      "Bảng báo giá và hóa đơn thanh toán minh bạch"
    ],
    "toolsUsed": [
      "Phần mềm quản lý đại lý ô tô DMS",
      "Bảng tra cứu mã phụ tùng chính hãng EPC"
    ],
    "workEnvironment": "Phòng tiếp khách xưởng dịch vụ đại lý ô tô chính hãng.",
    "difficultiesAndTradeoffs": [
      "Xử lý cảm xúc lo lắng hoặc bức xúc của khách hàng khi xe bị sự cố nặng",
      "Cân bằng giữa doanh thu phụ tùng và sự hài lòng lâu dài của khách"
    ],
    "coreSkills": [
      "Kỹ năng giao tiếp thấu hiểu khách hàng",
      "Kiến thức kỹ thuật ô tô cơ bản để giải thích dễ hiểu",
      "Kỹ năng lập dự toán và quản lý thời gian"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Ngữ văn",
      "Công nghệ"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị kinh doanh hoặc Kỹ sư Công nghệ Ô tô có thiên hướng kinh doanh"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Công nghệ Ô tô"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị kinh doanh hoặc Kỹ sư Công nghệ Ô tô có thiên hướng kinh doanh | Cao đẳng: Cao đẳng Công nghệ Ô tô",
    "trialActivity": "Cùng bố mẹ đưa xe đi bảo dưỡng và quan sát các bước cố vấn dịch vụ đón tiếp và ghi chép tình trạng xe.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Cố vấn dịch vụ tư vấn hạng mục bảo dưỡng xe cho khách hàng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "kien-truc-su-cong-trinh",
    "title": "Kiến trúc sư công trình dân dụng (Architect)",
    "englishTitle": "Architectural Design Engineer",
    "synonyms": [
      "Kiến trúc sư xây dựng",
      "Architect"
    ],
    "group": "kien-truc-noi-that",
    "category": "KienTruc",
    "categoryLabel": "Kiến trúc, quy hoạch và nội thất",
    "riasecCodes": [
      "A",
      "I",
      "R"
    ],
    "shortSummary": "Sáng tạo ý tưởng mặt bằng, hình khối không gian, tính toán đón gió đón nắng và thiết kế hồ sơ thi công cho ngôi nhà ở, trường học, bệnh viện.",
    "typicalTasks": [
      "Lên ý tưởng mặt bằng công năng và phối cảnh ngoại thất 3D",
      "Tính toán hướng nắng đổ bóng và thông gió tự nhiên theo thời gian trong ngày",
      "Triển khai hồ sơ bản vẽ kỹ thuật kiến trúc xin cấp phép xây dựng"
    ],
    "deliverables": [
      "Hồ sơ thiết kế ý tưởng kiến trúc hoàn chỉnh",
      "Bản vẽ chi tiết thi công (Shop drawing) và mô hình phối cảnh 3D"
    ],
    "toolsUsed": [
      "Autodesk Revit",
      "AutoCAD",
      "SketchUp",
      "Enscape / Lumion"
    ],
    "workEnvironment": "Văn phòng thiết kế kiến trúc, công trường khảo sát thực địa.",
    "difficultiesAndTradeoffs": [
      "Cân bằng khó khăn giữa ý tưởng nghệ thuật bay bổng và ngân sách thực tế của chủ nhà",
      "Áp lực sửa bản vẽ nhiều lần theo yêu cầu của khách"
    ],
    "coreSkills": [
      "Tư duy thẩm mỹ và hình học không gian 3D",
      "Khả năng phân tích vi khí hậu và phong thủy khoa học",
      "Kỹ năng thuyết trình bảo vệ đồ án thiết kế"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Vật lý",
      "Mỹ thuật / Vẽ hình họa",
      "Ngữ văn"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kiến trúc sư (Đào tạo 5 năm tại ĐH Kiến trúc Hà Nội, ĐH Xây dựng, ĐH Kiến trúc TP.HCM)"
      }
    ],
    "entryPathway": "Đại học: Kiến trúc sư (Đào tạo 5 năm tại ĐH Kiến trúc Hà Nội, ĐH Xây dựng, ĐH Kiến trúc TP.HCM)",
    "trialActivity": "Vẽ phác họa mặt bằng ngôi nhà mơ ước của em gồm phòng khách, bếp và phòng ngủ trên một tờ giấy A4.",
    "has3D": true,
    "simulationTaskId": "task-architecture-3d",
    "experienceType": "3D_INTERACTIVE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kiến trúc sư mô phỏng phối cảnh nhà ở 3D",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "nha-thiet-ke-noi-that",
    "title": "Nhà thiết kế nội thất (Interior Designer)",
    "englishTitle": "Interior Designer",
    "synonyms": [
      "Kiến trúc sư nội thất",
      "Interior Designer"
    ],
    "group": "kien-truc-noi-that",
    "category": "KienTruc",
    "categoryLabel": "Kiến trúc, quy hoạch và nội thất",
    "riasecCodes": [
      "A",
      "E",
      "R"
    ],
    "shortSummary": "Lựa chọn vật liệu gỗ, đá, vải, bố trí bàn ghế tủ kệ và thiết kế hệ thống ánh sáng tạo nên không gian sống tiện nghi, thẩm mỹ và ấm cúng.",
    "typicalTasks": [
      "Bố trí mặt bằng sắp đặt đồ nội thất đảm bảo lối đi thông thoáng không bị chặn",
      "Phối màu sắc, chọn vật liệu hoàn thiện và thiết kế đèn trang trí",
      "Giám sát xưởng mộc đóng đồ gỗ và lắp đặt hoàn thiện tại căn hộ"
    ],
    "deliverables": [
      "Bản vẽ phối cảnh 3D không gian nội thất",
      "Bảng chỉ định vật liệu nội thất (Moodboard) và bảng bóc tách khối lượng"
    ],
    "toolsUsed": [
      "3ds Max (Corona / Vray)",
      "SketchUp",
      "Photoshop",
      "Revit Nội thất"
    ],
    "workEnvironment": "Studio thiết kế nội thất, căn hộ mẫu, xưởng sản xuất đồ gỗ.",
    "difficultiesAndTradeoffs": [
      "Bụi bặm và mùi sơn khi đi giám sát lắp đặt tại công trình hoàn thiện",
      "Phải am hiểu sâu về đặc tính vật liệu và giá thành để tránh vượt ngân sách"
    ],
    "coreSkills": [
      "Cảm nhận màu sắc và chất liệu tinh tế",
      "Tư duy tối ưu hóa diện tích sử dụng",
      "Kỹ năng lắng nghe nhu cầu thói quen sinh hoạt của gia chủ"
    ],
    "highSchoolSubjects": [
      "Mỹ thuật",
      "Toán học",
      "Ngữ văn"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Thiết kế Nội thất (ĐH Mỹ thuật Công nghiệp, ĐH Kiến trúc)"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Thiết kế Nội thất"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Thiết kế Nội thất (ĐH Mỹ thuật Công nghiệp, ĐH Kiến trúc) | Cao đẳng: Cao đẳng Thiết kế Nội thất",
    "trialActivity": "Thử sắp xếp lại bàn học và góc phòng ngủ của mình sao cho đón được nhiều ánh sáng tự nhiên nhất.",
    "has3D": true,
    "simulationTaskId": "task-architecture-3d",
    "experienceType": "3D_INTERACTIVE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Không gian nội thất phòng khách được bài trí tinh tế",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "kien-truc-su-quy-hoach-do-thi",
    "title": "Kiến trúc sư Quy hoạch đô thị (Urban Planner / Urban Designer)",
    "englishTitle": "Urban Planner & Regional Designer",
    "synonyms": [
      "Kiến trúc sư quy hoạch",
      "Chuyên viên phát triển đô thị"
    ],
    "group": "kien-truc-noi-that",
    "category": "KienTruc",
    "categoryLabel": "Kiến trúc, quy hoạch và nội thất",
    "riasecCodes": [
      "I",
      "A",
      "C"
    ],
    "shortSummary": "Phân vùng chức năng đất đai, quy hoạch mạng lưới giao thông, công viên cây xanh và dự báo dân số để xây dựng các thành phố đáng sống.",
    "typicalTasks": [
      "Phân tích số liệu dân số, lưu lượng giao thông và rủi ro ngập lụt đô thị",
      "Vẽ bản đồ quy hoạch sử dụng đất tỷ lệ 1/2000 và 1/500",
      "Lấy ý kiến cộng đồng dân cư và bảo vệ đồ án quy hoạch trước hội đồng kiến trúc"
    ],
    "deliverables": [
      "Đồ án quy hoạch chung đô thị kèm thuyết minh",
      "Bản đồ hệ thống thông tin địa lý (GIS) phân vùng sử dụng đất"
    ],
    "toolsUsed": [
      "ArcGIS / QGIS",
      "AutoCAD Map 3D",
      "Photoshop",
      "CityEngine"
    ],
    "workEnvironment": "Viện quy hoạch xây dựng, sở quy hoạch kiến trúc, ban quản lý khu đô thị mới.",
    "difficultiesAndTradeoffs": [
      "Thời gian triển khai đồ án quy hoạch tính bằng năm, nhiều thủ tục thẩm định",
      "Phải cân bằng lợi ích phức tạp giữa phát triển kinh tế và bảo vệ môi trường"
    ],
    "coreSkills": [
      "Tư duy chiến lược quy mô lớn",
      "Phân tích dữ liệu không gian bản đồ GIS",
      "Hiểu biết pháp luật quy hoạch đô thị"
    ],
    "highSchoolSubjects": [
      "Địa lý",
      "Toán học",
      "Ngữ văn",
      "Lịch sử"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kiến trúc sư Quy hoạch đô thị hoặc Kỹ sư Quản lý đô thị"
      }
    ],
    "entryPathway": "Đại học: Kiến trúc sư Quy hoạch đô thị hoặc Kỹ sư Quản lý đô thị",
    "trialActivity": "Mở Google Maps vệ tinh xem cách phân chia ô bàn cờ và công viên cây xanh ở khu đô thị Phú Mỹ Hưng hoặc Ecopark.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Bản đồ quy hoạch đô thị thông minh nhìn từ trên cao",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "thiet-ke-canh-quan-sinh-thai",
    "title": "Kiến trúc sư Cảnh quan sinh thái (Landscape Architect)",
    "englishTitle": "Landscape Architect",
    "synonyms": [
      "Thiết kế cảnh quan sân vườn",
      "Landscape Designer"
    ],
    "group": "kien-truc-noi-that",
    "category": "KienTruc",
    "categoryLabel": "Kiến trúc, quy hoạch và nội thất",
    "riasecCodes": [
      "A",
      "R",
      "I"
    ],
    "shortSummary": "Thiết kế công viên, quảng trường, hồ điều hòa, vườn trên mái và lựa chọn các loài cây xanh bản địa tạo bóng mát và chống ngập.",
    "typicalTasks": [
      "Lên phương án đường dạo bộ, tiểu cảnh nước và khu vui chơi ngoài trời",
      "Lựa chọn các tầng tán cây xanh phù hợp khí hậu nhiệt đới gió mùa",
      "Thiết kế hệ thống tưới tự động và đèn chiếu sáng sân vườn tiết kiệm điện"
    ],
    "deliverables": [
      "Hồ sơ thiết kế cảnh quan tổng thể",
      "Bảng danh mục chủng loại cây xanh và hướng dẫn chăm sóc"
    ],
    "toolsUsed": [
      "SketchUp",
      "Lumion",
      "AutoCAD",
      "InDesign"
    ],
    "workEnvironment": "Công ty thiết kế cảnh quan resort, khu đô thị sinh thái, công trường sân vườn.",
    "difficultiesAndTradeoffs": [
      "Làm việc ngoài trời nắng gió khi giám sát ươm trồng cây lớn",
      "Cần hiểu sâu về chu kỳ sinh trưởng của từng loài thực vật để cây không bị chết"
    ],
    "coreSkills": [
      "Thẩm mỹ cảnh quan thiên nhiên",
      "Kiến thức thực vật học và sinh thái cảnh quan",
      "Kỹ năng vẽ phối cảnh ngoài trời"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Mỹ thuật",
      "Địa lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kiến trúc sư Cảnh quan (ĐH Kiến trúc, ĐH Lâm nghiệp)"
      }
    ],
    "entryPathway": "Đại học: Kiến trúc sư Cảnh quan (ĐH Kiến trúc, ĐH Lâm nghiệp)",
    "trialActivity": "Quan sát công viên gần nhà và đếm xem có bao nhiêu loài cây cho bóng mát, bao nhiêu bồn hoa trang trí.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Công viên cảnh quan sinh thái xanh giữa lòng thành phố",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-bim-modeler",
    "title": "Chuyên viên mô hình hóa thông tin công trình (BIM Coordinator / Modeler)",
    "englishTitle": "Building Information Modeling (BIM) Specialist",
    "synonyms": [
      "Kỹ sư BIM",
      "Họa viên Revit 3D"
    ],
    "group": "kien-truc-noi-that",
    "category": "KienTruc",
    "categoryLabel": "Kiến trúc, quy hoạch và nội thất",
    "riasecCodes": [
      "C",
      "R",
      "I"
    ],
    "shortSummary": "Dựng mô hình số 3D tích hợp thông tin vật liệu, kết cấu, đường ống cơ điện để phát hiện xung đột và hỗ trợ dự toán chính xác trước khi xây thật.",
    "typicalTasks": [
      "Dựng mô hình số 3D đa bộ môn (Kiến trúc, Kết cấu, MEP) trên phần mềm Revit",
      "Chạy chương trình tự động quét và phát hiện xung đột (Clash Detection)",
      "Xuất bảng thống kê khối lượng thép, bê tông, gạch ốp tự động từ mô hình"
    ],
    "deliverables": [
      "Mô hình số BIM hợp nhất không xung đột",
      "Báo cáo xử lý xung đột kỹ thuật trước thi công"
    ],
    "toolsUsed": [
      "Autodesk Revit",
      "Navisworks Manage",
      "BIM 360",
      "BIMcollab"
    ],
    "workEnvironment": "Các tổng thầu xây dựng lớn, công ty tư vấn thiết kế quốc tế.",
    "difficultiesAndTradeoffs": [
      "Ngồi trước máy tính cấu hình cao hàng giờ liền để kiểm tra từng đường ống",
      "Đòi hỏi tính kỷ luật tuân thủ chuẩn đặt tên tệp và phân tầng dữ liệu nghiêm ngặt"
    ],
    "coreSkills": [
      "Thành thạo phần mềm BIM chuyên sâu",
      "Tư duy không gian 3D cấu tạo công trình",
      "Phối hợp làm việc nhóm đa ngành"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Toán học",
      "Vật lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Xây dựng hoặc Kiến trúc sư chuyên sâu BIM"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Họa viên Kiến trúc & BIM"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Xây dựng hoặc Kiến trúc sư chuyên sâu BIM | Cao đẳng: Cao đẳng Họa viên Kiến trúc & BIM",
    "trialActivity": "Tìm hiểu khái niệm Digital Twin (Bản sao số): tại sao tòa nhà Landmark 81 lại có một phiên bản số 3D trong máy tính.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Mô hình BIM 3D tòa nhà hiển thị các lớp kết cấu và đường ống",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-thiet-ke-chieu-sang",
    "title": "Chuyên viên thiết kế chiếu sáng kiến trúc (Architectural Lighting Designer)",
    "englishTitle": "Architectural Lighting Designer",
    "synonyms": [
      "Nhà thiết kế ánh sáng",
      "Lighting Designer"
    ],
    "group": "kien-truc-noi-that",
    "category": "KienTruc",
    "categoryLabel": "Kiến trúc, quy hoạch và nội thất",
    "riasecCodes": [
      "A",
      "I"
    ],
    "shortSummary": "Tính toán quang thông, góc chiếu đèn và nhiệt độ màu để tôn vinh vẻ đẹp kiến trúc ban đêm và bảo vệ thị giác người dùng ban ngày.",
    "typicalTasks": [
      "Mô phỏng mức độ rọi sáng (Lux) trên phần mềm Dialux",
      "Lựa chọn các loại đèn LED chỉ số hoàn màu cao (CRI > 90) tiết kiệm năng lượng",
      "Lập trình các kịch bản chiếu sáng nghệ thuật thay đổi theo giờ"
    ],
    "deliverables": [
      "Bản vẽ bố trí đèn và bảng tính toán quang thông chuẩn chiếu sáng",
      "Phối cảnh 3D hiệu ứng ánh sáng ban đêm"
    ],
    "toolsUsed": [
      "DIALux evo",
      "Relux",
      "AutoCAD",
      "Photoshop"
    ],
    "workEnvironment": "Công ty tư vấn chiếu sáng kiến trúc, hãng đèn cao cấp quốc tế (Philips, Signify).",
    "difficultiesAndTradeoffs": [
      "Khảo sát công trình ban đêm để căn chỉnh góc chiếu đèn thật",
      "Đòi hỏi sự am hiểu sâu về cả nghệ thuật cảm xúc lẫn vật lý quang học"
    ],
    "coreSkills": [
      "Cảm thụ thẩm mỹ ánh sáng và bóng đổ",
      "Tính toán quang học vật lý",
      "Hiểu biết về tiện nghi thị giác"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Mỹ thuật",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kiến trúc sư, Nhà thiết kế Nội thất hoặc Kỹ sư Kỹ thuật Chiếu sáng"
      }
    ],
    "entryPathway": "Đại học: Kiến trúc sư, Nhà thiết kế Nội thất hoặc Kỹ sư Kỹ thuật Chiếu sáng",
    "trialActivity": "Quan sát các góc chiếu đèn vàng và đèn trắng trong một quán cafe để cảm nhận sự khác biệt về không khí ấm cúng.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Thiết kế chiếu sáng nghệ thuật tôn vinh đường nét kiến trúc",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-tu-van-vi-khi-hau-phong-thuy",
    "title": "Chuyên viên vi khí hậu và phong thủy khoa học (Building Bioclimatic Specialist)",
    "englishTitle": "Bioclimatic & Spatial Harmony Consultant",
    "synonyms": [
      "Chuyên viên vi khí hậu công trình",
      "Tư vấn năng lượng nhà ở"
    ],
    "group": "kien-truc-noi-that",
    "category": "KienTruc",
    "categoryLabel": "Kiến trúc, quy hoạch và nội thất",
    "riasecCodes": [
      "I",
      "A",
      "R"
    ],
    "shortSummary": "Phân tích hướng gió mùa, biểu đồ mặt trời và từ trường tự nhiên để tư vấn hướng nhà, vị trí cửa sổ đón vượng khí và làm mát tự nhiên.",
    "typicalTasks": [
      "Đo đạc hướng gió, bức xạ nhiệt mặt trời và độ ẩm tại khu đất xây dựng",
      "Đề xuất giải pháp lam chắn nắng và giếng trời đối lưu không khí",
      "Tư vấn bố trí không gian hài hòa theo quy luật tự nhiên và phong thủy khoa học"
    ],
    "deliverables": [
      "Báo cáo phân tích vi khí hậu khu đất",
      "Bản vẽ tối ưu hóa thông gió tự nhiên"
    ],
    "toolsUsed": [
      "EnergyPlus",
      "Climate Consultant",
      "La bàn địa từ",
      "Mô hình biểu đồ góc chiếu mặt trời Sun Path"
    ],
    "workEnvironment": "Văn phòng tư vấn kiến trúc xanh, công ty xây dựng nhà ở cao cấp.",
    "difficultiesAndTradeoffs": [
      "Phải giải thích phong thủy dựa trên cơ sở khoa học để khách hàng hiểu đúng, tránh mê tín",
      "Khó khăn khi khu đất bị các tòa nhà cao tầng xung quanh che chắn nắng gió"
    ],
    "coreSkills": [
      "Kiến thức vật lý kiến trúc và khí tượng thủy văn",
      "Tư duy không gian hài hòa sinh thái",
      "Kỹ năng tư vấn thuyết phục"
    ],
    "highSchoolSubjects": [
      "Địa lý",
      "Vật lý",
      "Văn hóa học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kiến trúc sư hoặc Cử nhân Khoa học Môi trường / Địa lý"
      }
    ],
    "entryPathway": "Đại học: Kiến trúc sư hoặc Cử nhân Khoa học Môi trường / Địa lý",
    "trialActivity": "Dùng la bàn trên điện thoại xác định hướng ban công nhà mình và xem buổi chiều nắng chiếu vào lúc mấy giờ.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Ánh nắng tự nhiên chiếu qua giếng trời vào ngôi nhà hiện đại",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "thiet-ke-khong-gian-ban-le-trien-lam",
    "title": "Thiết kế không gian bán lẻ & triển lãm (Retail & Exhibition Designer)",
    "englishTitle": "Retail & Exhibition Space Designer",
    "synonyms": [
      "Thiết kế showroom",
      "Exhibition Designer"
    ],
    "group": "kien-truc-noi-that",
    "category": "KienTruc",
    "categoryLabel": "Kiến trúc, quy hoạch và nội thất",
    "riasecCodes": [
      "A",
      "E",
      "R"
    ],
    "shortSummary": "Bố trí luồng di chuyển của khách hàng, gian hàng hội chợ và quầy kệ trưng bày kích thích cảm xúc mua sắm tại trung tâm thương mại.",
    "typicalTasks": [
      "Thiết kế gian hàng hội chợ triển lãm lắp ghép nhanh trong 24 giờ",
      "Nghiên cứu hành vi tâm lý người tiêu dùng khi bước vào cửa hàng",
      "Thiết kế đồ họa điểm bán (POSM) và biển hiệu thương hiệu nổi bật"
    ],
    "deliverables": [
      "Bản vẽ 3D gian hàng triển lãm hoàn chỉnh",
      "Hồ sơ bóc tách chi tiết cấu kiện tháo lắp"
    ],
    "toolsUsed": [
      "SketchUp",
      "3ds Max",
      "Illustrator",
      "AutoCAD"
    ],
    "workEnvironment": "Công ty tổ chức sự kiện triển lãm, tập đoàn bán lẻ thời trang, mỹ phẩm.",
    "difficultiesAndTradeoffs": [
      "Thời gian thi công ban đêm tại các trung tâm thương mại rất gấp rút",
      "Đòi hỏi ý tưởng phải luôn mới lạ, bắt trend thị trường"
    ],
    "coreSkills": [
      "Tư duy thẩm mỹ thương mại",
      "Hiểu biết tâm lý hành vi mua sắm",
      "Kỹ năng thiết kế cấu kiện lắp ghép nhanh"
    ],
    "highSchoolSubjects": [
      "Mỹ thuật",
      "Ngữ văn",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Thiết kế Nội thất, Mỹ thuật Công nghiệp hoặc Kiến trúc"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Thiết kế Nội thất, Mỹ thuật Công nghiệp hoặc Kiến trúc",
    "trialActivity": "Đi dạo một vòng siêu thị và quan sát cách họ sắp xếp các món đồ giảm giá ngay lối vào để thu hút khách.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Không gian cửa hàng bán lẻ hiện đại với ánh sáng và quầy kệ tối ưu",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "quan-ly-du-an-hoan-thien-noi-that",
    "title": "Quản lý dự án thi công nội thất (Fit-out Project Manager)",
    "englishTitle": "Interior Fit-out Project Manager",
    "synonyms": [
      "Chỉ huy trưởng nội thất",
      "Quản lý thi công fit-out"
    ],
    "group": "kien-truc-noi-that",
    "category": "KienTruc",
    "categoryLabel": "Kiến trúc, quy hoạch và nội thất",
    "riasecCodes": [
      "E",
      "R",
      "C"
    ],
    "shortSummary": "Điều phối thợ mộc, thợ sơn, thợ điện nước, kiểm soát tiến độ và chất lượng để bàn giao căn hộ đúng cam kết với khách hàng.",
    "typicalTasks": [
      "Lập tiến độ thi công chi tiết từng ngày (Gantt chart)",
      "Kiểm tra chất lượng cốt gỗ, lớp dán chỉ cạnh và độ phẳng bề mặt sơn",
      "Nghiệm thu khối lượng và bàn giao chìa khóa cho chủ nhà"
    ],
    "deliverables": [
      "Nhật ký thi công hoàn thiện nội thất",
      "Biên bản nghiệm thu bàn giao căn hộ"
    ],
    "toolsUsed": [
      "Microsoft Project",
      "AutoCAD",
      "Excel quản lý tiến độ",
      "Thước đo khoảng cách laser"
    ],
    "workEnvironment": "Công trường hoàn thiện căn hộ, văn phòng, khách sạn.",
    "difficultiesAndTradeoffs": [
      "Áp lực bàn giao nhà đúng ngày đẹp để chủ nhà dọn vào ở",
      "Phải xử lý mâu thuẫn giữa các tổ thợ điện, thợ sơn trên công trường"
    ],
    "coreSkills": [
      "Kỹ năng quản lý tiến độ và ngân sách",
      "Hiểu sâu kỹ thuật mộc và hoàn thiện bề mặt",
      "Khả năng đàm phán giải quyết xung đột"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Vật lý",
      "Giáo dục kinh tế và pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Quản lý Xây dựng, Kiến trúc sư hoặc Kỹ sư Nội thất"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Xây dựng & Hoàn thiện Nội thất"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Quản lý Xây dựng, Kiến trúc sư hoặc Kỹ sư Nội thất | Cao đẳng: Cao đẳng Xây dựng & Hoàn thiện Nội thất",
    "trialActivity": "Thử đo chiều dài và chiều rộng căn phòng của em bằng thước dây hoặc ứng dụng đo trên điện thoại.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Quản lý thi công kiểm tra bản vẽ tại căn hộ đang hoàn thiện",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "kien-truc-su-bao-ton-di-san",
    "title": "Kiến trúc sư Bảo tồn di sản (Heritage Conservation Architect)",
    "englishTitle": "Architectural Heritage Conservationist",
    "synonyms": [
      "Kiến trúc sư trùng tu di tích",
      "Heritage Architect"
    ],
    "group": "kien-truc-noi-that",
    "category": "KienTruc",
    "categoryLabel": "Kiến trúc, quy hoạch và nội thất",
    "riasecCodes": [
      "A",
      "I",
      "C"
    ],
    "shortSummary": "Khảo sát, giải mã cấu kiện gỗ cổ truyền và lập phương án trùng tu chùa chiền, đình làng, biệt thự Pháp cổ giữ nguyên vẹn giá trị lịch sử.",
    "typicalTasks": [
      "Dùng máy quét 3D laser ghi nhận hiện trạng chi tiết từng hoa văn điêu khắc",
      "Nghiên cứu hồ sơ tài liệu lịch sử và kỹ thuật ghép mộng truyền thống",
      "Giám sát nghệ nhân phục chế gạch gốm, vôi vữa cổ và ngói âm dương"
    ],
    "deliverables": [
      "Hồ sơ đánh giá hiện trạng di tích kiến trúc",
      "Đồ án bảo tồn và trùng tu di sản văn hóa"
    ],
    "toolsUsed": [
      "Máy quét 3D Laser Scanner",
      "AutoCAD",
      "Phần mềm dựng hình phục dựng 3D",
      "Kính hiển vi vật liệu"
    ],
    "workEnvironment": "Di tích lịch sử, phố cổ Hà Nội, phố cổ Hội An, di tích Cố đô Huế.",
    "difficultiesAndTradeoffs": [
      "Trách nhiệm văn hóa lịch sử nặng nề, một quyết định sai có thể làm mất đi di sản trăm năm",
      "Thủ tục thẩm định nghiêm ngặt từ các cơ quan quản lý di sản"
    ],
    "coreSkills": [
      "Kiến thức lịch sử kiến trúc và mỹ thuật cổ",
      "Kỹ năng khảo sát đo đạc hiện trạng tỉ mỉ",
      "Tấm lòng trân trọng văn hóa truyền thống"
    ],
    "highSchoolSubjects": [
      "Lịch sử",
      "Mỹ thuật",
      "Ngữ văn",
      "Vật lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kiến trúc sư chuyên ngành Bảo tồn di sản kiến trúc (ĐH Kiến trúc Hà Nội, ĐH Khoa học Huế)"
      }
    ],
    "entryPathway": "Đại học: Kiến trúc sư chuyên ngành Bảo tồn di sản kiến trúc (ĐH Kiến trúc Hà Nội, ĐH Khoa học Huế)",
    "trialActivity": "Chụp ảnh một ngôi nhà cổ hoặc ngôi chùa gần nhà và tìm xem có những họa tiết chạm khắc nào độc đáo.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kiến trúc sư khảo sát phục dựng chi tiết di tích cổ kính",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-ket-cau-cong-trinh",
    "title": "Kỹ sư Kết cấu công trình (Civil & Structural Engineer)",
    "englishTitle": "Structural Engineering Specialist",
    "synonyms": [
      "Kỹ sư tính kết cấu",
      "Structural Engineer"
    ],
    "group": "xay-dung",
    "category": "XayDung",
    "categoryLabel": "Xây dựng và hạ tầng",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Tính toán sức chịu tải của dầm, cột, móng bê tông cốt thép và kết cấu thép, đảm bảo tòa nhà đứng vững trước động đất và bão lớn.",
    "typicalTasks": [
      "Tính toán tải trọng gió, động đất và tải trọng sử dụng trên phần mềm chuyên dụng",
      "Thiết kế bố trí thép dầm, sàn, móng theo tiêu chuẩn xây dựng Việt Nam (TCVN)",
      "Bảo vệ đồ án tính toán trước cơ quan thẩm tra thiết kế"
    ],
    "deliverables": [
      "Thuyết minh tính toán kết cấu công trình",
      "Bản vẽ chi tiết cốt thép dầm sàn móng"
    ],
    "toolsUsed": [
      "ETABS",
      "SAP2000",
      "SAFE",
      "AutoCAD",
      "Revit Structure"
    ],
    "workEnvironment": "Văn phòng tư vấn thiết kế kết cấu, thỉnh thoảng ra công trường kiểm tra.",
    "difficultiesAndTradeoffs": [
      "Trách nhiệm an toàn sinh mạng cực lớn, tính sai tiết diện thép có thể gây nứt hoặc sập nhà",
      "Khối lượng tính toán đồ sộ với hàng trăm cột dầm"
    ],
    "coreSkills": [
      "Cơ học kết cấu và sức bền vật liệu",
      "Thành thạo phần mềm mô hình hóa kết cấu ETABS",
      "Độ cẩn trọng tuyệt đối với từng con số"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Vật lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Xây dựng dân dụng & công nghiệp (ĐH Bách khoa, ĐH Xây dựng, ĐH Giao thông Vận tải)"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Xây dựng dân dụng & công nghiệp (ĐH Bách khoa, ĐH Xây dựng, ĐH Giao thông Vận tải)",
    "trialActivity": "Tìm hiểu tại sao cây cầu dây văng lại có thể đỡ được hàng nghìn chiếc xe tải chạy qua cùng lúc.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư kết cấu kiểm tra bản vẽ kết cấu thép công trình",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-giam-sat-thi-cong",
    "title": "Kỹ sư Giám sát thi công hiện trường (Site Construction Supervisor)",
    "englishTitle": "Site Construction Engineer",
    "synonyms": [
      "Kỹ sư hiện trường",
      "Site Engineer"
    ],
    "group": "xay-dung",
    "category": "XayDung",
    "categoryLabel": "Xây dựng và hạ tầng",
    "riasecCodes": [
      "R",
      "C",
      "E"
    ],
    "shortSummary": "Túc trực trên công trường để kiểm tra quy cách buộc thép, độ sụt bê tông, đôn đốc thợ thi công đúng bản vẽ và an toàn lao động.",
    "typicalTasks": [
      "Nghiệm thu cốt thép và cốp pha trước giờ đổ bê tông",
      "Lấy mẫu thử bê tông nén tại trạm trộn để kiểm tra mác cường độ",
      "Lập nhật ký công trường ghi nhận thời tiết, nhân công và khối lượng hoàn thành"
    ],
    "deliverables": [
      "Biên bản nghiệm thu công việc xây dựng",
      "Nhật ký thi công công trường hàng ngày"
    ],
    "toolsUsed": [
      "Máy thủy bình",
      "Thước dây thép",
      "Nón bảo hộ & giày mũi thép",
      "Bản vẽ A0 ép nhựa"
    ],
    "workEnvironment": "Hiện trường công trường xây dựng, ngoài trời nắng gió, bụi bặm.",
    "difficultiesAndTradeoffs": [
      "Làm việc ngoài trời trong điều kiện thời tiết khắc nghiệt, thường xuyên đổ bê tông đêm",
      "Áp lực tiến độ gấp từ chủ đầu tư"
    ],
    "coreSkills": [
      "Đọc bản vẽ xây dựng nhanh chóng",
      "Kỹ năng quản lý và điều phối các tổ đội thợ",
      "Kỷ luật an toàn lao động nghiêm ngặt"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Toán học",
      "Công nghệ"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Xây dựng hoặc Kỹ sư Quản lý xây dựng"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Kỹ thuật Công trình Xây dựng"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Xây dựng hoặc Kỹ sư Quản lý xây dựng | Cao đẳng: Cao đẳng Kỹ thuật Công trình Xây dựng",
    "trialActivity": "Quan sát một công trình đang xây gần nhà xem các chú công nhân đội nón bảo hộ màu gì và đang làm việc gì.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư giám sát kiểm tra cốt thép trên sàn công trường",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-trac-dia-va-ban-do-so",
    "title": "Kỹ sư Trắc địa và Bản đồ số (Geomatics & Surveying Engineer)",
    "englishTitle": "Geomatics & Surveying Engineer",
    "synonyms": [
      "Kỹ sư đo đạc",
      "Surveyor"
    ],
    "group": "xay-dung",
    "category": "XayDung",
    "categoryLabel": "Xây dựng và hạ tầng",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Sử dụng máy toàn đạc điện tử, máy định vị vệ tinh GPS RTK và drone bay quét để đo đạc tọa độ mốc ranh đất và độ lún công trình.",
    "typicalTasks": [
      "Bắn mốc tọa độ và cao độ chuẩn xác phục vụ định vị tim trục tòa nhà",
      "Đo quan trắc độ nghiêng và độ lún định kỳ của các tòa nhà cao tầng",
      "Bay chụp drone và xử lý đám mây điểm (Point Cloud) lập bản đồ địa hình 3D"
    ],
    "deliverables": [
      "Bản đồ hiện trạng vị trí khu đất tỷ lệ 1/500",
      "Báo cáo quan trắc độ lún công trình"
    ],
    "toolsUsed": [
      "Máy toàn đạc điện tử Leica",
      "Máy định vị GPS RTK",
      "Flycam bay chụp",
      "AutoCAD Civil 3D"
    ],
    "workEnvironment": "Khu đất dự án, đồi núi, công trường hạ tầng giao thông.",
    "difficultiesAndTradeoffs": [
      "Thường xuyên lội ruộng, trèo đồi trong điều kiện địa hình phức tạp",
      "Sai số một vài milimet có thể ảnh hưởng lớn đến tim móng tòa nhà"
    ],
    "coreSkills": [
      "Thao tác máy đo đạc trắc địa chuẩn xác",
      "Xử lý số liệu tọa độ không gian",
      "Sức khỏe dẻo dai thích nghi địa hình"
    ],
    "highSchoolSubjects": [
      "Toán học (Lượng giác)",
      "Địa lý",
      "Vật lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật Trắc địa - Bản đồ (ĐH Mỏ - Địa chất, ĐH Bách khoa)"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Trắc địa công trình"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật Trắc địa - Bản đồ (ĐH Mỏ - Địa chất, ĐH Bách khoa) | Cao đẳng: Cao đẳng Trắc địa công trình",
    "trialActivity": "Bật tính năng định vị GPS trên điện thoại và xem độ chính xác hiển thị trong khoảng bao nhiêu mét.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư trắc địa ngắm máy toàn đạc đo cao độ công trình",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-du-toan-va-dinh-gia-qs",
    "title": "Kỹ sư Dự toán và Định giá xây dựng (Quantity Surveyor - QS)",
    "englishTitle": "Quantity Surveyor (QS)",
    "synonyms": [
      "Kỹ sư QS",
      "Chuyên viên bóc tách khối lượng"
    ],
    "group": "xay-dung",
    "category": "XayDung",
    "categoryLabel": "Xây dựng và hạ tầng",
    "riasecCodes": [
      "C",
      "I",
      "E"
    ],
    "shortSummary": "Bóc tách từng kilogam thép, mét khối bê tông từ bản vẽ để lập bảng dự toán chi phí, hồ sơ mời thầu và thanh quyết toán công trình.",
    "typicalTasks": [
      "Bóc tách khối lượng vật liệu xây dựng từ hồ sơ thiết kế kỹ thuật",
      "Tra cứu đơn giá vật liệu địa phương và định mức nhà nước để lập dự toán",
      "Đàm phán thương thảo đơn giá với các nhà thầu phụ"
    ],
    "deliverables": [
      "Bảng dự toán kinh phí xây dựng công trình (BOQ)",
      "Hồ sơ thanh quyết toán giai đoạn"
    ],
    "toolsUsed": [
      "Phần mềm Dự toán G8 / F1",
      "Excel nâng cao",
      "AutoCAD đo khối lượng"
    ],
    "workEnvironment": "Văn phòng ban quản lý dự án, công ty tư vấn đầu tư xây dựng.",
    "difficultiesAndTradeoffs": [
      "Làm việc liên tục với bảng tính hàng nghìn dòng số liệu dễ gây đau đầu",
      "Chịu trách nhiệm giải trình từng đồng chi phí với kiểm toán"
    ],
    "coreSkills": [
      "Kỹ năng bóc tách khối lượng bản vẽ chuẩn xác",
      "Am hiểu định mức đơn giá và pháp luật đấu thầu",
      "Tư duy đàm phán thương mại"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Giáo dục kinh tế và pháp luật",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kinh tế Xây dựng hoặc Quản lý xây dựng (ĐH Xây dựng, ĐH Giao thông)"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kinh tế Xây dựng hoặc Quản lý xây dựng (ĐH Xây dựng, ĐH Giao thông)",
    "trialActivity": "Thử tính xem để sơn lại 4 bức tường phòng ngủ của em thì cần mua khoảng bao nhiêu mét vuông sơn.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư dự toán tính toán chi phí trên bảng dự toán BOQ",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-an-toan-lao-dong-hse",
    "title": "Kỹ sư An toàn lao động công trường (HSE Officer / Engineer)",
    "englishTitle": "Health, Safety & Environment (HSE) Engineer",
    "synonyms": [
      "Kỹ sư bảo hộ lao động",
      "HSE Engineer"
    ],
    "group": "xay-dung",
    "category": "XayDung",
    "categoryLabel": "Xây dựng và hạ tầng",
    "riasecCodes": [
      "S",
      "C",
      "R"
    ],
    "shortSummary": "Tập huấn an toàn đầu giờ, kiểm tra giàn giáo, đai an toàn trên cao và ngăn chặn mọi nguy cơ tai nạn bảo vệ tính mạng công nhân.",
    "typicalTasks": [
      "Tổ chức buổi phổ biến an toàn 15 phút (Toolbox meeting) mỗi buổi sáng",
      "Kiểm tra lưới hứng rơi, lan can bảo vệ và kiểm định máy cẩu",
      "Lập phương án ứng phó khẩn cấp và sơ cấp cứu tai nạn lao động"
    ],
    "deliverables": [
      "Báo cáo đánh giá rủi ro an toàn lao động (JSA)",
      "Kế hoạch an toàn vệ sinh môi trường công trường"
    ],
    "toolsUsed": [
      "Thiết bị đo nồng độ khí độc",
      "Dây đai an toàn toàn thân 2 móc",
      "Bộ sơ cấp cứu chấn thương"
    ],
    "workEnvironment": "Công trường xây dựng, nhà máy sản xuất công nghiệp nặng.",
    "difficultiesAndTradeoffs": [
      "Phải kiên quyết xử phạt hoặc đình chỉ thi công khi phát hiện vi phạm dù bị phản ứng",
      "Áp lực tâm lý rất lớn khi xảy ra sự cố tai nạn lao động"
    ],
    "coreSkills": [
      "Nắm vững luật an toàn vệ sinh lao động",
      "Khả năng quan sát nhận diện mối nguy tiềm ẩn",
      "Kỹ năng huấn luyện và thuyết phục công nhân"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Sinh học",
      "Giáo dục công dân / Kinh tế & Pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Bảo hộ lao động hoặc Quản lý môi trường công nghiệp (ĐH Công đoàn, ĐH Tôn Đức Thắng)"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Bảo hộ lao động hoặc Quản lý môi trường công nghiệp (ĐH Công đoàn, ĐH Tôn Đức Thắng)",
    "trialActivity": "Liệt kê 3 mối nguy hiểm có thể gặp phải khi trèo lên mái nhà cao tầng không đeo dây bảo hiểm.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư an toàn HSE kiểm tra giàn giáo công trường",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-ha-tang-giao-thong-cau-duong",
    "title": "Kỹ sư Cầu đường và Hạ tầng giao thông (Highway & Bridge Engineer)",
    "englishTitle": "Highway & Bridge Infrastructure Engineer",
    "synonyms": [
      "Kỹ sư cầu đường",
      "Transportation Engineer"
    ],
    "group": "xay-dung",
    "category": "XayDung",
    "categoryLabel": "Xây dựng và hạ tầng",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Thiết kế tuyến đường cao tốc, cầu vượt bê tông dự ứng lực, nút giao lập thể giúp kết nối giao thương giữa các vùng miền đất nước.",
    "typicalTasks": [
      "Thiết kế bình đồ, trắc dọc và trắc ngang tuyến đường trên Civil 3D",
      "Tính toán dầm cầu bê tông cốt thép dự ứng lực và mố trụ cầu",
      "Quy hoạch hệ thống thoát nước mưa chống ngập cho mặt đường cao tốc"
    ],
    "deliverables": [
      "Hồ sơ thiết kế kỹ thuật tuyến đường cao tốc",
      "Bản vẽ kết cấu mố trụ và dầm cầu"
    ],
    "toolsUsed": [
      "AutoCAD Civil 3D",
      "Midas Civil",
      "Plaxis",
      "VnRoad"
    ],
    "workEnvironment": "Văn phòng thiết kế giao thông, công trường xây dựng đường cao tốc trên khắp cả nước.",
    "difficultiesAndTradeoffs": [
      "Thường xuyên đi công tác dài ngày theo các tuyến công trình liên tỉnh",
      "Điều kiện thi công sông nước, đồi dốc cheo leo"
    ],
    "coreSkills": [
      "Cơ học đất và nền móng công trình",
      "Thiết kế hình học tuyến đường",
      "Kỹ thuật thi công cầu nhịp lớn"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Vật lý",
      "Địa lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Cầu đường, Kỹ thuật Công trình giao thông (ĐH Giao thông Vận tải, ĐH Bách khoa)"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Cầu đường, Kỹ thuật Công trình giao thông (ĐH Giao thông Vận tải, ĐH Bách khoa)",
    "trialActivity": "Quan sát mặt đường nhựa trên cầu gần nhà và tìm xem có khe co giãn răng lược bằng thép ở vị trí nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Tuyến đường cao tốc uốn lượn qua các nhịp cầu hiện đại",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-cong-trinh-ngam-metro",
    "title": "Kỹ sư Công trình ngầm và Metro (Underground & Tunneling Engineer)",
    "englishTitle": "Tunneling & Underground Infrastructure Engineer",
    "synonyms": [
      "Kỹ sư hầm ngầm",
      "Metro Engineer"
    ],
    "group": "xay-dung",
    "category": "XayDung",
    "categoryLabel": "Xây dựng và hạ tầng",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Điều khiển robot khoan hầm TBM dưới lòng đất, thi công các ga ngầm đường sắt đô thị Metro và hầm xuyên núi.",
    "typicalTasks": [
      "Theo dõi thông số áp lực đất và vữa chèn của khiên đào robot TBM",
      "Tính toán lún sụt mặt đất để bảo vệ các tòa nhà cổ phía trên mặt đường",
      "Thiết kế hệ thống thông gió chống ngạt và thoát hiểm khẩn cấp trong hầm ngầm"
    ],
    "deliverables": [
      "Nhật ký vận hành robot khiên đào TBM",
      "Báo cáo quan trắc chuyển vị nền đất hầm ngầm"
    ],
    "toolsUsed": [
      "Máy khoan hầm TBM",
      "Phần mềm mô phỏng địa kỹ thuật Plaxis 3D",
      "Cảm biến đo áp lực nước lỗ rỗng"
    ],
    "workEnvironment": "Lòng đất đô thị (dự án Metro Hà Nội, Metro Bến Thành - Suối Tiên), hầm xuyên núi Đèo Cả, Hải Vân.",
    "difficultiesAndTradeoffs": [
      "Làm việc sâu dưới lòng đất thiếu ánh sáng mặt trời tự nhiên",
      "Nguy cơ sạt lở hoặc bục túi nước ngầm đòi hỏi sự cảnh giác cao độ"
    ],
    "coreSkills": [
      "Địa kỹ thuật và cơ học đá ngầm",
      "Vận hành máy móc cơ giới hạng nặng",
      "Ứng phó tình huống khẩn cấp"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Địa lý",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Xây dựng Công trình ngầm và Mỏ (ĐH Mỏ - Địa chất, ĐH Giao thông Vận tải)"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Xây dựng Công trình ngầm và Mỏ (ĐH Mỏ - Địa chất, ĐH Giao thông Vận tải)",
    "trialActivity": "Tìm hiểu nguyên lý robot khoan hầm TBM vừa đào đất vừa lắp ghép vỏ hầm bê tông phía sau.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Đường hầm metro ngầm hiện đại với hệ thống vỏ hầm kiên cố",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "quan-ly-du-an-xay-dung",
    "title": "Giám đốc Dự án Xây dựng (Construction Project Director / Manager)",
    "englishTitle": "Construction Project Manager",
    "synonyms": [
      "Chỉ huy trưởng công trình",
      "Project Manager Xây dựng"
    ],
    "group": "xay-dung",
    "category": "XayDung",
    "categoryLabel": "Xây dựng và hạ tầng",
    "riasecCodes": [
      "E",
      "R",
      "C"
    ],
    "shortSummary": "Chỉ huy tổng thể tiến độ, chất lượng, tài chính và an toàn của toàn bộ dự án nghìn tỷ, điều hành hàng chục nhà thầu phụ.",
    "typicalTasks": [
      "Điều phối các cuộc họp giao ban công trường hàng tuần",
      "Quản lý dòng tiền dự án và giải ngân theo từng mốc tiến độ",
      "Xử lý các vướng mắc pháp lý và tiếp đón các đoàn thanh tra xây dựng"
    ],
    "deliverables": [
      "Kế hoạch tổng thể tiến độ dự án (Master Schedule)",
      "Báo cáo tình hình thực hiện dự án gửi hội đồng quản trị"
    ],
    "toolsUsed": [
      "MS Project / Primavera P6",
      "Hệ thống ERP quản lý dự án",
      "Email và phần mềm họp trực tuyến"
    ],
    "workEnvironment": "Văn phòng chỉ huy công trường, phòng họp ban quản trị dự án.",
    "difficultiesAndTradeoffs": [
      "Chịu trách nhiệm cao nhất về mọi sự cố xảy ra trên công trường",
      "Áp lực rất lớn về mốc hoàn thành bàn giao dự án cho chủ đầu tư"
    ],
    "coreSkills": [
      "Kỹ năng lãnh đạo và chỉ huy quyết đoán",
      "Quản trị rủi ro và tài chính dự án",
      "Đàm phán và giải quyết xung đột lợi ích"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Ngữ văn",
      "Giáo dục kinh tế và pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Xây dựng có chứng chỉ hành nghề Quản lý dự án hạng 1"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Xây dựng có chứng chỉ hành nghề Quản lý dự án hạng 1",
    "trialActivity": "Tìm hiểu vai trò của người Chỉ huy trưởng trên công trường tòa nhà Landmark 81.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Giám đốc dự án xây dựng trao đổi công việc cùng kỹ sư trưởng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-thuat-vien-thi-nghiem-vat-lieu-xay-dung",
    "title": "Kỹ thuật viên Thí nghiệm vật liệu xây dựng (Construction Materials Testing Technician)",
    "englishTitle": "Construction Materials Testing Technician",
    "synonyms": [
      "Thí nghiệm viên phòng LAS-XD",
      "Materials Testing Technician"
    ],
    "group": "xay-dung",
    "category": "XayDung",
    "categoryLabel": "Xây dựng và hạ tầng",
    "riasecCodes": [
      "R",
      "C"
    ],
    "shortSummary": "Đập nén mẫu bê tông, kéo thử giới hạn chảy của thép và thí nghiệm đầm nén đất để cấp chứng nhận chất lượng cho công trình.",
    "typicalTasks": [
      "Đúc mẫu bê tông hình lập phương 15x15x15cm và bảo dưỡng trong bể nước 28 ngày",
      "Đưa mẫu lên máy nén thủy lực để đo cường độ chịu nén thực tế",
      "Kéo thanh thép trên máy kéo vạn năng để kiểm tra độ giãn dài và giới hạn chảy"
    ],
    "deliverables": [
      "Phiếu kết quả thí nghiệm nén bê tông hợp chuẩn",
      "Báo cáo cơ lý đất đắp nền đường"
    ],
    "toolsUsed": [
      "Máy nén bê tông thủy lực 2000kN",
      "Máy kéo thép vạn năng",
      "Cân điện tử chính xác",
      "Tủ sấy mẫu đất"
    ],
    "workEnvironment": "Phòng thí nghiệm vật liệu xây dựng được Bộ Xây dựng cấp mã hiệu LAS-XD.",
    "difficultiesAndTradeoffs": [
      "Công việc thí nghiệm lặp đi lặp lại đòi hỏi tính trung thực, không được làm sai lệch số liệu",
      "Bê tông và đất đá khá nặng nhọc khi bốc dỡ mẫu"
    ],
    "coreSkills": [
      "Thao tác thí nghiệm chuẩn xác theo TCVN / ASTM",
      "Tính trung thực và đạo đức nghề nghiệp",
      "Kỹ năng ghi chép và xử lý số liệu"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Hóa học",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Thí nghiệm & Kiểm định vật liệu xây dựng"
      },
      {
        "level": "Trung cấp",
        "description": "Trung cấp Thí nghiệm xây dựng"
      }
    ],
    "entryPathway": "Cao đẳng: Cao đẳng Thí nghiệm & Kiểm định vật liệu xây dựng | Trung cấp: Trung cấp Thí nghiệm xây dựng",
    "trialActivity": "Tìm hiểu tại sao người ta phải chờ đủ 28 ngày sau khi đổ bê tông thì mới thử độ cứng chắc nhất của nó.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ thuật viên phòng thí nghiệm kiểm tra độ nén mẫu bê tông",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-cap-thoat-nuoc-cong-trinh",
    "title": "Kỹ sư Cấp thoát nước và Môi trường công trình (Water Supply & Drainage Engineer)",
    "englishTitle": "Plumbing & Public Health (PHE) Engineer",
    "synonyms": [
      "Kỹ sư cấp thoát nước",
      "Kỹ sư MEP nước"
    ],
    "group": "xay-dung",
    "category": "XayDung",
    "categoryLabel": "Xây dựng và hạ tầng",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Tính toán đường kính ống nước sạch, áp lực máy bơm tăng áp và thiết kế trạm xử lý nước thải sinh hoạt cho các khu chung cư cao tầng.",
    "typicalTasks": [
      "Tính toán lưu lượng dùng nước sinh hoạt vào giờ cao điểm của cư dân",
      "Bố trí mạng lưới đường ống cấp nước nóng lạnh và ống thoát nước thải",
      "Thiết kế trạm bơm cứu hỏa công suất lớn và bể nước ngầm phòng cháy"
    ],
    "deliverables": [
      "Bản vẽ sơ đồ nguyên lý cấp thoát nước",
      "Thuyết minh tính toán chọn máy bơm và thể tích bể chứa"
    ],
    "toolsUsed": [
      "Revit MEP",
      "AutoCAD",
      "WaterCAD",
      "EPANET"
    ],
    "workEnvironment": "Công ty thiết kế cơ điện công trình MEP, ban quản lý tòa nhà chung cư.",
    "difficultiesAndTradeoffs": [
      "Nếu thiết kế sai độ dốc ống thoát nước sẽ gây tắc nghẽn hoặc bốc mùi hôi thối khắp tòa nhà",
      "Phải phối hợp khéo léo để đường ống không đụng dầm kết cấu"
    ],
    "coreSkills": [
      "Thủy lực học đường ống và dòng chảy",
      "Thiết kế mạng lưới cấp thoát nước trên Revit",
      "Hiểu biết tiêu chuẩn phòng cháy chữa cháy"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Hóa học",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Cấp thoát nước hoặc Kỹ thuật Môi trường đô thị (ĐH Xây dựng, ĐH Kiến trúc)"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Cấp thoát nước hoặc Kỹ thuật Môi trường đô thị (ĐH Xây dựng, ĐH Kiến trúc)",
    "trialActivity": "Nhìn dưới bồn rửa mặt ở nhà xem chiếc ống xi-phông cong hình chữ U có tác dụng gì trong việc ngăn mùi hôi.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Hệ thống đường ống cấp nước và máy bơm hiện đại trong tầng kỹ thuật",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-nong-nghiep-nha-kinh",
    "title": "Kỹ sư Nông nghiệp công nghệ cao (Smart Greenhouse Agriculture Engineer)",
    "englishTitle": "Smart Greenhouse Agronomist",
    "synonyms": [
      "Kỹ sư nhà màng",
      "Agronomist"
    ],
    "group": "nong-nghiep",
    "category": "NongNghiep",
    "categoryLabel": "Nông nghiệp công nghệ cao và thủy sản",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Điều khiển hệ thống nhà kính thông minh, tư vấn dung dịch dinh dưỡng tưới nhỏ giọt tự động cho dâu tây, dưa lưới và hoa lan.",
    "typicalTasks": [
      "Cài đặt ngưỡng nhiệt độ, độ ẩm và thông gió tự động qua cảm biến IoT",
      "Pha chế công thức dung dịch dinh dưỡng khoáng đa vi lượng theo từng thời kỳ cây",
      "Theo dõi phát hiện sớm sâu bệnh qua lá và áp dụng biện pháp phòng trừ sinh học"
    ],
    "deliverables": [
      "Nhật ký chu kỳ sinh trưởng cây trồng nhà kính",
      "Công thức dung dịch dinh dưỡng thủy canh chuẩn"
    ],
    "toolsUsed": [
      "Hệ thống tưới nhỏ giọt Netafim",
      "Bút đo nồng độ dinh dưỡng EC và độ pH",
      "Hệ thống nhà màng IoT"
    ],
    "workEnvironment": "Khu nông nghiệp công nghệ cao (Đà Lạt, VinEco, Mộc Châu), trang trại dưa lưới hữu cơ.",
    "difficultiesAndTradeoffs": [
      "Thời tiết nắng nóng nhiệt độ trong nhà màng có thể lên tới 38-40 độ C",
      "Rủi ro dịch bệnh lây lan nhanh nếu không kiểm soát nguồn nước tưới"
    ],
    "coreSkills": [
      "Dinh dưỡng thực vật và sinh lý cây trồng",
      "Vận hành hệ thống tưới tự động",
      "Phòng trừ dịch hại tổng hợp IPM"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Hóa học",
      "Công nghệ"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Nông học, Nông nghiệp công nghệ cao (Học viện Nông nghiệp VN, ĐH Nông Lâm TP.HCM)"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Nông nghiệp công nghệ cao"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Nông học, Nông nghiệp công nghệ cao (Học viện Nông nghiệp VN, ĐH Nông Lâm TP.HCM) | Cao đẳng: Cao đẳng Nông nghiệp công nghệ cao",
    "trialActivity": "Thử gieo một hạt đậu xanh vào bông gòn ẩm và theo dõi tốc độ nhú mầm mỗi ngày.",
    "has3D": true,
    "simulationTaskId": "task-agriculture-3d",
    "experienceType": "3D_INTERACTIVE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhà kính thông minh trồng dâu tây trên giàn thủy canh",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-dinh-duong-cay-trong-thuy-canh",
    "title": "Chuyên viên Thủy canh và Dinh dưỡng cây trồng (Hydroponics Specialist)",
    "englishTitle": "Hydroponic Crop Nutritionist",
    "synonyms": [
      "Kỹ thuật viên thủy canh",
      "Crop Nutritionist"
    ],
    "group": "nong-nghiep",
    "category": "NongNghiep",
    "categoryLabel": "Nông nghiệp công nghệ cao và thủy sản",
    "riasecCodes": [
      "I",
      "R"
    ],
    "shortSummary": "Phân tích mẫu nước, cân bằng tỷ lệ N-P-K, Canxi, Magie và vi lượng trong hệ thống thủy canh hồi lưu giúp rau giòn ngọt và sạch tuyệt đối.",
    "typicalTasks": [
      "Đo đạc nồng độ dẫn điện EC và độ pH của dòng nước tuần hoàn 2 lần mỗi ngày",
      "Bổ sung vi lượng sắt chélat hóa tránh hiện tượng vàng lá",
      "Vệ sinh sát khuẩn bể chứa và màng rễ sau mỗi đợt thu hoạch rau"
    ],
    "deliverables": [
      "Quy trình pha dung dịch dinh dưỡng chuẩn theo ngày tuổi cây",
      "Báo cáo kiểm nghiệm hàm lượng Nitrat an toàn trong rau xà lách"
    ],
    "toolsUsed": [
      "Bút đo EC/pH kỹ thuật số",
      "Hệ thống ống thủy canh NFT",
      "Cân tiểu ly hóa chất"
    ],
    "workEnvironment": "Trang trại thủy canh nội đô, nông trại thẳng đứng (Vertical farm).",
    "difficultiesAndTradeoffs": [
      "Lệch độ pH một chút có thể làm rễ cây bị thối hàng loạt trong 24 giờ",
      "Công việc đòi hỏi tính tỉ mỉ khi cân đong từng gam hóa chất"
    ],
    "coreSkills": [
      "Hóa học vô cơ dung dịch",
      "Sinh học màng tế bào rễ cây",
      "Kỹ năng vận hành bơm tuần hoàn"
    ],
    "highSchoolSubjects": [
      "Hóa học",
      "Sinh học",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Nông hóa - Thổ nhưỡng hoặc Công nghệ sinh học"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Nông hóa - Thổ nhưỡng hoặc Công nghệ sinh học",
    "trialActivity": "Tìm hiểu tại sao cây trồng có thể lớn nhanh mà không cần một nắm đất nào trong phương pháp thủy canh.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Giàn rau thủy canh xanh mướt phát triển trong dung dịch dinh dưỡng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "bac-si-thu-y-trang-trai",
    "title": "Bác sĩ thú y trang trại hiện đại (Livestock Veterinarian)",
    "englishTitle": "Livestock Herd Veterinarian",
    "synonyms": [
      "Bác sĩ thú y",
      "Bác sĩ thú y trại heo / bò sữa"
    ],
    "group": "nong-nghiep",
    "category": "NongNghiep",
    "categoryLabel": "Nông nghiệp công nghệ cao và thủy sản",
    "riasecCodes": [
      "R",
      "I",
      "S"
    ],
    "shortSummary": "Tiêm phòng vaccine, theo dõi dịch tễ, siêu âm thai và điều trị bệnh cho đàn bò sữa, đàn heo hàng nghìn con tại các tập đoàn sữa lớn.",
    "typicalTasks": [
      "Tiêm vaccine phòng dịch bệnh theo lịch định kỳ nghiêm ngặt",
      "Sử dụng máy siêu âm cầm tay kiểm tra thai cho bò sữa",
      "Thiết lập hàng rào an toàn sinh học ngăn chặn dịch tả heo châu Phi"
    ],
    "deliverables": [
      "Sổ tay dịch tễ và tiêm phòng toàn trại",
      "Phác đồ điều trị bệnh lý thú y"
    ],
    "toolsUsed": [
      "Máy siêu âm thú y xách tay",
      "Bơm tiêm tự động liên tục",
      "Hệ thống sát trùng tiêu độc áp lực"
    ],
    "workEnvironment": "Trang trại chăn nuôi công nghiệp (TH True Milk, Vinamilk, CP Group, Masan).",
    "difficultiesAndTradeoffs": [
      "Mùi chất thải chăn nuôi và nguy cơ bị động vật đá hoặc cắn khi thăm khám",
      "Trực trại cách ly dài ngày không được về nhà để đảm bảo an toàn sinh học"
    ],
    "coreSkills": [
      "Chẩn đoán lâm sàng bệnh thú y",
      "Thao tác phẫu thuật và tiêm truyền trên động vật lớn",
      "Tình yêu thương động vật"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Hóa học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Bác sĩ Thú y (Đào tạo 5 năm tại Học viện Nông nghiệp VN, ĐH Nông Lâm)"
      }
    ],
    "entryPathway": "Đại học: Bác sĩ Thú y (Đào tạo 5 năm tại Học viện Nông nghiệp VN, ĐH Nông Lâm)",
    "trialActivity": "Tìm hiểu cách các trang trại bò sữa TH True Milk đeo vòng cổ điện tử cho từng con bò để theo dõi sức khỏe.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1527153857715-3908f2ae5e04?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Bác sĩ thú y thăm khám sức khỏe đàn bò sữa trên đồng cỏ",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-nuoi-trong-thuy-san-ras",
    "title": "Kỹ sư Thủy sản tuần hoàn (Recirculating Aquaculture - RAS Engineer)",
    "englishTitle": "Aquaculture Systems (RAS) Engineer",
    "synonyms": [
      "Kỹ sư nuôi tôm cá công nghệ cao",
      "Aquaculture Specialist"
    ],
    "group": "nong-nghiep",
    "category": "NongNghiep",
    "categoryLabel": "Nông nghiệp công nghệ cao và thủy sản",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Kiểm soát môi trường nước ao nuôi, lọc sinh học tuần hoàn RAS để nuôi tôm thẻ chân trắng siêu thâm canh và cá hồi trong nhà bè.",
    "typicalTasks": [
      "Kiểm tra nồng độ oxy hòa tan (DO), khí độc NH3, NO2 trong nước ao",
      "Vận hành hệ thống lọc vi sinh hạt động (MBBR) và máy tách bọt Protein Skimmer",
      "Tính toán khẩu phần thức ăn viên nổi theo trọng lượng tôm cá hàng tuần"
    ],
    "deliverables": [
      "Quy trình quản lý môi trường ao nuôi khép kín",
      "Nhật ký tăng trưởng đàn tôm cá và hệ số FCR"
    ],
    "toolsUsed": [
      "Máy đo DO oxy hòa tan",
      "Hệ thống lọc tuần hoàn RAS",
      "Máy cho ăn tự động"
    ],
    "workEnvironment": "Trang trại tôm công nghệ cao ở Bạc Liêu, Cà Mau; trại nuôi cá hồi Sa Pa.",
    "difficultiesAndTradeoffs": [
      "Trực đêm canh máy sục khí oxy, nếu mất điện 15 phút tôm cá có thể ngạt chết",
      "Làm việc trong môi trường ẩm ướt gió biển"
    ],
    "coreSkills": [
      "Hóa lý môi trường nước nuôi trồng thủy sản",
      "Kỹ thuật vi sinh xử lý chất thải hữu cơ",
      "Quản trị dịch bệnh thủy sản"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Hóa học",
      "Vật lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Nuôi trồng thủy sản hoặc Bệnh học thủy sản (ĐH Cần Thơ, ĐH Nha Trang)"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Nuôi trồng thủy sản hoặc Bệnh học thủy sản (ĐH Cần Thơ, ĐH Nha Trang)",
    "trialActivity": "Tìm hiểu hệ thống lọc sinh học biến chất thải của cá thành nước sạch tuần hoàn như thế nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Hệ thống bể nuôi thủy sản tuần hoàn công nghệ cao trong nhà",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-cong-nghe-sau-thu-hoach",
    "title": "Kỹ sư Công nghệ sau thu hoạch & Bảo quản (Post-harvest Engineer)",
    "englishTitle": "Post-harvest Food Preservation Engineer",
    "synonyms": [
      "Kỹ sư bảo quản nông sản",
      "Post-harvest Specialist"
    ],
    "group": "nong-nghiep",
    "category": "NongNghiep",
    "categoryLabel": "Nông nghiệp công nghệ cao và thủy sản",
    "riasecCodes": [
      "I",
      "R"
    ],
    "shortSummary": "Áp dụng công nghệ chiếu xạ, kho lạnh kiểm soát khí quyển (CA) và màng sinh học để giữ trái xoài, sầu riêng, thanh long tươi ngon xuất khẩu Mỹ, châu Âu.",
    "typicalTasks": [
      "Nghiên cứu tốc độ hô hấp và sản sinh khí Ethylene làm chín quả",
      "Thiết lập nhiệt độ và nồng độ khí O2, CO2 trong container lạnh xuất khẩu",
      "Thử nghiệm các loại màng sáp sinh học chiết xuất từ thiên nhiên an toàn"
    ],
    "deliverables": [
      "Quy trình bảo quản kéo dài tuổi thọ nông sản tươi",
      "Báo cáo thử nghiệm tỷ lệ hao hụt sau vận chuyển biển 30 ngày"
    ],
    "toolsUsed": [
      "Kho lạnh bảo quản khí quyển CA",
      "Máy đo độ ngọt Brix",
      "Máy đo độ cứng quả"
    ],
    "workEnvironment": "Trung tâm chiếu xạ nông sản xuất khẩu, nhà máy đóng gói trái cây xuất khẩu.",
    "difficultiesAndTradeoffs": [
      "Làm việc trong môi trường kho lạnh nhiệt độ thấp từ 2 đến 10 độ C",
      "Rủi ro cả lô hàng container hàng tỷ đồng bị hỏng nếu nhiệt độ dao động"
    ],
    "coreSkills": [
      "Sinh lý học sau thu hoạch",
      "Công nghệ lạnh và bảo quản lạnh",
      "Tiêu chuẩn kiểm dịch thực vật quốc tế"
    ],
    "highSchoolSubjects": [
      "Hóa học",
      "Sinh học",
      "Vật lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Công nghệ sau thu hoạch hoặc Công nghệ thực phẩm"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Công nghệ sau thu hoạch hoặc Công nghệ thực phẩm",
    "trialActivity": "Tìm hiểu tại sao quả chuối chín để cạnh quả xoài xanh thì quả xoài lại mau chín hơn bình thường.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Trái cây tươi xuất khẩu được xử lý và đóng gói trong kho lạnh",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-thuat-vien-drone-nong-nghiep",
    "title": "Kỹ thuật viên điều khiển Drone nông nghiệp (Agricultural Drone Pilot)",
    "englishTitle": "Agricultural Drone Operations Specialist",
    "synonyms": [
      "Phi công lái drone phun thuốc",
      "Agricultural Drone Operator"
    ],
    "group": "nong-nghiep",
    "category": "NongNghiep",
    "categoryLabel": "Nông nghiệp công nghệ cao và thủy sản",
    "riasecCodes": [
      "R",
      "C"
    ],
    "shortSummary": "Lập đường bay tự động, điều khiển máy bay không người lái phun thuốc trừ sâu sinh học, rải phân bón và đo sức khỏe cây trồng bằng camera đa phổ.",
    "typicalTasks": [
      "Khảo sát lập bản đồ ranh giới thửa ruộng trên ứng dụng điều khiển bay",
      "Pha chế phân bón lá và nạp vào bình chứa 30-50 lít của drone",
      "Vận hành bay phun tự động tiết kiệm 90% lượng nước và bảo vệ sức khỏe nông dân"
    ],
    "deliverables": [
      "Bản đồ chỉ số thực vật NDVI thể hiện vùng cây thiếu phân",
      "Nhật ký diện tích bay phun dịch vụ nông nghiệp"
    ],
    "toolsUsed": [
      "Drone nông nghiệp DJI Agras T40/T50",
      "Camera đa phổ cảm biến quang phổ",
      "Trạm phát pin sạc nhanh máy phát điện"
    ],
    "workEnvironment": "Cánh đồng lúa Đồng bằng sông Cửu Long, vườn cây ăn trái miền Đông Nam Bộ.",
    "difficultiesAndTradeoffs": [
      "Làm việc ngoài đồng ruộng nắng gắt từ sáng sớm",
      "Cần tập trung cao độ điều khiển tránh va chạm cột điện và ngọn cây"
    ],
    "coreSkills": [
      "Kỹ năng bay điều khiển thiết bị bay không người lái",
      "Bảo trì sửa chữa phần cứng và cánh quạt drone",
      "Hiểu biết về liều lượng nông dược an toàn"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Tin học",
      "Địa lý"
    ],
    "entryPathways": [
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Nghề Cơ điện tử nông nghiệp"
      },
      {
        "level": "Đào tạo nghề",
        "description": "Chứng chỉ đào tạo phi công điều khiển drone nông nghiệp chuyên nghiệp"
      }
    ],
    "entryPathway": "Cao đẳng: Cao đẳng Nghề Cơ điện tử nông nghiệp | Đào tạo nghề: Chứng chỉ đào tạo phi công điều khiển drone nông nghiệp chuyên nghiệp",
    "trialActivity": "Xem video chiếc drone nông nghiệp bay là là trên ngọn lúa phun sương mù mịn đều tăm tắp.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Drone nông nghiệp hiện đại bay phun sương trên cánh đồng lúa",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-chuoi-cung-ung-nong-san",
    "title": "Chuyên viên Quản lý chuỗi cung ứng nông sản sạch (Agri-Supply Chain Specialist)",
    "englishTitle": "Agri-Food Supply Chain Coordinator",
    "synonyms": [
      "Chuyên viên thu mua nông sản",
      "Agri-Supply Chain Planner"
    ],
    "group": "nong-nghiep",
    "category": "NongNghiep",
    "categoryLabel": "Nông nghiệp công nghệ cao và thủy sản",
    "riasecCodes": [
      "E",
      "C",
      "S"
    ],
    "shortSummary": "Kết nối các hợp tác xã nông dân với chuỗi siêu thị, đảm bảo rau củ quả thu hoạch sáng sớm được vận chuyển đến kệ hàng ngay trong ngày.",
    "typicalTasks": [
      "Khảo sát sản lượng và lịch thu hoạch mùa vụ tại các hợp tác xã",
      "Điều phối xe tải lạnh chuyên dụng vận chuyển chuỗi cung ứng lạnh (Cold Chain)",
      "Kiểm soát hao hụt dập nát và truy xuất nguồn gốc mã QR từng lô hàng"
    ],
    "deliverables": [
      "Hợp đồng bao tiêu nông sản dài hạn",
      "Hệ thống truy xuất nguồn gốc tem nhãn QR Code"
    ],
    "toolsUsed": [
      "Phần mềm quản lý kho WMS",
      "Hệ thống giám sát nhiệt độ xe lạnh GPS",
      "Mã vạch QR GS1"
    ],
    "workEnvironment": "Trung tâm phân phối nông sản, chuỗi siêu thị (Co.opmart, WinMart), chợ đầu mối.",
    "difficultiesAndTradeoffs": [
      "Nông sản tươi dễ hỏng nếu thời gian vận chuyển bị trễ giờ cao điểm",
      "Phải thường xuyên đi thực địa đàm phán giá thu mua với bà con nông dân"
    ],
    "coreSkills": [
      "Kỹ năng thương lượng thu mua",
      "Quản trị logistics chuỗi lạnh (Cold chain)",
      "Hiểu biết thời vụ nông nghiệp"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Địa lý",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Kinh tế nông nghiệp, Quản trị chuỗi cung ứng hoặc Thương mại"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Kinh tế nông nghiệp, Quản trị chuỗi cung ứng hoặc Thương mại",
    "trialActivity": "Quét thử mã QR trên bao bì một túi rau trong siêu thị xem có hiển thị ngày thu hoạch và tên trang trại không.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Rau củ quả tươi được kiểm tra và dán tem truy xuất nguồn gốc",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-chon-tao-giong-cay-trong",
    "title": "Kỹ sư Chọn tạo giống cây trồng (Plant Breeder / Seed Geneticist)",
    "englishTitle": "Plant Geneticist & Breeder",
    "synonyms": [
      "Kỹ sư giống cây trồng",
      "Plant Breeder"
    ],
    "group": "nong-nghiep",
    "category": "NongNghiep",
    "categoryLabel": "Nông nghiệp công nghệ cao và thủy sản",
    "riasecCodes": [
      "I",
      "R"
    ],
    "shortSummary": "Thụ phấn nhân tạo, lai tạo các dòng bố mẹ để tạo ra giống lúa chịu mặn, giống ngô kháng sâu bệnh và năng suất vượt trội.",
    "typicalTasks": [
      "Tiến hành thụ phấn nhân tạo hoa lúa bằng tay trong phòng thí nghiệm",
      "Đánh giá khả năng chịu mặn, chịu hạn của các dòng giống mới trong nhà lưới",
      "Làm thủ tục khảo nghiệm giống quốc gia để được công nhận lưu hành"
    ],
    "deliverables": [
      "Hồ sơ đăng ký bảo hộ giống cây trồng mới",
      "Bộ hạt giống đầu dòng F1 có đặc tính ưu việt"
    ],
    "toolsUsed": [
      "Phòng thí nghiệm sinh học phân tử",
      "Kính hiển vi soi hạt phấn",
      "Dụng cụ thụ phấn chuyên dụng"
    ],
    "workEnvironment": "Viện nghiên cứu lúa ĐBSCL, Viện cây lương thực, các công ty hạt giống quốc tế (Bayer, Syngenta, Vinaseed).",
    "difficultiesAndTradeoffs": [
      "Để tạo ra một giống cây trồng mới ổn định mất từ 5 đến 8 năm kiên trì",
      "Nhiều mẻ lai tạo thất bại không mang lại năng suất như kỳ vọng"
    ],
    "coreSkills": [
      "Di truyền học thực vật và chọn giống",
      "Kỹ năng thực hành lai tạo tỉ mỉ",
      "Tính kiên nhẫn bền bỉ theo đuổi mục tiêu lâu dài"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Toán học",
      "Hóa học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Di truyền & Chọn tạo giống cây trồng hoặc Công nghệ sinh học nông nghiệp"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Di truyền & Chọn tạo giống cây trồng hoặc Công nghệ sinh học nông nghiệp",
    "trialActivity": "Tìm hiểu về giống gạo ngon nhất thế giới ST25 của kỹ sư Hồ Quang Cua được lai tạo công phu qua hơn 20 năm.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư lai tạo giống kiểm tra từng bông lúa trĩu hạt trên đồng thí nghiệm",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "giam-doc-trang-trai-sinh-thai",
    "title": "Giám đốc Trang trại sinh thái thông minh (Smart Eco-Farm Manager)",
    "englishTitle": "Sustainable & Eco-Farm General Manager",
    "synonyms": [
      "Chủ trang trại sinh thái",
      "Farm Manager"
    ],
    "group": "nong-nghiep",
    "category": "NongNghiep",
    "categoryLabel": "Nông nghiệp công nghệ cao và thủy sản",
    "riasecCodes": [
      "E",
      "R",
      "S"
    ],
    "shortSummary": "Xây dựng mô hình nông nghiệp tuần hoàn không rác thải: kết hợp trồng trọt, chăn nuôi, năng lượng mặt trời và đón khách du lịch trải nghiệm.",
    "typicalTasks": [
      "Lập kế hoạch canh tác luân canh và tái chế chất thải thành phân hữu cơ vi sinh",
      "Tổ chức các tour giáo dục trải nghiệm làm nông dân cho học sinh thành phố",
      "Quản lý doanh thu bán nông sản sạch và dịch vụ lưu trú farmstay"
    ],
    "deliverables": [
      "Kế hoạch kinh doanh trang trại sinh thái bền vững",
      "Chương trình tour giáo dục trải nghiệm nông nghiệp xanh"
    ],
    "toolsUsed": [
      "Hệ thống ủ phân Compost vi sinh",
      "Phần mềm kế toán trang trại",
      "Nền tảng đặt phòng trực tuyến Farmstay"
    ],
    "workEnvironment": "Trang trại nông nghiệp sinh thái ngoại ô, vùng đồi núi du lịch sinh thái.",
    "difficultiesAndTradeoffs": [
      "Vừa phải am hiểu kỹ thuật nông nghiệp vừa phải giỏi kinh doanh dịch vụ",
      "Chịu ảnh hưởng trực tiếp của biến động thời tiết thiên tai"
    ],
    "coreSkills": [
      "Tư duy nông nghiệp tuần hoàn bền vững",
      "Kỹ năng quản trị kinh doanh và nhân sự",
      "Tổ chức hoạt động trải nghiệm cộng đồng"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Giáo dục kinh tế và pháp luật",
      "Địa lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị kinh doanh nông nghiệp, Nông học hoặc Du lịch sinh thái"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị kinh doanh nông nghiệp, Nông học hoặc Du lịch sinh thái",
    "trialActivity": "Lên ý tưởng cho một trang trại nhỏ: chất thải từ nuôi gà sẽ được tái sử dụng để bón cho vườn cây ăn trái như thế nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Toàn cảnh trang trại sinh thái xanh mướt kết hợp trồng trọt và du lịch",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-chung-nhan-vietgap-globalgap",
    "title": "Chuyên viên Chứng nhận Tiêu chuẩn Nông nghiệp (VietGAP / GlobalGAP Auditor)",
    "englishTitle": "Agricultural Quality & GAP Standards Auditor",
    "synonyms": [
      "Chuyên gia đánh giá VietGAP",
      "GAP Auditor"
    ],
    "group": "nong-nghiep",
    "category": "NongNghiep",
    "categoryLabel": "Nông nghiệp công nghệ cao và thủy sản",
    "riasecCodes": [
      "C",
      "I",
      "R"
    ],
    "shortSummary": "Thanh tra thực địa, lấy mẫu đất, mẫu nước và kiểm tra nhật ký bón phân để cấp giấy chứng nhận tiêu chuẩn an toàn VietGAP, GlobalGAP, Organic.",
    "typicalTasks": [
      "Kiểm tra kho chứa thuốc bảo vệ thực vật và trang thiết bị bảo hộ của trang trại",
      "Lấy mẫu rau quả gửi phòng thí nghiệm phân tích dư lượng kim loại nặng và hóa chất",
      "Lập báo cáo đánh giá sự không phù hợp và hướng dẫn trang trại khắc phục"
    ],
    "deliverables": [
      "Biên bản đánh giá hiện trường trang trại",
      "Chứng chỉ chứng nhận VietGAP / GlobalGAP chính thức"
    ],
    "toolsUsed": [
      "Bộ dụng cụ lấy mẫu đất và nước chuẩn",
      "Bảng kiểm đánh giá tiêu chuẩn GAP (Checklist)",
      "Máy chụp ảnh bằng chứng hiện trường"
    ],
    "workEnvironment": "Các tổ chức chứng nhận chất lượng độc lập, đi công tác thanh tra tại các vùng trồng trên toàn quốc.",
    "difficultiesAndTradeoffs": [
      "Phải giữ vững tính độc lập khách quan, không thỏa hiệp với các sai phạm an toàn thực phẩm",
      "Di chuyển liên tục đến các vùng nông thôn hẻo lánh"
    ],
    "coreSkills": [
      "Nắm vững tiêu chuẩn an toàn thực phẩm quốc tế",
      "Kỹ năng phỏng vấn và kiểm tra hồ sơ bằng chứng",
      "Tính chính trực và công tâm"
    ],
    "highSchoolSubjects": [
      "Hóa học",
      "Sinh học",
      "Giáo dục kinh tế và pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Công nghệ thực phẩm, Bảo vệ thực vật hoặc Quản lý chất lượng"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Công nghệ thực phẩm, Bảo vệ thực vật hoặc Quản lý chất lượng",
    "trialActivity": "Tìm hiểu tiêu chuẩn GlobalGAP đòi hỏi người nông dân phải ghi chép nhật ký canh tác tỉ mỉ như thế nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên kiểm tra chất lượng nông sản đối chiếu tiêu chuẩn an toàn",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "bac-si-da-khoa-noi-khoa",
    "title": "Bác sĩ Nội khoa (Internal Medicine Physician)",
    "englishTitle": "Internal Medicine Physician",
    "synonyms": [
      "Bác sĩ nội",
      "Bác sĩ lâm sàng"
    ],
    "group": "y-te",
    "category": "YTe",
    "categoryLabel": "Y tế, chăm sóc sức khỏe và phục hồi",
    "riasecCodes": [
      "I",
      "S"
    ],
    "shortSummary": "Thăm khám lâm sàng, chỉ định xét nghiệm, chẩn đoán các bệnh lý tim mạch, huyết áp, tiểu đường và kê đơn thuốc điều trị phục hồi.",
    "typicalTasks": [
      "Nghe tim phổi bằng ống nghe và thăm khám tổng quát",
      "Phân tích kết quả xét nghiệm máu, điện tim và phim chụp X-quang",
      "Giải thích bệnh án thấu đáo và tư vấn chế độ ăn uống, tập luyện cho bệnh nhân"
    ],
    "deliverables": [
      "Hồ sơ bệnh án điện tử chuẩn hóa",
      "Đơn thuốc điều trị an toàn, hợp lý"
    ],
    "toolsUsed": [
      "Ống nghe y tế chuyên dụng",
      "Máy đo huyết áp thủy ngân",
      "Đèn soi đáy mắt",
      "Hệ thống phần mềm bệnh viện HIS"
    ],
    "workEnvironment": "Khoa khám bệnh, khoa nội tổng hợp các bệnh viện tuyến tỉnh, trung ương.",
    "difficultiesAndTradeoffs": [
      "Áp lực quá tải bệnh nhân, mỗi buổi sáng phải khám từ 40 đến 60 người",
      "Bệnh lý mạn tính đòi hỏi bác sĩ phải kiên trì theo dõi lâu dài"
    ],
    "coreSkills": [
      "Tư duy chẩn đoán phân biệt nhạy bén",
      "Kỹ năng giao tiếp thấu cảm với người bệnh",
      "Cập nhật phác đồ điều trị y học chứng cứ liên tục"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Hóa học",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Bác sĩ Đa khoa (Đào tạo 6 năm tại ĐH Y Hà Nội, ĐH Y Dược TP.HCM) + 18 tháng thực hành cấp chứng chỉ hành nghề"
      }
    ],
    "entryPathway": "Đại học: Bác sĩ Đa khoa (Đào tạo 6 năm tại ĐH Y Hà Nội, ĐH Y Dược TP.HCM) + 18 tháng thực hành cấp chứng chỉ hành nghề",
    "trialActivity": "Thử đếm nhịp mạch đập ở cổ tay của mình trong 1 phút khi ngồi nghỉ ngơi xem được bao nhiêu nhịp.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Bác sĩ nội khoa thăm khám và lắng nghe nhịp tim người bệnh",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "bac-si-ngoai-khoa-phau-thuat",
    "title": "Bác sĩ Ngoại khoa phẫu thuật (General Surgeon)",
    "englishTitle": "General & Laparoscopic Surgeon",
    "synonyms": [
      "Bác sĩ mổ",
      "Phẫu thuật viên"
    ],
    "group": "y-te",
    "category": "YTe",
    "categoryLabel": "Y tế, chăm sóc sức khỏe và phục hồi",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Trực tiếp thực hiện các ca phẫu thuật mổ mở và phẫu thuật nội soi xâm lấn tối thiểu cấp cứu ruột thừa, sỏi túi mật hay chấn thương bụng.",
    "typicalTasks": [
      "Rửa tay vô khuẩn và mặc áo mổ theo quy chuẩn nghiêm ngặt",
      "Thao tác dao mổ, kẹp phẫu thuật và máy đốt điện chính xác từng milimet",
      "Xử lý cầm máu nhanh chóng và khâu phục hồi các lớp giải phẫu"
    ],
    "deliverables": [
      "Biên bản phẫu thuật chi tiết",
      "Bệnh nhân qua cơn nguy kịch hồi phục ổn định"
    ],
    "toolsUsed": [
      "Dàn máy phẫu thuật nội soi 4K",
      "Dao mổ điện lưỡng cực",
      "Chỉ khâu phẫu thuật tự tiêu",
      "Dụng cụ kẹp phẫu tích"
    ],
    "workEnvironment": "Phòng mổ vô khuẩn áp lực dương tại các bệnh viện.",
    "difficultiesAndTradeoffs": [
      "Đứng liên tục từ 3 đến 8 tiếng trong phòng mổ cho một ca phẫu thuật phức tạp",
      "Áp lực sinh mạng nghìn cân treo sợi tóc khi xảy ra sự cố chảy máu ồ ạt"
    ],
    "coreSkills": [
      "Đôi bàn tay khéo léo, dẻo dai và không run",
      "Thần kinh thép giữ bình tĩnh tuyệt đối trong hiểm cảnh",
      "Hiểu biết tường tận về giải phẫu học cơ thể người"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Vật lý",
      "Hóa học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Bác sĩ Đa khoa (6 năm) + Bác sĩ Nội trú / Chuyên khoa 1 Ngoại khoa (3 năm)"
      }
    ],
    "entryPathway": "Đại học: Bác sĩ Đa khoa (6 năm) + Bác sĩ Nội trú / Chuyên khoa 1 Ngoại khoa (3 năm)",
    "trialActivity": "Thử dùng nhíp gắp từng hạt gạo bỏ vào một chiếc lọ nhỏ cổ hẹp mà không để rơi ra ngoài.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Bác sĩ phẫu thuật tập trung cao độ trong phòng mổ vô khuẩn",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "dieu-duong-vien-cap-cuu",
    "title": "Điều dưỡng viên Hồi sức cấp cứu (Emergency & Critical Care Nurse)",
    "englishTitle": "Critical Care / Emergency Registered Nurse",
    "synonyms": [
      "Y tá cấp cứu",
      "Điều dưỡng ICU"
    ],
    "group": "y-te",
    "category": "YTe",
    "categoryLabel": "Y tế, chăm sóc sức khỏe và phục hồi",
    "riasecCodes": [
      "S",
      "R"
    ],
    "shortSummary": "Đặt đường truyền tĩnh mạch, ép tim ngoài lồng ngực, theo dõi máy thở và túc trực bên giường bệnh nhân nặng suốt ca trực 24/7.",
    "typicalTasks": [
      "Lấy ven tĩnh mạch nhanh chóng trong tình huống khẩn cấp",
      "Cài đặt thông số máy thở và theo dõi nồng độ oxy máu SpO2 trên máy monitor",
      "Thực hiện y lệnh dùng thuốc cấp cứu chính xác theo từng phút"
    ],
    "deliverables": [
      "Hồ sơ chăm sóc điều dưỡng chi tiết từng giờ",
      "Bệnh nhân nguy kịch được kiểm soát chỉ số sinh tồn ổn định"
    ],
    "toolsUsed": [
      "Máy theo dõi monitor 5 thông số",
      "Máy sốc điện tim khử rung",
      "Bơm tiêm điện tự động",
      "Bóng bóp oxy Ambu"
    ],
    "workEnvironment": "Khoa cấp cứu 115, khoa hồi sức tích cực ICU bệnh viện.",
    "difficultiesAndTradeoffs": [
      "Trực ca đêm dày đặc làm đảo lộn đồng hồ sinh học",
      "Thường xuyên chứng kiến nỗi đau mất mát và áp lực từ phía người nhà bệnh nhân"
    ],
    "coreSkills": [
      "Phản xạ cấp cứu nhanh nhẹn, chính xác",
      "Lòng trắc ẩn và tinh thần phụng sự người bệnh",
      "Kỹ thuật điều dưỡng vô khuẩn chuẩn mực"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Hóa học",
      "Giáo dục công dân"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Điều dưỡng (4 năm)"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Điều dưỡng chính quy"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Điều dưỡng (4 năm) | Cao đẳng: Cao đẳng Điều dưỡng chính quy",
    "trialActivity": "Tìm hiểu các bước ép tim sơ cấp cứu cơ bản (CPR) khi gặp người bất tỉnh ngừng thở ngoài đường.",
    "has3D": false,
    "simulationTaskId": "task-y-te",
    "experienceType": "SCENARIO_SIMULATION",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Điều dưỡng viên kiểm tra máy thở và chăm sóc người bệnh",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-thuat-vien-chan-doan-hinh-anh",
    "title": "Kỹ thuật viên Chẩn đoán hình ảnh (Radiologic Technologist)",
    "englishTitle": "Medical Radiologic Technologist",
    "synonyms": [
      "Kỹ thuật viên X-quang",
      "Kỹ thuật viên MRI / CT"
    ],
    "group": "y-te",
    "category": "YTe",
    "categoryLabel": "Y tế, chăm sóc sức khỏe và phục hồi",
    "riasecCodes": [
      "R",
      "C"
    ],
    "shortSummary": "Điều khiển máy chụp X-quang, cắt lớp vi tính CT Scanner và cộng hưởng từ MRI để ghi lại hình ảnh sắc nét bên trong xương khớp, não bộ.",
    "typicalTasks": [
      "Hướng dẫn bệnh nhân đứng đúng tư thế chụp và mặc áo chì chắn tia xạ",
      "Cài đặt liều lượng tia X và chuỗi xung chụp MRI phù hợp",
      "Xử lý tái tạo hình ảnh 3D xương khớp chuyển bác sĩ đọc kết quả"
    ],
    "deliverables": [
      "Phim chụp X-quang / CT đạt chuẩn kỹ thuật sắc nét",
      "Tệp hình ảnh số y tế chuẩn DICOM lưu trữ hệ thống PACS"
    ],
    "toolsUsed": [
      "Máy cộng hưởng từ MRI 1.5T / 3.0T",
      "Máy chụp cắt lớp CT 128 lát cắt",
      "Máy chụp X-quang kỹ thuật số DR"
    ],
    "workEnvironment": "Khoa chẩn đoán hình ảnh tại các bệnh viện và phòng khám hiện đại.",
    "difficultiesAndTradeoffs": [
      "Làm việc trong môi trường có bức xạ ion hóa đòi hỏi kỷ luật an toàn tia xạ nghiêm ngặt",
      "Phải hỗ trợ di chuyển bệnh nhân nặng bất động lên bàn chụp"
    ],
    "coreSkills": [
      "Thao tác điều khiển máy móc y tế công nghệ cao",
      "Hiểu biết giải phẫu không gian 3D",
      "Giao tiếp ân cần hướng dẫn người bệnh"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Sinh học",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Kỹ thuật Chẩn đoán hình ảnh y học (4 năm)"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Kỹ thuật Hình ảnh y học"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Kỹ thuật Chẩn đoán hình ảnh y học (4 năm) | Cao đẳng: Cao đẳng Kỹ thuật Hình ảnh y học",
    "trialActivity": "Xem một tấm phim chụp X-quang xương bàn tay để thấy các đốt xương hiển thị màu trắng sáng trên nền đen.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ thuật viên điều khiển phòng chụp cộng hưởng từ MRI",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "bac-si-rang-ham-mat",
    "title": "Bác sĩ Răng Hàm Mặt (Dentist / Orthodontist)",
    "englishTitle": "Doctor of Dental Surgery (DDS)",
    "synonyms": [
      "Nha sĩ",
      "Bác sĩ chỉnh nha niềng răng"
    ],
    "group": "y-te",
    "category": "YTe",
    "categoryLabel": "Y tế, chăm sóc sức khỏe và phục hồi",
    "riasecCodes": [
      "R",
      "A",
      "I"
    ],
    "shortSummary": "Nhổ răng khôn không đau, điều trị tủy, cấy ghép trụ Implant và niềng răng thẩm mỹ mang lại nụ cười tự tin cho khách hàng.",
    "typicalTasks": [
      "Khám tổng quát răng miệng và đọc phim chụp toàn cảnh Panorama",
      "Gây tê tại chỗ và thực hiện trám răng thẩm mỹ bằng Composite",
      "Lấy dấu răng và lập phác đồ dịch chuyển răng niềng từng tháng"
    ],
    "deliverables": [
      "Hàm răng sạch sâu, chắc khỏe và nụ cười thẩm mỹ",
      "Hồ sơ theo dõi chỉnh nha định kỳ"
    ],
    "toolsUsed": [
      "Ghế nha khoa tích hợp tay khoan cao tốc",
      "Máy cấy ghép Implant",
      "Máy quét dấu răng 3D kỹ thuật số"
    ],
    "workEnvironment": "Bệnh viện Răng Hàm Mặt, phòng khám nha khoa thẩm mỹ tư nhân.",
    "difficultiesAndTradeoffs": [
      "Tư thế ngồi cúi đầu liên tục dễ dẫn đến thoái hóa đốt sống cổ và đau lưng",
      "Khách hàng thường mang tâm lý sợ hãi tiếng máy khoan nha khoa"
    ],
    "coreSkills": [
      "Sự khéo léo tỉ mỉ đôi bàn tay trong khoang miệng hẹp",
      "Thẩm mỹ nụ cười và khớp cắn",
      "Kỹ năng xoa dịu tâm lý lo âu của khách"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Mỹ thuật",
      "Hóa học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Bác sĩ Răng Hàm Mặt (Đào tạo 6 năm tại ĐH Y Hà Nội, ĐH Y Dược TP.HCM)"
      }
    ],
    "entryPathway": "Đại học: Bác sĩ Răng Hàm Mặt (Đào tạo 6 năm tại ĐH Y Hà Nội, ĐH Y Dược TP.HCM)",
    "trialActivity": "Nhìn vào gương đếm xem hàm răng của mình có bao nhiêu chiếc răng và chiếc răng nào đang mọc lệch.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nha sĩ thăm khám răng miệng cho bệnh nhân trên ghế nha khoa",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "bac-si-y-hoc-co-truyen",
    "title": "Bác sĩ Y học cổ truyền (Traditional Medicine Physician)",
    "englishTitle": "Traditional Chinese & Vietnamese Medicine Physician",
    "synonyms": [
      "Bác sĩ đông y",
      "Bác sĩ châm cứu bấm huyệt"
    ],
    "group": "y-te",
    "category": "YTe",
    "categoryLabel": "Y tế, chăm sóc sức khỏe và phục hồi",
    "riasecCodes": [
      "I",
      "S",
      "R"
    ],
    "shortSummary": "Bắt mạch, chẩn đoán âm dương khí huyết, châm cứu thông kinh lạc và kê các bài thuốc thang thảo mộc chữa đau nhức xương khớp mạn tính.",
    "typicalTasks": [
      "Bắt mạch ở cổ tay và xem sắc thái lưỡi (Thiệt chẩn)",
      "Châm kim cứu huyệt đạo điều trị đau thần kinh tọa, liệt mặt",
      "Kê đơn thuốc bắc, thuốc nam bốc theo thang sắc uống"
    ],
    "deliverables": [
      "Phác đồ châm cứu phục hồi chức năng kinh lạc",
      "Đơn thuốc thang thảo dược gia giảm"
    ],
    "toolsUsed": [
      "Kim châm cứu vô khuẩn dùng một lần",
      "Máy điện châm đa năng",
      "Cân thuốc đông y",
      "Cứu ngải đoạn"
    ],
    "workEnvironment": "Bệnh viện Y học cổ truyền, khoa đông y bệnh viện đa khoa, phòng chẩn trị đông y.",
    "difficultiesAndTradeoffs": [
      "Học thuộc hàng trăm bài thuốc cổ phương và vị trí huyệt đạo phức tạp",
      "Mùi khói ngải cứu và mùi thảo dược sắc thuốc bao quanh cả ngày"
    ],
    "coreSkills": [
      "Cảm nhận xúc giác tinh tế khi bắt mạch",
      "Kiến thức lý luận y học phương Đông sâu sắc",
      "Thao tác châm cứu chuẩn xác không gây đau"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Văn hóa học",
      "Ngữ văn (Chữ Hán - Nôm y học)"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Bác sĩ Y học cổ truyền (Đào tạo 6 năm tại Học viện Y Dược học Cổ truyền VN, ĐH Y Dược)"
      }
    ],
    "entryPathway": "Đại học: Bác sĩ Y học cổ truyền (Đào tạo 6 năm tại Học viện Y Dược học Cổ truyền VN, ĐH Y Dược)",
    "trialActivity": "Tìm hiểu về danh y Tuệ Tĩnh với tư tưởng bất hủ: 'Nam dược trị Nam nhân' (Thuốc nam chữa bệnh người Việt Nam).",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Bác sĩ bắt mạch và bốc các vị thuốc thảo mộc đông y",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-thuat-vien-phuc-hoi-chuc-nang",
    "title": "Kỹ thuật viên Phục hồi chức năng (Physiotherapist)",
    "englishTitle": "Physical Therapist & Rehabilitation Specialist",
    "synonyms": [
      "Kỹ thuật viên vật lý trị liệu",
      "Physiotherapist"
    ],
    "group": "y-te",
    "category": "YTe",
    "categoryLabel": "Y tế, chăm sóc sức khỏe và phục hồi",
    "riasecCodes": [
      "S",
      "R"
    ],
    "shortSummary": "Hướng dẫn tập vận động, dùng sóng ngắn, siêu âm trị liệu giúp người sau đột quỵ, tai nạn đi lại và tự sinh hoạt bình thường.",
    "typicalTasks": [
      "Đánh giá tầm vận động khớp và sức mạnh cơ bắp của bệnh nhân",
      "Hướng dẫn bệnh nhân tập đi trong thanh song song và tập đứng thăng bằng",
      "Chiếu đèn hồng ngoại, siêu âm trị liệu giảm đau cứng khớp"
    ],
    "deliverables": [
      "Kế hoạch can thiệp tập phục hồi chức năng từng giai đoạn",
      "Bệnh nhân lấy lại khả năng tự đi lại và sinh hoạt"
    ],
    "toolsUsed": [
      "Thanh song song tập đi",
      "Bóng tập thăng bằng Bobath",
      "Máy điện xung kích thích thần kinh",
      "Gương soi tập dáng đi"
    ],
    "workEnvironment": "Khoa phục hồi chức năng bệnh viện, trung tâm chỉnh hình, viện dưỡng lão.",
    "difficultiesAndTradeoffs": [
      "Cần nhiều sức lực thể chất để nâng đỡ, dìu bệnh nhân tập vận động",
      "Đòi hỏi lòng kiên nhẫn vô bờ vì sự tiến bộ của bệnh nhân diễn ra từng chút một"
    ],
    "coreSkills": [
      "Kỹ năng xoa bóp và kéo giãn cơ xương khớp",
      "Khả năng động viên khích lệ tinh thần người bệnh",
      "Hiểu biết về cơ sinh học vận động"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Vật lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Kỹ thuật Phục hồi chức năng (4 năm)"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Vật lý trị liệu & Phục hồi chức năng"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Kỹ thuật Phục hồi chức năng (4 năm) | Cao đẳng: Cao đẳng Vật lý trị liệu & Phục hồi chức năng",
    "trialActivity": "Thử đứng một chân nhắm mắt lại trong 30 giây để kiểm tra khả năng giữ thăng bằng của não bộ.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ thuật viên vật lý trị liệu hướng dẫn người bệnh tập vận động",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "bac-si-nhi-khoa",
    "title": "Bác sĩ Nhi khoa (Pediatrician)",
    "englishTitle": "Pediatrician",
    "synonyms": [
      "Bác sĩ nhi",
      "Pediatric Specialist"
    ],
    "group": "y-te",
    "category": "YTe",
    "categoryLabel": "Y tế, chăm sóc sức khỏe và phục hồi",
    "riasecCodes": [
      "S",
      "I"
    ],
    "shortSummary": "Thăm khám, chữa trị các bệnh viêm họng, sốt xuất huyết, viêm phế quản và tư vấn dinh dưỡng, tiêm chủng cho trẻ sơ sinh và trẻ nhỏ.",
    "typicalTasks": [
      "Thăm khám nhẹ nhàng, làm bạn với trẻ để bé không quấy khóc",
      "Chẩn đoán chính xác và tính toán liều lượng thuốc nghiêm ngặt theo cân nặng của bé",
      "Hướng dẫn cha mẹ cách chăm sóc hạ sốt đúng cách tại nhà"
    ],
    "deliverables": [
      "Bệnh án nhi khoa an toàn",
      "Phác đồ điều trị hạn chế lạm dụng kháng sinh cho trẻ"
    ],
    "toolsUsed": [
      "Ống nghe y tế đầu nhỏ nhi khoa",
      "Nhiệt kế đo trán hồng ngoại",
      "Bảng theo dõi biểu đồ tăng trưởng WHO"
    ],
    "workEnvironment": "Bệnh viện Nhi Trung ương, khoa nhi bệnh viện đa khoa, phòng khám nhi.",
    "difficultiesAndTradeoffs": [
      "Trẻ nhỏ chưa biết nói triệu chứng đau ở đâu nên chẩn đoán đòi hỏi bác sĩ cực kỳ tinh ý",
      "Tiếng trẻ quấy khóc liên tục và áp lực tâm lý từ sự sốt ruột của cha mẹ"
    ],
    "coreSkills": [
      "Tình yêu thương con trẻ sâu sắc",
      "Khả năng quan sát tinh tế các dấu hiệu lâm sàng sớm",
      "Kỹ năng giao tiếp trấn an phụ huynh"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Tâm lý học",
      "Hóa học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Bác sĩ Đa khoa (6 năm) + Bác sĩ Chuyên khoa Nhi (3 năm)"
      }
    ],
    "entryPathway": "Đại học: Bác sĩ Đa khoa (6 năm) + Bác sĩ Chuyên khoa Nhi (3 năm)",
    "trialActivity": "Quan sát cách bác sĩ nhi dỗ dành một em bé trước khi đặt ống nghe vào ngực bé.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Bác sĩ nhi khoa mỉm cười thăm khám cho em bé sơ sinh",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-thuat-vien-xet-nghiem-y-hoc",
    "title": "Kỹ thuật viên Xét nghiệm y học (Medical Laboratory Technologist)",
    "englishTitle": "Medical Laboratory Technologist",
    "synonyms": [
      "Kỹ thuật viên xét nghiệm",
      "Lab Tech y khoa"
    ],
    "group": "y-te",
    "category": "YTe",
    "categoryLabel": "Y tế, chăm sóc sức khỏe và phục hồi",
    "riasecCodes": [
      "C",
      "I",
      "R"
    ],
    "shortSummary": "Lấy mẫu máu, soi kính hiển vi và vận hành các máy xét nghiệm huyết học, sinh hóa tự động hỗ trợ bác sĩ chẩn đoán chính xác bệnh.",
    "typicalTasks": [
      "Lấy máu tĩnh mạch không đau cho bệnh nhân",
      "Nạp mẫu vào hệ thống máy phân tích sinh hóa tự động",
      "Soi kính hiển vi đếm tế bào bạch cầu và phát hiện ký sinh trùng sốt rét"
    ],
    "deliverables": [
      "Phiếu kết quả xét nghiệm sinh hóa máu chuẩn xác",
      "Biên bản kiểm tra chất lượng nội kiểm hàng ngày"
    ],
    "toolsUsed": [
      "Máy xét nghiệm sinh hóa tự động",
      "Máy phân tích huyết học 24 thông số",
      "Kính hiển vi quang học độ phóng đại 1000x"
    ],
    "workEnvironment": "Phòng xét nghiệm trung tâm bệnh viện, trung tâm y tế dự phòng.",
    "difficultiesAndTradeoffs": [
      "Tiếp xúc hàng ngày với mẫu máu và dịch bệnh phẩm có nguy cơ lây nhiễm",
      "Áp lực trả kết quả xét nghiệm cấp cứu trong vòng 30 phút"
    ],
    "coreSkills": [
      "Thao tác phòng xét nghiệm cẩn trọng, tỉ mỉ",
      "Tuân thủ an toàn sinh học cấp 2",
      "Kỹ năng đọc tiêu bản tế bào"
    ],
    "highSchoolSubjects": [
      "Hóa học",
      "Sinh học",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Kỹ thuật Xét nghiệm y học (4 năm tại ĐH Y)"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Kỹ thuật Xét nghiệm"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Kỹ thuật Xét nghiệm y học (4 năm tại ĐH Y) | Cao đẳng: Cao đẳng Kỹ thuật Xét nghiệm",
    "trialActivity": "Tìm hiểu về 4 nhóm máu cơ bản A, B, AB, O và tại sao phải thử phản ứng chéo trước khi truyền máu.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ thuật viên xét nghiệm soi tiêu bản máu dưới kính hiển vi",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-dinh-duong-lam-sang",
    "title": "Chuyên viên Dinh dưỡng lâm sàng (Clinical Dietitian / Nutritionist)",
    "englishTitle": "Clinical Dietitian & Nutritionist",
    "synonyms": [
      "Chuyên gia dinh dưỡng bệnh viện",
      "Dietitian"
    ],
    "group": "y-te",
    "category": "YTe",
    "categoryLabel": "Y tế, chăm sóc sức khỏe và phục hồi",
    "riasecCodes": [
      "I",
      "S",
      "C"
    ],
    "shortSummary": "Thiết kế thực đơn dinh dưỡng trị liệu cho bệnh nhân tiểu đường, suy thận, sau phẫu thuật và tính toán lượng calo ăn qua sonde dạ dày.",
    "typicalTasks": [
      "Đánh giá tình trạng dinh dưỡng (BMI, nếp gấp da, albumin máu) của bệnh nhân",
      "Lên thực đơn ăn bệnh lý cá nhân hóa theo từng gram đạm, béo, đường",
      "Tư vấn dinh dưỡng phục hồi sức khỏe cho người bệnh trước khi xuất viện"
    ],
    "deliverables": [
      "Thực đơn dinh dưỡng bệnh lý chuyên biệt",
      "Hồ sơ theo dõi cải thiện cân nặng bệnh nhân"
    ],
    "toolsUsed": [
      "Phần mềm tính toán khẩu phần dinh dưỡng",
      "Thước đo nếp gấp da caliper",
      "Cân đo phân tích thành phần cơ thể InBody"
    ],
    "workEnvironment": "Khoa dinh dưỡng bệnh viện, viện dưỡng lão, trung tâm thể thao chuyên nghiệp.",
    "difficultiesAndTradeoffs": [
      "Phải thuyết phục bệnh nhân tuân thủ chế độ ăn kiêng thường nhạt nhẽo và khó ăn",
      "Kiến thức tương tác giữa thức ăn và thuốc điều trị đòi hỏi cập nhật liên tục"
    ],
    "coreSkills": [
      "Khoa học dinh dưỡng và hóa sinh chuyển hóa",
      "Kỹ năng tư vấn đồng hành cùng người bệnh",
      "Thiết kế thực đơn cân bằng calo"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Hóa học",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Dinh dưỡng (ĐH Y Hà Nội, ĐH Y Dược TP.HCM)"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Dinh dưỡng (ĐH Y Hà Nội, ĐH Y Dược TP.HCM)",
    "trialActivity": "Thử tính chỉ số khối cơ thể (BMI = Cân nặng / Chiều cao bình phương) của mình xem đang ở mức gầy, chuẩn hay thừa cân.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên dinh dưỡng tư vấn chế độ ăn uống khoa học",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "duoc-si-lam-sang-benh-vien",
    "title": "Dược sĩ lâm sàng bệnh viện (Clinical Pharmacist)",
    "englishTitle": "Hospital Clinical Pharmacist",
    "synonyms": [
      "Dược sĩ lâm sàng",
      "Clinical Pharmacist"
    ],
    "group": "duoc-sinh-hoc",
    "category": "DuocHoc",
    "categoryLabel": "Dược phẩm và công nghệ sinh học",
    "riasecCodes": [
      "I",
      "S",
      "C"
    ],
    "shortSummary": "Rà soát đơn thuốc của bác sĩ, kiểm tra tương tác thuốc, chỉnh liều kháng sinh cho bệnh nhân suy gan thận nhằm tránh ngộ độc thuốc.",
    "typicalTasks": [
      "Hội chẩn cùng bác sĩ tại giường bệnh về phác đồ kháng sinh phức tạp",
      "Theo dõi nồng độ thuốc trong máu (TDM) để hiệu chỉnh liều dùng",
      "Báo cáo các phản ứng có hại của thuốc (ADR) lên cơ quan quản lý dược"
    ],
    "deliverables": [
      "Biên bản tư vấn sử dụng thuốc an toàn",
      "Báo cáo giám sát tương tác thuốc toàn viện"
    ],
    "toolsUsed": [
      "Cơ sở dữ liệu dược thư quốc gia",
      "Phần mềm kiểm tra tương tác thuốc Lexicomp / UpToDate"
    ],
    "workEnvironment": "Bệnh viện đa khoa, trung tâm dược lâm sàng bệnh viện tuyến trên.",
    "difficultiesAndTradeoffs": [
      "Phải có dũng khí phản biện y lệnh của bác sĩ khi phát hiện kê đơn nguy hiểm",
      "Khối lượng tên thuốc và hoạt chất khổng lồ"
    ],
    "coreSkills": [
      "Dược lý học và dược động học lâm sàng",
      "Kỹ năng phân tích phản biện đơn thuốc",
      "Giao tiếp hợp tác chuyên môn liên ngành y - dược"
    ],
    "highSchoolSubjects": [
      "Hóa học",
      "Sinh học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Dược sĩ Đại học (5 năm tại ĐH Dược Hà Nội, ĐH Y Dược TP.HCM) chuyên ngành Dược lâm sàng"
      }
    ],
    "entryPathway": "Đại học: Dược sĩ Đại học (5 năm tại ĐH Dược Hà Nội, ĐH Y Dược TP.HCM) chuyên ngành Dược lâm sàng",
    "trialActivity": "Đọc tờ hướng dẫn sử dụng một hộp thuốc hạ sốt paracetamol để xem phần chống chỉ định và liều dùng tối đa trong ngày.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Dược sĩ kiểm tra đơn thuốc và dược lý tại phòng dược",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "duoc-si-nghien-cuu-phat-trien-rd",
    "title": "Dược sĩ R&D bào chế thuốc (Pharmaceutical Formulation R&D Scientist)",
    "englishTitle": "Pharmaceutical Formulation Scientist",
    "synonyms": [
      "Kỹ sư bào chế thuốc",
      "R&D Dược phẩm"
    ],
    "group": "duoc-sinh-hoc",
    "category": "DuocHoc",
    "categoryLabel": "Dược phẩm và công nghệ sinh học",
    "riasecCodes": [
      "I",
      "R"
    ],
    "shortSummary": "Nghiên cứu công thức tá dược, độ rã của viên nén, phát triển thuốc giải phóng kéo dài và thử nghiệm độ ổn định theo tiêu chuẩn GMP.",
    "typicalTasks": [
      "Thử nghiệm phối trộn các tỷ lệ tá dược dính, tá dược rã trong viên nén",
      "Chạy máy dập viên và đo độ hòa tan của hoạt chất trong môi trường giả lập dạ dày",
      "Nghiên cứu theo dõi độ ổn định của thuốc ở nhiệt độ và độ ẩm lão hóa cấp tốc"
    ],
    "deliverables": [
      "Hồ sơ đăng ký công thức bào chế thuốc mới",
      "Báo cáo nghiên cứu độ hòa tan so sánh (Bioequivalence)"
    ],
    "toolsUsed": [
      "Máy dập viên nén quay tròn",
      "Máy thử độ hòa tan 8 giỏ",
      "Sắc ký lỏng hiệu năng cao HPLC"
    ],
    "workEnvironment": "Viện nghiên cứu dược phẩm, phòng lab R&D các nhà máy dược (DHG Pharma, Dược Hậu Giang, Traphaco, Imexpharm).",
    "difficultiesAndTradeoffs": [
      "Nhiều mẻ dập viên thử nghiệm bị vỡ nứt hoặc không tan đòi hỏi thử lại từ đầu",
      "Tuân thủ quy chuẩn phòng thí nghiệm GLP vô cùng khắt khe"
    ],
    "coreSkills": [
      "Hóa phân tích và kỹ thuật bào chế",
      "Vận hành máy đo quang phổ và sắc ký",
      "Tư duy sáng tạo công thức"
    ],
    "highSchoolSubjects": [
      "Hóa học",
      "Toán học",
      "Vật lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Dược sĩ Đại học chuyên ngành Bào chế hoặc Hóa dược"
      }
    ],
    "entryPathway": "Đại học: Dược sĩ Đại học chuyên ngành Bào chế hoặc Hóa dược",
    "trialActivity": "Thử thả một viên sủi C vào cốc nước xem khí CO2 sủi bọt đẩy viên thuốc tan nhanh như thế nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhà khoa học dược phẩm chiết tách mẫu dung dịch trong phòng lab",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-cong-nghe-sinh-hoc-y-duoc",
    "title": "Kỹ sư Công nghệ sinh học Y dược (Medical Biotechnologist)",
    "englishTitle": "Biopharmaceutical Research Scientist",
    "synonyms": [
      "Kỹ sư công nghệ sinh học",
      "Biotech Engineer"
    ],
    "group": "duoc-sinh-hoc",
    "category": "DuocHoc",
    "categoryLabel": "Dược phẩm và công nghệ sinh học",
    "riasecCodes": [
      "I",
      "R"
    ],
    "shortSummary": "Ứng dụng kỹ thuật tái tổ hợp ADN, nuôi cấy tế bào động vật để sản xuất vaccine thế hệ mới, kháng thể đơn dòng và kit xét nghiệm nhanh.",
    "typicalTasks": [
      "Tách chiết tinh sạch ADN/ARN và khuếch đại gen bằng máy PCR",
      "Nuôi cấy dòng tế bào biểu hiện protein tái tổ hợp trong bình phản ứng sinh học",
      "Kiểm tra độ tinh khiết của kháng thể bằng điện di gel"
    ],
    "deliverables": [
      "Kháng thể tái tổ hợp tinh khiết",
      "Kit xét nghiệm chẩn đoán phân tử"
    ],
    "toolsUsed": [
      "Máy Real-time PCR",
      "Tủ cấy vi sinh an toàn sinh học cấp 2",
      "Hệ thống sắc ký cột FPLC"
    ],
    "workEnvironment": "Viện Vệ sinh dịch tễ, công ty sản xuất vaccine sinh phẩm y tế (Vabiotech, Nanogen).",
    "difficultiesAndTradeoffs": [
      "Mẫu tế bào nuôi cấy rất dễ bị nhiễm vi khuẩn nấm mốc làm hỏng cả mẻ nuôi hàng tháng",
      "Làm việc với các tác nhân vi sinh vật đòi hỏi khử trùng nghiêm ngặt"
    ],
    "coreSkills": [
      "Sinh học phân tử và di truyền",
      "Kỹ thuật nuôi cấy tế bào vô trùng",
      "Phân tích số liệu tin sinh học (Bioinformatics)"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Hóa học",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Công nghệ sinh học (ĐH Khoa học Tự nhiên, ĐH Bách khoa)"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Công nghệ sinh học (ĐH Khoa học Tự nhiên, ĐH Bách khoa)",
    "trialActivity": "Tìm hiểu về chiếc que test nhanh COVID-19: hai vạch đỏ xuất hiện dựa trên nguyên lý bắt cặp kháng nguyên - kháng thể thế nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư công nghệ sinh học thao tác micropipet trong tủ cấy vô trùng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-kiem-nghiem-duoc-pham",
    "title": "Chuyên viên Kiểm nghiệm thuốc và mỹ phẩm (Quality Control - QC Chemist)",
    "englishTitle": "Pharmaceutical Quality Control Chemist",
    "synonyms": [
      "Kiểm nghiệm viên dược",
      "QC Dược phẩm"
    ],
    "group": "duoc-sinh-hoc",
    "category": "DuocHoc",
    "categoryLabel": "Dược phẩm và công nghệ sinh học",
    "riasecCodes": [
      "C",
      "I"
    ],
    "shortSummary": "Sử dụng máy sắc ký lỏng HPLC để định lượng hàm lượng hoạt chất, kiểm tra tạp chất liên quan, đảm bảo từng viên thuốc xuất xưởng đều đạt chuẩn.",
    "typicalTasks": [
      "Chuẩn bị dung dịch mẫu chuẩn và mẫu thử theo chuyên luận Dược điển",
      "Chạy sắc ký lỏng HPLC và tính toán diện tích pic định lượng",
      "Thử nghiệm giới hạn vi sinh vật và độ vô khuẩn của thuốc tiêm truyền"
    ],
    "deliverables": [
      "Phiếu kiểm nghiệm chất lượng sản phẩm (CoA)",
      "Hồ sơ thẩm định phương pháp phân tích"
    ],
    "toolsUsed": [
      "Máy sắc ký HPLC / GC",
      "Máy đo quang phổ UV-Vis",
      "Cân phân tích 4 số lẻ",
      "Tủ ấm nuôi cấy vi sinh"
    ],
    "workEnvironment": "Trung tâm Kiểm nghiệm thuốc - mỹ phẩm, phòng QC nhà máy dược đạt chuẩn WHO-GMP / EU-GMP.",
    "difficultiesAndTradeoffs": [
      "Công việc đòi hỏi độ chính xác tuyệt đối đến từng microgam dung dịch",
      "Phải từ chối xuất xưởng mẻ thuốc nếu hàm lượng không nằm trong khoảng cho phép"
    ],
    "coreSkills": [
      "Kỹ thuật hóa phân tích định lượng",
      "Hiểu biết sâu về Dược điển Việt Nam và quốc tế",
      "Tính trung thực và tỉ mỉ"
    ],
    "highSchoolSubjects": [
      "Hóa học",
      "Toán học",
      "Sinh học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Dược sĩ Đại học hoặc Cử nhân Hóa học / Kỹ thuật Hóa học"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Kiểm nghiệm thuốc"
      }
    ],
    "entryPathway": "Đại học: Dược sĩ Đại học hoặc Cử nhân Hóa học / Kỹ thuật Hóa học | Cao đẳng: Cao đẳng Kiểm nghiệm thuốc",
    "trialActivity": "Tìm hiểu chữ số 'GMP' in trên vỏ hộp thuốc có ý nghĩa gì đối với chất lượng thuốc.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kiểm nghiệm viên dược phẩm vận hành hệ thống sắc ký lỏng HPLC",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-dang-ky-thuoc-regulatory",
    "title": "Chuyên viên Đăng ký lưu hành Dược phẩm (Regulatory Affairs Specialist - RA)",
    "englishTitle": "Pharmaceutical Regulatory Affairs Specialist",
    "synonyms": [
      "Chuyên viên RA dược",
      "Regulatory Affairs"
    ],
    "group": "duoc-sinh-hoc",
    "category": "DuocHoc",
    "categoryLabel": "Dược phẩm và công nghệ sinh học",
    "riasecCodes": [
      "C",
      "E",
      "I"
    ],
    "shortSummary": "Soạn thảo hồ sơ kỹ thuật, làm việc với Cục Quản lý Dược để xin cấp số đăng ký lưu hành cho thuốc mới sản xuất hoặc nhập khẩu.",
    "typicalTasks": [
      "Biên dịch và hoàn thiện hồ sơ kỹ thuật chung ASEAN (ACTD / ICH CTD)",
      "Giải trình các câu hỏi thẩm định chuyên môn của chuyên gia Cục Quản lý Dược",
      "Theo dõi cập nhật các thông tư, quy định pháp luật dược mới nhất"
    ],
    "deliverables": [
      "Hồ sơ đăng ký lưu hành thuốc hoàn chỉnh",
      "Giấy phép lưu hành sản phẩm (Visa thuốc)"
    ],
    "toolsUsed": [
      "Hệ thống dịch vụ công trực tuyến Cục Quản lý Dược",
      "Hồ sơ ACTD điện tử",
      "Phần mềm quản lý tài liệu pháp lý"
    ],
    "workEnvironment": "Văn phòng đại diện các hãng dược đa quốc gia (Pfizer, AstraZeneca, Novartis, Sanofi).",
    "difficultiesAndTradeoffs": [
      "Hồ sơ dày hàng nghìn trang đòi hỏi sự cẩn trọng rà soát từng câu từ",
      "Thời gian chờ cấp phép kéo dài từ 1 đến 2 năm đòi hỏi sự bền bỉ theo đuổi"
    ],
    "coreSkills": [
      "Nắm vững luật dược và quy chế đăng ký thuốc",
      "Kỹ năng viết và biên tập hồ sơ kỹ thuật tiếng Anh",
      "Khả năng giao tiếp giải trình thuyết phục"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Ngữ văn",
      "Hóa học",
      "Giáo dục kinh tế và pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Dược sĩ Đại học (Bắt buộc theo quy định ngành dược)"
      }
    ],
    "entryPathway": "Đại học: Dược sĩ Đại học (Bắt buộc theo quy định ngành dược)",
    "trialActivity": "Lật mặt sau hộp thuốc xem dòng chữ 'Số đăng ký: VD-xxxxx-xx' và tìm hiểu ý nghĩa của các chữ cái đó.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên thẩm định hồ sơ kỹ thuật đăng ký lưu hành dược phẩm",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "trinh-duoc-vien-benh-vien-etc",
    "title": "Trình dược viên bệnh viện (Medical Representative - ETC)",
    "englishTitle": "Hospital Medical Representative (ETC)",
    "synonyms": [
      "Trình dược viên ETC",
      "Medical Rep"
    ],
    "group": "duoc-sinh-hoc",
    "category": "DuocHoc",
    "categoryLabel": "Dược phẩm và công nghệ sinh học",
    "riasecCodes": [
      "E",
      "S",
      "I"
    ],
    "shortSummary": "Giới thiệu các nghiên cứu lâm sàng, hiệu quả điều trị của dòng thuốc mới đến các bác sĩ trưởng khoa và dược sĩ bệnh viện.",
    "typicalTasks": [
      "Thuyết trình về cơ chế tác dụng và bằng chứng thử nghiệm lâm sàng của thuốc",
      "Tham gia các hội nghị khoa học y dược chuyên ngành để kết nối với bác sĩ",
      "Thu thập phản hồi về hiệu quả và tác dụng phụ của thuốc trong quá trình điều trị thực tế"
    ],
    "deliverables": [
      "Kế hoạch tiếp cận khoa phòng bệnh viện",
      "Báo cáo doanh số và độ bao phủ thuốc theo địa bàn"
    ],
    "toolsUsed": [
      "Tài liệu nghiên cứu khoa học song ngữ (Detailing Aid)",
      "Phần mềm quản lý quan hệ khách hàng CRM Veeva"
    ],
    "workEnvironment": "Các bệnh viện đa khoa, phòng khám chuyên khoa, di chuyển liên tục.",
    "difficultiesAndTradeoffs": [
      "Bác sĩ rất bận rộn nên thời gian tiếp cận trao đổi thường chỉ có 3-5 phút",
      "Áp lực doanh số tháng và cạnh tranh khốc liệt giữa các hãng dược"
    ],
    "coreSkills": [
      "Kiến thức y dược chuyên sâu để trao đổi bình đẳng với bác sĩ",
      "Kỹ năng giao tiếp và thuyết trình tự tin",
      "Tác phong chuyên nghiệp, lịch thiệp và kiên trì"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Hóa học",
      "Tiếng Anh",
      "Ngữ văn"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Dược sĩ Đại học hoặc Bác sĩ Đa khoa"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Dược"
      }
    ],
    "entryPathway": "Đại học: Dược sĩ Đại học hoặc Bác sĩ Đa khoa | Cao đẳng: Cao đẳng Dược",
    "trialActivity": "Tìm hiểu sự khác nhau giữa thuốc kê đơn ETC (phải có đơn bác sĩ) và thuốc không kê đơn OTC (mua tự do ở nhà thuốc).",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Trình dược viên trao đổi tài liệu nghiên cứu y khoa cùng bác sĩ",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-van-hanh-len-men-sinh-hoc",
    "title": "Kỹ sư Vận hành lên men sinh học (Bioprocess Fermentation Engineer)",
    "englishTitle": "Bioprocess Fermentation Engineer",
    "synonyms": [
      "Kỹ sư lên men",
      "Bioprocess Engineer"
    ],
    "group": "duoc-sinh-hoc",
    "category": "DuocHoc",
    "categoryLabel": "Dược phẩm và công nghệ sinh học",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Điều khiển nồi lên men vi sinh hàng chục nghìn lít sản xuất kháng sinh penicillin, men vi sinh probiotic và enzyme công nghiệp.",
    "typicalTasks": [
      "Kiểm soát nhiệt độ, tốc độ khuấy, lưu lượng sục khí oxy và pH trong bồn lên men",
      "Lấy mẫu định kỳ đo mật độ quang học OD để theo dõi tốc độ nhân đôi tế bào",
      "Vận hành hệ thống lọc màng và ly tâm tách sinh khối sau lên men"
    ],
    "deliverables": [
      "Nhật ký mẻ lên men công nghiệp đạt hiệu suất cao",
      "Quy trình thanh trùng hệ thống tự động SIP / CIP"
    ],
    "toolsUsed": [
      "Bồn lên men Bioreactor công nghiệp",
      "Máy đo nồng độ oxy hòa tan DO",
      "Máy ly tâm lạnh liên tục"
    ],
    "workEnvironment": "Nhà máy sản xuất men vi sinh, nhà máy dược sinh phẩm, xí nghiệp enzyme.",
    "difficultiesAndTradeoffs": [
      "Ca trực theo dõi mẻ lên men 24/24 giờ vì vi sinh vật phát triển liên tục",
      "Nếu nhiễm tạp một con khuẩn lạ sẽ phải hủy bỏ cả bồn lên men hàng trăm triệu"
    ],
    "coreSkills": [
      "Kỹ thuật lên men và vi sinh vật học ứng dụng",
      "Vận hành hệ thống điều khiển tự động SCADA",
      "Khắc phục sự cố nhiễm tạp vi sinh"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Hóa học",
      "Vật lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Công nghệ sinh học, Kỹ thuật Hóa học hoặc Công nghệ thực phẩm"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Công nghệ sinh học, Kỹ thuật Hóa học hoặc Công nghệ thực phẩm",
    "trialActivity": "Tìm hiểu cách men vi sinh trong sữa chua lên men biến sữa tươi thành sữa chua thơm ngon.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư vận hành hệ thống bồn lên men sinh học công nghiệp",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-thu-nghiem-lam-sang-cra",
    "title": "Chuyên viên Giám sát thử nghiệm lâm sàng (Clinical Research Associate - CRA)",
    "englishTitle": "Clinical Research Associate (CRA)",
    "synonyms": [
      "Giám sát thử nghiệm lâm sàng",
      "CRA Dược"
    ],
    "group": "duoc-sinh-hoc",
    "category": "DuocHoc",
    "categoryLabel": "Dược phẩm và công nghệ sinh học",
    "riasecCodes": [
      "C",
      "I",
      "S"
    ],
    "shortSummary": "Đến các bệnh viện kiểm tra hồ sơ bệnh nhân tham gia thử nghiệm thuốc mới, đảm bảo an toàn đạo đức và dữ liệu trung thực tuyệt đối.",
    "typicalTasks": [
      "Kiểm tra chữ ký trên bản cam kết đồng thuận tự nguyện của người bệnh (Informed Consent)",
      "Đối chiếu số liệu bệnh án giấy với hệ thống phần mềm thử nghiệm lâm sàng (eCRF)",
      "Báo cáo ngay lập tức các biến cố bất lợi nghiêm trọng (SAE) cho ủy ban đạo đức"
    ],
    "deliverables": [
      "Báo cáo giám sát hiện trường (Monitoring Visit Report)",
      "Hồ sơ thử nghiệm thuốc lâm sàng đạt chuẩn GCP"
    ],
    "toolsUsed": [
      "Phần mềm thu thập dữ liệu lâm sàng Medidata Rave",
      "Hồ sơ thử nghiệm lâm sàng Investigator Site File"
    ],
    "workEnvironment": "Tổ chức nghiên cứu thử nghiệm lâm sàng quốc tế (CRO) như IQVIA, PPD; các bệnh viện nghiên cứu lớn.",
    "difficultiesAndTradeoffs": [
      "Thường xuyên đi máy bay công tác giữa các bệnh viện trên toàn quốc",
      "Trách nhiệm đạo đức bảo vệ an toàn sức khỏe con người trong nghiên cứu"
    ],
    "coreSkills": [
      "Nắm vững hướng dẫn thực hành lâm sàng tốt ICH-GCP",
      "Kỹ năng kiểm tra đối chiếu dữ liệu tỉ mỉ",
      "Tiếng Anh y khoa thành thạo"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Tiếng Anh",
      "Giáo dục công dân / Đạo đức"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Dược sĩ Đại học, Bác sĩ Y khoa hoặc Cử nhân Công nghệ sinh học"
      }
    ],
    "entryPathway": "Đại học: Dược sĩ Đại học, Bác sĩ Y khoa hoặc Cử nhân Công nghệ sinh học",
    "trialActivity": "Tìm hiểu về 3 giai đoạn thử nghiệm lâm sàng (Phase 1, 2, 3) trên người trước khi một loại vaccine được tiêm đại trà.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên giám sát đối chiếu hồ sơ thử nghiệm lâm sàng tại bệnh viện",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "giam-sat-dam-bao-chat-luong-gmp",
    "title": "Giám sát Đảm bảo chất lượng nhà máy dược (Quality Assurance - QA Specialist)",
    "englishTitle": "Pharmaceutical QA Compliance Specialist",
    "synonyms": [
      "Chuyên viên QA dược",
      "QA Specialist"
    ],
    "group": "duoc-sinh-hoc",
    "category": "DuocHoc",
    "categoryLabel": "Dược phẩm và công nghệ sinh học",
    "riasecCodes": [
      "C",
      "I"
    ],
    "shortSummary": "Xây dựng quy trình chuẩn SOP, thẩm định hệ thống xử lý không khí phòng sạch HVAC, kiểm soát thay đổi để duy trì chứng nhận GMP.",
    "typicalTasks": [
      "Thẩm định hệ thống nước tinh khiết pha tiêm WFI và hệ thống khí nén sạch",
      "Điều tra các trường hợp sản phẩm không đạt tiêu chuẩn (OOS / OOT)",
      "Đón tiếp và chuẩn bị hồ sơ cho các đợt thanh tra định kỳ của Cục Quản lý Dược"
    ],
    "deliverables": [
      "Quy trình thao tác chuẩn SOP",
      "Hồ sơ lô sản xuất (Batch Record) đã thẩm định phê duyệt"
    ],
    "toolsUsed": [
      "Phần mềm quản trị chất lượng QMS",
      "Máy đếm hạt bụi phòng sạch",
      "Hệ thống tài liệu kiểm soát GMP"
    ],
    "workEnvironment": "Nhà máy sản xuất dược phẩm đạt chuẩn GMP-WHO hoặc EU-GMP.",
    "difficultiesAndTradeoffs": [
      "Phải nghiêm khắc yêu cầu đình chỉ sản xuất nếu phát hiện quy trình có nguy cơ gây nhiễm chéo",
      "Khối lượng thủ tục giấy tờ hồ sơ quy chuẩn rất lớn"
    ],
    "coreSkills": [
      "Hiểu biết sâu sắc về nguyên tắc thực hành tốt sản xuất thuốc GMP",
      "Tư duy quản trị rủi ro chất lượng (ICH Q9)",
      "Kỹ năng viết quy trình rõ ràng"
    ],
    "highSchoolSubjects": [
      "Hóa học",
      "Sinh học",
      "Giáo dục kinh tế và pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Dược sĩ Đại học hoặc Kỹ sư Kỹ thuật Hóa học"
      }
    ],
    "entryPathway": "Đại học: Dược sĩ Đại học hoặc Kỹ sư Kỹ thuật Hóa học",
    "trialActivity": "Tìm hiểu tại sao hệ thống lọc khí HEPA trong nhà máy dược có thể chặn được cả vi khuẩn lơ lửng trong không khí.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên QA kiểm tra quy trình đóng gói thuốc trong phòng sạch",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-te-bao-goc-va-lieu-phap-gen",
    "title": "Kỹ sư Tế bào gốc và Liệu pháp gen (Stem Cell & Gene Therapy Specialist)",
    "englishTitle": "Stem Cell & Regenerative Medicine Specialist",
    "synonyms": [
      "Chuyên gia tế bào gốc",
      "Cell Therapy Specialist"
    ],
    "group": "duoc-sinh-hoc",
    "category": "DuocHoc",
    "categoryLabel": "Dược phẩm và công nghệ sinh học",
    "riasecCodes": [
      "I",
      "R"
    ],
    "shortSummary": "Phân lập, nuôi cấy và bảo quản lạnh sâu tế bào gốc từ cuống rốn, tủy xương phục vụ điều trị thoái hóa khớp và các bệnh tự miễn nan y.",
    "typicalTasks": [
      "Phân lập tế bào gốc trung mô từ mô dây rốn trong điều kiện vô trùng tuyệt đối",
      "Đánh giá khả năng biệt hóa thành tế bào sụn, tế bào xương và mỡ",
      "Bảo quản tế bào trong bình nitơ lỏng âm 196 độ C có bổ sung chất chống đông"
    ],
    "deliverables": [
      "Mẫu tế bào gốc đạt chuẩn cấy ghép lâm sàng",
      "Hồ sơ đánh giá kiểu hình tế bào bằng Flow Cytometry"
    ],
    "toolsUsed": [
      "Máy phân tích tế bào dòng chảy Flow Cytometer",
      "Bình lưu trữ nitơ lỏng -196°C",
      "Kính hiển vi huỳnh quang"
    ],
    "workEnvironment": "Ngân hàng tế bào gốc quốc gia, viện nghiên cứu tế bào gốc bệnh viện lớn.",
    "difficultiesAndTradeoffs": [
      "Mẫu tế bào gốc cực kỳ quý giá, không được phép để xảy ra bất kỳ sai sót nào trong bảo quản",
      "Lĩnh vực y học tái tạo đòi hỏi học tập và nghiên cứu công nghệ tiên tiến trên thế giới liên tục"
    ],
    "coreSkills": [
      "Sinh học tế bào và di truyền phân tử",
      "Kỹ thuật thao tác vô trùng siêu sạch",
      "Hiểu biết y đức trong trị liệu tế bào"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Hóa học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Công nghệ sinh học hoặc Bác sĩ Đa khoa có đào tạo chuyên sâu về Tế bào gốc"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Công nghệ sinh học hoặc Bác sĩ Đa khoa có đào tạo chuyên sâu về Tế bào gốc",
    "trialActivity": "Tìm hiểu tại sao tế bào gốc cuống rốn của em bé sơ sinh lại được ví như 'bảo hiểm sinh học' cho tương lai.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư tế bào gốc thao tác trong phòng lạnh bảo quản sinh học",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "giao-dich-vien-ngan-hang",
    "title": "Giao dịch viên Ngân hàng (Bank Teller / Customer Service Officer)",
    "englishTitle": "Bank Teller & Customer Service Specialist",
    "synonyms": [
      "Giao dịch viên",
      "Bank Teller"
    ],
    "group": "tai-chinh-ngan-hang",
    "category": "KinhTe",
    "categoryLabel": "Tài chính, ngân hàng và fintech",
    "riasecCodes": [
      "C",
      "E",
      "S"
    ],
    "shortSummary": "Tiếp đón khách hàng tại quầy, thực hiện nộp rút tiền mặt, mở tài khoản tiết kiệm, chuyển tiền quốc tế và cảnh giác lừa đảo tài chính.",
    "typicalTasks": [
      "Kiểm đếm và phân loại tiền thật - tiền giả qua máy soi chuyên dụng",
      "Thực hiện lệnh gửi tiết kiệm, mở thẻ tín dụng và đăng ký ngân hàng số",
      "Nhận diện các dấu hiệu khách hàng bị đe dọa lừa đảo chuyển tiền để kịp thời ngăn chặn"
    ],
    "deliverables": [
      "Chứng từ giao dịch ngân hàng khớp số liệu",
      "Báo cáo cân bằng tiền mặt cuối ngày không chênh lệch một đồng"
    ],
    "toolsUsed": [
      "Phần mềm lõi ngân hàng Core Banking",
      "Máy đếm tiền phát hiện tiền giả",
      "Máy quét căn cước công dân gắn chip"
    ],
    "workEnvironment": "Quầy giao dịch chi nhánh ngân hàng (Vietcombank, BIDV, Techcombank, MBBank).",
    "difficultiesAndTradeoffs": [
      "Áp lực cân đối tiền mặt cuối ngày, nếu thiếu hụt giao dịch viên phải tự bỏ tiền túi đền",
      "Luôn phải giữ nụ cười và tác phong chuẩn mực dù gặp khách hàng khó tính"
    ],
    "coreSkills": [
      "Kỹ năng tính toán cẩn trọng, tỉ mỉ",
      "Giao tiếp lịch thiệp, kỹ năng lắng nghe thấu cảm",
      "Nhạy bén phát hiện rủi ro gian lận"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Giáo dục kinh tế và pháp luật",
      "Ngữ văn",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Tài chính - Ngân hàng, Kế toán hoặc Kinh tế đối ngoại"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Tài chính Ngân hàng"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Tài chính - Ngân hàng, Kế toán hoặc Kinh tế đối ngoại | Cao đẳng: Cao đẳng Tài chính Ngân hàng",
    "trialActivity": "Cùng người thân ra quầy ngân hàng giao dịch và quan sát các bước giao dịch viên in giấy nộp tiền và đếm tiền.",
    "has3D": false,
    "simulationTaskId": "task-ngan-hang",
    "experienceType": "SCENARIO_SIMULATION",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Giao dịch viên ngân hàng niềm nở đón tiếp khách hàng tại quầy",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-quan-he-khach-hang-doanh-nghiep",
    "title": "Chuyên viên Quan hệ khách hàng doanh nghiệp (Corporate Relationship Manager - RM)",
    "englishTitle": "Corporate Banking Relationship Manager",
    "synonyms": [
      "Chuyên viên tín dụng doanh nghiệp",
      "Corporate RM"
    ],
    "group": "tai-chinh-ngan-hang",
    "category": "KinhTe",
    "categoryLabel": "Tài chính, ngân hàng và fintech",
    "riasecCodes": [
      "E",
      "C",
      "I"
    ],
    "shortSummary": "Thẩm định báo cáo tài chính của công ty, đề xuất cấp hạn mức vay vốn hàng chục tỷ và tư vấn dịch vụ bảo lãnh thanh toán quốc tế.",
    "typicalTasks": [
      "Phân tích lưu chuyển tiền tệ, doanh thu và biên lợi nhuận của doanh nghiệp xin vay",
      "Khảo sát thực địa kho bãi, nhà máy và tài sản thế chấp",
      "Lập tờ trình thẩm định tín dụng trình hội đồng phê duyệt khoản vay"
    ],
    "deliverables": [
      "Tờ trình phê duyệt hạn mức tín dụng doanh nghiệp",
      "Hợp đồng tín dụng và hợp đồng thế chấp tài sản"
    ],
    "toolsUsed": [
      "Hệ thống chấm điểm tín dụng nội bộ",
      "Phần mềm phân tích tài chính Excel",
      "Cổng thông tin tín dụng quốc gia CIC"
    ],
    "workEnvironment": "Phòng khách hàng doanh nghiệp ngân hàng, đi khảo sát thực tế nhà xưởng khách hàng.",
    "difficultiesAndTradeoffs": [
      "Áp lực chỉ tiêu doanh số giải ngân vốn vay hàng tháng",
      "Trách nhiệm pháp lý nặng nề nếu doanh nghiệp mất khả năng trả nợ thành nợ xấu"
    ],
    "coreSkills": [
      "Kỹ năng đọc hiểu và phân tích báo cáo tài chính",
      "Kỹ năng đàm phán thương mại cấp cao",
      "Đánh giá và kiểm soát rủi ro tín dụng"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Giáo dục kinh tế và pháp luật",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Tài chính Doanh nghiệp, Ngân hàng hoặc Kinh tế đối ngoại"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Tài chính Doanh nghiệp, Ngân hàng hoặc Kinh tế đối ngoại",
    "trialActivity": "Đọc một bản tin kinh tế về một doanh nghiệp dệt may vay vốn mở rộng xưởng sản xuất để hiểu lý do ngân hàng cho vay.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên quan hệ khách hàng thảo luận hợp đồng vay vốn cùng doanh nghiệp",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-phan-tich-tai-chinh-cfa",
    "title": "Chuyên viên Phân tích tài chính đầu tư (Financial Analyst / CFA)",
    "englishTitle": "Equity Research & Investment Analyst",
    "synonyms": [
      "Chuyên viên phân tích cổ phiếu",
      "Financial Analyst"
    ],
    "group": "tai-chinh-ngan-hang",
    "category": "KinhTe",
    "categoryLabel": "Tài chính, ngân hàng và fintech",
    "riasecCodes": [
      "I",
      "C",
      "E"
    ],
    "shortSummary": "Định giá cổ phiếu, phân tích vĩ mô và dự phóng kết quả kinh doanh của các ngành để viết báo cáo khuyến nghị mua/bán cho nhà đầu tư.",
    "typicalTasks": [
      "Xây dựng mô hình chiết khấu dòng tiền (DCF) và mô hình định giá P/E, P/B",
      "Dự phóng doanh thu, lợi nhuận và cổ tức của công ty niêm yết trong 3-5 năm tới",
      "Viết báo cáo phân tích ngành và khuyến nghị chiến lược đầu tư"
    ],
    "deliverables": [
      "Báo cáo phân tích doanh nghiệp chi tiết (Equity Research Report)",
      "Mô hình tài chính định giá định dạng Excel"
    ],
    "toolsUsed": [
      "Bloomberg Terminal",
      "FiinPro",
      "Excel tài chính chuyên sâu",
      "Python phân tích tài chính"
    ],
    "workEnvironment": "Công ty chứng khoán (SSI, VNDIRECT, HSC), quỹ đầu tư mạo hiểm, công ty quản lý quỹ.",
    "difficultiesAndTradeoffs": [
      "Thị trường chứng khoán biến động liên tục khiến dự phóng có thể sai lệch",
      "Làm việc ngoài giờ nhiều để kịp ra báo cáo phân tích trước giờ mở cửa sàn"
    ],
    "coreSkills": [
      "Tư duy tài chính vĩ mô và vi mô sắc bén",
      "Thành thạo mô hình hóa tài chính trên Excel",
      "Kỹ năng viết báo cáo súc tích, logic"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Tiếng Anh",
      "Giáo dục kinh tế và pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Tài chính - Đầu tư, Kinh tế học hoặc Chứng chỉ phân tích tài chính quốc tế CFA (Level 1, 2, 3)"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Tài chính - Đầu tư, Kinh tế học hoặc Chứng chỉ phân tích tài chính quốc tế CFA (Level 1, 2, 3)",
    "trialActivity": "Lên trang web CafeF xem biểu đồ giá cổ phiếu của tập đoàn Vinamilk hoặc Hòa Phát trong vòng 1 năm qua.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên phân tích theo dõi biểu đồ thị trường chứng khoán trên nhiều màn hình",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "moi-gioi-chung-khoan-tu-van-tai-san",
    "title": "Môi giới chứng khoán và Tư vấn tài sản (Stockbroker / Wealth Advisor)",
    "englishTitle": "Securities Broker & Wealth Advisor",
    "synonyms": [
      "Môi giới chứng khoán",
      "Broker chứng khoán"
    ],
    "group": "tai-chinh-ngan-hang",
    "category": "KinhTe",
    "categoryLabel": "Tài chính, ngân hàng và fintech",
    "riasecCodes": [
      "E",
      "S",
      "C"
    ],
    "shortSummary": "Mở tài khoản, hướng dẫn học sinh/người mới tập đầu tư, quản lý danh mục cổ phiếu và tư vấn điểm mua bán hợp lý cho khách hàng.",
    "typicalTasks": [
      "Theo dõi bảng điện tử và cập nhật tin tức vĩ mô phiên giao dịch cho khách",
      "Tư vấn phân bổ tỷ trọng giữa tiền mặt, cổ phiếu phòng thủ và cổ phiếu tăng trưởng",
      "Cảnh báo cắt lỗ kịp thời khi thị trường đảo chiều giảm sâu"
    ],
    "deliverables": [
      "Danh mục đầu tư sinh lời bền vững cho khách hàng",
      "Bản tin cập nhật thị trường hàng ngày"
    ],
    "toolsUsed": [
      "Bảng giá chứng khoán trực tuyến",
      "Phần mềm Amibroker",
      "TradingView",
      "Hệ thống quản lý lệnh giao dịch"
    ],
    "workEnvironment": "Sàn giao dịch công ty chứng khoán, làm việc kết hợp tư vấn trực tuyến.",
    "difficultiesAndTradeoffs": [
      "Tâm lý căng thẳng tột độ khi thị trường giảm điểm mạnh khiến tài sản khách hàng sụt giảm",
      "Thu nhập phụ thuộc lớn vào hoa hồng phí giao dịch"
    ],
    "coreSkills": [
      "Khả năng đọc hiểu biểu đồ kỹ thuật hình nến",
      "Kỹ năng quản trị tâm lý cảm xúc trong đầu tư",
      "Giao tiếp đồng hành thấu hiểu khách hàng"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Giáo dục kinh tế và pháp luật",
      "Tâm lý học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Kinh tế, Tài chính, Quản trị kinh doanh + Chứng chỉ hành nghề Môi giới chứng khoán của UBCKNN"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Kinh tế, Tài chính, Quản trị kinh doanh + Chứng chỉ hành nghề Môi giới chứng khoán của UBCKNN",
    "trialActivity": "Tải ứng dụng bảng giá chứng khoán về điện thoại và xem các mã cổ phiếu màu xanh lá (tăng), màu đỏ (giảm) có ý nghĩa gì.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhà môi giới tư vấn danh mục đầu tư chứng khoán cho khách hàng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-tham-dinh-tin-dung",
    "title": "Chuyên viên Thẩm định rủi ro tín dụng (Credit Risk Underwriter)",
    "englishTitle": "Credit Risk Underwriter",
    "synonyms": [
      "Thẩm định viên tín dụng",
      "Credit Underwriter"
    ],
    "group": "tai-chinh-ngan-hang",
    "category": "KinhTe",
    "categoryLabel": "Tài chính, ngân hàng và fintech",
    "riasecCodes": [
      "C",
      "I"
    ],
    "shortSummary": "Đánh giá độc lập khả năng trả nợ, tính pháp lý của sổ đỏ thế chấp và ra quyết định đồng ý hoặc từ chối cho vay tiền.",
    "typicalTasks": [
      "Xác minh tính xác thực của bảng sao kê lương và hợp đồng lao động của người vay",
      "Định giá giá trị thị trường của bất động sản hoặc ô tô thế chấp",
      "Tính toán tỷ lệ nợ trên thu nhập (DTI) và tỷ lệ vay trên giá trị tài sản (LTV)"
    ],
    "deliverables": [
      "Tờ trình thẩm định rủi ro khoản vay",
      "Quyết định phê duyệt hoặc từ chối cấp tín dụng"
    ],
    "toolsUsed": [
      "Hệ thống tra cứu dữ liệu tín dụng CIC",
      "Phần mềm định giá bất động sản tự động",
      "Bảng tính toán khả năng trả nợ"
    ],
    "workEnvironment": "Trung tâm thẩm định tập trung của hội sở ngân hàng.",
    "difficultiesAndTradeoffs": [
      "Phải giữ lập trường kiên quyết từ chối những hồ sơ không minh bạch dù bị áp lực doanh số",
      "Chịu trách nhiệm trực tiếp nếu phê duyệt sai dẫn đến nợ xấu"
    ],
    "coreSkills": [
      "Tư duy hoài nghi nghề nghiệp và kiểm tra bằng chứng",
      "Phân tích số liệu thu nhập và chi tiêu",
      "Am hiểu luật đất đai và giao dịch bảo đảm"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Giáo dục kinh tế và pháp luật",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Tài chính - Ngân hàng, Luật kinh tế hoặc Thẩm định giá"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Tài chính - Ngân hàng, Luật kinh tế hoặc Thẩm định giá",
    "trialActivity": "Tìm hiểu khái niệm 'Lịch sử nợ xấu CIC': tại sao chậm trả góp điện thoại vài ngày cũng bị ghi nhận vào hệ thống ngân hàng.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên thẩm định kiểm tra tính pháp lý của hồ sơ vay vốn",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-phat-trien-fintech-thanh-toan",
    "title": "Kỹ sư phát triển Fintech và Cổng thanh toán (Fintech Payment Engineer)",
    "englishTitle": "Fintech & Payment Gateway Engineer",
    "synonyms": [
      "Lập trình viên Fintech",
      "Payment Engineer"
    ],
    "group": "tai-chinh-ngan-hang",
    "category": "KinhTe",
    "categoryLabel": "Tài chính, ngân hàng và fintech",
    "riasecCodes": [
      "I",
      "R",
      "C"
    ],
    "shortSummary": "Lập trình cổng thanh toán quét mã QR VietQR, ví điện tử MoMo, ZaloPay và bảo vệ an toàn giao dịch thẻ theo chuẩn PCI-DSS.",
    "typicalTasks": [
      "Tích hợp API kết nối giữa ngân hàng và các sàn thương mại điện tử",
      "Xử lý hàng triệu giao dịch thanh toán đồng thời với độ trễ dưới 0.1 giây",
      "Mã hóa bảo mật thông tin thẻ quốc tế và phát hiện hành vi gian lận thẻ đánh cắp"
    ],
    "deliverables": [
      "Hệ thống cổng thanh toán trực tuyến ổn định",
      "Tài liệu tích hợp kỹ thuật SDK thanh toán"
    ],
    "toolsUsed": [
      "Java / Kotlin",
      "Go",
      "Kafka",
      "Redis",
      "Hệ thống bảo mật PCI-DSS",
      "Docker"
    ],
    "workEnvironment": "Công ty công nghệ tài chính Fintech (MoMo, VNPay, ZaloPay, ShopeePay), ngân hàng số.",
    "difficultiesAndTradeoffs": [
      "Sự cố nghẽn mạng vào các dịp săn sale lớn như 11/11 có thể làm gián đoạn hàng tỷ đồng giao dịch",
      "Yêu cầu bảo mật tuyệt đối, một lỗ hổng nhỏ có thể bị hacker rút tiền"
    ],
    "coreSkills": [
      "Kiến trúc hệ thống xử lý giao dịch phân tán chịu tải cao",
      "Hiểu biết sâu sắc về giao thức thanh toán thẻ ISO 8583",
      "Kỹ năng lập trình hệ thống an toàn"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Toán học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Khoa học máy tính, Kỹ thuật phần mềm hoặc An toàn thông tin"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Khoa học máy tính, Kỹ thuật phần mềm hoặc An toàn thông tin",
    "trialActivity": "Mỗi lần quét mã VietQR để thanh toán tiền nước, hãy nghĩ xem thông điệp chuyển tiền chạy qua những máy chủ nào trong 1 giây.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Giao dịch thanh toán không tiền mặt trên ứng dụng Fintech di động",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-quan-tri-rui-ro-ngan-hang",
    "title": "Chuyên viên Quản trị rủi ro ngân hàng (Banking Risk Management Specialist)",
    "englishTitle": "Banking Risk Management Analyst",
    "synonyms": [
      "Chuyên viên quản lý rủi ro",
      "Risk Analyst"
    ],
    "group": "tai-chinh-ngan-hang",
    "category": "KinhTe",
    "categoryLabel": "Tài chính, ngân hàng và fintech",
    "riasecCodes": [
      "I",
      "C"
    ],
    "shortSummary": "Mô phỏng các kịch bản khủng hoảng kinh tế, tính toán tỷ lệ an toàn vốn (Basel II, Basel III) và bảo vệ ngân hàng trước nguy cơ rút tiền hàng loạt.",
    "typicalTasks": [
      "Chạy các bài kiểm tra sức chịu đựng của ngân hàng trong kịch bản suy thoái (Stress Testing)",
      "Tính toán giá trị tài sản chịu rủi ro (VaR) của danh mục đầu tư trái phiếu",
      "Xây dựng các hạn mức an toàn vốn tối thiểu theo quy định của Ngân hàng Nhà nước"
    ],
    "deliverables": [
      "Báo cáo an toàn vốn chuẩn Basel",
      "Khung chính sách quản trị rủi ro thanh khoản và rủi ro thị trường"
    ],
    "toolsUsed": [
      "Python",
      "R",
      "SQL",
      "Phần mềm quản trị rủi ro SAS Risk Engine"
    ],
    "workEnvironment": "Khối quản trị rủi ro hội sở ngân hàng thương mại, Ngân hàng Nhà nước Việt Nam.",
    "difficultiesAndTradeoffs": [
      "Mô hình toán học định lượng tương đối phức tạp và trừu tượng",
      "Áp lực tranh luận để giới hạn các hoạt động cho vay quá nóng của các khối kinh doanh"
    ],
    "coreSkills": [
      "Toán tài chính và mô hình hóa rủi ro",
      "Hiểu sâu chuẩn mực ngân hàng quốc tế Basel",
      "Tư duy phòng ngừa và tầm nhìn dài hạn"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Giáo dục kinh tế và pháp luật",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Toán kinh tế, Tài chính định lượng hoặc Quản trị rủi ro tài chính"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Toán kinh tế, Tài chính định lượng hoặc Quản trị rủi ro tài chính",
    "trialActivity": "Tìm hiểu câu chuyện tại sao một ngân hàng ở Mỹ bị phá sản khi người gửi tiền đồng loạt rút sạch tiền qua ứng dụng trong 24 giờ.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên phân tích mô hình rủi ro tài chính trên đồ thị",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "kiem-toan-vien-doc-lap-big4",
    "title": "Kiểm toán viên độc lập (Independent Auditor - Big 4)",
    "englishTitle": "Auditor / Financial Assurance Specialist",
    "synonyms": [
      "Kiểm toán viên Big4",
      "Auditor"
    ],
    "group": "tai-chinh-ngan-hang",
    "category": "KinhTe",
    "categoryLabel": "Tài chính, ngân hàng và fintech",
    "riasecCodes": [
      "C",
      "I",
      "E"
    ],
    "shortSummary": "Kiểm tra chứng từ, kiểm kê hàng tồn kho thực tế và xác nhận tính trung thực, hợp lý của báo cáo tài chính các công ty niêm yết.",
    "typicalTasks": [
      "Kiểm tra chọn mẫu hóa đơn mua bán, chứng từ thanh toán ngân hàng",
      "Trực tiếp tham gia chứng kiến kiểm kê hàng hóa tại kho của khách hàng vào đêm giao thừa",
      "Phát hành báo cáo kiểm toán độc lập gửi cổ đông và cơ quan thuế"
    ],
    "deliverables": [
      "Báo cáo kiểm toán độc lập kèm ý kiến chấp thuận toàn phần",
      "Thư quản lý chỉ ra các sơ hở trong hệ thống kiểm soát nội bộ"
    ],
    "toolsUsed": [
      "Phần mềm kiểm toán chuyên dụng (PwC Aura, EY Canvas)",
      "Excel nâng cao",
      "Hệ thống chuẩn mực kiểm toán Việt Nam VSA"
    ],
    "workEnvironment": "Các công ty kiểm toán hàng đầu thế giới (Big 4: PwC, EY, KPMG, Deloitte) và các công ty kiểm toán trong nước.",
    "difficultiesAndTradeoffs": [
      "Mùa kiểm toán cao điểm từ tháng 1 đến tháng 4 hàng năm làm việc tới 12-14 tiếng mỗi ngày",
      "Phải di chuyển công tác liên tục giữa các nhà máy, xí nghiệp"
    ],
    "coreSkills": [
      "Tư duy cẩn trọng và hoài nghi nghề nghiệp",
      "Thành thạo nguyên tắc kế toán tài chính",
      "Khả năng làm việc nhóm cường độ cao"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Giáo dục kinh tế và pháp luật",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Kiểm toán, Kế toán (ĐH Kinh tế Quốc dân, Học viện Tài chính) + Chứng chỉ CPA hoặc ACCA"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Kiểm toán, Kế toán (ĐH Kinh tế Quốc dân, Học viện Tài chính) + Chứng chỉ CPA hoặc ACCA",
    "trialActivity": "Tìm hiểu tại sao các công ty lớn niêm yết trên sàn chứng khoán bắt buộc phải thuê kiểm toán độc lập kiểm tra sổ sách hàng năm.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kiểm toán viên rà soát chứng từ kế toán và sổ cái tài chính",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-dinh-phi-bao-hiem-actuary",
    "title": "Chuyên viên Định phí bảo hiểm (Actuary)",
    "englishTitle": "Actuary & Risk Pricing Specialist",
    "synonyms": [
      "Chuyên gia định phí",
      "Actuary"
    ],
    "group": "tai-chinh-ngan-hang",
    "category": "KinhTe",
    "categoryLabel": "Tài chính, ngân hàng và fintech",
    "riasecCodes": [
      "I",
      "C"
    ],
    "shortSummary": "Sử dụng bảng tỷ lệ tử vong, xác suất thống kê để tính mức phí đóng bảo hiểm nhân thọ, bảo hiểm y tế và đảm bảo công ty đủ tiền bồi thường.",
    "typicalTasks": [
      "Phân tích dữ liệu lịch sử tai nạn, bệnh tật và tuổi thọ bình quân của dân số",
      "Tính toán mức phí bảo hiểm định kỳ cho các gói sản phẩm bảo vệ sức khỏe mới",
      "Thiết lập quỹ dự phòng nghiệp vụ đảm bảo khả năng chi trả bồi thường trong 30-50 năm tới"
    ],
    "deliverables": [
      "Bảng biểu phí bảo hiểm chuẩn xác",
      "Báo cáo dự phòng nghiệp vụ bảo hiểm theo luật kinh doanh bảo hiểm"
    ],
    "toolsUsed": [
      "Phần mềm mô hình hóa Actuary (Prophet, MoSes)",
      "R",
      "Python",
      "Excel chuyên sâu"
    ],
    "workEnvironment": "Tập đoàn bảo hiểm nhân thọ và phi nhân thọ (Bảo Việt, Prudential, Manulife, Dai-ichi Life).",
    "difficultiesAndTradeoffs": [
      "Hệ thống kỳ thi lấy chứng chỉ quốc tế Actuary (SOA / IFoA) cực kỳ khó khăn, mất 5-7 năm học tập liên tục",
      "Công việc phân tích toán học đòi hỏi độ tập trung rất cao"
    ],
    "coreSkills": [
      "Toán xác suất thống kê và toán tài chính cao cấp",
      "Tư duy phân tích dữ liệu rủi ro lớn",
      "Hiểu biết sâu sắc về sản phẩm bảo hiểm"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Tiếng Anh",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Toán tài chính, Thống kê hoặc Khoa học định phí Actuary"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Toán tài chính, Thống kê hoặc Khoa học định phí Actuary",
    "trialActivity": "Tìm hiểu tại sao người càng lớn tuổi thì mức phí đóng bảo hiểm sức khỏe hàng năm lại cao hơn người trẻ tuổi.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên định phí bảo hiểm tính toán mô hình xác suất rủi ro",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "quan-ly-quy-dau-tu-mao-hiem",
    "title": "Quản lý Quỹ đầu tư mạo hiểm (Venture Capital Investor - VC)",
    "englishTitle": "Venture Capital & Private Equity Investor",
    "synonyms": [
      "Nhà đầu tư mạo hiểm",
      "VC Associate / Principal"
    ],
    "group": "tai-chinh-ngan-hang",
    "category": "KinhTe",
    "categoryLabel": "Tài chính, ngân hàng và fintech",
    "riasecCodes": [
      "E",
      "I",
      "S"
    ],
    "shortSummary": "Tìm kiếm các dự án công nghệ khởi nghiệp tiềm năng, thẩm định đội ngũ sáng lập và rót vốn hàng triệu USD để đổi lấy cổ phần tăng trưởng.",
    "typicalTasks": [
      "Nghe các nhà sáng lập startup thuyết trình gọi vốn (Pitch deck)",
      "Thẩm định năng lực công nghệ, sản phẩm và tiềm năng thị trường của startup (Due Diligence)",
      "Tham gia hội đồng quản trị hỗ trợ startup mở rộng quy mô kinh doanh"
    ],
    "deliverables": [
      "Bản ghi nhớ đầu tư (Term Sheet)",
      "Báo cáo thẩm định đầu tư chi tiết (Investment Memorandum)"
    ],
    "toolsUsed": [
      "PitchBook",
      "Crunchbase",
      "Excel mô hình vốn hóa Cap Table"
    ],
    "workEnvironment": "Quỹ đầu tư mạo hiểm, hội thảo khởi nghiệp công nghệ, không gian làm việc chung Co-working.",
    "difficultiesAndTradeoffs": [
      "Tỷ lệ rủi ro rất cao: 9 trong 10 startup được rót vốn có thể thất bại mất trắng tiền đầu tư",
      "Phải từ chối hàng trăm ý tưởng khởi nghiệp mỗi tháng"
    ],
    "coreSkills": [
      "Tầm nhìn nhạy bén phát hiện xu hướng công nghệ tương lai",
      "Kỹ năng đánh giá con người và tố chất lãnh đạo",
      "Đàm phán định giá doanh nghiệp"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Tiếng Anh",
      "Giáo dục kinh tế và pháp luật",
      "Ngữ văn"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị kinh doanh, Tài chính hoặc Kỹ thuật công nghệ kết hợp bằng Thạc sĩ MBA"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị kinh doanh, Tài chính hoặc Kỹ thuật công nghệ kết hợp bằng Thạc sĩ MBA",
    "trialActivity": "Xem một tập chương trình Shark Tank Việt Nam để quan sát cách các nhà đầu tư chất vấn số liệu tài chính của startup.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhà đầu tư mạo hiểm lắng nghe bài thuyết trình gọi vốn của startup",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-dieu-phoi-van-tai-da-phuong-thuc",
    "title": "Chuyên viên Điều phối vận tải đa phương thức (Multimodal Transport Coordinator)",
    "englishTitle": "Multimodal Freight Transport Coordinator",
    "synonyms": [
      "Điều phối viên logistics",
      "Freight Coordinator"
    ],
    "group": "logistics",
    "category": "Logistics",
    "categoryLabel": "Logistics, chuỗi cung ứng và ngoại thương",
    "riasecCodes": [
      "E",
      "C",
      "R"
    ],
    "shortSummary": "Kết hợp vận tải đường biển, đường hàng không, đường sắt và xe container đường bộ để chuyển hàng từ nhà máy Việt Nam đến kho Amazon bên Mỹ.",
    "typicalTasks": [
      "Lựa chọn tuyến đường vận chuyển tối ưu chi phí và thời gian",
      "Book chỗ trên tàu biển (Booking note) và điều động xe kéo container đóng hàng",
      "Theo dõi hành trình lô hàng và thông báo cập nhật tình trạng liên tục cho chủ hàng"
    ],
    "deliverables": [
      "Vận đơn vận tải đường biển (Bill of Lading - B/L)",
      "Kế hoạch lộ trình vận tải chi tiết"
    ],
    "toolsUsed": [
      "Hệ thống quản lý vận tải TMS",
      "Phần mềm theo dõi tàu biển MarineTraffic",
      "Excel điều độ"
    ],
    "workEnvironment": "Công ty giao nhận vận tải quốc tế (Freight Forwarder: DHL, Maersk, Kuehne+Nagel), văn phòng cảng biển.",
    "difficultiesAndTradeoffs": [
      "Lô hàng có thể bị hoãn hoặc kẹt cảng do thời tiết bão biển cần xử lý gấp 24/7",
      "Lệch múi giờ khi liên hệ với các hãng tàu quốc tế"
    ],
    "coreSkills": [
      "Kỹ năng lập kế hoạch và điều phối",
      "Hiểu biết luật vận tải quốc tế và Incoterms",
      "Kỹ năng giải quyết sự cố phát sinh"
    ],
    "highSchoolSubjects": [
      "Địa lý",
      "Tiếng Anh",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Logistics và Quản lý chuỗi cung ứng hoặc Kinh tế vận tải"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Logistics & Khai thác cảng"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Logistics và Quản lý chuỗi cung ứng hoặc Kinh tế vận tải | Cao đẳng: Cao đẳng Logistics & Khai thác cảng",
    "trialActivity": "Mở trang web MarineTraffic xem có bao nhiêu con tàu container khổng lồ đang neo đậu ngoài khơi cảng Hải Phòng và Cái Mép.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Cảng biển container nhộn nhịp với các chuyến tàu cập bến",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "nhan-vien-chung-tu-xuat-nhap-khau",
    "title": "Nhân viên Chứng từ xuất nhập khẩu (Import-Export Documentation Specialist)",
    "englishTitle": "Import-Export Documentation Specialist",
    "synonyms": [
      "Nhân viên chứng từ",
      "Docs / CS Logistics"
    ],
    "group": "logistics",
    "category": "Logistics",
    "categoryLabel": "Logistics, chuỗi cung ứng và ngoại thương",
    "riasecCodes": [
      "C",
      "E"
    ],
    "shortSummary": "Lập hóa đơn thương mại (Invoice), phiếu đóng gói (Packing List), xin giấy chứng nhận xuất xứ (C/O) để hàng hóa được hưởng thuế ưu đãi 0%.",
    "typicalTasks": [
      "Soạn thảo hợp đồng mua bán ngoại thương và các phụ lục đính kèm",
      "Khai báo và xin cấp giấy chứng nhận xuất xứ hàng hóa C/O form D, form E, form EUR.1",
      "Gửi bộ chứng từ thanh toán tín dụng thư (L/C) sang ngân hàng đối tác"
    ],
    "deliverables": [
      "Bộ chứng từ xuất nhập khẩu hoàn chỉnh hợp lệ",
      "Giấy chứng nhận xuất xứ hàng hóa (Certificate of Origin)"
    ],
    "toolsUsed": [
      "Cổng thông tin một cửa quốc gia",
      "Phần mềm khai báo C/O điện tử eCoSys",
      "Phần mềm kế toán xuất nhập khẩu"
    ],
    "workEnvironment": "Phòng xuất nhập khẩu doanh nghiệp sản xuất, công ty logistics.",
    "difficultiesAndTradeoffs": [
      "Sai sót một chữ số trên hóa đơn hoặc vận đơn có thể khiến lô hàng bị giữ lại cảng nhiều tuần",
      "Phải hoàn thành bộ chứng từ đúng thời hạn trước khi tàu cập cảng"
    ],
    "coreSkills": [
      "Độ cẩn trọng và tỉ mỉ tuyệt đối",
      "Tiếng Anh thương mại thành thạo",
      "Nắm vững quy tắc xuất xứ hàng hóa trong các hiệp định FTA"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Giáo dục kinh tế và pháp luật",
      "Địa lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Kinh tế đối ngoại, Kinh doanh quốc tế hoặc Thương mại quốc tế"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Nghiệp vụ Xuất nhập khẩu"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Kinh tế đối ngoại, Kinh doanh quốc tế hoặc Thương mại quốc tế | Cao đẳng: Cao đẳng Nghiệp vụ Xuất nhập khẩu",
    "trialActivity": "Tìm hiểu tờ giấy chứng nhận xuất xứ C/O giúp quả thanh long Việt Nam xuất khẩu sang châu Âu được giảm thuế như thế nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhân viên kiểm tra và rà soát bộ chứng từ xuất nhập khẩu",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-khai-bao-hai-quan-dien-tu",
    "title": "Chuyên viên Khai báo hải quan điện tử (Customs Broker / Declaration Specialist)",
    "englishTitle": "Customs Clearance & Declaration Specialist",
    "synonyms": [
      "Nhân viên khai hải quan",
      "Customs Broker"
    ],
    "group": "logistics",
    "category": "Logistics",
    "categoryLabel": "Logistics, chuỗi cung ứng và ngoại thương",
    "riasecCodes": [
      "C",
      "R"
    ],
    "shortSummary": "Tra cứu mã số hàng hóa (HS Code), truyền tờ khai hải quan trên hệ thống VNACCS/VCIS và trực tiếp làm thủ tục thông quan hàng hóa tại chi cục hải quan.",
    "typicalTasks": [
      "Phân tích thành phần sản phẩm để áp đúng mã HS Code chịu thuế chính xác",
      "Truyền dữ liệu tờ khai hải quan điện tử và theo dõi kết quả phân luồng (Xanh, Vàng, Đỏ)",
      "Phối hợp với cán bộ hải quan kiểm tra thực tế hàng hóa tại bãi cảng luồng đỏ"
    ],
    "deliverables": [
      "Tờ khai hải quan điện tử đã thông quan",
      "Biên bản kiểm tra thực tế hàng hóa"
    ],
    "toolsUsed": [
      "Phần mềm hải quan điện tử ECUS5-VNACCS",
      "Bảng tra cứu biểu thuế xuất nhập khẩu và mã HS",
      "Chữ ký số token USB"
    ],
    "workEnvironment": "Văn phòng khai thuê hải quan, chi cục hải quan cửa khẩu cảng biển, sân bay Nội Bài, Tân Sơn Nhất.",
    "difficultiesAndTradeoffs": [
      "Áp lực khi hàng bị phân luồng đỏ phải mở container kiểm tra thủ công",
      "Rủi ro bị xử phạt hành chính nếu áp sai mã HS code làm thiếu tiền thuế nhà nước"
    ],
    "coreSkills": [
      "Nắm vững luật hải quan và chính sách mặt hàng",
      "Kỹ năng tra cứu phân loại mã HS Code",
      "Kỹ năng xử lý tình huống linh hoạt tại cửa khẩu"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Tiếng Anh",
      "Hóa học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Hải quan và Nghiệp vụ ngoại thương (Học viện Tài chính) + Chứng chỉ nghiệp vụ khai hải quan của Tổng cục Hải quan"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Hải quan và Nghiệp vụ ngoại thương (Học viện Tài chính) + Chứng chỉ nghiệp vụ khai hải quan của Tổng cục Hải quan",
    "trialActivity": "Tìm hiểu ý nghĩa của phân luồng hải quan: Luồng Xanh (thông quan ngay), Luồng Vàng (kiểm tra giấy tờ), Luồng Đỏ (mở thùng kiểm tra hàng).",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên làm thủ tục thông quan container tại cửa khẩu hải quan",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "quan-ly-kho-van-thong-minh",
    "title": "Quản lý Kho vận thông minh (Smart Warehouse Operations Manager)",
    "englishTitle": "Smart Warehouse & Fulfillment Operations Manager",
    "synonyms": [
      "Quản lý kho",
      "Warehouse Manager"
    ],
    "group": "logistics",
    "category": "Logistics",
    "categoryLabel": "Logistics, chuỗi cung ứng và ngoại thương",
    "riasecCodes": [
      "R",
      "C",
      "E"
    ],
    "shortSummary": "Bố trí layout giá kệ kho, quản lý robot tự hành AGV gắp hàng và tối ưu hóa quy trình xuất - nhập - tồn hàng triệu món hàng.",
    "typicalTasks": [
      "Quy hoạch vị trí các kệ hàng chứa pallet theo tần suất xuất hàng (Fast-moving items)",
      "Thiết lập quy trình quét mã vạch và phân công nhân viên nhặt hàng (Pick & Pack)",
      "Kiểm kê hàng tồn kho định kỳ và xử lý hàng cận date, hàng tồn đọng"
    ],
    "deliverables": [
      "Báo cáo tỷ lệ thực hiện đơn hàng đúng giờ (OTIF)",
      "Mặt bằng quy hoạch kho bãi tối ưu luồng di chuyển"
    ],
    "toolsUsed": [
      "Hệ thống quản lý kho WMS (Infor, SAP EWM)",
      "Máy quét mã vạch không dây PDA",
      "Xe nâng điện reach truck"
    ],
    "workEnvironment": "Trung tâm hoàn tất đơn hàng thương mại điện tử (Shopee, Lazada, Tiki), kho ngoại quan.",
    "difficultiesAndTradeoffs": [
      "Áp lực xả hàng nghìn đơn mỗi giờ vào các đợt siêu sale ngày lễ",
      "Trách nhiệm quản lý an toàn phòng cháy chữa cháy và chống thất thoát tài sản trong kho"
    ],
    "coreSkills": [
      "Kỹ năng tổ chức sắp xếp không gian khoa học",
      "Vận hành hệ thống phần mềm quản lý kho",
      "Kỹ năng quản lý đội ngũ nhân viên kho"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Tin học",
      "Công nghệ"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị logistics hoặc Kỹ thuật Công nghiệp"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Quản lý kho bãi"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị logistics hoặc Kỹ thuật Công nghiệp | Cao đẳng: Cao đẳng Quản lý kho bãi",
    "trialActivity": "Quan sát cách một cửa hàng tiện lợi mini sắp xếp các chai nước ngọt trên kệ: chai nào hạn gần hơn sẽ được xếp ra phía ngoài cùng.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kho hàng thông minh với hệ thống giá kệ nhiều tầng hiện đại",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-mua-hang-quoc-te",
    "title": "Chuyên viên Mua hàng quốc tế (Global Procurement Specialist)",
    "englishTitle": "Global Sourcing & Procurement Specialist",
    "synonyms": [
      "Chuyên viên thu mua quốc tế",
      "Purchasing Specialist"
    ],
    "group": "logistics",
    "category": "Logistics",
    "categoryLabel": "Logistics, chuỗi cung ứng và ngoại thương",
    "riasecCodes": [
      "E",
      "C",
      "I"
    ],
    "shortSummary": "Tìm kiếm nhà cung cấp nguyên vật liệu từ khắp nơi trên thế giới, đàm phán giá cả và ký hợp đồng mua bán với mức giá tối ưu nhất.",
    "typicalTasks": [
      "Gửi thư yêu cầu báo giá (RFQ) đến các nhà cung ứng ở Nhật, Hàn, Trung Quốc, châu Âu",
      "Đánh giá năng lực nhà máy và so sánh chi phí tổng thể (TCO)",
      "Thương lượng điều kiện thanh toán trả chậm 30-60 ngày và thời gian giao hàng"
    ],
    "deliverables": [
      "Hợp đồng mua hàng quốc tế (Purchase Order - PO)",
      "Bảng so sánh chi phí và năng lực nhà cung cấp"
    ],
    "toolsUsed": [
      "Alibaba B2B",
      "Hệ thống SAP Ariba",
      "Excel phân tích chi phí"
    ],
    "workEnvironment": "Phòng mua hàng tập đoàn sản xuất, chuỗi siêu thị bán lẻ, nhà máy điện tử.",
    "difficultiesAndTradeoffs": [
      "Rủi ro nhà cung ứng giao hàng trễ hạn làm đình trệ toàn bộ dây chuyền sản xuất của nhà máy",
      "Chênh lệch múi giờ và rào cản văn hóa khi đàm phán với đối tác nước ngoài"
    ],
    "coreSkills": [
      "Kỹ năng đàm phán và thương lượng giá",
      "Ngoại ngữ thương mại sắc bén",
      "Tư duy phân tích cơ cấu chi phí sản phẩm"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Toán học",
      "Giáo dục kinh tế và pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Kinh tế đối ngoại, Kinh doanh quốc tế hoặc Quản trị chuỗi cung ứng"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Kinh tế đối ngoại, Kinh doanh quốc tế hoặc Quản trị chuỗi cung ứng",
    "trialActivity": "Thử lên trang web Alibaba.com tìm một món đồ chơi công nghệ và xem các nhà cung ứng báo giá bán sỉ theo số lượng ra sao.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên mua hàng so sánh hợp đồng và chi phí báo giá",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-kinh-doanh-cuoc-van-tai",
    "title": "Chuyên viên Kinh doanh cước vận tải (Freight Forwarder Sales)",
    "englishTitle": "Freight Forwarding Sales Executive",
    "synonyms": [
      "Sales Logistics",
      "Freight Sales"
    ],
    "group": "logistics",
    "category": "Logistics",
    "categoryLabel": "Logistics, chuỗi cung ứng và ngoại thương",
    "riasecCodes": [
      "E",
      "S"
    ],
    "shortSummary": "Chào bán dịch vụ cước tàu biển, cước máy bay và dịch vụ thông quan trọn gói cho các doanh nghiệp xuất nhập khẩu hàng hóa.",
    "typicalTasks": [
      "Tìm kiếm thông tin các doanh nghiệp xuất khẩu dệt may, da giày, thủy sản qua mạng xã hội",
      "Gọi điện chào giá cước container cạnh tranh và tư vấn gói vận chuyển tối ưu",
      "Chăm sóc duy trì mối quan hệ thân thiết với các khách hàng ruột lâu năm"
    ],
    "deliverables": [
      "Hợp đồng cung ứng dịch vụ logistics đã ký kết",
      "Báo cáo doanh số bán cước hàng tháng"
    ],
    "toolsUsed": [
      "LinkedIn",
      "Phần mềm CRM bán hàng",
      "Điện thoại và mạng lưới quan hệ doanh nghiệp"
    ],
    "workEnvironment": "Công ty giao nhận logistics quốc tế, thường xuyên đi gặp gỡ khách hàng.",
    "difficultiesAndTradeoffs": [
      "Cạnh tranh giá cước khốc liệt giữa hàng trăm công ty giao nhận trên thị trường",
      "Áp lực doanh số (KPI số lượng container bán được) mỗi tháng"
    ],
    "coreSkills": [
      "Kỹ năng giao tiếp và thuyết phục khách hàng",
      "Nhạy cảm với biến động giá cước thị trường",
      "Sự kiên trì không nản lòng khi bị từ chối"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Ngữ văn",
      "Địa lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị kinh doanh, Marketing hoặc Logistics"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Kinh doanh thương mại"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị kinh doanh, Marketing hoặc Logistics | Cao đẳng: Cao đẳng Kinh doanh thương mại",
    "trialActivity": "Tìm hiểu tại sao giá cước thuê một chiếc container 40 feet từ Việt Nam đi Mỹ lại tăng vọt vào dịp gần Tết Nguyên đán.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên kinh doanh cước trao đổi hợp đồng với chủ hàng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-ke-hoach-chuoi-cung-ung",
    "title": "Chuyên viên Kế hoạch chuỗi cung ứng (Supply Chain Planner)",
    "englishTitle": "Supply Chain Demand & Inventory Planner",
    "synonyms": [
      "Chuyên viên hoạch định chuỗi cung ứng",
      "Supply Chain Planner"
    ],
    "group": "logistics",
    "category": "Logistics",
    "categoryLabel": "Logistics, chuỗi cung ứng và ngoại thương",
    "riasecCodes": [
      "C",
      "I"
    ],
    "shortSummary": "Dự báo nhu cầu thị trường, tính toán mức tồn kho an toàn và lên kế hoạch đặt hàng sản xuất chính xác tránh thiếu hụt hoặc ứ đọng vốn.",
    "typicalTasks": [
      "Phân tích lịch sử bán hàng và các chương trình khuyến mãi để dự báo nhu cầu (Demand Forecasting)",
      "Tính toán lượng tồn kho an toàn (Safety stock) cho từng mã sản phẩm",
      "Lập kế hoạch điều phối hàng hóa giữa các kho miền Bắc, Trung, Nam"
    ],
    "deliverables": [
      "Bản kế hoạch cung ứng nguyên vật liệu hàng tháng",
      "Báo cáo vòng quay hàng tồn kho (Inventory Turnover)"
    ],
    "toolsUsed": [
      "Hệ thống SAP ERP",
      "Phần mềm dự báo nhu cầu Anaplan",
      "Excel phân tích hàm nâng cao"
    ],
    "workEnvironment": "Tập đoàn hàng tiêu dùng nhanh FMCG (Unilever, P&G, Nestlé, Vinamilk).",
    "difficultiesAndTradeoffs": [
      "Nếu dự báo sai dẫn đến cháy hàng (hết hàng bán) hoặc tồn kho quá nhiều gây hết hạn sử dụng",
      "Làm việc với khối lượng dữ liệu bảng tính khổng lồ"
    ],
    "coreSkills": [
      "Tư duy toán học thống kê và phân tích xu hướng",
      "Hiểu biết tổng thể quy trình chuỗi cung ứng khép kín",
      "Khả năng phối hợp đa phòng ban"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Tin học",
      "Giáo dục kinh tế và pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản lý chuỗi cung ứng, Kỹ thuật Hệ thống công nghiệp hoặc Thống kê kinh tế"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản lý chuỗi cung ứng, Kỹ thuật Hệ thống công nghiệp hoặc Thống kê kinh tế",
    "trialActivity": "Thử nghĩ xem một hãng bánh kẹo phải chuẩn bị kế hoạch sản xuất bánh Trung thu trước bao nhiêu tháng để kịp bán vào rằm tháng 8.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên phân tích dự báo nhu cầu chuỗi cung ứng trên biểu đồ",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "dieu-do-cang-bien-container",
    "title": "Điều độ cảng biển container (Container Terminal Dispatcher)",
    "englishTitle": "Port Operations & Yard Dispatcher",
    "synonyms": [
      "Điều độ viên cảng",
      "Vessel & Yard Planner"
    ],
    "group": "logistics",
    "category": "Logistics",
    "categoryLabel": "Logistics, chuỗi cung ứng và ngoại thương",
    "riasecCodes": [
      "R",
      "C"
    ],
    "shortSummary": "Lập sơ đồ xếp dỡ container lên tàu biển đảm bảo trọng tâm tàu cân bằng an toàn và điều động cần cẩu giàn hoạt động nhịp nhàng.",
    "typicalTasks": [
      "Sắp xếp vị trí từng container trên bãi cảng theo hãng tàu và cảng đến",
      "Lập sơ đồ bốc dỡ hàng (Stowage plan) cân bằng trọng tải đáy tàu",
      "Điều phối các tài xế xe nâng và xe đầu kéo di chuyển container trong bãi"
    ],
    "deliverables": [
      "Sơ đồ xếp dỡ hàng trên tàu (Bay plan)",
      "Nhật ký năng suất bốc dỡ của cẩu giàn theo giờ"
    ],
    "toolsUsed": [
      "Hệ thống quản lý khai thác cảng số TOS (CATOS / TOPS)",
      "Bộ đàm vô tuyến điều độ cảng",
      "Phần mềm mô phỏng độ ổn định tàu MacS"
    ],
    "workEnvironment": "Phòng điều hành trung tâm cảng biển quốc tế (Cảng Tân Cảng - Cát Lái, Cảng Quốc tế Lạch Huyện).",
    "difficultiesAndTradeoffs": [
      "Áp lực giải phóng tàu nhanh chóng, mỗi giờ tàu nằm chờ ở cảng tốn hàng chục nghìn USD",
      "Làm việc theo ca 24/7 bất kể ngày đêm hay mưa gió"
    ],
    "coreSkills": [
      "Tư duy hình học không gian và phân bổ tải trọng",
      "Khả năng ra quyết định nhanh dưới áp lực cao",
      "Thành thạo phần mềm điều hành cảng số"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Vật lý",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kinh tế vận tải biển hoặc Khai thác cảng (ĐH Hàng hải Việt Nam, ĐH Giao thông Vận tải)"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Quản lý khai thác cảng"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kinh tế vận tải biển hoặc Khai thác cảng (ĐH Hàng hải Việt Nam, ĐH Giao thông Vận tải) | Cao đẳng: Cao đẳng Quản lý khai thác cảng",
    "trialActivity": "Tìm hiểu tại sao người ta phải xếp các container nặng nhất ở tầng dưới cùng của đáy tàu để tàu không bị lật khi gặp sóng lớn.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Cần cẩu giàn khổng lồ bốc dỡ container trên bãi cảng biển",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-dong-goi-va-bao-hiem-hang-hoa",
    "title": "Chuyên viên Đóng gói và Bảo hiểm hàng hóa (Cargo Packaging & Insurance Specialist)",
    "englishTitle": "Cargo Packaging & Marine Insurance Specialist",
    "synonyms": [
      "Chuyên viên bảo hiểm hàng hóa",
      "Cargo Packaging Specialist"
    ],
    "group": "logistics",
    "category": "Logistics",
    "categoryLabel": "Logistics, chuỗi cung ứng và ngoại thương",
    "riasecCodes": [
      "C",
      "R"
    ],
    "shortSummary": "Tính toán quy cách đóng thùng gỗ chống ẩm cho máy móc điện tử và tư vấn điều khoản bảo hiểm hàng hải bồi thường rủi ro chìm tàu, cháy nổ.",
    "typicalTasks": [
      "Thiết kế thùng gỗ đóng kiện có túi hút ẩm và xốp chống sốc cho máy móc công nghiệp",
      "Thẩm định giá trị lô hàng và tư vấn mua gói bảo hiểm hàng hải điều kiện A, B, C",
      "Lập hồ sơ khiếu nại đòi công ty bảo hiểm bồi thường khi hàng bị ướt hoặc móp méo"
    ],
    "deliverables": [
      "Quy chuẩn kỹ thuật đóng gói hàng xuất khẩu",
      "Hợp đồng bảo hiểm hàng hóa xuất nhập khẩu"
    ],
    "toolsUsed": [
      "Tiêu chuẩn đóng gói hàng nguy hiểm IATA / IMDG",
      "Túi chống ẩm silica gel công nghiệp",
      "Phần mềm quản lý khiếu nại bảo hiểm"
    ],
    "workEnvironment": "Công ty bảo hiểm phi nhân thọ (Bảo Việt, PVI), công ty dịch vụ đóng gói hàng xuất khẩu.",
    "difficultiesAndTradeoffs": [
      "Phải điều tra kỹ lưỡng hiện trường container bị hư hỏng để xác định nguyên nhân chính xác",
      "Nắm vững các quy tắc hàng hải quốc tế phức tạp"
    ],
    "coreSkills": [
      "Hiểu biết về vật liệu bao bì đóng gói chịu lực",
      "Kiến thức luật bảo hiểm hàng hải quốc tế",
      "Tính tỉ mỉ và khả năng thu thập bằng chứng hiện trường"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Giáo dục kinh tế và pháp luật",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Bảo hiểm, Kinh tế ngoại thương hoặc Kỹ thuật Vật liệu"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Bảo hiểm, Kinh tế ngoại thương hoặc Kỹ thuật Vật liệu",
    "trialActivity": "Tìm hiểu các ký hiệu hình chiếc ly dễ vỡ và chiếc ô che mưa in trên thùng carton có ý nghĩa gì đối với người vận chuyển.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kiểm tra quy cách đóng gói và tem niêm phong kiện hàng xuất khẩu",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-tu-dong-hoa-trung-tam-phan-loai",
    "title": "Kỹ sư Tự động hóa trung tâm phân loại bưu chính (Parcel Sortation Automation Engineer)",
    "englishTitle": "Parcel Sortation Center Automation Engineer",
    "synonyms": [
      "Kỹ sư phân loại bưu chính",
      "Sortation Automation Engineer"
    ],
    "group": "logistics",
    "category": "Logistics",
    "categoryLabel": "Logistics, chuỗi cung ứng và ngoại thương",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Bảo trì và lập trình hệ thống băng chuyền phân loại tự động (Cross-belt sorter) chia hàng chục nghìn gói hàng mỗi giờ cho bưu điện và đơn vị chuyển phát nhanh.",
    "typicalTasks": [
      "Hiệu chuẩn camera quét mã vạch tốc độ cao trên băng tải chạy 2.5m/s",
      "Lập trình điều khiển cánh tay gạt và máng trượt phân chia bưu phẩm theo mã bưu chính",
      "Khắc phục sự cố kẹt hàng trên băng chuyền trong vòng 5 phút để thông luồng hàng"
    ],
    "deliverables": [
      "Nhật ký bảo dưỡng định kỳ hệ thống băng chuyền tự động",
      "Báo cáo năng suất chia chọn hàng nghìn bưu phẩm/giờ"
    ],
    "toolsUsed": [
      "Hệ thống Cross-belt Sorter",
      "Camera đọc mã vạch Datalogic",
      "Phần mềm SCADA điều khiển băng tải",
      "Dụng cụ bảo trì cơ điện"
    ],
    "workEnvironment": "Trung tâm phân loại tự động thông minh (VNPost, Viettel Post, J&T Express, SPX).",
    "difficultiesAndTradeoffs": [
      "Ca trực đêm cao điểm từ 22h đến 6h sáng khi toàn bộ hàng bưu chính dồn về trung tâm phân loại",
      "Tiếng ồn động cơ băng chuyền và bụi bặm bao bì carton"
    ],
    "coreSkills": [
      "Bảo trì cơ điện tử công nghiệp",
      "Xử lý sự cố kỹ thuật tốc độ cao",
      "Hiểu biết về thị giác máy đọc mã vạch"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Tin học",
      "Công nghệ"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Cơ điện tử, Kỹ thuật Điện - Tự động hóa"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Điện tử công nghiệp"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Cơ điện tử, Kỹ thuật Điện - Tự động hóa | Cao đẳng: Cao đẳng Điện tử công nghiệp",
    "trialActivity": "Tìm hiểu cách hệ thống băng chuyền tự động đọc mã vạch trên gói hàng và đẩy gói hàng rơi đúng vào bao tải của tỉnh mình trong 2 giây.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Hệ thống băng chuyền phân loại bưu kiện tự động tốc độ cao",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "bep-truong-dieu-hanh",
    "title": "Bếp trưởng điều hành (Executive Chef)",
    "englishTitle": "Executive Chef",
    "synonyms": [
      "Bếp trưởng",
      "Head Chef"
    ],
    "group": "du-lich-am-thuc",
    "category": "DuLich",
    "categoryLabel": "Du lịch, khách sạn và ẩm thực",
    "riasecCodes": [
      "A",
      "R",
      "E"
    ],
    "shortSummary": "Sáng tạo thực đơn ẩm thực tinh hoa, quản lý hàng chục đầu bếp và kiểm soát nghiêm ngặt hương vị, thẩm mỹ từng đĩa thức ăn phục vụ khách sạn 5 sao.",
    "typicalTasks": [
      "Thiết kế thực đơn món ăn mới theo mùa kết hợp nguyên liệu đặc sản địa phương",
      "Trực tiếp nấu các món ăn chính và nếm thử tất cả nước sốt trước giờ phục vụ",
      "Tính toán giá vốn món ăn (Food cost) và quản lý vệ sinh an toàn thực phẩm tiêu chuẩn HACCP"
    ],
    "deliverables": [
      "Bộ công thức món ăn chuẩn hóa (Standard Recipe)",
      "Thực đơn tiệc cao cấp phục vụ hàng trăm thực khách"
    ],
    "toolsUsed": [
      "Bộ dao bếp chuyên dụng cá nhân",
      "Bếp từ công nghiệp và lò nướng hơi nước Combi oven",
      "Bảng tính Food Cost"
    ],
    "workEnvironment": "Khu bếp mở hoặc bếp trung tâm khách sạn 5 sao, resort nghỉ dưỡng cao cấp.",
    "difficultiesAndTradeoffs": [
      "Môi trường bếp nhiệt độ cao, lửa lớn, dầu mỡ và dao nhọn nguy hiểm",
      "Áp lực phục vụ dồn dập vào giờ ăn trưa và ăn tối, làm việc suốt các dịp lễ Tết"
    ],
    "coreSkills": [
      "Nghệ thuật vị giác và thị giác ẩm thực tinh tế",
      "Kỹ năng lãnh đạo và chỉ huy căn bếp nhịp nhàng",
      "Quản trị chi phí nguyên vật liệu"
    ],
    "highSchoolSubjects": [
      "Mỹ thuật",
      "Hóa học",
      "Giáo dục kinh tế và pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị dịch vụ ẩm thực hoặc Quản trị khách sạn"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Nghệ thuật Ẩm thực"
      },
      {
        "level": "Đào tạo nghề",
        "description": "Chứng chỉ Bếp trưởng điều hành quốc tế"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị dịch vụ ẩm thực hoặc Quản trị khách sạn | Cao đẳng: Cao đẳng Nghệ thuật Ẩm thực | Đào tạo nghề: Chứng chỉ Bếp trưởng điều hành quốc tế",
    "trialActivity": "Thử tự tay nấu một món ăn gia đình yêu thích và trang trí đĩa thức ăn sao cho đẹp mắt như trong nhà hàng.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Bếp trưởng điều hành hoàn thiện chi tiết trang trí món ăn cao cấp",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "quan-ly-khach-san-resort-quoc-te",
    "title": "Tổng quản lý Khách sạn / Resort quốc tế (Hotel General Manager - GM)",
    "englishTitle": "Hotel & Resort General Manager",
    "synonyms": [
      "Giám đốc khách sạn",
      "Hotel GM"
    ],
    "group": "du-lich-am-thuc",
    "category": "DuLich",
    "categoryLabel": "Du lịch, khách sạn và ẩm thực",
    "riasecCodes": [
      "E",
      "S",
      "C"
    ],
    "shortSummary": "Điều hành toàn bộ hoạt động từ buồng phòng, ẩm thực, tiền sảnh đến tài chính, mang lại trải nghiệm nghỉ dưỡng đẳng cấp quốc tế cho du khách.",
    "typicalTasks": [
      "Kiểm tra ngẫu nhiên chất lượng buồng phòng, cảnh quan bể bơi và khu vực đón tiếp",
      "Điều hành cuộc họp ban giám đốc hàng ngày để tối ưu hóa công suất phòng (RevPAR)",
      "Trực tiếp đón tiếp các đoàn khách VIP, chính khách và đại sứ ngoại giao"
    ],
    "deliverables": [
      "Báo cáo tài chính doanh thu buồng phòng và F&B",
      "Chiến lược nâng cao chỉ số hài lòng khách hàng (GSS)"
    ],
    "toolsUsed": [
      "Phần mềm quản lý khách sạn PMS Opera",
      "Bảng theo dõi chỉ số RevPAR",
      "Hệ thống liên lạc nội bộ bộ đàm"
    ],
    "workEnvironment": "Khách sạn thương hiệu quốc tế (Marriott, Hilton, InterContinental, Accor, Vinpearl).",
    "difficultiesAndTradeoffs": [
      "Lịch làm việc không có ngày nghỉ cố định, luôn sẵn sàng có mặt khi xảy ra sự cố tại khách sạn",
      "Áp lực duy trì tiêu chuẩn thương hiệu 5 sao khắt khe"
    ],
    "coreSkills": [
      "Tư duy hiếu khách (Hospitality mindset) đỉnh cao",
      "Kỹ năng quản trị điều hành và ngoại giao lịch thiệp",
      "Tiếng Anh giao tiếp chuẩn mực quốc tế"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Giáo dục kinh tế và pháp luật",
      "Ngữ văn",
      "Địa lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị Khách sạn hoặc Quản trị Du lịch (ĐH Kinh tế Quốc dân, ĐH Hà Nội, các trường quốc tế)"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị Khách sạn hoặc Quản trị Du lịch (ĐH Kinh tế Quốc dân, ĐH Hà Nội, các trường quốc tế)",
    "trialActivity": "Bước vào một sảnh khách sạn lớn và quan sát cách nhân viên lễ tân cúi chào và mời nước khách đến nhận phòng.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Tổng quản lý kiểm tra sảnh lễ tân khách sạn 5 sao sang trọng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-pha-che-barista-mixologist",
    "title": "Chuyên viên Pha chế đồ uống (Barista & Mixologist)",
    "englishTitle": "Specialty Coffee Barista & Mixologist",
    "synonyms": [
      "Chuyên viên pha chế",
      "Barista / Bartender"
    ],
    "group": "du-lich-am-thuc",
    "category": "DuLich",
    "categoryLabel": "Du lịch, khách sạn và ẩm thực",
    "riasecCodes": [
      "A",
      "R",
      "S"
    ],
    "shortSummary": "Chiết xuất cà phê đặc sản Specialty Coffee, vẽ nghệ thuật bọt sữa Latte Art và sáng tạo các loại mocktail, cocktail đậm đà hương vị thảo mộc nhiệt đới.",
    "typicalTasks": [
      "Căn chỉnh kích thước hạt xay và thời gian chiết xuất espresso đạt tỷ lệ vàng",
      "Tạo hình bọt sữa mịn vẽ hình lá dương xỉ, hoa tulip trên tách cà phê (Latte Art)",
      "Lắc shaker phối trộn các loại siro trái cây, rượu thảo mộc và thảo dược thiên nhiên"
    ],
    "deliverables": [
      "Tách cà phê espresso chuẩn hương vị phong phú",
      "Menu thức uống sáng tạo theo mùa"
    ],
    "toolsUsed": [
      "Máy pha cà phê chuyên nghiệp La Marzocco",
      "Cân điện tử pha chế đo thời gian",
      "Bình lắc cocktail Shaker",
      "Muỗng khuấy Bar spoon"
    ],
    "workEnvironment": "Quán cà phê đặc sản Specialty Coffee, quầy bar khách sạn 5 sao, lounge cao cấp.",
    "difficultiesAndTradeoffs": [
      "Đứng liên tục suốt ca làm việc và đôi bàn tay thường xuyên tiếp xúc với nước đá lạnh",
      "Áp lực tốc độ pha chế khi khách xếp hàng dài vào giờ cao điểm sáng"
    ],
    "coreSkills": [
      "Khứu giác và vị giác tinh tế cảm nhận tầng hương",
      "Sự khéo léo tỉ mỉ khi đánh sữa vẽ Latte Art",
      "Kỹ năng kể chuyện về nguồn gốc hạt cà phê cho khách"
    ],
    "highSchoolSubjects": [
      "Hóa học",
      "Mỹ thuật",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Kỹ thuật Pha chế đồ uống"
      },
      {
        "level": "Đào tạo nghề",
        "description": "Chứng chỉ Barista quốc tế SCA (Specialty Coffee Association)"
      }
    ],
    "entryPathway": "Cao đẳng: Cao đẳng Kỹ thuật Pha chế đồ uống | Đào tạo nghề: Chứng chỉ Barista quốc tế SCA (Specialty Coffee Association)",
    "trialActivity": "Thử tập rót sữa tươi vào một cốc trà đen từ từ để quan sát các dải vân màu xoáy cuộn hòa quyện vào nhau.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Barista tỉ mỉ vẽ hình nghệ thuật bọt sữa Latte Art trên tách cà phê",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "giam-sat-tien-sanh-front-office",
    "title": "Giám sát Bộ phận Tiền sảnh (Front Office Supervisor)",
    "englishTitle": "Hotel Front Office Supervisor",
    "synonyms": [
      "Giám sát lễ tân",
      "Front Desk Supervisor"
    ],
    "group": "du-lich-am-thuc",
    "category": "DuLich",
    "categoryLabel": "Du lịch, khách sạn và ẩm thực",
    "riasecCodes": [
      "E",
      "S",
      "C"
    ],
    "shortSummary": "Điều phối nhân viên lễ tân làm thủ tục check-in, check-out nhanh chóng, xử lý phàn nàn của khách và nâng cấp hạng phòng (Upgrade).",
    "typicalTasks": [
      "Phân bổ danh sách phòng sạch cho khách đến theo yêu cầu đặc biệt",
      "Xử lý khéo léo các tình huống khách phàn nàn về tiếng ồn hoặc phòng chưa ưng ý",
      "Đào tạo nghiệp vụ nụ cười và văn hóa đón tiếp cho nhân viên lễ tân mới"
    ],
    "deliverables": [
      "Báo cáo bàn giao ca trực tiền sảnh",
      "Hồ sơ ghi nhận sở thích cá nhân của khách hàng thân thiết (Guest Profile)"
    ],
    "toolsUsed": [
      "Hệ thống PMS Opera",
      "Máy thanh toán thẻ POS",
      "Hệ thống quản lý khóa từ điện tử"
    ],
    "workEnvironment": "Quầy lễ tân sảnh khách sạn cao cấp, khu nghỉ dưỡng.",
    "difficultiesAndTradeoffs": [
      "Trực ca xoay bao gồm cả ca đêm (Night Audit)",
      "Đối mặt trực tiếp với những vị khách đang bực bội hoặc mệt mỏi sau chuyến bay dài"
    ],
    "coreSkills": [
      "Kỹ năng giao tiếp và lắng nghe xoa dịu cảm xúc xuất sắc",
      "Tiếng Anh và ngoại ngữ thứ hai trôi chảy",
      "Tác phong thanh lịch, chỉn chu"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Ngữ văn",
      "Địa lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị Khách sạn hoặc Du lịch"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Nghiệp vụ Lễ tân Khách sạn"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị Khách sạn hoặc Du lịch | Cao đẳng: Cao đẳng Nghiệp vụ Lễ tân Khách sạn",
    "trialActivity": "Tập nói câu chào đón khách đến nhận phòng bằng tiếng Anh với nụ cười thân thiện và giọng nói ấm áp.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhân viên tiền sảnh khách sạn trao thẻ phòng cho du khách với nụ cười ấm áp",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-to-chuc-tiec-cuoi-va-su-kien-mice",
    "title": "Chuyên viên Tổ chức sự kiện & Tiệc cưới cao cấp (Event & Wedding Planner)",
    "englishTitle": "MICE & Luxury Wedding Planner",
    "synonyms": [
      "Wedding Planner",
      "Chuyên viên tổ chức tiệc MICE"
    ],
    "group": "du-lich-am-thuc",
    "category": "DuLich",
    "categoryLabel": "Du lịch, khách sạn và ẩm thực",
    "riasecCodes": [
      "A",
      "E",
      "S"
    ],
    "shortSummary": "Lên ý tưởng trang trí hoa tươi, kịch bản âm thanh ánh sáng và điều phối tiệc cưới trong mơ hoặc hội nghị quốc tế nghìn người.",
    "typicalTasks": [
      "Gặp gỡ cô dâu chú rể để phác thảo ý tưởng chủ đề câu chuyện tình yêu",
      "Điều phối các đơn vị hoa tươi, ban nhạc, âm thanh ánh sáng và nhiếp ảnh gia",
      "Cầm kịch bản chi tiết điều phối từng phút trong đêm tiệc diễn ra suôn sẻ"
    ],
    "deliverables": [
      "Kịch bản chương trình sự kiện (Event Timeline)",
      "Bản vẽ 3D phối cảnh sân khấu và không gian tiệc"
    ],
    "toolsUsed": [
      "Phần mềm thiết kế sơ đồ bàn tiệc Banquet Event Order (BEO)",
      "Canva",
      "Bộ đàm điều phối sự kiện"
    ],
    "workEnvironment": "Trung tâm hội nghị tiệc cưới, bãi biển resort tổ chức đám cưới, khách sạn 5 sao.",
    "difficultiesAndTradeoffs": [
      "Sự kiện chỉ diễn ra một lần duy nhất trong đời khách hàng, không được phép xảy ra bất kỳ sai sót nào",
      "Làm việc cường độ cao vào cuối tuần và ban đêm"
    ],
    "coreSkills": [
      "Tư duy thẩm mỹ không gian tiệc sang trọng",
      "Khả năng quản trị thời gian và điều phối sân khấu",
      "Kỹ năng xử lý sự cố phát sinh bình tĩnh"
    ],
    "highSchoolSubjects": [
      "Mỹ thuật",
      "Ngữ văn",
      "Âm nhạc"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị Sự kiện, Quản trị Khách sạn hoặc Quan hệ công chúng"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị Sự kiện, Quản trị Khách sạn hoặc Quan hệ công chúng",
    "trialActivity": "Lên ý tưởng chủ đề màu sắc và một bài hát ý nghĩa cho buổi tiệc sinh nhật 18 tuổi của em.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Không gian tiệc cưới lãng mạn trang trí hoa tươi ngoài trời",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-thiet-ke-tour-trai-nghiem",
    "title": "Chuyên viên Thiết kế tour du lịch trải nghiệm (Tour Itinerary Designer)",
    "englishTitle": "Experiential Travel Product Designer",
    "synonyms": [
      "Chuyên viên phát triển sản phẩm du lịch",
      "Tour Designer"
    ],
    "group": "du-lich-am-thuc",
    "category": "DuLich",
    "categoryLabel": "Du lịch, khách sạn và ẩm thực",
    "riasecCodes": [
      "A",
      "I",
      "E"
    ],
    "shortSummary": "Khảo sát các cung đường trekking hoang sơ, làng nghề truyền thống và ẩm thực bản địa để tạo nên các hành trình du lịch độc lạ, ý nghĩa.",
    "typicalTasks": [
      "Đi thực địa khảo sát độ an toàn đường mòn leo núi và điểm cắm trại",
      "Thương lượng với người dân bản địa để mở các hoạt động trải nghiệm nấu ăn, dệt thổ cẩm",
      "Tính toán giá thành tour chi tiết và viết bài giới thiệu hành trình hấp dẫn"
    ],
    "deliverables": [
      "Chương trình tour du lịch trải nghiệm độc quyền",
      "Bảng dự toán chi phí giá thành tour"
    ],
    "toolsUsed": [
      "Google Earth 3D",
      "GPS theo dõi cung đường trekking",
      "Phần mềm tính giá tour"
    ],
    "workEnvironment": "Công ty lữ hành du lịch trải nghiệm (Oxalis Adventure, Vietravel, Saigontourist).",
    "difficultiesAndTradeoffs": [
      "Phải trèo đèo lội suối băng rừng để tìm kiếm các điểm đến hoang sơ mới",
      "Chịu trách nhiệm về mức độ an toàn của du khách trong các tour mạo hiểm"
    ],
    "coreSkills": [
      "Niềm đam mê khám phá thiên nhiên và văn hóa bản địa",
      "Kỹ năng đánh giá rủi ro an toàn du lịch mạo hiểm",
      "Kỹ năng kể chuyện truyền cảm hứng qua câu chữ"
    ],
    "highSchoolSubjects": [
      "Địa lý",
      "Lịch sử",
      "Ngữ văn",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị Dịch vụ du lịch & lữ hành hoặc Địa lý du lịch"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị Dịch vụ du lịch & lữ hành hoặc Địa lý du lịch",
    "trialActivity": "Tự thiết kế một lịch trình 2 ngày 1 đêm khám phá quê hương của em dành cho một người bạn từ xa tới chơi.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Du khách trải nghiệm cung đường trekking khám phá thiên nhiên hùng vĩ",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-gia-nem-thu-ruou-sommelier",
    "title": "Chuyên gia Thẩm định và Phục vụ rượu vang (Sommelier)",
    "englishTitle": "Certified Wine Sommelier",
    "synonyms": [
      "Chuyên gia rượu vang",
      "Sommelier"
    ],
    "group": "du-lich-am-thuc",
    "category": "DuLich",
    "categoryLabel": "Du lịch, khách sạn và ẩm thực",
    "riasecCodes": [
      "A",
      "E",
      "S"
    ],
    "shortSummary": "Quản lý hầm rượu vang nghìn chai, tư vấn loại rượu vang phối hợp hoàn hảo với món thịt bò hay hải sản để nâng tầm hương vị bữa tiệc.",
    "typicalTasks": [
      "Bảo quản nhiệt độ và độ ẩm chuẩn xác trong hầm rượu vang khách sạn",
      "Tư vấn cho thực khách loại rượu vang phù hợp với từng món ăn trên bàn tiệc",
      "Thực hiện nghi thức mở nắp chai, rót rượu và decanter thở rượu vang chuyên nghiệp"
    ],
    "deliverables": [
      "Danh mục thực đơn rượu vang cao cấp (Wine List)",
      "Quy trình kết hợp món ăn và đồ uống chuẩn mực"
    ],
    "toolsUsed": [
      "Bộ ly pha lê thử rượu vang",
      "Khui rượu vang chuyên dụng lưỡi kép",
      "Bình thở rượu Decanter"
    ],
    "workEnvironment": "Nhà hàng cao cấp đạt sao Michelin, hầm rượu vang khách sạn 5 sao.",
    "difficultiesAndTradeoffs": [
      "Phải học thuộc hàng nghìn vùng đất trồng nho, năm mùa vụ (vintage) trên khắp thế giới",
      "Cần giữ gìn khứu giác và vị giác nhạy bén, không hút thuốc lá hay ăn đồ quá cay"
    ],
    "coreSkills": [
      "Khứu giác và vị giác thẩm định tinh tế",
      "Kiến thức địa lý và lịch sử các vùng làm vang thế giới",
      "Nghi thức phục vụ bàn tiệc quý phái"
    ],
    "highSchoolSubjects": [
      "Địa lý",
      "Hóa học",
      "Tiếng Anh / Tiếng Pháp"
    ],
    "entryPathways": [
      {
        "level": "Đào tạo nghề",
        "description": "Chứng chỉ Sommelier quốc tế WSET (Wine & Spirit Education Trust) Level 2, 3 hoặc Court of Master Sommeliers"
      }
    ],
    "entryPathway": "Đào tạo nghề: Chứng chỉ Sommelier quốc tế WSET (Wine & Spirit Education Trust) Level 2, 3 hoặc Court of Master Sommeliers",
    "trialActivity": "Tìm hiểu tại sao người ta lại uống rượu vang trắng khi ăn hải sản và uống rượu vang đỏ khi ăn thịt bò bít tết.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên gia Sommelier kiểm tra màu sắc rượu vang trong ly pha lê",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "quan-ly-chuoi-nha-hang-fb",
    "title": "Quản lý Vận hành chuỗi nhà hàng ẩm thực (F&B Operations Manager)",
    "englishTitle": "Food & Beverage Multi-Unit Operations Manager",
    "synonyms": [
      "Quản lý chuỗi F&B",
      "F&B Operations Manager"
    ],
    "group": "du-lich-am-thuc",
    "category": "DuLich",
    "categoryLabel": "Du lịch, khách sạn và ẩm thực",
    "riasecCodes": [
      "E",
      "C"
    ],
    "shortSummary": "Giám sát chất lượng đồng đều tại hàng chục chi nhánh nhà hàng, tối ưu hóa chi phí nguyên vật liệu và doanh thu bán hàng.",
    "typicalTasks": [
      "Kiểm tra đột xuất quy trình chế biến và thái độ phục vụ tại các chi nhánh",
      "Phân tích doanh thu từng cửa hàng và đưa ra giải pháp cải thiện điểm bán yếu",
      "Đào tạo cửa hàng trưởng về quản lý chi phí nhân công và nguyên liệu"
    ],
    "deliverables": [
      "Báo cáo hiệu quả kinh doanh chuỗi nhà hàng (P&L)",
      "Bộ quy chuẩn vận hành chuẩn hóa toàn chuỗi"
    ],
    "toolsUsed": [
      "Phần mềm quản lý bán hàng F&B (iPOS, CukCuk)",
      "Hệ thống kiểm tra chất lượng Mystery Shopper"
    ],
    "workEnvironment": "Trụ sở chuỗi ẩm thực (Golden Gate, RedSun, Pizza 4P's, Highlands Coffee), thường xuyên đi kiểm tra chi nhánh.",
    "difficultiesAndTradeoffs": [
      "Xử lý các khủng hoảng vệ sinh an toàn thực phẩm nếu có chi nhánh vi phạm",
      "Áp lực duy trì sự tăng trưởng doanh thu liên tục"
    ],
    "coreSkills": [
      "Kỹ năng quản trị chuỗi bán lẻ ẩm thực",
      "Phân tích báo cáo lãi lỗ tài chính",
      "Khả năng lãnh đạo và chuẩn hóa quy trình"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Toán học",
      "Ngữ văn"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị kinh doanh hoặc Quản trị dịch vụ du lịch & ẩm thực"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị kinh doanh hoặc Quản trị dịch vụ du lịch & ẩm thực",
    "trialActivity": "Vào một quán trà sữa hay gà rán trong chuỗi lớn và quan sát xem các bước nhân viên nhận đơn có giống nhau ở mọi chi nhánh không.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Không gian nhà hàng ẩm thực hiện đại đông đúc thực khách",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "huong-dan-vien-du-lich-sinh-thai",
    "title": "Hướng dẫn viên du lịch sinh thái & cộng đồng (Eco-tourism Guide)",
    "englishTitle": "Eco-tourism & Community Guide",
    "synonyms": [
      "Hướng dẫn viên sinh thái",
      "Bản địa viên du lịch"
    ],
    "group": "du-lich-am-thuc",
    "category": "DuLich",
    "categoryLabel": "Du lịch, khách sạn và ẩm thực",
    "riasecCodes": [
      "R",
      "S",
      "E"
    ],
    "shortSummary": "Dẫn du khách lội suối ngắm chim, tìm hiểu thảm thực vật rừng nguyên sinh và trải nghiệm cuộc sống mộc mạc cùng đồng bào dân tộc thiểu số.",
    "typicalTasks": [
      "Thuyết minh sinh động về các loài động thực vật quý hiếm trong vườn quốc gia",
      "Hướng dẫn du khách nguyên tắc không để lại rác (Leave No Trace)",
      "Kết nối du khách cùng bà con bản địa giã bánh dày, nhảy sạp, ngủ nhà sàn"
    ],
    "deliverables": [
      "Nhật ký an toàn hành trình tour sinh thái",
      "Thu nhập cải thiện cho các gia đình bản địa làm du lịch cộng đồng"
    ],
    "toolsUsed": [
      "Ống nhòm ngắm chim chuyên dụng",
      "Túi sơ cấp cứu rắn cắn và chấn thương",
      "Bộ đàm định vị GPS"
    ],
    "workEnvironment": "Vườn quốc gia Cúc Phương, Phong Nha - Kẻ Bàng, Pù Mát, Cát Tiên; các bản làng du lịch cộng đồng Tây Bắc.",
    "difficultiesAndTradeoffs": [
      "Làm việc ngoài thiên nhiên rừng rậm có vắt, muỗi rừng và thời tiết mưa lũ bất ngờ",
      "Đòi hỏi thể lực bền bỉ và kỹ năng sinh tồn nơi hoang dã"
    ],
    "coreSkills": [
      "Kiến thức sinh thái học tự nhiên sâu rộng",
      "Kỹ năng sinh tồn và sơ cấp cứu ngoài trời",
      "Sự gắn kết chân thành với đồng bào bản địa"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Địa lý",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Hướng dẫn du lịch"
      },
      {
        "level": "Đào tạo nghề",
        "description": "Thẻ Hướng dẫn viên du lịch nội địa / quốc tế"
      }
    ],
    "entryPathway": "Cao đẳng: Cao đẳng Hướng dẫn du lịch | Đào tạo nghề: Thẻ Hướng dẫn viên du lịch nội địa / quốc tế",
    "trialActivity": "Tìm hiểu nguyên tắc vàng của du lịch sinh thái: 'Không lấy gì ngoài những bức ảnh, không để lại gì ngoài những dấu chân'.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Hướng dẫn viên sinh thái chỉ dẫn du khách khám phá thảm thực vật rừng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-trai-nghiem-khach-hang-du-lich",
    "title": "Chuyên viên Quản trị trải nghiệm khách hàng du lịch (Hospitality Customer Experience - CX)",
    "englishTitle": "Hospitality Customer Experience (CX) Specialist",
    "synonyms": [
      "Chuyên viên trải nghiệm khách hàng",
      "Hospitality CX Specialist"
    ],
    "group": "du-lich-am-thuc",
    "category": "DuLich",
    "categoryLabel": "Du lịch, khách sạn và ẩm thực",
    "riasecCodes": [
      "S",
      "E",
      "C"
    ],
    "shortSummary": "Phân tích từng điểm chạm từ lúc khách đặt phòng đến khi rời resort, bất ngờ tặng quà sinh nhật hay chuẩn bị gối ngủ theo sở thích cá nhân.",
    "typicalTasks": [
      "Lập bản đồ hành trình trải nghiệm của khách du lịch (Customer Journey Map)",
      "Đọc và phản hồi các đánh giá của du khách trên TripAdvisor, Agoda, Booking.com",
      "Thiết kế các khoảnh khắc bất ngờ đáng nhớ (Wow Moments) cho khách lưu trú"
    ],
    "deliverables": [
      "Bản đồ hành trình trải nghiệm khách hàng",
      "Báo cáo chỉ số đo lường mức độ hài lòng khách hàng (NPS / CSAT)"
    ],
    "toolsUsed": [
      "Hệ thống theo dõi phản hồi ReviewPro / TrustYou",
      "Phần mềm CRM",
      "Khảo sát trực tuyến"
    ],
    "workEnvironment": "Resort nghỉ dưỡng cao cấp, tập đoàn du lịch nghỉ dưỡng.",
    "difficultiesAndTradeoffs": [
      "Phải giữ bình tĩnh và khéo léo biến những phàn nàn tiêu cực thành trải nghiệm tích cực",
      "Luôn phải tìm tòi những ý tưởng chăm sóc khách hàng mới mẻ"
    ],
    "coreSkills": [
      "Tư duy thấu cảm và nhạy cảm với cảm xúc con người",
      "Kỹ năng phân tích phản hồi số liệu",
      "Sự chu đáo, tinh tế đến từng chi tiết nhỏ"
    ],
    "highSchoolSubjects": [
      "Tâm lý học",
      "Ngữ văn",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị Khách sạn, Quan hệ công chúng hoặc Tâm lý học"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị Khách sạn, Quan hệ công chúng hoặc Tâm lý học",
    "trialActivity": "Nghĩ ra một món quà nhỏ bất ngờ em có thể chuẩn bị để chào đón một người bạn thân đến nhà chơi sau một chuyến đi xa.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Resort nghỉ dưỡng chuẩn bị quà chào mừng cá nhân hóa cho khách hàng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-marketing-so",
    "title": "Chuyên viên Marketing & Digital Marketing (Digital Marketing Specialist)",
    "englishTitle": "Digital Marketing Specialist",
    "synonyms": [
      "Chuyên viên tiếp thị số",
      "Digital Marketer"
    ],
    "group": "truyen-thong-marketing",
    "category": "Marketing",
    "categoryLabel": "Truyền thông, tiếp thị và sáng tạo nội dung",
    "riasecCodes": [
      "E",
      "A",
      "C"
    ],
    "shortSummary": "Lập kế hoạch chiến dịch truyền thông ra mắt sản phẩm mới, phối hợp quảng cáo đa kênh và đo lường tỷ lệ chuyển đổi khách hàng.",
    "typicalTasks": [
      "Định vị thông điệp truyền thông cốt lõi (Tagline) chạm trúng tâm lý khách hàng",
      "Phân bổ ngân sách quảng cáo giữa các kênh mạng xã hội và phát mẫu thử",
      "Đọc số liệu chuyển đổi đơn hàng và phân tích phản ứng dư luận sau chiến dịch"
    ],
    "deliverables": [
      "Kế hoạch chiến dịch Marketing tổng thể",
      "Báo cáo hiệu quả tỷ lệ hoàn vốn đầu tư quảng cáo (ROAS)"
    ],
    "toolsUsed": [
      "Meta Ads Manager",
      "Google Ads",
      "TikTok Ads Manager",
      "Google Analytics 4"
    ],
    "workEnvironment": "Phòng Marketing doanh nghiệp, Agency quảng cáo sáng tạo.",
    "difficultiesAndTradeoffs": [
      "Thuật toán quảng cáo mạng xã hội thay đổi liên tục đòi hỏi thử nghiệm hàng ngày",
      "Áp lực doanh số bán hàng và ngân sách quảng cáo"
    ],
    "coreSkills": [
      "Tư duy thấu hiểu tâm lý khách hàng",
      "Kỹ năng phân tích số liệu chuyển đổi",
      "Khả năng sáng tạo ý tưởng truyền thông bắt trend"
    ],
    "highSchoolSubjects": [
      "Ngữ văn",
      "Toán học",
      "Tiếng Anh",
      "Giáo dục kinh tế và pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Marketing, Quản trị kinh doanh hoặc Truyền thông đa phương tiện"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Digital Marketing"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Marketing, Quản trị kinh doanh hoặc Truyền thông đa phương tiện | Cao đẳng: Cao đẳng Digital Marketing",
    "trialActivity": "Lướt mạng xã hội và ghi lại 3 câu khẩu hiệu (slogan) quảng cáo khiến em ấn tượng nhất.",
    "has3D": false,
    "simulationTaskId": "task-marketing",
    "experienceType": "SCENARIO_SIMULATION",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên marketing phân tích hiệu quả chiến dịch trên biểu đồ",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "nguoi-sang-tao-noi-dung-da-nen-tang",
    "title": "Người sáng tạo nội dung đa nền tảng (Multi-platform Content Creator)",
    "englishTitle": "Digital Content Creator & Influencer",
    "synonyms": [
      "Content Creator",
      "Nhà sáng tạo nội dung TikTok/YouTube"
    ],
    "group": "truyen-thong-marketing",
    "category": "Marketing",
    "categoryLabel": "Truyền thông, tiếp thị và sáng tạo nội dung",
    "riasecCodes": [
      "A",
      "E",
      "S"
    ],
    "shortSummary": "Lên ý tưởng kịch bản, quay dựng video ngắn TikTok, Reels và YouTube Shorts chia sẻ kiến thức, phong cách sống thu hút hàng triệu người xem.",
    "typicalTasks": [
      "Nghiên cứu xu hướng âm nhạc và chủ đề thịnh hành hàng tuần",
      "Viết kịch bản video ngắn có mở đầu giật gân (Hook) trong 3 giây đầu",
      "Tự quay phim, diễn xuất tự nhiên và dựng video chèn phụ đề bắt mắt"
    ],
    "deliverables": [
      "Video ngắn đạt triệu lượt xem có tính lan tỏa cao",
      "Kịch bản chi tiết phân cảnh quay video"
    ],
    "toolsUsed": [
      "CapCut",
      "Premiere Pro",
      "Đèn Ring Light",
      "Micro thu âm cài áo không dây"
    ],
    "workEnvironment": "Studio tự do tại nhà, làm việc linh hoạt ở quán cafe hoặc ngoài trời.",
    "difficultiesAndTradeoffs": [
      "Áp lực cạn kiệt ý tưởng sáng tạo (Burnout) khi phải ra video đều đặn mỗi ngày",
      "Đối diện với những bình luận chỉ trích tiêu cực từ cộng đồng mạng"
    ],
    "coreSkills": [
      "Khả năng biểu đạt trước ống kính tự tin",
      "Kỹ năng kể chuyện bằng hình ảnh và âm nhạc",
      "Tư duy bắt nhịp xu hướng văn hóa giới trẻ"
    ],
    "highSchoolSubjects": [
      "Ngữ văn",
      "Mỹ thuật",
      "Âm nhạc"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Báo chí, Truyền thông đa phương tiện, Đạo diễn hoặc Tự do thực hành xây kênh"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Báo chí, Truyền thông đa phương tiện, Đạo diễn hoặc Tự do thực hành xây kênh",
    "trialActivity": "Thử tự quay và dựng một video ngắn 30 giây chia sẻ mẹo học thuộc nhanh một bài thơ trên CapCut.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhà sáng tạo nội dung quay video trước đèn chiếu và chân máy",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-seo-website",
    "title": "Chuyên viên Tối ưu hóa công cụ tìm kiếm (Search Engine Optimization - SEO Specialist)",
    "englishTitle": "SEO Specialist",
    "synonyms": [
      "Chuyên viên SEO",
      "SEO Specialist"
    ],
    "group": "truyen-thong-marketing",
    "category": "Marketing",
    "categoryLabel": "Truyền thông, tiếp thị và sáng tạo nội dung",
    "riasecCodes": [
      "C",
      "I"
    ],
    "shortSummary": "Nghiên cứu từ khóa người dùng tìm kiếm trên Google, tối ưu hóa bài viết và cấu trúc website để đưa trang web lên vị trí top 1 Google tự nhiên.",
    "typicalTasks": [
      "Nghiên cứu bộ từ khóa có lượng tìm kiếm cao và độ cạnh tranh phù hợp",
      "Tối ưu hóa thẻ tiêu đề, thẻ mô tả, thẻ heading và tốc độ tải trang web (On-page SEO)",
      "Xây dựng mạng lưới liên kết uy tín trỏ về website (Backlink)"
    ],
    "deliverables": [
      "Bộ từ khóa mục tiêu xếp hạng top 1-3 Google",
      "Báo cáo lưu lượng truy cập tự nhiên (Organic Traffic) tăng trưởng"
    ],
    "toolsUsed": [
      "Google Search Console",
      "Ahrefs",
      "SEMrush",
      "Screaming Frog SEO Spider"
    ],
    "workEnvironment": "Phòng Marketing doanh nghiệp, công ty dịch vụ SEO chuyên nghiệp.",
    "difficultiesAndTradeoffs": [
      "Thuật toán Google cập nhật liên tục có thể khiến từ khóa rớt hạng sau một đêm",
      "Kết quả SEO cần thời gian từ 3 đến 6 tháng kiên trì mới thấy rõ thành quả"
    ],
    "coreSkills": [
      "Kỹ năng nghiên cứu và phân tích từ khóa",
      "Hiểu biết kỹ thuật cấu trúc website HTML/CSS cơ bản",
      "Tư duy viết nội dung giải quyết đúng thắc mắc người dùng"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Toán học",
      "Ngữ văn",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Thương mại điện tử, CNTT hoặc Marketing"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Thương mại điện tử, CNTT hoặc Marketing",
    "trialActivity": "Lên Google gõ một câu hỏi bất kỳ và quan sát xem bài viết đầu tiên trả lời câu hỏi đó hay và rõ ràng thế nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên SEO kiểm tra thứ hạng từ khóa trên công cụ tìm kiếm",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-quan-he-bao-chi-pr",
    "title": "Chuyên viên Quan hệ báo chí và Truyền thông (Media Relations / PR Officer)",
    "englishTitle": "Corporate PR & Media Relations Officer",
    "synonyms": [
      "Chuyên viên PR",
      "PR Officer"
    ],
    "group": "truyen-thong-marketing",
    "category": "Marketing",
    "categoryLabel": "Truyền thông, tiếp thị và sáng tạo nội dung",
    "riasecCodes": [
      "E",
      "A",
      "S"
    ],
    "shortSummary": "Viết thông cáo báo chí, tổ chức họp báo ra mắt sản phẩm và duy trì mối quan hệ tốt đẹp với các nhà báo, đài truyền hình.",
    "typicalTasks": [
      "Soạn thảo thông cáo báo chí chuẩn văn phong báo chí sắc sảo",
      "Tổ chức họp báo, đón tiếp phóng viên và điều phối phỏng vấn ban lãnh đạo",
      "Theo dõi dòng chảy tin tức hàng ngày để cảnh báo và xử lý rủi ro khủng hoảng truyền thông"
    ],
    "deliverables": [
      "Thông cáo báo chí gửi các cơ quan thông tấn",
      "Báo cáo tổng hợp lượng bài viết báo chí đưa tin về thương hiệu"
    ],
    "toolsUsed": [
      "Cơ sở dữ liệu danh bạ nhà báo",
      "Google Alerts theo dõi tin tức",
      "Phần mềm biên tập văn bản"
    ],
    "workEnvironment": "Phòng truyền thông đối ngoại doanh nghiệp, tập đoàn lớn, cơ quan nhà nước.",
    "difficultiesAndTradeoffs": [
      "Áp lực phản ứng tức thời 24/7 khi xảy ra khủng hoảng thông tin sai lệch trên mạng",
      "Cần sự khéo léo tối đa trong lời ăn tiếng nói trước công chúng"
    ],
    "coreSkills": [
      "Kỹ năng viết lách báo chí gãy gọn, chuẩn xác",
      "Kỹ năng kết nối ngoại giao và xây dựng mối quan hệ",
      "Bình tĩnh trước khủng hoảng truyền thông"
    ],
    "highSchoolSubjects": [
      "Ngữ văn",
      "Lịch sử",
      "Giáo dục công dân / Kinh tế & Pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Báo chí, Quan hệ công chúng (Học viện Báo chí & Tuyên truyền, ĐH KHXH&NV)"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Báo chí, Quan hệ công chúng (Học viện Báo chí & Tuyên truyền, ĐH KHXH&NV)",
    "trialActivity": "Đọc một bài viết trên báo điện tử và tìm xem thông tin trong bài được trích dẫn từ nguồn nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên PR điều phối buổi họp báo ra mắt thông tin",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "nha-san-xuat-video-podcast",
    "title": "Nhà sản xuất Video và Podcast (Multimedia Producer)",
    "englishTitle": "Digital Video & Audio Podcast Producer",
    "synonyms": [
      "Producer truyền thông",
      "Podcast Producer"
    ],
    "group": "truyen-thong-marketing",
    "category": "Marketing",
    "categoryLabel": "Truyền thông, tiếp thị và sáng tạo nội dung",
    "riasecCodes": [
      "A",
      "E",
      "R"
    ],
    "shortSummary": "Lên format chương trình, chọn lọc khách mời, thu âm giọng nói chuyên nghiệp và chỉ đạo sản xuất các tập podcast trò chuyện truyền cảm hứng.",
    "typicalTasks": [
      "Xây dựng chủ đề thảo luận và câu hỏi phỏng vấn khách mời sâu sắc",
      "Điều chỉnh micro lọc tạp âm và thu âm phòng thu cách âm",
      "Biên tập cắt ghép âm thanh, lồng nhạc nền và xuất bản lên Spotify, Apple Podcasts"
    ],
    "deliverables": [
      "Tập podcast âm thanh chất lượng cao hoàn chỉnh",
      "Kế hoạch sản xuất các mùa phát sóng (Season)"
    ],
    "toolsUsed": [
      "Phần mềm thu âm Adobe Audition / Audacity",
      "Micro thu âm Shure SM7B",
      "Hệ thống mixer âm thanh"
    ],
    "workEnvironment": "Phòng thu âm Podcast Studio, công ty truyền thông đa phương tiện.",
    "difficultiesAndTradeoffs": [
      "Khách mời có thể nói vấp hoặc lạc đề đòi hỏi người sản xuất kiên nhẫn biên tập từng câu",
      "Cần giữ chất lượng âm thanh đồng đều không bị rè hay vang"
    ],
    "coreSkills": [
      "Kỹ thuật thu âm và xử lý âm thanh số",
      "Nghệ thuật lắng nghe và khai thác câu chuyện từ khách mời",
      "Tư duy biên tập mạch lạc"
    ],
    "highSchoolSubjects": [
      "Ngữ văn",
      "Vật lý (Âm học)",
      "Âm nhạc",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Báo chí phát thanh - truyền hình, Đạo diễn âm thanh hoặc Công nghệ truyền thông"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Báo chí phát thanh - truyền hình, Đạo diễn âm thanh hoặc Công nghệ truyền thông",
    "trialActivity": "Mở ứng dụng Spotify nghe thử một tập podcast hướng nghiệp và chú ý cách họ lồng nhạc mở đầu chương trình.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhà sản xuất điều chỉnh bàn mixer trong phòng thu podcast",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-chay-quang-cao-performance",
    "title": "Chuyên viên Tối ưu hóa quảng cáo chuyển đổi (Performance Media Buyer)",
    "englishTitle": "Performance Marketing & Media Buyer",
    "synonyms": [
      "Chuyên viên chạy ads",
      "Media Buyer"
    ],
    "group": "truyen-thong-marketing",
    "category": "Marketing",
    "categoryLabel": "Truyền thông, tiếp thị và sáng tạo nội dung",
    "riasecCodes": [
      "C",
      "E",
      "I"
    ],
    "shortSummary": "Cài đặt mã theo dõi pixel, chạy thử nghiệm A/B hình ảnh video quảng cáo và tối ưu hóa chi phí trên mỗi đơn hàng (CPA) cho sàn TMĐT.",
    "typicalTasks": [
      "Thiết lập chiến dịch quảng cáo nhắm mục tiêu chuẩn xác đối tượng khách hàng tiềm năng",
      "Theo dõi chỉ số giá mỗi lượt click (CPC) và giá mỗi đơn hàng (CPA) từng giờ",
      "Tắt các mẫu quảng cáo không hiệu quả và tăng ngân sách cho các mẫu quảng cáo sinh lời cao"
    ],
    "deliverables": [
      "Bảng theo dõi chỉ số hiệu quả quảng cáo hàng ngày",
      "Chiến dịch quảng cáo mang lại doanh thu nghìn đơn"
    ],
    "toolsUsed": [
      "Facebook Ads Manager",
      "Google Ads Editor",
      "TikTok Ads",
      "Google Tag Manager"
    ],
    "workEnvironment": "Công ty bán lẻ trực tuyến, sàn thương mại điện tử, Agency chuyên sâu performance.",
    "difficultiesAndTradeoffs": [
      "Tài khoản quảng cáo có thể bị khóa bất ngờ đòi hỏi kỹ năng kháng nghị nhanh",
      "Áp lực duy trì doanh số đơn hàng mỗi ngày"
    ],
    "coreSkills": [
      "Tư duy số liệu tài chính quảng cáo",
      "Khả năng phân tích tâm lý hành vi mua sắm",
      "Thử nghiệm A/B testing khoa học"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Tin học",
      "Giáo dục kinh tế và pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Thương mại điện tử, Marketing hoặc Hệ thống thông tin kinh tế"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Thương mại điện tử, Marketing hoặc Hệ thống thông tin kinh tế",
    "trialActivity": "Tìm hiểu tại sao khi em vừa tìm kiếm một đôi giày thể thao trên mạng thì ngay sau đó lướt Facebook lại thấy hiện quảng cáo đôi giày đó.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên phân tích tối ưu chi phí quảng cáo trực tuyến",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "quan-ly-thuong-hieu-brand-manager",
    "title": "Quản lý Thương hiệu (Brand Manager)",
    "englishTitle": "Brand Manager",
    "synonyms": [
      "Quản lý nhãn hàng",
      "Brand Manager"
    ],
    "group": "truyen-thong-marketing",
    "category": "Marketing",
    "categoryLabel": "Truyền thông, tiếp thị và sáng tạo nội dung",
    "riasecCodes": [
      "E",
      "A",
      "I"
    ],
    "shortSummary": "Xây dựng tính cách thương hiệu, thiết kế bao bì sản phẩm và bảo vệ uy tín hình ảnh thương hiệu trong tâm trí người tiêu dùng.",
    "typicalTasks": [
      "Nghiên cứu insight ngầm hiểu của người tiêu dùng để định vị sự khác biệt của nhãn hàng",
      "Phối hợp với phòng R&D và thiết kế hoàn thiện bao bì sản phẩm mới bắt mắt",
      "Dẫn dắt các chiến dịch truyền thông thương hiệu lớn xuyên suốt cả năm"
    ],
    "deliverables": [
      "Cẩm nang định vị thương hiệu (Brand Guideline)",
      "Kế hoạch phát triển nhãn hàng dài hạn"
    ],
    "toolsUsed": [
      "Báo cáo nghiên cứu thị trường Nielsen / Kantar",
      "Phần mềm quản lý dự án Asana",
      "Slide thuyết trình chiến lược"
    ],
    "workEnvironment": "Tập đoàn hàng tiêu dùng đa quốc gia (Unilever, Suntory PepsiCo, Vinamilk, Masan).",
    "difficultiesAndTradeoffs": [
      "Gánh vác trách nhiệm về thị phần và sức sống của cả một nhãn hàng nghìn tỷ",
      "Phải điều phối đồng thuận giữa nhiều phòng ban có quan điểm khác nhau"
    ],
    "coreSkills": [
      "Tầm nhìn chiến lược nhãn hàng dài hạn",
      "Sự nhạy cảm tinh tế với thị hiếu người tiêu dùng",
      "Kỹ năng truyền cảm hứng và dẫn dắt đội ngũ"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Ngữ văn",
      "Tâm lý học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị kinh doanh, Marketing hoặc Thạc sĩ Quản trị thương hiệu"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị kinh doanh, Marketing hoặc Thạc sĩ Quản trị thương hiệu",
    "trialActivity": "Nhìn một chai nước ngọt Coca-Cola và chai Pepsi, liệt kê 3 điểm khác biệt về màu sắc và cảm xúc mà 2 thương hiệu mang lại.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Quản lý thương hiệu thuyết trình chiến lược định vị nhãn hàng mới",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-to-chuc-su-kien-truyen-thong",
    "title": "Chuyên viên Tổ chức sự kiện truyền thông (Event Operations Coordinator)",
    "englishTitle": "Media Event Operations Coordinator",
    "synonyms": [
      "Điều phối viên sự kiện",
      "Event Coordinator"
    ],
    "group": "truyen-thong-marketing",
    "category": "Marketing",
    "categoryLabel": "Truyền thông, tiếp thị và sáng tạo nội dung",
    "riasecCodes": [
      "E",
      "R",
      "S"
    ],
    "shortSummary": "Khảo sát địa điểm, dàn dựng sân khấu hoành tráng, thuê nghệ sĩ và điều hành đêm đại nhạc hội hay lễ trao giải diễn ra trọn vẹn.",
    "typicalTasks": [
      "Lên dự toán ngân sách chi tiết cho từng hạng mục âm thanh, ánh sáng, màn hình LED",
      "Điều hành lắp ráp khung giàn sân khấu ngoài trời đảm bảo an toàn kết cấu",
      "Bấm nhạc, chuyển cảnh màn hình và điều phối ca sĩ lên biểu diễn đúng nhịp kịch bản"
    ],
    "deliverables": [
      "Kịch bản điều hành sân khấu chi tiết (Cue sheet)",
      "Bản vẽ sơ đồ bố trí khu vực khán giả và phân luồng an ninh"
    ],
    "toolsUsed": [
      "Bộ đàm điều phối nội bộ",
      "Phần mềm chiếu màn hình LED Resolume Arena",
      "Kịch bản chạy chương trình A4"
    ],
    "workEnvironment": "Công ty tổ chức sự kiện chuyên nghiệp, sân vận động, trung tâm hội nghị triển lãm.",
    "difficultiesAndTradeoffs": [
      "Làm việc thâu đêm dựng sân khấu và đứng liên tục suốt chương trình",
      "Nếu mất điện hoặc micro hỏng giữa chừng phải có phương án dự phòng ngay lập tức"
    ],
    "coreSkills": [
      "Kỹ năng quản lý thời gian và phản xạ tình huống cực nhanh",
      "Khả năng chịu áp lực cao trong môi trường ồn ào",
      "Kỹ năng điều phối hàng trăm con người"
    ],
    "highSchoolSubjects": [
      "Ngữ văn",
      "Vật lý",
      "Âm nhạc"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Đạo diễn sự kiện, Quản trị sự kiện hoặc Báo chí truyền thông"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Tổ chức sự kiện"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Đạo diễn sự kiện, Quản trị sự kiện hoặc Báo chí truyền thông | Cao đẳng: Cao đẳng Tổ chức sự kiện",
    "trialActivity": "Xem một lễ bế giảng năm học ở trường và quan sát xem ai là người đứng cầm kịch bản chỉ huy các tiết mục văn nghệ.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Ánh sáng sân khấu hoành tráng trong một sự kiện âm nhạc lớn",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-phan-tich-du-luan-mang-xa-hoi",
    "title": "Chuyên viên Phân tích mạng xã hội (Social Media Listening Analyst)",
    "englishTitle": "Social Media Listening & Sentiment Analyst",
    "synonyms": [
      "Chuyên viên Social Listening",
      "Social Listening Analyst"
    ],
    "group": "truyen-thong-marketing",
    "category": "Marketing",
    "categoryLabel": "Truyền thông, tiếp thị và sáng tạo nội dung",
    "riasecCodes": [
      "I",
      "C",
      "A"
    ],
    "shortSummary": "Dùng công cụ AI quét hàng triệu thảo luận trên Facebook, TikTok để đo lường cảm xúc người dùng khen hay chê thương hiệu.",
    "typicalTasks": [
      "Thiết lập từ khóa theo dõi thương hiệu và đối thủ cạnh tranh trên công cụ lắng nghe mạng xã hội",
      "Phân loại các sắc thái thảo luận (Tích cực, Tiêu cực, Trung tính)",
      "Cảnh báo sớm cho ban giám đốc khi phát hiện tin tiêu cực có dấu hiệu bùng phát thành khủng hoảng"
    ],
    "deliverables": [
      "Báo cáo đo lường sắc thái thảo luận mạng xã hội (Social Sentiment Report)",
      "Báo cáo phân tích đối thủ cạnh tranh"
    ],
    "toolsUsed": [
      "YouNet Media",
      "Buzzmetrics",
      "Kompa",
      "Excel phân tích số liệu"
    ],
    "workEnvironment": "Công ty phân tích dữ liệu truyền thông, phòng quan hệ công chúng tập đoàn.",
    "difficultiesAndTradeoffs": [
      "Đọc hàng nghìn bình luận trên mạng mỗi ngày dễ bị ảnh hưởng tâm lý tiêu cực",
      "Cần phân biệt đâu là ý kiến người dùng thật và đâu là tài khoản ảo (Seeding/Bot)"
    ],
    "coreSkills": [
      "Kỹ năng phân tích ngữ nghĩa và tâm lý đám đông mạng xã hội",
      "Thành thạo công cụ phân tích Social Listening",
      "Tư duy phát hiện xu hướng mới nổi"
    ],
    "highSchoolSubjects": [
      "Ngữ văn",
      "Toán học",
      "Xã hội học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Xã hội học, Báo chí truyền thông, Thống kê hoặc Khoa học dữ liệu"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Xã hội học, Báo chí truyền thông, Thống kê hoặc Khoa học dữ liệu",
    "trialActivity": "Đọc phần bình luận dưới một bài đăng gây tranh cãi trên mạng và thử đếm xem có bao nhiêu người đồng tình, bao nhiêu người phản đối.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên theo dõi đồ thị biến động dư luận trên mạng xã hội",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "copywriter-sang-tao-thong-diep",
    "title": "Người sáng tạo thông điệp quảng cáo (Creative Copywriter)",
    "englishTitle": "Advertising Creative Copywriter",
    "synonyms": [
      "Copywriter",
      "Nhà sáng tạo câu chữ quảng cáo"
    ],
    "group": "truyen-thong-marketing",
    "category": "Marketing",
    "categoryLabel": "Truyền thông, tiếp thị và sáng tạo nội dung",
    "riasecCodes": [
      "A",
      "E"
    ],
    "shortSummary": "Chơi đùa với ngôn từ, sáng tạo các câu slogan bắt tai, lời thoại kịch bản video viral và câu chuyện thương hiệu chạm đến trái tim người tiêu dùng.",
    "typicalTasks": [
      "Nghĩ hàng trăm câu tiêu đề quảng cáo ngắn gọn, sắc bén cho một chiến dịch",
      "Viết kịch bản phim quảng cáo truyền hình (TVC) dài 30 giây đầy cảm xúc",
      "Đặt tên cho dòng sản phẩm mới dễ nhớ, dễ đọc và bảo hộ thương hiệu được"
    ],
    "deliverables": [
      "Kịch bản phim quảng cáo TVC kèm lời bình",
      "Bộ câu khẩu hiệu và thông điệp truyền thông sáng tạo"
    ],
    "toolsUsed": [
      "Sổ tay ghi chép ý tưởng",
      "Phần mềm viết kịch bản Celtx",
      "Kho tàng từ điển ca dao tục ngữ và tiếng lóng"
    ],
    "workEnvironment": "Các Creative Agency quảng cáo hàng đầu (Ogilvy, Dentsu, DDB, Leo Burnett).",
    "difficultiesAndTradeoffs": [
      "Phải vắt kiệt chất xám để tìm ra ý tưởng độc lạ chưa ai từng làm",
      "Ý tưởng tâm đắc có thể bị khách hàng từ chối nhiều lần"
    ],
    "coreSkills": [
      "Vốn từ vựng tiếng Việt phong phú, đa tầng nghĩa",
      "Trực giác nhạy bén với cảm xúc con người",
      "Khả năng biến điều phức tạp thành một câu nói đơn giản, ấn tượng"
    ],
    "highSchoolSubjects": [
      "Ngữ văn",
      "Lịch sử",
      "Mỹ thuật",
      "Âm nhạc"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Văn học, Báo chí, Ngôn ngữ học hoặc Truyền thông sáng tạo"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Văn học, Báo chí, Ngôn ngữ học hoặc Truyền thông sáng tạo",
    "trialActivity": "Thử nghĩ 3 câu slogan thật bắt tai cho một ứng dụng giúp học sinh chọn đúng nghề nghiệp.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Copywriter ghi chép và sáng tạo những câu chữ quảng cáo độc đáo",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "nha-thiet-ke-do-hoa-nhan-dien",
    "title": "Nhà thiết kế đồ họa nhận diện thương hiệu (Brand Identity Graphic Designer)",
    "englishTitle": "Brand Identity Graphic Designer",
    "synonyms": [
      "Thiết kế đồ họa",
      "Graphic Designer"
    ],
    "group": "thiet-ke-my-thuat",
    "category": "ThietKe",
    "categoryLabel": "Thiết kế đồ họa, thời trang và mỹ thuật",
    "riasecCodes": [
      "A",
      "R",
      "C"
    ],
    "shortSummary": "Sáng tạo logo, bảng màu, kiểu chữ và cẩm nang nhận diện thương hiệu giúp sản phẩm nổi bật và tạo dấu ấn tin cậy trong mắt khách hàng.",
    "typicalTasks": [
      "Vẽ phác thảo hàng chục ý tưởng logo trên giấy",
      "Chuẩn hóa logo trên phần mềm Illustrator theo tỷ lệ hình học chuẩn",
      "Thiết kế bao bì, danh thiếp, phong bì thư và biển bảng quảng cáo"
    ],
    "deliverables": [
      "Hồ sơ quy chuẩn nhận diện thương hiệu (Brand Identity Guidelines)",
      "Tệp logo vector độ phân giải cao phục vụ in ấn"
    ],
    "toolsUsed": [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Bảng vẽ điện tử Wacom"
    ],
    "workEnvironment": "Design Studio, công ty quảng cáo sáng tạo, làm việc tự do (Freelance).",
    "difficultiesAndTradeoffs": [
      "Khách hàng thường yêu cầu chỉnh sửa nhiều lần (sửa logo to lên, đổi màu sắc)",
      "Ngồi làm việc với máy tính liên tục dễ mỏi mắt và đau cổ tay"
    ],
    "coreSkills": [
      "Tư duy thẩm mỹ thị giác và bố cục",
      "Hiểu biết sâu sắc về lý thuyết màu sắc và nghệ thuật chữ (Typography)",
      "Thành thạo các công cụ đồ họa chuyên nghiệp"
    ],
    "highSchoolSubjects": [
      "Mỹ thuật",
      "Toán học (Hình học)",
      "Ngữ văn"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Thiết kế Đồ họa (ĐH Mỹ thuật Công nghiệp, ĐH Kiến trúc, ĐH Mỹ thuật TP.HCM)"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Thiết kế Đồ họa chuyên nghiệp"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Thiết kế Đồ họa (ĐH Mỹ thuật Công nghiệp, ĐH Kiến trúc, ĐH Mỹ thuật TP.HCM) | Cao đẳng: Cao đẳng Thiết kế Đồ họa chuyên nghiệp",
    "trialActivity": "Lấy một tờ giấy trắng và vẽ thử 3 ý tưởng logo cho một tiệm bánh mì truyền thống của gia đình.",
    "has3D": false,
    "simulationTaskId": "task-thiet-ke-do-hoa",
    "experienceType": "SCENARIO_SIMULATION",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhà thiết kế đồ họa vẽ phác thảo logo trên bảng vẽ kỹ thuật số",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "nha-thiet-ke-giao-dien-ui-ux",
    "title": "Nhà thiết kế giao diện và trải nghiệm người dùng (UI/UX Designer)",
    "englishTitle": "Product UI/UX Designer",
    "synonyms": [
      "Thiết kế UI/UX",
      "UI/UX Designer"
    ],
    "group": "thiet-ke-my-thuat",
    "category": "ThietKe",
    "categoryLabel": "Thiết kế đồ họa, thời trang và mỹ thuật",
    "riasecCodes": [
      "A",
      "I",
      "C"
    ],
    "shortSummary": "Nghiên cứu thói quen bấm ngón tay của người dùng, thiết kế giao diện ứng dụng điện thoại đẹp mắt, dễ bấm và không gây nhầm lẫn.",
    "typicalTasks": [
      "Phỏng vấn người dùng và vẽ sơ đồ luồng trải nghiệm (User Flow)",
      "Dựng khung dây bố cục giao diện đen trắng (Wireframe)",
      "Thiết kế giao diện màu sắc hoàn chỉnh và làm nguyên mẫu tương tác (Interactive Prototype)"
    ],
    "deliverables": [
      "Bản thiết kế giao diện ứng dụng hoàn chỉnh trên Figma",
      "Bộ thư viện thành phần giao diện Design System"
    ],
    "toolsUsed": [
      "Figma",
      "Adobe XD",
      "Miro",
      "Protopie"
    ],
    "workEnvironment": "Công ty công nghệ, ngân hàng số, studio phát triển ứng dụng di động.",
    "difficultiesAndTradeoffs": [
      "Phải liên tục bảo vệ lý do tại sao lại đặt nút bấm ở vị trí đó trước các kỹ sư lập trình",
      "Cần cập nhật các xu hướng thiết kế giao diện mới của Apple và Google liên tục"
    ],
    "coreSkills": [
      "Tư duy lấy người dùng làm trung tâm",
      "Khả năng xây dựng hệ thống thiết kế nhất quán",
      "Kỹ năng thử nghiệm người dùng Usability Testing"
    ],
    "highSchoolSubjects": [
      "Mỹ thuật",
      "Tin học",
      "Tâm lý học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Thiết kế Đồ họa, Đa phương tiện hoặc Công nghệ thông tin"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Thiết kế Đồ họa, Đa phương tiện hoặc Công nghệ thông tin",
    "trialActivity": "Mở ứng dụng đặt đồ ăn trên điện thoại và quan sát xem nút 'Đặt món' màu gì, đặt ở đâu để dễ bấm nhất bằng ngón tay cái.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhà thiết kế UI/UX sắp xếp các khung màn hình ứng dụng trên Figma",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "nha-thiet-ke-thoi-trang-ben-vung",
    "title": "Nhà thiết kế thời trang bền vững (Sustainable Fashion Designer)",
    "englishTitle": "Sustainable Fashion Designer",
    "synonyms": [
      "Nhà thiết kế thời trang",
      "Fashion Designer"
    ],
    "group": "thiet-ke-my-thuat",
    "category": "ThietKe",
    "categoryLabel": "Thiết kế đồ họa, thời trang và mỹ thuật",
    "riasecCodes": [
      "A",
      "R"
    ],
    "shortSummary": "Phác thảo bộ sưu tập trang phục, lựa chọn vải sợi tự nhiên (vải gai dầu, tơ tằm, bông hữu cơ) và kỹ thuật nhuộm màu từ lá cây, vỏ quả.",
    "typicalTasks": [
      "Vẽ phác thảo dáng người mẫu và trang phục trên giấy (Fashion sketch)",
      "Lựa chọn chất liệu vải sinh học thân thiện với môi trường và nhuộm thảo mộc",
      "Cắt rập may mẫu thử nghiệm đầu tiên (Toile) và căn chỉnh phom dáng trên manocanh"
    ],
    "deliverables": [
      "Bộ sưu tập thời trang hoàn chỉnh theo mùa",
      "Bản vẽ kỹ thuật may đo trang phục (Tech Pack)"
    ],
    "toolsUsed": [
      "Bảng vẽ điện tử",
      "Manocanh chuẩn phom",
      "Kéo cắt vải chuyên dụng",
      "Máy may công nghiệp"
    ],
    "workEnvironment": "Thương hiệu thời trang thiết kế, xưởng may mẫu, sàn diễn thời trang Fashion Week.",
    "difficultiesAndTradeoffs": [
      "Chi phí sản xuất vải sinh học cao hơn vải hóa học thông thường",
      "Áp lực ra mắt bộ sưu tập mới liên tục theo mùa"
    ],
    "coreSkills": [
      "Năng khiếu phác họa dáng người và trang phục",
      "Hiểu biết sâu sắc về tính chất rơi và độ co giãn của từng loại vải",
      "Tư duy thời trang tuần hoàn bảo vệ môi trường"
    ],
    "highSchoolSubjects": [
      "Mỹ thuật",
      "Hóa học",
      "Sinh học",
      "Lịch sử"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Thiết kế Thời trang (ĐH Mỹ thuật Công nghiệp, ĐH Kiến trúc, ĐH Công nghiệp)"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Thiết kế Thời trang"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Thiết kế Thời trang (ĐH Mỹ thuật Công nghiệp, ĐH Kiến trúc, ĐH Công nghiệp) | Cao đẳng: Cao đẳng Thiết kế Thời trang",
    "trialActivity": "Tìm hiểu về cách nhuộm vải bằng lá chàm của đồng bào H'Mông tạo nên màu xanh thẫm tự nhiên độc đáo.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhà thiết kế thời trang phác thảo mẫu váy trên bàn cắt may",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "hoa-si-ve-minh-hoa-ky-thuat-so",
    "title": "Họa sĩ vẽ minh họa kỹ thuật số (Digital Illustrator)",
    "englishTitle": "Digital Illustrator & Concept Artist",
    "synonyms": [
      "Họa sĩ vẽ minh họa",
      "Digital Illustrator"
    ],
    "group": "thiet-ke-my-thuat",
    "category": "ThietKe",
    "categoryLabel": "Thiết kế đồ họa, thời trang và mỹ thuật",
    "riasecCodes": [
      "A",
      "R"
    ],
    "shortSummary": "Vẽ bìa sách tranh thiếu nhi, tranh minh họa báo chí và thiết kế các tác phẩm nghệ thuật kỹ thuật số bằng bút vẽ điện tử.",
    "typicalTasks": [
      "Nghiên cứu nội dung câu chuyện và phác thảo bố cục tranh minh họa",
      "Phối màu sắc, vẽ chi tiết ánh sáng và bóng đổ tạo chiều sâu cảm xúc",
      "Xuất tệp in ấn chuẩn màu CMYK hoặc đăng tải trên các nền tảng nghệ thuật quốc tế"
    ],
    "deliverables": [
      "Tác phẩm tranh minh họa hoàn chỉnh",
      "Bộ minh họa sách tranh cho nhà xuất bản"
    ],
    "toolsUsed": [
      "Photoshop",
      "Procreate trên iPad",
      "Bảng vẽ Wacom Cintiq",
      "Clip Studio Paint"
    ],
    "workEnvironment": "Studio vẽ tranh minh họa, nhà xuất bản sách, làm việc tự do tại nhà.",
    "difficultiesAndTradeoffs": [
      "Vẽ nhiều giờ liền bằng bút điện tử dễ bị chai ngón tay và mỏi mắt",
      "Cần xây dựng phong cách vẽ độc đáo (Art style) riêng để không bị hòa lẫn"
    ],
    "coreSkills": [
      "Kỹ năng vẽ tay hình họa vững chắc",
      "Cảm thụ màu sắc và ánh sáng điêu luyện",
      "Kể câu chuyện giàu cảm xúc qua từng nét vẽ"
    ],
    "highSchoolSubjects": [
      "Mỹ thuật",
      "Ngữ văn",
      "Lịch sử"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Hội họa, Đồ họa tạo hình (ĐH Mỹ thuật Việt Nam, ĐH Mỹ thuật TP.HCM)"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Thiết kế Đồ họa & Minh họa"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Hội họa, Đồ họa tạo hình (ĐH Mỹ thuật Việt Nam, ĐH Mỹ thuật TP.HCM) | Cao đẳng: Cao đẳng Thiết kế Đồ họa & Minh họa",
    "trialActivity": "Dùng bút chì vẽ một bức tranh minh họa một góc ban công có chậu cây và chú mèo đang sưởi nắng.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Họa sĩ vẽ tranh minh họa kỹ thuật số bằng bút cảm ứng trên màn hình",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "hoa-si-dien-hoat-2d-3d",
    "title": "Họa sĩ diễn hoạt hoạt hình (2D / 3D Animator)",
    "englishTitle": "2D / 3D Character Animator",
    "synonyms": [
      "Animator",
      "Họa sĩ làm phim hoạt hình"
    ],
    "group": "thiet-ke-my-thuat",
    "category": "ThietKe",
    "categoryLabel": "Thiết kế đồ họa, thời trang và mỹ thuật",
    "riasecCodes": [
      "A",
      "R",
      "I"
    ],
    "shortSummary": "Thổi hồn cho nhân vật hoạt hình chuyển động mượt mà, nhảy múa, biểu cảm khóc cười tuân thủ 12 nguyên tắc diễn hoạt kinh điển.",
    "typicalTasks": [
      "Gắn xương chuyển động cho mô hình nhân vật (Rigging)",
      "Tạo các dáng chuyển động then chốt (Keyframe) và tinh chỉnh đường cong chuyển động",
      "Đồng bộ khẩu hình miệng của nhân vật khớp với giọng lồng tiếng (Lip-sync)"
    ],
    "deliverables": [
      "Đoạn phim hoạt hình chuyển động sống động",
      "Thư viện chu kỳ di chuyển (Walk cycle, Run cycle) của nhân vật"
    ],
    "toolsUsed": [
      "Maya",
      "Blender",
      "Toon Boom Harmony",
      "After Effects"
    ],
    "workEnvironment": "Xưởng phim hoạt hình 2D/3D, studio sản xuất game, công ty kỹ xảo điện ảnh.",
    "difficultiesAndTradeoffs": [
      "Để làm ra 1 giây hoạt hình mượt mà đôi khi mất cả ngày làm việc tỉ mỉ",
      "Đòi hỏi sự kiên nhẫn tột bực với từng khung hình"
    ],
    "coreSkills": [
      "Cảm nhận nhịp điệu và thời gian chuyển động (Timing & Spacing)",
      "Hiểu sâu 12 nguyên tắc diễn hoạt của Disney",
      "Khả năng quan sát cử chỉ biểu cảm đời thực"
    ],
    "highSchoolSubjects": [
      "Mỹ thuật",
      "Vật lý",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Hoạt hình, Kỹ xảo điện ảnh hoặc Thiết kế Đa phương tiện"
      },
      {
        "level": "Đào tạo nghề",
        "description": "Khóa đào tạo chuyên nghiệp 3D Animation"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Hoạt hình, Kỹ xảo điện ảnh hoặc Thiết kế Đa phương tiện | Đào tạo nghề: Khóa đào tạo chuyên nghiệp 3D Animation",
    "trialActivity": "Lật nhanh cuốn sổ tay có vẽ một hình người que ở từng trang để thấy hình người nhảy múa (Flipbook).",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Họa sĩ hoạt hình tinh chỉnh các khung hình chuyển động trên phần mềm 3D",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "nghe-si-tao-hinh-nhan-vat-3d",
    "title": "Nghệ sĩ tạo hình nhân vật 3D (3D Character Artist)",
    "englishTitle": "3D Character Sculpting & Modeling Artist",
    "synonyms": [
      "Nghệ sĩ 3D",
      "3D Modeler"
    ],
    "group": "thiet-ke-my-thuat",
    "category": "ThietKe",
    "categoryLabel": "Thiết kế đồ họa, thời trang và mỹ thuật",
    "riasecCodes": [
      "A",
      "R"
    ],
    "shortSummary": "Nặn tượng số (Digital Sculpting) từng nếp nhăn da, cơ bắp quái vật và vũ khí cho các tựa game bom tấn thế giới.",
    "typicalTasks": [
      "Điêu khắc khối cơ bắp nhân vật hàng triệu đa giác trên phần mềm ZBrush",
      "Làm phẳng bề mặt lưới đa giác (Retopology) để nhân vật có thể cử động nhẹ nhàng",
      "Vẽ chất liệu da, kim loại rỉ sét và vải rách bằng Substance Painter"
    ],
    "deliverables": [
      "Mô hình nhân vật 3D chi tiết cao kèm chất liệu kết cấu (Texture maps)",
      "Tệp 3D tối ưu sẵn sàng đưa vào game engine"
    ],
    "toolsUsed": [
      "ZBrush",
      "Substance 3D Painter",
      "Blender",
      "Marmoset Toolbag"
    ],
    "workEnvironment": "Studio sản xuất game quốc tế (Virtuos, Sparx* - A Virtuos Studio, Glass Egg), xưởng phim kỹ xảo.",
    "difficultiesAndTradeoffs": [
      "Học giải phẫu học cơ bắp người và động vật cực kỳ chi tiết",
      "Phải đáp ứng giới hạn số lượng đa giác (Polycount) khắt khe của game"
    ],
    "coreSkills": [
      "Điêu khắc số 3D điêu luyện",
      "Hiểu biết giải phẫu học tạo hình cơ bắp",
      "Cảm nhận chất liệu bề mặt chân thực"
    ],
    "highSchoolSubjects": [
      "Mỹ thuật",
      "Sinh học (Giải phẫu)",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Điêu khắc, Mỹ thuật hoặc Thiết kế Game 3D"
      },
      {
        "level": "Đào tạo nghề",
        "description": "Chứng chỉ 3D Game Art chuyên nghiệp"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Điêu khắc, Mỹ thuật hoặc Thiết kế Game 3D | Đào tạo nghề: Chứng chỉ 3D Game Art chuyên nghiệp",
    "trialActivity": "Lấy một cục đất sét nặn thử một chiếc đầu rồng nhỏ để cảm nhận cảm giác tạo khối trong không gian 3 chiều.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nghệ sĩ điêu khắc mô hình nhân vật 3D chi tiết trên ZBrush",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "nha-thiet-ke-tao-dang-cong-nghiep",
    "title": "Nhà thiết kế tạo dáng công nghiệp (Industrial Product Designer)",
    "englishTitle": "Industrial & Consumer Product Designer",
    "synonyms": [
      "Thiết kế sản phẩm",
      "Product Designer"
    ],
    "group": "thiet-ke-my-thuat",
    "category": "ThietKe",
    "categoryLabel": "Thiết kế đồ họa, thời trang và mỹ thuật",
    "riasecCodes": [
      "R",
      "A",
      "I"
    ],
    "shortSummary": "Tạo dáng chiếc quạt máy, mũ bảo hiểm, bàn chải điện hay chiếc xe máy điện vừa vặn với tay cầm và quyến rũ người tiêu dùng.",
    "typicalTasks": [
      "Phác thảo ý tưởng hình dáng công thái học (Ergonomics) trên giấy",
      "Dựng mô hình 3D mặt cong tự do (NURBS Surfacing) trên Rhino",
      "In mẫu thử nghiệm bằng máy in 3D để cầm nắm thử cảm giác thực tế"
    ],
    "deliverables": [
      "Bản vẽ 3D tạo dáng sản phẩm hoàn chỉnh",
      "Mô hình mẫu in 3D tỷ lệ 1:1"
    ],
    "toolsUsed": [
      "Rhinoceros 3D",
      "Keyshot (Render)",
      "Alias",
      "Máy in 3D"
    ],
    "workEnvironment": "Phòng R&D công ty sản xuất đồ gia dụng, xe máy, thiết bị công nghệ.",
    "difficultiesAndTradeoffs": [
      "Phải hiểu biết về khuôn ép nhựa và quy trình gia công cơ khí để thiết kế có thể sản xuất hàng loạt được",
      "Cân bằng giữa kiểu dáng thẩm mỹ đẹp và chi phí khuôn đúc"
    ],
    "coreSkills": [
      "Tư duy thẩm mỹ công nghiệp và công thái học",
      "Thành thạo phần mềm dựng hình 3D mặt cong cao cấp",
      "Hiểu biết về vật liệu nhựa và kim loại"
    ],
    "highSchoolSubjects": [
      "Mỹ thuật",
      "Vật lý",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Tạo dáng Công nghiệp (ĐH Mỹ thuật Công nghiệp, ĐH Bách khoa)"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Tạo dáng Công nghiệp (ĐH Mỹ thuật Công nghiệp, ĐH Bách khoa)",
    "trialActivity": "Cầm chiếc điện thoại thông minh trên tay và quan sát các góc bo tròn viền kim loại xem có tạo cảm giác cấn tay không.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhà thiết kế tạo dáng sản phẩm kiểm tra mẫu in 3D thực tế",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "nha-tao-mau-thoi-trang-stylist",
    "title": "Nhà tạo mẫu thời trang (Fashion Stylist)",
    "englishTitle": "Fashion Stylist & Visual Image Consultant",
    "synonyms": [
      "Stylist thời trang",
      "Fashion Stylist"
    ],
    "group": "thiet-ke-my-thuat",
    "category": "ThietKe",
    "categoryLabel": "Thiết kế đồ họa, thời trang và mỹ thuật",
    "riasecCodes": [
      "A",
      "E"
    ],
    "shortSummary": "Phối trang phục, phụ kiện kính mắt túi xách cho ca sĩ, diễn viên và người mẫu chụp ảnh bìa tạp chí thời trang danh tiếng.",
    "typicalTasks": [
      "Lên ý tưởng phong cách hình ảnh (Concept) cho buổi chụp ảnh tạp chí",
      "Liên hệ mượn trang phục từ các nhà thiết kế và thương hiệu thời trang cao cấp",
      "Trực tiếp chỉnh sửa nếp gấp áo quần, phối phụ kiện cho người mẫu tại trường quay"
    ],
    "deliverables": [
      "Bộ ảnh thời trang ấn tượng trên tạp chí",
      "Hình ảnh thảm đỏ lộng lẫy của nghệ sĩ"
    ],
    "toolsUsed": [
      "Bàn ủi hơi nước cầm tay",
      "Băng dính dán vải hai mặt chuyên dụng",
      "Kẹp ghim định hình trang phục"
    ],
    "workEnvironment": "Phim trường chụp ảnh studio, hậu trường tuần lễ thời trang, thảm đỏ sự kiện giải trí.",
    "difficultiesAndTradeoffs": [
      "Khuân vác những vali quần áo phụ kiện nặng nề đi lại liên tục",
      "Thời gian làm việc theo lịch trình thất thường của người nổi tiếng"
    ],
    "coreSkills": [
      "Gu thẩm mỹ thời trang nhạy bén và khác biệt",
      "Khả năng kết hợp trang phục và màu sắc tài tình",
      "Mạng lưới quan hệ rộng khắp trong làng thời trang"
    ],
    "highSchoolSubjects": [
      "Mỹ thuật",
      "Văn hóa học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Thời trang hoặc Truyền thông thời trang"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Thời trang hoặc Truyền thông thời trang",
    "trialActivity": "Mở tủ quần áo và thử phối 3 bộ đồ với 3 phong cách khác nhau: đi học, đi chơi dã ngoại và đi dự tiệc.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Stylist chỉnh sửa trang phục cho người mẫu trước buổi chụp ảnh thời trang",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "dao-dien-nghe-thuat-art-director",
    "title": "Đạo diễn nghệ thuật (Art Director)",
    "englishTitle": "Advertising & Visual Art Director",
    "synonyms": [
      "Giám đốc nghệ thuật",
      "Art Director"
    ],
    "group": "thiet-ke-my-thuat",
    "category": "ThietKe",
    "categoryLabel": "Thiết kế đồ họa, thời trang và mỹ thuật",
    "riasecCodes": [
      "A",
      "E",
      "I"
    ],
    "shortSummary": "Chỉ đạo ngôn ngữ hình ảnh, ánh sáng, màu sắc và đạo cụ cho các chiến dịch quảng cáo toàn cầu và phim điện ảnh.",
    "typicalTasks": [
      "Xây dựng bảng tâm trạng hình ảnh (Moodboard) định hình phong cách thị giác",
      "Chỉ đạo đội ngũ thiết kế đồ họa, quay phim và dựng cảnh làm việc đồng nhất",
      "Kiểm duyệt chất lượng hình ảnh cuối cùng trước khi phát hành ra công chúng"
    ],
    "deliverables": [
      "Bảng định hướng thị giác nghệ thuật dự án",
      "Tác phẩm quảng cáo hoặc phim ảnh đạt giải thưởng nghệ thuật"
    ],
    "toolsUsed": [
      "Photoshop",
      "InDesign",
      "Bảng vẽ điện tử",
      "Phần mềm bảng tâm trạng Milanote"
    ],
    "workEnvironment": "Creative Agency quốc tế, hãng sản xuất phim điện ảnh.",
    "difficultiesAndTradeoffs": [
      "Chịu trách nhiệm về toàn bộ chất lượng thị giác của dự án lớn",
      "Phải truyền đạt được ý tưởng trừu tượng trong đầu cho toàn bộ ekip hiểu và làm theo"
    ],
    "coreSkills": [
      "Tầm nhìn nghệ thuật thị giác xuất chúng",
      "Kỹ năng lãnh đạo và truyền cảm hứng cho nghệ sĩ",
      "Tư duy thẩm mỹ điện ảnh và văn hóa sâu rộng"
    ],
    "highSchoolSubjects": [
      "Mỹ thuật",
      "Ngữ văn",
      "Lịch sử nghệ thuật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Mỹ thuật, Thiết kế đồ họa hoặc Đạo diễn điện ảnh"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Mỹ thuật, Thiết kế đồ họa hoặc Đạo diễn điện ảnh",
    "trialActivity": "Xem một bộ phim hoạt hình đoạt giải Oscar và chú ý cách họ sử dụng tông màu lạnh khi buồn và tông màu ấm khi vui.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Đạo diễn nghệ thuật thảo luận bảng màu thị giác cùng đội ngũ",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "nghe-si-gom-va-thu-cong-duong-dai",
    "title": "Nghệ sĩ Gốm và Thủ công mỹ nghệ đương đại (Contemporary Ceramic Artist)",
    "englishTitle": "Contemporary Ceramic & Craft Artist",
    "synonyms": [
      "Nghệ nhân gốm đương đại",
      "Ceramic Artist"
    ],
    "group": "thiet-ke-my-thuat",
    "category": "ThietKe",
    "categoryLabel": "Thiết kế đồ họa, thời trang và mỹ thuật",
    "riasecCodes": [
      "A",
      "R"
    ],
    "shortSummary": "Vuốt gốm trên bàn xoay, pha chế men màu tự nhiên và nung lò củi tạo nên các tác phẩm gốm nghệ thuật độc bản mang hồn đất Việt.",
    "typicalTasks": [
      "Nhào nặn đất sét và tạo hình dáng bình gốm trên bàn xoay tay",
      "Nghiên cứu pha chế men tro, men rạn từ vỏ trấu và khoáng chất tự nhiên",
      "Xếp gốm vào lò nung củi và canh nhiệt độ nung lên tới 1250 độ C suốt 24 giờ"
    ],
    "deliverables": [
      "Tác phẩm bình gốm nghệ thuật độc bản",
      "Bộ sưu tập gốm ứng dụng thủ công cao cấp"
    ],
    "toolsUsed": [
      "Bàn xoay gốm",
      "Lò nung gốm nhiệt độ cao",
      "Dụng cụ gọt tỉa gốm bằng tre và thép"
    ],
    "workEnvironment": "Xưởng gốm nghệ thuật (Bát Tràng, Chu Đậu, Phù Lãng), phòng trưng bày triển lãm mỹ thuật.",
    "difficultiesAndTradeoffs": [
      "Tỷ lệ rủi ro nứt vỡ trong lò nung cao, có mẻ nung hỏng mất trắng công sức hàng tuần",
      "Bụi đất và làm việc thủ công lấm lem"
    ],
    "coreSkills": [
      "Đôi bàn tay cảm nhận độ dẻo của đất sét",
      "Hiểu biết hóa học về men và nhiệt độ lò nung",
      "Tâm hồn nghệ sĩ tĩnh tại và kiên nhẫn"
    ],
    "highSchoolSubjects": [
      "Mỹ thuật",
      "Hóa học",
      "Lịch sử"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Gốm nghệ thuật (ĐH Mỹ thuật Công nghiệp, ĐH Mỹ thuật Việt Nam)"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Gốm nghệ thuật (ĐH Mỹ thuật Công nghiệp, ĐH Mỹ thuật Việt Nam)",
    "trialActivity": "Thử nặn một chiếc bát nhỏ bằng đất sét và để khô dưới bóng râm xem đất co ngót lại như thế nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nghệ sĩ gốm tỉ mỉ tạo hình bình gốm trên bàn xoay thủ công",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "giao-vien-pho-thong-truyen-cam-hung",
    "title": "Giáo viên Phổ thông đổi mới phương pháp (High School Innovative Teacher)",
    "englishTitle": "Innovative High School Educator",
    "synonyms": [
      "Giáo viên cấp 3",
      "High School Teacher"
    ],
    "group": "giao-duc",
    "category": "GiaoDuc",
    "categoryLabel": "Giáo dục, đào tạo và phát triển con người",
    "riasecCodes": [
      "S",
      "A",
      "E"
    ],
    "shortSummary": "Giảng dạy theo chương trình GDPT 2018 mới, ứng dụng dự án học tập thực tế và truyền cảm hứng khám phá tri thức cho học sinh.",
    "typicalTasks": [
      "Soạn giáo án dạy học theo định hướng phát triển phẩm chất, năng lực học sinh",
      "Tổ chức các tiết học trải nghiệm, tranh biện và thí nghiệm thực hành",
      "Quan tâm động viên tâm lý và đồng hành cùng học sinh trong giai đoạn trưởng thành"
    ],
    "deliverables": [
      "Kế hoạch bài dạy đổi mới phương pháp",
      "Học sinh tiến bộ về năng lực tự học và phẩm chất"
    ],
    "toolsUsed": [
      "Bảng tương tác thông minh",
      "Canva Giáo dục",
      "Quizizz",
      "Google Classroom"
    ],
    "workEnvironment": "Trường THPT công lập, trường liên cấp chất lượng cao.",
    "difficultiesAndTradeoffs": [
      "Nói nhiều giờ liên tục và áp lực sổ sách, giáo án hành chính",
      "Cần kiên nhẫn với những học sinh cá biệt hoặc tiếp thu chậm"
    ],
    "coreSkills": [
      "Phương pháp sư phạm tích cực hiện đại",
      "Khả năng truyền cảm hứng và lắng nghe thấu cảm",
      "Làm chủ công nghệ giáo dục số"
    ],
    "highSchoolSubjects": [
      "Ngữ văn",
      "Toán học",
      "Tâm lý học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Sư phạm Toán/Văn/Anh/Lý/Hóa/Sinh/Sử/Địa (ĐH Sư phạm Hà Nội, ĐH Sư phạm TP.HCM)"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Sư phạm Toán/Văn/Anh/Lý/Hóa/Sinh/Sử/Địa (ĐH Sư phạm Hà Nội, ĐH Sư phạm TP.HCM)",
    "trialActivity": "Nghĩ về một thầy cô giáo em yêu quý nhất và viết ra 2 điều khiến em cảm thấy được truyền cảm hứng nhất từ thầy cô đó.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Giáo viên giảng bài tương tác và truyền cảm hứng cho học sinh trong lớp học",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-gia-thiet-ke-chuong-trinh-hoc",
    "title": "Chuyên gia Thiết kế chương trình học (Instructional Designer)",
    "englishTitle": "Instructional Designer & Curriculum Developer",
    "synonyms": [
      "Chuyên viên thiết kế khóa học",
      "Instructional Designer"
    ],
    "group": "giao-duc",
    "category": "GiaoDuc",
    "categoryLabel": "Giáo dục, đào tạo và phát triển con người",
    "riasecCodes": [
      "I",
      "A",
      "S"
    ],
    "shortSummary": "Biến kiến thức phức tạp thành các bài giảng e-learning tương tác, trò chơi hóa (Gamification) giúp người học ghi nhớ bài học dễ dàng.",
    "typicalTasks": [
      "Phân tích đối tượng người học và xác định mục tiêu học tập đầu ra (Learning Outcomes)",
      "Viết kịch bản chi tiết cho từng video hoạt hình và câu hỏi tương tác",
      "Đóng gói bài giảng theo chuẩn SCORM / xAPI tải lên nền tảng học trực tuyến"
    ],
    "deliverables": [
      "Khóa học trực tuyến e-learning tương tác hoàn chỉnh",
      "Kịch bản bài giảng chi tiết (Storyboard)"
    ],
    "toolsUsed": [
      "Articulate Storyline 360",
      "Adobe Captivate",
      "LMS Moodle",
      "Canva"
    ],
    "workEnvironment": "Các công ty công nghệ giáo dục EdTech, viện đào tạo doanh nghiệp, trường đại học số.",
    "difficultiesAndTradeoffs": [
      "Cần dung hòa giữa tính chính xác khoa học của chuyên gia và tính hấp dẫn dễ hiểu cho người học",
      "Đòi hỏi tư duy cấu trúc logic cao"
    ],
    "coreSkills": [
      "Lý thuyết học tập nhận thức (Cognitive Load Theory)",
      "Kỹ năng viết kịch bản sư phạm hấp dẫn",
      "Thành thạo công cụ phát triển e-learning"
    ],
    "highSchoolSubjects": [
      "Tâm lý học",
      "Tin học",
      "Ngữ văn",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Sư phạm, Công nghệ giáo dục hoặc Tâm lý học"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Sư phạm, Công nghệ giáo dục hoặc Tâm lý học",
    "trialActivity": "Vào một ứng dụng học tập như Duolingo và xem cách họ chia nhỏ bài học thành từng câu hỏi trò chơi ngắn 2 phút.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên gia thiết kế chương trình học rà soát cấu trúc khóa học số",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-tu-van-tam-ly-hoc-duong",
    "title": "Chuyên viên Tư vấn tâm lý học đường (School Counselor)",
    "englishTitle": "School Psychological Counselor",
    "synonyms": [
      "Tư vấn tâm lý trường học",
      "School Counselor"
    ],
    "group": "giao-duc",
    "category": "GiaoDuc",
    "categoryLabel": "Giáo dục, đào tạo và phát triển con người",
    "riasecCodes": [
      "S",
      "I"
    ],
    "shortSummary": "Lắng nghe, tháo gỡ áp lực thi cử, mâu thuẫn bạn bè, bạo lực học đường và định hướng cảm xúc tích cực cho học sinh trong phòng tham vấn.",
    "typicalTasks": [
      "Tiếp đón và lắng nghe học sinh trong không gian phòng tham vấn bảo mật tuyệt đối",
      "Đánh giá mức độ căng thẳng, lo âu (Stress / Depression) bằng các thang đo tâm lý",
      "Phối hợp cùng phụ huynh và giáo viên chủ nhiệm hỗ trợ học sinh vượt qua khủng hoảng"
    ],
    "deliverables": [
      "Hồ sơ tham vấn tâm lý học sinh được bảo mật",
      "Chuyên đề giáo dục cảm xúc và kỹ năng phòng chống bắt nạt học đường"
    ],
    "toolsUsed": [
      "Thang đo trầm cảm DASS-21",
      "Bộ công cụ trị liệu trò chơi và vẽ tranh",
      "Phòng tham vấn tâm lý đạt chuẩn"
    ],
    "workEnvironment": "Phòng tâm lý học đường các trường phổ thông liên cấp, trung tâm bảo trợ trẻ em.",
    "difficultiesAndTradeoffs": [
      "Chịu áp lực tâm lý khi lắng nghe những tổn thương nặng nề của học sinh",
      "Nguyên tắc bảo mật thông tin đòi hỏi sự khéo léo khi trao đổi với phụ huynh"
    ],
    "coreSkills": [
      "Kỹ năng lắng nghe thấu cảm không phán xét",
      "Kiến thức tâm lý học lứa tuổi vị thành niên",
      "Đạo đức nghề nghiệp tham vấn tâm lý"
    ],
    "highSchoolSubjects": [
      "Tâm lý học",
      "Giáo dục công dân",
      "Ngữ văn"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Tâm lý học trường học hoặc Tâm lý học lâm sàng (ĐH Sư phạm, ĐH KHXH&NV)"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Tâm lý học trường học hoặc Tâm lý học lâm sàng (ĐH Sư phạm, ĐH KHXH&NV)",
    "trialActivity": "Viết ra 3 điều em thường làm để giải tỏa căng thẳng mỗi khi bị điểm kém hoặc lo lắng trước kỳ thi.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên tư vấn tâm lý lắng nghe và chia sẻ cùng học sinh trong phòng tham vấn",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "giang-vien-dai-hoc-nghien-cuu-vien",
    "title": "Giảng viên đại học và Nghiên cứu viên (University Lecturer & Researcher)",
    "englishTitle": "University Lecturer & Academic Researcher",
    "synonyms": [
      "Giảng viên đại học",
      "Nghiên cứu viên"
    ],
    "group": "giao-duc",
    "category": "GiaoDuc",
    "categoryLabel": "Giáo dục, đào tạo và phát triển con người",
    "riasecCodes": [
      "I",
      "S",
      "A"
    ],
    "shortSummary": "Giảng dạy chuyên sâu cho sinh viên đại học, hướng dẫn luận văn tốt nghiệp và thực hiện các đề tài nghiên cứu công bố bài báo quốc tế ISI/Scopus.",
    "typicalTasks": [
      "Soạn thảo giáo trình và giảng bài trên giảng đường đại học",
      "Thực hiện thí nghiệm khoa học và viết bài báo công bố trên tạp chí quốc tế uy tín",
      "Hướng dẫn sinh viên nghiên cứu khoa học và phát triển tư duy phản biện"
    ],
    "deliverables": [
      "Bài báo khoa học công bố trên tạp chí quốc tế Scopus/ISI",
      "Giáo trình bài giảng đại học"
    ],
    "toolsUsed": [
      "Cơ sở dữ liệu khoa học ScienceDirect / Scopus",
      "Phần mềm quản lý tài liệu trích dẫn Mendeley / EndNote",
      "Phần mềm xử lý thống kê SPSS / R"
    ],
    "workEnvironment": "Các trường đại học, viện hàn lâm khoa học, trung tâm nghiên cứu.",
    "difficultiesAndTradeoffs": [
      "Yêu cầu học vị cao (Thạc sĩ, Tiến sĩ) và áp lực công bố bài báo khoa học quốc tế hàng năm",
      "Đòi hỏi tự học và nghiên cứu chuyên sâu suốt đời"
    ],
    "coreSkills": [
      "Tư duy nghiên cứu khoa học độc lập",
      "Kỹ năng thuyết trình học thuật chuyên sâu",
      "Tiếng Anh học thuật thành thạo"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Ngữ văn",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Tốt nghiệp Đại học loại Giỏi/Xuất sắc + Bằng Thạc sĩ và Tiến sĩ chuyên ngành"
      }
    ],
    "entryPathway": "Đại học: Tốt nghiệp Đại học loại Giỏi/Xuất sắc + Bằng Thạc sĩ và Tiến sĩ chuyên ngành",
    "trialActivity": "Tìm đọc thử phần tóm tắt (Abstract) của một bài báo khoa học nghiên cứu về môi trường để thấy cách trình bày học thuật.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Giảng viên đại học thuyết giảng trên giảng đường hiện đại",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-gia-cong-nghe-giao-duc-edtech",
    "title": "Chuyên gia Công nghệ Giáo dục (EdTech Product Specialist)",
    "englishTitle": "Educational Technology (EdTech) Specialist",
    "synonyms": [
      "Chuyên viên EdTech",
      "EdTech Specialist"
    ],
    "group": "giao-duc",
    "category": "GiaoDuc",
    "categoryLabel": "Giáo dục, đào tạo và phát triển con người",
    "riasecCodes": [
      "I",
      "R",
      "S"
    ],
    "shortSummary": "Phát triển các ứng dụng học tập thông minh, trợ lý ảo gia sư AI và hệ thống quản lý học tập (LMS) cá nhân hóa cho học sinh.",
    "typicalTasks": [
      "Nghiên cứu áp dụng thuật toán học tập thích ứng (Adaptive Learning) theo năng lực từng học sinh",
      "Tích hợp công nghệ nhận diện giọng nói AI để sửa phát âm ngoại ngữ",
      "Đo lường thời gian hoàn thành bài học và tối ưu hóa trải nghiệm học tập trên ứng dụng"
    ],
    "deliverables": [
      "Sản phẩm ứng dụng công nghệ giáo dục EdTech",
      "Báo cáo phân tích dữ liệu hành vi học tập của học viên"
    ],
    "toolsUsed": [
      "Nền tảng LMS Canvas / Moodle",
      "Figma",
      "Jira",
      "Công nghệ AI sinh ngữ"
    ],
    "workEnvironment": "Các công ty khởi nghiệp công nghệ giáo dục (EdTech startups: ELSA Speak, Kyna, Vuihoc).",
    "difficultiesAndTradeoffs": [
      "Cần đảm bảo công nghệ phục vụ mục tiêu sư phạm chứ không làm học sinh xao nhãng",
      "Cạnh tranh khốc liệt giữa các ứng dụng giáo dục trên thị trường"
    ],
    "coreSkills": [
      "Hiểu biết về tâm lý học tập của học sinh",
      "Khả năng ứng dụng công nghệ AI vào giáo dục",
      "Tư duy phát triển sản phẩm công nghệ"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Toán học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Công nghệ giáo dục, Khoa học máy tính hoặc Sư phạm"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Công nghệ giáo dục, Khoa học máy tính hoặc Sư phạm",
    "trialActivity": "Thử sử dụng một ứng dụng luyện phát âm tiếng Anh có AI chấm điểm và xem AI chỉ ra lỗi sai ở âm tiết nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Học sinh hào hứng tương tác với bài học trên máy tính bảng giáo dục",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "huan-luyen-vien-ky-nang-sinh-ton",
    "title": "Huấn luyện viên Kỹ năng sống và Sinh tồn (Life Skills & Outdoor Survival Instructor)",
    "englishTitle": "Outdoor Education & Survival Skills Instructor",
    "synonyms": [
      "Huấn luyện viên kỹ năng sống",
      "Outdoor Instructor"
    ],
    "group": "giao-duc",
    "category": "GiaoDuc",
    "categoryLabel": "Giáo dục, đào tạo và phát triển con người",
    "riasecCodes": [
      "R",
      "S",
      "E"
    ],
    "shortSummary": "Dạy học sinh dựng lều, thắt nút dây cứu sinh, lọc nước tự nhiên, tạo lửa và kỹ năng tự bảo vệ bản thân trước nguy hiểm.",
    "typicalTasks": [
      "Tổ chức các trại hè rèn luyện kỹ năng sinh tồn trong rừng và bờ biển",
      "Dạy kỹ năng sơ cứu đuối nước, hỏa hoạn và thoát hiểm nơi công cộng",
      "Huấn luyện tinh thần làm việc nhóm, vượt qua nỗi sợ hãi và rèn luyện tính tự lập"
    ],
    "deliverables": [
      "Chương trình tập huấn kỹ năng sống dã ngoại",
      "Học viên tự tin làm chủ các kỹ năng sinh tồn thiết yếu"
    ],
    "toolsUsed": [
      "Bộ đánh lửa sinh tồn Magie",
      "Dây thừng leo núi chuyên dụng",
      "Hộp cứu thương dã ngoại",
      "Bản đồ và la bàn quân sự"
    ],
    "workEnvironment": "Trại hè kỹ năng, khu du lịch dã ngoại, trung tâm huấn luyện kỹ năng sống thanh thiếu niên.",
    "difficultiesAndTradeoffs": [
      "Làm việc ngoài trời trong mọi điều kiện thời tiết nắng mưa gió rét",
      "Trách nhiệm đảm bảo an toàn tuyệt đối cho các em học sinh khi tham gia dã ngoại"
    ],
    "coreSkills": [
      "Kỹ năng sinh tồn nơi hoang dã điêu luyện",
      "Kỹ năng truyền lửa và quản trò đám đông",
      "Sơ cấp cứu chấn thương chuẩn quốc tế"
    ],
    "highSchoolSubjects": [
      "Thể dục",
      "Sinh học",
      "Địa lý",
      "Giáo dục công dân"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Giáo dục thể chất, Công tác xã hội hoặc Chứng chỉ Huấn luyện viên sinh tồn quốc tế"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Giáo dục thể chất, Công tác xã hội hoặc Chứng chỉ Huấn luyện viên sinh tồn quốc tế",
    "trialActivity": "Tập thắt nút dây dẹt (Reef knot) dùng để nối hai đầu dây thừng chắc chắn mà không bị tuột.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Huấn luyện viên hướng dẫn học sinh kỹ năng nhóm lửa sinh tồn ngoài trời",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "quan-ly-trung-tam-giao-duc-trai-nghiem",
    "title": "Quản lý Trung tâm giáo dục trải nghiệm (Experiential Learning Operations Manager)",
    "englishTitle": "Experiential Learning Center Director",
    "synonyms": [
      "Giám đốc trung tâm trải nghiệm",
      "Experiential Education Director"
    ],
    "group": "giao-duc",
    "category": "GiaoDuc",
    "categoryLabel": "Giáo dục, đào tạo và phát triển con người",
    "riasecCodes": [
      "E",
      "S"
    ],
    "shortSummary": "Xây dựng các mô hình nông trại trải nghiệm, làng nghề thủ công và kết nối các trường học đưa học sinh đến tham quan, học tập thực tế.",
    "typicalTasks": [
      "Thiết kế các trạm trải nghiệm nghề nghiệp phong phú (làm gốm, trồng rau, làm mộc)",
      "Đàm phán hợp tác đưa học sinh các trường phổ thông đến trải nghiệm hướng nghiệp",
      "Kiểm soát an toàn vệ sinh và chất lượng phục vụ bữa ăn cho học sinh"
    ],
    "deliverables": [
      "Chương trình giáo dục trải nghiệm hướng nghiệp trọn gói",
      "Hợp đồng hợp tác giáo dục với các trường trường phổ thông"
    ],
    "toolsUsed": [
      "Phần mềm quản lý đặt tour học đường",
      "Kế hoạch điều phối an toàn học sinh"
    ],
    "workEnvironment": "Khu trải nghiệm giáo dục sinh thái ngoại thành, bảo tàng khoa học tương tác.",
    "difficultiesAndTradeoffs": [
      "Đón tiếp hàng nghìn học sinh cùng lúc vào các dịp cao điểm đòi hỏi quản lý an ninh nghiêm ngặt",
      "Cần đổi mới liên tục các hoạt động trải nghiệm để trường quay lại"
    ],
    "coreSkills": [
      "Kỹ năng tổ chức và điều hành quy mô lớn",
      "Tư duy giáo dục trải nghiệm hiện đại",
      "Giao tiếp đàm phán với ban giám hiệu các trường"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Địa lý",
      "Tâm lý học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị kinh doanh, Sư phạm hoặc Quản lý giáo dục"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị kinh doanh, Sư phạm hoặc Quản lý giáo dục",
    "trialActivity": "Nhớ lại một chuyến đi dã ngoại học tập cùng lớp và viết ra hoạt động nào khiến em học hỏi được nhiều nhất.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Học sinh hào hứng tham gia hoạt động trải nghiệm khoa học ngoài trời",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "giao-vien-giao-duc-dac-biet",
    "title": "Giáo viên Giáo dục đặc biệt (Special Education Teacher)",
    "englishTitle": "Special Education Teacher",
    "synonyms": [
      "Giáo viên can thiệp sớm",
      "Special Education Teacher"
    ],
    "group": "giao-duc",
    "category": "GiaoDuc",
    "categoryLabel": "Giáo dục, đào tạo và phát triển con người",
    "riasecCodes": [
      "S",
      "A"
    ],
    "shortSummary": "Đồng hành, dạy chữ nổi Braille cho trẻ khiếm thị, ngôn ngữ ký hiệu cho trẻ khiếm thính và can thiệp hành vi cho trẻ tự kỷ hòa nhập.",
    "typicalTasks": [
      "Đánh giá mức độ phát triển tâm vận động của từng trẻ đặc biệt",
      "Lập kế hoạch giáo dục cá nhân hóa (IEP) phù hợp với tốc độ tiếp thu của bé",
      "Dạy các kỹ năng tự phục vụ bản thân như cài cúc áo, xúc cơm và nhận biết cảm xúc"
    ],
    "deliverables": [
      "Kế hoạch giáo dục cá nhân (IEP)",
      "Báo cáo đánh giá tiến bộ hòa nhập của trẻ"
    ],
    "toolsUsed": [
      "Chữ nổi Braille",
      "Bảng chữ cái ngôn ngữ ký hiệu",
      "Thẻ tranh giao tiếp PECS",
      "Đồ chơi trị liệu giác quan"
    ],
    "workEnvironment": "Trường chuyên biệt cho trẻ khuyết tật, trung tâm can thiệp sớm, lớp học hòa nhập.",
    "difficultiesAndTradeoffs": [
      "Trẻ có thể la hét, quấy khóc hoặc có hành vi kích động đòi hỏi lòng kiên nhẫn phi thường",
      "Tiến bộ của trẻ diễn ra rất chậm, đòi hỏi sự kiên trì từng ngày từng tháng"
    ],
    "coreSkills": [
      "Trái tim nhân ái và lòng yêu thương con người bao la",
      "Kỹ thuật can thiệp hành vi và trị liệu ngôn ngữ",
      "Thành thạo ngôn ngữ ký hiệu hoặc chữ nổi"
    ],
    "highSchoolSubjects": [
      "Tâm lý học",
      "Giáo dục công dân",
      "Sinh học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Giáo dục Đặc biệt (ĐH Sư phạm Hà Nội, ĐH Sư phạm TP.HCM)"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Giáo dục Đặc biệt (ĐH Sư phạm Hà Nội, ĐH Sư phạm TP.HCM)",
    "trialActivity": "Thử bịt mắt lại và dùng ngón tay sờ các đồ vật xung quanh để cảm nhận cảm giác của người khiếm thị.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Giáo viên giáo dục đặc biệt ân cần hướng dẫn trẻ phát triển kỹ năng giao tiếp",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-dao-tao-noi-bo-ld",
    "title": "Chuyên viên Đào tạo và Phát triển nhân tài (Learning & Development Specialist - L&D)",
    "englishTitle": "Corporate Learning & Development (L&D) Specialist",
    "synonyms": [
      "Chuyên viên L&D",
      "Corporate Trainer"
    ],
    "group": "giao-duc",
    "category": "GiaoDuc",
    "categoryLabel": "Giáo dục, đào tạo và phát triển con người",
    "riasecCodes": [
      "S",
      "E",
      "C"
    ],
    "shortSummary": "Khảo sát lỗ hổng kỹ năng của nhân viên, thiết kế lộ trình đào tạo thăng tiến và mời chuyên gia huấn luyện kỹ năng mềm cho doanh nghiệp.",
    "typicalTasks": [
      "Khảo sát nhu cầu đào tạo (TNA) tại các phòng ban",
      "Tổ chức các khóa đào tạo kỹ năng lãnh đạo, kỹ năng bán hàng và văn hóa doanh nghiệp",
      "Đo lường hiệu quả sau đào tạo theo mô hình Kirkpatrick 4 cấp độ"
    ],
    "deliverables": [
      "Kế hoạch đào tạo nội bộ cả năm của doanh nghiệp",
      "Khung năng lực chức danh và lộ trình phát triển nghề nghiệp"
    ],
    "toolsUsed": [
      "Hệ thống quản lý học tập doanh nghiệp LMS",
      "Khảo sát nhu cầu đào tạo TNA",
      "Tài liệu huấn luyện nội bộ"
    ],
    "workEnvironment": "Khối nhân sự các tập đoàn lớn, ngân hàng, công ty đa quốc gia.",
    "difficultiesAndTradeoffs": [
      "Khó khăn khi sắp xếp lịch học cho các nhân viên bận rộn kinh doanh",
      "Áp lực chứng minh khóa học mang lại giá trị thực tế cho kết quả kinh doanh của công ty"
    ],
    "coreSkills": [
      "Kỹ năng đứng lớp giảng dạy và truyền cảm hứng",
      "Xây dựng khung năng lực đào tạo chuẩn mực",
      "Tư duy phát triển tiềm năng con người"
    ],
    "highSchoolSubjects": [
      "Tâm lý học",
      "Giáo dục kinh tế và pháp luật",
      "Ngữ văn",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị nhân lực, Sư phạm hoặc Quản trị kinh doanh"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị nhân lực, Sư phạm hoặc Quản trị kinh doanh",
    "trialActivity": "Tìm hiểu khái niệm 'Học tập suốt đời' (Lifelong Learning) và tại sao người đi làm nhiều năm vẫn cần đi học mỗi tuần.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên L&D tổ chức buổi đào tạo nâng cao kỹ năng cho nhân viên",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-khao-thi-va-kiem-dinh-giao-duc",
    "title": "Chuyên viên Khảo thí và Đảm bảo chất lượng giáo dục (Educational Assessment & QA Specialist)",
    "englishTitle": "Educational Assessment & Accreditation Specialist",
    "synonyms": [
      "Chuyên viên khảo thí",
      "Kiểm định viên giáo dục"
    ],
    "group": "giao-duc",
    "category": "GiaoDuc",
    "categoryLabel": "Giáo dục, đào tạo và phát triển con người",
    "riasecCodes": [
      "C",
      "I"
    ],
    "shortSummary": "Phân tích độ phân hóa của đề thi tốt nghiệp, xây dựng ma trận câu hỏi chuẩn hóa và kiểm định chất lượng các trường đại học theo chuẩn quốc tế.",
    "typicalTasks": [
      "Xây dựng ngân hàng câu hỏi thi trắc nghiệm theo 4 mức độ nhận thức",
      "Phân tích độ khó và độ phân biệt của từng câu hỏi bằng lý thuyết ứng đáp câu hỏi (IRT)",
      "Đánh giá chất lượng cơ sở giáo dục theo tiêu chuẩn AUN-QA hoặc Bộ Giáo dục"
    ],
    "deliverables": [
      "Báo cáo phân tích chất lượng đề thi chuẩn hóa",
      "Hồ sơ tự đánh giá kiểm định chất lượng trường học"
    ],
    "toolsUsed": [
      "Phần mềm phân tích khảo thí chuyên dụng (Winsteps, SPSS)",
      "Ngân hàng câu hỏi thi trắc nghiệm mã hóa"
    ],
    "workEnvironment": "Cục Quản lý chất lượng (Bộ GD&ĐT), trung tâm khảo thí quốc gia, phòng khảo thí các trường đại học.",
    "difficultiesAndTradeoffs": [
      "Trách nhiệm bảo mật đề thi tuyệt đối ở mức tối mật",
      "Phải đối mặt với những tranh luận chuyên môn gay gắt về độ khó dễ của đề thi"
    ],
    "coreSkills": [
      "Đo lường và đánh giá trong giáo dục",
      "Thống kê toán học ứng dụng khảo thí",
      "Tính chính trực, bảo mật và công tâm tuyệt đối"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Tin học",
      "Ngữ văn"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Đo lường & Đánh giá trong giáo dục, Toán học hoặc Sư phạm"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Đo lường & Đánh giá trong giáo dục, Toán học hoặc Sư phạm",
    "trialActivity": "Tìm hiểu về 4 mức độ câu hỏi thi: Nhận biết, Thông hiểu, Vận dụng và Vận dụng cao trong đề thi tốt nghiệp THPT.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên khảo thí phân tích độ phân hóa của đề thi chuẩn hóa",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "luat-su-tranh-tung-toa-an",
    "title": "Luật sư tranh tụng tòa án (Trial Lawyer / Litigator)",
    "englishTitle": "Courtroom Litigation Lawyer",
    "synonyms": [
      "Luật sư bào chữa",
      "Litigator"
    ],
    "group": "luat-chinh-sach",
    "category": "Luat",
    "categoryLabel": "Luat, quan hệ công chúng và chính sách",
    "riasecCodes": [
      "E",
      "I",
      "S"
    ],
    "shortSummary": "Thu thập chứng cứ, nghiên cứu án lệ, tranh tụng tại các phiên tòa hình sự và dân sự để bảo vệ công lý và quyền lợi hợp pháp của thân chủ.",
    "typicalTasks": [
      "Nghiên cứu hồ sơ vụ án và phỏng vấn nhân chứng",
      "Soạn thảo bản luận cứ bào chữa sắc bén dựa trên các điều luật và án lệ",
      "Đối đáp tranh luận trực tiếp với Viện kiểm sát và luật sư đối tụng tại phiên tòa"
    ],
    "deliverables": [
      "Bản luận cứ bào chữa tại tòa án",
      "Hồ sơ khởi kiện và yêu cầu bồi thường thiệt hại"
    ],
    "toolsUsed": [
      "Hệ thống văn bản pháp luật số",
      "Án lệ của Tòa án nhân dân tối cao",
      "Trang phục luật sư tranh tụng chuẩn mực"
    ],
    "workEnvironment": "Phòng xử án Tòa án nhân dân, văn phòng luật sư, trại tạm giam.",
    "difficultiesAndTradeoffs": [
      "Áp lực tâm lý nặng nề khi đối diện với các vụ án hình sự phức tạp",
      "Làm việc thâu đêm rà soát từng chi tiết nhỏ trong hồ sơ chứng cứ"
    ],
    "coreSkills": [
      "Tư duy lập luận logic và phản biện sắc sảo",
      "Kỹ năng hùng biện trước công chúng",
      "Đạo đức nghề luật và dũng khí bảo vệ lẽ phải"
    ],
    "highSchoolSubjects": [
      "Giáo dục công dân / Kinh tế & Pháp luật",
      "Ngữ văn",
      "Lịch sử"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Luật (ĐH Luật Hà Nội, ĐH Luật TP.HCM) + 12 tháng đào tạo nghề luật sư tại Học viện Tư pháp + 12 tháng tập sự vượt qua kỳ thi quốc gia cấp thẻ Luật sư"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Luật (ĐH Luật Hà Nội, ĐH Luật TP.HCM) + 12 tháng đào tạo nghề luật sư tại Học viện Tư pháp + 12 tháng tập sự vượt qua kỳ thi quốc gia cấp thẻ Luật sư",
    "trialActivity": "Tìm hiểu về vai trò của 'Án lệ' trong xét xử: khi một bản án chuẩn mực trước đó được dùng làm khuôn mẫu cho các vụ án tương tự sau này.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Luật sư tranh tụng hùng biện bảo vệ thân chủ tại phiên tòa",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "luat-su-tu-van-mua-ban-sap-nhap-ma",
    "title": "Luật sư tư vấn sáp nhập doanh nghiệp (Corporate M&A Lawyer)",
    "englishTitle": "Corporate Mergers & Acquisitions (M&A) Lawyer",
    "synonyms": [
      "Luật sư M&A",
      "Corporate Lawyer"
    ],
    "group": "luat-chinh-sach",
    "category": "Luat",
    "categoryLabel": "Luat, quan hệ công chúng và chính sách",
    "riasecCodes": [
      "I",
      "E",
      "C"
    ],
    "shortSummary": "Thẩm định rủi ro pháp lý (Due Diligence), đàm phán hợp đồng mua bán cổ phần triệu USD và hỗ trợ sáp nhập các tập đoàn kinh tế.",
    "typicalTasks": [
      "Rà soát toàn diện hồ sơ pháp lý, giấy phép kinh doanh và tranh chấp tồn đọng của công ty mục tiêu",
      "Soạn thảo hợp đồng mua bán cổ phần (SPA) và thỏa thuận cổ đông (SHA)",
      "Làm thủ tục thông báo tập trung kinh tế tại Ủy ban Cạnh tranh Quốc gia"
    ],
    "deliverables": [
      "Báo cáo thẩm định pháp lý chi tiết (Legal Due Diligence Report)",
      "Bộ hợp đồng giao dịch M&A hoàn chỉnh"
    ],
    "toolsUsed": [
      "Cơ sở dữ liệu pháp luật quốc tế LexisNexis",
      "Phần mềm so sánh văn bản Workshare Compare"
    ],
    "workEnvironment": "Các hãng luật quốc tế hàng đầu (Baker McKenzie, YKVN, VILAF, Rajah & Tann).",
    "difficultiesAndTradeoffs": [
      "Những đợt chốt giao dịch đàm phán xuyên đêm tới sáng",
      "Khối lượng tài liệu dày hàng nghìn trang đòi hỏi sự chuẩn xác từng dấu phẩy"
    ],
    "coreSkills": [
      "Nắm vững luật doanh nghiệp, luật đầu tư và chứng khoán",
      "Tiếng Anh pháp lý xuất sắc",
      "Kỹ năng đàm phán hợp đồng thương mại"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Giáo dục kinh tế và pháp luật",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Luật kinh tế hoặc Luật quốc tế + Thẻ Luật sư"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Luật kinh tế hoặc Luật quốc tế + Thẻ Luật sư",
    "trialActivity": "Đọc một bản tin về việc một tập đoàn nước ngoài chi hàng trăm triệu USD mua lại chuỗi siêu thị ở Việt Nam để hiểu công việc của luật sư M&A.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Luật sư M&A rà soát điều khoản hợp đồng chuyển nhượng cổ phần",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "cong-chung-vien",
    "title": "Công chứng viên (Civil Law Notary)",
    "englishTitle": "Civil Law Public Notary",
    "synonyms": [
      "Công chứng viên",
      "Notary Public"
    ],
    "group": "luat-chinh-sach",
    "category": "Luat",
    "categoryLabel": "Luat, quan hệ công chúng và chính sách",
    "riasecCodes": [
      "C",
      "S",
      "I"
    ],
    "shortSummary": "Chứng thực tính xác thực, hợp pháp của hợp đồng mua bán nhà đất, di chúc thừa kế và ủy quyền tài sản bảo vệ giao dịch của người dân.",
    "typicalTasks": [
      "Kiểm tra giấy chứng nhận quyền sử dụng đất (sổ đỏ) thật hay giả",
      "Giải thích rõ ràng quyền và nghĩa vụ cho các bên trước khi ký tên điểm chỉ",
      "Ký tên, đóng dấu công chứng và lưu trữ hồ sơ công chứng theo quy định pháp luật"
    ],
    "deliverables": [
      "Văn bản công chứng có giá trị chứng cứ pháp lý cao nhất",
      "Sổ lưu trữ hồ sơ công chứng an toàn"
    ],
    "toolsUsed": [
      "Máy quét vân tay điện tử",
      "Kính lúp soi bảo an sổ đỏ",
      "Phần mềm cơ sở dữ liệu công chứng ngăn chặn giao dịch giả mạo"
    ],
    "workEnvironment": "Phòng công chứng nhà nước, văn phòng công chứng tư nhân.",
    "difficultiesAndTradeoffs": [
      "Chịu trách nhiệm bồi thường thiệt hại bằng toàn bộ tài sản nếu công chứng sai giấy tờ giả",
      "Hàng ngày tiếp xúc với nhiều loại giấy tờ pháp lý phức tạp"
    ],
    "coreSkills": [
      "Kỹ năng giám định giấy tờ thật giả tinh tường",
      "Kiến thức pháp luật dân sự, đất đai và hôn nhân gia đình sâu sắc",
      "Tính cẩn trọng và trung thực cao độ"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Ngữ văn",
      "Lịch sử"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Luật + 12 tháng đào tạo nghề công chứng + Đạt kỳ thi kiểm tra kết quả tập sự hành nghề công chứng do Bộ Tư pháp tổ chức"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Luật + 12 tháng đào tạo nghề công chứng + Đạt kỳ thi kiểm tra kết quả tập sự hành nghề công chứng do Bộ Tư pháp tổ chức",
    "trialActivity": "Cùng bố mẹ đến phòng công chứng xem các bác công chứng viên kiểm tra sổ đỏ và yêu cầu các bên ký tên, lăn tay ra sao.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Công chứng viên kiểm tra giấy tờ tùy thân và sổ đỏ trước khi ký chứng thực",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-phap-che-doanh-nghiep",
    "title": "Chuyên viên Pháp chế doanh nghiệp (In-house Legal Counsel)",
    "englishTitle": "Corporate In-house Legal Counsel",
    "synonyms": [
      "Pháp chế doanh nghiệp",
      "Legal Counsel"
    ],
    "group": "luat-chinh-sach",
    "category": "Luat",
    "categoryLabel": "Luat, quan hệ công chúng và chính sách",
    "riasecCodes": [
      "C",
      "I",
      "E"
    ],
    "shortSummary": "Rà soát hợp đồng kinh tế, tư vấn quy chế lao động nội bộ và đại diện doanh nghiệp làm việc với các cơ quan thanh tra nhà nước.",
    "typicalTasks": [
      "Thẩm định tính pháp lý của các hợp đồng mua bán, hợp tác kinh doanh",
      "Xây dựng nội quy lao động, thỏa ước lao động tập thể và quy chế bảo mật thông tin",
      "Tư vấn cảnh báo các rủi ro pháp lý trong hoạt động kinh doanh hàng ngày"
    ],
    "deliverables": [
      "Ý kiến tư vấn pháp lý nội bộ (Legal Opinion)",
      "Hệ thống quy chế quản trị nội bộ công ty"
    ],
    "toolsUsed": [
      "Phần mềm quản lý hợp đồng điện tử",
      "Hệ thống tra cứu văn bản quy phạm pháp luật"
    ],
    "workEnvironment": "Phòng pháp chế các tập đoàn, tổng công ty, doanh nghiệp tư nhân.",
    "difficultiesAndTradeoffs": [
      "Phải tìm ra giải pháp pháp lý an toàn nhưng vẫn giúp doanh nghiệp kinh doanh thuận lợi, không nói 'không' một cách cứng nhắc",
      "Áp lực rà soát hợp đồng gấp cho các phòng kinh doanh"
    ],
    "coreSkills": [
      "Kỹ năng soạn thảo và rà soát hợp đồng chặt chẽ",
      "Tư duy phòng ngừa rủi ro",
      "Khả năng dung hòa giữa kinh doanh và pháp luật"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Ngữ văn",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Luật học hoặc Luật kinh tế (ĐH Luật, Khoa Luật ĐHQG)"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Luật học hoặc Luật kinh tế (ĐH Luật, Khoa Luật ĐHQG)",
    "trialActivity": "Đọc một bản hợp đồng mua bán điện thoại di động đơn giản và tìm xem có điều khoản bảo hành trong bao lâu.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên pháp chế thảo luận giải pháp pháp lý cùng ban giám đốc",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "tham-phan-toa-an-nhan-dan",
    "title": "Thẩm phán Tòa án nhân dân (Judge / Magistrate)",
    "englishTitle": "Civil & Criminal Court Judge",
    "synonyms": [
      "Thẩm phán",
      "Judge"
    ],
    "group": "luat-chinh-sach",
    "category": "Luat",
    "categoryLabel": "Luat, quan hệ công chúng và chính sách",
    "riasecCodes": [
      "I",
      "C",
      "S"
    ],
    "shortSummary": "Chủ tọa phiên tòa, độc lập xét xử theo hiến pháp và pháp luật, nhân danh Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam tuyên những bản án công minh.",
    "typicalTasks": [
      "Nghiên cứu toàn diện hồ sơ vụ án trước khi mở phiên tòa",
      "Điều hành phiên tòa xét xử theo trình tự tố tụng công khai, minh bạch",
      "Cùng Hội đồng xét xử nghị án và tuyên bản án đúng người, đúng tội, đúng pháp luật"
    ],
    "deliverables": [
      "Bản án tuyên có hiệu lực pháp luật",
      "Quyết định công nhận sự thỏa thuận của các đương sự"
    ],
    "toolsUsed": [
      "Pháp phục thẩm phán (Áo choàng đen viền đỏ)",
      "Búa gõ phiên tòa",
      "Hồ sơ vụ án chuẩn tố tụng"
    ],
    "workEnvironment": "Trụ sở Tòa án nhân dân các cấp.",
    "difficultiesAndTradeoffs": [
      "Gánh nặng công lý và lương tâm trên vai, một phán quyết sai có thể hủy hoại cuộc đời một con người",
      "Áp lực giữ gìn tính độc lập, liêm chính tuyệt đối trước mọi sự cám dỗ hoặc đe dọa"
    ],
    "coreSkills": [
      "Sự liêm chính, công tâm và bản lĩnh tư pháp",
      "Kiến thức pháp luật sâu rộng và kinh nghiệm thực tiễn phong phú",
      "Kỹ năng điều hành phiên tòa uy nghiêm"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Lịch sử",
      "Ngữ văn"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Luật + Thư ký tòa án/Thẩm tra viên lâu năm + Hoàn thành khóa đào tạo nghiệp vụ xét xử tại Học viện Tòa án + Được Chủ tịch nước bổ nhiệm làm Thẩm phán"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Luật + Thư ký tòa án/Thẩm tra viên lâu năm + Hoàn thành khóa đào tạo nghiệp vụ xét xử tại Học viện Tòa án + Được Chủ tịch nước bổ nhiệm làm Thẩm phán",
    "trialActivity": "Tìm hiểu về chiếc áo choàng đen và biểu tượng cán cân công lý của Tòa án nhân dân Việt Nam.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Thẩm phán điều hành phiên xét xử uy nghiêm tại phòng xử án",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-gia-phan-tich-chinh-sach-cong",
    "title": "Chuyên gia Phân tích chính sách công (Public Policy Analyst)",
    "englishTitle": "Public Policy Research & Analysis Specialist",
    "synonyms": [
      "Chuyên viên chính sách công",
      "Policy Analyst"
    ],
    "group": "luat-chinh-sach",
    "category": "Luat",
    "categoryLabel": "Luat, quan hệ công chúng và chính sách",
    "riasecCodes": [
      "I",
      "S",
      "E"
    ],
    "shortSummary": "Nghiên cứu tác động kinh tế xã hội của các luật mới, khảo sát ý kiến người dân và đề xuất hoàn thiện chính sách giáo dục, y tế, an sinh.",
    "typicalTasks": [
      "Khảo sát thực địa và phỏng vấn các nhóm đối tượng chịu tác động của chính sách",
      "Đánh giá tác động thủ tục hành chính và chi phí tuân thủ (RIA)",
      "Soạn thảo báo cáo khuyến nghị chính sách gửi các bộ ngành và Quốc hội"
    ],
    "deliverables": [
      "Báo cáo đánh giá tác động chính sách (Regulatory Impact Assessment - RIA)",
      "Dự thảo văn bản chính sách hoàn thiện"
    ],
    "toolsUsed": [
      "Phần mềm phân tích dữ liệu kinh tế lượng Stata",
      "Phương pháp điều tra xã hội học",
      "Khung phân tích chính sách công"
    ],
    "workEnvironment": "Viện nghiên cứu lập pháp, viện chiến lược phát triển, tổ chức nghiên cứu chính sách độc lập.",
    "difficultiesAndTradeoffs": [
      "Chính sách tác động đến cuộc sống của hàng triệu con người nên đòi hỏi sự thận trọng tối đa",
      "Phải cân bằng giữa mục tiêu quản lý nhà nước và quyền tự do kinh doanh của người dân"
    ],
    "coreSkills": [
      "Tư duy phân tích chính sách công đa chiều",
      "Kỹ năng nghiên cứu định lượng và định tính",
      "Tâm huyết phụng sự vì lợi ích chung của cộng đồng"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Toán học",
      "Lịch sử",
      "Ngữ văn"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản lý công, Chính sách công hoặc Luật (Học viện Hành chính Quốc gia, ĐH Kinh tế Quốc dân)"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản lý công, Chính sách công hoặc Luật (Học viện Hành chính Quốc gia, ĐH Kinh tế Quốc dân)",
    "trialActivity": "Tìm hiểu về quá trình lấy ý kiến nhân dân khi Quốc hội sửa đổi một đạo luật quan trọng như Luật Đất đai.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên gia thảo luận đánh giá tác động chính sách tại hội nghị tham vấn",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-so-huu-tri-tue-sang-che",
    "title": "Chuyên viên Sở hữu trí tuệ và Sáng chế (Patent & IP Attorney)",
    "englishTitle": "Intellectual Property & Patent Attorney",
    "synonyms": [
      "Đại diện sở hữu trí tuệ",
      "Patent Agent"
    ],
    "group": "luat-chinh-sach",
    "category": "Luat",
    "categoryLabel": "Luat, quan hệ công chúng và chính sách",
    "riasecCodes": [
      "I",
      "C",
      "R"
    ],
    "shortSummary": "Soạn bản mô tả sáng chế kỹ thuật, nộp đơn bảo hộ nhãn hiệu độc quyền tại Cục Sở hữu trí tuệ và bảo vệ bản quyền trước hàng giả.",
    "typicalTasks": [
      "Tra cứu khả năng đăng ký sáng chế và nhãn hiệu trên cơ sở dữ liệu WIPO toàn cầu",
      "Viết bản mô tả giải pháp kỹ thuật và yêu cầu bảo hộ sáng chế (Claims)",
      "Xử lý các hành vi xâm phạm quyền sở hữu trí tuệ và bán hàng giả trên mạng"
    ],
    "deliverables": [
      "Bản mô tả sáng chế kỹ thuật chuẩn mực",
      "Giấy chứng nhận đăng ký nhãn hiệu độc quyền"
    ],
    "toolsUsed": [
      "Cơ sở dữ liệu sáng chế WIPO PATENTSCOPE",
      "Cơ sở dữ liệu nhãn hiệu Cục SHTT (IP Viet Nam)",
      "Phần mềm tra cứu bản quyền"
    ],
    "workEnvironment": "Tổ chức đại diện sở hữu trí tuệ, viện nghiên cứu sáng chế, phòng R&D các tập đoàn.",
    "difficultiesAndTradeoffs": [
      "Bản mô tả sáng chế đòi hỏi người viết vừa giỏi luật vừa am hiểu tường tận kỹ thuật chuyên sâu",
      "Thời gian thẩm định đơn cấp bằng sáng chế kéo dài từ 2 đến 3 năm"
    ],
    "coreSkills": [
      "Hiểu biết kỹ thuật cơ khí, hóa chất hoặc CNTT",
      "Kiến thức luật sở hữu trí tuệ chuyên sâu",
      "Kỹ năng lập luận bảo vệ phạm vi bảo hộ"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Hóa học",
      "Giáo dục kinh tế và pháp luật",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Tốt nghiệp Đại học khối kỹ thuật hoặc Luật + Chứng chỉ hành nghề Người đại diện sở hữu công nghiệp của Cục SHTT"
      }
    ],
    "entryPathway": "Đại học: Tốt nghiệp Đại học khối kỹ thuật hoặc Luật + Chứng chỉ hành nghề Người đại diện sở hữu công nghiệp của Cục SHTT",
    "trialActivity": "Lật một sản phẩm công nghệ xem ký hiệu chữ R trong vòng tròn (®) có ý nghĩa gì đối với nhãn hiệu đã được bảo hộ.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên tra cứu bản quyền sáng chế trên cơ sở dữ liệu quốc tế",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "tro-giup-vien-phap-ly-cong-dong",
    "title": "Trợ giúp viên pháp lý cho người nghèo (Legal Aid Officer)",
    "englishTitle": "Public Legal Aid Officer",
    "synonyms": [
      "Trợ giúp viên pháp lý",
      "Legal Aid Specialist"
    ],
    "group": "luat-chinh-sach",
    "category": "Luat",
    "categoryLabel": "Luat, quan hệ công chúng và chính sách",
    "riasecCodes": [
      "S",
      "E",
      "C"
    ],
    "shortSummary": "Tư vấn pháp luật và bào chữa hoàn toàn miễn phí cho người nghèo, đồng bào dân tộc thiểu số và nạn nhân bạo lực gia đình.",
    "typicalTasks": [
      "Về tận các thôn bản vùng sâu vùng xa tổ chức các buổi truyền thông trợ giúp pháp lý lưu động",
      "Tiếp nhận và tư vấn pháp lý miễn phí cho bà con về tranh chấp đất đai, chế độ bảo trợ xã hội",
      "Tham gia bào chữa bảo vệ quyền lợi hợp pháp cho người nghèo tại tòa án"
    ],
    "deliverables": [
      "Hồ sơ vụ việc trợ giúp pháp lý hoàn thành",
      "Bà con được bảo vệ quyền lợi chính đáng mà không tốn chi phí"
    ],
    "toolsUsed": [
      "Sổ tay pháp luật trợ giúp pháp lý",
      "Mẫu đơn khiếu nại và mẫu đơn xin trợ giúp pháp lý"
    ],
    "workEnvironment": "Trung tâm Trợ giúp pháp lý nhà nước (thuộc Sở Tư pháp các tỉnh).",
    "difficultiesAndTradeoffs": [
      "Đi lại khó khăn trên các cung đường đồi núi hiểm trở",
      "Bà con vùng cao nhiều nơi còn hạn chế về tiếng Kinh đòi hỏi sự kiên nhẫn giải thích tỉ mỉ"
    ],
    "coreSkills": [
      "Tấm lòng nhân ái vì người nghèo và yếu thế",
      "Kiến thức pháp luật dân sự, đất đai và hình sự",
      "Kỹ năng giao tiếp thấu hiểu văn hóa đồng bào DTTS"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Ngữ văn",
      "Địa lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Luật + Có chứng chỉ đào tạo nghề luật sư + Được bổ nhiệm Trợ giúp viên pháp lý nhà nước"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Luật + Có chứng chỉ đào tạo nghề luật sư + Được bổ nhiệm Trợ giúp viên pháp lý nhà nước",
    "trialActivity": "Tìm hiểu về chính sách của Nhà nước ta trong việc cung cấp luật sư miễn phí cho bà con nghèo và người khuyết tật.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Trợ giúp viên pháp lý tư vấn quyền lợi miễn phí cho người dân nghèo",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "hoa-giai-vien-thuong-mai-quoc-te",
    "title": "Trọng tài viên và Hòa giải viên thương mại (Commercial Arbitrator & Mediator)",
    "englishTitle": "International Commercial Arbitrator",
    "synonyms": [
      "Trọng tài viên thương mại",
      "Commercial Arbitrator"
    ],
    "group": "luat-chinh-sach",
    "category": "Luat",
    "categoryLabel": "Luat, quan hệ công chúng và chính sách",
    "riasecCodes": [
      "I",
      "E",
      "C"
    ],
    "shortSummary": "Phân xử các tranh chấp hợp đồng kinh doanh quốc tế tại Trung tâm Trọng tài Quốc tế (VIAC) bảo mật, nhanh chóng và không qua tòa án.",
    "typicalTasks": [
      "Nghiên cứu hồ sơ tranh chấp và các điều khoản hợp đồng thương mại quốc tế",
      "Chủ trì phiên họp phân xử trọng tài theo quy tắc VIAC / UNCITRAL",
      "Ban hành phán quyết trọng tài có giá trị chung thẩm và cưỡng chế thi hành toàn cầu"
    ],
    "deliverables": [
      "Phán quyết trọng tài thương mại (Arbitral Award)",
      "Biên bản hòa giải thành công giữa hai doanh nghiệp"
    ],
    "toolsUsed": [
      "Quy tắc tố tụng trọng tài quốc tế",
      "Hồ sơ vụ tranh chấp thương mại song ngữ"
    ],
    "workEnvironment": "Trung tâm Trọng tài Quốc tế Việt Nam (VIAC), Trung tâm Trọng tài Quốc tế Singapore (SIAC).",
    "difficultiesAndTradeoffs": [
      "Các vụ tranh chấp thương mại hàng triệu USD với nhiều tình tiết pháp lý phức tạp",
      "Phải giữ vững tính độc lập và bảo mật tuyệt đối thông tin kinh doanh của các bên"
    ],
    "coreSkills": [
      "Kinh nghiệm và uy tín nghề nghiệp chuyên sâu trong lĩnh vực kinh tế, hàng hải, xây dựng",
      "Tiếng Anh tranh tụng thương mại quốc tế",
      "Kỹ năng lắng nghe và hòa giải tranh chấp"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Tiếng Anh",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Chuyên gia có trình độ đại học trở lên, có ít nhất 15 năm kinh nghiệm công tác trong lĩnh vực pháp lý hoặc kinh tế + Được bầu vào danh sách Trọng tài viên VIAC"
      }
    ],
    "entryPathway": "Đại học: Chuyên gia có trình độ đại học trở lên, có ít nhất 15 năm kinh nghiệm công tác trong lĩnh vực pháp lý hoặc kinh tế + Được bầu vào danh sách Trọng tài viên VIAC",
    "trialActivity": "Tìm hiểu tại sao các tập đoàn lớn thích giải quyết tranh chấp bằng Trọng tài thương mại hơn là đưa nhau ra tòa án công khai.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Hội đồng trọng tài thương mại lắng nghe các bên tranh luận phân xử tranh chấp",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chap-hanh-vien-thi-hanh-an",
    "title": "Chấp hành viên thi hành án dân sự (Judicial Enforcement Officer)",
    "englishTitle": "Civil Enforcement Officer / Bailiff",
    "synonyms": [
      "Chấp hành viên",
      "Enforcement Officer"
    ],
    "group": "luat-chinh-sach",
    "category": "Luat",
    "categoryLabel": "Luat, quan hệ công chúng và chính sách",
    "riasecCodes": [
      "C",
      "R",
      "E"
    ],
    "shortSummary": "Tổ chức thi hành các bản án đã có hiệu lực của tòa án: kê biên tài sản, phong tỏa tài khoản ngân hàng để trả lại tiền cho người thắng kiện.",
    "typicalTasks": [
      "Tống đạt các quyết định thi hành án và động viên đương sự tự nguyện thi hành",
      "Xác minh điều kiện kinh tế, tài sản nhà đất và tài khoản ngân hàng của người phải thi hành án",
      "Tổ chức cưỡng chế kê biên đấu giá tài sản khi đương sự cố tình tẩu tán trốn tránh nghĩa vụ"
    ],
    "deliverables": [
      "Biên bản kê biên xử lý tài sản thi hành án",
      "Biên bản bàn giao tài sản đấu giá cho người mua"
    ],
    "toolsUsed": [
      "Phần mềm quản lý nghiệp vụ thi hành án",
      "Trang phục chấp hành viên tư pháp"
    ],
    "workEnvironment": "Chi cục Thi hành án dân sự, hiện trường kê biên tài sản.",
    "difficultiesAndTradeoffs": [
      "Đối mặt trực tiếp với sự chống đối, bức xúc hoặc đe dọa từ những người bị kê biên tài sản",
      "Công việc đòi hỏi sự cứng rắn nhưng vẫn phải nhân văn, đúng trình tự pháp luật"
    ],
    "coreSkills": [
      "Nắm vững luật thi hành án dân sự",
      "Bản lĩnh kiên định trước áp lực",
      "Kỹ năng tuyên truyền thuyết phục đương sự tự nguyện chấp hành"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Tâm lý học",
      "Võ thuật tự vệ"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Luật + Đào tạo nghề Chấp hành viên tại Học viện Tư pháp + Được Bộ trưởng Bộ Tư pháp bổ nhiệm Chấp hành viên"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Luật + Đào tạo nghề Chấp hành viên tại Học viện Tư pháp + Được Bộ trưởng Bộ Tư pháp bổ nhiệm Chấp hành viên",
    "trialActivity": "Tìm hiểu tại sao sau khi tòa tuyên án thắng kiện, người thắng kiện phải nộp đơn yêu cầu thi hành án thì mới lấy lại được tài sản.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chấp hành viên kiểm tra biên bản thi hành bản án dân sự",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-dien-mat-troi-va-nang-luong-gio",
    "title": "Kỹ sư Năng lượng tái tạo (Solar & Wind Energy Engineer)",
    "englishTitle": "Renewable Energy (Solar & Wind) Systems Engineer",
    "synonyms": [
      "Kỹ sư điện mặt trời",
      "Kỹ sư điện gió"
    ],
    "group": "nang-luong-moi-truong",
    "category": "MoiTruong",
    "categoryLabel": "Năng lượng tái tạo và môi trường",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Tính toán bức xạ mặt trời, hoa gió, thiết kế trang trại điện mặt trời nổi và cánh đồng tuabin gió hòa lưới điện quốc gia.",
    "typicalTasks": [
      "Phân tích dữ liệu tốc độ gió từ cột đo gió cao 100m để tính toán sản lượng điện hàng năm (P50/P90)",
      "Mô phỏng bố trí góc nghiêng tấm pin quang điện (PV) tối ưu hấp thụ bức xạ",
      "Thiết kế trạm biến áp nâng áp 110kV/220kV và đường dây truyền tải hòa lưới"
    ],
    "deliverables": [
      "Hồ sơ thiết kế kỹ thuật trang trại điện gió / mặt trời",
      "Báo cáo mô phỏng sản lượng điện phát lưới hàng năm"
    ],
    "toolsUsed": [
      "PVSyst",
      "WAsP (Wind Atlas)",
      "AutoCAD Electrical",
      "MATLAB Simulink"
    ],
    "workEnvironment": "Trang trại điện gió ven biển Ninh Thuận, Bạc Liêu, công trường điện mặt trời mái nhà công nghiệp.",
    "difficultiesAndTradeoffs": [
      "Làm việc tại các vùng nắng gắt gió lớn hoặc leo lên trụ tuabin gió cao 120m ngoài biển",
      "Chính sách giá điện năng lượng tái tạo thay đổi theo từng thời kỳ"
    ],
    "coreSkills": [
      "Kỹ thuật điện năng và điện tử công suất",
      "Mô phỏng năng lượng chuyên sâu PVSyst/WAsP",
      "Tiêu chuẩn an toàn điện cao áp"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Toán học",
      "Địa lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Hệ thống điện, Kỹ thuật Năng lượng hoặc Năng lượng tái tạo (ĐH Bách khoa)"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Hệ thống điện, Kỹ thuật Năng lượng hoặc Năng lượng tái tạo (ĐH Bách khoa)",
    "trialActivity": "Quan sát các tấm pin mặt trời trên mái nhà và xem góc nghiêng của tấm pin hướng về phía nào (hướng Nam) để đón nhiều nắng nhất.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Cánh đồng tuabin gió và tấm pin mặt trời trải dài đón ánh nắng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-danh-gia-tac-dong-moi-truong-dtm",
    "title": "Kỹ sư Đánh giá tác động môi trường (Environmental Impact Assessment - EIA)",
    "englishTitle": "Environmental Impact Assessment (EIA) Specialist",
    "synonyms": [
      "Kỹ sư ĐTM",
      "EIA Specialist"
    ],
    "group": "nang-luong-moi-truong",
    "category": "MoiTruong",
    "categoryLabel": "Năng lượng tái tạo và môi trường",
    "riasecCodes": [
      "I",
      "C",
      "R"
    ],
    "shortSummary": "Lấy mẫu nước ngầm, đo khói bụi khí thải và viết báo cáo đánh giá tác động môi trường (ĐTM) trước khi một khu công nghiệp được cấp phép xây dựng.",
    "typicalTasks": [
      "Đo đạc nồng độ bụi mịn PM2.5, khí SO2, NOx tại khu vực dự kiến xây dựng",
      "Dự báo mức độ lan truyền ô nhiễm khi nhà máy đi vào hoạt động bằng mô hình toán",
      "Đề xuất các biện pháp giảm thiểu ô nhiễm và bảo vệ nguồn nước cho cộng đồng xung quanh"
    ],
    "deliverables": [
      "Báo cáo đánh giá tác động môi trường ĐTM được Bộ TN&MT phê duyệt",
      "Kế hoạch quản lý môi trường công trình"
    ],
    "toolsUsed": [
      "Máy đo nồng độ khí thải cầm tay",
      "Phần mềm mô phỏng lan truyền ô nhiễm AERMOD",
      "Máy lấy mẫu bụi thể tích lớn"
    ],
    "workEnvironment": "Viện nghiên cứu môi trường, công ty tư vấn môi trường, đi khảo sát thực địa hiện trường.",
    "difficultiesAndTradeoffs": [
      "Phải tiếp xúc với các nguồn ô nhiễm thực tế khi lấy mẫu hiện trường",
      "Chịu trách nhiệm bảo vệ môi trường trước áp lực thúc đẩy tiến độ dự án"
    ],
    "coreSkills": [
      "Hiểu biết sâu sắc luật bảo vệ môi trường",
      "Kỹ năng phân tích hóa lý môi trường",
      "Khả năng viết báo cáo khoa học chặt chẽ"
    ],
    "highSchoolSubjects": [
      "Hóa học",
      "Sinh học",
      "Địa lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Khoa học Môi trường hoặc Quản lý Môi trường (ĐH Bách khoa, ĐH KHTN)"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Khoa học Môi trường hoặc Quản lý Môi trường (ĐH Bách khoa, ĐH KHTN)",
    "trialActivity": "Tìm hiểu về chỉ số chất lượng không khí AQI mà em vẫn xem trên điện thoại mỗi buổi sáng xem màu xanh, vàng, đỏ có ý nghĩa gì.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư môi trường lấy mẫu nước sông để kiểm tra nồng độ kim loại nặng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-tin-chi-carbon-net-zero",
    "title": "Chuyên viên Kiểm kê khí nhà kính và Tín chỉ Carbon (Carbon Credit / Net Zero Specialist)",
    "englishTitle": "Carbon Footprint & Net Zero Consultant",
    "synonyms": [
      "Chuyên gia tín chỉ carbon",
      "Carbon Footprint Specialist"
    ],
    "group": "nang-luong-moi-truong",
    "category": "MoiTruong",
    "categoryLabel": "Năng lượng tái tạo và môi trường",
    "riasecCodes": [
      "I",
      "C",
      "E"
    ],
    "shortSummary": "Đo đạc lượng phát thải CO2 của nhà máy, xây dựng lộ trình Net Zero và đăng ký phát hành tín chỉ carbon rừng bán cho các tập đoàn quốc tế.",
    "typicalTasks": [
      "Kiểm kê khí nhà kính phạm vi 1, 2, 3 theo tiêu chuẩn quốc tế ISO 14064 và GHG Protocol",
      "Tính toán lượng hấp thụ carbon của các cánh rừng trồng ngập mặn",
      "Đăng ký cấp tín chỉ carbon tiêu chuẩn Verra / Gold Standard để giao dịch trên sàn quốc tế"
    ],
    "deliverables": [
      "Báo cáo kiểm kê khí nhà kính của doanh nghiệp",
      "Chứng nhận tín chỉ carbon có mã số giao dịch quốc tế"
    ],
    "toolsUsed": [
      "Công cụ tính toán dấu chân carbon GHG Protocol",
      "Phần mềm viễn thám đo sinh khối rừng",
      "Sàn giao dịch carbon tự nguyện"
    ],
    "workEnvironment": "Công ty tư vấn phát triển bền vững ESG, ban quản lý rừng phòng hộ, quỹ đầu tư khí hậu.",
    "difficultiesAndTradeoffs": [
      "Thị trường tín chỉ carbon còn rất mới mẻ, các tiêu chuẩn quốc tế cập nhật thay đổi liên tục",
      "Đòi hỏi khả năng tính toán số liệu phát thải từ hàng nghìn nguồn tiêu thụ điện, xăng dầu"
    ],
    "coreSkills": [
      "Kiến thức biến đổi khí hậu và kinh tế carbon",
      "Thành thạo phương pháp kiểm kê GHG Protocol",
      "Tiếng Anh chuyên ngành bền vững"
    ],
    "highSchoolSubjects": [
      "Hóa học",
      "Địa lý",
      "Toán học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Kinh tế môi trường, Khoa học môi trường hoặc Biến đổi khí hậu"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Kinh tế môi trường, Khoa học môi trường hoặc Biến đổi khí hậu",
    "trialActivity": "Tìm hiểu về cam kết Net Zero 2050 của Việt Nam: đưa mức phát thải ròng khí nhà kính về bằng 0 vào năm 2050.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Cánh rừng ngập mặn xanh bạt ngàn hấp thụ hàng triệu tấn khí CO2",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-xu-ly-nuoc-thai-tai-tuan-hoan",
    "title": "Kỹ sư Xử lý nước thải và Tái tuần hoàn nước (Water Treatment & Recycling Engineer)",
    "englishTitle": "Wastewater Treatment & Water Reclamation Engineer",
    "synonyms": [
      "Kỹ sư xử lý nước",
      "Water Treatment Engineer"
    ],
    "group": "nang-luong-moi-truong",
    "category": "MoiTruong",
    "categoryLabel": "Năng lượng tái tạo và môi trường",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Vận hành bể xử lý sinh học hiếu khí, kỵ khí và hệ thống màng lọc MBR biến nước thải dệt nhuộm đen ngòm thành nước trong tái sử dụng tưới cây.",
    "typicalTasks": [
      "Nuôi cấy và duy trì bùn hoạt tính vi sinh trong các bể sục khí Aerotank",
      "Châm hóa chất keo tụ PAC và Polymer lắng đọng kim loại nặng và cặn lơ lửng",
      "Vận hành hệ thống màng siêu lọc UF và khử trùng tia cực tím UV"
    ],
    "deliverables": [
      "Quy trình vận hành trạm xử lý nước thải chuẩn hóa",
      "Nước thải sau xử lý đạt cột A theo QCVN 40:2011/BTNMT"
    ],
    "toolsUsed": [
      "Hệ thống bể lắng sinh học",
      "Hệ thống màng lọc vi sinh MBR",
      "Máy đo chỉ số BOD, COD, DO"
    ],
    "workEnvironment": "Trạm xử lý nước thải tập trung khu công nghiệp, nhà máy dệt nhuộm, xí nghiệp giấy.",
    "difficultiesAndTradeoffs": [
      "Mùi hôi đặc trưng của nước thải và bùn vi sinh trong khu vực xử lý",
      "Trách nhiệm pháp lý nghiêm ngặt nếu nước thải xả ra sông suối vượt ngưỡng quy định"
    ],
    "coreSkills": [
      "Kỹ thuật vi sinh học xử lý nước",
      "Hóa học keo tụ tạo bông",
      "Vận hành hệ thống bơm van tự động SCADA"
    ],
    "highSchoolSubjects": [
      "Hóa học",
      "Sinh học",
      "Vật lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật Môi trường hoặc Kỹ thuật Hóa học (ĐH Bách khoa, ĐH Xây dựng)"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Kỹ thuật Xử lý nước"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật Môi trường hoặc Kỹ thuật Hóa học (ĐH Bách khoa, ĐH Xây dựng) | Cao đẳng: Cao đẳng Kỹ thuật Xử lý nước",
    "trialActivity": "Quan sát chiếc phèn chua làm trong nước đục như thế nào để hiểu nguyên lý keo tụ bông cặn trong xử lý nước.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Bể sục khí sinh học xử lý nước thải công nghiệp hiện đại",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-kinh-te-tuan-hoan-tai-che-rac",
    "title": "Kỹ sư Quản lý chất thải và Kinh tế tuần hoàn (Waste-to-Energy & Circular Engineer)",
    "englishTitle": "Circular Economy & Resource Recovery Engineer",
    "synonyms": [
      "Kỹ sư tái chế",
      "Waste Management Engineer"
    ],
    "group": "nang-luong-moi-truong",
    "category": "MoiTruong",
    "categoryLabel": "Năng lượng tái tạo và môi trường",
    "riasecCodes": [
      "R",
      "I",
      "C"
    ],
    "shortSummary": "Thiết kế dây chuyền phân loại rác thông minh, nhà máy đốt rác phát điện (Waste-to-Energy) và tái chế rác thải nhựa thành hạt nhựa nguyên sinh.",
    "typicalTasks": [
      "Phân tích thành phần rác thải sinh hoạt (nhựa, hữu cơ, kim loại, thủy tinh)",
      "Kiểm soát nhiệt độ lò đốt rác trên 1050 độ C để xử lý triệt để khí độc Dioxin",
      "Thiết lập quy trình rửa, nghiền và tạo hạt nhựa tái chế hạt rPET cho ngành may mặc"
    ],
    "deliverables": [
      "Quy trình thu hồi tài nguyên từ chất thải",
      "Sản lượng điện phát lưới từ rác thải sinh hoạt"
    ],
    "toolsUsed": [
      "Nhà máy đốt rác phát điện",
      "Hệ thống phân loại rác quang học",
      "Máy ép kiện rác tự động"
    ],
    "workEnvironment": "Khu liên hợp xử lý chất thải (Khu xử lý rác Nam Sơn Hà Nội, Đa Phước TP.HCM), nhà máy điện rác Sóc Sơn.",
    "difficultiesAndTradeoffs": [
      "Môi trường rác thải có mùi hôi và nguy cơ ô nhiễm nếu không che chắn kỹ",
      "Cần kiên trì thay đổi thói quen phân loại rác tại nguồn của người dân"
    ],
    "coreSkills": [
      "Công nghệ nhiệt đốt rác phát điện",
      "Kỹ thuật tái chế nhựa và polyme",
      "Mô hình kinh tế tuần hoàn tái sử dụng tài nguyên"
    ],
    "highSchoolSubjects": [
      "Hóa học",
      "Vật lý",
      "Sinh học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Quản lý Chất thải, Kỹ thuật Môi trường hoặc Kỹ thuật Nhiệt"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Quản lý Chất thải, Kỹ thuật Môi trường hoặc Kỹ thuật Nhiệt",
    "trialActivity": "Tìm hiểu về nhà máy điện rác Sóc Sơn Hà Nội: mỗi ngày đốt 4.000 tấn rác và tạo ra lượng điện thắp sáng cho hàng chục nghìn hộ dân.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Quy trình tái chế chai nhựa đã qua sử dụng thành hạt nhựa nguyên sinh",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-gia-nang-luong-sinh-khoi-biomass",
    "title": "Kỹ sư Năng lượng sinh khối (Biomass Energy Specialist)",
    "englishTitle": "Biomass & Biofuel Energy Specialist",
    "synonyms": [
      "Kỹ sư biomass",
      "Biofuel Engineer"
    ],
    "group": "nang-luong-moi-truong",
    "category": "MoiTruong",
    "categoryLabel": "Năng lượng tái tạo và môi trường",
    "riasecCodes": [
      "R",
      "I"
    ],
    "shortSummary": "Tận dụng vỏ trấu, bã mía, mùn cưa phế phẩm nông nghiệp ép thành viên nén năng lượng (Pellet) thay thế than đá trong lò hơi công nghiệp.",
    "typicalTasks": [
      "Khảo sát nguồn nguyên liệu trấu, mùn cưa và phế phẩm gỗ dăm dồi dào",
      "Nghiên cứu tỷ lệ phối trộn và lực ép viên nén để đạt nhiệt trị cao trên 4.000 kcal/kg",
      "Chuyển đổi lò hơi đốt than sang lò hơi đốt sinh khối giảm phát thải carbon"
    ],
    "deliverables": [
      "Dây chuyền ép viên nén sinh khối chất lượng cao",
      "Hợp đồng cung ứng nhiên liệu sinh khối cho các nhà máy công nghiệp"
    ],
    "toolsUsed": [
      "Máy ép viên nén trục đứng",
      "Máy đo độ ẩm nguyên liệu",
      "Thiết bị phân tích nhiệt trị bom nhiệt lượng kế"
    ],
    "workEnvironment": "Nhà máy sản xuất viên nén gỗ, nhà máy đường (nhiệt điện bã mía), nhà máy thức ăn chăn nuôi.",
    "difficultiesAndTradeoffs": [
      "Bụi mùn cưa và nguy cơ cháy nổ nếu không kiểm soát tốt độ ẩm kho chứa",
      "Nguồn nguyên liệu phụ thuộc theo mùa vụ nông lâm nghiệp"
    ],
    "coreSkills": [
      "Kỹ thuật đốt cháy và nhiên liệu sinh học",
      "Vận hành máy móc chế biến gỗ và sinh khối",
      "Tính toán hiệu quả năng lượng thay thế"
    ],
    "highSchoolSubjects": [
      "Hóa học",
      "Vật lý",
      "Công nghệ"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Năng lượng, Kỹ thuật Hóa học hoặc Lâm nghiệp"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Năng lượng, Kỹ thuật Hóa học hoặc Lâm nghiệp",
    "trialActivity": "Tìm hiểu xem các nhà máy đường tận dụng bã mía ép khô để tự phát điện cho cả nhà máy hoạt động như thế nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Viên nén gỗ sinh khối làm từ mùn cưa thay thế than đá bảo vệ môi trường",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-thuat-vien-tuabin-gio-ngoai-khoi",
    "title": "Kỹ thuật viên bảo trì Tuabin gió ngoài khơi (Offshore Wind Turbine Technician)",
    "englishTitle": "Offshore Wind Turbine Service Technician",
    "synonyms": [
      "Thợ bảo trì tuabin gió",
      "Wind Turbine Tech"
    ],
    "group": "nang-luong-moi-truong",
    "category": "MoiTruong",
    "categoryLabel": "Năng lượng tái tạo và môi trường",
    "riasecCodes": [
      "R"
    ],
    "shortSummary": "Đu dây trên cao ở độ cao 100m giữa biển khơi, kiểm tra cánh quạt tuabin gió, thay dầu hộp số và bảo dưỡng máy phát điện gió ngoài khơi.",
    "typicalTasks": [
      "Di chuyển bằng tàu dịch vụ vượt sóng ra các trụ tuabin gió ngoài khơi",
      "Đeo đai bảo hộ leo thang dây bên trong lòng trụ tuabin lên buồng máy (Nacelle)",
      "Kiểm tra vết nứt cánh quạt composite bằng thiết bị siêu âm và thay dầu bôi trơn hộp số"
    ],
    "deliverables": [
      "Nhật ký bảo dưỡng tuabin gió ngoài khơi",
      "Biên bản kiểm tra an toàn cánh quạt và hệ thống phanh hãm"
    ],
    "toolsUsed": [
      "Bộ đồ leo dây trên cao chuyên dụng (Rope Access)",
      "Cờ lê thủy lực lực siết lớn",
      "Máy siêu âm kiểm tra vết nứt"
    ],
    "workEnvironment": "Trang trại điện gió ngoài khơi (Bạc Liêu, Trà Vinh, Bình Thuận), làm việc cheo leo giữa biển khơi.",
    "difficultiesAndTradeoffs": [
      "Làm việc ở độ cao chóng mặt 100-140m giữa biển gió lớn, say sóng khi đi tàu",
      "Đòi hỏi thần kinh thép, thể lực dẻo dai và không sợ độ cao"
    ],
    "coreSkills": [
      "Kỹ thuật đu dây tiếp cận trên cao (IRATA)",
      "Bảo trì cơ điện tử máy phát điện gió",
      "An toàn cứu hộ trên biển quốc tế (GWO)"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Thể dục",
      "Công nghệ"
    ],
    "entryPathways": [
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Nghề Điện gió hoặc Cơ điện tử"
      },
      {
        "level": "Đào tạo nghề",
        "description": "Chứng chỉ an toàn điện gió toàn cầu GWO + Chứng chỉ leo dây IRATA"
      }
    ],
    "entryPathway": "Cao đẳng: Cao đẳng Nghề Điện gió hoặc Cơ điện tử | Đào tạo nghề: Chứng chỉ an toàn điện gió toàn cầu GWO + Chứng chỉ leo dây IRATA",
    "trialActivity": "Xem video các kỹ thuật viên đu dây sửa chữa cánh quạt tuabin gió khổng lồ giữa biển khơi bao la.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ thuật viên đu dây bảo trì cánh quạt tuabin gió trên cao giữa biển",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-tu-van-cong-trinh-xanh-leed",
    "title": "Chuyên viên Tư vấn công trình xanh (Green Building Consultant - LEED / LOTUS)",
    "englishTitle": "Green Building & Sustainable Architecture Consultant",
    "synonyms": [
      "Chuyên gia công trình xanh",
      "LEED AP Consultant"
    ],
    "group": "nang-luong-moi-truong",
    "category": "MoiTruong",
    "categoryLabel": "Năng lượng tái tạo và môi trường",
    "riasecCodes": [
      "I",
      "C",
      "A"
    ],
    "shortSummary": "Tính toán giảm 30% điện nước cho tòa nhà cao tầng bằng kính hộp cản nhiệt Low-E, pin mặt trời và xin cấp chứng chỉ xanh quốc tế LEED.",
    "typicalTasks": [
      "Mô phỏng hiệu năng sử dụng năng lượng tổng thể của tòa nhà trên phần mềm",
      "Lựa chọn các loại sơn, keo dán có nồng độ hợp chất hữu cơ dễ bay hơi thấp (Low-VOC)",
      "Lập hồ sơ tích lũy điểm thưởng tín chỉ xanh gửi Hội đồng Công trình Xanh Hoa Kỳ (USGBC)"
    ],
    "deliverables": [
      "Hồ sơ đánh giá công trình xanh đạt chuẩn LEED Gold / Platinum",
      "Báo cáo mô phỏng năng lượng tiết kiệm điện nước"
    ],
    "toolsUsed": [
      "Phần mềm mô phỏng năng lượng DesignBuilder / eQUEST",
      "Tiêu chuẩn đánh giá LEED v4 / LOTUS"
    ],
    "workEnvironment": "Công ty tư vấn kiến trúc xanh, tập đoàn bất động sản cao cấp.",
    "difficultiesAndTradeoffs": [
      "Phải giám sát chặt chẽ hồ sơ vật liệu từ các nhà thầu thi công để không bị mất điểm chứng chỉ",
      "Cần thuyết phục chủ đầu tư chi thêm kinh phí đầu tư ban đầu vì lợi ích tiết kiệm năng lượng lâu dài"
    ],
    "coreSkills": [
      "Kiến thức vật lý kiến trúc và năng lượng công trình",
      "Nắm vững tiêu chuẩn công trình xanh quốc tế LEED",
      "Kỹ năng làm việc với các chuyên gia nước ngoài"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Tiếng Anh",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kiến trúc sư hoặc Kỹ sư Xây dựng / Môi trường + Chứng chỉ chuyên gia LEED AP hoặc LOTUS AP"
      }
    ],
    "entryPathway": "Đại học: Kiến trúc sư hoặc Kỹ sư Xây dựng / Môi trường + Chứng chỉ chuyên gia LEED AP hoặc LOTUS AP",
    "trialActivity": "Tìm hiểu tòa nhà xanh Diamond Island hoặc Capital Place Hà Nội đạt chứng chỉ LEED Platinum tiết kiệm điện nước ra sao.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Tòa nhà công trình xanh hiện đại với cây xanh bao phủ các tầng ban công",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-an-toan-buc-xa-va-hat-nhan",
    "title": "Kỹ sư An toàn bức xạ và hạt nhân ứng dụng (Radiation Safety Engineer)",
    "englishTitle": "Radiation Protection & Nuclear Safety Specialist",
    "synonyms": [
      "Kỹ sư an toàn bức xạ",
      "Radiation Safety Officer"
    ],
    "group": "nang-luong-moi-truong",
    "category": "MoiTruong",
    "categoryLabel": "Năng lượng tái tạo và môi trường",
    "riasecCodes": [
      "I",
      "R",
      "C"
    ],
    "shortSummary": "Đo đạc liều lượng chiếu xạ, kiểm tra chì che chắn tại các máy xạ trị ung thư bệnh viện và máy soi chiếu kiểm tra container cảng biển.",
    "typicalTasks": [
      "Đo đạc kiểm tra phông phóng xạ môi trường định kỳ tại các phòng xạ trị ung thư",
      "Kiểm định nguồn phóng xạ công nghiệp và cấp phép vận chuyển nguồn an toàn",
      "Lập kế hoạch ứng phó sự cố rò rỉ bức xạ theo quy chuẩn an toàn hạt nhân IAEA"
    ],
    "deliverables": [
      "Biên bản kiểm tra an toàn bức xạ phòng máy y tế",
      "Hồ sơ xin cấp phép lưu hành nguồn phóng xạ Cục An toàn bức xạ và hạt nhân"
    ],
    "toolsUsed": [
      "Máy đo liều kế bức xạ Geiger-Muller",
      "Liều kế cá nhân TLD",
      "Bộ trang phục chống nhiễm bẩn phóng xạ"
    ],
    "workEnvironment": "Bệnh viện ung bướu, viện nghiên cứu hạt nhân Đà Lạt, cảng biển có máy soi container bức xạ.",
    "difficultiesAndTradeoffs": [
      "Trách nhiệm an toàn sinh mạng trước nguy cơ nhiễm xạ vô hình không màu không mùi",
      "Tuân thủ kỷ luật an toàn bức xạ tuyệt đối, không được lơ là một giây"
    ],
    "coreSkills": [
      "Vật lý hạt nhân và tương tác bức xạ",
      "Quy chuẩn an toàn bức xạ quốc tế IAEA",
      "Kỹ năng xử lý sự cố khẩn cấp"
    ],
    "highSchoolSubjects": [
      "Vật lý",
      "Toán học",
      "Hóa học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật Hạt nhân hoặc Vật lý kỹ thuật (ĐH Khoa học Tự nhiên, ĐH Bách khoa)"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật Hạt nhân hoặc Vật lý kỹ thuật (ĐH Khoa học Tự nhiên, ĐH Bách khoa)",
    "trialActivity": "Tìm hiểu về Lò phản ứng hạt nhân Đà Lạt phục vụ nghiên cứu khoa học và sản xuất đồng vị phóng xạ chữa bệnh ung thư.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư đo đạc liều lượng bức xạ an toàn tại phòng máy xạ trị bệnh viện",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "can-bo-bao-ton-da-dang-sinh-hoc-va-rung",
    "title": "Cán bộ Bảo tồn đa dạng sinh học và Rừng (Wildlife & Forest Conservationist)",
    "englishTitle": "Forest Conservationist & Wildlife Biologist",
    "synonyms": [
      "Kiểm lâm viên bảo tồn",
      "Conservation Biologist"
    ],
    "group": "nang-luong-moi-truong",
    "category": "MoiTruong",
    "categoryLabel": "Năng lượng tái tạo và môi trường",
    "riasecCodes": [
      "R",
      "I",
      "S"
    ],
    "shortSummary": "Đặt bẫy ảnh điều tra loài vượn quý hiếm, tuần tra tháo gỡ bẫy thú và cứu hộ các cá thể tê tê, rùa biển tái thả về tự nhiên hoang dã.",
    "typicalTasks": [
      "Đi rừng tuần tra tháo gỡ các bẫy dây thép săn bắt trộm động vật hoang dã",
      "Cài đặt máy bẫy ảnh tự động (Camera trap) trên thân cây ghi lại động vật quý",
      "Chăm sóc phục hồi sức khỏe cho động vật hoang dã trước khi tái thả về rừng"
    ],
    "deliverables": [
      "Bản đồ phân bố các loài động thực vật quý hiếm trong vườn quốc gia",
      "Báo cáo đa dạng sinh học bảo tồn nguồn gen"
    ],
    "toolsUsed": [
      "Máy bẫy ảnh hồng ngoại",
      "Máy định vị GPS cầm tay",
      "Ống nhòm ngắm chim",
      "Lưới cứu hộ động vật"
    ],
    "workEnvironment": "Vườn quốc gia (Cát Tiên, Bạch Mã, Pù Mát), trung tâm cứu hộ động vật hoang dã.",
    "difficultiesAndTradeoffs": [
      "Sống nhiều ngày trong rừng sâu thiếu sóng điện thoại, đối mặt với lâm tặc săn trộm hung hãn",
      "Điều kiện sinh hoạt kham khổ trong các trạm kiểm lâm"
    ],
    "coreSkills": [
      "Kỹ năng sinh tồn và đi rừng bền bỉ",
      "Kiến thức phân loại học động thực vật hoang dã",
      "Tình yêu thiên nhiên và lòng dũng cảm bảo vệ rừng"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Địa lý",
      "Võ thuật / Thể dục"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Lâm sinh, Quản lý tài nguyên rừng hoặc Sinh học (ĐH Lâm nghiệp, ĐH Khoa học Tự nhiên)"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Lâm sinh, Quản lý tài nguyên rừng hoặc Sinh học (ĐH Lâm nghiệp, ĐH Khoa học Tự nhiên)",
    "trialActivity": "Tìm hiểu về loài Sao la - 'Kỳ lân châu Á' vô cùng quý hiếm được phát hiện lần đầu tiên tại rừng Trường Sơn Việt Nam năm 1992.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Cán bộ bảo tồn kiểm tra máy bẫy ảnh tự động theo dõi động vật trong rừng sâu",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-gia-kiem-thu-xam-nhap-hacker-mu-trang",
    "title": "Chuyên gia kiểm thử xâm nhập (Penetration Tester / Ethical Hacker)",
    "englishTitle": "Ethical Hacker & Penetration Tester",
    "synonyms": [
      "Hacker mũ trắng",
      "Penetration Tester"
    ],
    "group": "an-toan-thong-tin",
    "category": "AnNinhMang",
    "categoryLabel": "An toàn thông tin và mạng máy tính",
    "riasecCodes": [
      "I",
      "R"
    ],
    "shortSummary": "Đóng vai tin tặc tấn công vào website ngân hàng, tìm ra các lỗ hổng bảo mật zero-day và báo cáo để lập trình viên vá lỗi trước khi bị kẻ xấu khai thác.",
    "typicalTasks": [
      "Quét tìm các lỗ hổng bảo mật tiêm mã SQL Injection, XSS trên ứng dụng web",
      "Thực hiện tấn công giả lập chiếm quyền kiểm soát máy chủ doanh nghiệp",
      "Viết báo cáo đánh giá mức độ rủi ro lỗ hổng kèm hướng dẫn vá lỗi chi tiết"
    ],
    "deliverables": [
      "Báo cáo kiểm thử xâm nhập bảo mật (Penetration Test Report)",
      "Bằng chứng khai thác lỗ hổng (PoC - Proof of Concept)"
    ],
    "toolsUsed": [
      "Kali Linux",
      "Burp Suite Professional",
      "Metasploit",
      "Nmap",
      "Wireshark"
    ],
    "workEnvironment": "Công ty an ninh mạng (Bkav, Viettel Cyber Security, VNPT Cyber), trung tâm an ninh mạng ngân hàng.",
    "difficultiesAndTradeoffs": [
      "Phải liên tục cập nhật các phương thức tấn công mới của giới tội phạm mạng",
      "Ranh giới đạo đức nghề nghiệp rất mong manh: tuyệt đối không được trục lợi từ lỗ hổng tìm thấy"
    ],
    "coreSkills": [
      "Tư duy tấn công sáng tạo của hacker",
      "Hiểu sâu kiến trúc mạng và giao thức HTTP/TCP",
      "Đạo đức nghề nghiệp trung thực tuyệt đối"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Toán học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư An toàn thông tin, An ninh mạng hoặc Khoa học máy tính"
      },
      {
        "level": "Đào tạo nghề",
        "description": "Chứng chỉ an ninh mạng quốc tế CEH (Certified Ethical Hacker) hoặc OSCP"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư An toàn thông tin, An ninh mạng hoặc Khoa học máy tính | Đào tạo nghề: Chứng chỉ an ninh mạng quốc tế CEH (Certified Ethical Hacker) hoặc OSCP",
    "trialActivity": "Tìm hiểu về lỗ hổng 'SQL Injection': kẻ xấu có thể gõ một câu lệnh đặc biệt vào ô mật khẩu để đăng nhập mà không cần biết mật khẩu.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên gia an ninh mạng phân tích dòng mã nguồn phát hiện lỗ hổng bảo mật",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-giam-sat-soc-an-ninh-mang",
    "title": "Kỹ sư Giám sát an ninh mạng (SOC Analyst - Level 1 & 2)",
    "englishTitle": "Security Operations Center (SOC) Analyst",
    "synonyms": [
      "Kỹ sư SOC",
      "SOC Analyst"
    ],
    "group": "an-toan-thong-tin",
    "category": "AnNinhMang",
    "categoryLabel": "An toàn thông tin và mạng máy tính",
    "riasecCodes": [
      "C",
      "I",
      "R"
    ],
    "shortSummary": "Theo dõi màn hình cảnh báo tấn công mạng 24/7, phát hiện sớm các cuộc tấn công từ chối dịch vụ DDoS và chặn đứng virus xâm nhập.",
    "typicalTasks": [
      "Phân tích các cảnh báo bất thường từ hệ thống quản lý sự kiện an ninh mạng SIEM",
      "Xác định các cuộc tấn công dò quét mật khẩu Brute-force hoặc lây nhiễm mã độc",
      "Khóa địa chỉ IP tấn công trên tường lửa và cô lập các máy tính bị nhiễm virus ra khỏi mạng"
    ],
    "deliverables": [
      "Báo cáo nhật ký giám sát sự cố an ninh mạng ca trực",
      "Biên bản xử lý cô lập mã độc thành công"
    ],
    "toolsUsed": [
      "Hệ thống SIEM (Splunk, IBM QRadar, Microsoft Sentinel)",
      "Tường lửa thế hệ mới Fortinet / Palo Alto",
      "Wireshark"
    ],
    "workEnvironment": "Trung tâm điều hành an ninh mạng SOC các tập đoàn lớn, ngân hàng số.",
    "difficultiesAndTradeoffs": [
      "Trực ca đêm theo dõi màn hình dễ gây căng thẳng thị giác và mệt mỏi",
      "Áp lực phản ứng trong vòng 5-10 phút khi có cảnh báo đỏ cuộc tấn công lớn"
    ],
    "coreSkills": [
      "Khả năng đọc hiểu gói tin mạng và nhật ký hệ thống (Log analysis)",
      "Tư duy phản ứng sự cố nhanh nhạy",
      "Kỷ luật trực ca nghiêm túc"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Vật lý",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư An toàn thông tin hoặc Kỹ thuật Mạng máy tính"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Quản trị An ninh mạng"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư An toàn thông tin hoặc Kỹ thuật Mạng máy tính | Cao đẳng: Cao đẳng Quản trị An ninh mạng",
    "trialActivity": "Tìm hiểu cuộc tấn công từ chối dịch vụ DDoS: hàng triệu máy tính ma cùng truy cập một trang web để làm cho trang web bị sập.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Màn hình trung tâm giám sát an ninh mạng SOC với các bản đồ tấn công trực tiếp",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-bao-mat-dam-may-cloud-security",
    "title": "Kỹ sư Bảo mật điện toán đám mây (Cloud Security Engineer)",
    "englishTitle": "Cloud Security Architecture Engineer",
    "synonyms": [
      "Kỹ sư bảo mật Cloud",
      "Cloud Security Specialist"
    ],
    "group": "an-toan-thong-tin",
    "category": "AnNinhMang",
    "categoryLabel": "An toàn thông tin và mạng máy tính",
    "riasecCodes": [
      "I",
      "R",
      "C"
    ],
    "shortSummary": "Thiết lập chính sách phân quyền truy cập (IAM), mã hóa dữ liệu trên AWS, Google Cloud và ngăn chặn rò rỉ dữ liệu khách hàng lên Internet.",
    "typicalTasks": [
      "Cấu hình nguyên tắc đặc quyền tối thiểu (Least Privilege) cho tài khoản nhân viên",
      "Mã hóa toàn bộ dữ liệu khi lưu trữ (At-rest) và khi truyền tải (In-transit)",
      "Quét tự động các lỗ hổng cấu hình sai trên hạ tầng đám mây"
    ],
    "deliverables": [
      "Kiến trúc bảo mật đám mây đạt chuẩn CIS Benchmark",
      "Chính sách phân quyền truy cập IAM an toàn"
    ],
    "toolsUsed": [
      "AWS Identity and Access Management (IAM)",
      "HashiCorp Vault",
      "Prisma Cloud",
      "Terraform"
    ],
    "workEnvironment": "Công ty công nghệ đám mây, các ngân hàng và kỳ lân công nghệ.",
    "difficultiesAndTradeoffs": [
      "Hạ tầng đám mây phức tạp với hàng trăm dịch vụ liên kết với nhau",
      "Chỉ một cấu hình sai sót mở công khai thùng chứa dữ liệu S3 có thể làm lộ thông tin hàng triệu người dùng"
    ],
    "coreSkills": [
      "Kiến trúc bảo mật đám mây đa nền tảng (AWS, Azure, GCP)",
      "Mã hóa dữ liệu và quản lý khóa mật mã",
      "Tự động hóa kiểm tra tuân thủ bảo mật"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Toán học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư An toàn thông tin hoặc Khoa học máy tính + Chứng chỉ AWS Certified Security Specialty"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư An toàn thông tin hoặc Khoa học máy tính + Chứng chỉ AWS Certified Security Specialty",
    "trialActivity": "Tìm hiểu tại sao ngày nay các công ty lớn không tự mua máy chủ đặt dưới tầng hầm nữa mà đưa hết dữ liệu lên đám mây.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư bảo mật cấu hình tường lửa và mã hóa trên nền tảng đám mây",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-gia-dieu-tra-dau-vet-so-forensics",
    "title": "Chuyên gia Điều tra dấu vết số (Digital Forensics & Incident Response - DFIR)",
    "englishTitle": "Digital Forensics & Incident Response Specialist",
    "synonyms": [
      "Điều tra viên tội phạm mạng",
      "Digital Forensics Specialist"
    ],
    "group": "an-toan-thong-tin",
    "category": "AnNinhMang",
    "categoryLabel": "An toàn thông tin và mạng máy tính",
    "riasecCodes": [
      "I",
      "C",
      "R"
    ],
    "shortSummary": "Thu thập ổ cứng máy tính bị tấn công, khôi phục dữ liệu đã bị xóa và truy tìm dấu vết địa chỉ IP của kẻ tống tiền qua mạng.",
    "typicalTasks": [
      "Tạo bản sao hình ảnh số nguyên vẹn của ổ cứng vật lý (Forensic Image)",
      "Khôi phục các tệp tin, nhật ký tin nhắn và lịch sử duyệt web đã bị kẻ gian xóa",
      "Xây dựng lại dòng thời gian vụ tấn công (Timeline reconstruction) phục vụ khởi tố vụ án"
    ],
    "deliverables": [
      "Báo cáo giám định kỹ thuật số phục vụ cơ quan điều tra",
      "Bằng chứng số được bảo toàn chuỗi hành trình (Chain of Custody)"
    ],
    "toolsUsed": [
      "Phần mềm EnCase Forensic",
      "FTK Imager",
      "Autopsy",
      "Bộ chặn ghi ổ cứng phần cứng"
    ],
    "workEnvironment": "Cơ quan an ninh mạng Bộ Công an (A05), các công ty ứng cứu sự cố bảo mật chuyên nghiệp.",
    "difficultiesAndTradeoffs": [
      "Làm việc với các vụ án lừa đảo tài chính tinh vi và các băng nhóm tội phạm xuyên quốc gia",
      "Phải tuân thủ quy trình bảo toàn bằng chứng tố tụng nghiêm ngặt, không làm thay đổi 1 bit dữ liệu"
    ],
    "coreSkills": [
      "Kỹ năng phục hồi dữ liệu số chuyên sâu",
      "Hiểu biết cấu trúc hệ thống tệp NTFS/EXT4 và bộ nhớ RAM",
      "Tư duy điều tra suy luận logic"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Giáo dục kinh tế và pháp luật",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư An toàn thông tin, Kỹ thuật Máy tính hoặc Khoa học Điều tra tội phạm"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư An toàn thông tin, Kỹ thuật Máy tính hoặc Khoa học Điều tra tội phạm",
    "trialActivity": "Tìm hiểu tại sao khi em bấm 'Xóa' một bức ảnh trên máy tính thì bức ảnh đó vẫn chưa thực sự biến mất khỏi ổ cứng.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên gia điều tra dấu vết số trích xuất dữ liệu ổ cứng phục vụ phá án",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-an-toan-mat-ma-va-blockchain",
    "title": "Kỹ sư Mật mã học và An toàn Blockchain (Cryptography & Blockchain Security Engineer)",
    "englishTitle": "Cryptography & Smart Contract Security Auditor",
    "synonyms": [
      "Kỹ sư mật mã",
      "Smart Contract Auditor"
    ],
    "group": "an-toan-thong-tin",
    "category": "AnNinhMang",
    "categoryLabel": "An toàn thông tin và mạng máy tính",
    "riasecCodes": [
      "I",
      "R"
    ],
    "shortSummary": "Nghiên cứu các thuật toán mã hóa bất đối xứng RSA, ECC, kiểm toán mã nguồn hợp đồng thông minh (Smart Contract) chống rút trộm tiền mã hóa.",
    "typicalTasks": [
      "Kiểm tra lỗi Re-entrancy và lỗi tràn số trong hợp đồng thông minh viết bằng Solidity",
      "Ứng dụng các thuật toán mật mã không tiết lộ bằng chứng (Zero-Knowledge Proof)",
      "Thiết kế chữ ký số đa chữ ký (Multi-sig) bảo vệ ví kho lưu trữ tài sản số"
    ],
    "deliverables": [
      "Báo cáo kiểm toán hợp đồng thông minh Smart Contract Audit",
      "Module mã hóa dữ liệu bảo mật cao"
    ],
    "toolsUsed": [
      "Remix IDE",
      "Slither",
      "Foundry",
      "Thư viện mật mã OpenZeppelin"
    ],
    "workEnvironment": "Các công ty công nghệ Blockchain, dự án tài chính phi tập trung DeFi, viện nghiên cứu mật mã.",
    "difficultiesAndTradeoffs": [
      "Hợp đồng thông minh khi đã đưa lên mạng lưới blockchain thì không thể sửa lại được, một lỗi nhỏ bị hacker khai thác mất sạch tiền",
      "Đòi hỏi nền tảng toán học trừu tượng rất cao"
    ],
    "coreSkills": [
      "Toán học mật mã và đại số trừu tượng",
      "Lập trình hợp đồng thông minh Solidity / Rust",
      "Tư duy phân tích lỗi logic hợp đồng"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Tin học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Toán - Tin, An toàn thông tin hoặc Khoa học máy tính"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Toán - Tin, An toàn thông tin hoặc Khoa học máy tính",
    "trialActivity": "Tìm hiểu về chiếc khóa công khai và khóa bí mật: làm sao hai người có thể gửi thư mật cho nhau mà không sợ ai đọc trộm trên đường truyền.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Mạng lưới kết nối chuỗi khối blockchain và công nghệ mã hóa số",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-kiem-toan-tuan-thu-iso-27001",
    "title": "Chuyên viên Kiểm toán tuân thủ An toàn thông tin (IT Compliance & ISO 27001 Lead Auditor)",
    "englishTitle": "IT Security Compliance & Risk Auditor",
    "synonyms": [
      "Chuyên viên tuân thủ an ninh mạng",
      "ISO 27001 Auditor"
    ],
    "group": "an-toan-thong-tin",
    "category": "AnNinhMang",
    "categoryLabel": "An toàn thông tin và mạng máy tính",
    "riasecCodes": [
      "C",
      "I"
    ],
    "shortSummary": "Đánh giá hệ thống quản lý an toàn thông tin ISMS theo chuẩn ISO 27001, luật an ninh mạng và bảo vệ dữ liệu cá nhân Nghị định 13.",
    "typicalTasks": [
      "Phỏng vấn các phòng ban về quy trình đặt mật khẩu và phân quyền tiếp cận dữ liệu",
      "Kiểm tra hệ thống sao lưu dữ liệu dự phòng và kế hoạch phục hồi sau thảm họa (DRP)",
      "Soạn thảo hồ sơ đánh giá và cấp chứng chỉ chuẩn an toàn thông tin ISO 27001"
    ],
    "deliverables": [
      "Báo cáo đánh giá sự phù hợp hệ thống an toàn thông tin",
      "Kế hoạch khắc phục các điểm không phù hợp (CAPA)"
    ],
    "toolsUsed": [
      "Tiêu chuẩn quốc tế ISO/IEC 27001:2022",
      "Phần mềm quản trị tuân thủ GRC",
      "Bảng kiểm đánh giá an toàn thông tin"
    ],
    "workEnvironment": "Các tổ chức chứng nhận quốc tế (BSI, TÜV Rheinland), khối tuân thủ các ngân hàng.",
    "difficultiesAndTradeoffs": [
      "Phải kiểm tra kỹ lưỡng hàng trăm quy trình và bằng chứng văn bản",
      "Đòi hỏi sự am hiểu sâu sắc cả về công nghệ lẫn văn bản pháp luật"
    ],
    "coreSkills": [
      "Nắm vững tiêu chuẩn an toàn thông tin ISO 27001 và luật an ninh mạng",
      "Kỹ năng phỏng vấn đánh giá bằng chứng",
      "Tính kỷ luật và chính trực"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Tin học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị thông tin, An toàn thông tin hoặc Luật"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị thông tin, An toàn thông tin hoặc Luật",
    "trialActivity": "Tìm hiểu về Nghị định 13 bảo vệ dữ liệu cá nhân: tại sao các ứng dụng không được tự ý chia sẻ số điện thoại của em cho bên thứ ba.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên kiểm toán rà soát quy trình tuân thủ an toàn dữ liệu khách hàng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "quan-tri-vien-he-thong-mang-network-admin",
    "title": "Quản trị viên Hệ thống mạng máy tính (Network & Systems Administrator)",
    "englishTitle": "Network Infrastructure & Systems Administrator",
    "synonyms": [
      "Quản trị mạng",
      "Network Admin"
    ],
    "group": "an-toan-thong-tin",
    "category": "AnNinhMang",
    "categoryLabel": "An toàn thông tin và mạng máy tính",
    "riasecCodes": [
      "R",
      "C"
    ],
    "shortSummary": "Bấm đầu cáp mạng, cấu hình Switch chia mạng ảo VLAN, Router định tuyến kết nối Internet và bảo đảm mạng wifi văn phòng luôn thông suốt.",
    "typicalTasks": [
      "Cấu hình bộ định tuyến Router và bộ chuyển mạch Switch Cisco / MikroTik",
      "Thiết lập mạng không dây Wi-Fi phủ sóng toàn bộ văn phòng tòa nhà",
      "Giám sát lưu lượng băng thông và khắc phục sự cố đứt cáp quang, nghẽn mạng"
    ],
    "deliverables": [
      "Sơ đồ cấu trúc mạng mạng nội bộ (Network Topology)",
      "Hồ sơ cấu hình thiết bị mạng chuẩn hóa"
    ],
    "toolsUsed": [
      "Thiết bị định tuyến Router / Switch Cisco",
      "Phần mềm giả lập mạng Cisco Packet Tracer",
      "Kìm bấm mạng và máy đo thông mạng"
    ],
    "workEnvironment": "Phòng máy chủ IT nội bộ của các trường học, bệnh viện, doanh nghiệp.",
    "difficultiesAndTradeoffs": [
      "Khi mất mạng internet toàn công ty ngừng làm việc, áp lực phải sửa xong trong vài phút",
      "Luồn dây cáp mạng bò trườn trong trần thạch cao bụi bặm"
    ],
    "coreSkills": [
      "Kỹ năng bấm cáp và đi dây mạng gọn gàng",
      "Hiểu sâu mô hình mạng OSI và định địa chỉ IP/Subnet",
      "Chuẩn đoán sự cố mạng nhanh chóng"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Vật lý",
      "Công nghệ"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Mạng máy tính & Truyền thông dữ liệu"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Quản trị mạng máy tính"
      },
      {
        "level": "Đào tạo nghề",
        "description": "Chứng chỉ quản trị mạng quốc tế Cisco CCNA"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Mạng máy tính & Truyền thông dữ liệu | Cao đẳng: Cao đẳng Quản trị mạng máy tính | Đào tạo nghề: Chứng chỉ quản trị mạng quốc tế Cisco CCNA",
    "trialActivity": "Tìm hiểu hộp modem Wi-Fi ở nhà: sợi dây cáp quang mỏng dính cắm vào cổng màu xanh truyền dữ liệu bằng ánh sáng như thế nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Quản trị viên cắm dây cáp mạng vào tủ rack máy chủ trung tâm",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-phan-tich-ma-doc-threat-intel",
    "title": "Kỹ sư Phân tích mã độc và Mối đe dọa (Malware Reverse Engineer / Threat Intelligence)",
    "englishTitle": "Malware Analyst & Threat Intelligence Specialist",
    "synonyms": [
      "Kỹ sư phân tích mã độc",
      "Malware Analyst"
    ],
    "group": "an-toan-thong-tin",
    "category": "AnNinhMang",
    "categoryLabel": "An toàn thông tin và mạng máy tính",
    "riasecCodes": [
      "I",
      "R"
    ],
    "shortSummary": "Dịch ngược mã nhị phân của virus, bẻ khóa các dòng mã độc tống tiền (Ransomware) và tìm ra chìa khóa giải mã cứu dữ liệu cho nạn nhân.",
    "typicalTasks": [
      "Chạy mẫu virus trong môi trường hộp cát cách ly an toàn (Sandbox)",
      "Dịch ngược mã máy bằng phần mềm IDA Pro / Ghidra để tìm cơ chế hoạt động",
      "Trích xuất các dấu hiệu chỉ điểm xâm nhập (IoC) để cập nhật cho phần mềm diệt virus"
    ],
    "deliverables": [
      "Báo cáo phân tích hành vi mã độc chuyên sâu",
      "Công cụ bẻ khóa giải cứu dữ liệu bị mã hóa độc hại"
    ],
    "toolsUsed": [
      "IDA Pro",
      "Ghidra",
      "x64dbg",
      "Môi trường máy ảo Sandbox Flare-VM"
    ],
    "workEnvironment": "Phòng R&D mã độc các tập đoàn bảo mật, trung tâm điều phối ứng cứu khẩn cấp máy tính quốc gia VNCERT.",
    "difficultiesAndTradeoffs": [
      "Nguy cơ virus lây lan ra máy thật nếu sơ suất phá vỡ môi trường cách ly",
      "Mã độc hiện đại được trang bị nhiều lớp kỹ thuật né tránh và chống dịch ngược phức tạp"
    ],
    "coreSkills": [
      "Ngôn ngữ lập trình hợp ngữ Assembly và C",
      "Kỹ năng phân tích dịch ngược mã máy (Reverse Engineering)",
      "Tư duy điều tra logic"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Toán học",
      "Tiếng Anh"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư An toàn thông tin, Khoa học máy tính hoặc Toán - Tin"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư An toàn thông tin, Khoa học máy tính hoặc Toán - Tin",
    "trialActivity": "Tìm hiểu về virus 'Mã độc tống tiền' (Ransomware): khi máy tính bị nhiễm thì toàn bộ tài liệu bị khóa và đòi nợ bằng tiền ảo.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư phân tích mã độc dịch ngược mã máy trên phần mềm Ghidra",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "ky-su-devsecops",
    "title": "Kỹ sư DevSecOps (Development, Security & Operations Engineer)",
    "englishTitle": "DevSecOps Pipeline Engineer",
    "synonyms": [
      "Kỹ sư DevSecOps",
      "Security Automation Engineer"
    ],
    "group": "an-toan-thong-tin",
    "category": "AnNinhMang",
    "categoryLabel": "An toàn thông tin và mạng máy tính",
    "riasecCodes": [
      "R",
      "I",
      "C"
    ],
    "shortSummary": "Tích hợp các công cụ quét mã độc tự động vào đường ống đóng gói phần mềm CI/CD, chặn đứng lỗi bảo mật ngay từ khi lập trình viên gõ phím.",
    "typicalTasks": [
      "Cài đặt công cụ quét bảo mật mã nguồn tĩnh (SAST) tự động phát hiện mật khẩu bị lộ trong code",
      "Quét lỗ hổng các thư viện nguồn mở phụ thuộc bằng Dependency-Track",
      "Tự động hóa chặn đứng việc xuất bản phần mềm nếu còn chứa lỗi bảo mật nghiêm trọng"
    ],
    "deliverables": [
      "Đường ống CI/CD tích hợp quét bảo mật tự động",
      "Bảng chỉ số đo lường nợ kỹ thuật bảo mật của dự án"
    ],
    "toolsUsed": [
      "SonarQube",
      "Snyk",
      "GitLab CI",
      "OWASP ZAP",
      "Trivy"
    ],
    "workEnvironment": "Công ty phần mềm, các ngân hàng công nghệ, tập đoàn đa quốc gia.",
    "difficultiesAndTradeoffs": [
      "Cần dung hòa giữa tốc độ ra mắt tính năng mới của lập trình viên và sự an toàn của bảo mật",
      "Tránh tạo ra quá nhiều cảnh báo giả làm chậm tiến độ làm việc"
    ],
    "coreSkills": [
      "Kỹ năng tích hợp CI/CD tự động hóa",
      "Hiểu biết các tiêu chuẩn an toàn phần mềm OWASP Top 10",
      "Khả năng phối hợp giữa lập trình và bảo mật"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Tiếng Anh",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Kỹ sư Kỹ thuật phần mềm hoặc An toàn thông tin"
      }
    ],
    "entryPathway": "Đại học: Kỹ sư Kỹ thuật phần mềm hoặc An toàn thông tin",
    "trialActivity": "Tìm hiểu khái niệm 'Shift-Left Security': tại sao sửa lỗi bảo mật khi đang viết mã lại rẻ hơn gấp trăm lần so với sửa sau khi phần mềm đã bán ra thị trường.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Kỹ sư DevSecOps tự động hóa kiểm tra bảo mật trong đường ống CI/CD",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-dao-tao-nhan-thuc-an-ninh-mang",
    "title": "Chuyên viên Đào tạo nhận thức An ninh mạng (Cybersecurity Awareness Specialist)",
    "englishTitle": "Security Awareness & Phishing Simulation Specialist",
    "synonyms": [
      "Chuyên viên an toàn nhận thức",
      "Security Awareness Trainer"
    ],
    "group": "an-toan-thong-tin",
    "category": "AnNinhMang",
    "categoryLabel": "An toàn thông tin và mạng máy tính",
    "riasecCodes": [
      "S",
      "E",
      "C"
    ],
    "shortSummary": "Gửi các email lừa đảo giả lập (Phishing test), huấn luyện nhân viên không bấm vào đường link lạ và bảo vệ mật khẩu cơ quan an toàn.",
    "typicalTasks": [
      "Thiết kế các kịch bản email giả mạo lừa đảo tinh vi để kiểm tra phản xạ của nhân viên công ty",
      "Thống kê tỷ lệ nhân viên bị mắc bẫy bấm link và tổ chức lớp tập huấn an toàn lại",
      "Xây dựng các video hoạt hình ngắn vui nhộn chia sẻ mẹo đặt mật khẩu an toàn"
    ],
    "deliverables": [
      "Chiến dịch diễn tập lừa đảo giả lập (Phishing Simulation Campaign)",
      "Báo cáo cải thiện chỉ số văn hóa bảo mật toàn doanh nghiệp"
    ],
    "toolsUsed": [
      "Nền tảng đào tạo bảo mật KnowBe4",
      "Phần mềm tạo bài giảng tương tác Canva / Vyond"
    ],
    "workEnvironment": "Khối quản trị an ninh mạng các ngân hàng lớn, cơ quan nhà nước, tập đoàn viễn thông.",
    "difficultiesAndTradeoffs": [
      "Nhiều nhân viên có tâm lý chủ quan cho rằng an ninh mạng là việc của bộ phận IT",
      "Cần truyền đạt kiến thức kỹ thuật khô khan thành câu chuyện sinh động, dễ nhớ"
    ],
    "coreSkills": [
      "Kỹ năng sư phạm và truyền thông thu hút",
      "Hiểu biết tâm lý hành vi con người khi bị tấn công phi kỹ thuật (Social Engineering)",
      "Sự kiên nhẫn và đồng cảm"
    ],
    "highSchoolSubjects": [
      "Tâm lý học",
      "Tin học",
      "Ngữ văn",
      "Giáo dục công dân"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Truyền thông, Công nghệ thông tin hoặc Tâm lý học"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Truyền thông, Công nghệ thông tin hoặc Tâm lý học",
    "trialActivity": "Quan sát một tin nhắn mạo danh ngân hàng gửi đến điện thoại và tìm xem tên miền website trong tin nhắn có gì bất thường so với trang web chính thức.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên hướng dẫn nhân viên cách nhận biết email lừa đảo mạo danh",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "quan-ly-gian-hang-san-tmdt",
    "title": "Quản lý Gian hàng sàn Thương mại điện tử (E-commerce Store Manager)",
    "englishTitle": "E-commerce Marketplace Store Manager",
    "synonyms": [
      "Quản lý gian hàng Shopee/Lazada",
      "E-commerce Manager"
    ],
    "group": "thuong-mai-dien-tu",
    "category": "ThuongMai",
    "categoryLabel": "Thương mại điện tử và bán lẻ hiện đại",
    "riasecCodes": [
      "E",
      "C"
    ],
    "shortSummary": "Trang trí gian hàng bắt mắt, đăng ký các gói khuyến mãi Flash Sale, tối ưu hóa từ khóa và thúc đẩy hàng nghìn đơn hàng mỗi ngày trên Shopee, TikTok Shop.",
    "typicalTasks": [
      "Thiết kế banner và tối ưu hóa hình ảnh sản phẩm chuẩn SEO sàn",
      "Đăng ký tham gia các chiến dịch Siêu Sale hàng tháng (Mega Campaign)",
      "Quản lý tồn kho liên sàn và điều phối nhân viên đóng gói chuyển hàng kịp giờ"
    ],
    "deliverables": [
      "Doanh thu gian hàng sàn TMĐT tăng trưởng",
      "Chỉ số đánh giá gian hàng đạt 4.9 sao chuẩn Shop Yêu Thích"
    ],
    "toolsUsed": [
      "Shopee Seller Centre",
      "TikTok Shop Seller Center",
      "Phần mềm quản lý bán hàng đa kênh Sapo / KiotViet"
    ],
    "workEnvironment": "Công ty bán lẻ trực tuyến, các thương hiệu kinh doanh đa sàn.",
    "difficultiesAndTradeoffs": [
      "Thức trắng đêm trực chiến vào các dịp sale lớn như 11/11 hay 12/12",
      "Thuật toán hiển thị và chính sách phí sàn thay đổi liên tục"
    ],
    "coreSkills": [
      "Kỹ năng tối ưu hóa công cụ tìm kiếm trên sàn TMĐT",
      "Quản trị vận hành đơn hàng và tồn kho",
      "Tư duy định giá và khuyến mãi thông minh"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Toán học",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Thương mại điện tử, Marketing hoặc Quản trị kinh doanh"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Thương mại điện tử"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Thương mại điện tử, Marketing hoặc Quản trị kinh doanh | Cao đẳng: Cao đẳng Thương mại điện tử",
    "trialActivity": "Vào một gian hàng Mall trên Shopee xem họ thiết kế banner hình ảnh sản phẩm đẹp mắt và rõ ràng như thế nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Quản lý gian hàng thương mại điện tử theo dõi đơn hàng trên máy tính",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-livestream-ban-hang",
    "title": "Chuyên viên Livestream bán hàng chuyên nghiệp (Live Commerce Host / Streamer)",
    "englishTitle": "Live Commerce Professional Host",
    "synonyms": [
      "Streamer bán hàng",
      "Live Commerce Host"
    ],
    "group": "thuong-mai-dien-tu",
    "category": "ThuongMai",
    "categoryLabel": "Thương mại điện tử và bán lẻ hiện đại",
    "riasecCodes": [
      "E",
      "A",
      "S"
    ],
    "shortSummary": "Lên sóng trực tiếp thử đồ, giới thiệu tính năng sản phẩm với năng lượng tràn đầy, giải đáp thắc mắc và chốt hàng nghìn đơn hàng trong mỗi phiên live.",
    "typicalTasks": [
      "Nắm vững kịch bản sản phẩm, giá bán ưu đãi và quà tặng của từng phiên live",
      "Nói liên tục trước ống kính với năng lượng tích cực và cuốn hút",
      "Kêu gọi người xem bấm vào giỏ hàng và đếm ngược số lượng tồn kho kích thích chốt đơn"
    ],
    "deliverables": [
      "Doanh số phiên livestream đạt mục tiêu nghìn đơn",
      "Tỷ lệ giữ chân người xem phòng live ổn định"
    ],
    "toolsUsed": [
      "Phòng livestream cách âm chuyên nghiệp",
      "Hệ thống đèn chiếu sáng studio chuyên sâu",
      "Màn hình nhắc kịch bản"
    ],
    "workEnvironment": "Studio livestream của các nhãn hàng, công ty MCN đào tạo livestreamer.",
    "difficultiesAndTradeoffs": [
      "Nói to liên tục suốt 3-4 tiếng mỗi phiên live rất hại giọng và khản cổ",
      "Áp lực duy trì mắt xem và doanh thu bán hàng theo từng phút"
    ],
    "coreSkills": [
      "Năng khiếu hoạt ngôn và biểu cảm tự nhiên trước ống kính",
      "Khả năng ứng biến tình huống nhanh nhạy",
      "Hiểu sâu tâm lý khách hàng mua sắm online"
    ],
    "highSchoolSubjects": [
      "Ngữ văn",
      "Tâm lý học",
      "Mỹ thuật"
    ],
    "entryPathways": [
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Nghệ thuật, Truyền thông hoặc Tự do thực hành xây dựng thương hiệu cá nhân"
      }
    ],
    "entryPathway": "Cao đẳng: Cao đẳng Nghệ thuật, Truyền thông hoặc Tự do thực hành xây dựng thương hiệu cá nhân",
    "trialActivity": "Xem một phiên livestream bán hàng nổi tiếng trên TikTok và quan sát cách người bán hàng tạo cảm giác thôi thúc người mua bấm vào giỏ hàng.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Streamer bán hàng tươi cười tương tác trước ống kính phòng live",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-toi-uu-hoa-chuyen-doi-cro",
    "title": "Chuyên viên Tối ưu hóa tỷ lệ chuyển đổi (Conversion Rate Optimization - CRO)",
    "englishTitle": "Conversion Rate Optimization (CRO) Specialist",
    "synonyms": [
      "Chuyên viên CRO",
      "CRO Specialist"
    ],
    "group": "thuong-mai-dien-tu",
    "category": "ThuongMai",
    "categoryLabel": "Thương mại điện tử và bán lẻ hiện đại",
    "riasecCodes": [
      "I",
      "C",
      "A"
    ],
    "shortSummary": "Dùng bản đồ nhiệt (Heatmap) theo dõi hành vi rê chuột của người mua, tinh chỉnh nút bấm thanh toán giúp tăng gấp đôi doanh số bán hàng trên website.",
    "typicalTasks": [
      "Phân tích bản đồ nhiệt rê chuột và bản đồ cuộn trang (Scrollmap)",
      "Phát hiện các điểm tắc nghẽn khiến khách hàng bỏ dở giỏ hàng không thanh toán",
      "Thiết kế và chạy thử nghiệm A/B Testing giữa hai phiên bản trang thanh toán"
    ],
    "deliverables": [
      "Báo cáo phân tích hành vi người dùng trên website",
      "Tỷ lệ chuyển đổi đơn hàng tăng trưởng vượt bậc"
    ],
    "toolsUsed": [
      "Hotjar / Microsoft Clarity",
      "Google Optimize",
      "Google Analytics 4",
      "Figma"
    ],
    "workEnvironment": "Doanh nghiệp bán lẻ trực tuyến quy mô lớn, công ty du lịch đặt phòng trực tuyến.",
    "difficultiesAndTradeoffs": [
      "Cần kiểm tra kỹ lưỡng các số liệu thống kê để tránh kết luận sai lầm",
      "Phải kiên trì thử nghiệm nhiều phương án nhỏ mới tìm ra phương án tối ưu"
    ],
    "coreSkills": [
      "Tư duy thực nghiệm khoa học A/B Testing",
      "Tâm lý học hành vi người tiêu dùng trên giao diện số",
      "Phân tích dữ liệu web analytics"
    ],
    "highSchoolSubjects": [
      "Toán học (Thống kê)",
      "Tin học",
      "Tâm lý học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Thương mại điện tử, Hệ thống thông tin hoặc Khoa học dữ liệu"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Thương mại điện tử, Hệ thống thông tin hoặc Khoa học dữ liệu",
    "trialActivity": "Tìm hiểu về nút 'Mua ngay' 1 chạm của Amazon: chỉ cần bấm 1 nút là hàng tự động được đặt mua và trừ tiền mà không cần điền lại địa chỉ.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên CRO phân tích bản đồ nhiệt click chuột của người dùng trên website",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-tiep-thi-lien-ket-affiliate",
    "title": "Chuyên viên Tiếp thị liên kết (Affiliate Marketing Specialist)",
    "englishTitle": "Affiliate Network & Partnership Specialist",
    "synonyms": [
      "Chuyên viên Affiliate",
      "Affiliate Manager"
    ],
    "group": "thuong-mai-dien-tu",
    "category": "ThuongMai",
    "categoryLabel": "Thương mại điện tử và bán lẻ hiện đại",
    "riasecCodes": [
      "E",
      "C"
    ],
    "shortSummary": "Tuyển dụng và hợp tác với hàng trăm nhà sáng tạo nội dung (KOL / KOC), cung cấp link tiếp thị liên kết và chia hoa hồng theo từng đơn hàng bán thành công.",
    "typicalTasks": [
      "Tìm kiếm và ký kết hợp đồng hợp tác với các nhà sáng tạo nội dung tiềm năng",
      "Cung cấp mẫu thử sản phẩm (Sample) và mã giảm giá độc quyền cho từng KOC",
      "Kiểm soát gian lận đơn ảo và thanh toán hoa hồng minh bạch hàng tháng"
    ],
    "deliverables": [
      "Mạng lưới đối tác KOC tiếp thị liên kết rộng khắp",
      "Doanh thu bán hàng từ kênh Affiliate tăng trưởng"
    ],
    "toolsUsed": [
      "Hệ thống mạng lưới Affiliate (AccessTrade, Ecomobi)",
      "TikTok Shop Affiliate Centre",
      "Bảng theo dõi hoa hồng Excel"
    ],
    "workEnvironment": "Các nhãn hàng thời trang, mỹ phẩm, sàn thương mại điện tử.",
    "difficultiesAndTradeoffs": [
      "Phải liên tục theo dõi ngăn chặn các chiêu trò gian lận đơn ảo để trục lợi hoa hồng",
      "Áp lực tìm kiếm và giữ chân những KOC có sức ảnh hưởng lớn"
    ],
    "coreSkills": [
      "Kỹ năng xây dựng quan hệ đối tác",
      "Quản trị hệ thống tiếp thị liên kết",
      "Kỹ năng đàm phán tỷ lệ hoa hồng"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Tiếng Anh",
      "Ngữ văn"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Marketing, Thương mại điện tử hoặc Quản trị kinh doanh"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Marketing, Thương mại điện tử hoặc Quản trị kinh doanh",
    "trialActivity": "Xem phần mô tả dưới một video review đồ công nghệ trên YouTube và tìm xem có đường link mua hàng kèm mã giảm giá không.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên trao đổi hợp đồng hợp tác quảng bá sản phẩm cùng KOC",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "quan-ly-chuoi-cua-hang-ban-le",
    "title": "Quản lý Cụm cửa hàng bán lẻ tiện lợi (Retail Area Manager)",
    "englishTitle": "Multi-Store Retail Area Manager",
    "synonyms": [
      "Quản lý khu vực bán lẻ",
      "Area Manager"
    ],
    "group": "thuong-mai-dien-tu",
    "category": "ThuongMai",
    "categoryLabel": "Thương mại điện tử và bán lẻ hiện đại",
    "riasecCodes": [
      "E",
      "C",
      "R"
    ],
    "shortSummary": "Giám sát 10-15 cửa hàng tiện lợi hoặc siêu thị mini, kiểm soát doanh số, độ tươi ngon của thực phẩm và dịch vụ khách hàng trong khu vực.",
    "typicalTasks": [
      "Đi kiểm tra đột xuất các cửa hàng trong cụm quản lý",
      "Đào tạo cửa hàng trưởng về kỹ năng quản lý thất thoát và sắp xếp hàng hóa trưng bày",
      "Phân tích doanh thu từng cửa hàng và điều động nhân sự linh hoạt giữa các điểm bán"
    ],
    "deliverables": [
      "Báo cáo doanh số bán lẻ cụm cửa hàng hàng tuần",
      "Tỷ lệ hao hụt hàng hóa giảm dưới mức cho phép"
    ],
    "toolsUsed": [
      "Phần mềm quản lý bán lẻ POS",
      "Bảng phân tích P&L từng cửa hàng",
      "Checklist kiểm tra tiêu chuẩn cửa hàng"
    ],
    "workEnvironment": "Chuỗi cửa hàng tiện lợi (WinMart+, Circle K, 7-Eleven, Bách Hóa Xanh), di chuyển liên tục giữa các điểm bán.",
    "difficultiesAndTradeoffs": [
      "Di chuyển liên tục ngoài đường giữa các cửa hàng bất kể nắng mưa",
      "Chịu trách nhiệm trực tiếp về tình trạng thất thoát hàng hóa và doanh số khu vực"
    ],
    "coreSkills": [
      "Kỹ năng lãnh đạo và quản lý vận hành bán lẻ",
      "Khả năng phân tích số liệu tài chính cửa hàng",
      "Xử lý khéo léo các khiếu nại của khách hàng"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị kinh doanh hoặc Thương mại"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Kinh doanh bán lẻ"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị kinh doanh hoặc Thương mại | Cao đẳng: Cao đẳng Kinh doanh bán lẻ",
    "trialActivity": "Vào một cửa hàng tiện lợi 24/7 và quan sát cách nhân viên vừa tính tiền vừa nướng bánh mì và lau dọn sàn nhà sạch sẽ.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Quản lý khu vực kiểm tra hạn sử dụng và cách sắp xếp hàng hóa trên kệ",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-thuong-mai-da-kenh-omnichannel",
    "title": "Chuyên viên Thương mại đa kênh (Omnichannel Retail Specialist)",
    "englishTitle": "Omnichannel Retail Strategy Specialist",
    "synonyms": [
      "Chuyên viên Omnichannel",
      "Omnichannel Specialist"
    ],
    "group": "thuong-mai-dien-tu",
    "category": "ThuongMai",
    "categoryLabel": "Thương mại điện tử và bán lẻ hiện đại",
    "riasecCodes": [
      "I",
      "C",
      "E"
    ],
    "shortSummary": "Đồng bộ giỏ hàng, điểm tích lũy và giá bán giữa website, ứng dụng di động và cửa hàng thực tế, mang lại trải nghiệm mua sắm liền mạch cho khách.",
    "typicalTasks": [
      "Thiết lập tính năng mua hàng online - nhận hàng tại cửa hàng gần nhất (BOPIS)",
      "Đồng bộ hệ thống dữ liệu khách hàng thân thiết đa kênh (Customer Data Platform)",
      "Tối ưu hóa hành trình đổi trả hàng linh hoạt giữa kênh online và offline"
    ],
    "deliverables": [
      "Kiến trúc hệ thống thương mại đa kênh Omnichannel",
      "Báo cáo doanh thu đa kênh hợp nhất"
    ],
    "toolsUsed": [
      "Hệ thống CDP (Customer Data Platform)",
      "Phần mềm OMS (Order Management System)",
      "Shopify Plus / Magento"
    ],
    "workEnvironment": "Các thương hiệu bán lẻ thời trang, điện máy lớn (Thế Giới Di Động, FPT Shop, Uniqlo).",
    "difficultiesAndTradeoffs": [
      "Đồng bộ dữ liệu tồn kho thời gian thực giữa hàng trăm cửa hàng là bài toán công nghệ phức tạp",
      "Xung đột quyền lợi doanh số giữa nhân viên cửa hàng và kênh bán online"
    ],
    "coreSkills": [
      "Tư duy hệ thống và tích hợp đa nền tảng",
      "Hiểu sâu trải nghiệm mua sắm đa kênh của khách hàng",
      "Kỹ năng phân tích dữ liệu bán lẻ"
    ],
    "highSchoolSubjects": [
      "Tin học",
      "Toán học",
      "Giáo dục kinh tế và pháp luật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Thương mại điện tử, Hệ thống thông tin quản lý hoặc Marketing"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Thương mại điện tử, Hệ thống thông tin quản lý hoặc Marketing",
    "trialActivity": "Thử đặt mua một món đồ trên mạng và chọn nhận hàng tại cửa hàng gần nhà xem các bước nhận hàng diễn ra nhanh chóng ra sao.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Khách hàng nhận món đồ đã đặt mua online tại quầy dịch vụ của cửa hàng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-dinh-gia-dong-va-gio-hang",
    "title": "Chuyên viên Định giá và Phân tích giỏ hàng (Pricing & Market Basket Analyst)",
    "englishTitle": "Dynamic Pricing & Basket Analyst",
    "synonyms": [
      "Chuyên viên định giá",
      "Pricing Analyst"
    ],
    "group": "thuong-mai-dien-tu",
    "category": "ThuongMai",
    "categoryLabel": "Thương mại điện tử và bán lẻ hiện đại",
    "riasecCodes": [
      "I",
      "C"
    ],
    "shortSummary": "Phân tích các món hàng khách hay mua cùng nhau (như bim bim mua kèm nước ngọt), tính toán thuật toán tăng giá vé máy bay, phòng khách sạn theo giờ.",
    "typicalTasks": [
      "Phân tích luật kết hợp giỏ hàng (Market Basket Analysis) tìm ra các cặp sản phẩm bán kèm (Cross-sell)",
      "Thu thập giá bán của đối thủ cạnh tranh bằng công cụ tự động Web scraping",
      "Thiết lập thuật toán định giá động (Dynamic pricing) tự động điều chỉnh giá theo cung cầu"
    ],
    "deliverables": [
      "Mô hình thuật toán định giá động linh hoạt",
      "Báo cáo phân tích biên lợi nhuận danh mục sản phẩm"
    ],
    "toolsUsed": [
      "Python",
      "R",
      "SQL",
      "Phần mềm định giá Prisync"
    ],
    "workEnvironment": "Hãng hàng không (Vietnam Airlines, Vietjet), ứng dụng gọi xe công nghệ (Grab), chuỗi bán lẻ.",
    "difficultiesAndTradeoffs": [
      "Nếu thuật toán định giá quá cao sẽ làm mất khách hàng, nếu quá thấp sẽ làm giảm lợi nhuận",
      "Xử lý phản ứng của khách hàng khi thấy giá sản phẩm biến động theo từng phút"
    ],
    "coreSkills": [
      "Tư duy toán kinh tế và độ co giãn của cầu theo giá",
      "Thành thạo lập trình phân tích dữ liệu giỏ hàng",
      "Nhạy bén với chiến lược giá của đối thủ"
    ],
    "highSchoolSubjects": [
      "Toán học",
      "Giáo dục kinh tế và pháp luật",
      "Tin học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Toán kinh tế, Thống kê, Kinh tế học hoặc Khoa học dữ liệu"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Toán kinh tế, Thống kê, Kinh tế học hoặc Khoa học dữ liệu",
    "trialActivity": "Tìm hiểu tại sao giá vé máy bay hoặc giá cước xe công nghệ lại tăng vọt vào những giờ cao điểm trời mưa.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên phân tích đồ thị biến động giá cả theo thời gian thực",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "quan-tri-trai-nghiem-mua-sam-online",
    "title": "Quản trị Trải nghiệm mua sắm số (Digital Merchandiser)",
    "englishTitle": "E-Commerce Digital Merchandiser",
    "synonyms": [
      "Chuyên viên trưng bày online",
      "Digital Merchandiser"
    ],
    "group": "thuong-mai-dien-tu",
    "category": "ThuongMai",
    "categoryLabel": "Thương mại điện tử và bán lẻ hiện đại",
    "riasecCodes": [
      "A",
      "C",
      "E"
    ],
    "shortSummary": "Sắp xếp thứ tự các sản phẩm xuất hiện trên trang chủ website, chọn ảnh đại diện bắt mắt và thiết kế bộ sưu tập kích thích khách bấm mua.",
    "typicalTasks": [
      "Phân tích các từ khóa tìm kiếm nội bộ trên website để đưa sản phẩm đúng lên đầu trang",
      "Thiết kế các bộ sưu tập thời trang theo chủ đề 'Xuống phố mùa thu' hay 'Đi biển rực rỡ'",
      "Tối ưu hóa các gợi ý sản phẩm liên quan (Upsell/Cross-sell) ở chân trang"
    ],
    "deliverables": [
      "Giao diện trang chủ bán hàng được bố trí hấp dẫn theo mùa",
      "Báo cáo chỉ số nhấp chuột (CTR) vào các banner sản phẩm"
    ],
    "toolsUsed": [
      "Hệ thống CMS bán hàng Shopify / Magento",
      "Google Analytics 4",
      "Figma"
    ],
    "workEnvironment": "Các thương hiệu thời trang bán lẻ trực tuyến, website mỹ phẩm, đồ gia dụng.",
    "difficultiesAndTradeoffs": [
      "Phải thay đổi giao diện và vị trí sản phẩm liên tục theo từng chiến dịch tuần",
      "Khối lượng hàng nghìn mã sản phẩm cần kiểm tra hình ảnh và mô tả chuẩn xác"
    ],
    "coreSkills": [
      "Gu thẩm mỹ trưng bày thị giác trực tuyến",
      "Phân tích số liệu hành vi nhấp chuột",
      "Tư duy bán lẻ thương mại"
    ],
    "highSchoolSubjects": [
      "Mỹ thuật",
      "Tin học",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Thương mại điện tử, Marketing hoặc Thiết kế Đa phương tiện"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Thương mại điện tử, Marketing hoặc Thiết kế Đa phương tiện",
    "trialActivity": "Vào trang chủ một website bán quần áo và quan sát xem những món đồ mới nhất được họ trưng bày ở vị trí nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Sắp xếp bố cục hình ảnh sản phẩm nổi bật trên trang web thương mại điện tử",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-dich-vu-khach-hang-vip",
    "title": "Chuyên viên Chăm sóc khách hàng VIP bán lẻ (Luxury VIP Client Advisor)",
    "englishTitle": "Luxury Retail Client Advisor",
    "synonyms": [
      "Chuyên viên chăm sóc khách VIP",
      "Client Advisor hàng hiệu"
    ],
    "group": "thuong-mai-dien-tu",
    "category": "ThuongMai",
    "categoryLabel": "Thương mại điện tử và bán lẻ hiện đại",
    "riasecCodes": [
      "S",
      "E",
      "A"
    ],
    "shortSummary": "Tư vấn riêng trong phòng VIP, ghi nhớ sở thích cá nhân và phục vụ những khách hàng mua túi xách, đồng hồ cao cấp trị giá hàng trăm triệu.",
    "typicalTasks": [
      "Đón tiếp khách hàng thân thiết trong phòng thử đồ riêng biệt sang trọng",
      "Gợi ý các phiên bản đồng hồ, túi xách giới hạn (Limited edition) phù hợp phong cách gia chủ",
      "Gửi thiệp mừng viết tay và hoa tươi chúc mừng sinh nhật khách hàng VIP"
    ],
    "deliverables": [
      "Mối quan hệ thân thiết gắn bó với các khách hàng thượng lưu",
      "Doanh số bán hàng xa xỉ đạt chỉ tiêu cao"
    ],
    "toolsUsed": [
      "Hệ thống CRM khách hàng VIP",
      "Điện thoại liên lạc cá nhân hóa",
      "Sổ tay ghi nhớ sở thích khách hàng"
    ],
    "workEnvironment": "Cửa hàng thời trang xa xỉ (Louis Vuitton, Chanel, Gucci, Rolex, Patek Philippe) tại trung tâm thương mại cao cấp.",
    "difficultiesAndTradeoffs": [
      "Yêu cầu tác phong, lời nói và trang phục chỉn chu hoàn hảo không một tì vết",
      "Khách hàng thượng lưu thường có những yêu cầu đặc biệt khắt khe"
    ],
    "coreSkills": [
      "Nghi thức phục vụ xa xỉ chuẩn quốc tế",
      "Kiến thức lịch sử và văn hóa các thương hiệu xa xỉ",
      "Kỹ năng lắng nghe và bảo mật thông tin khách hàng"
    ],
    "highSchoolSubjects": [
      "Tiếng Anh",
      "Ngữ văn",
      "Lịch sử nghệ thuật"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị kinh doanh, Ngoại ngữ hoặc Quản trị Khách sạn"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị kinh doanh, Ngoại ngữ hoặc Quản trị Khách sạn",
    "trialActivity": "Tìm hiểu câu chuyện lịch sử hàng trăm năm của chiếc túi xách Hermès Birkin được chế tác thủ công bằng tay như thế nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên tư vấn sản phẩm thời trang cao cấp cho khách hàng trong không gian sang trọng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-quan-ly-nhan-hang-rieng-sieu-thi",
    "title": "Chuyên viên Phát triển nhãn hàng riêng siêu thị (Private Label Brand Specialist)",
    "englishTitle": "Supermarket Private Label Brand Specialist",
    "synonyms": [
      "Chuyên viên nhãn hàng riêng",
      "Private Label Specialist"
    ],
    "group": "thuong-mai-dien-tu",
    "category": "ThuongMai",
    "categoryLabel": "Thương mại điện tử và bán lẻ hiện đại",
    "riasecCodes": [
      "E",
      "C",
      "I"
    ],
    "shortSummary": "Tìm nhà máy gia công uy tín, thiết kế bao bì mang thương hiệu của siêu thị (như Co.op Select, WinMart Good) để bán giá rẻ hơn 15-20% cho người tiêu dùng.",
    "typicalTasks": [
      "Khảo sát thị trường lựa chọn các mặt hàng thiết yếu (dầu ăn, giấy vệ sinh, nước giặt) để làm nhãn riêng",
      "Thẩm định chất lượng nhà máy gia công và đàm phán hợp đồng sản xuất OEM",
      "Kiểm soát chất lượng đồng đều và quản lý biên lợi nhuận sản phẩm"
    ],
    "deliverables": [
      "Sản phẩm nhãn hàng riêng được người tiêu dùng tin tưởng lựa chọn",
      "Bảng phân tích cơ cấu chi phí sản xuất và giá bán cạnh tranh"
    ],
    "toolsUsed": [
      "Phần mềm ERP quản trị chuỗi cung ứng",
      "Hệ thống kiểm nghiệm chất lượng sản phẩm"
    ],
    "workEnvironment": "Trụ sở các tập đoàn bán lẻ siêu thị lớn (Saigon Co.op, Central Retail, WinCommerce).",
    "difficultiesAndTradeoffs": [
      "Cần đảm bảo chất lượng nhãn hàng riêng luôn ổn định để bảo vệ uy tín thương hiệu của cả chuỗi siêu thị",
      "Đàm phán khó khăn với các nhà máy sản xuất để có giá thành tốt nhất"
    ],
    "coreSkills": [
      "Kỹ năng phát triển sản phẩm tiêu dùng",
      "Quản trị chất lượng chuỗi cung ứng",
      "Tư duy kinh doanh bán lẻ"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Hóa học",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị kinh doanh, Thương mại hoặc Công nghệ thực phẩm"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị kinh doanh, Thương mại hoặc Công nghệ thực phẩm",
    "trialActivity": "Vào siêu thị Co.opmart hoặc WinMart tìm xem các sản phẩm mang tên Co.op Select hay WinMart có giá rẻ hơn các thương hiệu khác bao nhiêu tiền.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Sản phẩm nhãn hàng riêng được trưng bày nổi bật trên kệ siêu thị",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-tham-van-tam-ly-ca-nhan",
    "title": "Chuyên viên Tham vấn tâm lý cá nhân và gia đình (Counseling Psychologist)",
    "englishTitle": "Individual & Family Counseling Psychologist",
    "synonyms": [
      "Chuyên viên tham vấn tâm lý",
      "Counselor"
    ],
    "group": "tam-ly-xa-hoi",
    "category": "XaHoi",
    "categoryLabel": "Dịch vụ xã hội, tâm lý và cộng đồng",
    "riasecCodes": [
      "S",
      "I",
      "A"
    ],
    "shortSummary": "Tạo không gian an toàn, lắng nghe và đồng hành giúp người bị trầm cảm, khủng hoảng tuổi dậy thì, mâu thuẫn hôn nhân tìm lại sự cân bằng.",
    "typicalTasks": [
      "Lắng nghe sâu sắc câu chuyện của thân chủ trong phòng tham vấn bảo mật",
      "Ứng dụng các liệu pháp tâm lý như Liệu pháp nhận thức hành vi (CBT)",
      "Giúp thân chủ nhận diện những niềm tin sai lệch và khơi dậy nguồn lực nội tại"
    ],
    "deliverables": [
      "Kế hoạch can thiệp tham vấn tâm lý cá nhân hóa",
      "Thân chủ vượt qua khủng hoảng tâm lý và tìm lại niềm vui sống"
    ],
    "toolsUsed": [
      "Bộ trắc nghiệm tâm lý chuẩn hóa (MBTI, Big Five, DASS)",
      "Không gian phòng tham vấn cách âm yên tĩnh",
      "Ghế ngồi thư giãn"
    ],
    "workEnvironment": "Phòng khám tâm lý, trung tâm tham vấn gia đình, văn phòng tư vấn độc lập.",
    "difficultiesAndTradeoffs": [
      "Nguy cơ bị lây nhiễm cảm xúc tiêu cực và kiệt sức (Secondary Traumatic Stress) khi lắng nghe quá nhiều nỗi đau",
      "Đòi hỏi phải đi giám sát chuyên môn (Supervision) định kỳ"
    ],
    "coreSkills": [
      "Khả năng lắng nghe thấu cảm chân thành",
      "Kỹ thuật phản hồi và đặt câu hỏi khơi gợi",
      "Đạo đức nghề nghiệp bảo mật thông tin"
    ],
    "highSchoolSubjects": [
      "Tâm lý học",
      "Ngữ văn",
      "Giáo dục công dân"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Tâm lý học hoặc Tâm lý học lâm sàng (ĐH KHXH&NV, ĐH Sư phạm) + Giờ thực hành có giám sát"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Tâm lý học hoặc Tâm lý học lâm sàng (ĐH KHXH&NV, ĐH Sư phạm) + Giờ thực hành có giám sát",
    "trialActivity": "Lắng nghe một người bạn đang buồn kể chuyện trong 10 phút mà không ngắt lời hay đưa ra lời phán xét nào.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên tham vấn tâm lý lắng nghe và đồng cảm cùng thân chủ",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "nhan-vien-cong-tac-xa-hoi-tre-em",
    "title": "Nhân viên Công tác xã hội bảo vệ trẻ em (Child Protection Social Worker)",
    "englishTitle": "Child Protection Social Worker",
    "synonyms": [
      "Cán bộ bảo vệ trẻ em",
      "Child Social Worker"
    ],
    "group": "tam-ly-xa-hoi",
    "category": "XaHoi",
    "categoryLabel": "Dịch vụ xã hội, tâm lý và cộng đồng",
    "riasecCodes": [
      "S",
      "C",
      "E"
    ],
    "shortSummary": "Can thiệp khẩn cấp, đưa trẻ bị bạo hành, bỏ rơi vào nhà tạm lánh và kết nối các nguồn học bổng giúp các em được tiếp tục đến trường.",
    "typicalTasks": [
      "Xác minh tin báo tố giác bạo hành hoặc xâm hại trẻ em từ Tổng đài Quốc gia 111",
      "Phối hợp với công an đưa trẻ đến nơi an toàn và khám sức khỏe",
      "Lập kế hoạch trợ giúp dài hạn: làm giấy khai sinh, hỗ trợ tâm lý và đưa trẻ đi học"
    ],
    "deliverables": [
      "Hồ sơ quản lý ca trẻ em cần bảo vệ khẩn cấp",
      "Kế hoạch can thiệp trợ giúp trẻ em hòa nhập"
    ],
    "toolsUsed": [
      "Tổng đài Quốc gia Bảo vệ Trẻ em 111",
      "Quy trình quản lý ca công tác xã hội",
      "Hồ sơ bảo trợ trẻ em"
    ],
    "workEnvironment": "Trung tâm công tác xã hội tỉnh, làng trẻ em SOS, các tổ chức phi chính phủ bảo vệ trẻ em (UNICEF, World Vision).",
    "difficultiesAndTradeoffs": [
      "Thường xuyên chứng kiến những hoàn cảnh đau lòng của trẻ thơ",
      "Đối mặt với sự đe dọa từ những kẻ bạo hành trẻ em"
    ],
    "coreSkills": [
      "Kỹ năng phỏng vấn trẻ em nhạy cảm tổn thương",
      "Nắm vững luật trẻ em và chính sách an sinh xã hội",
      "Trái tim nhân hậu và dũng cảm"
    ],
    "highSchoolSubjects": [
      "Giáo dục công dân",
      "Tâm lý học",
      "Xã hội học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Công tác xã hội (ĐH Sư phạm Hà Nội, ĐH KHXH&NV, ĐH Lao động - Xã hội)"
      },
      {
        "level": "Cao đẳng",
        "description": "Cao đẳng Công tác xã hội"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Công tác xã hội (ĐH Sư phạm Hà Nội, ĐH KHXH&NV, ĐH Lao động - Xã hội) | Cao đẳng: Cao đẳng Công tác xã hội",
    "trialActivity": "Ghi nhớ số điện thoại 111 - Tổng đài điện thoại Quốc gia Bảo vệ Trẻ em hoạt động 24/7 hoàn toàn miễn phí.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhân viên công tác xã hội chăm sóc và vui chơi cùng trẻ em có hoàn cảnh đặc biệt",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-cong-tac-xa-hoi-y-te",
    "title": "Chuyên viên Công tác xã hội y tế bệnh viện (Hospital Medical Social Worker)",
    "englishTitle": "Hospital Clinical Social Worker",
    "synonyms": [
      "Công tác xã hội bệnh viện",
      "Medical Social Worker"
    ],
    "group": "tam-ly-xa-hoi",
    "category": "XaHoi",
    "categoryLabel": "Dịch vụ xã hội, tâm lý và cộng đồng",
    "riasecCodes": [
      "S",
      "E",
      "C"
    ],
    "shortSummary": "Kêu gọi nhà hảo tâm tài trợ chi phí mổ tim, ghép tạng cho bệnh nhân nghèo và hỗ trợ tâm lý giúp người bệnh vượt qua nỗi sợ hãi bệnh tật.",
    "typicalTasks": [
      "Khảo sát xác minh hoàn cảnh khó khăn của bệnh nhân tại các khoa điều trị",
      "Viết bài kêu gọi viện trợ từ các nhà hảo tâm và doanh nghiệp tài trợ viện phí",
      "Tổ chức các chuyến xe 0 đồng đưa bệnh nhân nghèo xuất viện về quê"
    ],
    "deliverables": [
      "Khoản viện trợ tài chính kịp thời cứu sống bệnh nhân nghèo",
      "Chương trình suất ăn dinh dưỡng miễn phí cho người nhà người bệnh"
    ],
    "toolsUsed": [
      "Phần mềm quản lý quỹ tài trợ bệnh viện",
      "Hồ sơ xác nhận hoàn cảnh khó khăn địa phương",
      "Hệ thống loa phát thanh bệnh viện"
    ],
    "workEnvironment": "Phòng công tác xã hội các bệnh viện lớn (Bệnh viện Bạch Mai, Chợ Rẫy, Nhi Đồng).",
    "difficultiesAndTradeoffs": [
      "Áp lực khi số lượng bệnh nhân nghèo cần giúp đỡ quá lớn trong khi nguồn quỹ có hạn",
      "Thường xuyên tiếp xúc với hoàn cảnh nghèo khó và bệnh tật hiểm nghèo"
    ],
    "coreSkills": [
      "Kỹ năng kết nối mạng lưới các nhà hảo tâm",
      "Khả năng thấu cảm và lắng nghe nỗi niềm người bệnh",
      "Minh bạch và trung thực trong quản lý tiền từ thiện"
    ],
    "highSchoolSubjects": [
      "Giáo dục công dân",
      "Ngữ văn",
      "Xã hội học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Công tác xã hội hoặc Xã hội học"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Công tác xã hội hoặc Xã hội học",
    "trialActivity": "Tìm hiểu về 'Gian hàng 0 đồng' hoặc 'Nồi cháo tình thương' tại các bệnh viện giúp đỡ người nhà bệnh nhân khó khăn.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhân viên công tác xã hội trao quà và động viên người bệnh tại giường bệnh",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "nha-tri-lieu-tam-ly-lam-sang",
    "title": "Nhà trị liệu tâm lý lâm sàng (Clinical Psychologist)",
    "englishTitle": "Licensed Clinical Psychologist",
    "synonyms": [
      "Nhà tâm lý lâm sàng",
      "Clinical Psychologist"
    ],
    "group": "tam-ly-xa-hoi",
    "category": "XaHoi",
    "categoryLabel": "Dịch vụ xã hội, tâm lý và cộng đồng",
    "riasecCodes": [
      "I",
      "S"
    ],
    "shortSummary": "Phối hợp cùng bác sĩ tâm thần chẩn đoán và điều trị rối loạn lo âu, ám ảnh cưỡng chế (OCD), rối loạn căng thẳng sau sang chấn (PTSD).",
    "typicalTasks": [
      "Sử dụng các công cụ trắc nghiệm tâm lý chẩn đoán chuyên sâu (MMPI, Rorschach)",
      "Tiến hành các phiên trị liệu tâm lý chuyên sâu theo phác đồ y khoa",
      "Theo dõi sự thuyên giảm các triệu chứng tâm thần kinh qua từng tuần"
    ],
    "deliverables": [
      "Hồ sơ chẩn đoán tâm lý lâm sàng chuyên sâu",
      "Báo cáo tiến trình trị liệu tâm lý người bệnh"
    ],
    "toolsUsed": [
      "Bộ trắc nghiệm nhân cách MMPI-2",
      "Bộ test trí tuệ Wechsler (WAIS / WISC)",
      "Kỹ thuật giải mẫn cảm bằng chuyển động mắt EMDR"
    ],
    "workEnvironment": "Viện sức khỏe tâm thần bệnh viện, phòng khám tâm thần kinh, trung tâm trị liệu chuyên sâu.",
    "difficultiesAndTradeoffs": [
      "Đối diện với các trường hợp bệnh nhân có ý nghĩ tự sát đòi hỏi sự can thiệp khẩn cấp",
      "Yêu cầu đào tạo học thuật rất cao và nghiêm ngặt"
    ],
    "coreSkills": [
      "Kiến thức sâu sắc về bệnh học tâm thần và thần kinh học",
      "Làm chủ các liệu pháp trị liệu tâm lý chuyên sâu",
      "Khả năng giữ vững ranh giới chuyên môn"
    ],
    "highSchoolSubjects": [
      "Sinh học",
      "Tâm lý học",
      "Toán học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Tâm lý học lâm sàng + Bằng Thạc sĩ Tâm lý học lâm sàng (Bắt buộc theo Luật Khám chữa bệnh)"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Tâm lý học lâm sàng + Bằng Thạc sĩ Tâm lý học lâm sàng (Bắt buộc theo Luật Khám chữa bệnh)",
    "trialActivity": "Tìm hiểu về chứng bệnh 'Rối loạn ám ảnh cưỡng chế' (OCD): người bệnh có thôi thúc rửa tay hàng chục lần một ngày vì sợ vi trùng.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Nhà tâm lý lâm sàng trao đổi sâu sắc trong phiên trị liệu tâm lý",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-gia-phuc-hoi-sau-thien-tai",
    "title": "Chuyên gia Cứu trợ và Phục hồi sau thiên tai (Disaster Relief & Recovery Specialist)",
    "englishTitle": "Disaster Relief & Community Resilience Specialist",
    "synonyms": [
      "Cán bộ cứu trợ bão lũ",
      "Disaster Response Specialist"
    ],
    "group": "tam-ly-xa-hoi",
    "category": "XaHoi",
    "categoryLabel": "Dịch vụ xã hội, tâm lý và cộng đồng",
    "riasecCodes": [
      "S",
      "R",
      "E"
    ],
    "shortSummary": "Có mặt tại tâm điểm bão lũ, sạt lở đất để cấp phát lương thực, áo phao, nước sạch và hỗ trợ người dân dựng lại nhà cửa, ổn định cuộc sống.",
    "typicalTasks": [
      "Khảo sát nhanh mức độ thiệt hại về người và tài sản sau trận bão lũ",
      "Điều phối các đoàn xe cứu trợ hàng thiết yếu đến đúng các bản làng bị cô lập",
      "Tổ chức tập huấn kỹ năng phòng chống lũ quét và sạt lở đất cho cộng đồng"
    ],
    "deliverables": [
      "Kế hoạch cứu trợ khẩn cấp sau thiên tai",
      "Dự án phục hồi sinh kế cho bà con vùng lũ"
    ],
    "toolsUsed": [
      "Hệ thống xuồng cứu hộ vượt lũ",
      "Hệ thống lọc nước dã chiến",
      "Bộ đàm vệ tinh cứu nạn"
    ],
    "workEnvironment": "Hội Chữ thập đỏ Việt Nam, Ban Chỉ đạo Quốc gia về Phòng chống thiên tai, các tổ chức cứu trợ nhân đạo.",
    "difficultiesAndTradeoffs": [
      "Làm việc trong điều kiện nguy hiểm sạt lở đất, nước lũ dâng cao và mưa bão dữ dội",
      "Phải ngủ lều dã chiến và ăn lương khô trong nhiều ngày cứu trợ"
    ],
    "coreSkills": [
      "Kỹ năng ứng phó sự cố khẩn cấp và sinh tồn",
      "Kỹ năng điều phối hàng cứu trợ công bằng, minh bạch",
      "Sức khỏe dẻo dai và tinh thần dấn thân vì đồng bào"
    ],
    "highSchoolSubjects": [
      "Địa lý",
      "Giáo dục công dân",
      "Vật lý"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản lý tài nguyên, Công tác xã hội hoặc Biến đổi khí hậu"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản lý tài nguyên, Công tác xã hội hoặc Biến đổi khí hậu",
    "trialActivity": "Tìm hiểu về cách Hội Chữ thập đỏ cấp phát túi lọc nước dã chiến giúp bà con vùng ngập lụt có nước sạch uống ngay lập tức.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Cán bộ cứu trợ trao lương thực và nước sạch cho bà con vùng lũ lụt",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "can-bo-hoa-nhap-cho-nguoi-khuyet-tat",
    "title": "Cán bộ Hỗ trợ hòa nhập người khuyết tật (Disability Inclusion Coordinator)",
    "englishTitle": "Disability Inclusion & Accessibility Specialist",
    "synonyms": [
      "Cán bộ hỗ trợ người khuyết tật",
      "Inclusion Specialist"
    ],
    "group": "tam-ly-xa-hoi",
    "category": "XaHoi",
    "categoryLabel": "Dịch vụ xã hội, tâm lý và cộng đồng",
    "riasecCodes": [
      "S",
      "E",
      "C"
    ],
    "shortSummary": "Khảo sát đường dốc cho xe lăn, kết nối doanh nghiệp tuyển dụng lao động khuyết tật và vận động chính sách không rào cản trong xã hội.",
    "typicalTasks": [
      "Vận động các tòa nhà công cộng lắp đặt đường dốc và nhà vệ sinh tiếp cận cho người đi xe lăn",
      "Kết nối mở các lớp đào tạo nghề tin học, may mặc phù hợp cho người khuyết tật",
      "Tổ chức ngày hội việc làm hòa nhập kết nối doanh nghiệp với người khuyết tật"
    ],
    "deliverables": [
      "Báo cáo đánh giá mức độ tiếp cận công trình cho người khuyết tật",
      "Hợp đồng lao động hòa nhập cho thanh niên khuyết tật"
    ],
    "toolsUsed": [
      "Tiêu chuẩn kỹ thuật quốc gia về tiếp cận cho người khuyết tật QCVN 10:2014/BXD",
      "Xe lăn hỗ trợ di chuyển"
    ],
    "workEnvironment": "Hội người khuyết tật các cấp, trung tâm bảo trợ xã hội, các tổ chức phát triển quốc tế.",
    "difficultiesAndTradeoffs": [
      "Nhiều rào cản định kiến xã hội đối với năng lực làm việc của người khuyết tật",
      "Cần kiên trì vận động thay đổi cơ sở hạ tầng giao thông và nhận thức cộng đồng"
    ],
    "coreSkills": [
      "Hiểu biết sâu sắc luật người khuyết tật và công ước quốc tế",
      "Kỹ năng vận động chính sách và kết nối doanh nghiệp",
      "Sự tôn trọng và thấu hiểu sâu sắc"
    ],
    "highSchoolSubjects": [
      "Giáo dục công dân / Kinh tế & Pháp luật",
      "Xã hội học",
      "Ngữ văn"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Công tác xã hội, Xã hội học hoặc Luật"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Công tác xã hội, Xã hội học hoặc Luật",
    "trialActivity": "Quan sát vỉa hè xung quanh xem có những viên gạch màu vàng có đường kẻ gờ nổi dành riêng cho người khiếm thị dò đường hay không.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Cán bộ hỗ trợ thanh niên khuyết tật thực hành nghề nghiệp hòa nhập cộng đồng",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-gia-tu-van-cai-nghien-tai-hoa-nhap",
    "title": "Chuyên viên Tư vấn cai nghiện và Tái hòa nhập (Addiction Recovery Specialist)",
    "englishTitle": "Substance Abuse & Addiction Recovery Counselor",
    "synonyms": [
      "Tư vấn viên cai nghiện",
      "Recovery Counselor"
    ],
    "group": "tam-ly-xa-hoi",
    "category": "XaHoi",
    "categoryLabel": "Dịch vụ xã hội, tâm lý và cộng đồng",
    "riasecCodes": [
      "S",
      "I",
      "R"
    ],
    "shortSummary": "Tư vấn động viên, trị liệu tâm lý nhóm và kết nối dạy nghề giúp những người từng lầm lỡ cai nghiện ma túy thành công và làm lại cuộc đời.",
    "typicalTasks": [
      "Đánh giá mức độ lệ thuộc chất gây nghiện và động lực quyết tâm cai nghiện",
      "Điều hành các buổi sinh hoạt nhóm hỗ trợ lẫn nhau (12 bước cai nghiện)",
      "Đồng hành hỗ trợ tìm việc làm và ngăn ngừa tái nghiện khi trở về cộng đồng"
    ],
    "deliverables": [
      "Kế hoạch phục hồi cá nhân hóa chống tái nghiện",
      "Học viên cai nghiện thành công có việc làm ổn định"
    ],
    "toolsUsed": [
      "Phác đồ trị liệu tâm lý cai nghiện ma túy",
      "Xét nghiệm kiểm tra nhanh chất gây nghiện"
    ],
    "workEnvironment": "Cơ sở cai nghiện ma túy công lập, trung tâm tư vấn cai nghiện cộng đồng.",
    "difficultiesAndTradeoffs": [
      "Đối diện với các hội chứng cai thuốc vật vã, đau đớn về thể xác của học viên",
      "Tỷ lệ tái nghiện trong cộng đồng tương đối cao đòi hỏi sự kiên nhẫn không bỏ cuộc"
    ],
    "coreSkills": [
      "Tấm lòng bao dung, không kỳ thị phân biệt đối xử",
      "Kỹ năng trị liệu tâm lý nhóm và truyền cảm hứng phục hồi",
      "Bản lĩnh và sự thấu hiểu tâm lý người nghiện"
    ],
    "highSchoolSubjects": [
      "Tâm lý học",
      "Giáo dục công dân",
      "Y học cơ bản"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Công tác xã hội, Tâm lý học hoặc Y học dự phòng"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Công tác xã hội, Tâm lý học hoặc Y học dự phòng",
    "trialActivity": "Tìm hiểu về vai trò của tình yêu thương gia đình trong việc giúp một người lầm lỡ cai nghiện thành công và hòa nhập xã hội.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên tư vấn chia sẻ và khích lệ người cai nghiện làm lại cuộc đời",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "dieu-phoi-vien-ngan-hang-thuc-pham-cuu-tro",
    "title": "Điều phối viên Ngân hàng thực phẩm cứu trợ (Food Bank Coordinator)",
    "englishTitle": "Food Bank & Food Waste Reduction Coordinator",
    "synonyms": [
      "Điều phối viên ngân hàng thực phẩm",
      "Food Bank Coordinator"
    ],
    "group": "tam-ly-xa-hoi",
    "category": "XaHoi",
    "categoryLabel": "Dịch vụ xã hội, tâm lý và cộng đồng",
    "riasecCodes": [
      "E",
      "S",
      "C"
    ],
    "shortSummary": "Thu gom thực phẩm dư thừa nhưng còn hạn dùng tốt từ các siêu thị, khách sạn và phân phát cho các mái ấm, người vô gia cư.",
    "typicalTasks": [
      "Kết nối mạng lưới các siêu thị, chuỗi bánh mì tài trợ thực phẩm dư thừa an toàn",
      "Kiểm tra chất lượng hạn sử dụng và phân loại bảo quản lạnh",
      "Tổ chức phát các suất ăn miễn phí ấm lòng cho người lao động nghèo và người vô gia cư"
    ],
    "deliverables": [
      "Hàng nghìn suất ăn dinh dưỡng được chuyển giao cho người nghèo",
      "Giảm thiểu hàng tấn rác thải thực phẩm lãng phí ra môi trường"
    ],
    "toolsUsed": [
      "Xe tải lạnh thu gom thực phẩm",
      "Kho lạnh lưu trữ thực phẩm",
      "Ứng dụng kết nối chia sẻ thực phẩm dư thừa"
    ],
    "workEnvironment": "Ngân hàng thực phẩm Việt Nam (Food Bank Vietnam), các bếp ăn từ thiện, mái ấm tình thương.",
    "difficultiesAndTradeoffs": [
      "Áp lực kiểm soát an toàn vệ sinh thực phẩm tối đa trước khi trao tặng",
      "Thời gian thu gom thường diễn ra vào cuối ngày khi siêu thị đóng cửa"
    ],
    "coreSkills": [
      "Kỹ năng kết nối đối tác doanh nghiệp",
      "Quản lý logistics vận chuyển thực phẩm",
      "Tấm lòng sẻ chia vì cộng đồng"
    ],
    "highSchoolSubjects": [
      "Giáo dục kinh tế và pháp luật",
      "Sinh học",
      "Xã hội học"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Quản trị kinh doanh, Công tác xã hội hoặc Công nghệ thực phẩm"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Quản trị kinh doanh, Công tác xã hội hoặc Công nghệ thực phẩm",
    "trialActivity": "Tìm hiểu mô hình Ngân hàng Thực phẩm (Food Bank) biến thức ăn còn tốt sắp bỏ đi thành bữa ăn no cho người khó khăn.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Tình nguyện viên đóng gói thực phẩm cứu trợ tại ngân hàng thực phẩm",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "chuyen-vien-ho-tro-nguoi-cao-tuoi",
    "title": "Chuyên viên Công tác xã hội chăm sóc người cao tuổi (Gerontological Social Worker)",
    "englishTitle": "Gerontological Social Worker",
    "synonyms": [
      "Chuyên viên chăm sóc người cao tuổi",
      "Elderly Care Specialist"
    ],
    "group": "tam-ly-xa-hoi",
    "category": "XaHoi",
    "categoryLabel": "Dịch vụ xã hội, tâm lý và cộng đồng",
    "riasecCodes": [
      "S",
      "I"
    ],
    "shortSummary": "Tổ chức câu lạc bộ dưỡng sinh, trị liệu nhắc nhớ ký ức và chăm sóc sức khỏe tinh thần giúp các cụ già trong viện dưỡng lão sống vui khỏe.",
    "typicalTasks": [
      "Lắng nghe các cụ già trò chuyện, ôn lại những kỷ niệm ký ức thanh xuân",
      "Tổ chức các buổi tập dưỡng sinh kinh lạc, chơi cờ tướng và ngâm thơ",
      "Tư vấn cho gia đình cách chăm sóc người già mắc chứng suy giảm trí nhớ (Alzheimer)"
    ],
    "deliverables": [
      "Chương trình hoạt động sinh hoạt câu lạc bộ người cao tuổi",
      "Kế hoạch chăm sóc toàn diện thể chất và tinh thần cho người già"
    ],
    "toolsUsed": [
      "Bộ trò chơi rèn luyện trí nhớ và phản xạ người già",
      "Hồ sơ sức khỏe theo dõi bệnh mạn tính"
    ],
    "workEnvironment": "Viện dưỡng lão, trung tâm chăm sóc người cao tuổi ban ngày, câu lạc bộ người cao tuổi phường xã.",
    "difficultiesAndTradeoffs": [
      "Người già thường có tâm lý cô đơn, dễ tủi thân và tính khí thay đổi thất thường",
      "Cần sự kiên nhẫn lắng nghe những câu chuyện lặp đi lặp lại nhiều lần"
    ],
    "coreSkills": [
      "Lòng hiếu thuận và kính trọng người già",
      "Kiến thức tâm lý học tuổi già và bệnh học lão khoa",
      "Khả năng tổ chức các hoạt động vui chơi gắn kết"
    ],
    "highSchoolSubjects": [
      "Tâm lý học",
      "Sinh học",
      "Giáo dục công dân"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Công tác xã hội hoặc Điều dưỡng Lão khoa"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Công tác xã hội hoặc Điều dưỡng Lão khoa",
    "trialActivity": "Dành 15 phút ngồi nói chuyện và hỏi han ông bà về những kỷ niệm tuổi thơ ngày xưa của ông bà.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Chuyên viên chăm sóc ân cần trò chuyện và cầm tay cụ già trong viện dưỡng lão",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  },
  {
    "id": "can-bo-phat-trien-cong-dong-mien-nui",
    "title": "Cán bộ Phát triển cộng đồng nông thôn miền núi (Community Development Worker)",
    "englishTitle": "Rural & Mountain Community Development Specialist",
    "synonyms": [
      "Cán bộ khuyến nông miền núi",
      "Community Development Specialist"
    ],
    "group": "tam-ly-xa-hoi",
    "category": "XaHoi",
    "categoryLabel": "Dịch vụ xã hội, tâm lý và cộng đồng",
    "riasecCodes": [
      "S",
      "R",
      "E"
    ],
    "shortSummary": "Cùng ăn, cùng ở, cùng làm với bà con đồng bào dân tộc thiểu số, hỗ trợ cây giống mới, xây cầu dân sinh và xóa mù chữ vùng cao.",
    "typicalTasks": [
      "Khảo sát nhu cầu thiết yếu của bà con thôn bản (nước sạch, đường bê tông, điện mặt trời)",
      "Chuyển giao kỹ thuật nuôi ong lấy mật và trồng cây dược liệu dưới tán rừng",
      "Thành lập các tổ hợp tác dệt thổ cẩm phụ nữ dân tộc thiểu số để tăng thu nhập"
    ],
    "deliverables": [
      "Dự án sinh kế cộng đồng miền núi bền vững",
      "Cây cầu dân sinh hoặc công trình nước sạch hoàn thành phục vụ bà con"
    ],
    "toolsUsed": [
      "Sổ tay đánh giá nông thôn có sự tham gia (PRA)",
      "Tài liệu tập huấn song ngữ tiếng Kinh - tiếng Mông/Dao/Thái"
    ],
    "workEnvironment": "Các huyện miền núi vùng cao (Hà Giang, Sơn La, Điện Biên, Cao Bằng, Kon Tum).",
    "difficultiesAndTradeoffs": [
      "Đường sá đi lại sạt lở vào mùa mưa, điều kiện sinh hoạt xa gia đình thiếu thốn",
      "Cần am hiểu phong tục tập quán và nói được tiếng của đồng bào bản địa"
    ],
    "coreSkills": [
      "Tác phong ba cùng: 'Cùng ăn, cùng ở, cùng làm' với bà con",
      "Kỹ năng thúc đẩy sự tham gia của cộng đồng",
      "Trái tim nhiệt huyết tuổi trẻ cống hiến vì vùng cao"
    ],
    "highSchoolSubjects": [
      "Địa lý",
      "Xã hội học",
      "Giáo dục công dân",
      "Lịch sử"
    ],
    "entryPathways": [
      {
        "level": "Đại học",
        "description": "Cử nhân Phát triển nông thôn, Quốc tế học, Xã hội học hoặc Nông học"
      }
    ],
    "entryPathway": "Đại học: Cử nhân Phát triển nông thôn, Quốc tế học, Xã hội học hoặc Nông học",
    "trialActivity": "Tìm hiểu về chính sách hỗ trợ phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi của Đảng và Nhà nước.",
    "has3D": false,
    "simulationTaskId": null,
    "experienceType": "CAREER_PROFILE",
    "status": "HOAN_THANH",
    "imageUrl": "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80",
    "imageAlt": "Cán bộ cùng bà con đồng bào vùng cao trao đổi kế hoạch phát triển kinh tế thôn bản",
    "dailyRoutine": [
      "Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
      "Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
      "Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
      "Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
    ],
    "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
    "lastUpdated": "2025-05-01"
  }
];
