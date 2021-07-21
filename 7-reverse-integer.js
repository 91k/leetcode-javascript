/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var output = x % 10;
    x = x / 10 | 0;

    while (x !== 0) {
        output = output * 10 + (x % 10);
        x = x / 10 | 0;
    }

    if (output > 2147483648 || output < -2147483648) {
        return 0;
    }

    return output;
};