// find the prime number

function primeNumber() {
  console.log("hello");
  let n = 10;
  let count = 0;
  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}
console.log(primeNumber());
