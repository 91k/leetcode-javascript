/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    var result = [[]];

    for (var i in nums) {
        for (var j in result) {
            result.push([...result[j], nums[i]]);
        }
    }


    return result;
};