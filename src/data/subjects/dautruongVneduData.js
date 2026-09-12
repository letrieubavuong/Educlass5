// Modular Data for ĐẤU TRƯỜNG VNEDU
export const dautruongVneduSubject = {
  "id": "dautruong-vnedu",
  "name": "ĐẤU TRƯỜNG VNEDU",
  "subTitle": "Bộ đề thi đấu trường kiến thức tổng hợp VnEdu / VioEdu cấp Trường & Huyện (Toán, Tiếng Việt, Tiếng Anh, Khoa học)",
  "icon": "Swords",
  "color": "from-purple-600 via-pink-600 to-rose-500",
  "bgColor": "bg-purple-50",
  "borderColor": "border-purple-200",
  "textColor": "text-purple-600",
  "badgeColor": "bg-purple-100 text-purple-800",
  "lessons": [
    {
      "id": "dt-vnedu-1",
      "theme": "Vòng 1. Thi Tốc Độ & Kiến Thức Tổng Hợp",
      "title": "Trận 1: Thử Thách Kiến Thức Số 1 (Toán & Khoa Học)",
      "description": "Đề thi Đấu trường VnEdu 20 phút tốc độ cao gồm câu hỏi Toán tư duy, Tỉ số phần trăm, Chuyển động và Sinh thái học.",
      "duration": "20 phút",
      "isLocked": false,
      "theory": {
        "summary": "⚡ Chiến thuật làm bài Đấu trường VnEdu / VioEdu: Phản xạ nhanh, đọc kỹ yêu cầu bài toán, làm câu dễ trước để ghi điểm tốc độ.",
        "sections": [
          {
            "title": "1. Công thức Toán trọng tâm trong Đấu trường VnEdu",
            "text": "• Tìm Giá trị phần trăm: A% của B = (B x A) / 100.\n• Vận tốc (v), Quãng đường (s), Thời gian (t): `s = v x t`, `v = s / t`, `t = s / v`.\n• Chuyển động ngược chiều: `t_gặp = s / (v1 + v2)`.\n• Chuyển động cùng chiều đuổi nhau: `t_đuổi = s / (v1 - v2)`.",
            "highlights": [
              "Chuyển động trên dòng nước: V_xuôi = V_thực + V_dòng; V_ngược = V_thực - V_dòng",
              "Biểu đồ phần trăm"
            ]
          }
        ],
        "audioText": "Chiến thuật làm bài Đấu trường VnEdu. Phản xạ nhanh, đọc kỹ yêu cầu bài toán và áp dụng công thức chuyển động."
      },
      "exercises": [
        {
          "id": "dt_vnedu_q1",
          "type": "mcq",
          "question": "Một ô tô đi với vận tốc 50 km/h trong thời gian 2.5 giờ. Quãng đường ô tô đã đi được là bao nhiêu km?",
          "options": [
            "125 km",
            "100 km",
            "150 km",
            "120 km"
          ],
          "answerIndex": 0,
          "explanation": "Quãng đường s = v x t = 50 x 2.5 = 125 km."
        },
        {
          "id": "dt_vnedu_q2",
          "type": "blank",
          "question": "Lớp 5A có 40 học sinh, trong đó có 24 học sinh nữ. Hỏi số học sinh nữ chiếm bao nhiêu phần trăm số học sinh cả lớp? (Điền số %, ví dụ: 60)",
          "answer": "60",
          "explanation": "Tỉ số phần trăm nữ = (24 / 40) x 100% = 60%."
        },
        {
          "id": "dt_vnedu_q3",
          "type": "matching",
          "skillLabel": "🧩 NỐI KHÁI NIỆM KHOA HỌC & TIẾNG VIỆT",
          "question": "Nối các khái niệm ở Cột A với giải thích tương ứng ở Cột B:",
          "pairs": [
            { "left": "Từ đồng nghĩa", "right": "Những từ có nghĩa giống nhau hoặc gần giống nhau (Ví dụ: siêng năng - chăm chỉ)" },
            { "left": "Năng lượng Mặt Trời", "right": "Năng lượng tái tạo vô tận cung cấp ánh sáng và nhiệt cho Trái Đất" },
            { "left": "Hiện tượng ngưng tụ", "right": "Sự chuyển thể từ thể khí (hơi nước) sang thể lỏng (giọt nước)" },
            { "left": "Từ trái nghĩa", "right": "Những từ có ý nghĩa trái ngược nhau (Ví dụ: cao - thấp)" }
          ],
          "explanation": "Nối đúng định nghĩa Từ đồng nghĩa/trái nghĩa và kiến thức Khoa học tự nhiên."
        },
        {
          "id": "dt_vnedu_q4",
          "type": "tf",
          "question": "Trong môi trường tự nhiên, Thực vật đóng vai trò là sinh vật tự dưỡng sản xuất ra khí Ô-xi cho con người và động vật hô hấp. Đúng hay Sai?",
          "isTrue": true,
          "explanation": "Đúng! Quá trình quang hợp của cây xanh hấp thụ CO2 và giải phóng O2."
        }
      ]
    },
    {
      "id": "dt-vnedu-2",
      "theme": "Vòng 2. Trận Chiến Thách Thức Cấp Huyện",
      "title": "Trận 2: Đấu Trường Siêu Trí Tuệ (Toán Nâng Cao & Tiếng Anh)",
      "description": "Đề thi vòng loại cấp Quận/Huyện tích hợp kiến thức Toán hình học không gian, diện tích toàn phần và Từ vựng Tiếng Anh.",
      "duration": "25 phút",
      "isLocked": false,
      "theory": {
        "summary": "🏆 Diện tích & Thể tích Hình lập phương, Hình hộp chữ nhật:\n• Hộp chữ nhật: `S_xq = 2 x (a + b) x h`, `V = a x b x h`.\n• Lập phương: `S_xq = a x a x 4`, `S_tp = a x a x 6`, `V = a x a x a`.",
        "sections": [
          {
            "title": "1. Công thức Thể tích & Diện tích",
            "text": "• Đổi đơn vị thể tích: `1 m³ = 1000 dm³ = 1 000 000 cm³ = 1000 lít`.\n• Thể tích nước dâng lên trong bể đúng bằng thể tích vật thả chìm vào nước.",
            "highlights": [
              "1 dm3 = 1 lít",
              "Hình lập phương cạnh a"
            ]
          }
        ],
        "audioText": "Công thức tính thể tích và diện tích hình hộp chữ nhật và hình lập phương."
      },
      "exercises": [
        {
          "id": "dt_vnedu_2_q1",
          "type": "mcq",
          "question": "Một hình lập phương có cạnh bằng 5 cm. Thể tích của hình lập phương đó là bao nhiêu cm³?",
          "options": [
            "125 cm³",
            "100 cm³",
            "150 cm³",
            "25 cm³"
          ],
          "answerIndex": 0,
          "explanation": "Thể tích V = a x a x a = 5 x 5 x 5 = 125 cm³."
        },
        {
          "id": "dt_vnedu_2_q2",
          "type": "blank",
          "question": "Điền từ tiếng Anh còn thiếu vào câu sau: 'My sister is very ________ (thông minh). She always gets 10 marks in Math.' (Điền từ: smart hoặc clever)",
          "answer": "smart",
          "explanation": "Smart hoặc clever nghĩa là thông minh."
        }
      ]
    }
  ]
};
