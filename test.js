// function isSorted() {
//   let arr = [1, 2, 3, 4, 5, 6, 7];
//   let k = 3;
//   let result = [];

//   for (let i = k; i < arr.length-1; i++) {
//    result.push(arr[i])
//   }

//   return result;
// }

// const logg = isSorted();

// console.log("kk", logg);

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// function rotate(){
//   let arr = [1,2,3,4,5,6,7]
//   let k = 3
//   let b=[];
//   let a =[];

//   for (let i = 0; i < arr.length; i++) {
//    if(arr)

//   }
// }

// function maxconsicive() {
//   let arr = [1, 1, 0, 1, 1, 1];
//   let max = 0;
//   let final =0

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       max++;
//     } else {
//       final = Math.max(final, max)
//       max = 0;
//     }
//   }
//   console.log("maxx" , max)
// }
// maxconsicive();

// function movezero(){
// let arr= [0,1,0,3,12]
// // Output: [1,3,12,0,0]
// let size = arr.length;
// let arr1=[];

// for (let i = 0; i <size; i++) {
// if(arr[i]!=0){
//   arr1.push(arr[i]);
// }
// // console.log("11", arr1.length) [1,2,3, ]

// for (let j = arr1.length; j < size; j++) {

// arr1[j] = 0

// }

// // }
// console.log("ar22" , arr1)

// }
// }

// movezero()

// function movezero() {
//   let arr = [0, 1, 0, 3, 12]; // Original array
//   let size = arr.length;
//   let arr1 = []; // New array to store result

//   // Step 1: Push all non-zero elements to arr1
//   for (let i = 0; i < size; i++) {
//     if (arr[i] != 0) {
//       arr1.push(arr[i]); // Add non-zero element
//     }
//   }

//   // Step 2: Add zeros at the end of arr1 to maintain the same length
//   for (let j = arr1.length; j < size; j++) {
//     arr1[j] = 0; // Fill remaining spots with 0
//   }

//   // Final result
//   console.log("Output array:", arr1); // [1, 3, 12, 0, 0]
// }

// movezero();

// function removeDuplicate() {
//   let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
//   let i = 0;

//   for (let j = 1; j < nums.length; j++) {

//     if (nums[i] !== nums[j]) {
//       i++
//      nums[i]= nums[j];

//     }
//   }
//   return i+1 
 
// }

// let rsulr = removeDuplicate();

// console.log("rsulr", rsulr)


function test (){
  let arr = [4,1,2,1,2];
  for (let index = 0; index < array.length; index++) {
    
  }
}

test()