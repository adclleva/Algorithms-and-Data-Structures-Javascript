//Frequency Counter - sameFrequency
/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two 
 * numbers have the same frequency of digits.
 * Your solution MUST have the following complexitites:
 * 
 * Time: O(N)
 * 
 */

function sameFrequency(num1, num2) {
    let numStr1 = num1.toString()
    let numStr2 = num2.toString()

    if (numStr1.length !== numStr2.length) {
        return false
    }

    let numStr1Obj = {}

    for (let char of numStr1) {
        numStr1Obj[char] = numStr1Obj[char] ? numStr1Obj[char] + 1 : 1 
    }

    for (let char of numStr2) {
        if (!numStr1Obj[char]) {
            return false
        } else {
            numStr1Obj[char]--
        }
    }

    return true
}

 console.log(sameFrequency(1821, 2181)) // true
 console.log(sameFrequency(34, 14)) // false
 console.log(sameFrequency(3589578, 5879385)) // true
 console.log(sameFrequency(22, 222)) // false