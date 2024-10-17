
//QUESTION-1
// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65



// ANSWER


const compose1 = (arr)=>{
    return function(x){
        return arr.reduceRight((acc,fn)=>fn(acc),x);
    }
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */








const double = x => x * 2;
const increment = x => x + 1;
const decrement = x=>x-1;

const compose2 = (...arr)=>{
    return function (x){
        return arr.reduceRight((acc,fn)=>fn(acc),x);
    }
}

const result = compose2(double,increment,decrement)(4);
console.log(result)