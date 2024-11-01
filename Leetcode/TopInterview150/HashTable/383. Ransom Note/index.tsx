function canConstruct(ransomNote: string, magazine: string): boolean {
  let hashTable = new Map();

  for (const char of magazine) {
    const count = hashTable.get(char);
    hashTable.set(char, (count || 0) + 1);
  }

  for (const char of ransomNote) {
    const count = hashTable.get(char);
    if (!count) return false;
    hashTable.set(char, count - 1);
  }

  return true;
}

// ransomNote에 있는 단어가 magazine에 있어야함
// 해시테이블인 이유
// magazine에 있는 각 문자가 몇번 나오는지 카운트하고
// ransomNote에 있는 문자를 순회하며 카운트한 magazine 문자들로 만들 수 있는지 확인
// hashTable => {key: 글자, value: count}
// ransomNote를 순회하며 value가 0이거나 문자가 없으면 false
//  magazine에 있으면 count-1
