class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LINKED LIST IMPLEMENTATION
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // pushes the value to the front of the stack
  push(value) {
    var newNode = new Node(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.size++;

    return this.size;
  }

  // takes the value away from the top
  pop() {
    var temp = this.first;
    if (this.size === 0) {
      return null;
    } else if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
    }

    this.size--;

    return temp.value;
  }
}

var stack1 = new Stack();

stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
console.log("stack1.pop()", stack1.pop());
console.log("stack1", stack1);
