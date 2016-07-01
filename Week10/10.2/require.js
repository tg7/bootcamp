var fs = require('fs');

// fs is the node file system library

// Writes a new file
fs.writeFile('movies.txt', 'inception, die hard', function() {
		console.log('complete!');

});

console.log('hello world');

// Reads the file
fs.readFile('movies.txt', 'utf8', function(err, data) {
		console.log(data);

});


// Waits for one file to be completed before going onto to the next file

var fileContents = fs.writeFileSync('movies.txt', 'testing 123');

var readContent = fs.readFileSync('movies.txt', 'utf8');

console.log('hello');

