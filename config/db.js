const mysql = require('mysql2');
require('dotenv').config({patch: '../.env'})

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DATABASE_PASSWORD || 'root',
  database: process.env.DATABASE_NAME || 'cft',
  port: process.env.PORT || 3306
});

module.exports = connection
