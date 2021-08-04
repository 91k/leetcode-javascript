/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    var ans = new Array(n + 1).fill(0);

    for (var i = 0; i <= n; i++) {
        ans[i] = ans[i >> 1] + i % 2;
    }

    return ans;
};