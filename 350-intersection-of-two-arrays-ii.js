/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    var array = [];
    var hash = {};

    function hashByLow(lo, hi) {
        for (var j = 0; j < lo.length; j++) {
            if (hash[lo[j]] >= 1) {
                hash[lo[j]]++;
            }

            if (!hash[lo[j]]) {
                hash[lo[j]] = 1;
            }
        }

        for (var i = 0; i < hi.length; i++) {
            if (hash[hi[i]]) {
                hash[hi[i]]--;
                array.push(hi[i]);
            }
        }
    }

    if (nums1.length > nums2.length) {
        hashByLow(nums2, nums1);
    } else {
        hashByLow(nums1, nums2);
    }

    return array;
};