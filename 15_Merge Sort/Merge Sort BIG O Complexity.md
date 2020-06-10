# Big O of mergeSort

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| ---------------------- | ------------------------- | ----------------------- | ---------------- |
| O(n log n)             | O(n log n)                | O(n log n)              | O(n)             |

```
[ 8 ] [ 3 ] [ 5 ] [ 4 ] [ 7 ] [ 6 ] [ 1 ] [ 2 ]
      [ 3, 8 ] [ 4, 5 ] [ 6, 7 ] [ 1, 2 ]
          [ 3, 4, 5, 8 ] [ 1, 2, 6, 7 ]
            [ 1, 2, 3, 4, 5, 6, 7, 8 ]
```

O(log n) decompositions

O(n) comparisons per decomposition
