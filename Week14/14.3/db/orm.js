// ORM File to organize MySQL Funcitonality

var server = require ('./connection.js')

var orm = {

  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = 'SELECT FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';
    connection.query(queryString, [valOfCol], function(err, result) {
        console.log(result);
    });

  },
  selectAndOrder: function(whatToSelect, table, orderCol, orderBy) {
    var queryString = 'SELECT FROM' + whatToSelect + ' FROM ' + table + ' ORDER BY ' + orderCol + ' ' + orderBy;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
        console.log(result);
    });

  },

  findWhoHasMost: function() {

    connection.query(queryString, function(err, result) {
        console.log(result);
    });

  }//Create 3 Functions that do the following:
//Find all parties, ordering them by party cost
// Find parties by the name of the party
// Find the client with the most parties

}

module.exports = orm;