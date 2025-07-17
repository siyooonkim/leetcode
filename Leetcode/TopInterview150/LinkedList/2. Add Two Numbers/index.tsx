// 첫 번째 풀이
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let currL1: ListNode | null = l1;
  let currL2: ListNode | null = l2;
  let share: number = 0;
  let nodeArr: number[] = [];

  while (currL1 || currL2 || share) {
    const l1Val = currL1 ? currL1.val : 0;
    const l2Val = currL2 ? currL2.val : 0;

    const sum = l1Val + l2Val + share;
    const remain = sum % 10;
    nodeArr.push(remain);
    share = Math.floor(sum / 10);

    currL1 = currL1 ? currL1.next : null;
    currL2 = currL2 ? currL2.next : null;
  }

  let l3: ListNode | null = null;

  for (let i = nodeArr.length - 1; i >= 0; i--) {
    let newNode: ListNode | null;
    newNode = new ListNode(nodeArr[i], l3);
    l3 = newNode;
  }

  return l3;
}
