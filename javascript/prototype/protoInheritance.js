let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name} ,  the breather of fire`;
    }
  },
};

let lizard = {
  name: "kikik",
  fight() {
    return 1;
  },
};
// borrow function using bind method

let lizardSing = dragon.sing.bind(lizard);
console.log(lizardSing);
// with the help of prototype inheritance we can copy all dragon information
lizard.__proto__ = dragon;

console.log(lizard);
for (let prop in lizard) {
  console.log(prop);
}
