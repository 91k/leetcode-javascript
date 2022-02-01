/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    var row = board.length;
    var col = board[0].length;


    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (board[i][j] === word[0] && traverse(board, i, j, word)) {
                return true;
            }
        }
    }

    return false;
};

var traverse = function (board, i, j, word) {
    if (word.length === 0) {
        return true;
    }

    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[0]) {
        return false;
    }

    var match = false;
    var origVal = board[i][j];

    board[i][j] = '@';

    match = traverse(board, i + 1, j, word.slice(1)) || traverse(board, i - 1, j, word.slice(1)) || traverse(board, i, j - 1, word.slice(1)) || traverse(board, i, j + 1, word.slice(1));

    board[i][j] = origVal;

    return match;
};