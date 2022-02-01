/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    var length = nums.length;
    var left = new Array(length).fill(1);
    var right = new Array(length).fill(1);
    var result = [];

    for (var i = 1; i < length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    for (var i = length - 2; i > -1; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    for (var i = 0; i < length; i++) {
        result.push(left[i] * right[i]);
    }

    return result;
};