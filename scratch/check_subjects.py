import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\src\data\curriculumData.js", "r", encoding="utf-8") as f:
    text = f.read()

names = re.findall(r"\"name\":\s*\"([^\"]+)\"|name:\s*'([^']+)'", text)
print("Subject names found:")
for idx, n in enumerate(names, 1):
    val = n[0] if n[0] else n[1]
    print(f"{idx}. {val}")
