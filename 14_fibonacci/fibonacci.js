const fibonacci = function (input) {
  let num = +input;
  let result = 0;
  //   let arr = [0, 1];
  let arr = [];

  console.log("Num: " + num);

  if (num < 0 || isNaN(num)) {
    return "OOPS";
  } else {
    for (i = 0; i <= num; i++) {
      if (i >= 2) {
        // When i >= 2 do sum previus two numbers
        arr.push(arr[i - 2] + arr[i - 1]);
      } else {
        arr.push(i); // When i < 2 simply push 0 && 1 into array
      }
      console.log("Fibonacci: " + arr[arr.length - 1]);
    }
    result = arr[arr.length - 1];
  }
  console.log("Result: " + result);
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
