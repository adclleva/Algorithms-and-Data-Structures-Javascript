[Link to the lecture](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344068#content)

# Logarithms and Section Recapy

## Logarithms
We've encountered some of the most common complexities: 
O(1), O(n), O(n^2)

Sometimes big O expressions involve more complex mathematical expressions

One that appears more often than you might like is the logarithm!

## Wait, what's a log again?
log(base 2)(8) = 3 ==> 2^3 = 8 

log(base 2)(value) = exponent ==> 2^(exponent) = value

We'll omit the 2.

log === log(base 2)

## Wut.
This isn't a math course, so here's a rule of thumb.

The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

## Logarithm Examples
example 1:    
- 8
-     % 2 
- 4
-     % 2
- 2
-     % 2
- 1 and it's less than or equal to
- thus, log(8) = 3

example 2:    
- 25
-     % 2
- 12.5
-     % 2
- 6.25
-     % 2 
- 3.125
-     % 2
- 1.5625
-     % 2
- 0.78125 and it's less than 1
- thus, log(25) ≈ 4.642

## Who Cares?
Certain searching algorithms have logarithmic time complexity.

Efficient sorting algorithms involve logarithms.

Recursion sometimes involves logarithmic space complexity.

...and more!

## Recap
- To analyze the performance of an algorithm, we use Big O Notation
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
- Big O Notation is everywhere, so get lots of practice!
