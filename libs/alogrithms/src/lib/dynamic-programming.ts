import { Injectable, Pipe } from '@angular/core';

// depth first seach PLUS memoization
// breaking down a problem into smaller problems
// coin change
// how many ways problem - use recursion

@Pipe({ name: 'DynamicProgramming' })
@Injectable({
  providedIn: 'root',
})
export class DynamicProgramming {

  climbStairs(numberOfStairs) {
    const memo: number[] = [numberOfStairs + 1];

    memo[0] = 1;
    memo[1] = 1;
    return this.recurse(numberOfStairs, memo);
  }

  recurse(numberOfStairs: number, memo: number[]) {

    if (memo[numberOfStairs] > 0) {
      return memo[numberOfStairs];
    }
    const waysToCurrentStair: number = this.recurse(numberOfStairs - 1, memo) + this.recurse(numberOfStairs - 2, memo);
    memo[numberOfStairs] = waysToCurrentStair;
    return waysToCurrentStair;
  }
}