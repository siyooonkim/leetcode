function groupAnagrams(strs: string[]): string[][] {
  let anagrams = new Map<string, string[]>();

  for (let word of strs) {
    let sortedWord = word.split('').sort().join();
    let group = anagrams.get(sortedWord) || [];
    group.push(word);
    anagrams.set(sortedWord, group);
  }

  return Array.from(anagrams.values());
}
