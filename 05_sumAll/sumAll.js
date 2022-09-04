const sumAll = function(num1, num2) {
    let result = 0;
    if (typeof num1 != 'number' || typeof num2 != 'number')
        return ("ERROR");
    let initial = (num1 < num2 ? num1 : num2);
    let larger = (num1 < num2 ? num2 : num1);
    if (initial < 0 || larger < 0)
        return ("ERROR");
    while (initial != larger)
    {
        result += initial;
        initial++;
    }
    result += larger;
    return (result);
};

// Do not edit below this line
module.exports = sumAll;
