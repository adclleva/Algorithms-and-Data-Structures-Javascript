# Our second recursive function

function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}

-Can you spot the base case?
-Do you notice the different input?
-What would happen if we didn't return?

## The ALL important `return` keyword

function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}
Let's break this down step by step!

## sumRange with the call stack
function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}

the functions get called from the stack
| sumRange(1) |
| sumRange(2) |
| sumRange(3) |
| sumRange(4) |
| sumRange(5) |
---------------