# Where things go wrong
No base case
Forgetting to return or returning the wrong thing!
Stack overflow! 

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num);
}

function factorial(num){
    if(num === 1) console.log(1) ;
    return num * factorial(num-1);
}