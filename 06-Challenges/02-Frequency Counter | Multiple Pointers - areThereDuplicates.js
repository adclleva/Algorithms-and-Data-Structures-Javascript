// Frequency Counter | Multiple Pointers - areThereDuplicates
/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments,
 * and checks whether there are an duplicates amoung the arguments passed in. 
 * You can solve this using the freqcuency counter pattern OR the multiple pointers pattern.
 * 
 * Restrictions 
 * 
 * Time - O(n)
 * Space - O(n)
 */

 function areThereDuplicatesFCP(...arg) {
    let charObj = {}

    for (let char of arg) {
        if (!charObj[char]) {
            charObj[char] = char
        } else {
            return true
        }
    }

    return false
 }

 console.log(areThereDuplicatesFCP(1,2,3)) // false
 console.log(areThereDuplicatesFCP(1,2,2)) // true
 console.log(areThereDuplicatesFCP('a','b','c','a')) // true

// in order to implement the multiple pointers pattern you must remember to have the elements in order
function areThereDuplicatesMPP(...arg) { // we use the spread operator to get the inputs into an array
    arg = [...arg].sort((a, b) => a.toString().localeCompare(b.toString())) // this 'sorts' the array even if the elements are strings or integers
    
    let pointer1 = 0

    for (let i = 1; i < arg.length; i++) {
        let char1 = arg[pointer1]
        let char2 = arg[i]
        
        if (char1 != char2) {
            pointer1++
        } else {
            return true
        }
    }
   return false 
}

 console.log(areThereDuplicatesMPP(10,2,3,4,5)) // false
 console.log(areThereDuplicatesMPP(1,2,2)) // true
 console.log(areThereDuplicatesMPP('a','b','c','a')) // true

 function areThereDuplicatesOneLiner() {
     console.log(new Set(arguments)) // recall that Set are a new object type included in ES6 that allows the creation of colletions of unique values, thus why we use size and not length
     return new Set(arguments).size !== arguments.length // we use the arguments which is an Array-like object
 }
 
 console.log(areThereDuplicatesOneLiner(10,2,3,4,5)) // false
 console.log(areThereDuplicatesOneLiner(1,2,2)) // true
 console.log(areThereDuplicatesOneLiner('a','b','c','a')) // true