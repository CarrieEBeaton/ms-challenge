import { Injectable, Pipe } from '@angular/core';
import { StringBuilder } from 'typescript-string-operations';

@Pipe({ name: 'DepthFirstSearch' })
@Injectable({
  providedIn: 'root',
})
export class DepthFirstSearch {

  letterCombinations(digits: string) {
    // Create something to hold the solution
    let result = new Array<String>();
    
    console.log(digits);
    // needs to know how to loop up relavent information
    if (digits != null && digits.length > 0) {
      const map: string[] = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
      this.depthFirstSearch(digits, map, result = new Array<String>(), '', 0);
    }
    return result;
  }

  depthFirstSearch(searchTerm: string, map: string[], result: Array<String>, sb: string, index: number) {

    // know when to stop searching - for example if the index = the end of the arrray we are done
    // may need to check for dups or wrong answers
    console.log(searchTerm.length);
    if (index === searchTerm.length) {
      result.push(sb);
      return;
    }

    // get the current digent
    const digit: string = searchTerm.charAt(index);
    const letters = map[digit];
    for (let i = 0; i < letters.length; i++) {
      const ch = letters.charAt(i);
      sb = sb.concat(ch);
      this.depthFirstSearch(searchTerm, map, result, sb, index + 1);
      sb = sb.slice(0, -1);
    }
  }
}