// // // // Q.1 find the fisrt occurance in array

// // let arr = [1, 3, 4, 4, 4, 4, 4, 6, 7, 9];
// // let target = 4;
// // function BS(arr, target) {
// //   let n = arr.length;
// //   let start = 0;
// //   let end = n - 1;
// //   let ans = -1;

// //   while (start <= end) {
// //     let mid = Math.floor(start + end / 2);
// //     console.log("mid", mid);
// //     if (arr[mid] === target) {
// //       ans = mid;
// //       end = mid - 1;
// //     } else if (target < arr[mid]) {
// //       end = mid - 1;
// //     } else if (target > arr[mid]) {
// //       start = mid + 1;
// //     }
// //     mid = start + end / 2;
// //   }

// //   return ans;
// // }
// // console.log(BS(arr, target));

// function binarySearch() {
//   // let a = [3, 4, 6, 7, 9, 12, 16, 17];
//   // N = 5, arr[] = {3,5,8,15,19}, x = 9
//   let arr = [3, 5, 8, 15, 19],
//    let x = 9;
//   let target = 6;

//   let n = arr.length;
//   let start = 0;
//   let end = n - 1;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);

//     if (arr[mid] === target) {
//       return mid;
//     } else if (target > arr[mid]) {
//       return (end = mid + 1);
//     } else {
//       return (start = mid - 1);
//     }
//     // mid = Math.floor(start + end / 2);
//   }
//   return -1;
// }
// console.log(binarySearch());
// //

function LowerBound() {
  let arr = [3, 5, 8, 15, 19];
  let n = 5;
  let x = 9;

  let start = 0;
  let end = n - 1;
  let ans = 5;

  while (start <= end) {
    let mid = Math.floor(start + end / 2);

    console.log("mid", mid);

    if (arr[mid] >= x) {
      ans = mid;
    } else {
    }
  }

  //   }
}

console.log(LowerBound());
