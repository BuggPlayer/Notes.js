/*
Check if an Array is Sorted
N = 5, array[] = {1,2,3,4,5}

Soln
brute force
 let arr = [1, 2, 6, 4, 5];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) return false;
    }
  }
  return true;

  ! optimzal soln

*/
function isSorted() {
  let arr = [1, 2, 3, 4, 5];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

console.log(isSorted());
