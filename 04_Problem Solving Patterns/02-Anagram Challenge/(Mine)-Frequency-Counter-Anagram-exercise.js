/*
    ANAGRAMS

    Given two strings, write a function to determine
    if the second string is an anagram of the first. 
    An anagram is a word, phrase, or name formed by
    rearranging the letters of another, such as cinema, 
    formed from iceman.

    Note, we assume the string contains only lowercase alphabets

    We want to have the Time Complexity to be O(n) by utilizing the Frequency Pattern
    that was presented earlier

    validAnagram('', '') // true
    validAnagram('aaz', 'zza') // false
    validAnagram('anagram', 'nagaram') // true
    validAnagram("rat","car") // false) // false
    validAnagram('awesome', 'awesom') // false
    validAnagram('qwerty', 'qeywrt') // true
    validAnagram('texttwisttime', 'timetwisttext') // true

*/

const validAnagram = (word1, word2) => {
    if (word1.length !== word2.length) {
        return false
    }

    let wordObj1 = {}
    let wordObj2 = {}

    for (let char of word1) {
        wordObj1[char] = (wordObj1[char] || 1) + 1
    }

    for (let char of word2) {
        wordObj2[char] = (wordObj2[char] || 1) + 1
    }

    for (let char in wordObj1) {
        if (wordObj1[char] !== wordObj2[char]) {
            return false
        }
    }

    return true 

}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza') )// false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car"))// false
console.log(validAnagram('awesome', 'awesom') )// false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
