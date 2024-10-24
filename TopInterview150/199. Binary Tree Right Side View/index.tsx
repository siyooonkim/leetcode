// 1. BFS인 이유
// 각 level의 가장 마지막 요소를 answer 배열에 넣어야한다.
// 즉, 각 level에 있는 모든 요소를 탐색하고 다음 level로 넘어간다.

// 2. 접근 방법
// root를 받아서 가장 처음 노드를 queue에 넣어준다.
// queue.length 는 level이 된다.
// 1 => 값 한개만 들어있으면 level 1
// 2 3 => 두개가 들어가면 level 2
// null 5 null 4 => 4개가 들어가면 level 3 이런 식
// level을 순회하며 가장 마지막 요소를 answer에 넣어주고
// 마지막 탐색이 끝나면 다음 노드를 queue를 넣어준다.

// 3. 수도 코드
// root == null => return answer
// while (queue > 0)
// queue를 반복하여 노드를 순회한다.
// let node = queue.shift()! ;
// shift()다음 !을 하는 이유 => undefined가 반환되지 않음을 단정하여 컴파일 에러를 방지
// queue를 업데이트 한다.
// 현재 노드의 left와 right를 queue에 push
// 조건문: node의 순서가 queue.length-1 번째 즉 "마지막 노드"인 경우 => answer에 push

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function rightSideView(root: TreeNode | null): number[] {
  let answer = [];
  if (!root) return answer;

  let queue: TreeNode[] = [root];

  while (queue.length > 0) {
    let level = queue.length;
    // level을 while문 안에 넣어주는 이유
    // queue의 길이는 계속 변동한다
    // 그렇기 때문에 큰 틀에서 while문이 queue가 빌때까지 반복하는거구,
    // 각 레벨에서는 고정된 값으로 for반복문을 돌려야하기 때문
    for (let i = 0; i < level; i++) {
      let node = queue.shift()!;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      if (i == level - 1) answer.push(node.val);
    }
  }

  return answer;
}
