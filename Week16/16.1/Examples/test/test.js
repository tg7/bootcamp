'use strict';

var should = require('chai').should(),

  multiply = function (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number')
      throw new Error('x or y is not a number.');
    else
      return x * y;
  };

describe('Multiply', function () {
  it('should multiply properly when passed numbers', function () {
    multiply(2, 4).should.equal(8);
  });

  it('should throw when not passed numbers', function () {
    (function() { multiply(2, "4") }).should.throw(Error);
  });
});


// Familiarize yourself with the Mocha and Chai documentation. Choose to read either the should, expect, or assert guide, and refer to it throughout the exercise.

// Consider a function, called disemvowel, which accepts a string and returns a version of the string without vowels.

// Your task is to use Chai to write a test suite for disemvowel. The catch is that you don't get an implementation yet. FIrst,

// With your partner, determine what a "representative example" of an input to disemvowel might be.

// What do we expect to receive? What should the function return fo this input?

// What different formats can this sort of input take?

// What don't we expect? What should happen in this case? Hint: Just come up with something reasonable. We're not going to make you guess how we handled errors, so you don't have to write a test for this.

// When you think you're done, explain to your partner why the test you've written totally describes disemvowel. Be prepared to explain your test suite to the class.

describe('disemvowel', function() {
  it('should remove a from word', function() {
    disemvowel(a).should.equal(a);

  }) 
})