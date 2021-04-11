function isPalindrome(x: number): boolean {
   
  // in order to do this without converting to a string you could
  // use a stack and queue and if the order of the sta
  const forward = x.toString();  
  const reversed = reverse(x.toString());
  
  if (forward === reversed) {
      return true;
  }
  return false;
};

function reverse(str: string): string {
  let newStr = '';
  for(let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
  }
  return newStr;
} 