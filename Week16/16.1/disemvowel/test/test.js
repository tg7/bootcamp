'use strict';

 var disemvowel = require('../disemvowel');
 var should = require('chai').should();

describe('remove', function() {
  it('should remove vowels from word', function() {
    disemvowel('todd').should.equal('tdd')
  }) 

  it('should remove vowels from word', function() {
    disemvowel('love').should.equal('lv')
  }) 

  it('should remove vowels from word', function() {
    disemvowel('nicole').should.equal('ncl')
  }) 

  it('should remove vowels from word', function() {
    disemvowel('mike').should.equal('mk')
  }) 

  it('should remove vowels from word', function() {
    disemvowel('keith').should.equal('kth')
  }) 
})