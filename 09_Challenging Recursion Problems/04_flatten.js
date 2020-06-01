// flatten
// Write a recursive function called flatten which accepts
//  an array of arrays and returns a new array with all values flattened.


function flatten(oldArray){
  var newArr = [];

  for (let i = 0; i < oldArray.length; i++) {
    console.log(oldArray[i])
    if (Array.isArray(oldArray[i])) {
      console.log("newArr 1", newArr);
      newArr = newArr.concat(flatten(oldArray[i]));
    } else {
      newArr.push(oldArray[i]);
      console.log("newArr 2", newArr);
    }
  }

  return newArr;
  // add whatever parameters you deem necessary - good luck!
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
