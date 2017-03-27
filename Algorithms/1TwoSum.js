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