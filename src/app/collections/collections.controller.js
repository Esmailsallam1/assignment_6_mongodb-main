const collectionsService = require('./collections.service');

async function createBooksCollection(req, res) {
  try {
    const result = await collectionsService.createBooksCollection();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function createAuthorsCollection(req, res) {
  try {
    const result = await collectionsService.createAuthorsCollection(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function createCappedLogsCollection(req, res) {
  try {
    const result = await collectionsService.createCappedLogsCollection();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function createBooksIndex(req, res) {
  try {
    const result = await collectionsService.createBooksIndex();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createBooksCollection,
  createAuthorsCollection,
  createCappedLogsCollection,
  createBooksIndex
};
