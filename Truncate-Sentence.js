


var truncateSentence = function(s, k) {

    const arr = s.split(" ");
    let str = "";
    for(let i=0;i<k;i++){
        str= str + (arr[i] +" ");
    }
return str.trim();
    
};

console.log(truncateSentence("Hello How are you Contestant",4))
