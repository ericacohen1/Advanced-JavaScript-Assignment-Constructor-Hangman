var word = require("./main.js");

var Game = function(){
    this.possibleWords = ["field hockey", "lacrosse", "basketball", "football", "soccer", "baseball"];
    this.randoWord = this.possibleWords[Math.floor(math.random() * this.possibleWords.length)];
    this.choseWord = new word (this.randoWord);
}

var hangman = new Game();

module.exports = Game;