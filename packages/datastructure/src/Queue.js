import Node from "./utils/SinglyLinkedListNode";

class LinkedListImplementation {
  first = null;
  last = null;
  size = 0;

  enqueue(value) {
    let node = new Node(value);
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

export { LinkedListImplementation };
