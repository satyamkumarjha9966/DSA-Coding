class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peak() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(40);
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.peak());
stack.print();
