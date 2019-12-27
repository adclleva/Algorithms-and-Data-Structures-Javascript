// Sliding Window - minSubArrayLen
/**
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
 * This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the 
 * the function. If there isn't one, return 0 instead.
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */

 const minSubArrayLen = (arr, target) => {
     let pointer1 = 0 // this will be the start of the window
     let pointer2 = 0   // this will be the end of the window
     let tempSum = 0
     let minLength = arr.length + 1 // we have the length be more than the given array because if the sum doesn't match the target, we'll just return a 0

     while (pointer1 < arr.length) { // this is so we can iterate through every element of the array and find every possible output
         if (tempSum < target & pointer2 < arr.length) { // if the tempSum is less than the target and while the end of the window reaches the end of the array
             tempSum += arr[pointer2] // we simple add the current element to the tempSum
             pointer2++ // then we go to the next element for the right side

         } else if (tempSum >= target) { // if the tempSum is equal or larger
            let tempLength = pointer2 - pointer1 // we then get the tempj length 

            if (tempLength < minLength) { // then we compare the temp length to the min length
                minLength = tempLength // then we have the minLength get the tempLength
            }

            pointer1++ // then we have the start of the window be the next element and create a new window from there
            pointer2 = pointer1 // then the starting point for the end of the window will be the exact point of the start of the window
            tempSum = 0 // then we reset the tempSum
            
         } else { // if the tempSum is less than the target and pointer2 passed the end of the array
             pointer1++
             pointer2 = pointer1
             tempSum = 0
         }
     }

     return minLength === arr.length + 1 ? 0 : minLength
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0