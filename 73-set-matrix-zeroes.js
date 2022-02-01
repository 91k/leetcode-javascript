/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    var i, j;
    var rowZero = false;
    var colZero = false;

    var rows = matrix.length;
    var cols = matrix[0].length;

    for (i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            colZero = true;
        }
    }

    for (i = 0; i < cols; i++) {
        if (matrix[0][i] === 0) {
            rowZero = true;
        }
    }


    for (i = 1; i < rows; i++) {
        for (j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (i = 1; i < rows; i++) {
        for (j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (colZero) {
        for (i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }

    if (rowZero) {
        for (i = 0; i < cols; i++) {
            matrix[0][i] = 0;
        }
    }
};