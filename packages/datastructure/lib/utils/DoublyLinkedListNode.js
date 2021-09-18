'use strict';

/**
 * @param {null|Node} next
 * @param {null|Node} prev
 * @param {*} value
 */
class Node {
  next = null;
  prev = null;
  constructor(value) {
    this.value = value;
  }
}

module.exports = Node;
