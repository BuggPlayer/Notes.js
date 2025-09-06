// insertion sort

function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    var currentelement = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > currentelement; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentelement;
  }
  return arr;
}

console.log(insertion([2, 1, 9, 76, 4]));
 