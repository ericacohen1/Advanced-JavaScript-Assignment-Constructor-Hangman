var Letter = require("./letter.js");

var Word = function (letters) {
    this.letters = letters;
    this.guessedWord = [];
    this.winner = false;
    this.guesses = [];

    //gets letter in word
    this.getLetter = function () {
        for (var i = 0; i < this.letters.length; i++) {
            var newLetter = new Letter(this.letters[i]);
            this.guessedWord.push(newLetter);
        }
        // console.log(this.guessedWord);
    }



    //finds the letter in guesses array
    this.findLetter = function (guessLetter) {
        for (var i = 0; i < this.guesses.length; i++) {
            if (guessLetter === this.guesses[i]) {
                return true;
            }
        }
        var addLetter = false;
        
        this.guesses.push(guessLetter);
        for(var i=0; i<this.guessedWord.length; i++) {
            if(this.guessedWord[i].letterAppear(guessLetter)){
                this.guessedWord[i].showsLetter = true;
                added = true;
            }
        }
        return added;
    }


    //compares letter input with letter in chosen word
    this.comparison = function () {
        for (var i = 0; i < letters.length; i++) {
            if (this.letters.charAt[i] != this.guessedWord[i].current) {
                return false;
            }
            // console.log(comparison);
        }
        return true;
    }

    //displaying info
    this.display = function () {
        var stringIsEmpty = "";
        for (var i = 0; i < this.guessedWord.length; i++) {
            stringIsEmpty += this.guessedWord[i].current + " ";
        }
        return stringIsEmpty;
    }
}

module.exports = Word;

// test code
// var hi = new Word ("h");
// hi.comparison();