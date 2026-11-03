# Sủi Study Lab v11

Bộ website học bốn môn: Toán rời rạc, CSDL, OOP/C# và DSA/C++11. `index.html` đã build sẵn. Không cần npm để mở website; không cần đăng nhập.

## Mở trên máy

Giải nén **toàn bộ** ZIP rồi mở `index.html`. Giữ các thư mục đi kèm để font, tài liệu và mã tải về hoạt động. Nếu trình duyệt hạn chế file local, chạy `python -m http.server 8000` tại thư mục giải nén và mở `http://localhost:8000`.

## Thay bản cũ trên GitHub Pages

1. Sao lưu mã nguồn repository hiện tại bằng Download ZIP hoặc commit trước khi thay.
2. Giải nén v11. Upload các **file và thư mục bên trong**, không upload nguyên ZIP. `index.html` và `.nojekyll` nằm ở thư mục publish đang dùng (root hoặc docs theo cấu hình hiện tại).
3. Ghi đè các file trùng tên, giữ đầy đủ `vendor`, `dsa-assets`, `math-assets`, `csdl-assets`, `dsa-code`, `oop-code`, `source-originals` và `sw.js`. Không đổi cấu hình domain/nhánh publish đang hoạt động nếu không cần.
4. Commit và chờ deployment của repository hoàn thành. Mở lại cùng URL cũ. Điều hướng dùng hash `#/...`, không cần server rewrite cho bài chi tiết.
5. Với các lần cập nhật sau, service worker mới chờ các tab cũ đóng; đóng toàn bộ tab website rồi mở lại. Không xóa localStorage để cập nhật giao diện.

Chưa publish lên GitHub trong phiên biên soạn này. Kiểm tra deployment trên repository của Sủi sau khi upload.

## Offline và tiến độ

- Mở từ file đã giải nén: nội dung, code và tài liệu cục bộ không phụ thuộc CDN.
- Mở qua HTTPS/localhost: service worker tải cache khi online. Lần đầu cần đợi tải xong; sau khi kích hoạt có thể mở lại khi offline. Cache khoảng 60 MB, cần đủ quota. Chức năng này chưa được thực nghiệm trên trình duyệt trong môi trường bàn giao.
- Giữ các khóa: `sui-study-lab-v3-progress`, `sui-db-progress`, `sui-db-done` cũ, `sui-oop-progress`, `sui-math-knowledge-progress`, `sui-dsa-progress`.
- Giữ cùng origin/trình duyệt/hồ sơ để dùng tiến độ cũ. Không tự đồng bộ giữa thiết bị hoặc từ file:// sang HTTPS. Không có lệnh tự xóa tiến độ.
- Nháp Tự luyện giữ trong phiên đang mở; tải lại trang sẽ mất nháp. Bấm Đánh dấu đã nắm để lưu tiến độ.

## Cách học

Chọn môn ở sidebar → mở nhóm → chọn bài; tìm không dấu trong môn hiện tại. DSA giữ riêng Thầy Cương/Thầy Văn. Trên điện thoại bấm Danh mục; chọn bài sẽ đóng drawer.

Học đầy đủ giữ nội dung; Ôn nhanh thu ví dụ/code mở rộng; Tự luyện che lời giải đến khi yêu cầu. Một số bài chưa có cấu trúc thu gọn riêng nên khác biệt giữa hai chế độ đầu còn ít. Không có chatbot hay máy chấm mã tùy ý.

DSA phát lại trace C++11 đã kiểm tra. Bao đóng và Fibonacci là thuật toán chạy trong trình duyệt trên các mẫu hỗ trợ. C# hiển thị/tải về, không thực thi trong web.

## Mã nguồn và build

`template.html`, `styles.css`, `theme.css`: giao diện chung. `app.js`, `db.js`, `oop.js`, `dsa.js`, `math.js`: renderer môn cũ. `reader.js`: reader/danh mục/chế độ chung. `reader-simulations.js`: mô phỏng bổ sung. `math-tex.json`: 30 công thức KaTeX được biên soạn riêng. Các JSON nội dung gốc giữ nguyên.

Chạy `python build.py` sau khi sửa để tạo lại `index.html` và `sw.js`. Cần build cả hai, không tự sửa riêng index rồi bỏ qua nguồn. Các file nguồn và kiểm thử có đủ trong ZIP.

## Báo cáo và giới hạn

- [Báo cáo thay đổi, kiểm tra kiến thức và mục còn thiếu](reports/V11_REPORT.md).
- [Bảng kiểm kê 468 mục](reports/content-inventory.html).
- [Kết quả kiểm thử](TEST_REPORT.md).
- [Design system](DESIGN_SYSTEM.md).
- [Tài liệu gốc đính kèm](source-originals/index.html).

Chưa nghiệm thu bằng trình duyệt thật và chưa chạy C#. Không xem trạng thái DOM đạt là chứng minh không tràn màn hình hoặc nội dung đúng toàn bộ.
