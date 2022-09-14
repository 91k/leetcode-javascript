/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var sLen = s.length;
    var tLen = t.length;
    var hashMap = {};

    if (sLen !== tLen) return false;

    for (var i = 0; i < sLen; i++) {
        if (hashMap[s[i]]) {
            hashMap[s[i]] = hashMap[s[i]] + 1;
        } else {
            hashMap[s[i]] = 1;
        }
    }

    for (var j = 0; j < tLen; j++) {
        if (hashMap[t[j]] > 0) {
            hashMap[t[j]] = hashMap[t[j]] - 1;
        } else {
            return false;
        }
    }

    return true;
};