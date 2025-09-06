//  `MULTIPLE POINTERS
//  Creating pointers or values that correspond to an index or position
//  and move towards the beginning,end or middle based on a certain condition
// Very efficient for solving problems with minimal space complexity as well`

// `Q1.AN EXAMPLE
// Write a function called sumZero which accepts a sorted array of integers.
//The function should find the first pair where the sum is 0.
// Return an array that includes both
// values that sum to zero or undefined if a pair does not exist

// TODO:using nested loop
// function sumZero(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       const elementJ = array[j];
//       if (array[i] + elementJ === 0) {
//         return [array[i], elementJ];
//       }
//     }
//   }
//   return undefined;
// }
// console.log(sumZero([-2, 0, 1, 3]));
// //TODO:usig mutilpoint
// function sumZeroMP(array) {
//   let leftindex = 0;
//   let rightindex = array.length - 1;

//   while (leftindex < rightindex) {
//     let sum = array[leftindex] + array[rightindex];
//     if (sum === 0) {
//       return [array[leftindex], array[rightindex]];
//     } else if (sum > 0) {
//       rightindex--;
//     } else {
//       leftindex++;
//     }
//   }
//   return undefined
// }
// console.log(sumZeroMP([-3, -2, -1, ]));

// Q2.TODO:countUnique Values:
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the
// unique values in the array. There can be negative numbers in the array,
// but it will always be sorted.

//////////

// function countUniqueValues(array) {
//   let i = 0;
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] !== array[j]) {
//       i++;
//       array[i] = array[j];
//     }
//   }
//   return i + 1;
// }
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

// countUniqueValues ([1,1,1,1,1,2]) // 2
// countUnique Values ([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues( []) // O
// countUniqueValues ([-2,-1,-1,0,1]) // 4

// `Q3.TODO:Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.
//  Examples:

// function areThereDuplicates(...arr) {
//   let start = 0;
//   let next = 1;
//   //   let end = ;
//   while (next < arr.length) {
//     if (arr[start] === arr[next]) {
//       return true;
//     }
//     start++;
//     next++;
//   }
//   return false;
// }

// console.log(areThereDuplicates(1, 2, 2));
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions: Time - O(n) Space - O(n)
//  Bonus: Time - O(n log n) Space - O(1)`;

// `Q4.TODO:Multiple Pointers - averagePair Write a function called averagePair.
// Given a sorted array of
// integers and a target average, determine if there is
//  a pair of values in the array where the average of the pair equals the target average.
//   There may be more than one pair that matches the average target.
//   Bonus Constraints: Time: O(N) Space: O(1) Sample Input:

// function name(arr, target) {
//   let leftindex = 0;
//   let rightindex = arr.length - 1;

//   while (leftindex < rightindex) {
//     let avg = arr[leftindex] + arr[rightindex]/2;
//     console.log(avg);
//     if (avg === target) {
//       return true;
//     } else if (avg > target) {
//       rightindex--;
//     } else {
//       leftindex++;
//     }
//   }
//   return false;
// }

// console.log(name([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// function averagePair(arr, num) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     let avg = (arr[start] + arr[end]) / 2;
//     if (avg === num) return true;
//     else if (avg < num) start++;
//     else end--;
//   }
//   return false;
// }

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false
// `

//Q5.TODO: Multiple Pointers - isSubsequence

// Write a function called isSubsequence which takes in two strings and checks whether the characters
// in the first string form a subsequence of the characters in the second string. In other words,
//  the function should check whether the characters in the first string appear somewhere in the
//  second string, without their order changing.
// Examples:

// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;

//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

// console.log(isSubsequence("hello", "hello world")); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)
