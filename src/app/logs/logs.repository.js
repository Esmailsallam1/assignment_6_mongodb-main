const { getDB } = require('../common/db');

async function insertLog(logData) {
  return getDB().collection('logs').insertOne(logData);
}

module.exports = { insertLog };
