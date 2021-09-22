import Node from "./utils/DoublyLinkedListNode";

/**
 * @param {Number} length
 * @param {null|Node} head
 * @param {null|Node} tail
 */
export default class DoublyLinkedList {
  tail = null;
  head = null;
  length = 0;

  push(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
    return node;
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

  unshift(value) {
    if (this.length === 0) {
      return this.push(value);
    }

    let node = new Node(value);
    this.head.prev = node;
    node.next = this.head;
    this.head = node;

    this.length++;
    return node;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count = 0;
    let current = this.head;

    if (index <= this.length / 2) {
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;

      while (count != index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  set(index, value) {
    let node = this.get(index);

    if (node !== null) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) {
      this.unshift(value);
    } else if (index == this.length) {
      this.push(value);
    } else {
      let node = new Node(value);
      let prevNode = this.get(index - 1);
      let afterNode = prevNode.next;
      node.prev = prevNode;
      node.next = afterNode;

      prevNode.next = node;
      afterNode.prev = node;
      this.length++;
    }

    return true;
  }

  remove(index) {
    let node = null;
    if (index < 0 || index >= this.length) return node;
    if (index === 0) {
      node = this.shift();
    } else if (index == this.length - 1) {
      node = this.pop();
    } else {
      let prevNode = this.get(index - 1);
      let afterNode = prevNode.next;
      prevNode.next = afterNode;
      afterNode.prev = prevNode;
      this.length--;
    }

    return true;
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
