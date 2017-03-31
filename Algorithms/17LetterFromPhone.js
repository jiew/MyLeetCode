/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) {
    return [];
  }
  var digitStrs = ["", "*", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  var totalCount  = 1;  
  var strPerBit   = {};  
  for (var bit = 0; bit < digits.length; bit++) {    
    var num = parseInt(digits[bit]);
    if (num <= 9 && num >= 1) {
      var str = digitStrs[num];
      strPerBit[bit] = str;
      totalCount *= str.length;
    }
    else {
      return [];
    }
  }

  var result = [];
  var resultIndex = 0;

  while (resultIndex < totalCount) {
    var resultItem = "";
   
    var lastCount = totalCount;
    for (var bit = 0; bit < digits.length; bit++) {
      var str = strPerBit[bit];

      lastCount = lastCount / str.length;
      var index = ((resultIndex - resultIndex % lastCount) / lastCount) % str.length;      

      resultItem = resultItem + str[index];
    }

    result.push(resultItem);
    resultIndex++;
  }

  return result;
};