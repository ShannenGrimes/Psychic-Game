// Start game

// List of words
var wordList = ["lavendar", "school", "hassle", "tool", "sad", "summer", "lake", "crystal"];
// Listener for key press

// Chooses a random word from the list
var currentWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();

// Shows an underscore for unguessed letters
var underscore = [];
document.getElementById("currentWord").innerHTML = underscore.join(" ");
console.log("Current Word: " + currentWord);

// Counts how many guesses are left
var countGuessesLeft = 10;
document.getElementById("guessesLeft").innerHTML = countGuessesLeft;

// Counts total wins
var wins = 0;
document.getElementById("totalWins").innerHTML = wins;

var resetLtr = ""

// Were letters found?

// Yes, letters were found

// Counts letters guessed correctly

// Shows Correctly guessed letters

// No, letters were not found

// Counts letters guessed incorrectly

// Shows incorrectly guessed letters

// Reset game

// End game







