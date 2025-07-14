function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const queue: [string, number][] = [];
  const visited = new Array(wordList.length).fill(false);

  if (wordList.includes(endWord) === false) return 0;

  function addQueue(word: string, counts: number): void {
    for (let i = 0; i < wordList.length; i++) {
      if (visited[i]) continue;
      let diff = 0;
      for (let j = 0; j < word.length; j++) {
        if (wordList[i][j] !== word[j]) {
          diff++;
        }
      }
      if (diff === 1) {
        queue.push([wordList[i], counts + 1]);
        visited[i] = true;
      }
    }
  }

  addQueue(beginWord, 1);

  while (queue.length > 0) {
    let [word, counts] = queue.shift();
    if (word === endWord) return counts;
    addQueue(word, counts);
  }

  return 0;
}
