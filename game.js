
//2. This will be the function in Word.js
	//should contain all of the methods which will check the letters guessed versus the random word selected.
//3. Letter.js
	//should control whether or not a letter appears as a "_" or as itself on-screen.
//. Display the numbers of guesses left.

//End the game if they run out of guesses. Say you lose!
//End the game if they guess the word.
//Ask if would like to play again?


//First we need to install inquirer and require the npm package
var inquirer = require('inquirer');
//This is how we require the Letter constructor function
var Letter = require('./Letter');
//This is how we require the Word constructor function
var letterChecker = require('./letterChecker');


//User Introduction

console.log("--------------------------------------------------------------------------------");
console.log("'Veggies in the Raw' Hangman Game");
console.log("--------------------------------------------------------------------------------");

console.log("If you do not guess the veggie in time, it will get thrown in the pot to boil!");
console.log("To keep your veggies in the raw, be selective with each letter, my friend.");
console.log("--------------------------------------------------------------------------------");

//--------------------------------------------------------------------

//Variables
var numGuesses = 10;
var numGuessesLeft = 0;
var lettersGuessed = "";

//--------------------------------------------------------------------

//Let the computer choose a word first
//Create an array with all the vegetables user can guess.

var veggiesArray = ['carrot', 'asparagus', 'beet', 'corn', 'potato', 'string bean', 'avocado', 'spinach', 'cabbage', 'cauliflower', 'onion', 'lettuce', 'maize', 'cucumber', 'kale', 'celery', 'turnip', 'eggplant', 'brussel sprout', 'zucchini', 'artichoke', 'radish', 'garlic', 'chard', 'leek', 'arugula', 'rutabaga', 'parsnip', 'watercress', 'scallion', 'rhubarb', 'chili pepper', 'squash', 'shallot'];

//The computer randomly chooses a vegetable

var randomVeggie = veggiesArray[Math.floor(Math.random()*veggiesArray.length)];
	// console.log(randomVeggie);

//Ask if the user would like to get started.
function askToStart(){
	inquirer.prompt([
	  {type: "input",
	    name: "startGame",
	    message: "Let's get started, shall we?"}

	]).then(function(data){
	      if (data.startGame == 'yes'){
	      	//go to where the game will start
	      	lettersGuessed();
		  }else{
		  	//go to where game ends
	      	console.log('Maybe next time then!');
	      }
	});
}

askToStart();


var lettersToCheck = [];

//This will allow the user to guess a letter
function lettersGuessed(){
	inquirer.prompt([
	  {type: "input",
	    name: "letterGuessed",
	    message: "Your Letter?"},

	]).then(function(data){
	      var lettersToCheck = [];
	      var newLetter = data.letterGuessed;
	      lettersToCheck.push(newLetter);
    
    	console.log(lettersToCheck);   
	
	});
}


//At the end say "Curses! Boiled again!!"



//Start with inquirer to ask letter the user would like to choose.
// inquirer.prompt([
//   {type: "input",
//     name: "letter",
//     message: "Which letter?"},

// ]).then(function(data){
// 	  var students = [];
//       newClass = new Clas([], data.subject, data.capacity);

//       askToAddStudent();
// });

