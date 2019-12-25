const { performance } = require('perf_hooks')

function addUpTo(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo(1000000000); // we add up to 1 billion and get the difference or change of time between the beginning and end
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

/**
 * The Problem with Time
 * Different machines will record different times
 * The same machine will record different times!
 * For fast algorithms, speed measurements may not be precise enough?
 * 
 * If not time, then what?
 * Rather than counting seconds, which are so variable...
 * Let's count the number of simple operations the computer has to perform!
 * 
 * Counting is hard!
 * Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2 
 * 
 * But regardless of the exact number, the number of operations grows roughly proportionally with n
 * 
 * If n doubles, the number of operations will also roughly double
 */ 

