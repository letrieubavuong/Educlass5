import json

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

# Load history & geography subject
with open(r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\scratch\ls_lessons.json", "r", encoding="utf-8") as f:
    lichsu_subject = json.load(f)

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

print("FINAL Master curriculumData.js updated successfully! Total file size:", len(final_js))
