function minMutation(startGene: string, endGene: string, bank: string[]): number {
  const queue: [string, number, number][] = []; // string idx count

  // 다시해보자. endQueue랑 비교하는게 아니라, bank에 있는 값들과 1개만 차이나는 값들을 queue에 넣는다.
  // 여기에서 생길 수 있는 문제는 1개만 차이나는 값들 중 이미 지나쳐 온 값들이 있을 수 있어

  const visited = new Array(bank.length).fill(false);

  function addQueue(gene: string, counts: number): void {
    for (let i = 0; i < bank.length; i++) {
      let diff = 0;
      let idx = -1;
      for (let j = 0; j < gene.length; j++) {
        if (gene[j] !== bank[i][j]) {
          idx = j;
          diff++;
        }
      }
      if (diff === 1 && !visited[i]) {
        queue.push([bank[i], idx, counts + 1]);
        visited[i] = true;
      }
    }
  }

  addQueue(startGene, 0);

  while (queue.length > 0) {
    let [gene, idx, counts] = queue.shift();

    if (gene === endGene) return counts;
    addQueue(gene, counts);
  }

  return -1;
}
