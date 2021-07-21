/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    var object = {};

    for (var i = 0; i < nums.length; i++) {
        var j = nums[i];
        var k = object[target - j];

        if (k !== undefined) {
            return [k, i];
        } else {
            object[j] = i;
        }
    }
};