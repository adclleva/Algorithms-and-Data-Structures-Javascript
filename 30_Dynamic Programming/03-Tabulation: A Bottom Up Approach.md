# ONCE AGAIN DYNAMIC PROGRAMMING

"A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."

## WE'VE BEEN WORKING TOP-DOWN BUT THERE IS ANOTHER WAY! BOTTOM-UP

## TABULATION

- Storing the result of a previous result in a "table" (usually an array)
- Usually done using iteration
- Better space complexity can be achieved using tabulation

```
function fib(n){
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}
```
