/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const queue: TreeNode[] = [root];
  const answer: number[][] = [];
  let isReverse = false;

  while (queue.length > 0) {
    let levelSize = queue.length;
    let arr = new Array(levelSize);

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift()!;
      arr[isReverse ? levelSize - 1 - i : i] = node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    answer.push(arr);
    isReverse = !isReverse;
  }

  return answer;
}
