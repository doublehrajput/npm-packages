'use strict';

var SinglyLinkedListNode = require('./utils/SinglyLinkedListNode.js');

/**
 * @param {Number} length
 * @param {null|Node} head
 * @param {null|Node} tail
 */
class SinglyLinkedList {
  length = 0;
  head = null;
  tail = null;

  push(value) {
    let node = new SinglyLinkedListNode(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
  }

  pop() {
    if (this.length === 0) return undefined;

    let currentNode = this.head;
    let newTail = currentNode;

    while (currentNode.next !== null) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }

  shift() {
    if (this.length === 0) return undefined;

    let headNode = this.head;
    this.head = headNode.next;

    if (this.length === 0) {
      this.tail = null;
    }

    this.length--;
    return headNode;
  }

  unshift(value) {
    let node = new SinglyLinkedListNode(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return node;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;

    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, value) {
    let indexNode = this.get(index);

    if (indexNode) {
      indexNode.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return this.push(value);

    if (index === 0) return this.unshift(value);

    let prev = this.get(index - 1);
    let temp = prev.next;
    let node = new SinglyLinkedListNode(value);

    prev.next = node;
    node.next = temp;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length - 1) return this.pop();

    if (index === 0) return this.shift();

    let prev = this.get(index - 1);
    let removed = prev.next;

    prev.next = removed.next;
    this.length--;

    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }

  // Iterator
  [Symbol.iterator]() {
    let node = { next: this.head };
    return {
      next: function () {
        node = node.next;
        return {
          done: !node,
          value: node,
        };
      },
    };
  }
}

module.exports = SinglyLinkedList;
