// function rangeBitwiseAnd(left, right) {
//     let shift = 0;
//     // Keep shifting right until left and right are equal
//     while (left < right) {
//         console.log(left)
//         left >>= 1; // Right shift left
//         right >>= 1; // Right shift right
//         shift++; // Increment shift count
//     }
//     // Left shift left by 'shift' times to restore the original number
//     return left << shift;
// }

// // Example usage:
// console.log(rangeBitwiseAnd(5, 7)); // Output: 4
// // console.log(rangeBitwiseAnd(0, 0)); // Output: 0
// // console.log(rangeBitwiseAnd(1, 2147483647)); // Output: 0


console.log(5>>1)