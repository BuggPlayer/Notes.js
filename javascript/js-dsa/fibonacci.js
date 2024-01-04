// each number is sum preview 2 num

// fib(2)=[0,1]
// fib(3)=[0,1,1]

// Code 25: Fibonacci Series (0,1,1,2,3,5,8,13....) where keeping in array
function listFibonacci(n) {
var arr = [0, 1]
  for (var  i = 1; i < n; i++) 
    arr.push(arr[i] + arr[i - 1])

  return arr
}
console.log(listFibonacci(4))