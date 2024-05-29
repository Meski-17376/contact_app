const { myDB } = require('pg');
require('dotenv').config();

const myDB= new myDB({
  connectionString: process.env.POSTGRES_URL
});

myDB.on('connect', () => {
  console.log('Connected to the PostgreSQL database');
});

module.exports = {
  query: (text, params) => myDB.query(text, params)
};
