/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1) {
        return s;
    }
    var groupVarCount = 2 * numRows - 2;
    var lastGroupVarCount = s.length % groupVarCount;
    var groupCount = (s.length - lastGroupVarCount) / groupVarCount + 1;
    var convertedStr = "";
    
    for (var r = 0; r < numRows; r++) {
        for (var g = 0; g < groupCount; g++) {
            var sIndex1 = r + g * groupVarCount;
            var sIndex2 = -1;
            if (r > 0 && r < numRows - 1) {
                sIndex2 = (groupVarCount - r) + g * groupVarCount;
            }

            if (sIndex1 < s.length) {
                convertedStr = convertedStr + s[sIndex1];
            }
            if (sIndex2 > 0 && sIndex2 < s.length) {
                convertedStr = convertedStr + s[sIndex2];
            }
        }
    }
    
    return convertedStr;
};