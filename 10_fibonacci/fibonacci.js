const fibonacci = function(position) {
    let n1 = 0, n2 = 1, next, i = 0;
    if (Number(position) < 0)
        return ("OOPS");
    while (i < Number(position))
    {
        next = n1 + n2;
        n1 = n2;
        n2 = next;
        i++;
    }
    return (n1);
};

// Do not edit below this line
module.exports = fibonacci;
