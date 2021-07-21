/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [];

    for (var i = 0; i < s.length; i++) {
        var brackets = {
            '{': '}',
            '[': ']',
            '(': ')',
        };

        if (brackets[s[i]] !== undefined) {
            stack.push(s[i]);
        } else if (stack.length === 0 || s[i] !== brackets[stack.pop()]) {
            return false;
        }
    }

    return stack.length === 0;
};