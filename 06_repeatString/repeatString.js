const repeatString = function (name, nums) {
  if (nums < 0) return "ERROR";
  let result = "";
  for (let i = 0; i < nums; i++) {
    result += name;
  }

  return result;
};

// console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
