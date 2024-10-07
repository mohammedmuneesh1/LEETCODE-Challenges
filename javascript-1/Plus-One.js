//QUESTION

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

//ANSWER 

var plusOne = (digits)=>   String(BigInt(digits.join(""))+BigInt(1)).split("").map(Number);
console.log(plusOne([1,2,3]))