const reduce = function(nums, fn, init) {
    let sum = init;
    for(let i=0;i<nums.length;i++){
        sum=fn(sum,nums[i])
    }
    return sum;
    
};
const nums = [1, 2, 3, 4];
const sum=(accum,curr)=> accum+curr;
const sum2=(accum,curr)=> accum+ curr*curr;
const sum3 = (accum,curr)=> 0;

const init = 0;


const val = reduce(nums,sum,init)
const val1 = reduce(nums,sum2,init)
const val2 = reduce(nums,sum3,init)


//APPROACH 2 (RECURSIVE WAY)

const reduce1 = function(nums, fn, init, i = 0) {
    if (i >= nums.length) {
        return init;
    }
    return reduce(nums, fn, fn(init, nums[i]), i + 1);
};


const valMethod2 = reduce(nums,sum,init)

console.log(valMethod2)