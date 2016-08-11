var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
  .goto('http://google.com')
  .type('#lst-ib.gsfi', 'Somerset, NJ Weather')
  .evaluate(function () {
        return document.querySelector('#main .searchCenterMiddle li a').href
      })
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });