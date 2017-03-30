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
