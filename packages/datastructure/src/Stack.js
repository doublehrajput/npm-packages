import Node from "./utils/SinglyLinkedListNode";

class LinkedListImplementation {
  first = null;
  last = null;
  size = 0;

  push(value) {
    let node = new Node(value);
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

export { LinkedListImplementation };
