'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PriorityQueueNode = require('./utils/PriorityQueueNode.js');

class MaxBinaryHeap {
  values = [];

  insert(element) {
    let index = this.values.push(element) - 1;
    this.bubbleUp(element, index);
  }

  pop() {
    let max = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return max;
  }

  bubbleUp(element, index) {
    // eslint-disable-next-line no-constant-condition
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;

      this.values[index] = parent;
      this.values[parentIndex] = element;
      index = parentIndex;
    }
  }

  bubbleDown() {
    let element = this.values[0];
    let index = 0;
    const length = this.values.length;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = leftIndex + 1;

      let left;
      let right;
      let swap = null;

      if (leftIndex < length) {
        left = this.values[leftIndex];
        if (left > element) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        right = this.values[rightIndex];
        if (
          (swap === null && right > element) ||
          (swap !== null && right > left)
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;

      index = swap;
    }
  }
}

class MaxPriorityQueue extends MaxBinaryHeap {
  enqueue(value, priority) {
    let node = new PriorityQueueNode(value, priority);
    let index = this.values.push(node) - 1;
    this.bubbleUp(node, index);
  }

  bubbleUp(element, index) {
    // eslint-disable-next-line no-constant-condition
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority <= parent.priority) break;

      this.values[index] = parent;
      this.values[parentIndex] = element;
      index = parentIndex;
    }
  }

  dequeue() {
    this.pop();
  }

  bubbleDown() {
    let element = this.values[0];
    let index = 0;
    const length = this.values.length;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = leftIndex + 1;

      let left;
      let right;
      let swap = null;

      if (leftIndex < length) {
        left = this.values[leftIndex];
        if (left.priority > element.priority) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        right = this.values[rightIndex];
        if (
          (swap === null && right.priority > element.priority) ||
          (swap !== null && right.priority > left.priority)
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;

      index = swap;
    }
  }
}

class MinPriorityQueue {
  values = [];

  enqueue(value, priority) {
    let node = new PriorityQueueNode(value, priority);
    let index = this.values.push(node) - 1;
    this.bubbleUp(node, index);
  }

  bubbleUp(element, index) {
    // eslint-disable-next-line no-constant-condition
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) break;

      this.values[index] = parent;
      this.values[parentIndex] = element;
      index = parentIndex;
    }
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return min;
  }

  bubbleDown() {
    let element = this.values[0];
    let index = 0;
    const length = this.values.length;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = leftIndex + 1;

      let left;
      let right;
      let swap = null;

      if (leftIndex < length) {
        left = this.values[leftIndex];
        if (left.priority < element.priority) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        right = this.values[rightIndex];
        if (
          (swap === null && right.priority < element.priority) ||
          (swap !== null && right.priority < left.priority)
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;

      index = swap;
    }
  }
}

exports.MaxBinaryHeap = MaxBinaryHeap;
exports.MaxPriorityQueue = MaxPriorityQueue;
exports.MinPriorityQueue = MinPriorityQueue;
