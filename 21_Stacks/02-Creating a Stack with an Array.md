### THERE IS MORE THAN ONE WAY OF IMPLEMENTING A STACK
#### ARRAY IMPLEMENTATION
- We can use an array for a stack with the push, pop, shift, and unshift methods.
- But an array implementation is not efficient because you would have to re-index all the items when shifting or unshifting

#### LINKED LIST IMPLEMENTATION

#### A STACK CLASS
```
class Stack {
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