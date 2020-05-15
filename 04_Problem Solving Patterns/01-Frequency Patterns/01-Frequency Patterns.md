# FREQUENCY COUNTERS
This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

## AN EXAMPLE
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)

## A NAIVE SOLUTION
```
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}
```

Time Complexity - N^2

## REFACTORED

Always remember the two or three separated loops is significantly better than a nested loop in terms of time complexity.
```
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
```
Time Complexity - O(n)

## Using the 'in' operator

The in operator is pretty useful. It allows us to check if an object has a property.

This operator returns true if the first operand is a property of the object passed on the right, or a property of one of its ancestors in its prototype chain.

Otherwise it returns false.

### Syntax

prop in object

#### Parameters

prop
    A string or symbol representing a property name or array index (non-symbols will be coerced to strings).

object
    Object to check if it (or its prototype chain) contains the property with specified name (prop).
