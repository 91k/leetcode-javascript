/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var result = [];
    var length = nums.length;

    var backtrack = function (current, nums) {
        if (current === length) {
            result.push([...nums]);
            return;
        }

        for (var i = current; i < length; i++) {
            [nums[i], nums[current]] = [nums[current], nums[i]];
            backtrack(current + 1, nums);
            [nums[i], nums[current]] = [nums[current], nums[i]];
        }

    };

    backtrack(0, nums);

    return result;
};