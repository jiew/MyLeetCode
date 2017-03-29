/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {	
	if (s.length <= 1) {
		return s;
	}
	var start = 0;
	var maxLen = 0;

	for (var i = 0; i < s.length - 1; i++) {
		var subStr;
		
		for (var k = 1; k <= 2; k++) {
			var subStart = i, subLen = k;	
			while (subStart >= 0 && subStart + subLen <= s.length) {
				if (s[subStart] === s[subStart + subLen - 1]) {
					subStart--;
					subLen += 2;
				}
				else {
					break;
				}
			}
			if (maxLen < subLen - 2) {
				maxLen = subLen - 2;
				start = subStart + 1;
			}
		}
	}
	if (start > 0 || maxLen > 0) {
		return s.substr(start, maxLen);
	}
	else {
		return s[0];
	}
};