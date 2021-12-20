/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    var result = [];

    var traverse = function (current, s, i) {
        if (current.length === s.length) {
            result.push(current);
            return;
        }

        traverse(current + s[i], s, i + 1);

        if (/[a-z]/i.test(s[i])) {
            traverse(current + s[i].toUpperCase(), s, i + 1);
        }

        if (/[A-Z]/i.test(s[i])) {
            traverse(current + s[i].toLowerCase(), s, i + 1);
        }
    };

    traverse('', s, 0);

    return [...new Set(result)];
};