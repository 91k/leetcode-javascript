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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if (root == null) {
        return false;
    }

    if (isSameTree(root, subRoot)) {
        return true;
    } else {
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }
};

/* Code from problem 100 */
var isSameTree = function (p, q) {
    var queue = [p, q];

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

        queue.push(p.left);
        queue.push(q.left)
        queue.push(p.right)
        queue.push(q.right);
    }

    return true;
};