# Popping pseudocode
## Removing a node from the end of the Doubly Linked List

 - Store the current tail in a variable to return later
 - If the length is 1, set the head and tail to be null
 - Update the tail to be the previous Node.
 - Set the newTail's next to null
 - Decrement the length
 - Return the value removed
