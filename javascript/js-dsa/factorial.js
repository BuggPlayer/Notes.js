function factvalue(val) {
  if (val === 1) {
    return 1;
  } else if (val < 0) {
    return -1;
  } else {
    fact = 1;
    for (let i = 1; i <= val; i++) {
      fact = fact * i;
    }
  }
  return fact;
}

console.log(factvalue(3));
