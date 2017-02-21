//should contain all of the methods which will check the letters guessed versus the random word selected.
// console.log('connected word js');

//Create a constructor function that takes in the input and compares the two.

 // Need to check random veggie with the letters in LetterstoCheck
 //Recursion could work here, if the letters guessed doesn't equal the Guess left, keep going

var Letter = require('./letter.js');
console.log('connected word!');

// Decide what the object and the keys/properties will be
// decide what the function will be
// Next do the Word Object
// Decide what the properties and the fucntion will be.
 
//  1. You have a Word
//  	Then you have letter objects
//  	Then you need the fucntion
//  	You need to run the letter display from the letter file
//  	You need to loop over the word, and push each of the letters into any array 

function Word(word){
  this.word = word;
  this.letterArray = []; 
  this.pushIntoLetterArray = function(){
  		for (var i=0; i < this.word.length; i++) {
  			console.log('hi');
  			console.log('hi');
  			console.log('hi');
  			console.log(high);
  			console.log(word);


  		// this.letterArrary.push()
  		}
 	}		
 }

// var bug = new Word ('bug');
var high = new Word ('high');

high.pushIntoLetterArray();

module.exports = Word;



// function Letter(letter){
//   this.letter = letter;
//   this.found = false;
//   this.display = function() {
//   	if (this.found) return this.letter;
//   	else return ' _ ';







