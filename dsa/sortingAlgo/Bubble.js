// // console.log("hello");

// // const arr = [6, 4, 14, 10].sort((a, b) => b - a);
// // console.log(arr);
//TODO:#1
// algo:Bubble sort
// unoptimize way
// Big-O logn
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i-1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([37, 45, 39, 10, 24])); //[10, 24, 37, 39, 45]

// //TODO:#2
// // algo:Bubble sort
// // Big-O logn
// function bubbleSort(arr) {
//   var noSwaps;
//   for (let i = arr.length; i > 0; i--) {
//     noSwaps = true;
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         noSwaps = false;
//       }
//     }

//     if (noSwaps) break;
//   }
//   return arr;
// }

// console.log(bubbleSort([37, 45, 39, 10, 24])); //[10, 24, 37, 39, 45]
