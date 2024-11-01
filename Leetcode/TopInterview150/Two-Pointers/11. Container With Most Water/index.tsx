function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    let h = Math.min(height[left], height[right]);
    let w = right - left;
    let area = h * w;
    maxArea = Math.max(maxArea, area);

    height[left] < height[right] ? left++ : right--;
  }

  return maxArea;
}
