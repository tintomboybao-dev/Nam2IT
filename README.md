# Sủi Study Lab v9

Website ôn tập bốn môn độc lập: **Toán rời rạc**, **Cơ sở dữ liệu**, **Lập trình hướng đối tượng (OOP/C#)**, **Cấu trúc dữ liệu & giải thuật (DSA/C++11)**. Giao diện sáng/tối,cỡ chữ,danh mục và tiến độ thống nhất. Website hoạt động offline,không cần npm hay đăng nhập.

## Cập nhật GitHub Pages

Giải nén ZIP rồi upload **các file và thư mục bên trong** vào thư mục gốc repository,ghi đè file cùng tên và giữ các file mới. `index.html` nằm ngay thư mục gốc; giữ cả `oop-code`, `dsa-code` và `dsa-assets` và `math-assets` để tải mã nguồn, PDF, PowerPoint và hình đối chiếu. Không upload nguyên ZIP thay cho bộ mã.

Commit lên nhánh GitHub Pages đang dùng,chờ triển khai rồi tải lại trang. Tiến độ cũ được giữ khi mở cùng địa chỉ trên cùng trình duyệt và không xóa dữ liệu trang.

## Cập nhật v9

**Toán rời rạc** có thêm danh mục Kiến thức lý thuyết và Bài giảng theo chủ đề:

- 45bài thuộc9nhóm: tập hợp/ánh xạ bổ trợ,nguyên lý đếm,tổ hợp,đếm suy rộng,sinh cấu hình,truy hồi,hàm sinh,nghiệm đặc trưng,tối ưu.
- Mỗi bài có định nghĩa,công thức,cách áp dụng,ví dụ/bảng,giải thích vì sao đúng,lỗi dễ nhầm và câu tự kiểm tra có đáp án mở được.
- Ba PDF của Thầy Nguyễn Hải Triều kèm theo:173trang vật lý/124slide đánh số. Các trang lặp do hiệu ứng được gom dưới cùng số slide;đường dẫn mở đúng trang PDF.
- Ghi chú hiệu chỉnh lỗi mã giả sinh tổ hợp/hoán vị,cấu hình n hậu,nghiệm phức và bài truy hồi nâng cao;không chép lại đáp án sai trong slide.
- Tìm kiếm không dấu,lọc chủ đề và đánh dấu đã nắm. Tiến độ Toán gồm45lý thuyết+19đề mẫu+50ôn tập=114nội dung. Tiến độ bài tập cũ được giữ.

**DSA** ưu tiên bảng và hình cấu trúc trước code:

- Mỗi bài học/mã mẫu có bảng ví dụ;stack/queue ghi cả thao tác bị từ chối do đầy/rỗng.
- Tiền tố/hậu tố có cột token,thao tác/phép tính,stack;chuyển trung tố có thêm đầu ra tạm và stack toán tử. Quy tắc thứ tự lấy hai toán hạng được ghi rõ.
- Stack có hình chồng ô với nhãn top/đáy;queue có front/rear;queue vòng có bảng vị trí vật lý và thứ tự FIFO.
- Danh sách liên kết có sơ đồ nút,data,next,head,NULL;danh sách kép thêm prev;vòng có liên kết quay về head. Stack/queue cài DSLK thể hiện cả chuỗi nút bên dưới cách nhìn trừu tượng.
- Cây nhị phân/BST/AVL/cây biểu thức giữ sơ đồ cây đúng liên kết trái/phải. Những bài còn lại ưu tiên bảng chỉ số,giá trị và biến.
- Bảng dài chia12dòng/trang,kéo ngang khi cần;chọn dòng để xem hình. Trong mục mô phỏng,bảng và bước chạy đồng bộ hai chiều.
- Mã C++11 được giữ đầy đủ trong mục mở rộng. 68filecode và163ca thực thi từ v8 được giữ nguyên byte;v9 thay phần trình bày và thêm bảng ví dụ.

`math.js`,nhóm `math-*.json`,`dsa-tables.js` là các nguồn mới;giữ thư mục `math-assets` khi upload. Bảng stack/queue là diễn giải thao tác đầy đủ,có đối chiếu trạng thái với trace C++ đã chạy. Các bảng khác ghi các mốc quan sát đã có;không nhận là từng lệnh máy.

## DSA: hai lớp học riêng

Chọn **DSA → Thầy Cương / Thầy Văn**. Mỗi lớp có Tổng quan, Kiến thức & công thức, Mã mẫu C++11, Mô phỏng và Bài giảng; riêng Thầy Cương có thêm Ôn thi giữa kỳ.

| Nội dung | Thầy Cương | Thầy Văn |
| --- | ---: | ---: |
| Tài liệu nguồn | 7 PDF / 213 trang | 9 PowerPoint / 281 slide |
| Mục kiến thức | 35 | 52 |
| Chương trình có mô phỏng | 29 | 39 |
| Ca đầu vào đã chạy | 64 | 99 |
| Nhóm ôn giữa kỳ | 6 | — |

- Cương: DSLK đơn/kép/vòng, đa thức, stack mảng/liên kết/STL, queue vòng/liên kết, biểu thức, cây/BST/AVL, con trỏ/mảng/phân tích theo đề cương. Tài liệu tổng hợp có chương trình đủ 12 hàm DSLK được đánh số thực tế và thống kê/sao chép cây.
- Văn: phân tích, bài vòng lặp a–f, đệ quy, chia để trị, quay lui, tìm kiếm, 7 bản sắp xếp, DSLK, stack/queue, cây/BST/AVL và băm. Có bài cuối chương BST/AVL/băm đúng dữ liệu slide, phân tích thừa số, Fibonacci cả hai cách, n hậu và mã đi tuần.
- Cương có phần đọc tiếng Việt cho mọi trang PDF. Đây là **bản Việt hóa diễn giải nội dung theo trang**, giữ tên hàm/biến; không phải PDF đã thay chữ trong hình. Hình/bảng mã nguyên bản có đường dẫn đối chiếu, một số trang minh họa hiển thị ngay trên web. Các đoạn mã nhiều cột giữ bố cục chuẩn trong PDF; mã C++11 trên web là bản viết lại có giải thích và hiệu chỉnh.
- Mỗi chương trình có toàn bộ mã, giải thích các hàm gắn số dòng, trình tự xử lý, đầu vào/đầu ra, chi phí và lỗi cần tránh. Tải một file .cpp và biên dịch độc lập: `g++ -std=c++11 file.cpp -o demo`.
- Mô phỏng: chọn ca mẫu, chạy/dừng, lùi/tiến, về đầu, kéo bước và đổi tốc độ. Hiển thị dữ liệu, biến, dòng vừa chạy, mảng/chuỗi nút/cây/bàn cờ/cọc Hà Nội/bucket tùy bài.
- Các bước là bản ghi từ **lần thực thi C++11 thật đã kiểm tra**, không phải trình biên dịch tùy ý trong trình duyệt. Để dùng đầu vào tự nhập, tải và chạy .cpp. Một số bước cây hiển thị cây con đang xử lý; nhãn bước và phần giải thích nói rõ phạm vi.
- Mã đi tuần dùng bàn ≤5 trong ví dụ để trình bày backtracking thuần; không tuyên bố giải nhanh bàn8×8. N hậu có thể chạy n=8 (92 nghiệm đã kiểm tra). Tên các bài NTUcoder trên slide không đi kèm toàn bộ đề nên không tự dựng thành “đề gốc”.

Khác biệt quan trọng: **Cương BF=h(trái)−h(phải); Văn bal=h(phải)−h(trái)**. Tên `RotateLeft` trên slide Văn đưa con trái lên (quay vật lý phải); phần Văn giữ và giải thích quy ước này. Xem `DSA_CONTENT_SOURCES.md`.

## Nội dung OOP

- 38 mục kiến thức/công thức từ đủ 4 chủ đề PDF,ví dụ và lỗi dễ nhầm.
- 42 câu/bài từ BaiTapOOP:20 trắc nghiệm (mỗi câu4 đáp án,giải thích cả4);22 tự luận/viết mã có đáp án đầy đủ.
- 27 bài lập trình:Lab1 có13,Lab2 có8,Lab3 có6;kể cả bài dấu*. Mỗi Lab có danh mục riêng,mỗi bài có đề,phân tích lớp,từng filecode,cách làm,ví dụ và tự kiểm tra.
- 63 file C# trong27 project Console độc lập,có nút sao chép/tải từng file.
- Tìm kiếm không phân biệt dấu,lọc chủ đề/loại câu,tiến độ OOP riêng gồm107 nội dung.

Những đáp án sai/mơ hồ trong ảnh có ghi chú hiệu chỉnh rõ. Xem `OOP_CONTENT_SOURCES.md` để đối chiếu đầy đủ. Website hiển thị mã; không chạy C# trong trình duyệt.

## Mở và chạy bài Lab

Chọn Lab,bài rồi đọc các file. Ví dụ bài3.3 ở `oop-code/Lab3/Bai03/`:

1. Mở `Lab3_Bai03.csproj` bằng Visual Studio có SDK .NET8 phù hợp,hoặc mở terminal tại thư mục đó.
2. Chạy `dotnet run`.
3. Nhập theo nhắc;đối chiếu ví dụ trên website.

Mỗi bài là project riêng;không dán nhiều Main từ nhiều bài vào cùng project. Project dùng cú pháp truyền thống như bài giảng,không dùng các tính năng ngôn ngữ mới chỉ để rút ngắn code.

`NhapLieu.cs` là lớp hỗ trợ kiểm tra dữ liệu được đưa đầy đủ vào từng bài cần dùng. Các bài giao diện Console như2.3 phải chạy trong terminal có bàn phím/cửa sổ thật;không dùng ô kết quả văn bản tĩnh.

## Mã nguồn website

`template.html`,`styles.css`,`theme.css` là giao diện chung;`app.js`,`data.json` cho Toán;`db.js` và nhóm `db-*.json` cho CSDL;`oop.js` và nhóm `oop-*.json` cho OOP; `dsa.js`, `dsa-lessons.json`, `dsa-programs.json`, `dsa-sources.json`, `dsa-exams.json` cho DSA. Chạy `python build.py` sau khi sửa các nguồn để tạo lại `index.html`.

`index.html` đã build sẵn,tự chứa CSS/JavaScript/dữ liệu;không tải thư viện ngoài khi học. Các file C#/C++ và nguồn bài giảng tải bằng đường dẫn tương đối trong các thư mục đi kèm.

## Tiến độ

Toán tiếp tục dùng `sui-study-lab-v3-progress`;CSDL dùng `sui-db-progress` và hỗ trợ dữ liệu cũ `sui-db-done`;OOP dùng `sui-oop-progress`; Lý thuyết Toán dùng riêng `sui-math-knowledge-progress`; DSA dùng `sui-dsa-progress`, tách `cuong`/`van` với kiến thức/mã mẫu/ôn thi riêng. Việc chọn đáp án không tự đánh dấu đã nắm;người học tự đánh dấu khi có thể giải thích. Tiến độ lưu trên trình duyệt,không tự đồng bộ nhiều thiết bị.

## Kiểm tra đã chạy

```sh
python build.py
python tests/verify_database.py
python tests/verify_oop.py
node tests/verify_ui.cjs
node --check app.js
node --check db.js
node --check oop.js
node --check dsa.js
node --check math.js
node --check dsa-tables.js
python tests/verify_math_theory.py
python tests/verify_dsa.py
python tests/verify_dsa_memory.py
```

Các kiểm tra Python/Node dùng thư viện chuẩn; hai kiểm tra DSA cần `g++` hỗ trợ C++11. Kiểm tra bộ nhớ dùng AddressSanitizer/UBSan trên Linux. Kiểm tra UI dùng DOM mô phỏng:tuyến trang,lựa chọn/chấm/làm lại trắc nghiệm,lọc,tiến độ và chuyển bốn môn, hai nhánh DSA và tất cả163 ca mô phỏng. Kiểm tra nội dung OOP gồmđộ phủ nguồn,đáp án,đường dẫn và cấu trúc mã;không thay thế trình biên dịch C#.

**DSA đã thực thi:** 68 file C++11 và163 ca đầu vào,245 mảng ngẫu nhiên cho7 bản sắp xếp,100 lần cập nhật BST/AVL ngẫu nhiên,8 hậu và các biên số/biểu thức. Kiểm tra bộ nhớ được ghi trong báo cáo kiểm thử kèm theo.

**Giới hạn xác minh:** môi trường biên soạn không có SDK/trình biên dịch C# và trình duyệt thật. Chưa chạy biên dịch/thực thi27 project,chưa kiểm tra trực quan bố cục bằng trình duyệt.

## Kiểm tra C# trên máy có SDK .NET8

```sh
dotnet run --project tests/OOPRegression/OOPRegression.csproj
```

Project này liên kết toàn bộ mã Lab trong đúng namespace của chúng,chọn một Main kiểm tra riêng và kiểm tra tuổi,Armstrong,sắp xếp,tài khoản,hình học,thời gian,BMI,phân số,operator,học phí,lưu trú/static. Nó cũng buộc bộ biên dịch kiểm tra tất cả63 file C#. Mã kiểm tra này đã được chuẩn bị,chưa được chạy tại môi trường biên soạn.

Các kiểm tra Toán rời rạc cũ vẫn có trong thư mục tests và có thể cần thư viện riêng. Nội dung hai môn cũ được giữ tương thích.
