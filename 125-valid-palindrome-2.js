/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var left = 0;
    var right = s.length - 1;

    while (left < right) {
        // [A-Z]: 65-90
        // [a-z]: 97-122
        // [0-9]: 48-57

        var codeLeft = toLower(s[left].charCodeAt());
        var codeRight = toLower(s[right].charCodeAt());

        if (isNonAlphanumeric(codeLeft)) {
            left++;
            continue;
        }

        if (isNonAlphanumeric(codeRight)) {
            right--;
            continue;
        }

        if (codeLeft !== codeRight) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

var isNonAlphanumeric = function (charCode) {
    if (charCode >= 48 && charCode <= 57) {
        return false;
    }

    if (charCode >= 97 && charCode <= 122) {
        return false;
    }

    return true;
}

var toLower = function (charCode) {
    if (charCode >= 65 && charCode <= 90) {
        return charCode += 32;
    }

    return charCode;
}