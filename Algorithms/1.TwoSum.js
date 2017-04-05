/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {   
    var index1, index2 = -1;
    var length = nums.length;
    var numsObj = {};
    
    for (var i = 0; i < length; i++) {
        var num1 = nums[i];
        var complete = target - num1;
        var j = numsObj[complete];
        if (j !== undefined && j !== i) {
            index1 = i;
            index2 = j;
            break;
        }
        numsObj[num1] = i;
    }
    return (index1 < index2 ? [index1, index2] : [index2, index1]); 
};