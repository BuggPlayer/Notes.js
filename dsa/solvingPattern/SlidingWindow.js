// // `SLIDING WINDOW
// // This pattern involves creating a window which can either be an array or
// // number from one position to another Depending on a certain condition, the
// // window either increases or closes (and a new window is created)
// // Very useful for keeping track of a subset of data in an array/string etc.`

// // `Q1.An Example
// // Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// //  The function should calculate the maximum sum of n consecutive elements in the array.

// function maxSubarraySum(arr, num) {
//   let maxsum = 0;
//   let tempsum = 0;

//   if (arr.length < num) return null;

//   for (let i = 0; i < num; i++) {
//     maxsum += arr[i];
//   }
//   tempsum = maxsum;

//   for (let j = num; j < arr.length; j++) {
//     tempsum = tempsum - arr[j - num] + arr[j];
//     maxsum = Math.max(maxsum, tempsum);
//   }

//   return maxsum;
// }
// console.log(maxSubarraySum([], 4));
// // maxSubarray Sum([1,2,5,2,8,1,51,2)// 10
// // maxSubarray Sum ([1,2,5,2,8,1,5],4) // 17
// // maxSubarray Sum( [4,2,1,6], 1) // 6
// // maxSubarray Sum( [4,2,1,6,2], 4) // 13
// // maxSubarray Sum ([],4) // null`

// // /////////////////////////////////////////
// // `Q2.Sliding Window - maxSubarraySum
// // Given an array of integers and a number, write a function called maxSubarraySum,
// // which finds the maximum sum of a subarray with the length of the number passed to the function.
// // Note that a subarray must consist of consecutive elements from the original array.
// // In the first example below, [100, 200, 300] is a subarray of the original array,
// //  but [100, 300] is not.
// // function maxSubarraySum(arr, num) {
// //   if (arr.length < num) return null;

// //   let total = 0;
// //   for (let i = 0; i < num; i++) {
// //     total += arr[i];
// //   }
// //   let currentTotal = total;
// //   for (let i = num; i < arr.length; i++) {
// //     currentTotal = currentTotal - arr[i - num] + arr[i];
// //     total = Math.max(total, currentTotal);
// //   }
// //   return total;
// // }
// // console.log(maxSubarraySum([100, 200, 300, 400], 2));

// // maxSubarraySum([100,200,300,400], 2) // 700
// // maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
// // maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// // maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// // maxSubarraySum([2,3], 3) // null
// // Constraints:
// // Time Complexity - O(N)
// // Space Complexity - O(1)
// // `

// // `Q3.Sliding Window - minSubArrayLen
// // Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// // This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// // Examples:
// // minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// // minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// // minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// // minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// // minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// // minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// // minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
// // Time Complexity - O(n)
// // Space Complexity - O(1)

// // `

// // `Q4.Sliding Window - findLongestSubstring
// // Write a function called findLongestSubstring, which accepts a string and returns the
// // length of the longest substring with all distinct characters.

// function findLongestSubstring(str) {
//   let longest = 0;
//   let temp = 0;
//   //for storing
//   let seen = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (seen[char]) {
//       temp = Math.max(temp, seen[char]);
//       console.log(temp);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - temp + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }

// console.log(findLongestSubstring('rithmschool'));
// // findLongestSubstring('') // 0
// // findLongestSubstring('rithmschool') // 7
// // findLongestSubstring('thisisawesome') // 6
// // findLongestSubstring('thecatinthehat') // 7
// // findLongestSubstring('bbbbbb') // 1
// // findLongestSubstring('longestsubstring') // 8
// // findLongestSubstring('thisishowwedoit') // 6
// // Time Complexity - O(n)
// // `
