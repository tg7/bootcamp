var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "greatbayDB"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

connection.query('SELECT * FROM products', function(err, res) {
     // for (var i = 0; i < res.length; i++) {
    //  console.log(res[i].id + ' ' + res[i].flavor + ' ' + res[i].price + res[i].quantity)

});

var start = function() {
    inquirer.prompt({
        name: "postOrBid",
        type: "rawlist",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices: ["POST", "BID"]
    }).then(function(answer) {
        if (answer.postOrBid.toUpperCase() == "POST") {
            postAuction();
        } else {
            bidAuction();
        }
    })
}

var postAuction = function() {
    
    connection.query("INSERT INTO products SET ?", {
    itemname: "lava-lamp",
    category: 'antiques',
    startingbid: 5,
    highestbid: 200
}, function(err, res) {
    console.log(res);
});

}

var bidAuction = function() {
    //show the user a list of items are availble to bid on. maybe the inquirer type - rawlist would work here?
    //inquire the user what they want to bid on
}

start();