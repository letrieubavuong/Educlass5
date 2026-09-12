import subprocess
import os
import sys

cwd = r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5"
out_file = r"d:\OneDrive\2025 - 2026\Hoc tap Lop 5\scratch\git_output.txt"

env = os.environ.copy()
env["GIT_TERMINAL_PROMPT"] = "0"
env["GCM_INTERACTIVE"] = "never"
env["GIT_OPTIONAL_LOCKS"] = "0"

commands = [
    ["git", "status"],
    ["git", "remote", "-v"],
    ["git", "branch", "-a"]
]

with open(out_file, "w", encoding="utf-8") as f:
    f.write("STARTING...\n")

res = []
for cmd in commands:
    res.append(f"=== Running: {' '.join(cmd)} ===")
    try:
        p = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True, timeout=3, env=env)
        res.append("STDOUT:\n" + p.stdout)
        res.append("STDERR:\n" + p.stderr)
    except Exception as e:
        res.append(f"ERROR: {e}")

with open(out_file, "w", encoding="utf-8") as f:
    f.write("\n".join(res))

print("FINISHED PYTHON SCRIPT", flush=True)
