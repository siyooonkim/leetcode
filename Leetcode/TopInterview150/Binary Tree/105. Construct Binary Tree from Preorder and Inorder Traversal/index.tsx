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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {}

// 규칙을 잘 찾아서 전략 짠거
//
// queue에서 숫자 3을 뺀다.
// 다음 숫자 (9) inoder에서 3보다 왼쪽에 위치하면 3의 left는 9, 아니라면 left는 null
// 다음 숫자 (20) inoder에서 3보다 오른쪽에 위치하면 3의 right는 20, 아니라면 right는 null
// left와 right가 채워졌으므로 다음 순회로 넘어가야한다.
// queue에 숫자 9와 20을 넣는다. (둘 다 사용 되었기 때문)

// queue에서 숫자 9를 뺀다.
// 9는 root 기준 왼쪽에 있는 놈
// 다음 숫자 (15)는 inoder에서 9보다 왼쪽에 위치 && root보다 왼쪽에 위치 하면 9의 left는 15,
//     아니라면 left는 null (15 사용 X)
// 다음 숫자 (15) inoder에서 9보다 오른쪽에 위치하고 && root보다 왼쪽에 위치 9의 right 는 15
//     아니라면 null (15 사용 X)
// 둘 다 null이므로 queue에 넣지 않는다.

// queue에서 숫자 20을 뺀다.
// 20은 root기준 오른쪽에 있는 놈 (오른쪽 로직 적용)
// 다음 숫자 (15) inoder에서 20보다 왼쪽에 위치 && root보다 오른쪽에 위치 하면 20의 left는 15,
//     아니라면 left는 null
// 다음 숫자 (7) inoder에서 20보다 오른쪽에 위치하고 && root보다 오른쪽에 위치 하면 20의 right는 7,
//     아니라면 right은 null
