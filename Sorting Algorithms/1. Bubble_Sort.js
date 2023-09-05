// Given an integer of Array, Sort the Array

function bubbleSort(array) {
  let swap;
  do {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);
  return array;
}

console.log(bubbleSort([2, -4, 6, 1, 9, -2]));

// Big-O = O(n^2)

///////////////////////////////////////////////////////

function bubbleSortDO(array) {
  let swap;
  do {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);
  return array;
}

console.log(bubbleSortDO([2, -4, 6, 1, 9, -2]));
