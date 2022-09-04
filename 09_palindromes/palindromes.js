const palindromes = function (str) {
    let re = /[^0-9a-zA-Z]/g;
    let arr = str.toLowerCase().replace(re, "").split("").join("");
    let reverseArray = str.toLowerCase().replace(re, "").split("").reverse().join("");
    return (arr == reverseArray);
};

// Do not edit below this line
module.exports = palindromes;
