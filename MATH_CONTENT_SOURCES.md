# Lý thuyết Toán rời rạc — nguồn và kiểm tra

45bài,9nhóm,được biên soạn thành định nghĩa/công thức,cách áp dụng,ví dụ bằng dữ liệu/bảng,giải thích,lỗi dễ nhầm và câu hỏi tự kiểm tra. Không thay19đề mẫu,50bài ôn hay20công thức cũ.

| PDF người học cung cấp | File trong bộ mã | Trang vật lý | Slide đánh số | Phần sử dụng |
| --- | --- | ---: | ---: | --- |
| Trieu_presentation(2).pdf | math-assets/dem.pdf | 94 | 53 | Cộng/nhân,bù trừ,Dirichlet,hoán vị/chỉnh hợp/tổ hợp,đếm lặp,phân phối,sinh kế tiếp,Newton |
| Trieu_presentation (1)(2).pdf | math-assets/truy-hoi.pdf | 42 | 38 | Truy hồi,lặp,hàm sinh,đặc trưng,nghiệm kép/phức,bài nâng cao |
| Trieu_presentation (2)(2).pdf | math-assets/toi-uu.pdf | 37 | 33 | Quay lui,n hậu,mô hình tối ưu,ba lô,TSP,phân công,ATM,DP,nhánh cận |

Các trang có hiệu ứng trình chiếu được gom theo số in dưới slide;dùng bản xuất hiện cuối của số slide đó để có phần trả lời/hướng dẫn đầy đủ hơn. `math-sources.json` giữ ánh xạ số slide↔trang vật lý và văn bản nguồn. Công thức/hình nguyên bản đọc trong PDF,không tái dựng từ văn bản trích xuất thiếu bố cục.

Phần tập hợp/ánh xạ là kiến thức nền cho các bài tập hiện có,ghi rõ “bổ trợ” và không gán vào ba PDF mới. Phần truy hồi không thuần nhất giải thích thêm kỹ thuật áp dụng cho bài nâng cao.

Các hiệu chỉnh quan trọng được ghi tại bài liên quan:

- Slide44 phần sinh hoán vị:đảo đoạn đuôi phải tăng con trỏ trái,giảm phải;không giảm cả hai.
- Slide47–48 phần tổ hợp:trần a_i=n−k+i;phải tìm vị trí còn tăng được rồi tăng a_i **sau** vòng quét,lấp đuôi tăng nhỏ nhất.
- Slide13 n hậu:đặt Q3 ở cột2 sau[1,4] cho[1,4,2],không phải[1,4,3]. Mỗi đường chéo có nhiều nhất một hậu,không phải đúng một ở mọi đường chéo.
- Hàm sinh quyên góp sách:13người tối đa1,2người tối đa2,đếm cách theo số lượng góp của từng người. Hệ số x^10 của(1+x)^13(1+x+x²)^2 là10725;được kiểm tra bằng nhân đa thức trực tiếp.
- Ví dụ y_n=a·y_(n−1)+b^n cần tách a=b;không chia a−b khi bằng0.
- Truy hồi a_0=0,a_1=2,a_(n+2)=−4a_(n+1)−8a_n:nghiệm thực đúng là(2√2)^n·sin(3nπ/4),tương đương dạng phức liên hợp. Dạng lượng giác trong slide sai dấu khi n=1.
- Bài nâng cao x_0=x_1=0,x_(n+2)−6x_(n+1)+9x_n=2^n+n:công thức đúng là **x_n=2^n+(n+1)/4+5(n−3)·3^n/12**. Biểu thức trên slide không thỏa hai điều kiện đầu. Công thức hiệu chỉnh được đối chiếu với22số hạng bằng số hữu tỉ chính xác.
- Phần “dễ/khó” được giải thích thận trọng:không định nghĩa NP-hard là “thuật toán chạy mũ”,không coi DP giả đa thức của ba lô là chứng minh bài toán đa thức theo độ dài mã hóa đầu vào.

Tiến độ lý thuyết dùng `sui-math-knowledge-progress`;dữ liệu luyện tập Toán trong `sui-study-lab-v3-progress` được giữ. Tổng tiến độ mới114nội dung.

Kiểm tra tự động:`python tests/verify_math_theory.py`;`node tests/verify_ui.cjs`. Kiểm tra nội dung gồm nguồn,đường dẫn,số nhóm,bài đầy đủ,đếm độc lập các ví dụ hữu hạn,nhân đa thức và truy hồi hữu tỉ/Gaussian integer. UI được kiểm tra chức năng bằng DOM mô phỏng;chưa kiểm tra trực quan toàn trang bằng trình duyệt thật.
