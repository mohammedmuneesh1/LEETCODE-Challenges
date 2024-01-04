// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"


const firstPalindrome = (words)=>{
 
    for(let i = 0 ;i<words.length;i++){
        if(words[i] === words[i].split("").reverse().join("")){
            return words[i];
        }

    }
    return ""

}
// const wordsArr = ["abc","car","ada","racecar","cool"]
const wordsArr =  ["def","ghi"]

console.log(firstPalindrome(wordsArr))