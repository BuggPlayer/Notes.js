// // Code 4:String reverse without reversing of individual words
// // (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split
// // and then join().

// function reverse() {
//   var string = "India is my country";
//   let result = string
//     .split("")
//     .reverse()
//     .join("")
//     .split(" ")
//     .reverse()
//     .join(" ");
//   return result;
// }
// console.log(reverse());
// output = "aidnI si ym yrtnuoc";
// / function reverse() {
//     //   var string = "India is my country";
//     //   let result = string.split('').reverse().join('').split(" ").reverse().join(" ")
//     //   // let result = string
//     //   //   .split("")
//     //   //   .reverse()
//     //   //   .join("")
//     //   //   .split(" ")
//     //   //   .reverse()
//     //   //   .join(" ");
//     //   return result;
//     // }
//     // console.log(reverse());
    
//     // var reverseWords = function(s) {
//     //   let res = '';
//     //   let word = '';
//     //   for (let c of s) {
//     //     if (c === ' ') {
//     //       res += word + c;
//     //       word = '';
//     //     } else {
//     //       word = c + word;
//     //     }
//     //   }
//     //   return res + word;
//     // };
//     // console.log(reverseWords("priya bagde"))
    
//     function reverseString(str) {
//       let revserStr = ''
//       for (let i = str.length - 1; i >= 0; i--) {
    
//         revserStr = revserStr + str[i]
    
//       }
//       return revserStr
//     }
//     console.log(reverseString('hello world this is faizan'))