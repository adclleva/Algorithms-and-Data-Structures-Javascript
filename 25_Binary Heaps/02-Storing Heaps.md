# Storing Heaps

THERE'S AN EASY WAY OF STORING A BINARY HEAP...
A LIST/ARRAY

## REPRESENTING A HEAP
- For any index of an array n...
- The left child is stored at 2n + 1
- The right child is at 2n + 2

## WHAT IF WE HAVE A CHILD NODE AND WANT TO FIND ITS PARENT?
- For any child node at index  n...
- Its parent is at index (n-1)/2 floored

