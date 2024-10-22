function isSubsequence(s: string, t: string): boolean {
  let sIdx = 0;
  let tIdx = 0;

  while (tIdx < t.length && sIdx < s.length) {
    if (s[sIdx] == t[tIdx]) {
      sIdx++;
    }
    tIdx++;
  }

  return sIdx == s.length;
}
