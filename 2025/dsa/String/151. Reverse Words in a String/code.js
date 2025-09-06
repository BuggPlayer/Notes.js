/*
Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"

ref:

Intuition
Approach
Complexity

! code -1
// let s = "the sky is blue";
// let reverseWords = function (s) {
//   console.log(
//     s.split(" ").reverse().join(" ")
//   );


// console.log(reverseWords(s));


!optimal soln


*/
var reverseWords = function (s) {
  // return s.split(" ").reverse().join(" ")
  let i = 0;
  let n = s.length;
  let ans = "";
  while (i < n) {
    let temp = "";
    while (s[i] === " " && i < n) {
      i++;
    }
    while (s[i] !== " " && i < n) {
      temp = temp + s[i];
      i++;
    }
    if (temp.length > 0) {
        console.log(temp,"t")
      ans = temp + " " + ans;
    }
  }

  return ans;
};
console.log(reverseWords("the sky is blue"));
