// METHOD-1

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}
console.log(twoSum([1, 3, 7, 9, 2], 11));

//METHOD-2
//Two pointer technique
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let valueToFind = target - arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (valueToFind === arr[j]) {
        return [i, j];
      }
    }
  }
  return null;
}
console.log(twoSum([1, 3, 7, 9, 2], 11));
