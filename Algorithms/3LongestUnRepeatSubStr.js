/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	var indexOfChar = {};
	var maxLen = 0, start = -1;
  for (var i = 0; i < s.length; i++) {
  	var c = s[i];
  	var lastIndex = indexOfChar[c];
  	if (lastIndex !== undefined && lastIndex > start) {
  		start = lastIndex;
  	}
    indexOfChar[c] = i;
    var len = i - start;
    maxLen = maxLen > len ? maxLen : len;
  }
  return maxLen;
};
