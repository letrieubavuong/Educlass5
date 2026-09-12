import json

# Define English Units (25 units)
eng_units_raw = [
    ("Starter", "Starter: Welcome to English 5!", "Welcome back to Grade 5 English! Review greetings, numbers, family and classroom rules."),
    ("Unit 1", "Unit 1. All about me!", "Talk about personal information, hobbies, address and favourite activities."),
    ("Unit 2", "Unit 2. Our homes", "Describe your home, rooms, furniture and house location."),
    ("Unit 3", "Unit 3. My foreign friends", "Introduce international friends, countries, nationalities and languages."),
    ("Unit 4", "Unit 4. Our free-time activities", "Talk about daily routines, leisure activities and weekend plans."),
    ("Unit 5", "Unit 5. My future job", "Express dream jobs, future career choices and reasons why."),
    ("Review 1", "Review 1 & Extension activities", "Review vocabulary and grammar from Unit 1 to Unit 5 with fun extension games."),
    ("Unit 6", "Unit 6. Our school rooms", "Describe school facilities, computer room, library, music room and science lab."),
    ("Unit 7", "Unit 7. Our favourite school activities", "Talk about favourite subjects, sports day and school club activities."),
    ("Unit 8", "Unit 8. In our classroom", "Classroom rules, stationery items and asking for permission."),
    ("Unit 9", "Unit 9. Our outdoor activities", "Outdoor games, picnics, sports and environmental activities."),
    ("Unit 10", "Unit 10. Our school trip", "Talk about past school trips, zoo visits, museums and historical sites."),
    ("Review 2", "Review 2 & Extension activities", "Review vocabulary and grammar from Unit 6 to Unit 10."),
    ("Unit 11", "Unit 11. Family time", "Family members, household chores and spending quality time together."),
    ("Unit 12", "Unit 12. Our Tet holiday", "Tet holiday traditions, decorations, lucky money and traditional food."),
    ("Unit 13", "Unit 13. Our special days", "Teachers' Day, Children's Day, Mid-Autumn Festival and birthdays."),
    ("Unit 14", "Unit 14. Staying healthy", "Healthy habits, exercise, nutrition and personal hygiene."),
    ("Unit 15", "Unit 15. Our health", "Health problems (fever, headache, toothache) and giving advice with 'should/shouldn't'."),
    ("Review 3", "Review 3 & Extension activities", "Review 3 & Extension activities for Units 11 - 15."),
    ("Unit 16", "Unit 16. Seasons and the weather", "Four seasons (Spring, Summer, Autumn, Winter) and weather forecasts."),
    ("Unit 17", "Unit 17. Stories for children", "Fairy tales, fables and story characters (Folk tales, Aladdin, Snow White)."),
    ("Unit 18", "Unit 18. Means of transport", "Transportation, traffic rules and travel destinations."),
    ("Unit 19", "Unit 19. Places of interest", "Famous landmarks, national parks, beaches and tourist attractions."),
    ("Unit 20", "Unit 20. Our summer holiday", "Summer vacation plans, camping, beach trips and travel activities."),
    ("Review 4", "Review 4 & Extension activities", "Final review for Units 16 - 20 & end-of-year extension practice.")
]

eng_lessons = []
for idx, (code, title, desc) in enumerate(eng_units_raw, 1):
    sample_sentence = f"Welcome to {title}. Let's practice English together!"
    if "All about me" in title:
        target_speak = "What is your name and where do you live?"
        audio_listen = "Hi, my name is Nam. I am in Grade 5 and I live in Ha Noi."
    elif "home" in title.lower():
        target_speak = "I live in a beautiful house with my family."
        audio_listen = "Our house has a living room, three bedrooms and a green garden."
    elif "job" in title.lower():
        target_speak = "I want to be a pilot because I like flying planes."
        audio_listen = "She wants to be a doctor to help sick people in the hospital."
    elif "weather" in title.lower():
        target_speak = "What is the weather like in summer?"
        audio_listen = "In summer, it is usually sunny and warm."
    else:
        target_speak = f"Today we learn {title}. I love English!"
        audio_listen = f"This unit is {title}. Let's speak and listen carefully."

    ex_list = [
        {
            "id": f"eng_{idx}_1",
            "skill": "listening",
            "skillLabel": "🎧 KỸ NĂNG NGHE (LISTENING)",
            "type": "listening",
            "audioPrompt": audio_listen,
            "question": f"Listen to the audio clip for {code}. What is the main idea?",
            "options": ["Learning about key topics in English 5", "Math numbers", "Vietnamese grammar", "History facts"],
            "answerIndex": 0,
            "explanation": f"The audio presents the main theme of {title}."
        },
        {
            "id": f"eng_{idx}_2",
            "skill": "speaking",
            "skillLabel": "🗣️ KỸ NĂNG NÓI (SPEAKING VOICE AI)",
            "type": "speaking",
            "targetSentence": target_speak,
            "translationPrompt": f"Hãy bấm nút micro và đọc to câu tiếng Anh: \"{target_speak}\"",
            "explanation": f"Luyện phát âm chuẩn mẫu câu của {code}."
        },
        {
            "id": f"eng_{idx}_3",
            "skill": "reading",
            "skillLabel": "📖 KỸ NĂNG ĐỌC (READING)",
            "type": "mcq",
            "question": f"Read the passage: \"{desc}\". Which grade are the students in?",
            "options": ["Grade 5", "Grade 3", "Grade 1", "Grade 9"],
            "answerIndex": 0,
            "explanation": "The passage describes Grade 5 primary English curriculum."
        },
        {
            "id": f"eng_{idx}_4",
            "skill": "writing",
            "skillLabel": "✍️ KỸ NĂNG VIẾT (WRITING)",
            "type": "fill_blank",
            "question": f"Complete the sentence: I love learning ____ because it is fun and useful.",
            "answer": "English",
            "explanation": "Fill in the blank with the target subject 'English'."
        }
    ]

    lesson_obj = {
        "id": f"eng-{idx}",
        "theme": code if "Unit" in code or "Starter" in code else "Review & Extension",
        "title": title,
        "description": desc,
        "duration": "40 mins",
        "isLocked": False,
        "theory": {
            "summary": f"Vocabulary, Grammar & 4-Skill Practice for {title}.",
            "sections": [
                {
                    "title": f"1. Vocabulary & Key Structures ({code})",
                    "text": f"• Main Topic: {desc}\n• Key Pattern: Practice speaking fluently with AI voice feedback and listening exercises.",
                    "highlights": ["Practice speaking with clear pronunciation", "Listen carefully to audio cues"]
                }
            ],
            "audioText": audio_listen
        },
        "exercises": ex_list
    }
    eng_lessons.append(lesson_obj)

tienganh_subject = {
    "id": "tienganh",
    "name": "TIẾNG ANH",
    "subTitle": "Phát triển toàn diện 4 Kỹ năng (Nghe, Nói, Đọc, Viết) với 25 Units chuẩn",
    "icon": "Languages",
    "color": "from-purple-500 to-violet-600",
    "bgColor": "bg-purple-50",
    "borderColor": "border-purple-200",
    "textColor": "text-purple-600",
    "badgeColor": "bg-purple-100 text-purple-800",
    "lessons": eng_lessons
}

# Define Informatics (TIN HỌC 5) lessons (15 lessons across 6 themes)
th_lessons_raw = [
    ("Chủ đề 1. Máy tính và em", "Bài 1. Em có thể làm gì với máy tính", "Khả năng của máy tính trong học tập, giải trí, liên lạc và tìm kiếm thông tin."),
    ("Chủ đề 2. Mạng máy tính và internet", "Bài 2. Tìm kiếm thông tin trên website", "Sử dụng công cụ tìm kiếm Google, tìm kiếm thông tin bằng từ khóa."),
    ("Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin", "Bài 3. Tìm kiếm thông tin trong giải quyết vấn đề", "Đánh giá sự tin cậy của thông tin trên Internet."),
    ("Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin", "Bài 4. Cây thư mục", "Tạo, quản lý, di chuyển tệp và thư mục dạng cây."),
    ("Chủ đề 4. Đạo đức, pháp luật và văn hóa trong môi trường số", "Bài 5. Bản quyền nội dung thông tin", "Tôn trọng bản quyền tác giả, không sao chép tác phẩm số trái phép."),
    ("Chủ đề 5. Ứng dụng tin học", "Bài 6. Định dạng kí tự và bố trí hình ảnh trong văn bản", "Soạn thảo văn bản Word, chèn hình ảnh, căn lề và định dạng phông chữ."),
    ("Chủ đề 5. Ứng dụng tin học", "Bài 7. Làm sản phẩm thủ công theo video hướng dẫn", "Tìm kiếm video hướng dẫn và thực hành thao tác theo từng bước."),
    ("Chủ đề 5. Ứng dụng tin học", "Bài 8. Làm quen với phần mềm đồ họa", "Các công cụ vẽ cơ bản trong phần mềm đồ họa (Paint, Tux Paint)."),
    ("Chủ đề 5. Ứng dụng tin học", "Bài 9. Sử dụng phần mềm đồ họa tạo sản phẩm số", "Vẽ thiệp chúc mừng, tạo sản phẩm đồ họa số sáng tạo."),
    ("Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính", "Bài 10. Cấu trúc tuần tự", "Khái niệm thuật toán tuần tự trong lập trình Scratch."),
    ("Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính", "Bài 11. Cấu trúc lặp", "Khối lệnh lặp trong Scratch (Repeat, Forever)."),
    ("Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính", "Bài 13. Cấu trúc rẽ nhánh", "Khối lệnh điều kiện (If...Then...Else) trong Scratch."),
    ("Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính", "Bài 14. Sử dụng biến trong chương trình", "Tạo và sử dụng biến số (Variable) trong Scratch."),
    ("Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính", "Bài 15. Sử dụng biểu thức trong chương trình", "Biểu thức toán học và logic trong lập trình Scratch."),
    ("Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính", "Bài 16. Từ kịch bản đến chương trình", "Chuyển kịch bản ý tưởng thành dự án game/hoạt hình Scratch hoàn chỉnh.")
]

tinhoc_lessons = []
for idx, (theme, title, desc) in enumerate(th_lessons_raw, 1):
    ex = {
        "id": f"th_q_{idx}",
        "type": "mcq",
        "question": f"Nội dung trọng tâm của \"{title}\" là gì?",
        "options": [desc, "Tính toán diện tích", "Luyện viết đoạn văn", "Tập đọc bài thơ"],
        "answerIndex": 0,
        "explanation": f"Nội dung bài học hướng tới rèn luyện năng lực Tin học 5."
    }
    
    lesson_obj = {
        "id": f"th-{idx}",
        "theme": theme,
        "title": title,
        "description": desc,
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": f"Trọng tâm kiến thức {title}. Nắm vững các khái niệm Công nghệ thông tin và Lập trình Lớp 5.",
            "sections": [
                {
                    "title": f"1. Trọng tâm bài học: {title}",
                    "text": f"{desc}\nThực hành thao tác trực tiếp trên máy tính hoặc phần mềm Scratch.",
                    "highlights": ["Thao tác an toàn trên môi trường số", "Tư duy lập trình sáng tạo"]
                }
            ],
            "audioText": f"Trọng tâm kiến thức {title}. {desc}"
        },
        "exercises": [ex]
    }
    tinhoc_lessons.append(lesson_obj)

tinhoc_subject = {
    "id": "tinhoc",
    "name": "TIN HỌC",
    "subTitle": "15 Bài học chuẩn: Mạng Internet, Văn bản Word, Đồ họa & Lập trình Scratch",
    "icon": "Monitor",
    "color": "from-cyan-500 to-blue-600",
    "bgColor": "bg-cyan-50",
    "borderColor": "border-cyan-200",
    "textColor": "text-cyan-600",
    "badgeColor": "bg-cyan-100 text-cyan-800",
    "lessons": tinhoc_lessons
}

with open(r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\scratch\eng_th.json", "w", encoding="utf-8") as f:
    json.dump({"tienganh": tienganh_subject, "tinhoc": tinhoc_subject}, f, ensure_ascii=False, indent=2)

print(f"Generated {len(eng_lessons)} English units and {len(tinhoc_lessons)} Informatics lessons successfully!")
