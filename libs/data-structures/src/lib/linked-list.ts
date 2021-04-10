import { Pipe } from "@angular/core";

export class Node {
  data: number;
  public next: Node | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

@Pipe({ name: 'LinkedList'})
export class LinkedList {
  head: Node | null = null;

  public append(data: number): void {
    if(this.head === null) {
      this.head = new Node(data);
      return;
    }

    let current: Node = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = new Node(data);
  }

  public prepend(data: number): void {
    let newHead: Node = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  public deleteWithValue(data: number): void {
    if(this.head === null) {
      return;
    }    

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current: Node = this.head;
    while (current.next != null) {
      if (current.next.data == data) {
        current.next = current.next.next;
        return;
      }

      current = current.next;
    }
    
  }

}