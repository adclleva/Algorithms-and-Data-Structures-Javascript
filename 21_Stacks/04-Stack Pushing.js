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

    return size;
  }
}
