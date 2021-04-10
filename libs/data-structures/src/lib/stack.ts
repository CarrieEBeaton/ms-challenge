import { Pipe } from "@angular/core";
import { throwError } from "rxjs";

// LIFO
@Pipe({ name: 'Stack'})
export class Stack {
  top: Node;

  isEmpty(): boolean {
    return this.top === null;
  }

  peek(): number {
    if (this.top === null) {
      throwError('top is null');
    }
    return this.top.data;
  } 

  push(data: number): void {
    if (this.top === null) {
      throwError('top is null');
    }
    let node: Node = new Node(data);
    node.next = this.top;
    this.top = node;
  }

  pop(): number {
    if (this.top === null) {
      throwError('top is null');
    }
    let data: number = this.top.data;
    this.top = this.top.next;
    return data;
  } 
}

class Node {
  data: number;
  public next: Node | null = null;
  constructor(data: number) {
    this.data = data;
  }
}
