/*
  Write a function `nonrepeat` which takes a string as input and returns the first non-repeating character in the string.

  What is a non-repeating character?
  - A character that appears only once in the entire string.

  Example:
  - Input: "abcab"
  - Output: "c"

  - Input: "aabbcc"
  - Output: null

  - Input: "abcdef"
  - Output: "a"

  - Input: ""
  - Output: null

  Once you've implemented the logic, test your code by running
  - `npm run test-nonrepeat`
*/
function nonrepeat(str) {
  // Your code here
  
  let ans = "";
  
  for(let char of str){

    if(!ans.includes(char)){
      ans += char;
    }
    else{
      let indx = ans.indexOf(char);
      ans = ans.substring(0,indx) + ans.substring(indx+1, ans.length)
    }
  }

  if (ans == "") return null;
  else return ans[0];
}

// console.log(nonrepeat("abcab"));
// console.log(nonrepeat("aabbcc"));
// console.log(nonrepeat("abcdef"));
// console.log(nonrepeat(""));

module.exports = nonrepeat;
