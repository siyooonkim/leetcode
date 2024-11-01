const fs = require('fs');
// const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const inputArr = input.trim().split(' ');
const input = fs.readFileSync('input.txt').toString();
const [n, lineInput] = input.trim().split('\n');
const inputArr = lineInput.split(' ');

const morseCode = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '--..--': ',',
  '.-.-.-': '.',
  '..--..': '?',
  '---...': ':',
  '-....-': '-',
  '.--.-.': '@',
};

let answer = '';

// 반복문
for (let i = 0; i < inputArr.length; i++) {
  answer += morseCode[inputArr[i]];
}

console.log(answer);
