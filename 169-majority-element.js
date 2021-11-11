/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var length = nums.length;
    var result = 0;
    var count = 0;

    for (i in nums) {
        if (count === 0) {
            result = nums[i];
        }

        if (nums[i] === result) {
            count += 1;
        } else {
            count -= 1;
        }
    }

    return result;
};