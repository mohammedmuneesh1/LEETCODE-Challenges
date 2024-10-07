//QUESTION
// Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
// Subtract x from every positive element in nums.

// Return the minimum number of operations to make every element in nums equal to 0.
// Input: nums = [1,5,0,3,5]
// Output: 3
// Explanation:
// In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
// In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
// In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].

//ANSWER-1

function minOperations(nums) {
    let operations = 0;
  
    while (true) {
      // Sort the array to find the smallest non-zero element
      nums.sort((a, b) => a - b);
  
      // Find the smallest non-zero element
      let smallestNonZero = 0;
      while (smallestNonZero < nums.length && nums[smallestNonZero] === 0) {
        smallestNonZero++;
      }
  
      // If there are no non-zero elements, break the loop
      if (smallestNonZero === nums.length) {
        break;
      }
  
      // Subtract the chosen value from every positive element in nums
      let x = nums[smallestNonZero];
      for (let i = smallestNonZero; i < nums.length; i++) {
        if (nums[i] > 0) {
          nums[i] -= x;
        }
      }
  
      // Increment the operations count
      operations++;
    }
  
    return operations;
  }
  
  // Example usage:
  const nums1 = [1, 5, 0, 3, 5];
  console.log(minOperations(nums1)); // Output: 3
  


//ANSWER-2

// var minimumOperations = function(nums) {
//     const unique = new Set()
//     for(v of nums){
//         if(v > 0){
//             unique.add(v);
//         }
//     }
//     return unique.size
// };
// minimumOperations([5,4,3,2,0]);


//BONUS

//unique.has(4)  returns true or false
//unique.size  returns the total length of the elements in it 
//unique.delete(1)  unique.clear()