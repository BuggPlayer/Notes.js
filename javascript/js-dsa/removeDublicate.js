// // TODO Q1
// function removeDuplicateCharacters() {
//     var string = "priya riya supriya";

//     let result = string
//       .split("")
//       .filter((item, index, arr) => {
//         return arr.indexOf(item) == index;
//       })
//       .join("");

//     //   let result = string
//     //     .split("")
//     //     .filter((item, index, arr) => {
//     //       return arr.indexOf(item) == index;
//     //     })
//     //     .join("");
//     return result;
//   }
//   console.log(removeDuplicateCharacters());
//   function removedublicate() {
//     let value = "hello world";

//     let result = value
//       .split("")
//       .filter((item, index, arr) => arr.indexOf(item) == index)
//       .join("");

//     return result;
//   }

//   console.log(removedublicate());

// Code 2: Remove Duplicate characters from array of element and find the count of an elements using set object
// var arr = [55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5];
// var unique = [...new Set(arr)];
// console.log(unique); //output: [55, 44, 67, 8, 65, 1, 2, 3, 34, 5]
// console.log(unique.length); //output: 10

// Code 3: Remove Duplicate characters from array of element using filter
// var myArray = ['a', 1, 'a', 2, '1'];