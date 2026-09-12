import subprocess
import os
import sys

cwd = r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5"
log_path = os.path.join(cwd, "scratch", "push_result_final.txt")

env = os.environ.copy()
env["GIT_TERMINAL_PROMPT"] = "0"
env["GCM_INTERACTIVE"] = "never"
env["GIT_OPTIONAL_LOCKS"] = "0"

logs = []

def run_cmd(args):
    cmd_str = " ".join(args)
    logs.append(f"=== Running: {cmd_str} ===")
    try:
        res = subprocess.run(args, cwd=cwd, capture_output=True, text=True, timeout=30, env=env)
        logs.append(f"STDOUT:\n{res.stdout}")
        logs.append(f"STDERR:\n{res.stderr}")
        logs.append(f"CODE: {res.returncode}\n")
        return res.returncode
    except Exception as e:
        logs.append(f"ERROR: {str(e)}\n")
        return -1

run_cmd(["git", "add", "."])
run_cmd(["git", "commit", "-m", "Feat: Them 3 dau truong luyen thi nang cao (Tin hoc tre, VnEdu, Trang Nguyen Tieng Viet)"])
run_cmd(["git", "push", "origin", "main"])

with open(log_path, "w", encoding="utf-8") as f:
    f.write("\n".join(logs))

print("DONE_PUSH")
