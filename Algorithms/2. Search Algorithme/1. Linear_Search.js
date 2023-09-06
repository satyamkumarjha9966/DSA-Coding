// Given an array of "n" elements and the target element is "t", Find the Index of "t" in the array. Return -1 if the target element is not found.

function LinearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(LinearSearch([1, 2, 3, 4, 5], 4));
console.log(LinearSearch([6, 7, 8, 9], 5));

// Big-O = O(n)
