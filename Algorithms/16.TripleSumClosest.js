/**
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. 
 * Return the sum of the three integers. 
 * You may assume that each input would have exactly one solution.
 * For example, given array S = {-1 2 1 -4}, and target = 1.
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort(function(a, b) {
    if (a < b) { return -1; }
    else if (a > b) { return 1; }
    else { return 0; }
  });

  var result = 0;
  var minInset = -1;
  
  var i = 0;
  while (i < nums.length) {    
    var num = nums[i];
    var prevIndex = i + 1, nextIndex = nums.length - 1;

    while (prevIndex < nextIndex && nextIndex < nums.length) {
      var prevNum = nums[prevIndex], nextNum = nums[nextIndex];
      
      var inset = target - (prevNum + nextNum + num);
      if (inset === 0) {
        return target;
      }
      else if (minInset < 0 || (inset < minInset && inset > -minInset)) {
        minInset = Math.abs(inset);
        result = num + prevNum + nextNum;
      }

      if (inset < 0) {
        while (nums[nextIndex] === nextNum && prevIndex < nextIndex) {
          nextIndex--;  
        }
      }
      else {
        while (nums[prevIndex] === prevNum && prevIndex < nextIndex) {
          prevIndex++;
        }
      }

    }

    while (nums[i] === num && i < nums.length) {
      i++;
    }
  }

  return result;
};
