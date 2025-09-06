let a = 5

console.log(this.a); //undefined

function myFunction() {
    console.log(this)
}
myFunction(); // window object


const myFun=()=> {
    console.log(this)
}
myFun(); // window object


let user = {
    name: "Piyush",
    age: 24,
      getDetails() {
          console.log(this.name); //Piyush
      }
  };
//   What happens when we have functions inside a nested object key?  
let user1 = {
    name: "Piyush",
    age: 24,
      childObj:{
          newName:"Roadside Coder",
          getDetails() {
              console.log(this.newName, "and" ,this.name);
          }
      }
  };
//   What if the same functions are arrow functions inside the object?
let user2r = {
    name: "Piyush",
    age: 24,
      getDetails: () => {
          console.log(this.name); 
      }
  };
  let user = {
    name: "Piyush",
    age: 24,
      getDetails() {
          const nestedArrow = () => console.log(this.name); //Piyush
          nestedArrow();
      }
  };

  
  class userclass {
    constructor(n){
        this.name = n
    }
    getName(){
        console.log(this.name);
    }
}

const User = new user("Piyush") // => This will generate a user object from the above class
User.getName();



// Question -2 Give the output of the following snippet.
const userrr = {
    firstName: 'Piyush!',
    getName() {
      const firstName = 'Jen!';
      return this.firstName;
    }
  };
  console.log(user.getName()); // What is logged?
  