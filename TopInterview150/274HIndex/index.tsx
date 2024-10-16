function hIndex(citations: number[]): number {
  let sorted = citations.sort((a, b) => b - a);
  let h = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (i + 1 <= sorted[i]) {
      h += 1;
    } else {
      break;
    }
  }
  return h;
}
