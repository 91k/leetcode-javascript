/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var romanKosov = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    var output = romanKosov[s[s.length - 1]];

    for (var i = 0; i < s.length - 1; i++) {
        if (romanKosov[s[i]] >= romanKosov[s[i + 1]]) {
            output += romanKosov[s[i]];
        } else {
            output -= romanKosov[s[i]];
        }
    }

    return output;
};