const collectionsRepository = require('./collections.repository');

async function createBooksCollection() {
  return collectionsRepository.createExplicitBooksCollection();
}

async function createAuthorsCollection(authorData) {
  return collectionsRepository.insertAuthor(authorData);
}

async function createCappedLogsCollection() {
  return collectionsRepository.createCappedLogs();
}

async function createBooksIndex() {
  return collectionsRepository.createTitleIndex();
}

module.exports = {
  createBooksCollection,
  createAuthorsCollection,
  createCappedLogsCollection,
  createBooksIndex
};
