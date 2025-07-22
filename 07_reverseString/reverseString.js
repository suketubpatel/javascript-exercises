const reverseString = function (str) {
  let strReverse = "";

  //   if (str.length === 0) return strReverse;

  for (let i = str.length - 1; i >= 0; i--) {
    strReverse += str.charAt(i);
    // console.log("i: " + i + " " + str.charAt(i));
  }
  return strReverse;
};

// console.log(reverseString("Suketu"));

// Do not edit below this line
module.exports = reverseString;
