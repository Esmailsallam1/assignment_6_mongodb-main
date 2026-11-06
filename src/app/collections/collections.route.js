const express = require('express');
const router = express.Router();
const collectionsController = require('./collections.controller');

router.post('/books/index', collectionsController.createBooksIndex);
router.post('/books', collectionsController.createBooksCollection);
router.post('/authors', collectionsController.createAuthorsCollection);
router.post('/logs/capped', collectionsController.createCappedLogsCollection);

module.exports = router;
