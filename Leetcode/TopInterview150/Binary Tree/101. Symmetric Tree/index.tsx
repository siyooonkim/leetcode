// 통과는 했음
// 지나가던 사람이 봐도 코드 가독성 토나올것같음
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
  const queue: (TreeNode | null)[][] = [];
  queue.push([root.left, root.right]);
  while (queue.length) {
    let nodeArr = queue.shift();
    let valArr = [];
    let nextArr = [];
    for (let node of nodeArr) {
      if (node) {
        valArr.push(node.val);
        nextArr.push(node.left);
        nextArr.push(node.right);
      } else {
        valArr.push(null);
      }
    }
    for (let i = 0; i < valArr.length / 2; i++) {
      if (valArr[i] !== valArr[valArr.length - 1 - i]) return false;
    }

    if (!nextArr.length) return true;
    queue.push(nextArr);
  }
}

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
