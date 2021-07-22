/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var buy = 10000;
    var max = 0;

    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        } else {
            max = Math.max(max, prices[i] - buy);
        }
    }

    return max;
};