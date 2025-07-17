// 공간 복잡도를 줄이기 위해서 while문 안에서 한번에 해결하는 법
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0; // 올림

  while (l1 || l2 || carry) {
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;

    let sum = l1Val + l2Val + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  return dummyHead.next;
}

// 첫 번째 풀이
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let currL1: ListNode | null = l1;
  let currL2: ListNode | null = l2;
  let share: number = 0;
  let nodeArr: number[] = [];

  while (l1 || l2 || share) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;

    const sum = l1Val + l2Val + share;
    const remain = sum % 10;
    nodeArr.push(remain);
    share = Math.floor(sum / 10);

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  let l3: ListNode | null = null;

  for (let i = nodeArr.length - 1; i >= 0; i--) {
    let newNode: ListNode | null;
    newNode = new ListNode(nodeArr[i], l3);
    l3 = newNode;
  }

  return l3;
}
