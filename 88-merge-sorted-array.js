/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    m--;
    n--;
    var pos = m + n + 1;

    while (m >= 0 && n >= 0) {
        if (nums1[m] >= nums2[n]) {
            nums1[pos] = nums1[m];
            pos--;
            m--;
        } else {
            nums1[pos] = nums2[n];
            pos--;
            n--;
        }
    }

    if (n >= 0) {
        nums1.splice(0, n + 1, ...nums2.slice(0, n + 1));
    }

    return nums1;
};