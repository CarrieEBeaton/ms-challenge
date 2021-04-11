import { Injectable, Pipe } from '@angular/core';

// Graph problems can be dfs and bfs

// N = 4

// [[0,1], [1,2], [1,3]]

// start at the edges and cut out all the leaves to end up in the center and search
export class Node {
  id: number
  adj: Node | null
  constructor(id?: number, next?: Node | null) {
    this.id = id;
    this.adj = (this.adj === undefined ? null : this.adj)
  }
}

@Pipe({ name: 'BreadthFirstSearch' })
@Injectable({
  providedIn: 'root',
})
export class BreadthFirstSearch {
  // set up the adjacency list

  // populate the adjacency list with all the nodes' neighbors

  // create a visted array where false = unvisitied and true = visited

  hasPathBFS(source: Node, destination: Node) {
    let queue = [];
    const visited = new Set<number>();
    queue.push(source);
    
    while (queue.length > 0) {
      const leaf = queue.shift();

      if (leaf === destination) {
        return true;
      }

      if(visited.has(destination.id)) {
        continue;
      }

      visited.add(leaf.id);

      while(source.adj !== null) {
        queue.push(source.adj);
      }
    }
    return false;
  }
}
