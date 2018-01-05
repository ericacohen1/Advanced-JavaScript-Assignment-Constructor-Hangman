var inquirer = require("inquirer");
var Word = require("./word.js");


var Game = function () {
    this.possibleWords = ["field hockey", "lacrosse", "basketball", "football", "soccer", "baseball"];
    this.randoWord = this.possibleWords[Math.floor(Math.random() * this.possibleWords.length)];
    this.choseWord = new Word(this.randoWord);
    // console.log(Game);
    this.choseWord.getLetter();
    // console.log(this.choseWord.guessedWord);
    this.guessesRemaining = 12;
    this.currentWord=null;
    
}

var lettersCorrect=[];
var hangmanDisplay;

var hangman = new Game();

function runGame() {
    inquirer.prompt([{
            name: "userLetterGuess",
            message: "Choose a letter: "
        }])

        .then(function (answers) {
            // check to see if the user guessed letter is part of the word 
            console.log(hangman.randoWord);
            // if the user letter is part of the word
            if (hangman.randoWord === answers.userLetterGuess) {
                lettersCorrect.push(answers.userLetterGuess);
                hangmanDisplay = new Word(Game.currentWord, guessesRemaining);
                hangmanDisplay.parseDisplay();
            } 
            
            // otherwise keep the underscore and deduct a guess point 
            
            else {
                // guessesRemaining--;
            }

            // if there are still guesses left then continue game

            // if guessesReamining is 0 end game



            
            // item represents the current object being looped through in the array.
            // hangman.choseWord.guessedWord.forEach(function (item) {
                // this object has a item.letterAppear(answers.userLetterGuess) method that will accept an input (user's input) and compare it with the current object's letter value

                // console.log(item);
                // console.log(item.theLetter);
                // item.letterAppear(userLetter){
                //     Game.guessesRemaining--;
                //     word.display("Incorrect");
                // }
                // item.letterAppear(answers.userLetterGuess === true){
                //     word.display("Correct");
                // }

                //check to see if user guess is in the chosen word
                // var newGame = new Word(Letters);

                // answers.userLetterGuess
                // Word.comparrison
        
                //user wins if user guesses word corectly
                // if(hangman.choseWord.comparrison === true){
                //     console.log("you win")
                // }
                // user loses if they guess word incorrectly
                // if(guesses=0){
                //     console.log("Your out of guesses, game over")
                // }
            // });


            // console.log(answers);

        });
}

runGame();