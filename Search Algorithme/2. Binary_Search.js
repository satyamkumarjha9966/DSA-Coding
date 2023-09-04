// Given an "sort" array of "n" elements and the target element is "t", Find the Index of "t" in the array. Return -1 if the target element is not found.

function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === array[middleIndex]) {
      return middleIndex;
    }

    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

// Array must be sort
console.log(binarySearch([2, 6, 4, 7, 10], 10));
console.log(binarySearch([2, 6, 8, 10, 17, 18], 5));

// Big-O = O(logn)
