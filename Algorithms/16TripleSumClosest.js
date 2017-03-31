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
