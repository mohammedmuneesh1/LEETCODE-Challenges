// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.

// var createCounter = function(n) {
//     var count = n;
//     var counter =function(){
//         return count++;
//     }
//     return counter;
// };
// var counterFunction = createCounter(10);

// console.log(counterFunction())
// console.log(counterFunction())


 function hello(n){
    let count = n;

    return count++
}
console.log(hello(10))