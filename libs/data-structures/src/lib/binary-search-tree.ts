import { Pipe } from "@angular/core";

@Pipe({ name: 'Node'})
export class Node {
  data: number;
  public left: Node | null = null;
  public right: Node | null = null;
  constructor(data: number) {
    this.data = data;
  }

  public insert(value: number) {
    if (value <= this.data) {
      if (this.left === null) {
        this.left = new Node(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new Node(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  public contains(value: number): boolean {
    if (value === this.data) {
      return true;
    } else if (value < this.data) {
      if(this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }
}

export interface INode {
  insert(data: number): number;
  contains(data: number): boolean;
  printInOrder(): void;
}
