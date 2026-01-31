/*
  Write a function `compressWords` which takes an array of strings as input and returns a new array with consecutive duplicate elements compressed. If an element appears consecutively, it is replaced by the element followed by the count of its occurrences.

  Example:
  - Input: ["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]
  - Output: ["apple2", "banana3", "cherry", "apple2"]

  - Input: ["cat", "dog", "dog", "dog", "cat"]
  - Output: ["cat", "dog3", "cat"]

  - Input: ["one", "two", "three"]
  - Output: ["one", "two", "three"]

  - Input: []
  - Output: []

  Note:
  - The function should handle empty arrays and arrays with no consecutive duplicates.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressWord`
*/


function compressWords(arr) {
  // Your code here
  let newArray = [];
  let count = 0;
  let currWord;
  let lastWord = "";

  for(let word of arr) {

    if(word != lastWord){
      
      if(count >=1) {
          if(count > 1) {
            lastWord += count;
          }
          newArray.push(lastWord);
          count = 0;
      }
      if(count == 0){
        count++;
        lastWord = word;
      }
    }
    else{
      count++;
    }
  }

  if(count >=1) {
          if(count > 1) {
            lastWord += count;
          }
          newArray.push(lastWord);
          count = 0;
      }

  return newArray;
}

console.log(compressWords(["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]))
console.log(compressWords(["cat", "dog", "dog", "dog", "cat"]))
console.log(compressWords(["one", "two", "three"]))
console.log(compressWords([]))


module.exports = compressWords;
