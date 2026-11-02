# -*- coding: utf-8 -*-
# Groups 11 - 15 (50 careers)

def get_groups_11_to_15(make_c):
    c = []

    # 11. LOGISTICS, CHUỖI CUNG ỨNG VÀ NGOẠI THƯƠNG
    g11, c11, l11 = "logistics", "Logistics", "Logistics, chuỗi cung ứng và ngoại thương"
    c.append(make_c(
        "chuyen-vien-dieu-phoi-van-tai-da-phuong-thuc", "Chuyên viên Điều phối vận tải đa phương thức (Multimodal Transport Coordinator)", "Multimodal Freight Transport Coordinator",
        ["Điều phối viên logistics", "Freight Coordinator"], g11, c11, l11, ["E", "C", "R"],
        "Kết hợp vận tải đường biển, đường hàng không, đường sắt và xe container đường bộ để chuyển hàng từ nhà máy Việt Nam đến kho Amazon bên Mỹ.",
        ["Lựa chọn tuyến đường vận chuyển tối ưu chi phí và thời gian", "Book chỗ trên tàu biển (Booking note) và điều động xe kéo container đóng hàng", "Theo dõi hành trình lô hàng và thông báo cập nhật tình trạng liên tục cho chủ hàng"],
        ["Vận đơn vận tải đường biển (Bill of Lading - B/L)", "Kế hoạch lộ trình vận tải chi tiết"],
        ["Hệ thống quản lý vận tải TMS", "Phần mềm theo dõi tàu biển MarineTraffic", "Excel điều độ"],
        "Công ty giao nhận vận tải quốc tế (Freight Forwarder: DHL, Maersk, Kuehne+Nagel), văn phòng cảng biển.",
        ["Lô hàng có thể bị hoãn hoặc kẹt cảng do thời tiết bão biển cần xử lý gấp 24/7", "Lệch múi giờ khi liên hệ với các hãng tàu quốc tế"],
        ["Kỹ năng lập kế hoạch và điều phối", "Hiểu biết luật vận tải quốc tế và Incoterms", "Kỹ năng giải quyết sự cố phát sinh"],
        ["Địa lý", "Tiếng Anh", "Toán học"],
        [{"level": "Đại học", "description": "Cử nhân Logistics và Quản lý chuỗi cung ứng hoặc Kinh tế vận tải"}, {"level": "Cao đẳng", "description": "Cao đẳng Logistics & Khai thác cảng"}],
        "Mở trang web MarineTraffic xem có bao nhiêu con tàu container khổng lồ đang neo đậu ngoài khơi cảng Hải Phòng và Cái Mép.",
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", "Cảng biển container nhộn nhịp với các chuyến tàu cập bến"
    ))
    c.append(make_c(
        "nhan-vien-chung-tu-xuat-nhap-khau", "Nhân viên Chứng từ xuất nhập khẩu (Import-Export Documentation Specialist)", "Import-Export Documentation Specialist",
        ["Nhân viên chứng từ", "Docs / CS Logistics"], g11, c11, l11, ["C", "E"],
        "Lập hóa đơn thương mại (Invoice), phiếu đóng gói (Packing List), xin giấy chứng nhận xuất xứ (C/O) để hàng hóa được hưởng thuế ưu đãi 0%.",
        ["Soạn thảo hợp đồng mua bán ngoại thương và các phụ lục đính kèm", "Khai báo và xin cấp giấy chứng nhận xuất xứ hàng hóa C/O form D, form E, form EUR.1", "Gửi bộ chứng từ thanh toán tín dụng thư (L/C) sang ngân hàng đối tác"],
        ["Bộ chứng từ xuất nhập khẩu hoàn chỉnh hợp lệ", "Giấy chứng nhận xuất xứ hàng hóa (Certificate of Origin)"],
        ["Cổng thông tin một cửa quốc gia", "Phần mềm khai báo C/O điện tử eCoSys", "Phần mềm kế toán xuất nhập khẩu"],
        "Phòng xuất nhập khẩu doanh nghiệp sản xuất, công ty logistics.",
        ["Sai sót một chữ số trên hóa đơn hoặc vận đơn có thể khiến lô hàng bị giữ lại cảng nhiều tuần", "Phải hoàn thành bộ chứng từ đúng thời hạn trước khi tàu cập cảng"],
        ["Độ cẩn trọng và tỉ mỉ tuyệt đối", "Tiếng Anh thương mại thành thạo", "Nắm vững quy tắc xuất xứ hàng hóa trong các hiệp định FTA"],
        ["Tiếng Anh", "Giáo dục kinh tế và pháp luật", "Địa lý"],
        [{"level": "Đại học", "description": "Cử nhân Kinh tế đối ngoại, Kinh doanh quốc tế hoặc Thương mại quốc tế"}, {"level": "Cao đẳng", "description": "Cao đẳng Nghiệp vụ Xuất nhập khẩu"}],
        "Tìm hiểu tờ giấy chứng nhận xuất xứ C/O giúp quả thanh long Việt Nam xuất khẩu sang châu Âu được giảm thuế như thế nào.",
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80", "Nhân viên kiểm tra và rà soát bộ chứng từ xuất nhập khẩu"
    ))
    c.append(make_c(
        "chuyen-vien-khai-bao-hai-quan-dien-tu", "Chuyên viên Khai báo hải quan điện tử (Customs Broker / Declaration Specialist)", "Customs Clearance & Declaration Specialist",
        ["Nhân viên khai hải quan", "Customs Broker"], g11, c11, l11, ["C", "R"],
        "Tra cứu mã số hàng hóa (HS Code), truyền tờ khai hải quan trên hệ thống VNACCS/VCIS và trực tiếp làm thủ tục thông quan hàng hóa tại chi cục hải quan.",
        ["Phân tích thành phần sản phẩm để áp đúng mã HS Code chịu thuế chính xác", "Truyền dữ liệu tờ khai hải quan điện tử và theo dõi kết quả phân luồng (Xanh, Vàng, Đỏ)", "Phối hợp với cán bộ hải quan kiểm tra thực tế hàng hóa tại bãi cảng luồng đỏ"],
        ["Tờ khai hải quan điện tử đã thông quan", "Biên bản kiểm tra thực tế hàng hóa"],
        ["Phần mềm hải quan điện tử ECUS5-VNACCS", "Bảng tra cứu biểu thuế xuất nhập khẩu và mã HS", "Chữ ký số token USB"],
        "Văn phòng khai thuê hải quan, chi cục hải quan cửa khẩu cảng biển, sân bay Nội Bài, Tân Sơn Nhất.",
        ["Áp lực khi hàng bị phân luồng đỏ phải mở container kiểm tra thủ công", "Rủi ro bị xử phạt hành chính nếu áp sai mã HS code làm thiếu tiền thuế nhà nước"],
        ["Nắm vững luật hải quan và chính sách mặt hàng", "Kỹ năng tra cứu phân loại mã HS Code", "Kỹ năng xử lý tình huống linh hoạt tại cửa khẩu"],
        ["Giáo dục kinh tế và pháp luật", "Tiếng Anh", "Hóa học"],
        [{"level": "Đại học", "description": "Cử nhân Hải quan và Nghiệp vụ ngoại thương (Học viện Tài chính) + Chứng chỉ nghiệp vụ khai hải quan của Tổng cục Hải quan"}],
        "Tìm hiểu ý nghĩa của phân luồng hải quan: Luồng Xanh (thông quan ngay), Luồng Vàng (kiểm tra giấy tờ), Luồng Đỏ (mở thùng kiểm tra hàng).",
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80", "Chuyên viên làm thủ tục thông quan container tại cửa khẩu hải quan"
    ))
    c.append(make_c(
        "quan-ly-kho-van-thong-minh", "Quản lý Kho vận thông minh (Smart Warehouse Operations Manager)", "Smart Warehouse & Fulfillment Operations Manager",
        ["Quản lý kho", "Warehouse Manager"], g11, c11, l11, ["R", "C", "E"],
        "Bố trí layout giá kệ kho, quản lý robot tự hành AGV gắp hàng và tối ưu hóa quy trình xuất - nhập - tồn hàng triệu món hàng.",
        ["Quy hoạch vị trí các kệ hàng chứa pallet theo tần suất xuất hàng (Fast-moving items)", "Thiết lập quy trình quét mã vạch và phân công nhân viên nhặt hàng (Pick & Pack)", "Kiểm kê hàng tồn kho định kỳ và xử lý hàng cận date, hàng tồn đọng"],
        ["Báo cáo tỷ lệ thực hiện đơn hàng đúng giờ (OTIF)", "Mặt bằng quy hoạch kho bãi tối ưu luồng di chuyển"],
        ["Hệ thống quản lý kho WMS (Infor, SAP EWM)", "Máy quét mã vạch không dây PDA", "Xe nâng điện reach truck"],
        "Trung tâm hoàn tất đơn hàng thương mại điện tử (Shopee, Lazada, Tiki), kho ngoại quan.",
        ["Áp lực xả hàng nghìn đơn mỗi giờ vào các đợt siêu sale ngày lễ", "Trách nhiệm quản lý an toàn phòng cháy chữa cháy và chống thất thoát tài sản trong kho"],
        ["Kỹ năng tổ chức sắp xếp không gian khoa học", "Vận hành hệ thống phần mềm quản lý kho", "Kỹ năng quản lý đội ngũ nhân viên kho"],
        ["Toán học", "Tin học", "Công nghệ"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị logistics hoặc Kỹ thuật Công nghiệp"}, {"level": "Cao đẳng", "description": "Cao đẳng Quản lý kho bãi"}],
        "Quan sát cách một cửa hàng tiện lợi mini sắp xếp các chai nước ngọt trên kệ: chai nào hạn gần hơn sẽ được xếp ra phía ngoài cùng.",
        "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80", "Kho hàng thông minh với hệ thống giá kệ nhiều tầng hiện đại"
    ))
    c.append(make_c(
        "chuyen-vien-mua-hang-quoc-te", "Chuyên viên Mua hàng quốc tế (Global Procurement Specialist)", "Global Sourcing & Procurement Specialist",
        ["Chuyên viên thu mua quốc tế", "Purchasing Specialist"], g11, c11, l11, ["E", "C", "I"],
        "Tìm kiếm nhà cung cấp nguyên vật liệu từ khắp nơi trên thế giới, đàm phán giá cả và ký hợp đồng mua bán với mức giá tối ưu nhất.",
        ["Gửi thư yêu cầu báo giá (RFQ) đến các nhà cung ứng ở Nhật, Hàn, Trung Quốc, châu Âu", "Đánh giá năng lực nhà máy và so sánh chi phí tổng thể (TCO)", "Thương lượng điều kiện thanh toán trả chậm 30-60 ngày và thời gian giao hàng"],
        ["Hợp đồng mua hàng quốc tế (Purchase Order - PO)", "Bảng so sánh chi phí và năng lực nhà cung cấp"],
        ["Alibaba B2B", "Hệ thống SAP Ariba", "Excel phân tích chi phí"],
        "Phòng mua hàng tập đoàn sản xuất, chuỗi siêu thị bán lẻ, nhà máy điện tử.",
        ["Rủi ro nhà cung ứng giao hàng trễ hạn làm đình trệ toàn bộ dây chuyền sản xuất của nhà máy", "Chênh lệch múi giờ và rào cản văn hóa khi đàm phán với đối tác nước ngoài"],
        ["Kỹ năng đàm phán và thương lượng giá", "Ngoại ngữ thương mại sắc bén", "Tư duy phân tích cơ cấu chi phí sản phẩm"],
        ["Tiếng Anh", "Toán học", "Giáo dục kinh tế và pháp luật"],
        [{"level": "Đại học", "description": "Cử nhân Kinh tế đối ngoại, Kinh doanh quốc tế hoặc Quản trị chuỗi cung ứng"}],
        "Thử lên trang web Alibaba.com tìm một món đồ chơi công nghệ và xem các nhà cung ứng báo giá bán sỉ theo số lượng ra sao.",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80", "Chuyên viên mua hàng so sánh hợp đồng và chi phí báo giá"
    ))
    c.append(make_c(
        "chuyen-vien-kinh-doanh-cuoc-van-tai", "Chuyên viên Kinh doanh cước vận tải (Freight Forwarder Sales)", "Freight Forwarding Sales Executive",
        ["Sales Logistics", "Freight Sales"], g11, c11, l11, ["E", "S"],
        "Chào bán dịch vụ cước tàu biển, cước máy bay và dịch vụ thông quan trọn gói cho các doanh nghiệp xuất nhập khẩu hàng hóa.",
        ["Tìm kiếm thông tin các doanh nghiệp xuất khẩu dệt may, da giày, thủy sản qua mạng xã hội", "Gọi điện chào giá cước container cạnh tranh và tư vấn gói vận chuyển tối ưu", "Chăm sóc duy trì mối quan hệ thân thiết với các khách hàng ruột lâu năm"],
        ["Hợp đồng cung ứng dịch vụ logistics đã ký kết", "Báo cáo doanh số bán cước hàng tháng"],
        ["LinkedIn", "Phần mềm CRM bán hàng", "Điện thoại và mạng lưới quan hệ doanh nghiệp"],
        "Công ty giao nhận logistics quốc tế, thường xuyên đi gặp gỡ khách hàng.",
        ["Cạnh tranh giá cước khốc liệt giữa hàng trăm công ty giao nhận trên thị trường", "Áp lực doanh số (KPI số lượng container bán được) mỗi tháng"],
        ["Kỹ năng giao tiếp và thuyết phục khách hàng", "Nhạy cảm với biến động giá cước thị trường", "Sự kiên trì không nản lòng khi bị từ chối"],
        ["Tiếng Anh", "Ngữ văn", "Địa lý"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị kinh doanh, Marketing hoặc Logistics"}, {"level": "Cao đẳng", "description": "Cao đẳng Kinh doanh thương mại"}],
        "Tìm hiểu tại sao giá cước thuê một chiếc container 40 feet từ Việt Nam đi Mỹ lại tăng vọt vào dịp gần Tết Nguyên đán.",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80", "Chuyên viên kinh doanh cước trao đổi hợp đồng với chủ hàng"
    ))
    c.append(make_c(
        "chuyen-vien-ke-hoach-chuoi-cung-ung", "Chuyên viên Kế hoạch chuỗi cung ứng (Supply Chain Planner)", "Supply Chain Demand & Inventory Planner",
        ["Chuyên viên hoạch định chuỗi cung ứng", "Supply Chain Planner"], g11, c11, l11, ["C", "I"],
        "Dự báo nhu cầu thị trường, tính toán mức tồn kho an toàn và lên kế hoạch đặt hàng sản xuất chính xác tránh thiếu hụt hoặc ứ đọng vốn.",
        ["Phân tích lịch sử bán hàng và các chương trình khuyến mãi để dự báo nhu cầu (Demand Forecasting)", "Tính toán lượng tồn kho an toàn (Safety stock) cho từng mã sản phẩm", "Lập kế hoạch điều phối hàng hóa giữa các kho miền Bắc, Trung, Nam"],
        ["Bản kế hoạch cung ứng nguyên vật liệu hàng tháng", "Báo cáo vòng quay hàng tồn kho (Inventory Turnover)"],
        ["Hệ thống SAP ERP", "Phần mềm dự báo nhu cầu Anaplan", "Excel phân tích hàm nâng cao"],
        "Tập đoàn hàng tiêu dùng nhanh FMCG (Unilever, P&G, Nestlé, Vinamilk).",
        ["Nếu dự báo sai dẫn đến cháy hàng (hết hàng bán) hoặc tồn kho quá nhiều gây hết hạn sử dụng", "Làm việc với khối lượng dữ liệu bảng tính khổng lồ"],
        ["Tư duy toán học thống kê và phân tích xu hướng", "Hiểu biết tổng thể quy trình chuỗi cung ứng khép kín", "Khả năng phối hợp đa phòng ban"],
        ["Toán học", "Tin học", "Giáo dục kinh tế và pháp luật"],
        [{"level": "Đại học", "description": "Cử nhân Quản lý chuỗi cung ứng, Kỹ thuật Hệ thống công nghiệp hoặc Thống kê kinh tế"}],
        "Thử nghĩ xem một hãng bánh kẹo phải chuẩn bị kế hoạch sản xuất bánh Trung thu trước bao nhiêu tháng để kịp bán vào rằm tháng 8.",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", "Chuyên viên phân tích dự báo nhu cầu chuỗi cung ứng trên biểu đồ"
    ))
    c.append(make_c(
        "dieu-do-cang-bien-container", "Điều độ cảng biển container (Container Terminal Dispatcher)", "Port Operations & Yard Dispatcher",
        ["Điều độ viên cảng", "Vessel & Yard Planner"], g11, c11, l11, ["R", "C"],
        "Lập sơ đồ xếp dỡ container lên tàu biển đảm bảo trọng tâm tàu cân bằng an toàn và điều động cần cẩu giàn hoạt động nhịp nhàng.",
        ["Sắp xếp vị trí từng container trên bãi cảng theo hãng tàu và cảng đến", "Lập sơ đồ bốc dỡ hàng (Stowage plan) cân bằng trọng tải đáy tàu", "Điều phối các tài xế xe nâng và xe đầu kéo di chuyển container trong bãi"],
        ["Sơ đồ xếp dỡ hàng trên tàu (Bay plan)", "Nhật ký năng suất bốc dỡ của cẩu giàn theo giờ"],
        ["Hệ thống quản lý khai thác cảng số TOS (CATOS / TOPS)", "Bộ đàm vô tuyến điều độ cảng", "Phần mềm mô phỏng độ ổn định tàu MacS"],
        "Phòng điều hành trung tâm cảng biển quốc tế (Cảng Tân Cảng - Cát Lái, Cảng Quốc tế Lạch Huyện).",
        ["Áp lực giải phóng tàu nhanh chóng, mỗi giờ tàu nằm chờ ở cảng tốn hàng chục nghìn USD", "Làm việc theo ca 24/7 bất kể ngày đêm hay mưa gió"],
        ["Tư duy hình học không gian và phân bổ tải trọng", "Khả năng ra quyết định nhanh dưới áp lực cao", "Thành thạo phần mềm điều hành cảng số"],
        ["Toán học", "Vật lý", "Tin học"],
        [{"level": "Đại học", "description": "Kỹ sư Kinh tế vận tải biển hoặc Khai thác cảng (ĐH Hàng hải Việt Nam, ĐH Giao thông Vận tải)"}, {"level": "Cao đẳng", "description": "Cao đẳng Quản lý khai thác cảng"}],
        "Tìm hiểu tại sao người ta phải xếp các container nặng nhất ở tầng dưới cùng của đáy tàu để tàu không bị lật khi gặp sóng lớn.",
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80", "Cần cẩu giàn khổng lồ bốc dỡ container trên bãi cảng biển"
    ))
    c.append(make_c(
        "chuyen-vien-dong-goi-va-bao-hiem-hang-hoa", "Chuyên viên Đóng gói và Bảo hiểm hàng hóa (Cargo Packaging & Insurance Specialist)", "Cargo Packaging & Marine Insurance Specialist",
        ["Chuyên viên bảo hiểm hàng hóa", "Cargo Packaging Specialist"], g11, c11, l11, ["C", "R"],
        "Tính toán quy cách đóng thùng gỗ chống ẩm cho máy móc điện tử và tư vấn điều khoản bảo hiểm hàng hải bồi thường rủi ro chìm tàu, cháy nổ.",
        ["Thiết kế thùng gỗ đóng kiện có túi hút ẩm và xốp chống sốc cho máy móc công nghiệp", "Thẩm định giá trị lô hàng và tư vấn mua gói bảo hiểm hàng hải điều kiện A, B, C", "Lập hồ sơ khiếu nại đòi công ty bảo hiểm bồi thường khi hàng bị ướt hoặc móp méo"],
        ["Quy chuẩn kỹ thuật đóng gói hàng xuất khẩu", "Hợp đồng bảo hiểm hàng hóa xuất nhập khẩu"],
        ["Tiêu chuẩn đóng gói hàng nguy hiểm IATA / IMDG", "Túi chống ẩm silica gel công nghiệp", "Phần mềm quản lý khiếu nại bảo hiểm"],
        "Công ty bảo hiểm phi nhân thọ (Bảo Việt, PVI), công ty dịch vụ đóng gói hàng xuất khẩu.",
        ["Phải điều tra kỹ lưỡng hiện trường container bị hư hỏng để xác định nguyên nhân chính xác", "Nắm vững các quy tắc hàng hải quốc tế phức tạp"],
        ["Hiểu biết về vật liệu bao bì đóng gói chịu lực", "Kiến thức luật bảo hiểm hàng hải quốc tế", "Tính tỉ mỉ và khả năng thu thập bằng chứng hiện trường"],
        ["Vật lý", "Giáo dục kinh tế và pháp luật", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Bảo hiểm, Kinh tế ngoại thương hoặc Kỹ thuật Vật liệu"}],
        "Tìm hiểu các ký hiệu hình chiếc ly dễ vỡ và chiếc ô che mưa in trên thùng carton có ý nghĩa gì đối với người vận chuyển.",
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", "Kiểm tra quy cách đóng gói và tem niêm phong kiện hàng xuất khẩu"
    ))
    c.append(make_c(
        "ky-su-tu-dong-hoa-trung-tam-phan-loai", "Kỹ sư Tự động hóa trung tâm phân loại bưu chính (Parcel Sortation Automation Engineer)", "Parcel Sortation Center Automation Engineer",
        ["Kỹ sư phân loại bưu chính", "Sortation Automation Engineer"], g11, c11, l11, ["R", "I"],
        "Bảo trì và lập trình hệ thống băng chuyền phân loại tự động (Cross-belt sorter) chia hàng chục nghìn gói hàng mỗi giờ cho bưu điện và đơn vị chuyển phát nhanh.",
        ["Hiệu chuẩn camera quét mã vạch tốc độ cao trên băng tải chạy 2.5m/s", "Lập trình điều khiển cánh tay gạt và máng trượt phân chia bưu phẩm theo mã bưu chính", "Khắc phục sự cố kẹt hàng trên băng chuyền trong vòng 5 phút để thông luồng hàng"],
        ["Nhật ký bảo dưỡng định kỳ hệ thống băng chuyền tự động", "Báo cáo năng suất chia chọn hàng nghìn bưu phẩm/giờ"],
        ["Hệ thống Cross-belt Sorter", "Camera đọc mã vạch Datalogic", "Phần mềm SCADA điều khiển băng tải", "Dụng cụ bảo trì cơ điện"],
        "Trung tâm phân loại tự động thông minh (VNPost, Viettel Post, J&T Express, SPX).",
        ["Ca trực đêm cao điểm từ 22h đến 6h sáng khi toàn bộ hàng bưu chính dồn về trung tâm phân loại", "Tiếng ồn động cơ băng chuyền và bụi bặm bao bì carton"],
        ["Bảo trì cơ điện tử công nghiệp", "Xử lý sự cố kỹ thuật tốc độ cao", "Hiểu biết về thị giác máy đọc mã vạch"],
        ["Vật lý", "Tin học", "Công nghệ"],
        [{"level": "Đại học", "description": "Kỹ sư Cơ điện tử, Kỹ thuật Điện - Tự động hóa"}, {"level": "Cao đẳng", "description": "Cao đẳng Điện tử công nghiệp"}],
        "Tìm hiểu cách hệ thống băng chuyền tự động đọc mã vạch trên gói hàng và đẩy gói hàng rơi đúng vào bao tải của tỉnh mình trong 2 giây.",
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80", "Hệ thống băng chuyền phân loại bưu kiện tự động tốc độ cao"
    ))

    # 12. DU LỊCH, KHÁCH SẠN VÀ ẨM THỰC
    g12, c12, l12 = "du-lich-am-thuc", "DuLich", "Du lịch, khách sạn và ẩm thực"
    c.append(make_c(
        "bep-truong-dieu-hanh", "Bếp trưởng điều hành (Executive Chef)", "Executive Chef",
        ["Bếp trưởng", "Head Chef"], g12, c12, l12, ["A", "R", "E"],
        "Sáng tạo thực đơn ẩm thực tinh hoa, quản lý hàng chục đầu bếp và kiểm soát nghiêm ngặt hương vị, thẩm mỹ từng đĩa thức ăn phục vụ khách sạn 5 sao.",
        ["Thiết kế thực đơn món ăn mới theo mùa kết hợp nguyên liệu đặc sản địa phương", "Trực tiếp nấu các món ăn chính và nếm thử tất cả nước sốt trước giờ phục vụ", "Tính toán giá vốn món ăn (Food cost) và quản lý vệ sinh an toàn thực phẩm tiêu chuẩn HACCP"],
        ["Bộ công thức món ăn chuẩn hóa (Standard Recipe)", "Thực đơn tiệc cao cấp phục vụ hàng trăm thực khách"],
        ["Bộ dao bếp chuyên dụng cá nhân", "Bếp từ công nghiệp và lò nướng hơi nước Combi oven", "Bảng tính Food Cost"],
        "Khu bếp mở hoặc bếp trung tâm khách sạn 5 sao, resort nghỉ dưỡng cao cấp.",
        ["Môi trường bếp nhiệt độ cao, lửa lớn, dầu mỡ và dao nhọn nguy hiểm", "Áp lực phục vụ dồn dập vào giờ ăn trưa và ăn tối, làm việc suốt các dịp lễ Tết"],
        ["Nghệ thuật vị giác và thị giác ẩm thực tinh tế", "Kỹ năng lãnh đạo và chỉ huy căn bếp nhịp nhàng", "Quản trị chi phí nguyên vật liệu"],
        ["Mỹ thuật", "Hóa học", "Giáo dục kinh tế và pháp luật"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị dịch vụ ẩm thực hoặc Quản trị khách sạn"}, {"level": "Cao đẳng", "description": "Cao đẳng Nghệ thuật Ẩm thực"}, {"level": "Đào tạo nghề", "description": "Chứng chỉ Bếp trưởng điều hành quốc tế"}],
        "Thử tự tay nấu một món ăn gia đình yêu thích và trang trí đĩa thức ăn sao cho đẹp mắt như trong nhà hàng.",
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80", "Bếp trưởng điều hành hoàn thiện chi tiết trang trí món ăn cao cấp"
    ))
    c.append(make_c(
        "quan-ly-khach-san-resort-quoc-te", "Tổng quản lý Khách sạn / Resort quốc tế (Hotel General Manager - GM)", "Hotel & Resort General Manager",
        ["Giám đốc khách sạn", "Hotel GM"], g12, c12, l12, ["E", "S", "C"],
        "Điều hành toàn bộ hoạt động từ buồng phòng, ẩm thực, tiền sảnh đến tài chính, mang lại trải nghiệm nghỉ dưỡng đẳng cấp quốc tế cho du khách.",
        ["Kiểm tra ngẫu nhiên chất lượng buồng phòng, cảnh quan bể bơi và khu vực đón tiếp", "Điều hành cuộc họp ban giám đốc hàng ngày để tối ưu hóa công suất phòng (RevPAR)", "Trực tiếp đón tiếp các đoàn khách VIP, chính khách và đại sứ ngoại giao"],
        ["Báo cáo tài chính doanh thu buồng phòng và F&B", "Chiến lược nâng cao chỉ số hài lòng khách hàng (GSS)"],
        ["Phần mềm quản lý khách sạn PMS Opera", "Bảng theo dõi chỉ số RevPAR", "Hệ thống liên lạc nội bộ bộ đàm"],
        "Khách sạn thương hiệu quốc tế (Marriott, Hilton, InterContinental, Accor, Vinpearl).",
        ["Lịch làm việc không có ngày nghỉ cố định, luôn sẵn sàng có mặt khi xảy ra sự cố tại khách sạn", "Áp lực duy trì tiêu chuẩn thương hiệu 5 sao khắt khe"],
        ["Tư duy hiếu khách (Hospitality mindset) đỉnh cao", "Kỹ năng quản trị điều hành và ngoại giao lịch thiệp", "Tiếng Anh giao tiếp chuẩn mực quốc tế"],
        ["Tiếng Anh", "Giáo dục kinh tế và pháp luật", "Ngữ văn", "Địa lý"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị Khách sạn hoặc Quản trị Du lịch (ĐH Kinh tế Quốc dân, ĐH Hà Nội, các trường quốc tế)"}],
        "Bước vào một sảnh khách sạn lớn và quan sát cách nhân viên lễ tân cúi chào và mời nước khách đến nhận phòng.",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80", "Tổng quản lý kiểm tra sảnh lễ tân khách sạn 5 sao sang trọng"
    ))
    c.append(make_c(
        "chuyen-vien-pha-che-barista-mixologist", "Chuyên viên Pha chế đồ uống (Barista & Mixologist)", "Specialty Coffee Barista & Mixologist",
        ["Chuyên viên pha chế", "Barista / Bartender"], g12, c12, l12, ["A", "R", "S"],
        "Chiết xuất cà phê đặc sản Specialty Coffee, vẽ nghệ thuật bọt sữa Latte Art và sáng tạo các loại mocktail, cocktail đậm đà hương vị thảo mộc nhiệt đới.",
        ["Căn chỉnh kích thước hạt xay và thời gian chiết xuất espresso đạt tỷ lệ vàng", "Tạo hình bọt sữa mịn vẽ hình lá dương xỉ, hoa tulip trên tách cà phê (Latte Art)", "Lắc shaker phối trộn các loại siro trái cây, rượu thảo mộc và thảo dược thiên nhiên"],
        ["Tách cà phê espresso chuẩn hương vị phong phú", "Menu thức uống sáng tạo theo mùa"],
        ["Máy pha cà phê chuyên nghiệp La Marzocco", "Cân điện tử pha chế đo thời gian", "Bình lắc cocktail Shaker", "Muỗng khuấy Bar spoon"],
        "Quán cà phê đặc sản Specialty Coffee, quầy bar khách sạn 5 sao, lounge cao cấp.",
        ["Đứng liên tục suốt ca làm việc và đôi bàn tay thường xuyên tiếp xúc với nước đá lạnh", "Áp lực tốc độ pha chế khi khách xếp hàng dài vào giờ cao điểm sáng"],
        ["Khứu giác và vị giác tinh tế cảm nhận tầng hương", "Sự khéo léo tỉ mỉ khi đánh sữa vẽ Latte Art", "Kỹ năng kể chuyện về nguồn gốc hạt cà phê cho khách"],
        ["Hóa học", "Mỹ thuật", "Tiếng Anh"],
        [{"level": "Cao đẳng", "description": "Cao đẳng Kỹ thuật Pha chế đồ uống"}, {"level": "Đào tạo nghề", "description": "Chứng chỉ Barista quốc tế SCA (Specialty Coffee Association)"}],
        "Thử tập rót sữa tươi vào một cốc trà đen từ từ để quan sát các dải vân màu xoáy cuộn hòa quyện vào nhau.",
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80", "Barista tỉ mỉ vẽ hình nghệ thuật bọt sữa Latte Art trên tách cà phê"
    ))
    c.append(make_c(
        "giam-sat-tien-sanh-front-office", "Giám sát Bộ phận Tiền sảnh (Front Office Supervisor)", "Hotel Front Office Supervisor",
        ["Giám sát lễ tân", "Front Desk Supervisor"], g12, c12, l12, ["E", "S", "C"],
        "Điều phối nhân viên lễ tân làm thủ tục check-in, check-out nhanh chóng, xử lý phàn nàn của khách và nâng cấp hạng phòng (Upgrade).",
        ["Phân bổ danh sách phòng sạch cho khách đến theo yêu cầu đặc biệt", "Xử lý khéo léo các tình huống khách phàn nàn về tiếng ồn hoặc phòng chưa ưng ý", "Đào tạo nghiệp vụ nụ cười và văn hóa đón tiếp cho nhân viên lễ tân mới"],
        ["Báo cáo bàn giao ca trực tiền sảnh", "Hồ sơ ghi nhận sở thích cá nhân của khách hàng thân thiết (Guest Profile)"],
        ["Hệ thống PMS Opera", "Máy thanh toán thẻ POS", "Hệ thống quản lý khóa từ điện tử"],
        "Quầy lễ tân sảnh khách sạn cao cấp, khu nghỉ dưỡng.",
        ["Trực ca xoay bao gồm cả ca đêm (Night Audit)", "Đối mặt trực tiếp với những vị khách đang bực bội hoặc mệt mỏi sau chuyến bay dài"],
        ["Kỹ năng giao tiếp và lắng nghe xoa dịu cảm xúc xuất sắc", "Tiếng Anh và ngoại ngữ thứ hai trôi chảy", "Tác phong thanh lịch, chỉn chu"],
        ["Tiếng Anh", "Ngữ văn", "Địa lý"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị Khách sạn hoặc Du lịch"}, {"level": "Cao đẳng", "description": "Cao đẳng Nghiệp vụ Lễ tân Khách sạn"}],
        "Tập nói câu chào đón khách đến nhận phòng bằng tiếng Anh với nụ cười thân thiện và giọng nói ấm áp.",
        "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80", "Nhân viên tiền sảnh khách sạn trao thẻ phòng cho du khách với nụ cười ấm áp"
    ))
    c.append(make_c(
        "chuyen-vien-to-chuc-tiec-cuoi-va-su-kien-mice", "Chuyên viên Tổ chức sự kiện & Tiệc cưới cao cấp (Event & Wedding Planner)", "MICE & Luxury Wedding Planner",
        ["Wedding Planner", "Chuyên viên tổ chức tiệc MICE"], g12, c12, l12, ["A", "E", "S"],
        "Lên ý tưởng trang trí hoa tươi, kịch bản âm thanh ánh sáng và điều phối tiệc cưới trong mơ hoặc hội nghị quốc tế nghìn người.",
        ["Gặp gỡ cô dâu chú rể để phác thảo ý tưởng chủ đề câu chuyện tình yêu", "Điều phối các đơn vị hoa tươi, ban nhạc, âm thanh ánh sáng và nhiếp ảnh gia", "Cầm kịch bản chi tiết điều phối từng phút trong đêm tiệc diễn ra suôn sẻ"],
        ["Kịch bản chương trình sự kiện (Event Timeline)", "Bản vẽ 3D phối cảnh sân khấu và không gian tiệc"],
        ["Phần mềm thiết kế sơ đồ bàn tiệc Banquet Event Order (BEO)", "Canva", "Bộ đàm điều phối sự kiện"],
        "Trung tâm hội nghị tiệc cưới, bãi biển resort tổ chức đám cưới, khách sạn 5 sao.",
        ["Sự kiện chỉ diễn ra một lần duy nhất trong đời khách hàng, không được phép xảy ra bất kỳ sai sót nào", "Làm việc cường độ cao vào cuối tuần và ban đêm"],
        ["Tư duy thẩm mỹ không gian tiệc sang trọng", "Khả năng quản trị thời gian và điều phối sân khấu", "Kỹ năng xử lý sự cố phát sinh bình tĩnh"],
        ["Mỹ thuật", "Ngữ văn", "Âm nhạc"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị Sự kiện, Quản trị Khách sạn hoặc Quan hệ công chúng"}],
        "Lên ý tưởng chủ đề màu sắc và một bài hát ý nghĩa cho buổi tiệc sinh nhật 18 tuổi của em.",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", "Không gian tiệc cưới lãng mạn trang trí hoa tươi ngoài trời"
    ))
    c.append(make_c(
        "chuyen-vien-thiet-ke-tour-trai-nghiem", "Chuyên viên Thiết kế tour du lịch trải nghiệm (Tour Itinerary Designer)", "Experiential Travel Product Designer",
        ["Chuyên viên phát triển sản phẩm du lịch", "Tour Designer"], g12, c12, l12, ["A", "I", "E"],
        "Khảo sát các cung đường trekking hoang sơ, làng nghề truyền thống và ẩm thực bản địa để tạo nên các hành trình du lịch độc lạ, ý nghĩa.",
        ["Đi thực địa khảo sát độ an toàn đường mòn leo núi và điểm cắm trại", "Thương lượng với người dân bản địa để mở các hoạt động trải nghiệm nấu ăn, dệt thổ cẩm", "Tính toán giá thành tour chi tiết và viết bài giới thiệu hành trình hấp dẫn"],
        ["Chương trình tour du lịch trải nghiệm độc quyền", "Bảng dự toán chi phí giá thành tour"],
        ["Google Earth 3D", "GPS theo dõi cung đường trekking", "Phần mềm tính giá tour"],
        "Công ty lữ hành du lịch trải nghiệm (Oxalis Adventure, Vietravel, Saigontourist).",
        ["Phải trèo đèo lội suối băng rừng để tìm kiếm các điểm đến hoang sơ mới", "Chịu trách nhiệm về mức độ an toàn của du khách trong các tour mạo hiểm"],
        ["Niềm đam mê khám phá thiên nhiên và văn hóa bản địa", "Kỹ năng đánh giá rủi ro an toàn du lịch mạo hiểm", "Kỹ năng kể chuyện truyền cảm hứng qua câu chữ"],
        ["Địa lý", "Lịch sử", "Ngữ văn", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị Dịch vụ du lịch & lữ hành hoặc Địa lý du lịch"}],
        "Tự thiết kế một lịch trình 2 ngày 1 đêm khám phá quê hương của em dành cho một người bạn từ xa tới chơi.",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80", "Du khách trải nghiệm cung đường trekking khám phá thiên nhiên hùng vĩ"
    ))
    c.append(make_c(
        "chuyen-gia-nem-thu-ruou-sommelier", "Chuyên gia Thẩm định và Phục vụ rượu vang (Sommelier)", "Certified Wine Sommelier",
        ["Chuyên gia rượu vang", "Sommelier"], g12, c12, l12, ["A", "E", "S"],
        "Quản lý hầm rượu vang nghìn chai, tư vấn loại rượu vang phối hợp hoàn hảo với món thịt bò hay hải sản để nâng tầm hương vị bữa tiệc.",
        ["Bảo quản nhiệt độ và độ ẩm chuẩn xác trong hầm rượu vang khách sạn", "Tư vấn cho thực khách loại rượu vang phù hợp với từng món ăn trên bàn tiệc", "Thực hiện nghi thức mở nắp chai, rót rượu và decanter thở rượu vang chuyên nghiệp"],
        ["Danh mục thực đơn rượu vang cao cấp (Wine List)", "Quy trình kết hợp món ăn và đồ uống chuẩn mực"],
        ["Bộ ly pha lê thử rượu vang", "Khui rượu vang chuyên dụng lưỡi kép", "Bình thở rượu Decanter"],
        "Nhà hàng cao cấp đạt sao Michelin, hầm rượu vang khách sạn 5 sao.",
        ["Phải học thuộc hàng nghìn vùng đất trồng nho, năm mùa vụ (vintage) trên khắp thế giới", "Cần giữ gìn khứu giác và vị giác nhạy bén, không hút thuốc lá hay ăn đồ quá cay"],
        ["Khứu giác và vị giác thẩm định tinh tế", "Kiến thức địa lý và lịch sử các vùng làm vang thế giới", "Nghi thức phục vụ bàn tiệc quý phái"],
        ["Địa lý", "Hóa học", "Tiếng Anh / Tiếng Pháp"],
        [{"level": "Đào tạo nghề", "description": "Chứng chỉ Sommelier quốc tế WSET (Wine & Spirit Education Trust) Level 2, 3 hoặc Court of Master Sommeliers"}],
        "Tìm hiểu tại sao người ta lại uống rượu vang trắng khi ăn hải sản và uống rượu vang đỏ khi ăn thịt bò bít tết.",
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80", "Chuyên gia Sommelier kiểm tra màu sắc rượu vang trong ly pha lê"
    ))
    c.append(make_c(
        "quan-ly-chuoi-nha-hang-fb", "Quản lý Vận hành chuỗi nhà hàng ẩm thực (F&B Operations Manager)", "Food & Beverage Multi-Unit Operations Manager",
        ["Quản lý chuỗi F&B", "F&B Operations Manager"], g12, c12, l12, ["E", "C"],
        "Giám sát chất lượng đồng đều tại hàng chục chi nhánh nhà hàng, tối ưu hóa chi phí nguyên vật liệu và doanh thu bán hàng.",
        ["Kiểm tra đột xuất quy trình chế biến và thái độ phục vụ tại các chi nhánh", "Phân tích doanh thu từng cửa hàng và đưa ra giải pháp cải thiện điểm bán yếu", "Đào tạo cửa hàng trưởng về quản lý chi phí nhân công và nguyên liệu"],
        ["Báo cáo hiệu quả kinh doanh chuỗi nhà hàng (P&L)", "Bộ quy chuẩn vận hành chuẩn hóa toàn chuỗi"],
        ["Phần mềm quản lý bán hàng F&B (iPOS, CukCuk)", "Hệ thống kiểm tra chất lượng Mystery Shopper"],
        "Trụ sở chuỗi ẩm thực (Golden Gate, RedSun, Pizza 4P's, Highlands Coffee), thường xuyên đi kiểm tra chi nhánh.",
        ["Xử lý các khủng hoảng vệ sinh an toàn thực phẩm nếu có chi nhánh vi phạm", "Áp lực duy trì sự tăng trưởng doanh thu liên tục"],
        ["Kỹ năng quản trị chuỗi bán lẻ ẩm thực", "Phân tích báo cáo lãi lỗ tài chính", "Khả năng lãnh đạo và chuẩn hóa quy trình"],
        ["Giáo dục kinh tế và pháp luật", "Toán học", "Ngữ văn"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị kinh doanh hoặc Quản trị dịch vụ du lịch & ẩm thực"}],
        "Vào một quán trà sữa hay gà rán trong chuỗi lớn và quan sát xem các bước nhân viên nhận đơn có giống nhau ở mọi chi nhánh không.",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80", "Không gian nhà hàng ẩm thực hiện đại đông đúc thực khách"
    ))
    c.append(make_c(
        "huong-dan-vien-du-lich-sinh-thai", "Hướng dẫn viên du lịch sinh thái & cộng đồng (Eco-tourism Guide)", "Eco-tourism & Community Guide",
        ["Hướng dẫn viên sinh thái", "Bản địa viên du lịch"], g12, c12, l12, ["R", "S", "E"],
        "Dẫn du khách lội suối ngắm chim, tìm hiểu thảm thực vật rừng nguyên sinh và trải nghiệm cuộc sống mộc mạc cùng đồng bào dân tộc thiểu số.",
        ["Thuyết minh sinh động về các loài động thực vật quý hiếm trong vườn quốc gia", "Hướng dẫn du khách nguyên tắc không để lại rác (Leave No Trace)", "Kết nối du khách cùng bà con bản địa giã bánh dày, nhảy sạp, ngủ nhà sàn"],
        ["Nhật ký an toàn hành trình tour sinh thái", "Thu nhập cải thiện cho các gia đình bản địa làm du lịch cộng đồng"],
        ["Ống nhòm ngắm chim chuyên dụng", "Túi sơ cấp cứu rắn cắn và chấn thương", "Bộ đàm định vị GPS"],
        "Vườn quốc gia Cúc Phương, Phong Nha - Kẻ Bàng, Pù Mát, Cát Tiên; các bản làng du lịch cộng đồng Tây Bắc.",
        ["Làm việc ngoài thiên nhiên rừng rậm có vắt, muỗi rừng và thời tiết mưa lũ bất ngờ", "Đòi hỏi thể lực bền bỉ và kỹ năng sinh tồn nơi hoang dã"],
        ["Kiến thức sinh thái học tự nhiên sâu rộng", "Kỹ năng sinh tồn và sơ cấp cứu ngoài trời", "Sự gắn kết chân thành với đồng bào bản địa"],
        ["Sinh học", "Địa lý", "Tiếng Anh"],
        [{"level": "Cao đẳng", "description": "Cao đẳng Hướng dẫn du lịch"}, {"level": "Đào tạo nghề", "description": "Thẻ Hướng dẫn viên du lịch nội địa / quốc tế"}],
        "Tìm hiểu nguyên tắc vàng của du lịch sinh thái: 'Không lấy gì ngoài những bức ảnh, không để lại gì ngoài những dấu chân'.",
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80", "Hướng dẫn viên sinh thái chỉ dẫn du khách khám phá thảm thực vật rừng"
    ))
    c.append(make_c(
        "chuyen-vien-trai-nghiem-khach-hang-du-lich", "Chuyên viên Quản trị trải nghiệm khách hàng du lịch (Hospitality Customer Experience - CX)", "Hospitality Customer Experience (CX) Specialist",
        ["Chuyên viên trải nghiệm khách hàng", "Hospitality CX Specialist"], g12, c12, l12, ["S", "E", "C"],
        "Phân tích từng điểm chạm từ lúc khách đặt phòng đến khi rời resort, bất ngờ tặng quà sinh nhật hay chuẩn bị gối ngủ theo sở thích cá nhân.",
        ["Lập bản đồ hành trình trải nghiệm của khách du lịch (Customer Journey Map)", "Đọc và phản hồi các đánh giá của du khách trên TripAdvisor, Agoda, Booking.com", "Thiết kế các khoảnh khắc bất ngờ đáng nhớ (Wow Moments) cho khách lưu trú"],
        ["Bản đồ hành trình trải nghiệm khách hàng", "Báo cáo chỉ số đo lường mức độ hài lòng khách hàng (NPS / CSAT)"],
        ["Hệ thống theo dõi phản hồi ReviewPro / TrustYou", "Phần mềm CRM", "Khảo sát trực tuyến"],
        "Resort nghỉ dưỡng cao cấp, tập đoàn du lịch nghỉ dưỡng.",
        ["Phải giữ bình tĩnh và khéo léo biến những phàn nàn tiêu cực thành trải nghiệm tích cực", "Luôn phải tìm tòi những ý tưởng chăm sóc khách hàng mới mẻ"],
        ["Tư duy thấu cảm và nhạy cảm với cảm xúc con người", "Kỹ năng phân tích phản hồi số liệu", "Sự chu đáo, tinh tế đến từng chi tiết nhỏ"],
        ["Tâm lý học", "Ngữ văn", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị Khách sạn, Quan hệ công chúng hoặc Tâm lý học"}],
        "Nghĩ ra một món quà nhỏ bất ngờ em có thể chuẩn bị để chào đón một người bạn thân đến nhà chơi sau một chuyến đi xa.",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80", "Resort nghỉ dưỡng chuẩn bị quà chào mừng cá nhân hóa cho khách hàng"
    ))

    # 13. TRUYỀN THÔNG, TIẾP THỊ VÀ SÁNG TẠO NỘI DUNG
    g13, c13, l13 = "truyen-thong-marketing", "Marketing", "Truyền thông, tiếp thị và sáng tạo nội dung"
    c.append(make_c(
        "chuyen-vien-marketing-so", "Chuyên viên Marketing & Digital Marketing (Digital Marketing Specialist)", "Digital Marketing Specialist",
        ["Chuyên viên tiếp thị số", "Digital Marketer"], g13, c13, l13, ["E", "A", "C"],
        "Lập kế hoạch chiến dịch truyền thông ra mắt sản phẩm mới, phối hợp quảng cáo đa kênh và đo lường tỷ lệ chuyển đổi khách hàng.",
        ["Định vị thông điệp truyền thông cốt lõi (Tagline) chạm trúng tâm lý khách hàng", "Phân bổ ngân sách quảng cáo giữa các kênh mạng xã hội và phát mẫu thử", "Đọc số liệu chuyển đổi đơn hàng và phân tích phản ứng dư luận sau chiến dịch"],
        ["Kế hoạch chiến dịch Marketing tổng thể", "Báo cáo hiệu quả tỷ lệ hoàn vốn đầu tư quảng cáo (ROAS)"],
        ["Meta Ads Manager", "Google Ads", "TikTok Ads Manager", "Google Analytics 4"],
        "Phòng Marketing doanh nghiệp, Agency quảng cáo sáng tạo.",
        ["Thuật toán quảng cáo mạng xã hội thay đổi liên tục đòi hỏi thử nghiệm hàng ngày", "Áp lực doanh số bán hàng và ngân sách quảng cáo"],
        ["Tư duy thấu hiểu tâm lý khách hàng", "Kỹ năng phân tích số liệu chuyển đổi", "Khả năng sáng tạo ý tưởng truyền thông bắt trend"],
        ["Ngữ văn", "Toán học", "Tiếng Anh", "Giáo dục kinh tế và pháp luật"],
        [{"level": "Đại học", "description": "Cử nhân Marketing, Quản trị kinh doanh hoặc Truyền thông đa phương tiện"}, {"level": "Cao đẳng", "description": "Cao đẳng Digital Marketing"}],
        "Lướt mạng xã hội và ghi lại 3 câu khẩu hiệu (slogan) quảng cáo khiến em ấn tượng nhất.",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", "Chuyên viên marketing phân tích hiệu quả chiến dịch trên biểu đồ",
        sim_id="task-marketing"
    ))
    c.append(make_c(
        "nguoi-sang-tao-noi-dung-da-nen-tang", "Người sáng tạo nội dung đa nền tảng (Multi-platform Content Creator)", "Digital Content Creator & Influencer",
        ["Content Creator", "Nhà sáng tạo nội dung TikTok/YouTube"], g13, c13, l13, ["A", "E", "S"],
        "Lên ý tưởng kịch bản, quay dựng video ngắn TikTok, Reels và YouTube Shorts chia sẻ kiến thức, phong cách sống thu hút hàng triệu người xem.",
        ["Nghiên cứu xu hướng âm nhạc và chủ đề thịnh hành hàng tuần", "Viết kịch bản video ngắn có mở đầu giật gân (Hook) trong 3 giây đầu", "Tự quay phim, diễn xuất tự nhiên và dựng video chèn phụ đề bắt mắt"],
        ["Video ngắn đạt triệu lượt xem có tính lan tỏa cao", "Kịch bản chi tiết phân cảnh quay video"],
        ["CapCut", "Premiere Pro", "Đèn Ring Light", "Micro thu âm cài áo không dây"],
        "Studio tự do tại nhà, làm việc linh hoạt ở quán cafe hoặc ngoài trời.",
        ["Áp lực cạn kiệt ý tưởng sáng tạo (Burnout) khi phải ra video đều đặn mỗi ngày", "Đối diện với những bình luận chỉ trích tiêu cực từ cộng đồng mạng"],
        ["Khả năng biểu đạt trước ống kính tự tin", "Kỹ năng kể chuyện bằng hình ảnh và âm nhạc", "Tư duy bắt nhịp xu hướng văn hóa giới trẻ"],
        ["Ngữ văn", "Mỹ thuật", "Âm nhạc"],
        [{"level": "Đại học", "description": "Cử nhân Báo chí, Truyền thông đa phương tiện, Đạo diễn hoặc Tự do thực hành xây kênh"}],
        "Thử tự quay và dựng một video ngắn 30 giây chia sẻ mẹo học thuộc nhanh một bài thơ trên CapCut.",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80", "Nhà sáng tạo nội dung quay video trước đèn chiếu và chân máy"
    ))
    c.append(make_c(
        "chuyen-vien-seo-website", "Chuyên viên Tối ưu hóa công cụ tìm kiếm (Search Engine Optimization - SEO Specialist)", "SEO Specialist",
        ["Chuyên viên SEO", "SEO Specialist"], g13, c13, l13, ["C", "I"],
        "Nghiên cứu từ khóa người dùng tìm kiếm trên Google, tối ưu hóa bài viết và cấu trúc website để đưa trang web lên vị trí top 1 Google tự nhiên.",
        ["Nghiên cứu bộ từ khóa có lượng tìm kiếm cao và độ cạnh tranh phù hợp", "Tối ưu hóa thẻ tiêu đề, thẻ mô tả, thẻ heading và tốc độ tải trang web (On-page SEO)", "Xây dựng mạng lưới liên kết uy tín trỏ về website (Backlink)"],
        ["Bộ từ khóa mục tiêu xếp hạng top 1-3 Google", "Báo cáo lưu lượng truy cập tự nhiên (Organic Traffic) tăng trưởng"],
        ["Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog SEO Spider"],
        "Phòng Marketing doanh nghiệp, công ty dịch vụ SEO chuyên nghiệp.",
        ["Thuật toán Google cập nhật liên tục có thể khiến từ khóa rớt hạng sau một đêm", "Kết quả SEO cần thời gian từ 3 đến 6 tháng kiên trì mới thấy rõ thành quả"],
        ["Kỹ năng nghiên cứu và phân tích từ khóa", "Hiểu biết kỹ thuật cấu trúc website HTML/CSS cơ bản", "Tư duy viết nội dung giải quyết đúng thắc mắc người dùng"],
        ["Tin học", "Toán học", "Ngữ văn", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Thương mại điện tử, CNTT hoặc Marketing"}],
        "Lên Google gõ một câu hỏi bất kỳ và quan sát xem bài viết đầu tiên trả lời câu hỏi đó hay và rõ ràng thế nào.",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80", "Chuyên viên SEO kiểm tra thứ hạng từ khóa trên công cụ tìm kiếm"
    ))
    c.append(make_c(
        "chuyen-vien-quan-he-bao-chi-pr", "Chuyên viên Quan hệ báo chí và Truyền thông (Media Relations / PR Officer)", "Corporate PR & Media Relations Officer",
        ["Chuyên viên PR", "PR Officer"], g13, c13, l13, ["E", "A", "S"],
        "Viết thông cáo báo chí, tổ chức họp báo ra mắt sản phẩm và duy trì mối quan hệ tốt đẹp với các nhà báo, đài truyền hình.",
        ["Soạn thảo thông cáo báo chí chuẩn văn phong báo chí sắc sảo", "Tổ chức họp báo, đón tiếp phóng viên và điều phối phỏng vấn ban lãnh đạo", "Theo dõi dòng chảy tin tức hàng ngày để cảnh báo và xử lý rủi ro khủng hoảng truyền thông"],
        ["Thông cáo báo chí gửi các cơ quan thông tấn", "Báo cáo tổng hợp lượng bài viết báo chí đưa tin về thương hiệu"],
        ["Cơ sở dữ liệu danh bạ nhà báo", "Google Alerts theo dõi tin tức", "Phần mềm biên tập văn bản"],
        "Phòng truyền thông đối ngoại doanh nghiệp, tập đoàn lớn, cơ quan nhà nước.",
        ["Áp lực phản ứng tức thời 24/7 khi xảy ra khủng hoảng thông tin sai lệch trên mạng", "Cần sự khéo léo tối đa trong lời ăn tiếng nói trước công chúng"],
        ["Kỹ năng viết lách báo chí gãy gọn, chuẩn xác", "Kỹ năng kết nối ngoại giao và xây dựng mối quan hệ", "Bình tĩnh trước khủng hoảng truyền thông"],
        ["Ngữ văn", "Lịch sử", "Giáo dục công dân / Kinh tế & Pháp luật"],
        [{"level": "Đại học", "description": "Cử nhân Báo chí, Quan hệ công chúng (Học viện Báo chí & Tuyên truyền, ĐH KHXH&NV)"}],
        "Đọc một bài viết trên báo điện tử và tìm xem thông tin trong bài được trích dẫn từ nguồn nào.",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80", "Chuyên viên PR điều phối buổi họp báo ra mắt thông tin"
    ))
    c.append(make_c(
        "nha-san-xuat-video-podcast", "Nhà sản xuất Video và Podcast (Multimedia Producer)", "Digital Video & Audio Podcast Producer",
        ["Producer truyền thông", "Podcast Producer"], g13, c13, l13, ["A", "E", "R"],
        "Lên format chương trình, chọn lọc khách mời, thu âm giọng nói chuyên nghiệp và chỉ đạo sản xuất các tập podcast trò chuyện truyền cảm hứng.",
        ["Xây dựng chủ đề thảo luận và câu hỏi phỏng vấn khách mời sâu sắc", "Điều chỉnh micro lọc tạp âm và thu âm phòng thu cách âm", "Biên tập cắt ghép âm thanh, lồng nhạc nền và xuất bản lên Spotify, Apple Podcasts"],
        ["Tập podcast âm thanh chất lượng cao hoàn chỉnh", "Kế hoạch sản xuất các mùa phát sóng (Season)"],
        ["Phần mềm thu âm Adobe Audition / Audacity", "Micro thu âm Shure SM7B", "Hệ thống mixer âm thanh"],
        "Phòng thu âm Podcast Studio, công ty truyền thông đa phương tiện.",
        ["Khách mời có thể nói vấp hoặc lạc đề đòi hỏi người sản xuất kiên nhẫn biên tập từng câu", "Cần giữ chất lượng âm thanh đồng đều không bị rè hay vang"],
        ["Kỹ thuật thu âm và xử lý âm thanh số", "Nghệ thuật lắng nghe và khai thác câu chuyện từ khách mời", "Tư duy biên tập mạch lạc"],
        ["Ngữ văn", "Vật lý (Âm học)", "Âm nhạc", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Báo chí phát thanh - truyền hình, Đạo diễn âm thanh hoặc Công nghệ truyền thông"}],
        "Mở ứng dụng Spotify nghe thử một tập podcast hướng nghiệp và chú ý cách họ lồng nhạc mở đầu chương trình.",
        "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80", "Nhà sản xuất điều chỉnh bàn mixer trong phòng thu podcast"
    ))
    c.append(make_c(
        "chuyen-vien-chay-quang-cao-performance", "Chuyên viên Tối ưu hóa quảng cáo chuyển đổi (Performance Media Buyer)", "Performance Marketing & Media Buyer",
        ["Chuyên viên chạy ads", "Media Buyer"], g13, c13, l13, ["C", "E", "I"],
        "Cài đặt mã theo dõi pixel, chạy thử nghiệm A/B hình ảnh video quảng cáo và tối ưu hóa chi phí trên mỗi đơn hàng (CPA) cho sàn TMĐT.",
        ["Thiết lập chiến dịch quảng cáo nhắm mục tiêu chuẩn xác đối tượng khách hàng tiềm năng", "Theo dõi chỉ số giá mỗi lượt click (CPC) và giá mỗi đơn hàng (CPA) từng giờ", "Tắt các mẫu quảng cáo không hiệu quả và tăng ngân sách cho các mẫu quảng cáo sinh lời cao"],
        ["Bảng theo dõi chỉ số hiệu quả quảng cáo hàng ngày", "Chiến dịch quảng cáo mang lại doanh thu nghìn đơn"],
        ["Facebook Ads Manager", "Google Ads Editor", "TikTok Ads", "Google Tag Manager"],
        "Công ty bán lẻ trực tuyến, sàn thương mại điện tử, Agency chuyên sâu performance.",
        ["Tài khoản quảng cáo có thể bị khóa bất ngờ đòi hỏi kỹ năng kháng nghị nhanh", "Áp lực duy trì doanh số đơn hàng mỗi ngày"],
        ["Tư duy số liệu tài chính quảng cáo", "Khả năng phân tích tâm lý hành vi mua sắm", "Thử nghiệm A/B testing khoa học"],
        ["Toán học", "Tin học", "Giáo dục kinh tế và pháp luật"],
        [{"level": "Đại học", "description": "Cử nhân Thương mại điện tử, Marketing hoặc Hệ thống thông tin kinh tế"}],
        "Tìm hiểu tại sao khi em vừa tìm kiếm một đôi giày thể thao trên mạng thì ngay sau đó lướt Facebook lại thấy hiện quảng cáo đôi giày đó.",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", "Chuyên viên phân tích tối ưu chi phí quảng cáo trực tuyến"
    ))
    c.append(make_c(
        "quan-ly-thuong-hieu-brand-manager", "Quản lý Thương hiệu (Brand Manager)", "Brand Manager",
        ["Quản lý nhãn hàng", "Brand Manager"], g13, c13, l13, ["E", "A", "I"],
        "Xây dựng tính cách thương hiệu, thiết kế bao bì sản phẩm và bảo vệ uy tín hình ảnh thương hiệu trong tâm trí người tiêu dùng.",
        ["Nghiên cứu insight ngầm hiểu của người tiêu dùng để định vị sự khác biệt của nhãn hàng", "Phối hợp với phòng R&D và thiết kế hoàn thiện bao bì sản phẩm mới bắt mắt", "Dẫn dắt các chiến dịch truyền thông thương hiệu lớn xuyên suốt cả năm"],
        ["Cẩm nang định vị thương hiệu (Brand Guideline)", "Kế hoạch phát triển nhãn hàng dài hạn"],
        ["Báo cáo nghiên cứu thị trường Nielsen / Kantar", "Phần mềm quản lý dự án Asana", "Slide thuyết trình chiến lược"],
        "Tập đoàn hàng tiêu dùng đa quốc gia (Unilever, Suntory PepsiCo, Vinamilk, Masan).",
        ["Gánh vác trách nhiệm về thị phần và sức sống của cả một nhãn hàng nghìn tỷ", "Phải điều phối đồng thuận giữa nhiều phòng ban có quan điểm khác nhau"],
        ["Tầm nhìn chiến lược nhãn hàng dài hạn", "Sự nhạy cảm tinh tế với thị hiếu người tiêu dùng", "Kỹ năng truyền cảm hứng và dẫn dắt đội ngũ"],
        ["Giáo dục kinh tế và pháp luật", "Ngữ văn", "Tâm lý học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị kinh doanh, Marketing hoặc Thạc sĩ Quản trị thương hiệu"}],
        "Nhìn một chai nước ngọt Coca-Cola và chai Pepsi, liệt kê 3 điểm khác biệt về màu sắc và cảm xúc mà 2 thương hiệu mang lại.",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80", "Quản lý thương hiệu thuyết trình chiến lược định vị nhãn hàng mới"
    ))
    c.append(make_c(
        "chuyen-vien-to-chuc-su-kien-truyen-thong", "Chuyên viên Tổ chức sự kiện truyền thông (Event Operations Coordinator)", "Media Event Operations Coordinator",
        ["Điều phối viên sự kiện", "Event Coordinator"], g13, c13, l13, ["E", "R", "S"],
        "Khảo sát địa điểm, dàn dựng sân khấu hoành tráng, thuê nghệ sĩ và điều hành đêm đại nhạc hội hay lễ trao giải diễn ra trọn vẹn.",
        ["Lên dự toán ngân sách chi tiết cho từng hạng mục âm thanh, ánh sáng, màn hình LED", "Điều hành lắp ráp khung giàn sân khấu ngoài trời đảm bảo an toàn kết cấu", "Bấm nhạc, chuyển cảnh màn hình và điều phối ca sĩ lên biểu diễn đúng nhịp kịch bản"],
        ["Kịch bản điều hành sân khấu chi tiết (Cue sheet)", "Bản vẽ sơ đồ bố trí khu vực khán giả và phân luồng an ninh"],
        ["Bộ đàm điều phối nội bộ", "Phần mềm chiếu màn hình LED Resolume Arena", "Kịch bản chạy chương trình A4"],
        "Công ty tổ chức sự kiện chuyên nghiệp, sân vận động, trung tâm hội nghị triển lãm.",
        ["Làm việc thâu đêm dựng sân khấu và đứng liên tục suốt chương trình", "Nếu mất điện hoặc micro hỏng giữa chừng phải có phương án dự phòng ngay lập tức"],
        ["Kỹ năng quản lý thời gian và phản xạ tình huống cực nhanh", "Khả năng chịu áp lực cao trong môi trường ồn ào", "Kỹ năng điều phối hàng trăm con người"],
        ["Ngữ văn", "Vật lý", "Âm nhạc"],
        [{"level": "Đại học", "description": "Cử nhân Đạo diễn sự kiện, Quản trị sự kiện hoặc Báo chí truyền thông"}, {"level": "Cao đẳng", "description": "Cao đẳng Tổ chức sự kiện"}],
        "Xem một lễ bế giảng năm học ở trường và quan sát xem ai là người đứng cầm kịch bản chỉ huy các tiết mục văn nghệ.",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80", "Ánh sáng sân khấu hoành tráng trong một sự kiện âm nhạc lớn"
    ))
    c.append(make_c(
        "chuyen-vien-phan-tich-du-luan-mang-xa-hoi", "Chuyên viên Phân tích mạng xã hội (Social Media Listening Analyst)", "Social Media Listening & Sentiment Analyst",
        ["Chuyên viên Social Listening", "Social Listening Analyst"], g13, c13, l13, ["I", "C", "A"],
        "Dùng công cụ AI quét hàng triệu thảo luận trên Facebook, TikTok để đo lường cảm xúc người dùng khen hay chê thương hiệu.",
        ["Thiết lập từ khóa theo dõi thương hiệu và đối thủ cạnh tranh trên công cụ lắng nghe mạng xã hội", "Phân loại các sắc thái thảo luận (Tích cực, Tiêu cực, Trung tính)", "Cảnh báo sớm cho ban giám đốc khi phát hiện tin tiêu cực có dấu hiệu bùng phát thành khủng hoảng"],
        ["Báo cáo đo lường sắc thái thảo luận mạng xã hội (Social Sentiment Report)", "Báo cáo phân tích đối thủ cạnh tranh"],
        ["YouNet Media", "Buzzmetrics", "Kompa", "Excel phân tích số liệu"],
        "Công ty phân tích dữ liệu truyền thông, phòng quan hệ công chúng tập đoàn.",
        ["Đọc hàng nghìn bình luận trên mạng mỗi ngày dễ bị ảnh hưởng tâm lý tiêu cực", "Cần phân biệt đâu là ý kiến người dùng thật và đâu là tài khoản ảo (Seeding/Bot)"],
        ["Kỹ năng phân tích ngữ nghĩa và tâm lý đám đông mạng xã hội", "Thành thạo công cụ phân tích Social Listening", "Tư duy phát hiện xu hướng mới nổi"],
        ["Ngữ văn", "Toán học", "Xã hội học"],
        [{"level": "Đại học", "description": "Cử nhân Xã hội học, Báo chí truyền thông, Thống kê hoặc Khoa học dữ liệu"}],
        "Đọc phần bình luận dưới một bài đăng gây tranh cãi trên mạng và thử đếm xem có bao nhiêu người đồng tình, bao nhiêu người phản đối.",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", "Chuyên viên theo dõi đồ thị biến động dư luận trên mạng xã hội"
    ))
    c.append(make_c(
        "copywriter-sang-tao-thong-diep", "Người sáng tạo thông điệp quảng cáo (Creative Copywriter)", "Advertising Creative Copywriter",
        ["Copywriter", "Nhà sáng tạo câu chữ quảng cáo"], g13, c13, l13, ["A", "E"],
        "Chơi đùa với ngôn từ, sáng tạo các câu slogan bắt tai, lời thoại kịch bản video viral và câu chuyện thương hiệu chạm đến trái tim người tiêu dùng.",
        ["Nghĩ hàng trăm câu tiêu đề quảng cáo ngắn gọn, sắc bén cho một chiến dịch", "Viết kịch bản phim quảng cáo truyền hình (TVC) dài 30 giây đầy cảm xúc", "Đặt tên cho dòng sản phẩm mới dễ nhớ, dễ đọc và bảo hộ thương hiệu được"],
        ["Kịch bản phim quảng cáo TVC kèm lời bình", "Bộ câu khẩu hiệu và thông điệp truyền thông sáng tạo"],
        ["Sổ tay ghi chép ý tưởng", "Phần mềm viết kịch bản Celtx", "Kho tàng từ điển ca dao tục ngữ và tiếng lóng"],
        "Các Creative Agency quảng cáo hàng đầu (Ogilvy, Dentsu, DDB, Leo Burnett).",
        ["Phải vắt kiệt chất xám để tìm ra ý tưởng độc lạ chưa ai từng làm", "Ý tưởng tâm đắc có thể bị khách hàng từ chối nhiều lần"],
        ["Vốn từ vựng tiếng Việt phong phú, đa tầng nghĩa", "Trực giác nhạy bén với cảm xúc con người", "Khả năng biến điều phức tạp thành một câu nói đơn giản, ấn tượng"],
        ["Ngữ văn", "Lịch sử", "Mỹ thuật", "Âm nhạc"],
        [{"level": "Đại học", "description": "Cử nhân Văn học, Báo chí, Ngôn ngữ học hoặc Truyền thông sáng tạo"}],
        "Thử nghĩ 3 câu slogan thật bắt tai cho một ứng dụng giúp học sinh chọn đúng nghề nghiệp.",
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80", "Copywriter ghi chép và sáng tạo những câu chữ quảng cáo độc đáo"
    ))

    # 14. THIẾT KẾ ĐỒ HỌA, THỜI TRANG VÀ MỸ THUẬT
    g14, c14, l14 = "thiet-ke-my-thuat", "ThietKe", "Thiết kế đồ họa, thời trang và mỹ thuật"
    c.append(make_c(
        "nha-thiet-ke-do-hoa-nhan-dien", "Nhà thiết kế đồ họa nhận diện thương hiệu (Brand Identity Graphic Designer)", "Brand Identity Graphic Designer",
        ["Thiết kế đồ họa", "Graphic Designer"], g14, c14, l14, ["A", "R", "C"],
        "Sáng tạo logo, bảng màu, kiểu chữ và cẩm nang nhận diện thương hiệu giúp sản phẩm nổi bật và tạo dấu ấn tin cậy trong mắt khách hàng.",
        ["Vẽ phác thảo hàng chục ý tưởng logo trên giấy", "Chuẩn hóa logo trên phần mềm Illustrator theo tỷ lệ hình học chuẩn", "Thiết kế bao bì, danh thiếp, phong bì thư và biển bảng quảng cáo"],
        ["Hồ sơ quy chuẩn nhận diện thương hiệu (Brand Identity Guidelines)", "Tệp logo vector độ phân giải cao phục vụ in ấn"],
        ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Bảng vẽ điện tử Wacom"],
        "Design Studio, công ty quảng cáo sáng tạo, làm việc tự do (Freelance).",
        ["Khách hàng thường yêu cầu chỉnh sửa nhiều lần (sửa logo to lên, đổi màu sắc)", "Ngồi làm việc với máy tính liên tục dễ mỏi mắt và đau cổ tay"],
        ["Tư duy thẩm mỹ thị giác và bố cục", "Hiểu biết sâu sắc về lý thuyết màu sắc và nghệ thuật chữ (Typography)", "Thành thạo các công cụ đồ họa chuyên nghiệp"],
        ["Mỹ thuật", "Toán học (Hình học)", "Ngữ văn"],
        [{"level": "Đại học", "description": "Cử nhân Thiết kế Đồ họa (ĐH Mỹ thuật Công nghiệp, ĐH Kiến trúc, ĐH Mỹ thuật TP.HCM)"}, {"level": "Cao đẳng", "description": "Cao đẳng Thiết kế Đồ họa chuyên nghiệp"}],
        "Lấy một tờ giấy trắng và vẽ thử 3 ý tưởng logo cho một tiệm bánh mì truyền thống của gia đình.",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80", "Nhà thiết kế đồ họa vẽ phác thảo logo trên bảng vẽ kỹ thuật số",
        sim_id="task-thiet-ke-do-hoa"
    ))
    c.append(make_c(
        "nha-thiet-ke-giao-dien-ui-ux", "Nhà thiết kế giao diện và trải nghiệm người dùng (UI/UX Designer)", "Product UI/UX Designer",
        ["Thiết kế UI/UX", "UI/UX Designer"], g14, c14, l14, ["A", "I", "C"],
        "Nghiên cứu thói quen bấm ngón tay của người dùng, thiết kế giao diện ứng dụng điện thoại đẹp mắt, dễ bấm và không gây nhầm lẫn.",
        ["Phỏng vấn người dùng và vẽ sơ đồ luồng trải nghiệm (User Flow)", "Dựng khung dây bố cục giao diện đen trắng (Wireframe)", "Thiết kế giao diện màu sắc hoàn chỉnh và làm nguyên mẫu tương tác (Interactive Prototype)"],
        ["Bản thiết kế giao diện ứng dụng hoàn chỉnh trên Figma", "Bộ thư viện thành phần giao diện Design System"],
        ["Figma", "Adobe XD", "Miro", "Protopie"],
        "Công ty công nghệ, ngân hàng số, studio phát triển ứng dụng di động.",
        ["Phải liên tục bảo vệ lý do tại sao lại đặt nút bấm ở vị trí đó trước các kỹ sư lập trình", "Cần cập nhật các xu hướng thiết kế giao diện mới của Apple và Google liên tục"],
        ["Tư duy lấy người dùng làm trung tâm", "Khả năng xây dựng hệ thống thiết kế nhất quán", "Kỹ năng thử nghiệm người dùng Usability Testing"],
        ["Mỹ thuật", "Tin học", "Tâm lý học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Thiết kế Đồ họa, Đa phương tiện hoặc Công nghệ thông tin"}],
        "Mở ứng dụng đặt đồ ăn trên điện thoại và quan sát xem nút 'Đặt món' màu gì, đặt ở đâu để dễ bấm nhất bằng ngón tay cái.",
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80", "Nhà thiết kế UI/UX sắp xếp các khung màn hình ứng dụng trên Figma"
    ))
    c.append(make_c(
        "nha-thiet-ke-thoi-trang-ben-vung", "Nhà thiết kế thời trang bền vững (Sustainable Fashion Designer)", "Sustainable Fashion Designer",
        ["Nhà thiết kế thời trang", "Fashion Designer"], g14, c14, l14, ["A", "R"],
        "Phác thảo bộ sưu tập trang phục, lựa chọn vải sợi tự nhiên (vải gai dầu, tơ tằm, bông hữu cơ) và kỹ thuật nhuộm màu từ lá cây, vỏ quả.",
        ["Vẽ phác thảo dáng người mẫu và trang phục trên giấy (Fashion sketch)", "Lựa chọn chất liệu vải sinh học thân thiện với môi trường và nhuộm thảo mộc", "Cắt rập may mẫu thử nghiệm đầu tiên (Toile) và căn chỉnh phom dáng trên manocanh"],
        ["Bộ sưu tập thời trang hoàn chỉnh theo mùa", "Bản vẽ kỹ thuật may đo trang phục (Tech Pack)"],
        ["Bảng vẽ điện tử", "Manocanh chuẩn phom", "Kéo cắt vải chuyên dụng", "Máy may công nghiệp"],
        "Thương hiệu thời trang thiết kế, xưởng may mẫu, sàn diễn thời trang Fashion Week.",
        ["Chi phí sản xuất vải sinh học cao hơn vải hóa học thông thường", "Áp lực ra mắt bộ sưu tập mới liên tục theo mùa"],
        ["Năng khiếu phác họa dáng người và trang phục", "Hiểu biết sâu sắc về tính chất rơi và độ co giãn của từng loại vải", "Tư duy thời trang tuần hoàn bảo vệ môi trường"],
        ["Mỹ thuật", "Hóa học", "Sinh học", "Lịch sử"],
        [{"level": "Đại học", "description": "Cử nhân Thiết kế Thời trang (ĐH Mỹ thuật Công nghiệp, ĐH Kiến trúc, ĐH Công nghiệp)"}, {"level": "Cao đẳng", "description": "Cao đẳng Thiết kế Thời trang"}],
        "Tìm hiểu về cách nhuộm vải bằng lá chàm của đồng bào H'Mông tạo nên màu xanh thẫm tự nhiên độc đáo.",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80", "Nhà thiết kế thời trang phác thảo mẫu váy trên bàn cắt may"
    ))
    c.append(make_c(
        "hoa-si-ve-minh-hoa-ky-thuat-so", "Họa sĩ vẽ minh họa kỹ thuật số (Digital Illustrator)", "Digital Illustrator & Concept Artist",
        ["Họa sĩ vẽ minh họa", "Digital Illustrator"], g14, c14, l14, ["A", "R"],
        "Vẽ bìa sách tranh thiếu nhi, tranh minh họa báo chí và thiết kế các tác phẩm nghệ thuật kỹ thuật số bằng bút vẽ điện tử.",
        ["Nghiên cứu nội dung câu chuyện và phác thảo bố cục tranh minh họa", "Phối màu sắc, vẽ chi tiết ánh sáng và bóng đổ tạo chiều sâu cảm xúc", "Xuất tệp in ấn chuẩn màu CMYK hoặc đăng tải trên các nền tảng nghệ thuật quốc tế"],
        ["Tác phẩm tranh minh họa hoàn chỉnh", "Bộ minh họa sách tranh cho nhà xuất bản"],
        ["Photoshop", "Procreate trên iPad", "Bảng vẽ Wacom Cintiq", "Clip Studio Paint"],
        "Studio vẽ tranh minh họa, nhà xuất bản sách, làm việc tự do tại nhà.",
        ["Vẽ nhiều giờ liền bằng bút điện tử dễ bị chai ngón tay và mỏi mắt", "Cần xây dựng phong cách vẽ độc đáo (Art style) riêng để không bị hòa lẫn"],
        ["Kỹ năng vẽ tay hình họa vững chắc", "Cảm thụ màu sắc và ánh sáng điêu luyện", "Kể câu chuyện giàu cảm xúc qua từng nét vẽ"],
        ["Mỹ thuật", "Ngữ văn", "Lịch sử"],
        [{"level": "Đại học", "description": "Cử nhân Hội họa, Đồ họa tạo hình (ĐH Mỹ thuật Việt Nam, ĐH Mỹ thuật TP.HCM)"}, {"level": "Cao đẳng", "description": "Cao đẳng Thiết kế Đồ họa & Minh họa"}],
        "Dùng bút chì vẽ một bức tranh minh họa một góc ban công có chậu cây và chú mèo đang sưởi nắng.",
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80", "Họa sĩ vẽ tranh minh họa kỹ thuật số bằng bút cảm ứng trên màn hình"
    ))
    c.append(make_c(
        "hoa-si-dien-hoat-2d-3d", "Họa sĩ diễn hoạt hoạt hình (2D / 3D Animator)", "2D / 3D Character Animator",
        ["Animator", "Họa sĩ làm phim hoạt hình"], g14, c14, l14, ["A", "R", "I"],
        "Thổi hồn cho nhân vật hoạt hình chuyển động mượt mà, nhảy múa, biểu cảm khóc cười tuân thủ 12 nguyên tắc diễn hoạt kinh điển.",
        ["Gắn xương chuyển động cho mô hình nhân vật (Rigging)", "Tạo các dáng chuyển động then chốt (Keyframe) và tinh chỉnh đường cong chuyển động", "Đồng bộ khẩu hình miệng của nhân vật khớp với giọng lồng tiếng (Lip-sync)"],
        ["Đoạn phim hoạt hình chuyển động sống động", "Thư viện chu kỳ di chuyển (Walk cycle, Run cycle) của nhân vật"],
        ["Maya", "Blender", "Toon Boom Harmony", "After Effects"],
        "Xưởng phim hoạt hình 2D/3D, studio sản xuất game, công ty kỹ xảo điện ảnh.",
        ["Để làm ra 1 giây hoạt hình mượt mà đôi khi mất cả ngày làm việc tỉ mỉ", "Đòi hỏi sự kiên nhẫn tột bực với từng khung hình"],
        ["Cảm nhận nhịp điệu và thời gian chuyển động (Timing & Spacing)", "Hiểu sâu 12 nguyên tắc diễn hoạt của Disney", "Khả năng quan sát cử chỉ biểu cảm đời thực"],
        ["Mỹ thuật", "Vật lý", "Tin học"],
        [{"level": "Đại học", "description": "Cử nhân Hoạt hình, Kỹ xảo điện ảnh hoặc Thiết kế Đa phương tiện"}, {"level": "Đào tạo nghề", "description": "Khóa đào tạo chuyên nghiệp 3D Animation"}],
        "Lật nhanh cuốn sổ tay có vẽ một hình người que ở từng trang để thấy hình người nhảy múa (Flipbook).",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", "Họa sĩ hoạt hình tinh chỉnh các khung hình chuyển động trên phần mềm 3D"
    ))
    c.append(make_c(
        "nghe-si-tao-hinh-nhan-vat-3d", "Nghệ sĩ tạo hình nhân vật 3D (3D Character Artist)", "3D Character Sculpting & Modeling Artist",
        ["Nghệ sĩ 3D", "3D Modeler"], g14, c14, l14, ["A", "R"],
        "Nặn tượng số (Digital Sculpting) từng nếp nhăn da, cơ bắp quái vật và vũ khí cho các tựa game bom tấn thế giới.",
        ["Điêu khắc khối cơ bắp nhân vật hàng triệu đa giác trên phần mềm ZBrush", "Làm phẳng bề mặt lưới đa giác (Retopology) để nhân vật có thể cử động nhẹ nhàng", "Vẽ chất liệu da, kim loại rỉ sét và vải rách bằng Substance Painter"],
        ["Mô hình nhân vật 3D chi tiết cao kèm chất liệu kết cấu (Texture maps)", "Tệp 3D tối ưu sẵn sàng đưa vào game engine"],
        ["ZBrush", "Substance 3D Painter", "Blender", "Marmoset Toolbag"],
        "Studio sản xuất game quốc tế (Virtuos, Sparx* - A Virtuos Studio, Glass Egg), xưởng phim kỹ xảo.",
        ["Học giải phẫu học cơ bắp người và động vật cực kỳ chi tiết", "Phải đáp ứng giới hạn số lượng đa giác (Polycount) khắt khe của game"],
        ["Điêu khắc số 3D điêu luyện", "Hiểu biết giải phẫu học tạo hình cơ bắp", "Cảm nhận chất liệu bề mặt chân thực"],
        ["Mỹ thuật", "Sinh học (Giải phẫu)", "Tin học"],
        [{"level": "Đại học", "description": "Cử nhân Điêu khắc, Mỹ thuật hoặc Thiết kế Game 3D"}, {"level": "Đào tạo nghề", "description": "Chứng chỉ 3D Game Art chuyên nghiệp"}],
        "Lấy một cục đất sét nặn thử một chiếc đầu rồng nhỏ để cảm nhận cảm giác tạo khối trong không gian 3 chiều.",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", "Nghệ sĩ điêu khắc mô hình nhân vật 3D chi tiết trên ZBrush"
    ))
    c.append(make_c(
        "nha-thiet-ke-tao-dang-cong-nghiep", "Nhà thiết kế tạo dáng công nghiệp (Industrial Product Designer)", "Industrial & Consumer Product Designer",
        ["Thiết kế sản phẩm", "Product Designer"], g14, c14, l14, ["R", "A", "I"],
        "Tạo dáng chiếc quạt máy, mũ bảo hiểm, bàn chải điện hay chiếc xe máy điện vừa vặn với tay cầm và quyến rũ người tiêu dùng.",
        ["Phác thảo ý tưởng hình dáng công thái học (Ergonomics) trên giấy", "Dựng mô hình 3D mặt cong tự do (NURBS Surfacing) trên Rhino", "In mẫu thử nghiệm bằng máy in 3D để cầm nắm thử cảm giác thực tế"],
        ["Bản vẽ 3D tạo dáng sản phẩm hoàn chỉnh", "Mô hình mẫu in 3D tỷ lệ 1:1"],
        ["Rhinoceros 3D", "Keyshot (Render)", "Alias", "Máy in 3D"],
        "Phòng R&D công ty sản xuất đồ gia dụng, xe máy, thiết bị công nghệ.",
        ["Phải hiểu biết về khuôn ép nhựa và quy trình gia công cơ khí để thiết kế có thể sản xuất hàng loạt được", "Cân bằng giữa kiểu dáng thẩm mỹ đẹp và chi phí khuôn đúc"],
        ["Tư duy thẩm mỹ công nghiệp và công thái học", "Thành thạo phần mềm dựng hình 3D mặt cong cao cấp", "Hiểu biết về vật liệu nhựa và kim loại"],
        ["Mỹ thuật", "Vật lý", "Toán học"],
        [{"level": "Đại học", "description": "Cử nhân Tạo dáng Công nghiệp (ĐH Mỹ thuật Công nghiệp, ĐH Bách khoa)"}],
        "Cầm chiếc điện thoại thông minh trên tay và quan sát các góc bo tròn viền kim loại xem có tạo cảm giác cấn tay không.",
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80", "Nhà thiết kế tạo dáng sản phẩm kiểm tra mẫu in 3D thực tế"
    ))
    c.append(make_c(
        "nha-tao-mau-thoi-trang-stylist", "Nhà tạo mẫu thời trang (Fashion Stylist)", "Fashion Stylist & Visual Image Consultant",
        ["Stylist thời trang", "Fashion Stylist"], g14, c14, l14, ["A", "E"],
        "Phối trang phục, phụ kiện kính mắt túi xách cho ca sĩ, diễn viên và người mẫu chụp ảnh bìa tạp chí thời trang danh tiếng.",
        ["Lên ý tưởng phong cách hình ảnh (Concept) cho buổi chụp ảnh tạp chí", "Liên hệ mượn trang phục từ các nhà thiết kế và thương hiệu thời trang cao cấp", "Trực tiếp chỉnh sửa nếp gấp áo quần, phối phụ kiện cho người mẫu tại trường quay"],
        ["Bộ ảnh thời trang ấn tượng trên tạp chí", "Hình ảnh thảm đỏ lộng lẫy của nghệ sĩ"],
        ["Bàn ủi hơi nước cầm tay", "Băng dính dán vải hai mặt chuyên dụng", "Kẹp ghim định hình trang phục"],
        "Phim trường chụp ảnh studio, hậu trường tuần lễ thời trang, thảm đỏ sự kiện giải trí.",
        ["Khuân vác những vali quần áo phụ kiện nặng nề đi lại liên tục", "Thời gian làm việc theo lịch trình thất thường của người nổi tiếng"],
        ["Gu thẩm mỹ thời trang nhạy bén và khác biệt", "Khả năng kết hợp trang phục và màu sắc tài tình", "Mạng lưới quan hệ rộng khắp trong làng thời trang"],
        ["Mỹ thuật", "Văn hóa học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Thời trang hoặc Truyền thông thời trang"}],
        "Mở tủ quần áo và thử phối 3 bộ đồ với 3 phong cách khác nhau: đi học, đi chơi dã ngoại và đi dự tiệc.",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80", "Stylist chỉnh sửa trang phục cho người mẫu trước buổi chụp ảnh thời trang"
    ))
    c.append(make_c(
        "dao-dien-nghe-thuat-art-director", "Đạo diễn nghệ thuật (Art Director)", "Advertising & Visual Art Director",
        ["Giám đốc nghệ thuật", "Art Director"], g14, c14, l14, ["A", "E", "I"],
        "Chỉ đạo ngôn ngữ hình ảnh, ánh sáng, màu sắc và đạo cụ cho các chiến dịch quảng cáo toàn cầu và phim điện ảnh.",
        ["Xây dựng bảng tâm trạng hình ảnh (Moodboard) định hình phong cách thị giác", "Chỉ đạo đội ngũ thiết kế đồ họa, quay phim và dựng cảnh làm việc đồng nhất", "Kiểm duyệt chất lượng hình ảnh cuối cùng trước khi phát hành ra công chúng"],
        ["Bảng định hướng thị giác nghệ thuật dự án", "Tác phẩm quảng cáo hoặc phim ảnh đạt giải thưởng nghệ thuật"],
        ["Photoshop", "InDesign", "Bảng vẽ điện tử", "Phần mềm bảng tâm trạng Milanote"],
        "Creative Agency quốc tế, hãng sản xuất phim điện ảnh.",
        ["Chịu trách nhiệm về toàn bộ chất lượng thị giác của dự án lớn", "Phải truyền đạt được ý tưởng trừu tượng trong đầu cho toàn bộ ekip hiểu và làm theo"],
        ["Tầm nhìn nghệ thuật thị giác xuất chúng", "Kỹ năng lãnh đạo và truyền cảm hứng cho nghệ sĩ", "Tư duy thẩm mỹ điện ảnh và văn hóa sâu rộng"],
        ["Mỹ thuật", "Ngữ văn", "Lịch sử nghệ thuật"],
        [{"level": "Đại học", "description": "Cử nhân Mỹ thuật, Thiết kế đồ họa hoặc Đạo diễn điện ảnh"}],
        "Xem một bộ phim hoạt hình đoạt giải Oscar và chú ý cách họ sử dụng tông màu lạnh khi buồn và tông màu ấm khi vui.",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80", "Đạo diễn nghệ thuật thảo luận bảng màu thị giác cùng đội ngũ"
    ))
    c.append(make_c(
        "nghe-si-gom-va-thu-cong-duong-dai", "Nghệ sĩ Gốm và Thủ công mỹ nghệ đương đại (Contemporary Ceramic Artist)", "Contemporary Ceramic & Craft Artist",
        ["Nghệ nhân gốm đương đại", "Ceramic Artist"], g14, c14, l14, ["A", "R"],
        "Vuốt gốm trên bàn xoay, pha chế men màu tự nhiên và nung lò củi tạo nên các tác phẩm gốm nghệ thuật độc bản mang hồn đất Việt.",
        ["Nhào nặn đất sét và tạo hình dáng bình gốm trên bàn xoay tay", "Nghiên cứu pha chế men tro, men rạn từ vỏ trấu và khoáng chất tự nhiên", "Xếp gốm vào lò nung củi và canh nhiệt độ nung lên tới 1250 độ C suốt 24 giờ"],
        ["Tác phẩm bình gốm nghệ thuật độc bản", "Bộ sưu tập gốm ứng dụng thủ công cao cấp"],
        ["Bàn xoay gốm", "Lò nung gốm nhiệt độ cao", "Dụng cụ gọt tỉa gốm bằng tre và thép"],
        "Xưởng gốm nghệ thuật (Bát Tràng, Chu Đậu, Phù Lãng), phòng trưng bày triển lãm mỹ thuật.",
        ["Tỷ lệ rủi ro nứt vỡ trong lò nung cao, có mẻ nung hỏng mất trắng công sức hàng tuần", "Bụi đất và làm việc thủ công lấm lem"],
        ["Đôi bàn tay cảm nhận độ dẻo của đất sét", "Hiểu biết hóa học về men và nhiệt độ lò nung", "Tâm hồn nghệ sĩ tĩnh tại và kiên nhẫn"],
        ["Mỹ thuật", "Hóa học", "Lịch sử"],
        [{"level": "Đại học", "description": "Cử nhân Gốm nghệ thuật (ĐH Mỹ thuật Công nghiệp, ĐH Mỹ thuật Việt Nam)"}],
        "Thử nặn một chiếc bát nhỏ bằng đất sét và để khô dưới bóng râm xem đất co ngót lại như thế nào.",
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80", "Nghệ sĩ gốm tỉ mỉ tạo hình bình gốm trên bàn xoay thủ công"
    ))

    # 15. GIÁO DỤC, ĐÀO TẠO VÀ PHÁT TRIỂN CON NGƯỜI
    g15, c15, l15 = "giao-duc", "GiaoDuc", "Giáo dục, đào tạo và phát triển con người"
    c.append(make_c(
        "giao-vien-pho-thong-truyen-cam-hung", "Giáo viên Phổ thông đổi mới phương pháp (High School Innovative Teacher)", "Innovative High School Educator",
        ["Giáo viên cấp 3", "High School Teacher"], g15, c15, l15, ["S", "A", "E"],
        "Giảng dạy theo chương trình GDPT 2018 mới, ứng dụng dự án học tập thực tế và truyền cảm hứng khám phá tri thức cho học sinh.",
        ["Soạn giáo án dạy học theo định hướng phát triển phẩm chất, năng lực học sinh", "Tổ chức các tiết học trải nghiệm, tranh biện và thí nghiệm thực hành", "Quan tâm động viên tâm lý và đồng hành cùng học sinh trong giai đoạn trưởng thành"],
        ["Kế hoạch bài dạy đổi mới phương pháp", "Học sinh tiến bộ về năng lực tự học và phẩm chất"],
        ["Bảng tương tác thông minh", "Canva Giáo dục", "Quizizz", "Google Classroom"],
        "Trường THPT công lập, trường liên cấp chất lượng cao.",
        ["Nói nhiều giờ liên tục và áp lực sổ sách, giáo án hành chính", "Cần kiên nhẫn với những học sinh cá biệt hoặc tiếp thu chậm"],
        ["Phương pháp sư phạm tích cực hiện đại", "Khả năng truyền cảm hứng và lắng nghe thấu cảm", "Làm chủ công nghệ giáo dục số"],
        ["Ngữ văn", "Toán học", "Tâm lý học"],
        [{"level": "Đại học", "description": "Cử nhân Sư phạm Toán/Văn/Anh/Lý/Hóa/Sinh/Sử/Địa (ĐH Sư phạm Hà Nội, ĐH Sư phạm TP.HCM)"}],
        "Nghĩ về một thầy cô giáo em yêu quý nhất và viết ra 2 điều khiến em cảm thấy được truyền cảm hứng nhất từ thầy cô đó.",
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80", "Giáo viên giảng bài tương tác và truyền cảm hứng cho học sinh trong lớp học"
    ))
    c.append(make_c(
        "chuyen-gia-thiet-ke-chuong-trinh-hoc", "Chuyên gia Thiết kế chương trình học (Instructional Designer)", "Instructional Designer & Curriculum Developer",
        ["Chuyên viên thiết kế khóa học", "Instructional Designer"], g15, c15, l15, ["I", "A", "S"],
        "Biến kiến thức phức tạp thành các bài giảng e-learning tương tác, trò chơi hóa (Gamification) giúp người học ghi nhớ bài học dễ dàng.",
        ["Phân tích đối tượng người học và xác định mục tiêu học tập đầu ra (Learning Outcomes)", "Viết kịch bản chi tiết cho từng video hoạt hình và câu hỏi tương tác", "Đóng gói bài giảng theo chuẩn SCORM / xAPI tải lên nền tảng học trực tuyến"],
        ["Khóa học trực tuyến e-learning tương tác hoàn chỉnh", "Kịch bản bài giảng chi tiết (Storyboard)"],
        ["Articulate Storyline 360", "Adobe Captivate", "LMS Moodle", "Canva"],
        "Các công ty công nghệ giáo dục EdTech, viện đào tạo doanh nghiệp, trường đại học số.",
        ["Cần dung hòa giữa tính chính xác khoa học của chuyên gia và tính hấp dẫn dễ hiểu cho người học", "Đòi hỏi tư duy cấu trúc logic cao"],
        ["Lý thuyết học tập nhận thức (Cognitive Load Theory)", "Kỹ năng viết kịch bản sư phạm hấp dẫn", "Thành thạo công cụ phát triển e-learning"],
        ["Tâm lý học", "Tin học", "Ngữ văn", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Sư phạm, Công nghệ giáo dục hoặc Tâm lý học"}],
        "Vào một ứng dụng học tập như Duolingo và xem cách họ chia nhỏ bài học thành từng câu hỏi trò chơi ngắn 2 phút.",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", "Chuyên gia thiết kế chương trình học rà soát cấu trúc khóa học số"
    ))
    c.append(make_c(
        "chuyen-vien-tu-van-tam-ly-hoc-duong", "Chuyên viên Tư vấn tâm lý học đường (School Counselor)", "School Psychological Counselor",
        ["Tư vấn tâm lý trường học", "School Counselor"], g15, c15, l15, ["S", "I"],
        "Lắng nghe, tháo gỡ áp lực thi cử, mâu thuẫn bạn bè, bạo lực học đường và định hướng cảm xúc tích cực cho học sinh trong phòng tham vấn.",
        ["Tiếp đón và lắng nghe học sinh trong không gian phòng tham vấn bảo mật tuyệt đối", "Đánh giá mức độ căng thẳng, lo âu (Stress / Depression) bằng các thang đo tâm lý", "Phối hợp cùng phụ huynh và giáo viên chủ nhiệm hỗ trợ học sinh vượt qua khủng hoảng"],
        ["Hồ sơ tham vấn tâm lý học sinh được bảo mật", "Chuyên đề giáo dục cảm xúc và kỹ năng phòng chống bắt nạt học đường"],
        ["Thang đo trầm cảm DASS-21", "Bộ công cụ trị liệu trò chơi và vẽ tranh", "Phòng tham vấn tâm lý đạt chuẩn"],
        "Phòng tâm lý học đường các trường phổ thông liên cấp, trung tâm bảo trợ trẻ em.",
        ["Chịu áp lực tâm lý khi lắng nghe những tổn thương nặng nề của học sinh", "Nguyên tắc bảo mật thông tin đòi hỏi sự khéo léo khi trao đổi với phụ huynh"],
        ["Kỹ năng lắng nghe thấu cảm không phán xét", "Kiến thức tâm lý học lứa tuổi vị thành niên", "Đạo đức nghề nghiệp tham vấn tâm lý"],
        ["Tâm lý học", "Giáo dục công dân", "Ngữ văn"],
        [{"level": "Đại học", "description": "Cử nhân Tâm lý học trường học hoặc Tâm lý học lâm sàng (ĐH Sư phạm, ĐH KHXH&NV)"}],
        "Viết ra 3 điều em thường làm để giải tỏa căng thẳng mỗi khi bị điểm kém hoặc lo lắng trước kỳ thi.",
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80", "Chuyên viên tư vấn tâm lý lắng nghe và chia sẻ cùng học sinh trong phòng tham vấn"
    ))
    c.append(make_c(
        "giang-vien-dai-hoc-nghien-cuu-vien", "Giảng viên đại học và Nghiên cứu viên (University Lecturer & Researcher)", "University Lecturer & Academic Researcher",
        ["Giảng viên đại học", "Nghiên cứu viên"], g15, c15, l15, ["I", "S", "A"],
        "Giảng dạy chuyên sâu cho sinh viên đại học, hướng dẫn luận văn tốt nghiệp và thực hiện các đề tài nghiên cứu công bố bài báo quốc tế ISI/Scopus.",
        ["Soạn thảo giáo trình và giảng bài trên giảng đường đại học", "Thực hiện thí nghiệm khoa học và viết bài báo công bố trên tạp chí quốc tế uy tín", "Hướng dẫn sinh viên nghiên cứu khoa học và phát triển tư duy phản biện"],
        ["Bài báo khoa học công bố trên tạp chí quốc tế Scopus/ISI", "Giáo trình bài giảng đại học"],
        ["Cơ sở dữ liệu khoa học ScienceDirect / Scopus", "Phần mềm quản lý tài liệu trích dẫn Mendeley / EndNote", "Phần mềm xử lý thống kê SPSS / R"],
        "Các trường đại học, viện hàn lâm khoa học, trung tâm nghiên cứu.",
        ["Yêu cầu học vị cao (Thạc sĩ, Tiến sĩ) và áp lực công bố bài báo khoa học quốc tế hàng năm", "Đòi hỏi tự học và nghiên cứu chuyên sâu suốt đời"],
        ["Tư duy nghiên cứu khoa học độc lập", "Kỹ năng thuyết trình học thuật chuyên sâu", "Tiếng Anh học thuật thành thạo"],
        ["Toán học", "Ngữ văn", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Tốt nghiệp Đại học loại Giỏi/Xuất sắc + Bằng Thạc sĩ và Tiến sĩ chuyên ngành"}],
        "Tìm đọc thử phần tóm tắt (Abstract) của một bài báo khoa học nghiên cứu về môi trường để thấy cách trình bày học thuật.",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80", "Giảng viên đại học thuyết giảng trên giảng đường hiện đại"
    ))
    c.append(make_c(
        "chuyen-gia-cong-nghe-giao-duc-edtech", "Chuyên gia Công nghệ Giáo dục (EdTech Product Specialist)", "Educational Technology (EdTech) Specialist",
        ["Chuyên viên EdTech", "EdTech Specialist"], g15, c15, l15, ["I", "R", "S"],
        "Phát triển các ứng dụng học tập thông minh, trợ lý ảo gia sư AI và hệ thống quản lý học tập (LMS) cá nhân hóa cho học sinh.",
        ["Nghiên cứu áp dụng thuật toán học tập thích ứng (Adaptive Learning) theo năng lực từng học sinh", "Tích hợp công nghệ nhận diện giọng nói AI để sửa phát âm ngoại ngữ", "Đo lường thời gian hoàn thành bài học và tối ưu hóa trải nghiệm học tập trên ứng dụng"],
        ["Sản phẩm ứng dụng công nghệ giáo dục EdTech", "Báo cáo phân tích dữ liệu hành vi học tập của học viên"],
        ["Nền tảng LMS Canvas / Moodle", "Figma", "Jira", "Công nghệ AI sinh ngữ"],
        "Các công ty khởi nghiệp công nghệ giáo dục (EdTech startups: ELSA Speak, Kyna, Vuihoc).",
        ["Cần đảm bảo công nghệ phục vụ mục tiêu sư phạm chứ không làm học sinh xao nhãng", "Cạnh tranh khốc liệt giữa các ứng dụng giáo dục trên thị trường"],
        ["Hiểu biết về tâm lý học tập của học sinh", "Khả năng ứng dụng công nghệ AI vào giáo dục", "Tư duy phát triển sản phẩm công nghệ"],
        ["Tin học", "Toán học", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Công nghệ giáo dục, Khoa học máy tính hoặc Sư phạm"}],
        "Thử sử dụng một ứng dụng luyện phát âm tiếng Anh có AI chấm điểm và xem AI chỉ ra lỗi sai ở âm tiết nào.",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80", "Học sinh hào hứng tương tác với bài học trên máy tính bảng giáo dục"
    ))
    c.append(make_c(
        "huan-luyen-vien-ky-nang-sinh-ton", "Huấn luyện viên Kỹ năng sống và Sinh tồn (Life Skills & Outdoor Survival Instructor)", "Outdoor Education & Survival Skills Instructor",
        ["Huấn luyện viên kỹ năng sống", "Outdoor Instructor"], g15, c15, l15, ["R", "S", "E"],
        "Dạy học sinh dựng lều, thắt nút dây cứu sinh, lọc nước tự nhiên, tạo lửa và kỹ năng tự bảo vệ bản thân trước nguy hiểm.",
        ["Tổ chức các trại hè rèn luyện kỹ năng sinh tồn trong rừng và bờ biển", "Dạy kỹ năng sơ cứu đuối nước, hỏa hoạn và thoát hiểm nơi công cộng", "Huấn luyện tinh thần làm việc nhóm, vượt qua nỗi sợ hãi và rèn luyện tính tự lập"],
        ["Chương trình tập huấn kỹ năng sống dã ngoại", "Học viên tự tin làm chủ các kỹ năng sinh tồn thiết yếu"],
        ["Bộ đánh lửa sinh tồn Magie", "Dây thừng leo núi chuyên dụng", "Hộp cứu thương dã ngoại", "Bản đồ và la bàn quân sự"],
        "Trại hè kỹ năng, khu du lịch dã ngoại, trung tâm huấn luyện kỹ năng sống thanh thiếu niên.",
        ["Làm việc ngoài trời trong mọi điều kiện thời tiết nắng mưa gió rét", "Trách nhiệm đảm bảo an toàn tuyệt đối cho các em học sinh khi tham gia dã ngoại"],
        ["Kỹ năng sinh tồn nơi hoang dã điêu luyện", "Kỹ năng truyền lửa và quản trò đám đông", "Sơ cấp cứu chấn thương chuẩn quốc tế"],
        ["Thể dục", "Sinh học", "Địa lý", "Giáo dục công dân"],
        [{"level": "Đại học", "description": "Cử nhân Giáo dục thể chất, Công tác xã hội hoặc Chứng chỉ Huấn luyện viên sinh tồn quốc tế"}],
        "Tập thắt nút dây dẹt (Reef knot) dùng để nối hai đầu dây thừng chắc chắn mà không bị tuột.",
        "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80", "Huấn luyện viên hướng dẫn học sinh kỹ năng nhóm lửa sinh tồn ngoài trời"
    ))
    c.append(make_c(
        "quan-ly-trung-tam-giao-duc-trai-nghiem", "Quản lý Trung tâm giáo dục trải nghiệm (Experiential Learning Operations Manager)", "Experiential Learning Center Director",
        ["Giám đốc trung tâm trải nghiệm", "Experiential Education Director"], g15, c15, l15, ["E", "S"],
        "Xây dựng các mô hình nông trại trải nghiệm, làng nghề thủ công và kết nối các trường học đưa học sinh đến tham quan, học tập thực tế.",
        ["Thiết kế các trạm trải nghiệm nghề nghiệp phong phú (làm gốm, trồng rau, làm mộc)", "Đàm phán hợp tác đưa học sinh các trường phổ thông đến trải nghiệm hướng nghiệp", "Kiểm soát an toàn vệ sinh và chất lượng phục vụ bữa ăn cho học sinh"],
        ["Chương trình giáo dục trải nghiệm hướng nghiệp trọn gói", "Hợp đồng hợp tác giáo dục với các trường trường phổ thông"],
        ["Phần mềm quản lý đặt tour học đường", "Kế hoạch điều phối an toàn học sinh"],
        "Khu trải nghiệm giáo dục sinh thái ngoại thành, bảo tàng khoa học tương tác.",
        ["Đón tiếp hàng nghìn học sinh cùng lúc vào các dịp cao điểm đòi hỏi quản lý an ninh nghiêm ngặt", "Cần đổi mới liên tục các hoạt động trải nghiệm để trường quay lại"],
        ["Kỹ năng tổ chức và điều hành quy mô lớn", "Tư duy giáo dục trải nghiệm hiện đại", "Giao tiếp đàm phán với ban giám hiệu các trường"],
        ["Giáo dục kinh tế và pháp luật", "Địa lý", "Tâm lý học"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị kinh doanh, Sư phạm hoặc Quản lý giáo dục"}],
        "Nhớ lại một chuyến đi dã ngoại học tập cùng lớp và viết ra hoạt động nào khiến em học hỏi được nhiều nhất.",
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80", "Học sinh hào hứng tham gia hoạt động trải nghiệm khoa học ngoài trời"
    ))
    c.append(make_c(
        "giao-vien-giao-duc-dac-biet", "Giáo viên Giáo dục đặc biệt (Special Education Teacher)", "Special Education Teacher",
        ["Giáo viên can thiệp sớm", "Special Education Teacher"], g15, c15, l15, ["S", "A"],
        "Đồng hành, dạy chữ nổi Braille cho trẻ khiếm thị, ngôn ngữ ký hiệu cho trẻ khiếm thính và can thiệp hành vi cho trẻ tự kỷ hòa nhập.",
        ["Đánh giá mức độ phát triển tâm vận động của từng trẻ đặc biệt", "Lập kế hoạch giáo dục cá nhân hóa (IEP) phù hợp với tốc độ tiếp thu của bé", "Dạy các kỹ năng tự phục vụ bản thân như cài cúc áo, xúc cơm và nhận biết cảm xúc"],
        ["Kế hoạch giáo dục cá nhân (IEP)", "Báo cáo đánh giá tiến bộ hòa nhập của trẻ"],
        ["Chữ nổi Braille", "Bảng chữ cái ngôn ngữ ký hiệu", "Thẻ tranh giao tiếp PECS", "Đồ chơi trị liệu giác quan"],
        "Trường chuyên biệt cho trẻ khuyết tật, trung tâm can thiệp sớm, lớp học hòa nhập.",
        ["Trẻ có thể la hét, quấy khóc hoặc có hành vi kích động đòi hỏi lòng kiên nhẫn phi thường", "Tiến bộ của trẻ diễn ra rất chậm, đòi hỏi sự kiên trì từng ngày từng tháng"],
        ["Trái tim nhân ái và lòng yêu thương con người bao la", "Kỹ thuật can thiệp hành vi và trị liệu ngôn ngữ", "Thành thạo ngôn ngữ ký hiệu hoặc chữ nổi"],
        ["Tâm lý học", "Giáo dục công dân", "Sinh học"],
        [{"level": "Đại học", "description": "Cử nhân Giáo dục Đặc biệt (ĐH Sư phạm Hà Nội, ĐH Sư phạm TP.HCM)"}],
        "Thử bịt mắt lại và dùng ngón tay sờ các đồ vật xung quanh để cảm nhận cảm giác của người khiếm thị.",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80", "Giáo viên giáo dục đặc biệt ân cần hướng dẫn trẻ phát triển kỹ năng giao tiếp"
    ))
    c.append(make_c(
        "chuyen-vien-dao-tao-noi-bo-ld", "Chuyên viên Đào tạo và Phát triển nhân tài (Learning & Development Specialist - L&D)", "Corporate Learning & Development (L&D) Specialist",
        ["Chuyên viên L&D", "Corporate Trainer"], g15, c15, l15, ["S", "E", "C"],
        "Khảo sát lỗ hổng kỹ năng của nhân viên, thiết kế lộ trình đào tạo thăng tiến và mời chuyên gia huấn luyện kỹ năng mềm cho doanh nghiệp.",
        ["Khảo sát nhu cầu đào tạo (TNA) tại các phòng ban", "Tổ chức các khóa đào tạo kỹ năng lãnh đạo, kỹ năng bán hàng và văn hóa doanh nghiệp", "Đo lường hiệu quả sau đào tạo theo mô hình Kirkpatrick 4 cấp độ"],
        ["Kế hoạch đào tạo nội bộ cả năm của doanh nghiệp", "Khung năng lực chức danh và lộ trình phát triển nghề nghiệp"],
        ["Hệ thống quản lý học tập doanh nghiệp LMS", "Khảo sát nhu cầu đào tạo TNA", "Tài liệu huấn luyện nội bộ"],
        "Khối nhân sự các tập đoàn lớn, ngân hàng, công ty đa quốc gia.",
        ["Khó khăn khi sắp xếp lịch học cho các nhân viên bận rộn kinh doanh", "Áp lực chứng minh khóa học mang lại giá trị thực tế cho kết quả kinh doanh của công ty"],
        ["Kỹ năng đứng lớp giảng dạy và truyền cảm hứng", "Xây dựng khung năng lực đào tạo chuẩn mực", "Tư duy phát triển tiềm năng con người"],
        ["Tâm lý học", "Giáo dục kinh tế và pháp luật", "Ngữ văn", "Tiếng Anh"],
        [{"level": "Đại học", "description": "Cử nhân Quản trị nhân lực, Sư phạm hoặc Quản trị kinh doanh"}],
        "Tìm hiểu khái niệm 'Học tập suốt đời' (Lifelong Learning) và tại sao người đi làm nhiều năm vẫn cần đi học mỗi tuần.",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", "Chuyên viên L&D tổ chức buổi đào tạo nâng cao kỹ năng cho nhân viên"
    ))
    c.append(make_c(
        "chuyen-vien-khao-thi-va-kiem-dinh-giao-duc", "Chuyên viên Khảo thí và Đảm bảo chất lượng giáo dục (Educational Assessment & QA Specialist)", "Educational Assessment & Accreditation Specialist",
        ["Chuyên viên khảo thí", "Kiểm định viên giáo dục"], g15, c15, l15, ["C", "I"],
        "Phân tích độ phân hóa của đề thi tốt nghiệp, xây dựng ma trận câu hỏi chuẩn hóa và kiểm định chất lượng các trường đại học theo chuẩn quốc tế.",
        ["Xây dựng ngân hàng câu hỏi thi trắc nghiệm theo 4 mức độ nhận thức", "Phân tích độ khó và độ phân biệt của từng câu hỏi bằng lý thuyết ứng đáp câu hỏi (IRT)", "Đánh giá chất lượng cơ sở giáo dục theo tiêu chuẩn AUN-QA hoặc Bộ Giáo dục"],
        ["Báo cáo phân tích chất lượng đề thi chuẩn hóa", "Hồ sơ tự đánh giá kiểm định chất lượng trường học"],
        ["Phần mềm phân tích khảo thí chuyên dụng (Winsteps, SPSS)", "Ngân hàng câu hỏi thi trắc nghiệm mã hóa"],
        "Cục Quản lý chất lượng (Bộ GD&ĐT), trung tâm khảo thí quốc gia, phòng khảo thí các trường đại học.",
        ["Trách nhiệm bảo mật đề thi tuyệt đối ở mức tối mật", "Phải đối mặt với những tranh luận chuyên môn gay gắt về độ khó dễ của đề thi"],
        ["Đo lường và đánh giá trong giáo dục", "Thống kê toán học ứng dụng khảo thí", "Tính chính trực, bảo mật và công tâm tuyệt đối"],
        ["Toán học", "Tin học", "Ngữ văn"],
        [{"level": "Đại học", "description": "Cử nhân Đo lường & Đánh giá trong giáo dục, Toán học hoặc Sư phạm"}],
        "Tìm hiểu về 4 mức độ câu hỏi thi: Nhận biết, Thông hiểu, Vận dụng và Vận dụng cao trong đề thi tốt nghiệp THPT.",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80", "Chuyên viên khảo thí phân tích độ phân hóa của đề thi chuẩn hóa"
    ))

    return c

print("Module groups 11-15 ready.")
