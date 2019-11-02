// Array of letters
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Defaulting fields to zero
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guesses = 0;
var guessedLtrs = [];
var letterToGuess = null;
// Searches for random number
var randomLtr = alpha[Math.floor(Math.random() * alpha.length)];
// Determines number of guesses and display on html
function UpdateguessesLeft() {
    document.querySelector('#guessesLeft').innerHTML = " " + guessesLeft;
};

function updateToGuess() {
    this.letterToGuess = this.alpha[Math.floor(Math.random() * this.alpha.length)];
};
// Determine whhat has been guessed and displaying it on html
function updateGuessesSoFar(){
    document.querySelector('#guessesSoFar').innerHTML = "  " + guessedLtrs.join(', ');
};

// Reset & default number of guesses to 10
var reset = function() {
    totalGuesses = 10;
    guessesLeft = 10;
    guessedLtrs = [];

    updateToGuess();
    updateGuessesSoFar();
    UpdateguessesLeft();
}

updateToGuess();
updateToGuess();

// Event for user input
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    var check = alpha.includes(userGuess);
    if (check ===false){
        alert("That was incorrect. Try again.");
        return false;
    } else if(check ===true) {
        guessesLeft;
        guessedLtrs.push(userGuess);
        UpdateguessesLeft();
        updateGuessesSoFar();
        
        if (guessesLeft > 0){
            if (userGuess == letterToGuess) {
                wins ++;
                document.querySelector('#wins').innerHTML = " " + wins;
                userGuess = userGuess.toLocaleUpperCase();
                alert ("Wow, you really are a psychic!");
                reset();
            }
        } else if (guessesLeft ==0) {
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("You're no pyschic! LOL");
            reset();
        }
        return false;
    } else {
        alert("Sorry, it looks like we have an error!");
    }
}