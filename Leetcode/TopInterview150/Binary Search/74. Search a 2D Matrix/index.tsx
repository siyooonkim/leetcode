function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) return false;
  const m = matrix.length;
  const n = matrix[0].length;

  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const targetRow = Math.floor(mid / n);
    const targetCol = Math.floor(mid % n);

    if (matrix[targetRow][targetCol] === target) {
      return true;
    } else if (matrix[targetRow][targetCol] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

// m * n 행렬의 경우
// mid번째 값을 구하기 위해
// left = 0
// right = m * n - 1;

// 3행 * 4열 의 경우
// 중간값은 6번째
// 즉, 2행의 2열
// left = 0 right = 11
// mid = 5
// mid / 4 번째 행
// mid % 4 번째 열 이 중간값

// 이 원리를 이용
