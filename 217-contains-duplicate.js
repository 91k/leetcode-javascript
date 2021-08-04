/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var unique = new Set(nums);

    return nums.length > unique.size;
};