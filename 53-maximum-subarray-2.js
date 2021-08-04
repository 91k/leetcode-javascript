/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var sum = 0;
    var max = -100000;

    for (var num of nums) {
        sum = Math.max(sum + num, num);
        max = Math.max(sum, max);
    }

    return max;
};