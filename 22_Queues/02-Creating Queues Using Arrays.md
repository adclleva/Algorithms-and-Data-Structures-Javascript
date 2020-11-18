# BUILDING A QUEUE WITH AN ARRAY

## A Queue Class
```
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
```

It is ideal to create a class for queues since it performs better than arrays since we would have to always re-index each item