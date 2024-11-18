function solution(brown, yellow) {
  let answer = [];
  let n = brown + yellow;

  for (let i = n; i >= Math.sqrt(n); i--) {
    if (n % i == 0) {
      let x = i;
      let y = n / i;
      if (2 * x + (y - 2) * 2 == brown) return [x, y];
    }
  }
}
