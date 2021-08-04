/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    var tortoise = hare = head;

    while (hare !== null && hare.next !== null) {
        hare = hare.next.next;
        tortoise = tortoise.next;
    }

    return tortoise;
};