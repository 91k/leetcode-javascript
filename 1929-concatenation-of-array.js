/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    var n = nums.length;
    var result = [];

    for (var i = 0; i < n; i++) {
        result[i] = nums[i];
        result[i + n] = nums[i];
    }

    return result;
};