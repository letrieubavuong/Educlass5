import subprocess
import os

git_path = r"C:\Program Files\Microsoft Visual Studio\18\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer\Git\cmd\git.exe"
if not os.path.exists(git_path):
    git_path = "git"

cwd = r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5"
log_path = r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\scratch\push_result.txt"

env = os.environ.copy()
env["GIT_TERMINAL_PROMPT"] = "0"
env["GCM_INTERACTIVE"] = "never"

logs = []

def run_cmd(args):
    cmd_str = " ".join(args)
    logs.append(f"=== {cmd_str} ===")
    try:
        res = subprocess.run(args, cwd=cwd, capture_output=True, text=True, timeout=60, env=env)
        logs.append(f"STDOUT:\n{res.stdout}")
        logs.append(f"STDERR:\n{res.stderr}")
        logs.append(f"CODE: {res.returncode}\n")
        return res.returncode
    except Exception as e:
        logs.append(f"ERROR: {str(e)}\n")
        return -1

run_cmd([git_path, "status"])
run_cmd([git_path, "add", "."])
run_cmd([git_path, "commit", "-m", "Cap nhat va day du an lên GitHub"])
run_cmd([git_path, "push", "origin", "main"])

with open(log_path, "w", encoding="utf-8") as f:
    f.write("\n".join(logs))

print("PUSH SCRIPT COMPLETED")
