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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let head = new ListNode(0);
  let curr = head;
  while (list1 || list2) {
    if (!list1) {
      curr.next = new ListNode(list2.val);
      list2 = list2.next;
    } else if (!list2) {
      curr.next = new ListNode(list1.val);
      list1 = list1.next;
    } else if (list1 && list2) {
      if (list1.val > list2.val) {
        curr.next = new ListNode(list2.val);
        list2 = list2.next;
      } else {
        curr.next = new ListNode(list1.val);
        list1 = list1.next;
      }
    }
    curr = curr.next;
  }

  return head.next;
}
