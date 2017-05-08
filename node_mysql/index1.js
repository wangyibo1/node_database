var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '921216Wyb',
  database: 'mynode'
});

connection.connect(function (err) {
  if (err) throw err;

  var value = 'wangyibo';
  var query =  connection.query('SELECT * FROM user where name="'+value+'"', function (err, ret) {
    if (err) throw err;

    console.log(ret);
    connection.end();
  });

  console.log(query.sql);
});

