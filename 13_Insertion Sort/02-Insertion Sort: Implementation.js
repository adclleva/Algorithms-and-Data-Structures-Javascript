function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// utilizing a while loop
const insertionSort2 = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let currentVal = nums[i];
    let j = i - 1; // this will be for the second set

    while (j >= 0 && nums[j] > currentVal) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = currentVal; // this will the value that was from the current value
  }
  return nums;
};

insertionSort([2, 1, 9, 76, 4]);
