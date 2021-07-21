/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function (num) {
    var romanKosov = [
        {int: 1000, roman: 'M'},
        {int: 900, roman: 'CM'},
        {int: 500, roman: 'D'},
        {int: 400, roman: 'CD'},
        {int: 100, roman: 'C'},
        {int: 90, roman: 'XC'},
        {int: 50, roman: 'L'},
        {int: 40, roman: 'XL'},
        {int: 10, roman: 'X'},
        {int: 9, roman: 'IX'},
        {int: 5, roman: 'V'},
        {int: 4, roman: 'IV'},
        {int: 1, roman: 'I'},
    ];

    var output = '';

    romanKosov.forEach(function (el) {
        while (num >= el.int) {
            num -= el.int;
            output += el.roman;
        }
    });

    return output;
};