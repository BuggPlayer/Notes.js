// Code 16: To find longest common string from array of strings
function longestCommonString() {
  let array = ["go", "google", "gosh"];
  var arr = array.sort();
  var i = 0;
  while (
    arr[0].length > 0 &&
    arr[0].charAt(i) === arr[arr.length - 1].charAt(i)
  ) {
    i++;
  }
  console.log(arr[0].substring(0, i)); // "go"
  return arr[0].substring(0, i);
}
longestCommonString();
