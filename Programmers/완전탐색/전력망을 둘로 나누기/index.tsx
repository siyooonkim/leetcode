function solution(n, wires) {
  let graph = Array.from({ length: n + 1 }, () => []);
  let answer = Infinity;

  for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  function countNode(node, visited) {
    visited[node] = true;
    let count = 1;

    for (const element of graph[node]) {
      if (!visited[element]) {
        count += countNode(element, visited);
      }
    }

    return count;
  }

  for (const [v1, v2] of wires) {
    // 제거
    graph[v1] = graph[v1].filter((node) => node != v2);
    graph[v2] = graph[v2].filter((node) => node != v1);

    let visited = Array.from({ length: n + 1 }, () => false);
    let network1Count = countNode(1, visited);
    let network2Count = n - network1Count;

    answer = Math.min(answer, Math.abs(network1Count - network2Count));

    // 복구
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  return answer;
}

// graph 객체 생성 (hash-map)
// 0번째 key에는 0번 node와 연결된 node들(배열)
// 1번째 key에는 1번 node와 연결된 node들(배열)
// ...
// n번째 key에는 n번 node와 연결된 node들(배열)

// wires 반복
// 현재 순회중인 [v1, v2] 요소의 연결을 graph에서 끊는다.
// v1번째 key에서 v2를 제거
// v2번째 key에서 v1을 제거
// graph의 첫번째 요소와 연결된 모든 node들의 수 a를 구한다.
// graph를 순회한다.
// v1과 연관된 노드의 수를 전부 count한다.
// hash쓰면 안되나? Map으로
// n-a를 통해 b를 구한다.
// a-b의 절대값을 구한다.
// 절대값보다 크다면 대체
// 현재 순회중인 [v1, v2] 요소를 graph에 다시 추가
