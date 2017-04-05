/**
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? 
 * Find all unique triplets in the array which gives the sum of zero.
 * Note: The solution set must not contain duplicate triplets.
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * A solution set is: [[-1, 0, 1],[-1, -1, 2]]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort(function(a, b) {
    if (a < b) { return -1; }
    else if (a > b) { return 1; }
    else { return 0; }
  });

  var result = [];

  var i = 0;
  while (i < nums.length) {
    var num = nums[i];
    var prevIndex = i + 1, nextIndex = nums.length - 1;

    while (prevIndex < nextIndex && nextIndex < nums.length) {
      var prevNum = nums[prevIndex], nextNum = nums[nextIndex];
      
      if (prevNum + nextNum + num < 0) {
        while (nums[prevIndex] === prevNum && prevIndex < nextIndex) {
          prevIndex++;
        }
      }
      else if (prevNum + nextNum + num > 0) {
        while (nums[nextIndex] === nextNum && prevIndex < nextIndex) {
          nextIndex--;  
        }
      }
      else {
        var triple = [num, prevNum, nextNum];
        result.push(triple);

        while (nums[prevIndex] === prevNum && prevIndex < nextIndex) {
          prevIndex++;
        }
        while (nums[nextIndex] === nextNum && prevIndex < nextIndex) {
          nextIndex--;  
        }
      }
    }

    while (nums[i] === num && i < nums.length) {
      i++;
    }
  }

  return result;
};
