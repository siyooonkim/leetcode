let fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('input.txt').toString().split(' ');

let N = Number(input[0]) + 1; // daldida까지 함께 복사해야하기 때문에 N에 1을 더한다
let count = 0;

while (N != 1) {
  N = Math.ceil(N / 2); // N의 값이 2^n 범위 내 있으면 n만큼만 복사하면 됨
  count++;
}

count += 9; // 처음 발생하는 8개 + 마지막 n 1개

console.log(count);
