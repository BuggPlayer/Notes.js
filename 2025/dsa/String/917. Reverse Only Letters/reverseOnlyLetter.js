/*
step1 : checking the i and j is is isAlpha
65 to 90 abcd..z
97 to 122 ABCD
*/

var reverseOnlyLetters = function (s) {
  let arr = s.split("");
  //   console.log(arr);

  let start = 0;
  let end = arr.length - 1;
  console.log(isAlphabet(arr[start]), isAlphabet(arr[end]));
  while (start < end) {
    if (isAlphabet(arr[start]) && isAlphabet(arr[end])) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    } else if (!isAlphabet(arr[start])) {
      start++;
    } else {
      end--;
    }
  }
  return arr.join("");
};

function isAlphabet(c) {
  //   return (65 <= c && c <= 90) || (97 <= c && c <= 122);
  return (c >= "A" && c <= "Z") || (c >= "a" && c <= "z");
}
console.log(reverseOnlyLetters("ab-cd"));
