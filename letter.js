var Letter = function(letterz){
    //underscores for letters
    this.current = "_";
    //making letters show
    this.theLetters = letterz;
    this.showsLetter = false;
    this.letterAppear = function(letter){
        if(this.theLetters === letter) {
            this.current = this.theLetters;
            return true;
        } 
            return false;
    }
    this.letterShows = function(){
        return this.current;
    }
}




module.exports = Letter;