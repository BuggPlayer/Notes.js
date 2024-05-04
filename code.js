function isSorted(params) {
  let arr = [10, 20, 30, 40, 50];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
        // 20 < 10
        20<40
      return false;
    }
  }
  return true;
}
console.log(isSorted());
