var fs = require('fs');


fs.readFile('best_things_ever.txt', 'utf8', function(err, data) {
	

	var split = data.split(',')

	for (var i = 0; i < split.length; i++) {
			console.log(split[i]);

	}

});


// Reads anyfile that is written in the 3rd arguement in node


// fs.readFile(process.argv[2], 'utf8', function(err, data) {
	

// 	var split = data.split(',')

// 	for (var i = 0; i < split.length; i++) {
// 			console.log(split[i]);

// 	}

// });