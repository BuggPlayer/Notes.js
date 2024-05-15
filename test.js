// var x = 1;
// if (function a() {}) {
//   x += typeof a;
// }
// console.log(x);

var i, j;
loop1: for (i = 0; i < 3; i++) {
  loop2: for (j = 0; j < 3; j++) {

    if (i === j) {
      continue loop1;
    }
    console.log("i = " + i + ", j = " + j); // 0,0  1,0,1 2,0,1,2
  }
}
/*

// 0,0 1 2
// 1, 0 1 2

// */

// function curring(a) {
//   return (b) => {
//     return (c) => {
//       console.log(a + b + c);
//     };
//   };
// }

// console.log(curring(1)(2)(3));
