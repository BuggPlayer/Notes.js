// Code 13: To find longest word from a string using (for of) /*for(var i=0; i>=num; i++) means iterate by indexing*/  /*for (var word of words) means iterate by an elements not
// by indexing*/

function longestWord() {
  let string = "supriya is a masooooom good girl";
  var words = string.split(" ");
  console.log(word);
  var longest = " ";
  for (var word of words) {
    console.log(word);
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest.length;
}
longestWord();
