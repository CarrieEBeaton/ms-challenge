function romanToInt(s: string): number {
    
  let total: number = 0;
  let numsToSum = [];
  for(let i = 0; i < s.length; i++) {

      if (s[i] + s[i + 1] === 'IV') {
          numsToSum.push(4);
          i += 1;
      } else if(s[i] + s[i + 1] === 'IX'){
          numsToSum.push(9);
          i += 1;
      } else if(s[i] + s[i + 1] === 'XL'){
          numsToSum.push(40);
          i += 1;
      } else if(s[i] + s[i + 1] === 'XC'){
          numsToSum.push(90);
         i += 1;
      } else if(s[i] + s[i + 1] === 'CD'){
          numsToSum.push(400);
         i += 1;
      }  else if(s[i] + s[i + 1] === 'CM'){
        numsToSum.push(900);
          i += 1;
      } else {
          const num: number = getRomanValue(s.charAt(i));
          numsToSum.push(num);
      }
      
  }
    console.log(numsToSum);
    for(let i = 0; i < numsToSum.length; i++) {
        total += numsToSum[i];
    }
  return total;
};

function getRomanValue(s) {
    let total = 0;
      switch(s) {
        case 'I':
            total = 1;
            break;
        case 'V':
            total = 5;
            break;
        case 'X':
            total = 10;
            break;
        case 'L':
            total = 50;
            break;
        case 'C':
            total = 100;
            break;
        case 'D':
            total = 500;
            break;
        default: 
            total = 1000;
            break;
    }
    console.log(total);
    return total;
}