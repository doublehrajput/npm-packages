'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SinglyLinkedListNode = require('./utils/SinglyLinkedListNode.js');

class LinkedListImplementation {
  first = null;
  last = null;
  size = 0;

  push(value) {
    let node = new SinglyLinkedListNode(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }

    this.size++;
    return node;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    let node = this.first;

    this.size--;

    if (this.first == this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    node.next = null;

    return node;
  }
}

exports.LinkedListImplementation = LinkedListImplementation;
