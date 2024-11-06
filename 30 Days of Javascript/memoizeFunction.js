


//NOTE

//A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

//This problem asks you to create a memoized version of a function, which means that when the function is called with specific inputs,
// the result is stored in a cache.
// The next time the function is called with the same inputs, it can return the cached result without re-executing the function logic.
// This helps improve performance for repeated computations, especially for functions like fib and factorial that have recursive definitions.


// Memoization Concept
// Memoization is a technique to store the results of expensive function calls and reuse the result when the same inputs occur again. In this problem:

// If a function has already been called with a certain set of arguments, you should return the cached result.
// You need to track how many times the underlying function (e.g., sum, fib, or factorial) was actually invoked (not just how many times the memoized function was called).





function memoize(fn) {
    const cache = {};
    let callCount = 0; //(to mark unique call count  of the function) This initializes a variable callCount to track how many times the original function (in this case, sum) has been called with unique inputs.

    const memoizedFn = function(...args) {
        const key = JSON.stringify(args); // Convert the arguments into a key string
         console.log(key)
        if (cache.hasOwnProperty(key)) {
            return cache[key];
        }
        const result = fn(...args); // Call the original function
        console.log(result)
        cache[key] = result;        // Store the result in cache
        callCount++;                // Increment call count
        return result;
    };




    // Method to get the call count
    memoizedFn.getCallCount = function() {
        return callCount;
    };


    return memoizedFn;
}

// Usage example
const sum = (a, b) => a + b;

const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2));    // 4, actual call
console.log(memoizedSum(2, 3));    // 4, actual call
console.log(memoizedSum.getCallCount());    // 4, cached


// console.log(memoizedSum(2, 2));    // 4, actual call
// console.log(memoizedSum(2, 2));    // 4, cached
// // console.log(memoizedSum.getCallCount()); // 1
// // console.log(memoizedSum(1, 2));    // 3, actual call
// // console.log(memoizedSum.getCallCount()); // 2
// console.log(memoizedSum.hello())





// let ab = [2,2];
// console.log(JSON.stringify(ab))


let obj = {}