// Include React 
var React = require('react');

// Create the GrandChild Component
var GrandChild = React.createClass({

	render: function(){

		return(
      <div>
        <h1>Grand Child</h1>
      </div>
		)
	}
});

// Export the componen back for use in other files
module.exports = GrandChild;