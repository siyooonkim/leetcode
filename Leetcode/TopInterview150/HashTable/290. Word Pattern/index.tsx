function wordPattern(pattern: string, s: string): boolean {
  let pToSMap = new Map();
  let sToPMap = new Map();
  let sArr = s.split(' ');

  if (pattern.length != sArr.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = sArr[i];
    let letter1 = pToSMap.get(pattern[i]);
    let letter2 = sToPMap.get(sArr[i]);

    if ((letter1 && letter1 != word) || (letter2 && letter2 != char)) return false;

    pToSMap.set(char, word);
    sToPMap.set(word, char);
  }

  return true;
}
