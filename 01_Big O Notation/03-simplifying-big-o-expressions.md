[Link to the lecture](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11070006#content)

# Simplifying Big O Expressions

When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions.

These rules of thumb are consequences of the definition of big O notation.

## Constants Don't Matter
### For example 
    O(2n) or O(500) or 0(13n^2)

They usually all simplify down to 
    O(n) or O(1) or O(n^2)

## Smaller Terms Don't Matter
### For example
    O(n + 10) or O(1000n + 50) or O(n^2 + 5n + 8 )

They usually all simplify down to 
    O(n) or O(1) or O(n^2)

## Big O Shorthands
* Analyzing complexity with big O can get complicated
* There are several rules of thumb that can help
* These rules won't ALWAYS work, but are a helpful starting point

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop