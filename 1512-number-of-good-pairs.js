/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    var count = 0;
    var len = nums.length;
    if (len < 2) {
        return 0;
    }
    
    for (var i = 0; i < len - 1; i++) {
        for (var j = i+1; j < len; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }
        
    return count;
};
