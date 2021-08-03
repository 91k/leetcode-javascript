/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var prev = x;
    if (x < 0) {
        return false;
    }

    /* use the solution from problem 7: reverse integer :) */
    var output = x % 10;
    x = x / 10 | 0;

    while (x !== 0) {
        output = output * 10 + (x % 10);
        x = x / 10 | 0;
    }

    return prev === output;
};