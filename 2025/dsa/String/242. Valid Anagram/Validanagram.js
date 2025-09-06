/*
242. Valid Anagram
Easy
Topics
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

function validanagram() {
  let s = "a";
  let sArr = s.split("");
  let t = "b";
  let tArr = t.split("");

  let lookup = {};

  for (let i = 0; i < sArr.length; i++) {
    lookup[sArr[i]] ? (lookup[sArr[i]] += 1) : (lookup[sArr[i]] = 1);
  }

  console.log(lookup);

  for (let j = 0; j < tArr.length; j++) {
    if (!lookup[tArr[j]]) {
      return false;
    } else {
      lookup[tArr[j]]--;
    }
  }

  return true;
}
console.log(validanagram());

