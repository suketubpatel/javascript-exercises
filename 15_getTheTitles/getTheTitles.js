const getTheTitles = function (books) {
  //   let bookTitles = [];
  //   books.forEach((book) => {
  //     bookTitles.push(book.title);
  //   });
  //   return bookTitles;

  return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
