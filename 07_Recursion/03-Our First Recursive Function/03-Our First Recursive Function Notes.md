# How recursive functions work
Invoke the same function with a different input until you reach your base case!

## Base Case
The condition when the recursion ends.

This is the most important concept to understand 

## Two essential parts of a recursive function!
-Base Case
-Different Input

## Our first recursive function
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

