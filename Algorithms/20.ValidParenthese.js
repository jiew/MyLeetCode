/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.

 * The brackets must close in the correct order, 
 * "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 * /
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var typeReversedPair = { "]" : "[", ")" : "(", "}" : "{" };
  var openTypes = [];
  for (var i = 0; i < s.length; i++) {
  	var c = s[i];
  	if (c === '[' || c === '(' || c === '{') {
  		openTypes.push(c);
  	}
  	else if (c === ']' || c === ')' || c === '}') {
  		var lastOpenType = openTypes[openTypes.length - 1];
  		var pairType = typeReversedPair[c];
  		if (lastOpenType !== undefined && pairType !== undefined && lastOpenType === pairType) {
  			openTypes.pop();
  		}
  		else {
  			return false;
  		}
  	}
  }
  return (openTypes.length === 0) 
};