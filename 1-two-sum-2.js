/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var seen = {};

    for (var i in nums) {
        var index = seen[target - nums[i]];
        if (index) {
            return [index, i];
        }

        seen[nums[i]] = i;
    }

    return [];
};