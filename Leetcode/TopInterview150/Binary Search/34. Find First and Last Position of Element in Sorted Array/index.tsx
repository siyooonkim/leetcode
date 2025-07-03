// 다시 풀어보기
function searchRange(nums: number[], target: number): number[] {
  let start = -1;
  let end = -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      let newLeft = left;
      let newRight = mid;
      while (newLeft <= newRight) {
        let newMid = Math.floor((newLeft + newRight) / 2);
        if (nums[newMid] == target) {
          newRight = newMid - 1;
        } else {
          newLeft = newMid + 1;
        }
      }
      start = newLeft;
      newLeft = mid;
      newRight = right;
      while (newLeft <= newRight) {
        let mid = Math.floor((newLeft + newRight) / 2);
        if (nums[mid] <= target) {
          newLeft = mid + 1;
        } else {
          newRight = mid - 1;
        }
      }
      end = newRight;
      return [start, end];
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return [start, end];
}
