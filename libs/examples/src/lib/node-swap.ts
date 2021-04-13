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

 function swapNodes(head: ListNode | null, k: number): ListNode | null {
    
  let dummyhead = new ListNode(0);
  let current = dummyhead;
  let numberToSwap: number = 0;
  let linkedListLength = getLengthOfLinkedList(head);
  let numToSwap: number = linkedListLength - k;
  let swap = getNumberToSwap(head, numToSwap);
  let index = 1;
  let lastSwap: number = 0;

  console.log(numToSwap);
  while(head && head !== null) {
      
      if(index === k) {
          current.next = new ListNode(swap);
          current = current.next;
          console.log('here');
          lastSwap = head.val; 
          console.log(lastSwap);       
        
      } else if(index === numToSwap) {
          current.next = new ListNode(lastSwap);
          current = current.next;
      } else {
          current.next = new ListNode(head.val);
          current = current.next;
      }
      index++;
      head = head.next;
  }
  return dummyhead.next;
};

function getNumberToSwap(head: ListNode, numToSwap: number): number {
   let index: number = 1;
   let swap: number = 0;
   while(head && head !== null) {
      if (index === numToSwap) {
          swap = head.val;
      }
      head = head.next;
      index++;
  }
  return swap;
}

function getLengthOfLinkedList(head: ListNode) {
  let arr: number[] = [];
  while(head && head !== null) {
      arr.push(head.val);
      head = head.next;
  }
  
  return arr.length + 1;
}