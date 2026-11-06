const express = require('express');
const router = express.Router();
const booksController = require('./books.controller');

router.post('/batch', booksController.insertManyBooks);
router.post('/', booksController.insertOneBook);
router.patch('/:title', booksController.updateBookYear);
router.get('/title', booksController.findBookByTitle);
router.get('/year-integer', booksController.findBooksYearInteger);
router.get('/year', booksController.findBooksByYearRange);
router.get('/genre', booksController.findBooksByGenre);
router.get('/skip-limit', booksController.skipLimitBooks);
router.get('/exclude-genres', booksController.excludeGenres);
router.delete('/before-year', booksController.deleteBooksBeforeYear);
router.get('/aggregate1', booksController.aggregateAfter2000Sorted);
router.get('/aggregate2', booksController.aggregateProjectFields);
router.get('/aggregate3', booksController.aggregateUnwindGenres);
router.get('/aggregate4', booksController.aggregateJoinLogs);

module.exports = router;
