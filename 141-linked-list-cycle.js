/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head === null) {
        return false;
    }

    var tortoise = hare = head;

    while (hare.next !== null && hare.next.next !== null) {
        hare = hare.next.next;
        tortoise = tortoise.next;

        if (hare === tortoise) {
            return true;
        }
    }

    return false;
};