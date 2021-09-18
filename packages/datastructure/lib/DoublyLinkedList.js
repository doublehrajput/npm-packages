'use strict';

var DoublyLinkedListNode = require('./utils/DoublyLinkedListNode.js');

/**
 * @param {Number} length
 * @param {null|Node} head
 * @param {null|Node} tail
 */
class DoublyLinkedList {
  tail = null;
  head = null;
  length = 0;

  push(value) {
    let node = new DoublyLinkedListNode(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }

    this.length--;
    return popped;
  }

  shift() {
    if (this.length == 0) return undefined;
    let head = this.head;

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = head.next;
      this.head.prev = null;
    }

    head.next = null;

    this.length--;
    return head;
  }
}

module.exports = DoublyLinkedList;
