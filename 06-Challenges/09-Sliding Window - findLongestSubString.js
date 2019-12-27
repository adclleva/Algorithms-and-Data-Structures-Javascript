// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
// Time Complexity - O(n)

const findLongestSubstring = (string) => {
    let maxLength = 0
    let pointer1 = 0
    let tempSubStrObj = {}

    for (let i = 0; i < string.length; i++) {
        let char = string[i] 
        
        if (!tempSubStrObj[char]) {
            tempSubStrObj[char] = char
        } else {
            tempSubStrObj = {}
            i = pointer1
            pointer1++
        }

        let tempLength = Object.keys(tempSubStrObj).length

        if (tempLength > maxLength) {
            maxLength = tempLength
        }
    }

    return maxLength
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
