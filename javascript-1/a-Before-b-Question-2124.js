//QUESTION

//EXAMPLE-1
// Input: s = "aaabbb"
// Output: true
//Explanation:
// The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
// Hence, every 'a' appears before every 'b' and we return true.


// Example 2:
// Input: s = "abab"
// Output: false
// Explanation:
// There is an 'a' at index 2 and a 'b' at index 1.
// Hence, not every 'a' appears before every 'b' and we return false.


//ANSWER

const checkString =(s)=>{
    const arr = ['a','A']
    const indexOfA = -1 
    let indexOfB = -1
    for(let i = 0 ; i<s.length;i++){
        if(s[i] === "a"){
            if(indexOfB > indexOfA){
                return false;
            }
        }
        else if (s[i] === 'b'){
            indexOfB = i;
        }
    }
    return true
}
console.log(checkString("bbb"))   //true
console.log(checkString("aabba")) //false
console.log(checkString("aaabb")) //true