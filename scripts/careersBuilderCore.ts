import fs from 'fs';
import path from 'path';

// Definition of 20 groups with 10 distinct careers each = 200 careers
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
  dataSource?: string;
  lastUpdated?: string;
}

// Function to generate the full array
export function build200Careers(): CareerDef[] {
  const careers: CareerDef[] = [];

  const rawGroups = [
    // 1. Ngôn ngữ và giao tiếp quốc tế
    {
      group: 'ngon-ngu',
      category: 'NgoaiNgu',
      categoryLabel: 'Ngôn ngữ và giao tiếp quốc tế',
      items: [
        {
          id: 'phien-dich-vien-hoi-nghi',
          title: 'Phiên dịch hội nghị (Simultaneous Interpreter)',
          englishTitle: 'Conference Interpreter',
          synonyms: ['Phiên dịch cabin', 'Thông dịch viên hội nghị quốc tế'],
          riasec: ['A', 'S', 'E'] as const,
          summary: 'Dịch trực tiếp trong buồng cabin tại các hội nghị quốc tế, truyền tải nội dung gần như đồng thời cùng lúc với diễn giả.',
          tasks: ['Nghiên cứu trước tài liệu hội thảo chuyên ngành sâu', 'Nghe qua tai nghe và chuyển ngữ tức thì trong buồng cabin', 'Ghi chú thuật ngữ mới và phối hợp cùng cộng sự đổi ca mỗi 30 phút'],
          deliverables: ['Bản dịch nói trực tiếp mượt mà cho thính giả quốc tế', 'Bảng chú giải thuật ngữ chuyên ngành (Glossary)'],
          tools: ['Hệ thống tai nghe và micro cabin chuyên dụng', 'Phần mềm ghi chú thuật ngữ', 'Từ điển chuyên ngành đa ngữ'],
          env: 'Trung tâm hội nghị quốc tế, khách sạn 5 sao, làm việc từ xa qua nền tảng RSI.',
          tradeoffs: ['Áp lực não bộ cực cao khi dịch đồng thời', 'Lịch trình di chuyển thất thường và phải học thuật ngữ mới liên tục'],
          skills: ['Phản xạ ngôn ngữ tức thì', 'Khả năng tập trung cao độ', 'Vốn từ vựng chuyên ngành sâu'],
          subjects: ['Tiếng Anh', 'Ngữ văn', 'Lịch sử', 'Địa lý'],
          pathways: [
            { level: 'Đại học' as const, description: 'Cử nhân Ngôn ngữ Anh/Pháp/Trung chuyên ngành Biên - Phiên dịch' },
            { level: 'Cao đẳng' as const, description: 'Cao đẳng Tiếng Anh thương mại hoặc Ngoại ngữ ứng dụng' },
            { level: 'Đào tạo nghề' as const, description: 'Chứng chỉ dịch cabin nâng cao quốc tế' }
          ],
          trial: 'Nghe một đoạn phát biểu 2 phút trên TED Talk và dịch đuổi sang tiếng Việt bằng giọng nói.',
          simId: 'task-phien-dich',
          expType: 'SCENARIO_SIMULATION' as const,
          img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
          alt: 'Phiên dịch viên cabin làm việc tại hội nghị quốc tế'
        },
        {
          id: 'phien-dich-thuong-mai',
          title: 'Phiên dịch thương mại (Business Interpreter)',
          englishTitle: 'Business / Escort Interpreter',
          synonyms: ['Thông dịch viên đàm phán', 'Phiên dịch tháp tùng doanh nghiệp'],
          riasec: ['E', 'S', 'C'] as const,
          summary: 'Đồng hành cùng đoàn doanh nghiệp trong các buổi đàm phán hợp đồng, khảo sát nhà xưởng và hội chợ xúc tiến thương mại quốc tế.',
          tasks: ['Chuẩn bị hồ sơ năng lực và điều khoản hợp đồng song ngữ', 'Dịch nối tiếp trong các cuộc họp thương lượng giá cả', 'Xử lý các tình huống văn hóa kinh doanh nhạy cảm'],
          deliverables: ['Biên bản ghi nhớ đàm phán song ngữ', 'Bản dịch trao đổi thương mại'],
          tools: ['Sổ ghi chú đàm phán', 'Phần mềm quản lý tài liệu đám mây'],
          env: 'Phòng họp doanh nghiệp, nhà máy sản xuất, hội chợ quốc tế.',
          tradeoffs: ['Thường xuyên đi công tác xa nhà', 'Chịu trách nhiệm trực tiếp nếu hiểu lầm điều khoản giao dịch'],
          skills: ['Ngoại ngữ thương mại', 'Nghi thức ngoại giao kinh doanh', 'Kỹ năng lắng nghe tích cực'],
          subjects: ['Tiếng Anh', 'Ngữ văn', 'Giáo dục kinh tế và pháp luật'],
          pathways: [
            { level: 'Đại học' as const, description: 'Cử nhân Ngôn ngữ kết hợp Quản trị kinh doanh/Kinh tế đối ngoại' },
            { level: 'Cao đẳng' as const, description: 'Cao đẳng Tiếng Anh thương mại' }
          ],
          trial: 'Đọc một email chào hàng bằng tiếng Anh và viết thư hồi đáp bằng tiếng Việt lịch thiệp.',
          expType: 'CAREER_PROFILE' as const,
          img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
          alt: 'Phiên dịch viên thương mại hỗ trợ đàm phán hợp đồng'
        },
        {
          id: 'bien-dich-vien-ky-thuat',
          title: 'Biên dịch viên kỹ thuật & pháp lý (Technical & Legal Translator)',
          englishTitle: 'Technical & Legal Translator',
          synonyms: ['Biên dịch tài liệu chuyên ngành', 'Chuyên viên dịch thuật hợp đồng'],
          riasec: ['C', 'I'] as const,
          summary: 'Chuyển ngữ các tài liệu kỹ thuật phức tạp, hồ sơ thầu, quy chuẩn kỹ thuật và hợp đồng pháp lý đảm bảo độ chính xác tuyệt đối.',
          tasks: ['Tra cứu thuật ngữ luật pháp và kỹ thuật công nghệ', 'Sử dụng công cụ hỗ trợ dịch thuật (CAT Tools) để duy trì tính nhất quán', 'Hiệu đính bản dịch theo chuẩn ISO 17100'],
          deliverables: ['Bản dịch hợp đồng pháp lý hoàn chỉnh', 'Bản dịch hướng dẫn vận hành máy móc'],
          tools: ['SDL Trados Studio', 'memoQ', 'Hệ thống bộ nhớ dịch Translation Memory'],
          env: 'Văn phòng dịch thuật, công ty luật, làm việc tự do (Freelance) tại nhà.',
          tradeoffs: ['Ngồi làm việc với văn bản hàng giờ liền', 'Sai sót một từ trong hợp đồng có thể gây thiệt hại tài chính lớn'],
          skills: ['Độ cẩn trọng tuyệt đối', 'Nắm vững cấu trúc ngữ pháp chuyên ngành', 'Tư duy đối chiếu thuật ngữ'],
          subjects: ['Tiếng Anh', 'Ngữ văn', 'Tin học'],
          pathways: [
            { level: 'Đại học' as const, description: 'Cử nhân Ngôn ngữ Anh/Trung/Hàn/Nhật hoặc Cử nhân Luật chuyên ngành Ngoại ngữ' },
            { level: 'Cao đẳng' as const, description: 'Cao đẳng Ngôn ngữ ứng dụng' }
          ],
          trial: 'Thử đối chiếu một bản cam kết bảo mật thông tin (NDA) song ngữ Anh - Việt để tìm sự khác biệt thuật ngữ.',
          expType: 'CAREER_PROFILE' as const,
          img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
          alt: 'Biên dịch viên kiểm tra tài liệu kỹ thuật trên máy tính'
        },
        {
          id: 'chuyen-vien-ban-dia-hoa',
          title: 'Chuyên viên bản địa hóa phần mềm & trò chơi (Localization Specialist)',
          englishTitle: 'Game & Software Localization Specialist',
          synonyms: ['Chuyên viên L10n', 'Biên dịch viên game'],
          riasec: ['A', 'C', 'I'] as const,
          summary: 'Điều chỉnh ngôn ngữ, văn hóa, giao diện và nội dung của game/ứng dụng để người dùng bản địa có trải nghiệm tự nhiên nhất.',
          tasks: ['Dịch chuỗi văn bản giao diện (UI strings) có giới hạn độ dài ký tự', 'Chuyển hóa lối chơi chữ, hài hước và thần thoại trong game phù hợp văn hóa Việt', 'Kiểm thử ngôn ngữ trực tiếp trong game (LQA) để sửa lỗi tràn chữ'],
          deliverables: ['Tệp ngôn ngữ JSON/PO đã bản địa hóa', 'Báo cáo lỗi hiển thị văn bản giao diện'],
          tools: ['Crowdin', 'Lokalise', 'Git', 'Phần mềm giả lập game'],
          env: 'Công ty sản xuất game (Studio Game), công ty phát triển phần mềm toàn cầu.',
          tradeoffs: ['Phải chơi đi chơi lại nhiều phân cảnh để bắt lỗi văn bản', 'Áp lực tiến độ phát hành đồng thời trên toàn cầu'],
          skills: ['Cảm thụ văn hóa đại chúng sâu sắc', 'Vốn từ vựng trẻ trung phong phú', 'Kỹ năng kiểm thử giao diện'],
          subjects: ['Tiếng Anh', 'Ngữ văn', 'Tin học'],
          pathways: [
            { level: 'Đại học' as const, description: 'Cử nhân Ngôn ngữ Anh, Văn học hoặc Công nghệ thông tin' },
            { level: 'Cao đẳng' as const, description: 'Cao đẳng Ngoại ngữ ứng dụng hoặc Thiết kế đa phương tiện' }
          ],
          trial: 'Xem một câu thoại hài hước trong game tiếng Anh và nghĩ 3 cách dịch tiếng Việt vừa bắt trend vừa tự nhiên.',
          expType: 'CAREER_PROFILE' as const,
          img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
          alt: 'Chuyên viên bản địa hóa kiểm thử ngôn ngữ trò chơi điện tử'
        },
        {
          id: 'giao-vien-ngoai-ngu',
          title: 'Giáo viên tiếng Anh / Ngôn ngữ quốc tế',
          englishTitle: 'ESL / Foreign Language Teacher',
          synonyms: ['Giáo viên ngoại ngữ', 'Giảng viên tiếng Anh'],
          riasec: ['S', 'A', 'E'] as const,
          summary: 'Giảng dạy kiến thức ngữ pháp, từ vựng và rèn luyện 4 kỹ năng nghe - nói - đọc - viết cho học sinh, người đi làm.',
          tasks: ['Soạn giáo án và bài giảng tương tác đa phương tiện', 'Tổ chức các hoạt động thảo luận nhóm và thuyết trình trên lớp', 'Chấm bài luận và sửa phát âm từng cá nhân'],
          deliverables: ['Kế hoạch bài dạy (Lesson Plan)', 'Hồ sơ đánh giá tiến bộ học tập của học viên'],
          tools: ['Canva Giáo dục', 'Quizizz', 'Google Classroom', 'Bảng tương tác thông minh'],
          env: 'Trường phổ thông, trung tâm ngoại ngữ, lớp học trực tuyến.',
          tradeoffs: ['Nói liên tục nhiều giờ liền gây khàn giọng', 'Phải kiên nhẫn với học viên tiếp thu chậm hoặc thiếu tự tin'],
          skills: ['Phương pháp sư phạm hiện đại', 'Phát âm chuẩn quốc tế', 'Khả năng truyền cảm hứng'],
          subjects: ['Tiếng Anh', 'Ngữ văn'],
          pathways: [
            { level: 'Đại học' as const, description: 'Cử nhân Sư phạm Tiếng Anh hoặc Cử nhân Ngôn ngữ Anh có chứng chỉ nghiệp vụ sư phạm' },
            { level: 'Đào tạo nghề' as const, description: 'Chứng chỉ giảng dạy quốc tế CELTA, TESOL hoặc TEFL' }
          ],
          trial: 'Thử soạn một trò chơi nhỏ kéo dài 5 phút để dạy 5 từ vựng mới về chủ đề công nghệ.',
          expType: 'CAREER_PROFILE' as const,
          img: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80',
          alt: 'Giáo viên tiếng Anh giảng dạy tương tác trong lớp học'
        },
        {
          id: 'chuyen-vien-truyen-thong-quoc-te',
          title: 'Chuyên viên quan hệ công chúng quốc tế (Global PR Specialist)',
          englishTitle: 'International PR Specialist',
          synonyms: ['Chuyên viên truyền thông quốc tế', 'Global Corporate Communications'],
          riasec: ['E', 'A', 'S'] as const,
          summary: 'Xây dựng thông cáo báo chí, duy trì mối quan hệ với cơ quan thông tấn nước ngoài và đại diện phát ngôn cho tổ chức ra thế giới.',
          tasks: ['Soạn thảo thông cáo báo chí bằng tiếng Anh chuẩn mực', 'Điều phối phỏng vấn giữa báo chí quốc tế và ban lãnh đạo', 'Theo dõi dư luận quốc tế và xử lý khủng hoảng truyền thông xuyên biên giới'],
          deliverables: ['Thông cáo báo chí quốc tế', 'Hồ sơ báo chí truyền thông (Press Kit)'],
          tools: ['Cision', 'PR Newswire', 'Google Alerts', 'Meltwater'],
          env: 'Tập đoàn đa quốc gia, tổ chức phi chính phủ (NGO), cơ quan ngoại giao.',
          tradeoffs: ['Phải phản ứng ngay lập tức kể cả nửa đêm khi có sự cố báo chí', 'Nhạy cảm cao về khác biệt văn hóa và chính trị'],
          skills: ['Kỹ năng viết lách báo chí sắc bén', 'Tư duy quản trị danh tiếng', 'Giao tiếp thuyết phục'],
          subjects: ['Tiếng Anh', 'Ngữ văn', 'Lịch sử'],
          pathways: [
            { level: 'Đại học' as const, description: 'Cử nhân Quan hệ quốc tế, Báo chí truyền thông hoặc Ngôn ngữ Anh' }
          ],
          trial: 'Đọc một tin tức sự kiện ở Việt Nam và viết tóm tắt 3 câu bằng tiếng Anh gửi cho phóng viên nước ngoài.',
          expType: 'CAREER_PROFILE' as const,
          img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
          alt: 'Chuyên viên truyền thông quốc tế trao đổi với đối tác'
        },
        {
          id: 'chuyen-vien-kinh-doanh-quoc-te',
          title: 'Chuyên viên phát triển kinh doanh quốc tế (International Business Developer)',
          englishTitle: 'International Business Development Specialist',
          synonyms: ['Chuyên viên mở rộng thị trường nước ngoài', 'Global Sales Lead'],
          riasec: ['E', 'C', 'S'] as const,
          summary: 'Tìm kiếm khách hàng doanh nghiệp nước ngoài, đàm phán hợp đồng xuất khẩu và mở rộng mạng lưới phân phối toàn cầu.',
          tasks: ['Nghiên cứu thị trường và rào cản pháp lý tại quốc gia mục tiêu', 'Gửi thư ngỏ, gọi điện chào hàng B2B và tham gia hội chợ thương mại', 'Đàm phán hạn mức tín dụng và điều kiện giao hàng Incoterms'],
          deliverables: ['Hợp đồng mua bán ngoại thương đã ký kết', 'Kế hoạch phát triển thị trường mới'],
          tools: ['LinkedIn Sales Navigator', 'HubSpot CRM', 'Zoom / Teams', 'Statista'],
          env: 'Văn phòng xuất nhập khẩu, thường xuyên bay công tác nước ngoài.',
          tradeoffs: ['Chênh lệch múi giờ làm đảo lộn sinh hoạt', 'Áp lực doanh số (Doanh thu USD) hàng quý'],
          skills: ['Kỹ năng đàm phán thương mại quốc tế', 'Thấu hiểu văn hóa đối tác', 'Nhạy bén cơ hội thị trường'],
          subjects: ['Tiếng Anh', 'Toán học', 'Địa lý'],
          pathways: [
            { level: 'Đại học' as const, description: 'Cử nhân Kinh tế đối ngoại, Kinh doanh quốc tế hoặc Ngôn ngữ kết hợp Kinh tế' },
            { level: 'Cao đẳng' as const, description: 'Cao đẳng Kinh doanh quốc tế' }
          ],
          trial: 'Tìm kiếm sản phẩm cà phê Việt Nam và viết 1 đoạn giới thiệu hấp dẫn bằng tiếng Anh để chào bán cho nhà phân phối châu Âu.',
          expType: 'CAREER_PROFILE' as const,
          img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
          alt: 'Chuyên viên phát triển kinh doanh quốc tế đàm phán hợp đồng'
        },
        {
          id: 'chuyen-vien-ban-quyen-xuat-ban',
          title: 'Chuyên viên bản quyền và dịch thuật xuất bản (Publishing Rights Manager)',
          englishTitle: 'Publishing Rights & Acquisitions Specialist',
          synonyms: ['Biên tập viên mua bản quyền sách', 'Quản lý bản quyền xuất bản'],
          riasec: ['A', 'C', 'I'] as const,
          summary: 'Đánh giá các đầu sách bán chạy trên thế giới, đàm phán mua bản quyền dịch thuật và quản lý tiến độ chuyển ngữ để xuất bản sách.',
          tasks: ['Đọc bản thảo tiếng nước ngoài và viết báo cáo thẩm định nội dung', 'Thương lượng phí bản quyền (Advance & Royalty) với đại lý nước ngoài', 'Tuyển chọn và nghiệm thu bản thảo từ các dịch giả uy tín'],
          deliverables: ['Báo cáo thẩm định sách', 'Hợp đồng chuyển nhượng bản quyền tác phẩm'],
          tools: ['Frankfurt Book Fair Portal', 'Phần mềm biên tập văn bản', 'Hệ thống quản lý bản thảo'],
          env: 'Nhà xuất bản, công ty phát hành sách tư nhân, hội chợ sách quốc tế.',
          tradeoffs: ['Đọc khối lượng sách khổng lồ mỗi tháng', 'Áp lực đánh giá đúng thị hiếu độc giả trong nước'],
          skills: ['Gu thẩm mỹ văn học', 'Kỹ năng biên tập ngôn từ tinh tế', 'Hiểu biết luật sở hữu trí tuệ'],
          subjects: ['Ngữ văn', 'Tiếng Anh', 'Lịch sử'],
          pathways: [
            { level: 'Đại học' as const, description: 'Cử nhân Ngôn ngữ học, Văn học, Xuất bản hoặc Báo chí' }
          ],
          trial: 'Đọc phần giới thiệu của một cuốn sách best-seller nước ngoài và viết bài review ngắn lý giải tại sao sách nên được dịch sang tiếng Việt.',
          expType: 'CAREER_PROFILE' as const,
          img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
          alt: 'Biên tập viên xuất bản xem xét bản thảo sách'
        },
        {
          id: 'dieu-phoi-vien-du-an-ngo',
          title: 'Điều phối viên dự án phi chính phủ quốc tế (INGO Project Coordinator)',
          englishTitle: 'International NGO Project Coordinator',
          synonyms: ['Cán bộ dự án quốc tế', 'Điều phối viên cứu trợ nhân đạo'],
          riasec: ['S', 'E', 'I'] as const,
          summary: 'Kết nối nguồn tài trợ từ các tổ chức quốc tế với các dự án cộng đồng tại địa phương như bảo vệ môi trường, giáo dục trẻ em vùng cao.',
          tasks: ['Viết đề xuất tài trợ (Grant Proposal) bằng tiếng Anh', 'Tổ chức các chuyến đi thực địa đánh giá nhu cầu người dân', 'Theo dõi tiến độ giải ngân và báo cáo định kỳ cho nhà tài trợ quốc tế'],
          deliverables: ['Báo cáo tác động dự án (Impact Report)', 'Đề xuất xin tài trợ hoàn chỉnh'],
          tools: ['Trello/Asana', 'KoboToolbox (thu thập số liệu thực địa)', 'Excel nâng cao'],
          env: 'Văn phòng tổ chức quốc tế kết hợp đi thực địa tại các thôn bản vùng sâu vùng xa.',
          tradeoffs: ['Điều kiện ăn ở khi đi thực địa cơ sở còn nhiều thiếu thốn', 'Quy trình kiểm toán và giải trình tài chính cực kỳ nghiêm ngặt'],
          skills: ['Kỹ năng viết đề xuất dự án thuyết phục', 'Giao tiếp liên văn hóa tôn trọng', 'Tổ chức sự kiện cộng đồng'],
          subjects: ['Tiếng Anh', 'Địa lý', 'Giáo dục công dân / Kinh tế & Pháp luật'],
          pathways: [
            { level: 'Đại học' as const, description: 'Cử nhân Quốc tế học, Xã hội học, Công tác xã hội hoặc Ngôn ngữ Anh' }
          ],
          trial: 'Thử phác thảo 3 mục tiêu cụ thể bằng tiếng Anh cho một dự án mang thư viện sách đến học sinh miền núi.',
          expType: 'CAREER_PROFILE' as const,
          img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80',
          alt: 'Điều phối viên dự án quốc tế làm việc cùng cộng đồng'
        },
        {
          id: 'huong-dan-vien-du-lich-quoc-te',
          title: 'Hướng dẫn viên du lịch quốc tế (International Tour Guide)',
          englishTitle: 'Inbound / Outbound Tour Guide',
          synonyms: ['Hướng dẫn viên inbound', 'Hướng dẫn viên outbound'],
          riasec: ['E', 'S', 'A'] as const,
          summary: 'Dẫn các đoàn khách quốc tế tham quan danh lam thắng cảnh, di sản văn hóa Việt Nam hoặc đưa đoàn người Việt du lịch nước ngoài.',
          tasks: ['Thuyết minh sống động về lịch sử, văn hóa, ẩm thực bằng ngoại ngữ', 'Điều phối lịch trình xe đưa đón, khách sạn và bữa ăn cho đoàn', 'Xử lý các sự cố phát sinh như khách lạc đường, mất hộ chiếu hoặc đau ốm'],
          deliverables: ['Nhật ký hành trình tour', 'Khảo sát độ hài lòng của khách du lịch'],
          tools: ['Thẻ hướng dẫn viên quốc tế', 'Micro thuyết minh không dây', 'Bản đồ số du lịch'],
          env: 'Các điểm danh lam thắng cảnh, di tích lịch sử, sân bay, xe du lịch.',
          tradeoffs: ['Đi lại liên tục, làm việc vào các dịp lễ tết khi mọi người nghỉ ngơi', 'Phải luôn giữ nụ cười và năng lượng tích cực trước khách hàng'],
          skills: ['Ngoại ngữ giao tiếp lưu loát tự nhiên', 'Kiến thức lịch sử văn hóa sâu rộng', 'Kỹ năng ứng biến xử lý tình huống khẩn cấp'],
          subjects: ['Lịch sử', 'Địa lý', 'Tiếng Anh'],
          pathways: [
            { level: 'Đại học' as const, description: 'Cử nhân Quản trị du lịch và lữ hành hoặc Ngôn ngữ' },
            { level: 'Cao đẳng' as const, description: 'Cao đẳng Hướng dẫn du lịch quốc tế' },
            { level: 'Đào tạo nghề' as const, description: 'Chứng chỉ nghiệp vụ hướng dẫn viên du lịch quốc tế theo quy định Tổng cục Du lịch' }
          ],
          trial: 'Thử quay một video ngắn 2 phút bằng tiếng Anh giới thiệu một món ăn đường phố nổi tiếng nơi em sống cho du khách nước ngoài.',
          expType: 'CAREER_PROFILE' as const,
          img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
          alt: 'Hướng dẫn viên du lịch quốc tế thuyết minh tại danh lam thắng cảnh'
        }
      ]
    },

    // 2. Bán dẫn, vi mạch và phần cứng
    {
      group: 'ban-dan',
      category: 'KyThuat',
      categoryLabel: 'Bán dẫn, vi mạch và phần cứng',
      items: [
        {
          id: 'ky-su-thiet-ke-vi-mach-front-end',
          title: 'Kỹ sư thiết kế vi mạch số (Front-end RTL Design Engineer)',
          englishTitle: 'ASIC/SoC RTL Design Engineer',
          synonyms: ['Kỹ sư thiết kế chip bán dẫn', 'RTL Engineer'],
          riasec: ['I', 'R', 'C'] as const,
          summary: 'Chuyển hóa các yêu cầu kiến trúc vi xử lý thành mã mô tả phần cứng Verilog/SystemVerilog, tạo nên bộ não số của các thiết bị thông minh.',
          tasks: ['Viết mã RTL mô tả chức năng các khối logic vi mạch', 'Mô phỏng chức năng logic và sửa lỗi timing', 'Phối hợp với đội ngũ kiểm thử để đạt độ bao phủ kiểm tra 100%'],
          deliverables: ['Bộ mã nguồn RTL chuẩn hóa', 'Báo cáo tổng hợp logic (Synthesis Report)'],
          tools: ['Synopsys Design Compiler', 'Cadence Genus', 'QuestaSim', 'Verilog/SystemVerilog'],
          env: 'Văn phòng thiết kế vi mạch R&D, máy tính cấu hình cực mạnh chạy Linux.',
          tradeoffs: ['Thời gian chạy mô phỏng dài hàng giờ liền', 'Sai sót nhỏ trong mã RTL khi xuất xưởng ra chip vật lý sẽ tốn hàng triệu USD để làm lại'],
          skills: ['Tư duy kiến trúc máy tính', 'Lập trình phần cứng Verilog/SystemVerilog', 'Hiểu biết sâu sắc về logic số'],
          subjects: ['Toán học', 'Vật lý', 'Tin học'],
          pathways: [
            { level: 'Đại học' as const, description: 'Kỹ sư Thiết kế vi mạch, Kỹ thuật Điện tử - Viễn thông hoặc Kỹ thuật Máy tính' }
          ],
          trial: 'Tìm hiểu cổng logic AND, OR, NOT và vẽ sơ đồ mạch cộng 1-bit đơn giản.',
          simId: 'task-semiconductor-3d',
          has3D: true,
          expType: '3D_INTERACTIVE' as const,
          img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
          alt: 'Phiến silicon bán dẫn và vi mạch vi xử lý'
        },
        {
          id: 'ky-su-kiem-thu-vi-mach',
          title: 'Kỹ sư kiểm thử vi mạch (Design Verification Engineer)',
          englishTitle: 'IC Design Verification Engineer',
          synonyms: ['Kỹ sư DV', 'Kỹ sư kiểm tra tính đúng đắn vi mạch'],
          riasec: ['I', 'C'] as const,
          summary: 'Xây dựng môi trường giả lập tinh vi để kiểm tra hàng tỷ tình huống tín hiệu, đảm bảo con chip hoạt động hoàn hảo trước khi gửi nhà máy đúc wafer.',
          tasks: ['Xây dựng môi trường kiểm thử tự động UVM', 'Viết các kịch bản kiểm tra ngẫu nhiên có ràng buộc (Constrained-random test)', 'Phân tích độ bao phủ chức năng (Functional Coverage)'],
          deliverables: ['Môi trường kiểm thử UVM hoàn chỉnh', 'Báo cáo độ bao phủ mã và chức năng'],
          tools: ['Synopsys VCS', 'Cadence Xcelium', 'SystemVerilog UVM', 'Python'],
          env: 'Phòng thiết kế chip, làm việc phối hợp chặt chẽ với kỹ sư RTL.',
          tradeoffs: ['Công việc đòi hỏi tư duy tìm lỗi và phản biện cực cao', 'Chiếm tới 70% tổng thời gian trong một dự án thiết kế vi mạch'],
          skills: ['Phương pháp kiểm thử hướng đối tượng UVM', 'Tư duy tìm lỗi biên (Corner cases)', 'Kỹ năng tự động hóa bằng script'],
          subjects: ['Toán học', 'Tin học', 'Vật lý'],
          pathways: [
            { level: 'Đại học' as const, description: 'Kỹ sư Thiết kế vi mạch, Kỹ thuật Máy tính hoặc Khoa học Máy tính' }
          ],
          trial: 'Tập suy nghĩ các trường hợp kiểm thử cho một chiếc máy rút tiền tự động: rút 0 đồng, nhập sai PIN 3 lần, rút quá số dư.',
          has3D: true,
          expType: '3D_INTERACTIVE' as const,
          img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
          alt: 'Kỹ sư kiểm thử vi mạch phân tích sóng tín hiệu'
        },
        {
          id: 'ky-su-layout-vi-mach',
          title: 'Kỹ sư thiết kế vật lý vi mạch (Physical Design / Layout Engineer)',
          englishTitle: 'Physical Design & Layout Engineer',
          synonyms: ['Kỹ sư Backend vi mạch', 'Kỹ sư sắp đặt linh kiện vi mô'],
          riasec: ['R', 'I', 'C'] as const,
          summary: 'Biến sơ đồ logic thành sơ đồ hình học của hàng tỷ bóng bán dẫn nano trên các lớp kim loại của phiến silicon.',
          tasks: ['Quy hoạch mặt bằng chip (Floorplanning)', 'Sắp xếp vị trí tế bào logic (Placement) và đi dây tín hiệu (Routing)', 'Đóng timing (Timing Closure) và kiểm tra quy tắc vật lý DRC/LVS'],
          deliverables: ['Tệp layout hình học GDSII sẵn sàng chuyển cho nhà máy đúc chip (Fab)', 'Báo cáo kiểm tra thời gian trễ'],
          tools: ['Synopsys IC Compiler II', 'Cadence Innovus', 'Calibre DRC/LVS'],
          env: 'Phòng R&D công nghệ cao, làm việc với các tiến trình sản xuất tiên tiến 7nm, 5nm, 3nm.',
          tradeoffs: ['Chạy đua với áp lực thời gian để kịp lịch đúc chip (Tape-out)', 'Giải quyết bài toán nghẽn tín hiệu và sinh nhiệt phức tạp'],
          skills: ['Kiến thức vật lý bán dẫn', 'Giải thuật định tuyến và phân bổ không gian', 'Kiểm soát trễ xung nhịp clock tree'],
          subjects: ['Vật lý', 'Toán học', 'Tin học'],
          pathways: [
            { level: 'Đại học' as const, description: 'Kỹ sư Kỹ thuật Điện tử, Vật lý kỹ thuật bán dẫn hoặc Cơ điện tử' }
          ],
          trial: 'Chơi trò chơi xếp hình dây nối vi mạch hoặc xem video về quy trình quang khắc EUV.',
          has3D: true,
          expType: '3D_INTERACTIVE' as const,
          img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
          alt: 'Sơ đồ mạch tích hợp vật lý phóng đại'
        },
        {
          id: 'ky-su-dong-goi-va-kiem-tra-ban-dan',
          title: 'Kỹ sư đóng gói và đo kiểm bán dẫn (OSAT Engineer)',
          englishTitle: 'Semiconductor Packaging & Test Engineer',
          synonyms: ['Kỹ sư OSAT', 'Kỹ sư đóng vỏ chip BGA / Flip-Chip'],
          riasec: ['R', 'I'] as const,
          summary: 'Cắt phiến wafer thành từng con chip nhỏ (die), gắn lên đế tiếp xúc, đúc nhựa bảo vệ và thực hiện đo kiểm điện áp công nghiệp.',
          tasks: ['Giám sát dây chuyền gắn die và hàn dây kết nối siêu mảnh (Wire bonding/Flip-chip)', 'Thiết kế socket và bảng giao tiếp kiểm thử tải ATE', 'Phân tích nhiệt và độ bền cơ lý của vỏ chip'],
          deliverables: ['Quy trình đóng gói BGA/QFN đạt chuẩn JEDEC', 'Chương trình đo kiểm tự động trên máy ATE'],
          tools: ['Máy kiểm thử ATE Teradyne / Advantest', 'Kính hiển vi điện tử quét SEM', 'Phần mềm mô phỏng nhiệt Ansys'],
          env: 'Nhà máy bán dẫn công nghệ cao (như Intel Products Vietnam, Amkor, Hana Micron).',
          tradeoffs: ['Phải mặc đồ phòng sạch và tuân thủ an toàn tĩnh điện ESD nghiêm ngặt', 'Ca làm việc liên tục theo nhịp độ xuất xưởng hàng triệu linh kiện'],
          skills: ['Khoa học vật liệu điện tử', 'Kỹ thuật đo kiểm tự động ATE', 'Phân tích độ tin cậy và tản nhiệt'],
          subjects: ['Vật lý', 'Hóa học', 'Toán học'],
          pathways: [
            { level: 'Đại học' as const, description: 'Kỹ sư Kỹ thuật Điện tử, Cơ kỹ thuật, Khoa học Vật liệu hoặc Cơ điện tử' },
            { level: 'Cao đẳng' as const, description: 'Cao đẳng Kỹ thuật Điện tử công nghiệp' }
          ],
          trial: 'Quan sát các con chip đen trên bo mạch máy tính cũ xem chân nối xung quanh là chân hàn hay chân bi BGA.',
          simId: 'task-semiconductor-3d',
          has3D: true,
          expType: '3D_INTERACTIVE' as const,
          img: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=800&q=80',
          alt: 'Dây chuyền máy móc đóng gói chip bán dẫn tự động'
        },
        {
          id: 'ky-su-ung-dung-vi-mach',
          title: 'Kỹ sư ứng dụng hiện trường vi mạch (Field Application Engineer - FAE)',
          englishTitle: 'Field Application Engineer (Semiconductors)',
          synonyms: ['Kỹ sư FAE chip', 'Kỹ sư cầu nối khách hàng công nghệ bán dẫn'],
          riasec: ['E', 'I', 'S'] as const,
          summary: 'Hỗ trợ các công ty sản xuất thiết bị điện tử tích hợp con chip của hãng vào bo mạch sản phẩm thương mại của họ.',
          tasks: ['Trình bày tài liệu kỹ thuật và thiết kế mẫu (Reference Design)', 'Hỗ trợ khách hàng debug lỗi phần cứng và phần mềm nhúng', 'Thu thập phản hồi về hiệu năng chip để chuyển về đội ngũ thiết kế R&D'],
          deliverables: ['Bo mạch thiết kế mẫu phát triển (Evaluation Board Kit)', 'Tài liệu hướng dẫn ứng dụng Application Note'],
          tools: ['Máy hiện sóng Oscilloscope', 'Bộ phân tích logic Logic Analyzer', 'Altium Designer', 'C/C++ nhúng'],
          env: 'Văn phòng đại diện hãng bán dẫn (Qualcomm, MediaTek, Texas Instruments, Renesas, NXP), thường xuyên gặp gỡ khách hàng.',
          tradeoffs: ['Thường xuyên xử lý sự cố gấp khi dây chuyền khách hàng gặp lỗi', 'Đòi hỏi sự cân bằng cao giữa kiến thức kỹ thuật sâu và kỹ năng ăn nói'],
          skills: ['Khả năng chuẩn đoán lỗi hệ thống nhanh', 'Giao tiếp kỹ thuật song ngữ', 'Kỹ năng trình diễn giải pháp'],
          subjects: ['Vật lý', 'Tiếng Anh', 'Tin học'],
          pathways: [
            { level: 'Đại học' as const, description: 'Kỹ sư Kỹ thuật Điện tử - Viễn thông, Điện tử hoặc Cơ điện tử' }
          ],
          trial: 'Tập giải thích cho một người bạn về sự khác nhau giữa vi xử lý (CPU) và vi điều khiển (MCU).',
          expType: 'CAREER_PROFILE' as const,
          img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
          alt: 'Kỹ sư ứng dụng thử nghiệm bo mạch tham chiếu'
        },
        {
          id: 'ky-su-che-tao-phien-ban-dan',
          title: 'Kỹ sư quy trình chế tạo bán dẫn (Semiconductor Process / Fab Engineer)',
          englishTitle: 'Semiconductor Process Engineer',
          synonyms: ['Kỹ sư nhà máy đúc chip', 'Fab Engineer'],
          riasec: ['R', 'I'] as const,
          summary: 'Tối ưu hóa các công đoạn hóa lý trong nhà máy chế tạo chip: quang khắc (photolithography), lắng đọng màng mỏng và khắc ăn mòn (etching).',
          tasks: ['Hiệu chuẩn các thông số nhiệt độ, áp suất khí và liều lượng ion cấy', 'Giám sát tỷ lệ thành phẩm tốt (Yield Management)', 'Tìm nguyên nhân các hạt bụi siêu vi gây lỗi trên phiến wafer'],
          deliverables: ['Quy trình sản xuất chuẩn hóa SOP', 'Báo cáo nâng cao tỷ lệ mẻ đúc đạt chuẩn (Yield)'],
          tools: ['Hệ thống quang khắc DUV/EUV', 'Thiết bị lắng đọng pha hơi hóa học CVD', 'Máy đo quang phổ phổ kế Ellipsometer'],
          env: 'Phòng sạch Cleanroom cấp độ ISO Class 1 tại các nhà máy chế tạo chip toàn cầu.',
          tradeoffs: ['Mặc bộ quần áo bảo hộ toàn thân "bunny suit" cả ngày', 'Môi trường làm việc dùng nhiều hóa chất đặc thù đòi hỏi kỷ luật an toàn tối đa'],
          skills: ['Vật lý bán dẫn và hóa học plasma', 'Phân tích thống kê quy trình SPC', 'Kỹ năng giải quyết sự cố sản xuất'],
          subjects: ['Vật lý', 'Hóa học', 'Toán học'],
          pathways: [
            { level: 'Đại học' as const, description: 'Kỹ sư Khoa học Vật liệu, Hóa học ứng dụng, Vật lý kỹ thuật hoặc Kỹ thuật Điện tử' }
          ],
          trial: 'Tìm hiểu tại sao phòng sạch sản xuất chip lại sạch hơn phòng mổ bệnh viện hàng nghìn lần.',
          expType: 'CAREER_PROFILE' as const,
          img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
          alt: 'Kỹ sư phòng sạch kiểm tra phiến bán dẫn silicon'
        },
        {
          id: 'ky-thuat-vien-phong-sach',
          title: 'Kỹ thuật viên phòng sạch (Cleanroom Production Technician)',
          englishTitle: 'Cleanroom Production Technician',
          synonyms: ['Kỹ thuật viên nhà máy chip', 'Fab Operator'],
          riasec: ['R', 'C'] as const,
          summary: 'Trực tiếp hỗ trợ nạp phôi wafer, kiểm tra tình trạng máy móc định kỳ và giám sát nồng độ bụi trong môi trường chế tạo chip.',
          tasks: ['Mặc trang phục phòng sạch đúng quy chuẩn', 'Vận chuyển hộp chứa wafer chuyên dụng (FOUP) giữa các công đoạn', 'Ghi chép nhật ký vận hành máy móc theo ca kíp'],
          deliverables: ['Nhật ký vận chuyển wafer an toàn', 'Báo cáo nồng độ bụi định kỳ'],
          tools: ['Thiết bị đo hạt bụi quang học', 'Máy nâng wafer chân không'],
          env: 'Phòng sạch chế tạo linh kiện điện tử và bán dẫn.',
          tradeoffs: ['Làm việc theo ca kíp (ca ngày/ca đêm)', 'Kỷ luật cá nhân rất cao, không được mang điện thoại, mỹ phẩm vào phòng'],
          skills: ['Tính cẩn trọng', 'Tuân thủ quy trình nghiêm ngặt', 'Khéo léo đôi bàn tay'],
          subjects: ['Vật lý', 'Hóa học'],
          pathways: [
            { level: 'Cao đẳng' as const, description: 'Cao đẳng Nghề Kỹ thuật Điện tử hoặc Cơ điện tử' },
            { level: 'Trung cấp' as const, description: 'Trung cấp Kỹ thuật Công nghiệp' }
          ],
          trial: 'Thực hành các bước rửa tay và mang đồ bảo hộ đúng quy chuẩn.',
          expType: 'CAREER_PROFILE' as const,
          img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
          alt: 'Kỹ thuật viên phòng sạch theo dõi dây chuyền tự động'
        },
        {
          id: 'ky-su-thiet-ke-mach-in-pcb',
          title: 'Kỹ sư thiết kế mạch điện tử (Hardware / PCB Design Engineer)',
          englishTitle: 'Hardware / PCB Design Engineer',
          synonyms: ['Kỹ sư phần cứng', 'Kỹ sư vẽ bo mạch'],
          riasec: ['R', 'I'] as const,
          summary: 'Thiết kế bảng mạch in nhiều lớp (PCB) gắn kết vi xử lý, bộ nhớ, cảm biến và nguồn điện tạo nên sản phẩm hoàn chỉnh như smartphone hay flycam.',
          tasks: ['Vẽ sơ đồ nguyên lý mạch phần cứng', 'Thiết kế bố trí linh kiện và đi dây bo mạch nhiều lớp (PCB Layout)', 'Hàn linh kiện mẫu, đo kiểm tín hiệu và thử nghiệm độ tương thích điện từ (EMC)'],
          deliverables: ['Bo mạch PCB mẫu chạy thử nghiệm', 'Tệp sản xuất Gerber gửi xưởng in mạch'],
          tools: ['Altium Designer', 'KiCAD', 'Máy hàn linh kiện dán SMD', 'Đồng hồ hiện sóng'],
          env: 'Phòng R&D công ty phần cứng, xưởng thử nghiệm IoT.',
          tradeoffs: ['Thường xuyên tiếp xúc với khói thiếc hàn nếu không bật hút khói', 'Phải làm lại mạch nếu đi dây sai tín hiệu tốc độ cao'],
          skills: ['Kỹ năng đọc sơ đồ mạch', 'Kỹ năng hàn vi mạch chính xác', 'Phân tích tương thích điện từ'],
          subjects: ['Vật lý', 'Tin học', 'Công nghệ'],
          pathways: [
            { level: 'Đại học' as const, description: 'Kỹ sư Kỹ thuật Điện tử, Cơ điện tử hoặc Tự động hóa' },
            { level: 'Cao đẳng' as const, description: 'Cao đẳng Điện tử Công nghiệp' }
          ],
          trial: 'Tải phần mềm KiCad miễn phí và vẽ thử sơ đồ một mạch đèn nhấp nháy 2 LED.',
          expType: 'CAREER_PROFILE' as const,
          img: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=800&q=80',
          alt: 'Kỹ sư hàn vi mạch điện tử trên bảng mạch PCB'
        },
        {
          id: 'ky-su-phan-mem-nhung',
          title: 'Kỹ sư phần mềm nhúng (Embedded Firmware Engineer)',
          englishTitle: 'Embedded Firmware / Systems Engineer',
          synonyms: ['Lập trình viên vi điều khiển', 'Firmware Developer'],
          riasec: ['I', 'R'] as const,
          summary: 'Viết mã phần mềm cấp thấp bằng C/C++ trực tiếp nạp vào vi điều khiển để điều khiển thiết bị ô tô, máy bay không người lái hoặc robot.',
          tasks: ['Viết driver giao tiếp phần cứng UART, SPI, I2C, CAN bus', 'Tối ưu hóa bộ nhớ RAM/Flash giới hạn và tiêu thụ năng lượng', 'Gỡ lỗi phần mềm kết hợp đo tín hiệu xung trên phần cứng thật'],
          deliverables: ['Tệp nhị phân Firmware (.hex/.bin)', 'Tài liệu kiến trúc giao thức truyền thông'],
          tools: ['Keil C', 'STM32CubeIDE', 'JTAG / ST-Link Debugger', 'C/C++ nhúng', 'FreeRTOS'],
          env: 'Phòng thí nghiệm IoT, ô tô thông minh, thiết bị y tế.',
          tradeoffs: ['Lỗi phần mềm có thể làm cháy nổ linh kiện phần cứng', 'Gỡ lỗi phức tạp khi xảy ra lỗi ngẫu nhiên về thời gian thực'],
          skills: ['Lập trình C/C++ vi điều khiển', 'Hiểu biết thanh ghi và ngắt vi xử lý', 'Kỹ năng đo kiểm dao động ký'],
          subjects: ['Tin học', 'Vật lý', 'Toán học'],
          pathways: [
            { level: 'Đại học' as const, description: 'Kỹ sư Kỹ thuật Máy tính, Điện tử hoặc Công nghệ thông tin' },
            { level: 'Cao đẳng' as const, description: 'Cao đẳng Kỹ thuật Lập trình nhúng & IoT' }
          ],
          trial: 'Mua một kit Arduino 100k và lập trình cho đèn LED nhấp nháy theo nhịp điệu bài hát.',
          expType: 'CAREER_PROFILE' as const,
          img: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800&q=80',
          alt: 'Kỹ sư nhúng nạp firmware vào bo mạch phát triển'
        },
        {
          id: 'chuyen-vien-mua-hang-linh-kien-dien-tu',
          title: 'Chuyên viên chuỗi cung ứng linh kiện điện tử (Electronics Procurement Specialist)',
          englishTitle: 'Electronics Component Sourcing Specialist',
          synonyms: ['Chuyên viên mua hàng bán dẫn', 'Buyer linh kiện điện tử'],
          riasec: ['E', 'C'] as const,
          summary: 'Theo dõi biến động giá cả và thời gian giao hàng (lead time) của các dòng chip toàn cầu để đảm bảo nhà máy không bị đứt gãy nguồn cung sản xuất.',
          tasks: ['Đàm phán giá và hợp đồng bao tiêu chip dài hạn với các nhà phân phối lớn', 'Tìm nguồn linh kiện thay thế tương đương (Second source) khi dòng chip chính khan hiếm', 'Kiểm soát hàng giả, hàng nhái linh kiện trôi nổi trên thị trường'],
          deliverables: ['Bảng báo giá dự toán linh kiện bom BOM', 'Hợp đồng cung ứng linh kiện ổn định'],
          tools: ['Octopart', 'DigiKey / Mouser Portal', 'Hệ thống SAP ERP'],
          env: 'Văn phòng nhà máy sản xuất điện tử EMS (như Foxconn, Pegatron, Samsung, VinFast).',
          tradeoffs: ['Căng thẳng tột độ khi khủng hoảng thiếu chip toàn cầu xảy ra', 'Phải đàm phán bằng tiếng Anh liên tục qua nhiều múi giờ'],
          skills: ['Đàm phán thương mại quốc tế', 'Hiểu biết về mã số linh kiện điện tử', 'Quản trị rủi ro chuỗi cung ứng'],
          subjects: ['Tiếng Anh', 'Toán học', 'Giáo dục kinh tế và pháp luật'],
          pathways: [
            { level: 'Đại học' as const, description: 'Cử nhân Logistics, Kinh doanh quốc tế hoặc Kỹ thuật Điện tử có định hướng kinh tế' }
          ],
          trial: 'Lên trang web Octopart.com tra cứu mã một con chip vi điều khiển ESP32 xem giá và lượng hàng tồn kho toàn cầu.',
          expType: 'CAREER_PROFILE' as const,
          img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
          alt: 'Kho linh kiện điện tử và chuyên viên quản lý chuỗi cung ứng'
        }
      ]
    }
  ];

  // We will build the rest of the 18 groups programmatically with full rich details
  // Let's load the generator helper for groups 3 through 20
  return [];
}
