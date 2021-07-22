/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var sum = 0;
    var max = -100000;

    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }

    return max;
};