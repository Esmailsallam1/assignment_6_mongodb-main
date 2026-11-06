const booksRepository = require('./books.repository');

async function insertOneBook(bookData) {
  return booksRepository.insertOne(bookData);
}

async function insertManyBooks(booksData) {
  return booksRepository.insertMany(booksData);
}

async function updateBookYear(title, year) {
  return booksRepository.updateYearByTitle(title, year);
}

async function findBookByTitle(title) {
  return booksRepository.findByTitle(title);
}

async function findBooksByYearRange(from, to) {
  return booksRepository.findByYearRange(from, to);
}

async function findBooksByGenre(genre) {
  return booksRepository.findByGenre(genre);
}

async function skipLimitBooks() {
  return booksRepository.skipLimit();
}

async function findBooksYearInteger() {
  return booksRepository.findYearInteger();
}

async function excludeGenres() {
  return booksRepository.excludeGenres();
}

async function deleteBooksBeforeYear(year) {
  return booksRepository.deleteBeforeYear(year);
}

async function aggregateAfter2000Sorted() {
  return booksRepository.aggregateAfter2000Sorted();
}

async function aggregateProjectFields() {
  return booksRepository.aggregateProjectFields();
}

async function aggregateUnwindGenres() {
  return booksRepository.aggregateUnwindGenres();
}

async function aggregateJoinLogs() {
  return booksRepository.aggregateJoinLogs();
}

module.exports = {
  insertOneBook,
  insertManyBooks,
  updateBookYear,
  findBookByTitle,
  findBooksByYearRange,
  findBooksByGenre,
  skipLimitBooks,
  findBooksYearInteger,
  excludeGenres,
  deleteBooksBeforeYear,
  aggregateAfter2000Sorted,
  aggregateProjectFields,
  aggregateUnwindGenres,
  aggregateJoinLogs
};
