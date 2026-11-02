# -*- coding: utf-8 -*-
# Groups 16 - 20 (50 careers)

def get_groups_16_to_20(make_c):
    c = []

    # 16. LUẬT, QUAN HỆ CÔNG CHÚNG VÀ CHÍNH SÁCH
    g16, c16, l16 = "luat-chinh-sach", "Luat", "Luat, quan hệ công chúng và chính sách"
    c.append(make_c(
        "luat-su-tranh-tung-toa-an", "Luật sư tranh tụng tòa án (Trial Lawyer / Litigator)", "Courtroom Litigation Lawyer",
        ["Luật sư bào chữa", "Litigator"], g16, c16, l16, ["E", "I", "S"],
        "Thu thập chứng cứ, nghiên cứu án lệ, tranh tụng tại các phiên tòa hình sự và dân sự để bảo vệ công lý và quyền lợi hợp pháp của thân chủ.",
        ["Nghiên cứu hồ sơ vụ án và phỏng vấn nhân chứng", "Soạn thảo bản luận cứ bào chữa sắc bén dựa trên các điều luật và án lệ", "Đối đáp tranh luận trực tiếp với Viện kiểm sát và luật sư đối tụng tại phiên tòa"],
        ["Bản luận cứ bào chữa tại tòa án", "Hồ sơ khởi kiện và yêu cầu bồi thường thiệt hại"],
        ["Hệ thống văn bản pháp luật số", "Án lệ của Tòa án nhân dân tối cao", "Trang phục luật sư tranh tụng chuẩn mực"],
        "Phòng xử án Tòa án nhân dân, văn phòng luật sư, trại tạm giam.",
        ["Áp lực tâm lý nặng nề khi đối diện với các vụ án hình sự phức tạp", "Làm việc thâu đêm rà soát từng chi tiết nhỏ trong hồ sơ chứng cứ"],
        ["Tư duy lập luận logic và phản biện sắc sảo", "Kỹ năng hùng biện trước công chúng", "Đạo đức nghề luật và dũng khí bảo vệ lẽ phải"],
        ["Giáo dục công dân / Kinh tế & Pháp luật", "Ngữ văn", "Lịch sử"],
        [{"level": "Đại học", "description": "Cử nhân Luật (ĐH Luật Hà Nội, ĐH Luật TP.HCM) + 12 tháng đào tạo nghề luật sư tại Học viện Tư pháp + 12 tháng tập sự vượt qua kỳ thi quốc gia cấp thẻ Luật sư"}],
        "Tìm hiểu về vai trò của 'Án lệ' trong xét xử: khi một bản án chuẩn mực trước đó được dùng làm khuôn mẫu cho các vụ án tương tự sau này.",
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80", "Luật sư tranh tụng hùng biện bảo vệ thân chủ tại phiên tòa"
    ))
    c.append(make_c(
        "luat-su-tu-van-mua-ban-sap-nhap-ma", "Luật sư tư vấn sáp nhập doanh nghiệp (Corporate M&A Lawyer)", "Corporate Mergers & Acquisitions (M&A) Lawyer",
        ["Luật sư M&A", "Corporate Lawyer"], g16, c16, l16, ["I", "E", "C"],
        "Thẩm định rủi ro pháp lý (Due Diligence), đàm phán hợp đồng mua bán cổ phần triệu USD và hỗ trợ sáp nhập các tập đoàn kinh tế.",
        ["Rà soát toàn diện hồ sơ pháp lý, giấy phép kinh doanh và tranh chấp tồn đọng của công ty mục tiêu", "Soạn thảo hợp đồng mua bán cổ phần (SPA) và thỏa thuận cổ đông (SHA)", "Làm thủ tục thông báo tập trung kinh tế tại Ủy ban Cạnh tranh Quốc gia"],
        ["Báo cáo thẩm định pháp lý chi tiết (Legal Due Diligence Report)", "Bộ hợp đồng giao dịch M&A hoàn chỉnh"],
        ["Cơ sở dữ liệu pháp luật quốc tế LexisNexis", "Phần mềm so sánh văn bản Workshare Compare"],
        "Các hãng luật quốc tế hàng đầu (Baker McKenzie, YKVN, VILAF, Rajah & Tann).",
        ["Những đợt chốt giao dịch đàm phán xuyên đêm tới sáng", "Khối lượng tài liệu dày hàng nghìn trang đòi hỏi sự chuẩn xác từng dấu phẩy"],
        ["Nắm vững luật doanh nghiệp, luật đầu tư và chứng khoán", "Tiếng Anh pháp lý xuất sắc", "Kỹ năng đàm phán hợp đồng thương mại"],
        ["Tiếng Anh", "Giáo dục kinh tế và pháp luật", "Toán học"],
        [{"level": "Đại học", "description": "Cử nhân Luật kinh tế hoặc Luật quốc tế + Thẻ Luật sư"}],
        "Đọc một bản tin về việc một tập đoàn nước ngoài chi hàng trăm triệu USD mua lại chuỗi siêu thị ở Việt Nam để hiểu công việc của luật sư M&A.",
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80", "Luật sư M&A rà soát điều khoản hợp đồng chuyển nhượng cổ phần"
    ))
    c.append(make_c(
        "cong-chung-vien", "Công chứng viên (Civil Law Notary)", "Civil Law Public Notary",
        ["Công chứng viên", "Notary Public"], g16, c16, l16, ["C", "S", "I"],
        "Chứng thực tính xác thực, hợp pháp của hợp đồng mua bán nhà đất, di chúc thừa kế và ủy quyền tài sản bảo vệ giao dịch của người dân.",
        ["Kiểm tra giấy chứng nhận quyền sử dụng đất (sổ đỏ) thật hay giả", "Giải thích rõ ràng quyền và nghĩa vụ cho các bên trước khi ký tên điểm chỉ", "Ký tên, đóng dấu công chứng và lưu trữ hồ sơ công chứng theo quy định pháp luật"],
        ["Văn bản công chứng có giá trị chứng cứ pháp lý cao nhất", "Sổ lưu trữ hồ sơ công chứng an toàn"],
        ["Máy quét vân tay điện tử", "Kính lúp soi bảo an sổ đỏ", "Phần mềm cơ sở dữ liệu công chứng ngăn chặn giao dịch giả mạo"],
        "Phòng công chứng nhà nước, văn phòng công chứng tư nhân.",
        ["Chịu trách nhiệm bồi thường thiệt hại bằng toàn bộ tài sản nếu công chứng sai giấy tờ giả", "Hàng ngày tiếp xúc với nhiều loại giấy tờ pháp lý phức tạp"],
        ["Kỹ năng giám định giấy tờ thật giả tinh tường", "Kiến thức pháp luật dân sự, đất đai và hôn nhân gia đình sâu sắc", "Tính cẩn trọng và trung thực cao độ"],
        ["Giáo dục kinh tế và pháp luật", "Ngữ văn", "Lịch sử"],
        [{"level": "Đại học", "description": "Cử nhân Luật + 12 tháng đào tạo nghề công chứng + Đạt kỳ thi kiểm tra kết quả tập sự hành nghề công chứng do Bộ Tư pháp tổ chức"}],
        "Cùng bố mẹ đến phòng công chứng xem các bác công chứng viên kiểm tra sổ đỏ và yêu cầu các bên ký tên, lăn tay ra sao.",
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80", "Công chứng viên kiểm tra giấy tờ tùy thân và sổ đỏ trước khi ký chứng thực"
    ))
    c.append(make_c(
        "chuyen-vien-phap-che-doanh-nghiep", "Chuyên viên Pháp chế doanh nghiệp (In-house Legal Counsel)", "Corporate In-house Legal Counsel",
        ["Pháp chế doanh nghiệp", "Legal Counsel"], g16, c16, l16, ["C", "I", "E"],
        "Rà soát hợp đồng kinh tế, tư vấn quy chế lao động nội bộ và đại diện doanh nghiệp làm việc với các cơ quan thanh tra nhà nước.",
        ["Thẩm định tính pháp lý của các hợp đồng mua bán, hợp tác kinh doanh", "Xây dựng nội quy lao động, thỏa ước lao động tập thể và quy chế bảo mật thông tin", "Tư vấn cảnh báo các rủi ro pháp lý trong hoạt động kinh doanh hàng ngày"],
        ["Ý kiến tư vấn pháp lý nội bộ (Legal Opinion)", "Hệ thống quy chế quản trị nội bộ công ty"],
        ["Phần mềm quản lý hợp đồng điện tử", "Hệ thống tra cứu văn bản quy phạm pháp luật"],
        "Phòng pháp chế các tập đoàn, tổng công ty, doanh nghiệp tư nhân.",
        ["Phải tìm ra giải pháp pháp lý an toàn nhưng vẫn giúp doanh nghiệp kinh doanh thuận lợi, không nói 'không' một cách cứng nhắc", "Áp lực rà soát hợp đồng gấp cho các phòng kinh doanh"],
        ["Kỹ năng soạn thảo và rà soát hợp đồng chặt chẽ", "Tư duy phòng ngừa rủi ro", "Khả năng dung hòa giữa kinh doanh và pháp luật"],
        ["Giáo dục kinh tế và pháp luật", "Ngữ văn", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Luật học hoặc Luật kinh tế (ĐH Luật, Khoa Luật ĐHQG)"}],
        "Đọc một bản hợp đồng mua bán điện thoại di động đơn giản và tìm xem có điều khoản bảo hành trong bao lâu.",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80", "Chuyên viên pháp chế thảo luận giải pháp pháp lý cùng ban giám đốc"
    ))
    c.append(make_c(
        "tham-phan-toa-an-nhan-dan", "Thẩm phán Tòa án nhân dân (Judge / Magistrate)", "Civil & Criminal Court Judge",
        ["Thẩm phán", "Judge"], g16, c16, l16, ["I", "C", "S"],
        "Chủ tọa phiên tòa, độc lập xét xử theo hiến pháp và pháp luật, nhân danh Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam tuyên những bản án công minh.",
        ["Nghiên cứu toàn diện hồ sơ vụ án trước khi mở phiên tòa", "Điều hành phiên tòa xét xử theo trình tự tố tụng công khai, minh bạch", "Cùng Hội đồng xét xử nghị án và tuyên bản án đúng người, đúng tội, đúng pháp luật"],
        ["Bản án tuyên có hiệu lực pháp luật", "Quyết định công nhận sự thỏa thuận của các đương sự"],
        ["Pháp phục thẩm phán (Áo choàng đen viền đỏ)", "Búa gõ phiên tòa", "Hồ sơ vụ án chuẩn tố tụng"],
        "Trụ sở Tòa án nhân dân các cấp.",
        ["Gánh nặng công lý và lương tâm trên vai, một phán quyết sai có thể hủy hoại cuộc đời một con người", "Áp lực giữ gìn tính độc lập, liêm chính tuyệt đối trước mọi sự cám dỗ hoặc đe dọa"],
        ["Sự liêm chính, công tâm và bản lĩnh tư pháp", "Kiến thức pháp luật sâu rộng và kinh nghiệm thực tiễn phong phú", "Kỹ năng điều hành phiên tòa uy nghiêm"],
        ["Giáo dục kinh tế và pháp luật", "Lịch sử", "Ngữ văn"],
        [{"level": "Đại học", "description": "Cử nhân Luật + Thư ký tòa án/Thẩm tra viên lâu năm + Hoàn thành khóa đào tạo nghiệp vụ xét xử tại Học viện Tòa án + Được Chủ tịch nước bổ nhiệm làm Thẩm phán"}],
        "Tìm hiểu về chiếc áo choàng đen và biểu tượng cán cân công lý của Tòa án nhân dân Việt Nam.",
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80", "Thẩm phán điều hành phiên xét xử uy nghiêm tại phòng xử án"
    ))
    c.append(make_c(
        "chuyen-gia-phan-tich-chinh-sach-cong", "Chuyên gia Phân tích chính sách công (Public Policy Analyst)", "Public Policy Research & Analysis Specialist",
        ["Chuyên viên chính sách công", "Policy Analyst"], g16, c16, l16, ["I", "S", "E"],
        "Nghiên cứu tác động kinh tế xã hội của các luật mới, khảo sát ý kiến người dân và đề xuất hoàn thiện chính sách giáo dục, y tế, an sinh.",
        ["Khảo sát thực địa và phỏng vấn các nhóm đối tượng chịu tác động của chính sách", "Đánh giá tác động thủ tục hành chính và chi phí tuân thủ (RIA)", "Soạn thảo báo cáo khuyến nghị chính sách gửi các bộ ngành và Quốc hội"],
        ["Báo cáo đánh giá tác động chính sách (Regulatory Impact Assessment - RIA)", "Dự thảo văn bản chính sách hoàn thiện"],
        ["Phần mềm phân tích dữ liệu kinh tế lượng Stata", "Phương pháp điều tra xã hội học", "Khung phân tích chính sách công"],
        "Viện nghiên cứu lập pháp, viện chiến lược phát triển, tổ chức nghiên cứu chính sách độc lập.",
        ["Chính sách tác động đến cuộc sống của hàng triệu con người nên đòi hỏi sự thận trọng tối đa", "Phải cân bằng giữa mục tiêu quản lý nhà nước và quyền tự do kinh doanh của người dân"],
        ["Tư duy phân tích chính sách công đa chiều", "Kỹ năng nghiên cứu định lượng và định tính", "Tâm huyết phụng sự vì lợi ích chung của cộng đồng"],
        ["Giáo dục kinh tế và pháp luật", "Toán học", "Lịch sử", "Ngữ văn"],
        [{"level": "Đại học", "description": "Cử nhân Quản lý công, Chính sách công hoặc Luật (Học viện Hành chính Quốc gia, ĐH Kinh tế Quốc dân)"}],
        "Tìm hiểu về quá trình lấy ý kiến nhân dân khi Quốc hội sửa đổi một đạo luật quan trọng như Luật Đất đai.",
        "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80", "Chuyên gia thảo luận đánh giá tác động chính sách tại hội nghị tham vấn"
    ))
    c.append(make_c(
        "chuyen-vien-so-huu-tri-tue-sang-che", "Chuyên viên Sở hữu trí tuệ và Sáng chế (Patent & IP Attorney)", "Intellectual Property & Patent Attorney",
        ["Đại diện sở hữu trí tuệ", "Patent Agent"], g16, c16, l16, ["I", "C", "R"],
        "Soạn bản mô tả sáng chế kỹ thuật, nộp đơn bảo hộ nhãn hiệu độc quyền tại Cục Sở hữu trí tuệ và bảo vệ bản quyền trước hàng giả.",
        ["Tra cứu khả năng đăng ký sáng chế và nhãn hiệu trên cơ sở dữ liệu WIPO toàn cầu", "Viết bản mô tả giải pháp kỹ thuật và yêu cầu bảo hộ sáng chế (Claims)", "Xử lý các hành vi xâm phạm quyền sở hữu trí tuệ và bán hàng giả trên mạng"],
        ["Bản mô tả sáng chế kỹ thuật chuẩn mực", "Giấy chứng nhận đăng ký nhãn hiệu độc quyền"],
        ["Cơ sở dữ liệu sáng chế WIPO PATENTSCOPE", "Cơ sở dữ liệu nhãn hiệu Cục SHTT (IP Viet Nam)", "Phần mềm tra cứu bản quyền"],
        "Tổ chức đại diện sở hữu trí tuệ, viện nghiên cứu sáng chế, phòng R&D các tập đoàn.",
        ["Bản mô tả sáng chế đòi hỏi người viết vừa giỏi luật vừa am hiểu tường tận kỹ thuật chuyên sâu", "Thời gian thẩm định đơn cấp bằng sáng chế kéo dài từ 2 đến 3 năm"],
        ["Hiểu biết kỹ thuật cơ khí, hóa chất hoặc CNTT", "Kiến thức luật sở hữu trí tuệ chuyên sâu", "Kỹ năng lập luận bảo vệ phạm vi bảo hộ"],
        ["Vật lý", "Hóa học", "Giáo dục kinh tế và pháp luật", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Tốt nghiệp Đại học khối kỹ thuật hoặc Luật + Chứng chỉ hành nghề Người đại diện sở hữu công nghiệp của Cục SHTT"}],
        "Lật một sản phẩm công nghệ xem ký hiệu chữ R trong vòng tròn (®) có ý nghĩa gì đối với nhãn hiệu đã được bảo hộ.",
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80", "Chuyên viên tra cứu bản quyền sáng chế trên cơ sở dữ liệu quốc tế"
    ))
    c.append(make_c(
        "tro-giup-vien-phap-ly-cong-dong", "Trợ giúp viên pháp lý cho người nghèo (Legal Aid Officer)", "Public Legal Aid Officer",
        ["Trợ giúp viên pháp lý", "Legal Aid Specialist"], g16, c16, l16, ["S", "E", "C"],
        "Tư vấn pháp luật và bào chữa hoàn toàn miễn phí cho người nghèo, đồng bào dân tộc thiểu số và nạn nhân bạo lực gia đình.",
        ["Về tận các thôn bản vùng sâu vùng xa tổ chức các buổi truyền thông trợ giúp pháp lý lưu động", "Tiếp nhận và tư vấn pháp lý miễn phí cho bà con về tranh chấp đất đai, chế độ bảo trợ xã hội", "Tham gia bào chữa bảo vệ quyền lợi hợp pháp cho người nghèo tại tòa án"],
        ["Hồ sơ vụ việc trợ giúp pháp lý hoàn thành", "Bà con được bảo vệ quyền lợi chính đáng mà không tốn chi phí"],
        ["Sổ tay pháp luật trợ giúp pháp lý", "Mẫu đơn khiếu nại và mẫu đơn xin trợ giúp pháp lý"],
        "Trung tâm Trợ giúp pháp lý nhà nước (thuộc Sở Tư pháp các tỉnh).",
        ["Đi lại khó khăn trên các cung đường đồi núi hiểm trở", "Bà con vùng cao nhiều nơi còn hạn chế về tiếng Kinh đòi hỏi sự kiên nhẫn giải thích tỉ mỉ"],
        ["Tấm lòng nhân ái vì người nghèo và yếu thế", "Kiến thức pháp luật dân sự, đất đai và hình sự", "Kỹ năng giao tiếp thấu hiểu văn hóa đồng bào DTTS"],
        ["Giáo dục kinh tế và pháp luật", "Ngữ văn", "Địa lý"],
        [{"level": "Đại học", "description": "Cử nhân Luật + Có chứng chỉ đào tạo nghề luật sư + Được bổ nhiệm Trợ giúp viên pháp lý nhà nước"}],
        "Tìm hiểu về chính sách của Nhà nước ta trong việc cung cấp luật sư miễn phí cho bà con nghèo và người khuyết tật.",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80", "Trợ giúp viên pháp lý tư vấn quyền lợi miễn phí cho người dân nghèo"
    ))
    c.append(make_c(
        "hoa-giai-vien-thuong-mai-quoc-te", "Trọng tài viên và Hòa giải viên thương mại (Commercial Arbitrator & Mediator)", "International Commercial Arbitrator",
        ["Trọng tài viên thương mại", "Commercial Arbitrator"], g16, c16, l16, ["I", "E", "C"],
        "Phân xử các tranh chấp hợp đồng kinh doanh quốc tế tại Trung tâm Trọng tài Quốc tế (VIAC) bảo mật, nhanh chóng và không qua tòa án.",
        ["Nghiên cứu hồ sơ tranh chấp và các điều khoản hợp đồng thương mại quốc tế", "Chủ trì phiên họp phân xử trọng tài theo quy tắc VIAC / UNCITRAL", "Ban hành phán quyết trọng tài có giá trị chung thẩm và cưỡng chế thi hành toàn cầu"],
        ["Phán quyết trọng tài thương mại (Arbitral Award)", "Biên bản hòa giải thành công giữa hai doanh nghiệp"],
        ["Quy tắc tố tụng trọng tài quốc tế", "Hồ sơ vụ tranh chấp thương mại song ngữ"],
        "Trung tâm Trọng tài Quốc tế Việt Nam (VIAC), Trung tâm Trọng tài Quốc tế Singapore (SIAC).",
        ["Các vụ tranh chấp thương mại hàng triệu USD với nhiều tình tiết pháp lý phức tạp", "Phải giữ vững tính độc lập và bảo mật tuyệt đối thông tin kinh doanh của các bên"],
        ["Kinh nghiệm và uy tín nghề nghiệp chuyên sâu trong lĩnh vực kinh tế, hàng hải, xây dựng", "Tiếng Anh tranh tụng thương mại quốc tế", "Kỹ năng lắng nghe và hòa giải tranh chấp"],
        ["Giáo dục kinh tế và pháp luật", "Tiếng Anh", "Toán học"],
        [{"level": "Đại học", "description": "Chuyên gia có trình độ đại học trở lên, có ít nhất 15 năm kinh nghiệm công tác trong lĩnh vực pháp lý hoặc kinh tế + Được bầu vào danh sách Trọng tài viên VIAC"}],
        "Tìm hiểu tại sao các tập đoàn lớn thích giải quyết tranh chấp bằng Trọng tài thương mại hơn là đưa nhau ra tòa án công khai.",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80", "Hội đồng trọng tài thương mại lắng nghe các bên tranh luận phân xử tranh chấp"
    ))
    c.append(make_c(
        "chap-hanh-vien-thi-hanh-an", "Chấp hành viên thi hành án dân sự (Judicial Enforcement Officer)", "Civil Enforcement Officer / Bailiff",
        ["Chấp hành viên", "Enforcement Officer"], g16, c16, l16, ["C", "R", "E"],
        "Tổ chức thi hành các bản án đã có hiệu lực của tòa án: kê biên tài sản, phong tỏa tài khoản ngân hàng để trả lại tiền cho người thắng kiện.",
        ["Tống đạt các quyết định thi hành án và động viên đương sự tự nguyện thi hành", "Xác minh điều kiện kinh tế, tài sản nhà đất và tài khoản ngân hàng của người phải thi hành án", "Tổ chức cưỡng chế kê biên đấu giá tài sản khi đương sự cố tình tẩu tán trốn tránh nghĩa vụ"],
        ["Biên bản kê biên xử lý tài sản thi hành án", "Biên bản bàn giao tài sản đấu giá cho người mua"],
        ["Phần mềm quản lý nghiệp vụ thi hành án", "Trang phục chấp hành viên tư pháp"],
        "Chi cục Thi hành án dân sự, hiện trường kê biên tài sản.",
        ["Đối mặt trực tiếp với sự chống đối, bức xúc hoặc đe dọa từ những người bị kê biên tài sản", "Công việc đòi hỏi sự cứng rắn nhưng vẫn phải nhân văn, đúng trình tự pháp luật"],
        ["Nắm vững luật thi hành án dân sự", "Bản lĩnh kiên định trước áp lực", "Kỹ năng tuyên truyền thuyết phục đương sự tự nguyện chấp hành"],
        ["Giáo dục kinh tế và pháp luật", "Tâm lý học", "Võ thuật tự vệ"],
        [{"level": "Đại học", "description": "Cử nhân Luật + Đào tạo nghề Chấp hành viên tại Học viện Tư pháp + Được Bộ trưởng Bộ Tư pháp bổ nhiệm Chấp hành viên"}],
        "Tìm hiểu tại sao sau khi tòa tuyên án thắng kiện, người thắng kiện phải nộp đơn yêu cầu thi hành án thì mới lấy lại được tài sản.",
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80", "Chấp hành viên kiểm tra biên bản thi hành bản án dân sự"
    ))

    # 17. NĂNG LƯỢNG TÁI TẠO VÀ MÔI TRƯỜNG
    g17, c17, l17 = "nang-luong-moi-truong", "MoiTruong", "Năng lượng tái tạo và môi trường"
    c.append(make_c(
        "ky-su-dien-mat-troi-va-nang-luong-gio", "Kỹ sư Năng lượng tái tạo (Solar & Wind Energy Engineer)", "Renewable Energy (Solar & Wind) Systems Engineer",
        ["Kỹ sư điện mặt trời", "Kỹ sư điện gió"], g17, c17, l17, ["R", "I"],
        "Tính toán bức xạ mặt trời, hoa gió, thiết kế trang trại điện mặt trời nổi và cánh đồng tuabin gió hòa lưới điện quốc gia.",
        ["Phân tích dữ liệu tốc độ gió từ cột đo gió cao 100m để tính toán sản lượng điện hàng năm (P50/P90)", "Mô phỏng bố trí góc nghiêng tấm pin quang điện (PV) tối ưu hấp thụ bức xạ", "Thiết kế trạm biến áp nâng áp 110kV/220kV và đường dây truyền tải hòa lưới"],
        ["Hồ sơ thiết kế kỹ thuật trang trại điện gió / mặt trời", "Báo cáo mô phỏng sản lượng điện phát lưới hàng năm"],
        ["PVSyst", "WAsP (Wind Atlas)", "AutoCAD Electrical", "MATLAB Simulink"],
        "Trang trại điện gió ven biển Ninh Thuận, Bạc Liêu, công trường điện mặt trời mái nhà công nghiệp.",
        ["Làm việc tại các vùng nắng gắt gió lớn hoặc leo lên trụ tuabin gió cao 120m ngoài biển", "Chính sách giá điện năng lượng tái tạo thay đổi theo từng thời kỳ"],
        ["Kỹ thuật điện năng và điện tử công suất", "Mô phỏng năng lượng chuyên sâu PVSyst/WAsP", "Tiêu chuẩn an toàn điện cao áp"],
        ["Vật lý", "Toán học", "Địa lý"],
        [{"level": "Đại học", "description": "Kỹ sư Hệ thống điện, Kỹ thuật Năng lượng hoặc Năng lượng tái tạo (ĐH Bách khoa)"}],
        "Quan sát các tấm pin mặt trời trên mái nhà và xem góc nghiêng của tấm pin hướng về phía nào (hướng Nam) để đón nhiều nắng nhất.",
        "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80", "Cánh đồng tuabin gió và tấm pin mặt trời trải dài đón ánh nắng"
    ))
    c.append(make_c(
        "ky-su-danh-gia-tac-dong-moi-truong-dtm", "Kỹ sư Đánh giá tác động môi trường (Environmental Impact Assessment - EIA)", "Environmental Impact Assessment (EIA) Specialist",
        ["Kỹ sư ĐTM", "EIA Specialist"], g17, c17, l17, ["I", "C", "R"],
        "Lấy mẫu nước ngầm, đo khói bụi khí thải và viết báo cáo đánh giá tác động môi trường (ĐTM) trước khi một khu công nghiệp được cấp phép xây dựng.",
        ["Đo đạc nồng độ bụi mịn PM2.5, khí SO2, NOx tại khu vực dự kiến xây dựng", "Dự báo mức độ lan truyền ô nhiễm khi nhà máy đi vào hoạt động bằng mô hình toán", "Đề xuất các biện pháp giảm thiểu ô nhiễm và bảo vệ nguồn nước cho cộng đồng xung quanh"],
        ["Báo cáo đánh giá tác động môi trường ĐTM được Bộ TN&MT phê duyệt", "Kế hoạch quản lý môi trường công trình"],
        ["Máy đo nồng độ khí thải cầm tay", "Phần mềm mô phỏng lan truyền ô nhiễm AERMOD", "Máy lấy mẫu bụi thể tích lớn"],
        "Viện nghiên cứu môi trường, công ty tư vấn môi trường, đi khảo sát thực địa hiện trường.",
        ["Phải tiếp xúc với các nguồn ô nhiễm thực tế khi lấy mẫu hiện trường", "Chịu trách nhiệm bảo vệ môi trường trước áp lực thúc đẩy tiến độ dự án"],
        ["Hiểu biết sâu sắc luật bảo vệ môi trường", "Kỹ năng phân tích hóa lý môi trường", "Khả năng viết báo cáo khoa học chặt chẽ"],
        ["Hóa học", "Sinh học", "Địa lý"],
        [{"level": "Đại học", "description": "Kỹ sư Khoa học Môi trường hoặc Quản lý Môi trường (ĐH Bách khoa, ĐH KHTN)"}],
        "Tìm hiểu về chỉ số chất lượng không khí AQI mà em vẫn xem trên điện thoại mỗi buổi sáng xem màu xanh, vàng, đỏ có ý nghĩa gì.",
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80", "Kỹ sư môi trường lấy mẫu nước sông để kiểm tra nồng độ kim loại nặng"
    ))
    c.append(make_c(
        "chuyen-vien-tin-chi-carbon-net-zero", "Chuyên viên Kiểm kê khí nhà kính và Tín chỉ Carbon (Carbon Credit / Net Zero Specialist)", "Carbon Footprint & Net Zero Consultant",
        ["Chuyên gia tín chỉ carbon", "Carbon Footprint Specialist"], g17, c17, l17, ["I", "C", "E"],
        "Đo đạc lượng phát thải CO2 của nhà máy, xây dựng lộ trình Net Zero và đăng ký phát hành tín chỉ carbon rừng bán cho các tập đoàn quốc tế.",
        ["Kiểm kê khí nhà kính phạm vi 1, 2, 3 theo tiêu chuẩn quốc tế ISO 14064 và GHG Protocol", "Tính toán lượng hấp thụ carbon của các cánh rừng trồng ngập mặn", "Đăng ký cấp tín chỉ carbon tiêu chuẩn Verra / Gold Standard để giao dịch trên sàn quốc tế"],
        ["Báo cáo kiểm kê khí nhà kính của doanh nghiệp", "Chứng nhận tín chỉ carbon có mã số giao dịch quốc tế"],
        ["Công cụ tính toán dấu chân carbon GHG Protocol", "Phần mềm viễn thám đo sinh khối rừng", "Sàn giao dịch carbon tự nguyện"],
        "Công ty tư vấn phát triển bền vững ESG, ban quản lý rừng phòng hộ, quỹ đầu tư khí hậu.",
        ["Thị trường tín chỉ carbon còn rất mới mẻ, các tiêu chuẩn quốc tế cập nhật thay đổi liên tục", "Đòi hỏi khả năng tính toán số liệu phát thải từ hàng nghìn nguồn tiêu thụ điện, xăng dầu"],
        ["Kiến thức biến đổi khí hậu và kinh tế carbon", "Thành thạo phương pháp kiểm kê GHG Protocol", "Tiếng Anh chuyên ngành bền vững"],
        ["Hóa học", "Địa lý", "Toán học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Kinh tế môi trường, Khoa học môi trường hoặc Biến đổi khí hậu"}],
        "Tìm hiểu về cam kết Net Zero 2050 của Việt Nam: đưa mức phát thải ròng khí nhà kính về bằng 0 vào năm 2050.",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80", "Cánh rừng ngập mặn xanh bạt ngàn hấp thụ hàng triệu tấn khí CO2"
    ))
    c.append(make_c(
        "ky-su-xu-ly-nuoc-thai-tai-tuan-hoan", "Kỹ sư Xử lý nước thải và Tái tuần hoàn nước (Water Treatment & Recycling Engineer)", "Wastewater Treatment & Water Reclamation Engineer",
        ["Kỹ sư xử lý nước", "Water Treatment Engineer"], g17, c17, l17, ["R", "I"],
        "Vận hành bể xử lý sinh học hiếu khí, kỵ khí và hệ thống màng lọc MBR biến nước thải dệt nhuộm đen ngòm thành nước trong tái sử dụng tưới cây.",
        ["Nuôi cấy và duy trì bùn hoạt tính vi sinh trong các bể sục khí Aerotank", "Châm hóa chất keo tụ PAC và Polymer lắng đọng kim loại nặng và cặn lơ lửng", "Vận hành hệ thống màng siêu lọc UF và khử trùng tia cực tím UV"],
        ["Quy trình vận hành trạm xử lý nước thải chuẩn hóa", "Nước thải sau xử lý đạt cột A theo QCVN 40:2011/BTNMT"],
        ["Hệ thống bể lắng sinh học", "Hệ thống màng lọc vi sinh MBR", "Máy đo chỉ số BOD, COD, DO"],
        "Trạm xử lý nước thải tập trung khu công nghiệp, nhà máy dệt nhuộm, xí nghiệp giấy.",
        ["Mùi hôi đặc trưng của nước thải và bùn vi sinh trong khu vực xử lý", "Trách nhiệm pháp lý nghiêm ngặt nếu nước thải xả ra sông suối vượt ngưỡng quy định"],
        ["Kỹ thuật vi sinh học xử lý nước", "Hóa học keo tụ tạo bông", "Vận hành hệ thống bơm van tự động SCADA"],
        ["Hóa học", "Sinh học", "Vật lý"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật Môi trường hoặc Kỹ thuật Hóa học (ĐH Bách khoa, ĐH Xây dựng)"}, {"level": "Cao đẳng", "description": "Cao đẳng Kỹ thuật Xử lý nước"}],
        "Quan sát chiếc phèn chua làm trong nước đục như thế nào để hiểu nguyên lý keo tụ bông cặn trong xử lý nước.",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80", "Bể sục khí sinh học xử lý nước thải công nghiệp hiện đại"
    ))
    c.append(make_c(
        "ky-su-kinh-te-tuan-hoan-tai-che-rac", "Kỹ sư Quản lý chất thải và Kinh tế tuần hoàn (Waste-to-Energy & Circular Engineer)", "Circular Economy & Resource Recovery Engineer",
        ["Kỹ sư tái chế", "Waste Management Engineer"], g17, c17, l17, ["R", "I", "C"],
        "Thiết kế dây chuyền phân loại rác thông minh, nhà máy đốt rác phát điện (Waste-to-Energy) và tái chế rác thải nhựa thành hạt nhựa nguyên sinh.",
        ["Phân tích thành phần rác thải sinh hoạt (nhựa, hữu cơ, kim loại, thủy tinh)", "Kiểm soát nhiệt độ lò đốt rác trên 1050 độ C để xử lý triệt để khí độc Dioxin", "Thiết lập quy trình rửa, nghiền và tạo hạt nhựa tái chế hạt rPET cho ngành may mặc"],
        ["Quy trình thu hồi tài nguyên từ chất thải", "Sản lượng điện phát lưới từ rác thải sinh hoạt"],
        ["Nhà máy đốt rác phát điện", "Hệ thống phân loại rác quang học", "Máy ép kiện rác tự động"],
        "Khu liên hợp xử lý chất thải (Khu xử lý rác Nam Sơn Hà Nội, Đa Phước TP.HCM), nhà máy điện rác Sóc Sơn.",
        ["Môi trường rác thải có mùi hôi và nguy cơ ô nhiễm nếu không che chắn kỹ", "Cần kiên trì thay đổi thói quen phân loại rác tại nguồn của người dân"],
        ["Công nghệ nhiệt đốt rác phát điện", "Kỹ thuật tái chế nhựa và polyme", "Mô hình kinh tế tuần hoàn tái sử dụng tài nguyên"],
        ["Hóa học", "Vật lý", "Sinh học"],
        [{"level": "Đại học", "description": "Kỹ sư Quản lý Chất thải, Kỹ thuật Môi trường hoặc Kỹ thuật Nhiệt"}],
        "Tìm hiểu về nhà máy điện rác Sóc Sơn Hà Nội: mỗi ngày đốt 4.000 tấn rác và tạo ra lượng điện thắp sáng cho hàng chục nghìn hộ dân.",
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80", "Quy trình tái chế chai nhựa đã qua sử dụng thành hạt nhựa nguyên sinh"
    ))
    c.append(make_c(
        "chuyen-gia-nang-luong-sinh-khoi-biomass", "Kỹ sư Năng lượng sinh khối (Biomass Energy Specialist)", "Biomass & Biofuel Energy Specialist",
        ["Kỹ sư biomass", "Biofuel Engineer"], g17, c17, l17, ["R", "I"],
        "Tận dụng vỏ trấu, bã mía, mùn cưa phế phẩm nông nghiệp ép thành viên nén năng lượng (Pellet) thay thế than đá trong lò hơi công nghiệp.",
        ["Khảo sát nguồn nguyên liệu trấu, mùn cưa và phế phẩm gỗ dăm dồi dào", "Nghiên cứu tỷ lệ phối trộn và lực ép viên nén để đạt nhiệt trị cao trên 4.000 kcal/kg", "Chuyển đổi lò hơi đốt than sang lò hơi đốt sinh khối giảm phát thải carbon"],
        ["Dây chuyền ép viên nén sinh khối chất lượng cao", "Hợp đồng cung ứng nhiên liệu sinh khối cho các nhà máy công nghiệp"],
        ["Máy ép viên nén trục đứng", "Máy đo độ ẩm nguyên liệu", "Thiết bị phân tích nhiệt trị bom nhiệt lượng kế"],
        "Nhà máy sản xuất viên nén gỗ, nhà máy đường (nhiệt điện bã mía), nhà máy thức ăn chăn nuôi.",
        ["Bụi mùn cưa và nguy cơ cháy nổ nếu không kiểm soát tốt độ ẩm kho chứa", "Nguồn nguyên liệu phụ thuộc theo mùa vụ nông lâm nghiệp"],
        ["Kỹ thuật đốt cháy và nhiên liệu sinh học", "Vận hành máy móc chế biến gỗ và sinh khối", "Tính toán hiệu quả năng lượng thay thế"],
        ["Hóa học", "Vật lý", "Công nghệ"],
        [{"level": "Đại học", "description": "Kỹ sư Năng lượng, Kỹ thuật Hóa học hoặc Lâm nghiệp"}],
        "Tìm hiểu xem các nhà máy đường tận dụng bã mía ép khô để tự phát điện cho cả nhà máy hoạt động như thế nào.",
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80", "Viên nén gỗ sinh khối làm từ mùn cưa thay thế than đá bảo vệ môi trường"
    ))
    c.append(make_c(
        "ky-thuat-vien-tuabin-gio-ngoai-khoi", "Kỹ thuật viên bảo trì Tuabin gió ngoài khơi (Offshore Wind Turbine Technician)", "Offshore Wind Turbine Service Technician",
        ["Thợ bảo trì tuabin gió", "Wind Turbine Tech"], g17, c17, l17, ["R"],
        "Đu dây trên cao ở độ cao 100m giữa biển khơi, kiểm tra cánh quạt tuabin gió, thay dầu hộp số và bảo dưỡng máy phát điện gió ngoài khơi.",
        ["Di chuyển bằng tàu dịch vụ vượt sóng ra các trụ tuabin gió ngoài khơi", "Đeo đai bảo hộ leo thang dây bên trong lòng trụ tuabin lên buồng máy (Nacelle)", "Kiểm tra vết nứt cánh quạt composite bằng thiết bị siêu âm và thay dầu bôi trơn hộp số"],
        ["Nhật ký bảo dưỡng tuabin gió ngoài khơi", "Biên bản kiểm tra an toàn cánh quạt và hệ thống phanh hãm"],
        ["Bộ đồ leo dây trên cao chuyên dụng (Rope Access)", "Cờ lê thủy lực lực siết lớn", "Máy siêu âm kiểm tra vết nứt"],
        "Trang trại điện gió ngoài khơi (Bạc Liêu, Trà Vinh, Bình Thuận), làm việc cheo leo giữa biển khơi.",
        ["Làm việc ở độ cao chóng mặt 100-140m giữa biển gió lớn, say sóng khi đi tàu", "Đòi hỏi thần kinh thép, thể lực dẻo dai và không sợ độ cao"],
        ["Kỹ thuật đu dây tiếp cận trên cao (IRATA)", "Bảo trì cơ điện tử máy phát điện gió", "An toàn cứu hộ trên biển quốc tế (GWO)"],
        ["Vật lý", "Thể dục", "Công nghệ"],
        [{"level": "Cao đẳng", "description": "Cao đẳng Nghề Điện gió hoặc Cơ điện tử"}, {"level": "Đào tạo nghề", "description": "Chứng chỉ an toàn điện gió toàn cầu GWO + Chứng chỉ leo dây IRATA"}],
        "Xem video các kỹ thuật viên đu dây sửa chữa cánh quạt tuabin gió khổng lồ giữa biển khơi bao la.",
        "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80", "Kỹ thuật viên đu dây bảo trì cánh quạt tuabin gió trên cao giữa biển"
    ))
    c.append(make_c(
        "chuyen-vien-tu-van-cong-trinh-xanh-leed", "Chuyên viên Tư vấn công trình xanh (Green Building Consultant - LEED / LOTUS)", "Green Building & Sustainable Architecture Consultant",
        ["Chuyên gia công trình xanh", "LEED AP Consultant"], g17, c17, l17, ["I", "C", "A"],
        "Tính toán giảm 30% điện nước cho tòa nhà cao tầng bằng kính hộp cản nhiệt Low-E, pin mặt trời và xin cấp chứng chỉ xanh quốc tế LEED.",
        ["Mô phỏng hiệu năng sử dụng năng lượng tổng thể của tòa nhà trên phần mềm", "Lựa chọn các loại sơn, keo dán có nồng độ hợp chất hữu cơ dễ bay hơi thấp (Low-VOC)", "Lập hồ sơ tích lũy điểm thưởng tín chỉ xanh gửi Hội đồng Công trình Xanh Hoa Kỳ (USGBC)"],
        ["Hồ sơ đánh giá công trình xanh đạt chuẩn LEED Gold / Platinum", "Báo cáo mô phỏng năng lượng tiết kiệm điện nước"],
        ["Phần mềm mô phỏng năng lượng DesignBuilder / eQUEST", "Tiêu chuẩn đánh giá LEED v4 / LOTUS"],
        "Công ty tư vấn kiến trúc xanh, tập đoàn bất động sản cao cấp.",
        ["Phải giám sát chặt chẽ hồ sơ vật liệu từ các nhà thầu thi công để không bị mất điểm chứng chỉ", "Cần thuyết phục chủ đầu tư chi thêm kinh phí đầu tư ban đầu vì lợi ích tiết kiệm năng lượng lâu dài"],
        ["Kiến thức vật lý kiến trúc và năng lượng công trình", "Nắm vững tiêu chuẩn công trình xanh quốc tế LEED", "Kỹ năng làm việc với các chuyên gia nước ngoài"],
        ["Vật lý", "Tiếng Anh", "Toán học"],
        [{"level": "Đại học", "description": "Kiến trúc sư hoặc Kỹ sư Xây dựng / Môi trường + Chứng chỉ chuyên gia LEED AP hoặc LOTUS AP"}],
        "Tìm hiểu tòa nhà xanh Diamond Island hoặc Capital Place Hà Nội đạt chứng chỉ LEED Platinum tiết kiệm điện nước ra sao.",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80", "Tòa nhà công trình xanh hiện đại với cây xanh bao phủ các tầng ban công"
    ))
    c.append(make_c(
        "ky-su-an-toan-buc-xa-va-hat-nhan", "Kỹ sư An toàn bức xạ và hạt nhân ứng dụng (Radiation Safety Engineer)", "Radiation Protection & Nuclear Safety Specialist",
        ["Kỹ sư an toàn bức xạ", "Radiation Safety Officer"], g17, c17, l17, ["I", "R", "C"],
        "Đo đạc liều lượng chiếu xạ, kiểm tra chì che chắn tại các máy xạ trị ung thư bệnh viện và máy soi chiếu kiểm tra container cảng biển.",
        ["Đo đạc kiểm tra phông phóng xạ môi trường định kỳ tại các phòng xạ trị ung thư", "Kiểm định nguồn phóng xạ công nghiệp và cấp phép vận chuyển nguồn an toàn", "Lập kế hoạch ứng phó sự cố rò rỉ bức xạ theo quy chuẩn an toàn hạt nhân IAEA"],
        ["Biên bản kiểm tra an toàn bức xạ phòng máy y tế", "Hồ sơ xin cấp phép lưu hành nguồn phóng xạ Cục An toàn bức xạ và hạt nhân"],
        ["Máy đo liều kế bức xạ Geiger-Muller", "Liều kế cá nhân TLD", "Bộ trang phục chống nhiễm bẩn phóng xạ"],
        "Bệnh viện ung bướu, viện nghiên cứu hạt nhân Đà Lạt, cảng biển có máy soi container bức xạ.",
        ["Trách nhiệm an toàn sinh mạng trước nguy cơ nhiễm xạ vô hình không màu không mùi", "Tuân thủ kỷ luật an toàn bức xạ tuyệt đối, không được lơ là một giây"],
        ["Vật lý hạt nhân và tương tác bức xạ", "Quy chuẩn an toàn bức xạ quốc tế IAEA", "Kỹ năng xử lý sự cố khẩn cấp"],
        ["Vật lý", "Toán học", "Hóa học"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật Hạt nhân hoặc Vật lý kỹ thuật (ĐH Khoa học Tự nhiên, ĐH Bách khoa)"}],
        "Tìm hiểu về Lò phản ứng hạt nhân Đà Lạt phục vụ nghiên cứu khoa học và sản xuất đồng vị phóng xạ chữa bệnh ung thư.",
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", "Kỹ sư đo đạc liều lượng bức xạ an toàn tại phòng máy xạ trị bệnh viện"
    ))
    c.append(make_c(
        "can-bo-bao-ton-da-dang-sinh-hoc-va-rung", "Cán bộ Bảo tồn đa dạng sinh học và Rừng (Wildlife & Forest Conservationist)", "Forest Conservationist & Wildlife Biologist",
        ["Kiểm lâm viên bảo tồn", "Conservation Biologist"], g17, c17, l17, ["R", "I", "S"],
        "Đặt bẫy ảnh điều tra loài vượn quý hiếm, tuần tra tháo gỡ bẫy thú và cứu hộ các cá thể tê tê, rùa biển tái thả về tự nhiên hoang dã.",
        ["Đi rừng tuần tra tháo gỡ các bẫy dây thép săn bắt trộm động vật hoang dã", "Cài đặt máy bẫy ảnh tự động (Camera trap) trên thân cây ghi lại động vật quý", "Chăm sóc phục hồi sức khỏe cho động vật hoang dã trước khi tái thả về rừng"],
        ["Bản đồ phân bố các loài động thực vật quý hiếm trong vườn quốc gia", "Báo cáo đa dạng sinh học bảo tồn nguồn gen"],
        ["Máy bẫy ảnh hồng ngoại", "Máy định vị GPS cầm tay", "Ống nhòm ngắm chim", "Lưới cứu hộ động vật"],
        "Vườn quốc gia (Cát Tiên, Bạch Mã, Pù Mát), trung tâm cứu hộ động vật hoang dã.",
        ["Sống nhiều ngày trong rừng sâu thiếu sóng điện thoại, đối mặt với lâm tặc săn trộm hung hãn", "Điều kiện sinh hoạt kham khổ trong các trạm kiểm lâm"],
        ["Kỹ năng sinh tồn và đi rừng bền bỉ", "Kiến thức phân loại học động thực vật hoang dã", "Tình yêu thiên nhiên và lòng dũng cảm bảo vệ rừng"],
        ["Sinh học", "Địa lý", "Võ thuật / Thể dục"],
        [{"level": "Đại học", "description": "Kỹ sư Lâm sinh, Quản lý tài nguyên rừng hoặc Sinh học (ĐH Lâm nghiệp, ĐH Khoa học Tự nhiên)"}],
        "Tìm hiểu về loài Sao la - 'Kỳ lân châu Á' vô cùng quý hiếm được phát hiện lần đầu tiên tại rừng Trường Sơn Việt Nam năm 1992.",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80", "Cán bộ bảo tồn kiểm tra máy bẫy ảnh tự động theo dõi động vật trong rừng sâu"
    ))

    # 18. AN TOÀN THÔNG TIN VÀ MẠNG MÁY TÍNH
    g18, c18, l18 = "an-toan-thong-tin", "AnNinhMang", "An toàn thông tin và mạng máy tính"
    c.append(make_c(
        "chuyen-gia-kiem-thu-xam-nhap-hacker-mu-trang", "Chuyên gia kiểm thử xâm nhập (Penetration Tester / Ethical Hacker)", "Ethical Hacker & Penetration Tester",
        ["Hacker mũ trắng", "Penetration Tester"], g18, c18, l18, ["I", "R"],
        "Đóng vai tin tặc tấn công vào website ngân hàng, tìm ra các lỗ hổng bảo mật zero-day và báo cáo để lập trình viên vá lỗi trước khi bị kẻ xấu khai thác.",
        ["Quét tìm các lỗ hổng bảo mật tiêm mã SQL Injection, XSS trên ứng dụng web", "Thực hiện tấn công giả lập chiếm quyền kiểm soát máy chủ doanh nghiệp", "Viết báo cáo đánh giá mức độ rủi ro lỗ hổng kèm hướng dẫn vá lỗi chi tiết"],
        ["Báo cáo kiểm thử xâm nhập bảo mật (Penetration Test Report)", "Bằng chứng khai thác lỗ hổng (PoC - Proof of Concept)"],
        ["Kali Linux", "Burp Suite Professional", "Metasploit", "Nmap", "Wireshark"],
        "Công ty an ninh mạng (Bkav, Viettel Cyber Security, VNPT Cyber), trung tâm an ninh mạng ngân hàng.",
        ["Phải liên tục cập nhật các phương thức tấn công mới của giới tội phạm mạng", "Ranh giới đạo đức nghề nghiệp rất mong manh: tuyệt đối không được trục lợi từ lỗ hổng tìm thấy"],
        ["Tư duy tấn công sáng tạo của hacker", "Hiểu sâu kiến trúc mạng và giao thức HTTP/TCP", "Đạo đức nghề nghiệp trung thực tuyệt đối"],
        ["Tin học", "Toán học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Kỹ sư An toàn thông tin, An ninh mạng hoặc Khoa học máy tính"}, {"level": "Đào tạo nghề", "description": "Chứng chỉ an ninh mạng quốc tế CEH (Certified Ethical Hacker) hoặc OSCP"}],
        "Tìm hiểu về lỗ hổng 'SQL Injection': kẻ xấu có thể gõ một câu lệnh đặc biệt vào ô mật khẩu để đăng nhập mà không cần biết mật khẩu.",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", "Chuyên gia an ninh mạng phân tích dòng mã nguồn phát hiện lỗ hổng bảo mật"
    ))
    c.append(make_c(
        "ky-su-giam-sat-soc-an-ninh-mang", "Kỹ sư Giám sát an ninh mạng (SOC Analyst - Level 1 & 2)", "Security Operations Center (SOC) Analyst",
        ["Kỹ sư SOC", "SOC Analyst"], g18, c18, l18, ["C", "I", "R"],
        "Theo dõi màn hình cảnh báo tấn công mạng 24/7, phát hiện sớm các cuộc tấn công từ chối dịch vụ DDoS và chặn đứng virus xâm nhập.",
        ["Phân tích các cảnh báo bất thường từ hệ thống quản lý sự kiện an ninh mạng SIEM", "Xác định các cuộc tấn công dò quét mật khẩu Brute-force hoặc lây nhiễm mã độc", "Khóa địa chỉ IP tấn công trên tường lửa và cô lập các máy tính bị nhiễm virus ra khỏi mạng"],
        ["Báo cáo nhật ký giám sát sự cố an ninh mạng ca trực", "Biên bản xử lý cô lập mã độc thành công"],
        ["Hệ thống SIEM (Splunk, IBM QRadar, Microsoft Sentinel)", "Tường lửa thế hệ mới Fortinet / Palo Alto", "Wireshark"],
        "Trung tâm điều hành an ninh mạng SOC các tập đoàn lớn, ngân hàng số.",
        ["Trực ca đêm theo dõi màn hình dễ gây căng thẳng thị giác và mệt mỏi", "Áp lực phản ứng trong vòng 5-10 phút khi có cảnh báo đỏ cuộc tấn công lớn"],
        ["Khả năng đọc hiểu gói tin mạng và nhật ký hệ thống (Log analysis)", "Tư duy phản ứng sự cố nhanh nhạy", "Kỷ luật trực ca nghiêm túc"],
        ["Tin học", "Vật lý", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Kỹ sư An toàn thông tin hoặc Kỹ thuật Mạng máy tính"}, {"level": "Cao đẳng", "description": "Cao đẳng Quản trị An ninh mạng"}],
        "Tìm hiểu cuộc tấn công từ chối dịch vụ DDoS: hàng triệu máy tính ma cùng truy cập một trang web để làm cho trang web bị sập.",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80", "Màn hình trung tâm giám sát an ninh mạng SOC với các bản đồ tấn công trực tiếp"
    ))
    c.append(make_c(
        "ky-su-bao-mat-dam-may-cloud-security", "Kỹ sư Bảo mật điện toán đám mây (Cloud Security Engineer)", "Cloud Security Architecture Engineer",
        ["Kỹ sư bảo mật Cloud", "Cloud Security Specialist"], g18, c18, l18, ["I", "R", "C"],
        "Thiết lập chính sách phân quyền truy cập (IAM), mã hóa dữ liệu trên AWS, Google Cloud và ngăn chặn rò rỉ dữ liệu khách hàng lên Internet.",
        ["Cấu hình nguyên tắc đặc quyền tối thiểu (Least Privilege) cho tài khoản nhân viên", "Mã hóa toàn bộ dữ liệu khi lưu trữ (At-rest) và khi truyền tải (In-transit)", "Quét tự động các lỗ hổng cấu hình sai trên hạ tầng đám mây"],
        ["Kiến trúc bảo mật đám mây đạt chuẩn CIS Benchmark", "Chính sách phân quyền truy cập IAM an toàn"],
        ["AWS Identity and Access Management (IAM)", "HashiCorp Vault", "Prisma Cloud", "Terraform"],
        "Công ty công nghệ đám mây, các ngân hàng và kỳ lân công nghệ.",
        ["Hạ tầng đám mây phức tạp với hàng trăm dịch vụ liên kết với nhau", "Chỉ một cấu hình sai sót mở công khai thùng chứa dữ liệu S3 có thể làm lộ thông tin hàng triệu người dùng"],
        ["Kiến trúc bảo mật đám mây đa nền tảng (AWS, Azure, GCP)", "Mã hóa dữ liệu và quản lý khóa mật mã", "Tự động hóa kiểm tra tuân thủ bảo mật"],
        ["Tin học", "Toán học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Kỹ sư An toàn thông tin hoặc Khoa học máy tính + Chứng chỉ AWS Certified Security Specialty"}],
        "Tìm hiểu tại sao ngày nay các công ty lớn không tự mua máy chủ đặt dưới tầng hầm nữa mà đưa hết dữ liệu lên đám mây.",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", "Kỹ sư bảo mật cấu hình tường lửa và mã hóa trên nền tảng đám mây"
    ))
    c.append(make_c(
        "chuyen-gia-dieu-tra-dau-vet-so-forensics", "Chuyên gia Điều tra dấu vết số (Digital Forensics & Incident Response - DFIR)", "Digital Forensics & Incident Response Specialist",
        ["Điều tra viên tội phạm mạng", "Digital Forensics Specialist"], g18, c18, l18, ["I", "C", "R"],
        "Thu thập ổ cứng máy tính bị tấn công, khôi phục dữ liệu đã bị xóa và truy tìm dấu vết địa chỉ IP của kẻ tống tiền qua mạng.",
        ["Tạo bản sao hình ảnh số nguyên vẹn của ổ cứng vật lý (Forensic Image)", "Khôi phục các tệp tin, nhật ký tin nhắn và lịch sử duyệt web đã bị kẻ gian xóa", "Xây dựng lại dòng thời gian vụ tấn công (Timeline reconstruction) phục vụ khởi tố vụ án"],
        ["Báo cáo giám định kỹ thuật số phục vụ cơ quan điều tra", "Bằng chứng số được bảo toàn chuỗi hành trình (Chain of Custody)"],
        ["Phần mềm EnCase Forensic", "FTK Imager", "Autopsy", "Bộ chặn ghi ổ cứng phần cứng"],
        "Cơ quan an ninh mạng Bộ Công an (A05), các công ty ứng cứu sự cố bảo mật chuyên nghiệp.",
        ["Làm việc với các vụ án lừa đảo tài chính tinh vi và các băng nhóm tội phạm xuyên quốc gia", "Phải tuân thủ quy trình bảo toàn bằng chứng tố tụng nghiêm ngặt, không làm thay đổi 1 bit dữ liệu"],
        ["Kỹ năng phục hồi dữ liệu số chuyên sâu", "Hiểu biết cấu trúc hệ thống tệp NTFS/EXT4 và bộ nhớ RAM", "Tư duy điều tra suy luận logic"],
        ["Tin học", "Giáo dục kinh tế và pháp luật", "Toán học"],
        [{"level": "Đại học", "description": "Kỹ sư An toàn thông tin, Kỹ thuật Máy tính hoặc Khoa học Điều tra tội phạm"}],
        "Tìm hiểu tại sao khi em bấm 'Xóa' một bức ảnh trên máy tính thì bức ảnh đó vẫn chưa thực sự biến mất khỏi ổ cứng.",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80", "Chuyên gia điều tra dấu vết số trích xuất dữ liệu ổ cứng phục vụ phá án"
    ))
    c.append(make_c(
        "ky-su-an-toan-mat-ma-va-blockchain", "Kỹ sư Mật mã học và An toàn Blockchain (Cryptography & Blockchain Security Engineer)", "Cryptography & Smart Contract Security Auditor",
        ["Kỹ sư mật mã", "Smart Contract Auditor"], g18, c18, l18, ["I", "R"],
        "Nghiên cứu các thuật toán mã hóa bất đối xứng RSA, ECC, kiểm toán mã nguồn hợp đồng thông minh (Smart Contract) chống rút trộm tiền mã hóa.",
        ["Kiểm tra lỗi Re-entrancy và lỗi tràn số trong hợp đồng thông minh viết bằng Solidity", "Ứng dụng các thuật toán mật mã không tiết lộ bằng chứng (Zero-Knowledge Proof)", "Thiết kế chữ ký số đa chữ ký (Multi-sig) bảo vệ ví kho lưu trữ tài sản số"],
        ["Báo cáo kiểm toán hợp đồng thông minh Smart Contract Audit", "Module mã hóa dữ liệu bảo mật cao"],
        ["Remix IDE", "Slither", "Foundry", "Thư viện mật mã OpenZeppelin"],
        "Các công ty công nghệ Blockchain, dự án tài chính phi tập trung DeFi, viện nghiên cứu mật mã.",
        ["Hợp đồng thông minh khi đã đưa lên mạng lưới blockchain thì không thể sửa lại được, một lỗi nhỏ bị hacker khai thác mất sạch tiền", "Đòi hỏi nền tảng toán học trừu tượng rất cao"],
        ["Toán học mật mã và đại số trừu tượng", "Lập trình hợp đồng thông minh Solidity / Rust", "Tư duy phân tích lỗi logic hợp đồng"],
        ["Toán học", "Tin học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Kỹ sư Toán - Tin, An toàn thông tin hoặc Khoa học máy tính"}],
        "Tìm hiểu về chiếc khóa công khai và khóa bí mật: làm sao hai người có thể gửi thư mật cho nhau mà không sợ ai đọc trộm trên đường truyền.",
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80", "Mạng lưới kết nối chuỗi khối blockchain và công nghệ mã hóa số"
    ))
    c.append(make_c(
        "chuyen-vien-kiem-toan-tuan-thu-iso-27001", "Chuyên viên Kiểm toán tuân thủ An toàn thông tin (IT Compliance & ISO 27001 Lead Auditor)", "IT Security Compliance & Risk Auditor",
        ["Chuyên viên tuân thủ an ninh mạng", "ISO 27001 Auditor"], g18, c18, l18, ["C", "I"],
        "Đánh giá hệ thống quản lý an toàn thông tin ISMS theo chuẩn ISO 27001, luật an ninh mạng và bảo vệ dữ liệu cá nhân Nghị định 13.",
        ["Phỏng vấn các phòng ban về quy trình đặt mật khẩu và phân quyền tiếp cận dữ liệu", "Kiểm tra hệ thống sao lưu dữ liệu dự phòng và kế hoạch phục hồi sau thảm họa (DRP)", "Soạn thảo hồ sơ đánh giá và cấp chứng chỉ chuẩn an toàn thông tin ISO 27001"],
        ["Báo cáo đánh giá sự phù hợp hệ thống an toàn thông tin", "Kế hoạch khắc phục các điểm không phù hợp (CAPA)"],
        ["Tiêu chuẩn quốc tế ISO/IEC 27001:2022", "Phần mềm quản trị tuân thủ GRC", "Bảng kiểm đánh giá an toàn thông tin"],
        "Các tổ chức chứng nhận quốc tế (BSI, TÜV Rheinland), khối tuân thủ các ngân hàng.",
        ["Phải kiểm tra kỹ lưỡng hàng trăm quy trình và bằng chứng văn bản", "Đòi hỏi sự am hiểu sâu sắc cả về công nghệ lẫn văn bản pháp luật"],
        ["Nắm vững tiêu chuẩn an toàn thông tin ISO 27001 và luật an ninh mạng", "Kỹ năng phỏng vấn đánh giá bằng chứng", "Tính kỷ luật và chính trực"],
        ["Giáo dục kinh tế và pháp luật", "Tin học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị thông tin, An toàn thông tin hoặc Luật"}],
        "Tìm hiểu về Nghị định 13 bảo vệ dữ liệu cá nhân: tại sao các ứng dụng không được tự ý chia sẻ số điện thoại của em cho bên thứ ba.",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80", "Chuyên viên kiểm toán rà soát quy trình tuân thủ an toàn dữ liệu khách hàng"
    ))
    c.append(make_c(
        "quan-tri-vien-he-thong-mang-network-admin", "Quản trị viên Hệ thống mạng máy tính (Network & Systems Administrator)", "Network Infrastructure & Systems Administrator",
        ["Quản trị mạng", "Network Admin"], g18, c18, l18, ["R", "C"],
        "Bấm đầu cáp mạng, cấu hình Switch chia mạng ảo VLAN, Router định tuyến kết nối Internet và bảo đảm mạng wifi văn phòng luôn thông suốt.",
        ["Cấu hình bộ định tuyến Router và bộ chuyển mạch Switch Cisco / MikroTik", "Thiết lập mạng không dây Wi-Fi phủ sóng toàn bộ văn phòng tòa nhà", "Giám sát lưu lượng băng thông và khắc phục sự cố đứt cáp quang, nghẽn mạng"],
        ["Sơ đồ cấu trúc mạng mạng nội bộ (Network Topology)", "Hồ sơ cấu hình thiết bị mạng chuẩn hóa"],
        ["Thiết bị định tuyến Router / Switch Cisco", "Phần mềm giả lập mạng Cisco Packet Tracer", "Kìm bấm mạng và máy đo thông mạng"],
        "Phòng máy chủ IT nội bộ của các trường học, bệnh viện, doanh nghiệp.",
        ["Khi mất mạng internet toàn công ty ngừng làm việc, áp lực phải sửa xong trong vài phút", "Luồn dây cáp mạng bò trườn trong trần thạch cao bụi bặm"],
        ["Kỹ năng bấm cáp và đi dây mạng gọn gàng", "Hiểu sâu mô hình mạng OSI và định địa chỉ IP/Subnet", "Chuẩn đoán sự cố mạng nhanh chóng"],
        ["Tin học", "Vật lý", "Công nghệ"],
        [{"level": "Đại học", "description": "Kỹ sư Mạng máy tính & Truyền thông dữ liệu"}, {"level": "Cao đẳng", "description": "Cao đẳng Quản trị mạng máy tính"}, {"level": "Đào tạo nghề", "description": "Chứng chỉ quản trị mạng quốc tế Cisco CCNA"}],
        "Tìm hiểu hộp modem Wi-Fi ở nhà: sợi dây cáp quang mỏng dính cắm vào cổng màu xanh truyền dữ liệu bằng ánh sáng như thế nào.",
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80", "Quản trị viên cắm dây cáp mạng vào tủ rack máy chủ trung tâm"
    ))
    c.append(make_c(
        "ky-su-phan-tich-ma-doc-threat-intel", "Kỹ sư Phân tích mã độc và Mối đe dọa (Malware Reverse Engineer / Threat Intelligence)", "Malware Analyst & Threat Intelligence Specialist",
        ["Kỹ sư phân tích mã độc", "Malware Analyst"], g18, c18, l18, ["I", "R"],
        "Dịch ngược mã nhị phân của virus, bẻ khóa các dòng mã độc tống tiền (Ransomware) và tìm ra chìa khóa giải mã cứu dữ liệu cho nạn nhân.",
        ["Chạy mẫu virus trong môi trường hộp cát cách ly an toàn (Sandbox)", "Dịch ngược mã máy bằng phần mềm IDA Pro / Ghidra để tìm cơ chế hoạt động", "Trích xuất các dấu hiệu chỉ điểm xâm nhập (IoC) để cập nhật cho phần mềm diệt virus"],
        ["Báo cáo phân tích hành vi mã độc chuyên sâu", "Công cụ bẻ khóa giải cứu dữ liệu bị mã hóa độc hại"],
        ["IDA Pro", "Ghidra", "x64dbg", "Môi trường máy ảo Sandbox Flare-VM"],
        "Phòng R&D mã độc các tập đoàn bảo mật, trung tâm điều phối ứng cứu khẩn cấp máy tính quốc gia VNCERT.",
        ["Nguy cơ virus lây lan ra máy thật nếu sơ suất phá vỡ môi trường cách ly", "Mã độc hiện đại được trang bị nhiều lớp kỹ thuật né tránh và chống dịch ngược phức tạp"],
        ["Ngôn ngữ lập trình hợp ngữ Assembly và C", "Kỹ năng phân tích dịch ngược mã máy (Reverse Engineering)", "Tư duy điều tra logic"],
        ["Tin học", "Toán học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Kỹ sư An toàn thông tin, Khoa học máy tính hoặc Toán - Tin"}],
        "Tìm hiểu về virus 'Mã độc tống tiền' (Ransomware): khi máy tính bị nhiễm thì toàn bộ tài liệu bị khóa và đòi nợ bằng tiền ảo.",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80", "Kỹ sư phân tích mã độc dịch ngược mã máy trên phần mềm Ghidra"
    ))
    c.append(make_c(
        "ky-su-devsecops", "Kỹ sư DevSecOps (Development, Security & Operations Engineer)", "DevSecOps Pipeline Engineer",
        ["Kỹ sư DevSecOps", "Security Automation Engineer"], g18, c18, l18, ["R", "I", "C"],
        "Tích hợp các công cụ quét mã độc tự động vào đường ống đóng gói phần mềm CI/CD, chặn đứng lỗi bảo mật ngay từ khi lập trình viên gõ phím.",
        ["Cài đặt công cụ quét bảo mật mã nguồn tĩnh (SAST) tự động phát hiện mật khẩu bị lộ trong code", "Quét lỗ hổng các thư viện nguồn mở phụ thuộc bằng Dependency-Track", "Tự động hóa chặn đứng việc xuất bản phần mềm nếu còn chứa lỗi bảo mật nghiêm trọng"],
        ["Đường ống CI/CD tích hợp quét bảo mật tự động", "Bảng chỉ số đo lường nợ kỹ thuật bảo mật của dự án"],
        ["SonarQube", "Snyk", "GitLab CI", "OWASP ZAP", "Trivy"],
        "Công ty phần mềm, các ngân hàng công nghệ, tập đoàn đa quốc gia.",
        ["Cần dung hòa giữa tốc độ ra mắt tính năng mới của lập trình viên và sự an toàn của bảo mật", "Tránh tạo ra quá nhiều cảnh báo giả làm chậm tiến độ làm việc"],
        ["Kỹ năng tích hợp CI/CD tự động hóa", "Hiểu biết các tiêu chuẩn an toàn phần mềm OWASP Top 10", "Khả năng phối hợp giữa lập trình và bảo mật"],
        ["Tin học", "Tiếng Anh", "Toán học"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật phần mềm hoặc An toàn thông tin"}],
        "Tìm hiểu khái niệm 'Shift-Left Security': tại sao sửa lỗi bảo mật khi đang viết mã lại rẻ hơn gấp trăm lần so với sửa sau khi phần mềm đã bán ra thị trường.",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80", "Kỹ sư DevSecOps tự động hóa kiểm tra bảo mật trong đường ống CI/CD"
    ))
    c.append(make_c(
        "chuyen-vien-dao-tao-nhan-thuc-an-ninh-mang", "Chuyên viên Đào tạo nhận thức An ninh mạng (Cybersecurity Awareness Specialist)", "Security Awareness & Phishing Simulation Specialist",
        ["Chuyên viên an toàn nhận thức", "Security Awareness Trainer"], g18, c18, l18, ["S", "E", "C"],
        "Gửi các email lừa đảo giả lập (Phishing test), huấn luyện nhân viên không bấm vào đường link lạ và bảo vệ mật khẩu cơ quan an toàn.",
        ["Thiết kế các kịch bản email giả mạo lừa đảo tinh vi để kiểm tra phản xạ của nhân viên công ty", "Thống kê tỷ lệ nhân viên bị mắc bẫy bấm link và tổ chức lớp tập huấn an toàn lại", "Xây dựng các video hoạt hình ngắn vui nhộn chia sẻ mẹo đặt mật khẩu an toàn"],
        ["Chiến dịch diễn tập lừa đảo giả lập (Phishing Simulation Campaign)", "Báo cáo cải thiện chỉ số văn hóa bảo mật toàn doanh nghiệp"],
        ["Nền tảng đào tạo bảo mật KnowBe4", "Phần mềm tạo bài giảng tương tác Canva / Vyond"],
        "Khối quản trị an ninh mạng các ngân hàng lớn, cơ quan nhà nước, tập đoàn viễn thông.",
        ["Nhiều nhân viên có tâm lý chủ quan cho rằng an ninh mạng là việc của bộ phận IT", "Cần truyền đạt kiến thức kỹ thuật khô khan thành câu chuyện sinh động, dễ nhớ"],
        ["Kỹ năng sư phạm và truyền thông thu hút", "Hiểu biết tâm lý hành vi con người khi bị tấn công phi kỹ thuật (Social Engineering)", "Sự kiên nhẫn và đồng cảm"],
        ["Tâm lý học", "Tin học", "Ngữ văn", "Giáo dục công dân"],
        [{"level": "Đại học", "description": "Cử nhân Truyền thông, Công nghệ thông tin hoặc Tâm lý học"}],
        "Quan sát một tin nhắn mạo danh ngân hàng gửi đến điện thoại và tìm xem tên miền website trong tin nhắn có gì bất thường so với trang web chính thức.",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", "Chuyên viên hướng dẫn nhân viên cách nhận biết email lừa đảo mạo danh"
    ))

    # 19. THƯƠNG MẠI ĐIỆN TỬ VÀ BÁN LẺ HIỆN ĐẠI
    g19, c19, l19 = "thuong-mai-dien-tu", "ThuongMai", "Thương mại điện tử và bán lẻ hiện đại"
    c.append(make_c(
        "quan-ly-gian-hang-san-tmdt", "Quản lý Gian hàng sàn Thương mại điện tử (E-commerce Store Manager)", "E-commerce Marketplace Store Manager",
        ["Quản lý gian hàng Shopee/Lazada", "E-commerce Manager"], g19, c19, l19, ["E", "C"],
        "Trang trí gian hàng bắt mắt, đăng ký các gói khuyến mãi Flash Sale, tối ưu hóa từ khóa và thúc đẩy hàng nghìn đơn hàng mỗi ngày trên Shopee, TikTok Shop.",
        ["Thiết kế banner và tối ưu hóa hình ảnh sản phẩm chuẩn SEO sàn", "Đăng ký tham gia các chiến dịch Siêu Sale hàng tháng (Mega Campaign)", "Quản lý tồn kho liên sàn và điều phối nhân viên đóng gói chuyển hàng kịp giờ"],
        ["Doanh thu gian hàng sàn TMĐT tăng trưởng", "Chỉ số đánh giá gian hàng đạt 4.9 sao chuẩn Shop Yêu Thích"],
        ["Shopee Seller Centre", "TikTok Shop Seller Center", "Phần mềm quản lý bán hàng đa kênh Sapo / KiotViet"],
        "Công ty bán lẻ trực tuyến, các thương hiệu kinh doanh đa sàn.",
        ["Thức trắng đêm trực chiến vào các dịp sale lớn như 11/11 hay 12/12", "Thuật toán hiển thị và chính sách phí sàn thay đổi liên tục"],
        ["Kỹ năng tối ưu hóa công cụ tìm kiếm trên sàn TMĐT", "Quản trị vận hành đơn hàng và tồn kho", "Tư duy định giá và khuyến mãi thông minh"],
        ["Giáo dục kinh tế và pháp luật", "Toán học", "Tin học"],
        [{"level": "Đại học", "description": "Cử nhân Thương mại điện tử, Marketing hoặc Quản trị kinh doanh"}, {"level": "Cao đẳng", "description": "Cao đẳng Thương mại điện tử"}],
        "Vào một gian hàng Mall trên Shopee xem họ thiết kế banner hình ảnh sản phẩm đẹp mắt và rõ ràng như thế nào.",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80", "Quản lý gian hàng thương mại điện tử theo dõi đơn hàng trên máy tính"
    ))
    c.append(make_c(
        "chuyen-vien-livestream-ban-hang", "Chuyên viên Livestream bán hàng chuyên nghiệp (Live Commerce Host / Streamer)", "Live Commerce Professional Host",
        ["Streamer bán hàng", "Live Commerce Host"], g19, c19, l19, ["E", "A", "S"],
        "Lên sóng trực tiếp thử đồ, giới thiệu tính năng sản phẩm với năng lượng tràn đầy, giải đáp thắc mắc và chốt hàng nghìn đơn hàng trong mỗi phiên live.",
        ["Nắm vững kịch bản sản phẩm, giá bán ưu đãi và quà tặng của từng phiên live", "Nói liên tục trước ống kính với năng lượng tích cực và cuốn hút", "Kêu gọi người xem bấm vào giỏ hàng và đếm ngược số lượng tồn kho kích thích chốt đơn"],
        ["Doanh số phiên livestream đạt mục tiêu nghìn đơn", "Tỷ lệ giữ chân người xem phòng live ổn định"],
        ["Phòng livestream cách âm chuyên nghiệp", "Hệ thống đèn chiếu sáng studio chuyên sâu", "Màn hình nhắc kịch bản"],
        "Studio livestream của các nhãn hàng, công ty MCN đào tạo livestreamer.",
        ["Nói to liên tục suốt 3-4 tiếng mỗi phiên live rất hại giọng và khản cổ", "Áp lực duy trì mắt xem và doanh thu bán hàng theo từng phút"],
        ["Năng khiếu hoạt ngôn và biểu cảm tự nhiên trước ống kính", "Khả năng ứng biến tình huống nhanh nhạy", "Hiểu sâu tâm lý khách hàng mua sắm online"],
        ["Ngữ văn", "Tâm lý học", "Mỹ thuật"],
        [{"level": "Cao đẳng", "description": "Cao đẳng Nghệ thuật, Truyền thông hoặc Tự do thực hành xây dựng thương hiệu cá nhân"}],
        "Xem một phiên livestream bán hàng nổi tiếng trên TikTok và quan sát cách người bán hàng tạo cảm giác thôi thúc người mua bấm vào giỏ hàng.",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80", "Streamer bán hàng tươi cười tương tác trước ống kính phòng live"
    ))
    c.append(make_c(
        "chuyen-vien-toi-uu-hoa-chuyen-doi-cro", "Chuyên viên Tối ưu hóa tỷ lệ chuyển đổi (Conversion Rate Optimization - CRO)", "Conversion Rate Optimization (CRO) Specialist",
        ["Chuyên viên CRO", "CRO Specialist"], g19, c19, l19, ["I", "C", "A"],
        "Dùng bản đồ nhiệt (Heatmap) theo dõi hành vi rê chuột của người mua, tinh chỉnh nút bấm thanh toán giúp tăng gấp đôi doanh số bán hàng trên website.",
        ["Phân tích bản đồ nhiệt rê chuột và bản đồ cuộn trang (Scrollmap)", "Phát hiện các điểm tắc nghẽn khiến khách hàng bỏ dở giỏ hàng không thanh toán", "Thiết kế và chạy thử nghiệm A/B Testing giữa hai phiên bản trang thanh toán"],
        ["Báo cáo phân tích hành vi người dùng trên website", "Tỷ lệ chuyển đổi đơn hàng tăng trưởng vượt bậc"],
        ["Hotjar / Microsoft Clarity", "Google Optimize", "Google Analytics 4", "Figma"],
        "Doanh nghiệp bán lẻ trực tuyến quy mô lớn, công ty du lịch đặt phòng trực tuyến.",
        ["Cần kiểm tra kỹ lưỡng các số liệu thống kê để tránh kết luận sai lầm", "Phải kiên trì thử nghiệm nhiều phương án nhỏ mới tìm ra phương án tối ưu"],
        ["Tư duy thực nghiệm khoa học A/B Testing", "Tâm lý học hành vi người tiêu dùng trên giao diện số", "Phân tích dữ liệu web analytics"],
        ["Toán học (Thống kê)", "Tin học", "Tâm lý học"],
        [{"level": "Đại học", "description": "Cử nhân Thương mại điện tử, Hệ thống thông tin hoặc Khoa học dữ liệu"}],
        "Tìm hiểu về nút 'Mua ngay' 1 chạm của Amazon: chỉ cần bấm 1 nút là hàng tự động được đặt mua và trừ tiền mà không cần điền lại địa chỉ.",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", "Chuyên viên CRO phân tích bản đồ nhiệt click chuột của người dùng trên website"
    ))
    c.append(make_c(
        "chuyen-vien-tiep-thi-lien-ket-affiliate", "Chuyên viên Tiếp thị liên kết (Affiliate Marketing Specialist)", "Affiliate Network & Partnership Specialist",
        ["Chuyên viên Affiliate", "Affiliate Manager"], g19, c19, l19, ["E", "C"],
        "Tuyển dụng và hợp tác với hàng trăm nhà sáng tạo nội dung (KOL / KOC), cung cấp link tiếp thị liên kết và chia hoa hồng theo từng đơn hàng bán thành công.",
        ["Tìm kiếm và ký kết hợp đồng hợp tác với các nhà sáng tạo nội dung tiềm năng", "Cung cấp mẫu thử sản phẩm (Sample) và mã giảm giá độc quyền cho từng KOC", "Kiểm soát gian lận đơn ảo và thanh toán hoa hồng minh bạch hàng tháng"],
        ["Mạng lưới đối tác KOC tiếp thị liên kết rộng khắp", "Doanh thu bán hàng từ kênh Affiliate tăng trưởng"],
        ["Hệ thống mạng lưới Affiliate (AccessTrade, Ecomobi)", "TikTok Shop Affiliate Centre", "Bảng theo dõi hoa hồng Excel"],
        "Các nhãn hàng thời trang, mỹ phẩm, sàn thương mại điện tử.",
        ["Phải liên tục theo dõi ngăn chặn các chiêu trò gian lận đơn ảo để trục lợi hoa hồng", "Áp lực tìm kiếm và giữ chân những KOC có sức ảnh hưởng lớn"],
        ["Kỹ năng xây dựng quan hệ đối tác", "Quản trị hệ thống tiếp thị liên kết", "Kỹ năng đàm phán tỷ lệ hoa hồng"],
        ["Giáo dục kinh tế và pháp luật", "Tiếng Anh", "Ngữ văn"],
        [{"level": "Đại học", "description": "Cử nhân Marketing, Thương mại điện tử hoặc Quản trị kinh doanh"}],
        "Xem phần mô tả dưới một video review đồ công nghệ trên YouTube và tìm xem có đường link mua hàng kèm mã giảm giá không.",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80", "Chuyên viên trao đổi hợp đồng hợp tác quảng bá sản phẩm cùng KOC"
    ))
    c.append(make_c(
        "quan-ly-chuoi-cua-hang-ban-le", "Quản lý Cụm cửa hàng bán lẻ tiện lợi (Retail Area Manager)", "Multi-Store Retail Area Manager",
        ["Quản lý khu vực bán lẻ", "Area Manager"], g19, c19, l19, ["E", "C", "R"],
        "Giám sát 10-15 cửa hàng tiện lợi hoặc siêu thị mini, kiểm soát doanh số, độ tươi ngon của thực phẩm và dịch vụ khách hàng trong khu vực.",
        ["Đi kiểm tra đột xuất các cửa hàng trong cụm quản lý", "Đào tạo cửa hàng trưởng về kỹ năng quản lý thất thoát và sắp xếp hàng hóa trưng bày", "Phân tích doanh thu từng cửa hàng và điều động nhân sự linh hoạt giữa các điểm bán"],
        ["Báo cáo doanh số bán lẻ cụm cửa hàng hàng tuần", "Tỷ lệ hao hụt hàng hóa giảm dưới mức cho phép"],
        ["Phần mềm quản lý bán lẻ POS", "Bảng phân tích P&L từng cửa hàng", "Checklist kiểm tra tiêu chuẩn cửa hàng"],
        "Chuỗi cửa hàng tiện lợi (WinMart+, Circle K, 7-Eleven, Bách Hóa Xanh), di chuyển liên tục giữa các điểm bán.",
        ["Di chuyển liên tục ngoài đường giữa các cửa hàng bất kể nắng mưa", "Chịu trách nhiệm trực tiếp về tình trạng thất thoát hàng hóa và doanh số khu vực"],
        ["Kỹ năng lãnh đạo và quản lý vận hành bán lẻ", "Khả năng phân tích số liệu tài chính cửa hàng", "Xử lý khéo léo các khiếu nại của khách hàng"],
        ["Giáo dục kinh tế và pháp luật", "Toán học"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị kinh doanh hoặc Thương mại"}, {"level": "Cao đẳng", "description": "Cao đẳng Kinh doanh bán lẻ"}],
        "Vào một cửa hàng tiện lợi 24/7 và quan sát cách nhân viên vừa tính tiền vừa nướng bánh mì và lau dọn sàn nhà sạch sẽ.",
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80", "Quản lý khu vực kiểm tra hạn sử dụng và cách sắp xếp hàng hóa trên kệ"
    ))
    c.append(make_c(
        "chuyen-vien-thuong-mai-da-kenh-omnichannel", "Chuyên viên Thương mại đa kênh (Omnichannel Retail Specialist)", "Omnichannel Retail Strategy Specialist",
        ["Chuyên viên Omnichannel", "Omnichannel Specialist"], g19, c19, l19, ["I", "C", "E"],
        "Đồng bộ giỏ hàng, điểm tích lũy và giá bán giữa website, ứng dụng di động và cửa hàng thực tế, mang lại trải nghiệm mua sắm liền mạch cho khách.",
        ["Thiết lập tính năng mua hàng online - nhận hàng tại cửa hàng gần nhất (BOPIS)", "Đồng bộ hệ thống dữ liệu khách hàng thân thiết đa kênh (Customer Data Platform)", "Tối ưu hóa hành trình đổi trả hàng linh hoạt giữa kênh online và offline"],
        ["Kiến trúc hệ thống thương mại đa kênh Omnichannel", "Báo cáo doanh thu đa kênh hợp nhất"],
        ["Hệ thống CDP (Customer Data Platform)", "Phần mềm OMS (Order Management System)", "Shopify Plus / Magento"],
        "Các thương hiệu bán lẻ thời trang, điện máy lớn (Thế Giới Di Động, FPT Shop, Uniqlo).",
        ["Đồng bộ dữ liệu tồn kho thời gian thực giữa hàng trăm cửa hàng là bài toán công nghệ phức tạp", "Xung đột quyền lợi doanh số giữa nhân viên cửa hàng và kênh bán online"],
        ["Tư duy hệ thống và tích hợp đa nền tảng", "Hiểu sâu trải nghiệm mua sắm đa kênh của khách hàng", "Kỹ năng phân tích dữ liệu bán lẻ"],
        ["Tin học", "Toán học", "Giáo dục kinh tế và pháp luật"],
        [{"level": "Đại học", "description": "Cử nhân Thương mại điện tử, Hệ thống thông tin quản lý hoặc Marketing"}],
        "Thử đặt mua một món đồ trên mạng và chọn nhận hàng tại cửa hàng gần nhà xem các bước nhận hàng diễn ra nhanh chóng ra sao.",
        "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80", "Khách hàng nhận món đồ đã đặt mua online tại quầy dịch vụ của cửa hàng"
    ))
    c.append(make_c(
        "chuyen-vien-dinh-gia-dong-va-gio-hang", "Chuyên viên Định giá và Phân tích giỏ hàng (Pricing & Market Basket Analyst)", "Dynamic Pricing & Basket Analyst",
        ["Chuyên viên định giá", "Pricing Analyst"], g19, c19, l19, ["I", "C"],
        "Phân tích các món hàng khách hay mua cùng nhau (như bim bim mua kèm nước ngọt), tính toán thuật toán tăng giá vé máy bay, phòng khách sạn theo giờ.",
        ["Phân tích luật kết hợp giỏ hàng (Market Basket Analysis) tìm ra các cặp sản phẩm bán kèm (Cross-sell)", "Thu thập giá bán của đối thủ cạnh tranh bằng công cụ tự động Web scraping", "Thiết lập thuật toán định giá động (Dynamic pricing) tự động điều chỉnh giá theo cung cầu"],
        ["Mô hình thuật toán định giá động linh hoạt", "Báo cáo phân tích biên lợi nhuận danh mục sản phẩm"],
        ["Python", "R", "SQL", "Phần mềm định giá Prisync"],
        "Hãng hàng không (Vietnam Airlines, Vietjet), ứng dụng gọi xe công nghệ (Grab), chuỗi bán lẻ.",
        ["Nếu thuật toán định giá quá cao sẽ làm mất khách hàng, nếu quá thấp sẽ làm giảm lợi nhuận", "Xử lý phản ứng của khách hàng khi thấy giá sản phẩm biến động theo từng phút"],
        ["Tư duy toán kinh tế và độ co giãn của cầu theo giá", "Thành thạo lập trình phân tích dữ liệu giỏ hàng", "Nhạy bén với chiến lược giá của đối thủ"],
        ["Toán học", "Giáo dục kinh tế và pháp luật", "Tin học"],
        [{"level": "Đại học", "description": "Cử nhân Toán kinh tế, Thống kê, Kinh tế học hoặc Khoa học dữ liệu"}],
        "Tìm hiểu tại sao giá vé máy bay hoặc giá cước xe công nghệ lại tăng vọt vào những giờ cao điểm trời mưa.",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80", "Chuyên viên phân tích đồ thị biến động giá cả theo thời gian thực"
    ))
    c.append(make_c(
        "quan-tri-trai-nghiem-mua-sam-online", "Quản trị Trải nghiệm mua sắm số (Digital Merchandiser)", "E-Commerce Digital Merchandiser",
        ["Chuyên viên trưng bày online", "Digital Merchandiser"], g19, c19, l19, ["A", "C", "E"],
        "Sắp xếp thứ tự các sản phẩm xuất hiện trên trang chủ website, chọn ảnh đại diện bắt mắt và thiết kế bộ sưu tập kích thích khách bấm mua.",
        ["Phân tích các từ khóa tìm kiếm nội bộ trên website để đưa sản phẩm đúng lên đầu trang", "Thiết kế các bộ sưu tập thời trang theo chủ đề 'Xuống phố mùa thu' hay 'Đi biển rực rỡ'", "Tối ưu hóa các gợi ý sản phẩm liên quan (Upsell/Cross-sell) ở chân trang"],
        ["Giao diện trang chủ bán hàng được bố trí hấp dẫn theo mùa", "Báo cáo chỉ số nhấp chuột (CTR) vào các banner sản phẩm"],
        ["Hệ thống CMS bán hàng Shopify / Magento", "Google Analytics 4", "Figma"],
        "Các thương hiệu thời trang bán lẻ trực tuyến, website mỹ phẩm, đồ gia dụng.",
        ["Phải thay đổi giao diện và vị trí sản phẩm liên tục theo từng chiến dịch tuần", "Khối lượng hàng nghìn mã sản phẩm cần kiểm tra hình ảnh và mô tả chuẩn xác"],
        ["Gu thẩm mỹ trưng bày thị giác trực tuyến", "Phân tích số liệu hành vi nhấp chuột", "Tư duy bán lẻ thương mại"],
        ["Mỹ thuật", "Tin học", "Toán học"],
        [{"level": "Đại học", "description": "Cử nhân Thương mại điện tử, Marketing hoặc Thiết kế Đa phương tiện"}],
        "Vào trang chủ một website bán quần áo và quan sát xem những món đồ mới nhất được họ trưng bày ở vị trí nào.",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80", "Sắp xếp bố cục hình ảnh sản phẩm nổi bật trên trang web thương mại điện tử"
    ))
    c.append(make_c(
        "chuyen-vien-dich-vu-khach-hang-vip", "Chuyên viên Chăm sóc khách hàng VIP bán lẻ (Luxury VIP Client Advisor)", "Luxury Retail Client Advisor",
        ["Chuyên viên chăm sóc khách VIP", "Client Advisor hàng hiệu"], g19, c19, l19, ["S", "E", "A"],
        "Tư vấn riêng trong phòng VIP, ghi nhớ sở thích cá nhân và phục vụ những khách hàng mua túi xách, đồng hồ cao cấp trị giá hàng trăm triệu.",
        ["Đón tiếp khách hàng thân thiết trong phòng thử đồ riêng biệt sang trọng", "Gợi ý các phiên bản đồng hồ, túi xách giới hạn (Limited edition) phù hợp phong cách gia chủ", "Gửi thiệp mừng viết tay và hoa tươi chúc mừng sinh nhật khách hàng VIP"],
        ["Mối quan hệ thân thiết gắn bó với các khách hàng thượng lưu", "Doanh số bán hàng xa xỉ đạt chỉ tiêu cao"],
        ["Hệ thống CRM khách hàng VIP", "Điện thoại liên lạc cá nhân hóa", "Sổ tay ghi nhớ sở thích khách hàng"],
        "Cửa hàng thời trang xa xỉ (Louis Vuitton, Chanel, Gucci, Rolex, Patek Philippe) tại trung tâm thương mại cao cấp.",
        ["Yêu cầu tác phong, lời nói và trang phục chỉn chu hoàn hảo không một tì vết", "Khách hàng thượng lưu thường có những yêu cầu đặc biệt khắt khe"],
        ["Nghi thức phục vụ xa xỉ chuẩn quốc tế", "Kiến thức lịch sử và văn hóa các thương hiệu xa xỉ", "Kỹ năng lắng nghe và bảo mật thông tin khách hàng"],
        ["Tiếng Anh", "Ngữ văn", "Lịch sử nghệ thuật"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị kinh doanh, Ngoại ngữ hoặc Quản trị Khách sạn"}],
        "Tìm hiểu câu chuyện lịch sử hàng trăm năm của chiếc túi xách Hermès Birkin được chế tác thủ công bằng tay như thế nào.",
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80", "Chuyên viên tư vấn sản phẩm thời trang cao cấp cho khách hàng trong không gian sang trọng"
    ))
    c.append(make_c(
        "chuyen-vien-quan-ly-nhan-hang-rieng-sieu-thi", "Chuyên viên Phát triển nhãn hàng riêng siêu thị (Private Label Brand Specialist)", "Supermarket Private Label Brand Specialist",
        ["Chuyên viên nhãn hàng riêng", "Private Label Specialist"], g19, c19, l19, ["E", "C", "I"],
        "Tìm nhà máy gia công uy tín, thiết kế bao bì mang thương hiệu của siêu thị (như Co.op Select, WinMart Good) để bán giá rẻ hơn 15-20% cho người tiêu dùng.",
        ["Khảo sát thị trường lựa chọn các mặt hàng thiết yếu (dầu ăn, giấy vệ sinh, nước giặt) để làm nhãn riêng", "Thẩm định chất lượng nhà máy gia công và đàm phán hợp đồng sản xuất OEM", "Kiểm soát chất lượng đồng đều và quản lý biên lợi nhuận sản phẩm"],
        ["Sản phẩm nhãn hàng riêng được người tiêu dùng tin tưởng lựa chọn", "Bảng phân tích cơ cấu chi phí sản xuất và giá bán cạnh tranh"],
        ["Phần mềm ERP quản trị chuỗi cung ứng", "Hệ thống kiểm nghiệm chất lượng sản phẩm"],
        "Trụ sở các tập đoàn bán lẻ siêu thị lớn (Saigon Co.op, Central Retail, WinCommerce).",
        ["Cần đảm bảo chất lượng nhãn hàng riêng luôn ổn định để bảo vệ uy tín thương hiệu của cả chuỗi siêu thị", "Đàm phán khó khăn với các nhà máy sản xuất để có giá thành tốt nhất"],
        ["Kỹ năng phát triển sản phẩm tiêu dùng", "Quản trị chất lượng chuỗi cung ứng", "Tư duy kinh doanh bán lẻ"],
        ["Giáo dục kinh tế và pháp luật", "Hóa học", "Toán học"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị kinh doanh, Thương mại hoặc Công nghệ thực phẩm"}],
        "Vào siêu thị Co.opmart hoặc WinMart tìm xem các sản phẩm mang tên Co.op Select hay WinMart có giá rẻ hơn các thương hiệu khác bao nhiêu tiền.",
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80", "Sản phẩm nhãn hàng riêng được trưng bày nổi bật trên kệ siêu thị"
    ))

    # 20. DỊCH VỤ XÃ HỘI, TÂM LÝ VÀ CỘNG ĐỒNG
    g20, c20, l20 = "tam-ly-xa-hoi", "XaHoi", "Dịch vụ xã hội, tâm lý và cộng đồng"
    c.append(make_c(
        "chuyen-vien-tham-van-tam-ly-ca-nhan", "Chuyên viên Tham vấn tâm lý cá nhân và gia đình (Counseling Psychologist)", "Individual & Family Counseling Psychologist",
        ["Chuyên viên tham vấn tâm lý", "Counselor"], g20, c20, l20, ["S", "I", "A"],
        "Tạo không gian an toàn, lắng nghe và đồng hành giúp người bị trầm cảm, khủng hoảng tuổi dậy thì, mâu thuẫn hôn nhân tìm lại sự cân bằng.",
        ["Lắng nghe sâu sắc câu chuyện của thân chủ trong phòng tham vấn bảo mật", "Ứng dụng các liệu pháp tâm lý như Liệu pháp nhận thức hành vi (CBT)", "Giúp thân chủ nhận diện những niềm tin sai lệch và khơi dậy nguồn lực nội tại"],
        ["Kế hoạch can thiệp tham vấn tâm lý cá nhân hóa", "Thân chủ vượt qua khủng hoảng tâm lý và tìm lại niềm vui sống"],
        ["Bộ trắc nghiệm tâm lý chuẩn hóa (MBTI, Big Five, DASS)", "Không gian phòng tham vấn cách âm yên tĩnh", "Ghế ngồi thư giãn"],
        "Phòng khám tâm lý, trung tâm tham vấn gia đình, văn phòng tư vấn độc lập.",
        ["Nguy cơ bị lây nhiễm cảm xúc tiêu cực và kiệt sức (Secondary Traumatic Stress) khi lắng nghe quá nhiều nỗi đau", "Đòi hỏi phải đi giám sát chuyên môn (Supervision) định kỳ"],
        ["Khả năng lắng nghe thấu cảm chân thành", "Kỹ thuật phản hồi và đặt câu hỏi khơi gợi", "Đạo đức nghề nghiệp bảo mật thông tin"],
        ["Tâm lý học", "Ngữ văn", "Giáo dục công dân"],
        [{"level": "Đại học", "description": "Cử nhân Tâm lý học hoặc Tâm lý học lâm sàng (ĐH KHXH&NV, ĐH Sư phạm) + Giờ thực hành có giám sát"}],
        "Lắng nghe một người bạn đang buồn kể chuyện trong 10 phút mà không ngắt lời hay đưa ra lời phán xét nào.",
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80", "Chuyên viên tham vấn tâm lý lắng nghe và đồng cảm cùng thân chủ"
    ))
    c.append(make_c(
        "nhan-vien-cong-tac-xa-hoi-tre-em", "Nhân viên Công tác xã hội bảo vệ trẻ em (Child Protection Social Worker)", "Child Protection Social Worker",
        ["Cán bộ bảo vệ trẻ em", "Child Social Worker"], g20, c20, l20, ["S", "C", "E"],
        "Can thiệp khẩn cấp, đưa trẻ bị bạo hành, bỏ rơi vào nhà tạm lánh và kết nối các nguồn học bổng giúp các em được tiếp tục đến trường.",
        ["Xác minh tin báo tố giác bạo hành hoặc xâm hại trẻ em từ Tổng đài Quốc gia 111", "Phối hợp với công an đưa trẻ đến nơi an toàn và khám sức khỏe", "Lập kế hoạch trợ giúp dài hạn: làm giấy khai sinh, hỗ trợ tâm lý và đưa trẻ đi học"],
        ["Hồ sơ quản lý ca trẻ em cần bảo vệ khẩn cấp", "Kế hoạch can thiệp trợ giúp trẻ em hòa nhập"],
        ["Tổng đài Quốc gia Bảo vệ Trẻ em 111", "Quy trình quản lý ca công tác xã hội", "Hồ sơ bảo trợ trẻ em"],
        "Trung tâm công tác xã hội tỉnh, làng trẻ em SOS, các tổ chức phi chính phủ bảo vệ trẻ em (UNICEF, World Vision).",
        ["Thường xuyên chứng kiến những hoàn cảnh đau lòng của trẻ thơ", "Đối mặt với sự đe dọa từ những kẻ bạo hành trẻ em"],
        ["Kỹ năng phỏng vấn trẻ em nhạy cảm tổn thương", "Nắm vững luật trẻ em và chính sách an sinh xã hội", "Trái tim nhân hậu và dũng cảm"],
        ["Giáo dục công dân", "Tâm lý học", "Xã hội học"],
        [{"level": "Đại học", "description": "Cử nhân Công tác xã hội (ĐH Sư phạm Hà Nội, ĐH KHXH&NV, ĐH Lao động - Xã hội)"}, {"level": "Cao đẳng", "description": "Cao đẳng Công tác xã hội"}],
        "Ghi nhớ số điện thoại 111 - Tổng đài điện thoại Quốc gia Bảo vệ Trẻ em hoạt động 24/7 hoàn toàn miễn phí.",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80", "Nhân viên công tác xã hội chăm sóc và vui chơi cùng trẻ em có hoàn cảnh đặc biệt"
    ))
    c.append(make_c(
        "chuyen-vien-cong-tac-xa-hoi-y-te", "Chuyên viên Công tác xã hội y tế bệnh viện (Hospital Medical Social Worker)", "Hospital Clinical Social Worker",
        ["Công tác xã hội bệnh viện", "Medical Social Worker"], g20, c20, l20, ["S", "E", "C"],
        "Kêu gọi nhà hảo tâm tài trợ chi phí mổ tim, ghép tạng cho bệnh nhân nghèo và hỗ trợ tâm lý giúp người bệnh vượt qua nỗi sợ hãi bệnh tật.",
        ["Khảo sát xác minh hoàn cảnh khó khăn của bệnh nhân tại các khoa điều trị", "Viết bài kêu gọi viện trợ từ các nhà hảo tâm và doanh nghiệp tài trợ viện phí", "Tổ chức các chuyến xe 0 đồng đưa bệnh nhân nghèo xuất viện về quê"],
        ["Khoản viện trợ tài chính kịp thời cứu sống bệnh nhân nghèo", "Chương trình suất ăn dinh dưỡng miễn phí cho người nhà người bệnh"],
        ["Phần mềm quản lý quỹ tài trợ bệnh viện", "Hồ sơ xác nhận hoàn cảnh khó khăn địa phương", "Hệ thống loa phát thanh bệnh viện"],
        "Phòng công tác xã hội các bệnh viện lớn (Bệnh viện Bạch Mai, Chợ Rẫy, Nhi Đồng).",
        ["Áp lực khi số lượng bệnh nhân nghèo cần giúp đỡ quá lớn trong khi nguồn quỹ có hạn", "Thường xuyên tiếp xúc với hoàn cảnh nghèo khó và bệnh tật hiểm nghèo"],
        ["Kỹ năng kết nối mạng lưới các nhà hảo tâm", "Khả năng thấu cảm và lắng nghe nỗi niềm người bệnh", "Minh bạch và trung thực trong quản lý tiền từ thiện"],
        ["Giáo dục công dân", "Ngữ văn", "Xã hội học"],
        [{"level": "Đại học", "description": "Cử nhân Công tác xã hội hoặc Xã hội học"}],
        "Tìm hiểu về 'Gian hàng 0 đồng' hoặc 'Nồi cháo tình thương' tại các bệnh viện giúp đỡ người nhà bệnh nhân khó khăn.",
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80", "Nhân viên công tác xã hội trao quà và động viên người bệnh tại giường bệnh"
    ))
    c.append(make_c(
        "nha-tri-lieu-tam-ly-lam-sang", "Nhà trị liệu tâm lý lâm sàng (Clinical Psychologist)", "Licensed Clinical Psychologist",
        ["Nhà tâm lý lâm sàng", "Clinical Psychologist"], g20, c20, l20, ["I", "S"],
        "Phối hợp cùng bác sĩ tâm thần chẩn đoán và điều trị rối loạn lo âu, ám ảnh cưỡng chế (OCD), rối loạn căng thẳng sau sang chấn (PTSD).",
        ["Sử dụng các công cụ trắc nghiệm tâm lý chẩn đoán chuyên sâu (MMPI, Rorschach)", "Tiến hành các phiên trị liệu tâm lý chuyên sâu theo phác đồ y khoa", "Theo dõi sự thuyên giảm các triệu chứng tâm thần kinh qua từng tuần"],
        ["Hồ sơ chẩn đoán tâm lý lâm sàng chuyên sâu", "Báo cáo tiến trình trị liệu tâm lý người bệnh"],
        ["Bộ trắc nghiệm nhân cách MMPI-2", "Bộ test trí tuệ Wechsler (WAIS / WISC)", "Kỹ thuật giải mẫn cảm bằng chuyển động mắt EMDR"],
        "Viện sức khỏe tâm thần bệnh viện, phòng khám tâm thần kinh, trung tâm trị liệu chuyên sâu.",
        ["Đối diện với các trường hợp bệnh nhân có ý nghĩ tự sát đòi hỏi sự can thiệp khẩn cấp", "Yêu cầu đào tạo học thuật rất cao và nghiêm ngặt"],
        ["Kiến thức sâu sắc về bệnh học tâm thần và thần kinh học", "Làm chủ các liệu pháp trị liệu tâm lý chuyên sâu", "Khả năng giữ vững ranh giới chuyên môn"],
        ["Sinh học", "Tâm lý học", "Toán học"],
        [{"level": "Đại học", "description": "Cử nhân Tâm lý học lâm sàng + Bằng Thạc sĩ Tâm lý học lâm sàng (Bắt buộc theo Luật Khám chữa bệnh)"}],
        "Tìm hiểu về chứng bệnh 'Rối loạn ám ảnh cưỡng chế' (OCD): người bệnh có thôi thúc rửa tay hàng chục lần một ngày vì sợ vi trùng.",
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80", "Nhà tâm lý lâm sàng trao đổi sâu sắc trong phiên trị liệu tâm lý"
    ))
    c.append(make_c(
        "chuyen-gia-phuc-hoi-sau-thien-tai", "Chuyên gia Cứu trợ và Phục hồi sau thiên tai (Disaster Relief & Recovery Specialist)", "Disaster Relief & Community Resilience Specialist",
        ["Cán bộ cứu trợ bão lũ", "Disaster Response Specialist"], g20, c20, l20, ["S", "R", "E"],
        "Có mặt tại tâm điểm bão lũ, sạt lở đất để cấp phát lương thực, áo phao, nước sạch và hỗ trợ người dân dựng lại nhà cửa, ổn định cuộc sống.",
        ["Khảo sát nhanh mức độ thiệt hại về người và tài sản sau trận bão lũ", "Điều phối các đoàn xe cứu trợ hàng thiết yếu đến đúng các bản làng bị cô lập", "Tổ chức tập huấn kỹ năng phòng chống lũ quét và sạt lở đất cho cộng đồng"],
        ["Kế hoạch cứu trợ khẩn cấp sau thiên tai", "Dự án phục hồi sinh kế cho bà con vùng lũ"],
        ["Hệ thống xuồng cứu hộ vượt lũ", "Hệ thống lọc nước dã chiến", "Bộ đàm vệ tinh cứu nạn"],
        "Hội Chữ thập đỏ Việt Nam, Ban Chỉ đạo Quốc gia về Phòng chống thiên tai, các tổ chức cứu trợ nhân đạo.",
        ["Làm việc trong điều kiện nguy hiểm sạt lở đất, nước lũ dâng cao và mưa bão dữ dội", "Phải ngủ lều dã chiến và ăn lương khô trong nhiều ngày cứu trợ"],
        ["Kỹ năng ứng phó sự cố khẩn cấp và sinh tồn", "Kỹ năng điều phối hàng cứu trợ công bằng, minh bạch", "Sức khỏe dẻo dai và tinh thần dấn thân vì đồng bào"],
        ["Địa lý", "Giáo dục công dân", "Vật lý"],
        [{"level": "Đại học", "description": "Cử nhân Quản lý tài nguyên, Công tác xã hội hoặc Biến đổi khí hậu"}],
        "Tìm hiểu về cách Hội Chữ thập đỏ cấp phát túi lọc nước dã chiến giúp bà con vùng ngập lụt có nước sạch uống ngay lập tức.",
        "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80", "Cán bộ cứu trợ trao lương thực và nước sạch cho bà con vùng lũ lụt"
    ))
    c.append(make_c(
        "can-bo-hoa-nhap-cho-nguoi-khuyet-tat", "Cán bộ Hỗ trợ hòa nhập người khuyết tật (Disability Inclusion Coordinator)", "Disability Inclusion & Accessibility Specialist",
        ["Cán bộ hỗ trợ người khuyết tật", "Inclusion Specialist"], g20, c20, l20, ["S", "E", "C"],
        "Khảo sát đường dốc cho xe lăn, kết nối doanh nghiệp tuyển dụng lao động khuyết tật và vận động chính sách không rào cản trong xã hội.",
        ["Vận động các tòa nhà công cộng lắp đặt đường dốc và nhà vệ sinh tiếp cận cho người đi xe lăn", "Kết nối mở các lớp đào tạo nghề tin học, may mặc phù hợp cho người khuyết tật", "Tổ chức ngày hội việc làm hòa nhập kết nối doanh nghiệp với người khuyết tật"],
        ["Báo cáo đánh giá mức độ tiếp cận công trình cho người khuyết tật", "Hợp đồng lao động hòa nhập cho thanh niên khuyết tật"],
        ["Tiêu chuẩn kỹ thuật quốc gia về tiếp cận cho người khuyết tật QCVN 10:2014/BXD", "Xe lăn hỗ trợ di chuyển"],
        "Hội người khuyết tật các cấp, trung tâm bảo trợ xã hội, các tổ chức phát triển quốc tế.",
        ["Nhiều rào cản định kiến xã hội đối với năng lực làm việc của người khuyết tật", "Cần kiên trì vận động thay đổi cơ sở hạ tầng giao thông và nhận thức cộng đồng"],
        ["Hiểu biết sâu sắc luật người khuyết tật và công ước quốc tế", "Kỹ năng vận động chính sách và kết nối doanh nghiệp", "Sự tôn trọng và thấu hiểu sâu sắc"],
        ["Giáo dục công dân / Kinh tế & Pháp luật", "Xã hội học", "Ngữ văn"],
        [{"level": "Đại học", "description": "Cử nhân Công tác xã hội, Xã hội học hoặc Luật"}],
        "Quan sát vỉa hè xung quanh xem có những viên gạch màu vàng có đường kẻ gờ nổi dành riêng cho người khiếm thị dò đường hay không.",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80", "Cán bộ hỗ trợ thanh niên khuyết tật thực hành nghề nghiệp hòa nhập cộng đồng"
    ))
    c.append(make_c(
        "chuyen-gia-tu-van-cai-nghien-tai-hoa-nhap", "Chuyên viên Tư vấn cai nghiện và Tái hòa nhập (Addiction Recovery Specialist)", "Substance Abuse & Addiction Recovery Counselor",
        ["Tư vấn viên cai nghiện", "Recovery Counselor"], g20, c20, l20, ["S", "I", "R"],
        "Tư vấn động viên, trị liệu tâm lý nhóm và kết nối dạy nghề giúp những người từng lầm lỡ cai nghiện ma túy thành công và làm lại cuộc đời.",
        ["Đánh giá mức độ lệ thuộc chất gây nghiện và động lực quyết tâm cai nghiện", "Điều hành các buổi sinh hoạt nhóm hỗ trợ lẫn nhau (12 bước cai nghiện)", "Đồng hành hỗ trợ tìm việc làm và ngăn ngừa tái nghiện khi trở về cộng đồng"],
        ["Kế hoạch phục hồi cá nhân hóa chống tái nghiện", "Học viên cai nghiện thành công có việc làm ổn định"],
        ["Phác đồ trị liệu tâm lý cai nghiện ma túy", "Xét nghiệm kiểm tra nhanh chất gây nghiện"],
        "Cơ sở cai nghiện ma túy công lập, trung tâm tư vấn cai nghiện cộng đồng.",
        ["Đối diện với các hội chứng cai thuốc vật vã, đau đớn về thể xác của học viên", "Tỷ lệ tái nghiện trong cộng đồng tương đối cao đòi hỏi sự kiên nhẫn không bỏ cuộc"],
        ["Tấm lòng bao dung, không kỳ thị phân biệt đối xử", "Kỹ năng trị liệu tâm lý nhóm và truyền cảm hứng phục hồi", "Bản lĩnh và sự thấu hiểu tâm lý người nghiện"],
        ["Tâm lý học", "Giáo dục công dân", "Y học cơ bản"],
        [{"level": "Đại học", "description": "Cử nhân Công tác xã hội, Tâm lý học hoặc Y học dự phòng"}],
        "Tìm hiểu về vai trò của tình yêu thương gia đình trong việc giúp một người lầm lỡ cai nghiện thành công và hòa nhập xã hội.",
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80", "Chuyên viên tư vấn chia sẻ và khích lệ người cai nghiện làm lại cuộc đời"
    ))
    c.append(make_c(
        "dieu-phoi-vien-ngan-hang-thuc-pham-cuu-tro", "Điều phối viên Ngân hàng thực phẩm cứu trợ (Food Bank Coordinator)", "Food Bank & Food Waste Reduction Coordinator",
        ["Điều phối viên ngân hàng thực phẩm", "Food Bank Coordinator"], g20, c20, l20, ["E", "S", "C"],
        "Thu gom thực phẩm dư thừa nhưng còn hạn dùng tốt từ các siêu thị, khách sạn và phân phát cho các mái ấm, người vô gia cư.",
        ["Kết nối mạng lưới các siêu thị, chuỗi bánh mì tài trợ thực phẩm dư thừa an toàn", "Kiểm tra chất lượng hạn sử dụng và phân loại bảo quản lạnh", "Tổ chức phát các suất ăn miễn phí ấm lòng cho người lao động nghèo và người vô gia cư"],
        ["Hàng nghìn suất ăn dinh dưỡng được chuyển giao cho người nghèo", "Giảm thiểu hàng tấn rác thải thực phẩm lãng phí ra môi trường"],
        ["Xe tải lạnh thu gom thực phẩm", "Kho lạnh lưu trữ thực phẩm", "Ứng dụng kết nối chia sẻ thực phẩm dư thừa"],
        "Ngân hàng thực phẩm Việt Nam (Food Bank Vietnam), các bếp ăn từ thiện, mái ấm tình thương.",
        ["Áp lực kiểm soát an toàn vệ sinh thực phẩm tối đa trước khi trao tặng", "Thời gian thu gom thường diễn ra vào cuối ngày khi siêu thị đóng cửa"],
        ["Kỹ năng kết nối đối tác doanh nghiệp", "Quản lý logistics vận chuyển thực phẩm", "Tấm lòng sẻ chia vì cộng đồng"],
        ["Giáo dục kinh tế và pháp luật", "Sinh học", "Xã hội học"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị kinh doanh, Công tác xã hội hoặc Công nghệ thực phẩm"}],
        "Tìm hiểu mô hình Ngân hàng Thực phẩm (Food Bank) biến thức ăn còn tốt sắp bỏ đi thành bữa ăn no cho người khó khăn.",
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80", "Tình nguyện viên đóng gói thực phẩm cứu trợ tại ngân hàng thực phẩm"
    ))
    c.append(make_c(
        "chuyen-vien-ho-tro-nguoi-cao-tuoi", "Chuyên viên Công tác xã hội chăm sóc người cao tuổi (Gerontological Social Worker)", "Gerontological Social Worker",
        ["Chuyên viên chăm sóc người cao tuổi", "Elderly Care Specialist"], g20, c20, l20, ["S", "I"],
        "Tổ chức câu lạc bộ dưỡng sinh, trị liệu nhắc nhớ ký ức và chăm sóc sức khỏe tinh thần giúp các cụ già trong viện dưỡng lão sống vui khỏe.",
        ["Lắng nghe các cụ già trò chuyện, ôn lại những kỷ niệm ký ức thanh xuân", "Tổ chức các buổi tập dưỡng sinh kinh lạc, chơi cờ tướng và ngâm thơ", "Tư vấn cho gia đình cách chăm sóc người già mắc chứng suy giảm trí nhớ (Alzheimer)"],
        ["Chương trình hoạt động sinh hoạt câu lạc bộ người cao tuổi", "Kế hoạch chăm sóc toàn diện thể chất và tinh thần cho người già"],
        ["Bộ trò chơi rèn luyện trí nhớ và phản xạ người già", "Hồ sơ sức khỏe theo dõi bệnh mạn tính"],
        "Viện dưỡng lão, trung tâm chăm sóc người cao tuổi ban ngày, câu lạc bộ người cao tuổi phường xã.",
        ["Người già thường có tâm lý cô đơn, dễ tủi thân và tính khí thay đổi thất thường", "Cần sự kiên nhẫn lắng nghe những câu chuyện lặp đi lặp lại nhiều lần"],
        ["Lòng hiếu thuận và kính trọng người già", "Kiến thức tâm lý học tuổi già và bệnh học lão khoa", "Khả năng tổ chức các hoạt động vui chơi gắn kết"],
        ["Tâm lý học", "Sinh học", "Giáo dục công dân"],
        [{"level": "Đại học", "description": "Cử nhân Công tác xã hội hoặc Điều dưỡng Lão khoa"}],
        "Dành 15 phút ngồi nói chuyện và hỏi han ông bà về những kỷ niệm tuổi thơ ngày xưa của ông bà.",
        "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80", "Chuyên viên chăm sóc ân cần trò chuyện và cầm tay cụ già trong viện dưỡng lão"
    ))
    c.append(make_c(
        "can-bo-phat-trien-cong-dong-mien-nui", "Cán bộ Phát triển cộng đồng nông thôn miền núi (Community Development Worker)", "Rural & Mountain Community Development Specialist",
        ["Cán bộ khuyến nông miền núi", "Community Development Specialist"], g20, c20, l20, ["S", "R", "E"],
        "Cùng ăn, cùng ở, cùng làm với bà con đồng bào dân tộc thiểu số, hỗ trợ cây giống mới, xây cầu dân sinh và xóa mù chữ vùng cao.",
        ["Khảo sát nhu cầu thiết yếu của bà con thôn bản (nước sạch, đường bê tông, điện mặt trời)", "Chuyển giao kỹ thuật nuôi ong lấy mật và trồng cây dược liệu dưới tán rừng", "Thành lập các tổ hợp tác dệt thổ cẩm phụ nữ dân tộc thiểu số để tăng thu nhập"],
        ["Dự án sinh kế cộng đồng miền núi bền vững", "Cây cầu dân sinh hoặc công trình nước sạch hoàn thành phục vụ bà con"],
        ["Sổ tay đánh giá nông thôn có sự tham gia (PRA)", "Tài liệu tập huấn song ngữ tiếng Kinh - tiếng Mông/Dao/Thái"],
        "Các huyện miền núi vùng cao (Hà Giang, Sơn La, Điện Biên, Cao Bằng, Kon Tum).",
        ["Đường sá đi lại sạt lở vào mùa mưa, điều kiện sinh hoạt xa gia đình thiếu thốn", "Cần am hiểu phong tục tập quán và nói được tiếng của đồng bào bản địa"],
        ["Tác phong ba cùng: 'Cùng ăn, cùng ở, cùng làm' với bà con", "Kỹ năng thúc đẩy sự tham gia của cộng đồng", "Trái tim nhiệt huyết tuổi trẻ cống hiến vì vùng cao"],
        ["Địa lý", "Xã hội học", "Giáo dục công dân", "Lịch sử"],
        [{"level": "Đại học", "description": "Cử nhân Phát triển nông thôn, Quốc tế học, Xã hội học hoặc Nông học"}],
        "Tìm hiểu về chính sách hỗ trợ phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số và miền núi của Đảng và Nhà nước.",
        "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80", "Cán bộ cùng bà con đồng bào vùng cao trao đổi kế hoạch phát triển kinh tế thôn bản"
    ))

    return c

print("Module groups 16-20 ready.")
