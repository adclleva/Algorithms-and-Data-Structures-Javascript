[Link to the lecture](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344050#content)

# Space Complexity
So far, we've been focusing on time complexity: how can we analyze the runtime of an algorithm as the size of the inputs increases?

We can also use big O notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm?

## What about the inputs?
Sometimes you'll hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs.

Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity.

## Space Complexity in JS 
Rules of Thumb

Most primitives (booleans, numbers, undefined, null) are constant space
Strings require O(n) space (where n is the string length)
Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)  