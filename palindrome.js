//QUESTION

//Input: x = 121
// Output: true;
//Input: x = -121
// Output: false




//TWO ANSWERS
//ANSWER-1


var isPalindrome = function(x) {
    let str = x.toString();
    let len = str.length;
    let isPalindrome = true;
    let output=false;
    for(let i = 0; i < len; i++) {
        if(str[i] !== str[len - i - 1]) {
            isPalindrome = false;
            break;
        }
    }
    if(isPalindrome) {
        output = true;
    } else {
        output = false;
    }
    return  output  ;
};
console.log(isPalindrome(121));  //true
console.log(isPalindrome(-121))  //false



//ANSWER 2

var isPalindrome = function(x) {
    const y = x.toString().split("").reverse().join("");
      if (y == x){
          return true
      }{
          return false
      }
  };