'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SinglyLinkedListNode = require('./utils/SinglyLinkedListNode.js');

class LinkedListImplementation {
  first = null;
  last = null;
  size = 0;

  enqueue(value) {
    let node = new SinglyLinkedListNode(value);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.size++;
    return node;
  }

  dequeue() {
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
