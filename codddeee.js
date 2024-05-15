// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// function secondLargest() {
//   let arr = [5, 2, 10, 8, 3];
//   let largest = arr[0];
//   let secondLargest = -Infinity;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     }

//     if (arr[i] < largest && arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   console.log(secondLargest);
// }
// secondLargest();

// function isSorted() {
//   let arr = [5, 2, 10, 8, 3];
//   let largest = arr[0];
//   let secondLargest = -Infinity;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     }

//     if (arr[i] < largest && arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   console.log(secondLargest);
// }
// secondLargest();

// var removeElement = function (nums, val) {
//   let counter = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[counter] = nums[i];
//       counter++;
//     }
//   }

//   console.log(nums);
//   return counter;
// };

// console.log(removeElement([3, 2, 2, 3], 3));
var isPalindrome = function (x) {
  let arr = x.split("");
  let start = 0;
  let end = x.length;
  while (start < end) {
    if (x[start] !== x[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};
isPalindrome(isPalindrome(-121));
