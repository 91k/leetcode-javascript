/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    var left = 0;
    var right = numbers.length - 1;

    while (left < right) {
        var mid = Math.floor(left + (right - left) / 2);
        var sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1];
        }

        if (sum < target) {
            if (numbers[mid] + numbers[right] < target) {
                left = mid;
            } else {
                left++;
            }
        } else {
            if (numbers[left] + numbers[mid] > target) {
                right = mid;
            } else {
                right--;
            }
        }
    }

    return [left + 1, right + 1];
};