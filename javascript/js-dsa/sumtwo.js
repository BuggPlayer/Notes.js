// TODO:using nested loop
function sumZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const elementJ = array[j];
      if (array[i] + elementJ === 0) {
        return [array[i], elementJ];
      }
    }
  }
  return undefined;
}
console.log(sumZero([-2, 0, 1, 3]));



// //TODO:usig mutilpoint
function sumZeroMP(array) {
  let leftindex = 0;
  let rightindex = array.length - 1;

  while (leftindex < rightindex) {
    let sum = array[leftindex] + array[rightindex];
    if (sum === 0) {
      return [array[leftindex], array[rightindex]];
    } else if (sum > 0) {
      rightindex--;
    } else {
      leftindex++;
    }
  }
  return undefined;
}
console.log(sumZeroMP([-3, -2, -1]));
