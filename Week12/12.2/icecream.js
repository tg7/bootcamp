var mysql = require('mysql');
var table = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "icecreamDB"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

connection.query('SELECT * FROM products', function(err, res) {
     // for (var i = 0; i < res.length; i++) {
    //   console.log(res[i].id + ' ' + res[i].flavor + ' ' + res[i].price + res[i].quantity)
    console.table(res);
    

});


