// Include React 
var React = require('react');

var Main = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="container">
				<div className="jumbotron">
					<h2><strong>Which Child???</strong></h2>
					<p><em>A journey through the whimsical world of React Routing</em></p>
					<hr/>
					<p>
						<a href="#/Child1"><button className="btn btn-primary btn-lg">Show Child #1</button></a>
						<a href="#/Child2"><button className="btn btn-danger btn-lg">Show Child #2</button></a>
					</p>
				</div>

				<div className="row">
					
					{/*This code will dump the correct Child Component*/}
					{this.props.children}

				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;