/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var j = s.length - 1;
    for (var i = 0; i < j / 2; i++) {
        var swap = s[j];
        s[j] = s[i];
        s[i] = swap;
        
        j--;
    }
    
    return s;
};
