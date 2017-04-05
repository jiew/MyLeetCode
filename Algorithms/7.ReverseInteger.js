/**
 * Reverse digits of an integer.
 * 
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 *
 * Have you thought about this?
 * Here are some good questions to ask before coding. 
 * Bonus points for you if you have already thought through this!
 * If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
 * Did you notice that the reversed integer might overflow? 
 * Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. 
 * How should you handle such cases?
 * For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var max = Math.pow(2, 31);
    
    var result = 0;
    var isNegative = false;
    if (x < 0) {
    	x *= -1;
    	isNegative = true;
    }

    while (x / 10 > 0) {
    	var remainder = x % 10;
    	result = (result * 10 + remainder);
    	if (result > max) {
    	    return 0;
    	}
    	x = (x - remainder) / 10;
    }
	
    if (isNegative) {
    	result *= -1;
    }

    return result;
};
