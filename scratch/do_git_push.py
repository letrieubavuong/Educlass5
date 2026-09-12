import subprocess
import os

log_file = r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\scratch\git_result.txt"

def log(msg):
    with open(log_file, "a", encoding="utf-8") as f:
        f.write(msg + "\n")

def run_git():
    if os.path.exists(log_file):
        os.remove(log_file)
        
    repo_dir = r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5"
    
    commands = [
        "git status",
        "git add .",
        'git commit -m "Feat: Them cau hoi keo tha, noi cau va phan quyen admin xem bai hoc da khoa"',
        "git push origin main",
        "git push"
    ]
    
    for cmd in commands:
        log(f"=== Running: {cmd} ===")
        try:
            res = subprocess.run(cmd, cwd=repo_dir, shell=True, capture_output=True, text=True, timeout=15)
            log(f"STDOUT:\n{res.stdout}")
            if res.stderr:
                log(f"STDERR:\n{res.stderr}")
            log(f"RETURNCODE: {res.returncode}\n")
        except Exception as e:
            log(f"ERROR / TIMEOUT: {str(e)}\n")

if __name__ == "__main__":
    run_git()
