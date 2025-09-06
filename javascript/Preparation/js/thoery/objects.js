/*
 */

// object in js
const user = {
  name: "abc",
  age: 20,
};

user.name = "xyz"; // name modified --> pass by reference
delete user.age; // age deleted --> pass by reference
//TODO: delete properties use for deleting the value from an object only

console.log("object", user); // calling object

// string keyname
const user1 = {
  name: "abc",
  age: 20,
  "like the video": true,
};

console.log(user1["like the video"]); // true

// for adding dyanamic vlaues

const properties = "first name";
const name = "abcdef";

const object = {
  [properties]: name,
};
console.log("output", object);

// looping on objects

const object2 = {
  name: "road side coder",
  age: 20,
  isTotallyAwesome: true,
};

for (key in object2) {
  console.log("key", object2[key]);
}

// most common interivew output question

const object3 = {
  a: "one",
  b: "two",
  a: "one",
};

console.log("output", object3); // output { a: 'three', b: 'two' } // last value replace 1 vlaue

/*

TODO:Q2 . create a function  multiplyByTwo(obj) that multiplies all the numeric  values in obj by 2.

const obj = {
  a: 5,
  b: 2,
  title:"multiplyby2"
}
*/

const obj4 = {
  a: 5,
  b: 2,
  title: "multiplyby2",
};

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
    return obj;
  }
}

console.log(multiplyByTwo(obj4));

// Q3.what is the output of the following code?
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123; // a['object object'] =123
a[c] = 456; // a['object object'] =456
console.log(a[b]); // 456

//TODO: Q4.what is the JSON.stringfy and JSON.parse?
// JSON.stringify is used to convert object into string
const obj5 = {
  name: "Roadside Coder",
  age: 20,
};

const stringified = JSON.stringify(obj5); // {"name":"Roadside Coder","age":20}
//   console.log(JSON.stringify(stringified));

console.log(JSON.parse(stringified)); // {name:"Roadside Coder",age:20} --> back to object

//TODO: Q5.what is the output of the following code?
console.log([..."lydia"]); // [ 'l', 'y', 'd', 'i', 'a' ]

//TODO: Q6.what is the output of the following code?

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => {
    return 2 * Math.PI * this.radius;
  },
};
console.log(shape.diameter()); // 20; this refer inside object
console.log(shape.perimeter()); //NaN this refer windwo

//TODO: Q:10 destructing in objet

let obj6 = {
  name: "cool",
  age: 20,
  sport: {
    outside: "cricket",
    inside: "chess",
  },
};

const { name: fistname, age: curruntage } = obj6;
console.log("fname", fistname);

const { sport:{outside}} =obj6
console.log("outside", outside);


//TODO: object refrencing
//Q11.what is the output of the following code?

let x= {greeting:"hey!"}
let y;
y=x
y.greeting="hi!"
console.log(y.greeting)

//TODO: Q12.what is the output of the following code? ..shalow and deep copy 

let obj8 = {
    name: "cool",
    age: 20,
}
// const cloneObject = Object.assign({}, obj8)
// const cloneObject =JSON.parse(JSON.stringify(obj8))  // JSON.stringify is used to convert object into string) // shallow copy
// const cloneObject = {...obj8} // deep copy
cloneObject.name = "new name"
console.log(user , cloneObject);
