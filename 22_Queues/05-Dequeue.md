# Dequeue
Removing from the beginning of the Queue!
Remember, queues are a FIFO data structure

## Dequeue pseudocode
- If there is no first property, just return null
- Store the first property in a variable
- See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
- If there is more than 1 node, set the first property to be the next property of first 
- Decrement the size by 1
- Return the value of the node dequeued
