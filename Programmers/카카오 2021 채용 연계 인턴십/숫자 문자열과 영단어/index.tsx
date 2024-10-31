//// 정규 표현식
// 시간 복잡도 O(n)
function solution(s) {
  const graph = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let word in graph) {
    s = s.replace(new RegExp(word, 'g'), graph[word]);
  }

  return Number(s);
}

//// 첫 번째 풀이
// O(n)
// function solution(s) {
//     let answer = "";
//     let target = "";
//     const graph = {
//         zero: 0,
//         one: 1,
//         two: 2,
//         three: 3,
//         four: 4,
//         five: 5,
//         six: 6,
//         seven: 7,
//         eight: 8,
//         nine: 9
//     }

//     for(let i=0; i<=s.length; i++){
//         let converted = graph[target];
//         if(!isNaN(s[i])){
//             answer += converted ? converted + s[i] : s[i]
//             target = "";
//         }else{
//             if(converted == undefined){
//                 target += s[i];
//             }else{
//                 answer += converted;
//                 target = s[i];
//             }
//         }
//     }

//     return Number(answer);
// }
