// Give a Natural Number "n", determine the number is prime or not.
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1)); // False
console.log(isPrime(5)); // True [1*5 OR 5*1]
console.log(isPrime(4)); // False [1*4 OR 2*2 OR 4*1]

// Big-O = O(n)

///////////////////////////////////////////////////////////////

function isPrimeMath(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1)); // False
console.log(isPrime(5)); // True [1*5 OR 5*1]
console.log(isPrime(4)); // False [1*4 OR 2*2 OR 4*1]

// Big-O = O(sqrt(n))
