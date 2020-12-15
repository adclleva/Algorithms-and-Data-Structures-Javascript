# ESSENTIAL GRAPH TERMS
- Vertex - a node
- Edge - connection between nodes
- Weighted/Unweighted - values assigned to distances between vertices
- Directed/Undirected - directions assigned to distanced between vertices

# HOW DO WE STORE THIS???

- Adjacency Matrix
- Adjacency List
  - using hashes 
    - `{
          A: ["B", "F"],
          B: ["A", "C"],
          C: ["B", "D"],
          D: ["C", "E"],
          E: ["D", "F"],
          F: ["E", "A"]
      }`
  - nest arrays
      - `[
      [1,5],
      [0,2],
      [1,3],
      [2,4],
      [3,5],
      [4,0]
      ]` 


 