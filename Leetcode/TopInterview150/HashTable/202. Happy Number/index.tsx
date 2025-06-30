function isHappy(n: number): boolean {
  const set = new Set();
  while (n !== 1) {
    let newN = 0;
    while (n !== 0) {
      const leftNumber = n % 10;
      newN += leftNumber ** 2;
      n = Math.floor(n / 10);
    }
    n = newN;
    if (set.has(n)) {
      return false;
    }
    set.add(n);
  }
  return true;
}
