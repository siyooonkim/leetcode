function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  // 1. pivot 찾기
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[right] < nums[mid]) {
      // 여기가 가장 중요함!
      // 오른쪽에 있는 pivot 인덱스를 찾기위해 (4,5,6,7,0,1,2라면 pivot 인덱스는 0) "오른쪽을 기준으로 범위"를 좁혀나감,
      // 그래서 if 첫 조건으로 right와 mid를 비교 ()
      // 루프 조건이 left < right때 까지, left값이랑 right값이 같아질 때 루프 멈춤 => 즉 left가 pivot이 됨
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  let pivot = left; // right도 같은 값

  // 2. left, right 범위 조정
  left = 0;
  right = nums.length - 1;
  if (target >= nums[0] && target <= nums[pivot - 1]) {
    right = pivot - 1;
  } else {
    left = pivot;
  }

  // 3. target 찾기
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
