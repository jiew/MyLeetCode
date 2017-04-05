/**
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. 
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
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
