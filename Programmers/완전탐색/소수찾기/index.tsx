function solution(numbers) {
  let answer = 0;
  let decimalNumbers = new Set();
  let numbersArr = numbers.split('');

  function isDecimal(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return false;
      }
    }
    answer++;
    return true;
  }

  function dfs(target, arr) {
    if (target.length != 0 && !decimalNumbers.has(Number(target))) {
      isDecimal(Number(target));
      decimalNumbers.add(Number(target));
    }

    if (arr.length == 0) return;

    for (let i = 0; i < arr.length; i++) {
      dfs(target + arr[i], arr.slice(0, i).concat(arr.slice(i + 1)));
    }
  }

  dfs('', numbersArr);

  return answer;
}
