var geocoder = require('geocoder');

var everyArgumentAfter = process.argv.splice(2, process.argv.length-1);

everyArgumentAfter = everyArgumentAfter.join(' ');

geocoder.geocode(everyArgumentAfter, function(err, data){
    if (!err){
        console.log(JSON.stringify(data, null, 2));
    } 
});