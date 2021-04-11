export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let val1 = this.getReverseOrder(l1);
    let reversed1 = this.reverse(val1);
    let val2 = this.getReverseOrder(l2);
    let reversed2 = this.reverse(val2);

    let newVal = +reversed1 + +reversed2;

    let reversed3 = this.reverse(newVal.toString());
    let dummyHead = new ListNode(0);
    let curr = dummyHead;

    for (let i = 0; i < reversed3.length; i++) {
      curr.next = new ListNode(+reversed3[i]);
      curr = curr.next;
    }

    return dummyHead.next;
  };

  reverse(str) {
    let newStr: string = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr;
  }

  getReverseOrder(listNode: ListNode | null) {
    let val1: string = '';
    let current: ListNode = listNode;
    val1 += current.val;
    while (current.next !== null) {

      current = current.next;
      val1 += current.val;
    }
    return val1;
  }
}