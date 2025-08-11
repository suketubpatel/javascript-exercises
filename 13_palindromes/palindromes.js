const palindromes = function (str) {
  // Read only a to z, A = Z and 0 to 0 and return new string in lower case
  let onlyCharStr = str
    .match(/[a-zA-Z0-9]/g)
    .join("")
    .toLowerCase();

  // reverse the string
  let reverseOnlyCharStr = onlyCharStr.split("").reverse().join("");

  // Compare both string and return boolean result
  return onlyCharStr === reverseOnlyCharStr;
};

// Do not edit below this line
module.exports = palindromes;
