//should contain all of the methods which will check the letters guessed versus the random word selected.

//1. First I need to create an array with all the vegetables they can guess.

var veggiesArray = ['carrot', 'asparagus', 'beet', 'corn', 'potato', 'string bean', 'avocado', 'spinach', 'cabbage', 'cauliflower', 'onion', 'lettuce', 'maize', 'cucumber', 'kale', 'celery', 'turnip', 'eggplant', 'brussel sprout', 'zucchini', 'artichoke', 'radish', 'garlic', 'chard', 'leek', 'arugula', 'rutabaga', 'parsnip', 'watercress', 'scallion', 'rhubarb', 'chili pepper', 'squash', 'shallot'];

//The computer randomly chooses a vegetable

var randomVeggie = veggiesArray[Math.floor(Math.random()*veggiesArray.length)];
	console.log(randomVeggie);


	// computerWordGuess function () {

	// 	//First computer chooses a random number
	// 	(Math.random()
	// 	for (var i = 0; i <veggiesArray.lenth, i++)

	// }



//2. Then the computer randomly guesses a vegetable from the array
//3. Pass the vegetable chosen into the Word constructor
//4. Then take in a letter guessed from the user and compare the guessed letter with the letters in the chosen word.
//5. If a letter matches go to the letter.js to display them correctly on the screen.



// function Animal(r, n){
//     this.raining = r;
//     this.noise = n;
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
