var Letter = require("./letter.js");

var Word = function(letters){
    this.letters = letters;
    this.guessedWord = [];
    this.winner = false;
    this.guesses = [];

    this.getLetter = function(){
        for(var i=0; i<this.letters.length; i++){
            var newLetter = new Letter(this.letters[i]);
            this.guessedWord.push(newLetter);
        }
    }
}

this.getLetter();