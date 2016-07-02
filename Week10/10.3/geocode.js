// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)

var geocoder = require('geocoder');

// Take in the command line arguments

// Creates Variables for User to Enter

var userInput = process.argv[2] + process.argv[3];

geocoder.geocode(userInput, function (err, data) {

// Build your address as an array or string

var address = [];

for (var i = 2; i < process.argv.length; i++) {

  address.push(process.argv[i]);

  if (err) {
  console.log(err);

     } else {
      console.log(JSON.stringify(data));

  }

}

// Then use Geocoder NPM to geocode the address

geocoder.selectProvider("geonames",{"username":"demo"});

});