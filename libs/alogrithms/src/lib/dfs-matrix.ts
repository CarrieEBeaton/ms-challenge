import { Injectable, Pipe } from '@angular/core';

// number of enclaves
// surrounded regions

// word search
// smallest rectangle enclosing black pixels

@Pipe({ name: 'DepthFirstSearchMatrix' })
@Injectable({
  providedIn: 'root',
})
export class DepthFirstSearchMatrix {

  private sizeOuter: number;
  private sizeInner: number;

  numberOfIslands(grid: string[][]) {
    let count = 0;
    this.sizeOuter = grid.length;

    if (this.sizeOuter === 0) {
      return 0;
    }

    this.sizeInner = grid[0].length;

    for (let i = 0; i < this.sizeOuter; i++) {
      for (let j = 0; j < this.sizeInner; j++) {
        if (grid[i][j] === '1') {
          this.sink(grid, i, j);
          ++count;
        }
      }
    }
    return count;
  }
  // terminate when you run out of bounds or when you hit a 0 // base case

  sink(grid: string[][], i: number, j: number) {
    if (i < 0 || j < 0 || i >= this.sizeOuter || j >= this.sizeInner || grid[i][j] !== '1') {
      return; // terminate when you run out of bounds - in this case you can also terminate when you hit 0
    }

    // make sure we don't check this spot again
    grid[i][j] = '0';

    // all the poss paths we can dfs to from here
    this.sink(grid, i + 1, j);
    this.sink(grid, i - 1, j);
    this.sink(grid, i, j + 1);
    this.sink(grid, i, j - 1);
  }
}