var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movielist'
});

// connection.connect();

module.exports = connection;

