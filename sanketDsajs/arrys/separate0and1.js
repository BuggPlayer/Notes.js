/*
You are given an array of 0s and 1s in random order.
 Segregate 0s on left side and 1s on right side of the array
[Basically you have to sort the array]. Traverse array only once. 

Input :  [0, 1, 0, 1, 0, 0, 1, 1, 1, 0] 
Output :  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1] 
*/



function swapp(arr, i, j) {
  let temp;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function sepratevalue(arr) {

  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    if (arr[i] == 1) {
      swapp(arr,i,j)
      j--
    }else {
      i++
    }
  }
  console.log("arr final" , arr)
}
let arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
console.log("calling", sepratevalue(arr));
