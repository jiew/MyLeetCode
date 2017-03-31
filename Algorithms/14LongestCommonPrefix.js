/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 1) {
    return strs[0];
  }
  if (strs.length === 0) {
    return "";
  }
  
  var prefix = strs[0];
  for (var i = 1; i < strs.length; i++) {
    var str = strs[i];
    
    var length = Math.min(prefix.length, str.length);
    var compareIndex = 0;
    while (compareIndex < length && prefix[compareIndex] === str[compareIndex]) {
      compareIndex++;
    }    

    if (compareIndex <= 0) {
      return "";
    }
    else if (compareIndex < prefix.length) {
      prefix = prefix.substr(0, compareIndex);
    }
  }
  return prefix;
};
