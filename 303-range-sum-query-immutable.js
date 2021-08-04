/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.sums = [];

    var current = 0;
    for (var num of nums) {
        current += num;
        this.sums.push(current);
    }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    if (left === 0) {
        return this.sums[right]
    }

    return this.sums[right] - this.sums[left - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */