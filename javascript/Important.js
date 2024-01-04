// clusors
// promises
// call back hell
// asyn await

// hoisting works with only function declarations
// function declarations initialize with their original value so we can call them anywhere.

//function statement and function expresin
// 1. expresssion return value
// a=3 -> 3

//  function statement
// hello();
// function hello(params) {
//   console.log("ellF");
// }

// greed();
// let greed = function name(params) {
//   console.log("expression");
// };

/**
passing the value means shaaring the different momory sapce IMMUTATE
like a=10 and b=a
BY VALUE WORK ON PRIMITIVE DATA TYPE
var a=3
var b;
b=a

a=2

console.log(b);//3
console.log(a);//2
**/

/**
by refrence (all objects including function)MUTATE

var c = { greeting: "helow" };
var d;
d=c

c.greeting="good morning"
console.log(c);

console.log(d);
**/

/**
using this keyword is js 
const scop = (params) => {
  console.log("this", this);
};
scop();
**/

// var c = {
//   name: "faizan",

//   tryname: function (params) {
//     var self = this;
//     self.name = "update one faizan";
//     console.log("tryname", this);
//     setname = function (newname) {
//       self.name = newname;
//     };
//     setname("faizan khan in setname");
//     console.log("setname", this);
//   },
// };
// c.tryname();
/**
CLOUSERS

**/
function greeting(name) {
  return function geenting2(message) {
    console.log("hii", name + "vale" + message);
  };
}
greeting("faizan")("do you love");
/**


**/
/**


**/

function Gest() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log("inside", i);
    }, 2000);
    console.log("outside", i);
  }
}
Gest();
