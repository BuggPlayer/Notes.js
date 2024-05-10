let n = 10;
let i = 0;
var sum = 0;
function PrintVal(n, i, sum) {
  if (i === n) return i;

  console.log(i);
  sum = sum + i;
  console.log("sum", sum);
  PrintVal(n, i + 1, sum);
}
console.log(PrintVal(n, i, sum));
// for (let inde , sumx = 0; index < array.length; index++) {
//     const element = array[index];

// }
