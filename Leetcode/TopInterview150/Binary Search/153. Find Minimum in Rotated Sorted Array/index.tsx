function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  if (nums[left] > nums[right]) {
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > nums[right]) {
        // 오른쪽 기준 left를 1씩 증가시키는 방법
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }

  return nums[left];
}
