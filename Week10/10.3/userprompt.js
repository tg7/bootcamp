// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing. 
// The question set should include at least one:

var inquirer = require('inquirer');


inquirer.prompt ([

  {
    type: "input",
    message: "Who are you!?",
    name: "name"

  },

  {
    type: "list",
    message: "What is your favorite food?",
    choices: ["Pizza", "Chicken", "Fish"],
    name: "food"

  },
  
  {
    type: "confirm",
    message: "Do you like this game?",
    name: "question"

  },

  {
    type: "password",
    message: "Enter Your Password",
    name: "password"

  },

  {
    type: "checkbox",
    message: "Please checkoff your preference",
    choices: ["Hotel", "Hostel", "Tent"],
    name: "check"

  },

  ]).then(function(user) {

    console.log(JSON.stringify(user, null, 2));

  });

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
