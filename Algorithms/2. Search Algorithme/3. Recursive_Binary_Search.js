// Given an "sort" array of "n" elements and the target element is "t", Find the Index of "t" in the array. Return -1 if the target element is not found.

function recursiveBinarySearch(array, target) {
  return search(array, target, 0, array.length - 1);
}

function search(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target == array[middleIndex]) {
    return middleIndex;
  }

  if (target < middleIndex) {
    return search(array, target, leftIndex, middleIndex - 1);
  } else {
    return search(array, target, middleIndex + 1, rightIndex);
  }
}

// Array must be sort
console.log(recursiveBinarySearch([2, 6, 4, 7, 10], 10));
console.log(recursiveBinarySearch([2, 6, 8, 10, 17, 18], 5));

// Big-O = O(logn)
