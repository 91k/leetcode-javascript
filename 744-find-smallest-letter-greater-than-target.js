/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    var left = 0;
    var right = letters.length - 1;

    while (left <= right) {
        var mid = Math.floor(left + (right - left) / 2);

        if (letters[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return letters[left % letters.length];
};