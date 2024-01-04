////////////////////////////////////////Start 10-4-2023////////////////////////////////////////////////////////////////////////////////////////////////

// TODOQ1 .how many way are to create object is js

// //1 object constructe
// let obj = new Object();
// //2 object literal
// var objL = {
//   name: "fiza",
// };
// function object (){

// }
// TODO Q2
// call()

// var stuent = { name: "macbook", value: 4000 };
// function buy(disc, greeting) {
//   console.log(this.name + "" + this.value + "" + disc + "" + greeting);
// }

// //call
// buy.call(stuent, 2000, "thnaks");
// // apply
// buy.apply(stuent, [2000, "visite again"]);
// // bind
// let buybind = buy.bind(stuent, 300000000);
// console.log(buybind("bind vlaue"));

//TODO Q3 json
//  let word='{"name":"John", "age":30, "city":"New York"}'
// let stuent = { name: "macbook", value: 4000 };

// //jsonn stringft
// console.log(JSON.parse(word));

// TODO Q6 The slice() method returns the selected elements in an array as a new array object.
// let arrayIntegers = [1, 2, 3, 4, 5];

// let sepecificvale1 = arrayIntegers.slice(1, 3); //2 3  --> without including the last elemnet
// let sepecificval2 = arrayIntegers.slice(3); //4 5  --> only one argumet use as a start

// console.log(sepecificvale1);
// console.log(sepecificval2);

// TODO Q7
// let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

// let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
// let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
// let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
// console.log(arrayIntegersOriginal1);
//TODO Q9//

//  0 == false   // true
//  0 === false  // false
//  1 == "1"     // true
//  1 === "1"    // false
//  null == undefined // true
//  null === undefined // false
//  '0' == false // true
//  '0' === false // false
//  []==[] or []===[] //false, refer different objects in memory
//  {}=={} or {}==={} //false, refer different objects in memory

//TODO Q10

// TODO Q11
// For example, in such a language, a function can be passed as an argument to other functions,
//  can be returned by another function and can be assigned as a value to a variable.
//  For example, in the below example, handler functions assigned to a listener

// const handler = () => console.log("This is a click handler function");
// document.addEventListener("click", handler);

// // TODO Q12
// What is a first order function
// First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

// const firstOrder = () => console.log("I am a first order function!");

// TODO Q15

// const curring = (a, b, c) => a + b + c; //6
// console.log(curring(1, 2, 3)); //6
// // Curried version//
// const addCurry = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };
// console.log(addCurry(2)(3)(5)); // 10
// const onelineCurry = (a) => (b) => (c) => a + b + c;

// console.log(onelineCurry(2)(3)(5)); // 10

// TODO Q17
// let counter = 30;
// if (counter === 30) {
// //   let counter = 31;
//   console.log(counter); // 31
// }
// console.log(counter); // 30 (because the variable in if block won't exist here)

////////////////////////////////////////END 10-4-2023////////////////////////////////////////////////////////////////////////////////////////////////
