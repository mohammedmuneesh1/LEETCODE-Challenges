//QUESTION 

//Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.


//ANSWER-1

var lastWord = (s) => {
    let arr = s.trim().split(" ");
    return arr.length === 0 ? 0 : arr[arr.length-1].length; 
};
console.log(lastWord("  hello world  "))


//ANSWER-2 [SHORTEST FORM]
var lengthOfLastWord = (s) => (s.trim().split(" ").pop() || "").length;
//||"") explanation 
console.log(lengthOfLastWord(""))  //0
console.log(lengthOfLastWord("hello world")) //5


//. If the input string s is empty or consists only of spaces, the split(" ") operation may produce an array with an empty string at the last position. When you call pop() on an array with no elements, it returns undefined. If pop() returns undefined, the expression (undefined || "").length will prevent an error and instead evaluate to 0.

