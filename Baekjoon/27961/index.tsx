let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

let goal = Number(input);

let dp = Array.from({ length: goal + 1 }).fill(0);
dp[0] = 0;
dp[1] = 1; // 생성 마법

for (let i = 2; i <= goal; i++) {
  dp[i] = dp[Math.ceil(i / 2)] + 1;
}

console.log(dp[goal]);
