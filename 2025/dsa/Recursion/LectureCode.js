// // find the factorial of the numer

// function factorial(n) {
//   // iteration
//   if (n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// function main() {
//   let n = 4;
//   let value = factorial(n);
//   console.log("value", value);
// }
// main();

function claimingStair(n) {
  if (n == 0 || n === 1) return 1;
  return claimingStair(n - 1) + claimingStair(n - 2);
}
// function main1() {
//   let val = claimingStair(3);
// }

// main1();
// console.log(claimingStair(3));

/* 
function arrayRecus(arr, n, i, maxi) {
  //basecase
  if (i >= n) return maxi;

  if (arr[i] > maxi) {
    maxi = arr[i];
  }

  return arrayRecus(arr, n, i + 1, maxi);
}

function main() {
  let i = 0;
  let arr = [10, 20, 30, 40, 50];
  let n = arr.length;
  let max = -Infinity;
  console.log("maxi", arrayRecus(arr, n, i, max));
}
main();


*/


function isSorted() {

  
  
}