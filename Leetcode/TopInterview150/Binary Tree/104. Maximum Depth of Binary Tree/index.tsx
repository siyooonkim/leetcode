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

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let maxDepth = 1;
  function findDepth(node, level) {
    if (!node) return;

    findDepth(node.left, level + 1);
    findDepth(node.right, level + 1);

    if (maxDepth < level) maxDepth = level;
    return;
  }

  findDepth(root, 1);
  return maxDepth;
}
