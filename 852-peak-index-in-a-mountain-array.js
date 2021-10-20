/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    var left = 0;
    var right = arr.length - 1;

    while (left <= right) {
        var mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] > arr[mid + 1]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};