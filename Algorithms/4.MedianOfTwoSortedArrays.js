/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * 
 * Example 1: nums1 = [1, 3] nums2 = [2] 
 * The median is 2.0
 * Example 2: nums1 = [1, 2] nums2 = [3, 4] 
 * The median is (2 + 3)/2 = 2.5
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    var tmpNums = nums1;
    nums1 = nums2;
    nums2 = tmpNums;
  }
  var m = nums1.length, n = nums2.length;

  if (m === 0) {
    var result;
    if (n % 2 === 0) {
      result = (nums2[n / 2] + nums2[n / 2 - 1]) / 2;
    }
    else {
      result = nums2[(n - 1) / 2];
    }
    return result;
  }
  
  var iMin = 0, iMax = m;
  while (iMin >= 0 && iMin <= m && iMin <= iMax) {
    var i = ((iMin + iMax) - (iMin + iMax) % 2) / 2;
    var j = ((m + n + 1) - (m + n + 1) % 2) / 2 - i;

    if ((j === 0 || i === m || nums2[j - 1] <= nums1[i]) && (i === 0 || j === n || nums1[i - 1] <= nums2[j])) {
      var leftMax = (i === 0 ? nums2[j - 1] : (j === 0 ? nums1[i - 1] : Math.max(nums1[i - 1], nums2[j - 1])));
      if ((m + n) % 2 === 0) {
        var rightMax = (i === m ? nums2[j] : (j === n ? nums1[i] : Math.min(nums1[i], nums2[j])));
        return (leftMax + rightMax) / 2;
      }
      else {
        return leftMax;
      }
    }
    else if (j > 0 && i < m && nums2[j - 1] > nums1[i]) {
      iMin = i + 1;
    }
    else if (i > 0 && j < n && nums1[i - 1] > nums2[j]) {
      iMax = i - 1;
    }
  }

  return undefined;
};