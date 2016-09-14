// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Grabs the Routes
var Routes = require('./config/routes');

// Renders the contents according to the route page.
ReactDOM.render(
	Routes,
	document.getElementById('app')
)
