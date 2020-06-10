# Quick Sort

- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

## How does it work?

```
[ 5, 2, 1, 8, 4, 7, 6, 3 ]

    5
   3 7
1 4 6 8
 2

```
