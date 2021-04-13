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
    // write a recursive method for dfs
    return this.depthFirstSearch(s, d, visted);
  }

  depthFirstSearch(source: Node, destination: Node, visited: Set<number>) {
    // it will check if it has visted the node befor and if yes return false
    if(visited.has(source.id)) {
      return false;
    }
    // if not add the id to the visited hash set
    visited.add(source.id);

    // if the source equals the destination, return true
    if (source === destination) {
      return true;
    }
    
    // while the source next ! null return true, else
    while(source.adj !== null) {
      if(this.depthFirstSearch(source.adj, destination, visited)) {
        return true;
      }
    }
    return false;
  }
}