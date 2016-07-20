//Requires internal http module
var http = require ('http');

//Function which handles request and responses
function handleRequest(request, response) {
  if (request.url === '/') {
    res.writeHead(200, {'Content Type: text/html'})

  }
}

// Creates a server
var server = http.createServer(handleRequest);
var port = 8080;

// Starts our server
server.listen(port, function() {
  //Call back triggered
  console.log('Server listening on: http://localhost:%s', port);

});

