function _findById(elem1, elem2){
  return elem1.find((element)=> element.id === elem2);
}

function findAuthorById(authors, id) {
  return _findById(authors, id);
}

function findBookById(books, id) {
  return _findById(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  const returned = books.filter((book) => book.borrows[0].returned)
  const borrowed = books.filter((book) => !book.borrows[0].returned)
  return [borrowed, returned]
}

function getBorrowersForBook(book, accounts) {
  //reutrn an array for a book of all borrowers and their information and return status, limited to 10 borrowers
  return book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return {...borrow, ...account};
  }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
