/**
 * @param {number} n
 * @return {number}
 */

var tribonacci = function (n) {
    if (n === 0) return 0;
    if (n <= 2) return 1;

    var fib = [0, 1, 1];

    for (var i = 3; i <= n; i++) {
        fib[3] = fib[0] + fib[1] + fib[2];
        fib[0] = fib[1];
        fib[1] = fib[2];
        fib[2] = fib[3];
    }

    return fib[2];
};