// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Include the Main Component
var Main = require('./Components/Main')


// Here we set a generic state associated with the number of clicks
    getInitialState: function(){
        return {
            searchTerm: "",
            results: "",
            history: [] /*Note how we added in this history state variable*/
        }
    },
    
// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(

	<Main />,
	document.getElementById('app')
)