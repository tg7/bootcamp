'use strict';

// Benchmark is a library that times 
var Benchmark = require('benchmark'),
 stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514],
 random_value = stuff[ Math.ceil( Math.random() * 14 ) ];

// A "suite" is a series of code snippets you
//   want to execute and time.
var suite = new Benchmark.Suite();

suite

  // Add the function 'linear_search' to the suite.
  .add('Linear Search', function linear_search() {
    for (var i = 0; i < stuff.length; i += 1) {
      if (stuff[i] === random_value)
        return stuff[i];
    }
  })

  // On 'start', run the 'start' function.
  .on('start', function start () {
    console.log('Beginning benchmark...');
  })

  // On the 'complete' event, run the 'report' function.
  .on('complete', function report () {
    // Get successful benchmark.
    var benchmark = Benchmark.filter(this, 'successful')[0];

    console.log('On average, ' + benchmark.name + ' took ' + benchmark.stats.mean + ' seconds to complete.');
  })

  // Run the test!
  .run();
