/*
75. Sort Colors
Example 1:

Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]

*/

/* SOLN:1 
SORT method

*/
/* SOLN:2
brut force method
-->
counter_0
counter_1 
counter_2

for looop {
    arr[i] ===0 --> counter_0++
    arr[i] ===1 --> counter_1+
    arr[i] ===2 --> counter_2++
}
for {
    i=0 i<counter_0 i++

    arrr[i] ==0
}
for {
    i=counter_0 i<counter_1+ i++

    arrr[i] ==1
}
for {
    i=counter_1 i<arr.length i++

    arrr[i] ==2
}


*/

/*
SOLN3 -optimal

3 pointer appproch

low , mid and high
 low===0
 swap low to mid
 low++
 mid++

 else if mid ===1
 mid ++
else {
    swap mid with high
    high --
}

*/
let nums =[2,0,1];
function sortColor(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    console.log("wseg");
    if (nums[low] === 0) {
      //swap low with mid
      let temp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = temp;

      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      // swap mid to high
      let temp = nums[high];
      nums[high] = nums[mid];
      nums[mid] = temp;
      high--;
    }
  }
  return nums;
}

console.log(sortColor(nums));
