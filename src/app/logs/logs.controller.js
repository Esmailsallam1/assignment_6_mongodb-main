const logsService = require('./logs.service');

async function insertLog(req, res) {
  try {
    const result = await logsService.insertLog(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { insertLog };
