const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const n = input[0];
const iunputArr = input[1].split(' ');
const arr = iunputArr.map((element) => Number(element));

// 배열을 생성한다. 각 요소가 마지막이라고 할때, 가질 수 있는 최대의 감소하는 부분 수열의 길이를 각 요소에 저장한다.
let dp = Array.from({ length: n }).fill(1);
let answer = 1;
for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] < arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
      if (answer < dp[i]) answer = dp[i];
    }
  }
}

console.log(answer);
