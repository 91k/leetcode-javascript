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
var mergeTwoLists = function (l1, l2) {
    var merged = new ListNode();
    var result = merged;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            merged.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            merged.next = new ListNode(l2.val);
            l2 = l2.next;
        }

        merged = merged.next;
    }

    while (l1 !== null) {
        merged.next = new ListNode(l1.val);
        l1 = l1.next;
        merged = merged.next;
    }

    while (l2 !== null) {
        merged.next = new ListNode(l2.val);
        l2 = l2.next;
        merged = merged.next;
    }

    return result.next;
};