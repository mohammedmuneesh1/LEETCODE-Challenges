

//QUESTION

// Example 1:

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10
// Example 2:

// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]
// Explanation:
// fn can also accept the index of each element
// In this case, the function removes elements not at index 0
// Example 3:

// Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]
// Explanation:
// Falsey values such as 0 should be filtered out


//ANSWER


const filter = (arr,fn)=>{
    const result = []
    for(let i=0 ;i < arr.length;i++){
        if(fn(arr[i],i)){
            result.push(arr[i]);
        }
    }
    return result;
}


const greaterThan10 = (n)=> n > 10;
const firstIndex = (n,i)=>  i === 0
const plusOne = (n) => n+1;



let arr1=[0,10,20,30];

const val = filter(arr1,greaterThan10);
console.log(val)
const val1 = filter(arr1,firstIndex);
console.log(val1)
const val2 = filter(arr1,plusOne);
console.log(val2)