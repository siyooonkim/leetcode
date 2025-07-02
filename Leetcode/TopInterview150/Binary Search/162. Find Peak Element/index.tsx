//// 아직도 이해가 안감 이 조건으로 풀리는 이유가 잘 납득이 안됨
//// O(logn) =>
function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      // 내리막이니까, mid가 피크일 수도 있음
      right = mid;
    } else {
      // 오르막이면 오른쪽에 피크가 있을 수 있음
      left = mid + 1;
    }
  }

  return left; // or right, 같아짐
}

//// O(n)
// function findPeakElement(nums: number[]): number {
//     if(nums.length <= 1) return 0;
//     for(let i=0; i<nums.length; i++){
//         if(i === 0 && nums[0] > nums [1]){
//             return i;
//         }
//         if(i === nums.length-1 && nums[nums.length-1] > nums [nums.length-2]){
//             return i;
//         }

//         if(nums[i] > nums[i-1] && nums[i] > nums[i+1]) return i;
//     }
// };
