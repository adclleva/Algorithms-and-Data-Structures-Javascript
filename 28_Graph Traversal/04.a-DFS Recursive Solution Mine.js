class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(start) {
    let result = [];
    let visited = {};

    let dfs = (vertex) => {
      console.log("this.adjacencyList[vertex]", this.adjacencyList[vertex]);
      if (!this.adjacencyList[vertex]) {
        return;
      }

      result.push(vertex);
      visited[vertex] = true;

      for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
        let edge = this.adjacencyList[vertex][i];

        if (!visited[edge]) {
          dfs(edge);
        }
      }
    };

    dfs(start);
    console.log("result", result);
    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
g.depthFirstRecursive("B");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
