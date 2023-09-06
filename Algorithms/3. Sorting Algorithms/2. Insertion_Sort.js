// Given an integer of Array, Sort the Array

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let insertToNext = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > insertToNext) {
      array[j + 1] = array[j];
      j = j - 1;
    }

    array[j + 1] = insertToNext;
  }

  return array;
}

console.log(insertionSort([2, -4, 6, 1, 9, -2]));

// Big-O = O(n^2)

//////////////////////////////////////////////////

function insertionSortDO(array) {
  for (let i = 1; i < array.length; i++) {
    let insertToNext = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] < insertToNext) {
      array[j + 1] = array[j];
      j = j - 1;
    }

    array[j + 1] = insertToNext;
  }

  return array;
}

console.log(insertionSortDO([2, -4, 6, 1, 9, -2]));
