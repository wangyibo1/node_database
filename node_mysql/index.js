var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '921216Wyb',
  database: 'mynode'
});

connection.connect(function (err) {
  if (err) throw err;
  connection.query('SELECT * FROM user', function (err, ret) {
    if (err) throw err;
    console.log(ret);
    connection.end();
  });
});
