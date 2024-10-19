function candy(ratings: number[]): number {
  // 왼쪽 vs 현재 비교
  // 현재 vs 오른쪽 비교
  let n = ratings.length;
  let candyArr = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i - 1] < ratings[i]) {
      candyArr[i] = candyArr[i - 1] + 1;
    }
  }

  for (let i = n; i > 0; i--) {
    if (ratings[i] < ratings[i - 1]) {
      candyArr[i - 1] = Math.max(candyArr[i - 1], candyArr[i] + 1); // Math.max를 사용하는 이유
      // 첫번째 반복문을 통해 '왼쪽 vs 현재' 요소를 비교하여 계산된 candy 개수가 할당되어 있음
      // 두번째 반복문을 통해 '현재 vs 오른쪽' 요소를 비교하는 과정에서  '현재 > 오른쪽' 인 경우 단순 오른쪽 값 +1을 하면  첫번째 반복문을 통해 계산된 candy개수가 변경될 수 있음
      // 예를 들어, ratings = [1, 3, 4, 5, 2] 인 경우 첫번째 순회를 마치면, candyArr = [1,2,3,4,1]이 됨
      // 두번째 순회시 5>2니까 4를 그대로 둘지 vs 마지막 요소인 1+1을 해서 둘지 비교해서 할당해야함
    }
  }

  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer += candyArr[i];
  }

  return answer;
}

// child는 최소한 하나의 캔디를 가져야한다.
// rating이 높은 child는 neighbor(양 옆 child)보다
