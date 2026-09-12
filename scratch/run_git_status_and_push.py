import subprocess
import os
import sys

cwd = r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5"
log_path = os.path.join(cwd, "scratch", "git_output.txt")

env = os.environ.copy()
env["GIT_TERMINAL_PROMPT"] = "0"
env["GCM_INTERACTIVE"] = "never"
env["GIT_OPTIONAL_LOCKS"] = "0"

logs = []

def run_cmd(args):
    cmd_str = " ".join(args)
    logs.append(f"=== Running: {cmd_str} ===")
    print(f"Executing: {cmd_str}")
    sys.stdout.flush()
    try:
        res = subprocess.run(args, cwd=cwd, capture_output=True, text=True, timeout=25, env=env)
        logs.append(f"STDOUT:\n{res.stdout}")
        logs.append(f"STDERR:\n{res.stderr}")
        logs.append(f"RETURNCODE: {res.returncode}\n")
        return res.returncode
    except subprocess.TimeoutExpired:
        logs.append("ERROR: Command timed out after 25s\n")
        return -1
    except Exception as e:
        logs.append(f"ERROR: {str(e)}\n")
        return -1

# 1. Check status
run_cmd(["git", "status"])

# 2. Add files
run_cmd(["git", "add", "."])

# 3. Check status after add
run_cmd(["git", "status"])

# 4. Commit if there are changes
run_cmd(["git", "commit", "-m", "Cap nhat du an Hoc tap Lop 5"])

# 5. Push
run_cmd(["git", "push", "origin", "main"])

with open(log_path, "w", encoding="utf-8") as f:
    f.write("\n".join(logs))

print("DONE")
