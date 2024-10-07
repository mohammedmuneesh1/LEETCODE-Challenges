var createCounter = function(n) {
    return function() {
        return n++;
    };
};

const counter = createCounter(10);

console.log(counter()); //10
console.log(counter()); //11


notes//

// It first uses n++ It returns the current value of n, and then increments n after the value has been returned.
//When you call counter() for the first time, n is 10.
//When you call counter() for the second time, n is 11.
//when you call counter() for the thrird time, n is 12

//A closure is created when the inner function (returned by createCounter),
// is defined inside another function (in this case, inside createCounter), and it "remembers" the environment in which it was created.

//Specifically, the returned function "remembers" the variable n from createCounter 
//even after createCounter has finished executing. This allows the function returned by createCounter
// to access and modify n even after the outer function has completed.


//Why counter() remembers n:

//Even though createCounter finishes executing, 
//the returned function still has access to the variable n because of the closure.
// This means that each time you call counter(), the same n is used and incremented.