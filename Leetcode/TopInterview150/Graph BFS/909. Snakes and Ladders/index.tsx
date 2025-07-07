function flattenBoard(board: number[][]): number[] {
  const n = board.length;
  const flat: number[] = new Array(n * n).fill(-1); // 기본값은 -1

  let index = 0;
  let leftToRight = true;

  for (let row = n - 1; row >= 0; row--) {
    if (leftToRight) {
      for (let col = 0; col < n; col++) {
        flat[index++] = board[row][col];
      }
    } else {
      for (let col = n - 1; col >= 0; col--) {
        flat[index++] = board[row][col];
      }
    }
    leftToRight = !leftToRight;
  }

  return flat;
}

function snakesAndLadders(board: number[][]): number {
  const n = board.length;
  const flat = flattenBoard(board);
  const visited = new Array(n * n).fill(false);

  const queue: [number, number][] = []; // [칸 index, 주사위 굴린 횟수]
  queue.push([0, 0]); // 시작은 0번 index (1번 칸), 0회 굴림
  visited[0] = true;

  while (queue.length > 0) {
    const [curr, moves] = queue.shift()!;

    for (let dice = 1; dice <= 6; dice++) {
      let next = curr + dice;

      if (flat[next] !== -1) {
        next = flat[next] - 1; // 사다리 또는 뱀 → 목적지 인덱스로 점프
      }

      if (!visited[next]) {
        if (next === n * n - 1) return moves + 1; // 마지막 칸 도달
        visited[next] = true;
        queue.push([next, moves + 1]);
      }
    }
  }

  return -1; // 도달 못함
}
