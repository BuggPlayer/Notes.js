// algo: linear search
function linearSearch(n, t) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === t) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch([-5, 1, 2, 3, 4], 2)); //2
// console.log(linearSearch([-5, 1, 2, 3, 4], 3)); //3
// console.log(linearSearch([-5, 1, 2, 3, 4], 10)); //-1

// algo: binary search
// always work on sorted array only
//1.start value , 2.end value 3.and middle of array
// Big-O ??

function BinarySearch(array, target) {
  let leftindex = 0;
  let rightIndex = array.length - 1;

  while (leftindex <= rightIndex) {
    let middleIndex = Math.floor(leftindex + rightIndex);

    if (target === array[middleIndex]) {
      return middleIndex;
    }

    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftindex = middleIndex + 1;
    }
  }
  return -1
}

console.log(BinarySearch([-5, 1, 2, 3, 4, 6, 8, 10], 6)); //5
console.log(BinarySearch([-5, 1, 2, 3, 4, 6, 8, 10], 10)); //7
