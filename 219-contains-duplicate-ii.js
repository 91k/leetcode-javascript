/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var map = new Map();

    for (var i in nums) {
        if (Math.abs(i - map.get(nums[i])) <= k) {
            return true;
        }
        
        map.set(nums[i], i);
    }
    
    return false;
};
