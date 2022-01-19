/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    var length = nums.length;
    var left = 0;
    var right = length - 1;
    var result = [];

    for (var i = length - 1; i > -1; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = Math.pow(nums[left], 2);
            left += 1;
        } else {
            result[i] = Math.pow(nums[right], 2);
            right -= 1;
        }
    }

    return result;
};