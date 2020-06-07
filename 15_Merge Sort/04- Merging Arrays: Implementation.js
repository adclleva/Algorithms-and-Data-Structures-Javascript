// Merges two already sorted arrays
function mergeColt(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

merge([100, 200], [1, 2, 3, 5, 6]);

const mergeSortArvin = (arr1, arr2) => {
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

console.log(mergeSortArvin([1, 10, 50, 55, 100, 191], [2, 14, 66, 99, 100]));
