// Given a Positive Integer "n", Determine if the number is Power of Two or not.
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
}

console.log(isPowerOfTwo(0)); // True = 2^0
console.log(isPowerOfTwo(1)); // True = 2^1
console.log(isPowerOfTwo(5)); // False
console.log(isPowerOfTwo(4)); // True = 2^2

/////////////////////////////////////////////////////

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(0)); // True = 2^0
console.log(isPowerOfTwoBitWise(1)); // True = 2^1
console.log(isPowerOfTwoBitWise(5)); // False
console.log(isPowerOfTwoBitWise(4)); // True = 2^2
