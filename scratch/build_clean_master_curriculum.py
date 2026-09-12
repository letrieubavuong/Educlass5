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

# Load science subject
with open(r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\scratch\khoahoc_clean.json", "r", encoding="utf-8") as f:
    khoahoc_subject = json.load(f)

# Load history & geography subject
with open(r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\scratch\ls_lessons.json", "r", encoding="utf-8") as f:
    lichsu_subject = json.load(f)

header = """// Grade 5 Curriculum Data across 6 main subjects with 2 Tabs (Theory & Exercises)
// Exercise types: mcq, true_false, fill_blank, short_answer, speaking, listening
// English skills: listening (Nghe), speaking (Nói), reading (Đọc), writing (Viết)

export const SUBJECTS = [
"""

subjects_list = [
    toan_subject,
    tiengviet_subject,
    tienganh_subject,
    khoahoc_subject,
    tinhoc_subject,
    lichsu_subject
]

json_blocks = [json.dumps(s, ensure_ascii=False, indent=2) for s in subjects_list]
final_js = header + ",\n".join(json_blocks) + "\n];\n"

with open(r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\src\data\curriculumData.js", "w", encoding="utf-8") as f:
    f.write(final_js)

print("Clean master curriculumData.js generated successfully! Total size:", len(final_js))
