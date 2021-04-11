/**
 * Definition for singly-linked list. */
 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

 function swapPairs(head: ListNode | null): ListNode | null {
  
  const que = [];
  que.push(head);
  let swap: boolean = true;
  if(head === null || head.next === null) {
      return head;
  }
  const dummyhead = new ListNode(0);
  let curr = dummyhead;

  while(head && head.next) {
      
    if (swap) {
        curr.next = new ListNode(head.next.val);
        curr = curr.next;
        curr.next = new ListNode(head.val);
        curr = curr.next;
        swap = false;
    } else {
        swap = true;
        if (head.next.next === null) {
             curr.next = new ListNode(head.next.val);
             curr = curr.next; 
        }
    }
    head = head.next;
  }

  return dummyhead.next;
};