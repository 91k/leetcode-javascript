/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    if (root === null) {
        return [];
    }

    var queue = [root];
    var result = [];

    while (queue.length) {
        var length = queue.length;
        var sum = 0;

        for (var i = 0; i < length; i++) {
            var node = queue.shift();
            sum += node.val;

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        result.push(sum / length);
    }

    return result;
};