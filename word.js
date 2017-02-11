//should contain all of the methods which will check the letters guessed versus the random word selected.
// console.log('connected word js');

//Create a constructor function that takes in the input and compares the two.

 // Need to check random veggie with the letters in LetterstoCheck
 //Recursion could work here, if the letters guessed doesn't equal the Guess left, keep going


//The array can exist in the constructor.

function word(lettersToCheck, randomVeggie){
  this.lettersToCheck = lettersToCheck;
  this.randomVeggie = randomVeggie;
  
}

word.prototype.checkLetter = function(s){
  // if the letter in checkletter equals one of the lettersToCheck equals one of the letters in randomVeggie than go to letter.js and change one of the ___ to a letter.


  // if (this.studs.length < this.capacity){
  //   this.studs.push(s);
  }
}

module.exports = word;








 // var words = ['cat', 'car', 'peanut', 'aluminum'];
 //      var correctLettersGuessed = [];
 //      var randomWord;
 //      var correctLetterCounter = 0;

 //      function setGame(){
 //        randomWord = words[Math.floor(Math.random()*words.length)];
 //        correctLetterCounter = 0;
 //        correctLettersGuessed = [];

 //        var empty = "";
 //        for (var i=0; i< randomWord.length; i++){
 //          empty += " _ "
 //        }
 //        document.querySelector('#game').innerHTML = empty;
 //      }


//2. Then the computer randomly guesses a vegetable from the array
//3. Pass the vegetable chosen into the Word constructor
//4. Then take in a letter guessed from the user and compare the guessed letter with the letters in the chosen word.
//5. If a letter matches go to the letter.js to display them correctly on the screen.

// function Student(fName){
// 	this.fName = fName;
// }



// function CompareWord(randomVeggie, newletter){
//     this.randomVeggie = randomVeggie;
//     this.newletter = newletter;
//     this.makeNoise = function(){
//         if (this.raining) return this.noise;
//     }
// }

// var dog = new Animal(true, 'woof');
// var cat = new Animal(true, 'meow');
// var giraffe = new Animal(true, 'sup');
// var zebra = new Animal(true, 'dude');
// var elephant = new Animal(true, 'bro');
// var gorilla = new Animal(true, 'nah dude');

// console.log(dog.makeNoise());
// console.log(cat.makeNoise());
// console.log(giraffe.makeNoise());
// console.log(zebra.makeNoise());
// console.log(elephant.makeNoise());
// console.log(gorilla.makeNoise());


// module.exports = CompareWord;

