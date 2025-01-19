// Using a loop: Iterates from 1 to n, adding each number to sum.
function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Using the mathematical formula for summation: Uses the formula S = (n(n+1))/2 which is the most efficient
/** I think this is the most optimal because it runs in O(1) time, while the others run in O(n) time complexity */
function sum_to_n_b(n: number): number {
  return (n * (n + 1)) / 2;
}

// Using recursion: Calls itself with n-1 until it reaches the base case.
function sum_to_n_c(n: number): number {
  if (n <= 1) return n;
  return n + sum_to_n_c(n - 1);
}
