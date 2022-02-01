/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    var len = matrix.length;

    var transpose = function (matrix) {
        for (var i = 0; i < len; i++) {
            for (var j = i; j < len; j++) {
                var tmp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = tmp;
            }
        }
    };


    var reflect = function (matrix) {
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < Math.floor(len / 2); j++) {
                var tmp = matrix[i][j];
                matrix[i][j] = matrix[i][len - j - 1];
                matrix[i][len - j - 1] = tmp;
            }
        }
    };

    transpose(matrix);
    reflect(matrix);

    return matrix;
};