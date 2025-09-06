/*
121. Best Time to Buy and Sell Stock

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5
 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not 
allowed because you must buy before you sell.


soln1:
BRUT force
function Buysell() {
  let arr = [7, 1, 5, 3, 6, 4];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        max = Math.max(arr[j] - arr[i], max);
      }
    }
  }
  console.log(max);
}
console.log(Buysell());

! Better oproche
todo 1 max=0 minprice=0 stroed minprice -->

*/

function Buysell() {
  let arr = [7, 1, 5, 3, 6, 4];
  let max = 0;
  let minprice = Infinity;
  for (let i = 0; i < arr.length; i++) {
    minprice = Math.min(minprice, arr[i]);
    max = Math.max(max, arr[i] - minprice);
  }

  console.log(max);
}
console.log(Buysell());
