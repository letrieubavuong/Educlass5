// Modular Curriculum Data for TOÁN
export const toanSubject = {
  "id": "toan",
  "name": "TOÁN",
  "subTitle": "75 Bài học chuẩn: Số thập phân, Hình học, Đo lường & Chuyển động đều",
  "icon": "Calculator",
  "color": "from-blue-500 to-indigo-600",
  "bgColor": "bg-blue-50",
  "borderColor": "border-blue-200",
  "textColor": "text-blue-600",
  "badgeColor": "bg-blue-100 text-blue-800",
  "lessons": [
    {
      "id": "toan-1",
      "theme": "Chủ đề 1. Ôn tập và bổ sung",
      "title": "Bài 1. Ôn tập các số tự nhiên",
      "description": "Ôn tập đọc, viết, so sánh các số tự nhiên.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm",
            "text": "Ôn tập đọc, viết, so sánh các số tự nhiên.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "$1\,000\,000 = 10 \\text{ trăm nghìn}$",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 1. Ôn tập các số tự nhiên. Ôn tập đọc, viết, so sánh các số tự nhiên. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_1_1",
          "type": "mcq",
          "question": "Trong số $5\\,842\\,910$, chữ số $8$ thuộc hàng nào?",
          "explanation": "Chữ số 8 đứng ở hàng trăm nghìn.",
          "options": [
            "Hàng trăm nghìn",
            "Hàng chục nghìn",
            "Hàng triệu",
            "Hàng nghìn"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-2",
      "theme": "Chủ đề 1. Ôn tập và bổ sung",
      "title": "Bài 2. Ôn tập các phép tính với số tự nhiên",
      "description": "Cộng, trừ, nhân, chia số tự nhiên.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 2. Ôn tập các phép tính với số tự nhiên",
            "text": "Cộng, trừ, nhân, chia số tự nhiên.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "a \\times b + a \\times c = a \\times (b + c)",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 2. Ôn tập các phép tính với số tự nhiên. Cộng, trừ, nhân, chia số tự nhiên. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_2_1",
          "type": "short_answer",
          "question": "Tính hợp lý: $25 \\times 38 \\times 4 = ?$",
          "explanation": "3800",
          "answer": "3800"
        }
      ]
    },
    {
      "id": "toan-3",
      "theme": "Chủ đề 1. Ôn tập và bổ sung",
      "title": "Bài 3. Ôn tập phân số",
      "description": "Khái niệm và rút gọn phân số.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 3. Ôn tập phân số. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 3. Ôn tập phân số",
            "text": "Khái niệm và rút gọn phân số.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\dfrac{a}{b} = \\dfrac{a : k}{b : k}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 3. Ôn tập phân số. Khái niệm và rút gọn phân số. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
		"id": "q_3_1",
		"type": "mcq",
		"question": "Rút gọn phân số $\\frac{28}{36}$ về phân số tối giản ta được:",
		"explanation": "Chia cả tử số và mẫu số cho ước chung lớn nhất là 4: $28 : 4 = 7$ và $36 : 4 = 9$. Phân số tối giản là $\\frac{7}{9}$.",
		"options": [
		  "$\\frac{14}{18}$",
		  "$\\frac{7}{9}$",
		  "$\\frac{4}{9}$",
		  "$\\frac{7}{6}$"
		],
		"answerIndex": 1
	  },
	  {
		"id": "q_3_2",
		"type": "mcq",
		"question": "Phân số nào sau đây bằng phân số $\\frac{3}{5}$?",
		"explanation": "Nhân cả tử số và mẫu số của $\\frac{3}{5}$ với 4 ta được $\\frac{3 \\times 4}{5 \\times 4} = \\frac{12}{20}$.",
		"options": [
		  "$\\frac{9}{20}$",
		  "$\\frac{6}{15}$",
		  "$\\frac{12}{20}$",
		  "$\\frac{15}{30}$"
		],
		"answerIndex": 2
	  },
	  {
		"id": "q_3_3",
		"type": "mcq",
		"question": "Phân số nào dưới đây bé hơn 1?",
		"explanation": "Phân số có tử số bé hơn mẫu số thì bé hơn 1. Vì $15 < 16$ nên $\\frac{15}{16} < 1$.",
		"options": [
		  "$\\frac{15}{16}$",
		  "$\\frac{8}{7}$",
		  "$\\frac{20}{20}$",
		  "$\\frac{9}{5}$"
		],
		"answerIndex": 0
	  },
	  {
		"id": "q_3_4",
		"type": "mcq",
		"question": "Quy đồng mẫu số hai phân số $\\frac{2}{3}$ và $\\frac{3}{4}$ với mẫu số chung nhỏ nhất là 12, ta được:",
		"explanation": "$\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$ và $\\frac{3}{4} = \\frac{3 \\times 3}{4 \\times 3} = \\frac{9}{12}$.",
		"options": [
		  "$\\frac{6}{12}$ và $\\frac{8}{12}$",
		  "$\\frac{8}{12}$ và $\\frac{9}{12}$",
		  "$\\frac{5}{12}$ và $\\frac{7}{12}$",
		  "$\\frac{4}{12}$ và $\\frac{9}{12}$"
		],
		"answerIndex": 1
	  },
	  {
		"id": "q_3_5",
		"type": "mcq",
		"question": "Trong các phân số $\\frac{5}{8}$, $\\frac{3}{8}$, $\\frac{7}{8}$, $\\frac{1}{8}$, phân số lớn nhất là:",
		"explanation": "Khi các phân số có cùng mẫu số dương, phân số nào có tử số lớn nhất thì lớn nhất. Vì $7 > 5 > 3 > 1$ nên $\\frac{7}{8}$ lớn nhất.",
		"options": [
		  "$\\frac{1}{8}$",
		  "$\\frac{3}{8}$",
		  "$\\frac{5}{8}$",
		  "$\\frac{7}{8}$"
		],
		"answerIndex": 3
	  },
	  {
		"id": "q_3_6",
		"type": "mcq",
		"question": "Trong các phân số $\\frac{4}{5}$, $\\frac{4}{7}$, $\\frac{4}{3}$, $\\frac{4}{9}$, phân số lớn nhất là:",
		"explanation": "Khi các phân số có cùng tử số, phân số nào có mẫu số bé nhất thì lớn nhất. Vì $3 < 5 < 7 < 9$ nên $\\frac{4}{3}$ là phân số lớn nhất.",
		"options": [
		  "$\\frac{4}{9}$",
		  "$\\frac{4}{7}$",
		  "$\\frac{4}{5}$",
		  "$\\frac{4}{3}$"
		],
		"answerIndex": 3
	  },
	  {
		"id": "q_3_7",
		"type": "mcq",
		"question": "Kết quả của phép tính $\\frac{2}{7} + \\frac{3}{7}$ là:",
		"explanation": "Cộng hai phân số cùng mẫu số: lấy tử số cộng tử số, giữ nguyên mẫu số: $\\frac{2 + 3}{7} = \\frac{5}{7}$.",
		"options": [
		  "$\\frac{5}{14}$",
		  "$\\frac{5}{7}$",
		  "$\\frac{6}{7}$",
		  "$\\frac{6}{49}$"
		],
		"answerIndex": 1
	  },
	  {
		"id": "q_3_8",
		"type": "mcq",
		"question": "Tính: $\\frac{5}{6} - \\frac{1}{4}$",
		"explanation": "Quy đồng mẫu số chung là 12: $\\frac{5 \\times 2}{6 \\times 2} - \\frac{1 \\times 3}{4 \\times 3} = \\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$.",
		"options": [
		  "$\\frac{4}{2}$",
		  "$\\frac{2}{3}$",
		  "$\\frac{7}{12}$",
		  "$\\frac{1}{3}$"
		],
		"answerIndex": 2
	  },
	  {
		"id": "q_3_9",
		"type": "mcq",
		"question": "Kết quả của phép nhân $\\frac{3}{8} \\times \\frac{4}{9}$ sau khi rút gọn là:",
		"explanation": "$\\frac{3 \\times 4}{8 \\times 9} = \\frac{12}{72} = \\frac{1}{6}$.",
		"options": [
		  "$\\frac{1}{6}$",
		  "$\\frac{1}{4}$",
		  "$\\frac{7}{17}$",
		  "$\\frac{2}{3}$"
		],
		"answerIndex": 0
	  },
	  {
		"id": "q_3_10",
		"type": "mcq",
		"question": "Kết quả của phép chia $\\frac{5}{7} : \\frac{2}{3}$ là:",
		"explanation": "Muốn chia hai phân số, ta lấy phân số thứ nhất nhân với phân số thứ hai đảo ngược: $\\frac{5}{7} \\times \\frac{3}{2} = \\frac{15}{14}$.",
		"options": [
		  "$\\frac{10}{21}$",
		  "$\\frac{15}{14}$",
		  "$\\frac{7}{10}$",
		  "$\\frac{14}{15}$"
		],
		"answerIndex": 1
	  },
	  {
		"id": "q_3_11",
		"type": "mcq",
		"question": "Chuyển hỗn số $3\\frac{2}{5}$ thành phân số ta được:",
		"explanation": "Tử số là phần nguyên nhân mẫu số cộng tử số: $3 \\times 5 + 2 = 17$. Giữ nguyên mẫu số: $\\frac{17}{5}$.",
		"options": [
		  "$\\frac{11}{5}$",
		  "$\\frac{13}{5}$",
		  "$\\frac{17}{5}$",
		  "$\\frac{6}{5}$"
		],
		"answerIndex": 2
	  },
	  {
		"id": "q_3_12",
		"type": "mcq",
		"question": "Phân số nào sau đây là phân số thập phân?",
		"explanation": "Phân số thập phân là phân số có mẫu số là 10; 100; 1000;... Trong các lựa chọn, $\\frac{7}{100}$ có mẫu là 100.",
		"options": [
		  "$\\frac{3}{20}$",
		  "$\\frac{7}{100}$",
		  "$\\frac{15}{50}$",
		  "$\\frac{1}{200}$"
		],
		"answerIndex": 1
	  },
	  {
		"id": "q_3_13",
		"type": "mcq",
		"question": "Viết phân số $\\frac{3}{5}$ thành phân số thập phân có mẫu số là 10 ta được:",
		"explanation": "Nhân cả tử số và mẫu số với 2: $\\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10}$.",
		"options": [
		  "$\\frac{6}{10}$",
		  "$\\frac{30}{10}$",
		  "$\\frac{9}{10}$",
		  "$\\frac{5}{10}$"
		],
		"answerIndex": 0
	  },
	  {
		"id": "q_3_14",
		"type": "mcq",
		"question": "Tìm $\\frac{2}{3}$ của 36 quả cam:",
		"explanation": "Muốn tìm phân số của một số, ta lấy số đó nhân với phân số: $36 \\times \\frac{2}{3} = \\frac{72}{3} = 24$ quả cam.",
		"options": [
		  "12 quả",
		  "18 quả",
		  "24 quả",
		  "30 quả"
		],
		"answerIndex": 2
	  },
	  {
		"id": "q_3_15",
		"type": "mcq",
		"question": "Một lớp học có 40 học sinh, trong đó có $\\frac{3}{5}$ số học sinh là nữ. Hỏi lớp đó có bao nhiêu học sinh nam?",
		"explanation": "Số học sinh nữ là: $40 \\times \\frac{3}{5} = 24$ (học sinh). Số học sinh nam là: $40 - 24 = 16$ (học sinh).",
		"options": [
		  "16 học sinh",
		  "24 học sinh",
		  "15 học sinh",
		  "20 học sinh"
		],
		"answerIndex": 0
	  }
      ]
    },
    {
      "id": "toan-4",
      "theme": "Chủ đề 1. Ôn tập và bổ sung",
      "title": "Bài 4. Phân số thập phân",
      "description": "Phân số có mẫu 10, 100, 1000.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 4. Phân số thập phân. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm",
            "text": "Phân số có mẫu 10, 100, 1000.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\frac{3}{5} = \\frac{6}{10}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 4. Phân số thập phân. Phân số có mẫu 10, 100, 1000. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_4_1",
          "type": "mcq",
          "question": "Phân số nào dưới đây là phân số thập phân?",
          "explanation": "Có mẫu là 100.",
          "options": [
            "$\\frac{7}{100}$",
            "$\\frac{3}{25}$",
            "$\\frac{10}{7}$",
            "$\\frac{5}{12}$"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-5",
      "theme": "Chủ đề 1. Ôn tập và bổ sung",
      "title": "Bài 5. Ôn tập các phép tính với phân số",
      "description": "Nhân và chia các phân số.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 5. Ôn tập các phép tính với phân số. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 5. Ôn tập các phép tính với phân số",
            "text": "Nhân và chia các phân số.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\frac{a}{b} : \\frac{c}{d} = \\frac{a \\times d}{b \\times c}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 5. Ôn tập các phép tính với phân số. Nhân và chia các phân số. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_5_1",
          "type": "short_answer",
          "question": "Tính: $\\frac{2}{3} : \\frac{4}{9} = ?$",
          "explanation": "3/2",
          "answer": "3/2"
        }
      ]
    },
    {
      "id": "toan-6",
      "theme": "Chủ đề 1. Ôn tập và bổ sung",
      "title": "Bài 6. Cộng, trừ hai phân số khác mẫu số",
      "description": "Quy đồng mẫu số và tính.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 6. Cộng, trừ hai phân số khác mẫu số. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 6. Cộng, trừ hai phân số khác mẫu số",
            "text": "Quy đồng mẫu số và tính.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\frac{1}{4} + \\frac{2}{3} = \\frac{11}{12}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 6. Cộng, trừ hai phân số khác mẫu số. Quy đồng mẫu số và tính. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_6_1",
          "type": "mcq",
          "question": "Tính: $\\frac{3}{5} + \\frac{1}{2} = ?$",
          "explanation": "Quy đồng mẫu số chung là 10.",
          "options": [
            "$\\frac{11}{10}$",
            "$\\frac{4}{7}$",
            "$\\frac{4}{10}$",
            "$\\frac{7}{10}$"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-7",
      "theme": "Chủ đề 1. Ôn tập và bổ sung",
      "title": "Bài 7. Hỗn số",
      "description": "Khái niệm và đổi hỗn số thành phân số.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 7. Hỗn số. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 7. Hỗn số",
            "text": "Khái niệm và đổi hỗn số thành phân số.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "a\\frac{b}{c} = \\frac{a \\times c + b}{c}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 7. Hỗn số. Khái niệm và đổi hỗn số thành phân số. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_7_1",
          "type": "mcq",
          "question": "Chuyển $3\\frac{2}{5}$ thành phân số:",
          "explanation": "3*5+2 = 17/5.",
          "options": [
            "$\\frac{17}{5}$",
            "$\\frac{11}{5}$",
            "$\\frac{15}{5}$",
            "$\\frac{13}{5}$"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-8",
      "theme": "Chủ đề 1. Ôn tập và bổ sung",
      "title": "Bài 8. Ôn tập hình học và đo lường",
      "description": "Chu vi và diện tích hình chữ nhật, hình vuông.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 8. Ôn tập hình học và đo lường. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 8. Ôn tập hình học và đo lường",
            "text": "Chu vi và diện tích hình chữ nhật, hình vuông.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "P = (a + b) \\times 2 \\quad S = a \\times b",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 8. Ôn tập hình học và đo lường. Chu vi và diện tích hình chữ nhật, hình vuông. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_8_1",
          "type": "short_answer",
          "question": "Hình chữ nhật dài $8m$, rộng $5m$. Diện tích là bao nhiêu $m^2$?",
          "explanation": "S = 8*5 = 40",
          "answer": "40"
        }
      ]
    },
    {
      "id": "toan-9",
      "theme": "Chủ đề 1. Ôn tập và bổ sung",
      "title": "Bài 9. Luyện tập chung",
      "description": "Tổng hợp kiến thức Chủ đề 1.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 9. Luyện tập chung. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 9. Luyện tập chung",
            "text": "Tổng hợp kiến thức Chủ đề 1.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Tổng hợp phép tính}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 9. Luyện tập chung. Tổng hợp kiến thức Chủ đề 1. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_9_1",
          "type": "true_false",
          "question": "Phân số $\\frac{4}{5} > \\frac{3}{4}$. Đúng hay Sai?",
          "explanation": "Đúng! Quy đồng 16/20 > 15/20.",
          "isTrue": true
        }
      ]
    },
    {
      "id": "toan-10",
      "theme": "Chủ đề 2. Số thập phân",
      "title": "Bài 10. Khái niệm số thập phân",
      "description": "Phần nguyên và phần thập phân.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 10. Khái niệm số thập phân. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 10. Khái niệm số thập phân",
            "text": "Phần nguyên và phần thập phân.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "12.35 = 12 + \\frac{3}{10} + \\frac{5}{100}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 10. Khái niệm số thập phân. Phần nguyên và phần thập phân. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_10_1",
          "type": "mcq",
          "question": "Trong số $45.678$, chữ số $7$ ở hàng nào?",
          "explanation": "Thuộc hàng phần trăm.",
          "options": [
            "Hàng phần trăm",
            "Hàng phần mười",
            "Hàng phần nghìn",
            "Hàng đơn vị"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-11",
      "theme": "Chủ đề 2. Số thập phân",
      "title": "Bài 11. So sánh các số thập phân",
      "description": "So sánh hai số thập phân.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 11. So sánh các số thập phân. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 11. So sánh các số thập phân",
            "text": "So sánh hai số thập phân.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "5.8 > 4.9",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 11. So sánh các số thập phân. So sánh hai số thập phân. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_11_1",
          "type": "true_false",
          "question": "$4.500 = 4.5$. Đúng hay Sai?",
          "explanation": "Đúng! Bỏ chữ số 0 ở tận cùng không đổi giá trị.",
          "isTrue": true
        }
      ]
    },
    {
      "id": "toan-12",
      "theme": "Chủ đề 2. Số thập phân",
      "title": "Bài 12. Viết số đo đại lượng dưới dạng số thập phân",
      "description": "Đổi đơn vị đo sang số thập phân.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 12. Viết số đo đại lượng dưới dạng số thập phân. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 12. Viết số đo đại lượng dưới dạng số thập phân",
            "text": "Đổi đơn vị đo sang số thập phân.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "3m \\, 5dm = 3.5m",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 12. Viết số đo đại lượng dưới dạng số thập phân. Đổi đơn vị đo sang số thập phân. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_12_1",
          "type": "short_answer",
          "question": "Viết $5m \\, 8cm$ dưới dạng số thập phân mét ($m$):",
          "explanation": "5m 8cm = 5.08m.",
          "answer": "5.08"
        }
      ]
    },
    {
      "id": "toan-13",
      "theme": "Chủ đề 2. Số thập phân",
      "title": "Bài 13. Làm tròn số thập phân",
      "description": "Quy tắc làm tròn số thập phân.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 13. Làm tròn số thập phân. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 13. Làm tròn số thập phân",
            "text": "Quy tắc làm tròn số thập phân.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Làm tròn } 4.36 \\rightarrow 4.4",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 13. Làm tròn số thập phân. Quy tắc làm tròn số thập phân. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_13_1",
          "type": "mcq",
          "question": "Làm tròn $8.765$ đến hàng phần mười:",
          "explanation": "6 >= 5 nên làm tròn thành 8.8.",
          "options": [
            "$8.8$",
            "$8.7$",
            "$8.77$",
            "$9.0$"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-14",
      "theme": "Chủ đề 2. Số thập phân",
      "title": "Bài 14. Luyện tập chung",
      "description": "Ôn tập tổng hợp Số thập phân.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 14. Luyện tập chung. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 14. Luyện tập chung",
            "text": "Ôn tập tổng hợp Số thập phân.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Luyện tập so sánh & làm tròn}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 14. Luyện tập chung. Ôn tập tổng hợp Số thập phân. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_14_1",
          "type": "short_answer",
          "question": "Số nhỏ nhất trong dãy $3.4; 3.04; 3.44$ là:",
          "explanation": "3.04 nhỏ nhất.",
          "answer": "3.04"
        }
      ]
    },
    {
      "id": "toan-15",
      "theme": "Chủ đề 3. Một số đơn vị đo diện tích",
      "title": "Bài 15. Ki-lô-mét vuông. Héc-ta",
      "description": "Đơn vị đo diện tích $km^2$ và $ha$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 15. Ki-lô-mét vuông. Héc-ta. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 15. Ki-lô-mét vuông. Héc-ta",
            "text": "Đơn vị đo diện tích $km^2$ và $ha$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "1 ha = 10\\,000 m^2",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 15. Ki-lô-mét vuông. Héc-ta. Đơn vị đo diện tích $km^2$ và $ha$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_15_1",
          "type": "short_answer",
          "question": "Đổi $2.5 ha = ? m^2$",
          "explanation": "2.5 * 10000 = 25000.",
          "answer": "25000"
        }
      ]
    },
    {
      "id": "toan-16",
      "theme": "Chủ đề 3. Một số đơn vị đo diện tích",
      "title": "Bài 16. Các đơn vị đo diện tích",
      "description": "Bảng đơn vị đo diện tích.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 16. Các đơn vị đo diện tích. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 16. Các đơn vị đo diện tích",
            "text": "Bảng đơn vị đo diện tích.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "1 m^2 = 100 dm^2",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 16. Các đơn vị đo diện tích. Bảng đơn vị đo diện tích. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_16_1",
          "type": "mcq",
          "question": "Điền số thích hợp: $4 m^2 \\, 5 dm^2 = ? dm^2$",
          "explanation": "4m2 = 400dm2 + 5 = 405.",
          "options": [
            "$405$",
            "$450$",
            "$45$",
            "$4005$"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-17",
      "theme": "Chủ đề 3. Một số đơn vị đo diện tích",
      "title": "Bài 17. Thực hành và trải nghiệm với một số đơn vị đo đại lượng",
      "description": "Ứng dụng đo diện tích thực tế.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 17. Thực hành và trải nghiệm với một số đơn vị đo đại lượng. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 17. Thực hành và trải nghiệm với một số đơn vị đo đại lượng",
            "text": "Ứng dụng đo diện tích thực tế.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Thực hành ước lượng}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 17. Thực hành và trải nghiệm với một số đơn vị đo đại lượng. Ứng dụng đo diện tích thực tế. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_17_1",
          "type": "true_false",
          "question": "Diện tích tỉnh/thành phố dùng đơn vị $km^2$. Đúng hay Sai?",
          "explanation": "Đúng! $km^2$ đo diện tích vùng rộng lớn.",
          "isTrue": true
        }
      ]
    },
    {
      "id": "toan-18",
      "theme": "Chủ đề 3. Một số đơn vị đo diện tích",
      "title": "Bài 18. Luyện tập chung",
      "description": "Luyện tập đơn vị diện tích.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 18. Luyện tập chung. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 18. Luyện tập chung",
            "text": "Luyện tập đơn vị diện tích.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{1 ha = 10 000 m2}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 18. Luyện tập chung. Luyện tập đơn vị diện tích. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_18_1",
          "type": "short_answer",
          "question": "Khu rừng dài $2km$, rộng $1.5km$. Diện tích là bao nhiêu $ha$?",
          "explanation": "2 * 1.5 = 3 km2 = 300 ha.",
          "answer": "300"
        }
      ]
    },
    {
      "id": "toan-19",
      "theme": "Chủ đề 4. Các phép tính với số thập phân",
      "title": "Bài 19. Phép cộng số thập phân",
      "description": "Cộng hai số thập phân đặt tính thẳng cột dấu phẩy.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 19. Phép cộng số thập phân. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 19. Phép cộng số thập phân",
            "text": "Cộng hai số thập phân đặt tính thẳng cột dấu phẩy.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "a + b = b + a",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 19. Phép cộng số thập phân. Cộng hai số thập phân đặt tính thẳng cột dấu phẩy. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_19_1",
          "type": "short_answer",
          "question": "Tính: $12.5 + 8.75 = ?$",
          "explanation": "12.5 + 8.75 = 21.25",
          "answer": "21.25"
        }
      ]
    },
    {
      "id": "toan-20",
      "theme": "Chủ đề 4. Các phép tính với số thập phân",
      "title": "Bài 20. Phép trừ số thập phân",
      "description": "Trừ hai số thập phân.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 20. Phép trừ số thập phân. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 20. Phép trừ số thập phân",
            "text": "Trừ hai số thập phân.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "a - b = c",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 20. Phép trừ số thập phân. Trừ hai số thập phân. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_20_1",
          "type": "short_answer",
          "question": "Tính: $45.8 - 19.35 = ?$",
          "explanation": "45.80 - 19.35 = 26.45",
          "answer": "26.45"
        }
      ]
    },
    {
      "id": "toan-21",
      "theme": "Chủ đề 4. Các phép tính với số thập phân",
      "title": "Bài 21. Phép nhân số thập phân",
      "description": "Nhân hai số thập phân đếm chữ số phần thập phân.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 21. Phép nhân số thập phân. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 21. Phép nhân số thập phân",
            "text": "Nhân hai số thập phân đếm chữ số phần thập phân.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "a \\times b = c",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 21. Phép nhân số thập phân. Nhân hai số thập phân đếm chữ số phần thập phân. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_21_1",
          "type": "mcq",
          "question": "Tính: $2.5 \\times 1.4 = ?$",
          "explanation": "2.5 * 1.4 = 3.5",
          "options": [
            "$3.5$",
            "$3.25$",
            "$3.75$",
            "$3.0$"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-22",
      "theme": "Chủ đề 4. Các phép tính với số thập phân",
      "title": "Bài 22. Phép chia số thập phân",
      "description": "Chia số thập phân cho số tự nhiên và chia hai số thập phân.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 22. Phép chia số thập phân. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 22. Phép chia số thập phân",
            "text": "Chia số thập phân cho số tự nhiên và chia hai số thập phân.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "a : b = c",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 22. Phép chia số thập phân. Chia số thập phân cho số tự nhiên và chia hai số thập phân. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_22_1",
          "type": "short_answer",
          "question": "Tính: $15.6 : 3 = ?$",
          "explanation": "15.6 : 3 = 5.2",
          "answer": "5.2"
        }
      ]
    },
    {
      "id": "toan-23",
      "theme": "Chủ đề 4. Các phép tính với số thập phân",
      "title": "Bài 23. Nhân, chia số thập phân với 10; 100; 1 000;... hoặc với 0,1; 0,01; 0,001;...",
      "description": "Dịch chuyển dấu phẩy sang phải hoặc trái.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 23. Nhân, chia số thập phân với 10; 100; 1 000;... hoặc với 0,1; 0,01; 0,001;.... Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 23. Nhân, chia số thập phân với 10; 100; 1 000;... hoặc với 0,1; 0,01; 0,001;...",
            "text": "Dịch chuyển dấu phẩy sang phải hoặc trái.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "x \\times 10 \\rightarrow \\text{dịch phẩy sang phải 1 hàng}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 23. Nhân, chia số thập phân với 10; 100; 1 000;... hoặc với 0,1; 0,01; 0,001;.... Dịch chuyển dấu phẩy sang phải hoặc trái. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_23_1",
          "type": "mcq",
          "question": "Khi nhân một số thập phân với $0.1$, ta dịch dấu phẩy sang bên nào?",
          "explanation": "Nhân với 0.1 tương đương chia cho 10, dịch phẩy sang trái 1 hàng.",
          "options": [
            "Bên trái 1 hàng",
            "Bên phải 1 hàng",
            "Bên trái 2 hàng",
            "Bên phải 2 hàng"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-24",
      "theme": "Chủ đề 4. Các phép tính với số thập phân",
      "title": "Bài 24. Luyện tập chung",
      "description": "Tổng hợp 4 phép tính số thập phân.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 24. Luyện tập chung. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 24. Luyện tập chung",
            "text": "Tổng hợp 4 phép tính số thập phân.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Luyện tập phép tính số thập phân}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 24. Luyện tập chung. Tổng hợp 4 phép tính số thập phân. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_24_1",
          "type": "short_answer",
          "question": "Tính: $0.5 \\times 4.2 : 0.1 = ?$",
          "explanation": "0.5 * 4.2 = 2.1; 2.1 : 0.1 = 21",
          "answer": "21"
        }
      ]
    },
    {
      "id": "toan-25",
      "theme": "Chủ đề 5. Một số hình phẳng. Chu vi và diện tích",
      "title": "Bài 25. Hình tam giác. Diện tích hình tam giác",
      "description": "Công thức diện tích tam giác $S = \\frac{a \\times h}{2}$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 25. Hình tam giác. Diện tích hình tam giác. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 25. Hình tam giác. Diện tích hình tam giác",
            "text": "Công thức diện tích tam giác $S = \\frac{a \\times h}{2}$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "S = \\frac{a \\times h}{2}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 25. Hình tam giác. Diện tích hình tam giác. Công thức diện tích tam giác $S = \\frac{a \\times h}{2}$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_25_1",
          "type": "short_answer",
          "question": "Tam giác có đáy $12cm$, chiều cao $5cm$. Diện tích là bao nhiêu $cm^2$?",
          "explanation": "S = (12 * 5)/2 = 30 cm2.",
          "answer": "30"
        }
      ]
    },
    {
      "id": "toan-26",
      "theme": "Chủ đề 5. Một số hình phẳng. Chu vi và diện tích",
      "title": "Bài 26. Hình thang. Diện tích hình thang",
      "description": "Công thức diện tích hình thang $S = \\frac{(a + b) \\times h}{2}$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 26. Hình thang. Diện tích hình thang. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 26. Hình thang. Diện tích hình thang",
            "text": "Công thức diện tích hình thang $S = \\frac{(a + b) \\times h}{2}$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "S = \\frac{(a + b) \\times h}{2}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 26. Hình thang. Diện tích hình thang. Công thức diện tích hình thang $S = \\frac{(a + b) \\times h}{2}$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_26_1",
          "type": "short_answer",
          "question": "Hình thang có hai đáy $8cm$ và $6cm$, chiều cao $4cm$. Diện tích là bao nhiêu $cm^2$?",
          "explanation": "S = (8+6)*4/2 = 28 cm2.",
          "answer": "28"
        }
      ]
    },
    {
      "id": "toan-27",
      "theme": "Chủ đề 5. Một số hình phẳng. Chu vi và diện tích",
      "title": "Bài 27. Đường tròn. Chu vi và diện tích hình tròn",
      "description": "Chu vi $C = d \\times 3.14$, diện tích $S = r \\times r \\times 3.14$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 27. Đường tròn. Chu vi và diện tích hình tròn. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 27. Đường tròn. Chu vi và diện tích hình tròn",
            "text": "Chu vi $C = d \\times 3.14$, diện tích $S = r \\times r \\times 3.14$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "C = 2 \\times r \\times 3.14 \\quad S = r \\times r \\times 3.14",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 27. Đường tròn. Chu vi và diện tích hình tròn. Chu vi $C = d \\times 3.14$, diện tích $S = r \\times r \\times 3.14$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_27_1",
          "type": "short_answer",
          "question": "Hình tròn có bán kính $r = 3cm$. Diện tích là bao nhiêu $cm^2$?",
          "explanation": "S = 3 * 3 * 3.14 = 28.26 cm2.",
          "answer": "28.26"
        }
      ]
    },
    {
      "id": "toan-28",
      "theme": "Chủ đề 5. Một số hình phẳng. Chu vi và diện tích",
      "title": "Bài 28. Thực hành và trải nghiệm đo, vẽ, lắp ghép, tạo hình",
      "description": "Thực hành cắt ghép hình phẳng.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 28. Thực hành và trải nghiệm đo, vẽ, lắp ghép, tạo hình. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 28. Thực hành và trải nghiệm đo, vẽ, lắp ghép, tạo hình",
            "text": "Thực hành cắt ghép hình phẳng.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Thực hành cắt ghép hình}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 28. Thực hành và trải nghiệm đo, vẽ, lắp ghép, tạo hình. Thực hành cắt ghép hình phẳng. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_28_1",
          "type": "true_false",
          "question": "Gộp hai tam giác vuông bằng nhau có thể tạo thành một hình chữ nhật. Đúng hay Sai?",
          "explanation": "Đúng! Ghép dọc đường chéo.",
          "isTrue": true
        }
      ]
    },
    {
      "id": "toan-29",
      "theme": "Chủ đề 5. Một số hình phẳng. Chu vi và diện tích",
      "title": "Bài 29. Luyện tập chung",
      "description": "Tổng hợp diện tích tam giác, hình thang, hình tròn.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 29. Luyện tập chung. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 29. Luyện tập chung",
            "text": "Tổng hợp diện tích tam giác, hình thang, hình tròn.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Tổng hợp diện tích}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 29. Luyện tập chung. Tổng hợp diện tích tam giác, hình thang, hình tròn. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_29_1",
          "type": "short_answer",
          "question": "Bán kính hình tròn tăng gấp 2 lần thì diện tích tăng gấp mấy lần?",
          "explanation": "S phụ thuộc r*r nên tăng 2*2 = 4 lần.",
          "answer": "4"
        }
      ]
    },
    {
      "id": "toan-30",
      "theme": "Chủ đề 6. Ôn tập học kì 1",
      "title": "Bài 30. Ôn tập số thập phân",
      "description": "Cấu tạo, so sánh và làm tròn số thập phân.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 30. Ôn tập số thập phân. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 30. Ôn tập số thập phân",
            "text": "Cấu tạo, so sánh và làm tròn số thập phân.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Ôn tập số thập phân}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 30. Ôn tập số thập phân. Cấu tạo, so sánh và làm tròn số thập phân. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_30_1",
          "type": "mcq",
          "question": "Số thập phân gồm có mấy phần chính?",
          "explanation": "Phần nguyên và phần thập phân.",
          "options": [
            "2 phần (Phần nguyên & Phần thập phân)",
            "3 phần",
            "1 phần",
            "4 phần"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-31",
      "theme": "Chủ đề 6. Ôn tập học kì 1",
      "title": "Bài 31. Ôn tập các phép tính với số thập phân",
      "description": "Luyện tập tính nhẩm và đặt tính số thập phân.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 31. Ôn tập các phép tính với số thập phân. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 31. Ôn tập các phép tính với số thập phân",
            "text": "Luyện tập tính nhẩm và đặt tính số thập phân.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Cộng, trừ, nhân, chia số thập phân}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 31. Ôn tập các phép tính với số thập phân. Luyện tập tính nhẩm và đặt tính số thập phân. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_31_1",
          "type": "short_answer",
          "question": "Tính: $3.6 \\times 0.5 = ?$",
          "explanation": "3.6 * 0.5 = 1.8",
          "answer": "1.8"
        }
      ]
    },
    {
      "id": "toan-32",
      "theme": "Chủ đề 6. Ôn tập học kì 1",
      "title": "Bài 32. Ôn tập một số hình phẳng",
      "description": "Nhận biết đặc điểm tam giác, hình thang, đường tròn.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 32. Ôn tập một số hình phẳng. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 32. Ôn tập một số hình phẳng",
            "text": "Nhận biết đặc điểm tam giác, hình thang, đường tròn.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Đặc điểm các hình phẳng}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 32. Ôn tập một số hình phẳng. Nhận biết đặc điểm tam giác, hình thang, đường tròn. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_32_1",
          "type": "true_false",
          "question": "Hình thang có hai cạnh đáy song song với nhau. Đúng hay Sai?",
          "explanation": "Đúng! Định nghĩa hình thang.",
          "isTrue": true
        }
      ]
    },
    {
      "id": "toan-33",
      "theme": "Chủ đề 6. Ôn tập học kì 1",
      "title": "Bài 33. Ôn tập diện tích, chu vi một số hình phẳng",
      "description": "Áp dụng công thức chu vi, diện tích các hình đã học.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 33. Ôn tập diện tích, chu vi một số hình phẳng. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 33. Ôn tập diện tích, chu vi một số hình phẳng",
            "text": "Áp dụng công thức chu vi, diện tích các hình đã học.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "S_{thang} = \\frac{(a+b)h}{2}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 33. Ôn tập diện tích, chu vi một số hình phẳng. Áp dụng công thức chu vi, diện tích các hình đã học. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_33_1",
          "type": "short_answer",
          "question": "Hình vuông có chu vi $20cm$. Diện tích là bao nhiêu $cm^2$?",
          "explanation": "Cạnh = 20/4 = 5cm; S = 5*5 = 25 cm2.",
          "answer": "25"
        }
      ]
    },
    {
      "id": "toan-34",
      "theme": "Chủ đề 6. Ôn tập học kì 1",
      "title": "Bài 34. Ôn tập đo lường",
      "description": "Chuyển đổi đơn vị độ dài, khối lượng, diện tích.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 34. Ôn tập đo lường. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 34. Ôn tập đo lường",
            "text": "Chuyển đổi đơn vị độ dài, khối lượng, diện tích.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Bảng đơn vị đo lường}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 34. Ôn tập đo lường. Chuyển đổi đơn vị độ dài, khối lượng, diện tích. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_34_1",
          "type": "short_answer",
          "question": "Đổi $3 ha = ? m^2$",
          "explanation": "3 * 10000 = 30000.",
          "answer": "30000"
        }
      ]
    },
    {
      "id": "toan-35",
      "theme": "Chủ đề 6. Ôn tập học kì 1",
      "title": "Bài 35. Ôn tập chung",
      "description": "Thi thử tổng hợp Học kì 1.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 35. Ôn tập chung. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 35. Ôn tập chung",
            "text": "Thi thử tổng hợp Học kì 1.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Đề thi tổng hợp Học kì 1}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 35. Ôn tập chung. Thi thử tổng hợp Học kì 1. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_35_1",
          "type": "mcq",
          "question": "Cho biểu thức $A = 2.5 \\times 4 + 1.2$. Giá trị của $A$ là:",
          "explanation": "2.5*4 = 10; 10+1.2 = 11.2.",
          "options": [
            "$11.2$",
            "$10.2$",
            "$12.0$",
            "$9.8$"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-36",
      "theme": "Chủ đề 7. Tỉ số và các bài toán liên quan",
      "title": "Bài 36. Tỉ số. Tỉ số phần trăm",
      "description": "Khái niệm tỉ số $a:b$ và tỉ số phần trăm $\\%$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 36. Tỉ số. Tỉ số phần trăm. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 36. Tỉ số. Tỉ số phần trăm",
            "text": "Khái niệm tỉ số $a:b$ và tỉ số phần trăm $\\%$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "Tỉ\\ số\\ \\% = \\frac{a}{b} \\times 100\\%",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 36. Tỉ số. Tỉ số phần trăm. Khái niệm tỉ số $a:b$ và tỉ số phần trăm $\\%$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_36_1",
          "type": "mcq",
          "question": "Viết phân số $\\frac{3}{4}$ dưới dạng tỉ số phần trăm:",
          "explanation": "3/4 = 0.75 = 75%.",
          "options": [
            "$75\\%$",
            "$50\\%$",
            "$80\\%$",
            "$25\\%$"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-37",
      "theme": "Chủ đề 7. Tỉ số và các bài toán liên quan",
      "title": "Bài 37. Tỉ lệ bản đồ và ứng dụng",
      "description": "Tính độ dài thực tế từ độ dài trên bản đồ tỉ lệ $1:N$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 37. Tỉ lệ bản đồ và ứng dụng. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 37. Tỉ lệ bản đồ và ứng dụng",
            "text": "Tính độ dài thực tế từ độ dài trên bản đồ tỉ lệ $1:N$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Độ dài thực tế = Độ dài bản đồ } \\times N",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 37. Tỉ lệ bản đồ và ứng dụng. Tính độ dài thực tế từ độ dài trên bản đồ tỉ lệ $1:N$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_37_1",
          "type": "short_answer",
          "question": "Bản đồ tỉ lệ $1 : 1000$. Đo quãng đường dài $5cm$. Thực tế dài bao nhiêu mét ($m$)?",
          "explanation": "5 * 1000 cm = 5000 cm = 50m.",
          "answer": "50"
        }
      ]
    },
    {
      "id": "toan-38",
      "theme": "Chủ đề 7. Tỉ số và các bài toán liên quan",
      "title": "Bài 38. Tìm hai số khi biết tổng và tỉ số của hai số đó",
      "description": "Bài toán Tổng - Tỉ.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 38. Tìm hai số khi biết tổng và tỉ số của hai số đó. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 38. Tìm hai số khi biết tổng và tỉ số của hai số đó",
            "text": "Bài toán Tổng - Tỉ.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Giá trị 1 phần = Tổng : Tổng số phần bằng nhau}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 38. Tìm hai số khi biết tổng và tỉ số của hai số đó. Bài toán Tổng - Tỉ. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_38_1",
          "type": "short_answer",
          "question": "Tổng hai số là $50$, tỉ số là $\\frac{2}{3}$. Số bé là bao nhiêu?",
          "explanation": "Tổng số phần = 2+3=5. Số bé = 50/5 * 2 = 20.",
          "answer": "20"
        }
      ]
    },
    {
      "id": "toan-39",
      "theme": "Chủ đề 7. Tỉ số và các bài toán liên quan",
      "title": "Bài 39. Tìm hai số khi biết hiệu và tỉ số của hai số đó",
      "description": "Bài toán Hiệu - Tỉ.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 39. Tìm hai số khi biết hiệu và tỉ số của hai số đó. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 39. Tìm hai số khi biết hiệu và tỉ số của hai số đó",
            "text": "Bài toán Hiệu - Tỉ.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Giá trị 1 phần = Hiệu : Hiệu số phần bằng nhau}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 39. Tìm hai số khi biết hiệu và tỉ số của hai số đó. Bài toán Hiệu - Tỉ. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_39_1",
          "type": "short_answer",
          "question": "Hiệu hai số là $30$, tỉ số là $\\frac{1}{4}$. Số lớn là bao nhiêu?",
          "explanation": "Hiệu phần = 4-1=3. Số lớn = 30/3 * 4 = 40.",
          "answer": "40"
        }
      ]
    },
    {
      "id": "toan-40",
      "theme": "Chủ đề 7. Tỉ số và các bài toán liên quan",
      "title": "Bài 40. Tìm tỉ số phần trăm của hai số",
      "description": "Cách tìm tỉ số % của $a$ và $b$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 40. Tìm tỉ số phần trăm của hai số. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 40. Tìm tỉ số phần trăm của hai số",
            "text": "Cách tìm tỉ số % của $a$ và $b$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "(a : b) \\times 100\\%",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 40. Tìm tỉ số phần trăm của hai số. Cách tìm tỉ số % của $a$ và $b$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_40_1",
          "type": "short_answer",
          "question": "Lớp có $40$ học sinh, trong đó có $10$ học sinh giỏi. Tỉ số % học sinh giỏi là bao nhiêu %?",
          "explanation": "(10/40)*100% = 25%.",
          "answer": "25"
        }
      ]
    },
    {
      "id": "toan-41",
      "theme": "Chủ đề 7. Tỉ số và các bài toán liên quan",
      "title": "Bài 41. Tìm giá trị phần trăm của một số",
      "description": "Tìm $x\\%$ của số $A$ ($A \\times x : 100$).",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 41. Tìm giá trị phần trăm của một số. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 41. Tìm giá trị phần trăm của một số",
            "text": "Tìm $x\\%$ của số $A$ ($A \\times x : 100$).\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "Giá\\ trị = A \\times \\frac{x}{100}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 41. Tìm giá trị phần trăm của một số. Tìm $x\\%$ của số $A$ ($A \\times x : 100$). Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_41_1",
          "type": "short_answer",
          "question": "Tìm $20\\%$ của $150$:",
          "explanation": "150 * 20 / 100 = 30.",
          "answer": "30"
        }
      ]
    },
    {
      "id": "toan-42",
      "theme": "Chủ đề 7. Tỉ số và các bài toán liên quan",
      "title": "Bài 42. Máy tính cầm tay",
      "description": "Sử dụng các phím bấm cộng, trừ, nhân, chia, phần trăm trên máy tính.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 42. Máy tính cầm tay. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 42. Máy tính cầm tay",
            "text": "Sử dụng các phím bấm cộng, trừ, nhân, chia, phần trăm trên máy tính.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Thao tác bấm máy tính}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 42. Máy tính cầm tay. Sử dụng các phím bấm cộng, trừ, nhân, chia, phần trăm trên máy tính. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_42_1",
          "type": "mcq",
          "question": "Phím nào trên máy tính dùng để tính tỉ số phần trăm?",
          "explanation": "Phím %.",
          "options": [
            "\\%",
            "ON/C",
            "+",
            "="
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-43",
      "theme": "Chủ đề 7. Tỉ số và các bài toán liên quan",
      "title": "Bài 43. Thực hành và trải nghiệm sử dụng máy tính cầm tay",
      "description": "Thực hành tính nhanh bằng máy tính.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 43. Thực hành và trải nghiệm sử dụng máy tính cầm tay. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 43. Thực hành và trải nghiệm sử dụng máy tính cầm tay",
            "text": "Thực hành tính nhanh bằng máy tính.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Tính toán nhanh}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 43. Thực hành và trải nghiệm sử dụng máy tính cầm tay. Thực hành tính nhanh bằng máy tính. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_43_1",
          "type": "true_false",
          "question": "Bấm $50 \\times 10\\%$ trên máy tính cho kết quả bằng $5$. Đúng hay Sai?",
          "explanation": "Đúng! 50 * 10% = 5.",
          "isTrue": true
        }
      ]
    },
    {
      "id": "toan-44",
      "theme": "Chủ đề 7. Tỉ số và các bài toán liên quan",
      "title": "Bài 44. Luyện tập chung",
      "description": "Tổng hợp bài toán Tỉ số phần trăm.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 44. Luyện tập chung. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 44. Luyện tập chung",
            "text": "Tổng hợp bài toán Tỉ số phần trăm.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Luyện tập Tỉ số \\%}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 44. Luyện tập chung. Tổng hợp bài toán Tỉ số phần trăm. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_44_1",
          "type": "short_answer",
          "question": "Giá chiếc áo $200\\,000$ đồng, giảm giá $15\\%$. Số tiền được giảm là bao nhiêu đồng?",
          "explanation": "200000 * 15 / 100 = 30000.",
          "answer": "30000"
        }
      ]
    },
    {
      "id": "toan-45",
      "theme": "Chủ đề 8. Thể tích. Đơn vị đo thể tích",
      "title": "Bài 45. Thể tích của một hình",
      "description": "Khái niệm biểu diễn sức chứa của hình không gian.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 45. Thể tích của một hình. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 45. Thể tích của một hình",
            "text": "Khái niệm biểu diễn sức chứa của hình không gian.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Thể tích là khoảng không gian vật chiếm chỗ}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 45. Thể tích của một hình. Khái niệm biểu diễn sức chứa của hình không gian. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_45_1",
          "type": "mcq",
          "question": "Vật nào có thể tích lớn hơn?",
          "explanation": "Quả bóng đá lớn nhất.",
          "options": [
            "Quả bóng đá",
            "Quả bóng bàn",
            "Quả tennis",
            "Quả chanh"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-46",
      "theme": "Chủ đề 8. Thể tích. Đơn vị đo thể tích",
      "title": "Bài 46. Xăng-ti-mét khối. Đề-xi-mét khối",
      "description": "Đơn vị $cm^3$ và $dm^3$. $1 dm^3 = 1000 cm^3$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 46. Xăng-ti-mét khối. Đề-xi-mét khối. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 46. Xăng-ti-mét khối. Đề-xi-mét khối",
            "text": "Đơn vị $cm^3$ và $dm^3$. $1 dm^3 = 1000 cm^3$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "1 dm^3 = 1\\,000 cm^3",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 46. Xăng-ti-mét khối. Đề-xi-mét khối. Đơn vị $cm^3$ và $dm^3$. $1 dm^3 = 1000 cm^3$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_46_1",
          "type": "short_answer",
          "question": "Đổi $4.5 dm^3 = ? cm^3$",
          "explanation": "4.5 * 1000 = 4500.",
          "answer": "4500"
        }
      ]
    },
    {
      "id": "toan-47",
      "theme": "Chủ đề 8. Thể tích. Đơn vị đo thể tích",
      "title": "Bài 47. Mét khối",
      "description": "Đơn vị $m^3$. $1 m^3 = 1000 dm^3 = 1\\,000\\,000 cm^3$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 47. Mét khối. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 47. Mét khối",
            "text": "Đơn vị $m^3$. $1 m^3 = 1000 dm^3 = 1\\,000\\,000 cm^3$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "1 m^3 = 1\\,000 dm^3 = 1\\,000\\,000 cm^3",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 47. Mét khối. Đơn vị $m^3$. $1 m^3 = 1000 dm^3 = 1\\,000\\,000 cm^3$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_47_1",
          "type": "short_answer",
          "question": "Đổi $2 m^3 = ? dm^3$",
          "explanation": "2 * 1000 = 2000.",
          "answer": "2000"
        }
      ]
    },
    {
      "id": "toan-48",
      "theme": "Chủ đề 8. Thể tích. Đơn vị đo thể tích",
      "title": "Bài 48. Luyện tập chung",
      "description": "Chuyển đổi các đơn vị đo thể tích.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 48. Luyện tập chung. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 48. Luyện tập chung",
            "text": "Chuyển đổi các đơn vị đo thể tích.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Bảng đơn vị đo thể tích (gấp 1000 lần)}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 48. Luyện tập chung. Chuyển đổi các đơn vị đo thể tích. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_48_1",
          "type": "mcq",
          "question": "Hai đơn vị đo thể tích liền nhau gấp hoặc kém nhau bao nhiêu lần?",
          "explanation": "Gấp/kém nhau 1000 lần.",
          "options": [
            "1000 lần",
            "100 lần",
            "10 lần",
            "10000 lần"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-49",
      "theme": "Chủ đề 9. Diện tích và thể tích của một số hình khối",
      "title": "Bài 49. Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ",
      "description": "Nhận biết hình khai triển trên mặt phẳng.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 49. Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 49. Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ",
            "text": "Nhận biết hình khai triển trên mặt phẳng.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Hình khai triển hình khối}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 49. Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ. Nhận biết hình khai triển trên mặt phẳng. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_49_1",
          "type": "true_false",
          "question": "Hình lập phương có 6 mặt đều là các hình vuông bằng nhau. Đúng hay Sai?",
          "explanation": "Đúng! 6 mặt vuông bằng nhau.",
          "isTrue": true
        }
      ]
    },
    {
      "id": "toan-50",
      "theme": "Chủ đề 9. Diện tích và thể tích của một số hình khối",
      "title": "Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật",
      "description": "$S_{xq} = P_{đáy} \\times h$, $S_{tp} = S_{xq} + 2 \\times S_{đáy}$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật",
            "text": "$S_{xq} = P_{đáy} \\times h$, $S_{tp} = S_{xq} + 2 \\times S_{đáy}$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "S_{xq} = (a + b) \\times 2 \\times h",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật. $S_{xq} = P_{đáy} \\times h$, $S_{tp} = S_{xq} + 2 \\times S_{đáy}$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_50_1",
          "type": "short_answer",
          "question": "Hình hộp chữ nhật dài $5cm$, rộng $3cm$, cao $4cm$. Diện tích xung quanh là bao nhiêu $cm^2$?",
          "explanation": "Sxq = (5+3)*2 * 4 = 64 cm2.",
          "answer": "64"
        }
      ]
    },
    {
      "id": "toan-51",
      "theme": "Chủ đề 9. Diện tích và thể tích của một số hình khối",
      "title": "Bài 51. Diện tích xung quanh và diện tích toàn phần của hình lập phương",
      "description": "$S_{xq} = a \\times a \\times 4$, $S_{tp} = a \\times a \\times 6$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 51. Diện tích xung quanh và diện tích toàn phần của hình lập phương. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 51. Diện tích xung quanh và diện tích toàn phần của hình lập phương",
            "text": "$S_{xq} = a \\times a \\times 4$, $S_{tp} = a \\times a \\times 6$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "S_{xq} = a^2 \\times 4 \\quad S_{tp} = a^2 \\times 6",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 51. Diện tích xung quanh và diện tích toàn phần của hình lập phương. $S_{xq} = a \\times a \\times 4$, $S_{tp} = a \\times a \\times 6$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_51_1",
          "type": "short_answer",
          "question": "Hình lập phương cạnh $3cm$. Diện tích toàn phần là bao nhiêu $cm^2$?",
          "explanation": "Stp = 3*3*6 = 54 cm2.",
          "answer": "54"
        }
      ]
    },
    {
      "id": "toan-52",
      "theme": "Chủ đề 9. Diện tích và thể tích của một số hình khối",
      "title": "Bài 52. Thể tích của hình hộp chữ nhật",
      "description": "$V = a \\times b \\times c$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 52. Thể tích của hình hộp chữ nhật. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 52. Thể tích của hình hộp chữ nhật",
            "text": "$V = a \\times b \\times c$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "V = a \\times b \\times c",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 52. Thể tích của hình hộp chữ nhật. $V = a \\times b \\times c$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_52_1",
          "type": "short_answer",
          "question": "Hình hộp chữ nhật dài $6cm$, rộng $4cm$, cao $5cm$. Thể tích là bao nhiêu $cm^3$?",
          "explanation": "V = 6 * 4 * 5 = 120 cm3.",
          "answer": "120"
        }
      ]
    },
    {
      "id": "toan-53",
      "theme": "Chủ đề 9. Diện tích và thể tích của một số hình khối",
      "title": "Bài 53. Thể tích của hình lập phương",
      "description": "$V = a \\times a \\times a$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 53. Thể tích của hình lập phương. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 53. Thể tích của hình lập phương",
            "text": "$V = a \\times a \\times a$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "V = a^3",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 53. Thể tích của hình lập phương. $V = a \\times a \\times a$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_53_1",
          "type": "short_answer",
          "question": "Hình lập phương có cạnh $4cm$. Thể tích là bao nhiêu $cm^3$?",
          "explanation": "V = 4*4*4 = 64 cm3.",
          "answer": "64"
        }
      ]
    },
    {
      "id": "toan-54",
      "theme": "Chủ đề 9. Diện tích và thể tích của một số hình khối",
      "title": "Bài 54. Thực hành tính toán và ước lượng thể tích một số hình khối",
      "description": "Thực hành đo bể nước, hộp quà.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 54. Thực hành tính toán và ước lượng thể tích một số hình khối. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 54. Thực hành tính toán và ước lượng thể tích một số hình khối",
            "text": "Thực hành đo bể nước, hộp quà.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Ước lượng thể tích}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 54. Thực hành tính toán và ước lượng thể tích một số hình khối. Thực hành đo bể nước, hộp quà. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_54_1",
          "type": "mcq",
          "question": "Bể nước dạng hình hộp chữ nhật dài $2m$, rộng $1.5m$, cao $1m$. Thể tích nước đầy bể là bao nhiêu $m^3$?",
          "explanation": "V = 2 * 1.5 * 1 = 3 m3.",
          "options": [
            "$3 m^3$",
            "$4.5 m^3$",
            "$6 m^3$",
            "$2.5 m^3$"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-55",
      "theme": "Chủ đề 9. Diện tích và thể tích của một số hình khối",
      "title": "Bài 55. Luyện tập chung",
      "description": "Tổng hợp diện tích và thể tích hình khối.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 55. Luyện tập chung. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 55. Luyện tập chung",
            "text": "Tổng hợp diện tích và thể tích hình khối.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Tổng hợp thể tích hình khối}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 55. Luyện tập chung. Tổng hợp diện tích và thể tích hình khối. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_55_1",
          "type": "short_answer",
          "question": "Cạnh hình lập phương tăng gấp 2 lần thì thể tích tăng gấp mấy lần?",
          "explanation": "V phụ thuộc a*a*a nên tăng 2*2*2 = 8 lần.",
          "answer": "8"
        }
      ]
    },
    {
      "id": "toan-56",
      "theme": "Chủ đề 10. Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều",
      "title": "Bài 56. Các đơn vị đo thời gian",
      "description": "Năm, tháng, ngày, giờ, phút, giây.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 56. Các đơn vị đo thời gian. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 56. Các đơn vị đo thời gian",
            "text": "Năm, tháng, ngày, giờ, phút, giây.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "1 \\text{ giờ} = 60 \\text{ phút} = 3600 \\text{ giây}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 56. Các đơn vị đo thời gian. Năm, tháng, ngày, giờ, phút, giây. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_56_1",
          "type": "short_answer",
          "question": "Đổi $2.5 \\text{ giờ} = ? \\text{ phút}$",
          "explanation": "2.5 * 60 = 150 phút.",
          "answer": "150"
        }
      ]
    },
    {
      "id": "toan-57",
      "theme": "Chủ đề 10. Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều",
      "title": "Bài 57. Cộng trừ số đo thời gian",
      "description": "Tính toán số đo thời gian.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 57. Cộng trừ số đo thời gian. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 57. Cộng trừ số đo thời gian",
            "text": "Tính toán số đo thời gian.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "3 \\text{ giờ } 15 \\text{ phút} + 2 \\text{ giờ } 45 \\text{ phút} = 6 \\text{ giờ}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 57. Cộng trừ số đo thời gian. Tính toán số đo thời gian. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_57_1",
          "type": "short_answer",
          "question": "Tính: $1 \\text{ giờ } 30 \\text{ phút} + 2 \\text{ giờ } 40 \\text{ phút} = ? \\text{ phút}$",
          "explanation": "90 + 160 = 250 phút = 4 giờ 10 phút.",
          "answer": "250"
        }
      ]
    },
    {
      "id": "toan-58",
      "theme": "Chủ đề 10. Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều",
      "title": "Bài 58. Nhân chia số đo thời gian với một số",
      "description": "Nhân chia thời gian với một số tự nhiên.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 58. Nhân chia số đo thời gian với một số. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 58. Nhân chia số đo thời gian với một số",
            "text": "Nhân chia thời gian với một số tự nhiên.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "(1 \\text{ giờ } 15 \\text{ phút}) \\times 3 = 3 \\text{ giờ } 45 \\text{ phút}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 58. Nhân chia số đo thời gian với một số. Nhân chia thời gian với một số tự nhiên. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_58_1",
          "type": "mcq",
          "question": "Tính: $(4 \\text{ giờ } 20 \\text{ phút}) : 2 = ?$",
          "explanation": "4h/2 = 2h, 20p/2 = 10p.",
          "options": [
            "$2 \\text{ giờ } 10 \\text{ phút}$",
            "$2 \\text{ giờ } 20 \\text{ phút}$",
            "$1 \\text{ giờ } 40 \\text{ phút}$",
            "$2 \\text{ giờ } 5 \\text{ phút}$"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-59",
      "theme": "Chủ đề 10. Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều",
      "title": "Bài 59. Vận tốc của một chuyển động đều",
      "description": "Công thức $v = \\frac{s}{t}$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 59. Vận tốc của một chuyển động đều. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 59. Vận tốc của một chuyển động đều",
            "text": "Công thức $v = \\frac{s}{t}$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "v = \\frac{s}{t}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 59. Vận tốc của một chuyển động đều. Công thức $v = \\frac{s}{t}$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_59_1",
          "type": "short_answer",
          "question": "Xe máy đi quãng đường $120km$ trong $3 \\text{ giờ}$. Vận tốc xe máy là bao nhiêu $km/h$?",
          "explanation": "v = 120 / 3 = 40 km/h.",
          "answer": "40"
        }
      ]
    },
    {
      "id": "toan-60",
      "theme": "Chủ đề 10. Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều",
      "title": "Bài 60. Quãng đường, thời gian của một chuyển động đều",
      "description": "$s = v \\times t$, $t = \\frac{s}{v}$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 60. Quãng đường, thời gian của một chuyển động đều. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 60. Quãng đường, thời gian của một chuyển động đều",
            "text": "$s = v \\times t$, $t = \\frac{s}{v}$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "s = v \\times t \\quad t = \\frac{s}{v}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 60. Quãng đường, thời gian của một chuyển động đều. $s = v \\times t$, $t = \\frac{s}{v}$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_60_1",
          "type": "short_answer",
          "question": "Ô tô chạy với vận tốc $60 km/h$ trong $2.5 \\text{ giờ}$. Quãng đường ô tô đi được là bao nhiêu $km$?",
          "explanation": "s = 60 * 2.5 = 150 km.",
          "answer": "150"
        }
      ]
    },
    {
      "id": "toan-61",
      "theme": "Chủ đề 10. Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều",
      "title": "Bài 61. Thực hành tính toán và ước lượng về vận tốc, quãng đường, thời gian trong chuyển động đều",
      "description": "Bài toán thực tế xe đạp, người đi bộ.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 61. Thực hành tính toán và ước lượng về vận tốc, quãng đường, thời gian trong chuyển động đều. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 61. Thực hành tính toán và ước lượng về vận tốc, quãng đường, thời gian trong chuyển động đều",
            "text": "Bài toán thực tế xe đạp, người đi bộ.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Ước lượng vận tốc thực tế}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 61. Thực hành tính toán và ước lượng về vận tốc, quãng đường, thời gian trong chuyển động đều. Bài toán thực tế xe đạp, người đi bộ. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_61_1",
          "type": "mcq",
          "question": "Vận tốc trung bình của người đi bộ thường khoảng bao nhiêu?",
          "explanation": "Đi bộ khoảng 5 km/h.",
          "options": [
            "$5 km/h$",
            "$50 km/h$",
            "$120 km/h$",
            "$0.5 km/h$"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-62",
      "theme": "Chủ đề 10. Số đo thời gian. Vận tốc. Các bài toán liên quan đến chuyển động đều",
      "title": "Bài 62. Luyện tập chung",
      "description": "Tổng hợp bài toán chuyển động đều.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 62. Luyện tập chung. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 62. Luyện tập chung",
            "text": "Tổng hợp bài toán chuyển động đều.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Luyện tập Toán chuyển động}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 62. Luyện tập chung. Tổng hợp bài toán chuyển động đều. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_62_1",
          "type": "short_answer",
          "question": "Hai xe đi ngược chiều từ A và B cách nhau $180km$. Xe 1 chạy $40km/h$, Xe 2 chạy $50km/h$. Sau bao lâu hai xe gặp nhau (giờ)?",
          "explanation": "Thời gian gặp nhau = 180 / (40 + 50) = 2 giờ.",
          "answer": "2"
        }
      ]
    },
    {
      "id": "toan-63",
      "theme": "Chủ đề 11. Một số yếu tố thống kê và xác suất",
      "title": "Bài 63. Thu thập, phân loại, sắp xếp các số liệu",
      "description": "Bảng số liệu thống kê.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 63. Thu thập, phân loại, sắp xếp các số liệu. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 63. Thu thập, phân loại, sắp xếp các số liệu",
            "text": "Bảng số liệu thống kê.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Thu thập và phân loại số liệu}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 63. Thu thập, phân loại, sắp xếp các số liệu. Bảng số liệu thống kê. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_63_1",
          "type": "mcq",
          "question": "Mục đích của việc sắp xếp số liệu thống kê là gì?",
          "explanation": "Giúp quan sát và phân tích dễ dàng.",
          "options": [
            "Để dễ quan sát, phân tích và so sánh",
            "Để làm bài dài hơn",
            "Không có tác dụng",
            "Để giấu bớt số liệu"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-64",
      "theme": "Chủ đề 11. Một số yếu tố thống kê và xác suất",
      "title": "Bài 64. Biểu đồ hình quạt tròn",
      "description": "Đọc và phân tích biểu đồ quạt tròn (tỉ lệ %).",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 64. Biểu đồ hình quạt tròn. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 64. Biểu đồ hình quạt tròn",
            "text": "Đọc và phân tích biểu đồ quạt tròn (tỉ lệ %).\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Biểu đồ hình quạt tròn biểu diễn 100\\%}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 64. Biểu đồ hình quạt tròn. Đọc và phân tích biểu đồ quạt tròn (tỉ lệ %). Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_64_1",
          "type": "short_answer",
          "question": "Biểu đồ quạt tròn biểu diễn các môn thể thao: Bóng đá $50\\%$, Cầu lông $30\\%$, Bơi lội $20\\%$. Nếu có $100$ học sinh thì có bao nhiêu em thích Cầu lông?",
          "explanation": "100 * 30% = 30 em.",
          "answer": "30"
        }
      ]
    },
    {
      "id": "toan-65",
      "theme": "Chủ đề 11. Một số yếu tố thống kê và xác suất",
      "title": "Bài 65. Tỉ số của số lần lặp lại một sự kiện so với tổng số lần thực hiện",
      "description": "Xác suất thực nghiệm.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 65. Tỉ số của số lần lặp lại một sự kiện so với tổng số lần thực hiện. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 65. Tỉ số của số lần lặp lại một sự kiện so với tổng số lần thực hiện",
            "text": "Xác suất thực nghiệm.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "Tỉ\\ số = \\frac{\\text{Số lần xuất hiện}}{\\text{Tổng số lần thử}}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 65. Tỉ số của số lần lặp lại một sự kiện so với tổng số lần thực hiện. Xác suất thực nghiệm. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_65_1",
          "type": "short_answer",
          "question": "Tung đồng xu $20$ lần, thấy mặt Nửa xuất hiện $12$ lần. Tỉ số xuất hiện mặt Nửa là bao nhiêu (viết phân số tối giản ví dụ 3/5)?",
          "explanation": "12/20 = 3/5.",
          "answer": "3/5"
        }
      ]
    },
    {
      "id": "toan-66",
      "theme": "Chủ đề 11. Một số yếu tố thống kê và xác suất",
      "title": "Bài 66. Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê",
      "description": "Thực hành điều tra sở thích học sinh.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 66. Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 66. Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê",
            "text": "Thực hành điều tra sở thích học sinh.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Thu thập số liệu lớp học}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 66. Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê. Thực hành điều tra sở thích học sinh. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_66_1",
          "type": "true_false",
          "question": "Tổng các tỉ số phần trăm trên biểu đồ quạt tròn luôn bằng $100\\%$. Đúng hay Sai?",
          "explanation": "Đúng! Biểu đồ tròn biểu diễn 100% toàn thể.",
          "isTrue": true
        }
      ]
    },
    {
      "id": "toan-67",
      "theme": "Chủ đề 11. Một số yếu tố thống kê và xác suất",
      "title": "Bài 67. Luyện tập chung",
      "description": "Tổng hợp Thống kê và Xác suất.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 67. Luyện tập chung. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 67. Luyện tập chung",
            "text": "Tổng hợp Thống kê và Xác suất.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Luyện tập Thống kê}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 67. Luyện tập chung. Tổng hợp Thống kê và Xác suất. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_67_1",
          "type": "mcq",
          "question": "Rút 1 lá thăm từ hộp có 5 thăm đỏ và 5 thăm xanh. Khả năng rút được thăm đỏ là bao nhiêu %?",
          "explanation": "5/10 = 50%.",
          "options": [
            "$50\\%$",
            "$25\\%$",
            "$100\\%$",
            "$10\\%$"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-68",
      "theme": "Chủ đề 12. Ôn tập cuối năm",
      "title": "Bài 68. Ôn tập số tự nhiên, phân số, số thập phân",
      "description": "Tổng hợp kiến thức về số.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 68. Ôn tập số tự nhiên, phân số, số thập phân. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 68. Ôn tập số tự nhiên, phân số, số thập phân",
            "text": "Tổng hợp kiến thức về số.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Hệ thống các tập hợp số}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 68. Ôn tập số tự nhiên, phân số, số thập phân. Tổng hợp kiến thức về số. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_68_1",
          "type": "mcq",
          "question": "Số nào dưới đây lớn nhất?",
          "explanation": "10.01 có phần nguyên 10 và phần mười 0.01 > 10.009.",
          "options": [
            "$9.99$",
            "$10.01$",
            "$9.999$",
            "$10.009$"
          ],
          "answerIndex": 1
        }
      ]
    },
    {
      "id": "toan-69",
      "theme": "Chủ đề 12. Ôn tập cuối năm",
      "title": "Bài 69. Ôn tập các phép tính với số tự nhiên, phân số, số thập phân",
      "description": "Ôn tập 4 phép tính.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 69. Ôn tập các phép tính với số tự nhiên, phân số, số thập phân. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 69. Ôn tập các phép tính với số tự nhiên, phân số, số thập phân",
            "text": "Ôn tập 4 phép tính.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Các phép tính số học}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 69. Ôn tập các phép tính với số tự nhiên, phân số, số thập phân. Ôn tập 4 phép tính. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_69_1",
          "type": "short_answer",
          "question": "Tính: $0.25 \\times 3.8 \\times 4 = ?$",
          "explanation": "(0.25 * 4) * 3.8 = 1 * 3.8 = 3.8",
          "answer": "3.8"
        }
      ]
    },
    {
      "id": "toan-70",
      "theme": "Chủ đề 12. Ôn tập cuối năm",
      "title": "Bài 70. Ôn tập tỉ số, tỉ số phần trăm",
      "description": "Ôn tập các bài toán Tỉ số %.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 70. Ôn tập tỉ số, tỉ số phần trăm. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 70. Ôn tập tỉ số, tỉ số phần trăm",
            "text": "Ôn tập các bài toán Tỉ số %.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Ứng dụng Tỉ số phần trăm}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 70. Ôn tập tỉ số, tỉ số phần trăm. Ôn tập các bài toán Tỉ số %. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_70_1",
          "type": "short_answer",
          "question": "Lớp $5A$ có $32$ học sinh, $75\\%$ là học sinh khá giỏi. Số học sinh khá giỏi là:",
          "explanation": "32 * 75 / 100 = 24.",
          "answer": "24"
        }
      ]
    },
    {
      "id": "toan-71",
      "theme": "Chủ đề 12. Ôn tập cuối năm",
      "title": "Bài 71. Ôn tập hình học",
      "description": "Hình phẳng và Hình khối.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 71. Ôn tập hình học. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 71. Ôn tập hình học",
            "text": "Hình phẳng và Hình khối.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "S = a \\times b \\quad V = a \\times b \\times c",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 71. Ôn tập hình học. Hình phẳng và Hình khối. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_71_1",
          "type": "mcq",
          "question": "Hình nào dưới đây có thể tích?",
          "explanation": "Hình lập phương là hình khối trong không gian.",
          "options": [
            "Hình lập phương",
            "Hình vuông",
            "Hình tam giác",
            "Hình tròn"
          ],
          "answerIndex": 0
        }
      ]
    },
    {
      "id": "toan-72",
      "theme": "Chủ đề 12. Ôn tập cuối năm",
      "title": "Bài 72. Ôn tập đo lường",
      "description": "Đo độ dài, khối lượng, diện tích, thể tích.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 72. Ôn tập đo lường. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 72. Ôn tập đo lường",
            "text": "Đo độ dài, khối lượng, diện tích, thể tích.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Hệ thống bảng đo lường}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 72. Ôn tập đo lường. Đo độ dài, khối lượng, diện tích, thể tích. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_72_1",
          "type": "short_answer",
          "question": "Đổi $1.2 m^3 = ? dm^3$",
          "explanation": "1.2 * 1000 = 1200.",
          "answer": "1200"
        }
      ]
    },
    {
      "id": "toan-73",
      "theme": "Chủ đề 12. Ôn tập cuối năm",
      "title": "Bài 73. Ôn tập toán chuyển động đều",
      "description": "Công thức $s = v \\times t$.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 73. Ôn tập toán chuyển động đều. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 73. Ôn tập toán chuyển động đều",
            "text": "Công thức $s = v \\times t$.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "s = v \\times t",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 73. Ôn tập toán chuyển động đều. Công thức $s = v \\times t$. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_73_1",
          "type": "short_answer",
          "question": "Ca nô đi với vận tốc $30 km/h$ trong $1.5 \\text{ giờ}$. Quãng đường ca nô đi được là bao nhiêu $km$?",
          "explanation": "s = 30 * 1.5 = 45 km.",
          "answer": "45"
        }
      ]
    },
    {
      "id": "toan-74",
      "theme": "Chủ đề 12. Ôn tập cuối năm",
      "title": "Bài 74. Ôn tập một số yếu tố thống kê và xác suất",
      "description": "Đọc biểu đồ và tính xác suất.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 74. Ôn tập một số yếu tố thống kê và xác suất. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 74. Ôn tập một số yếu tố thống kê và xác suất",
            "text": "Đọc biểu đồ và tính xác suất.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Ôn tập Thống kê & Xác suất}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 74. Ôn tập một số yếu tố thống kê và xác suất. Đọc biểu đồ và tính xác suất. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_74_1",
          "type": "true_false",
          "question": "Tỉ số số lần lặp lại sự kiện luôn nằm trong khoảng từ $0\\%$ đến $100\\%$. Đúng hay Sai?",
          "explanation": "Đúng! Xác suất không vượt quá 100%.",
          "isTrue": true
        }
      ]
    },
    {
      "id": "toan-75",
      "theme": "Chủ đề 12. Ôn tập cuối năm",
      "title": "Bài 75. Ôn tập chung",
      "description": "Tổng ôn toàn bộ chương trình Toán Lớp 5.",
      "duration": "35 phút",
      "isLocked": false,
      "theory": {
        "summary": "Trọng tâm kiến thức Bài 75. Ôn tập chung. Nắm vững khái niệm và quy tắc tính toán.",
        "sections": [
          {
            "title": "1. Lý thuyết trọng tâm Bài 75. Ôn tập chung",
            "text": "Tổng ôn toàn bộ chương trình Toán Lớp 5.\nÁp dụng linh hoạt các công thức và quy tắc toán học Lớp 5.",
            "formula": "\\text{Chúc các em đạt kết quả xuất sắc! 🎉}",
            "highlights": [
              "Đọc kỹ đề bài trước khi tính toán",
              "Chú ý ghi rõ đơn vị đo"
            ]
          }
        ],
        "audioText": "Trọng tâm kiến thức Bài 75. Ôn tập chung. Tổng ôn toàn bộ chương trình Toán Lớp 5. Áp dụng linh hoạt các công thức toán học."
      },
      "exercises": [
        {
          "id": "q_75_1",
          "type": "mcq",
          "question": "Học sinh hoàn thành xuất sắc chương trình Toán Lớp 5 sẽ nhận được danh hiệu gì?",
          "explanation": "Danh hiệu Trạng Nguyên Toán Học!",
          "options": [
            "Trạng Nguyên Toán Học 🥇",
            "Học sinh giỏi",
            "Thám Hoa 🥉",
            "Bảng Nhãn 🥈"
          ],
          "answerIndex": 0
        }
      ]
    }
  ]
};
