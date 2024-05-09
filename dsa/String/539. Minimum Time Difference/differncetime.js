/*
https://leetcode.com/problems/minimum-time-difference/
Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.
Example 1:
Input: timePoints = ["23:59","00:00"]
Output: 1
Example 2:
Input: timePoints = ["00:00","23:59","00:00"]
Output: 0
*/

function mindiff() {
  let timePoints = ["23:59", "00:00"];
  let int_ar_min = [];
  let mindffff = 0;

  //step1
  for (let i = 0; i < timePoints.length; i++) {
    let hr = Number(timePoints[i].substring(0, 2));
    let minnn = Number(timePoints[i].substring(3));
    let minuts = hr * 60 + minnn;
    int_ar_min.push(minuts);
  }
  //step2
  let sortarr = int_ar_min.sort((a, b) => a - b);
  //step3
  for (let j = 0; j < sortarr.length-1; j++) {
    let sortdiff = sortarr[j + 1] - sortarr[j];
    mindffff = Math.min(mindffff, sortdiff);
    console.log("sort" , mindffff);
  }
  // step4
  let lastdiff = sortarr[0] + 1440 - sortarr[sortarr.length - 1];
  console.log(lastdiff, mindffff);
  mindffff = Math.min(mindffff, lastdiff);

  console.log("minn", mindffff);
}
console.log(mindiff());
