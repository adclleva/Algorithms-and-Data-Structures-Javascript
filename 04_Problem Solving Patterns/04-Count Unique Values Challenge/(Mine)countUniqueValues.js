// countUniqueValues Problem

// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted.

const countUniqueValues = (arr) => {
    let pointer1 = 0
    let pointer2 = 1
    let isUnique = false

    while (pointer2 < arr.length) {
        let num1 = arr[pointer1]
        let num2 = arr[pointer2]

        if (num1 !== num2) {
            pointer1++
            pointer2++
            arr[pointer1] = num2
            isUnique = true
        } else {
            pointer2++
        }
    }

    return isUnique ? arr.slice(0, pointer1 + 1).length : 0
}

const countUniqueValuesRefactored = (arr) => {
    let pointer1 = 0
    let isUnique = false

    for (let i = 1; i < arr.length; i++) {
        let num1 = arr[pointer1]
        let num2 = arr[i]

        if (num1 !== num2) {
            pointer1++
            arr[pointer1] = num2
            isUnique = true
        }
    }    
    

    return isUnique ? pointer1 + 1 : 0
}

// this solution covers the cases below
// Time Complexity - O(n)
// Space Complexity - O(n)

console.log(countUniqueValuesRefactored([1,1,1,1,1,2])) // 2
console.log(countUniqueValuesRefactored([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValuesRefactored([])) // 0
console.log(countUniqueValuesRefactored([-2,-1,-1,0,1])) // 4
console.log(countUniqueValuesRefactored([-2,-2,-2,-2,-2])) // 0


const countUniqueValues = arr => {
  let count = 1
  let pointer1 = 0
  let pointer2 = 1
  
  if (arr.length <= 0) {
    return 0
  }

  while (pointer2 < arr.length) {
    let num1 = arr[pointer1]
    let num2 = arr[pointer2]

    if (num1 != num2) {
      count++
      pointer1 = pointer2
    }
    pointer2++
  }

  return count
}