/**
 * Write a function called productOfArray which takes in 
 * an array of numbers and returns the product of them all. 
 */

function productOfArray(arr) {
  let curNum = arr[0];
  
  if (arr.length <= 0) {
      return 1;
  }
  
  return curNum * productOfArray(arr.slice(1));

  productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60
