const leapYears = function (year) {
  let isLeapYear;
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 4 === 0 && year % 400 === 0)
  ) {
    console.log("in if: " + year);
    isLeapYear = true;
  } else {
    console.log("in else: " + year);
    isLeapYear = false;
  }

  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
