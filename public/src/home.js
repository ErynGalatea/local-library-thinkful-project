function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowCount = books.filter((book) => book.borrows.filter((record) => record.returned === false).length > 0);
  return borrowCount.length;
}

function getMostCommonGenres(books) {
  let map = {};
  books.forEach((num) => {
    if (map[num.genre]) {
      map[num.genre]++;
    } else {
      map[num.genre] = 1;
    }
  });
  return Object.entries(map).map(([name, count]) => {
    return {
      name,
      count
    };
  }).sort((genreA, genreB) => genreB.count - genreA.count).slice(0, 5);
}

function getMostPopularBooks(books) {
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length};
  }).sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1)).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let writer = {
      name: `${author.name.first} ${author.name.last}`, count: 0
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        writer.count += book.borrows.length;
      }
    });
    result.push(writer);
  });
  return result.sort((authorA, authorB) => authorB.count - authorA.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
