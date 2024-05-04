// function reverseString() {
//     let str = "lobbar";
//     let strarr = str.split("");
//     let start = 0;
//     let end = str.length - 1;

//     while (start <= end) {
//       let temp = strarr[start];
//       strarr[start] = strarr[end];
//       strarr[end] = temp;

//       start++;
//       end--;
//     }
//     return  strarr.join("");
//   }

//   console.log(reverseString());

/*
anangram
*/
function alagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let lookup = {};
  for (let i = 0; i < first.length; i++) {
    let count = first[i];
    if (lookup[first[i]]) {
      lookup[first[i]] = lookup[first[i]] + 1;
    } else {
      lookup[first[i]] = 1;
    }
    // lookup[count] ? (lookup[count] = lookup[count] + 1) : (lookup[count] = 1);
  }
  // console.log(loop)
  for (j = 0; j < second.length; j++) {
    let count2 = second[j];

    if (!lookup[count2]) {
      return false;
    } else {
      lookup[count2]--;
    }
  }
  return true;
}
console.log(alagram("anagram", "nagaram"));
