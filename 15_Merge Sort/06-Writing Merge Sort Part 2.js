const merge = (arr1, arr2) => {
  let sortedArr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    let num1 = arr1[i];
    let num2 = arr2[j];

    if (num1 > num2) {
      sortedArr.push(num2);
      j++;
    } else {
      sortedArr.push(num1);
      i++;
    }
  }

  if (arr1.length == i && arr2 != j) {
    sortedArr = [...sortedArr, ...arr2.slice(j)];
  } else if (arr2.length == j && arr1 != i) {
    sortedArr = [...sortedArr, ...arr1.slice(i)];
  }

  return sortedArr;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
};

console.log(mergeSort([1, 10, 50, 55, 100, 191]));
