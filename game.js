var inquirer = require("inquirer");
var Word = require("./word.js");


var Game = function () {
    this.possibleWords = ["field hockey", "lacrosse", "basketball", "football", "soccer", "baseball"];
    this.randoWord = this.possibleWords[Math.floor(Math.random() * this.possibleWords.length)];
    this.choseWord = new Word(this.randoWord);
    // console.log(Game);
    this.choseWord.getLetter();
    console.log(this.choseWord.guessedWord);
    this.guessesRemaining = 10;
}

var hangman = new Game();

function runGame(){
inquirer.prompt([
    {
    name: "userLetterGuess",
    message: "Choose a letter: "
    }
])

.then(function(answers) {
   
    //forEach method option
    // item represents the current object being looped through in the array.
    hangman.choseWord.guessedWord.forEach(function(item) {
        // this object has a item.letterAppear(answers.userLetterGuess) method that will accept an input (user's input) and compare it with the current object's letter value
       
    });
    //check to see if user guess is in the chosen word
    //if it is then display letter and say COREECT
    //if not then number of guesses left needs to go down and say INCORRECT
    //if letter is not guessed yet display the underscore from letter.js file
    
    console.log(answers);
    // after doing all the stuff, recursivly fun the function again
});
}