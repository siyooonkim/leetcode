// 시간 복잡도: O(n)
function isIsomorphic(s: string, t: string): boolean {
  let sToTMap = new Map();
  let tToSMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (sToTMap.has(s[i])) {
      if (sToTMap.get(s[i]) != t[i]) return false;
    } else {
      sToTMap.set(s[i], t[i]);
    }

    if (tToSMap.has(t[i])) {
      if (tToSMap.get(t[i]) != s[i]) return false;
    } else {
      tToSMap.set(t[i], s[i]);
    }
  }
  return true;
}
