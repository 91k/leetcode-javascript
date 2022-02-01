/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var extra = 0;
    var dummy = new ListNode();
    var currentNode = dummy;

    while (l1 !== null || l2 !== null) {
        var sum = extra;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        currentNode.next = new ListNode(sum % 10);
        currentNode = currentNode.next;
        extra = Math.floor(sum / 10);

        if (extra > 0) {
            currentNode.next = new ListNode(extra);
        }
    }

    return dummy.next;
};