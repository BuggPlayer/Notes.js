/*

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"


 */
const isVowels = (vo) => {
  let vowels = vo.toLowerCase();
  console.log(vowels);
  return (
    vowels === "a" ||
    vowels === "e" ||
    vowels === "i" ||
    vowels === "o" ||
    vowels === "u"
  );
};

var reverseVowels = function (s) {
  let arr = s.split("");
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    if (isVowels(arr[i]) && isVowels(arr[j])) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    } else if (!isVowels(arr[i])) {
      i++;
    } else {
      j--;
    }
  }
  return arr.join("");
};
console.log(reverseVowels("hello"));
