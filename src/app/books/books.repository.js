const { getDB } = require('../common/db');

function getBooksCollection() {
  return getDB().collection('books');
}

async function insertOne(bookData) {
  return getBooksCollection().insertOne(bookData);
}

async function insertMany(booksData) {
  return getBooksCollection().insertMany(booksData);
}

async function updateYearByTitle(title, year) {
  return getBooksCollection().updateOne(
    { title },
    { $set: { year } }
  );
}

async function findByTitle(title) {
  return getBooksCollection().findOne({ title });
}

async function findByYearRange(from, to) {
  return getBooksCollection().find({ year: { $gte: from, $lte: to } }).toArray();
}

async function findByGenre(genre) {
  return getBooksCollection().find({ genres: genre }).toArray();
}

async function skipLimit() {
  return getBooksCollection().find().sort({ year: -1 }).skip(2).limit(3).toArray();
}

async function findYearInteger() {
  return getBooksCollection().find({ year: { $type: 'int' } }).toArray();
}

async function excludeGenres() {
  return getBooksCollection().find({
    genres: { $nin: ['Horror', 'Science Fiction'] }
  }).toArray();
}

async function deleteBeforeYear(year) {
  return getBooksCollection().deleteMany({ year: { $lt: year } });
}

async function aggregateAfter2000Sorted() {
  return getBooksCollection().aggregate([
    { $match: { year: { $gt: 2000 } } },
    { $sort: { year: -1 } }
  ]).toArray();
}

async function aggregateProjectFields() {
  return getBooksCollection().aggregate([
    { $match: { year: { $gt: 2000 } } },
    { $project: { _id: 0, title: 1, author: 1, year: 1 } }
  ]).toArray();
}

async function aggregateUnwindGenres() {
  return getBooksCollection().aggregate([
    { $unwind: '$genres' },
    { $project: { _id: 0, title: 1, genres: 1 } }
  ]).toArray();
}

async function aggregateJoinLogs() {
  return getDB().collection('logs').aggregate([
    {
      $lookup: {
        from: 'books',
        let: { bookId: { $toObjectId: '$book_id' } },
        pipeline: [
          { $match: { $expr: { $eq: ['$_id', '$$bookId'] } } },
          { $project: { _id: 0, title: 1, author: 1, year: 1 } }
        ],
        as: 'book_details'
      }
    },
    { $project: { _id: 0, action: 1, book_details: 1 } }
  ]).toArray();
}

module.exports = {
  insertOne,
  insertMany,
  updateYearByTitle,
  findByTitle,
  findByYearRange,
  findByGenre,
  skipLimit,
  findYearInteger,
  excludeGenres,
  deleteBeforeYear,
  aggregateAfter2000Sorted,
  aggregateProjectFields,
  aggregateUnwindGenres,
  aggregateJoinLogs
};
