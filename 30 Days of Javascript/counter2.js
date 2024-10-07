

const createCounter = (outerVal)=>{
    const outerValreset = outerVal;
    return{
        increment:()=> ++outerVal,
        reset:()=> (outerVal = outerValreset),
        decrement:()=>  --outerVal,
    }
}

const counter = createCounter(-5);
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())


// [-6,-7,-8,-9]

// init =
// -5
// calls =
// ["decrement","decrement","decrement","decrement"]





 console.log(counter.increment())
 console.log(counter.increment())
 console.log(counter.decrement())
 console.log(counter.reset())
 console.log(counter.reset())



// init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0





// console.log(counter.increment())
// console.log(counter.reset())
// console.log(counter.decrement())


// increment","reset","decrement"]