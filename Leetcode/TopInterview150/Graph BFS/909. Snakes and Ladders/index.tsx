// Wrong Answer 2
// 문제 파악을 잘못했음
// curr에 ladder 혹은 snake가 있더라도 그것을 다음으로 가야한다는 조건
// 완전 탐색이라는 걸 캐치했어야함

function snakesAndLadders(board: number[][]): number {
  let n = board.length;
  let flatArr = new Array(n * n).fill(-1);
  let index = 0;

  let leftToRight = true;
  for (let row = n - 1; row >= 0; row--) {
    if (leftToRight) {
      for (let col = 0; col < n; col++) {
        flatArr[index++] = board[row][col];
      }
    } else {
      for (let col = n - 1; col >= 0; col--) {
        flatArr[index++] = board[row][col];
      }
    }
    leftToRight = !leftToRight;
  }

  let visited = new Array(n * n).fill(false);

  let queue = [];
  queue.push([0, 0]);
  let answer = 21 * 21;

  while (queue.length !== 0) {
    let [curr, moves] = queue.shift();

    for (let i = 1; i <= 6; i++) {
      if (curr + i === n * n - 1) return moves + 1;

      let next = flatArr[curr + i] !== -1 ? flatArr[curr + i] - 1 : curr + i;

      if (!visited[next]) {
        queue.push([next, moves + 1]);
        visited[next] = true;
      }
    }
  }
  return answer;
}

// Wrong Answer
// function snakesAndLadders(board: number[][]): number {
//     let n = board.length;
//     let flatArr = new Array(n*n).fill(-1);
//     let index = 0;

//     let leftToRight = true;
//     for(let row=n-1; row>= 0; row--){
//         if(leftToRight){
//             for(let col=0; col<n; col++){
//                 flatArr[index++] = board[row][col];
//             }
//         }else{
//             for(let col=n-1; col>=0; col --){
//                 flatArr[index++] = board[row][col];
//             }
//         }
//         leftToRight = !leftToRight;
//     }

//     let visited = new Array(n*n).fill(false);

//     let queue = [];
//     queue.push([0, 0]);

//     while(queue.length !== 0){
//         let [curr, moves] = queue.shift();

//         if(curr === n*n - 1) return moves;

//         for(let i=1; i<=6; i++){
//             let target = flatArr[curr+i];

//             if(target !== -1){
//                 queue.push([target - 1, moves + 1]);
//             }

//             if(!visited[target]){
//                 visited[target] = true;
//             }

//         }
//     }
//     return -1;
// }

// flat하게 만들어야한다.
// boustrophedon style 순서
// BFS => 최단 거리 => queue

// queue안에는 뭐가 들어가야할까?
// 탐색해야하는 인덱스 & 현재 인덱스까지 도달했을 때의 최단 무빙 숫자
// 방문 여부 체크 필요함
// queue 길이가 0이 될 때까지
// 만약 curr의 값 + 6 이 n*n >= 이면 moves + 1 리턴

// [-1 -1 -1]
// [-1 9 8]
// [-1 8 9]

// function flattenBoard(board: number[][]): number[] {
//   const n = board.length;
//   const flat: number[] = new Array(n * n).fill(-1); // 기본값은 -1

//   let index = 0;
//   let leftToRight = true;

//   for (let row = n - 1; row >= 0; row--) {
//     if (leftToRight) {
//       for (let col = 0; col < n; col++) {
//         flat[index++] = board[row][col];
//       }
//     } else {
//       for (let col = n - 1; col >= 0; col--) {
//         flat[index++] = board[row][col];
//       }
//     }
//     leftToRight = !leftToRight;
//   }

//   return flat;
// }

// function snakesAndLadders(board: number[][]): number {
//   const n = board.length;
//   const flat = flattenBoard(board);
//   const visited = new Array(n * n).fill(false);

//   const queue: [number, number][] = []; // [칸 index, 주사위 굴린 횟수]
//   queue.push([0, 0]); // 시작은 0번 index (1번 칸), 0회 굴림
//   visited[0] = true;

//   while (queue.length > 0) {
//     const [curr, moves] = queue.shift()!;

//     for (let dice = 1; dice <= 6; dice++) {
//       let next = curr + dice;

//       if (flat[next] !== -1) {
//         next = flat[next] - 1; // 사다리 또는 뱀 → 목적지 인덱스로 점프
//       }

//       if (!visited[next]) {
//         if (next === n * n - 1) return moves + 1; // 마지막 칸 도달
//         visited[next] = true;
//         queue.push([next, moves + 1]);
//       }
//     }
//   }

//   return -1; // 도달 못함
// }
