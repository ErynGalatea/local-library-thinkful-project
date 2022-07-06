function findAccountById(accounts, id) {
  return accounts.find((account)=> account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((acct1, acct2)=> acct1.name.last.toLowerCase() > acct2.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((totalBorrowed, { borrows }) => {
    if (borrows.some((record) => record.id === account.id)) totalBorrowed++;
    return totalBorrowed;
  }, 0);
}
                      

function getBooksPossessedByAccount(account, books, authors) {
  return (
    books.filter((book) => book.borrows[0].id === account.id && !book.borrows[0].returned)
.map((book) => {book["author"] = authors.find((author) => author.id === book.authorId);
    return book;
      })
  );
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
