let fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const scores = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    scores.push(Number(input[i]));
  }
}

let count = 0;

for (let i = N - 2; i >= 0; i--) {
  if (scores[i] >= scores[i + 1]) {
    count += scores[i] - (scores[i + 1] - 1);
    scores[i] = scores[i + 1] - 1;
  }
}

console.log(count);