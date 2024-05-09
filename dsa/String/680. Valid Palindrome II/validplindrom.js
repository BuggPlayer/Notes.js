// console.log("hello");

// checking palidmfrom

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

function checkPlindrom(str, start, end) {
  //   console.log(s1, s2);
  let strToarr = str.split("");
  while (start <= end) {
    if (strToarr[start] !== strToarr[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}
// console.log(checkPlindrom("abaa"));

function isVlaid(str) {
  let start = 0;
  let strToarr = str.split("");
  let size = strToarr.length;
  let end = size - 1;
  //   console.log(strToarr, end, size);
  while (start <= end) {
    if (strToarr[start] !== strToarr[end]) {
      return (
        checkPlindrom(str, start + 1, end) || checkPlindrom(str, start, end - 1)
      );
    } else {
      start++;
      end--;
    }
  }
  return false;
}
console.log(isVlaid("abca"));

// redux store 