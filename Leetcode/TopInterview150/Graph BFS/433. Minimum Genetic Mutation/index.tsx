//version 2
function minMutation(startGene: string, endGene: string, bank: string[]): number {
  const queue: [string, number][] = []; // [gene, count]

  const visited = new Array(bank.length).fill(false);

  function addQueue(gene: string, counts: number): void {
    for (let i = 0; i < bank.length; i++) {
      if (visited[i]) continue;
      let diff = 0;
      for (let j = 0; j < gene.length; j++) {
        if (gene[j] !== bank[i][j]) {
          diff++;
        }
      }
      if (diff === 1) {
        queue.push([bank[i], counts + 1]);
        visited[i] = true;
      }
    }
  }

  addQueue(startGene, 0);

  while (queue.length > 0) {
    let [gene, counts] = queue.shift();
    if (gene === endGene) return counts;
    addQueue(gene, counts);
  }

  return -1;
}

// version 1
// function minMutation(startGene: string, endGene: string, bank: string[]): number {
//   const queue: [string, number, number][] = []; // string idx count

//   const visited = new Array(bank.length).fill(false);

//   function addQueue(gene: string, counts: number): void {
//     for (let i = 0; i < bank.length; i++) {
//       let diff = 0;
//       let idx = -1;
//       for (let j = 0; j < gene.length; j++) {
//         if (gene[j] !== bank[i][j]) {
//           idx = j;
//           diff++;
//         }
//       }
//       if (diff === 1 && !visited[i]) {
//         queue.push([bank[i], idx, counts + 1]);
//         visited[i] = true;
//       }
//     }
//   }

//   addQueue(startGene, 0);

//   while (queue.length > 0) {
//     let [gene, idx, counts] = queue.shift();

//     if (gene === endGene) return counts;
//     addQueue(gene, counts);
//   }

//   return -1;
// }
