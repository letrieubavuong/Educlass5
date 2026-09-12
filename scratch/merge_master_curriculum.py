import json
import re

# Load math subject
from generate_all_math_lessons import toan_subject

# Load vietnamese subject
with open(r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\scratch\tv_lessons.json", "r", encoding="utf-8") as f:
    tiengviet_subject = json.load(f)

# Load english & informatics subjects
with open(r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\scratch\eng_th.json", "r", encoding="utf-8") as f:
    eng_th_data = json.load(f)
    tienganh_subject = eng_th_data["tienganh"]
    tinhoc_subject = eng_th_data["tinhoc"]

# Read existing curriculumData.js to extract Science (khoahoc) object block
with open(r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\src\data\curriculumData.js", "r", encoding="utf-8") as f:
    orig_text = f.read()

kh_start = orig_text.find("id: 'khoahoc'")
if kh_start != -1:
    brace_start = orig_text.rfind("{", 0, kh_start)
    th_start = orig_text.find("id: 'tinhoc'", kh_start)
    if th_start != -1:
        brace_end = orig_text.rfind("}", 0, th_start)
        kh_block = orig_text[brace_start:brace_end+1].strip()
    else:
        arr_end = orig_text.rfind("];")
        kh_block = orig_text[brace_start:arr_end].strip()
        if kh_block.endswith(","):
            kh_block = kh_block[:-1]
else:
    kh_block = ""

lichsu_subject = {
    "id": "lichsudialy",
    "name": "LỊCH SỬ & ĐỊA LÝ",
    "subTitle": "Địa lý Việt Nam, Lịch sử dựng nước & giữ nước, Địa lý Thế giới",
    "icon": "Landmark",
    "color": "from-amber-500 to-orange-600",
    "bgColor": "bg-amber-50",
    "borderColor": "border-amber-200",
    "textColor": "text-amber-600",
    "badgeColor": "bg-amber-100 text-amber-800",
    "lessons": [
        {
            "id": "ls-1",
            "title": "Bài 1: Vị trí địa lý và lãnh thổ Việt Nam",
            "description": "Vị trí địa lý Việt Nam trên bản đồ thế giới, vùng biển, vùng trời và các quần đảo Hoàng Sa, Trường Sa.",
            "duration": "35 phút",
            "isLocked": False,
            "theory": {
                "summary": "Việt Nam nằm ở bán đảo Đông Dương, thuộc khu vực Đông Nam Á. Đất nước ta gồm vùng đất, vùng biển và vùng trời.",
                "sections": [
                    {
                        "title": "1. Lãnh thổ Việt Nam",
                        "text": "Phần đất liền hình chữ S, đường bờ biển dài 3 260 km từ Móng Cái đến Hà Tiên. Quần đảo Hoàng Sa và Trường Sa là của Việt Nam.",
                        "highlights": ["Việt Nam có đường bờ biển dài 3 260 km."]
                    }
                ]
            },
            "exercises": [
                {
                    "id": "ls1_q1",
                    "type": "mcq",
                    "question": "Phần đất liền của nước ta có hình dạng giống chữ cái nào?",
                    "options": ["Chữ S", "Chữ C", "Chữ V", "Chữ L"],
                    "answerIndex": 0,
                    "explanation": "Đất liền Việt Nam có hình dạng dải đất hình chữ S."
                }
            ]
        }
    ]
}

header = """// Grade 5 Curriculum Data across 6 main subjects with 2 Tabs (Theory & Exercises)
// Exercise types: mcq, true_false, fill_blank, short_answer, speaking, listening
// English skills: listening (Nghe), speaking (Nói), reading (Đọc), writing (Viết)

export const SUBJECTS = [
"""

toan_json = json.dumps(toan_subject, ensure_ascii=False, indent=2)
tv_json = json.dumps(tiengviet_subject, ensure_ascii=False, indent=2)
eng_json = json.dumps(tienganh_subject, ensure_ascii=False, indent=2)
th_json = json.dumps(tinhoc_subject, ensure_ascii=False, indent=2)
ls_json = json.dumps(lichsu_subject, ensure_ascii=False, indent=2)

final_js = header + toan_json + ",\n" + tv_json + ",\n" + eng_json + ",\n" + kh_block + ",\n" + th_json + ",\n" + ls_json + "\n];\n"

with open(r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\src\data\curriculumData.js", "w", encoding="utf-8") as f:
    f.write(final_js)

print("Master curriculumData.js updated successfully! Total size:", len(final_js))
