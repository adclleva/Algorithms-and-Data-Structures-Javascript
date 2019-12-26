// Multiple Pointers - isSubsequence

/**
 * Write a function called isSubsequence which takes in two strings and checks whether the characters 
 * in the first string form a subsequence of the characters in the second string. 
 * In other words, the function should check whether the characters in the first 
 * string appear somewhere in the second string. without their order changing.
 * 
 * Time Complexity - O(N + M)
 */

 const isSubsequence = (str1, str2) => {
    let pointer1 = 0

    for (let i = 0; i < str2.length; i++) {
        let char1 = str1[pointer1]
        let char2 = str2[i]

        if (char1 == char2) {
            pointer1++
        }

    }

    if (pointer1 == str1.length) {
        return true
    }
    
    return false
 }

 console.log(isSubsequence('hello', 'hello world')) // true
 console.log(isSubsequence('sing', 'sting')) // true
 console.log(isSubsequence('abc', 'abracadabra')) // true
 console.log(isSubsequence('abc', 'acb')) // false (order matters)