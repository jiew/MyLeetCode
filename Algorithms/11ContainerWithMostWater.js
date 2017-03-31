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
    while (height[i] <= h) {
      i++;
    }
    while (height[j] <= h) {
      j--;
    }
  }

  return maxA;
};