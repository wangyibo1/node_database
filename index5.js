var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '921216Wyb',
  database: 'mynode'
});

pool.getConnection(function (err, connection) {
  if (err) throw err;

  var value = 'wangyibo';
  var query = connection.query('SELECT * FROM user WHERE name=?', value, function (err, ret) {
    if (err) throw err;

    console.log(ret);
    connection.release();
  });
  console.log(query.sql);
});
