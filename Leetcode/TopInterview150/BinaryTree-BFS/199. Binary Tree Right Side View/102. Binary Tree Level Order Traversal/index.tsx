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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  let queue: TreeNode[] = [root];
  let answer = [];

  while (queue.length > 0) {
    let level = queue.length;
    let currentLevel = new Array(queue.length);

    for (let i = 0; i < level; i++) {
      let node = queue.shift()!;
      currentLevel[i] = node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    answer.push(currentLevel);
  }

  return answer;
}
