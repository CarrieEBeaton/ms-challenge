function letterCombinations(digits: string) {
  // Create something to hold the solution
  let result = new Array<String>();
  
  // needs to know how to loop up relavent information
  if (digits != null && digits.length > 0) {
    const map: string[] = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    depthFirstSearch(digits, map, result = new Array<String>(), '', 0);
  }
  return result;
}

function depthFirstSearch(searchTerm: string, map: string[], result: Array<String>, sb: string, index: number) {

  // know when to stop searching - for example if the index = the end of the array we are done
  // may need to check for dups or wrong answers
  if (index === searchTerm.length) {
    result.push(sb);
    return;
  }

  // get the current digit
  const digit: string = searchTerm.charAt(index);
  const letters = map[digit];
  for (let i = 0; i < letters.length; i++) {
    const ch = letters.charAt(i);
    sb = sb.concat(ch);
    depthFirstSearch(searchTerm, map, result, sb, index + 1);
    sb = sb.slice(0, -1);
  }
}