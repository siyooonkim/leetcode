let fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

let n = Number(input[0]);
let isSK = true;
const count = [1, 3];
const visited = Array.from({ length: n + 1 }, () => ); // true, false


console.log(isSK ? 'SK' : 'CY');

// 시간 초과: memo
//

// 탁자 위에 돌 N개가 있다.
// 상근이와 창영이는 턴을 번갈아가면서 돌을 가져가며,
// 돌은 1개 또는 3개 가져갈 수 있다.
// 마지막 돌을 가져가는 사람이 게임을 이기게 된다.
// 두 사람이 완벽하게 게임을 했을 때, 이기는 사람을 구하는 프로그램을 작성하시오.

// 게임은 상근이가 먼저 시작한다.
// 두 사람이 완벽하게 게임을 했다는 것은 현재 상황에서 최선의 선택을 했다는 것 같음 (no 트롤링)
// 마지막 돌을 가져가는 사람 => 돌이 1개 혹은 3개가 남았을 때 턴

// 입력: 첫째 줄에 N이 주어진다. (1 ≤ N ≤ 1000)
// 출력: 상근이가 게임을 이기면 SK를, 창영이가 게임을 이기면 CY을 출력한다.


// 문제 이해를 잘못함 
// 꼭 1개 내지 3개만 가져갈 수 있는거임 