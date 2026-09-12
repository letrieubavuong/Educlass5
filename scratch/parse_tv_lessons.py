import json
import re

raw_tv_data = """
Tuần 1: Thế giới tuổi thơ
Bài 1: Thanh âm của gió
Bài 1: Luyện tập về danh từ, động từ, tính từ
Bài 1: Tìm hiểu cách viết bài văn kể chuyện sáng tạo
Bài 2: Cánh đồng hoa
Bài 2: Tìm hiểu cách viết bài văn kể chuyện sáng tạo (tiếp theo)
Bài 2: Đọc mở rộng
Tuần 2: Thế giới tuổi thơ
Bài 3: Tuổi ngựa
Bài 3: Đại từ
Bài 3: Lập dàn ý cho bài văn kể chuyện sáng tạo
Bài 4: Bến sông tuổi thơ
Bài 4: Viết bài văn kể chuyện sáng tạo
Bài 4: Những câu chuyện thú vị
Tuần 3: Thế giới tuổi thơ
Bài 5: Tiếng hạt nảy mầm
Bài 5: Luyện tập về đại từ
Bài 5: Đánh giá, chỉnh sửa bài văn kể chuyện sáng tạo
Bài 6: Ngôi sao sân cỏ
Bài 6: Tìm hiểu cách viết báo cáo công việc
Bài 6: Đọc mở rộng
Tuần 4: Thế giới tuổi thơ
Bài 7: Bộ sưu tập độc đáo
Bài 7: Luyện tập về đại từ (Tiếp theo)
Bài 7: Viết báo cáo công việc
Bài 8: Hành tinh kì lạ
Bài 8: Đánh giá, chỉnh sửa báo cáo công việc
Bài 8: Những điểm vui chơi lí thú
Tuần 5: Thiên nhiên kì thú
Bài 9: Trước cổng trời
Bài 9: Từ đồng nghĩa
Bài 9: Tìm hiểu cách viết bài văn tả phong cảnh
Bài 10: Kì diệu rừng xanh
Bài 10: Tìm hiểu cách viết bài văn tả phong cảnh (Tiếp theo)
Bài 10: Đọc mở rộng
Tuần 6: Thiên nhiên kì thú
Bài 11: Hang Sơn Đoòng - Những điều kì thú
Bài 11: Luyện tập về từ đồng nghĩa
Bài 11: Viết mở bài và kết bài cho bài văn tả phong cảnh
Bài 12: Những hòn đảo trên Vịnh Hạ Long
Bài 12: Quan sát phong cảnh
Bài 12: Bảo tồn động vật hoang dã
Tuần 7: Thiên nhiên kì thú
Bài 13: Mầm non
Bài 13: Từ đa nghĩa
Bài 13: Lập dàn ý cho bài văn tả phong cảnh
Bài 14: Những ngọn núi nóng rẫy
Bài 14: Viết đoạn văn tả phong cảnh
Bài 14: Đọc mở rộng
Tuần 8: Thiên nhiên kì thú
Bài 15: Bài ca về mặt trời
Bài 15: Luyện tập về từ đa nghĩa
Bài 15: Viết bài văn tả phong cảnh
Bài 16: Xin chào, Xa-ha-ra
Bài 16: Đánh giá, chỉnh sửa bài văn tả phong cảnh
Bài 16: Cảnh đẹp thiên nhiên
Tuần 9: Ôn tập và Đánh giá giữa học kì 1
Phần 1 - Ôn tập: Tiết 1 - 2
Phần 1 - Ôn tập: Tiết 3 - 4
Phần 1 - Ôn tập: Tiết 5
Phần 2 - Đánh giá giữa học kì I: Tiết 6 - 7: Vườn mặt trời, quả mặt trăng
Phần 2 - Đánh giá giữa học kì I: Tiết 6 - 7: Cánh đồng vàng
Phần 2 - Đánh giá giữa học kì I: Tiết 6 - 7: Viết
Tuần 10: Trên con đường học tập
Bài 17: Thư gửi các học sinh
Bài 17: Sử dụng từ điển
Bài 17: Tìm hiểu cách viết đoạn văn giới thiệu nhân vật trong một cuốn sách
Bài 18: Tấm gương tự học
Bài 18: Tìm ý cho đoạn văn giới thiệu nhân vật trong một cuốn sách
Bài 18: Đọc mở rộng
Tuần 11: Trên con đường học tập
Bài 19: Trải nghiệm để sáng tạo
Bài 19: Luyện tập sử dụng từ điển
Bài 19: Viết đoạn văn giới thiệu nhân vật trong một cuốn sách
Bài 20: Khổ luyện thành tài
Bài 20: Đánh giá, chỉnh sửa đoạn văn giới thiệu nhân vật trong một cuốn sách
Bài 20: Cuốn sách tôi yêu
Tuần 12: Trên con đường học tập
Bài 21: Thế giới trong trang sách
Bài 21: Dấu gạch ngang
Bài 21: Tìm hiểu cách viết đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện
Bài 22: Từ những câu chuyện ấu thơ
Bài 22: Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện
Bài 22: Đọc mở rộng
Tuần 13: Trên con đường học tập
Bài 23: Giới thiệu sách Dế mèn phiêu lưu kí
Bài 23: Luyện tập về dấu gạch ngang
Bài 23: Viết đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện
Bài 24: Tinh thần học tập của nhà Phi-lít
Bài 24: Đánh giá, chỉnh sửa đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện
Bài 24: Lợi ích của tự học
Tuần 14: Nghệ thuật muôn màu
Bài 25: Tiếng đàn Ba-la-lai-ca trên sông Đà
Bài 25: Biện pháp điệp từ, điệp ngữ
Bài 25: Tìm hiểu cách viết đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ
Bài 26: Trí tưởng tượng phong phú
Bài 26: Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ
Bài 26: Đọc mở rộng
Tuần 15: Nghệ thuật muôn màu
Bài 27: Tranh làng Hồ
Bài 27: Luyện tập về điệp từ, điệp ngữ
Bài 27: Viết đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ
Bài 28: Tập hát quan họ
Bài 28: Đánh giá, chỉnh sửa đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ
Bài 28: Chương trình nghệ thuật em yêu thích
Tuần 16: Nghệ thuật muôn màu
Bài 29: Phim hoạt hình Chú ốc sên bay
Bài 29: Kết từ
Bài 29: Tìm hiểu cách viết đoạn văn giới thiệu nhân vật trong một bộ phim hoạt hình
Bài 30: Nghệ thuật múa ba lê
Bài 30: Tìm ý cho đoạn văn giới thiệu nhân vật trong một bộ phim hoạt hình
Bài 30: Đọc mở rộng
Tuần 17: Nghệ thuật muôn màu
Bài 31: Một ngôi chùa độc đáo
Bài 31: Luyện tập về kết từ
Bài 31: Viết đoạn văn giới thiệu nhân vật trong một bộ phim hoạt hình
Bài 32: Sự tích chú Tễu
Bài 32: Đánh giá, chỉnh sửa đoạn văn giới thiệu nhân vật trong một bộ phim hoạt hình
Bài 32: Bộ phim yêu thích
Tuần 18: Ôn tập và đánh giá cuối học kì 1
Phần 1 - Ôn tập: Tiết 1 - 2
Phần 1 - Ôn tập: Tiết 3 - 4
Phần 1 - Ôn tập: Tiết 5
Phần 2 - Đánh giá cuối học kì I: Tiết 6 - 7: Bố đứng nhìn biển cả
Phần 2 - Đánh giá cuối học kì I: Tiết 6 - 7: Những điều thú vị về chim di cư
Phần 2 - Đánh giá cuối học kì I: Tiết 6 - 7: Viết
Tuần 19: Vẻ đẹp cuộc sống
Bài 1: Tiếng hát của người đá
Bài 1: Câu đơn và câu ghép
Bài 1: Tìm hiểu cách viết bài văn tả người
Bài 2: Khúc hát ru những em bé lớn trên lưng mẹ
Bài 2: Viết mở bài và kết bài cho bài văn tả người
Bài 2: Đọc mở rộng
Tuần 20: Vẻ đẹp cuộc sống
Bài 3: Hạt gạo làng ta
Bài 3: Cách nối các vế câu ghép
Bài 3: Quan sát để viết bài văn tả người
Bài 4: Hộp quà màu thiên thanh
Bài 4: Lập dàn ý cho bài văn tả người
Bài 4: Nét đẹp học đường
Tuần 21: Vẻ đẹp cuộc sống
Bài 5: Giỏ hoa tháng Năm
Bài 5: Cách nối các vế câu ghép (Tiếp theo)
Bài 5: Viết đoạn văn tả người
Bài 6: Thư của bố
Bài 6: Viết bài văn tả người (Bài viết số 1)
Bài 6: Đọc mở rộng
Tuần 22: Vẻ đẹp cuộc sống
Bài 7: Đoàn thuyền đánh cá
Bài 7: Luyện tập về câu ghép
Bài 7: Đánh giá, chỉnh sửa bài văn tả người
Bài 8: Khu rừng của Mát
Bài 8: Viết bài văn tả người (Bài viết số 2)
Bài 8: Những ý kiến khác biệt
Tuần 23: Hương sắc trăm miền
Bài 9: Hội thổi cơm thi ở Đồng Vân
Bài 9: Liên kết câu bằng cách lặp từ ngữ
Bài 9: Tìm hiểu cách viết đoạn văn thể hiện tình cảm, cảm xúc về một sự việc
Bài 10: Những búp chè trên cây cổ thụ
Bài 10: Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một sự việc
Bài 10: Đọc mở rộng
Tuần 24: Hương sắc trăm miền
Bài 11: Hương cốm mùa thu
Bài 11: Liên kết câu bằng từ ngữ nối
Bài 11: Viết đoạn văn thể hiện tình cảm, cảm xúc về một sự việc
Bài 12: Vũ điệu trên nền thổ cẩm
Bài 12: Đánh giá, chỉnh sửa đoạn văn thể hiện tình cảm, cảm xúc về một sự việc
Bài 12: Địa điểm tham quan, du lịch
Tuần 25: Hương sắc trăm miền
Bài 13: Đàn t'rưng - Tiếng ca đại ngàn
Bài 13: Liên kết câu bằng từ ngữ thay thế
Bài 13: Tìm hiểu cách viết chương trình hoạt động
Bài 14: Đường quê Đồng Tháp Mười
Bài 14: Viết chương trình hoạt động (Bài viết số 1)
Bài 14: Đọc mở rộng
Tuần 26: Hương sắc trăm miền
Bài 15: Xuồng ba lá quê tôi
Bài 15: Luyện tập về liên kết câu trong đoạn văn
Bài 15: Đánh giá, chỉnh sửa chương trình hoạt động
Bài 16: Về thăm Đất Mũi
Bài 16: Viết chương trình hoạt động (Bài viết số 2)
Bài 16: Sản vật địa phương
Tuần 27: Ôn tập và đánh giá giữa học kì 2
Phần 1 - Ôn tập: Tiết 1 - 2
Phần 1 - Ôn tập: Tiết 3 - 4
Phần 1 - Ôn tập: Tiết 5
Phần 2 - Đánh giá giữa học kì II: Tiết 6 - 7: Mưa
Phần 2 - Đánh giá giữa học kì II: Tiết 6 - 7: Mùa mật mới
Phần 2 - Đánh giá giữa học kì II: Tiết 6 - 7: Viết
Tuần 28: Tiếp bước cha ông
Bài 17: Nghìn năm văn hiến
Bài 17: Luyện tập về đại từ và kết từ
Bài 17: Tìm hiểu cách viết đoạn văn nêu ý kiến tán thành một sự việc, hiện tượng
Bài 18: Người thầy của muôn đời
Bài 18: Tìm ý cho đoạn văn nêu ý kiến tán thành một sự việc, hiện tượng
Bài 18: Đọc mở rộng
Tuần 29: Tiếp bước cha ông
Bài 19: Danh y Tuệ Tĩnh
Bài 19: Luyện tập về từ đồng nghĩa và từ đa nghĩa
Bài 19: Viết đoạn văn nêu ý kiến tán thành một sự việc, hiện tượng (Bài viết số 1)
Bài 20: Cụ Đồ Chiểu
Bài 20: Đánh giá, chỉnh sửa đoạn văn nêu ý kiến tán thành một sự việc, hiện tượng
Bài 20: Đền ơn đáp nghĩa
Tuần 30: Tiếp bước cha ông
Bài 21: Anh hùng Lao động Trần Đại Nghĩa
Bài 21: Luyện tập về câu ghép
Bài 21: Viết đoạn văn nêu ý kiến tán thành một sự việc, hiện tượng (Bài viết số 2)
Bài 22: Bộ đội về làng
Bài 22: Luyện viết đoạn văn thể hiện tình cảm, cảm xúc về một sự việc
Bài 22: Đọc mở rộng
Tuần 31: Tiếp bước cha ông
Bài 23: Về ngôi nhà đang xây
Bài 23: Viết hoa danh từ chung để thể hiện sự tôn trọng đặc biệt
Bài 23: Luyện tập lập dàn ý cho bài văn tả phong cảnh
Bài 24: Việt Nam quê hương ta
Bài 24: Luyện viết bài văn tả phong cảnh
Bài 24: Di tích lịch sử
Tuần 32: Thế giới của chúng ta
Bài 25: Bài ca trái đất
Bài 25: Cách viết tên người và tên địa lí nước ngoài
Bài 25: Luyện tập lập dàn ý cho bài văn tả người
Bài 26: Những con hạc giấy
Bài 26: Luyện viết bài văn tả người
Bài 26: Đọc mở rộng
Tuần 33: Thế giới của chúng ta
Bài 27: Người hùng thầm lặng
Bài 27: Luyện tập về dấu gạch ngang
Bài 27: Tìm hiểu cách viết đoạn văn nêu ý kiến phản đối một sự việc, hiện tượng
Bài 28: Giờ trái đất
Bài 28: Tìm ý cho đoạn văn nêu ý kiến phản đối một sự việc, hiện tượng
Bài 28: Trải nghiệm ngày hè
Tuần 34: Thế giới của chúng ta
Bài 29: Điện thoại di động
Bài 29: Luyện tập về liên kết câu trong đoạn văn
Bài 29: Viết đoạn văn nêu ý kiến phản đối một sự việc, hiện tượng
Bài 30: Thành phố thông minh Mát-xđa
Bài 30: Đánh giá, chỉnh sửa đoạn văn nêu ý kiến phản đối một sự việc, hiện tượng
Bài 30: Đọc mở rộng
Tuần 35: Ôn tập và Đánh giá cuối năm học
Phần 1 - Ôn tập: Tiết 1 - 2
Phần 1 - Ôn tập: Tiết 3 - 4
Phần 1 - Ôn tập: Tiết 5
Phần 2 - Đánh giá cuối năm học: Tiết 6 - 7: Qua Thậm Thình
Phần 2 - Đánh giá cuối năm học: Tiết 6 - 7: Phong cảnh đền Hùng
Phần 2 - Đánh giá cuối năm học: Tiết 6 - 7: Viết
"""

current_theme = "Chủ đề 1: Thế giới tuổi thơ"
lessons = []
item_index = 1

for line in raw_tv_data.strip().split("\n"):
    line = line.strip()
    if not line:
        continue
    if line.startswith("Tuần"):
        current_theme = line.replace("Tuần", "Tuần").replace(".", ":")
    else:
        title = line
        desc = f"Nội dung trọng tâm Luyện từ và câu, Đọc hiểu và Tập làm văn Lớp 5 thuộc {current_theme}."
        
        # Build simple practice question
        exercise = {
            "id": f"tv_q_{item_index}",
            "type": "mcq",
            "question": f"Văn bản/nội dung \"{title}\" hướng tới rèn luyện kỹ năng nào chính?",
            "options": ["Đọc hiểu & Tiếng Việt Lớp 5", "Tính toán số học", "Nói tiếng Anh", "Vẽ sơ đồ tư duy"],
            "answerIndex": 0,
            "explanation": f"Nội dung bài học \"{title}\" giúp rèn luyện và làm phong phú vốn từ Tiếng Việt 5."
        }
        
        lesson_obj = {
            "id": f"tv-{item_index}",
            "theme": current_theme,
            "title": title,
            "description": desc,
            "duration": "35 phút",
            "isLocked": False,
            "theory": {
                "summary": f"Trọng tâm kiến thức {title}. Học sinh tiếp thu vốn từ, ngữ pháp và phương pháp viết văn Lớp 5.",
                "sections": [
                    {
                        "title": f"1. Trọng tâm bài học: {title}",
                        "text": f"Nội dung thuộc chương trình Tiếng Việt 5 theo chủ điểm {current_theme}.\nRèn luyện khả năng đọc cảm thụ, phân tích từ ngữ và kỹ năng diễn đạt.",
                        "highlights": ["Tập trung đọc diễn cảm", "Vận dụng linh hoạt từ ngữ và ngữ pháp"]
                    }
                ],
                "audioText": f"Trọng tâm kiến thức bài học {title}. Giúp các em phát triển năng lực đọc hiểu và cảm thụ văn học Tiếng Việt Lớp 5."
            },
            "exercises": [exercise]
        }
        lessons.append(lesson_obj)
        item_index += 1

print(f"Total Vietnamese lessons created: {len(lessons)}")

tiengviet_subject = {
    "id": "tiengviet",
    "name": "TIẾNG VIỆT",
    "subTitle": f"Đầy đủ {len(lessons)} bài học theo 35 Tuần: Đọc hiểu, Luyện từ & câu, Tập làm văn",
    "icon": "BookOpen",
    "color": "from-pink-500 to-rose-600",
    "bgColor": "bg-pink-50",
    "borderColor": "border-pink-200",
    "textColor": "text-pink-600",
    "badgeColor": "bg-pink-100 text-pink-800",
    "lessons": lessons
}

with open(r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\scratch\tv_lessons.json", "w", encoding="utf-8") as f:
    json.dump(tiengviet_subject, f, ensure_ascii=False, indent=2)

