# Trình bày CSDL v10

Đại số quan hệ: biểu thức hoàn chỉnh cho câu thông thường; giữ dòng trung gian cho mô phỏng hoặc biểu thức thực sự phức tạp. Bao đóng có cột thuộc tính bổ sung. Tìm khóa có kết luận ngắn và phần chứng minh mở rộng. Phủ tối thiểu giữ các giai đoạn; chuẩn hóa chỉ rõ phụ thuộc vi phạm; phân rã hiển thị từng lược đồ. Giữ nguyên đề bài gốc.

KaTeX 0.16.9 (MIT) và font WOFF2 có sẵn trong vendor/katex. HTML + MathML, không dùng CDN hay ảnh. Ngắt dòng tại phép toán, dấu bằng và danh sách; chỉ số dài chia hàng. Màu kế thừa chế độ sáng/tối. Chỉ typeset trong CSDL.

## Kiểm tra đã đạt

- python tests/verify_database.py: 30 ca FD, bao đóng, khóa, dạng chuẩn, phân rã và các trường hợp biên đại số quan hệ.
- node tests/verify_csdl_math.cjs: 191 khối công thức, đủ ký hiệu, không lỗi parse, font tồn tại. Đối chiếu v9: giữ nguyên ID, tiêu đề, đề bài của cả 44 bài.
- node tests/verify_ui.cjs: điều hướng, mở lời giải, lọc/tìm kiếm, tiến độ, chuyển môn và chức năng hiện có trong DOM harness.
- JS/CSS và nội dung các môn Toán, OOP, DSA không đổi.

## Giới hạn

Môi trường không có trình duyệt đồ họa, chưa xác minh trực quan bố cục 320/375/768 px. DOM harness không thay thế kiểm tra bố cục thực tế. KaTeX có cảnh báo số đo font với một số chữ Việt trong hằng chuỗi; dùng font dự phòng của trình duyệt. Không có lỗi parse.
