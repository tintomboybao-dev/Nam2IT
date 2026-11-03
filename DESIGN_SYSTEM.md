# Sủi Study Lab v11 — Design system

Hướng thiết kế: Minimalism + Editorial Reading Experience, áp dụng thủ công trên HTML/CSS/JavaScript hiện có. Không cài UI UX Pro Max; không chạy Design System Generator. Đã đọc README và SKILL.md công khai tại https://github.com/nextlevelbuilder/ui-ux-pro-max-skill . Các đường dẫn quick-reference/pro-rules không tải được trong phiên này. Áp dụng các tiêu chí đọc được: chữ nền 16px, tương phản, vùng chạm tối thiểu 44px, focus rõ, điều hướng phân cấp và reduced motion. Không coi các hướng dẫn là chứng nhận accessibility.

## Token dùng chung

| Vai trò | Sáng | Tối |
|---|---|---|
| Nền / surface | #ffffff | #202321 |
| Nền phụ | #f5f5f3 | #292d29 |
| Chữ chính | #242726 | #e9ece7 |
| Chữ phụ | #626763 | #b4bcb5 |
| Đường phân cách | #e5e7e3 | #3a403a |
| Đường mạnh | #a5aaa5 | #727c73 |
| Tương tác / focus | #16664d | #9cdbb5 |
| Nền tương tác | #edf4ef | #2c3d32 |

Các token nằm trong theme.css, dùng lại biến cũ. Không tạo một theme song song. Quy tắc CSDL cuối cascade ở db-math.css cũng được chỉnh để nền công thức không trở thành card màu.

## Chữ và khoảng cách

- Font hệ thống Segoe UI/Arial, không gọi Google Fonts. Code monospace; công thức KaTeX đóng gói.
- Body 16px × --scale; line-height 1.72–1.75. A−/A+ giữ thang cũ 0.9–1.3.
- Tiêu đề trang khoảng 1.65–2.15rem, cấp 2 khoảng 1.2rem, cấp 3 theo nội dung.
- Spacing: 4 / 8 / 12 / 16 / 24 / 32 / 48px. Radius: 4 / 8 / 12px.
- Nội dung chữ tối đa 800px, nằm giữa vùng còn lại. Bảng, công thức không chia hợp lệ và code cuộn cục bộ. Không ép LaTeX xuống dòng bằng overflow-wrap:anywhere.

## Bố cục và tương tác

- Desktop >900px: sidebar 260px, nút ẩn/hiện; môn → nhóm/chương → bài.
- ≤900px: drawer tối đa 320px/88vw, backdrop, nút Đóng, Escape, focus loop và inert vùng phía sau.
- Các mốc QA yêu cầu: 375, 768, 1024, 1440px; đã chuẩn bị test thực nhưng chưa chạy được Chromium.
- Sidebar tìm không dấu trong môn/giảng viên hiện tại; chỉ mở nhóm đang học hoặc khớp tìm kiếm.
- Không dùng số thứ tự trang trí ở mọi liên kết. Tiến độ là dòng chữ nhỏ; từng bài có nhãn Đã nắm.
- Nút tối thiểu 44px; viền focus 3px. Không thêm animation; prefers-reduced-motion được giữ.
- Học đầy đủ giữ toàn bộ nội dung. Ôn nhanh thu các phần ví dụ/code/giải thích mở rộng có cấu trúc, không cắt điều kiện. Tự luyện che nội dung lời giải, giữ nháp trong phiên. Trắc nghiệm dùng bộ chấm cũ, không nhân đôi đáp án.
- LearningReader tăng cường renderer hiện có bằng cách di chuyển node thật, giữ handlers; không sao chép các control tương tác.

## Giới hạn

Đây là hệ thống đã triển khai bằng mã, chưa có xác nhận trực quan từ trình duyệt. Một số bài văn bản dài chưa chia đủ thành phần có thể thu gọn khi Ôn nhanh. 30 công thức lý thuyết Toán đã có LaTeX rõ ràng; 20 công thức cũ vẫn giữ MathML, các câu công thức dạng văn bản còn lại chưa chuyển toàn bộ sang KaTeX.
