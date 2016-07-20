//Requires internal http module
var http = require ('http');

//Function which handles request and responses
function handleRequest(request, response) {
  response.end('It Works!! Path Hit: ' + request.url);
}

// Creates a server
var server = http.createServer(handleRequest);
var port = 3000;

// Starts our server
server.listen(port, function() {
  //Call back triggered
  console.log('Server listening on: http://localhost:%s', port)

});


function otherRequest(req, res){
  // If statement used to portray text based on the request path
 if (req.url === '/') {
  res.writeHead (200,{'Content-Type': 'text/html'};
  }

  res.end('I worked');
 }
}

var server2 = http.createServer(otherRequest);
var port2 = 3001;

server2.listen(port2, function(){
 console.log("server2 listening on: http://localhost:%s", port2)
});

var fs = require ('fs');
var http = require ('http');


function handleRequest(request, response) {
  response.end('You have reached your goal' + request.url);

};

var server = http.createServer(handleRequest);
var port = 3000;

server.listen(port, function() {
  console.log('server is listening on http://localhost:%s', port);

});


fs.readFile('test.html', function() {



});