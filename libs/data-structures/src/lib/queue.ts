import { Pipe } from "@angular/core";

// FIFO
@Pipe({ name: 'Queue'})
export class Queue {
  head: Node;
  tail: Node;

  isEmpty(): boolean {
    return this.head === null;
  }

  peek(): number {
    return this.head.data;
  }

  add(data: number) {
    let node: Node = new Node(data);
    if(this.tail !== null) {
      this.tail.next = node;
    }
    this.tail = node;

    if (this.head === null) {
      this.head = node;
    }
  }

  remove(): number {
    let data: number = this.head.data;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }
    return data;
  }
}

class Node {
    data: number;
    public next: Node | null = null;
    public prev: Node | null = null;
    constructor(data: number) {
      this.data = data;
    }
}