const booksService = require('./books.service');

async function insertOneBook(req, res) {
  try {
    const result = await booksService.insertOneBook(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function insertManyBooks(req, res) {
  try {
    const result = await booksService.insertManyBooks(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updateBookYear(req, res) {
  try {
    const { title } = req.params;
    const { year } = req.body;
    const result = await booksService.updateBookYear(title, year);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function findBookByTitle(req, res) {
  try {
    const { title } = req.query;
    const result = await booksService.findBookByTitle(title);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function findBooksByYearRange(req, res) {
  try {
    const { from, to } = req.query;
    const result = await booksService.findBooksByYearRange(Number(from), Number(to));
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function findBooksByGenre(req, res) {
  try {
    const { genre } = req.query;
    const result = await booksService.findBooksByGenre(genre);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function skipLimitBooks(req, res) {
  try {
    const result = await booksService.skipLimitBooks();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function findBooksYearInteger(req, res) {
  try {
    const result = await booksService.findBooksYearInteger();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function excludeGenres(req, res) {
  try {
    const result = await booksService.excludeGenres();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteBooksBeforeYear(req, res) {
  try {
    const { year } = req.query;
    const result = await booksService.deleteBooksBeforeYear(Number(year));
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function aggregateAfter2000Sorted(req, res) {
  try {
    const result = await booksService.aggregateAfter2000Sorted();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function aggregateProjectFields(req, res) {
  try {
    const result = await booksService.aggregateProjectFields();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function aggregateUnwindGenres(req, res) {
  try {
    const result = await booksService.aggregateUnwindGenres();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function aggregateJoinLogs(req, res) {
  try {
    const result = await booksService.aggregateJoinLogs();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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
