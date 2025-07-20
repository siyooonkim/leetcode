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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const queue = []; // 이거 타입 설정
  queue.push([p, q]);

  while (queue.length) {
    let [pNode, qNode] = queue.shift();

    if ((pNode && !qNode) || (!pNode && qNode)) return false;

    if (pNode && qNode) {
      if (pNode.val !== qNode.val) return false;
      queue.push([pNode.left, qNode.left]);
      queue.push([pNode.right, qNode.right]);
    }
  }
  return true;
}
