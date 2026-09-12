const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const outFile = path.join(__dirname, 'git_output.txt');
let log = [];

function run(cmd) {
    log.push(`=== Running: ${cmd} ===`);
    try {
        const out = execSync(cmd, {
            cwd: path.join(__dirname, '..'),
            encoding: 'utf-8',
            timeout: 5000,
            env: { ...process.env, GIT_TERMINAL_PROMPT: '0', GCM_INTERACTIVE: 'never' }
        });
        log.push("STDOUT:\n" + out);
    } catch (e) {
        log.push("ERROR:\n" + (e.stdout || '') + "\n" + (e.stderr || '') + "\n" + e.message);
    }
}

run('git status');
run('git remote -v');
run('git log -n 5 --oneline');

fs.writeFileSync(outFile, log.join('\n\n'), 'utf-8');
console.log("DONE NODE SCRIPT");
