# Kiểm thử v11 — 03/11/2026

Kết quả dưới đây là lần chạy trong phiên nâng cấp này. JSON chi tiết: `reports/test-results.json`. Các tài liệu v9/v10 trong reports là lịch sử.

| Kiểm tra | Kết quả và phạm vi |
|---|---|
| build.py | Đạt, index.html và sw.js được tạo; không còn placeholder INLINE |
| Cú pháp JavaScript | Đạt cho 9 file chính và service worker |
| verify_content.py | Đạt: 20 công thức, 19/50 đáp án, 12 DP, 3 vét cạn, 6 hệ số đa thức. Loại phụ thuộc SymPy bằng phép nhân đa thức thưa độc lập |
| verify_database.py | Đạt: 30 ca FD, bao đóng, khóa, dạng chuẩn, phân rã, chase, phản ví dụ và đại số quan hệ |
| verify_oop.py | Đạt cấu trúc 38 kiến thức, 42 câu, 27 project, 63 liên kết code; KHÔNG phải kết quả C# compiler |
| verify_math_theory.py | Đạt cấu trúc 45 bài, nguồn và các ví dụ đếm/hàm sinh/truy hồi được suite bao phủ |
| verify_dsa.py | Biên dịch/chạy 68 C++11, 163 preset; 245 ca sort ngẫu nhiên, 100 cập nhật BST/AVL, 8 hậu và biên số/biểu thức đạt |
| verify_dsa_memory.py | ASan/UBSan 20 chương trình con trỏ, 47 preset đạt; LeakSanitizer bị tắt trong suite, chưa xác minh rò rỉ |
| verify_ui.cjs | Hồi quy điều hướng, tìm/lọc, quiz, tiến độ, storage failure, 4 môn, 2 thầy và 163 ca mô phỏng đạt trong DOM mô phỏng |
| verify_csdl_math.cjs | 191 khối công thức, toán tử, HTML+MathML và nguồn font đạt. KaTeX có cảnh báo thiếu metrics một số chữ Việt trong phần text; chưa xác minh ảnh render thật |
| verify_reader.cjs | 192 tuyến bài lý thuyết, catalog/tìm kiếm, mode, nháp, reveal/rerender, MCQ, trạng thái drawer và đồng bộ mô phỏng đạt trong DOM mô phỏng |
| verify_reader_algorithms.cjs | 100 bao đóng so với giao mọi siêu tập đóng, 7 mốc Fibonacci, 4 biên sai và 30 công thức KaTeX đạt |
| verify_preservation.py | 247 file dữ liệu/mã/tài nguyên v10 không đổi byte; 131 nguồn đính kèm giữ đúng SHA-256 |
| verify_offline.cjs | Manifest có đủ file, điều hướng offline giữ đúng trang nguồn, xóa cache chỉ trong prefix của app, bỏ qua origin ngoài: đạt bằng VM mô phỏng |
| verify_interactions.py → verify_browser.cjs | **Bị chặn, chưa chạy kiểm thử thực**: thiếu Chromium; tải bị HTTP 403. Không có ảnh chụp QA và không khẳng định không overflow |
| OOPRegression / 27 project C# | **Chưa chạy**: thiếu .NET SDK/C# compiler |

C++ và dữ liệu gốc không thay đổi sau lần chạy baseline, đã kiểm SHA-256; không ghi các phép kiểm tra này thành một lần thực thi C++ thứ hai.

## Tái chạy

Các test Python nội dung dùng thư viện chuẩn; DSA cần g++ hỗ trợ C++11. Các test Node DOM/thuật toán không cần npm.

```sh
python build.py
python tests/verify_content.py
python tests/verify_database.py
python tests/verify_oop.py
python tests/verify_math_theory.py
python tests/verify_dsa.py
python tests/verify_dsa_memory.py
python tests/verify_preservation.py
node tests/verify_ui.cjs
node tests/verify_csdl_math.cjs
node tests/verify_reader.cjs
node tests/verify_reader_algorithms.cjs
node tests/verify_offline.cjs
```

Trên máy có Playwright/Chromium: `node tests/verify_browser.cjs` (hoặc entrypoint cũ `python tests/verify_interactions.py`). Có thể đặt BROWSER_PATH tới trình Chromium đã cài. Suite mở local HTTP server, kiểm 375/768/1024/1440px, tối/cỡ chữ, drawer, chế độ, bước DSA và offline reload. Cần kiểm tra trực quan thủ công thêm công thức, code, cây rộng và bàn phím.

Trên máy có .NET 8: `dotnet run --project tests/OOPRegression/OOPRegression.csproj`. Bài Console cần phím di chuyển phải kiểm tra trong terminal tương tác.

Không có tuyên bố mọi nội dung đúng 100%, không có tuyên bố đã test GitHub Pages thật hoặc toàn bộ WCAG.
