/**
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var maps = {
    	"M" : 1000, "D" : 500, 
    	"C" : 100, "L" : 50, 
    	"X" : 10, "V" : 5, 
    	"I" : 1
    };

    var result = 0;
    for (var i = 0; i < s.length; i++) {
    	var roman = s[i];
    	var romanInt = maps[roman];

    	var nextRomanInt = undefined;
    	if (i + 1 < s.length) {
    		var nextRoman = s[i + 1];
    		nextRomanInt = maps[nextRoman];
    	}

    	if (nextRomanInt !== undefined && nextRomanInt > romanInt) {
    		romanInt *= -1;
    	}

    	result += romanInt;
    }

    return result;
};