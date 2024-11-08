// const fs = require('fs');
// const input = fs.readFileSync('input.txt').toString().trim().split('\n');

// // 첫 번째 줄의 N과 M을 읽어옵니다.
// const [N, M] = input[0].split(' ').map(Number);

// // N개의 노래 정보를 저장할 객체를 생성합니다.
// // const knownSongs: { [key: string]: string } = {};
// const knownSongs = new Map();

// // 2번째 줄부터 N개의 줄까지는 노래 제목, 길이, 음 정보를 포함하고 있습니다.
// for (let i = 1; i <= N; i++) {
//   const [T, S, ...notes] = input[i].split(' ');
//   const notePattern = notes.slice(0, 3).join('');

//   if (!knownSongs.has(notePattern)) {
//     knownSongs.set(notePattern, []);
//   }

//   knownSongs.get(notePattern).push(S);
// }

// // N+2번째 줄부터 M개의 줄까지는 정환이 맞히기를 시도할 노래의 음 정보를 저장합니다.
// const attempts = [];
// for (let i = N + 1; i < N + 1 + M; i++) {
//   const info = input[i].split(' ').join('');
//   attempts.push(info);
// }

// for (const attempt of attempts) {
//   const title = knownSongs.get(attempt);
//   // console.log(title);
//   if (!title) {
//     console.log('!');
//   } else if (title.length >= 2) {
//     console.log('?');
//   } else {
//     console.log(title[0]);
//   }
// }
