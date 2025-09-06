//[32, 22, 10,19,17]
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lower = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lower]) {
        lower = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[lower];
    arr[lower] = temp;
  }
  return arr;
}
console.log(selectionSort([32, 22, 10, 19, 17]));
