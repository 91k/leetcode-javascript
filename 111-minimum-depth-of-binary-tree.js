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
 * @return {number}
 */
var minDepth = function (root) {
    if (root === null) {
        return 0;
    }

    var depth = 0;
    var queue = [root];

    while (queue.length) {
        var length = queue.length;

        for (var i = 0; i < length; i++) {
            var node = queue.shift();

            if (node.left === null && node.right === null) {
                return depth + 1;
            }

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        depth += 1;
    }
};