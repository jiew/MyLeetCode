/**
 * Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? 
 * Find all unique quadruplets in the array which gives the sum of target.
 *
 * Note: The solution set must not contain duplicate quadruplets.
 * For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.
 * A solution set is:
 * [
 *  [-1,  0, 0, 1],
 *  [-2, -1, 1, 2],
 *  [-2,  0, 0, 2]
 * ]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort(function(a, b) {
	  if (a < b) { return -1; }
	  else if (a > b) { return 1; }
	  else { return 0; }
  });

  var n = nums.length;
  if (n < 4) {
  	return [];
  }

  var result = [];
  
  var secondIndex = 0;
  for (var firstIndex = 0; firstIndex + 3 < n; firstIndex++) {  	  	
  	var num1 = nums[firstIndex];
  	if (firstIndex - 1 >= 0 && nums[firstIndex - 1] === num1) {
  		continue;
  	}
  	if (num1 + nums[firstIndex + 1] + nums[firstIndex + 2] + nums[firstIndex + 3] > target) { 
  		break; 
  	}
  	if (num1 + nums[n - 3] + nums[n - 2] + nums[n - 1] < target) {
  		continue;	
  	}

  	for (var secondIndex = firstIndex + 1; secondIndex + 2 < n; secondIndex++) {  		
  		var num2 = nums[secondIndex];
  		if (secondIndex - 1 > firstIndex && nums[secondIndex - 1] === num2) {
  			continue;
  		}
  		if (num1 + num2 + nums[secondIndex + 1] + nums[secondIndex + 2] > target) { 
	  		break; 
	  	}
	  	if (num1 + num2 + nums[n - 2] + nums[n - 1] < target) {
	  		continue;	
	  	}

	  	var thirdIndex = secondIndex + 1, forthIndex = n - 1;
	  	while (thirdIndex < forthIndex) {
	  		
	  		var num3 = nums[thirdIndex], num4 = nums[forthIndex];
	  		var sum = num1 + num2 + num3 + num4;

	  		if (sum < target) {
	  			while (nums[thirdIndex] === num3) {
	  				thirdIndex++;
	  			}
	  		}
	  		else if (sum > target) {
	  			while (nums[forthIndex] === num4) {
	  				forthIndex--;
	  			}
	  		}
	  		else {
	  			result.push([num1, num2, num3, num4]);
	  			while (nums[thirdIndex] === num3) {
	  				thirdIndex++;
	  			}
	  			while (nums[forthIndex] === num4) {
	  				forthIndex--;
	  			}
	  		}
	  	}

  	}
  }

  return result;
};
