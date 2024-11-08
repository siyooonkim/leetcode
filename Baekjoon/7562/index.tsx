const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

// 테스트 케이스 개수
const T = parseInt(input[0]);

// 입력을 다룰 인덱스 초기화
let line = 1;

const testCases = [];

// 각 테스트 케이스 입력 처리
for (let t = 0; t < T; t++) {
  // 체스판의 크기
  const n = parseInt(input[line]);
  // 시작 위치
  const [startX, startY] = input[line + 1].split(' ').map(Number);
  // 목표 위치
  const [targetX, targetY] = input[line + 2].split(' ').map(Number);
  // 다음 테스트 케이스로 이동
  line += 3;
  // 테스트 케이스 정보 저장
  testCases.push({ n, start: [startX, startY], target: [targetX, targetY] });
}

// testCases 배열에 모든 테스트 케이스가 저장됨
// 이후 각 테스트 케이스에 대해 처리 가능
const moves = [
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
  [2, 1],
  [-2, 1],
  [2, -1],
  [-2, -1],
];

for (let i = 0; i < testCases.length; i++) {
  let queue = [[...testCases[i].start, 0]];
  let destinationX = testCases[i].target[0];
  let destinationY = testCases[i].target[1];
  let n = testCases[i].n;
  let visited = new Array(n).fill(0).map(() => new Array(n).fill(0)); // n*n 배열을 만들고 0으로 채우기 => 다녀온 곳은 1 체크

  while (queue.length > 0) {
    const current = queue.shift() || [];
    if (current[0] == destinationX && current[1] == destinationY) {
      console.log(current[2]);
      break;
    }

    for (const move of moves) {
      const newX = current[0] + move[0];
      const newY = current[1] + move[1];
      if (newX >= 0 && newX < n && newY >= 0 && newY < n && !visited[newX][newY]) {
        visited[newX][newY] = 1;
        queue.push([newX, newY, current[2] + 1]);
      }
    }
  }
}
