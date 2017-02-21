//should control whether or not a letter appears as a "_" or as itself on-screen.
console.log('connected letter js');
// console.log(randomVeggie);
// First Start with the letter constructor.
// 	Decide what the properties will be for each letter.
// 	This is what will display the blanks or letters.
// 	This will be hit last in the flow of the game
// 	You need to decide what the letter obects will return once the users guesses a letter.
// 	Don't forget to export the letter


function Letter(letter){
  this.letter = letter;
  this.found = false;
  this.display = function() {
  	if (this.found) return this.letter;
  	else return ' _ ';

  }

  console.log(letter);
  console.log(letter);
  console.log(letter);
  console.log(letter);
  console.log(letter);

  
}

module.exports = Letter;

// var newLett = new Letter(data.letterGuessed);
// var anotherLett = new Letter('g');

// letter.prototype.addRemoveBlanks = function(s){
  // if the letter in checkletter equals one of the lettersToCheck equals one of the letters in randomVeggie than go to letter.js and change one of the ___ to a letter.


  // if (this.studs.length < this.capacity){
  //   this.studs.push(s);
  