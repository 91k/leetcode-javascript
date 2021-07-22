/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) return 0;
    if (n <= 1) return 1;

    var fib = [0, 1];

    for (var i = 2; i <= n; i++) {
        fib[2] = fib[0] + fib[1];
        fib[0] = fib[1];
        fib[1] = fib[2];
    }

    return fib[1];
};