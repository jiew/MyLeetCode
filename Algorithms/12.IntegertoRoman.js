/**
 * Given an integer, convert it to a roman numeral.
 * Input is guaranteed to be within the range from 1 to 3999.
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    
    var result = "";
    for (var i = 0; i < nums.length; i++) {
        var divide = nums[i];
        if (num / divide > 0) {
            var roman = romans[i];    
            var count = (num - num % divide) / divide;
            num -= count * divide;
            while (count-- > 0) {
                result += roman;
            }
        }
    }
    return result;
};