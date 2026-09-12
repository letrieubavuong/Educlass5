import json
import os

data_dir = r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\src\data\subjects"

def insert_question_into_lesson(file_path, lesson_id, questions_to_add):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    pos = content.find(f'"id": "{lesson_id}"')
    if pos == -1:
        print(f"Lesson {lesson_id} not found in {os.path.basename(file_path)}")
        return

    ex_pos = content.find('"exercises": [', pos)
    if ex_pos == -1:
        print(f"Exercises array not found for {lesson_id}")
        return

    insert_pos = ex_pos + len('"exercises": [')
    
    formatted_q = ""
    for q in questions_to_add:
        formatted_q += "\n      " + json.dumps(q, ensure_ascii=False, indent=8) + ","

    new_content = content[:insert_pos] + formatted_q + content[insert_pos:]
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Added {len(questions_to_add)} interactive questions to {lesson_id} in {os.path.basename(file_path)}")

# 1. TOÁN
q_toan_1 = [
    {
        "id": "q_toan_match_1",
        "type": "matching",
        "skillLabel": "🧩 NỐI PHÉP TÍNH",
        "question": "Nối các phép tính ở Cột A với kết quả tương ứng ở Cột B:",
        "pairs": [
            { "left": "$125 \\times 8$", "right": "$1000$" },
            { "left": "$450 : 9$", "right": "$50$" },
            { "left": "$12.5 + 7.5$", "right": "$20$" },
            { "left": "$3.6 \\times 2$", "right": "$7.2$" }
        ],
        "explanation": "$125 \\times 8 = 1000$; $450 : 9 = 50$; $12.5 + 7.5 = 20$; $3.6 \\times 2 = 7.2$."
    },
    {
        "id": "q_toan_drag_1",
        "type": "drag_drop",
        "subtype": "fill_blanks",
        "skillLabel": "🎯 KÉO THẢ ĐIỀN SỐ",
        "question": "Kéo thả các số thích hợp vào chỗ trống trong phân tích số thập phân sau:",
        "template": "Số $45.68$ có phần nguyên là [0] và chữ số ở hàng phần trăm là [1].",
        "options": ["45", "8", "6", "56"],
        "correctAnswers": ["45", "8"],
        "explanation": "Phần nguyên nằm trước dấu phẩy là 45; chữ số hàng phần trăm là chữ số thứ 2 sau dấu phẩy (8)."
    }
]

q_toan_2 = [
    {
        "id": "q_toan_drag_reorder_1",
        "type": "drag_drop",
        "subtype": "reorder",
        "skillLabel": "🧩 KÉO THẢ XẾP THỨ TỰ",
        "question": "Kéo thả các số sau để sắp xếp theo thứ tự từ bé đến lớn:",
        "initialItems": ["$3.5$", "$0.85$", "$1.2$", "$4.05$"],
        "correctOrder": ["$0.85$", "$1.2$", "$3.5$", "$4.05$"],
        "explanation": "So sánh phần nguyên trước: $0.85 < 1.2 < 3.5 < 4.05$."
    }
]

# 2. TIẾNG VIỆT
q_tv_1 = [
    {
        "id": "q_tv_match_1",
        "type": "matching",
        "skillLabel": "🧩 NỐI TỪ HÁN VIỆT",
        "question": "Nối các từ Hán Việt ở Cột A với nghĩa tiếng Việt tương ứng ở Cột B:",
        "pairs": [
            { "left": "Thủ đô", "right": "Thành phố đứng đầu cả nước" },
            { "left": "Tổ quốc", "right": "Đất nước nơi sinh ra của cha ông" },
            { "left": "Đồng bào", "right": "Những người cùng một giống nòi" },
            { "left": "Nhiệm màu", "right": "Kỳ diệu như có phép thuật" }
        ],
        "explanation": "Thủ đô = Thành phố đứng đầu; Tổ quốc = Đất nước cha ông; Đồng bào = Cùng giống nòi; Nhiệm màu = Kỳ diệu."
    },
    {
        "id": "q_tv_drag_fill_1",
        "type": "drag_drop",
        "subtype": "fill_blanks",
        "skillLabel": "🎯 KÉO THẢ ĐIỀN TỪ",
        "question": "Kéo thả các từ thích hợp vào chỗ trống trong đoạn văn sau:",
        "template": "Thành phố [0] là trung tâm kinh tế lớn nhất cả nước, nằm bên bờ sông [1].",
        "options": ["Hồ Chí Minh", "Sài Gòn", "Hà Nội", "Hồng"],
        "correctAnswers": ["Hồ Chí Minh", "Sài Gòn"],
        "explanation": "TP. Hồ Chí Minh nằm bên bờ sông Sài Gòn."
    }
]

q_tv_2 = [
    {
        "id": "q_tv_drag_reorder_1",
        "type": "drag_drop",
        "subtype": "reorder",
        "skillLabel": "🧩 KÉO THẢ SẮP XẾP CÂU CA DAO",
        "question": "Kéo thả các từ để xếp thành câu ca dao hoàn chỉnh nói về công ơn cha mẹ:",
        "initialItems": ["thái sơn", "Công cha", "như núi", "nghĩa mẹ", "như nước"],
        "correctOrder": ["Công cha", "như núi", "thái sơn", "nghĩa mẹ", "như nước"],
        "explanation": "Câu ca dao hoàn chỉnh: Công cha như núi thái sơn, nghĩa mẹ như nước..."
    }
]

# 3. TIẾNG ANH
q_eng_1 = [
    {
        "id": "q_eng_match_1",
        "type": "matching",
        "skillLabel": "🧩 MATCH VOCABULARY",
        "question": "Match English words on Column A with their Vietnamese meanings on Column B:",
        "pairs": [
            { "left": "Hometown", "right": "Quê hương" },
            { "left": "Island", "right": "Hòn đảo" },
            { "left": "Tower", "right": "Tòa tháp" },
            { "left": "Countryside", "right": "Vùng nông thôn" }
        ],
        "explanation": "Hometown = Quê hương; Island = Hòn đảo; Tower = Tòa tháp; Countryside = Vùng nông thôn."
    },
    {
        "id": "q_eng_reorder_1",
        "type": "drag_drop",
        "subtype": "reorder",
        "skillLabel": "🎯 WORD ORDER DRAG & DROP",
        "question": "Drag and drop the words to form a correct English sentence:",
        "initialItems": ["you", "Where", "did", "go", "on", "vacation?"],
        "correctOrder": ["Where", "did", "you", "go", "on", "vacation?"],
        "explanation": "Correct sentence structure: Where + did + S + V + on vacation?"
    }
]

# 4. LỊCH SỬ & ĐỊA LÝ
q_ls_1 = [
    {
        "id": "q_ls_match_1",
        "type": "matching",
        "skillLabel": "🧩 NỐI MỐC LỊCH SỬ",
        "question": "Nối mốc thời gian ở Cột A với sự kiện lịch sử trọng đại ở Cột B:",
        "pairs": [
            { "left": "2/9/1945", "right": "Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình" },
            { "left": "7/5/1954", "right": "Chiến thắng lịch sử Điện Biên Phủ lừng lẫy" },
            { "left": "30/4/1975", "right": "Giải phóng miền Nam, hoàn toàn thống nhất đất nước" },
            { "left": "1986", "right": "Đảng ta khởi xướng đường lối Đổi mới toàn diện" }
        ],
        "explanation": "2/9/1945: Tuyên ngôn Độc lập; 7/5/1954: Điện Biên Phủ; 30/4/1975: Giải phóng miền Nam; 1986: Đổi mới."
    },
    {
        "id": "q_ls_fill_1",
        "type": "drag_drop",
        "subtype": "fill_blanks",
        "skillLabel": "🎯 KÉO THẢ ĐIỀN ĐỊA LÝ",
        "question": "Kéo thả từ thích hợp vào chỗ trống trong nhận định về địa hình nước ta:",
        "template": "Phần đất liền nước ta có [0] diện tích là đồi núi và [1] diện tích là đồng bằng.",
        "options": ["3/4", "1/4", "1/2", "2/3"],
        "correctAnswers": ["3/4", "1/4"],
        "explanation": "Đồi núi chiếm 3/4 diện tích đất liền, đồng bằng chiếm 1/4."
    }
]

# 5. KHOA HỌC
q_kh_1 = [
    {
        "id": "q_kh_match_1",
        "type": "matching",
        "skillLabel": "🧩 NỐI VẬT LIỆU & TÍNH CHẤT",
        "question": "Nối vật liệu ở Cột A với tính chất nổi bật ở Cột B:",
        "pairs": [
            { "left": "Đồng", "right": "Dẫn điện và dẫn nhiệt tốt, màu đỏ đồng" },
            { "left": "Thủy tinh", "right": "Trong suốt, không gỉ nhưng dễ vỡ" },
            { "left": "Cao su", "right": "Có tính đàn hồi tốt, không dẫn điện" },
            { "left": "Nhôm", "right": "Màu trắng bạc, nhẹ, không gỉ" }
        ],
        "explanation": "Đồng dẫn điện tốt; Thủy tinh trong suốt dễ vỡ; Cao su đàn hồi; Nhôm nhẹ màu trắng bạc."
    },
    {
        "id": "q_kh_drag_1",
        "type": "drag_drop",
        "subtype": "fill_blanks",
        "skillLabel": "🎯 KÉO THẢ SỰ CHUYỂN THỂ",
        "question": "Kéo thả các từ thích hợp vào chỗ trống về vòng tuần hoàn của nước:",
        "template": "Hơi nước bay lên cao gặp lạnh ngưng tụ thành [0], các giọt nước tụ lại thành [1] rồi rơi xuống thành mưa.",
        "options": ["giọt nước nhỏ", "mây", "băng", "khí"],
        "correctAnswers": ["giọt nước nhỏ", "mây"],
        "explanation": "Hơi nước ngưng tụ thành các giọt nước nhỏ, đọng lại tạo thành mây."
    }
]

# 6. TIN HỌC
q_th_1 = [
    {
        "id": "q_th_match_1",
        "type": "matching",
        "skillLabel": "🧩 NỐI PHÍM TẮT MÁY TÍNH",
        "question": "Nối các tổ hợp phím tắt ở Cột A với chức năng tương ứng ở Cột B:",
        "pairs": [
            { "left": "Ctrl + C", "right": "Sao chép (Copy) văn bản hoặc tệp" },
            { "left": "Ctrl + V", "right": "Dán (Paste) nội dung đã sao chép" },
            { "left": "Ctrl + Z", "right": "Hoàn tác (Undo) thao tác vừa thực hiện" },
            { "left": "Ctrl + S", "right": "Lưu tệp (Save) đang làm việc" }
        ],
        "explanation": "Ctrl+C: Copy; Ctrl+V: Paste; Ctrl+Z: Undo; Ctrl+S: Save."
    },
    {
        "id": "q_th_drag_reorder_1",
        "type": "drag_drop",
        "subtype": "reorder",
        "skillLabel": "🎯 KÉO THẢ QUY TRÌNH TÌM KIẾM WEB",
        "question": "Kéo thả các bước để sắp xếp đúng quy trình tìm kiếm thông tin trên Internet:",
        "initialItems": ["Gõ từ khóa vào ô tìm kiếm", "Mở trình duyệt web", "Nhấn Enter", "Chọn trang web phù hợp"],
        "correctOrder": ["Mở trình duyệt web", "Gõ từ khóa vào ô tìm kiếm", "Nhấn Enter", "Chọn trang web phù hợp"],
        "explanation": "Quy trình chuẩn: Mở trình duyệt ➔ Gõ từ khóa ➔ Nhấn Enter ➔ Chọn trang web."
    }
]

insert_question_into_lesson(os.path.join(data_dir, "toanData.js"), "toan-1", q_toan_1)
insert_question_into_lesson(os.path.join(data_dir, "toanData.js"), "toan-2", q_toan_2)

insert_question_into_lesson(os.path.join(data_dir, "tiengvietData.js"), "tv-1", q_tv_1)
insert_question_into_lesson(os.path.join(data_dir, "tiengvietData.js"), "tv-2", q_tv_2)

insert_question_into_lesson(os.path.join(data_dir, "tienganhData.js"), "eng-1", q_eng_1)

insert_question_into_lesson(os.path.join(data_dir, "lichsuDialiData.js"), "lsdl-1", q_ls_1)

insert_question_into_lesson(os.path.join(data_dir, "khoahocData.js"), "kh-1", q_kh_1)

insert_question_into_lesson(os.path.join(data_dir, "tinhocData.js"), "th-1", q_th_1)

print("ALL SUBJECTS SUCCESSFULLY ENRICHED WITH MATCHING AND DRAG-DROP QUESTIONS!")
