// Modular Data for ĐẤU TRƯỜNG TIN HỌC TRẺ
export const dautruongTinhocSubject = {
  "id": "dautruong-tinhoc",
  "name": "ĐẤU TRƯỜNG TIN HỌC TRẺ",
  "subTitle": "Bộ đề thi luyện tập nâng cao Tin học trẻ cấp Trường, Quận/Huyện & Tỉnh (Thuật toán, Scratch, Python & Tư duy Máy tính)",
  "icon": "Terminal",
  "color": "from-indigo-600 via-blue-600 to-cyan-500",
  "bgColor": "bg-indigo-50",
  "borderColor": "border-indigo-200",
  "textColor": "text-indigo-600",
  "badgeColor": "bg-indigo-100 text-indigo-800",
  "lessons": [
    {
      "id": "dt-th-1",
      "theme": "Vòng 1. Thi Cấp Trường & Sơ Loại",
      "title": "Đề số 1: Kiến thức Máy tính, Hệ điều hành & Logic Scratch",
      "description": "Bộ đề thi 10 câu hỏi nâng cao kiểm tra tư duy thuật toán, cấu trúc điều kiện, vòng lặp và phím tắt máy tính.",
      "duration": "40 phút",
      "isLocked": false,
      "theory": {
        "summary": "🏆 Bí kíp ôn thi Đấu trường Tin học trẻ Cấp Trường: Nắm chắc các nhóm lệnh Scratch (Motion, Look, Event, Control, Sensing, Operators, Variables) và thuật toán lặp.",
        "sections": [
          {
            "title": "1. Trọng tâm thuật toán Scratch",
            "text": "• Khối lệnh `repeat (N)` và `repeat until <điều kiện>`: Thực hiện lặp lại hành động.\n• Khối lệnh `if <điều kiện> then ... else`: Rẽ nhánh điều kiện logic.\n• Biến số (Variable): Lưu trữ giá trị điểm, số lần lặp hoặc kết quả tính toán.",
            "highlights": [
              "Vòng lặp lồng nhau",
              "Biến số & Danh sách (List)",
              "Tọa độ X, Y trong Scratch"
            ]
          },
          {
            "title": "2. Phím tắt & Thao tác hệ điều hành",
            "text": "Nhớ kỹ các phím tắt quản lý tệp: Ctrl+C (Sao chép), Ctrl+V (Dán), Ctrl+Z (Undo), Alt+F4 (Đóng cửa sổ), Windows+E (Mở File Explorer).",
            "highlights": [
              "Phím tắt Windows",
              "An toàn thông tin Internet"
            ]
          }
        ],
        "audioText": "Bí kíp ôn thi Đấu trường Tin học trẻ Cấp Trường. Nắm chắc các nhóm lệnh Scratch và thuật toán lặp."
      },
      "exercises": [
        {
          "id": "dt_th_q1",
          "type": "mcq",
          "question": "Trong phần mềm Scratch, nhân vật ban đầu ở vị trí (x: 0, y: 0). Sau khi thực hiện khối lệnh: `change x by 50`, `change y by -30`, vị trí mới của nhân vật là bao nhiêu?",
          "options": [
            "x = 50, y = -30",
            "x = -50, y = 30",
            "x = 50, y = 30",
            "x = 0, y = 0"
          ],
          "answerIndex": 0,
          "explanation": "Ban đầu x=0, change x by 50 -> x=50. Ban đầu y=0, change y by -30 -> y=-30. Vị trí mới là (50, -30)."
        },
        {
          "id": "dt_th_q2",
          "type": "matching",
          "skillLabel": "🧩 NỐI KHỐI LỆNH SCRATCH VỚI Ý NGHĨA THUẬT TOÁN",
          "question": "Nối từng khối lệnh Scratch ở Cột A với chức năng tương ứng ở Cột B:",
          "pairs": [
            { "left": "when green flag clicked", "right": "Sự kiện khởi chạy chương trình Scratch" },
            { "left": "repeat 4 [ move 100 steps, turn right 90 degrees ]", "right": "Vẽ hình vuông cạnh 100 bước" },
            { "left": "set [Điểm số] to 0", "right": "Khởi tạo giá trị biến Điểm số bằng 0" },
            { "left": "ask [Nhập số A:] and wait", "right": "Nhận dữ liệu đầu vào từ người dùng" }
          ],
          "explanation": "Góc quay 90 độ lặp 4 lần tạo thành hình vuông. Green flag bắt đầu kịch bản."
        },
        {
          "id": "dt_th_q3",
          "type": "blank",
          "question": "Đoạn mã sau tính tổng các số từ 1 đến 5: `Tong = 0`; lặp `i` từ 1 đến 5 thì `Tong = Tong + i`. Giá trị cuối cùng của biến `Tong` là bao nhiêu? (Điền đáp án dạng số)",
          "answer": "15",
          "explanation": "Tổng = 1 + 2 + 3 + 4 + 5 = 15."
        },
        {
          "id": "dt_th_q4",
          "type": "tf",
          "question": "Trong tư duy lập trình Tin học trẻ, thuật toán sắp xếp tăng dần sẽ đưa số nhỏ hơn lên phía trước số lớn hơn. Đúng hay Sai?",
          "isTrue": true,
          "explanation": "Đúng! Thứ tự tăng dần nghĩa là số nhỏ xếp trước, số lớn xếp sau."
        },
        {
          "id": "dt_th_q5",
          "type": "mcq",
          "question": "Bạn An viết một thuật toán kiểm tra số chẵn hay số lẻ bằng cách lấy số đó chia cho 2. Phép toán lấy phần dư trong Scratch là gì?",
          "options": [
            "mod (ví dụ: N mod 2)",
            "join",
            "round",
            "length of"
          ],
          "answerIndex": 0,
          "explanation": "Trong Scratch, phép toán `mod` trả về phần dư của phép chia. N mod 2 = 0 là số chẵn."
        }
      ]
    },
    {
      "id": "dt-th-2",
      "theme": "Vòng 2. Thi Cấp Quận / Huyện",
      "title": "Đề số 2: Thuật toán Vẽ Hình Quy luật & Đếm Số nâng cao",
      "description": "Đề thi chính thức vinh danh học sinh giỏi Tin học trẻ cấp Quận/Huyện với các bài toán vẽ hình đa giác, thuật toán dãy số.",
      "duration": "45 phút",
      "isLocked": false,
      "theory": {
        "summary": "🏆 Công thức vẽ đa giác đều N cạnh trong Scratch: Góc quay = 360 / N. Ví dụ: Tam giác đều quay 120°, Ngũ giác đều quay 72°, Lục giác đều quay 60°.",
        "sections": [
          {
            "title": "1. Công thức quay góc vẽ đa giác",
            "text": "• Tam giác đều (3 cạnh): Quay 360 / 3 = 120 độ.\n• Hình vuông (4 cạnh): Quay 360 / 4 = 90 độ.\n• Ngũ giác đều (5 cạnh): Quay 360 / 5 = 72 độ.\n• Lục giác đều (6 cạnh): Quay 360 / 6 = 60 độ.\n• Hình tròn: Lặp 360 lần (di chuyển 1 bước, quay 1 độ).",
            "highlights": [
              "Tổng các góc ngoài của đa giác là 360 độ",
              "Thuật toán vẽ bông hoa 6 cánh (Lặp 6 lần hình thoi hoặc hình tròn)"
            ]
          }
        ],
        "audioText": "Công thức vẽ đa giác đều N cạnh trong Scratch. Góc quay bằng 360 chia N."
      },
      "exercises": [
        {
          "id": "dt_th_2_q1",
          "type": "mcq",
          "question": "Để vẽ một Ngũ giác đều (hình 5 cạnh bằng nhau) trong Scratch, nhân vật cần rẽ một góc bao nhiêu độ sau mỗi cạnh?",
          "options": [
            "72 độ",
            "60 độ",
            "90 độ",
            "108 độ"
          ],
          "answerIndex": 0,
          "explanation": "Góc quay ngoài = 360 / 5 = 72 độ."
        },
        {
          "id": "dt_th_2_q2",
          "type": "blank",
          "question": "Cho dãy số quy luật: 2, 4, 8, 16, 32, ... Số tiếp theo của dãy số này là bao nhiêu?",
          "answer": "64",
          "explanation": "Mỗi số đằng sau gấp đôi số liền trước: 32 x 2 = 64."
        },
        {
          "id": "dt_th_2_q3",
          "type": "matching",
          "skillLabel": "🧩 NỐI THUẬT TOÁN TOÁN HỌC VỚI CÂU LỆNH TIN HỌC",
          "question": "Nối các bài toán thực tế ở Cột A với biểu thức tương ứng ở Cột B:",
          "pairs": [
            { "left": "Kiểm tra N có phải là số chia hết cho 5", "right": "N mod 5 = 0" },
            { "left": "Tính chu vi hình tròn bán kính R", "right": "2 * 3.14 * R" },
            { "left": "Tính tổng dãy số từ 1 đến N", "right": "N * (N + 1) / 2" },
            { "left": "Ghép hai chuỗi văn bản Ho và Ten", "right": "join (Ho) (Ten)" }
          ],
          "explanation": "Phép toán mod kiểm tra chia hết. Công thức tính chu vi và tổng dãy số tự nhiên."
        }
      ]
    },
    {
      "id": "dt-th-3",
      "theme": "Vòng 3. Thi Cấp Tỉnh / Thành Phố",
      "title": "Đề số 3: Đề thi Học sinh giỏi Tin học trẻ Toàn Quốc (Bảng A)",
      "description": "Các bài toán chuyên sâu về cấu trúc dữ liệu Mảng/List, bài toán tối ưu và thuật toán tìm số nguyên tố.",
      "duration": "60 phút",
      "isLocked": false,
      "theory": {
        "summary": "🏆 Kiến thức nâng cao Bảng A Tin học trẻ: Sử dụng Danh sách (List), Thuật toán tìm Giá trị lớn nhất (Max) / nhỏ nhất (Min) và Đếm tần suất xuất hiện.",
        "sections": [
          {
            "title": "1. Thuật toán tìm MAX trong Danh sách",
            "text": "1. Đặt Max = Phần tử thứ 1 của danh sách.\n2. Duyệt từ phần tử thứ 2 đến cuối danh sách.\n3. Nếu phần tử i > Max thì gán Max = phần tử i.\n4. Sau khi duyệt xong, Max chính là số lớn nhất.",
            "highlights": [
              "Duyệt danh sách bằng vòng lặp count",
              "Khái niệm thuật toán tối ưu"
            ]
          }
        ],
        "audioText": "Thuật toán tìm Max trong danh sách. Đặt Max bằng phần tử thứ nhất rồi so sánh với các phần tử tiếp theo."
      },
      "exercises": [
        {
          "id": "dt_th_3_q1",
          "type": "mcq",
          "question": "Cho Danh sách A gồm các số: [12, 45, 8, 99, 23]. Sau khi chạy thuật toán tìm MAX, kết quả biến MAX thu được là bao nhiêu?",
          "options": [
            "99",
            "45",
            "12",
            "8"
          ],
          "answerIndex": 0,
          "explanation": "Số lớn nhất trong danh sách [12, 45, 8, 99, 23] là 99."
        },
        {
          "id": "dt_th_3_q2",
          "type": "blank",
          "question": "Số nguyên tố là số tự nhiên lớn hơn 1 chỉ chia hết cho 1 và chính nó. Số nguyên tố nhỏ nhất là số mấy?",
          "answer": "2",
          "explanation": "Số 2 là số nguyên tố nhỏ nhất và cũng là số nguyên tố chẵn duy nhất."
        }
      ]
    }
  ]
};
