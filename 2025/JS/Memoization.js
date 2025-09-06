let obj = {};
function sumall(num) {
    console.log("obj" , obj);
  if (obj[num]) {
    console.log("cashed");
    return obj[num];
  } else {
    console.log("noncashed");
    obj[num] = num + 10;
    return obj[num];
  }

}

console.log(sumall(20));
console.log(sumall(20));
console.log(sumall(10));
console.log(sumall(10));
