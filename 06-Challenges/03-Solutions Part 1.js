//sameFrequency Solution

function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}

//areThereDuplicates Solution (Frequency Counter)

function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

// areThereDuplicates Solution (Multiple Pointers)

// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }

function areThereDuplicatesMPP(...args) {
    args.sort((a,b) => a.toString().localeCompare(b.toString()))

    let currentIndex = 0
    let nextIndex = 1

    while (nextIndex < args.length) {
        if (args[currentIndex] == args[nextIndex]) {
            return true
        } else {
            currentIndex++
            nextIndex++
        }
    }

    return false
}
console.log(areThereDuplicatesMPP(10,2,3,4,5)) // false
console.log(areThereDuplicatesMPP(1,2,2)) // true
console.log(areThereDuplicatesMPP('a','b','c','a')) // true

// areThereDuplicates One Liner Solution

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}