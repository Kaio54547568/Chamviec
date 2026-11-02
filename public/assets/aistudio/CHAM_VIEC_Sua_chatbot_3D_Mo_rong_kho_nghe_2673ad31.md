# LỆNH NÂNG CẤP CHẠM VIỆC — CHATBOT, TRẢI NGHIỆM NGHỀ 3D VÀ KHO NGHỀ

Bạn là kỹ sư phần mềm cao cấp, chuyên gia thiết kế mô phỏng 3D và người biên tập học liệu hướng nghiệp cho học sinh THPT. Hãy kiểm tra mã nguồn dự án CHẠM VIỆC hiện có và triển khai các thay đổi dưới đây. Tôi cần chức năng hoạt động được, không chỉ bản mô tả hoặc giao diện minh họa.

## 1. Phạm vi và nguyên tắc

- Giữ tên CHẠM VIỆC và nhận diện hiện có, giữ vai trò đồng hành của EIE Education.
- Giữ các tính năng ngoài phạm vi yêu cầu; không viết lại toàn bộ app nếu không cần thiết.
- Ưu tiên theo thứ tự: sửa chatbot → sửa chất lượng 3D → mở rộng và chuẩn hóa kho nghề.
- Kiểm tra cấu trúc dự án, các route, dịch vụ AI, dữ liệu nghề và component mô phỏng trước khi sửa.
- Tự thực hiện các bước kiểm tra và chỉnh mã trong môi trường được cấp. Nếu thiếu quyền hoặc thông tin cấu hình, nêu chính xác biến hoặc quyền còn thiếu; không tuyên bố đã sửa xong khi chưa có bằng chứng.
- Không xóa dữ liệu học sinh hoặc làm mất kết quả test đã lưu. Không đổi cơ chế miễn phí/trả phí trong đợt sửa này.
- Không đưa chức năng chưa hoàn thành vào giao diện dưới nhãn “đang hoạt động”.

## 2. Sửa tận gốc chatbot CHẠM AI

### 2.1. Hiện tượng cần tái hiện

Chatbot có lúc không phản hồi, phản hồi rất chậm, hoặc báo “Thời gian phản hồi quá lâu, quá 25 giây, vui lòng kiểm tra kết nối mạng và tải lại”, “Không thể tải được”.

Đây là triệu chứng, chưa đủ để kết luận nguyên nhân. Không mặc định đổ lỗi cho mạng của học sinh. Không coi việc tăng timeout từ 25 giây lên 60 giây là sửa xong.

### 2.2. Kiểm tra và báo nguyên nhân có bằng chứng

Lần theo toàn bộ luồng: nhập câu hỏi → gửi request → endpoint máy chủ → dịch vụ AI → xử lý phản hồi → hiển thị.

Kiểm tra tối thiểu:

1. Request có được gửi không; đường dẫn, phương thức, payload và response có khớp không.
2. Biến môi trường có tồn tại ở đúng môi trường triển khai không; khóa có bị dùng sai phía máy khách/máy chủ không. Tuyệt đối không in khóa vào log, trả về trình duyệt hoặc yêu cầu học sinh nhập khóa API.
3. Tên model, phiên bản API, SDK, quyền sử dụng và hạn mức; đối chiếu tài liệu chính thức của nhà cung cấp đang dùng.
4. HTTP 400/401/403/404/429/5xx; thông báo chặn nội dung; trường hợp response rỗng hoặc định dạng khác dự kiến.
5. CORS, proxy, kết nối máy chủ tới nhà cung cấp, cold start, giới hạn thời gian của nền tảng triển khai.
6. Timeout/AbortController, timer không được dọn, request bị hủy bởi render lại hoặc chuyển trang.
7. Lịch sử trò chuyện quá dài, prompt quá nặng, truy xuất dữ liệu chậm hoặc gọi công cụ nhiều vòng.
8. Parser của phản hồi thường và streaming; trường hợp có dữ liệu nhưng giao diện không cập nhật.
9. Xung đột state, gửi hai lần, khóa nút gửi không được mở lại sau lỗi.

Chỉ kết luận nguyên nhân đã được tái hiện hoặc được log xác nhận. Nếu chưa đủ bằng chứng, phân biệt rõ giả thuyết và kết quả đã xác minh.

### 2.3. Hành vi sau khi sửa

- Gọi dịch vụ AI qua backend an toàn của dự án; cấu hình bí mật ở máy chủ.
- Hiển thị ngay trạng thái “Đã nhận câu hỏi”. Nếu nhà cung cấp và hạ tầng hỗ trợ, stream câu trả lời để học sinh thấy nội dung sớm.
- Có trạng thái rõ ràng: đang gửi, đang trả lời, hoàn tất, bị gián đoạn, lỗi; có nút Dừng và Thử lại.
- Khi chậm, giữ nguyên câu hỏi và hội thoại. Không buộc người dùng tải lại toàn trang.
- Thử lại có giới hạn với backoff cho lỗi tạm thời; tôn trọng Retry-After. Không tự lặp vô hạn hoặc thử lại lỗi xác thực/cấu hình. Không tạo câu trả lời trùng khi request đã nhận một phần dữ liệu.
- Phân loại lỗi thân thiện: dịch vụ đang bận; hết hạn mức; cấu hình chưa hoàn tất; máy chủ chưa kết nối được; phản hồi bị gián đoạn. Không gắn tất cả thành “mạng yếu”.
- Cho phép thử lại câu vừa thất bại, không bắt nhập lại. Mở lại ô nhập và nút gửi sau mọi nhánh lỗi.
- Giới hạn độ dài ngữ cảnh; chỉ gửi thông tin cần thiết. Nếu tóm tắt lịch sử, giữ ý định và thông tin hướng nghiệp liên quan.
- Ghi log kỹ thuật có request ID, mã lỗi, bước lỗi và thời gian xử lý; che thông tin cá nhân, không ghi bí mật.
- Khi AI không khả dụng, cung cấp đường dẫn tìm trong kho nghề đã biên tập. Gắn nhãn “Thông tin từ kho nghề” rõ ràng; không giả câu trả lời mẫu là phản hồi AI.
- Trả lời bằng tiếng Việt hoặc tiếng Anh theo ngôn ngữ người dùng. Không tự gán năng lực, giới tính, dân tộc hoặc hoàn cảnh để loại nghề.
- Không khẳng định đã kiểm chứng điểm chuẩn/tuyển sinh nếu chưa truy xuất nguồn chính thức. Nội dung thay đổi theo năm phải có nguồn và năm tương ứng.

### 2.4. Kiểm thử bắt buộc

Thử các câu: “Nghề phiên dịch làm gì?”, “Thiết kế vi mạch khác kiểm thử chip thế nào?”, “So sánh giao dịch viên và chuyên viên tín dụng”, “Em thích Văn và Anh nhưng chưa biết chọn nghề”, cùng một câu tiếng Anh.

Kiểm tra câu hỏi tiếp nối; gửi liên tục; dừng giữa chừng; lỗi 401/429/5xx; mất mạng; phản hồi rỗng; timeout; streaming bị đứt. Với lỗi mô phỏng, phải ghi rõ đó là kiểm thử mô phỏng.

Đo thời gian nhận request, thời gian tới phần nội dung đầu tiên, tổng thời gian và tỷ lệ thành công của bộ kiểm thử. Báo môi trường, số lần thử và kết quả thật, không tự ghi các số đo mong muốn thành kết quả đạt được.

## 3. Biến “Chạm thử nghề 3D” thành trải nghiệm không gian thực sự

### 3.1. Tiêu chuẩn 3D

Không dùng ảnh phẳng, icon, video hoặc các thẻ văn bản để thay thế toàn bộ mô phỏng rồi gọi là 3D. Không chỉ thêm phối cảnh CSS vào giao diện cũ.

Mô phỏng phải có:

- Cảnh 3D render bằng WebGL với thư viện phù hợp dự án, như Three.js/Babylon.js; dùng mô hình hình học hoặc GLB/glTF có quyền sử dụng phù hợp.
- Vật thể có chiều sâu, camera phối cảnh, ánh sáng, vật liệu, che khuất giữa các vật thể.
- Xoay camera, thu phóng, đặt lại góc nhìn; điều khiển được bằng chuột và cảm ứng.
- Chọn vật thể, làm nổi vật thể đang chọn, xem thông tin chi tiết.
- Thao tác thực sự làm thay đổi trạng thái của cảnh và kết quả nhiệm vụ.
- Nhiệm vụ nghề cụ thể, tiêu chí hoàn thành và phản hồi giải thích được, không cộng điểm ngẫu nhiên.
- Hiển thị tiến độ tải và xử lý khi thiếu model/WebGL. Nếu chuyển sang chế độ 2D nhẹ, ghi rõ “Chế độ 2D”, không tiếp tục gắn nhãn 3D.
- Hạ chất lượng phù hợp thiết bị yếu, giải phóng tài nguyên khi đổi trạm; không để render loop tiếp tục chạy khi đã thoát.

### 3.2. Trạm ưu tiên 1 — Kiến trúc: thiết kế không gian nhà ở

**Bối cảnh:** thiết kế căn nhà đơn giản cho một gia đình, có nhu cầu sinh hoạt và điều kiện ánh sáng xác định.

**Thao tác bắt buộc:**

1. Xoay/zoom mô hình, bật/tắt mái hoặc chuyển sang góc nhìn cắt để quan sát bên trong.
2. Chọn và đặt tường, cửa ra vào, cửa sổ, đồ nội thất vào không gian 3D bằng thao tác kéo hoặc chọn vị trí; có snap theo lưới và kiểm tra vị trí hợp lệ.
3. Thay đổi kích thước hoặc vị trí các thành phần trong giới hạn bài học.
4. Kiểm tra lối đi có bị đồ vật chặn, cửa có bị chắn và các phòng có kết nối tới lối ra hay không.
5. Điều chỉnh hướng mặt trời/thời điểm để quan sát thay đổi ánh sáng và bóng đổ.
6. Bật lớp cấu kiện để nhận diện cột, dầm, tường chịu lực ở mức nhập môn.

**Đánh giá:** đánh giá riêng bố trí công năng, đường lưu thông và mức tiếp cận ánh sáng bằng quy tắc minh bạch. Khi đánh giá ánh sáng chỉ là chỉ số gần đúng trong mô phỏng, phải nêu rõ; không hiển thị lux hoặc kết luận đạt quy chuẩn nếu chưa có mô hình tính được kiểm chứng.

Về kết cấu, chỉ dùng bài học nhận diện hoặc ràng buộc hình học đã định nghĩa. Không gọi đó là kiểm định an toàn kết cấu hoặc mô phỏng kỹ thuật xây dựng chuyên nghiệp. Ví dụ phản hồi: “Theo quy tắc bài tập, cấu kiện này cần một điểm tựa”, không khẳng định ngôi nhà an toàn ngoài thực tế.

### 3.3. Trạm ưu tiên 2 — Kỹ thuật bán dẫn

- Cảnh bàn thao tác với wafer, chip, đế đóng gói và vị trí kiểm thử 3D.
- Phân biệt thiết kế vi mạch, chế tạo, đóng gói và kiểm thử, không gộp thành một công việc.
- Học sinh chọn chip, xoay quan sát, đặt đúng hướng lên đế và kết nối các điểm được chỉ dẫn; nút kiểm tra phát hiện sai hướng/sai kết nối theo dữ liệu bài tập.
- Có một lỗi cài sẵn để tìm và sửa; phản hồi nêu đúng bước sai.
- Ghi rõ đây là mô phỏng nhập môn giản lược, không đại diện toàn bộ dây chuyền sản xuất chip.

### 3.4. Trạm ưu tiên 3 — Kỹ thuật ô tô

- Kiểm tra trạm ô tô hiện có trước khi tạo mới; giữ phần đã hoạt động đúng.
- Có động cơ và các bộ phận 3D chọn được; mở nắp capo, quan sát bộ phận, chọn dụng cụ, thay bộ phận theo nhiệm vụ.
- Dữ liệu lỗi xe và kết quả kiểm tra phải gắn với trạng thái bài tập; không chỉ đổi dòng chữ khi nhấn nút.

### 3.5. Phiên dịch và ngân hàng: ưu tiên mô phỏng đúng công việc

Hai nhóm này cũng phải có trải nghiệm nghề thực chất, nhưng không ép mọi thao tác thành 3D chỉ để trang trí.

- **Phiên dịch:** bối cảnh hội nghị 3D nếu đã có tài nguyên; phần cốt lõi là nghe một đoạn được cấp quyền, ghi chú, chuyển ngữ và so với ý chính/rubric. Nếu chỉ có văn bản thì gọi là bài luyện chuyển ngữ, không gọi là luyện nghe hoặc chấm phát âm. Chỉ chấm giọng nói bằng AI khi đã tích hợp được dịch vụ và có thông báo phù hợp.
- **Ngân hàng:** bối cảnh quầy giao dịch 3D nếu đã triển khai; phần cốt lõi là xử lý tình huống khách hàng, phát hiện dữ liệu thiếu và lựa chọn quy trình phù hợp. Dùng dữ liệu hoàn toàn hư cấu; không thu CCCD, số tài khoản hoặc xử lý tiền thật. Không trình bày bài tập như quyết định cấp tín dụng thật.
- Tách nhãn “Mô phỏng tình huống” và “Mô phỏng 3D tương tác” theo chức năng thực tế.

### 3.6. Hệ thống trạng thái trạm

Mỗi nghề có trạng thái riêng: hồ sơ nghề, bài tập tình huống, mô phỏng 3D đã hoạt động, hoặc đang phát triển. Chỉ các trạm thật sự tải và thao tác được mới xuất hiện trong bộ lọc “Có 3D”. Không nhân bản cùng một cảnh và đổi tên để giả thành nhiều nghề khác nhau.

## 4. Mở rộng kho nghề có hệ thống

### 4.1. Định hướng dữ liệu

Không có một con số cố định duy nhất cho “tất cả nghề trên thế giới”. ISCO-08 của ILO phân loại công việc vào 436 nhóm đơn vị; 436 là số nhóm phân loại, không phải tổng số nghề cụ thể.

Tham khảo Danh mục nghề nghiệp Việt Nam ban hành kèm Quyết định 34/2020/QĐ-TTg và kiểm tra văn bản cập nhật/thay thế trước khi áp dụng. Dùng ISCO-08 để đối chiếu quốc tế. Nghề mới, chức danh thị trường và tên chuyên môn cần có quan hệ với nghề/nhóm tương ứng, không đếm tên đồng nghĩa thành nghề mới.

Mục tiêu triển khai: mở rộng tối đa số hồ sơ có thể biên tập và kiểm chứng trong môi trường hiện tại; dùng danh sách 200 vị trí khởi tạo ở dưới để tránh chỉ có 13 nghề. Sau đó tiếp tục bổ sung từ danh mục chính thức. Đây là mục tiêu phát triển, không phải số hồ sơ đã xác minh.

Tách các khái niệm:

- Nhóm lĩnh vực để học sinh tìm kiếm.
- Nghề/chuyên môn cụ thể.
- Vị trí việc làm hoặc chuyên ngành hẹp.
- Ngành đào tạo: một ngành có thể dẫn tới nhiều nghề, một nghề có thể tiếp cận qua nhiều ngành.
- Tên đồng nghĩa, tên tiếng Anh, từ khóa tìm kiếm.

Không quảng cáo “đầy đủ mọi nghề trên thế giới”, không đưa số lượng nghề dự kiến lên giao diện như số thực có.

### 4.2. Danh sách khởi tạo — 200 vị trí trong 20 nhóm

Các nhóm dưới đây phục vụ điều hướng sản phẩm, không phải tên/mã phân loại chính thức. Cần chuẩn hóa và gộp các mục trùng sau khi đối chiếu nguồn.

| Nhóm điều hướng | 10 nghề/vị trí cần ưu tiên biên tập |
|---|---|
| 1. Ngôn ngữ và giao tiếp quốc tế | Phiên dịch hội nghị; phiên dịch thương mại; phiên dịch pháp lý; phiên dịch y tế; biên dịch tài liệu kỹ thuật; biên dịch văn học; biên dịch phụ đề; chuyên viên bản địa hóa; phiên dịch ngôn ngữ ký hiệu; chuyên viên quan hệ quốc tế |
| 2. Bán dẫn và điện tử | Kỹ sư thiết kế vi mạch số; kỹ sư thiết kế vi mạch tương tự; kỹ sư xác minh thiết kế vi mạch; kỹ sư thiết kế vật lý vi mạch; kỹ sư DFT; kỹ sư kiểm thử bán dẫn; kỹ sư đóng gói bán dẫn; kỹ sư quy trình chế tạo bán dẫn; kỹ thuật viên phòng sạch; kỹ sư thiết kế mạch điện tử |
| 3. Phần mềm và sản phẩm số | Lập trình viên web; lập trình viên ứng dụng di động; lập trình viên backend; kỹ sư kiểm thử phần mềm; kỹ sư DevOps; kỹ sư điện toán đám mây; chuyên viên phân tích nghiệp vụ CNTT; quản lý sản phẩm số; kỹ sư hệ thống nhúng; lập trình viên trò chơi |
| 4. Dữ liệu, AI và an toàn thông tin | Chuyên viên phân tích dữ liệu; kỹ sư dữ liệu; nhà khoa học dữ liệu; kỹ sư học máy; kỹ sư thị giác máy tính; kỹ sư xử lý ngôn ngữ tự nhiên; chuyên viên phân tích an toàn thông tin; chuyên viên ứng cứu sự cố an ninh mạng; chuyên viên kiểm thử xâm nhập; chuyên viên quản trị dữ liệu |
| 5. Ngân hàng, tài chính và bảo hiểm | Giao dịch viên ngân hàng; chuyên viên quan hệ khách hàng ngân hàng; chuyên viên phân tích tín dụng; chuyên viên quản trị rủi ro ngân hàng; chuyên viên thanh toán quốc tế; chuyên viên tuân thủ ngân hàng; chuyên viên phân tích tài chính doanh nghiệp; chuyên viên phân tích đầu tư; chuyên viên định phí bảo hiểm; chuyên viên giám định bồi thường bảo hiểm |
| 6. Kế toán, kinh doanh và nhân sự | Kế toán viên; kiểm toán viên; chuyên viên thuế; chuyên viên tuyển dụng; chuyên viên đào tạo nhân sự; chuyên viên tiền lương và phúc lợi; chuyên viên mua hàng; chuyên viên bán hàng; chuyên viên phát triển kinh doanh; chuyên viên nghiên cứu thị trường |
| 7. Truyền thông và sáng tạo | Nhà báo; biên tập viên xuất bản; chuyên viên quan hệ công chúng; chuyên viên marketing số; nhà thiết kế đồ họa; nhà thiết kế trải nghiệm người dùng; họa sĩ hoạt hình 3D; dựng phim; nhiếp ảnh gia; chuyên viên sản xuất âm thanh |
| 8. Giáo dục và khoa học xã hội | Giáo viên mầm non; giáo viên tiểu học; giáo viên THPT; giáo viên giáo dục đặc biệt; giảng viên; chuyên viên thiết kế học liệu; chuyên viên tham vấn học đường; nhân viên công tác xã hội; nhà nghiên cứu xã hội học; chuyên viên hướng nghiệp |
| 9. Y tế và chăm sóc | Bác sĩ đa khoa; bác sĩ răng hàm mặt; điều dưỡng; hộ sinh; dược sĩ; kỹ thuật viên xét nghiệm y học; kỹ thuật viên chẩn đoán hình ảnh; kỹ thuật viên phục hồi chức năng; chuyên viên dinh dưỡng; kỹ sư kỹ thuật y sinh |
| 10. Kiến trúc và xây dựng | Kiến trúc sư; kiến trúc sư cảnh quan; nhà thiết kế nội thất; kỹ sư kết cấu; kỹ sư xây dựng dân dụng; kỹ sư cầu đường; kỹ sư trắc địa; kỹ sư cấp thoát nước; kỹ sư cơ điện công trình; chuyên viên dự toán xây dựng |
| 11. Cơ khí, điện và tự động hóa | Kỹ sư cơ khí; kỹ sư cơ điện tử; kỹ sư tự động hóa; kỹ sư robot; kỹ sư điện công nghiệp; kỹ thuật viên CNC; thợ hàn; kỹ thuật viên bảo trì công nghiệp; kỹ thuật viên sửa chữa ô tô; kỹ thuật viên hệ thống điện xe điện |
| 12. Nông nghiệp, lâm nghiệp và thủy sản | Kỹ sư nông học; kỹ sư bảo vệ thực vật; kỹ sư chăn nuôi; bác sĩ thú y; kỹ sư nuôi trồng thủy sản; kỹ sư lâm nghiệp; chuyên viên nông nghiệp chính xác; kỹ thuật viên trồng nấm; kỹ thuật viên sản xuất giống cây trồng; kỹ thuật viên canh tác nhà kính |
| 13. Môi trường, năng lượng và khí hậu | Kỹ sư môi trường; kỹ thuật viên xử lý nước; chuyên viên đánh giá tác động môi trường; chuyên viên kiểm kê khí nhà kính; kỹ sư điện mặt trời; kỹ sư điện gió; chuyên viên kiểm toán năng lượng; nhà khí tượng học; chuyên viên bảo tồn đa dạng sinh học; chuyên viên quản lý chất thải |
| 14. Du lịch, khách sạn và ẩm thực | Hướng dẫn viên du lịch; điều hành tour; lễ tân khách sạn; quản lý buồng phòng; nhân viên phục vụ nhà hàng; đầu bếp; thợ làm bánh; nhân viên pha chế; chuyên viên tổ chức sự kiện; điều phối viên du lịch cộng đồng |
| 15. Logistics và vận tải | Chuyên viên logistics; chuyên viên xuất nhập khẩu; nhân viên khai báo hải quan; điều phối vận tải; chuyên viên hoạch định chuỗi cung ứng; quản lý kho; nhân viên kiểm đếm hàng hóa; nhân viên điều độ cảng; lái tàu đường sắt; kỹ thuật viên bảo dưỡng tàu bay |
| 16. Pháp luật và dịch vụ công | Luật sư; chuyên viên pháp chế doanh nghiệp; công chứng viên; trợ giúp viên pháp lý; hòa giải viên thương mại; chuyên viên hành chính công; chuyên viên lưu trữ; cán bộ thư viện; chuyên viên quản lý văn hóa; chuyên viên đối ngoại |
| 17. Nghề kỹ thuật và dịch vụ thiết yếu | Thợ điện dân dụng; thợ lắp đặt hệ thống nước; kỹ thuật viên điện lạnh; thợ mộc; thợ xây; thợ sơn công trình; thợ may; thợ sửa xe máy; kỹ thuật viên sửa điện thoại; kỹ thuật viên sửa thiết bị gia dụng |
| 18. Văn hóa, nghệ thuật và thể thao | Nghệ sĩ biểu diễn nhạc cụ; ca sĩ; diễn viên; biên đạo múa; đạo diễn sân khấu; nhà thiết kế thời trang; huấn luyện viên thể thao; vận động viên; chuyên viên bảo tàng; chuyên viên bảo quản hiện vật |
| 19. Nghề địa phương và sinh kế cộng đồng | Thợ dệt thổ cẩm; thợ nhuộm vải tự nhiên; thợ đan lát; thợ chế tác nhạc cụ truyền thống; thợ làm gốm; kỹ thuật viên chế biến chè; kỹ thuật viên trồng và sơ chế dược liệu; kỹ thuật viên chế biến nông sản; điều phối viên phát triển cộng đồng; nhân viên bán hàng thương mại điện tử nông sản |
| 20. Khoa học, vật liệu và sản xuất | Nhà nghiên cứu hóa học; nhà nghiên cứu sinh học; kỹ sư công nghệ sinh học; kỹ sư công nghệ thực phẩm; kỹ sư vật liệu; kỹ sư hóa học; kỹ sư quản lý chất lượng; chuyên viên quản lý sản xuất; kỹ thuật viên phòng thí nghiệm vật liệu; kỹ sư công nghệ dệt may |

### 4.3. Nội dung tối thiểu của hồ sơ nghề

Mỗi hồ sơ phải có: tên Việt/Anh, tên đồng nghĩa, nhóm điều hướng, mô tả ngắn, 3–5 công việc điển hình, sản phẩm đầu ra, môi trường làm việc, kỹ năng, khó khăn/đánh đổi, các lối tiếp cận đào tạo và một hoạt động thử sức phù hợp học sinh THPT.

Quản lý thêm: mã nghề chính thức khi đã đối chiếu; nguồn URL; ngày truy cập; ngày cập nhật; trạng thái kiểm duyệt. Không tự tạo mã ISCO/mã nghề Việt Nam. Khi chưa rõ, để trống và đánh dấu cần đối chiếu.

RIASEC chỉ là gợi ý biên tập có giải thích, không tự nhận đã được chuẩn hóa cho mọi nghề. Không dùng làm điều kiện khóa nghề hoặc kết luận học sinh chắc chắn phù hợp.

Đường học tập cần bao gồm đại học, cao đẳng, trung cấp, đào tạo nghề hoặc học nghề thực tế tùy nghề. Với nghề có điều kiện hành nghề, kiểm tra và dẫn nguồn hiện hành trước khi trình bày yêu cầu cụ thể.

Không sao chép cùng một mô tả, công việc và kỹ năng cho hàng loạt nghề. Hồ sơ thiếu nội dung phải ở trạng thái nháp, không tính vào số hồ sơ hoàn chỉnh.

### 4.4. “Nghề hot” phải có căn cứ

- Không tự động gắn “hot”, “khát nhân lực”, “lương cao” cho mọi nghề.
- Bán dẫn là nhóm ưu tiên nghiên cứu do Việt Nam có chiến lược phát triển ngành; điều đó không chứng minh mọi vị trí đều dễ xin việc.
- Phiên dịch và ngân hàng là nhóm người dùng yêu cầu ưu tiên; không tự suy ra đó là nhóm đang thiếu nhân lực.
- Chỉ hiển thị nhãn xu hướng khi có nguồn, kỳ dữ liệu, phạm vi địa lý và cách diễn giải rõ. Chính sách phát triển, tin tuyển dụng và số liệu việc làm là các loại bằng chứng khác nhau.
- Không bịa lương, số chỗ tuyển, tỷ lệ có việc, đối tác tuyển dụng hoặc cam kết đầu ra. Không có dữ liệu thì ghi “Chưa có dữ liệu đã kiểm chứng”.

## 5. Giao diện cần triển khai

### Kho nghề

- Thanh tìm kiếm có dấu/không dấu, tên Việt/Anh và tên đồng nghĩa.
- Bộ lọc nhóm lĩnh vực, loại trải nghiệm, lối đào tạo; có xóa bộ lọc và trạng thái không tìm thấy kết quả.
- Nhãn riêng: “Hồ sơ nghề”, “Bài tập tình huống”, “3D tương tác”; không gộp chung.
- Phân trang hoặc tải thêm; không render đồng thời hàng trăm cảnh 3D.
- So sánh tối đa ba nghề theo nhiệm vụ, kỹ năng, môi trường và lối đào tạo.
- Bộ đếm lấy từ dữ liệu thật sau lọc/kiểm duyệt, không viết cứng “200+” hoặc “1.000+”.

### Trang thử nghề

- Bố cục: chọn nghề → đọc nhiệm vụ → thao tác → xem phản hồi → tự đánh giá → xem hồ sơ nghề.
- Máy tính: vùng cảnh 3D rộng, bên cạnh là nhiệm vụ và công cụ. Điện thoại: cảnh trên, nhiệm vụ bên dưới, nút thao tác đủ lớn.
- Có hướng dẫn điều khiển, đặt lại bài, lưu tiến độ nếu hệ thống hỗ trợ và thoát trạm.
- Kết quả mô phỏng chỉ phản ánh bài tập vừa làm; không biến điểm thao tác thành bài chẩn đoán năng lực hay quyết định chọn nghề.

### Chatbot

- Cho phép mở từ hồ sơ nghề với ngữ cảnh nghề đang xem.
- Câu hỏi nhanh phù hợp: “Một ngày làm việc thế nào?”, “Khó nhất ở nghề này là gì?”, “Có thể bắt đầu học từ đâu?”, “So sánh với nghề khác”.
- Chat không che kín nút thao tác trên điện thoại; có đóng/mở, hỗ trợ bàn phím và thông báo trạng thái đọc được bằng công nghệ trợ giúp.

## 6. Kiểm tra dữ liệu cũ trong phạm vi liên quan

Rà soát các thông báo thời gian, nguồn tuyển sinh và tuyên bố “đã xác minh” xuất hiện trong chatbot/kho nghề. Không dùng nội dung cũ như thông tin năm hiện tại. Không xóa các phần ngoài phạm vi nếu chưa cần thiết; chỉ báo rõ mục nào cần cập nhật tiếp.

## 7. Điều kiện nghiệm thu

| Hạng mục | Bằng chứng phải cung cấp |
|---|---|
| Nguyên nhân chatbot | Luồng lỗi tái hiện, mã lỗi/log đã che dữ liệu, file được sửa và giải thích |
| Chatbot hoạt động | Câu hỏi thật nhận câu trả lời từ dịch vụ AI; phân biệt test thật và lỗi mô phỏng; có số đo thời gian |
| Xử lý lỗi | Không mất câu hỏi; retry có giới hạn; nút gửi hoạt động lại; không lộ khóa |
| 3D kiến trúc | Xoay/zoom, chọn/đặt vật thể, thay đổi cảnh, kiểm tra nhiệm vụ và phản hồi theo trạng thái |
| 3D bán dẫn | Đặt/hướng chip, nối điểm, nhận diện lỗi và sửa được trong mô hình |
| 3D ô tô | Kiểm tra hoặc sửa trạm hiện có, ghi rõ thao tác thực sự hoạt động |
| Kho nghề | Báo số hồ sơ duy nhất hoàn chỉnh, số nháp, số có bài tập và số có 3D; không tính tên đồng nghĩa thành nghề mới |
| Tìm kiếm và so sánh | Tìm không dấu, bộ lọc, trạng thái rỗng và so sánh tối đa ba nghề hoạt động |
| Thiết bị | Kiểm tra desktop và màn hình điện thoại; có phương án khi WebGL không khả dụng |
| Dữ liệu nguồn | Không bịa mã, lương, xu hướng hoặc nguồn; có URL và ngày cập nhật cho thông tin cần xác minh |

Không công bố hoàn thành toàn bộ nếu còn trạm hỏng hoặc hồ sơ chỉ có tiêu đề. Nếu giới hạn môi trường khiến chưa hoàn thành được, vẫn thực hiện phần có thể làm và liệt kê chính xác phần còn thiếu, không thay bằng nút giả.

## 8. Kết quả bạn phải trả lại sau khi triển khai

1. Nguyên nhân chatbot đã được xác minh và cách sửa; giả thuyết nào còn chưa kiểm chứng.
2. Các tệp đã thay đổi và cấu hình người sở hữu cần bổ sung, nếu có.
3. Danh sách trạm 3D thực sự chạy được và thao tác đã kiểm tra.
4. Thống kê kho nghề từ dữ liệu thật: hoàn chỉnh, nháp, có tình huống, có 3D.
5. Kết quả kiểm thử, giới hạn còn lại và cách tôi tự kiểm tra trong giao diện.

Hãy bắt đầu bằng việc đọc mã nguồn và tái hiện lỗi, sau đó sửa trực tiếp. Không chỉ trả lại một kế hoạch hoặc bài giải thích.

## Nguồn định hướng để đối chiếu khi triển khai

- ILO, ISCO-08: https://isco.ilo.org/en/isco-08/
- Danh mục nghề nghiệp Việt Nam, Quyết định 34/2020/QĐ-TTg: https://vanban.chinhphu.vn/default.aspx?docid=201721&pageid=27160
- Chiến lược phát triển công nghiệp bán dẫn Việt Nam, Quyết định 1018/QĐ-TTg: https://baochinhphu.vn/chien-luoc-phat-trien-cong-nghiep-ban-dan-viet-nam-den-nam-2030-va-tam-nhin-2050-10224092208021662.htm

Các nguồn trên định hướng cấu trúc và chính sách; không phải bằng chứng rằng toàn bộ 200 hồ sơ nghề hoặc mã nghề đã được xác minh. Cần kiểm tra nguồn chuyên môn của từng hồ sơ và tài liệu kỹ thuật chính thức phù hợp phiên bản dự án.
