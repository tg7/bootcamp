var testArray = [];

for (var i = 2; i < process.argv.length; i++) {

  testArray.push(process.argv[i]);

}

testArray.sort();

console.log(testArray);