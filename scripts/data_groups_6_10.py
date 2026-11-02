# -*- coding: utf-8 -*-
# Groups 6 - 10 (50 careers)

def get_groups_6_to_10(make_c):
    c = []

    # 6. XÂY DỰNG VÀ HẠ TẦNG
    g6, c6, l6 = "xay-dung", "XayDung", "Xây dựng và hạ tầng"
    c.append(make_c(
        "ky-su-ket-cau-cong-trinh", "Kỹ sư Kết cấu công trình (Civil & Structural Engineer)", "Structural Engineering Specialist",
        ["Kỹ sư tính kết cấu", "Structural Engineer"], g6, c6, l6, ["R", "I"],
        "Tính toán sức chịu tải của dầm, cột, móng bê tông cốt thép và kết cấu thép, đảm bảo tòa nhà đứng vững trước động đất và bão lớn.",
        ["Tính toán tải trọng gió, động đất và tải trọng sử dụng trên phần mềm chuyên dụng", "Thiết kế bố trí thép dầm, sàn, móng theo tiêu chuẩn xây dựng Việt Nam (TCVN)", "Bảo vệ đồ án tính toán trước cơ quan thẩm tra thiết kế"],
        ["Thuyết minh tính toán kết cấu công trình", "Bản vẽ chi tiết cốt thép dầm sàn móng"],
        ["ETABS", "SAP2000", "SAFE", "AutoCAD", "Revit Structure"],
        "Văn phòng tư vấn thiết kế kết cấu, thỉnh thoảng ra công trường kiểm tra.",
        ["Trách nhiệm an toàn sinh mạng cực lớn, tính sai tiết diện thép có thể gây nứt hoặc sập nhà", "Khối lượng tính toán đồ sộ với hàng trăm cột dầm"],
        ["Cơ học kết cấu và sức bền vật liệu", "Thành thạo phần mềm mô hình hóa kết cấu ETABS", "Độ cẩn trọng tuyệt đối với từng con số"],
        ["Toán học", "Vật lý"],
        [{"level": "Đại học", "description": "Kỹ sư Xây dựng dân dụng & công nghiệp (ĐH Bách khoa, ĐH Xây dựng, ĐH Giao thông Vận tải)"}],
        "Tìm hiểu tại sao cây cầu dây văng lại có thể đỡ được hàng nghìn chiếc xe tải chạy qua cùng lúc.",
        "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80", "Kỹ sư kết cấu kiểm tra bản vẽ kết cấu thép công trình"
    ))
    c.append(make_c(
        "ky-su-giam-sat-thi-cong", "Kỹ sư Giám sát thi công hiện trường (Site Construction Supervisor)", "Site Construction Engineer",
        ["Kỹ sư hiện trường", "Site Engineer"], g6, c6, l6, ["R", "C", "E"],
        "Túc trực trên công trường để kiểm tra quy cách buộc thép, độ sụt bê tông, đôn đốc thợ thi công đúng bản vẽ và an toàn lao động.",
        ["Nghiệm thu cốt thép và cốp pha trước giờ đổ bê tông", "Lấy mẫu thử bê tông nén tại trạm trộn để kiểm tra mác cường độ", "Lập nhật ký công trường ghi nhận thời tiết, nhân công và khối lượng hoàn thành"],
        ["Biên bản nghiệm thu công việc xây dựng", "Nhật ký thi công công trường hàng ngày"],
        ["Máy thủy bình", "Thước dây thép", "Nón bảo hộ & giày mũi thép", "Bản vẽ A0 ép nhựa"],
        "Hiện trường công trường xây dựng, ngoài trời nắng gió, bụi bặm.",
        ["Làm việc ngoài trời trong điều kiện thời tiết khắc nghiệt, thường xuyên đổ bê tông đêm", "Áp lực tiến độ gấp từ chủ đầu tư"],
        ["Đọc bản vẽ xây dựng nhanh chóng", "Kỹ năng quản lý và điều phối các tổ đội thợ", "Kỷ luật an toàn lao động nghiêm ngặt"],
        ["Vật lý", "Toán học", "Công nghệ"],
        [{"level": "Đại học", "description": "Kỹ sư Xây dựng hoặc Kỹ sư Quản lý xây dựng"}, {"level": "Cao đẳng", "description": "Cao đẳng Kỹ thuật Công trình Xây dựng"}],
        "Quan sát một công trình đang xây gần nhà xem các chú công nhân đội nón bảo hộ màu gì và đang làm việc gì.",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80", "Kỹ sư giám sát kiểm tra cốt thép trên sàn công trường"
    ))
    c.append(make_c(
        "ky-su-trac-dia-va-ban-do-so", "Kỹ sư Trắc địa và Bản đồ số (Geomatics & Surveying Engineer)", "Geomatics & Surveying Engineer",
        ["Kỹ sư đo đạc", "Surveyor"], g6, c6, l6, ["R", "I"],
        "Sử dụng máy toàn đạc điện tử, máy định vị vệ tinh GPS RTK và drone bay quét để đo đạc tọa độ mốc ranh đất và độ lún công trình.",
        ["Bắn mốc tọa độ và cao độ chuẩn xác phục vụ định vị tim trục tòa nhà", "Đo quan trắc độ nghiêng và độ lún định kỳ của các tòa nhà cao tầng", "Bay chụp drone và xử lý đám mây điểm (Point Cloud) lập bản đồ địa hình 3D"],
        ["Bản đồ hiện trạng vị trí khu đất tỷ lệ 1/500", "Báo cáo quan trắc độ lún công trình"],
        ["Máy toàn đạc điện tử Leica", "Máy định vị GPS RTK", "Flycam bay chụp", "AutoCAD Civil 3D"],
        "Khu đất dự án, đồi núi, công trường hạ tầng giao thông.",
        ["Thường xuyên lội ruộng, trèo đồi trong điều kiện địa hình phức tạp", "Sai số một vài milimet có thể ảnh hưởng lớn đến tim móng tòa nhà"],
        ["Thao tác máy đo đạc trắc địa chuẩn xác", "Xử lý số liệu tọa độ không gian", "Sức khỏe dẻo dai thích nghi địa hình"],
        ["Toán học (Lượng giác)", "Địa lý", "Vật lý"],
        [{"level": "Đại học", "description": "Kỹ sư Kỹ thuật Trắc địa - Bản đồ (ĐH Mỏ - Địa chất, ĐH Bách khoa)"}, {"level": "Cao đẳng", "description": "Cao đẳng Trắc địa công trình"}],
        "Bật tính năng định vị GPS trên điện thoại và xem độ chính xác hiển thị trong khoảng bao nhiêu mét.",
        "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?auto=format&fit=crop&w=800&q=80", "Kỹ sư trắc địa ngắm máy toàn đạc đo cao độ công trình"
    ))
    c.append(make_c(
        "ky-su-du-toan-va-dinh-gia-qs", "Kỹ sư Dự toán và Định giá xây dựng (Quantity Surveyor - QS)", "Quantity Surveyor (QS)",
        ["Kỹ sư QS", "Chuyên viên bóc tách khối lượng"], g6, c6, l6, ["C", "I", "E"],
        "Bóc tách từng kilogam thép, mét khối bê tông từ bản vẽ để lập bảng dự toán chi phí, hồ sơ mời thầu và thanh quyết toán công trình.",
        ["Bóc tách khối lượng vật liệu xây dựng từ hồ sơ thiết kế kỹ thuật", "Tra cứu đơn giá vật liệu địa phương và định mức nhà nước để lập dự toán", "Đàm phán thương thảo đơn giá với các nhà thầu phụ"],
        ["Bảng dự toán kinh phí xây dựng công trình (BOQ)", "Hồ sơ thanh quyết toán giai đoạn"],
        ["Phần mềm Dự toán G8 / F1", "Excel nâng cao", "AutoCAD đo khối lượng"],
        "Văn phòng ban quản lý dự án, công ty tư vấn đầu tư xây dựng.",
        ["Làm việc liên tục với bảng tính hàng nghìn dòng số liệu dễ gây đau đầu", "Chịu trách nhiệm giải trình từng đồng chi phí với kiểm toán"],
        ["Kỹ năng bóc tách khối lượng bản vẽ chuẩn xác", "Am hiểu định mức đơn giá và pháp luật đấu thầu", "Tư duy đàm phán thương mại"],
        ["Toán học", "Giáo dục kinh tế và pháp luật", "Tin học"],
        [{"level": "Đại học", "description": "Kỹ sư Kinh tế Xây dựng hoặc Quản lý xây dựng (ĐH Xây dựng, ĐH Giao thông)"}],
        "Thử tính xem để sơn lại 4 bức tường phòng ngủ của em thì cần mua khoảng bao nhiêu mét vuông sơn.",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80", "Kỹ sư dự toán tính toán chi phí trên bảng dự toán BOQ"
    ))
    c.append(make_c(
        "ky-su-an-toan-lao-dong-hse", "Kỹ sư An toàn lao động công trường (HSE Officer / Engineer)", "Health, Safety & Environment (HSE) Engineer",
        ["Kỹ sư bảo hộ lao động", "HSE Engineer"], g6, c6, l6, ["S", "C", "R"],
        "Tập huấn an toàn đầu giờ, kiểm tra giàn giáo, đai an toàn trên cao và ngăn chặn mọi nguy cơ tai nạn bảo vệ tính mạng công nhân.",
        ["Tổ chức buổi phổ biến an toàn 15 phút (Toolbox meeting) mỗi buổi sáng", "Kiểm tra lưới hứng rơi, lan can bảo vệ và kiểm định máy cẩu", "Lập phương án ứng phó khẩn cấp và sơ cấp cứu tai nạn lao động"],
        ["Báo cáo đánh giá rủi ro an toàn lao động (JSA)", "Kế hoạch an toàn vệ sinh môi trường công trường"],
        ["Thiết bị đo nồng độ khí độc", "Dây đai an toàn toàn thân 2 móc", "Bộ sơ cấp cứu chấn thương"],
        "Công trường xây dựng, nhà máy sản xuất công nghiệp nặng.",
        ["Phải kiên quyết xử phạt hoặc đình chỉ thi công khi phát hiện vi phạm dù bị phản ứng", "Áp lực tâm lý rất lớn khi xảy ra sự cố tai nạn lao động"],
        ["Nắm vững luật an toàn vệ sinh lao động", "Khả năng quan sát nhận diện mối nguy tiềm ẩn", "Kỹ năng huấn luyện và thuyết phục công nhân"],
        ["Vật lý", "Sinh học", "Giáo dục công dân / Kinh tế & Pháp luật"],
        [{"level": "Đại học", "description": "Kỹ sư Bảo hộ lao động hoặc Quản lý môi trường công nghiệp (ĐH Công đoàn, ĐH Tôn Đức Thắng)"}],
        "Liệt kê 3 mối nguy hiểm có thể gặp phải khi trèo lên mái nhà cao tầng không đeo dây bảo hiểm.",
        "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80", "Kỹ sư an toàn HSE kiểm tra giàn giáo công trường"
    ))
    c.append(make_c(
        "ky-su-ha-tang-giao-thong-cau-duong", "Kỹ sư Cầu đường và Hạ tầng giao thông (Highway & Bridge Engineer)", "Highway & Bridge Infrastructure Engineer",
        ["Kỹ sư cầu đường", "Transportation Engineer"], g6, c6, l6, ["R", "I"],
        "Thiết kế tuyến đường cao tốc, cầu vượt bê tông dự ứng lực, nút giao lập thể giúp kết nối giao thương giữa các vùng miền đất nước.",
        ["Thiết kế bình đồ, trắc dọc và trắc ngang tuyến đường trên Civil 3D", "Tính toán dầm cầu bê tông cốt thép dự ứng lực và mố trụ cầu", "Quy hoạch hệ thống thoát nước mưa chống ngập cho mặt đường cao tốc"],
        ["Hồ sơ thiết kế kỹ thuật tuyến đường cao tốc", "Bản vẽ kết cấu mố trụ và dầm cầu"],
        ["AutoCAD Civil 3D", "Midas Civil", "Plaxis", "VnRoad"],
        "Văn phòng thiết kế giao thông, công trường xây dựng đường cao tốc trên khắp cả nước.",
        ["Thường xuyên đi công tác dài ngày theo các tuyến công trình liên tỉnh", "Điều kiện thi công sông nước, đồi dốc cheo leo"],
        ["Cơ học đất và nền móng công trình", "Thiết kế hình học tuyến đường", "Kỹ thuật thi công cầu nhịp lớn"],
        ["Toán học", "Vật lý", "Địa lý"],
        [{"level": "Đại học", "description": "Kỹ sư Cầu đường, Kỹ thuật Công trình giao thông (ĐH Giao thông Vận tải, ĐH Bách khoa)"}],
        "Quan sát mặt đường nhựa trên cầu gần nhà và tìm xem có khe co giãn răng lược bằng thép ở vị trí nào.",
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80", "Tuyến đường cao tốc uốn lượn qua các nhịp cầu hiện đại"
    ))
    c.append(make_c(
        "ky-su-cong-trinh-ngam-metro", "Kỹ sư Công trình ngầm và Metro (Underground & Tunneling Engineer)", "Tunneling & Underground Infrastructure Engineer",
        ["Kỹ sư hầm ngầm", "Metro Engineer"], g6, c6, l6, ["R", "I"],
        "Điều khiển robot khoan hầm TBM dưới lòng đất, thi công các ga ngầm đường sắt đô thị Metro và hầm xuyên núi.",
        ["Theo dõi thông số áp lực đất và vữa chèn của khiên đào robot TBM", "Tính toán lún sụt mặt đất để bảo vệ các tòa nhà cổ phía trên mặt đường", "Thiết kế hệ thống thông gió chống ngạt và thoát hiểm khẩn cấp trong hầm ngầm"],
        ["Nhật ký vận hành robot khiên đào TBM", "Báo cáo quan trắc chuyển vị nền đất hầm ngầm"],
        ["Máy khoan hầm TBM", "Phần mềm mô phỏng địa kỹ thuật Plaxis 3D", "Cảm biến đo áp lực nước lỗ rỗng"],
        "Lòng đất đô thị (dự án Metro Hà Nội, Metro Bến Thành - Suối Tiên), hầm xuyên núi Đèo Cả, Hải Vân.",
        ["Làm việc sâu dưới lòng đất thiếu ánh sáng mặt trời tự nhiên", "Nguy cơ sạt lở hoặc bục túi nước ngầm đòi hỏi sự cảnh giác cao độ"],
        ["Địa kỹ thuật và cơ học đá ngầm", "Vận hành máy móc cơ giới hạng nặng", "Ứng phó tình huống khẩn cấp"],
        ["Vật lý", "Địa lý", "Toán học"],
        [{"level": "Đại học", "description": "Kỹ sư Xây dựng Công trình ngầm và Mỏ (ĐH Mỏ - Địa chất, ĐH Giao thông Vận tải)"}],
        "Tìm hiểu nguyên lý robot khoan hầm TBM vừa đào đất vừa lắp ghép vỏ hầm bê tông phía sau.",
        "https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80", "Đường hầm metro ngầm hiện đại với hệ thống vỏ hầm kiên cố"
    ))
    c.append(make_c(
        "quan-ly-du-an-xay-dung", "Giám đốc Dự án Xây dựng (Construction Project Director / Manager)", "Construction Project Manager",
        ["Chỉ huy trưởng công trình", "Project Manager Xây dựng"], g6, c6, l6, ["E", "R", "C"],
        "Chỉ huy tổng thể tiến độ, chất lượng, tài chính và an toàn của toàn bộ dự án nghìn tỷ, điều hành hàng chục nhà thầu phụ.",
        ["Điều phối các cuộc họp giao ban công trường hàng tuần", "Quản lý dòng tiền dự án và giải ngân theo từng mốc tiến độ", "Xử lý các vướng mắc pháp lý và tiếp đón các đoàn thanh tra xây dựng"],
        ["Kế hoạch tổng thể tiến độ dự án (Master Schedule)", "Báo cáo tình hình thực hiện dự án gửi hội đồng quản trị"],
        ["MS Project / Primavera P6", "Hệ thống ERP quản lý dự án", "Email và phần mềm họp trực tuyến"],
        "Văn phòng chỉ huy công trường, phòng họp ban quản trị dự án.",
        ["Chịu trách nhiệm cao nhất về mọi sự cố xảy ra trên công trường", "Áp lực rất lớn về mốc hoàn thành bàn giao dự án cho chủ đầu tư"],
        ["Kỹ năng lãnh đạo và chỉ huy quyết đoán", "Quản trị rủi ro và tài chính dự án", "Đàm phán và giải quyết xung đột lợi ích"],
        ["Toán học", "Ngữ văn", "Giáo dục kinh tế và pháp luật"],
        [{"level": "Đại học", "description": "Kỹ sư Xây dựng có chứng chỉ hành nghề Quản lý dự án hạng 1"}],
        "Tìm hiểu vai trò của người Chỉ huy trưởng trên công trường tòa nhà Landmark 81.",
        "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80", "Giám đốc dự án xây dựng trao đổi công việc cùng kỹ sư trưởng"
    ))
    c.append(make_c(
        "ky-thuat-vien-thi-nghiem-vat-lieu-xay-dung", "Kỹ thuật viên Thí nghiệm vật liệu xây dựng (Construction Materials Testing Technician)", "Construction Materials Testing Technician",
        ["Thí nghiệm viên phòng LAS-XD", "Materials Testing Technician"], g6, c6, l6, ["R", "C"],
        "Đập nén mẫu bê tông, kéo thử giới hạn chảy của thép và thí nghiệm đầm nén đất để cấp chứng nhận chất lượng cho công trình.",
        ["Đúc mẫu bê tông hình lập phương 15x15x15cm và bảo dưỡng trong bể nước 28 ngày", "Đưa mẫu lên máy nén thủy lực để đo cường độ chịu nén thực tế", "Kéo thanh thép trên máy kéo vạn năng để kiểm tra độ giãn dài và giới hạn chảy"],
        ["Phiếu kết quả thí nghiệm nén bê tông hợp chuẩn", "Báo cáo cơ lý đất đắp nền đường"],
        ["Máy nén bê tông thủy lực 2000kN", "Máy kéo thép vạn năng", "Cân điện tử chính xác", "Tủ sấy mẫu đất"],
        "Phòng thí nghiệm vật liệu xây dựng được Bộ Xây dựng cấp mã hiệu LAS-XD.",
        ["Công việc thí nghiệm lặp đi lặp lại đòi hỏi tính trung thực, không được làm sai lệch số liệu", "Bê tông và đất đá khá nặng nhọc khi bốc dỡ mẫu"],
        ["Thao tác thí nghiệm chuẩn xác theo TCVN / ASTM", "Tính trung thực và đạo đức nghề nghiệp", "Kỹ năng ghi chép và xử lý số liệu"],
        ["Vật lý", "Hóa học", "Toán học"],
        [{"level": "Cao đẳng", "description": "Cao đẳng Thí nghiệm & Kiểm định vật liệu xây dựng"}, {"level": "Trung cấp", "description": "Trung cấp Thí nghiệm xây dựng"}],
        "Tìm hiểu tại sao người ta phải chờ đủ 28 ngày sau khi đổ bê tông thì mới thử độ cứng chắc nhất của nó.",
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80", "Kỹ thuật viên phòng thí nghiệm kiểm tra độ nén mẫu bê tông"
    ))
    c.append(make_c(
        "ky-su-cap-thoat-nuoc-cong-trinh", "Kỹ sư Cấp thoát nước và Môi trường công trình (Water Supply & Drainage Engineer)", "Plumbing & Public Health (PHE) Engineer",
        ["Kỹ sư cấp thoát nước", "Kỹ sư MEP nước"], g6, c6, l6, ["R", "I"],
        "Tính toán đường kính ống nước sạch, áp lực máy bơm tăng áp và thiết kế trạm xử lý nước thải sinh hoạt cho các khu chung cư cao tầng.",
        ["Tính toán lưu lượng dùng nước sinh hoạt vào giờ cao điểm của cư dân", "Bố trí mạng lưới đường ống cấp nước nóng lạnh và ống thoát nước thải", "Thiết kế trạm bơm cứu hỏa công suất lớn và bể nước ngầm phòng cháy"],
        ["Bản vẽ sơ đồ nguyên lý cấp thoát nước", "Thuyết minh tính toán chọn máy bơm và thể tích bể chứa"],
        ["Revit MEP", "AutoCAD", "WaterCAD", "EPANET"],
        "Công ty thiết kế cơ điện công trình MEP, ban quản lý tòa nhà chung cư.",
        ["Nếu thiết kế sai độ dốc ống thoát nước sẽ gây tắc nghẽn hoặc bốc mùi hôi thối khắp tòa nhà", "Phải phối hợp khéo léo để đường ống không đụng dầm kết cấu"],
        ["Thủy lực học đường ống và dòng chảy", "Thiết kế mạng lưới cấp thoát nước trên Revit", "Hiểu biết tiêu chuẩn phòng cháy chữa cháy"],
        ["Vật lý", "Hóa học", "Toán học"],
        [{"level": "Đại học", "description": "Kỹ sư Cấp thoát nước hoặc Kỹ thuật Môi trường đô thị (ĐH Xây dựng, ĐH Kiến trúc)"}],
        "Nhìn dưới bồn rửa mặt ở nhà xem chiếc ống xi-phông cong hình chữ U có tác dụng gì trong việc ngăn mùi hôi.",
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80", "Hệ thống đường ống cấp nước và máy bơm hiện đại trong tầng kỹ thuật"
    ))

    # 7. NÔNG NGHIỆP CÔNG NGHỆ CAO VÀ THỦY SẢN
    g7, c7, l7 = "nong-nghiep", "NongNghiep", "Nông nghiệp công nghệ cao và thủy sản"
    c.append(make_c(
        "ky-su-nong-nghiep-nha-kinh", "Kỹ sư Nông nghiệp công nghệ cao (Smart Greenhouse Agriculture Engineer)", "Smart Greenhouse Agronomist",
        ["Kỹ sư nhà màng", "Agronomist"], g7, c7, l7, ["R", "I"],
        "Điều khiển hệ thống nhà kính thông minh, tư vấn dung dịch dinh dưỡng tưới nhỏ giọt tự động cho dâu tây, dưa lưới và hoa lan.",
        ["Cài đặt ngưỡng nhiệt độ, độ ẩm và thông gió tự động qua cảm biến IoT", "Pha chế công thức dung dịch dinh dưỡng khoáng đa vi lượng theo từng thời kỳ cây", "Theo dõi phát hiện sớm sâu bệnh qua lá và áp dụng biện pháp phòng trừ sinh học"],
        ["Nhật ký chu kỳ sinh trưởng cây trồng nhà kính", "Công thức dung dịch dinh dưỡng thủy canh chuẩn"],
        ["Hệ thống tưới nhỏ giọt Netafim", "Bút đo nồng độ dinh dưỡng EC và độ pH", "Hệ thống nhà màng IoT"],
        "Khu nông nghiệp công nghệ cao (Đà Lạt, VinEco, Mộc Châu), trang trại dưa lưới hữu cơ.",
        ["Thời tiết nắng nóng nhiệt độ trong nhà màng có thể lên tới 38-40 độ C", "Rủi ro dịch bệnh lây lan nhanh nếu không kiểm soát nguồn nước tưới"],
        ["Dinh dưỡng thực vật và sinh lý cây trồng", "Vận hành hệ thống tưới tự động", "Phòng trừ dịch hại tổng hợp IPM"],
        ["Sinh học", "Hóa học", "Công nghệ"],
        [{"level": "Đại học", "description": "Kỹ sư Nông học, Nông nghiệp công nghệ cao (Học viện Nông nghiệp VN, ĐH Nông Lâm TP.HCM)"}, {"level": "Cao đẳng", "description": "Cao đẳng Nông nghiệp công nghệ cao"}],
        "Thử gieo một hạt đậu xanh vào bông gòn ẩm và theo dõi tốc độ nhú mầm mỗi ngày.",
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80", "Nhà kính thông minh trồng dâu tây trên giàn thủy canh",
        has_3d=True, sim_id="task-agriculture-3d"
    ))
    c.append(make_c(
        "chuyen-vien-dinh-duong-cay-trong-thuy-canh", "Chuyên viên Thủy canh và Dinh dưỡng cây trồng (Hydroponics Specialist)", "Hydroponic Crop Nutritionist",
        ["Kỹ thuật viên thủy canh", "Crop Nutritionist"], g7, c7, l7, ["I", "R"],
        "Phân tích mẫu nước, cân bằng tỷ lệ N-P-K, Canxi, Magie và vi lượng trong hệ thống thủy canh hồi lưu giúp rau giòn ngọt và sạch tuyệt đối.",
        ["Đo đạc nồng độ dẫn điện EC và độ pH của dòng nước tuần hoàn 2 lần mỗi ngày", "Bổ sung vi lượng sắt chélat hóa tránh hiện tượng vàng lá", "Vệ sinh sát khuẩn bể chứa và màng rễ sau mỗi đợt thu hoạch rau"],
        ["Quy trình pha dung dịch dinh dưỡng chuẩn theo ngày tuổi cây", "Báo cáo kiểm nghiệm hàm lượng Nitrat an toàn trong rau xà lách"],
        ["Bút đo EC/pH kỹ thuật số", "Hệ thống ống thủy canh NFT", "Cân tiểu ly hóa chất"],
        "Trang trại thủy canh nội đô, nông trại thẳng đứng (Vertical farm).",
        ["Lệch độ pH một chút có thể làm rễ cây bị thối hàng loạt trong 24 giờ", "Công việc đòi hỏi tính tỉ mỉ khi cân đong từng gam hóa chất"],
        ["Hóa học vô cơ dung dịch", "Sinh học màng tế bào rễ cây", "Kỹ năng vận hành bơm tuần hoàn"],
        ["Hóa học", "Sinh học", "Toán học"],
        [{"level": "Đại học", "description": "Kỹ sư Nông hóa - Thổ nhưỡng hoặc Công nghệ sinh học"}],
        "Tìm hiểu tại sao cây trồng có thể lớn nhanh mà không cần một nắm đất nào trong phương pháp thủy canh.",
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80", "Giàn rau thủy canh xanh mướt phát triển trong dung dịch dinh dưỡng"
    ))
    c.append(make_c(
        "bac-si-thu-y-trang-trai", "Bác sĩ thú y trang trại hiện đại (Livestock Veterinarian)", "Livestock Herd Veterinarian",
        ["Bác sĩ thú y", "Bác sĩ thú y trại heo / bò sữa"], g7, c7, l7, ["R", "I", "S"],
        "Tiêm phòng vaccine, theo dõi dịch tễ, siêu âm thai và điều trị bệnh cho đàn bò sữa, đàn heo hàng nghìn con tại các tập đoàn sữa lớn.",
        ["Tiêm vaccine phòng dịch bệnh theo lịch định kỳ nghiêm ngặt", "Sử dụng máy siêu âm cầm tay kiểm tra thai cho bò sữa", "Thiết lập hàng rào an toàn sinh học ngăn chặn dịch tả heo châu Phi"],
        ["Sổ tay dịch tễ và tiêm phòng toàn trại", "Phác đồ điều trị bệnh lý thú y"],
        ["Máy siêu âm thú y xách tay", "Bơm tiêm tự động liên tục", "Hệ thống sát trùng tiêu độc áp lực"],
        "Trang trại chăn nuôi công nghiệp (TH True Milk, Vinamilk, CP Group, Masan).",
        ["Mùi chất thải chăn nuôi và nguy cơ bị động vật đá hoặc cắn khi thăm khám", "Trực trại cách ly dài ngày không được về nhà để đảm bảo an toàn sinh học"],
        ["Chẩn đoán lâm sàng bệnh thú y", "Thao tác phẫu thuật và tiêm truyền trên động vật lớn", "Tình yêu thương động vật"],
        ["Sinh học", "Hóa học"],
        [{"level": "Đại học", "description": "Bác sĩ Thú y (Đào tạo 5 năm tại Học viện Nông nghiệp VN, ĐH Nông Lâm)"}],
        "Tìm hiểu cách các trang trại bò sữa TH True Milk đeo vòng cổ điện tử cho từng con bò để theo dõi sức khỏe.",
        "https://images.unsplash.com/photo-1527153857715-3908f2ae5e04?auto=format&fit=crop&w=800&q=80", "Bác sĩ thú y thăm khám sức khỏe đàn bò sữa trên đồng cỏ"
    ))
    c.append(make_c(
        "ky-su-nuoi-trong-thuy-san-ras", "Kỹ sư Thủy sản tuần hoàn (Recirculating Aquaculture - RAS Engineer)", "Aquaculture Systems (RAS) Engineer",
        ["Kỹ sư nuôi tôm cá công nghệ cao", "Aquaculture Specialist"], g7, c7, l7, ["R", "I"],
        "Kiểm soát môi trường nước ao nuôi, lọc sinh học tuần hoàn RAS để nuôi tôm thẻ chân trắng siêu thâm canh và cá hồi trong nhà bè.",
        ["Kiểm tra nồng độ oxy hòa tan (DO), khí độc NH3, NO2 trong nước ao", "Vận hành hệ thống lọc vi sinh hạt động (MBBR) và máy tách bọt Protein Skimmer", "Tính toán khẩu phần thức ăn viên nổi theo trọng lượng tôm cá hàng tuần"],
        ["Quy trình quản lý môi trường ao nuôi khép kín", "Nhật ký tăng trưởng đàn tôm cá và hệ số FCR"],
        ["Máy đo DO oxy hòa tan", "Hệ thống lọc tuần hoàn RAS", "Máy cho ăn tự động"],
        "Trang trại tôm công nghệ cao ở Bạc Liêu, Cà Mau; trại nuôi cá hồi Sa Pa.",
        ["Trực đêm canh máy sục khí oxy, nếu mất điện 15 phút tôm cá có thể ngạt chết", "Làm việc trong môi trường ẩm ướt gió biển"],
        ["Hóa lý môi trường nước nuôi trồng thủy sản", "Kỹ thuật vi sinh xử lý chất thải hữu cơ", "Quản trị dịch bệnh thủy sản"],
        ["Sinh học", "Hóa học", "Vật lý"],
        [{"level": "Đại học", "description": "Kỹ sư Nuôi trồng thủy sản hoặc Bệnh học thủy sản (ĐH Cần Thơ, ĐH Nha Trang)"}],
        "Tìm hiểu hệ thống lọc sinh học biến chất thải của cá thành nước sạch tuần hoàn như thế nào.",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80", "Hệ thống bể nuôi thủy sản tuần hoàn công nghệ cao trong nhà"
    ))
    c.append(make_c(
        "ky-su-cong-nghe-sau-thu-hoach", "Kỹ sư Công nghệ sau thu hoạch & Bảo quản (Post-harvest Engineer)", "Post-harvest Food Preservation Engineer",
        ["Kỹ sư bảo quản nông sản", "Post-harvest Specialist"], g7, c7, l7, ["I", "R"],
        "Áp dụng công nghệ chiếu xạ, kho lạnh kiểm soát khí quyển (CA) và màng sinh học để giữ trái xoài, sầu riêng, thanh long tươi ngon xuất khẩu Mỹ, châu Âu.",
        ["Nghiên cứu tốc độ hô hấp và sản sinh khí Ethylene làm chín quả", "Thiết lập nhiệt độ và nồng độ khí O2, CO2 trong container lạnh xuất khẩu", "Thử nghiệm các loại màng sáp sinh học chiết xuất từ thiên nhiên an toàn"],
        ["Quy trình bảo quản kéo dài tuổi thọ nông sản tươi", "Báo cáo thử nghiệm tỷ lệ hao hụt sau vận chuyển biển 30 ngày"],
        ["Kho lạnh bảo quản khí quyển CA", "Máy đo độ ngọt Brix", "Máy đo độ cứng quả"],
        "Trung tâm chiếu xạ nông sản xuất khẩu, nhà máy đóng gói trái cây xuất khẩu.",
        ["Làm việc trong môi trường kho lạnh nhiệt độ thấp từ 2 đến 10 độ C", "Rủi ro cả lô hàng container hàng tỷ đồng bị hỏng nếu nhiệt độ dao động"],
        ["Sinh lý học sau thu hoạch", "Công nghệ lạnh và bảo quản lạnh", "Tiêu chuẩn kiểm dịch thực vật quốc tế"],
        ["Hóa học", "Sinh học", "Vật lý"],
        [{"level": "Đại học", "description": "Kỹ sư Công nghệ sau thu hoạch hoặc Công nghệ thực phẩm"}],
        "Tìm hiểu tại sao quả chuối chín để cạnh quả xoài xanh thì quả xoài lại mau chín hơn bình thường.",
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80", "Trái cây tươi xuất khẩu được xử lý và đóng gói trong kho lạnh"
    ))
    c.append(make_c(
        "ky-thuat-vien-drone-nong-nghiep", "Kỹ thuật viên điều khiển Drone nông nghiệp (Agricultural Drone Pilot)", "Agricultural Drone Operations Specialist",
        ["Phi công lái drone phun thuốc", "Agricultural Drone Operator"], g7, c7, l7, ["R", "C"],
        "Lập đường bay tự động, điều khiển máy bay không người lái phun thuốc trừ sâu sinh học, rải phân bón và đo sức khỏe cây trồng bằng camera đa phổ.",
        ["Khảo sát lập bản đồ ranh giới thửa ruộng trên ứng dụng điều khiển bay", "Pha chế phân bón lá và nạp vào bình chứa 30-50 lít của drone", "Vận hành bay phun tự động tiết kiệm 90% lượng nước và bảo vệ sức khỏe nông dân"],
        ["Bản đồ chỉ số thực vật NDVI thể hiện vùng cây thiếu phân", "Nhật ký diện tích bay phun dịch vụ nông nghiệp"],
        ["Drone nông nghiệp DJI Agras T40/T50", "Camera đa phổ cảm biến quang phổ", "Trạm phát pin sạc nhanh máy phát điện"],
        "Cánh đồng lúa Đồng bằng sông Cửu Long, vườn cây ăn trái miền Đông Nam Bộ.",
        ["Làm việc ngoài đồng ruộng nắng gắt từ sáng sớm", "Cần tập trung cao độ điều khiển tránh va chạm cột điện và ngọn cây"],
        ["Kỹ năng bay điều khiển thiết bị bay không người lái", "Bảo trì sửa chữa phần cứng và cánh quạt drone", "Hiểu biết về liều lượng nông dược an toàn"],
        ["Vật lý", "Tin học", "Địa lý"],
        [{"level": "Cao đẳng", "description": "Cao đẳng Nghề Cơ điện tử nông nghiệp"}, {"level": "Đào tạo nghề", "description": "Chứng chỉ đào tạo phi công điều khiển drone nông nghiệp chuyên nghiệp"}],
        "Xem video chiếc drone nông nghiệp bay là là trên ngọn lúa phun sương mù mịn đều tăm tắp.",
        "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80", "Drone nông nghiệp hiện đại bay phun sương trên cánh đồng lúa"
    ))
    c.append(make_c(
        "chuyen-vien-chuoi-cung-ung-nong-san", "Chuyên viên Quản lý chuỗi cung ứng nông sản sạch (Agri-Supply Chain Specialist)", "Agri-Food Supply Chain Coordinator",
        ["Chuyên viên thu mua nông sản", "Agri-Supply Chain Planner"], g7, c7, l7, ["E", "C", "S"],
        "Kết nối các hợp tác xã nông dân với chuỗi siêu thị, đảm bảo rau củ quả thu hoạch sáng sớm được vận chuyển đến kệ hàng ngay trong ngày.",
        ["Khảo sát sản lượng và lịch thu hoạch mùa vụ tại các hợp tác xã", "Điều phối xe tải lạnh chuyên dụng vận chuyển chuỗi cung ứng lạnh (Cold Chain)", "Kiểm soát hao hụt dập nát và truy xuất nguồn gốc mã QR từng lô hàng"],
        ["Hợp đồng bao tiêu nông sản dài hạn", "Hệ thống truy xuất nguồn gốc tem nhãn QR Code"],
        ["Phần mềm quản lý kho WMS", "Hệ thống giám sát nhiệt độ xe lạnh GPS", "Mã vạch QR GS1"],
        "Trung tâm phân phối nông sản, chuỗi siêu thị (Co.opmart, WinMart), chợ đầu mối.",
        ["Nông sản tươi dễ hỏng nếu thời gian vận chuyển bị trễ giờ cao điểm", "Phải thường xuyên đi thực địa đàm phán giá thu mua với bà con nông dân"],
        ["Kỹ năng thương lượng thu mua", "Quản trị logistics chuỗi lạnh (Cold chain)", "Hiểu biết thời vụ nông nghiệp"],
        ["Giáo dục kinh tế và pháp luật", "Địa lý", "Toán học"],
        [{"level": "Đại học", "description": "Cử nhân Kinh tế nông nghiệp, Quản trị chuỗi cung ứng hoặc Thương mại"}],
        "Quét thử mã QR trên bao bì một túi rau trong siêu thị xem có hiển thị ngày thu hoạch và tên trang trại không.",
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80", "Rau củ quả tươi được kiểm tra và dán tem truy xuất nguồn gốc"
    ))
    c.append(make_c(
        "ky-su-chon-tao-giong-cay-trong", "Kỹ sư Chọn tạo giống cây trồng (Plant Breeder / Seed Geneticist)", "Plant Geneticist & Breeder",
        ["Kỹ sư giống cây trồng", "Plant Breeder"], g7, c7, l7, ["I", "R"],
        "Thụ phấn nhân tạo, lai tạo các dòng bố mẹ để tạo ra giống lúa chịu mặn, giống ngô kháng sâu bệnh và năng suất vượt trội.",
        ["Tiến hành thụ phấn nhân tạo hoa lúa bằng tay trong phòng thí nghiệm", "Đánh giá khả năng chịu mặn, chịu hạn của các dòng giống mới trong nhà lưới", "Làm thủ tục khảo nghiệm giống quốc gia để được công nhận lưu hành"],
        ["Hồ sơ đăng ký bảo hộ giống cây trồng mới", "Bộ hạt giống đầu dòng F1 có đặc tính ưu việt"],
        ["Phòng thí nghiệm sinh học phân tử", "Kính hiển vi soi hạt phấn", "Dụng cụ thụ phấn chuyên dụng"],
        "Viện nghiên cứu lúa ĐBSCL, Viện cây lương thực, các công ty hạt giống quốc tế (Bayer, Syngenta, Vinaseed).",
        ["Để tạo ra một giống cây trồng mới ổn định mất từ 5 đến 8 năm kiên trì", "Nhiều mẻ lai tạo thất bại không mang lại năng suất như kỳ vọng"],
        ["Di truyền học thực vật và chọn giống", "Kỹ năng thực hành lai tạo tỉ mỉ", "Tính kiên nhẫn bền bỉ theo đuổi mục tiêu lâu dài"],
        ["Sinh học", "Toán học", "Hóa học"],
        [{"level": "Đại học", "description": "Kỹ sư Di truyền & Chọn tạo giống cây trồng hoặc Công nghệ sinh học nông nghiệp"}],
        "Tìm hiểu về giống gạo ngon nhất thế giới ST25 của kỹ sư Hồ Quang Cua được lai tạo công phu qua hơn 20 năm.",
        "https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&w=800&q=80", "Kỹ sư lai tạo giống kiểm tra từng bông lúa trĩu hạt trên đồng thí nghiệm"
    ))
    c.append(make_c(
        "giam-doc-trang-trai-sinh-thai", "Giám đốc Trang trại sinh thái thông minh (Smart Eco-Farm Manager)", "Sustainable & Eco-Farm General Manager",
        ["Chủ trang trại sinh thái", "Farm Manager"], g7, c7, l7, ["E", "R", "S"],
        "Xây dựng mô hình nông nghiệp tuần hoàn không rác thải: kết hợp trồng trọt, chăn nuôi, năng lượng mặt trời và đón khách du lịch trải nghiệm.",
        ["Lập kế hoạch canh tác luân canh và tái chế chất thải thành phân hữu cơ vi sinh", "Tổ chức các tour giáo dục trải nghiệm làm nông dân cho học sinh thành phố", "Quản lý doanh thu bán nông sản sạch và dịch vụ lưu trú farmstay"],
        ["Kế hoạch kinh doanh trang trại sinh thái bền vững", "Chương trình tour giáo dục trải nghiệm nông nghiệp xanh"],
        ["Hệ thống ủ phân Compost vi sinh", "Phần mềm kế toán trang trại", "Nền tảng đặt phòng trực tuyến Farmstay"],
        "Trang trại nông nghiệp sinh thái ngoại ô, vùng đồi núi du lịch sinh thái.",
        ["Vừa phải am hiểu kỹ thuật nông nghiệp vừa phải giỏi kinh doanh dịch vụ", "Chịu ảnh hưởng trực tiếp của biến động thời tiết thiên tai"],
        ["Tư duy nông nghiệp tuần hoàn bền vững", "Kỹ năng quản trị kinh doanh và nhân sự", "Tổ chức hoạt động trải nghiệm cộng đồng"],
        ["Sinh học", "Giáo dục kinh tế và pháp luật", "Địa lý"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị kinh doanh nông nghiệp, Nông học hoặc Du lịch sinh thái"}],
        "Lên ý tưởng cho một trang trại nhỏ: chất thải từ nuôi gà sẽ được tái sử dụng để bón cho vườn cây ăn trái như thế nào.",
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80", "Toàn cảnh trang trại sinh thái xanh mướt kết hợp trồng trọt và du lịch"
    ))
    c.append(make_c(
        "chuyen-vien-chung-nhan-vietgap-globalgap", "Chuyên viên Chứng nhận Tiêu chuẩn Nông nghiệp (VietGAP / GlobalGAP Auditor)", "Agricultural Quality & GAP Standards Auditor",
        ["Chuyên gia đánh giá VietGAP", "GAP Auditor"], g7, c7, l7, ["C", "I", "R"],
        "Thanh tra thực địa, lấy mẫu đất, mẫu nước và kiểm tra nhật ký bón phân để cấp giấy chứng nhận tiêu chuẩn an toàn VietGAP, GlobalGAP, Organic.",
        ["Kiểm tra kho chứa thuốc bảo vệ thực vật và trang thiết bị bảo hộ của trang trại", "Lấy mẫu rau quả gửi phòng thí nghiệm phân tích dư lượng kim loại nặng và hóa chất", "Lập báo cáo đánh giá sự không phù hợp và hướng dẫn trang trại khắc phục"],
        ["Biên bản đánh giá hiện trường trang trại", "Chứng chỉ chứng nhận VietGAP / GlobalGAP chính thức"],
        ["Bộ dụng cụ lấy mẫu đất và nước chuẩn", "Bảng kiểm đánh giá tiêu chuẩn GAP (Checklist)", "Máy chụp ảnh bằng chứng hiện trường"],
        "Các tổ chức chứng nhận chất lượng độc lập, đi công tác thanh tra tại các vùng trồng trên toàn quốc.",
        ["Phải giữ vững tính độc lập khách quan, không thỏa hiệp với các sai phạm an toàn thực phẩm", "Di chuyển liên tục đến các vùng nông thôn hẻo lánh"],
        ["Nắm vững tiêu chuẩn an toàn thực phẩm quốc tế", "Kỹ năng phỏng vấn và kiểm tra hồ sơ bằng chứng", "Tính chính trực và công tâm"],
        ["Hóa học", "Sinh học", "Giáo dục kinh tế và pháp luật"],
        [{"level": "Đại học", "description": "Cử nhân Công nghệ thực phẩm, Bảo vệ thực vật hoặc Quản lý chất lượng"}],
        "Tìm hiểu tiêu chuẩn GlobalGAP đòi hỏi người nông dân phải ghi chép nhật ký canh tác tỉ mỉ như thế nào.",
        "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80", "Chuyên viên kiểm tra chất lượng nông sản đối chiếu tiêu chuẩn an toàn"
    ))

    # 8. Y TẾ, CHĂM SÓC SỨC KHỎE VÀ PHỤC HỒI
    g8, c8, l8 = "y-te", "YTe", "Y tế, chăm sóc sức khỏe và phục hồi"
    c.append(make_c(
        "bac-si-da-khoa-noi-khoa", "Bác sĩ Nội khoa (Internal Medicine Physician)", "Internal Medicine Physician",
        ["Bác sĩ nội", "Bác sĩ lâm sàng"], g8, c8, l8, ["I", "S"],
        "Thăm khám lâm sàng, chỉ định xét nghiệm, chẩn đoán các bệnh lý tim mạch, huyết áp, tiểu đường và kê đơn thuốc điều trị phục hồi.",
        ["Nghe tim phổi bằng ống nghe và thăm khám tổng quát", "Phân tích kết quả xét nghiệm máu, điện tim và phim chụp X-quang", "Giải thích bệnh án thấu đáo và tư vấn chế độ ăn uống, tập luyện cho bệnh nhân"],
        ["Hồ sơ bệnh án điện tử chuẩn hóa", "Đơn thuốc điều trị an toàn, hợp lý"],
        ["Ống nghe y tế chuyên dụng", "Máy đo huyết áp thủy ngân", "Đèn soi đáy mắt", "Hệ thống phần mềm bệnh viện HIS"],
        "Khoa khám bệnh, khoa nội tổng hợp các bệnh viện tuyến tỉnh, trung ương.",
        ["Áp lực quá tải bệnh nhân, mỗi buổi sáng phải khám từ 40 đến 60 người", "Bệnh lý mạn tính đòi hỏi bác sĩ phải kiên trì theo dõi lâu dài"],
        ["Tư duy chẩn đoán phân biệt nhạy bén", "Kỹ năng giao tiếp thấu cảm với người bệnh", "Cập nhật phác đồ điều trị y học chứng cứ liên tục"],
        ["Sinh học", "Hóa học", "Toán học"],
        [{"level": "Đại học", "description": "Bác sĩ Đa khoa (Đào tạo 6 năm tại ĐH Y Hà Nội, ĐH Y Dược TP.HCM) + 18 tháng thực hành cấp chứng chỉ hành nghề"}],
        "Thử đếm nhịp mạch đập ở cổ tay của mình trong 1 phút khi ngồi nghỉ ngơi xem được bao nhiêu nhịp.",
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80", "Bác sĩ nội khoa thăm khám và lắng nghe nhịp tim người bệnh"
    ))
    c.append(make_c(
        "bac-si-ngoai-khoa-phau-thuat", "Bác sĩ Ngoại khoa phẫu thuật (General Surgeon)", "General & Laparoscopic Surgeon",
        ["Bác sĩ mổ", "Phẫu thuật viên"], g8, c8, l8, ["R", "I"],
        "Trực tiếp thực hiện các ca phẫu thuật mổ mở và phẫu thuật nội soi xâm lấn tối thiểu cấp cứu ruột thừa, sỏi túi mật hay chấn thương bụng.",
        ["Rửa tay vô khuẩn và mặc áo mổ theo quy chuẩn nghiêm ngặt", "Thao tác dao mổ, kẹp phẫu thuật và máy đốt điện chính xác từng milimet", "Xử lý cầm máu nhanh chóng và khâu phục hồi các lớp giải phẫu"],
        ["Biên bản phẫu thuật chi tiết", "Bệnh nhân qua cơn nguy kịch hồi phục ổn định"],
        ["Dàn máy phẫu thuật nội soi 4K", "Dao mổ điện lưỡng cực", "Chỉ khâu phẫu thuật tự tiêu", "Dụng cụ kẹp phẫu tích"],
        "Phòng mổ vô khuẩn áp lực dương tại các bệnh viện.",
        ["Đứng liên tục từ 3 đến 8 tiếng trong phòng mổ cho một ca phẫu thuật phức tạp", "Áp lực sinh mạng nghìn cân treo sợi tóc khi xảy ra sự cố chảy máu ồ ạt"],
        ["Đôi bàn tay khéo léo, dẻo dai và không run", "Thần kinh thép giữ bình tĩnh tuyệt đối trong hiểm cảnh", "Hiểu biết tường tận về giải phẫu học cơ thể người"],
        ["Sinh học", "Vật lý", "Hóa học"],
        [{"level": "Đại học", "description": "Bác sĩ Đa khoa (6 năm) + Bác sĩ Nội trú / Chuyên khoa 1 Ngoại khoa (3 năm)"}],
        "Thử dùng nhíp gắp từng hạt gạo bỏ vào một chiếc lọ nhỏ cổ hẹp mà không để rơi ra ngoài.",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80", "Bác sĩ phẫu thuật tập trung cao độ trong phòng mổ vô khuẩn"
    ))
    c.append(make_c(
        "dieu-duong-vien-cap-cuu", "Điều dưỡng viên Hồi sức cấp cứu (Emergency & Critical Care Nurse)", "Critical Care / Emergency Registered Nurse",
        ["Y tá cấp cứu", "Điều dưỡng ICU"], g8, c8, l8, ["S", "R"],
        "Đặt đường truyền tĩnh mạch, ép tim ngoài lồng ngực, theo dõi máy thở và túc trực bên giường bệnh nhân nặng suốt ca trực 24/7.",
        ["Lấy ven tĩnh mạch nhanh chóng trong tình huống khẩn cấp", "Cài đặt thông số máy thở và theo dõi nồng độ oxy máu SpO2 trên máy monitor", "Thực hiện y lệnh dùng thuốc cấp cứu chính xác theo từng phút"],
        ["Hồ sơ chăm sóc điều dưỡng chi tiết từng giờ", "Bệnh nhân nguy kịch được kiểm soát chỉ số sinh tồn ổn định"],
        ["Máy theo dõi monitor 5 thông số", "Máy sốc điện tim khử rung", "Bơm tiêm điện tự động", "Bóng bóp oxy Ambu"],
        "Khoa cấp cứu 115, khoa hồi sức tích cực ICU bệnh viện.",
        ["Trực ca đêm dày đặc làm đảo lộn đồng hồ sinh học", "Thường xuyên chứng kiến nỗi đau mất mát và áp lực từ phía người nhà bệnh nhân"],
        ["Phản xạ cấp cứu nhanh nhẹn, chính xác", "Lòng trắc ẩn và tinh thần phụng sự người bệnh", "Kỹ thuật điều dưỡng vô khuẩn chuẩn mực"],
        ["Sinh học", "Hóa học", "Giáo dục công dân"],
        [{"level": "Đại học", "description": "Cử nhân Điều dưỡng (4 năm)"}, {"level": "Cao đẳng", "description": "Cao đẳng Điều dưỡng chính quy"}],
        "Tìm hiểu các bước ép tim sơ cấp cứu cơ bản (CPR) khi gặp người bất tỉnh ngừng thở ngoài đường.",
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80", "Điều dưỡng viên kiểm tra máy thở và chăm sóc người bệnh",
        sim_id="task-y-te"
    ))
    c.append(make_c(
        "ky-thuat-vien-chan-doan-hinh-anh", "Kỹ thuật viên Chẩn đoán hình ảnh (Radiologic Technologist)", "Medical Radiologic Technologist",
        ["Kỹ thuật viên X-quang", "Kỹ thuật viên MRI / CT"], g8, c8, l8, ["R", "C"],
        "Điều khiển máy chụp X-quang, cắt lớp vi tính CT Scanner và cộng hưởng từ MRI để ghi lại hình ảnh sắc nét bên trong xương khớp, não bộ.",
        ["Hướng dẫn bệnh nhân đứng đúng tư thế chụp và mặc áo chì chắn tia xạ", "Cài đặt liều lượng tia X và chuỗi xung chụp MRI phù hợp", "Xử lý tái tạo hình ảnh 3D xương khớp chuyển bác sĩ đọc kết quả"],
        ["Phim chụp X-quang / CT đạt chuẩn kỹ thuật sắc nét", "Tệp hình ảnh số y tế chuẩn DICOM lưu trữ hệ thống PACS"],
        ["Máy cộng hưởng từ MRI 1.5T / 3.0T", "Máy chụp cắt lớp CT 128 lát cắt", "Máy chụp X-quang kỹ thuật số DR"],
        "Khoa chẩn đoán hình ảnh tại các bệnh viện và phòng khám hiện đại.",
        ["Làm việc trong môi trường có bức xạ ion hóa đòi hỏi kỷ luật an toàn tia xạ nghiêm ngặt", "Phải hỗ trợ di chuyển bệnh nhân nặng bất động lên bàn chụp"],
        ["Thao tác điều khiển máy móc y tế công nghệ cao", "Hiểu biết giải phẫu không gian 3D", "Giao tiếp ân cần hướng dẫn người bệnh"],
        ["Vật lý", "Sinh học", "Tin học"],
        [{"level": "Đại học", "description": "Cử nhân Kỹ thuật Chẩn đoán hình ảnh y học (4 năm)"}, {"level": "Cao đẳng", "description": "Cao đẳng Kỹ thuật Hình ảnh y học"}],
        "Xem một tấm phim chụp X-quang xương bàn tay để thấy các đốt xương hiển thị màu trắng sáng trên nền đen.",
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", "Kỹ thuật viên điều khiển phòng chụp cộng hưởng từ MRI"
    ))
    c.append(make_c(
        "bac-si-rang-ham-mat", "Bác sĩ Răng Hàm Mặt (Dentist / Orthodontist)", "Doctor of Dental Surgery (DDS)",
        ["Nha sĩ", "Bác sĩ chỉnh nha niềng răng"], g8, c8, l8, ["R", "A", "I"],
        "Nhổ răng khôn không đau, điều trị tủy, cấy ghép trụ Implant và niềng răng thẩm mỹ mang lại nụ cười tự tin cho khách hàng.",
        ["Khám tổng quát răng miệng và đọc phim chụp toàn cảnh Panorama", "Gây tê tại chỗ và thực hiện trám răng thẩm mỹ bằng Composite", "Lấy dấu răng và lập phác đồ dịch chuyển răng niềng từng tháng"],
        ["Hàm răng sạch sâu, chắc khỏe và nụ cười thẩm mỹ", "Hồ sơ theo dõi chỉnh nha định kỳ"],
        ["Ghế nha khoa tích hợp tay khoan cao tốc", "Máy cấy ghép Implant", "Máy quét dấu răng 3D kỹ thuật số"],
        "Bệnh viện Răng Hàm Mặt, phòng khám nha khoa thẩm mỹ tư nhân.",
        ["Tư thế ngồi cúi đầu liên tục dễ dẫn đến thoái hóa đốt sống cổ và đau lưng", "Khách hàng thường mang tâm lý sợ hãi tiếng máy khoan nha khoa"],
        ["Sự khéo léo tỉ mỉ đôi bàn tay trong khoang miệng hẹp", "Thẩm mỹ nụ cười và khớp cắn", "Kỹ năng xoa dịu tâm lý lo âu của khách"],
        ["Sinh học", "Mỹ thuật", "Hóa học"],
        [{"level": "Đại học", "description": "Bác sĩ Răng Hàm Mặt (Đào tạo 6 năm tại ĐH Y Hà Nội, ĐH Y Dược TP.HCM)"}],
        "Nhìn vào gương đếm xem hàm răng của mình có bao nhiêu chiếc răng và chiếc răng nào đang mọc lệch.",
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80", "Nha sĩ thăm khám răng miệng cho bệnh nhân trên ghế nha khoa"
    ))
    c.append(make_c(
        "bac-si-y-hoc-co-truyen", "Bác sĩ Y học cổ truyền (Traditional Medicine Physician)", "Traditional Chinese & Vietnamese Medicine Physician",
        ["Bác sĩ đông y", "Bác sĩ châm cứu bấm huyệt"], g8, c8, l8, ["I", "S", "R"],
        "Bắt mạch, chẩn đoán âm dương khí huyết, châm cứu thông kinh lạc và kê các bài thuốc thang thảo mộc chữa đau nhức xương khớp mạn tính.",
        ["Bắt mạch ở cổ tay và xem sắc thái lưỡi (Thiệt chẩn)", "Châm kim cứu huyệt đạo điều trị đau thần kinh tọa, liệt mặt", "Kê đơn thuốc bắc, thuốc nam bốc theo thang sắc uống"],
        ["Phác đồ châm cứu phục hồi chức năng kinh lạc", "Đơn thuốc thang thảo dược gia giảm"],
        ["Kim châm cứu vô khuẩn dùng một lần", "Máy điện châm đa năng", "Cân thuốc đông y", "Cứu ngải đoạn"],
        "Bệnh viện Y học cổ truyền, khoa đông y bệnh viện đa khoa, phòng chẩn trị đông y.",
        ["Học thuộc hàng trăm bài thuốc cổ phương và vị trí huyệt đạo phức tạp", "Mùi khói ngải cứu và mùi thảo dược sắc thuốc bao quanh cả ngày"],
        ["Cảm nhận xúc giác tinh tế khi bắt mạch", "Kiến thức lý luận y học phương Đông sâu sắc", "Thao tác châm cứu chuẩn xác không gây đau"],
        ["Sinh học", "Văn hóa học", "Ngữ văn (Chữ Hán - Nôm y học)"],
        [{"level": "Đại học", "description": "Bác sĩ Y học cổ truyền (Đào tạo 6 năm tại Học viện Y Dược học Cổ truyền VN, ĐH Y Dược)"}],
        "Tìm hiểu về danh y Tuệ Tĩnh với tư tưởng bất hủ: 'Nam dược trị Nam nhân' (Thuốc nam chữa bệnh người Việt Nam).",
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80", "Bác sĩ bắt mạch và bốc các vị thuốc thảo mộc đông y"
    ))
    c.append(make_c(
        "ky-thuat-vien-phuc-hoi-chuc-nang", "Kỹ thuật viên Phục hồi chức năng (Physiotherapist)", "Physical Therapist & Rehabilitation Specialist",
        ["Kỹ thuật viên vật lý trị liệu", "Physiotherapist"], g8, c8, l8, ["S", "R"],
        "Hướng dẫn tập vận động, dùng sóng ngắn, siêu âm trị liệu giúp người sau đột quỵ, tai nạn đi lại và tự sinh hoạt bình thường.",
        ["Đánh giá tầm vận động khớp và sức mạnh cơ bắp của bệnh nhân", "Hướng dẫn bệnh nhân tập đi trong thanh song song và tập đứng thăng bằng", "Chiếu đèn hồng ngoại, siêu âm trị liệu giảm đau cứng khớp"],
        ["Kế hoạch can thiệp tập phục hồi chức năng từng giai đoạn", "Bệnh nhân lấy lại khả năng tự đi lại và sinh hoạt"],
        ["Thanh song song tập đi", "Bóng tập thăng bằng Bobath", "Máy điện xung kích thích thần kinh", "Gương soi tập dáng đi"],
        "Khoa phục hồi chức năng bệnh viện, trung tâm chỉnh hình, viện dưỡng lão.",
        ["Cần nhiều sức lực thể chất để nâng đỡ, dìu bệnh nhân tập vận động", "Đòi hỏi lòng kiên nhẫn vô bờ vì sự tiến bộ của bệnh nhân diễn ra từng chút một"],
        ["Kỹ năng xoa bóp và kéo giãn cơ xương khớp", "Khả năng động viên khích lệ tinh thần người bệnh", "Hiểu biết về cơ sinh học vận động"],
        ["Sinh học", "Vật lý"],
        [{"level": "Đại học", "description": "Cử nhân Kỹ thuật Phục hồi chức năng (4 năm)"}, {"level": "Cao đẳng", "description": "Cao đẳng Vật lý trị liệu & Phục hồi chức năng"}],
        "Thử đứng một chân nhắm mắt lại trong 30 giây để kiểm tra khả năng giữ thăng bằng của não bộ.",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", "Kỹ thuật viên vật lý trị liệu hướng dẫn người bệnh tập vận động"
    ))
    c.append(make_c(
        "bac-si-nhi-khoa", "Bác sĩ Nhi khoa (Pediatrician)", "Pediatrician",
        ["Bác sĩ nhi", "Pediatric Specialist"], g8, c8, l8, ["S", "I"],
        "Thăm khám, chữa trị các bệnh viêm họng, sốt xuất huyết, viêm phế quản và tư vấn dinh dưỡng, tiêm chủng cho trẻ sơ sinh và trẻ nhỏ.",
        ["Thăm khám nhẹ nhàng, làm bạn với trẻ để bé không quấy khóc", "Chẩn đoán chính xác và tính toán liều lượng thuốc nghiêm ngặt theo cân nặng của bé", "Hướng dẫn cha mẹ cách chăm sóc hạ sốt đúng cách tại nhà"],
        ["Bệnh án nhi khoa an toàn", "Phác đồ điều trị hạn chế lạm dụng kháng sinh cho trẻ"],
        ["Ống nghe y tế đầu nhỏ nhi khoa", "Nhiệt kế đo trán hồng ngoại", "Bảng theo dõi biểu đồ tăng trưởng WHO"],
        "Bệnh viện Nhi Trung ương, khoa nhi bệnh viện đa khoa, phòng khám nhi.",
        ["Trẻ nhỏ chưa biết nói triệu chứng đau ở đâu nên chẩn đoán đòi hỏi bác sĩ cực kỳ tinh ý", "Tiếng trẻ quấy khóc liên tục và áp lực tâm lý từ sự sốt ruột của cha mẹ"],
        ["Tình yêu thương con trẻ sâu sắc", "Khả năng quan sát tinh tế các dấu hiệu lâm sàng sớm", "Kỹ năng giao tiếp trấn an phụ huynh"],
        ["Sinh học", "Tâm lý học", "Hóa học"],
        [{"level": "Đại học", "description": "Bác sĩ Đa khoa (6 năm) + Bác sĩ Chuyên khoa Nhi (3 năm)"}],
        "Quan sát cách bác sĩ nhi dỗ dành một em bé trước khi đặt ống nghe vào ngực bé.",
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80", "Bác sĩ nhi khoa mỉm cười thăm khám cho em bé sơ sinh"
    ))
    c.append(make_c(
        "ky-thuat-vien-xet-nghiem-y-hoc", "Kỹ thuật viên Xét nghiệm y học (Medical Laboratory Technologist)", "Medical Laboratory Technologist",
        ["Kỹ thuật viên xét nghiệm", "Lab Tech y khoa"], g8, c8, l8, ["C", "I", "R"],
        "Lấy mẫu máu, soi kính hiển vi và vận hành các máy xét nghiệm huyết học, sinh hóa tự động hỗ trợ bác sĩ chẩn đoán chính xác bệnh.",
        ["Lấy máu tĩnh mạch không đau cho bệnh nhân", "Nạp mẫu vào hệ thống máy phân tích sinh hóa tự động", "Soi kính hiển vi đếm tế bào bạch cầu và phát hiện ký sinh trùng sốt rét"],
        ["Phiếu kết quả xét nghiệm sinh hóa máu chuẩn xác", "Biên bản kiểm tra chất lượng nội kiểm hàng ngày"],
        ["Máy xét nghiệm sinh hóa tự động", "Máy phân tích huyết học 24 thông số", "Kính hiển vi quang học độ phóng đại 1000x"],
        "Phòng xét nghiệm trung tâm bệnh viện, trung tâm y tế dự phòng.",
        ["Tiếp xúc hàng ngày với mẫu máu và dịch bệnh phẩm có nguy cơ lây nhiễm", "Áp lực trả kết quả xét nghiệm cấp cứu trong vòng 30 phút"],
        ["Thao tác phòng xét nghiệm cẩn trọng, tỉ mỉ", "Tuân thủ an toàn sinh học cấp 2", "Kỹ năng đọc tiêu bản tế bào"],
        ["Hóa học", "Sinh học", "Tin học"],
        [{"level": "Đại học", "description": "Cử nhân Kỹ thuật Xét nghiệm y học (4 năm tại ĐH Y)"}, {"level": "Cao đẳng", "description": "Cao đẳng Kỹ thuật Xét nghiệm"}],
        "Tìm hiểu về 4 nhóm máu cơ bản A, B, AB, O và tại sao phải thử phản ứng chéo trước khi truyền máu.",
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80", "Kỹ thuật viên xét nghiệm soi tiêu bản máu dưới kính hiển vi"
    ))
    c.append(make_c(
        "chuyen-vien-dinh-duong-lam-sang", "Chuyên viên Dinh dưỡng lâm sàng (Clinical Dietitian / Nutritionist)", "Clinical Dietitian & Nutritionist",
        ["Chuyên gia dinh dưỡng bệnh viện", "Dietitian"], g8, c8, l8, ["I", "S", "C"],
        "Thiết kế thực đơn dinh dưỡng trị liệu cho bệnh nhân tiểu đường, suy thận, sau phẫu thuật và tính toán lượng calo ăn qua sonde dạ dày.",
        ["Đánh giá tình trạng dinh dưỡng (BMI, nếp gấp da, albumin máu) của bệnh nhân", "Lên thực đơn ăn bệnh lý cá nhân hóa theo từng gram đạm, béo, đường", "Tư vấn dinh dưỡng phục hồi sức khỏe cho người bệnh trước khi xuất viện"],
        ["Thực đơn dinh dưỡng bệnh lý chuyên biệt", "Hồ sơ theo dõi cải thiện cân nặng bệnh nhân"],
        ["Phần mềm tính toán khẩu phần dinh dưỡng", "Thước đo nếp gấp da caliper", "Cân đo phân tích thành phần cơ thể InBody"],
        "Khoa dinh dưỡng bệnh viện, viện dưỡng lão, trung tâm thể thao chuyên nghiệp.",
        ["Phải thuyết phục bệnh nhân tuân thủ chế độ ăn kiêng thường nhạt nhẽo và khó ăn", "Kiến thức tương tác giữa thức ăn và thuốc điều trị đòi hỏi cập nhật liên tục"],
        ["Khoa học dinh dưỡng và hóa sinh chuyển hóa", "Kỹ năng tư vấn đồng hành cùng người bệnh", "Thiết kế thực đơn cân bằng calo"],
        ["Sinh học", "Hóa học", "Toán học"],
        [{"level": "Đại học", "description": "Cử nhân Dinh dưỡng (ĐH Y Hà Nội, ĐH Y Dược TP.HCM)"}],
        "Thử tính chỉ số khối cơ thể (BMI = Cân nặng / Chiều cao bình phương) của mình xem đang ở mức gầy, chuẩn hay thừa cân.",
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80", "Chuyên viên dinh dưỡng tư vấn chế độ ăn uống khoa học"
    ))

    # 9. DƯỢC PHẨM VÀ CÔNG NGHỆ SINH HỌC
    g9, c9, l9 = "duoc-sinh-hoc", "DuocHoc", "Dược phẩm và công nghệ sinh học"
    c.append(make_c(
        "duoc-si-lam-sang-benh-vien", "Dược sĩ lâm sàng bệnh viện (Clinical Pharmacist)", "Hospital Clinical Pharmacist",
        ["Dược sĩ lâm sàng", "Clinical Pharmacist"], g9, c9, l9, ["I", "S", "C"],
        "Rà soát đơn thuốc của bác sĩ, kiểm tra tương tác thuốc, chỉnh liều kháng sinh cho bệnh nhân suy gan thận nhằm tránh ngộ độc thuốc.",
        ["Hội chẩn cùng bác sĩ tại giường bệnh về phác đồ kháng sinh phức tạp", "Theo dõi nồng độ thuốc trong máu (TDM) để hiệu chỉnh liều dùng", "Báo cáo các phản ứng có hại của thuốc (ADR) lên cơ quan quản lý dược"],
        ["Biên bản tư vấn sử dụng thuốc an toàn", "Báo cáo giám sát tương tác thuốc toàn viện"],
        ["Cơ sở dữ liệu dược thư quốc gia", "Phần mềm kiểm tra tương tác thuốc Lexicomp / UpToDate"],
        "Bệnh viện đa khoa, trung tâm dược lâm sàng bệnh viện tuyến trên.",
        ["Phải có dũng khí phản biện y lệnh của bác sĩ khi phát hiện kê đơn nguy hiểm", "Khối lượng tên thuốc và hoạt chất khổng lồ"],
        ["Dược lý học và dược động học lâm sàng", "Kỹ năng phân tích phản biện đơn thuốc", "Giao tiếp hợp tác chuyên môn liên ngành y - dược"],
        ["Hóa học", "Sinh học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Dược sĩ Đại học (5 năm tại ĐH Dược Hà Nội, ĐH Y Dược TP.HCM) chuyên ngành Dược lâm sàng"}],
        "Đọc tờ hướng dẫn sử dụng một hộp thuốc hạ sốt paracetamol để xem phần chống chỉ định và liều dùng tối đa trong ngày.",
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80", "Dược sĩ kiểm tra đơn thuốc và dược lý tại phòng dược"
    ))
    c.append(make_c(
        "duoc-si-nghien-cuu-phat-trien-rd", "Dược sĩ R&D bào chế thuốc (Pharmaceutical Formulation R&D Scientist)", "Pharmaceutical Formulation Scientist",
        ["Kỹ sư bào chế thuốc", "R&D Dược phẩm"], g9, c9, l9, ["I", "R"],
        "Nghiên cứu công thức tá dược, độ rã của viên nén, phát triển thuốc giải phóng kéo dài và thử nghiệm độ ổn định theo tiêu chuẩn GMP.",
        ["Thử nghiệm phối trộn các tỷ lệ tá dược dính, tá dược rã trong viên nén", "Chạy máy dập viên và đo độ hòa tan của hoạt chất trong môi trường giả lập dạ dày", "Nghiên cứu theo dõi độ ổn định của thuốc ở nhiệt độ và độ ẩm lão hóa cấp tốc"],
        ["Hồ sơ đăng ký công thức bào chế thuốc mới", "Báo cáo nghiên cứu độ hòa tan so sánh (Bioequivalence)"],
        ["Máy dập viên nén quay tròn", "Máy thử độ hòa tan 8 giỏ", "Sắc ký lỏng hiệu năng cao HPLC"],
        "Viện nghiên cứu dược phẩm, phòng lab R&D các nhà máy dược (DHG Pharma, Dược Hậu Giang, Traphaco, Imexpharm).",
        ["Nhiều mẻ dập viên thử nghiệm bị vỡ nứt hoặc không tan đòi hỏi thử lại từ đầu", "Tuân thủ quy chuẩn phòng thí nghiệm GLP vô cùng khắt khe"],
        ["Hóa phân tích và kỹ thuật bào chế", "Vận hành máy đo quang phổ và sắc ký", "Tư duy sáng tạo công thức"],
        ["Hóa học", "Toán học", "Vật lý"],
        [{"level": "Đại học", "description": "Dược sĩ Đại học chuyên ngành Bào chế hoặc Hóa dược"}],
        "Thử thả một viên sủi C vào cốc nước xem khí CO2 sủi bọt đẩy viên thuốc tan nhanh như thế nào.",
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80", "Nhà khoa học dược phẩm chiết tách mẫu dung dịch trong phòng lab"
    ))
    c.append(make_c(
        "ky-su-cong-nghe-sinh-hoc-y-duoc", "Kỹ sư Công nghệ sinh học Y dược (Medical Biotechnologist)", "Biopharmaceutical Research Scientist",
        ["Kỹ sư công nghệ sinh học", "Biotech Engineer"], g9, c9, l9, ["I", "R"],
        "Ứng dụng kỹ thuật tái tổ hợp ADN, nuôi cấy tế bào động vật để sản xuất vaccine thế hệ mới, kháng thể đơn dòng và kit xét nghiệm nhanh.",
        ["Tách chiết tinh sạch ADN/ARN và khuếch đại gen bằng máy PCR", "Nuôi cấy dòng tế bào biểu hiện protein tái tổ hợp trong bình phản ứng sinh học", "Kiểm tra độ tinh khiết của kháng thể bằng điện di gel"],
        ["Kháng thể tái tổ hợp tinh khiết", "Kit xét nghiệm chẩn đoán phân tử"],
        ["Máy Real-time PCR", "Tủ cấy vi sinh an toàn sinh học cấp 2", "Hệ thống sắc ký cột FPLC"],
        "Viện Vệ sinh dịch tễ, công ty sản xuất vaccine sinh phẩm y tế (Vabiotech, Nanogen).",
        ["Mẫu tế bào nuôi cấy rất dễ bị nhiễm vi khuẩn nấm mốc làm hỏng cả mẻ nuôi hàng tháng", "Làm việc với các tác nhân vi sinh vật đòi hỏi khử trùng nghiêm ngặt"],
        ["Sinh học phân tử và di truyền", "Kỹ thuật nuôi cấy tế bào vô trùng", "Phân tích số liệu tin sinh học (Bioinformatics)"],
        ["Sinh học", "Hóa học", "Tin học"],
        [{"level": "Đại học", "description": "Kỹ sư Công nghệ sinh học (ĐH Khoa học Tự nhiên, ĐH Bách khoa)"}],
        "Tìm hiểu về chiếc que test nhanh COVID-19: hai vạch đỏ xuất hiện dựa trên nguyên lý bắt cặp kháng nguyên - kháng thể thế nào.",
        "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80", "Kỹ sư công nghệ sinh học thao tác micropipet trong tủ cấy vô trùng"
    ))
    c.append(make_c(
        "chuyen-vien-kiem-nghiem-duoc-pham", "Chuyên viên Kiểm nghiệm thuốc và mỹ phẩm (Quality Control - QC Chemist)", "Pharmaceutical Quality Control Chemist",
        ["Kiểm nghiệm viên dược", "QC Dược phẩm"], g9, c9, l9, ["C", "I"],
        "Sử dụng máy sắc ký lỏng HPLC để định lượng hàm lượng hoạt chất, kiểm tra tạp chất liên quan, đảm bảo từng viên thuốc xuất xưởng đều đạt chuẩn.",
        ["Chuẩn bị dung dịch mẫu chuẩn và mẫu thử theo chuyên luận Dược điển", "Chạy sắc ký lỏng HPLC và tính toán diện tích pic định lượng", "Thử nghiệm giới hạn vi sinh vật và độ vô khuẩn của thuốc tiêm truyền"],
        ["Phiếu kiểm nghiệm chất lượng sản phẩm (CoA)", "Hồ sơ thẩm định phương pháp phân tích"],
        ["Máy sắc ký HPLC / GC", "Máy đo quang phổ UV-Vis", "Cân phân tích 4 số lẻ", "Tủ ấm nuôi cấy vi sinh"],
        "Trung tâm Kiểm nghiệm thuốc - mỹ phẩm, phòng QC nhà máy dược đạt chuẩn WHO-GMP / EU-GMP.",
        ["Công việc đòi hỏi độ chính xác tuyệt đối đến từng microgam dung dịch", "Phải từ chối xuất xưởng mẻ thuốc nếu hàm lượng không nằm trong khoảng cho phép"],
        ["Kỹ thuật hóa phân tích định lượng", "Hiểu biết sâu về Dược điển Việt Nam và quốc tế", "Tính trung thực và tỉ mỉ"],
        ["Hóa học", "Toán học", "Sinh học"],
        [{"level": "Đại học", "description": "Dược sĩ Đại học hoặc Cử nhân Hóa học / Kỹ thuật Hóa học"}, {"level": "Cao đẳng", "description": "Cao đẳng Kiểm nghiệm thuốc"}],
        "Tìm hiểu chữ số 'GMP' in trên vỏ hộp thuốc có ý nghĩa gì đối với chất lượng thuốc.",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80", "Kiểm nghiệm viên dược phẩm vận hành hệ thống sắc ký lỏng HPLC"
    ))
    c.append(make_c(
        "chuyen-vien-dang-ky-thuoc-regulatory", "Chuyên viên Đăng ký lưu hành Dược phẩm (Regulatory Affairs Specialist - RA)", "Pharmaceutical Regulatory Affairs Specialist",
        ["Chuyên viên RA dược", "Regulatory Affairs"], g9, c9, l9, ["C", "E", "I"],
        "Soạn thảo hồ sơ kỹ thuật, làm việc với Cục Quản lý Dược để xin cấp số đăng ký lưu hành cho thuốc mới sản xuất hoặc nhập khẩu.",
        ["Biên dịch và hoàn thiện hồ sơ kỹ thuật chung ASEAN (ACTD / ICH CTD)", "Giải trình các câu hỏi thẩm định chuyên môn của chuyên gia Cục Quản lý Dược", "Theo dõi cập nhật các thông tư, quy định pháp luật dược mới nhất"],
        ["Hồ sơ đăng ký lưu hành thuốc hoàn chỉnh", "Giấy phép lưu hành sản phẩm (Visa thuốc)"],
        ["Hệ thống dịch vụ công trực tuyến Cục Quản lý Dược", "Hồ sơ ACTD điện tử", "Phần mềm quản lý tài liệu pháp lý"],
        "Văn phòng đại diện các hãng dược đa quốc gia (Pfizer, AstraZeneca, Novartis, Sanofi).",
        ["Hồ sơ dày hàng nghìn trang đòi hỏi sự cẩn trọng rà soát từng câu từ", "Thời gian chờ cấp phép kéo dài từ 1 đến 2 năm đòi hỏi sự bền bỉ theo đuổi"],
        ["Nắm vững luật dược và quy chế đăng ký thuốc", "Kỹ năng viết và biên tập hồ sơ kỹ thuật tiếng Anh", "Khả năng giao tiếp giải trình thuyết phục"],
        ["Tiếng Anh", "Ngữ văn", "Hóa học", "Giáo dục kinh tế và pháp luật"],
        [{"level": "Đại học", "description": "Dược sĩ Đại học (Bắt buộc theo quy định ngành dược)"}],
        "Lật mặt sau hộp thuốc xem dòng chữ 'Số đăng ký: VD-xxxxx-xx' và tìm hiểu ý nghĩa của các chữ cái đó.",
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80", "Chuyên viên thẩm định hồ sơ kỹ thuật đăng ký lưu hành dược phẩm"
    ))
    c.append(make_c(
        "trinh-duoc-vien-benh-vien-etc", "Trình dược viên bệnh viện (Medical Representative - ETC)", "Hospital Medical Representative (ETC)",
        ["Trình dược viên ETC", "Medical Rep"], g9, c9, l9, ["E", "S", "I"],
        "Giới thiệu các nghiên cứu lâm sàng, hiệu quả điều trị của dòng thuốc mới đến các bác sĩ trưởng khoa và dược sĩ bệnh viện.",
        ["Thuyết trình về cơ chế tác dụng và bằng chứng thử nghiệm lâm sàng của thuốc", "Tham gia các hội nghị khoa học y dược chuyên ngành để kết nối với bác sĩ", "Thu thập phản hồi về hiệu quả và tác dụng phụ của thuốc trong quá trình điều trị thực tế"],
        ["Kế hoạch tiếp cận khoa phòng bệnh viện", "Báo cáo doanh số và độ bao phủ thuốc theo địa bàn"],
        ["Tài liệu nghiên cứu khoa học song ngữ (Detailing Aid)", "Phần mềm quản lý quan hệ khách hàng CRM Veeva"],
        "Các bệnh viện đa khoa, phòng khám chuyên khoa, di chuyển liên tục.",
        ["Bác sĩ rất bận rộn nên thời gian tiếp cận trao đổi thường chỉ có 3-5 phút", "Áp lực doanh số tháng và cạnh tranh khốc liệt giữa các hãng dược"],
        ["Kiến thức y dược chuyên sâu để trao đổi bình đẳng với bác sĩ", "Kỹ năng giao tiếp và thuyết trình tự tin", "Tác phong chuyên nghiệp, lịch thiệp và kiên trì"],
        ["Sinh học", "Hóa học", "Tiếng Anh", "Ngữ văn"],
        [{"level": "Đại học", "description": "Dược sĩ Đại học hoặc Bác sĩ Đa khoa"}, {"level": "Cao đẳng", "description": "Cao đẳng Dược"}],
        "Tìm hiểu sự khác nhau giữa thuốc kê đơn ETC (phải có đơn bác sĩ) và thuốc không kê đơn OTC (mua tự do ở nhà thuốc).",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", "Trình dược viên trao đổi tài liệu nghiên cứu y khoa cùng bác sĩ"
    ))
    c.append(make_c(
        "ky-su-van-hanh-len-men-sinh-hoc", "Kỹ sư Vận hành lên men sinh học (Bioprocess Fermentation Engineer)", "Bioprocess Fermentation Engineer",
        ["Kỹ sư lên men", "Bioprocess Engineer"], g9, c9, l9, ["R", "I"],
        "Điều khiển nồi lên men vi sinh hàng chục nghìn lít sản xuất kháng sinh penicillin, men vi sinh probiotic và enzyme công nghiệp.",
        ["Kiểm soát nhiệt độ, tốc độ khuấy, lưu lượng sục khí oxy và pH trong bồn lên men", "Lấy mẫu định kỳ đo mật độ quang học OD để theo dõi tốc độ nhân đôi tế bào", "Vận hành hệ thống lọc màng và ly tâm tách sinh khối sau lên men"],
        ["Nhật ký mẻ lên men công nghiệp đạt hiệu suất cao", "Quy trình thanh trùng hệ thống tự động SIP / CIP"],
        ["Bồn lên men Bioreactor công nghiệp", "Máy đo nồng độ oxy hòa tan DO", "Máy ly tâm lạnh liên tục"],
        "Nhà máy sản xuất men vi sinh, nhà máy dược sinh phẩm, xí nghiệp enzyme.",
        ["Ca trực theo dõi mẻ lên men 24/24 giờ vì vi sinh vật phát triển liên tục", "Nếu nhiễm tạp một con khuẩn lạ sẽ phải hủy bỏ cả bồn lên men hàng trăm triệu"],
        ["Kỹ thuật lên men và vi sinh vật học ứng dụng", "Vận hành hệ thống điều khiển tự động SCADA", "Khắc phục sự cố nhiễm tạp vi sinh"],
        ["Sinh học", "Hóa học", "Vật lý"],
        [{"level": "Đại học", "description": "Kỹ sư Công nghệ sinh học, Kỹ thuật Hóa học hoặc Công nghệ thực phẩm"}],
        "Tìm hiểu cách men vi sinh trong sữa chua lên men biến sữa tươi thành sữa chua thơm ngon.",
        "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80", "Kỹ sư vận hành hệ thống bồn lên men sinh học công nghiệp"
    ))
    c.append(make_c(
        "chuyen-vien-thu-nghiem-lam-sang-cra", "Chuyên viên Giám sát thử nghiệm lâm sàng (Clinical Research Associate - CRA)", "Clinical Research Associate (CRA)",
        ["Giám sát thử nghiệm lâm sàng", "CRA Dược"], g9, c9, l9, ["C", "I", "S"],
        "Đến các bệnh viện kiểm tra hồ sơ bệnh nhân tham gia thử nghiệm thuốc mới, đảm bảo an toàn đạo đức và dữ liệu trung thực tuyệt đối.",
        ["Kiểm tra chữ ký trên bản cam kết đồng thuận tự nguyện của người bệnh (Informed Consent)", "Đối chiếu số liệu bệnh án giấy với hệ thống phần mềm thử nghiệm lâm sàng (eCRF)", "Báo cáo ngay lập tức các biến cố bất lợi nghiêm trọng (SAE) cho ủy ban đạo đức"],
        ["Báo cáo giám sát hiện trường (Monitoring Visit Report)", "Hồ sơ thử nghiệm thuốc lâm sàng đạt chuẩn GCP"],
        ["Phần mềm thu thập dữ liệu lâm sàng Medidata Rave", "Hồ sơ thử nghiệm lâm sàng Investigator Site File"],
        "Tổ chức nghiên cứu thử nghiệm lâm sàng quốc tế (CRO) như IQVIA, PPD; các bệnh viện nghiên cứu lớn.",
        ["Thường xuyên đi máy bay công tác giữa các bệnh viện trên toàn quốc", "Trách nhiệm đạo đức bảo vệ an toàn sức khỏe con người trong nghiên cứu"],
        ["Nắm vững hướng dẫn thực hành lâm sàng tốt ICH-GCP", "Kỹ năng kiểm tra đối chiếu dữ liệu tỉ mỉ", "Tiếng Anh y khoa thành thạo"],
        ["Sinh học", "Tiếng Anh", "Giáo dục công dân / Đạo đức"],
        [{"level": "Đại học", "description": "Dược sĩ Đại học, Bác sĩ Y khoa hoặc Cử nhân Công nghệ sinh học"}],
        "Tìm hiểu về 3 giai đoạn thử nghiệm lâm sàng (Phase 1, 2, 3) trên người trước khi một loại vaccine được tiêm đại trà.",
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80", "Chuyên viên giám sát đối chiếu hồ sơ thử nghiệm lâm sàng tại bệnh viện"
    ))
    c.append(make_c(
        "giam-sat-dam-bao-chat-luong-gmp", "Giám sát Đảm bảo chất lượng nhà máy dược (Quality Assurance - QA Specialist)", "Pharmaceutical QA Compliance Specialist",
        ["Chuyên viên QA dược", "QA Specialist"], g9, c9, l9, ["C", "I"],
        "Xây dựng quy trình chuẩn SOP, thẩm định hệ thống xử lý không khí phòng sạch HVAC, kiểm soát thay đổi để duy trì chứng nhận GMP.",
        ["Thẩm định hệ thống nước tinh khiết pha tiêm WFI và hệ thống khí nén sạch", "Điều tra các trường hợp sản phẩm không đạt tiêu chuẩn (OOS / OOT)", "Đón tiếp và chuẩn bị hồ sơ cho các đợt thanh tra định kỳ của Cục Quản lý Dược"],
        ["Quy trình thao tác chuẩn SOP", "Hồ sơ lô sản xuất (Batch Record) đã thẩm định phê duyệt"],
        ["Phần mềm quản trị chất lượng QMS", "Máy đếm hạt bụi phòng sạch", "Hệ thống tài liệu kiểm soát GMP"],
        "Nhà máy sản xuất dược phẩm đạt chuẩn GMP-WHO hoặc EU-GMP.",
        ["Phải nghiêm khắc yêu cầu đình chỉ sản xuất nếu phát hiện quy trình có nguy cơ gây nhiễm chéo", "Khối lượng thủ tục giấy tờ hồ sơ quy chuẩn rất lớn"],
        ["Hiểu biết sâu sắc về nguyên tắc thực hành tốt sản xuất thuốc GMP", "Tư duy quản trị rủi ro chất lượng (ICH Q9)", "Kỹ năng viết quy trình rõ ràng"],
        ["Hóa học", "Sinh học", "Giáo dục kinh tế và pháp luật"],
        [{"level": "Đại học", "description": "Dược sĩ Đại học hoặc Kỹ sư Kỹ thuật Hóa học"}],
        "Tìm hiểu tại sao hệ thống lọc khí HEPA trong nhà máy dược có thể chặn được cả vi khuẩn lơ lửng trong không khí.",
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80", "Chuyên viên QA kiểm tra quy trình đóng gói thuốc trong phòng sạch"
    ))
    c.append(make_c(
        "ky-su-te-bao-goc-va-lieu-phap-gen", "Kỹ sư Tế bào gốc và Liệu pháp gen (Stem Cell & Gene Therapy Specialist)", "Stem Cell & Regenerative Medicine Specialist",
        ["Chuyên gia tế bào gốc", "Cell Therapy Specialist"], g9, c9, l9, ["I", "R"],
        "Phân lập, nuôi cấy và bảo quản lạnh sâu tế bào gốc từ cuống rốn, tủy xương phục vụ điều trị thoái hóa khớp và các bệnh tự miễn nan y.",
        ["Phân lập tế bào gốc trung mô từ mô dây rốn trong điều kiện vô trùng tuyệt đối", "Đánh giá khả năng biệt hóa thành tế bào sụn, tế bào xương và mỡ", "Bảo quản tế bào trong bình nitơ lỏng âm 196 độ C có bổ sung chất chống đông"],
        ["Mẫu tế bào gốc đạt chuẩn cấy ghép lâm sàng", "Hồ sơ đánh giá kiểu hình tế bào bằng Flow Cytometry"],
        ["Máy phân tích tế bào dòng chảy Flow Cytometer", "Bình lưu trữ nitơ lỏng -196°C", "Kính hiển vi huỳnh quang"],
        "Ngân hàng tế bào gốc quốc gia, viện nghiên cứu tế bào gốc bệnh viện lớn.",
        ["Mẫu tế bào gốc cực kỳ quý giá, không được phép để xảy ra bất kỳ sai sót nào trong bảo quản", "Lĩnh vực y học tái tạo đòi hỏi học tập và nghiên cứu công nghệ tiên tiến trên thế giới liên tục"],
        ["Sinh học tế bào và di truyền phân tử", "Kỹ thuật thao tác vô trùng siêu sạch", "Hiểu biết y đức trong trị liệu tế bào"],
        ["Sinh học", "Hóa học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Công nghệ sinh học hoặc Bác sĩ Đa khoa có đào tạo chuyên sâu về Tế bào gốc"}],
        "Tìm hiểu tại sao tế bào gốc cuống rốn của em bé sơ sinh lại được ví như 'bảo hiểm sinh học' cho tương lai.",
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80", "Kỹ sư tế bào gốc thao tác trong phòng lạnh bảo quản sinh học"
    ))

    # 10. TÀI CHÍNH, NGÂN HÀNG VÀ FINTECH
    g10, c10, l10 = "tai-chinh-ngan-hang", "KinhTe", "Tài chính, ngân hàng và fintech"
    c.append(make_c(
        "giao-dich-vien-ngan-hang", "Giao dịch viên Ngân hàng (Bank Teller / Customer Service Officer)", "Bank Teller & Customer Service Specialist",
        ["Giao dịch viên", "Bank Teller"], g10, c10, l10, ["C", "E", "S"],
        "Tiếp đón khách hàng tại quầy, thực hiện nộp rút tiền mặt, mở tài khoản tiết kiệm, chuyển tiền quốc tế và cảnh giác lừa đảo tài chính.",
        ["Kiểm đếm và phân loại tiền thật - tiền giả qua máy soi chuyên dụng", "Thực hiện lệnh gửi tiết kiệm, mở thẻ tín dụng và đăng ký ngân hàng số", "Nhận diện các dấu hiệu khách hàng bị đe dọa lừa đảo chuyển tiền để kịp thời ngăn chặn"],
        ["Chứng từ giao dịch ngân hàng khớp số liệu", "Báo cáo cân bằng tiền mặt cuối ngày không chênh lệch một đồng"],
        ["Phần mềm lõi ngân hàng Core Banking", "Máy đếm tiền phát hiện tiền giả", "Máy quét căn cước công dân gắn chip"],
        "Quầy giao dịch chi nhánh ngân hàng (Vietcombank, BIDV, Techcombank, MBBank).",
        ["Áp lực cân đối tiền mặt cuối ngày, nếu thiếu hụt giao dịch viên phải tự bỏ tiền túi đền", "Luôn phải giữ nụ cười và tác phong chuẩn mực dù gặp khách hàng khó tính"],
        ["Kỹ năng tính toán cẩn trọng, tỉ mỉ", "Giao tiếp lịch thiệp, kỹ năng lắng nghe thấu cảm", "Nhạy bén phát hiện rủi ro gian lận"],
        ["Toán học", "Giáo dục kinh tế và pháp luật", "Ngữ văn", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Tài chính - Ngân hàng, Kế toán hoặc Kinh tế đối ngoại"}, {"level": "Cao đẳng", "description": "Cao đẳng Tài chính Ngân hàng"}],
        "Cùng người thân ra quầy ngân hàng giao dịch và quan sát các bước giao dịch viên in giấy nộp tiền và đếm tiền.",
        "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80", "Giao dịch viên ngân hàng niềm nở đón tiếp khách hàng tại quầy",
        sim_id="task-ngan-hang"
    ))
    c.append(make_c(
        "chuyen-vien-quan-he-khach-hang-doanh-nghiep", "Chuyên viên Quan hệ khách hàng doanh nghiệp (Corporate Relationship Manager - RM)", "Corporate Banking Relationship Manager",
        ["Chuyên viên tín dụng doanh nghiệp", "Corporate RM"], g10, c10, l10, ["E", "C", "I"],
        "Thẩm định báo cáo tài chính của công ty, đề xuất cấp hạn mức vay vốn hàng chục tỷ và tư vấn dịch vụ bảo lãnh thanh toán quốc tế.",
        ["Phân tích lưu chuyển tiền tệ, doanh thu và biên lợi nhuận của doanh nghiệp xin vay", "Khảo sát thực địa kho bãi, nhà máy và tài sản thế chấp", "Lập tờ trình thẩm định tín dụng trình hội đồng phê duyệt khoản vay"],
        ["Tờ trình phê duyệt hạn mức tín dụng doanh nghiệp", "Hợp đồng tín dụng và hợp đồng thế chấp tài sản"],
        ["Hệ thống chấm điểm tín dụng nội bộ", "Phần mềm phân tích tài chính Excel", "Cổng thông tin tín dụng quốc gia CIC"],
        "Phòng khách hàng doanh nghiệp ngân hàng, đi khảo sát thực tế nhà xưởng khách hàng.",
        ["Áp lực chỉ tiêu doanh số giải ngân vốn vay hàng tháng", "Trách nhiệm pháp lý nặng nề nếu doanh nghiệp mất khả năng trả nợ thành nợ xấu"],
        ["Kỹ năng đọc hiểu và phân tích báo cáo tài chính", "Kỹ năng đàm phán thương mại cấp cao", "Đánh giá và kiểm soát rủi ro tín dụng"],
        ["Toán học", "Giáo dục kinh tế và pháp luật", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Tài chính Doanh nghiệp, Ngân hàng hoặc Kinh tế đối ngoại"}],
        "Đọc một bản tin kinh tế về một doanh nghiệp dệt may vay vốn mở rộng xưởng sản xuất để hiểu lý do ngân hàng cho vay.",
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80", "Chuyên viên quan hệ khách hàng thảo luận hợp đồng vay vốn cùng doanh nghiệp"
    ))
    c.append(make_c(
        "chuyen-vien-phan-tich-tai-chinh-cfa", "Chuyên viên Phân tích tài chính đầu tư (Financial Analyst / CFA)", "Equity Research & Investment Analyst",
        ["Chuyên viên phân tích cổ phiếu", "Financial Analyst"], g10, c10, l10, ["I", "C", "E"],
        "Định giá cổ phiếu, phân tích vĩ mô và dự phóng kết quả kinh doanh của các ngành để viết báo cáo khuyến nghị mua/bán cho nhà đầu tư.",
        ["Xây dựng mô hình chiết khấu dòng tiền (DCF) và mô hình định giá P/E, P/B", "Dự phóng doanh thu, lợi nhuận và cổ tức của công ty niêm yết trong 3-5 năm tới", "Viết báo cáo phân tích ngành và khuyến nghị chiến lược đầu tư"],
        ["Báo cáo phân tích doanh nghiệp chi tiết (Equity Research Report)", "Mô hình tài chính định giá định dạng Excel"],
        ["Bloomberg Terminal", "FiinPro", "Excel tài chính chuyên sâu", "Python phân tích tài chính"],
        "Công ty chứng khoán (SSI, VNDIRECT, HSC), quỹ đầu tư mạo hiểm, công ty quản lý quỹ.",
        ["Thị trường chứng khoán biến động liên tục khiến dự phóng có thể sai lệch", "Làm việc ngoài giờ nhiều để kịp ra báo cáo phân tích trước giờ mở cửa sàn"],
        ["Tư duy tài chính vĩ mô và vi mô sắc bén", "Thành thạo mô hình hóa tài chính trên Excel", "Kỹ năng viết báo cáo súc tích, logic"],
        ["Toán học", "Tiếng Anh", "Giáo dục kinh tế và pháp luật"],
        [{"level": "Đại học", "description": "Cử nhân Tài chính - Đầu tư, Kinh tế học hoặc Chứng chỉ phân tích tài chính quốc tế CFA (Level 1, 2, 3)"}],
        "Lên trang web CafeF xem biểu đồ giá cổ phiếu của tập đoàn Vinamilk hoặc Hòa Phát trong vòng 1 năm qua.",
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80", "Chuyên viên phân tích theo dõi biểu đồ thị trường chứng khoán trên nhiều màn hình"
    ))
    c.append(make_c(
        "moi-gioi-chung-khoan-tu-van-tai-san", "Môi giới chứng khoán và Tư vấn tài sản (Stockbroker / Wealth Advisor)", "Securities Broker & Wealth Advisor",
        ["Môi giới chứng khoán", "Broker chứng khoán"], g10, c10, l10, ["E", "S", "C"],
        "Mở tài khoản, hướng dẫn học sinh/người mới tập đầu tư, quản lý danh mục cổ phiếu và tư vấn điểm mua bán hợp lý cho khách hàng.",
        ["Theo dõi bảng điện tử và cập nhật tin tức vĩ mô phiên giao dịch cho khách", "Tư vấn phân bổ tỷ trọng giữa tiền mặt, cổ phiếu phòng thủ và cổ phiếu tăng trưởng", "Cảnh báo cắt lỗ kịp thời khi thị trường đảo chiều giảm sâu"],
        ["Danh mục đầu tư sinh lời bền vững cho khách hàng", "Bản tin cập nhật thị trường hàng ngày"],
        ["Bảng giá chứng khoán trực tuyến", "Phần mềm Amibroker", "TradingView", "Hệ thống quản lý lệnh giao dịch"],
        "Sàn giao dịch công ty chứng khoán, làm việc kết hợp tư vấn trực tuyến.",
        ["Tâm lý căng thẳng tột độ khi thị trường giảm điểm mạnh khiến tài sản khách hàng sụt giảm", "Thu nhập phụ thuộc lớn vào hoa hồng phí giao dịch"],
        ["Khả năng đọc hiểu biểu đồ kỹ thuật hình nến", "Kỹ năng quản trị tâm lý cảm xúc trong đầu tư", "Giao tiếp đồng hành thấu hiểu khách hàng"],
        ["Toán học", "Giáo dục kinh tế và pháp luật", "Tâm lý học"],
        [{"level": "Đại học", "description": "Cử nhân Kinh tế, Tài chính, Quản trị kinh doanh + Chứng chỉ hành nghề Môi giới chứng khoán của UBCKNN"}],
        "Tải ứng dụng bảng giá chứng khoán về điện thoại và xem các mã cổ phiếu màu xanh lá (tăng), màu đỏ (giảm) có ý nghĩa gì.",
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80", "Nhà môi giới tư vấn danh mục đầu tư chứng khoán cho khách hàng"
    ))
    c.append(make_c(
        "chuyen-vien-tham-dinh-tin-dung", "Chuyên viên Thẩm định rủi ro tín dụng (Credit Risk Underwriter)", "Credit Risk Underwriter",
        ["Thẩm định viên tín dụng", "Credit Underwriter"], g10, c10, l10, ["C", "I"],
        "Đánh giá độc lập khả năng trả nợ, tính pháp lý của sổ đỏ thế chấp và ra quyết định đồng ý hoặc từ chối cho vay tiền.",
        ["Xác minh tính xác thực của bảng sao kê lương và hợp đồng lao động của người vay", "Định giá giá trị thị trường của bất động sản hoặc ô tô thế chấp", "Tính toán tỷ lệ nợ trên thu nhập (DTI) và tỷ lệ vay trên giá trị tài sản (LTV)"],
        ["Tờ trình thẩm định rủi ro khoản vay", "Quyết định phê duyệt hoặc từ chối cấp tín dụng"],
        ["Hệ thống tra cứu dữ liệu tín dụng CIC", "Phần mềm định giá bất động sản tự động", "Bảng tính toán khả năng trả nợ"],
        "Trung tâm thẩm định tập trung của hội sở ngân hàng.",
        ["Phải giữ lập trường kiên quyết từ chối những hồ sơ không minh bạch dù bị áp lực doanh số", "Chịu trách nhiệm trực tiếp nếu phê duyệt sai dẫn đến nợ xấu"],
        ["Tư duy hoài nghi nghề nghiệp và kiểm tra bằng chứng", "Phân tích số liệu thu nhập và chi tiêu", "Am hiểu luật đất đai và giao dịch bảo đảm"],
        ["Toán học", "Giáo dục kinh tế và pháp luật", "Tin học"],
        [{"level": "Đại học", "description": "Cử nhân Tài chính - Ngân hàng, Luật kinh tế hoặc Thẩm định giá"}],
        "Tìm hiểu khái niệm 'Lịch sử nợ xấu CIC': tại sao chậm trả góp điện thoại vài ngày cũng bị ghi nhận vào hệ thống ngân hàng.",
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80", "Chuyên viên thẩm định kiểm tra tính pháp lý của hồ sơ vay vốn"
    ))
    c.append(make_c(
        "ky-su-phat-trien-fintech-thanh-toan", "Kỹ sư phát triển Fintech và Cổng thanh toán (Fintech Payment Engineer)", "Fintech & Payment Gateway Engineer",
        ["Lập trình viên Fintech", "Payment Engineer"], g10, c10, l10, ["I", "R", "C"],
        "Lập trình cổng thanh toán quét mã QR VietQR, ví điện tử MoMo, ZaloPay và bảo vệ an toàn giao dịch thẻ theo chuẩn PCI-DSS.",
        ["Tích hợp API kết nối giữa ngân hàng và các sàn thương mại điện tử", "Xử lý hàng triệu giao dịch thanh toán đồng thời với độ trễ dưới 0.1 giây", "Mã hóa bảo mật thông tin thẻ quốc tế và phát hiện hành vi gian lận thẻ đánh cắp"],
        ["Hệ thống cổng thanh toán trực tuyến ổn định", "Tài liệu tích hợp kỹ thuật SDK thanh toán"],
        ["Java / Kotlin", "Go", "Kafka", "Redis", "Hệ thống bảo mật PCI-DSS", "Docker"],
        "Công ty công nghệ tài chính Fintech (MoMo, VNPay, ZaloPay, ShopeePay), ngân hàng số.",
        ["Sự cố nghẽn mạng vào các dịp săn sale lớn như 11/11 có thể làm gián đoạn hàng tỷ đồng giao dịch", "Yêu cầu bảo mật tuyệt đối, một lỗ hổng nhỏ có thể bị hacker rút tiền"],
        ["Kiến trúc hệ thống xử lý giao dịch phân tán chịu tải cao", "Hiểu biết sâu sắc về giao thức thanh toán thẻ ISO 8583", "Kỹ năng lập trình hệ thống an toàn"],
        ["Tin học", "Toán học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Kỹ sư Khoa học máy tính, Kỹ thuật phần mềm hoặc An toàn thông tin"}],
        "Mỗi lần quét mã VietQR để thanh toán tiền nước, hãy nghĩ xem thông điệp chuyển tiền chạy qua những máy chủ nào trong 1 giây.",
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80", "Giao dịch thanh toán không tiền mặt trên ứng dụng Fintech di động"
    ))
    c.append(make_c(
        "chuyen-vien-quan-tri-rui-ro-ngan-hang", "Chuyên viên Quản trị rủi ro ngân hàng (Banking Risk Management Specialist)", "Banking Risk Management Analyst",
        ["Chuyên viên quản lý rủi ro", "Risk Analyst"], g10, c10, l10, ["I", "C"],
        "Mô phỏng các kịch bản khủng hoảng kinh tế, tính toán tỷ lệ an toàn vốn (Basel II, Basel III) và bảo vệ ngân hàng trước nguy cơ rút tiền hàng loạt.",
        ["Chạy các bài kiểm tra sức chịu đựng của ngân hàng trong kịch bản suy thoái (Stress Testing)", "Tính toán giá trị tài sản chịu rủi ro (VaR) của danh mục đầu tư trái phiếu", "Xây dựng các hạn mức an toàn vốn tối thiểu theo quy định của Ngân hàng Nhà nước"],
        ["Báo cáo an toàn vốn chuẩn Basel", "Khung chính sách quản trị rủi ro thanh khoản và rủi ro thị trường"],
        ["Python", "R", "SQL", "Phần mềm quản trị rủi ro SAS Risk Engine"],
        "Khối quản trị rủi ro hội sở ngân hàng thương mại, Ngân hàng Nhà nước Việt Nam.",
        ["Mô hình toán học định lượng tương đối phức tạp và trừu tượng", "Áp lực tranh luận để giới hạn các hoạt động cho vay quá nóng của các khối kinh doanh"],
        ["Toán tài chính và mô hình hóa rủi ro", "Hiểu sâu chuẩn mực ngân hàng quốc tế Basel", "Tư duy phòng ngừa và tầm nhìn dài hạn"],
        ["Toán học", "Giáo dục kinh tế và pháp luật", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Toán kinh tế, Tài chính định lượng hoặc Quản trị rủi ro tài chính"}],
        "Tìm hiểu câu chuyện tại sao một ngân hàng ở Mỹ bị phá sản khi người gửi tiền đồng loạt rút sạch tiền qua ứng dụng trong 24 giờ.",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", "Chuyên viên phân tích mô hình rủi ro tài chính trên đồ thị"
    ))
    c.append(make_c(
        "kiem-toan-vien-doc-lap-big4", "Kiểm toán viên độc lập (Independent Auditor - Big 4)", "Auditor / Financial Assurance Specialist",
        ["Kiểm toán viên Big4", "Auditor"], g10, c10, l10, ["C", "I", "E"],
        "Kiểm tra chứng từ, kiểm kê hàng tồn kho thực tế và xác nhận tính trung thực, hợp lý của báo cáo tài chính các công ty niêm yết.",
        ["Kiểm tra chọn mẫu hóa đơn mua bán, chứng từ thanh toán ngân hàng", "Trực tiếp tham gia chứng kiến kiểm kê hàng hóa tại kho của khách hàng vào đêm giao thừa", "Phát hành báo cáo kiểm toán độc lập gửi cổ đông và cơ quan thuế"],
        ["Báo cáo kiểm toán độc lập kèm ý kiến chấp thuận toàn phần", "Thư quản lý chỉ ra các sơ hở trong hệ thống kiểm soát nội bộ"],
        ["Phần mềm kiểm toán chuyên dụng (PwC Aura, EY Canvas)", "Excel nâng cao", "Hệ thống chuẩn mực kiểm toán Việt Nam VSA"],
        "Các công ty kiểm toán hàng đầu thế giới (Big 4: PwC, EY, KPMG, Deloitte) và các công ty kiểm toán trong nước.",
        ["Mùa kiểm toán cao điểm từ tháng 1 đến tháng 4 hàng năm làm việc tới 12-14 tiếng mỗi ngày", "Phải di chuyển công tác liên tục giữa các nhà máy, xí nghiệp"],
        ["Tư duy cẩn trọng và hoài nghi nghề nghiệp", "Thành thạo nguyên tắc kế toán tài chính", "Khả năng làm việc nhóm cường độ cao"],
        ["Toán học", "Giáo dục kinh tế và pháp luật", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Kiểm toán, Kế toán (ĐH Kinh tế Quốc dân, Học viện Tài chính) + Chứng chỉ CPA hoặc ACCA"}],
        "Tìm hiểu tại sao các công ty lớn niêm yết trên sàn chứng khoán bắt buộc phải thuê kiểm toán độc lập kiểm tra sổ sách hàng năm.",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80", "Kiểm toán viên rà soát chứng từ kế toán và sổ cái tài chính"
    ))
    c.append(make_c(
        "chuyen-vien-dinh-phi-bao-hiem-actuary", "Chuyên viên Định phí bảo hiểm (Actuary)", "Actuary & Risk Pricing Specialist",
        ["Chuyên gia định phí", "Actuary"], g10, c10, l10, ["I", "C"],
        "Sử dụng bảng tỷ lệ tử vong, xác suất thống kê để tính mức phí đóng bảo hiểm nhân thọ, bảo hiểm y tế và đảm bảo công ty đủ tiền bồi thường.",
        ["Phân tích dữ liệu lịch sử tai nạn, bệnh tật và tuổi thọ bình quân của dân số", "Tính toán mức phí bảo hiểm định kỳ cho các gói sản phẩm bảo vệ sức khỏe mới", "Thiết lập quỹ dự phòng nghiệp vụ đảm bảo khả năng chi trả bồi thường trong 30-50 năm tới"],
        ["Bảng biểu phí bảo hiểm chuẩn xác", "Báo cáo dự phòng nghiệp vụ bảo hiểm theo luật kinh doanh bảo hiểm"],
        ["Phần mềm mô hình hóa Actuary (Prophet, MoSes)", "R", "Python", "Excel chuyên sâu"],
        "Tập đoàn bảo hiểm nhân thọ và phi nhân thọ (Bảo Việt, Prudential, Manulife, Dai-ichi Life).",
        ["Hệ thống kỳ thi lấy chứng chỉ quốc tế Actuary (SOA / IFoA) cực kỳ khó khăn, mất 5-7 năm học tập liên tục", "Công việc phân tích toán học đòi hỏi độ tập trung rất cao"],
        ["Toán xác suất thống kê và toán tài chính cao cấp", "Tư duy phân tích dữ liệu rủi ro lớn", "Hiểu biết sâu sắc về sản phẩm bảo hiểm"],
        ["Toán học", "Tiếng Anh", "Tin học"],
        [{"level": "Đại học", "description": "Cử nhân Toán tài chính, Thống kê hoặc Khoa học định phí Actuary"}],
        "Tìm hiểu tại sao người càng lớn tuổi thì mức phí đóng bảo hiểm sức khỏe hàng năm lại cao hơn người trẻ tuổi.",
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80", "Chuyên viên định phí bảo hiểm tính toán mô hình xác suất rủi ro"
    ))
    c.append(make_c(
        "quan-ly-quy-dau-tu-mao-hiem", "Quản lý Quỹ đầu tư mạo hiểm (Venture Capital Investor - VC)", "Venture Capital & Private Equity Investor",
        ["Nhà đầu tư mạo hiểm", "VC Associate / Principal"], g10, c10, l10, ["E", "I", "S"],
        "Tìm kiếm các dự án công nghệ khởi nghiệp tiềm năng, thẩm định đội ngũ sáng lập và rót vốn hàng triệu USD để đổi lấy cổ phần tăng trưởng.",
        ["Nghe các nhà sáng lập startup thuyết trình gọi vốn (Pitch deck)", "Thẩm định năng lực công nghệ, sản phẩm và tiềm năng thị trường của startup (Due Diligence)", "Tham gia hội đồng quản trị hỗ trợ startup mở rộng quy mô kinh doanh"],
        ["Bản ghi nhớ đầu tư (Term Sheet)", "Báo cáo thẩm định đầu tư chi tiết (Investment Memorandum)"],
        ["PitchBook", "Crunchbase", "Excel mô hình vốn hóa Cap Table"],
        "Quỹ đầu tư mạo hiểm, hội thảo khởi nghiệp công nghệ, không gian làm việc chung Co-working.",
        ["Tỷ lệ rủi ro rất cao: 9 trong 10 startup được rót vốn có thể thất bại mất trắng tiền đầu tư", "Phải từ chối hàng trăm ý tưởng khởi nghiệp mỗi tháng"],
        ["Tầm nhìn nhạy bén phát hiện xu hướng công nghệ tương lai", "Kỹ năng đánh giá con người và tố chất lãnh đạo", "Đàm phán định giá doanh nghiệp"],
        ["Toán học", "Tiếng Anh", "Giáo dục kinh tế và pháp luật", "Ngữ văn"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị kinh doanh, Tài chính hoặc Kỹ thuật công nghệ kết hợp bằng Thạc sĩ MBA"}],
        "Xem một tập chương trình Shark Tank Việt Nam để quan sát cách các nhà đầu tư chất vấn số liệu tài chính của startup.",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80", "Nhà đầu tư mạo hiểm lắng nghe bài thuyết trình gọi vốn của startup"
    ))

    return c

print("Module groups 6-10 ready.")
