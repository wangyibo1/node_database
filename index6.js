var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 3,
  host: 'localhost',
  user: 'root',
  password: '921216Wyb',
  database: 'mynode'
});

function startQuery(){
  pool.getConnection(function (err, connection) {
    if (err) throw err;

    var value = 'wangyibo';
    var query = connection.query('SELECT * FROM user WHERE name=?', value, function (err, ret) {
      if (err) throw err;

      console.log(ret);
      setTimeout(function () {
        connection.release();
        }, 1000);
    });
    console.log(query.sql);
  });
}

for (var i = 0; i < 10; i++) {
  startQuery();
}
