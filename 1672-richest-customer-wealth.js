/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var wealth = 0;
    
    for (var account of accounts) {
        var value = 0;
        for (var i in account) {
            value += account[i];
        }
        
        wealth = Math.max(wealth, value);
    }
    
    return wealth;
};
