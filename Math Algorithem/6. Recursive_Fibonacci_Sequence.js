// Given a number "n", find the nth element of the Fibonacci Sequence.
function FabonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return FabonacciRecursive(n - 1) + FabonacciRecursive(n - 2);
}

console.log(FabonacciRecursive(0)); // 0
console.log(FabonacciRecursive(1)); // 1
console.log(FabonacciRecursive(6)); // 8
console.log(FabonacciRecursive(7)); // 13

// O(n) - Iterative
// O(2^n) - Recursive

// For (n) Febonacci Sequence Recursion is the worst solution method than Iterative Concept.
