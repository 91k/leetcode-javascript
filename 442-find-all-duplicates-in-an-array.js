/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    var result = [];

    for (var i in nums) {
        var num = Math.abs(nums[i]);
        if (nums[num - 1] < 0) {
            result.push(num);
        }

        nums[num - 1] *= -1;
    }

    return result;
};