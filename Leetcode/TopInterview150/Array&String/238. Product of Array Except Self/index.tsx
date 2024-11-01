function productExceptSelf(nums: number[]): number[] {
  // 요소의 왼쪽에 있는 값을 곱해준다.
  // 요소의 오른쪽에 있는 값을 곱해준다.
  // 위 두 값을 곱해준다. => 현재 요소를 제외한 왼쪽 오른쪽 요소의 곱이 나온다.
  let n = nums.length;
  let answer = Array(nums.length).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct;
    leftProduct = leftProduct * nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] = answer[i] * rightProduct;
    rightProduct = rightProduct * nums[i];
  }

  return answer;
}
