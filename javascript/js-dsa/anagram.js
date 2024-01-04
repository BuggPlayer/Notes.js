// // Code 8:Anagram
// function checkStringsAnagram() {
//   var a = "Army";
//   var b = "Mary";
//   let str1 = a.toLowerCase().split("").sort().join("");
//   let str2 = b.toLowerCase().split("").sort().join("");
//   if (str1 === str2) {
//     console.og("True");
//   } else {
//     console.log("False");
//   }
// }
// console.log(checkStringsAnagram());

// console.log(factvalue(3))

// function alagram(first, second) {
//   if (first.length !== second.length) {
//     return false
//   }

//   let lookup = {};
//   for (let i = 0; i < first.length; i++) {
//     let count = first[i]
//     lookup[count] ? lookup[count] = lookup[count] + 1 : lookup[count] = 1

//   }
//   for (j = 0; j < second.length; j++) {
//     let count2 = second[j]

//     if (!lookup[count2]) {
//       return false
//     } else {
//       lookup[count2]--
//     }
//   }
//   return true


// }
// console.log(alagram("anagram", "nagaram"));