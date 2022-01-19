/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function (s, t) {
    var sLen = s.length - 1;
    var tLen = t.length - 1;

    while (sLen >= 0 || tLen >= 0) {
        sLen = getCurrentIdx(s, sLen);
        tLen = getCurrentIdx(t, tLen);

        if (sLen < 0 && tLen < 0) {
            return true;
        }

        if (sLen < 0 || tLen < 0) {
            return false;
        }

        if (s[sLen] !== t[tLen]) {
            return false;
        }

        sLen -= 1;
        tLen -= 1;
    }

    return true;
};

var getCurrentIdx = function (s, i) {
    var toSkip = 0;

    while (i >= 0) {
        if (s[i] === '#') {
            toSkip += 1;
        } else if (toSkip > 0) {
            toSkip -= 1;
        } else {
            break;
        }

        i -= 1;
    }

    return i;
};