/**
 * @param {null|Node} next
 * @param {*} value
 */
class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

export default Node