/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    var array = [];
    var hash = {};

    for (var i = 0; i < nums1.length; i++) {
        if (!hash[nums1[i]]) {
            hash[nums1[i]] = 1;
        }
    }

    for (var j = 0; j < nums2.length; j++) {
        if (hash[nums2[j]]) {
            hash[nums2[j]] = 0;
            array.push(nums2[j]);
        }
    }

    return array;
};