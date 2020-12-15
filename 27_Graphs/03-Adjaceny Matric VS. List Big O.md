# DIFFERENCES & BIG O
|V| - number of vertices
|E| - number of edges



| OPERATION |	ADJACENCY LIST | ADJACENCY MATRIX|
|-----------|----------------|-----------------|
|Add Vertex |	`O(1)`	|​ `O(|V^2|)` |
|Add Edge	  | `O(1)`	| `O(1)`
|Remove Vertex |	`O(|V| + |E|)` | 	`​O(|V^2|)`
|Remove Edge |	`O(|E|)` |	`O(1)`
|Query |	`O(|V| + |E|)` |	`O(1)`
|Storage |	`O(|V| + |E|)` |	​`O(|V^2|)`

## Adjacency List
- Can take up less space (in sparse graphs)
- Faster to iterate over all edges
- Can be slower to lookup specific edge

## Adjacency Matrix
- Takes up more space (in sparse graphs)
- Slower to iterate over all edges
- Faster to lookup specific edge

## What will we use?
An Adjacency List

### Why?
Most data in the real-world tends to lend itself to sparser and/or larger graphs

