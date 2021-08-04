/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var seen = [];

    for (var num of nums) {
        if (seen.indexOf(num) !== -1) {
            return true;
        }
        seen.push(num);
    }

    return false;
};