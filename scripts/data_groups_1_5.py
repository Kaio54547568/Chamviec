# -*- coding: utf-8 -*-
# Groups 1 - 5 (50 careers)

def get_groups_1_to_5(make_c):
    c = []
    
    # 1. NGÔN NGỮ VÀ GIAO TIẾP QUỐC TẾ
    g1, c1, l1 = "ngon-ngu", "NgoaiNgu", "Ngôn ngữ và giao tiếp quốc tế"
    c.append(make_c(
        "phien-dich-vien-hoi-nghi", "Phiên dịch hội nghị (Simultaneous Interpreter)", "Conference Interpreter",
        ["Phiên dịch cabin", "Thông dịch viên hội nghị"], g1, c1, l1, ["A", "S", "E"],
        "Dịch trực tiếp trong buồng cabin tại các hội nghị quốc tế, truyền tải nội dung gần như đồng thời cùng lúc với diễn giả.",
        ["Nghiên cứu trước tài liệu hội thảo chuyên ngành sâu", "Nghe qua tai nghe và chuyển ngữ tức thì trong buồng cabin", "Ghi chú thuật ngữ mới và phối hợp cùng cộng sự đổi ca mỗi 30 phút"],
        ["Bản dịch nói trực tiếp mượt mà cho thính giả quốc tế", "Bảng chú giải thuật ngữ chuyên ngành (Glossary)"],
        ["Hệ thống tai nghe và micro cabin chuyên dụng", "Phần mềm ghi chú thuật ngữ", "Từ điển chuyên ngành đa ngữ"],
        "Trung tâm hội nghị quốc tế, khách sạn 5 sao, làm việc từ xa qua nền tảng RSI.",
        ["Áp lực não bộ cực cao khi dịch đồng thời", "Lịch trình di chuyển thất thường và phải học thuật ngữ mới liên tục"],
        ["Phản xạ ngôn ngữ tức thì", "Khả năng tập trung cao độ", "Vốn từ vựng chuyên ngành sâu"],
        ["Tiếng Anh", "Ngữ văn", "Lịch sử", "Địa lý"],
        [{"level": "Đại học", "description": "Cử nhân Ngôn ngữ Anh/Pháp/Trung chuyên ngành Biên - Phiên dịch"}, {"level": "Cao đẳng", "description": "Cao đẳng Tiếng Anh thương mại"}, {"level": "Đào tạo nghề", "description": "Chứng chỉ dịch cabin quốc tế"}],
        "Nghe một đoạn phát biểu 2 phút trên TED Talk và dịch đuổi sang tiếng Việt bằng giọng nói.",
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80", "Phiên dịch viên cabin làm việc tại hội nghị quốc tế",
        sim_id="task-phien-dich"
    ))
    c.append(make_c(
        "phien-dich-thuong-mai", "Phiên dịch thương mại (Business Interpreter)", "Business / Escort Interpreter",
        ["Thông dịch viên đàm phán", "Phiên dịch tháp tùng doanh nghiệp"], g1, c1, l1, ["E", "S", "C"],
        "Đồng hành cùng đoàn doanh nghiệp trong các buổi đàm phán hợp đồng, khảo sát nhà xưởng và hội chợ xúc tiến thương mại quốc tế.",
        ["Chuẩn bị hồ sơ năng lực và điều khoản hợp đồng song ngữ", "Dịch nối tiếp trong các cuộc họp thương lượng giá cả", "Xử lý các tình huống văn hóa kinh doanh nhạy cảm"],
        ["Biên bản ghi nhớ đàm phán song ngữ", "Bản dịch trao đổi thương mại"],
        ["Sổ ghi chú đàm phán", "Phần mềm quản lý tài liệu đám mây"],
        "Phòng họp doanh nghiệp, nhà máy sản xuất, hội chợ quốc tế.",
        ["Thường xuyên đi công tác xa nhà", "Chịu trách nhiệm trực tiếp nếu hiểu lầm điều khoản giao dịch"],
        ["Ngoại ngữ thương mại", "Nghi thức ngoại giao kinh doanh", "Kỹ năng lắng nghe tích cực"],
        ["Tiếng Anh", "Ngữ văn", "Giáo dục kinh tế và pháp luật"],
        [{"level": "Đại học", "description": "Cử nhân Ngôn ngữ kết hợp Quản trị kinh doanh/Kinh tế đối ngoại"}, {"level": "Cao đẳng", "description": "Cao đẳng Tiếng Anh thương mại"}],
        "Đọc một email chào hàng bằng tiếng Anh và viết thư hồi đáp bằng tiếng Việt lịch thiệp.",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80", "Phiên dịch viên thương mại hỗ trợ đàm phán hợp đồng"
    ))
    c.append(make_c(
        "bien-dich-vien-ky-thuat", "Biên dịch viên kỹ thuật & pháp lý (Technical & Legal Translator)", "Technical & Legal Translator",
        ["Biên dịch tài liệu chuyên ngành", "Chuyên viên dịch thuật hợp đồng"], g1, c1, l1, ["C", "I"],
        "Chuyển ngữ các tài liệu kỹ thuật phức tạp, hồ sơ thầu, quy chuẩn kỹ thuật và hợp đồng pháp lý đảm bảo độ chính xác tuyệt đối.",
        ["Tra cứu thuật ngữ luật pháp và kỹ thuật công nghệ", "Sử dụng công cụ hỗ trợ dịch thuật (CAT Tools) để duy trì tính nhất quán", "Hiệu đính bản dịch theo chuẩn ISO 17100"],
        ["Bản dịch hợp đồng pháp lý hoàn chỉnh", "Bản dịch hướng dẫn vận hành máy móc"],
        ["SDL Trados Studio", "memoQ", "Hệ thống bộ nhớ dịch Translation Memory"],
        "Văn phòng dịch thuật, công ty luật, làm việc tự do (Freelance) tại nhà.",
        ["Ngồi làm việc với văn bản hàng giờ liền", "Sai sót một từ trong hợp đồng có thể gây thiệt hại tài chính lớn"],
        ["Độ cẩn trọng tuyệt đối", "Nắm vững cấu trúc ngữ pháp chuyên ngành", "Tư duy đối chiếu thuật ngữ"],
        ["Tiếng Anh", "Ngữ văn", "Tin học"],
        [{"level": "Đại học", "description": "Cử nhân Ngôn ngữ Anh/Trung/Hàn/Nhật hoặc Cử nhân Luật chuyên ngành Ngoại ngữ"}, {"level": "Cao đẳng", "description": "Cao đẳng Ngôn ngữ ứng dụng"}],
        "Thử đối chiếu một bản cam kết bảo mật thông tin (NDA) song ngữ Anh - Việt để tìm sự khác biệt thuật ngữ.",
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80", "Biên dịch viên kiểm tra tài liệu kỹ thuật trên máy tính"
    ))
    c.append(make_c(
        "chuyen-vien-ban-dia-hoa", "Chuyên viên bản địa hóa phần mềm & trò chơi (Localization Specialist)", "Game & Software Localization Specialist",
        ["Chuyên viên L10n", "Biên dịch viên game"], g1, c1, l1, ["A", "C", "I"],
        "Điều chỉnh ngôn ngữ, văn hóa, giao diện và nội dung của game/ứng dụng để người dùng bản địa có trải nghiệm tự nhiên nhất.",
        ["Dịch chuỗi văn bản giao diện (UI strings) có giới hạn độ dài ký tự", "Chuyển hóa lối chơi chữ, hài hước và thần thoại trong game phù hợp văn hóa Việt", "Kiểm thử ngôn ngữ trực tiếp trong game (LQA) để sửa lỗi tràn chữ"],
        ["Tệp ngôn ngữ JSON/PO đã bản địa hóa", "Báo cáo lỗi hiển thị văn bản giao diện"],
        ["Crowdin", "Lokalise", "Git", "Phần mềm giả lập game"],
        "Công ty sản xuất game (Studio Game), công ty phát triển phần mềm toàn cầu.",
        ["Phải chơi đi chơi lại nhiều phân cảnh để bắt lỗi văn bản", "Áp lực tiến độ phát hành đồng thời trên toàn cầu"],
        ["Cảm thụ văn hóa đại chúng sâu sắc", "Vốn từ vựng trẻ trung phong phú", "Kỹ năng kiểm thử giao diện"],
        ["Tiếng Anh", "Ngữ văn", "Tin học"],
        [{"level": "Đại học", "description": "Cử nhân Ngôn ngữ Anh, Văn học hoặc Công nghệ thông tin"}, {"level": "Cao đẳng", "description": "Cao đẳng Ngoại ngữ ứng dụng"}],
        "Xem một câu thoại hài hước trong game tiếng Anh và nghĩ 3 cách dịch tiếng Việt vừa bắt trend vừa tự nhiên.",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80", "Chuyên viên bản địa hóa kiểm thử ngôn ngữ trò chơi điện tử"
    ))
    c.append(make_c(
        "giao-vien-ngoai-ngu", "Giáo viên tiếng Anh / Ngôn ngữ quốc tế", "ESL / Foreign Language Teacher",
        ["Giáo viên ngoại ngữ", "Giảng viên tiếng Anh"], g1, c1, l1, ["S", "A", "E"],
        "Giảng dạy kiến thức ngữ pháp, từ vựng và rèn luyện 4 kỹ năng nghe - nói - đọc - viết cho học sinh, người đi làm.",
        ["Soạn giáo án và bài giảng tương tác đa phương tiện", "Tổ chức các hoạt động thảo luận nhóm và thuyết trình trên lớp", "Chấm bài luận và sửa phát âm từng cá nhân"],
        ["Kế hoạch bài dạy (Lesson Plan)", "Hồ sơ đánh giá tiến bộ học tập của học viên"],
        ["Canva Giáo dục", "Quizizz", "Google Classroom", "Bảng tương tác thông minh"],
        "Trường phổ thông, trung tâm ngoại ngữ, lớp học trực tuyến.",
        ["Nói liên tục nhiều giờ liền gây khàn giọng", "Phải kiên nhẫn với học viên tiếp thu chậm hoặc thiếu tự tin"],
        ["Phương pháp sư phạm hiện đại", "Phát âm chuẩn quốc tế", "Khả năng truyền cảm hứng"],
        ["Tiếng Anh", "Ngữ văn"],
        [{"level": "Đại học", "description": "Cử nhân Sư phạm Tiếng Anh hoặc Cử nhân Ngôn ngữ Anh có chứng chỉ nghiệp vụ sư phạm"}, {"level": "Đào tạo nghề", "description": "Chứng chỉ giảng dạy quốc tế CELTA, TESOL hoặc TEFL"}],
        "Thử soạn một trò chơi nhỏ kéo dài 5 phút để dạy 5 từ vựng mới về chủ đề công nghệ.",
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80", "Giáo viên tiếng Anh giảng dạy tương tác trong lớp học"
    ))
    c.append(make_c(
        "chuyen-vien-truyen-thong-quoc-te", "Chuyên viên quan hệ công chúng quốc tế (Global PR Specialist)", "International PR Specialist",
        ["Chuyên viên truyền thông quốc tế", "Global Corporate Communications"], g1, c1, l1, ["E", "A", "S"],
        "Xây dựng thông cáo báo chí, duy trì mối quan hệ với cơ quan thông tấn nước ngoài và đại diện phát ngôn cho tổ chức ra thế giới.",
        ["Soạn thảo thông cáo báo chí bằng tiếng Anh chuẩn mực", "Điều phối phỏng vấn giữa báo chí quốc tế và ban lãnh đạo", "Theo dõi dư luận quốc tế và xử lý khủng hoảng truyền thông xuyên biên giới"],
        ["Thông cáo báo chí quốc tế", "Hồ sơ báo chí truyền thông (Press Kit)"],
        ["Cision", "PR Newswire", "Google Alerts", "Meltwater"],
        "Tập đoàn đa quốc gia, tổ chức phi chính phủ (NGO), cơ quan ngoại giao.",
        ["Phải phản ứng ngay lập tức kể cả nửa đêm khi có sự cố báo chí", "Nhạy cảm cao về khác biệt văn hóa và chính trị"],
        ["Kỹ năng viết lách báo chí sắc bén", "Tư duy quản trị danh tiếng", "Giao tiếp thuyết phục"],
        ["Tiếng Anh", "Ngữ văn", "Lịch sử"],
        [{"level": "Đại học", "description": "Cử nhân Quan hệ quốc tế, Báo chí truyền thông hoặc Ngôn ngữ Anh"}],
        "Đọc một tin tức sự kiện ở Việt Nam và viết tóm tắt 3 câu bằng tiếng Anh gửi cho phóng viên nước ngoài.",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80", "Chuyên viên truyền thông quốc tế trao đổi với đối tác"
    ))
    c.append(make_c(
        "chuyen-vien-kinh-doanh-quoc-te", "Chuyên viên phát triển kinh doanh quốc tế (International Business Developer)", "International Business Development Specialist",
        ["Chuyên viên mở rộng thị trường nước ngoài", "Global Sales Lead"], g1, c1, l1, ["E", "C", "S"],
        "Tìm kiếm khách hàng doanh nghiệp nước ngoài, đàm phán hợp đồng xuất khẩu và mở rộng mạng lưới phân phối toàn cầu.",
        ["Nghiên cứu thị trường và rào cản pháp lý tại quốc gia mục tiêu", "Gửi thư ngỏ, gọi điện chào hàng B2B và tham gia hội chợ thương mại", "Đàm phán hạn mức tín dụng và điều kiện giao hàng Incoterms"],
        ["Hợp đồng mua bán ngoại thương đã ký kết", "Kế hoạch phát triển thị trường mới"],
        ["LinkedIn Sales Navigator", "HubSpot CRM", "Zoom / Teams", "Statista"],
        "Văn phòng xuất nhập khẩu, thường xuyên bay công tác nước ngoài.",
        ["Chênh lệch múi giờ làm đảo lộn sinh hoạt", "Áp lực doanh số (Doanh thu USD) hàng quý"],
        ["Kỹ năng đàm phán thương mại quốc tế", "Thấu hiểu văn hóa đối tác", "Nhạy bén cơ hội thị trường"],
        ["Tiếng Anh", "Toán học", "Địa lý"],
        [{"level": "Đại học", "description": "Cử nhân Kinh tế đối ngoại, Kinh doanh quốc tế hoặc Ngôn ngữ kết hợp Kinh tế"}, {"level": "Cao đẳng", "description": "Cao đẳng Kinh doanh quốc tế"}],
        "Tìm kiếm sản phẩm cà phê Việt Nam và viết 1 đoạn giới thiệu hấp dẫn bằng tiếng Anh để chào bán cho nhà phân phối châu Âu.",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80", "Chuyên viên phát triển kinh doanh quốc tế đàm phán hợp đồng"
    ))
    c.append(make_c(
        "chuyen-vien-ban-quyen-xuat-ban", "Chuyên viên bản quyền và dịch thuật xuất bản (Publishing Rights Manager)", "Publishing Rights & Acquisitions Specialist",
        ["Biên tập viên mua bản quyền sách", "Quản lý bản quyền xuất bản"], g1, c1, l1, ["A", "C", "I"],
        "Đánh giá các đầu sách bán chạy trên thế giới, đàm phán mua bản quyền dịch thuật và quản lý tiến độ chuyển ngữ để xuất bản sách.",
        ["Đọc bản thảo tiếng nước ngoài và viết báo cáo thẩm định nội dung", "Thương lượng phí bản quyền (Advance & Royalty) với đại lý nước ngoài", "Tuyển chọn và nghiệm thu bản thảo từ các dịch giả uy tín"],
        ["Báo cáo thẩm định sách", "Hợp đồng chuyển nhượng bản quyền tác phẩm"],
        ["Frankfurt Book Fair Portal", "Phần mềm biên tập văn bản", "Hệ thống quản lý bản thảo"],
        "Nhà xuất bản, công ty phát hành sách tư nhân, hội chợ sách quốc tế.",
        ["Đọc khối lượng sách khổng lồ mỗi tháng", "Áp lực đánh giá đúng thị hiếu độc giả trong nước"],
        ["Gu thẩm mỹ văn học", "Kỹ năng biên tập ngôn từ tinh tế", "Hiểu biết luật sở hữu trí tuệ"],
        ["Ngữ văn", "Tiếng Anh", "Lịch sử"],
        [{"level": "Đại học", "description": "Cử nhân Ngôn ngữ học, Văn học, Xuất bản hoặc Báo chí"}],
        "Đọc phần giới thiệu của một cuốn sách best-seller nước ngoài và viết bài review ngắn lý giải tại sao sách nên được dịch sang tiếng Việt.",
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80", "Biên tập viên xuất bản xem xét bản thảo sách"
    ))
    c.append(make_c(
        "dieu-phoi-vien-du-an-ngo", "Điều phối viên dự án phi chính phủ quốc tế (INGO Project Coordinator)", "International NGO Project Coordinator",
        ["Cán bộ dự án quốc tế", "Điều phối viên cứu trợ nhân đạo"], g1, c1, l1, ["S", "E", "I"],
        "Kết nối nguồn tài trợ từ các tổ chức quốc tế với các dự án cộng đồng tại địa phương như bảo vệ môi trường, giáo dục trẻ em vùng cao.",
        ["Viết đề xuất tài trợ (Grant Proposal) bằng tiếng Anh", "Tổ chức các chuyến đi thực địa đánh giá nhu cầu người dân", "Theo dõi tiến độ giải ngân và báo cáo định kỳ cho nhà tài trợ quốc tế"],
        ["Báo cáo tác động dự án (Impact Report)", "Đề xuất xin tài trợ hoàn chỉnh"],
        ["Trello/Asana", "KoboToolbox", "Excel nâng cao"],
        "Văn phòng tổ chức quốc tế kết hợp đi thực địa tại các thôn bản vùng sâu vùng xa.",
        ["Điều kiện ăn ở khi đi thực địa cơ sở còn nhiều thiếu thốn", "Quy trình kiểm toán và giải trình tài chính cực kỳ nghiêm ngặt"],
        ["Kỹ năng viết đề xuất dự án thuyết phục", "Giao tiếp liên văn hóa tôn trọng", "Tổ chức sự kiện cộng đồng"],
        ["Tiếng Anh", "Địa lý", "Giáo dục công dân / Kinh tế & Pháp luật"],
        [{"level": "Đại học", "description": "Cử nhân Quốc tế học, Xã hội học, Công tác xã hội hoặc Ngôn ngữ Anh"}],
        "Thử phác thảo 3 mục tiêu cụ thể bằng tiếng Anh cho một dự án mang thư viện sách đến học sinh miền núi.",
        "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80", "Điều phối viên dự án quốc tế làm việc cùng cộng đồng"
    ))
    c.append(make_c(
        "huong-dan-vien-du-lich-quoc-te", "Hướng dẫn viên du lịch quốc tế (International Tour Guide)", "Inbound / Outbound Tour Guide",
        ["Hướng dẫn viên inbound", "Hướng dẫn viên outbound"], g1, c1, l1, ["E", "S", "A"],
        "Dẫn các đoàn khách quốc tế tham quan danh lam thắng cảnh, di sản văn hóa Việt Nam hoặc đưa đoàn người Việt du lịch nước ngoài.",
        ["Thuyết minh sống động về lịch sử, văn hóa, ẩm thực bằng ngoại ngữ", "Điều phối lịch trình xe đưa đón, khách sạn và bữa ăn cho đoàn", "Xử lý các sự cố phát sinh như khách lạc đường, mất hộ chiếu hoặc đau ốm"],
        ["Nhật ký hành trình tour", "Khảo sát độ hài lòng của khách du lịch"],
        ["Thẻ hướng dẫn viên quốc tế", "Micro thuyết minh không dây", "Bản đồ số du lịch"],
        "Các điểm danh lam thắng cảnh, di tích lịch sử, sân bay, xe du lịch.",
        ["Đi lại liên tục, làm việc vào các dịp lễ tết khi mọi người nghỉ ngơi", "Phải luôn giữ nụ cười và năng lượng tích cực trước khách hàng"],
        ["Ngoại ngữ giao tiếp lưu loát tự nhiên", "Kiến thức lịch sử văn hóa sâu rộng", "Kỹ năng ứng biến xử lý tình huống khẩn cấp"],
        ["Lịch sử", "Địa lý", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị du lịch và lữ hành hoặc Ngôn ngữ"}, {"level": "Cao đẳng", "description": "Cao đẳng Hướng dẫn du lịch quốc tế"}, {"level": "Đào tạo nghề", "description": "Chứng chỉ nghiệp vụ hướng dẫn viên du lịch quốc tế"}],
        "Thử quay một video ngắn 2 phút bằng tiếng Anh giới thiệu một món ăn đường phố nổi tiếng nơi em sống cho du khách nước ngoài.",
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80", "Hướng dẫn viên du lịch quốc tế thuyết minh tại danh lam thắng cảnh"
    ))

    # 2. BÁN DẪN, VI MẠCH VÀ PHẦN CỨNG
    g2, c2, l2 = "ban-dan", "KyThuat", "Bán dẫn, vi mạch và phần cứng"
    c.append(make_c(
        "ky-su-thiet-ke-vi-mach-front-end", "Kỹ sư thiết kế vi mạch số (RTL Design Engineer)", "ASIC/SoC RTL Design Engineer",
        ["Kỹ sư thiết kế chip bán dẫn", "RTL Engineer"], g2, c2, l2, ["I", "R", "C"],
        "Chuyển hóa các yêu cầu kiến trúc vi xử lý thành mã mô tả phần cứng Verilog/SystemVerilog, tạo nên bộ não số của các thiết bị thông minh.",
        ["Viết mã RTL mô tả chức năng các khối logic vi mạch", "Mô phỏng chức năng logic và sửa lỗi timing", "Phối hợp với đội ngũ kiểm thử để đạt độ bao phủ kiểm tra 100%"],
        ["Bộ mã nguồn RTL chuẩn hóa", "Báo cáo tổng hợp logic (Synthesis Report)"],
        ["Synopsys Design Compiler", "Cadence Genus", "QuestaSim", "Verilog/SystemVerilog"],
        "Văn phòng thiết kế vi mạch R&D, máy tính cấu hình cực mạnh chạy Linux.",
        ["Thời gian chạy mô phỏng dài hàng giờ liền", "Sai sót nhỏ trong mã RTL khi xuất xưởng ra chip vật lý sẽ tốn hàng triệu USD để làm lại"],
        ["Tư duy kiến trúc máy tính", "Lập trình phần cứng Verilog/SystemVerilog", "Hiểu biết sâu sắc về logic số"],
        ["Toán học", "Vật lý", "Tin học"],
        [{"level": "Đại học", "description": "Kỹ sư Thiết kế vi mạch, Kỹ thuật Điện tử - Viễn thông hoặc Kỹ thuật Máy tính"}],
        "Tìm hiểu cổng logic AND, OR, NOT và vẽ sơ đồ mạch cộng 1-bit đơn giản.",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", "Phiến silicon bán dẫn và vi mạch vi xử lý",
        has_3d=True, sim_id="task-semiconductor-3d"
    ))
    c.append(make_c(
        "ky-su-kiem-thu-vi-mach", "Kỹ sư kiểm thử vi mạch (Design Verification Engineer)", "IC Design Verification Engineer",
        ["Kỹ sư DV", "Kỹ sư kiểm tra tính đúng đắn vi mạch"], g2, c2, l2, ["I", "C"],
        "Xây dựng môi trường giả lập tinh vi để kiểm tra hàng tỷ tình huống tín hiệu, đảm bảo con chip hoạt động hoàn hảo trước khi gửi nhà máy đúc wafer.",
        ["Xây dựng môi trường kiểm thử tự động UVM", "Viết các kịch bản kiểm tra ngẫu nhiên có ràng buộc", "Phân tích độ bao phủ chức năng (Functional Coverage)"],
        ["Môi trường kiểm thử UVM hoàn chỉnh", "Báo cáo độ bao phủ mã và chức năng"],
        ["Synopsys VCS", "Cadence Xcelium", "SystemVerilog UVM", "Python"],
        "Phòng thiết kế chip, làm việc phối hợp chặt chẽ với kỹ sư RTL.",
        ["Công việc đòi hỏi tư duy tìm lỗi và phản biện cực cao", "Chiếm tới 70% tổng thời gian trong một dự án thiết kế vi mạch"],
        ["Phương pháp kiểm thử hướng đối tượng UVM", "Tư duy tìm lỗi biên (Corner cases)", "Kỹ năng tự động hóa bằng script"],
        ["Toán học", "Tin học", "Vật lý"],
        [{"level": "Đại học", "description": "Kỹ sư Thiết kế vi mạch, Kỹ thuật Máy tính hoặc Khoa học Máy tính"}],
        "Tập suy nghĩ các trường hợp kiểm thử cho một chiếc máy rút tiền tự động: rút 0 đồng, nhập sai PIN 3 lần, rút quá số dư.",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", "Kỹ sư kiểm thử vi mạch phân tích sóng tín hiệu",
        has_3d=True, sim_id="task-semiconductor-3d"
    ))
    c.append(make_c(
        "ky-su-layout-vi-mach", "Kỹ sư thiết kế vật lý vi mạch (Physical Design / Layout Engineer)", "Physical Design & Layout Engineer",
        ["Kỹ sư Backend vi mạch", "Kỹ sư sắp đặt linh kiện vi mô"], g2, c2, l2, ["R", "I", "C"],
        "Biến sơ đồ logic thành sơ đồ hình học của hàng tỷ bóng bán dẫn nano trên các lớp kim loại của phiến silicon.",
        ["Quy hoạch mặt bằng chip (Floorplanning)", "Sắp xếp vị trí tế bào logic (Placement) và đi dây tín hiệu (Routing)", "Đóng timing (Timing Closure) và kiểm tra quy tắc vật lý DRC/LVS"],
        ["Tệp layout hình học GDSII sẵn sàng chuyển cho nhà máy đúc chip (Fab)", "Báo cáo kiểm tra thời gian trễ"],
        ["Synopsys IC Compiler II", "Cadence Innovus", "Calibre DRC/LVS"],
        "Phòng R&D công nghệ cao, làm việc với các tiến trình sản xuất tiên tiến 7nm, 5nm, 3nm.",
        ["Chạy đua với áp lực thời gian để kịp lịch đúc chip (Tape-out)", "Giải quyết bài toán nghẽn tín hiệu và sinh nhiệt phức tạp"],
        ["Kiến thức vật lý bán dẫn", "Giải thuật định tuyến và phân bổ không gian", "Kiểm soát trễ xung nhịp clock tree"],
        ["Vật lý", "Toán học", "Tin học"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật Điện tử, Vật lý kỹ thuật bán dẫn hoặc Cơ điện tử"}],
        "Chơi trò chơi xếp hình dây nối vi mạch hoặc xem video về quy trình quang khắc EUV.",
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80", "Sơ đồ mạch tích hợp vật lý phóng đại",
        has_3d=True, sim_id="task-semiconductor-3d"
    ))
    c.append(make_c(
        "ky-su-dong-goi-va-kiem-tra-ban-dan", "Kỹ sư đóng gói và đo kiểm bán dẫn (OSAT Engineer)", "Semiconductor Packaging & Test Engineer",
        ["Kỹ sư OSAT", "Kỹ sư đóng vỏ chip BGA"], g2, c2, l2, ["R", "I"],
        "Cắt phiến wafer thành từng con chip nhỏ (die), gắn lên đế tiếp xúc, đúc nhựa bảo vệ và thực hiện đo kiểm điện áp công nghiệp.",
        ["Giám sát dây chuyền gắn die và hàn dây kết nối siêu mảnh (Wire bonding/Flip-chip)", "Thiết kế socket và bảng giao tiếp kiểm thử tải ATE", "Phân tích nhiệt và độ bền cơ lý của vỏ chip"],
        ["Quy trình đóng gói BGA/QFN đạt chuẩn JEDEC", "Chương trình đo kiểm tự động trên máy ATE"],
        ["Máy kiểm thử ATE Teradyne / Advantest", "Kính hiển vi điện tử quét SEM", "Phần mềm mô phỏng nhiệt Ansys"],
        "Nhà máy bán dẫn công nghệ cao (Intel, Amkor, Hana Micron).",
        ["Phải mặc đồ phòng sạch và tuân thủ an toàn tĩnh điện ESD nghiêm ngặt", "Ca làm việc liên tục theo nhịp độ xuất xưởng hàng triệu linh kiện"],
        ["Khoa học vật liệu điện tử", "Kỹ thuật đo kiểm tự động ATE", "Phân tích độ tin cậy và tản nhiệt"],
        ["Vật lý", "Hóa học", "Toán học"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật Điện tử, Khoa học Vật liệu hoặc Cơ điện tử"}, {"level": "Cao đẳng", "description": "Cao đẳng Kỹ thuật Điện tử công nghiệp"}],
        "Quan sát các con chip đen trên bo mạch máy tính cũ xem chân nối xung quanh là chân hàn hay chân bi BGA.",
        "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=800&q=80", "Dây chuyền máy móc đóng gói chip bán dẫn tự động",
        has_3d=True, sim_id="task-semiconductor-3d"
    ))
    c.append(make_c(
        "ky-su-ung-dung-vi-mach", "Kỹ sư ứng dụng hiện trường vi mạch (Field Application Engineer - FAE)", "Field Application Engineer (Semiconductors)",
        ["Kỹ sư FAE chip", "Kỹ sư cầu nối khách hàng công nghệ bán dẫn"], g2, c2, l2, ["E", "I", "S"],
        "Hỗ trợ các công ty sản xuất thiết bị điện tử tích hợp con chip của hãng vào bo mạch sản phẩm thương mại của họ.",
        ["Trình bày tài liệu kỹ thuật và thiết kế mẫu (Reference Design)", "Hỗ trợ khách hàng debug lỗi phần cứng và phần mềm nhúng", "Thu thập phản hồi về hiệu năng chip để chuyển về đội ngũ thiết kế R&D"],
        ["Bo mạch thiết kế mẫu phát triển (Evaluation Board Kit)", "Tài liệu hướng dẫn ứng dụng Application Note"],
        ["Máy hiện sóng Oscilloscope", "Bộ phân tích logic Logic Analyzer", "Altium Designer", "C/C++ nhúng"],
        "Văn phòng đại diện hãng bán dẫn (Qualcomm, MediaTek, TI, Renesas, NXP).",
        ["Thường xuyên xử lý sự cố gấp khi dây chuyền khách hàng gặp lỗi", "Đòi hỏi sự cân bằng cao giữa kiến thức kỹ thuật sâu và kỹ năng ăn nói"],
        ["Khả năng chuẩn đoán lỗi hệ thống nhanh", "Giao tiếp kỹ thuật song ngữ", "Kỹ năng trình diễn giải pháp"],
        ["Vật lý", "Tiếng Anh", "Tin học"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật Điện tử - Viễn thông, Điện tử hoặc Cơ điện tử"}],
        "Tập giải thích cho một người bạn về sự khác nhau giữa vi xử lý (CPU) và vi điều khiển (MCU).",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", "Kỹ sư ứng dụng thử nghiệm bo mạch tham chiếu"
    ))
    c.append(make_c(
        "ky-su-che-tao-phien-ban-dan", "Kỹ sư quy trình chế tạo bán dẫn (Semiconductor Process Engineer)", "Semiconductor Process Engineer",
        ["Kỹ sư nhà máy đúc chip", "Fab Engineer"], g2, c2, l2, ["R", "I"],
        "Tối ưu hóa các công đoạn hóa lý trong nhà máy chế tạo chip: quang khắc, lắng đọng màng mỏng và khắc ăn mòn.",
        ["Hiệu chuẩn các thông số nhiệt độ, áp suất khí và liều lượng ion cấy", "Giám sát tỷ lệ thành phẩm tốt (Yield Management)", "Tìm nguyên nhân các hạt bụi siêu vi gây lỗi trên phiến wafer"],
        ["Quy trình sản xuất chuẩn hóa SOP", "Báo cáo nâng cao tỷ lệ mẻ đúc đạt chuẩn (Yield)"],
        ["Hệ thống quang khắc DUV/EUV", "Thiết bị lắng đọng CVD", "Máy đo quang phổ Ellipsometer"],
        "Phòng sạch Cleanroom cấp độ ISO Class 1 tại các nhà máy chế tạo chip.",
        ["Mặc bộ đồ bảo hộ bunny suit cả ngày", "Môi trường dùng hóa chất đặc thù đòi hỏi kỷ luật an toàn tối đa"],
        ["Vật lý bán dẫn và hóa học plasma", "Phân tích thống kê quy trình SPC", "Kỹ năng giải quyết sự cố"],
        ["Vật lý", "Hóa học", "Toán học"],
        [{"level": "Đại học", "description": "Kỹ sư Khoa học Vật liệu, Hóa học ứng dụng, Vật lý kỹ thuật hoặc Kỹ thuật Điện tử"}],
        "Tìm hiểu tại sao phòng sạch sản xuất chip lại sạch hơn phòng mổ bệnh viện hàng nghìn lần.",
        "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80", "Kỹ sư phòng sạch kiểm tra phiến bán dẫn silicon"
    ))
    c.append(make_c(
        "ky-thuat-vien-phong-sach", "Kỹ thuật viên phòng sạch (Cleanroom Production Technician)", "Cleanroom Production Technician",
        ["Kỹ thuật viên nhà máy chip", "Fab Operator"], g2, c2, l2, ["R", "C"],
        "Trực tiếp hỗ trợ nạp phôi wafer, kiểm tra tình trạng máy móc định kỳ và giám sát nồng độ bụi trong môi trường chế tạo chip.",
        ["Mặc trang phục phòng sạch đúng quy chuẩn", "Vận chuyển hộp chứa wafer chuyên dụng FOUP giữa các công đoạn", "Ghi chép nhật ký vận hành máy móc theo ca kíp"],
        ["Nhật ký vận chuyển wafer an toàn", "Báo cáo nồng độ bụi định kỳ"],
        ["Thiết bị đo hạt bụi quang học", "Máy nâng wafer chân không"],
        "Phòng sạch chế tạo linh kiện điện tử và bán dẫn.",
        ["Làm việc theo ca kíp ngày/đêm", "Kỷ luật cá nhân rất cao, không được mang điện thoại, mỹ phẩm vào phòng"],
        ["Tính cẩn trọng", "Tuân thủ quy trình nghiêm ngặt", "Khéo léo đôi bàn tay"],
        ["Vật lý", "Hóa học"],
        [{"level": "Cao đẳng", "description": "Cao đẳng Kỹ thuật Điện tử hoặc Cơ điện tử"}, {"level": "Trung cấp", "description": "Trung cấp Kỹ thuật Công nghiệp"}],
        "Thực hành các bước rửa tay và mang đồ bảo hộ đúng quy chuẩn.",
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80", "Kỹ thuật viên phòng sạch theo dõi dây chuyền tự động"
    ))
    c.append(make_c(
        "ky-su-thiet-ke-mach-in-pcb", "Kỹ sư thiết kế mạch điện tử (Hardware / PCB Design Engineer)", "Hardware / PCB Design Engineer",
        ["Kỹ sư phần cứng", "Kỹ sư vẽ bo mạch"], g2, c2, l2, ["R", "I"],
        "Thiết kế bảng mạch in nhiều lớp (PCB) gắn kết vi xử lý, bộ nhớ, cảm biến và nguồn điện tạo nên sản phẩm hoàn chỉnh.",
        ["Vẽ sơ đồ nguyên lý mạch phần cứng", "Thiết kế bố trí linh kiện và đi dây bo mạch nhiều lớp", "Hàn linh kiện mẫu, đo kiểm tín hiệu và thử nghiệm EMC"],
        ["Bo mạch PCB mẫu chạy thử nghiệm", "Tệp sản xuất Gerber gửi xưởng in mạch"],
        ["Altium Designer", "KiCAD", "Máy hàn linh kiện dán SMD", "Đồng hồ hiện sóng"],
        "Phòng R&D công ty phần cứng, xưởng thử nghiệm IoT.",
        ["Tiếp xúc với khói thiếc hàn nếu thiếu hút mùi", "Phải làm lại mạch nếu đi dây sai tín hiệu cao tần"],
        ["Kỹ năng đọc sơ đồ mạch", "Kỹ năng hàn vi mạch chính xác", "Phân tích tương thích điện từ"],
        ["Vật lý", "Tin học", "Công nghệ"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật Điện tử, Cơ điện tử hoặc Tự động hóa"}, {"level": "Cao đẳng", "description": "Cao đẳng Điện tử Công nghiệp"}],
        "Tải phần mềm KiCad miễn phí và vẽ thử sơ đồ một mạch đèn nhấp nháy 2 LED.",
        "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=800&q=80", "Kỹ sư hàn vi mạch điện tử trên bảng mạch PCB"
    ))
    c.append(make_c(
        "ky-su-phan-mem-nhung", "Kỹ sư phần mềm nhúng (Embedded Firmware Engineer)", "Embedded Firmware / Systems Engineer",
        ["Lập trình viên vi điều khiển", "Firmware Developer"], g2, c2, l2, ["I", "R"],
        "Viết mã phần mềm cấp thấp bằng C/C++ trực tiếp nạp vào vi điều khiển để điều khiển thiết bị ô tô, drone hoặc robot.",
        ["Viết driver giao tiếp phần cứng UART, SPI, I2C, CAN bus", "Tối ưu hóa bộ nhớ RAM/Flash giới hạn và tiêu thụ năng lượng", "Gỡ lỗi phần mềm kết hợp đo tín hiệu xung trên phần cứng"],
        ["Tệp nhị phân Firmware (.hex/.bin)", "Tài liệu kiến trúc giao thức truyền thông"],
        ["Keil C", "STM32CubeIDE", "JTAG / ST-Link Debugger", "C/C++ nhúng", "FreeRTOS"],
        "Phòng thí nghiệm IoT, ô tô thông minh, thiết bị y tế.",
        ["Lỗi phần mềm có thể làm hỏng linh kiện phần cứng", "Gỡ lỗi phức tạp khi xảy ra lỗi ngẫu nhiên về thời gian thực"],
        ["Lập trình C/C++ vi điều khiển", "Hiểu biết thanh ghi và ngắt vi xử lý", "Kỹ năng đo kiểm dao động ký"],
        ["Tin học", "Vật lý", "Toán học"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật Máy tính, Điện tử hoặc Công nghệ thông tin"}, {"level": "Cao đẳng", "description": "Cao đẳng Lập trình nhúng & IoT"}],
        "Mua một kit Arduino và lập trình cho đèn LED nhấp nháy theo nhịp điệu bài hát.",
        "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800&q=80", "Kỹ sư nhúng nạp firmware vào bo mạch phát triển"
    ))
    c.append(make_c(
        "chuyen-vien-mua-hang-linh-kien-dien-tu", "Chuyên viên chuỗi cung ứng linh kiện điện tử (Electronics Procurement Specialist)", "Electronics Component Sourcing Specialist",
        ["Chuyên viên mua hàng bán dẫn", "Buyer linh kiện điện tử"], g2, c2, l2, ["E", "C"],
        "Theo dõi biến động giá cả và thời gian giao hàng của các dòng chip toàn cầu để đảm bảo nhà máy không bị đứt gãy sản xuất.",
        ["Đàm phán giá và hợp đồng bao tiêu chip dài hạn với các nhà phân phối lớn", "Tìm nguồn linh kiện thay thế tương đương khi chip chính khan hiếm", "Kiểm soát hàng giả, hàng nhái linh kiện trôi nổi trên thị trường"],
        ["Bảng báo giá dự toán linh kiện BOM", "Hợp đồng cung ứng linh kiện ổn định"],
        ["Octopart", "DigiKey / Mouser Portal", "Hệ thống SAP ERP"],
        "Văn phòng nhà máy sản xuất điện tử EMS (Foxconn, Pegatron, VinFast).",
        ["Căng thẳng khi khủng hoảng thiếu chip toàn cầu xảy ra", "Đàm phán bằng tiếng Anh liên tục qua nhiều múi giờ"],
        ["Đàm phán thương mại quốc tế", "Hiểu biết về mã số linh kiện điện tử", "Quản trị rủi ro chuỗi cung ứng"],
        ["Tiếng Anh", "Toán học", "Giáo dục kinh tế và pháp luật"],
        [{"level": "Đại học", "description": "Cử nhân Logistics, Kinh doanh quốc tế hoặc Kỹ thuật Điện tử có định hướng kinh tế"}],
        "Lên trang web Octopart.com tra cứu mã một con chip vi điều khiển ESP32 xem giá và lượng hàng tồn kho toàn cầu.",
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", "Kho linh kiện điện tử và chuyên viên quản lý chuỗi cung ứng"
    ))

    # 3. PHẦN MỀM, AI VÀ DỮ LIỆU
    g3, c3, l3 = "phan-mem-ai", "CongNghe", "Phần mềm, AI và dữ liệu"
    c.append(make_c(
        "lap-trinh-vien-fullstack", "Lập trình viên Full-stack (Full-stack Web Developer)", "Full-stack Web Developer",
        ["Kỹ sư phát triển phần mềm", "Web Developer"], g3, c3, l3, ["I", "R", "C"],
        "Thiết kế, xây dựng toàn diện cả giao diện người dùng (Front-end) và hệ thống xử lý máy chủ, cơ sở dữ liệu (Back-end) cho ứng dụng web.",
        ["Lập trình giao diện tương tác mượt mà bằng React / Vue", "Xây dựng RESTful API và GraphQL an toàn bằng Node.js / Go", "Tối ưu hóa truy vấn cơ sở dữ liệu và triển khai lên đám mây"],
        ["Ứng dụng web hoạt động hoàn chỉnh", "Tài liệu API Swagger và bộ mã nguồn chuẩn"],
        ["VS Code", "React / Next.js", "Node.js", "PostgreSQL", "Docker", "Git"],
        "Văn phòng công nghệ hiện đại hoặc làm việc từ xa (Remote/Hybrid).",
        ["Công nghệ thay đổi rất nhanh đòi hỏi tự học liên tục", "Áp lực sửa lỗi gấp khi hệ thống chịu tải lớn bị chậm"],
        ["Tư duy logic thuật toán", "Kỹ năng tự đọc tài liệu tiếng Anh kỹ thuật", "Làm việc nhóm Agile/Scrum"],
        ["Tin học", "Toán học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật phần mềm, CNTT hoặc Khoa học máy tính"}, {"level": "Cao đẳng", "description": "Cao đẳng Công nghệ thông tin ứng dụng"}, {"level": "Đào tạo nghề", "description": "Chứng chỉ lập trình Full-stack chuyên sâu"}],
        "Tạo một trang web giới thiệu bản thân đơn giản bằng HTML, CSS và JavaScript.",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", "Kỹ sư phần mềm viết mã nguồn",
        sim_id="task-lap-trinh"
    ))
    c.append(make_c(
        "ky-su-ai-machine-learning", "Kỹ sư Trí tuệ nhân tạo (AI / Machine Learning Engineer)", "Machine Learning / AI Engineer",
        ["Kỹ sư học máy", "AI Engineer"], g3, c3, l3, ["I", "R"],
        "Phát triển và tinh chỉnh các mô hình học sâu, thị giác máy tính và mô hình ngôn ngữ lớn để tự động hóa nhận diện và phân tích thông minh.",
        ["Thu thập và gán nhãn tập dữ liệu huấn luyện", "Huấn luyện và đánh giá mô hình học sâu (CNN, Transformer)", "Đóng gói mô hình AI thành API độ trễ thấp phục vụ ứng dụng thực tế"],
        ["Mô hình AI đã tối ưu hóa trọng số", "Báo cáo độ chính xác (Precision/Recall)"],
        ["Python", "PyTorch", "TensorFlow", "HuggingFace", "NVIDIA CUDA"],
        "Phòng lab nghiên cứu AI, các viện công nghệ hoặc công ty phần mềm lớn.",
        ["Yêu cầu nền tảng toán học (Đại số tuyến tính, Xác suất thống kê) cực kỳ vững chắc", "Chi phí tính toán GPU cao và thời gian huấn luyện dài"],
        ["Tư duy toán học giải tích và xác suất", "Thành thạo lập trình Python khoa học dữ liệu", "Hiểu biết sâu sắc về kiến trúc mạng nơ-ron"],
        ["Toán học", "Tin học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Kỹ sư Trí tuệ nhân tạo, Khoa học dữ liệu hoặc Toán - Tin học"}],
        "Thử dùng thư viện Scikit-learn phân loại hoa lan theo chiều dài cánh hoa.",
        "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80", "Kỹ sư AI huấn luyện mạng nơ-ron sâu"
    ))
    c.append(make_c(
        "chuyen-vien-phan-tich-du-lieu", "Chuyên viên Phân tích Dữ liệu (Data Analyst)", "Data Analyst",
        ["Chuyên viên BI", "Data Analyst"], g3, c3, l3, ["I", "C", "R"],
        "Khai thác và trực quan hóa các tập dữ liệu lớn nhằm tìm ra quy luật, xu hướng ẩn giấu giúp ban giám đốc ra quyết định kinh doanh chính xác.",
        ["Truy vấn và làm sạch dữ liệu lớn bằng SQL và Python", "Xây dựng các bảng điều khiển trực quan (Dashboard) trên Power BI / Tableau", "Thuyết trình kết quả phân tích và đề xuất giải pháp tăng trưởng"],
        ["Bảng chỉ số Dashboard trực quan theo thời gian thực", "Báo cáo phân tích chuyên sâu các chỉ số kinh doanh"],
        ["SQL", "Power BI", "Tableau", "Python Pandas", "Excel nâng cao"],
        "Văn phòng doanh nghiệp bán lẻ, ngân hàng, công ty thương mại điện tử.",
        ["Dữ liệu thô thực tế thường lộn xộn và thiếu sót mất nhiều thời gian làm sạch", "Phải giải thích số liệu phức tạp cho những người không chuyên về kỹ thuật"],
        ["Kỹ năng kể chuyện bằng dữ liệu (Data Storytelling)", "Tư duy phản biện và nhạy cảm với số liệu", "Thành thạo truy vấn dữ liệu SQL"],
        ["Toán học", "Tin học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Hệ thống thông tin quản lý, Thống kê kinh tế hoặc Khoa học dữ liệu"}, {"level": "Cao đẳng", "description": "Cao đẳng Phân tích dữ liệu kinh doanh"}],
        "Dùng Excel phân tích bảng chi tiêu gia đình trong 3 tháng và vẽ biểu đồ hình tròn so sánh.",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", "Chuyên viên phân tích dữ liệu trực quan hóa đồ thị",
        sim_id="task-lap-trinh"
    ))
    c.append(make_c(
        "ky-su-du-lieu-lon", "Kỹ sư Dữ liệu lớn (Data Engineer)", "Data Engineer",
        ["Kỹ sư đường ống dữ liệu", "Big Data Engineer"], g3, c3, l3, ["I", "R", "C"],
        "Thiết kế, xây dựng và duy trì các đường ống dữ liệu (Data Pipelines) vận chuyển hàng terabyte dữ liệu mỗi ngày một cách ổn định và an toàn.",
        ["Xây dựng hệ thống ETL/ELT tự động chuyển đổi dữ liệu", "Quản trị kho dữ liệu đám mây (Data Warehouse / Data Lake)", "Giám sát hiệu năng và khắc phục sự cố nghẽn dữ liệu"],
        ["Hạ tầng kho dữ liệu Snowflake/BigQuery chuẩn hóa", "Hệ thống đường ống dữ liệu tự động Airflow"],
        ["Apache Spark", "Airflow", "Kafka", "SQL", "Python", "Google BigQuery"],
        "Công ty công nghệ, sàn giao dịch, ngân hàng số.",
        ["Phải túc trực khi đường ống dữ liệu đêm bị lỗi ảnh hưởng đến báo cáo sáng", "Đòi hỏi tư duy tối ưu hóa chi phí lưu trữ đám mây"],
        ["Kiến trúc dữ liệu phân tán", "Tối ưu hóa câu lệnh SQL trên bảng hàng tỷ dòng", "Lập trình đường ống tự động"],
        ["Tin học", "Toán học"],
        [{"level": "Đại học", "description": "Kỹ sư Công nghệ thông tin, Khoa học máy tính hoặc Hệ thống thông tin"}],
        "Tìm hiểu khái niệm Data Pipeline và tại sao ngân hàng cần phân tích hàng triệu giao dịch mỗi giây.",
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80", "Kỹ sư dữ liệu lớn giám sát luồng dữ liệu thời gian thực"
    ))
    c.append(make_c(
        "ky-su-dien-toan-dam-may-devops", "Kỹ sư Điện toán đám mây & DevOps (DevOps / Cloud Engineer)", "Cloud & DevOps Engineer",
        ["Kỹ sư hạ tầng đám mây", "DevOps Engineer"], g3, c3, l3, ["R", "I", "C"],
        "Tự động hóa quy trình đóng gói phần mềm (CI/CD) và quản trị hạ tầng máy chủ đám mây đảm bảo ứng dụng luôn chạy 24/7 không gián đoạn.",
        ["Thiết lập chu trình tự động hóa kiểm thử và triển khai CI/CD", "Cấu hình cụm máy chủ container Kubernetes", "Giám sát tài nguyên máy chủ và bảo vệ chống tấn công mạng"],
        ["Đường ống CI/CD tự động hóa hoàn chỉnh", "Hạ tầng đám mây định nghĩa bằng mã (Terraform IaC)"],
        ["Docker", "Kubernetes", "AWS / GCP", "Terraform", "GitHub Actions", "Linux"],
        "Các công ty công nghệ đa quốc gia, làm việc linh hoạt từ xa.",
        ["Trực ca on-call đêm để xử lý sự cố máy chủ ngừng hoạt động", "Rủi ro cấu hình sai có thể làm sập toàn bộ dịch vụ của công ty"],
        ["Quản trị hệ điều hành Linux chuyên sâu", "Tư duy tự động hóa mọi quy trình thủ công", "Bảo mật mạng và đám mây"],
        ["Tin học", "Tiếng Anh", "Vật lý"],
        [{"level": "Đại học", "description": "Kỹ sư Mạng máy tính, An toàn thông tin hoặc Công nghệ phần mềm"}, {"level": "Cao đẳng", "description": "Cao đẳng Quản trị mạng máy tính"}],
        "Cài đặt một máy ảo Linux Ubuntu trên máy tính cá nhân và thử chạy lệnh kiểm tra dung lượng ổ đĩa.",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", "Kỹ sư DevOps cấu hình hạ tầng đám mây"
    ))
    c.append(make_c(
        "lap-trinh-vien-ung-dung-di-dong", "Lập trình viên Ứng dụng di động (Mobile App Developer)", "Mobile Application Developer",
        ["Lập trình viên iOS / Android", "Mobile Developer"], g3, c3, l3, ["R", "I", "A"],
        "Phát triển các ứng dụng trên smartphone và máy tính bảng chạy hệ điều hành iOS hoặc Android, mang lại trải nghiệm tiện ích cho người dùng.",
        ["Lập trình chức năng ứng dụng bằng Flutter, React Native, Swift hoặc Kotlin", "Tích hợp bản đồ GPS, camera, cảm biến sinh trắc học và thanh toán số", "Tối ưu hóa thời lượng pin và xuất bản lên App Store / Google Play"],
        ["Tệp cài đặt ứng dụng APK / IPA", "Trang thông tin xuất bản ứng dụng trên kho ứng dụng"],
        ["Flutter", "React Native", "Swift / SwiftUI", "Kotlin", "Xcode", "Android Studio"],
        "Công ty phần mềm di động, startup công nghệ, làm việc tự do.",
        ["Phải tương thích với hàng trăm kích thước màn hình và đời máy khác nhau", "Quy trình kiểm duyệt gắt gao của Apple App Store"],
        ["Tư duy thiết kế trải nghiệm người dùng trên màn hình cảm ứng", "Tối ưu hóa bộ nhớ và hiệu năng di động", "Lập trình đa nền tảng"],
        ["Tin học", "Toán học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật phần mềm hoặc Công nghệ thông tin"}, {"level": "Cao đẳng", "description": "Cao đẳng Lập trình ứng dụng di động"}],
        "Tải Flutter hoặc React Native về và chạy thử ứng dụng Hello World trên điện thoại của mình.",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80", "Lập trình viên di động thử nghiệm giao diện trên smartphone"
    ))
    c.append(make_c(
        "ky-su-kiem-thu-phan-mem-qa-qc", "Kỹ sư Kiểm thử phần mềm (Software QA / Automation Tester)", "Software QA / Test Automation Engineer",
        ["Tester", "Chuyên viên kiểm tra chất lượng phần mềm"], g3, c3, l3, ["C", "I"],
        "Tìm kiếm lỗi, kiểm tra độ bảo mật và tính khả dụng của phần mềm để đảm bảo sản phẩm xuất xưởng không gặp lỗi khi tới tay người dùng.",
        ["Viết kịch bản kiểm thử chi tiết cho từng tính năng (Test Case)", "Viết mã kiểm thử tự động bằng Selenium hoặc Cypress", "Thực hiện kiểm thử tải (Load Testing) mô phỏng hàng triệu người truy cập"],
        ["Báo cáo lỗi chi tiết kèm video bằng chứng (Bug Report)", "Bộ kiểm thử tự động hồi quy (Regression Test Suite)"],
        ["Jira", "Postman", "Selenium", "Cypress", "JMeter", "Python/Java"],
        "Công ty gia công phần mềm quốc tế, ngân hàng số, công ty thương mại điện tử.",
        ["Phải kiểm tra đi kiểm tra lại các tính năng quen thuộc dễ gây nhàm chán", "Áp lực tranh luận kỹ thuật với lập trình viên về mức độ nghiêm trọng của lỗi"],
        ["Tư duy cẩn trọng, tỉ mỉ", "Khả năng phân tích các tình huống ngoại lệ", "Kỹ năng lập trình kiểm thử tự động"],
        ["Tin học", "Toán học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Công nghệ thông tin, Hệ thống thông tin"}, {"level": "Cao đẳng", "description": "Cao đẳng Công nghệ phần mềm"}, {"level": "Đào tạo nghề", "description": "Khóa đào tạo Software Tester chuyên nghiệp (ISTQB)"}],
        "Thử vào một trang web mua sắm bất kỳ và tìm xem có nút bấm nào bị lỗi font chữ hoặc bấm không ăn.",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", "Kỹ sư QA kiểm thử tự động hóa trên màn hình máy tính"
    ))
    c.append(make_c(
        "quan-ly-san-pham-cong-nghe", "Quản lý sản phẩm công nghệ (Product Manager - PM)", "Digital Product Manager",
        ["Giám đốc sản phẩm", "Product Owner"], g3, c3, l3, ["E", "I", "S"],
        "Định hướng tầm nhìn, chiến lược tính năng và điều phối sự phối hợp giữa đội lập trình, thiết kế và kinh doanh để tạo ra sản phẩm thành công.",
        ["Nghiên cứu thị trường và phỏng vấn thấu hiểu nỗi đau của người dùng", "Viết tài liệu đặc tả yêu cầu sản phẩm (PRD)", "Ưu tiên danh sách tính năng cần phát triển và đo lường chỉ số giữ chân người dùng"],
        ["Tài liệu yêu cầu sản phẩm (Product Requirement Document)", "Lộ trình phát triển sản phẩm (Product Roadmap)"],
        ["Figma", "Jira", "Notion", "Mixpanel", "Google Analytics"],
        "Công ty công nghệ, startup tăng trưởng nhanh.",
        ["Chịu trách nhiệm về sự thành bại của sản phẩm nhưng không có quyền chỉ huy trực tiếp ai", "Thường xuyên phải nói 'không' với nhiều yêu cầu từ các phòng ban"],
        ["Kỹ năng giao tiếp và thuyết phục xuất sắc", "Tư duy kinh doanh kết hợp hiểu biết công nghệ", "Ra quyết định dựa trên dữ liệu"],
        ["Toán học", "Ngữ văn", "Tiếng Anh", "Giáo dục kinh tế và pháp luật"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị kinh doanh, CNTT hoặc Hệ thống thông tin"}],
        "Chọn một ứng dụng em thích nhất trên điện thoại và viết ra 3 tính năng em muốn cải tiến.",
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80", "Quản lý sản phẩm thảo luận lộ trình cùng đội ngũ"
    ))
    c.append(make_c(
        "lap-trinh-vien-tro-choi-dien-tu", "Lập trình viên Trò chơi điện tử (Game Developer)", "Game Developer / Gameplay Programmer",
        ["Kỹ sư làm game", "Gameplay Programmer"], g3, c3, l3, ["R", "A", "I"],
        "Hiện thực hóa ý tưởng trò chơi bằng mã nguồn, xây dựng cơ chế vật lý va chạm, trí tuệ nhân tạo của quái vật và hiệu ứng hình ảnh sống động.",
        ["Lập trình cơ chế di chuyển, chiến đấu và tương tác nhân vật trong game", "Tối ưu hóa tốc độ khung hình (FPS) trên máy cấu hình yếu", "Tích hợp âm thanh, hiệu ứng hạt và hệ thống lưu điểm"],
        ["Bản build trò chơi chạy thử nghiệm (Playable Demo)", "Bộ mã nguồn logic trò chơi sạch sẽ"],
        ["Unity (C#)", "Unreal Engine (C++ / Blueprints)", "Blender", "Visual Studio"],
        "Các studio game indie hoặc các hãng sản xuất game lớn.",
        ["Giai đoạn nước rút trước khi phát hành (crunch time) làm việc ngoài giờ nhiều", "Thuật toán toán học hình học không gian 3D tương đối nặng"],
        ["Lập trình C# hoặc C++", "Tư duy vật lý và hình học không gian", "Niềm đam mê sâu sắc với cơ chế game"],
        ["Toán học", "Vật lý", "Tin học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật phần mềm hoặc Cử nhân Thiết kế game & Đa phương tiện"}, {"level": "Cao đẳng", "description": "Cao đẳng Lập trình game"}],
        "Tải phần mềm Unity miễn phí và làm theo video hướng dẫn tạo một quả bóng nảy qua các chướng ngại vật.",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", "Lập trình viên trò chơi thử nghiệm môi trường 3D"
    ))
    c.append(make_c(
        "chuyen-vien-khoa-hoc-du-lieu", "Kỹ sư Khoa học dữ liệu (Data Scientist)", "Data Scientist",
        ["Nhà khoa học dữ liệu", "Data Scientist"], g3, c3, l3, ["I", "C", "A"],
        "Sử dụng toán học cao cấp, thống kê và học máy để giải quyết các bài toán dự báo phức tạp như dự đoán nhu cầu tiêu thụ hay phát hiện gian lận.",
        ["Xây dựng các mô hình toán thống kê dự báo", "Kiểm định giả thuyết A/B Testing để đo lường tác động của tính năng mới", "Khám phá các liên kết phi tuyến tính trong tập dữ liệu đa chiều"],
        ["Mô hình toán dự báo có độ tin cậy cao", "Bài báo cáo khoa học dữ liệu đính kèm khuyến nghị kinh doanh"],
        ["Python (NumPy, SciPy, Scikit-learn)", "R", "Jupyter Notebook", "SQL"],
        "Tập đoàn viễn thông, bảo hiểm, viện nghiên cứu kinh tế số.",
        ["Đòi hỏi bằng cấp chuyên môn sâu (Thạc sĩ/Tiến sĩ là một lợi thế)", "Nhiều thử nghiệm mô hình thất bại trước khi tìm ra kết quả đúng"],
        ["Toán xác suất thống kê nâng cao", "Kỹ năng lập trình phân tích dữ liệu", "Khả năng chuyển hóa bài toán thực tế thành bài toán toán học"],
        ["Toán học", "Tin học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Toán học, Khoa học dữ liệu, Khoa học máy tính hoặc Thống kê"}],
        "Tìm hiểu thuật toán dự báo thời tiết dựa trên lịch sử nhiệt độ và độ ẩm các năm trước.",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80", "Nhà khoa học dữ liệu phân tích mô hình xác suất"
    ))

    # 4. Ô TÔ, CƠ ĐIỆN TỬ VÀ ROBOT
    g4, c4, l4 = "o-to-robot", "CoKhi", "Ô tô, cơ điện tử và robot"
    c.append(make_c(
        "ky-thuat-vien-chan-doan-o-to", "Kỹ thuật viên chẩn đoán và sửa chữa ô tô (Automotive Diagnostic Technician)", "Automotive Diagnostic & Service Technician",
        ["Thợ sửa chữa ô tô", "Kỹ thuật viên xưởng dịch vụ ô tô"], g4, c4, l4, ["R", "I"],
        "Sử dụng máy đọc lỗi chuyên dụng và dụng cụ cơ khí chính xác để kiểm tra động cơ, hệ thống phanh, đánh lửa và điện ô tô hiện đại.",
        ["Kết nối máy quét OBD-II để đọc mã lỗi chẩn đoán (DTC)", "Kiểm tra điện áp ắc quy, bugi đánh lửa và áp suất lọc gió động cơ", "Bảo dưỡng hệ thống phanh ABS, thay dầu nhớt và căn chỉnh góc đặt bánh xe"],
        ["Biên bản nghiệm thu sửa chữa ô tô", "Báo cáo thông số chẩn đoán động cơ đạt chuẩn"],
        ["Máy chẩn đoán OBD-II", "Đồng hồ vạn năng số", "Cờ lê cân lực", "Cầu nâng 2 trụ thủy lực"],
        "Xưởng dịch vụ chính hãng (Toyota, Hyundai, VinFast, Mercedes-Benz), trung tâm bảo hành ô tô hiện đại.",
        ["Làm việc với dầu mỡ, nhiệt độ động cơ và tiếng ồn máy móc", "Cần nâng vác vật nặng và đứng liên tục nhiều giờ"],
        ["Khả năng đọc hiểu sơ đồ mạch điện xe hơi", "Thao tác cơ khí chính xác, an toàn", "Tư duy chuẩn đoán suy luận logic lỗi"],
        ["Vật lý", "Công nghệ", "Toán học"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật Ô tô hoặc Cơ khí động lực"}, {"level": "Cao đẳng", "description": "Cao đẳng Công nghệ Ô tô"}, {"level": "Trung cấp", "description": "Trung cấp Kỹ thuật Sửa chữa Ô tô"}],
        "Mở nắp ca-pô ô tô và quan sát vị trí que thăm dầu động cơ, bình ắc quy và hộp lọc gió.",
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80", "Kỹ thuật viên ô tô kiểm tra khoang động cơ",
        has_3d=True, sim_id="task-automotive-3d"
    ))
    c.append(make_c(
        "ky-su-thiet-ke-o-to-dien", "Kỹ sư Thiết kế ô tô điện (EV Systems Design Engineer)", "Electric Vehicle (EV) Systems Engineer",
        ["Kỹ sư xe điện", "EV Powertrain Engineer"], g4, c4, l4, ["R", "I"],
        "Nghiên cứu và thiết kế hệ thống truyền động điện (EV Powertrain), bộ biến tần inverter và tích hợp hệ thống điều khiển thông minh trên xe điện.",
        ["Mô phỏng động lực học và hiệu suất tiêu thụ điện của xe trên phần mềm MATLAB", "Thiết kế bố trí động cơ điện và hệ thống phanh tái sinh năng lượng", "Tối ưu hóa giảm trọng lượng khung gầm bằng vật liệu composite"],
        ["Mô hình CAD 3D hệ thống dẫn động điện", "Báo cáo mô phỏng quãng đường di chuyển sau một lần sạc"],
        ["MATLAB / Simulink", "Catia", "SolidWorks", "Ansys Maxwell"],
        "Trung tâm R&D hãng sản xuất ô tô điện toàn cầu.",
        ["Công nghệ pin và điện cao áp (400V - 800V) đòi hỏi quy chuẩn an toàn điện cực kỳ khắt khe", "Áp lực chạy đua công nghệ với các hãng xe điện quốc tế"],
        ["Kiến thức máy điện và điện tử công suất", "Mô phỏng động lực học xe hơi", "Ngoại ngữ kỹ thuật"],
        ["Vật lý", "Toán học", "Tin học"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật Ô tô, Kỹ thuật Điện - Điện tử hoặc Cơ điện tử"}],
        "Tìm hiểu nguyên lý phanh tái sinh: xe điện thu hồi động năng thành điện năng như thế nào khi giảm tốc độ.",
        "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80", "Khung gầm ô tô điện và hệ thống pin hiện đại"
    ))
    c.append(make_c(
        "ky-su-pin-va-tram-sac-xe-dien", "Kỹ sư Pin và Trạm sạc xe điện (EV Battery & Charging Station Engineer)", "EV Battery & Charging Infrastructure Engineer",
        ["Kỹ sư BMS", "Kỹ sư hệ thống pin xe điện"], g4, c4, l4, ["R", "I"],
        "Phát triển hệ thống quản lý pin thông minh (BMS), kiểm soát nhiệt độ làm mát và xây dựng mạng lưới trạm sạc nhanh cao thế.",
        ["Lập trình thuật toán ước tính dung lượng pin (SOC) và tuổi thọ pin (SOH)", "Thiết kế mạch tản nhiệt chất lỏng bảo vệ các cell pin", "Kiểm định an toàn trạm sạc nhanh DC 150kW - 350kW theo tiêu chuẩn CCS2"],
        ["Hệ thống phần mềm quản lý pin BMS đạt chuẩn", "Bản vẽ thiết kế trạm sạc điện cao thế"],
        ["Phần mềm mô phỏng nhiệt CFD", "Thiết bị đo nạp xả pin công nghiệp", "CANoe"],
        "Nhà máy sản xuất pin (VinES, CATL), công ty hạ tầng trạm sạc xanh.",
        ["Làm việc gần hệ thống pin lưu trữ năng lượng lớn tiềm ẩn nguy cơ chập cháy", "Phải thường xuyên kiểm tra thực địa các trạm sạc ngoài trời"],
        ["Hóa lý vật liệu pin Lithium-ion", "Kỹ thuật tản nhiệt chất lỏng", "Tiêu chuẩn an toàn điện cao áp"],
        ["Hóa học", "Vật lý", "Toán học"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật Hóa học, Kỹ thuật Năng lượng hoặc Kỹ thuật Điện"}],
        "Xem clip mổ xẻ một bộ pin xe điện để thấy hàng nghìn viên cell pin nhỏ được kết nối với nhau.",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80", "Kỹ sư kiểm tra cell pin xe điện và hệ thống tản nhiệt"
    ))
    c.append(make_c(
        "ky-su-robot-va-canh-tay-may", "Kỹ sư Robot và cánh tay máy công nghiệp (Industrial Robotics Engineer)", "Industrial Robotics Engineer",
        ["Kỹ sư robot công nghiệp", "Robotics Engineer"], g4, c4, l4, ["R", "I"],
        "Lập trình quỹ đạo chuyển động, tích hợp thị giác máy và vận hành các cánh tay robot hàn, gắp, sơn tự động trong dây chuyền sản xuất.",
        ["Lập trình điểm di chuyển và vận tốc cánh tay robot 6 bậc tự do", "Tích hợp camera AI nhận diện vị trí linh kiện trên băng chuyền", "Hiệu chuẩn sai số cơ khí đảm bảo độ lặp lại chính xác dưới 0.05mm"],
        ["Chương trình điều khiển robot tự động", "Bản vẽ vùng an toàn và lồng bảo vệ robot"],
        ["Phần mềm RobotStudio (ABB)", "KUKA Sim", "ROS (Robot Operating System)", "Python/C++"],
        "Nhà máy lắp ráp điện tử, ô tô, logistics tự động thông minh.",
        ["Nguy cơ va chạm cơ khí nếu cài đặt sai quỹ đạo di chuyển của robot", "Làm việc trong môi trường nhà máy nhiều tiếng ồn và khói hàn"],
        ["Động học và động lực học robot", "Lập trình quỹ đạo điều khiển", "An toàn tự động hóa công nghiệp"],
        ["Toán học", "Vật lý", "Tin học"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật Robot, Cơ điện tử hoặc Điều khiển & Tự động hóa"}],
        "Xem video cánh tay robot hàn thân vỏ ô tô trong nhà máy VinFast hoặc Hyundai.",
        "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=800&q=80", "Cánh tay robot công nghiệp tự động hàn linh kiện"
    ))
    c.append(make_c(
        "ky-su-co-dien-tu-tu-dong-hoa", "Kỹ sư Cơ điện tử tự động hóa (Mechatronics Automation Engineer)", "Mechatronics & Factory Automation Engineer",
        ["Kỹ sư tự động hóa", "Kỹ sư PLC"], g4, c4, l4, ["R", "I", "C"],
        "Kết hợp cơ khí chính xác, mạch điện tử và lập trình điều khiển PLC để tự động hóa hoàn toàn các dây chuyền chế biến, đóng gói.",
        ["Lập trình bộ điều khiển logic khả trình PLC (Siemens, Mitsubishi)", "Thiết kế hệ thống giao diện điều khiển giám sát SCADA / HMI", "Lắp đặt và hiệu chỉnh các cảm biến quang, cảm biến tiệm cận và van khí nén"],
        ["Tủ điện điều khiển tự động hoàn chỉnh", "Chương trình điều khiển PLC và giao diện HMI"],
        ["Siemens TIA Portal", "GX Works", "EPLAN Electric", "SolidWorks"],
        "Nhà máy sữa, bia nước giải khát, xí nghiệp dược phẩm, chế biến thực phẩm.",
        ["Thường xuyên phải đi công tác theo dự án lắp đặt dây chuyền mới", "Áp lực dây chuyền ngừng hoạt động làm chậm tiến độ xuất hàng"],
        ["Lập trình PLC thang điều khiển", "Đọc bản vẽ tủ điện công nghiệp", "Hiểu biết hệ thống khí nén và thủy lực"],
        ["Vật lý", "Tin học", "Công nghệ"],
        [{"level": "Đại học", "description": "Kỹ sư Cơ điện tử, Kỹ thuật Điều khiển & Tự động hóa"}, {"level": "Cao đẳng", "description": "Cao đẳng Điện tự động hóa công nghiệp"}],
        "Tìm hiểu nguyên lý chiếc cảm biến cửa tự động ở siêu thị: làm sao cửa biết có người tới để tự mở.",
        "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80", "Kỹ sư lập trình tủ điều khiển PLC trong nhà máy"
    ))
    c.append(make_c(
        "ky-thuat-vien-bao-duong-xe-may-dien", "Kỹ thuật viên bảo dưỡng xe máy điện thông minh (Smart E-Motorbike Technician)", "Electric Two-Wheeler Technician",
        ["Kỹ thuật viên xe máy điện", "Thợ xe điện"], g4, c4, l4, ["R"],
        "Kiểm tra động cơ điện gắn trục (Hub motor), thay thế bộ điều tốc (Controller) và cập nhật phần mềm kết nối thông minh cho xe máy điện.",
        ["Đo điện áp và cân bằng dung lượng các khối pin xe máy điện", "Kiểm tra hệ thống dây điện, cảm biến tay ga và phanh ngắt điện", "Kết nối điện thoại để chẩn đoán lỗi phần mềm xe máy điện thông minh"],
        ["Phiếu bảo dưỡng định kỳ xe máy điện", "Bộ pin xe máy điện đã phục hồi dung lượng"],
        ["Đồng hồ đo vạn năng", "Máy cân bằng cell pin", "Phần mềm kết nối Bluetooth chẩn đoán"],
        "Cửa hàng bảo hành xe máy điện (VinFast, Dat Bike, Yadea).",
        ["Xử lý các tình huống xe bị ngập nước chập mạch điện vào mùa mưa", "Công việc cơ khí đòi hỏi sự cẩn thận với điện áp 60V-72V"],
        ["Hiểu biết về mạch điều khiển xe điện", "Khéo léo tháo lắp các chi tiết nhựa thân xe", "Kỹ năng tư vấn khách hàng"],
        ["Vật lý", "Công nghệ"],
        [{"level": "Cao đẳng", "description": "Cao đẳng Sửa chữa xe máy & xe điện"}, {"level": "Trung cấp", "description": "Trung cấp Kỹ thuật Điện tử xe cộ"}, {"level": "Đào tạo nghề", "description": "Khóa đào tạo sửa chữa xe máy điện chuyên nghiệp"}],
        "Xem một chiếc xe máy điện Dat Bike hay VinFast và tìm xem vị trí bộ điều khiển nằm ở đâu.",
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80", "Kỹ thuật viên kiểm tra hệ thống điện xe máy điện"
    ))
    c.append(make_c(
        "ky-su-khi-dong-hoc-va-khung-gam", "Kỹ sư Khí động học và Khung gầm ô tô (Aerodynamics & Chassis Engineer)", "Aerodynamics & Chassis Engineer",
        ["Kỹ sư khí động học", "Chassis Engineer"], g4, c4, l4, ["R", "I"],
        "Tối ưu hóa hình dáng khí động học để giảm lực cản gió, tăng độ bám đường và thiết kế hệ thống treo êm ái cho xe ô tô.",
        ["Mô phỏng dòng khí chạy quanh thân xe trong hầm gió ảo bằng CFD", "Thiết kế và thử nghiệm hệ thống treo độc lập đa liên kết", "Đo độ rung giật, tiếng ồn gió và độ ổn định khi xe vào cua tốc độ cao"],
        ["Báo cáo hệ số cản gió Cd đạt chuẩn khí động học", "Bản vẽ kết cấu khung gầm và hệ thống treo xe"],
        ["Ansys Fluent", "STAR-CCM+", "CATIA Chassis", "Thiết bị đo gia tốc"],
        "Trung tâm thiết kế thân vỏ xe hơi, phòng thí nghiệm hầm gió.",
        ["Mô phỏng luồng khí đòi hỏi siêu máy tính chạy liên tục nhiều ngày", "Cân bằng khó khăn giữa tính thẩm mỹ thời trang và hiệu năng khí động học"],
        ["Cơ học chất lưu và khí động học", "Thiết kế hệ thống treo và truyền lực", "Phân tích phần tử hữu hạn FEA"],
        ["Vật lý", "Toán học"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật Hàng không, Kỹ thuật Ô tô hoặc Cơ kỹ thuật"}],
        "Tìm hiểu tại sao cánh gió sau của xe thể thao lại giúp xe bám đường tốt hơn khi chạy nhanh.",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80", "Mô phỏng khí động học dòng khí trên thân xe ô tô"
    ))
    c.append(make_c(
        "giam-sat-chat-luong-lap-rap-o-to", "Giám sát chất lượng dây chuyền lắp ráp ô tô (Automotive QA/QC Inspector)", "Automotive Assembly QC Inspector",
        ["Giám sát QA nhà máy ô tô", "KCS lắp ráp xe hơi"], g4, c4, l4, ["C", "R"],
        "Kiểm tra khe hở thân vỏ, độ khít gioăng cao su, chất lượng sơn và thử nghiệm xe trên đường thử chuyên dụng trước khi xuất xưởng.",
        ["Dùng dưỡng đo khe hở và máy đo độ dày lớp sơn tĩnh điện", "Thử nghiệm phun mưa áp lực cao để phát hiện rò rỉ nước vào cabin", "Lái thử xe trên đường dằn xóc, đường nghiêng để kiểm tra tiếng ồn bất thường"],
        ["Biên bản kiểm tra xuất xưởng xe mới (PDI)", "Báo cáo thống kê lỗi lắp ráp theo ca"],
        ["Thước đo khe hở laser", "Máy đo độ dày lớp sơn", "Đường thử xe đa địa hình chuẩn quốc tế"],
        "Cuối dây chuyền lắp ráp tại các nhà máy ô tô hiện đại.",
        ["Áp lực dừng dây chuyền nếu phát hiện lỗi hàng loạt", "Phải kiểm tra tỉ mỉ hàng trăm tiêu chí cho mỗi chiếc xe"],
        ["Tính cẩn trọng, không bỏ sót chi tiết", "Hiểu rõ tiêu chuẩn chất lượng xuất xưởng ô tô", "Kỹ năng lái thử và cảm nhận xe tốt"],
        ["Vật lý", "Công nghệ"],
        [{"level": "Đại học", "description": "Kỹ sư Công nghệ Ô tô hoặc Quản lý chất lượng công nghiệp"}, {"level": "Cao đẳng", "description": "Cao đẳng Kỹ thuật Công nghệ Ô tô"}],
        "Quan sát khe hở giữa nắp capo và tai xe của một chiếc ô tô xem có đều tăm tắp từ trên xuống dưới không.",
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80", "Giám sát kiểm tra khe hở thân xe trên dây chuyền lắp ráp"
    ))
    c.append(make_c(
        "ky-su-xe-tu-hanh-adas", "Kỹ sư Xe tự hành và ADAS (Autonomous Driving / ADAS Engineer)", "Autonomous Vehicle & ADAS Systems Engineer",
        ["Kỹ sư xe tự lái", "ADAS Engineer"], g4, c4, l4, ["I", "R"],
        "Phát triển các thuật toán nhận diện làn đường, cảnh báo va chạm và tự động giữ khoảng cách sử dụng camera AI, Radar và cảm biến LiDAR.",
        ["Hợp nhất dữ liệu đa cảm biến (Sensor Fusion) giữa Camera, Radar và LiDAR", "Lập trình thuật toán tự động giữ làn đường và phanh khẩn cấp tự động (AEB)", "Thử nghiệm xe tự hành trong môi trường mô phỏng ảo và trên sa hình thực tế"],
        ["Module phần mềm hỗ trợ lái xe an toàn ADAS", "Tài liệu kiểm thử an toàn tiêu chuẩn ISO 26262"],
        ["LiDAR", "Radar ô tô", "ROS 2", "Python / C++", "CARLA Simulator"],
        "Trung tâm nghiên cứu xe tự hành, công ty công nghệ ô tô thông minh.",
        ["Trách nhiệm an toàn sinh mạng con người cực cao khi xe tự lái", "Điều kiện giao thông thực tế phức tạp đòi hỏi thuật toán xử lý hàng triệu tình huống bất ngờ"],
        ["Thị giác máy tính và xử lý ảnh", "Thuật toán hợp nhất dữ liệu cảm biến", "Tiêu chuẩn an toàn chức năng ô tô"],
        ["Toán học", "Tin học", "Vật lý"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật Máy tính, Tự động hóa hoặc Khoa học Máy tính"}],
        "Tìm hiểu nguyên lý cảm biến LiDAR phát ra hàng triệu tia laser vô hình để vẽ bản đồ 3D xung quanh xe.",
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80", "Xe tự hành với cảm biến LiDAR quét môi trường xung quanh"
    ))
    c.append(make_c(
        "chuyen-vien-co-van-dich-vu-o-to", "Chuyên viên Cố vấn Dịch vụ Ô tô (Automotive Service Advisor)", "Automotive Service Advisor",
        ["Cố vấn dịch vụ", "Service Advisor ô tô"], g4, c4, l4, ["E", "S", "R"],
        "Tiếp nhận xe từ khách hàng, lắng nghe mô tả triệu chứng hư hỏng, lập báo giá sửa chữa và theo dõi tiến độ giao xe đúng hẹn.",
        ["Khảo sát nhanh tình trạng xe cùng khách hàng tại khu vực tiếp nhận", "Lập phiếu yêu cầu sửa chữa và dự toán chi phí phụ tùng", "Giải thích rõ ràng các hạng mục cần thay thế và tư vấn gói bảo dưỡng định kỳ"],
        ["Lệnh sửa chữa phân bổ cho xưởng (Repair Order)", "Bảng báo giá và hóa đơn thanh toán minh bạch"],
        ["Phần mềm quản lý đại lý ô tô DMS", "Bảng tra cứu mã phụ tùng chính hãng EPC"],
        "Phòng tiếp khách xưởng dịch vụ đại lý ô tô chính hãng.",
        ["Xử lý cảm xúc lo lắng hoặc bức xúc của khách hàng khi xe bị sự cố nặng", "Cân bằng giữa doanh thu phụ tùng và sự hài lòng lâu dài của khách"],
        ["Kỹ năng giao tiếp thấu hiểu khách hàng", "Kiến thức kỹ thuật ô tô cơ bản để giải thích dễ hiểu", "Kỹ năng lập dự toán và quản lý thời gian"],
        ["Giáo dục kinh tế và pháp luật", "Ngữ văn", "Công nghệ"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị kinh doanh hoặc Kỹ sư Công nghệ Ô tô có thiên hướng kinh doanh"}, {"level": "Cao đẳng", "description": "Cao đẳng Công nghệ Ô tô"}],
        "Cùng bố mẹ đưa xe đi bảo dưỡng và quan sát các bước cố vấn dịch vụ đón tiếp và ghi chép tình trạng xe.",
        "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80", "Cố vấn dịch vụ tư vấn hạng mục bảo dưỡng xe cho khách hàng"
    ))

    # 5. KIẾN TRÚC, QUY HOẠCH VÀ NỘI THẤT
    g5, c5, l5 = "kien-truc-noi-that", "KienTruc", "Kiến trúc, quy hoạch và nội thất"
    c.append(make_c(
        "kien-truc-su-cong-trinh", "Kiến trúc sư công trình dân dụng (Architect)", "Architectural Design Engineer",
        ["Kiến trúc sư xây dựng", "Architect"], g5, c5, l5, ["A", "I", "R"],
        "Sáng tạo ý tưởng mặt bằng, hình khối không gian, tính toán đón gió đón nắng và thiết kế hồ sơ thi công cho ngôi nhà ở, trường học, bệnh viện.",
        ["Lên ý tưởng mặt bằng công năng và phối cảnh ngoại thất 3D", "Tính toán hướng nắng đổ bóng và thông gió tự nhiên theo thời gian trong ngày", "Triển khai hồ sơ bản vẽ kỹ thuật kiến trúc xin cấp phép xây dựng"],
        ["Hồ sơ thiết kế ý tưởng kiến trúc hoàn chỉnh", "Bản vẽ chi tiết thi công (Shop drawing) và mô hình phối cảnh 3D"],
        ["Autodesk Revit", "AutoCAD", "SketchUp", "Enscape / Lumion"],
        "Văn phòng thiết kế kiến trúc, công trường khảo sát thực địa.",
        ["Cân bằng khó khăn giữa ý tưởng nghệ thuật bay bổng và ngân sách thực tế của chủ nhà", "Áp lực sửa bản vẽ nhiều lần theo yêu cầu của khách"],
        ["Tư duy thẩm mỹ và hình học không gian 3D", "Khả năng phân tích vi khí hậu và phong thủy khoa học", "Kỹ năng thuyết trình bảo vệ đồ án thiết kế"],
        ["Toán học", "Vật lý", "Mỹ thuật / Vẽ hình họa", "Ngữ văn"],
        [{"level": "Đại học", "description": "Kiến trúc sư (Đào tạo 5 năm tại ĐH Kiến trúc Hà Nội, ĐH Xây dựng, ĐH Kiến trúc TP.HCM)"}],
        "Vẽ phác họa mặt bằng ngôi nhà mơ ước của em gồm phòng khách, bếp và phòng ngủ trên một tờ giấy A4.",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", "Kiến trúc sư mô phỏng phối cảnh nhà ở 3D",
        has_3d=True, sim_id="task-architecture-3d"
    ))
    c.append(make_c(
        "nha-thiet-ke-noi-that", "Nhà thiết kế nội thất (Interior Designer)", "Interior Designer",
        ["Kiến trúc sư nội thất", "Interior Designer"], g5, c5, l5, ["A", "E", "R"],
        "Lựa chọn vật liệu gỗ, đá, vải, bố trí bàn ghế tủ kệ và thiết kế hệ thống ánh sáng tạo nên không gian sống tiện nghi, thẩm mỹ và ấm cúng.",
        ["Bố trí mặt bằng sắp đặt đồ nội thất đảm bảo lối đi thông thoáng không bị chặn", "Phối màu sắc, chọn vật liệu hoàn thiện và thiết kế đèn trang trí", "Giám sát xưởng mộc đóng đồ gỗ và lắp đặt hoàn thiện tại căn hộ"],
        ["Bản vẽ phối cảnh 3D không gian nội thất", "Bảng chỉ định vật liệu nội thất (Moodboard) và bảng bóc tách khối lượng"],
        ["3ds Max (Corona / Vray)", "SketchUp", "Photoshop", "Revit Nội thất"],
        "Studio thiết kế nội thất, căn hộ mẫu, xưởng sản xuất đồ gỗ.",
        ["Bụi bặm và mùi sơn khi đi giám sát lắp đặt tại công trình hoàn thiện", "Phải am hiểu sâu về đặc tính vật liệu và giá thành để tránh vượt ngân sách"],
        ["Cảm nhận màu sắc và chất liệu tinh tế", "Tư duy tối ưu hóa diện tích sử dụng", "Kỹ năng lắng nghe nhu cầu thói quen sinh hoạt của gia chủ"],
        ["Mỹ thuật", "Toán học", "Ngữ văn"],
        [{"level": "Đại học", "description": "Cử nhân Thiết kế Nội thất (ĐH Mỹ thuật Công nghiệp, ĐH Kiến trúc)"}, {"level": "Cao đẳng", "description": "Cao đẳng Thiết kế Nội thất"}],
        "Thử sắp xếp lại bàn học và góc phòng ngủ của mình sao cho đón được nhiều ánh sáng tự nhiên nhất.",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80", "Không gian nội thất phòng khách được bài trí tinh tế",
        has_3d=True, sim_id="task-architecture-3d"
    ))
    c.append(make_c(
        "kien-truc-su-quy-hoach-do-thi", "Kiến trúc sư Quy hoạch đô thị (Urban Planner / Urban Designer)", "Urban Planner & Regional Designer",
        ["Kiến trúc sư quy hoạch", "Chuyên viên phát triển đô thị"], g5, c5, l5, ["I", "A", "C"],
        "Phân vùng chức năng đất đai, quy hoạch mạng lưới giao thông, công viên cây xanh và dự báo dân số để xây dựng các thành phố đáng sống.",
        ["Phân tích số liệu dân số, lưu lượng giao thông và rủi ro ngập lụt đô thị", "Vẽ bản đồ quy hoạch sử dụng đất tỷ lệ 1/2000 và 1/500", "Lấy ý kiến cộng đồng dân cư và bảo vệ đồ án quy hoạch trước hội đồng kiến trúc"],
        ["Đồ án quy hoạch chung đô thị kèm thuyết minh", "Bản đồ hệ thống thông tin địa lý (GIS) phân vùng sử dụng đất"],
        ["ArcGIS / QGIS", "AutoCAD Map 3D", "Photoshop", "CityEngine"],
        "Viện quy hoạch xây dựng, sở quy hoạch kiến trúc, ban quản lý khu đô thị mới.",
        ["Thời gian triển khai đồ án quy hoạch tính bằng năm, nhiều thủ tục thẩm định", "Phải cân bằng lợi ích phức tạp giữa phát triển kinh tế và bảo vệ môi trường"],
        ["Tư duy chiến lược quy mô lớn", "Phân tích dữ liệu không gian bản đồ GIS", "Hiểu biết pháp luật quy hoạch đô thị"],
        ["Địa lý", "Toán học", "Ngữ văn", "Lịch sử"],
        [{"level": "Đại học", "description": "Kiến trúc sư Quy hoạch đô thị hoặc Kỹ sư Quản lý đô thị"}],
        "Mở Google Maps vệ tinh xem cách phân chia ô bàn cờ và công viên cây xanh ở khu đô thị Phú Mỹ Hưng hoặc Ecopark.",
        "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80", "Bản đồ quy hoạch đô thị thông minh nhìn từ trên cao"
    ))
    c.append(make_c(
        "thiet-ke-canh-quan-sinh-thai", "Kiến trúc sư Cảnh quan sinh thái (Landscape Architect)", "Landscape Architect",
        ["Thiết kế cảnh quan sân vườn", "Landscape Designer"], g5, c5, l5, ["A", "R", "I"],
        "Thiết kế công viên, quảng trường, hồ điều hòa, vườn trên mái và lựa chọn các loài cây xanh bản địa tạo bóng mát và chống ngập.",
        ["Lên phương án đường dạo bộ, tiểu cảnh nước và khu vui chơi ngoài trời", "Lựa chọn các tầng tán cây xanh phù hợp khí hậu nhiệt đới gió mùa", "Thiết kế hệ thống tưới tự động và đèn chiếu sáng sân vườn tiết kiệm điện"],
        ["Hồ sơ thiết kế cảnh quan tổng thể", "Bảng danh mục chủng loại cây xanh và hướng dẫn chăm sóc"],
        ["SketchUp", "Lumion", "AutoCAD", "InDesign"],
        "Công ty thiết kế cảnh quan resort, khu đô thị sinh thái, công trường sân vườn.",
        ["Làm việc ngoài trời nắng gió khi giám sát ươm trồng cây lớn", "Cần hiểu sâu về chu kỳ sinh trưởng của từng loài thực vật để cây không bị chết"],
        ["Thẩm mỹ cảnh quan thiên nhiên", "Kiến thức thực vật học và sinh thái cảnh quan", "Kỹ năng vẽ phối cảnh ngoài trời"],
        ["Sinh học", "Mỹ thuật", "Địa lý"],
        [{"level": "Đại học", "description": "Kiến trúc sư Cảnh quan (ĐH Kiến trúc, ĐH Lâm nghiệp)"}],
        "Quan sát công viên gần nhà và đếm xem có bao nhiêu loài cây cho bóng mát, bao nhiêu bồn hoa trang trí.",
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80", "Công viên cảnh quan sinh thái xanh giữa lòng thành phố"
    ))
    c.append(make_c(
        "chuyen-vien-bim-modeler", "Chuyên viên mô hình hóa thông tin công trình (BIM Coordinator / Modeler)", "Building Information Modeling (BIM) Specialist",
        ["Kỹ sư BIM", "Họa viên Revit 3D"], g5, c5, l5, ["C", "R", "I"],
        "Dựng mô hình số 3D tích hợp thông tin vật liệu, kết cấu, đường ống cơ điện để phát hiện xung đột và hỗ trợ dự toán chính xác trước khi xây thật.",
        ["Dựng mô hình số 3D đa bộ môn (Kiến trúc, Kết cấu, MEP) trên phần mềm Revit", "Chạy chương trình tự động quét và phát hiện xung đột (Clash Detection)", "Xuất bảng thống kê khối lượng thép, bê tông, gạch ốp tự động từ mô hình"],
        ["Mô hình số BIM hợp nhất không xung đột", "Báo cáo xử lý xung đột kỹ thuật trước thi công"],
        ["Autodesk Revit", "Navisworks Manage", "BIM 360", "BIMcollab"],
        "Các tổng thầu xây dựng lớn, công ty tư vấn thiết kế quốc tế.",
        ["Ngồi trước máy tính cấu hình cao hàng giờ liền để kiểm tra từng đường ống", "Đòi hỏi tính kỷ luật tuân thủ chuẩn đặt tên tệp và phân tầng dữ liệu nghiêm ngặt"],
        ["Thành thạo phần mềm BIM chuyên sâu", "Tư duy không gian 3D cấu tạo công trình", "Phối hợp làm việc nhóm đa ngành"],
        ["Tin học", "Toán học", "Vật lý"],
        [{"level": "Đại học", "description": "Kỹ sư Xây dựng hoặc Kiến trúc sư chuyên sâu BIM"}, {"level": "Cao đẳng", "description": "Cao đẳng Họa viên Kiến trúc & BIM"}],
        "Tìm hiểu khái niệm Digital Twin (Bản sao số): tại sao tòa nhà Landmark 81 lại có một phiên bản số 3D trong máy tính.",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80", "Mô hình BIM 3D tòa nhà hiển thị các lớp kết cấu và đường ống"
    ))
    c.append(make_c(
        "chuyen-vien-thiet-ke-chieu-sang", "Chuyên viên thiết kế chiếu sáng kiến trúc (Architectural Lighting Designer)", "Architectural Lighting Designer",
        ["Nhà thiết kế ánh sáng", "Lighting Designer"], g5, c5, l5, ["A", "I"],
        "Tính toán quang thông, góc chiếu đèn và nhiệt độ màu để tôn vinh vẻ đẹp kiến trúc ban đêm và bảo vệ thị giác người dùng ban ngày.",
        ["Mô phỏng mức độ rọi sáng (Lux) trên phần mềm Dialux", "Lựa chọn các loại đèn LED chỉ số hoàn màu cao (CRI > 90) tiết kiệm năng lượng", "Lập trình các kịch bản chiếu sáng nghệ thuật thay đổi theo giờ"],
        ["Bản vẽ bố trí đèn và bảng tính toán quang thông chuẩn chiếu sáng", "Phối cảnh 3D hiệu ứng ánh sáng ban đêm"],
        ["DIALux evo", "Relux", "AutoCAD", "Photoshop"],
        "Công ty tư vấn chiếu sáng kiến trúc, hãng đèn cao cấp quốc tế (Philips, Signify).",
        ["Khảo sát công trình ban đêm để căn chỉnh góc chiếu đèn thật", "Đòi hỏi sự am hiểu sâu về cả nghệ thuật cảm xúc lẫn vật lý quang học"],
        ["Cảm thụ thẩm mỹ ánh sáng và bóng đổ", "Tính toán quang học vật lý", "Hiểu biết về tiện nghi thị giác"],
        ["Vật lý", "Mỹ thuật", "Toán học"],
        [{"level": "Đại học", "description": "Kiến trúc sư, Nhà thiết kế Nội thất hoặc Kỹ sư Kỹ thuật Chiếu sáng"}],
        "Quan sát các góc chiếu đèn vàng và đèn trắng trong một quán cafe để cảm nhận sự khác biệt về không khí ấm cúng.",
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80", "Thiết kế chiếu sáng nghệ thuật tôn vinh đường nét kiến trúc"
    ))
    c.append(make_c(
        "chuyen-vien-tu-van-vi-khi-hau-phong-thuy", "Chuyên viên vi khí hậu và phong thủy khoa học (Building Bioclimatic Specialist)", "Bioclimatic & Spatial Harmony Consultant",
        ["Chuyên viên vi khí hậu công trình", "Tư vấn năng lượng nhà ở"], g5, c5, l5, ["I", "A", "R"],
        "Phân tích hướng gió mùa, biểu đồ mặt trời và từ trường tự nhiên để tư vấn hướng nhà, vị trí cửa sổ đón vượng khí và làm mát tự nhiên.",
        ["Đo đạc hướng gió, bức xạ nhiệt mặt trời và độ ẩm tại khu đất xây dựng", "Đề xuất giải pháp lam chắn nắng và giếng trời đối lưu không khí", "Tư vấn bố trí không gian hài hòa theo quy luật tự nhiên và phong thủy khoa học"],
        ["Báo cáo phân tích vi khí hậu khu đất", "Bản vẽ tối ưu hóa thông gió tự nhiên"],
        ["EnergyPlus", "Climate Consultant", "La bàn địa từ", "Mô hình biểu đồ góc chiếu mặt trời Sun Path"],
        "Văn phòng tư vấn kiến trúc xanh, công ty xây dựng nhà ở cao cấp.",
        ["Phải giải thích phong thủy dựa trên cơ sở khoa học để khách hàng hiểu đúng, tránh mê tín", "Khó khăn khi khu đất bị các tòa nhà cao tầng xung quanh che chắn nắng gió"],
        ["Kiến thức vật lý kiến trúc và khí tượng thủy văn", "Tư duy không gian hài hòa sinh thái", "Kỹ năng tư vấn thuyết phục"],
        ["Địa lý", "Vật lý", "Văn hóa học"],
        [{"level": "Đại học", "description": "Kiến trúc sư hoặc Cử nhân Khoa học Môi trường / Địa lý"}],
        "Dùng la bàn trên điện thoại xác định hướng ban công nhà mình và xem buổi chiều nắng chiếu vào lúc mấy giờ.",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80", "Ánh nắng tự nhiên chiếu qua giếng trời vào ngôi nhà hiện đại"
    ))
    c.append(make_c(
        "thiet-ke-khong-gian-ban-le-trien-lam", "Thiết kế không gian bán lẻ & triển lãm (Retail & Exhibition Designer)", "Retail & Exhibition Space Designer",
        ["Thiết kế showroom", "Exhibition Designer"], g5, c5, l5, ["A", "E", "R"],
        "Bố trí luồng di chuyển của khách hàng, gian hàng hội chợ và quầy kệ trưng bày kích thích cảm xúc mua sắm tại trung tâm thương mại.",
        ["Thiết kế gian hàng hội chợ triển lãm lắp ghép nhanh trong 24 giờ", "Nghiên cứu hành vi tâm lý người tiêu dùng khi bước vào cửa hàng", "Thiết kế đồ họa điểm bán (POSM) và biển hiệu thương hiệu nổi bật"],
        ["Bản vẽ 3D gian hàng triển lãm hoàn chỉnh", "Hồ sơ bóc tách chi tiết cấu kiện tháo lắp"],
        ["SketchUp", "3ds Max", "Illustrator", "AutoCAD"],
        "Công ty tổ chức sự kiện triển lãm, tập đoàn bán lẻ thời trang, mỹ phẩm.",
        ["Thời gian thi công ban đêm tại các trung tâm thương mại rất gấp rút", "Đòi hỏi ý tưởng phải luôn mới lạ, bắt trend thị trường"],
        ["Tư duy thẩm mỹ thương mại", "Hiểu biết tâm lý hành vi mua sắm", "Kỹ năng thiết kế cấu kiện lắp ghép nhanh"],
        ["Mỹ thuật", "Ngữ văn", "Toán học"],
        [{"level": "Đại học", "description": "Cử nhân Thiết kế Nội thất, Mỹ thuật Công nghiệp hoặc Kiến trúc"}],
        "Đi dạo một vòng siêu thị và quan sát cách họ sắp xếp các món đồ giảm giá ngay lối vào để thu hút khách.",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", "Không gian cửa hàng bán lẻ hiện đại với ánh sáng và quầy kệ tối ưu"
    ))
    c.append(make_c(
        "quan-ly-du-an-hoan-thien-noi-that", "Quản lý dự án thi công nội thất (Fit-out Project Manager)", "Interior Fit-out Project Manager",
        ["Chỉ huy trưởng nội thất", "Quản lý thi công fit-out"], g5, c5, l5, ["E", "R", "C"],
        "Điều phối thợ mộc, thợ sơn, thợ điện nước, kiểm soát tiến độ và chất lượng để bàn giao căn hộ đúng cam kết với khách hàng.",
        ["Lập tiến độ thi công chi tiết từng ngày (Gantt chart)", "Kiểm tra chất lượng cốt gỗ, lớp dán chỉ cạnh và độ phẳng bề mặt sơn", "Nghiệm thu khối lượng và bàn giao chìa khóa cho chủ nhà"],
        ["Nhật ký thi công hoàn thiện nội thất", "Biên bản nghiệm thu bàn giao căn hộ"],
        ["Microsoft Project", "AutoCAD", "Excel quản lý tiến độ", "Thước đo khoảng cách laser"],
        "Công trường hoàn thiện căn hộ, văn phòng, khách sạn.",
        ["Áp lực bàn giao nhà đúng ngày đẹp để chủ nhà dọn vào ở", "Phải xử lý mâu thuẫn giữa các tổ thợ điện, thợ sơn trên công trường"],
        ["Kỹ năng quản lý tiến độ và ngân sách", "Hiểu sâu kỹ thuật mộc và hoàn thiện bề mặt", "Khả năng đàm phán giải quyết xung đột"],
        ["Toán học", "Vật lý", "Giáo dục kinh tế và pháp luật"],
        [{"level": "Đại học", "description": "Kỹ sư Quản lý Xây dựng, Kiến trúc sư hoặc Kỹ sư Nội thất"}, {"level": "Cao đẳng", "description": "Cao đẳng Xây dựng & Hoàn thiện Nội thất"}],
        "Thử đo chiều dài và chiều rộng căn phòng của em bằng thước dây hoặc ứng dụng đo trên điện thoại.",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80", "Quản lý thi công kiểm tra bản vẽ tại căn hộ đang hoàn thiện"
    ))
    c.append(make_c(
        "kien-truc-su-bao-ton-di-san", "Kiến trúc sư Bảo tồn di sản (Heritage Conservation Architect)", "Architectural Heritage Conservationist",
        ["Kiến trúc sư trùng tu di tích", "Heritage Architect"], g5, c5, l5, ["A", "I", "C"],
        "Khảo sát, giải mã cấu kiện gỗ cổ truyền và lập phương án trùng tu chùa chiền, đình làng, biệt thự Pháp cổ giữ nguyên vẹn giá trị lịch sử.",
        ["Dùng máy quét 3D laser ghi nhận hiện trạng chi tiết từng hoa văn điêu khắc", "Nghiên cứu hồ sơ tài liệu lịch sử và kỹ thuật ghép mộng truyền thống", "Giám sát nghệ nhân phục chế gạch gốm, vôi vữa cổ và ngói âm dương"],
        ["Hồ sơ đánh giá hiện trạng di tích kiến trúc", "Đồ án bảo tồn và trùng tu di sản văn hóa"],
        ["Máy quét 3D Laser Scanner", "AutoCAD", "Phần mềm dựng hình phục dựng 3D", "Kính hiển vi vật liệu"],
        "Di tích lịch sử, phố cổ Hà Nội, phố cổ Hội An, di tích Cố đô Huế.",
        ["Trách nhiệm văn hóa lịch sử nặng nề, một quyết định sai có thể làm mất đi di sản trăm năm", "Thủ tục thẩm định nghiêm ngặt từ các cơ quan quản lý di sản"],
        ["Kiến thức lịch sử kiến trúc và mỹ thuật cổ", "Kỹ năng khảo sát đo đạc hiện trạng tỉ mỉ", "Tấm lòng trân trọng văn hóa truyền thống"],
        ["Lịch sử", "Mỹ thuật", "Ngữ văn", "Vật lý"],
        [{"level": "Đại học", "description": "Kiến trúc sư chuyên ngành Bảo tồn di sản kiến trúc (ĐH Kiến trúc Hà Nội, ĐH Khoa học Huế)"}],
        "Chụp ảnh một ngôi nhà cổ hoặc ngôi chùa gần nhà và tìm xem có những họa tiết chạm khắc nào độc đáo.",
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80", "Kiến trúc sư khảo sát phục dựng chi tiết di tích cổ kính"
    ))

    return c

print("Module groups 1-5 ready.")
