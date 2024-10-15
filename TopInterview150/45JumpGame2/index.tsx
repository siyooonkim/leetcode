function jump(nums: number[]): number {
  let jump = 0;
  let curMax = 0;
  let nextMax = 0;
  let end = nums.length - 1;

  for (let i = 0; i < end; i++) {
    if (i + nums[i] > nextMax) {
      nextMax = i + nums[i];
    }

    if (i == curMax) {
      jump += 1;
      curMax = nextMax;
      if (curMax >= end) break;
    }
  }
  return jump;
}
