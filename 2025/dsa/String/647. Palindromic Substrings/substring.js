// function subscring() {
//   let str = "hello";
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i; j < str.length - 1; j++) {
//         console.log("s" , arr[j][i]);
//     }
//   }
// }

/*

// subscring()https://leetcode.com/problems/palindromic-substrings/
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 
*/

const expnadaroundindex = (str, i, j) => {
  let count = 0;
  while (i >= 0 && j < str.length) {
    count++;
    j--;
    i++;
  }
  return count;
};

function palindromsub() {
  let s = "aaa";
  let n = s.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    // odd
    let oddcount = expnadaroundindex(s, i, i);
    count = count + oddcount;
    //even
    let evencount = expnadaroundindex(s, i, i + 1);
    count = count + evencount;
  }
  console.log("count", count);
}
console.log(palindromsub());
