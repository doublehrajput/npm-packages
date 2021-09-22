'use strict';

/**
 * @param {null|Node} next
 * @param {*} value
 */
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

module.exports = Node;
