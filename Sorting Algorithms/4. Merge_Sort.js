// Given an integer of Array, Sort the Array

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  let mid = Math.floor(array.length / 2);  // [1,2,3,4]

  let leftArr = array.slice(0, mid);   // [1,2]
  let rightArr = array.slice(mid);  // [1,2]

  return merge(mergeSort(leftArr), mergeSort(rightArr));  // [1] [2] || [3] [4]
}

function merge(leftArr, rightArr) {    // [1] [2] [3] [4]   // [1] [2]     [3] ]4
  let sortArr = [];
  while (leftArr.length && rightArr.length) {  // [1, ]
    if (leftArr[0] <= rightArr[0]) {
      sortArr.push(leftArr.shift());
    } else {
      sortArr.push(rightArr.shift());
    }
  }
  return [...sortArr, ...leftArr, ...rightArr];
}

console.log(mergeSort([2, -4, 6, 1, 9, -2]));

// Big-O = O(nlogn)

// Noted Points
let arr = [1, 2, 3, 4];

console.log(arr.shift());
console.log(arr);

//////////////////////////////////////////////////////

function mergeSortDO(array) {
  if (array.length < 2) {
    return array;
  }

  let mid = Math.floor(array.length / 2);

  let leftArr = array.slice(0, mid);
  let rightArr = array.slice(mid);

  return mergeDO(mergeSortDO(leftArr), mergeSortDO(rightArr));
}

function mergeDO(leftArr, rightArr) {
  let sortArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] >= rightArr[0]) {
      sortArr.push(leftArr.shift());
    } else {
      sortArr.push(rightArr.shift());
    }
  }
  return [...sortArr, ...rightArr, ...leftArr];
}

console.log(mergeSortDO([2, -4, 6, 1, 9, -2]));
