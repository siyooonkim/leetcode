function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);

  let count = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let streak = 1;
      while (set.has(num + streak) && !set.has(num - 1)) {
        streak++;
      }
      count = Math.max(count, streak);
    }
  }
  return nums.length > 0 ? count : 0;
}
