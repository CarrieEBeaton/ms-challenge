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

 function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

  let queue = [];
  queue.push(head);
  let dummyhead = new ListNode(0);
  let current = dummyhead;
  let index = 0;
  
  const length: number = getLength(head);
  const skip : number = length - n;
  while(head && head !== null) {
    if(index !== skip) {
        current.next = new ListNode(head.val);
        current = current.next;
    }
    index++;
    head = head.next;
  }
  return dummyhead.next;
};

function getLength(head: ListNode): number {
  let length = 0;
   while(head && head != null) {
    length++;
    head = head.next;
  }
  return length;
}