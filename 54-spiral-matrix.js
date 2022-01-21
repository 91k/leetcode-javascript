/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    var result = [];

    var top = 0;
    var bottom = matrix.length - 1;
    var left = 0;
    var right = matrix[0].length - 1;

    /*
        0 - left to right
        1 - top to bottom
        2 - right to left
        3 - bottom to top
    */
    var direction = 0;

    while (top <= bottom && left <= right) {
        if (direction === 0) {
            for (var i = left; i < right + 1; i++) {
                result.push(matrix[top][i])
            }

            top += 1;
            direction = 1;
        } else if (direction === 1) {
            for (var i = top; i < bottom + 1; i++) {
                result.push(matrix[i][right])
            }

            right -= 1;
            direction = 2;
        } else if (direction === 2) {
            for (var i = right; i > left - 1; i--) {
                result.push(matrix[bottom][i])
            }

            bottom -= 1;
            direction = 3;
        } else if (direction === 3) {
            for (var i = bottom; i > top - 1; i--) {
                result.push(matrix[i][left])
            }

            left += 1;
            direction = 0;
        }


    }

    return result;
};