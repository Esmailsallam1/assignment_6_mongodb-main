const logsRepository = require('./logs.repository');

async function insertLog(logData) {
  return logsRepository.insertLog(logData);
}

module.exports = { insertLog };
