
console.log("start");
function makesence(username) {
  setTimeout(() => {
    console.log(username);
  }, 1000);
}

    const message= makesence("RoadsideCoder");
    console.log(message); 
console.log("end");

// output: start undefined and end


/*
what is callback function?
callback function is a function which is passed as an argument to another function.

*/

console.log("start");
function makesence1(username , cb) {
  setTimeout(() => {
    cb(username)
    // console.log(username);
  }, 1000);
}
 const message1= makesence("RoadsideCoder" , function(name){
        console.log(name);
});
  
console.log("end");

/*

what is the callback hell?
nested callbacks is know as callbackhell
*/

