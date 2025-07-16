// Two pointer 방법
// 시간 복잡도 O(n)
// 공간 복잡도 O(1)

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

function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return false;
  }

  let slowPointer: ListNode | null = head;
  let fastPointer: ListNode | null = head.next;

  while (slowPointer !== fastPointer) {
    if (fastPointer == null || fastPointer.next == null) return false;
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return true;
}

// Hash Table 방법
// 시간 복잡도 O(n)
// 공간 복잡도 O(n) Set을 사용했는데 최대 O(n) 까지 갈 수 있음
// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     val: number
//  *     next: ListNode | null
//  *     constructor(val?: number, next?: ListNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.next = (next===undefined ? null : next)
//  *     }
//  * }
//  */

// function hasCycle(head: ListNode | null): boolean {
//   if (head) {
//     let nextNode: ListNode | null = head.next;
//     let visited = new Set<ListNode>();
//     visited.add(head);
//     while (nextNode) {
//       if (visited.has(nextNode)) return true;
//       visited.add(nextNode);
//       nextNode = nextNode.next;
//     }
//     return false;
//   }
//   return false;
// }
