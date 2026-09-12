import json

# Science lessons (30 lessons)
kh_titles = [
    ("Chủ đề 1. Chất", "Bài 1. Thành phần và vai trò của đất đối với cây trồng", "Các thành phần chính của đất (chất khoáng, mùn, nước, không khí) và vai trò đối với cây trồng."),
    ("Chủ đề 1. Chất", "Bài 2. Ô nhiễm xói mòn đất và bảo vệ môi trường", "Nguyên nhân xói mòn và các biện pháp bảo vệ, cải tạo đất trồng."),
    ("Chủ đề 1. Chất", "Bài 3. Hỗn hợp và dung dịch", "Phân biệt hỗn hợp (không tan hoàn toàn) và dung dịch (tan hoàn toàn)."),
    ("Chủ đề 1. Chất", "Bài 4. Đặc điểm của chất ở trạng thái rắn, lỏng, khí", "Tính chất của 3 trạng thái vật chất (rắn, lỏng, khí) và sự chuyển thể."),
    ("Chủ đề 1. Chất", "Bài 5. Sự biến đổi hóa học của chất", "Phân biệt biến đổi lý học và biến đổi hóa học tạo chất mới."),
    ("Chủ đề 1. Chất", "Bài 6. Ôn tập chủ đề Chất", "Tổng kết kiến thức về Đất, Dung dịch và Trạng thái của chất."),

    ("Chủ đề 2. Năng lượng", "Bài 7. Vai trò của năng lượng", "Các dạng năng lượng xung quanh và vai trò của Mặt Trời."),
    ("Chủ đề 2. Năng lượng", "Bài 8. Sử dụng năng lượng điện", "Điện năng, nguồn điện và các ứng dụng của điện năng."),
    ("Chủ đề 2. Năng lượng", "Bài 9. Mạch điện đơn giản. Vật dẫn điện và vật cách điện", "Mạch điện kín đơn giản, phân biệt vật dẫn điện và vật cách điện."),
    ("Chủ đề 2. Năng lượng", "Bài 10. Năng lượng chất đốt", "Các loại chất đốt (rắn, lỏng, khí) và sử dụng an toàn tiết kiệm."),
    ("Chủ đề 2. Năng lượng", "Bài 11. Sử dụng năng lượng mặt trời, năng lượng gió, năng lượng nước chảy", "Nguồn năng lượng sạch tái tạo bảo vệ môi trường."),
    ("Chủ đề 2. Năng lượng", "Bài 12. Ôn tập chủ đề Năng lượng", "Tổng kết kiến thức về Năng lượng điện, Chất đốt và Năng lượng sạch."),

    ("Chủ đề 3. Thực vật và động vật", "Bài 13. Sinh sản ở thực vật có hoa", "Cơ quan sinh sản ở thực vật (nhị và nhụy), thụ phấn và tạo hạt."),
    ("Chủ đề 3. Thực vật và động vật", "Bài 14. Sự phát triển của cây con", "Cây con mọc từ hạt hoặc mọc từ rễ, thân, lá của cây mẹ."),
    ("Chủ đề 3. Thực vật và động vật", "Bài 15. Sinh sản của động vật", "Động vật đẻ trứng (chim, cá, bò sát) và đẻ con (thú, người)."),
    ("Chủ đề 3. Thực vật và động vật", "Bài 16. Vòng đời và sự phát triển của động vật", "Vòng đời biến thái của bọ gậy, muỗi, bướm và động vật."),
    ("Chủ đề 3. Thực vật và động vật", "Bài 17. Ôn tập chủ đề Thực vật và động vật", "Tổng kết sinh sản và phát triển của thực vật, động vật."),

    ("Chủ đề 4. Vi khuẩn", "Bài 18. Vi khuẩn xung quanh chúng ta", "Khái niệm vi khuẩn siêu nhỏ quan sát bằng kính hiển vi."),
    ("Chủ đề 4. Vi khuẩn", "Bài 19. Vi khuẩn có ích trong chế biến thực phẩm", "Lên men làm sữa chua, dưa muối, làm giấm."),
    ("Chủ đề 4. Vi khuẩn", "Bài 20. Vi khuẩn gây bệnh ở người và cách phòng tránh", "Các bệnh do vi khuẩn gây ra và vệ sinh phòng tránh."),
    ("Chủ đề 4. Vi khuẩn", "Bài 21. Ôn tập chủ đề Vi khuẩn", "Tổng kết vi khuẩn có lợi và vi khuẩn gây hại."),

    ("Chủ đề 5. Con người và sức khỏe", "Bài 22. Sự hình thành cơ thể", "Thụ tinh (tinh trùng kết hợp trứng thành hợp tử) và thai nhi."),
    ("Chủ đề 5. Con người và sức khỏe", "Bài 23. Các giai đoạn phát triển chính của con người", "Các giai đoạn cuộc đời: Tuổi thơ, Tuổi dậy thì, Tuổi trưởng thành, Tuổi già."),
    ("Chủ đề 5. Con người và sức khỏe", "Bài 24. Nam và nữ", "Giới tính sinh học và sự bình đẳng giới trong xã hội."),
    ("Chủ đề 5. Con người và sức khỏe", "Bài 25. Chăm sóc sức khỏe tuổi dậy thì", "Vệ sinh thân thể, dinh dưỡng và luyện tập thể thao tuổi dậy thì."),
    ("Chủ đề 5. Con người và sức khỏe", "Bài 26. Phòng tránh bị xâm hại", "Quy tắc an toàn bảo vệ vùng riêng tư và Tổng đài 111."),
    ("Chủ đề 5. Con người và sức khỏe", "Bài 27. Ôn tập chủ đề Con người và sức khỏe", "Tổng kết sức khỏe giới tính và an toàn trẻ em."),

    ("Chủ đề 6. Sinh vật và môi trường", "Bài 28. Chức năng của môi trường đối với sinh vật", "Môi trường cung cấp tài nguyên và chứa đựng chất thải."),
    ("Chủ đề 6. Sinh vật và môi trường", "Bài 29. Tác động của con người và một số biện pháp bảo vệ môi trường", "Chống chặt phá rừng, phân loại rác và ứng phó biến đổi khí hậu."),
    ("Chủ đề 6. Sinh vật và môi trường", "Bài 30. Ôn tập chủ đề Sinh vật và môi trường", "Tổng kết chương trình Khoa học Lớp 5.")
]

kh_lessons = []
for idx, (theme, title, desc) in enumerate(kh_titles, 1):
    ex = {
        "id": f"kh_q_{idx}",
        "type": "mcq",
        "question": f"Nội dung trọng tâm của \"{title}\" là gì?",
        "options": [desc, "Tính toán diện tích", "Tập đọc bài thơ", "Nhập khẩu thiết bị"],
        "answerIndex": 0,
        "explanation": "Kiến thức trọng tâm Khoa học 5."
    }
    
    lesson_obj = {
        "id": f"kh-{idx}",
        "theme": theme,
        "title": title,
        "description": desc,
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": f"Trọng tâm kiến thức {title}.",
            "sections": [
                {
                    "title": f"1. Trọng tâm bài học: {title}",
                    "text": f"{desc}\nÁp dụng kiến thức Khoa học vào đời sống thực tiễn.",
                    "highlights": ["Bảo vệ sức khỏe và môi trường sống"]
                }
            ],
            "audioText": f"Trọng tâm kiến thức {title}. {desc}"
        },
        "exercises": [ex]
    }
    kh_lessons.append(lesson_obj)

khoahoc_subject = {
    "id": "khoahoc",
    "name": "KHOA HỌC",
    "subTitle": "30 Bài học chuẩn: Chất, Năng lượng, Thực vật & Động vật, Vi khuẩn, Sức khỏe & Môi trường",
    "icon": "FlaskConical",
    "color": "from-emerald-500 to-teal-600",
    "bgColor": "bg-emerald-50",
    "borderColor": "border-emerald-200",
    "textColor": "text-emerald-600",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "lessons": kh_lessons
}

with open(r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\scratch\khoahoc_clean.json", "w", encoding="utf-8") as f:
    json.dump(khoahoc_subject, f, ensure_ascii=False, indent=2)

print(f"Generated clean {len(kh_lessons)} Science lessons!")
