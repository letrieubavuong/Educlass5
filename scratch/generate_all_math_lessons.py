import json

lessons_meta = [
    # CĐ 1
    (1, "Chủ đề 1. Ôn tập và bổ sung", "Bài 1. Ôn tập các số tự nhiên", "Ôn tập đọc, viết, so sánh các số tự nhiên.", "1\\,000\\,000 = 10 \\text{ trăm nghìn}", "mcq", "Trong số $5\\,842\\,910$, chữ số $8$ thuộc hàng nào?", ["Hàng trăm nghìn", "Hàng chục nghìn", "Hàng triệu", "Hàng nghìn"], 0, "Chữ số 8 đứng ở hàng trăm nghìn."),
    (2, "Chủ đề 1. Ôn tập và bổ sung", "Bài 2. Ôn tập các phép tính với số tự nhiên", "Cộng, trừ, nhân, chia số tự nhiên.", "a \\times b + a \\times c = a \\times (b + c)", "short_answer", "Tính hợp lý: $25 \\times 38 \\times 4 = ?$", "3800", None, "3800"),
    (3, "Chủ đề 1. Ôn tập và bổ sung", "Bài 3. Ôn tập phân số", "Khái niệm và rút gọn phân số.", "\\frac{a}{b} = \\frac{a : k}{b : k}", "mcq", "Rút gọn phân số $\\frac{18}{24}$ về tối giản:", ["$\\frac{3}{4}$", "$\\frac{9}{12}$", "$\\frac{2}{3}$", "$\\frac{4}{3}$"], 0, "Chia tử và mẫu cho 6 ta được 3/4."),
    (4, "Chủ đề 1. Ôn tập và bổ sung", "Bài 4. Phân số thập phân", "Phân số có mẫu 10, 100, 1000.", "\\frac{3}{5} = \\frac{6}{10}", "mcq", "Phân số nào dưới đây là phân số thập phân?", ["$\\frac{7}{100}$", "$\\frac{3}{25}$", "$\\frac{10}{7}$", "$\\frac{5}{12}$"], 0, "Có mẫu là 100."),
    (5, "Chủ đề 1. Ôn tập và bổ sung", "Bài 5. Ôn tập các phép tính với phân số", "Nhân và chia các phân số.", "\\frac{a}{b} : \\frac{c}{d} = \\frac{a \\times d}{b \\times c}", "short_answer", "Tính: $\\frac{2}{3} : \\frac{4}{9} = ?$", "3/2", None, "3/2"),
    (6, "Chủ đề 1. Ôn tập và bổ sung", "Bài 6. Cộng, trừ hai phân số khác mẫu số", "Quy đồng mẫu số và tính.", "\\frac{1}{4} + \\frac{2}{3} = \\frac{11}{12}", "mcq", "Tính: $\\frac{3}{5} + \\frac{1}{2} = ?$", ["$\\frac{11}{10}$", "$\\frac{4}{7}$", "$\\frac{4}{10}$", "$\\frac{7}{10}$"], 0, "Quy đồng mẫu số chung là 10."),
    (7, "Chủ đề 1. Ôn tập và bổ sung", "Bài 7. Hỗn số", "Khái niệm và đổi hỗn số thành phân số.", "a\\frac{b}{c} = \\frac{a \\times c + b}{c}", "mcq", "Chuyển $3\\frac{2}{5}$ thành phân số:", ["$\\frac{17}{5}$", "$\\frac{11}{5}$", "$\\frac{15}{5}$", "$\\frac{13}{5}$"], 0, "3*5+2 = 17/5."),
    (8, "Chủ đề 1. Ôn tập và bổ sung", "Bài 8. Ôn tập hình học và đo lường", "Chu vi và diện tích hình chữ nhật, hình vuông.", "P = (a + b) \\times 2 \\quad S = a \\times b", "short_answer", "Hình chữ nhật dài $8m$, rộng $5m$. Diện tích là bao nhiêu $m^2$?", "40", None, "S = 8*5 = 40"),
    (9, "Chủ đề 1. Ôn tập và bổ sung", "Bài 9. Luyện tập chung", "Tổng hợp kiến thức Chủ đề 1.", "\\text{Tổng hợp phép tính}", "true_false", "Phân số $\\frac{4}{5} > \\frac{3}{4}$. Đúng hay Sai?", True, None, "Đúng! Quy đồng 16/20 > 15/20."),

    # CĐ 2
    (10, "Chủ đề 2. Số thập phân", "Bài 10. Khái niệm số thập phân", "Phần nguyên và phần thập phân.", "12.35 = 12 + \\frac{3}{10} + \\frac{5}{100}", "mcq", "Trong số $45.678$, chữ số $7$ ở hàng nào?", ["Hàng phần trăm", "Hàng phần mười", "Hàng phần nghìn", "Hàng đơn vị"], 0, "Thuộc hàng phần trăm."),
    (11, "Chủ đề 2. Số thập phân", "Bài 11. So sánh các số thập phân", "So sánh hai số thập phân.", "5.8 > 4.9", "true_false", "$4.500 = 4.5$. Đúng hay Sai?", True, None, "Đúng! Bỏ chữ số 0 ở tận cùng không đổi giá trị."),
    (12, "Chủ đề 2. Số thập phân", "Bài 12. Viết số đo đại lượng dưới dạng số thập phân", "Đổi đơn vị đo sang số thập phân.", "3m \\, 5dm = 3.5m", "short_answer", "Viết $5m \\, 8cm$ dưới dạng số thập phân mét ($m$):", "5.08", None, "5m 8cm = 5.08m."),
    (13, "Chủ đề 2. Số thập phân", "Bài 13. Làm tròn số thập phân", "Quy tắc làm tròn số thập phân.", "\\text{Làm tròn } 4.36 \\rightarrow 4.4", "mcq", "Làm tròn $8.765$ đến hàng phần mười:", ["$8.8$", "$8.7$", "$8.77$", "$9.0$"], 0, "6 >= 5 nên làm tròn thành 8.8."),
    (14, "Chủ đề 2. Số thập phân", "Bài 14. Luyện tập chung", "Ôn tập tổng hợp Số thập phân.", "\\text{Luyện tập so sánh & làm tròn}", "short_answer", "Số nhỏ nhất trong dãy $3.4; 3.04; 3.44$ là:", "3.04", None, "3.04 nhỏ nhất."),

    # CĐ 3
    (15, "Chủ đề 3. Một số đơn vị đo diện tích", "Bài 15. Ki-lô-mét vuông. Héc-ta", "Đơn vị đo diện tích $km^2$ và $ha$.", "1 ha = 10\\,000 m^2", "short_answer", "Đổi $2.5 ha = ? m^2$", "25000", None, "2.5 * 10000 = 25000."),
    (16, "Chủ đề 3. Một số đơn vị đo diện tích", "Bài 16. Các đơn vị đo diện tích", "Bảng đơn vị đo diện tích.", "1 m^2 = 100 dm^2", "mcq", "Điền số thích hợp: $4 m^2 \\, 5 dm^2 = ? dm^2$", ["$405$", "$450$", "$45$", "$4005$"], 0, "4m2 = 400dm2 + 5 = 405."),
    (17, "Chủ đề 3. Một số đơn vị đo diện tích", "Bài 17. Thực hành và trải nghiệm với một số đơn vị đo đại lượng", "Ứng dụng đo diện tích thực tế.", "\\text{Thực hành ước lượng}", "true_false", "Diện tích tỉnh/thành phố dùng đơn vị $km^2$. Đúng hay Sai?", True, None, "Đúng! $km^2$ đo diện tích vùng rộng lớn."),
    (18, "Chủ đề 3. Một số đơn vị đo diện tích", "Bài 18. Luyện tập chung", "Luyện tập đơn vị diện tích.", "\\text{1 ha = 10 000 m2}", "short_answer", "Khu rừng dài $2km$, rộng $1.5km$. Diện tích là bao nhiêu $ha$?", "300", None, "2 * 1.5 = 3 km2 = 300 ha."),

    # CĐ 4
    (19, "Chủ đề 4. Các phép tính với số thập phân", "Bài 19. Phép cộng số thập phân", "Cộng hai số thập phân đặt tính thẳng cột dấu phẩy.", "a + b = b + a", "short_answer", "Tính: $12.5 + 8.75 = ?$", "21.25", None, "12.5 + 8.75 = 21.25"),
    (20, "Chủ đề 4. Các phép tính với số thập phân", "Bài 20. Phép trừ số thập phân", "Trừ hai số thập phân.", "a - b = c", "short_answer", "Tính: $45.8 - 19.35 = ?$", "26.45", None, "45.80 - 19.35 = 26.45"),
    (21, "Chủ đề 4. Các phép tính với số thập phân", "Bài 21. Phép nhân số thập phân", "Nhân hai số thập phân đếm chữ số phần thập phân.", "a \\times b = c", "mcq", "Tính: $2.5 \\times 1.4 = ?$", ["$3.5$", "$3.25$", "$3.75$", "$3.0$"], 0, "2.5 * 1.4 = 3.5"),
    (22, "Chủ đề 4. Các phép tính với số thập phân", "Bài 22. Phép chia số thập phân", "Chia số thập phân cho số tự nhiên và chia hai số thập phân.", "a : b = c", "short_answer", "Tính: $15.6 : 3 = ?$", "5.2", None, "15.6 : 3 = 5.2"),
    (23, "Chủ đề 4. Các phép tính với số thập phân", "Bài 23. Nhân, chia số thập phân với 10; 100; 1 000;... hoặc với 0,1; 0,01; 0,001;...", "Dịch chuyển dấu phẩy sang phải hoặc trái.", "x \\times 10 \\rightarrow \\text{dịch phẩy sang phải 1 hàng}", "mcq", "Khi nhân một số thập phân với $0.1$, ta dịch dấu phẩy sang bên nào?", ["Bên trái 1 hàng", "Bên phải 1 hàng", "Bên trái 2 hàng", "Bên phải 2 hàng"], 0, "Nhân với 0.1 tương đương chia cho 10, dịch phẩy sang trái 1 hàng."),
    (24, "Chủ đề 4. Các phép tính với số thập phân", "Bài 24. Luyện tập chung", "Tổng hợp 4 phép tính số thập phân.", "\\text{Luyện tập phép tính số thập phân}", "short_answer", "Tính: $0.5 \\times 4.2 : 0.1 = ?$", "21", None, "0.5 * 4.2 = 2.1; 2.1 : 0.1 = 21"),

    # CĐ 5
    (25, "Chủ đề 5. Một số hình phẳng. Chu vi và diện tích", "Bài 25. Hình tam giác. Diện tích hình tam giác", "Công thức diện tích tam giác $S = \\frac{a \\times h}{2}$.", "S = \\frac{a \\times h}{2}", "short_answer", "Tam giác có đáy $12cm$, chiều cao $5cm$. Diện tích là bao nhiêu $cm^2$?", "30", None, "S = (12 * 5)/2 = 30 cm2."),
    (26, "Chủ đề 5. Một số hình phẳng. Chu vi và diện tích", "Bài 26. Hình thang. Diện tích hình thang", "Công thức diện tích hình thang $S = \\frac{(a + b) \\times h}{2}$.", "S = \\frac{(a + b) \\times h}{2}", "short_answer", "Hình thang có hai đáy $8cm$ và $6cm$, chiều cao $4cm$. Diện tích là bao nhiêu $cm^2$?", "28", None, "S = (8+6)*4/2 = 28 cm2."),
    (27, "Chủ đề 5. Một số hình phẳng. Chu vi và diện tích", "Bài 27. Đường tròn. Chu vi và diện tích hình tròn", "Chu vi $C = d \\times 3.14$, diện tích $S = r \\times r \\times 3.14$.", "C = 2 \\times r \\times 3.14 \\quad S = r \\times r \\times 3.14", "short_answer", "Hình tròn có bán kính $r = 3cm$. Diện tích là bao nhiêu $cm^2$?", "28.26", None, "S = 3 * 3 * 3.14 = 28.26 cm2."),
    (28, "Chủ đề 5. Một số hình phẳng. Chu vi và diện tích", "Bài 28. Thực hành và trải nghiệm đo, vẽ, lắp ghép, tạo hình", "Thực hành cắt ghép hình phẳng.", "\\text{Thực hành cắt ghép hình}", "true_false", "Gộp hai tam giác vuông bằng nhau có thể tạo thành một hình chữ nhật. Đúng hay Sai?", True, None, "Đúng! Ghép dọc đường chéo."),
    (29, "Chủ đề 5. Một số hình phẳng. Chu vi và diện tích", "Bài 29. Luyện tập chung", "Tổng hợp diện tích tam giác, hình thang, hình tròn.", "\\text{Tổng hợp diện tích}", "short_answer", "Bán kính hình tròn tăng gấp 2 lần thì diện tích tăng gấp mấy lần?", "4", None, "S phụ thuộc r*r nên tăng 2*2 = 4 lần."),

    # CĐ 6
    (30, "Chủ đề 6. Ôn tập học kì 1", "Bài 30. Ôn tập số thập phân", "Cấu tạo, so sánh và làm tròn số thập phân.", "\\text{Ôn tập số thập phân}", "mcq", "Số thập phân gồm có mấy phần chính?", ["2 phần (Phần nguyên & Phần thập phân)", "3 phần", "1 phần", "4 phần"], 0, "Phần nguyên và phần thập phân."),
    (31, "Chủ đề 6. Ôn tập học kì 1", "Bài 31. Ôn tập các phép tính với số thập phân", "Luyện tập tính nhẩm và đặt tính số thập phân.", "\\text{Cộng, trừ, nhân, chia số thập phân}", "short_answer", "Tính: $3.6 \\times 0.5 = ?$", "1.8", None, "3.6 * 0.5 = 1.8"),
    (32, "Chủ đề 6. Ôn tập học kì 1", "Bài 32. Ôn tập một số hình phẳng", "Nhận biết đặc điểm tam giác, hình thang, đường tròn.", "\\text{Đặc điểm các hình phẳng}", "true_false", "Hình thang có hai cạnh đáy song song với nhau. Đúng hay Sai?", True, None, "Đúng! Định nghĩa hình thang."),
    (33, "Chủ đề 6. Ôn tập học kì 1", "Bài 33. Ôn tập diện tích, chu vi một số hình phẳng", "Áp dụng công thức chu vi, diện tích các hình đã học.", "S_{thang} = \\frac{(a+b)h}{2}", "short_answer", "Hình vuông có chu vi $20cm$. Diện tích là bao nhiêu $cm^2$?", "25", None, "Cạnh = 20/4 = 5cm; S = 5*5 = 25 cm2."),
    (34, "Chủ đề 6. Ôn tập học kì 1", "Bài 34. Ôn tập đo lường", "Chuyển đổi đơn vị độ dài, khối lượng, diện tích.", "\\text{Bảng đơn vị đo lường}", "short_answer", "Đổi $3 ha = ? m^2$", "30000", None, "3 * 10000 = 30000."),
    (35, "Chủ đề 6. Ôn tập học kì 1", "Bài 35. Ôn tập chung", "Thi thử tổng hợp Học kì 1.", "\\text{Đề thi tổng hợp Học kì 1}", "mcq", "Cho biểu thức $A = 2.5 \\times 4 + 1.2$. Giá trị của $A$ là:", ["$11.2$", "$10.2$", "$12.0$", "$9.8$"], 0, "2.5*4 = 10; 10+1.2 = 11.2."),

    # CĐ 7
    (36, "Chủ đề 7. Tỉ số và các bài toán liên quan", "Bài 36. Tỉ số. Tỉ số phần trăm", "Khái niệm tỉ số $a:b$ và tỉ số phần trăm $\\%$.", "Tỉ\\ số\\ \\% = \\frac{a}{b} \\times 100\\%", "mcq", "Viết phân số $\\frac{3}{4}$ dưới dạng tỉ số phần trăm:", ["$75\\%$", "$50\\%$", "$80\\%$", "$25\\%$"], 0, "3/4 = 0.75 = 75%."),
    (37, "Chủ đề 7. Tỉ số và các bài toán liên quan", "Bài 37. Tỉ lệ bản đồ và ứng dụng", "Tính độ dài thực tế từ độ dài trên bản đồ tỉ lệ $1:N$.", "\\text{Độ dài thực tế = Độ dài bản đồ } \\times N", "short_answer", "Bản đồ tỉ lệ $1 : 1000$. Đo quãng đường dài $5cm$. Thực tế dài bao nhiêu mét ($m$)?", "50", None, "5 * 1000 cm = 5000 cm = 50m."),
    (38, "Chủ đề 7. Tỉ số và các bài toán liên quan", "Bài 38. Tìm hai số khi biết tổng và tỉ số của hai số đó", "Bài toán Tổng - Tỉ.", "\\text{Giá trị 1 phần = Tổng : Tổng số phần bằng nhau}", "short_answer", "Tổng hai số là $50$, tỉ số là $\\frac{2}{3}$. Số bé là bao nhiêu?", "20", None, "Tổng số phần = 2+3=5. Số bé = 50/5 * 2 = 20."),
    (39, "Chủ đề 7. Tỉ số và các bài toán liên quan", "Bài 39. Tìm hai số khi biết hiệu và tỉ số của hai số đó", "Bài toán Hiệu - Tỉ.", "\\text{Giá trị 1 phần = Hiệu : Hiệu số phần bằng nhau}", "short_answer", "Hiệu hai số là $30$, tỉ số là $\\frac{1}{4}$. Số lớn là bao nhiêu?", "40", None, "Hiệu phần = 4-1=3. Số lớn = 30/3 * 4 = 40."),
    (40, "Chủ đề 7. Tỉ số và các bài toán liên quan", "Bài 40. Tìm tỉ số phần trăm của hai số", "Cách tìm tỉ số % của $a$ và $b$.", "(a : b) \\times 100\\%", "short_answer", "Lớp có $40$ học sinh, trong đó có $10$ học sinh giỏi. Tỉ số % học sinh giỏi là bao nhiêu %?", "25", None, "(10/40)*100% = 25%."),
    (41, "Chủ đề 7. Tỉ số và các bài toán liên quan", "Bài 41. Tìm giá trị phần trăm của một số", "Tìm $x\\%$ của số $A$ ($A \\times x : 100$).", "Giá\\ trị = A \\times \\frac{x}{100}", "short_answer", "Tìm $20\\%$ của $150$:", "30", None, "150 * 20 / 100 = 30."),
    (42, "Chủ đề 7. Tỉ số và các bài toán liên quan", "Bài 42. Máy tính cầm tay", "Sử dụng các phím bấm cộng, trừ, nhân, chia, phần trăm trên máy tính.", "\\text{Thao tác bấm máy tính}", "mcq", "Phím nào trên máy tính dùng để tính tỉ số phần trăm?", ["\\%", "ON/C", "+", "="], 0, "Phím %."),
    (43, "Chủ đề 7. Tỉ số và các bài toán liên quan", "Bài 43. Thực hành và trải nghiệm sử dụng máy tính cầm tay", "Thực hành tính nhanh bằng máy tính.", "\\text{Tính toán nhanh}", "true_false", "Bấm $50 \\times 10\\%$ trên máy tính cho kết quả bằng $5$. Đúng hay Sai?", True, None, "Đúng! 50 * 10% = 5."),
    (44, "Chủ đề 7. Tỉ số và các bài toán liên quan", "Bài 44. Luyện tập chung", "Tổng hợp bài toán Tỉ số phần trăm.", "\\text{Luyện tập Tỉ số \\%}", "short_answer", "Giá chiếc áo $200\\,000$ đồng, giảm giá $15\\%$. Số tiền được giảm là bao nhiêu đồng?", "30000", None, "200000 * 15 / 100 = 30000."),

    # CĐ 8
    (45, "Chủ đề 8. Thể tích. Đơn vị đo thể tích", "Bài 45. Thể tích của một hình", "Khái niệm biểu diễn sức chứa của hình không gian.", "\\text{Thể tích là khoảng không gian vật chiếm chỗ}", "mcq", "Vật nào có thể tích lớn hơn?", ["Quả bóng đá", "Quả bóng bàn", "Quả tennis", "Quả chanh"], 0, "Quả bóng đá lớn nhất."),
    (46, "Chủ đề 8. Thể tích. Đơn vị đo thể tích", "Bài 46. Xăng-ti-mét khối. Đề-xi-mét khối", "Đơn vị $cm^3$ và $dm^3$. $1 dm^3 = 1000 cm^3$.", "1 dm^3 = 1\\,000 cm^3", "short_answer", "Đổi $4.5 dm^3 = ? cm^3$", "4500", None, "4.5 * 1000 = 4500."),
    (47, "Chủ đề 8. Thể tích. Đơn vị đo thể tích", "Bài 47. Mét khối", "Đơn vị $m^3$. $1 m^3 = 1000 dm^3 = 1\\,000\\,000 cm^3$.", "1 m^3 = 1\\,000 dm^3 = 1\\,000\\,000 cm^3", "short_answer", "Đổi $2 m^3 = ? dm^3$", "2000", None, "2 * 1000 = 2000."),
    (48, "Chủ đề 8. Thể tích. Đơn vị đo thể tích", "Bài 48. Luyện tập chung", "Chuyển đổi các đơn vị đo thể tích.", "\\text{Bảng đơn vị đo thể tích (gấp 1000 lần)}", "mcq", "Hai đơn vị đo thể tích liền nhau gấp hoặc kém nhau bao nhiêu lần?", ["1000 lần", "100 lần", "10 lần", "10000 lần"], 0, "Gấp/kém nhau 1000 lần."),

    # CĐ 9
    (49, "Chủ đề 9. Diện tích và thể tích của một số hình khối", "Bài 49. Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ", "Nhận biết hình khai triển trên mặt phẳng.", "\\text{Hình khai triển hình khối}", "true_false", "Hình lập phương có 6 mặt đều là các hình vuông bằng nhau. Đúng hay Sai?", True, None, "Đúng! 6 mặt vuông bằng nhau."),
    (50, "Chủ đề 9. Diện tích và thể tích của một số hình khối", "Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật", "$S_{xq} = P_{đáy} \\times h$, $S_{tp} = S_{xq} + 2 \\times S_{đáy}$.", "S_{xq} = (a + b) \\times 2 \\times h", "short_answer", "Hình hộp chữ nhật dài $5cm$, rộng $3cm$, cao $4cm$. Diện tích xung quanh là bao nhiêu $cm^2$?", "64", None, "Sxq = (5+3)*2 * 4 = 64 cm2."),
    (51, "Chủ đề 9. Diện tích và thể tích của một số hình khối", "Bài 51. Diện tích xung quanh và diện tích toàn phần của hình lập phương", "$S_{xq} = a \\times a \\times 4$, $S_{tp} = a \\times a \\times 6$.", "S_{xq} = a^2 \\times 4 \\quad S_{tp} = a^2 \\times 6", "short_answer", "Hình lập phương cạnh $3cm$. Diện tích toàn phần là bao nhiêu $cm^2$?", "54", None, "Stp = 3*3*6 = 54 cm2."),
    (52, "Chủ đề 9. Diện tích và thể tích của một số hình khối", "Bài 52. Thể tích của hình hộp chữ nhật", "$V = a \\times b \\times c$.", "V = a \\times b \\times c", "short_answer", "Hình hộp chữ nhật dài $6cm$, rộng $4cm$, cao $5cm$. Thể tích là bao nhiêu $cm^3$?", "120", None, "V = 6 * 4 * 5 = 120 cm3."),
    (53, "Chủ đề 9. Diện tích và thể tích của một số hình khối", "Bài 53. Thể tích của hình lập phương", "$V = a \\times a \\times a$.", "V = a^3", "short_answer", "Hình lập phương có cạnh $4cm$. Thể tích là bao nhiêu $cm^3$?", "64", None, "V = 4*4*4 = 64 cm3."),
    (54, "Chủ đề 9. Diện tích và thể tích của một số hình khối", "Bài 54. Thực hành tính toán và ước lượng thể tích một số hình khối", "Thực hành đo bể nước, hộp quà.", "\\text{Ước lượng thể tích}", "mcq", "Bể nước dạng hình hộp chữ nhật dài $2m$, rộng $1.5m$, cao $1m$. Thể tích nước đầy bể là bao nhiêu $m^3$?", ["$3 m^3$", "$4.5 m^3$", "$6 m^3$", "$2.5 m^3$"], 0, "V = 2 * 1.5 * 1 = 3 m3."),
    (55, "Chủ đề 9. Diện tích và thể tích của một số hình khối", "Bài 55. Luyện tập chung", "Tổng hợp diện tích và thể tích hình khối.", "\\text{Tổng hợp thể tích hình khối}", "short_answer", "Cạnh hình lập phương tăng gấp 2 lần thì thể tích tăng gấp mấy lần?", "8", None, "V phụ thuộc a*a*a nên tăng 2*2*2 = 8 lần."),

    # CĐ 10
    (56, "Chủ đề 10. Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều", "Bài 56. Các đơn vị đo thời gian", "Năm, tháng, ngày, giờ, phút, giây.", "1 \\text{ giờ} = 60 \\text{ phút} = 3600 \\text{ giây}", "short_answer", "Đổi $2.5 \\text{ giờ} = ? \\text{ phút}$", "150", None, "2.5 * 60 = 150 phút."),
    (57, "Chủ đề 10. Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều", "Bài 57. Cộng trừ số đo thời gian", "Tính toán số đo thời gian.", "3 \\text{ giờ } 15 \\text{ phút} + 2 \\text{ giờ } 45 \\text{ phút} = 6 \\text{ giờ}", "short_answer", "Tính: $1 \\text{ giờ } 30 \\text{ phút} + 2 \\text{ giờ } 40 \\text{ phút} = ? \\text{ phút}$", "250", None, "90 + 160 = 250 phút = 4 giờ 10 phút."),
    (58, "Chủ đề 10. Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều", "Bài 58. Nhân chia số đo thời gian với một số", "Nhân chia thời gian với một số tự nhiên.", "(1 \\text{ giờ } 15 \\text{ phút}) \\times 3 = 3 \\text{ giờ } 45 \\text{ phút}", "mcq", "Tính: $(4 \\text{ giờ } 20 \\text{ phút}) : 2 = ?$", ["$2 \\text{ giờ } 10 \\text{ phút}$", "$2 \\text{ giờ } 20 \\text{ phút}$", "$1 \\text{ giờ } 40 \\text{ phút}$", "$2 \\text{ giờ } 5 \\text{ phút}$"], 0, "4h/2 = 2h, 20p/2 = 10p."),
    (59, "Chủ đề 10. Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều", "Bài 59. Vận tốc của một chuyển động đều", "Công thức $v = \\frac{s}{t}$.", "v = \\frac{s}{t}", "short_answer", "Xe máy đi quãng đường $120km$ trong $3 \\text{ giờ}$. Vận tốc xe máy là bao nhiêu $km/h$?", "40", None, "v = 120 / 3 = 40 km/h."),
    (60, "Chủ đề 10. Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều", "Bài 60. Quãng đường, thời gian của một chuyển động đều", "$s = v \\times t$, $t = \\frac{s}{v}$.", "s = v \\times t \\quad t = \\frac{s}{v}", "short_answer", "Ô tô chạy với vận tốc $60 km/h$ trong $2.5 \\text{ giờ}$. Quãng đường ô tô đi được là bao nhiêu $km$?", "150", None, "s = 60 * 2.5 = 150 km."),
    (61, "Chủ đề 10. Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều", "Bài 61. Thực hành tính toán và ước lượng về vận tốc, quãng đường, thời gian trong chuyển động đều", "Bài toán thực tế xe đạp, người đi bộ.", "\\text{Ước lượng vận tốc thực tế}", "mcq", "Vận tốc trung bình của người đi bộ thường khoảng bao nhiêu?", ["$5 km/h$", "$50 km/h$", "$120 km/h$", "$0.5 km/h$"], 0, "Đi bộ khoảng 5 km/h."),
    (62, "Chủ đề 10. Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều", "Bài 62. Luyện tập chung", "Tổng hợp bài toán chuyển động đều.", "\\text{Luyện tập Toán chuyển động}", "short_answer", "Hai xe đi ngược chiều từ A và B cách nhau $180km$. Xe 1 chạy $40km/h$, Xe 2 chạy $50km/h$. Sau bao lâu hai xe gặp nhau (giờ)?", "2", None, "Thời gian gặp nhau = 180 / (40 + 50) = 2 giờ."),

    # CĐ 11
    (63, "Chủ đề 11. Một số yếu tố thống kê và xác suất", "Bài 63. Thu thập, phân loại, sắp xếp các số liệu", "Bảng số liệu thống kê.", "\\text{Thu thập và phân loại số liệu}", "mcq", "Mục đích của việc sắp xếp số liệu thống kê là gì?", ["Để dễ quan sát, phân tích và so sánh", "Để làm bài dài hơn", "Không có tác dụng", "Để giấu bớt số liệu"], 0, "Giúp quan sát và phân tích dễ dàng."),
    (64, "Chủ đề 11. Một số yếu tố thống kê và xác suất", "Bài 64. Biểu đồ hình quạt tròn", "Đọc và phân tích biểu đồ quạt tròn (tỉ lệ %).", "\\text{Biểu đồ hình quạt tròn biểu diễn 100\\%}", "short_answer", "Biểu đồ quạt tròn biểu diễn các môn thể thao: Bóng đá $50\\%$, Cầu lông $30\\%$, Bơi lội $20\\%$. Nếu có $100$ học sinh thì có bao nhiêu em thích Cầu lông?", "30", None, "100 * 30% = 30 em."),
    (65, "Chủ đề 11. Một số yếu tố thống kê và xác suất", "Bài 65. Tỉ số của số lần lặp lại một sự kiện so với tổng số lần thực hiện", "Xác suất thực nghiệm.", "Tỉ\\ số = \\frac{\\text{Số lần xuất hiện}}{\\text{Tổng số lần thử}}", "short_answer", "Tung đồng xu $20$ lần, thấy mặt Nửa xuất hiện $12$ lần. Tỉ số xuất hiện mặt Nửa là bao nhiêu (viết phân số tối giản ví dụ 3/5)?", "3/5", None, "12/20 = 3/5."),
    (66, "Chủ đề 11. Một số yếu tố thống kê và xác suất", "Bài 66. Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê", "Thực hành điều tra sở thích học sinh.", "\\text{Thu thập số liệu lớp học}", "true_false", "Tổng các tỉ số phần trăm trên biểu đồ quạt tròn luôn bằng $100\\%$. Đúng hay Sai?", True, None, "Đúng! Biểu đồ tròn biểu diễn 100% toàn thể."),
    (67, "Chủ đề 11. Một số yếu tố thống kê và xác suất", "Bài 67. Luyện tập chung", "Tổng hợp Thống kê và Xác suất.", "\\text{Luyện tập Thống kê}", "mcq", "Rút 1 lá thăm từ hộp có 5 thăm đỏ và 5 thăm xanh. Khả năng rút được thăm đỏ là bao nhiêu %?", ["$50\\%$", "$25\\%$", "$100\\%$", "$10\\%$"], 0, "5/10 = 50%."),

    # CĐ 12
    (68, "Chủ đề 12. Ôn tập cuối năm", "Bài 68. Ôn tập số tự nhiên, phân số, số thập phân", "Tổng hợp kiến thức về số.", "\\text{Hệ thống các tập hợp số}", "mcq", "Số nào dưới đây lớn nhất?", ["$9.99$", "$10.01$", "$9.999$", "$10.009$"], 1, "10.01 có phần nguyên 10 và phần mười 0.01 > 10.009."),
    (69, "Chủ đề 12. Ôn tập cuối năm", "Bài 69. Ôn tập các phép tính với số tự nhiên, phân số, số thập phân", "Ôn tập 4 phép tính.", "\\text{Các phép tính số học}", "short_answer", "Tính: $0.25 \\times 3.8 \\times 4 = ?$", "3.8", None, "(0.25 * 4) * 3.8 = 1 * 3.8 = 3.8"),
    (70, "Chủ đề 12. Ôn tập cuối năm", "Bài 70. Ôn tập tỉ số, tỉ số phần trăm", "Ôn tập các bài toán Tỉ số %.", "\\text{Ứng dụng Tỉ số phần trăm}", "short_answer", "Lớp $5A$ có $32$ học sinh, $75\\%$ là học sinh khá giỏi. Số học sinh khá giỏi là:", "24", None, "32 * 75 / 100 = 24."),
    (71, "Chủ đề 12. Ôn tập cuối năm", "Bài 71. Ôn tập hình học", "Hình phẳng và Hình khối.", "S = a \\times b \\quad V = a \\times b \\times c", "mcq", "Hình nào dưới đây có thể tích?", ["Hình lập phương", "Hình vuông", "Hình tam giác", "Hình tròn"], 0, "Hình lập phương là hình khối trong không gian."),
    (72, "Chủ đề 12. Ôn tập cuối năm", "Bài 72. Ôn tập đo lường", "Đo độ dài, khối lượng, diện tích, thể tích.", "\\text{Hệ thống bảng đo lường}", "short_answer", "Đổi $1.2 m^3 = ? dm^3$", "1200", None, "1.2 * 1000 = 1200."),
    (73, "Chủ đề 12. Ôn tập cuối năm", "Bài 73. Ôn tập toán chuyển động đều", "Công thức $s = v \\times t$.", "s = v \\times t", "short_answer", "Ca nô đi với vận tốc $30 km/h$ trong $1.5 \\text{ giờ}$. Quãng đường ca nô đi được là bao nhiêu $km$?", "45", None, "s = 30 * 1.5 = 45 km."),
    (74, "Chủ đề 12. Ôn tập cuối năm", "Bài 74. Ôn tập một số yếu tố thống kê và xác suất", "Đọc biểu đồ và tính xác suất.", "\\text{Ôn tập Thống kê & Xác suất}", "true_false", "Tỉ số số lần lặp lại sự kiện luôn nằm trong khoảng từ $0\\%$ đến $100\\%$. Đúng hay Sai?", True, None, "Đúng! Xác suất không vượt quá 100%."),
    (75, "Chủ đề 12. Ôn tập cuối năm", "Bài 75. Ôn tập chung", "Tổng ôn toàn bộ chương trình Toán Lớp 5.", "\\text{Chúc các em đạt kết quả xuất sắc! 🎉}", "mcq", "Học sinh hoàn thành xuất sắc chương trình Toán Lớp 5 sẽ nhận được danh hiệu gì?", ["Trạng Nguyên Toán Học 🥇", "Học sinh giỏi", "Thám Hoa 🥉", "Bảng Nhãn 🥈"], 0, "Danh hiệu Trạng Nguyên Toán Học!")
]

def build_lesson_dict(meta):
    idx, theme, title, desc, formula, qtype, qtext, qans, qcorrect, qexp = meta
    
    exercise = {
        "id": f"q_{idx}_1",
        "type": qtype,
        "question": qtext,
        "explanation": qexp
    }
    
    if qtype == "mcq":
        exercise["options"] = qans
        exercise["answerIndex"] = qcorrect
    elif qtype == "true_false":
        exercise["isTrue"] = bool(qans)
    elif qtype == "short_answer":
        exercise["answer"] = str(qans)
        
    return {
        "id": f"toan-{idx}",
        "theme": theme,
        "title": title,
        "description": desc,
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": f"Trọng tâm kiến thức {title}. Nắm vững khái niệm và quy tắc tính toán.",
            "sections": [
                {
                    "title": f"1. Lý thuyết trọng tâm {title}",
                    "text": f"{desc}\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
                    "formula": formula,
                    "highlights": ["Đọc kỹ đề bài trước khi tính toán", "Chú ý ghi rõ đơn vị đo"]
                }
            ],
            "audioText": f"Trọng tâm kiến thức {title}. {desc} Áp dụng linh hoạt các công thức toán học."
        },
        "exercises": [exercise]
    }

toan_lessons_list = [build_lesson_dict(m) for m in lessons_meta]
print(f"Generated {len(toan_lessons_list)} Math lessons successfully!")

toan_subject = {
    "id": "toan",
    "name": "TOÁN",
    "subTitle": "75 Bài học chuẩn: Số thập phân, Hình học, Đo lường & Chuyển động đều",
    "icon": "Calculator",
    "color": "from-blue-500 to-indigo-600",
    "bgColor": "bg-blue-50",
    "borderColor": "border-blue-200",
    "textColor": "text-blue-600",
    "badgeColor": "bg-blue-100 text-blue-800",
    "lessons": toan_lessons_list
}

tiengviet_subject = {
    "id": "tiengviet",
    "name": "TIẾNG VIỆT",
    "subTitle": "Luyện từ & câu, Đọc hiểu văn bản, Tập làm văn miêu tả",
    "icon": "BookOpen",
    "color": "from-pink-500 to-rose-600",
    "bgColor": "bg-pink-50",
    "borderColor": "border-pink-200",
    "textColor": "text-pink-600",
    "badgeColor": "bg-pink-100 text-pink-800",
    "lessons": [
        {
            "id": "tv-1",
            "title": "Bài 1: Từ đồng nghĩa & Từ trái nghĩa",
            "description": "Hiểu khái niệm từ đồng nghĩa hoàn toàn, không hoàn toàn và từ trái nghĩa.",
            "duration": "30 phút",
            "isLocked": False,
            "theory": {
                "summary": "Từ đồng nghĩa là những từ có nghĩa giống nhau hoặc gần giống nhau. Từ trái nghĩa là những từ có nghĩa trái ngược nhau.",
                "sections": [
                    {
                        "title": "1. Từ đồng nghĩa",
                        "text": "Đồng nghĩa hoàn toàn: có thể thay thế cho nhau trong giao tiếp (ví dụ: hổ, cọp, hùm; bố, ba).\nĐồng nghĩa không hoàn toàn: mang sắc thái biểu cảm khác nhau (ví dụ: ăn, xào, chén; chết, hy sinh, bỏ mạng).",
                        "highlights": ["Lựa chọn từ đồng nghĩa phù hợp ngữ cảnh!"]
                    }
                ]
            },
            "exercises": [
                {
                    "id": "q1",
                    "type": "mcq",
                    "question": "Cặp từ nào sau đây là cặp từ đồng nghĩa?",
                    "options": ["Dũng cảm - Nhút nhát", "Chăm chỉ - Cần cù", "Cao - Thấp", "Rộng - Hẹp"],
                    "answerIndex": 1,
                    "explanation": "Chăm chỉ và Cần cù là hai từ đồng nghĩa chỉ phẩm chất siêng năng làm việc."
                }
            ]
        }
    ]
}

tienganh_subject = {
    "id": "tienganh",
    "name": "TIẾNG ANH",
    "subTitle": "Phát triển toàn diện 4 Kỹ năng: Nghe, Nói, Đọc, Viết",
    "icon": "Languages",
    "color": "from-purple-500 to-violet-600",
    "bgColor": "bg-purple-50",
    "borderColor": "border-purple-200",
    "textColor": "text-purple-600",
    "badgeColor": "bg-purple-100 text-purple-800",
    "lessons": [
        {
            "id": "eng-1",
            "title": "Unit 1: What's your address? (4 Skills Intensive)",
            "description": "Luyện tập toàn diện 4 kỹ năng: Listening (Nghe thoại), Speaking (Nói giọng chuẩn AI), Reading (Đọc hiểu) & Writing (Viết câu).",
            "duration": "40 mins",
            "isLocked": False,
            "theory": {
                "summary": "Master English addresses using 'Where do you live?' and 'What's your address?'. Practicing Listening, Speaking, Reading & Writing.",
                "sections": [
                    {
                        "title": "1. Essential Vocabulary & Phonetics",
                        "text": "• Address /əˈdres/: Địa chỉ\n• Street /striːt/: Đường phố\n• Tower /ˈtaʊ.ər/: Tòa tháp\n• Village /ˈvɪl.ɪdʒ/: Ngôi làng\n• Hometown /ˈhoʊm.taʊn/: Quê hương",
                        "highlights": ["Preposition Rules: AT + House Number + Street; ON + Street; IN + City/Country."]
                    }
                ],
                "audioText": "Where do you live? I live in Flat 8, second floor of Ha Noi Tower. What is your address? It is 105 Hoa Binh Lane."
            },
            "exercises": [
                {
                    "id": "eng_q1",
                    "skill": "listening",
                    "skillLabel": "🎧 KỸ NĂNG NGHE (LISTENING)",
                    "type": "listening",
                    "audioPrompt": "I live at 105 Hoa Binh Lane in a quiet village.",
                    "question": "Listen to the audio clip. Where does the speaker live?",
                    "options": ["At 105 Hoa Binh Lane", "At 56 Nguyen Hue Street", "In Flat 8 of Ha Noi Tower", "In a big noisy city"],
                    "answerIndex": 0,
                    "explanation": "The audio clearly states: 'I live at 105 Hoa Binh Lane in a quiet village.'"
                },
                {
                    "id": "eng_q2",
                    "skill": "speaking",
                    "skillLabel": "🗣️ KỸ NĂNG NÓI (SPEAKING VOICE AI)",
                    "type": "speaking",
                    "targetSentence": "Where do you live?",
                    "translationPrompt": "Hãy bấm nút micro và đọc to câu tiếng Anh: \"Where do you live?\"",
                    "explanation": "Đọc đúng mẫu câu hỏi địa chỉ: \"Where do you live?\" /weər duː juː lɪv/"
                }
            ]
        }
    ]
}
