function processInput(): void {
  const fs = require('fs');
  const input = fs.readFileSync('input.txt').toString().trim().split('\n');

  // 첫 번째 줄의 숫자(n)
  const n = parseInt(input[0]);

  // 각 줄을 배열로 저장
  let inputArr = [];

  for (let i = 1; i <= n; i++) {
    const [fruit, count] = input[i].split(' '); // 각 줄에서 과일 이름과 개수를 분리
    inputArr.push({ fruit, count: parseInt(count) });
  }

  let hash = new Map(); // {fruit: count}

  for (let i = 0; i < inputArr.length; i++) {
    let fruitCount = hash.get(inputArr[i]['fruit']);
    hash.set(inputArr[i]['fruit'], fruitCount ? fruitCount + inputArr[i]['count'] : inputArr[i]['count']);
  }

  for (let [key, value] of hash) {
    if (value == 5) console.log(true);
    return;
  }
  console.log(false);
  return;
}

processInput();
