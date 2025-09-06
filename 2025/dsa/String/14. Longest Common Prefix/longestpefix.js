/*
14. Longest Common Prefix
Solved
Easy
Topics
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
var longestCommonPrefix = function (strs) {
  let prf = strs[0];
  let i = 1;

  while (i < strs.length) {
    if (!strs[i].startsWith(prf)) {
      console.log(prf);
      prf = prf.slice(0, -1);
    } else {
      i++;
    }
  }
  return prf;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
