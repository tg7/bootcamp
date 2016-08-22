var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
  .goto('http://google.com')
  .type('#lst-ib.gsfi', 'Somerset, NJ Weather')
//
// describe('remove', function() {
//   it('should remove the search bar', function() {
//
//   }) 
// })
  .evaluate(function () {
        return document.querySelector('#main .searchCenterMiddle li a').href
      })
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });

  //  * The purpose of this exercise is to get experience writing tests that specify how a site will behave.

  // * Choose a website you're familiar with, and write a few user stories for it. Be sure not to write user stories against arbitrary features. Rather, Write them such that, taken together, they verify some of the site's primary functionality.

  // * Wrap those user stories in `describe` and `it` clauses.

  // * If you can get everything to pass, repeat the exercise for a different site.

