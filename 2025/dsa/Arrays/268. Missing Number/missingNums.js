function missingNumer() {
  let arr = [1, 2, 3, 5];

  for (let i = 0; i < arr.length; i++) {
    let flag = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        flag = 1;
        break;
      }
    }
  }
  if (flag === 0) {
    return i;
  }
  console.log(i)
}

console.log(missingNumer());
/*
function missingNumber(a, N) {
  // Outer loop that runs from 1 to N:
  for (let i = 1; i <= N; i++) {
    // flag variable to check if an element exists
    let flag = 0;

    // Search the element using linear search:
    for (let j = 0; j < N - 1; j++) {
      if (a[j] === i) {
        // i is present in the array:
        flag = 1;
        break;
      }
    }

    // check if the element is missing (i.e., flag === 0):
    if (flag === 0) {
      return i;
    }
  }

  // The following line will never execute.
  // It is just to avoid warnings.
  return -1;
}

*/
