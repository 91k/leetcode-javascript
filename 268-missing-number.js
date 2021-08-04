/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    var n = nums.length;
    var arit = (n + 1) / 2 * n // Link: https://ru.wikipedia.org/wiki/Арифметическая_прогрессия#Сумма_первых_%7F'"`UNIQ--postMath-0000003C-QINU`"'%7F_членов_арифметической_прогрессии
    var sum = nums.reduce((a, b) => a + b);

    return arit - sum;
};