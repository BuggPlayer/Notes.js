// // constructor
// let Person = function (name, gender, birthyear) {
//   this.name = name;
//   this.gender = gender;
//   this.birthyear = birthyear;
//   //   this.calcAge = function () {
//   //     let age = new Date().getFullYear - this.birthyear;
//   //     console.log(age);
//   //   };
// };

// //prototype for person
// Person.prototype.calcage = function () {
//   let age = new Date().getFullYear() - this.birthyear;
//   console.log(age);
// };

// let john = new Person("jon", "male", 1994);
// console.log("john", john);

// let may = new Person("may", "female", 1990);
// console.log("may", may);
// may.calcage()
// let schin = new Person("jon", "male", 1994);
// console.log("schin", schin);

// // what is prototype chaining.
// console.log(b());
function b() {
  console.log("inside b", a);
}
function c() {
  var a = 2;
  console.log('inside c' ,a);
  b();
}
var a = 1;
console.log(c());
