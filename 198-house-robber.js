/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    var length = nums.length;

    var table = new Array(length + 2).fill(0);

    for (var i = 2; i < length + 2; i++) {
        table[i] = Math.max(table[i - 1], table[i - 2] + nums[i - 2]);
    }

    return table.pop();
};