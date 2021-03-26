# MEMOIZATION

Storing the results of expensive function calls and returning the cached result when the same inputs occur again

## A MEMO-IZED SOLUTION

```
function fib(n, memo=[]){
  if(memo[n] !== undefined) return memo[n]
  if(n <= 2) return 1;
  var res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
}
```
