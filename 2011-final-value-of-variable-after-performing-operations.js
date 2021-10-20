/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    return operations.reduce(function (acc, curr) {
        return curr[1] === '+' ? ++acc : --acc;
    }, 0);
};