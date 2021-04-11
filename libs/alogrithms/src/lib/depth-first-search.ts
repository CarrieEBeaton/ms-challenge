import { Injectable, Pipe } from '@angular/core';
import { LinkedList } from 'libs/data-structures/src/lib/linked-list';
// import { LinkedList } from '@ms-challenge/data-structures';
// Min height trees
// generate parentheses but make sure to check for invalid paths
// permutations, combination sum, subsets
export class Node {
  id: number
  adj: Node | null
  constructor(id?: number, next?: Node | null) {
    this.id = id;
    this.adj = (this.adj === undefined ? null : this.adj)
  }
}

@Pipe({ name: 'DepthFirstSearch' })
@Injectable({
  providedIn: 'root',
})
export class DepthFirstSearch {

  hasPathDFS(source: number, destination: number) {
    const visted = new Set<number>();
    const s: Node = new Node(source);
    const d: Node = new Node(destination);
    return this.depthFirstSearch(s, d, visted);
  }

  depthFirstSearch(source: Node, destination: Node, visited: Set<number>) {
    if(visited.has(source.id)) {
      return false;
    }
    visited.add(source.id);

    if (source === destination) {
      return true;
    }

    while(source.adj !== null) {
      if(this.depthFirstSearch(source.adj, destination, visited)) {
        return true;
      }
    }
    return false;
  }
}