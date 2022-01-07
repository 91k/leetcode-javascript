/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    var max = -1;
    var map = {};

    for (var i in nums) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }
    
    for (i in map) {
        if (map[i] === 1) {
            max = Math.max(max, i);
        }
    }
    
    return max;
};
