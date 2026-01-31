/*
  Write a function `getPrimesUpTo100` which returns an array of all prime numbers up to 100.

  What is a prime number?
  - A prime number is a number greater than 1 that has no divisors other than 1 and itself.

  Example:
  - Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

  - Input: There is no input, the function returns an array of primes.

  - Input: N/A

  Once you've implemented the logic, test your code by running
  - `npm run test-prime`
*/

function getPrimesUpTo100() {
  // Your code here
  
    let lastPrimeNumAt = 100
    let lastSearchValue = Math.round(Math.sqrt(lastPrimeNumAt));

    let inputArr = Array(lastPrimeNumAt+1).fill(true);
    let outputArr = [];

    let i = 2;

  for(let i = 2; i<=lastSearchValue; i++){

      if(inputArr[i] == true){

        outputArr.push(i);
        for(j= i+1; j<=lastPrimeNumAt; j++){

            if(j%i == 0){
              inputArr[j] = false;
            }
        }
        console.log(`${inputArr[i]} + ${i}`)
      }
  }

  for(let i=lastSearchValue+1; i<=lastPrimeNumAt; i++){
      if(inputArr[i] == true) outputArr.push(i);
  }

  return outputArr;
}

module.exports = { getPrimesUpTo100 };
