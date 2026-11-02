# Báo cáo kiểm thử v9
## Kiểm tra mới của v9

- 45bài lý thuyết có đủ trường nội dung,9chủ đề,3PDF/173trang vật lý/124slide;đường dẫn tới số trang hợp lệ:đạt.
- Đếm độc lập ví dụ chữ số,tổ hợp,cận,đa tập;nhân đa thức cho ví dụ sách;kiểm tra truy hồi bằng Fraction và số nguyên Gaussian:đạt.
- Tìm/lọc lý thuyết,45tuyến bài,tài liệu nguồn,đáp án tự kiểm tra,tiến độ riêng,mô phỏng lỗi lưu trữ,chuyển môn:đạt.
- Bảng giấy stack/queue đầy đủ cả thao tác bị từ chối;trạng thái cuối khớp trace C++ của mọi preset tương ứng. Phán quyết ngoặc khớp kết quả code:đạt.
- Bảng chuyển/tính tiền tố,hậu tố ghi đúng token,stack và phép tính;ưu tiên và kết hợp được giải thích:đạt các ví dụ và kiểm tra UI.
- 68tuyến code/bảng/mô phỏng,163preset;chọn dòng,đổi ca,chia trang,đồng bộ bảng/bước chạy:đạt trong DOM mô phỏng.
- SVG minh họa stack,queue,DSLK vàBST đã render riêng để xem bố cục nút,nhãn,mũi tên. Đây là kiểm tra hình riêng,không phải kiểm tra CSS toàn trang bằng trình duyệt thật.
- Toàn bộ68file C++11 và dữ liệu bài cũ khớp byte v8;v9 không sửa thuật toán C++. Kết quả biên dịch/chạy của v8 được kế thừa,không ghi nhận là một lần biên dịch mới trong v9.
- Kiểm tra hồi quy CSDL/OOP và cú pháp JavaScript:đạt.

## Kết quả nền tảng v8 được giữ

- Biên dịch/chạy thật68chương trình C++11,163ca dữ liệu:đạt.
- Kiểm thử độc lập245mảng ngẫu nhiên cho7bản sắp xếp:đạt.
- Kiểm thử100lần cập nhật BST/AVL ngẫu nhiên và kiểm tra thứ tự/cân bằng/chiều cao:đạt.
- Biên8hậu=92nghiệm,Fibonacci92,phân tích nguyên tố,trừ/chia và kết hợp biểu thức:đạt.
- AddressSanitizer + UndefinedBehaviorSanitizer:20chương trình con trỏ,47ca:không báo truy cập sai hoặc hành vi không xác định. LeakSanitizer không chạy vì giới hạn /proc/ptrace của môi trường;không khẳng định đã kiểm tra rò rỉ bằng công cụ này.
- Chức năng DSA:87tuyến bài học,68tuyến code/mô phỏng,tất cả163preset,16tài liệu nguồn,6nhóm ôn tập,tìm/lọc,lùi/tiến/chạy/dừng/reset,tiến độ riêng từng thầy,lỗi lưu trữ và chuyển4môn:đạt bằng DOM mô phỏng.
- CSDL:30trường hợp đại số quan hệ/phụ thuộc hàm/khóa/chuẩn hóa/phân rã cùng các tuyến UI:đạt.
- OOP:38kiến thức,42câu lý thuyết,27Lab và63đường dẫn C#:đạt kiểm tra nội dung/cấu trúc/UI;chưa có trình biên dịch C# để chạy.
- Dữ liệu Toán,CSDL,OOP khớp byte với v7,không thay dữ liệu bài cũ.
- Cú pháp JavaScript/build index:đạt.
- Chưa kiểm tra trực quan bằng trình duyệt thật;DOM mô phỏng không đo bố cục/màu/overflow thực tế.

Các lệnh tái kiểm tra có trong README.md. Không có dịch vụ chạy mã C++ tùy ý trong browser:trình mô phỏng phát lại trace đã kiểm tra từ lần chạy C++11.
