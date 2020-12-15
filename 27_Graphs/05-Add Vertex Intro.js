// undirected graph
class Graph {
  constructor() {
    this.adjacenyList = {};
  }
  addVertext(vertex) {
    if (!this.adjacenyList[vertex]) {
      this.adjacenyList[vertex] = [];
    }
  }
}
