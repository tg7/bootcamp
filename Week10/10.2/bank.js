var fs = require('fs');

var transaction = process.argv[2];
//total withdraw, deposit, lotto

var amount = parseFloat(process.argv[3]);
//amount

// Results



if (transaction === 'deposit') {
	fs.appendFile('bank_txt.txt', amount + ",");

} else if (transaction === "total") {
		
		var data = fs.readFile('bank_txt.txt', 'utf8', function(err, data) {

		var split = data.split(',')

		var results = 0;

		console.log(split);
		// For Loop

		for (var i = 0; i < split.length; i++) {
		 		results += parseFloat(split[i]);
		 }
		});


		var total = results + amount;

} else if (transaction === "withdraw") {
	fs.appendFile('bank_txt.txt', '-' + amount + ",");

} else if (transaction === "lotto") {
	//lotto
}


