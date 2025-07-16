// 수정 버전 다시 풀어보기
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
  let wordSet = new Set(wordList);
  let start = new Set([beginWord]);
  let end = new Set([endWord]);
  let counts = 1;

  if (!wordSet.has(endWord)) return 0;

  while (start.size) {
    const nextStart = new Set<string>([]);
    for (let word of start) {
      let wordArr = word.split('');
      for (let i = 0; i < wordArr.length; i++) {
        const oldChar = wordArr[i];
        for (let j = 0; j < letters.length; j++) {
          if (oldChar === letters[j]) continue;

          wordArr[i] = letters[j];
          const newWord = wordArr.join('');
          if (end.has(newWord)) return counts + 1;
          if (wordSet.has(newWord)) {
            nextStart.add(newWord);
            wordSet.delete(newWord);
          }
        }
        wordArr[i] = oldChar;
      }
    }

    start = nextStart;
    counts++;
  }
  return 0;
}

// function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
//   const queue: [string, number][] = [];
//   const visited = new Set<string>();

//   if (wordList.includes(endWord) === false) return 0;

//   function addQueue(word: string, counts: number): void {
//     for (let i = 0; i < wordList.length; i++) {
//       if (visited.has(wordList[i])) continue;
//       let diff = 0;
//       for (let j = 0; j < word.length; j++) {
//         if (wordList[i][j] !== word[j]) {
//           diff++;
//         }
//       }
//       if (diff === 1) {
//         queue.push([wordList[i], counts + 1]);
//         visited.add(wordList[i]);
//       }
//     }
//   }

//   addQueue(beginWord, 1);

//   while (queue.length > 0) {
//     let [word, counts] = queue.shift()!;
//     if (word === endWord) return counts;
//     addQueue(word, counts);
//   }

//   return 0;
// }

// // function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
// //   const queue: [string, number][] = [];
// //   const visited = new Array(wordList.length).fill(false);

// //   if (wordList.includes(endWord) === false) return 0;

// //   function addQueue(word: string, counts: number): void {
// //     for (let i = 0; i < wordList.length; i++) {
// //       if (visited[i]) continue;
// //       let diff = 0;
// //       for (let j = 0; j < word.length; j++) {
// //         if (wordList[i][j] !== word[j]) {
// //           diff++;
// //         }
// //       }
// //       if (diff === 1) {
// //         queue.push([wordList[i], counts + 1]);
// //         visited[i] = true;
// //       }
// //     }
// //   }

// //   addQueue(beginWord, 1);

// //   while (queue.length > 0) {
// //     let [word, counts] = queue.shift();
// //     if (word === endWord) return counts;
// //     addQueue(word, counts);
// //   }

// //   return 0;
// // }
