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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    var queue = [root, root];

    while (queue.length) {
        p = queue.shift();
        q = queue.shift();

        if (p === null && q === null) {
            continue;
        }

        if (p === null || q === null) {
            return false;
        }

        if (p.val !== q.val) {
            return false;
        }

        /* The code is equivalent to the code from problem 100 */
        queue.push(p.left);
        queue.push(q.right);
        queue.push(p.right)
        queue.push(q.left)
    }

    return true;
};