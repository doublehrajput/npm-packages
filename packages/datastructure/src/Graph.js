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

  dfsRecursiveTravelsel(start) {
    const result = [];
    const visited = [];

    (function dfs(vertex, adjencencyList) {
      if (!vertex) {
        return null;
      }

      visited[vertex] = true;
      result.push(vertex);

      adjencencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(start, this.adjencencyList);

    return result;
  }

  dfsIterative(start) {
    const stack = [start];
    const visited = {};
    const result = [];

    visited[start] = true;

    while (stack.length) {
      let currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjencencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }

    (function dfs(vertex, adjencencyList) {
      if (!vertex) {
        return null;
      }

      visited[vertex] = true;
      result.push(vertex);

      adjencencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(start, this.adjencencyList);

    return result;
  }

  bsf(start) {
    const queue = [start];
    const result = [];
    const visited = {
      [start]: true,
    };

    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjencencyList.forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(currentVertex);
        }
      });
    }
  }
}

export default Graph;
