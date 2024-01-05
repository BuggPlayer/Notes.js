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
const name="abcdef";

const object={
    [properties]:name,
}
console.log("output" , object);

// looping on objects

const object2={
name:"road side coder",
age:20, 
isTotallyAwesome:true,
}

for(key in object2){
    console.log("key" ,object2[key]);
}

// most common interivew output question

const object3={
    a:"one",
    b:"two",
    a:"one",
}

console.log("output" , object3); // output { a: 'three', b: 'two' } // last value replace 1 vlaue