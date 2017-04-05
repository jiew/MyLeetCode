/** 
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
 * Find two lines, which together with x-axis forms a container, such that the container contains the most water.

 * Note: You may not slant the container and n is at least 2.
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var maxA = 0;
  var i = 0, j = height.length - 1;
  while (i < j) {
    var h = Math.min(height[i], height[j]);
    var area = h * (j - i);
    if (maxA < area) {
      maxA = area;
    }
    while (height[i] <= h && i < j) {
      i++;
    }
    while (height[j] <= h && i < j) {
      j--;
    }
  }

  return maxA;
};