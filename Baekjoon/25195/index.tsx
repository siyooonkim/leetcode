const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

// 1) 정점과 간선 개수
const [N, M] = input[0].split(' ').map(Number);

// 2) 점끼리 이어져있는 배열
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  graph[u].push(v);
}

// 3) 팬클럽 곰곰이가 있는 점의 정보
const S = parseInt(input[M + 1]); // 팬클럽 곰곰이가 있는 정점의 개수
const fanClubNodes = new Set(input[M + 2].split(' ').map(Number)); // 팬클럽 곰곰이가 있는 정점 번호들

let visited = new Array(N + 1).fill(false);

// 결과 확인을 위해 출력
// console.log('1) 정점과 간선 개수:', N, M);
// console.log('2) 점끼리 이어져있는 배열:', graph);
// console.log('3) 팬클럽 곰곰이가 있는 점의 정보:', fanClubNodes);
// console.log('4) 정점을 방문했는지 여부를 나타내는 정보 :', visited);

let answer = 'Yes';

function dfs(node) {
  visited[node] = true;
  if (fanClubNodes.has(node)) return;

  if (graph[node].length == 0) {
    answer = 'yes';
    return;
  }

  for (const next of graph[node]) {
    if (answer == 'yes') return;
    if (!visited[next]) dfs(next);
  }
}

dfs(1);
console.log(answer);
