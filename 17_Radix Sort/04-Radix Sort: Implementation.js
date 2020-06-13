function getDigit(num, i) {
  // this will get a number and the index of the number
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// this is a helper for the most digits
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

const radixSort = (arr) => {
  let largestDigitCount = mostDigits(arr); // this will be a number of the largest digits

  for (let i = 0; i < largestDigitCount; i++) {
    // this will iterater depending on the largest digit count
    let digitBuckets = Array.from({ length: 10 }, () => []); // this will create an empty arr

    for (let j = 0; j < arr.length; j++) {
      let currentNum = arr[j];
      let currentDigit = getDigit(currentNum, i);

      digitBuckets[currentDigit].push(currentNum);
    }
    // console.log("digitBuckets", digitBuckets)
    // arr = digitBuckets.reduce((a, b) => [...a, ...b], [])
    arr = [].concat(...digitBuckets);
    console.log("arr", arr);
  }

  return arr;
};

console.log(radixSort([1234, 4213, 2435, 3542, 2, 23, 4, 42]));
