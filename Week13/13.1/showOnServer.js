var fs = require ('fs');
var http = require ('http');


function handleRequest(request, response) {
  if (request.url === '/') {

      fs.readFile('test.html', 'utf8', function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
      });
  } 

   else if (request.url === '/food') {

      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end('<html><body><h1>My Favorite Foods</h1></body></html>');
  
  } 

  else if (request.url === '/movies') {

   
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end('<html><body><h1>My Favorite Movies</h1></body></html>');

  } 

  else if (request.url === '/frameworks') {

      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end('<html><body><h1>My Favorite CSS Frameworks</h1></body></html>');

  } 

  else {
    
      response.writeHead(404, {'Content-Type': 'text/html'});
      response.end('404!')

  }

};

var server = http.createServer(handleRequest);
var port = 8080;

server.listen(port, function() {
  console.log('server is listening on http://localhost:%s', port);

});




