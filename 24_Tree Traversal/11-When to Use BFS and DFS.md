# When to Use BFS and DFS

- Time is the same since we are visiting every node once.
- Space depends on the tree, if the tree is wide, BFS can take more memory.
- If it's a long tree, DFS can take more space. 
 
## DFS - InOrder
- Used commonly with BST's
- Notice we get all nodes in the tree in their underlying order (lowest to highest)
- 

## DFS - PreOrder
- Can be used to "export" a tree structure so that it is easily reconstructed or copied.
- We know the first element of the data is the root

## RECAP
- Trees are non-linear data structures that contain a root and child nodes
- Binary Trees can have values of any type, but at most two children for each parent
- Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
- We can search through Trees using BFS and DFS

