const { getDB } = require('../common/db');

async function createExplicitBooksCollection() {
  const db = getDB();
  await db.createCollection('books', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['title'],
        properties: {
          title: {
            bsonType: 'string',
            minLength: 1,
            description: 'title must be a non empty string'
          }
        }
      }
    }
  });
  return { ok: 1 };
}

async function insertAuthor(authorData) {
  const db = getDB();
  return db.collection('authors').insertOne(authorData);
}

async function createCappedLogs() {
  const db = getDB();
  await db.createCollection('logs', {
    capped: true,
    size: 1048576
  });
  return { ok: 1 };
}

async function createTitleIndex() {
  const db = getDB();
  return db.collection('books').createIndex({ title: 1 });
}

module.exports = {
  createExplicitBooksCollection,
  insertAuthor,
  createCappedLogs,
  createTitleIndex
};
