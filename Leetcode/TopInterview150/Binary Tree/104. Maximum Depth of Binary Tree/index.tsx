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

// 재귀 하는 경우에 되도록 전역 변수 안쓰는게 좋음
// 그리고 값을 0 아니면 count로 리턴하는게 좋음
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  function findLastDepth(node: TreeNode | null) {
    if (!node) return 0;

    let leftDepth = findLastDepth(node.left);
    let rightDepth = findLastDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
  }

  return findLastDepth(root);
}

// /**
//  * Definition for a binary tree node.
//  * class TreeNode {
//  *     val: number
//  *     left: TreeNode | null
//  *     right: TreeNode | null
//  *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.left = (left===undefined ? null : left)
//  *         this.right = (right===undefined ? null : right)
//  *     }
//  * }
//  */

// function maxDepth(root: TreeNode | null): number {
//   if (!root) return 0;

//   let maxDepth = 1;
//   function findDepth(node, level) {
//     if (!node) return;

//     findDepth(node.left, level + 1);
//     findDepth(node.right, level + 1);

//     if (maxDepth < level) maxDepth = level;
//     return;
//   }

//   findDepth(root, 1);
//   return maxDepth;
// }
