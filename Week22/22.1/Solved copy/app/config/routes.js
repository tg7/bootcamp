// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= router.IndexRoute;
//Include hashHistory
var hashHistory	= router.hashHistory;

// Reference the high-level components
var Main = require('../components/Main');
var Child1 = require('../components/Children/Child1');
var Child2 = require('../components/Children/Child2');
var GrandChild1 = require('../components/Children/Grandchildren/GrandChild1');
var GrandChild2 = require('../components/Children/Grandchildren/GrandChild2');
//Instructions
//Create and export a route component with all of our routing logic
//By default our Child1 Route is rendered if no child route is selected
//By default our GrandChild1 Route is rendered if no grandchild is selected
//Note: grandchildren only render if child1 renders


// Export the Routes
module.exports = (
<Router history={hashHistory} >
  <Route path="/" component={Main}/>
  <Route path="Child1" component={Child1}/>
  <Route path="Child2" component={Child2}/>
</Router>
);
