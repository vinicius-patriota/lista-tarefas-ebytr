require('dotenv').config();
const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const DB_NAME = 'EbytrTodoList';

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/EbytrTodoList`;

let db = null;

function getConnection() {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    })
};

module.exports = { getConnection };