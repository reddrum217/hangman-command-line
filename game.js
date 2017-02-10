//This is 'Veggie in the Raw Hangman Game'.
//If you do not guess the vegetable in time it will get thrown in the pot to cook!
//Keep your veggies alive, think carefully, my friend. 
//Let's get started, shall we?

//1. We need a prompt from Inquirer that will ask the user if they would like to begin?
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
var Word = require('./Word');

//-----------------------------------------------------------------------

//Variables here
var numGuesses = 10;
var numGuessesLeft = ;
var lettersGuessed = "";


//-----------------------------------------------------------------------

//Start off with a prompt that will ask the user if they would like to start.
console.log("--------------------------------------------------------------------------------");
console.log("This is 'Veggie in the Raw' Hangman Game. <br>");
console.log("--------------------------------------------------------------------------------");

console.log("If you do not guess the vegetable in time it will get thrown in the pot to boil!");
console.log("To keep your veggies alive, be selective with each letter, my friend.");
console.log("--------------------------------------------------------------------------------");


//Ask if the user would like to get started.
function askToStart(){
	inquirer.prompt([
	  {type: "input",
	    name: "startGame",
	    message: "Let's get started, shall we?"}

	]).then(function(data){
	      if (data.startGame == 'yes'){
	      	//go to where the game will start
	      	lettersGuessed()
		  }else{
		  	//go to where game ends
	      	console.log('Maybe next time then!');
	      }
	});
}

askToStart();

//This will allow the user to guess a letter
function lettersGuessed(){
	inquirer.prompt([
	  {type: "input",
	    name: "letterGuessed",
	    message: "Your Letter?"}

	]).then(function(data){
	      var newLetter = new Letter(data.letterGuessed);
	      newWord.addLetter(newLetter);

	      console.log(newLetter);
	      
	      checkLetter();
	      
	      
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

