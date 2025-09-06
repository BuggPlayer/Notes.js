/*

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.


*/
function isPalidrome() {
  let s = "A man, a plan, a canal: Panama".toLowerCase();
  let arr = s.split("");
  let start = 0;
  let end = arr.length - 1;
  console.log(arr);
  while (start <= end) {
    if (arr[start] !== arr[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}
console.log(isPalidrome());
