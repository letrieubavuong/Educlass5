import json

math_lessons = [
    # CHỦ ĐỀ 1. Ôn tập và bổ sung
    {
        "id": "toan-1",
        "theme": "Chủ đề 1. Ôn tập và bổ sung",
        "title": "Bài 1. Ôn tập các số tự nhiên",
        "description": "Ôn tập đọc, viết, so sánh các số tự nhiên và vị trí của chữ số trong hàng đơn vị, chục, trăm, nghìn, triệu.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Số tự nhiên dùng để đếm và thứ tự. Trong một số tự nhiên, giá trị của mỗi chữ số phụ thuộc vào vị trí của nó theo hàng và lớp.",
            "sections": [
                {
                    "title": "1. Đọc và viết số tự nhiên",
                    "text": "Đọc số từ trái sang phải, tách theo từng lớp (lớp triệu, lớp nghìn, lớp đơn vị) để đọc chính xác.",
                    "formula": "1\\,000\\,000 = 10 \\text{ trăm nghìn}",
                    "highlights": ["Số 0 là số tự nhiên nhỏ nhất", "Không có số tự nhiên lớn nhất"]
                }
            ],
            "audioText": "Số tự nhiên dùng để đếm và xếp thứ tự. Đọc và viết số tự nhiên từ trái sang phải, tách theo từng lớp nghìn và triệu."
        },
        "exercises": [
            {
                "id": "t1_q1",
                "type": "mcq",
                "question": "Trong số $5\\,842\\,910$, chữ số $8$ thuộc hàng nào?",
                "options": ["Hàng trăm nghìn", "Hàng chục nghìn", "Hàng triệu", "Hàng nghìn"],
                "answerIndex": 0,
                "explanation": "Chữ số $8$ đứng ở vị trí hàng trăm nghìn (thuộc lớp nghìn)."
            }
        ]
    },
    {
        "id": "toan-2",
        "theme": "Chủ đề 1. Ôn tập và bổ sung",
        "title": "Bài 2. Ôn tập các phép tính với số tự nhiên",
        "description": "Cộng, trừ, nhân, chia các số tự nhiên và tính chất giao hoán, kết hợp, phân phối.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Tính chất giao hoán: $a + b = b + a$, $a \\times b = b \\times a$. Tính chất phân phối: $a \\times (b + c) = a \\times b + a \\times c$.",
            "sections": [
                {
                    "title": "1. Các tính chất phép tính",
                    "text": "Biểu thức có dấu ngoặc thực hiện trong ngoặc trước. Nhân chia trước, cộng trừ sau.",
                    "formula": "a \\times b + a \\times c = a \\times (b + c)",
                    "highlights": ["Nhân với 0 luôn bằng 0", "Chia cho 1 luôn bằng chính nó"]
                }
            ]
        },
        "exercises": [
            {
                "id": "t2_q1",
                "type": "short_answer",
                "question": "Tính hợp lý: $25 \\times 38 \\times 4 = ?$",
                "answer": "3800",
                "explanation": "$25 \\times 38 \\times 4 = (25 \\times 4) \\times 38 = 100 \\times 38 = 3800$."
            }
        ]
    },
    {
        "id": "toan-3",
        "theme": "Chủ đề 1. Ôn tập và bổ sung",
        "title": "Bài 3. Ôn tập phân số",
        "description": "Khái niệm phân số, phân số bằng nhau, rút gọn phân số và quy đồng mẫu số các phân số.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Phân số gồm tử số và mẫu số ($mẫu \\neq 0$). Nếu nhân hoặc chia cả tử và mẫu với cùng một số tự nhiên khác 0 thì được phân số bằng phân số ban đầu.",
            "sections": [
                {
                    "title": "1. Rút gọn & Quy đồng phân số",
                    "text": "Rút gọn phân số: Chia tử số và mẫu số cho cùng ước chung lớn hơn 1.\nQuy đồng mẫu số: Tìm mẫu số chung chia hết cho các mẫu số.",
                    "formula": "\\frac{a}{b} = \\frac{a : k}{b : k} \\quad (k > 1)",
                    "highlights": ["Phân số tối giản không thể rút gọn thêm được nữa."]
                }
            ]
        },
        "exercises": [
            {
                "id": "t3_q1",
                "type": "mcq",
                "question": "Rút gọn phân số $\\frac{18}{24}$ về phân số tối giản ta được kết quả nào?",
                "options": ["$\\frac{3}{4}$", "$\\frac{9}{12}$", "$\\frac{2}{3}$", "$\\frac{4}{3}$"],
                "answerIndex": 0,
                "explanation": "Chia cả tử và mẫu cho $6$: $\\frac{18:6}{24:6} = \\frac{3}{4}$."
            }
        ]
    },
    {
        "id": "toan-4",
        "theme": "Chủ đề 1. Ôn tập và bổ sung",
        "title": "Bài 4. Phân số thập phân",
        "description": "Khái niệm phân số thập phân (có mẫu số là 10, 100, 1000,...) và chuyển đổi phân số thành phân số thập phân.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Phân số thập phân là những phân số có mẫu số là 10, 100, 1 000,...",
            "sections": [
                {
                    "title": "1. Chuyển đổi thành Phân số thập phân",
                    "text": "Ví dụ: $\\frac{3}{5} = \\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10}$; $\\frac{7}{20} = \\frac{7 \\times 5}{20 \\times 5} = \\frac{35}{100}$.",
                    "formula": "\\frac{3}{5} = \\frac{6}{10} = 0.6",
                    "highlights": ["Mẫu số phải là 10, 100, 1000,..."]
                }
            ]
        },
        "exercises": [
            {
                "id": "t4_q1",
                "type": "mcq",
                "question": "Phân số nào dưới đây là Phân số thập phân?",
                "options": ["$\\frac{7}{100}$", "$\\frac{3}{25}$", "$\\frac{10}{7}$", "$\\frac{5}{12}$"],
                "answerIndex": 0,
                "explanation": "$\\frac{7}{100}$ có mẫu số là 100 nên là phân số thập phân."
            }
        ]
    },
    {
        "id": "toan-5",
        "theme": "Chủ đề 1. Ôn tập và bổ sung",
        "title": "Bài 5. Ôn tập các phép tính với phân số",
        "description": "Cộng, trừ cùng mẫu số, nhân và chia các phân số.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Phép nhân: Tử nhân tử, mẫu nhân mẫu. Phép chia: Nhân với phân số đảo ngược.",
            "sections": [
                {
                    "title": "1. Phép tính phân số",
                    "text": "$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$; $\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$.",
                    "formula": "\\frac{a}{b} : \\frac{c}{d} = \\frac{a \\times d}{b \\times c}",
                    "highlights": ["Kết quả phép tính cần viết ở dạng tối giản."]
                }
            ]
        },
        "exercises": [
            {
                "id": "t5_q1",
                "type": "short_answer",
                "question": "Tính: $\\frac{2}{3} : \\frac{4}{9} = ? $ (nhập kết quả tối giản ví dụ 3/2)",
                "answer": "3/2",
                "explanation": "$\\frac{2}{3} : \\frac{4}{9} = \\frac{2}{3} \\times \\frac{9}{4} = \\frac{18}{12} = \\frac{3}{2}$."
            }
        ]
    },
    {
        "id": "toan-6",
        "theme": "Chủ đề 1. Ôn tập và bổ sung",
        "title": "Bài 6. Cộng, trừ hai phân số khác mẫu số",
        "description": "Quy tắc quy đồng mẫu số rồi thực hiện tính cộng, trừ hai phân số khác mẫu số.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Muốn cộng hoặc trừ hai phân số khác mẫu số, ta quy đồng mẫu số rồi cộng hoặc trừ các tử số giữ nguyên mẫu số chung.",
            "sections": [
                {
                    "title": "1. Các bước thực hiện",
                    "text": "Bước 1: Quy đồng mẫu số.\nBước 2: Cộng/trừ tử số.\nBước 3: Rút gọn kết quả.",
                    "formula": "\\frac{1}{4} + \\frac{2}{3} = \\frac{3}{12} + \\frac{8}{12} = \\frac{11}{12}",
                    "highlights": ["Luôn kiểm tra mẫu số chung nhỏ nhất."]
                }
            ]
        },
        "exercises": [
            {
                "id": "t6_q1",
                "type": "mcq",
                "question": "Tính: $\\frac{3}{5} + \\frac{1}{2} = ?$",
                "options": ["$\\frac{11}{10}$", "$\\frac{4}{7}$", "$\\frac{4}{10}$", "$\\frac{7}{10}$"],
                "answerIndex": 0,
                "explanation": "$\\frac{3}{5} + \\frac{1}{2} = \\frac{6}{10} + \\frac{5}{10} = \\frac{11}{10}$."
            }
        ]
    },
    {
        "id": "toan-7",
        "theme": "Chủ đề 1. Ôn tập và bổ sung",
        "title": "Bài 7. Hỗn số",
        "description": "Khái niệm hỗn số gồm phần nguyên và phần phân số. Chuyển đổi giữa hỗn số và phân số.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Hỗn số gồm có phần nguyên và phần phân số (phần phân số luôn nhỏ hơn 1). Ví dụ $2\\frac{3}{4}$.",
            "sections": [
                {
                    "title": "1. Chuyển hỗn số thành phân số",
                    "text": "Tử số mới = Phần nguyên $\\times$ Mẫu số + Tử số cũ. Mẫu số giữ nguyên.",
                    "formula": "a\\frac{b}{c} = \\frac{a \\times c + b}{c}",
                    "highlights": ["$2\\frac{1}{3} = \\frac{2 \\times 3 + 1}{3} = \\frac{7}{3}$"]
                }
            ]
        },
        "exercises": [
            {
                "id": "t7_q1",
                "type": "mcq",
                "question": "Chuyển hỗn số $3\\frac{2}{5}$ thành phân số ta được:",
                "options": ["$\\frac{17}{5}$", "$\\frac{11}{5}$", "$\\frac{15}{5}$", "$\\frac{13}{5}$"],
                "answerIndex": 0,
                "explanation": "$3\\frac{2}{5} = \\frac{3 \\times 5 + 2}{5} = \\frac{17}{5}$."
            }
        ]
    },
    {
        "id": "toan-8",
        "theme": "Chủ đề 1. Ôn tập và bổ sung",
        "title": "Bài 8. Ôn tập hình học và đo lường",
        "description": "Chu vi, diện tích hình chữ nhật, hình vuông và đơn vị đo độ dài, khối lượng.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Diện tích hình chữ nhật $S = a \\times b$, diện tích hình vuông $S = a \\times a$.",
            "sections": [
                {
                    "title": "1. Công thức hình học cơ bản",
                    "text": "Chu vi HCN: $P = (a + b) \\times 2$.\nDiện tích HCN: $S = a \\times b$.",
                    "formula": "P = (a + b) \\times 2 \\quad S = a \\times b",
                    "highlights": ["Đơn vị diện tích có số mũ 2 ($cm^2, m^2$)."]
                }
            ]
        },
        "exercises": [
            {
                "id": "t8_q1",
                "type": "short_answer",
                "question": "Một hình chữ nhật có chiều dài $8m$, chiều rộng $5m$. Diện tích là bao nhiêu $m^2$?",
                "answer": "40",
                "explanation": "$S = 8 \\times 5 = 40 m^2$."
            }
        ]
    },
    {
        "id": "toan-9",
        "theme": "Chủ đề 1. Ôn tập và bổ sung",
        "title": "Bài 9. Luyện tập chung",
        "description": "Tổng hợp bài tập thực hành về số tự nhiên, phân số, hỗn số và hình học.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Ôn tập tổng hợp toàn bộ Chủ đề 1.",
            "sections": [
                {
                    "title": "1. Trọng tâm ôn tập",
                    "text": "Luyện tập giải toán có lời văn và thực hiện phép tính phân số.",
                    "highlights": ["Rút gọn kết quả trước khi nộp bài."]
                }
            ]
        },
        "exercises": [
            {
                "id": "t9_q1",
                "type": "true_false",
                "question": "Phân số $\\frac{4}{5}$ lớn hơn phân số $\\frac{3}{4}$. Đúng hay Sai?",
                "isTrue": True,
                "explanation": "Đúng! Quy đồng: $\\frac{4}{5} = \\frac{16}{20}$, $\\frac{3}{4} = \\frac{15}{20}$. Vì $16 > 15$ nên $\\frac{4}{5} > \\frac{3}{4}$."
            }
        ]
    },

    # CHỦ ĐỀ 2. SỐ THẬP PHÂN
    {
        "id": "toan-10",
        "theme": "Chủ đề 2. Số thập phân",
        "title": "Bài 10. Khái niệm số thập phân",
        "description": "Khái niệm số thập phân gồm Phần nguyên và Phần thập phân phân cách bởi dấu phẩy.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Mỗi số thập phân gồm hai phần: Phần nguyên (bên trái dấu phẩy) và Phần thập phân (bên phải dấu phẩy).",
            "sections": [
                {
                    "title": "1. Cấu tạo số thập phân",
                    "text": "Ví dụ số $12.35$: Phần nguyên là $12$, Phần thập phân là $35$ (gồm $3$ phần mười, $5$ phần trăm).",
                    "formula": "12.35 = 12 + \\frac{3}{10} + \\frac{5}{100}",
                    "highlights": ["Sau dấu phẩy lần lượt là hàng phần mười, phần trăm, phần nghìn."]
                }
            ]
        },
        "exercises": [
            {
                "id": "t10_q1",
                "type": "mcq",
                "question": "Trong số thập phân $45.678$, chữ số $7$ thuộc hàng nào?",
                "options": ["Hàng phần trăm", "Hàng phần mười", "Hàng phần nghìn", "Hàng đơn vị"],
                "answerIndex": 0,
                "explanation": "Chữ số $6$ ở hàng phần mười, chữ số $7$ ở hàng phần trăm."
            }
        ]
    },
    {
        "id": "toan-11",
        "theme": "Chủ đề 2. Số thập phân",
        "title": "Bài 11. So sánh các số thập phân",
        "description": "Quy tắc so sánh hai số thập phân (so sánh phần nguyên trước, sau đó so sánh từng hàng ở phần thập phân).",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "So sánh phần nguyên: số nào có phần nguyên lớn hơn thì lớn hơn. Nếu phần nguyên bằng nhau, so sánh hàng phần mười, phần trăm...",
            "sections": [
                {
                    "title": "1. So sánh số thập phân",
                    "text": "Ví dụ: $5.8 > 4.9$ (vì $5 > 4$). $3.45 < 3.48$ (vì phần nguyên bằng $3$, phần mười bằng $4$, phần trăm $5 < 8$).",
                    "highlights": ["Thêm số 0 vào bên phải phần thập phân không làm thay đổi giá trị số đó."]
                }
            ]
        },
        "exercises": [
            {
                "id": "t11_q1",
                "type": "true_false",
                "question": "$4.500 = 4.5$. Đúng hay Sai?",
                "isTrue": True,
                "explanation": "Đúng! Viết thêm hoặc bỏ các chữ số 0 ở tận cùng bên phải phần thập phân thì giá trị số không đổi."
            }
        ]
    },
    {
        "id": "toan-12",
        "theme": "Chủ đề 2. Số thập phân",
        "title": "Bài 12. Viết số đo đại lượng dưới dạng số thập phân",
        "description": "Chuyển đổi các đơn vị đo độ dài, khối lượng, diện tích sang dạng số thập phân.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Chuyển đơn vị nhỏ sang đơn vị lớn bằng cách viết dưới dạng phân số thập phân rồi đổi sang số thập phân.",
            "sections": [
                {
                    "title": "1. Ví dụ chuyển đổi",
                    "text": "$3m \\, 5dm = 3.5m$; $4kg \\, 250g = 4.25kg$.",
                    "formula": "1m = 10dm = 100cm = 1000mm",
                    "highlights": ["1kg = 1000g -> 1g = 0.001kg"]
                }
            ]
        },
        "exercises": [
            {
                "id": "t12_q1",
                "type": "short_answer",
                "question": "Viết số đo $5m \\, 8cm$ dưới dạng số thập phân với đơn vị là mét ($m$):",
                "answer": "5.08",
                "explanation": "$5m \\, 8cm = 5\\frac{8}{100}m = 5.08m$."
            }
        ]
    },
    {
        "id": "toan-13",
        "theme": "Chủ đề 2. Số thập phân",
        "title": "Bài 13. Làm tròn số thập phân",
        "description": "Làm tròn số thập phân đến hàng đơn vị, hàng phần mười, hàng phần trăm.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Quy tắc làm tròn: Nếu chữ số ngay sau hàng làm tròn $< 5$ thì giữ nguyên. Nếu $\\ge 5$ thì cộng 1 vào hàng làm tròn.",
            "sections": [
                {
                    "title": "1. Quy tắc làm tròn",
                    "text": "Làm tròn $4.36$ đến hàng phần mười -> $4.4$ (vì $6 \\ge 5$).\nLàm tròn $7.24$ đến hàng phần mười -> $7.2$ (vì $4 < 5$).",
                    "highlights": ["Nắm vững chữ số đứng liền sau hàng làm tròn!"]
                }
            ]
        },
        "exercises": [
            {
                "id": "t13_q1",
                "type": "mcq",
                "question": "Làm tròn số $8.765$ đến hàng phần mười ta được số nào?",
                "options": ["$8.8$", "$8.7$", "$8.77$", "$9.0$"],
                "answerIndex": 0,
                "explanation": "Chữ số ở hàng phần trăm là $6 \\ge 5$ nên làm tròn lên $8.8$."
            }
        ]
    },
    {
        "id": "toan-14",
        "theme": "Chủ đề 2. Số thập phân",
        "title": "Bài 14. Luyện tập chung",
        "description": "Luyện tập tổng hợp so sánh, viết số đo đại lượng và làm tròn số thập phân.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Củng cố kiến thức Số thập phân.",
            "sections": [
                {
                    "title": "1. Bài tập tổng hợp",
                    "text": "Thực hành chuyển đổi số đo và làm tròn số thập phân.",
                    "highlights": ["Chú ý các câu hỏi đổi đơn vị diện tích."]
                }
            ]
        },
        "exercises": [
            {
                "id": "t14_q1",
                "type": "short_answer",
                "question": "Sắp xếp từ bé đến lớn: $3.4; 3.04; 3.44$. Số nhỏ nhất là số nào?",
                "answer": "3.04",
                "explanation": "So sánh phần mười: $0 < 4$ nên $3.04$ là số nhỏ nhất."
            }
        ]
    },

    # CHỦ ĐỀ 3. MỘT SỐ ĐƠN VỊ ĐO DIỆN TÍCH
    {
        "id": "toan-15",
        "theme": "Chủ đề 3. Một số đơn vị đo diện tích",
        "title": "Bài 15. Ki-lô-mét vuông. Héc-ta",
        "description": "Đơn vị đo diện tích lớn: Ki-lô-mét vuông ($km^2$) và Héc-ta ($ha$).",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "1 héc-ta = 10 000 $m^2$. Ký hiệu là $ha$. 1 $km^2$ = 100 $ha$ = 1 000 000 $m^2$.",
            "sections": [
                {
                    "title": "1. Đơn vị đo diện tích lớn",
                    "text": "$1 ha = 10\\,000 m^2$\n$1 km^2 = 100 ha = 1\\,000\\,000 m^2$",
                    "formula": "1 km^2 = 100 ha = 1\\,000\\,000 m^2",
                    "highlights": ["Héc-ta dùng đo diện tích ruộng đất, khu rừng."]
                }
            ]
        },
        "exercises": [
            {
                "id": "t15_q1",
                "type": "short_answer",
                "question": "Đổi $2.5 ha = ? m^2$",
                "answer": "25000",
                "explanation": "$2.5 \\times 10\\,000 = 25\\,000 m^2$."
            }
        ]
    },
    {
        "id": "toan-16",
        "theme": "Chủ đề 3. Một số đơn vị đo diện tích",
        "title": "Bài 16. Các đơn vị đo diện tích",
        "description": "Bảng đơn vị đo diện tích từ $km^2, ha, dam^2, m^2, dm^2, cm^2, mm^2$.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Trong bảng đơn vị đo diện tích, hai đơn vị đo liền nhau gấp (hoặc kém) nhau 100 lần.",
            "sections": [
                {
                    "title": "1. Bảng đơn vị đo diện tích",
                    "text": "Mỗi đơn vị đo diện tích ứng với 2 chữ số.",
                    "formula": "1 m^2 = 100 dm^2 = 10\\,000 cm^2",
                    "highlights": ["Gấp/kém nhau 100 lần giữa 2 đơn vị liên tiếp."]
                }
            ]
        },
        "exercises": [
            {
                "id": "t16_q1",
                "type": "mcq",
                "question": "Điền số thích hợp: $4 m^2 \\, 5 dm^2 = ? dm^2$",
                "options": ["$405$", "$450$", "$45$", "$4005$"],
                "answerIndex": 0,
                "explanation": "$4 m^2 = 400 dm^2$ nên $4 m^2 \\, 5 dm^2 = 405 dm^2$."
            }
        ]
    },
    {
        "id": "toan-17",
        "theme": "Chủ đề 3. Một số đơn vị đo diện tích",
        "title": "Bài 17. Thực hành và trải nghiệm với một số đơn vị đo đại lượng",
        "description": "Ước lượng và thực hành đo diện tích lớp học, sân trường, mảnh đất.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Ứng dụng đơn vị đo diện tích vào thực tế sân trường, căn phòng.",
            "sections": [
                {
                    "title": "1. Trải nghiệm thực tế",
                    "text": "Diện tích phòng học khoảng $50m^2$. Diện tích công viên khoảng vài $ha$.",
                    "highlights": ["Lựa chọn đơn vị đo phù hợp thực tế."]
                }
            ]
        },
        "exercises": [
            {
                "id": "t17_q1",
                "type": "true_false",
                "question": "Diện tích một tỉnh hoặc thành phố thường được đo bằng đơn vị $km^2$. Đúng hay Sai?",
                "isTrue": True,
                "explanation": "Đúng! $km^2$ dùng đo diện tích lãnh thổ lớn."
            }
        ]
    },
    {
        "id": "toan-18",
        "theme": "Chủ đề 3. Một số đơn vị đo diện tích",
        "title": "Bài 18. Luyện tập chung",
        "description": "Luyện tập chuyển đổi và tính toán bài toán diện tích thực tế.",
        "duration": "35 phút",
        "isLocked": False,
        "theory": {
            "summary": "Ôn tập Chủ đề 3 Đơn vị đo diện tích.",
            "sections": [
                {
                    "title": "1. Tổng kết kiến thức",
                    "text": "Củng cố mối quan hệ giữa các đơn vị đo diện tích.",
                    "highlights": ["1 ha = 10 000 m2."]
                }
            ]
        },
        "exercises": [
            {
                "id": "t18_q1",
                "type": "short_answer",
                "question": "Một khu rừng hình chữ nhật có chiều dài $2km$, chiều rộng $1.5km$. Diện tích khu rừng là bao nhiêu héc-ta ($ha$)?",
                "answer": "300",
                "explanation": "$S = 2 \\times 1.5 = 3 km^2 = 300 ha$."
            }
        ]
    }
]

print("Math lessons chunk 1 created. Length:", len(math_lessons))
