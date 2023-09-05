// Given an integer of Array, Sort the Array

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = array[array.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([2, -4, 6, 1, 9, -2]));

// Big-O = O(n^2)

// Worst = O(n^2)   - If Array is already sort its means we have to work on full array and empty array
// Average = O(nlogn)    - n = for using loop || logn = for dividing array on small array

///////////////////////////////////////////////////////////

function quickSortDO(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = array[array.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }

  return [...quickSortDO(left), pivot, ...quickSortDO(right)];
}

console.log(quickSortDO([2, -4, 6, 1, 9, -2]));
