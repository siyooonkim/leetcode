// 완전 오답: mirror의 뜻을 잘못 이해함

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

function isSymmetric(root: TreeNode | null): boolean {
  // BFS
  let queue: (TreeNode | null)[] = [];
  queue.push(root);

  while (queue.length) {
    let node = queue.shift();
    if (!node) continue;
    console.log(node.left);
    console.log(node.right);
    if (node.left !== node.right) return false;
    queue.push(node.left);
    queue.push(node.right);
  }
  return true;
}
