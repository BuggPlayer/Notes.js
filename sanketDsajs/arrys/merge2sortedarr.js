/*
88. Merge Sorted Array
Easy
Topics
Companies
Hint
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
*/


function margesorted(){
let nums1 = [1,2,3,0,0,0]
let nums2 = [2,5,6]

let m=3
let n=3
let i=0
let j=0
let k=0
let result =[]

while (i < m && j< n) {
  if(nums1[i] < nums2[j]){

    result[k]= nums1[i]
    i++
    k++
  }else {
    result[k]= nums2[j];
    j++
    k++
  }
  
}

while (i<m) {
 result[k] = nums1[i]
 i++
 k++
}
while (j<n) {
  result[k] = nums2[j]
  j++
  k++
 }
    
 console.log("resulr" , result)
}


margesorted();
