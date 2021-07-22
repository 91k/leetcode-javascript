/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    var stair = [1, 2];

    for (var i = 3; i <= n; i++) {
        stair[2] = stair[0] + stair[1];
        stair[0] = stair[1];
        stair[1] = stair[2];
    }

    return stair[1];
};