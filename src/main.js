const express = require('express');
const { connectDB } = require('./app/common/db');
const booksRoute = require('./app/books/books.route');
const logsRoute = require('./app/logs/logs.route');
const collectionsRoute = require('./app/collections/collections.route');

const app = express();
app.use(express.json());

connectDB().then(() => {
  app.use('/collection', collectionsRoute);
  app.use('/books', booksRoute);
  app.use('/logs', logsRoute);

  app.listen(3000, () => {
    console.log('server running on port 3000');
  });
}).catch((err) => {
  console.log('failed to connect to db', err.message);
});
