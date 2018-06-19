// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // add a new node to the head
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  // return the length of linked list
  size() {
    let counter = 0;
    let node = this.head;
    while(node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  // return the head node
  getFirst() {
    return this.head;
  }
  // return the tail
  getLast() {
    if(!this.head) return null;

    let node = this.head;
    while(node) {
      if(!node.next) return node;
      node = node.next;
    }
  }
  // empty the linked list
  clear() {
    this.head = null;
  }
  // remove the first node(head)
  removeFirst() {
    if(!this.head) return null;
    // let node = this.head;
    // this.head = node.next;
    this.head = this.head.next;
  }
  // remove the last node(tail)
  removeLast() {
    if(!this.head) return;
    else if(!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = previous.next;
    while(node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  // add it to the tail
  insertLast(data) {
    const last = this.getLast();
    if(last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
  find the node at a given index
  getAt(index) {
    let node = this.head;
    let counter = 0;
    while(node) {
      if(index === counter) return node;
      counter++;
      node = node.next;
    }
    return null;
  }
  // remove the node at a given index
  removeAt(index) {
    if(!this.head) return;
    if(index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index-1);
    if(!previous || !previous.next) return;
    previous.next = previous.next.next;
  }
  // insert a new node at a given index
  insertAt(data, index) {
    if(!this.head || index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index-1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
  // loop through the linked list
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while(node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

module.exports = { Node, LinkedList };
