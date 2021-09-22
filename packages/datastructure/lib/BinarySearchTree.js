'use strict';

var BinarySearchTreeNode = require('./utils/BinarySearchTreeNode.js');

class BinarySearchTree {
  root = null;

  insert(value) {
    let node = new BinarySearchTreeNode(value);

    if (this.root == null) {
      this.root = node;
      return node;
    }

    let current = this.root;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (value == current.value) {
        return true;
      }
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return true;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          return true;
        } else {
          current = current.right;
        }
      }
    }
  }

  contains(value) {
    let found = false;
    if (this.root === null) return found;

    // eslint-disable-next-line no-constant-condition
    let current = this.root;
    while (!found && current) {
      if (value == current.value) {
        found = true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return found;
  }

  breathfirstsearch() {
    let root = this.root;
    let data = [];
    let queue = [];

    queue.push(root);

    while (queue.length) {
      root = queue.shift();
      data.push(root.value);

      root.left && queue.push(root.left);
      root.right && queue.push(root.right);
    }

    return data;
  }

  depthfirstpreorder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  depthfirstpostorder() {
    let data = [];

    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  depthfirstinorder() {
    let data = [];

    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.value);
      node.right && traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

module.exports = BinarySearchTree;
