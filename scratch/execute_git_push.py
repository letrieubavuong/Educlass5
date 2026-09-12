import subprocess
import os

git_exe = r"C:\Program Files\Microsoft Visual Studio\18\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer\Git\cmd\git.exe"
repo_dir = r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5"
log_file = r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\scratch\git_push_log.txt"

def log(msg):
    print(msg)
    with open(log_file, "a", encoding="utf-8") as f:
        f.write(msg + "\n")

def run():
    if os.path.exists(log_file):
        os.remove(log_file)
        
    commands = [
        [git_exe, "status"],
        [git_exe, "add", "."],
        [git_exe, "commit", "-m", "Feat: Them cau hoi keo tha, noi cau va phan quyen admin xem bai hoc da khoa"],
        [git_exe, "push", "origin", "main"],
        [git_exe, "push"]
    ]
    
    for cmd in commands:
        cmd_str = " ".join(cmd)
        log(f"=== RUNNING: {cmd_str} ===")
        try:
            res = subprocess.run(cmd, cwd=repo_dir, capture_output=True, text=True, timeout=60)
            log(f"STDOUT:\n{res.stdout}")
            if res.stderr:
                log(f"STDERR:\n{res.stderr}")
            log(f"EXIT CODE: {res.returncode}\n")
        except Exception as e:
            log(f"EXCEPTION: {str(e)}\n")

if __name__ == "__main__":
    run()
