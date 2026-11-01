# DSA — nguồn nội dung và phạm vi v8

Nguồn là hai ZIP người học cung cấp: `Thầy cương.zip` và `Thầy Văn.zip`. Không trộn hai nhánh thành một học phần. DSA là môn học04,các môn cũ có danh mục và dữ liệu riêng.

## Thầy Cương

| Tài liệu | Số trang | Nội dung đưa vào website |
| --- | ---: | --- |
| linked-list.pdf | 32 | Node/List,InsertNode,FindNode,DeleteNode,duyệt,hủy,đa thức,so sánh mảng,DSLK vòng/kép,STL list |
| Stack.pdf | 47 | LIFO,mảng,C/C++,DSLK,STL,đổi cơ số,ngoặc,trung/hậu/tiền tố,chuyển và tính biểu thức |
| Queue.pdf | 37 | FIFO,mảng đơn và vòng,front/rear/counter,DSLK,ứng dụng,ưu tiên |
| bst.pdf | 34 | Thuật ngữ,các loại cây,cây biểu thức,duyệt,chuyển con đầu–anh em kế,BST,tìm/min/max/thêm/xóa |
| AVL tree (1).pdf | 39 | BF,bốn kiểu lệch,quay đơn/kép,dãy chèn mẫu,xóa và tái cân bằng tổ tiên |
| Review for midterm exam 2024.pdf | 1 | Đủ6nhóm:con trỏ,mảng,phân tích,DSLK,stack,cây/BST |
| TongHopCodeCTDL-GT.pdf | 23 | DSLK,văn bản/dữ liệu lồng,cây/thống kê,sinh viên,12hàm DSLK thực tế được đánh số |

Tổng213trang đều có phần đọc tiếng Việt theo trang. Nội dung Việt hóa là phần diễn giải có hiệu chỉnh,không phải bản PDF đã thay toàn bộ chữ/hình. Mã nguồn gốc nhiều cột được giữ trong PDF;trang web cung cấp mã viết lại sạch,C++11 độc lập. Văn bản gốc có mục mở để đối chiếu. Các hình chính về đa thức,ngoặc,biểu thức,BST/AVL có ảnh gốc ngay trong trang.

Tài liệu tổng hợp có các ứng dụng lưu văn bản,hộ khẩu,người/xe và cây sinh viên. Phần đọc nêu mô hình,thao tác,quyền sở hữu và lưu ý an toàn;không khẳng định website có một ứng dụng quản lý đầy đủ cho từng ví dụ nghiệp vụ đó. Chương trình thực hành tập trung vào cấu trúc và thao tác DSA.

“Review” chỉ là đề cương,không phải đề thi có câu đánh số. Sáu nhóm thực hành là câu biên soạn theo đề cương;có đáp án,phân tích,liên kết toàn bộ chương trình và mô phỏng. Không gán thành đề thi chính thức.

## Thầy Văn

| File | Slide | Nội dung |
| --- | ---: | --- |
| 0_GioiThieu | 21 | Lộ trình,cách học/thực hành,tài liệu gốc |
| 1_DoPhucTapGiaiThuat | 23 | Số nguyên tố,tăng trưởng,best/worst/average,vòng lặp a–f,chia đôi,lũy thừa |
| 2_GiaiThuatDeQuy | 34 | Stack lời gọi,cơ sở dừng,truy hồi,chia để trị,Hà Nội,bit,hoán vị,n hậu,giai thừa,tổng,Fib,thừa số,UCLN,tổ hợp,mã đi tuần |
| 3_Mang | 11 | Tìm tuần tự/nhị phân,bài thao tác mảng |
| 4_SapXepMang | 49 | Selection,Insertion,Bubble,Quick hai bản,Merge và phân tích |
| 5_DanhSachLienKet | 37 | Con trỏ,Node.info,Node*&head,đơn/kép/vòng,đa thức,bài tập |
| 6_NganXepHangDoi | 21 | STL stack,đổi cơ số,hậu tố,trung tố→hậu tố,queue |
| 7_CayNhiPhan | 34 | Cấu trúc/duyệt,biểu diễn mảng,cân bằng theo số nút,heap/heapsort |
| 8_CauTrucTimKiem | 51 | BST,AVL,quy ước bal/phép quay,băm/móc xích,bài48–51 |

Tổng281slide có nội dung văn bản theo từng trang và PowerPoint nguyên bản kèm theo. Các hình/khối mã trong PPTX xem trong file gốc;văn bản trích xuất không thay thế bố cục sơ đồ. Mã viết lại có giải thích trong danh mục riêng.

Mã C++11 là bản minh họa tối giản,không phải bản chép nguyên lỗi slide. Một số ví dụ dùng vector làm vùng chứa mảng để quản lý nhớ;thuật toán,quy ước chỉ số,Node và kiểu thao tác được giữ/giải thích. Bài con trỏ/mảng động trình bày new/delete,new[]/delete[] trực tiếp.

Các bài cuối chương tìm kiếm có ca mô phỏng đúng dữ liệu:BST slide48,49;AVL slide50;hash slide51. Các yêu cầu ở slide49/50 được ghi **độc lập**:mỗi ca dựng lại cây gốc rồi thực hiện yêu cầu. Không lẫn với chuỗi cập nhật nối tiếp.

## Hiệu chỉnh quan trọng

- Cương BF=hL−hR,rỗng−1,lá0. Văn bal=hR−hL,LH=−1,EQ=0,RH=1. Hàm RotateLeft của Văn đưa con trái lên;tên không cùng nghĩa hướng vật lý với Cương.
- InsertNode Cương nhận số phần tử đứng trước vị trí chèn(0..n);Find/Delete trả vị trí1-based hoặc0.
- Sửa lỗi constructor,trùng field/method top,thiếu while,pre/prev và tên hàm khác chữ hoa/thường trong slide.
- Khi lấy nút cuối queue liên kết,đặt rear=NULL. Dữ liệu cũ ở ô queue vòng không còn là phần tử hợp lệ sau khi dequeue.
- 72 hệ10=1020 hệ4;1024 hệ4 trên slide Stack là sai.
- ^ trong ngôn ngữ biểu thức là lũy thừa,kết hợp phải;trong C++ ^ là XOR,phải dùng pow khi tính biểu thức.
- Trung tự cây biểu thức phải giữ ngoặc;in phẳng có thể đổi ngữ nghĩa.
- Min của BST không nhất thiết là lá;nó chỉ không có con trái.
- Ghi chú case1/case4 ở hai hình quay kép Cương không khớp trang phân loại;giải thích LR/RL ngay trong bản Việt hóa.
- Merge tránh INT_MAX canh gây lỗi khi dữ liệu thật bằng INT_MAX;Quick giữ riêng hai kiểu phân hoạch.
- Bubble đúng bản slide không có cờ dừng sớm nên tốt nhất vẫn bậc2. Đệ quy/Heapsort đệ quy tính cả stack.
- Phân biệt cân bằng theo số nút ở chương7 với cân bằng chiều cao AVL.
- Mục “18 bài DSLK” thực tế chỉ đánh số12bài;không dựng thêm6bài rồi coi là nguồn.
- Bài nguyên tố xét n<2;dùng i≤n/i tránh tràn i*i. Không suy trung bình khi thiếu giả thiết phân bố.
- A(5) với in trước rồi if(n<=7)A(n+1) in5,6,7,8.
- Nguồn chỉ nêu tên một số bài NTUcoder;không có đề đầy đủ nên website không tự nhận các ví dụ mở rộng là lời giải chính thức của các bài đó.

## Mô phỏng và kiểm thử

68file .cpp độc lập,87mục học,163ca mẫu. Trace được lấy từ bản instrument cùng mã C++11;file tải về bỏ toàn bộ phần ghi trace. Dòng tô là lệnh vừa thực hiện tại điểm quan sát,không mô phỏng mọi lệnh máy/byte bộ nhớ. Có thể lùi/tiến và phát toàn bộ bước đã ghi. Đầu vào tự nhập cần chạy .cpp bên ngoài trình duyệt.

Các dạng hiển thị:mảng,heap,DSLK đơn/kép/vòng,stack,queue/vòng,các hạng đa thức,token biểu thức,cây/cây con,bàn n hậu,mã đi tuần,ba cọc Hà Nội,bucket hash. Không giả địa chỉ RAM bằng số tùy ý.

`tests/verify_dsa.py` biên dịch và chạy toàn bộ mã phát hành,so đầu ra với163ca;kiểm tra245mảng ngẫu nhiên,100cập nhật BST/AVL và một số biên. `tests/verify_dsa_memory.py` kiểm tra truy cập bộ nhớ/hành vi không xác định với AddressSanitizer/UBSan cho nhóm con trỏ;LeakSanitizer bị tắt vì giới hạn /proc/ptrace của môi trường.

UI được kiểm tra chức năng bằng DOM mô phỏng. Chưa có kiểm tra trực quan bằng trình duyệt thật trong môi trường này. C# OOP giữ giới hạn xác minh của v7:chưa biên dịch/thực thi ở đây.
