// 5번째

// 자 일단 최단 거리다 ? => 바로 BFS 완전 탐색
// 여러 노드들을 탐색할때, 인접 그래프 부터 탐색하는 거임
// 깊이를 우선으로 하냐 너비를 우선으로 하냐
// breadth first search
// depth first search

// 그래프 형태로 board가 주어진다.
// 한칸씩 옆으로 이동하면서 이와 연결 되어 있는 노드를 queue에 넣는다.
// 그렇게 순차적으로 탐색을 하면서 최단 경로를 찾는 것
// 어떻게 최단 경로를 찾을까?
// queue에 다음 탐색해야하는 노드 그리고 그 노드까지 가는 이동 수를 기억한다.
// 노드 중복 방문을 방지하기 위해 visited로 방문 여부를 체크한다. 이후에 방문한다하더라도 먼저 방문한 이동 수가 더 낮거나 같을 것이다. 왜냐하면 순차적으로 방문하는 것이기 때문에,

// 이 문제에서 키포인트는 일단 행과 열이 있는 그래프 형태를 그래프를 하나의 배열로 변경하는 것
// 0번부터 순서를 유지하는게 중요하다.
// 그래프 형태에서는 board[n-1][0] 번째 시작이고, 하나의 배열에서는 0번으로 되도록

// while 문을 통해서 queue에 탐색해야하는 다음 노드를 넣고
// 전체 노드를 탐색할때까지
// 중간에 목적지를 발견하면 리턴하는 형태

// 그럼 크게 2가지로 나누어지겠네

// 1. board를 flat하게 만드는 과정
// Boustrophedon 스타일을 고려해서 만들어야함
// for => 뒤에서부터 돌려야겠지
// 그리고 right방향의 여부에 따라 순서를 바꿔가며 하나의 배열에 넣는다.

// 2. while문을 통해 반복하는 과정
// queue , visited 여부 필요

function snakesAndLadders(board: number[][]): number {
  // flat하게 만든다.
  const n: number = board.length;
  let flatArr: number[] = [];
  let leftToRight: boolean = true;
  for (let i = n - 1; i >= 0; i--) {
    if (leftToRight) {
      for (let j = 0; j < n; j++) {
        flatArr.push(board[i][j]);
      }
    } else {
      for (let j = n - 1; j >= 0; j--) {
        flatArr.push(board[i][j]);
      }
    }
    leftToRight = !leftToRight;
  }

  let visited = new Array(n * n).fill(false);
  let queue: [number, number][] = [];
  queue.push([0, 0]);

  while (queue.length > 0) {
    let node: [number, number] | undefined = queue.shift();
    if (!node) break;
    let [curr, moves]: [number, number] | undefined = node;

    for (let i = 1; i <= 6; i++) {
      let target = flatArr[curr + i];
      let next = target !== -1 ? target - 1 : curr + i;

      if (next === n * n - 1) return moves + 1;

      if (!visited[next]) {
        queue.push([next, moves + 1]);
        visited[next] = true;
      }
    }
  }

  return -1;
}

// 4번째 시도
// function snakesAndLadders(board: number[][]): number {
//   let n = board.length;
//   let flatArr = new Array(n * n).fill(-1);
//   let index = 0;

//   let leftToRight = true;
//   for (let row = n - 1; row >= 0; row--) {
//     if (leftToRight) {
//       for (let col = 0; col < n; col++) {
//         flatArr[index++] = board[row][col];
//       }
//     } else {
//       for (let col = n - 1; col >= 0; col--) {
//         flatArr[index++] = board[row][col];
//       }
//     }
//     leftToRight = !leftToRight;
//   }

//   let visited = new Array(n * n).fill(false);

//   let queue = [];
//   queue.push([0, 0]);

//   while (queue.length !== 0) {
//     let [curr, moves] = queue.shift();

//     for (let i = 1; i <= 6; i++) {
//       let next = flatArr[curr + i] !== -1 ? flatArr[curr + i] - 1 : curr + i;

//       if (next === n * n - 1) return moves + 1;

//       if (!visited[next]) {
//         queue.push([next, moves + 1]);
//         visited[next] = true;
//       }
//     }
//   }
//   return -1;
// }

// // Wrong Answer 2
// // 문제 파악을 잘못했음
// // curr에 ladder 혹은 snake가 있더라도 그것을 다음으로 가야한다는 조건
// // 완전 탐색이라는 걸 캐치했어야함

// function snakesAndLadders(board: number[][]): number {
//   let n = board.length;
//   let flatArr = new Array(n * n).fill(-1);
//   let index = 0;

//   let leftToRight = true;
//   for (let row = n - 1; row >= 0; row--) {
//     if (leftToRight) {
//       for (let col = 0; col < n; col++) {
//         flatArr[index++] = board[row][col];
//       }
//     } else {
//       for (let col = n - 1; col >= 0; col--) {
//         flatArr[index++] = board[row][col];
//       }
//     }
//     leftToRight = !leftToRight;
//   }

//   let visited = new Array(n * n).fill(false);

//   let queue = [];
//   queue.push([0, 0]);
//   let answer = 21 * 21;

//   while (queue.length !== 0) {
//     let [curr, moves] = queue.shift();

//     for (let i = 1; i <= 6; i++) {
//       if (curr + i === n * n - 1) return moves + 1;

//       let next = flatArr[curr + i] !== -1 ? flatArr[curr + i] - 1 : curr + i;

//       if (!visited[next]) {
//         queue.push([next, moves + 1]);
//         visited[next] = true;
//       }
//     }
//   }
//   return answer;
// }

// // Wrong Answer
// // function snakesAndLadders(board: number[][]): number {
// //     let n = board.length;
// //     let flatArr = new Array(n*n).fill(-1);
// //     let index = 0;

// //     let leftToRight = true;
// //     for(let row=n-1; row>= 0; row--){
// //         if(leftToRight){
// //             for(let col=0; col<n; col++){
// //                 flatArr[index++] = board[row][col];
// //             }
// //         }else{
// //             for(let col=n-1; col>=0; col --){
// //                 flatArr[index++] = board[row][col];
// //             }
// //         }
// //         leftToRight = !leftToRight;
// //     }

// //     let visited = new Array(n*n).fill(false);

// //     let queue = [];
// //     queue.push([0, 0]);

// //     while(queue.length !== 0){
// //         let [curr, moves] = queue.shift();

// //         if(curr === n*n - 1) return moves;

// //         for(let i=1; i<=6; i++){
// //             let target = flatArr[curr+i];

// //             if(target !== -1){
// //                 queue.push([target - 1, moves + 1]);
// //             }

// //             if(!visited[target]){
// //                 visited[target] = true;
// //             }

// //         }
// //     }
// //     return -1;
// // }

// // flat하게 만들어야한다.
// // boustrophedon style 순서
// // BFS => 최단 거리 => queue

// // queue안에는 뭐가 들어가야할까?
// // 탐색해야하는 인덱스 & 현재 인덱스까지 도달했을 때의 최단 무빙 숫자
// // 방문 여부 체크 필요함
// // queue 길이가 0이 될 때까지
// // 만약 curr의 값 + 6 이 n*n >= 이면 moves + 1 리턴

// // [-1 -1 -1]
// // [-1 9 8]
// // [-1 8 9]

// // function flattenBoard(board: number[][]): number[] {
// //   const n = board.length;
// //   const flat: number[] = new Array(n * n).fill(-1); // 기본값은 -1

// //   let index = 0;
// //   let leftToRight = true;

// //   for (let row = n - 1; row >= 0; row--) {
// //     if (leftToRight) {
// //       for (let col = 0; col < n; col++) {
// //         flat[index++] = board[row][col];
// //       }
// //     } else {
// //       for (let col = n - 1; col >= 0; col--) {
// //         flat[index++] = board[row][col];
// //       }
// //     }
// //     leftToRight = !leftToRight;
// //   }

// //   return flat;
// // }

// // function snakesAndLadders(board: number[][]): number {
// //   const n = board.length;
// //   const flat = flattenBoard(board);
// //   const visited = new Array(n * n).fill(false);

// //   const queue: [number, number][] = []; // [칸 index, 주사위 굴린 횟수]
// //   queue.push([0, 0]); // 시작은 0번 index (1번 칸), 0회 굴림
// //   visited[0] = true;

// //   while (queue.length > 0) {
// //     const [curr, moves] = queue.shift()!;

// //     for (let dice = 1; dice <= 6; dice++) {
// //       let next = curr + dice;

// //       if (flat[next] !== -1) {
// //         next = flat[next] - 1; // 사다리 또는 뱀 → 목적지 인덱스로 점프
// //       }

// //       if (!visited[next]) {
// //         if (next === n * n - 1) return moves + 1; // 마지막 칸 도달
// //         visited[next] = true;
// //         queue.push([next, moves + 1]);
// //       }
// //     }
// //   }

// //   return -1; // 도달 못함
// // }
