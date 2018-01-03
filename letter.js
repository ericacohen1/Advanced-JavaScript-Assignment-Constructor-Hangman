var Letter = function(gameWordLetter){
    //underscores for letters
    this.current = "_";
    //making letters show
    this.theLetter = gameWordLetter;
    this.showsLetter = false;
    this.letterAppear = function(userLetter){
        if(this.theLetter === userLetter) {
            this.current = this.theLetter;
            return true;
        } 
            return false;
    }
    this.letterShows = function(){
        return this.current;
    }
}
// console.log(Letter);




module.exports = Letter;