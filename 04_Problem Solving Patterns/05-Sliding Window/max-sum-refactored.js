// Write a function called maxSubarraySum which
// accepts an array of integers and a number called n. The function should 
// calculate the maximum sum of n consecutive elements in the array.

// function maxSubarraySum(arr, num){
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }

const maxSubarraySum = (arr,num) => {
  let maxSum = 0
  let tempSum = 0

  for (let i = 0; i < num; i++) {
    tempSum += arr[i] // this will be the current temp sum
  }

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    console.log(tempSum)
    maxSum = Math.max(tempSum, maxSum)
  }

  return maxSum
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3)) // 19
