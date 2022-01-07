/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var result = [];
    var max = 0;
    
    for (var i in candies) {
        max = Math.max(max, candies[i]);
    }
    
    for (i in candies) {
        result.push(candies[i] + extraCandies >= max);
    }

    return result;
};
