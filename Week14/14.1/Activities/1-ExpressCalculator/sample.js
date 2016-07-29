//ALL THE CODE YOU NEED TO START A WEB SERVER
var express = require('express');
var app = express();
app.listen(3000);

//DEFINE ONE ROUTE - TAKE IN 3 PARAMETERS. - AN OPERATION AND TWO NUMBERS. 
//THE SINGLE ROUTE SHOULD BE ABLE TO HANDLE THESE REQUESTS:

//ie http://localhost:3000/add/10/5
//ie http://localhost:3000/subtract/10/1
//ie http://localhost:3000/divide/10/5
//ie http://localhost:3000/multiply/10/5
//the response should be the result of the math operation

app.get('/:operator/:num1/:num2', function(req, res){

	 var params = req.params;
	 var operator = params.operator;
	 var num1 = parseInt(params.num1);
	 var num2 = parseInt(params.num2);
	 if (operator == 'add') {
	   res.send(200, num1 + num2);
	 } else if (operator == 'subtract') {
	   res.send(200, num1 - num2);
	 } else if (operator == 'divide') {
	   res.send(200, num1 / num2);
	 } else if (operator == 'multiply') {
	   res.send(200, num1 * num2);
	 };
});

app.get('/:a/:b', function(req, res) {
    res.send(req.params.a + ' ' + req.params.b);
});

app.get('/1/2', function(req, res) {
    res.send(req.params.a + ' ' + req.params.b);
});
























