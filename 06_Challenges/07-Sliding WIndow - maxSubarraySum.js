//Sliding WIndow - maxSubarraySum
/**
 * Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray 
 * with the length of the bumber passed to the function
 * 
 * Note: A subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] 
 * is a subarray of the original array, but [100,300] is not
 * 
 * Constraints: 
 *  Time - O(N)
 *  Space - O(1)
 */

 const maxSubarraySum = (arr, targetLength) => {
    let tempSum = 0
    let maxSum = 0

    if (arr.length < targetLength) {
        return null
    }

    for (let i = 0; i < targetLength; i++) {
        tempSum += arr[i]
    }
    console.log(tempSum)

    for (let i = targetLength; i < arr.length; i++) { // this loop starts with the index of the target length and ends when the array ends
        tempSum = tempSum - arr[i - targetLength] + arr[i] // this will subtract from the left and add from the right, and move like a 'sliding window'
        
        if (tempSum > maxSum) {
            maxSum = tempSum // this checks if the current sum of numbers is the max or not
        }
    }

    return maxSum
 }

 console.log(maxSubarraySum([100,200,300,400], 2)) // 700
 console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) // 39
 console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) //5 
 console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
 console.log(maxSubarraySum([2,3], 3)) // null
 
