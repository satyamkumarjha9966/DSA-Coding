// Give an integer "n", Find the FActorial of integer.
function Factorial(n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    // result *= i;
    result = result * i;
  }
  return result;
}

console.log(Factorial(0)); // 1
console.log(Factorial(1)); // 1
console.log(Factorial(4)); // 4! = 4*3*2*1 = 24
console.log(Factorial(5)); // 5! = 5*4*3*2*1 = 120

// Big-O = O(n)
