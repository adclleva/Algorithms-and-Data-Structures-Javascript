// This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

// This pattern can tremendously decrease time complexity

// An Example
// Given a sorted array of integers, write a function called search, 
// that accepts a value and returns the index where the value passed 
// to the function is located. If the value is not found, return -1

function divideAndConquerSearch(arr,num) {
    let minIndex = 0
    let maxIndex = arr.length - 1

    while (minIndex <= maxIndex) {
        let midIndex = Math.floor((minIndex + maxIndex) / 2) 
        let currentNum = arr[midIndex]

        if (currentNum < num) {
            minIndex = midIndex + 1
        } else if (currentNum > num) {
            maxIndex = midIndex - 1
        } else {
            return midIndex
        }
    }
    return -1
}

console.log(divideAndConquerSearch([1,2,3,4,5,6],4)) // 3
console.log(divideAndConquerSearch([1,2,3,4,5,6],6)) // 5
console.log(divideAndConquerSearch([1,2,3,4,5,6],11)) // -1 