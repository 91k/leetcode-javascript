/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    var middle = middleNode(head);
    var reverse = reverseList(middle);

    while (reverse !== null) {
        if (reverse.val !== head.val) {
            return false;
        }

        reverse = reverse.next;
        head = head.next;
    }

    return true;
};

/* Problem 876: https://leetcode.com/problems/middle-of-the-linked-list/ */
var middleNode = function (head) {
    var fast = head;
    var slow = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};

/* Problem 206: https://leetcode.com/problems/reverse-linked-list/ */
var reverseList = function (head) {
    var prev = null;
    var next;

    while (head !== null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
};