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
var diameterOfBinaryTree = function (root) {
    var diameter = 0;

    function longestPath(node) {
        if (node === null) {
            return 0;
        }

        var left = longestPath(node.left);
        var right = longestPath(node.right);

        diameter = Math.max(diameter, left + right);

        return Math.max(left, right) + 1;
    }

    longestPath(root);

    return diameter;
};