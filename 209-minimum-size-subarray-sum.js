/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    var result = Number.MAX_VALUE;
    var left = 0;
    var sum = 0;
    
    for (var right in nums) {
        sum += nums[right];
        
        while (sum >= target) {
            result = Math.min(result, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    if (result != Number.MAX_VALUE) {
        return result;
    } else {
        return 0;
    }
};
