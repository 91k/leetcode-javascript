/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var len = nums.length;
    var result = [];
    var index = 0;
    
    for (var i = 0; i < n; i++) {
        result[index] = nums[i];
        result[index+1] = nums[i+n];
        index+=2;
    }
    
    return result;
};
