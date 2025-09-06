/*
Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

for ref:https://www.youtube.com/watch?v=I0osO1BqiGw
approched : counter 
*/
let s = "(()())(())";
const removeOuterParentheses = () => {
//   let s = "(()())(())";
  let counter = 0;
  let ans = '';

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    // console.log(element);
    if (element === "(") {
      if (counter) {
        ans = ans + element;
      }
      counter++;
    }
    if (element === ")") {
        counter--;
      if (counter) {
        ans = ans + element;
      }
   
    }
  }

  return ans
};

console.log(removeOuterParentheses(s));

// var removeOuterParentheses = function (s) {
//   let openCount = 0;

//   let output = "";

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       if (openCount) {
//         output += s[i];
//       }
//       openCount++;
//     } else if (s[i] === ")") {
//       openCount--;
//       //   if (openCount) output += s[i];
//     }
//   }
//   return output;
// };
// console.log(removeOuterParentheses(s));
