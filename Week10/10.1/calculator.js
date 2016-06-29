// Takes in all of the command line arguments
var inputString = process.argv;

//Parses the command line to capture the "operand" (add, subtract, divide, multiply)

var operand = inputString[2];
var num1    = parseInt(inputString[3]);
var num2    = parseInt(inputString[4]);

if (operand === 'add' || "+") {
 console.log(parseInt(num1) + parseInt(num2));

}

else if (operand === 'subtract' || "-") {
	console.log(num1) - (num2);
}

else if (operand === 'divide' || "/") {
	console.log(num1) / (num2);

}

else if (operand === 'multiply' || "*") {
	console.log(num1) * (num2);

}

else if (operand === "exp"){
    squared = Math.pow(num1, num2);
}



