const reverseString = function(str) {
    let newString = '';
    let i = str.length - 1;
    while (i >= 0)
    {
        newString += str[i];
        i--;
    }
    return(newString);
};

// Do not edit below this line
module.exports = reverseString;
