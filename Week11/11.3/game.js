var inquirer = require('inquirer');

var coinflip = true;
var count = 0;

var Player = function(opt) {

  this.playerName = opt.playerName;
  this.position = opt.position;
  this.offense = opt.offense;
  this.defense = opt.defense;
  this.goodGame = function() {
    if (Math.floor(Math.random() * 2) == 0) {
      this.offense ++;
      console.log(this.name + "offense has gone up!")
    } else {
      this.defense ++;
    }
  }
  this.badGame = function() {
    if (Math.floor(Math.random() * 2) == 0) {
      this.offense --;
      console.log(this.name + "defense has gone down!")

    } else {
      this.defense --;
    }
  }
  this.printStats = function() {
    console.log("Name: " + this.playerName, "Position: " + this.position, "Offense: " + this.offense, "Defense: " + this.defense);

};


};

var starter = [];
var sub = [];
var score = 0;

// Uses Inquirier to prompt questions to user
var createPlayer = function() {

if (starter.length + sub.length < 8) {

    inquirer.prompt([{

      name: "playerName",
      message: "Player's Name: "
    }, {
      name: "position",
      message: "Player's Position: "
    }, {
      name: "offense",
      message: "Player's Offensive Ability: ",
      validate: function(value) {
          if (isNaN(value) == false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          } else {
            return false;
          }
        },
    },
    {
      name: "defense",
      message: "Players Defensive Ability: ",
      validate: function(value) {
          if (isNaN(value) == false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          } else {
            return false;
          }
       }
    }]).then(function(answers) {
      
      var player = new Player (answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));

      if (count <= 8) {
          count++;
          createPlayer();
          console.log(answers);

      } if (starter <= 5) {
        starter.push('');
        console.log(starter);

      } else {
        sub.push('');
        console.log(sub);

      }

    });
  }
};

createPlayer();




// function runGame () {
//   if prototype = 8 {



//   }

// }

// todd.printStats();


