/** 
 * Implement atoi to convert a string to an integer.
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();
    var result = 0;
    var i = 0;
    var isPositive = true;
    while (i < str.length) {
        var c = str[i];
        var num = parseInt(c);
        if (num >= 0 && num <= 9) {
            result *= 10;
            result += num;
        }
        else if (i === 0 && (c === '+' || c === '-'))  {
            isPositive = (c === '+') ? true : false;
        }
        else {
            break;
        }
        i++;
    }
    
    result *= (isPositive ? 1 : -1);
    
    var INT_MAX = Math.pow(2, 31) - 1;
    if (result > INT_MAX) {
        return INT_MAX;
    }
    else {
        var INT_MIN = -Math.pow(2, 31);
        if (result < INT_MIN) {
            return INT_MIN;   
        }
    }
    
    return result;
};