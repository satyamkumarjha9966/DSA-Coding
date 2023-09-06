// Give a Number "n", Find the first "n" element of the Fibonacci Sequence
function Fibonacci(n) {
  const Fib = [0, 1]; // We know the starting First two element are 0, 1

  for (let i = 2; i < n; i++) {
    Fib[i] = Fib[i - 1] + Fib[i - 2];
  }
  return Fib;
}

console.log(Fibonacci(2)); // [0, 1]
console.log(Fibonacci(3)); // [0, 1, 1]
console.log(Fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

// Big-O = O(n)
