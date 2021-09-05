  var mysql = require('mysql2');
  const config = require('./config');

var db = mysql.createPool({
    host: "*",
    user: "*",
    password: "",
    database: '*'
});
module.exports = db.promise()