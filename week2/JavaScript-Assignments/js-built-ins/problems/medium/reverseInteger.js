/*
  Write a function `reverseInteger` which takes an integer as input and returns the integer with its digits reversed. If the input is negative, the reversed integer should also be negative.

  What is reversing an integer?
  - Reversing an integer means rearranging its digits in the opposite order while maintaining its sign.

  Example:
  - Input: 123
  - Output: 321

  - Input: -456
  - Output: -654

  - Input: 100
  - Output: 1

  - Input: 0
  - Output: 0

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseInteger`
*/

function reverseInteger(num) {
  // Your code here
    let isNegative = false;
    let newNum = 0;

    if(num < 0) {
      isNegative = true;
      num *= -1;
    }  

    // console.log(num)

    while(num){
      let r = num%10;
      newNum = (newNum*10) + r;
      num = Math.floor(num/10);
      // console.log(`r = ${r}`)
      // console.log(`num = ${num}`)
      // console.log(`newNum = ${newNum}`)
      // console.log("-------------------")
    }

    if(isNegative) newNum *= -1;

    return newNum;

}

module.exports = reverseInteger;
