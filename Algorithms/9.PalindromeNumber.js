/**
 * Determine whether an integer is a palindrome. Do this without extra space.
 *
 * Some hints:
 * Could negative integers be palindromes? (ie, -1)
 * If you are thinking of converting the integer to string, note the restriction of using extra space.
 * You could also try reversing an integer. 
 * However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. 
 * How would you handle such case?
 * There is a more generic way of solving this problem.
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 10 && x >= 0) {
        return true;
    }
    else if (x % 10 === 0 || x < 0) {
        return false;
    }
    
    var length = 1
    var divide = 10;
    while (x / divide >= 1) {
        length++;
        divide *= 10;
    }
    
    for (var i = 0; i < length / 2; i++) {
        var index1 = length - 1 - i;
        var index2 = i;
        if (index1 == index2) {
            return true;
        }
        
        var divide1 = Math.pow(10, index1);
        var divide2 = Math.pow(10, index2);
        
        var num1 = (x - x % divide1) / divide1;
        var num2 = (x - x % divide2) / divide2;
        
        if (num1 % 10 != num2 % 10) {
            return false;
        }
    }
    return true;
};