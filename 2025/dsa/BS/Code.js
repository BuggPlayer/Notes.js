// // // // // Q.1 find the fisrt occurance in array

// // // let arr = [1, 3, 4, 4, 4, 4, 4, 6, 7, 9];
// // // let target = 4;
// // // function BS(arr, target) {
// // //   let n = arr.length;
// // //   let start = 0;
// // //   let end = n - 1;
// // //   let ans = -1;

// // //   while (start <= end) {
// // //     let mid = Math.floor(start + end / 2);
// // //     console.log("mid", mid);
// // //     if (arr[mid] === target) {
// // //       ans = mid;
// // //       end = mid - 1;
// // //     } else if (target < arr[mid]) {
// // //       end = mid - 1;
// // //     } else if (target > arr[mid]) {
// // //       start = mid + 1;
// // //     }
// // //     mid = start + end / 2;
// // //   }

// // //   return ans;
// // // }
// // // console.log(BS(arr, target));

// // function binarySearch() {
// //   // let a = [3, 4, 6, 7, 9, 12, 16, 17];
// //   // N = 5, arr[] = {3,5,8,15,19}, x = 9
// //   let arr = [3, 5, 8, 15, 19],
// //    let x = 9;
// //   let target = 6;

// //   let n = arr.length;
// //   let start = 0;
// //   let end = n - 1;

// //   while (start <= end) {
// //     let mid = Math.floor((start + end) / 2);

// //     if (arr[mid] === target) {
// //       return mid;
// //     } else if (target > arr[mid]) {
// //       return (end = mid + 1);
// //     } else {
// //       return (start = mid - 1);
// //     }
// //     // mid = Math.floor(start + end / 2);
// //   }
// //   return -1;
// // }
// // console.log(binarySearch());
// // //

// // function LowerBound() {
// //   let arr = [3, 5, 8, 15, 19];
// //   let n = 5;
// //   let x = 9;

// //   let start = 0;
// //   let end = n - 1;
// //   let ans = 5;

// //   while (start <= end) {
// //     let mid = Math.floor(start + end / 2);

// //     console.log("mid", mid);

// //     if (arr[mid] >= x) {
// //       ans = mid;
// //     } else {
// //     }
// //   }

// //   //   }
// // }

// // console.log(LowerBound());

// function FindX() {
//   // Let’s say the given array is = {3, 4, 6, 7, 9, 12, 16, 17} and target = 6.
//   // console.log("hello");
//   let arr = [3, 4, 6, 7, 9, 12, 16, 17];
//   let n = arr.length;

//   let target = 6;
//   let start = 0;
//   let end = n - 1;

//   while (start <= end) {
//     let mid = Math.floor(start + end / 2);

//     if (arr[mid] === target) {
//       // ans = mid;
//       // end = mid + 1;
//       return mid;
//     } else if (target > arr[mid]) {
//       start = mi + 1;
//     } else {
//       return (end = mid - 1);
//     }
//   }
//   return -1;
// }

// console.log(FindX());

// function floor_1(arr, x, n) {
//   let start = 0;
//   let end = n - 1;
//   let ans = n;
//   while (start <= end) {
//     let mid = Math.floor(start + end / 2);
//     while (start <= end) {
//       if (arr[mid] <= x) {
//         ans = mid;
//         start = mid + 1;
//       } else {
//         end = mid - 1;
//       }
//     }
//   }
//   return -1;
// }

// function FindX() {
//   let arr = [3,4,13,13,13,20,40];
//   let target = 13;
//   let n = arr.length;
//   floor_1(arr, target, n);
// }

// console.log(FindX());

//Last occurrence in a sorted array
function solve(arr, x, n) {
  let start = 0;
  let end = n - 1;
  let ans = n;
  while (start <= end) {
    let mid = Math.floor(start + end / 2);

    while (start <= end) {
      if (arr[mid] === x) {
        ans = mid;
        start = mid + 1;
      } else if (arr[mid] > key) {

       return  end = mid - 1;
      } else {
       return  start = mid + 1
      }
    }
  }
  return ans;
}

function FindX() {
  let arr = [3, 4, 13, 13, 13, 20, 40];
  let target = 13;
  let n = arr.length;
  const vale = solve(arr, target, n);
  return vale
}

console.log(FindX());