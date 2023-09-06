// Given an staircase of n steps, count the number of distinct way to climb at top. You can either climb 1 step or 2 steps at a time.

function climbingStaircase(n) {
  let noOfWays = [1, 2];
  for (let i = 2; i < n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));

// Big-O = O(n)
