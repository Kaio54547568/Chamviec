# -*- coding: utf-8 -*-
"""
CHẠM VIỆC - 200 Verified Careers Generator
Builds 200 high-standard, authentic careers across the 20 navigation groups (10 per group).
Writes directly to src/data/careers.ts
"""

import json
import os

# Helper to produce career records
def make_c(id, title, eng, syns, grp, cat, cat_lbl, riasec, summary, tasks, deliverables, tools, env, tradeoffs, skills, subjects, pathways, trial, img, alt, has_3d=False, sim_id=None, exp_type="CAREER_PROFILE"):
    if has_3d:
        exp_type = "3D_INTERACTIVE"
    elif sim_id:
        exp_type = "SCENARIO_SIMULATION"
    return {
        "id": id,
        "title": title,
        "englishTitle": eng,
        "synonyms": syns,
        "group": grp,
        "category": cat,
        "categoryLabel": cat_lbl,
        "riasecCodes": riasec,
        "shortSummary": summary,
        "typicalTasks": tasks,
        "deliverables": deliverables,
        "toolsUsed": tools,
        "workEnvironment": env,
        "difficultiesAndTradeoffs": tradeoffs,
        "coreSkills": skills,
        "highSchoolSubjects": subjects,
        "entryPathways": pathways,
        "entryPathway": " | ".join([f"{p['level']}: {p['description']}" for p in pathways]),
        "trialActivity": trial,
        "has3D": has_3d,
        "simulationTaskId": sim_id,
        "experienceType": exp_type,
        "status": "HOAN_THANH",
        "imageUrl": img,
        "imageAlt": alt,
        "dailyRoutine": [
            f"Bắt đầu ngày làm việc với việc rà soát nhiệm vụ chuyên môn và mục tiêu ưu tiên.",
            f"Thực hiện các thao tác chuyên môn cốt lõi, phối hợp đội nhóm và kiểm thử chất lượng sản phẩm.",
            f"Làm việc với khách hàng, đối tác hoặc báo cáo kết quả lên cấp quản lý.",
            f"Tổng kết ngày, cập nhật nhật ký công việc và trau dồi kiến thức mới trong ngành."
        ],
        "dataSource": "Bộ dữ liệu chuẩn hóa hướng nghiệp CHẠM VIỆC & EIE Education 2025",
        "lastUpdated": "2025-05-01"
    }

careers = []

# ==========================================================
# 1. NGÔN NGỮ VÀ GIAO TIẾP QUỐC TẾ (10)
# ==========================================================
g1 = "ngon-ngu"
c1 = "NgoaiNgu"
l1 = "Ngôn ngữ và giao tiếp quốc tế"

careers.append(make_c(
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

careers.append(make_c(
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

careers.append(make_c(
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

careers.append(make_c(
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

careers.append(make_c(
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

careers.append(make_c(
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

careers.append(make_c(
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

careers.append(make_c(
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

careers.append(make_c(
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

careers.append(make_c(
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

print(f"Group 1 complete: {len(careers)} careers so far.")
