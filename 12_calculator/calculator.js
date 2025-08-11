const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((previousNum, currentNum) => previousNum + currentNum, 0);
};

const multiply = function (arr) {
  return arr.reduce((previousNum, currentNum) => previousNum * currentNum, 1);
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  result = 1;
  if (num === 0 || num === 1) {
    return result;
  } else {
    for (let i = num; i > 1; i--) {
      result *= i;
    }
    console.log("Resutl: " + result);
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
