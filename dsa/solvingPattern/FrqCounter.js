// `FREQUENCY COUNTERS
// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations
// with arrays / strings`
`Q1.
 Write a function called same, which accepts two arrays. The function should return true if every value in the
 array has it's corresponding value squared in the second array. The frequency of values must be the same.
 same ([1,2,3], [4,1,91) //true
 same ([1,2,3],[1,91) // false
 same ([1,2,11,[4,4,1)) //false (must be same frequvancy) `;

// function faqcounter(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     let conrretIndex = arr2.indexOf(arr1[i] ** 2);
//     if (conrretIndex === -1) {
//       return false;
//     }
//     arr2.splice(conrretIndex, 1);
//   }
//   return true;
// }
// console.log(faqcounter([1, 2, 3], [4, 1, 9]));

// `Q2 .ANAGRAMS
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is
// a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat", "car") // false) // false
// validAnagram('awesome', awesom') // false
// validAnagram ('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// .`;
// function alagram(first, second) {
//   let lookup = {};
//   for (let i = 0; i < first.length; i++) {
//     let count = first[i];
//     lookup[count] ? (lookup[count] += 1) : (lookup[count] = 1);
//   }
//   for (let j = 0; j < second.length; j++) {
//     let count2 = second[j];

//     if (!lookup[count2]) {
//       return false;
//     } else {
//       lookup[count2]--;
//     }
//   }

//   return true;
// }
// console.log(alagram("anagram", "nagaram"));

// `Q3.
// Frequency Counter - sameFrequency

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false`;
/////////////
// function sameFrequency(int1, int2) {
//   let str1 = int1.toString();
//   let str2 = int2.toString();
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let lookup = {};
//   for (let i = 0; i < str1.length; i++) {
//     const element1 = str1[i];
//     lookup[element1] ? lookup[element1]++ : (lookup[element1] = 1);
//   }
//   // console.log(lookup);

//   for (let j = 0; j < str2.length; j++) {
//     const element2 = str2[j];

//     if (!lookup[element2]) {
//       return false;
//     } else {
//       lookup[element2]--;
//     }
//   }
//   return true;
// }

// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(22, 222));

// `Q4.Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.
//  Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions: Time - O(n) Space - O(n)
//  Bonus: Time - O(n log n) Space - O(1)`;

// try with FCP
// function areThereDuplicates() {
//   let collect = {};

//   for (let val in arguments) {
//     collect[arguments[val]]
//       ? collect[arguments[val]]++
//       : (collect[arguments[val]] = 1);
//   }

//   console.log(collect);

//   for (let i in collect) {
//     if (collect[i] > 1) return true;
//   }
//   return false
// }

// console.log(areThereDuplicates('a', 'b', 'c', 'a'));
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a')
