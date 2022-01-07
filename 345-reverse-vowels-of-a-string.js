/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var i = 0;
    var j = s.length-1;

    while (i < j) {        
        if (isNotVowels(s[i])) {
            i++;
            continue;
        }

        while (isNotVowels(s[j])) {
            j--;
        }
        
        if (i === j) {
            continue;
        }

        s = s.slice(0, i) + s[j] + s.slice(i+1, j) + s[i] + s.slice(j+1);
        i++;
        j--;
    }

    return s;
};

var isNotVowels = function(c) {
    if (c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u' && c !== 'A' && c !== 'E' && c !== 'I' && c !== 'O' && c !== 'U') {
        return true;
    }

    return false;
}
