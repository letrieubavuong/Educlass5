const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'git_result.txt');
fs.writeFileSync(logFile, '=== STARTING GIT PUSH SCRIPT ===\n', 'utf8');

function log(msg) {
  fs.appendFileSync(logFile, msg + '\n', 'utf8');
}

const commands = [
  'git status',
  'git add .',
  'git commit -m "Feat: Them cau hoi keo tha, noi cau va phan quyen admin xem bai hoc da khoa"',
  'git push origin main',
  'git push'
];

for (const cmd of commands) {
  log(`\n=== Running: ${cmd} ===`);
  try {
    const stdout = execSync(cmd, { 
      cwd: path.resolve(__dirname, '..'),
      encoding: 'utf8',
      timeout: 20000,
      env: { ...process.env, GIT_TERMINAL_PROMPT: '0' }
    });
    log(`STDOUT:\n${stdout}`);
  } catch (err) {
    log(`ERROR/STDERR:\n${err.message}\n${err.stdout || ''}\n${err.stderr || ''}`);
  }
}

log('\n=== COMPLETED GIT PUSH SCRIPT ===');
