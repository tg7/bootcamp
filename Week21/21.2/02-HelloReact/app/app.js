// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// This code renders a simple "Hello World".
// ReactDOM takes in two parameters (a single HTML div or element and the HTML target where it will be rendered)
// The code here will run through webpack and be compiled into plain Javascript 
// The compiled code will be appended into the index.html file in the id called "app"
ReactDOM.render(

  <div className="container">
    <div className="jumbotron">
      <h3>Hello World!</h3>
      <a className="btn btn-warning btn-lg">Click Me</a>
    </div>
  </div>
	,document.getElementById('app')
)