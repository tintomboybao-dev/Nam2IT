# Báo cáo kiểm thử v8

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
