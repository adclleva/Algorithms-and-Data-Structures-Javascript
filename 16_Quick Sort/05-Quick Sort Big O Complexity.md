# Big O of Quicksort

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| ---------------------- | ------------------------- | ----------------------- | ---------------- |
| O(n log n)             | O(n log n)                | O(n^2)                  | O(log n)         |

## Why???

### Best Case

```
[8, 5, 6, 1, 3, 7, 2, 4, 12, 13, 14, 11, 9, 15, 10]

                     8
[4, 5, 6, 1, 3, 7, 2] [12, 13, 14, 11, 9, 15, 10]

                    8
         4                      12
[2, 1, 3] [6, 7, 5]   [10, 11, 9] [14, 15, 13]

                        8
                4              12
            2       6       10      14
          1   3   5   7    9  11  13  15
```

- O(n) comparisons per decomposition
- O(log n) decompositions

### Worst Case

```
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

1
  2
    3
      4
        5
          6
            7
              8
                9
                  10
                    11
                      12
                        13
                          14
                            15
```

- O(n) decompositions
- O(n) comparisons per decomposition
