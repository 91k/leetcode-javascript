/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var seen = {};

    for (var num of nums) {
        if (seen[num] !== undefined) {
            return true;
        }
        seen[num] = num;
    }

    return false;
};