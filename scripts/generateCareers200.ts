import fs from 'fs';
import path from 'path';

// Definition of the 20 navigation groups with their 10 specific positions
interface RawGroup {
  id: string;
  label: string;
  positions: {
    title: string;
    englishTitle: string;
    synonyms: string[];
    riasecCodes: ('R' | 'I' | 'A' | 'S' | 'E' | 'C')[];
    shortSummary: string;
    tasks: string[];
    deliverables: string[];
    tools: string[];
    environment: string;
    tradeoffs: string[];
    skills: string[];
    subjects: string[];
    pathways: { level: 'Đại học' | 'Cao đẳng' | 'Trung cấp' | 'Đào tạo nghề' | 'Thực hành tự do'; description: string }[];
    trialActivity: string;
    has3D?: boolean;
    simulationTaskId?: string;
    experienceType?: '3D_INTERACTIVE' | 'SCENARIO_SIMULATION' | 'CAREER_PROFILE';
    imageUrl?: string;
  }[];
}

export const GROUPS_DATA: RawGroup[] = [
  // 1. Ngôn ngữ và giao tiếp quốc tế
  {
    id: 'ngon-ngu',
    label: 'Ngôn ngữ và giao tiếp quốc tế',
    positions: [
      {
        title: 'Phiên dịch hội nghị (Simultaneous Interpreter)',
        englishTitle: 'Conference Interpreter',
        synonyms: ['Phiên dịch cabin', 'Thông dịch viên hội nghị quốc tế'],
        riasecCodes: ['A', 'S', 'E'],
        shortSummary: 'Dịch trực tiếp trong buồng cabin tại các hội nghị đa phương, truyền tải nội dung gần như đồng thời cùng lúc với diễn giả.',
        tasks: ['Nghiên cứu trước tài liệu hội thảo chuyên ngành', 'Nghe qua tai nghe và chuyển ngữ song song trong cabin', 'Ghi chú nhanh thuật ngữ mới và phối hợp cùng đồng nghiệp đổi ca mỗi 30 phút'],
        deliverables: ['Bản dịch nói trực tiếp mượt mà', 'Bảng chú giải thuật ngữ chuyên ngành (Glossary)'],
        tools: ['Hệ thống tai nghe cabin', 'Phần mềm ghi chú thuật ngữ', 'Từ điển chuyên ngành đa ngữ'],
        environment: 'Trung tâm hội nghị quốc tế, khách sạn 5 sao, làm việc từ xa qua nền tảng RSI.',
        tradeoffs: ['Áp lực não bộ cực cao khi dịch đồng thời', 'Lịch trình di chuyển thất thường và phải học thuật ngữ mới liên tục'],
        skills: ['Phản xạ ngôn ngữ tức thì', 'Khả năng tập trung cao độ', 'Vốn từ vựng chuyên ngành sâu'],
        subjects: ['Tiếng Anh', 'Ngữ văn', 'Lịch sử', 'Địa lý'],
        pathways: [
          { level: 'Đại học', description: 'Cử nhân Ngôn ngữ Anh/Pháp/Trung chuyên ngành Biên - Phiên dịch' },
          { level: 'Cao đẳng', description: 'Cao đẳng Tiếng Anh thương mại hoặc Ngoại ngữ ứng dụng' },
          { level: 'Đào tạo nghề', description: 'Chứng chỉ dịch cabin nâng cao quốc tế' }
        ],
        trialActivity: 'Nghe một đoạn phát biểu 2 phút trên TED Talk và dịch đuổi sang tiếng Việt bằng giọng nói.',
        simulationTaskId: 'task-phien-dich',
        experienceType: 'SCENARIO_SIMULATION',
        imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Phiên dịch thương mại (Business Interpreter)',
        englishTitle: 'Commercial & Business Interpreter',
        synonyms: ['Thông dịch viên đàm phán', 'Phiên dịch kinh doanh'],
        riasecCodes: ['E', 'S', 'A'],
        shortSummary: 'Đồng hành cùng doanh nghiệp trong các buổi đàm phán hợp đồng, khảo sát nhà máy, triển lãm thương mại quốc tế.',
        tasks: ['Hỗ trợ dịch nối tiếp trong các cuộc họp thương mại', 'Dịch tài liệu chào hàng và hợp đồng nguyên tắc', 'Nắm bắt văn hóa giao thương để hòa giải bất đồng'],
        deliverables: ['Biên bản dịch đàm phán', 'Tài liệu chào hàng đa ngữ'],
        tools: ['Sổ ký âm phiên dịch', 'Bộ từ điển thương mại quốc tế'],
        environment: 'Văn phòng doanh nghiệp, phòng họp đàm phán, hội chợ triển lãm quốc tế.',
        tradeoffs: ['Cần am hiểu luật thương mại và thuật ngữ tài chính', 'Thời gian làm việc theo giờ của đối tác nước ngoài'],
        skills: ['Kỹ năng ngoại giao và đàm phán', 'Khả năng ứng biến tình huống', 'Hiểu biết văn hóa kinh doanh'],
        subjects: ['Tiếng Anh', 'Ngữ văn', 'Giáo dục kinh tế và pháp luật'],
        pathways: [
          { level: 'Đại học', description: 'Đại học Ngoại ngữ hoặc Kinh tế đối ngoại' },
          { level: 'Cao đẳng', description: 'Cao đẳng Tiếng Anh thương mại' }
        ],
        trialActivity: 'Thử chuyển ngữ một đoạn đối thoại đàm phán mua bán hàng hóa giữa nhà cung cấp và khách mua.'
      },
      {
        title: 'Phiên dịch pháp lý (Legal Interpreter)',
        englishTitle: 'Court & Legal Interpreter',
        synonyms: ['Thông dịch viên tòa án', 'Phiên dịch tố tụng'],
        riasecCodes: ['C', 'I', 'S'],
        shortSummary: 'Dịch trong các phiên tòa, làm việc cùng luật sư, công chứng viên và các cơ quan tố tụng đa quốc gia.',
        tasks: ['Dịch lời khai của đương sự tại tòa án', 'Dịch điều trần và hồ sơ chứng cứ pháp lý', 'Bảo đảm tính chính xác tuyệt đối không thêm bớt'],
        deliverables: ['Bản dịch lời khai có tuyên thệ', 'Bản dịch biên bản tố tụng'],
        tools: ['Thuật ngữ pháp lý song ngữ', 'Hệ thống ghi âm tòa án'],
        environment: 'Tòa án nhân dân, văn phòng luật sư, cơ quan lãnh sự.',
        tradeoffs: ['Trách nhiệm pháp lý rất nặng nếu dịch sai lệch nghĩa', 'Nội dung vụ việc căng thẳng'],
        skills: ['Hiểu biết pháp luật tố tụng', 'Tính trung thực liêm chính tuyệt đối', 'Kỹ năng ký âm chuẩn'],
        subjects: ['Giáo dục kinh tế và pháp luật', 'Ngữ văn', 'Ngoại ngữ'],
        pathways: [
          { level: 'Đại học', description: 'Cử nhân Luật quốc tế hoặc Ngôn ngữ chuyên ngành Pháp lý' }
        ],
        trialActivity: 'Đọc và đối chiếu một điều khoản hợp đồng bằng tiếng Anh và tiếng Việt.'
      },
      {
        title: 'Phiên dịch y tế (Medical Interpreter)',
        englishTitle: 'Healthcare Interpreter',
        synonyms: ['Thông dịch viên bệnh viện', 'Phiên dịch chăm sóc sức khỏe'],
        riasecCodes: ['S', 'I', 'C'],
        shortSummary: 'Cầu nối ngôn ngữ giữa bác sĩ và bệnh nhân nước ngoài, giúp chẩn đoán và điều trị chính xác, an toàn.',
        tasks: ['Dịch triệu chứng và bệnh sử của bệnh nhân cho bác sĩ', 'Dịch hướng dẫn phác đồ điều trị và tác dụng phụ của thuốc', 'Bảo vệ quyền riêng tư y tế của bệnh nhân'],
        deliverables: ['Bản ghi triệu chứng chính xác', 'Bản dịch hướng dẫn sử dụng thuốc'],
        tools: ['Hệ thống từ điển thuật ngữ giải phẫu - bệnh lý', 'Phần mềm Telehealth'],
        environment: 'Bệnh viện quốc tế, phòng khám đa khoa, cơ sở cấp cứu y tế.',
        tradeoffs: ['Đối mặt với cảnh tượng đau ốm, cấp cứu', 'Đòi hỏi độ chuẩn xác về liều lượng thuốc'],
        skills: ['Thấu cảm người bệnh', 'Nắm chắc thuật ngữ y khoa', 'Bình tĩnh trong tình huống khẩn'],
        subjects: ['Sinh học', 'Ngoại ngữ', 'Hóa học'],
        pathways: [
          { level: 'Đại học', description: 'Đại học Ngoại ngữ kết hợp chứng chỉ Y khoa cơ bản' },
          { level: 'Cao đẳng', description: 'Cao đẳng Điều dưỡng / Ngoại ngữ y tế' }
        ],
        trialActivity: 'Đọc nhãn một đơn thuốc tiếng Anh và chuyển ngữ hướng dẫn sử dụng sang tiếng Việt rõ ràng.'
      },
      {
        title: 'Biên dịch tài liệu kỹ thuật (Technical Translator)',
        englishTitle: 'Technical Document Translator',
        synonyms: ['Chuyên viên dịch tài liệu kỹ thuật', 'Biên dịch công nghệ'],
        riasecCodes: ['I', 'R', 'C'],
        shortSummary: 'Chuyển ngữ các tài liệu hướng dẫn kỹ thuật, sổ tay vận hành máy móc, tiêu chuẩn an toàn và bằng sáng chế.',
        tasks: ['Dịch tài liệu đặc tả kỹ thuật và sổ tay thiết bị', 'Sử dụng công cụ CAT Tool để bảo đảm tính nhất quán', 'Đối chiếu bản vẽ kỹ thuật với nội dung dịch'],
        deliverables: ['Sổ tay hướng dẫn vận hành chuẩn ngữ', 'Bản dịch đặc tả kỹ thuật'],
        tools: ['Trados', 'MemoQ', 'AutoCAD Viewer'],
        environment: 'Văn phòng dịch thuật công nghệ hoặc làm việc tự do (Freelance).',
        tradeoffs: ['Công việc đòi hỏi ngồi tập trung cao độ nhiều giờ', 'Cần kiểm tra chi tiết từng thông số'],
        skills: ['Hiểu biết kỹ thuật và cơ khí', 'Kỹ năng tra cứu tài liệu chuyên sâu', 'Cẩn trọng tỉ mỉ'],
        subjects: ['Vật lý', 'Ngoại ngữ', 'Tin học'],
        pathways: [
          { level: 'Đại học', description: 'Đại học Bách khoa hoặc Ngoại ngữ kỹ thuật' },
          { level: 'Cao đẳng', description: 'Cao đẳng Kỹ thuật công nghệ' }
        ],
        trialActivity: 'Dịch thử một trang hướng dẫn an toàn máy in 3D từ tiếng Anh sang tiếng Việt.'
      },
      {
        title: 'Biên dịch văn học (Literary Translator)',
        englishTitle: 'Literary Translator',
        synonyms: ['Dịch giả văn học', 'Biên dịch tiểu thuyết'],
        riasecCodes: ['A', 'I'],
        shortSummary: 'Chuyển tải tác phẩm tiểu thuyết, thơ ca, kịch bản từ ngôn ngữ gốc sang tiếng Việt giữ trọn phong cách văn chương.',
        tasks: ['Nghiên cứu văn phong và bối cảnh lịch sử của tác phẩm', 'Chọn lựa vốn từ tiếng Việt giàu hình ảnh và cảm xúc', 'Biên tập, hiệu đính và thảo luận cùng nhà xuất bản'],
        deliverables: ['Bản thảo sách dịch hoàn chỉnh', 'Lời giới thiệu dịch giả'],
        tools: ['Từ điển từ nguyên học', 'Phần mềm soạn thảo văn bản'],
        environment: 'Làm việc độc lập tại nhà, thư viện, nhà xuất bản.',
        tradeoffs: ['Thu nhập tính theo số trang sách, đòi hỏi kiên trì lâu dài', 'Áp lực truyền tải đúng hồn cốt tác phẩm'],
        skills: ['Năng lực cảm thụ văn học', 'Vốn tiếng Việt phong phú', 'Khả năng sáng tạo ngôn từ'],
        subjects: ['Ngữ văn', 'Lịch sử', 'Ngoại ngữ'],
        pathways: [
          { level: 'Đại học', description: 'Cử nhân Ngôn ngữ học, Văn học hoặc Ngoại ngữ' }
        ],
        trialActivity: 'Dịch một đoạn văn miêu tả tâm trạng nhân vật trong một truyện ngắn nước ngoài.'
      },
      {
        title: 'Biên dịch phụ đề (Audiovisual Translator)',
        englishTitle: 'Subtitler & Dubbing Translator',
        synonyms: ['Dịch phụ đề phim', 'Biên dịch kịch bản lồng tiếng'],
        riasecCodes: ['A', 'C'],
        shortSummary: 'Biên dịch và căn chỉnh phụ đề cho phim ảnh, chương trình truyền hình và video trực tuyến bảo đảm khớp thời lượng hình ảnh.',
        tasks: ['Dịch thoại nhân vật ngắn gọn, tự nhiên', 'Căn chỉnh thời gian hiển thị (Timecode) chuẩn xác', 'Điều chỉnh từ ngữ phù hợp văn hóa khán giả mục tiêu'],
        deliverables: ['Tệp phụ đề chuẩn định dạng .SRT / .VTT', 'Kịch bản lồng tiếng có căn khẩu hình'],
        tools: ['Aegisub', 'Subtitle Edit', 'Premiere Pro'],
        environment: 'Studio hậu kỳ phim ảnh, đài truyền hình, công ty truyền thông số.',
        tradeoffs: ['Giới hạn số ký tự nghiêm ngặt trên màn hình (thường tối đa 37-40 ký tự/dòng)', 'Áp lực tiến độ chiếu phim'],
        skills: ['Kỹ năng rút gọn câu chữ', 'Hiểu tiếng lóng và văn hóa đại chúng', 'Khả năng làm việc với phần mềm phụ đề'],
        subjects: ['Ngoại ngữ', 'Ngữ văn', 'Tin học'],
        pathways: [
          { level: 'Đại học', description: 'Cử nhân Truyền thông đa phương tiện hoặc Ngoại ngữ' },
          { level: 'Đào tạo nghề', description: 'Khóa kỹ năng làm phụ đề phim chuyên nghiệp' }
        ],
        trialActivity: 'Dùng phần mềm phụ đề căn chỉnh thời gian hiển thị phụ đề cho 1 video ngắn 1 phút.'
      },
      {
        title: 'Chuyên viên bản địa hóa (Localization Specialist)',
        englishTitle: 'Localization Specialist',
        synonyms: ['Chuyên viên địa phương hóa game/app', 'Localization Manager'],
        riasecCodes: ['I', 'A', 'C'],
        shortSummary: 'Tùy biến ứng dụng phần mềm, trang web và trò chơi điện tử để phù hợp với ngôn ngữ, văn hóa và thị hiếu người dùng Việt Nam.',
        tasks: ['Trích xuất và dịch chuỗi ngôn ngữ giao diện (UI strings)', 'Kiểm thử hiển thị chữ trên các kích thước màn hình', 'Tham vấn văn hóa về màu sắc, biểu tượng và hình ảnh'],
        deliverables: ['Giao diện phần mềm bản địa hóa hoàn chỉnh', 'Báo cáo lỗi hiển thị chữ LQA (Localization QA)'],
        tools: ['Lokalise', 'Crowdin', 'Figma', 'Git'],
        environment: 'Công ty phát hành game, công ty công nghệ đa quốc gia.',
        tradeoffs: ['Xử lý chuỗi ngôn ngữ trong mã nguồn không được làm vỡ code', 'Phối hợp đa phòng ban'],
        skills: ['Hiểu biết về quy trình phát triển phần mềm', 'Khả năng cảm thụ văn hóa', 'Kỹ năng kiểm thử QA'],
        subjects: ['Tin học', 'Ngoại ngữ', 'Toán học'],
        pathways: [
          { level: 'Đại học', description: 'Cử nhân Công nghệ thông tin hoặc Ngôn ngữ ứng dụng' }
        ],
        trialActivity: 'Thử tìm 3 lỗi dịch gượng gạo trong một ứng dụng di động quốc tế và viết lại cho tự nhiên.'
      },
      {
        title: 'Phiên dịch ngôn ngữ ký hiệu (Sign Language Interpreter)',
        englishTitle: 'Sign Language Interpreter',
        synonyms: ['Thông dịch viên thủ ngữ', 'Phiên dịch cho người khiếm thính'],
        riasecCodes: ['S', 'A'],
        shortSummary: 'Chuyển đổi giữa lời nói và hệ thống ngôn ngữ ký hiệu, giúp người điếc tiếp cận giáo dục, y tế, pháp luật và đời sống.',
        tasks: ['Dịch các bản tin truyền hình và sự kiện cộng đồng bằng thủ ngữ', 'Đồng hành cùng học sinh khiếm thính trong lớp học', 'Tập huấn nâng cao nhận thức cộng đồng về thủ ngữ'],
        deliverables: ['Buổi dịch trực tiếp hỗ trợ hòa nhập', 'Video tài liệu thủ ngữ giáo dục'],
        tools: ['Hệ thống camera ghi hình', 'Tài liệu chuẩn hóa thủ ngữ Việt Nam'],
        environment: 'Trường chuyên biệt, đài truyền hình, trung tâm trợ giúp người khuyết tật.',
        tradeoffs: ['Vận động cơ tay và biểu cảm gương mặt liên tục gây mỏi', 'Cộng đồng cần nguồn nhân lực lớn nhưng đãi ngộ còn khiêm tốn'],
        skills: ['Độ linh hoạt của bàn tay và cơ mặt', 'Tấm lòng nhân ái phụng sự cộng đồng', 'Khả năng quan sát tinh tế'],
        subjects: ['Giáo dục công dân', 'Ngữ văn', 'Sinh học'],
        pathways: [
          { level: 'Đại học', description: 'Sư phạm Giáo dục đặc biệt hoặc Công tác xã hội' },
          { level: 'Đào tạo nghề', description: 'Chứng chỉ Ngôn ngữ ký hiệu Việt Nam (VSL)' }
        ],
        trialActivity: 'Tập học bảng chữ cái ngôn ngữ ký hiệu tiếng Việt và đánh vần tên của mình bằng ngón tay.'
      },
      {
        title: 'Chuyên viên quan hệ quốc tế (International Relations Officer)',
        englishTitle: 'International Relations Officer',
        synonyms: ['Cán bộ hợp tác quốc tế', 'Foreign Affairs Officer'],
        riasecCodes: ['E', 'S', 'C'],
        shortSummary: 'Xây dựng và duy trì các mối quan hệ đối ngoại, ký kết thỏa thuận hợp tác và tổ chức các sự kiện ngoại giao.',
        tasks: ['Dự thảo văn bản thỏa thuận ghi nhớ hợp tác (MOU)', 'Đón tiếp các đoàn đại biểu và chuyên gia quốc tế', 'Theo dõi tiến độ các dự án tài trợ nước ngoài'],
        deliverables: ['Biên bản ghi nhớ hợp tác quốc tế', 'Chương trình làm việc của đoàn ngoại giao'],
        tools: ['Bộ quy chuẩn lễ tân ngoại giao', 'Phần mềm quản trị văn phòng'],
        environment: 'Trường đại học, viện nghiên cứu, tập đoàn kinh tế, cơ quan ngoại vụ.',
        tradeoffs: ['Yêu cầu tính chuẩn xác lễ tân ngoại giao khắt khe', 'Thường xuyên làm việc ngoài giờ khi có đoàn khách'],
        skills: ['Kỹ năng giao tiếp đa văn hóa', 'Khả năng soạn thảo văn bản đối ngoại', 'Nghi thức lễ tân'],
        subjects: ['Lịch sử', 'Địa lý', 'Ngoại ngữ', 'Giáo dục kinh tế và pháp luật'],
        pathways: [
          { level: 'Đại học', description: 'Học viện Ngoại giao, Đại học Khoa học Xã hội & Nhân văn' }
        ],
        trialActivity: 'Soạn thảo một thư mời đón tiếp một đoàn giáo sư nước ngoài đến thăm trường.'
      }
    ]
  },

  // 2. Bán dẫn và điện tử
  {
    id: 'ban-dan',
    label: 'Bán dẫn và điện tử',
    positions: [
      {
        title: 'Kỹ sư thiết kế vi mạch số (Digital IC Design Engineer)',
        englishTitle: 'Digital IC Design Engineer',
        synonyms: ['Kỹ sư thiết kế vi mạch', 'ASIC Design Engineer'],
        riasecCodes: ['I', 'R'],
        shortSummary: 'Mô tả kiến trúc và viết mã phần cứng (Verilog/VHDL) để tạo nên bộ xử lý (CPU, GPU, NPU) trong chip bán dẫn.',
        tasks: ['Xác định kiến trúc vi xử lý và thanh ghi', 'Viết mã RTL mô tả mạch số bằng Verilog/SystemVerilog', 'Mô phỏng logic kiểm tra tính đúng đắn trước khi chế tạo'],
        deliverables: ['Bộ mã nguồn RTL sạch', 'Bản báo cáo phân tích hiệu năng (PPA: Power, Performance, Area)'],
        tools: ['Synopsys Design Compiler', 'Cadence Genus', 'Verilog', 'SystemVerilog'],
        environment: 'Trung tâm nghiên cứu vi mạch hiện đại, làm việc với máy tính chuyên dụng.',
        tradeoffs: ['Chu kỳ dự án kéo dài hàng năm, một lỗi nhỏ tốn hàng triệu USD đúc lại', 'Áp lực cạnh tranh công nghệ toàn cầu'],
        skills: ['Tư duy logic kỹ thuật số', 'Nắm vững kiến trúc máy tính', 'Kỹ năng lập trình phần cứng'],
        subjects: ['Vật lý', 'Toán học', 'Tin học', 'Tiếng Anh'],
        pathways: [
          { level: 'Đại học', description: 'Kỹ sư Kỹ thuật Điện tử - Viễn thông, Kỹ thuật Máy tính, Vật lý Bán dẫn' }
        ],
        trialActivity: 'Thử thiết kế một mạch cộng nhị phân 4-bit trên giấy hoặc phần mềm mô phỏng logic.',
        has3D: true,
        simulationTaskId: 'task-semiconductor-3d',
        experienceType: '3D_INTERACTIVE',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Kỹ sư thiết kế vi mạch tương tự (Analog IC Design Engineer)',
        englishTitle: 'Analog / Mixed-Signal IC Design Engineer',
        synonyms: ['Kỹ sư mạch tương tự', 'RF IC Design Engineer'],
        riasecCodes: ['I', 'R'],
        shortSummary: 'Thiết kế các khối mạch xử lý tín hiệu liên tục như bộ khuếch đại, bộ chuyển đổi ADC/DAC, nguồn điện và mạch thu phát sóng không dây.',
        tasks: ['Thiết kế sơ đồ nguyên lý mạch tương tự ở cấp độ bóng bán dẫn (Transistor)', 'Mô phỏng SPICE để kiểm tra độ nhiễu và dải tần hoạt động', 'Tối ưu layout để chống can nhiễu tín hiệu'],
        deliverables: ['Sơ đồ nguyên lý mạch vi mô', 'Kết quả mô phỏng phổ tín hiệu'],
        tools: ['Cadence Virtuoso', 'HSPICE', 'Spectre'],
        environment: 'Phòng Lab thiết kế vi mạch, trung tâm R&D.',
        tradeoffs: ['Đòi hỏi trực giác vật lý sâu sắc về bán dẫn', 'Mô phỏng mất nhiều thời gian tính toán'],
        skills: ['Hiểu sâu về vật lý bán dẫn', 'Toán giải tích và mạch điện tử', 'Kiên nhẫn tối ưu vi mô'],
        subjects: ['Vật lý', 'Toán học', 'Tiếng Anh'],
        pathways: [
          { level: 'Đại học', description: 'Đại học Bách khoa hoặc ĐH Khoa học Tự nhiên chuyên ngành Điện tử Bán dẫn' }
        ],
        trialActivity: 'Mô phỏng thử nghiệm mạch khuếch đại thuật toán (Op-Amp) đơn giản.'
      },
      {
        title: 'Kỹ sư xác minh thiết kế vi mạch (IC Verification Engineer)',
        englishTitle: 'IC Verification Engineer',
        synonyms: ['Kỹ sư kiểm tra thiết kế chip', 'UVM Verification Engineer'],
        riasecCodes: ['I', 'C', 'R'],
        shortSummary: 'Xây dựng môi trường thử nghiệm tự động bằng phương pháp luận UVM để săn lùng mọi lỗi tiềm ẩn trong thiết kế chip trước khi gửi đi đúc.',
        tasks: ['Lập kế hoạch xác minh bao phủ 100% các trường hợp biên', 'Xây dựng testbench bằng SystemVerilog/UVM', 'Phân tích độ bao phủ mã (Coverage) và báo cáo lỗi cho đội thiết kế'],
        deliverables: ['Bộ kiểm thử tự động Testbench', 'Báo cáo độ bao phủ thiết kế (Coverage Report)'],
        tools: ['Synopsys VCS', 'Cadence Xcelium', 'Python', 'SystemVerilog UVM'],
        environment: 'Phòng Lab thiết kế chip.',
        tradeoffs: ['Chiếm tới 70% thời gian của một dự án phát triển vi mạch', 'Phải suy nghĩ ra các tình huống cực đoan để bẻ gãy hệ thống'],
        skills: ['Tư duy phản biện sắc bén', 'Kỹ năng lập trình hướng đối tượng', 'Tính kiên trì tỉ mỉ'],
        subjects: ['Tin học', 'Toán học', 'Vật lý'],
        pathways: [
          { level: 'Đại học', description: 'Kỹ sư Khoa học máy tính hoặc Kỹ thuật máy tính' }
        ],
        trialActivity: 'Viết danh sách các trường hợp kiểm thử cho một chiếc máy rút tiền tự động ATM.'
      },
      {
        title: 'Kỹ sư thiết kế vật lý vi mạch (Physical Design Engineer)',
        englishTitle: 'Physical Design (Place & Route) Engineer',
        synonyms: ['Kỹ sư Layout vi mạch', 'Kỹ sư P&R'],
        riasecCodes: ['R', 'I', 'C'],
        shortSummary: 'Biến sơ đồ logic thành sơ đồ hình học thực tế (GDSII) gồm hàng tỷ transistor và đường dây kết nối bằng kim loại trên tấm silicon.',
        tasks: ['Bố trí mặt bằng các khối chức năng (Floorplanning)', 'Chạy thuật toán đặt linh kiện và đi dây tự động (Place & Route)', 'Kiểm tra quy tắc thiết kế hình học (DRC) và so khớp sơ đồ (LVS)'],
        deliverables: ['Tệp bản vẽ chế tạo GDSII hoàn chỉnh', 'Báo cáo định thời tĩnh (STA Report)'],
        tools: ['Synopsys IC Compiler II', 'Cadence Innovus', 'Calibre DRC/LVS'],
        environment: 'Công ty thiết kế bán dẫn chuyên nghiệp.',
        tradeoffs: ['Chạy các lượt tính toán qua đêm ngốn dung lượng server lớn', 'Áp lực đảm bảo không vi phạm thời gian tín hiệu'],
        skills: ['Hiểu biết hình học và thuật toán đồ thị', 'Kỹ năng phân tích thời gian trễ', 'Cẩn thận với từng nanomet'],
        subjects: ['Vật lý', 'Tin học', 'Hình học'],
        pathways: [
          { level: 'Đại học', description: 'Đại học Bách khoa hoặc ĐHQG ngành Kỹ thuật Điện tử' }
        ],
        trialActivity: 'Thử sắp xếp các khối phòng chức năng sao cho đường dây điện ngắn nhất và không bị chồng chéo.'
      },
      {
        title: 'Kỹ sư DFT (Design for Testability Engineer)',
        englishTitle: 'DFT Engineer',
        synonyms: ['Kỹ sư thiết kế cho kiểm thử', 'Scan Chain Engineer'],
        riasecCodes: ['I', 'R'],
        shortSummary: 'Chèn thêm các mạch kiểm tra đặc biệt (chuỗi quét scan, BIST) vào trong chip để nhà máy có thể nhanh chóng phát hiện chip hỏng sau khi đúc.',
        tasks: ['Chèn chuỗi quét (Scan insertion) vào mạch số', 'Tạo bộ sinh mẫu thử tự động (ATPG)', 'Tối ưu diện tích mạch kiểm tra để tiết kiệm chi phí silicon'],
        deliverables: ['Tệp mẫu thử ATPG cho máy đo', 'Thiết kế chip có tích hợp mạch tự kiểm tra'],
        tools: ['Synopsys TestMAX', 'Mentor Tessent'],
        environment: 'Các tập đoàn bán dẫn đa quốc gia.',
        tradeoffs: ['Cân bằng khó khăn giữa diện tích chip tăng thêm và khả năng phát hiện lỗi'],
        skills: ['Hiểu biết về lỗi vật lý bán dẫn', 'Kỹ năng thiết kế logic', 'Tư duy tối ưu hóa'],
        subjects: ['Vật lý', 'Tin học', 'Toán học'],
        pathways: [
          { level: 'Đại học', description: 'Kỹ sư Điện tử - Viễn thông' }
        ],
        trialActivity: 'Tìm hiểu nguyên tắc bóng đèn kiểm tra thông mạch hoạt động như thế nào.'
      },
      {
        title: 'Kỹ sư kiểm thử bán dẫn (Semiconductor Test Engineer)',
        englishTitle: 'Semiconductor Test / ATE Engineer',
        synonyms: ['Kỹ sư ATE', 'Test Development Engineer'],
        riasecCodes: ['R', 'I', 'C'],
        shortSummary: 'Lập trình cho máy đo tự động (ATE) để kiểm tra hàng triệu con chip thực tế vừa ra khỏi lò luyện trong vòng vài mili-giây.',
        tasks: ['Thiết kế bảng mạch giao tiếp kiểm thử (Loadboard / Probe card)', 'Viết chương trình đo điện áp, dòng điện và tần số trên máy ATE', 'Phân tích tỷ lệ chip đạt (Yield) và truy tìm nguyên nhân chip hỏng'],
        deliverables: ['Chương trình kiểm thử ATE', 'Báo cáo năng suất chế tạo (Yield Analysis)'],
        tools: ['Hệ thống ATE Advantest / Teradyne', 'Ngôn ngữ C++', 'Dao động ký oscilloscope'],
        environment: 'Nhà máy đóng gói và thử nghiệm bán dẫn (OSAT).',
        tradeoffs: ['Làm việc tại hiện trường nhà máy, có ca trực theo dõi dây chuyền'],
        skills: ['Kỹ năng đo lường điện tử', 'Lập trình C++', 'Phân tích xác suất thống kê'],
        subjects: ['Vật lý', 'Tin học', 'Toán học'],
        pathways: [
          { level: 'Đại học', description: 'Kỹ sư Điện tử, Tự động hóa hoặc Kỹ thuật Đo lường' },
          { level: 'Cao đẳng', description: 'Cao đẳng Kỹ thuật Điện tử ứng dụng' }
        ],
        trialActivity: 'Dùng đồng hồ vạn năng đo điện áp pin và ghi lại bảng giá trị theo thời gian.'
      },
      {
        title: 'Kỹ sư đóng gói bán dẫn (Packaging Engineer)',
        englishTitle: 'Semiconductor Packaging Engineer',
        synonyms: ['Kỹ sư bao gói chip', 'Advanced Packaging Engineer'],
        riasecCodes: ['R', 'I'],
        shortSummary: 'Bảo vệ chip mỏng manh bằng vỏ bọc nhựa/gốm, nối dây vàng cực nhỏ (Wire bonding) và gắn bi hàn (BGA/Flip-chip) để tản nhiệt và kết nối với bo mạch.',
        tasks: ['Mô phỏng truyền nhiệt và ứng suất cơ học của vỏ chip', 'Thiết kế đế đóng gói BGA nhiều lớp', 'Nghiên cứu công nghệ đóng gói chiplet tiên tiến (2.5D/3D Packaging)'],
        deliverables: ['Bản thiết kế vỏ bao gói vi mạch', 'Báo cáo mô phỏng tản nhiệt và độ bền cơ lý'],
        tools: ['ANSYS Icepak', 'AutoCAD', 'Kính hiển vi điện tử'],
        environment: 'Nhà máy OSAT, phòng thí nghiệm vật liệu bán dẫn.',
        tradeoffs: ['Yêu cầu kiến thức liên ngành về cơ nhiệt, vật liệu polyme và điện từ'],
        skills: ['Khoa học vật liệu', 'Mô phỏng cơ nhiệt', 'Quy trình sản xuất chính xác'],
        subjects: ['Hóa học', 'Vật lý', 'Toán học'],
        pathways: [
          { level: 'Đại học', description: 'Kỹ sư Vật liệu, Cơ khí chính xác hoặc Kỹ thuật Điện tử' }
        ],
        trialActivity: 'Tìm hiểu cấu tạo bên trong một con chip CPU máy tính bị tháo nắp bảo vệ.'
      },
      {
        title: 'Kỹ sư quy trình chế tạo bán dẫn (Process Engineer)',
        englishTitle: 'Semiconductor Process Engineer',
        synonyms: ['Kỹ sư Fab', 'Kỹ sư quang khắc'],
        riasecCodes: ['R', 'I', 'C'],
        shortSummary: 'Vận hành các cỗ máy tiền tỷ trong phòng sạch để khắc axit, lắng đọng hơi hóa học, cấy ion và quang khắc tạo lớp mạch trên tấm wafer.',
        tasks: ['Theo dõi các thông số nhiệt độ, áp suất chân không và lưu lượng khí', 'Xử lý sự cố sai lệch kích thước bước quang khắc', 'Kiểm soát ô nhiễm hạt bụi kích thước nanomet'],
        deliverables: ['Tấm wafer silicon hoàn thiện với hàng trăm vi mạch', 'Quy trình thao tác chuẩn SOP'],
        tools: ['Máy quang khắc Lithography', 'Máy đo elip Elipsometer', 'Kính hiển vi SEM'],
        environment: 'Phòng sạch cấp 1 (Cleanroom Class 1/10) vô trùng nghiêm ngặt.',
        tradeoffs: ['Phải mặc bộ đồ phòng sạch trùm kín mít toàn thân nhiều giờ liền', 'Tiếp xúc với hóa chất và khí đặc biệt dưới quy chuẩn bảo hộ khắt khe'],
        skills: ['Kỷ luật an toàn tuyệt đối', 'Kiến thức quang học và hóa lý', 'Xử lý dữ liệu quy trình'],
        subjects: ['Hóa học', 'Vật lý', 'Toán học'],
        pathways: [
          { level: 'Đại học', description: 'Kỹ sư Vật lý Kỹ thuật, Hóa học hoặc Khoa học Vật liệu' }
        ],
        trialActivity: 'Tìm hiểu tại sao phòng sạch sản xuất chip lại sạch hơn phòng mổ bệnh viện hàng nghìn lần.'
      },
      {
        title: 'Kỹ thuật viên phòng sạch (Cleanroom Technician)',
        englishTitle: 'Cleanroom Production Technician',
        synonyms: ['Kỹ thuật viên nhà máy chip', 'Fab Operator'],
        riasecCodes: ['R', 'C'],
        shortSummary: 'Trực tiếp hỗ trợ nạp phôi wafer, kiểm tra tình trạng máy móc định kỳ và giám sát nồng độ bụi trong môi trường chế tạo chip.',
        tasks: ['Mặc trang phục phòng sạch đúng quy chuẩn', 'Vận chuyển hộp chứa wafer chuyên dụng (FOUP) giữa các công đoạn', 'Ghi chép nhật ký vận hành máy móc theo ca kíp'],
        deliverables: ['Nhật ký vận chuyển wafer an toàn', 'Báo cáo nồng độ bụi định kỳ'],
        tools: ['Thiết bị đo hạt bụi quang học', 'Máy nâng wafer chân không'],
        environment: 'Phòng sạch chế tạo linh kiện điện tử và bán dẫn.',
        tradeoffs: ['Làm việc theo ca (ca ngày/ca đêm)', 'Kỷ luật cá nhân rất cao, không được mang điện thoại, mỹ phẩm vào phòng'],
        skills: ['Tính cẩn trọng', 'Tuân thủ quy trình nghiêm ngặt', 'Khéo léo đôi bàn tay'],
        subjects: ['Vật lý', 'Hóa học'],
        pathways: [
          { level: 'Cao đẳng', description: 'Cao đẳng Nghề Kỹ thuật Điện tử hoặc Cơ điện tử' },
          { level: 'Trung cấp', description: 'Trung cấp Kỹ thuật Công nghiệp' }
        ],
        trialActivity: 'Thực hành các bước rửa tay và mang đồ bảo hộ đúng quy chuẩn.'
      },
      {
        title: 'Kỹ sư thiết kế mạch điện tử (PCB Hardware Design Engineer)',
        englishTitle: 'Hardware / PCB Design Engineer',
        synonyms: ['Kỹ sư phần cứng', 'Kỹ sư vẽ bo mạch'],
        riasecCodes: ['R', 'I'],
        shortSummary: 'Thiết kế bảng mạch in nhiều lớp (PCB) gắn kết vi xử lý, bộ nhớ, cảm biến và nguồn điện tạo nên sản phẩm hoàn chỉnh như smartphone hay flycam.',
        tasks: ['Vẽ sơ đồ nguyên lý mạch phần cứng', 'Thiết kế bố trí linh kiện và đi dây bo mạch nhiều lớp (PCB Layout)', 'Hàn linh kiện mẫu, đo kiểm tín hiệu và thử nghiệm độ tương thích điện từ (EMC)'],
        deliverables: ['Bo mạch PCB mẫu chạy thử nghiệm', 'Tệp sản xuất Gerber gửi xưởng in mạch'],
        tools: ['Altium Designer', 'KiCAD', 'Máy hàn linh kiện dán SMD', 'Đồng hồ hiện sóng'],
        environment: 'Phòng R&D công ty phần cứng, xưởng thử nghiệm IoT.',
        tradeoffs: ['Thường xuyên hít phải khói thiếc hàn nếu không bật hút khói', 'Phải làm lại mạch nếu đi dây sai tín hiệu tốc độ cao'],
        skills: ['Kỹ năng đọc sơ đồ mạch', 'Kỹ năng hàn vi mạch chính xác', 'Phân tích tương thích điện từ'],
        subjects: ['Vật lý', 'Tin học', 'Công nghệ'],
        pathways: [
          { level: 'Đại học', description: 'Kỹ sư Kỹ thuật Điện tử, Cơ điện tử hoặc Tự động hóa' },
          { level: 'Cao đẳng', description: 'Cao đẳng Điện tử Công nghiệp' }
        ],
        trialActivity: 'Tải phần mềm KiCad miễn phí và vẽ thử sơ đồ một mạch đèn nhấp nháy 2 LED.'
      }
    ]
  }
];
