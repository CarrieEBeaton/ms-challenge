function generateParenthesis(n: number): string[] {

  let result: string[] = [];
  let s = '';
  
  // needs to know how to loop up relavent information
  if (n != null && n > 0) {
    depthFirstSearch(result, n, n, s);
  }
  return result;
};


function depthFirstSearch(result: string[], open: number, close: number, s: string) {

  // know when to stop searching - for example if the index = the end of the array we are done
  // may need to check for dups or wrong answers
  if (open === 0 && close === 0) {
    result.push(s);
    return;
  }
  let opening = '(';
  let closing = ')';
 
	if (open > 0) {
		depthFirstSearch(result, open-1, close, s+opening);
	}
	if (close > open) {
		depthFirstSearch(result, open, close-1, s+closing);
	}

}