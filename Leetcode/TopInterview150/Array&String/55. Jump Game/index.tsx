function canJump(nums: number[]): boolean {
  let maxReach: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (maxReach < i) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach > nums.length - 1) return true;
  }
  return true;
}

// maxReach는 현재 요소에서가 아닌 0번째에서 최대로 갈 수 있는 수
// maxReach vs i+nums[i] 를 비교해서 maxReach 갱신
// 그렇기 때문에 maxReach의 값이 현재 순회중인 인덱스 값보다 작다면 더이상 나갈 수 없다는 뜻 => false 반환
// 반대로 갱신된 maxReach의 값이 nums.length의 길이보다 크거나 같으면
