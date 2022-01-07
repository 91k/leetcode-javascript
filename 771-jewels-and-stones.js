/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    var count = 0;
    var map = {};
    
    for (var jewel of jewels) {
      map[jewel] = 1;  
    }

    for (var stone of stones) {
        if (map[stone]) {
            count++
        }
    }

    return count;
};
