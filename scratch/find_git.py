import os

log_file = r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\scratch\found_git.txt"

possible_paths = [
    r"C:\Program Files\Git\cmd\git.exe",
    r"C:\Program Files\Git\bin\git.exe",
    r"C:\Program Files (x86)\Git\cmd\git.exe",
    os.path.expanduser(r"~\AppData\Local\Programs\Git\cmd\git.exe"),
    os.path.expanduser(r"~\AppData\Local\GitHubDesktop\bin\git.exe"),
    os.path.expanduser(r"~\AppData\Local\Programs\Git\bin\git.exe"),
]

found = []
for p in possible_paths:
    if os.path.exists(p):
        found.append(p)

if not found:
    # Search drive C root programs
    for root in [r"C:\Program Files", r"C:\Program Files (x86)", os.path.expanduser(r"~\AppData\Local")]:
        if os.path.exists(root):
            for r, d, files in os.walk(root):
                if "git.exe" in files:
                    full = os.path.join(r, "git.exe")
                    found.append(full)
                    if len(found) >= 3:
                        break
        if found:
            break

with open(log_file, "w", encoding="utf-8") as f:
    f.write("\n".join(found) if found else "NOT_FOUND")
