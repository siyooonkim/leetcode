// let queue: (TreeNode | null)[] = []; 의 타입 선언에 대해서
// 섞여있는 경우는 위처럼 괄호를 통해서
// TreeNode[] | null[] 은 배열이 TreeNode로만 가득 차 있거나 or null로만 가득 차 있다는 뜻임
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

function invertTree(root: TreeNode | null): TreeNode | null {
  let tempNode: TreeNode | null;

  let queue: (TreeNode | null)[] = [];
  queue.push(root);

  while (queue.length) {
    let node = queue.shift();
    if (!node) continue;

    tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;
    queue.push(node.left);
    queue.push(node.right);
  }

  return root;
}

// root의 left와 right 변경
// root 의 left 와 right 이 이

// 오답, 문제를 완전 잘못 이해
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

function invertTree(root: TreeNode | null): TreeNode | null {
  let tempNode: TreeNode | null;

  tempNode = root.left;
  root.left = root.right;
  root.right = tempNode;
  return root;
}

// root의 left와 right 변경
// root 의 left 와 right 이 이
