'use strict';

class Graph {
  adjencencyList = {};

  addVertex(vertex) {
    this.adjencencyList[vertex] = new Set();
  }

  _hasVertex(vertex) {
    return Object.prototype.hasOwnProperty.call(this.adjencencyList, vertex);
  }

  addToAdjencencyList(vertex1, vertex2) {
    if (!this._hasVertex(vertex1)) {
      this.addVertex(vertex1);
    }

    this.adjencencyList[vertex1].add(vertex2);
  }

  addEdge(vertex1, vertex2) {
    this.addToAdjencencyList(vertex1, vertex2);
    this.addToAdjencencyList(vertex2, vertex1);
  }

  removeFromAdjencencyList(vertex1, vertex2) {
    if (this._hasVertex(vertex1)) {
      let prev = this.adjencencyList[vertex1];
      prev.delete(vertex2);
      this.adjencencyList[vertex1] = prev;
    }
  }

  removeEdge(vertex1, vertex2) {
    this.removeFromAdjencencyList(vertex1, vertex2);
    this.removeFromAdjencencyList(vertex2, vertex1);
  }

  removeVertex(vertex) {
    delete this.adjencencyList[vertex];

    for (const route of Object.values(this.adjencencyList)) {
      route.delete(vertex);
    }
  }
}

module.exports = Graph;
