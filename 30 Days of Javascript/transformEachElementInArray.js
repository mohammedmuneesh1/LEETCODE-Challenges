// QUESTION

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.
 


// const arr1 = [1, 2, 3];
// const plusOne = function(n) { return n + 1; };
// console.log(map(arr1, plusOne)); // Out

// var map = function(arr, fn) {
//     const result = new Array(arr.length).fill(".");
//     console.log(result)
    
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = fn(arr[i], i);
//     }
    
//     return result;
// };





// console.log(map([1, 2, 3], function plusOne(n) { return n + 1; }))




var map  =(arr,fn)=>{
    const result = new Array(arr.length);

    for(i=0;i<arr.length;i++){

        result[i]= fn(arr[i],i);

    }
    return result;

}


const val = map([1,2,3],function(n){return n+1});
const incrementI = map([1,2,3],function (n,i){return n+i});
const constant = map([1,2,3],function(){return 42});
console.log(val) //[2,3,4]
console.log(incrementI) //[1,3,5]
console.log(constant) //[42,42,42]

