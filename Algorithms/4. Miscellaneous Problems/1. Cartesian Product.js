// Given two finite two empty sets, Find there cartesian products/

function cartesianProduct(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      arr.push([arr1[i], arr2[j]]);
    }
  }
  return arr;
}

console.log(cartesianProduct([1, 2], [3, 4, 5]));

// Big-O = O(mn)      // m = length of arr1  &&  n = length of arr2
