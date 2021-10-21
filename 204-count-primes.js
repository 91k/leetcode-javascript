/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    var arr = new Array(n).fill(0);
    var count = 0;

    for (var i = 2; i < n; i++) {
        if (arr[i]) {
            continue;
        }

        count++;

        for (var j = i * i; j < n; j += i) {
            arr[j] = 1;
        }
    }

    return count;
};