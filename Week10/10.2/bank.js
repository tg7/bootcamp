var fs = require('fs');

var transaction = process.argv[2];
//total withdraw, deposit, lotto

var amount = process.argv[3];
//amount

if (transaction === 'deposit') {
	console.log('deposit! ' + amount);


} else if (transaction === "total") {
	

} else if (transaction === "withdraw") {
	console.log('withdraw ' + amount);

} else if (transaction === "lotto") {
	//lotto
}

fs.readFile('bank_txt.txt', 'utf8', function(err, data) {

 var split = data.split(',')

 var results = 0;

 for (var i = 0; i < split.length; i++) {
 		results += parseFloat(split[i]);

 	// fs.appendFile('bank_txt.txt', 'utf8', function(split) {

 	// });

 	

 }
console.log('total is ' + results);
});