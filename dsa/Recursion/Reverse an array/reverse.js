/*
Example 1:
Input: N = 5, arr[] = {5,4,3,2,1}
Output: {1,2,3,4,5}

Explanation: Since the order of elements gets reversed the first
element will occupy the fifth position, the second element
occupies the fourth position and so on.


*/

let arr = [5, 4, 3, 2, 1];
let start = 0;
let end = arr.length - 1;
function rever(arr, start, end) {
  if (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    rever(arr, start + 1, end - 1);
  }
  return arr;
}
console.log(rever(arr, start, end));
