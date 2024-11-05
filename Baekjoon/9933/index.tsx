function processInput() {
  const fs = require('fs');
  const input = fs.readFileSync('input.txt').toString().trim().split('\n');

  // 첫 번째 줄의 숫자(n)
  const n = parseInt(input[0]);
  // 각 줄을 배열로 저장
  let inputArr = input.slice(1);
  let words = new Set(inputArr);

  for (const word of inputArr) {
    let reversed = word.split('').reverse().join('');

    if (words.has(reversed)) {
      console.log(reversed.length, reversed[Math.floor(reversed.length / 2)]);
    }
  }
}

processInput();
