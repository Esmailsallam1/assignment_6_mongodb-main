const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let db;

async function connectDB() {
  await client.connect();
  db = client.db('assignment7');
  console.log('mongodb connected');
  return db;
}

function getDB() {
  return db;
}

module.exports = { connectDB, getDB };
