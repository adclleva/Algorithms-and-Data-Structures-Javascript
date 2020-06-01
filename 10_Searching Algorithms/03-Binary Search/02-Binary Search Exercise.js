// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns
//  the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here 
// - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
// and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  
  while(left <= right) {
    let middle = Math.floor((right + left) / 2 );
    let curNum = arr[middle];

    if (curNum === val) {
      return middle;
    } else if (curNum < val) {
      left = middle + 1;
    } else  if (curNum > val) {
      right = middle - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1,2,3,4,5,6],2)) // 1
console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)) // 2
console.log(binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)) // 16
console.log(binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)) // -1