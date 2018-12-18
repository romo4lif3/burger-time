var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: burger_db
})

connection.connect(function(err){
    if(err) throw err;
    console.log("connection id: " + connection.threadId)
})

module.exports = connection; 