var fs = require('fs');

// Writes a new file
fs.writeFile('movies.txt', 'inception, die hard', function() {
		console.log('complete!');

});

console.log('hello world');

// Reads the file
fs.readFile('movies.txt', 'utf8', function(err, data) {
		console.log(data);

});