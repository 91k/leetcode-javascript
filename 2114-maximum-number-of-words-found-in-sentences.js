/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    var maxSpaces = 0;

    for (var words of sentences) {
        var spaces = 0;

        for (var j in words) {
            if (words[j] === ' ') {
                spaces++;
            }
        }

        maxSpaces = Math.max(maxSpaces, spaces+1);
    }

    return maxSpaces;
};
