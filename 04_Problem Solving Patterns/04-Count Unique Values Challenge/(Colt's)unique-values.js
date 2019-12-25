// function countUniqueValues(arr){
//     if(arr.length === 0) return 0;
//     var i = 0;
//     for(var j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1;
// }

const countUniqueValues = (arr) => {
    if (arr.length === 0) {
        return 0
    }

    let pointer1 = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[pointer1] !== arr[i]) { // if the numbers are different
            pointer1++
            arr[pointer1] = arr[i]
        }
    }

    return pointer1 + 1
}

console.log(countUniqueValues([1,2,2,5,7,7,99])) // 5
console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4
console.log(countUniqueValues([-2,-2,-2,-2,-2])) // 0