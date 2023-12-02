
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
  find(val) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.val === val) return true;
      currentNode = currentNode.next;
    }
    return false;
  }
  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  push(val) {
    const newNode = new Node(val);
    newNode.next = null;
    this.tail = newNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  pop() {
    if (!this.head) throw new Error("List is empty");
    const output = this.tail;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    }
    else {
      let currentNode = this.head;
      while (!currentNode.next.next) {
        currentNode = currentNode.next;
      }
      output = currentNode.next;
      currentNode.next = null;
    }
    return output;
  }

  shift() {
    if (!this.head) throw new Error("List is empty");
    const output = this.head;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.head = this.head.next;
    }
    return output;
  }

  getAt(index) {
    let counter = 0;
    if (!this.head) throw new Error("Index out of bounds");
    let currentNode = this.head;
    while (counter < index) {
      if (!currentNode.next) throw new Error("Index out of bounds");
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }


  setAt(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insertAt(index, val) {
    const newNode = new Node(val);
    const prev = this.getAt(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
  }

  removeAt(index) {
    const prev = this.getAt(index - 1);
    const temp = prev.next;
    prev.next = temp.next;
  }

  averageOf() {
    let currentNode = this.head;
    let sum = 0;
    let count = 0;
    while (currentNode) {
      sum += currentNode.val;
      count++;
      currentNode = currentNode.next;
    }
    return sum / count;
  }
}
