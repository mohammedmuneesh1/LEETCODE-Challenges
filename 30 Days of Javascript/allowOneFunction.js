// 2666. Allow One Function Call
// Easy
// Companies
// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.
 

// Example 1:

// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called
// Example 2:



// Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// Output: [{"calls":1,"value":140}]
// Explanation:
// const onceFn = once(fn);
// onceFn(5, 7, 4); // 140
// onceFn(2, 3, 6); // undefined, fn was not called
// onceFn(4, 6, 8); // undefined, fn was not called
 





// const multiplyFn = (args)=> args.reduce((acc,cur)=>acc*cur,1);

// const multiplyFn = ()=>{
//     let call = 0;
//     return function innerMultiply(args){
//         const result = args.reduce((acc,cur)=>acc*cur,1);
//         let obj = [{"calls":call,value:result }]
//         call++;
//         return obj;
//     }
//     //  result = args.reduce((acc,cur)=>acc*cur,1);
//     //  call++;
//     return [{"calls":call,value:result }]
// }



// const once = (fn)=>{
//     return function innerFn(...args){
//         const result = fn()(args);
//         console.log(result)
//         if(result[0].calls>0) return undefined;
//         return result[0].value;
//         // return fn(args)
//     }
// }

// const onceFn = once(multiplyFn);
// console.log(onceFn(5, 7, 4))
// console.log(onceFn(5, 7, 4))
// console.log(onceFn(5, 7, 4))
// // console.log(onceFn(5, 7, 4))
// // console.log(onceFn(5, 7, 4))
// console.log(onceFn(5, 7, 4))





//
// fn =
// (a1,a2,a3,a4,a5,a6,a7) => (a1 * a5 - a7)  there are more than three arugements so we have to spread the elements to accept according to the parameters.
// calls =
// [[6,4,2,4,5,3,2]]



const sum = (a,b,c)=>a+b+c;

const multiply=(a,b,c)=> a*b*c;



const once = (fn)=>{
    let called= false;
    return function(...args){
        if(!called){
            called = true;
         return fn(...args)
        }
        return undefined;
    }

}

const val = once(multiply);
const val1 = once(multiply);