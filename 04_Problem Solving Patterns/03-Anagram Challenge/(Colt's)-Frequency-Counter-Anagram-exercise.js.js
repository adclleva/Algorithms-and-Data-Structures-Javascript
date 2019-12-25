// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//   }
//   console.log(lookup)

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}

const validAnagram = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false
  }
  let lookUpObj = {} 
  
  for (let char of word1) {
    lookUpObj[char] ? lookUpObj[char] += 1 : lookUpObj[char] = 1
  }

  for (let char of word2) {
    if (!lookUpObj[char]) { // this checks if the key and object are valid and not returning a falsey value
      return false
    } else {
      lookUpObj[char] -= 1
    }
  }

  return true
}

console.log(validAnagram('anagrams', 'nagaramm')) // false
// console.log(validAnagram('', '')) // true
// console.log(validAnagram('aaz', 'zza') )// false
// console.log(validAnagram('anagram', 'nagaram')) // true
// console.log(validAnagram("rat","car"))// false
// console.log(validAnagram('awesome', 'awesom') )// false
// console.log(validAnagram('qwerty', 'qeywrt')) // true
// console.log(validAnagram('texttwisttime', 'timetwisttext')) // true