// Naive String Search
// Suppose you want to count the number of times a smaller string appears in a longer string
// A straightforward approach involves checking pairs of characters individually

// Pseudocode
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

// Naive String Search
// Suppose you want to count the number of times a smaller string appears in a longer string
// A straightforward approach involves checking pairs of characters individually

// Pseudocode
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

const naiveStrSearch = (str, targetStr) => {
  let count = 0;

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < str.length) {
    let char1 = str[pointer1]
    let char2 = targetStr[pointer2]

    if (char1 === char2) {
      pointer2++;

      if (pointer2 === targetStr.length) {
        count++;
        pointer2 = 0;
      }
    } else if (char1 !== char2) {
      pointer2 = 0;
    }

    pointer1++;
  }

  return count
}

console.log(naiveStrSearch("wowomgdzomgdmg", "omgd"))
console.log(naiveStrSearch("wowomgzomg", "omg"))

// colt's version
function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

naiveSearch("lorie loled", "lol")