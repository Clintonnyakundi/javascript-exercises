const add = function(num1, num2) {
  return (num1 + num2);
};

const subtract = function(num1, num2) {
	let larger = num1 > num2 ? num1 : num2;
  let smaller = num1 > num2 ? num2 : num1;
  return (larger - smaller);
};

const sum = function(array) {
	let sum = 0;
  for (const item of array)
  {
    sum += item;
  }
  return (sum);
};

const multiply = function(array) {
  let i = 0, product = 1;
  while (i < array.length)
  {
    product *= array[i];
    i++;
  }
  return (product);
};

const power = function(base, power) {
	return (base ** power);
};

const factorial = function(num) {
	if (num === 1 || num === 0)
    return (1);
  return (num * factorial(num - 1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
