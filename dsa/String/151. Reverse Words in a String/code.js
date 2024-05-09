/*
Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"

ref:

Intuition
Approach
Complexity

*/

//! code -1
// let s = "the sky is blue";
// let reverseWords = function (s) {
//   console.log(
//     s.split(" ").reverse().join(" ")
//   );

//   //   return s
//   //     .split(" ")
//   //     .filter((word) => word !== "")
//   //     .reverse()
//   //     .join(" ");
// };
// console.log(reverseWords(s));


var reverseWords = function(s) {
	// traverse the string, form words as encountered and add to the dictionary when a space is found
    let wordsInS = [];
    let word = "";
    for(let idx = 0; idx < s.length; ++idx) {    // O(n) [n - length of `s`]
        if(idx > 0 && s[idx] === " " && s[idx - 1] !== " ") {
            wordsInS.push(word);
            word = "";
        } else if(s[idx] !== " ") {
            word += s[idx];
        }
    }
	// this is required to add the last word after which no space is there
    if(word !== "") {
        wordsInS.push(word);    
    }
	// finally construct the resultant string by traversing the dictionary in reverse
    let result = "";
    for(let i = wordsInS.length - 1; i >= 0; --i) {    // O(m) [m = number of words (m < n)]
        result += wordsInS[i]
        if(i > 0) {
            result += " ";
        }
    }
    return result;
}