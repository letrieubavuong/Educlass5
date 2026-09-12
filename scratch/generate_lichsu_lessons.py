import json

ls_raw = [
    # Chủ đề 1: Đất nước và con người Việt Nam
    ("Chủ đề 1: Đất nước và con người Việt Nam", "Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca", "Vị trí địa lý Việt Nam trên bản đồ thế giới, 63 tỉnh/thành phố, ý nghĩa Quốc kì cờ đỏ sao vàng, Quốc huy và Quốc ca Tiến quân ca."),
    ("Chủ đề 1: Đất nước và con người Việt Nam", "Bài 2: Thiên nhiên Việt Nam", "Địa hình đồi núi, đồng bằng sông Hồng, đồng bằng sông Cửu Long, khí hậu nhiệt đới gió mùa và hệ sông ngòi."),
    ("Chủ đề 1: Đất nước và con người Việt Nam", "Bài 3: Biển, đảo Việt Nam", "Vùng biển Đông, nguồn tài nguyên hải sản, dầu khí và khẳng định chủ quyền Hoàng Sa, Trường Sa."),
    ("Chủ đề 1: Đất nước và con người Việt Nam", "Bài 4: Dân cư và dân tộc ở Việt Nam", "54 dân tộc anh em trên đất nước Việt Nam, phân bố dân cư và bản sắc văn hóa các dân tộc."),

    # Chủ đề 2: Những quốc gia đầu tiên trên lãnh thổ Việt Nam
    ("Chủ đề 2: Những quốc gia đầu tiên trên lãnh thổ Việt Nam", "Bài 5: Nhà nước Văn Lang, Nhà nước Âu Lạc", "Hùng Vương dựng nước Văn Lang, An Dương Vương xây thành Cổ Loa, chiếc nỏ thần và cuộc kháng chiến chống Triệu Đà."),
    ("Chủ đề 2: Những quốc gia đầu tiên trên lãnh thổ Việt Nam", "Bài 6: Vương quốc Phù Nam", "Văn hóa Óc Eo, thương cảng cổ và sự phát triển của Vương quốc Phù Nam ở vùng Nam Bộ."),
    ("Chủ đề 2: Những quốc gia đầu tiên trên lãnh thổ Việt Nam", "Bài 7: Vương quốc Chăm-pa", "Di tích tháp Chăm, Thánh địa Mỹ Sơn và đời sống văn hóa kinh tế của người Chăm cổ."),

    # Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam
    ("Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam", "Bài 8: Đấu tranh giành độc lập thời kì Bắc thuộc", "Khởi nghĩa Hai Bà Trưng, Bà Triệu, Lý Bôn, Mai Thúc Loan và chiến thắng Bạch Đằng năm 938 của Ngô Quyền."),
    ("Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam", "Bài 9: Triều Lý và việc định đô ở Thăng Long", "Vua Lý Thái Tổ dời đô từ Hoa Lư về Thăng Long năm 1010, xây dựng Quốc Tử Giám - trường đại học đầu tiên."),
    ("Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam", "Bài 10: Triều Trần xây dựng đất nước và kháng chiến chống quân Mông - Nguyên xâm lược", "Hội nghị Diên Hồng, Hào khí Đông A và 3 lần chiến thắng vang dội quân xâm lược Mông - Nguyên."),
    ("Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam", "Bài 11: Ôn tập lịch sử giai đoạn đầu", "Ôn tập các thời kỳ lịch sử từ Văn Lang, Âu Lạc đến thời Trần."),
    ("Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam", "Bài 12: Khởi nghĩa Lam Sơn và Triều Hậu Lê", "Bình Định Vương Lê Lợi, Nguyễn Trãi và chiến thắng Lam Sơn đánh đuổi quân Minh, lập ra nhà Hậu Lê."),
    ("Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam", "Bài 13: Triều Nguyễn", "Nhà Nguyễn thành lập năm 1802, xây dựng Kinh thành Huế, kho tàng di sản văn hóa và bản đồ Đại Nam thực录."),
    ("Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam", "Bài 14: Cách mạng tháng Tám năm 1945", "Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình ngày 2/9/1945, khai sinh nước Việt Nam Dân chủ Cộng hòa."),
    ("Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam", "Bài 15: Chiến dịch Điện Biên Phủ năm 1954", "Chiến thắng Điện Biên Phủ lừng lẫy năm châu, chấn động địa cầu ngày 7/5/1954."),
    ("Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam", "Bài 16: Chiến dịch Hồ Chí Minh năm 1975", "Đại thắng mùa Xuân 1975, giải phóng hoàn toàn miền Nam, thống nhất đất nước ngày 30/4/1975."),
    ("Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam", "Bài 17: Đất nước đổi mới", "Công cuộc Đổi mới từ năm 1986, thành tựu kinh tế, xã hội và công nghiệp hóa - hiện đại hóa đất nước."),

    # Chủ đề 4: Các nước láng giềng
    ("Chủ đề 4: Các nước láng giềng", "Bài 18: Nước Cộng hòa Nhân dân Trung Hoa", "Vị trí địa lý, thủ đô Bắc Kinh, Vạn Lý Trường Thành và các thành tựu phát triển của Trung Quốc."),
    ("Chủ đề 4: Các nước láng giềng", "Bài 19: Nước Cộng hòa Dân chủ Nhân dân Lào", "Thủ đô Viêng Chăn, chùa Thạt Luổng, sông Mê Công và tình hữu nghị Việt - Lào."),
    ("Chủ đề 4: Các nước láng giềng", "Bài 20: Vương quốc Cam-pu-chia", "Thủ đô Nông Pênh, quần thể đền Angkor Wat kỳ vĩ và tình đoàn kết láng giềng."),
    ("Chủ đề 4: Các nước láng giềng", "Bài 21: Hiệp hội các quốc gia Đông Nam Á (ASEAN)", "Sự thành lập ASEAN, các nước thành viên và mục tiêu hợp tác phát triển kinh tế, văn hóa."),

    # Chủ đề 5: Tìm hiểu thế giới
    ("Chủ đề 5: Tìm hiểu thế giới", "Bài 22: Các châu lục và đại dương trên thế giới", "6 châu lục (Châu Á, Châu Âu, Châu Phi, Châu Mỹ, Châu Đại Dương, Châu Nam Cực) và 5 đại dương."),
    ("Chủ đề 5: Tìm hiểu thế giới", "Bài 23: Dân số và các chủng tộc chính trên thế giới", "Phân bố dân số thế giới, các chủng tộc Môn-gô-lô-it, Ơ-rô-pê-ô-it, Nê-grô-it."),
    ("Chủ đề 5: Tìm hiểu thế giới", "Bài 24: Văn minh Ai Cập", "Kim tự tháp, tượng Nhân sư, sông Nhoài (Nile) và các phát minh của người Ai Cập cổ đại."),
    ("Chủ đề 5: Tìm hiểu thế giới", "Bài 25: Văn minh Hy Lạp", "Thần thoại Hy Lạp, đền Parthenon, Thế vận hội Olympic cổ đại và các nhà khoa học lỗi lạc."),

    # Chủ đề 6: Chung tay xây dựng thế giới
    ("Chủ đề 6: Chung tay xây dựng thế giới", "Bài 26: Xây dựng thế giới xanh - sạch - đẹp", "Ứng phó biến đổi khí hậu toàn cầu, bảo vệ đa dạng sinh học và giảm rác thải nhựa."),
    ("Chủ đề 6: Chung tay xây dựng thế giới", "Bài 27: Xây dựng thế giới hòa bình", "Vai trò của Liên Hợp Quốc (UN), phản đối chiến tranh và bảo vệ quyền trẻ em."),
    ("Chủ đề 6: Chung tay xây dựng thế giới", "Bài 28: Ôn tập", "Tổng kết kiến thức môn Lịch sử & Địa lý Lớp 5.")
]

ls_lessons = []
for idx, (theme, title, desc) in enumerate(ls_raw, 1):
    ex = {
        "id": f"ls_q_{idx}",
        "type": "mcq",
        "question": f"Nội dung trọng tâm của \"{title}\" là gì?",
        "options": [desc, "Tính toán thể tích hình lập phương", "Tập đọc bài thơ Tiếng Việt", "Lập trình khối lệnh Scratch"],
        "answerIndex": 0,
        "explanation": f"Nội dung bài học mang tới tri thức Lịch sử & Địa lý 5."
    }
    
    lesson_obj = {
        "id": f"ls-{idx}",
        "theme": theme,
        "title": title,
        "description": desc,
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": f"Trọng tâm kiến thức {title}. Hiểu biết lịch sử dựng nước, giữ nước và địa lý Việt Nam, Thế giới.",
            "sections": [
                {
                    "title": f"1. Trọng tâm bài học: {title}",
                    "text": f"{desc}\nBồi dưỡng tình yêu quê hương đất nước, tự hào dân tộc và ý thức công dân cầu tiến.",
                    "highlights": ["Tự hào truyền thống lịch sử dân tộc", "Ý thức bảo vệ chủ quyền biển đảo & thiên nhiên"]
                }
            ],
            "audioText": f"Trọng tâm kiến thức {title}. {desc}"
        },
        "exercises": [ex]
    }
    ls_lessons.append(lesson_obj)

lichsu_subject = {
    "id": "lichsudialy",
    "name": "LỊCH SỬ & ĐỊA LÝ",
    "subTitle": f"Đầy đủ {len(ls_lessons)} bài học chuẩn: Đất nước Việt Nam, Các triều đại Lịch sử & Tìm hiểu Thế giới",
    "icon": "Landmark",
    "color": "from-amber-500 to-orange-600",
    "bgColor": "bg-amber-50",
    "borderColor": "border-amber-200",
    "textColor": "text-amber-600",
    "badgeColor": "bg-amber-100 text-amber-800",
    "lessons": ls_lessons
}

with open(r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\scratch\ls_lessons.json", "w", encoding="utf-8") as f:
    json.dump(lichsu_subject, f, ensure_ascii=False, indent=2)

print(f"Generated {len(ls_lessons)} History & Geography lessons successfully!")
