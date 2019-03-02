
var availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = "";
var guessedLetters = [];
var compLetter = "";
var wins = 0;
// var losses = 0;
var counter = 10;

function startGame() {
    wins = 0;
    losses = 0;
    counter = 10;
    var random = Math.floor(Math.random() * availableLetters.length);
    compLetter = availableLetters[random];
    console.log(compLetter);
    document.getElementById("remaining_guesses").textContent = `Guesses remaining: ${counter}`;
}

document.onkeyup = function (event) {
    startGame()
    document.onkeyup = function (event) {
        userGuess = event.key;
        guess(userGuess);
    }

    function guess(ltr) {
        console.log(ltr); //the already chose this will contain the if statements below so they can keep guessing ,, if letter is not in the array of chosen then do below - push to array of chosen - and if yes it is then alert youve chosen  - and if it wasn;t in the array before, add it 
        if (ltr === compLetter) {
            alert("Congrats, you won! The letter was '" + compLetter.toUpperCase() + "' Click ok to play again");
            startGame();
        } else if (ltr !== compLetter) {
            if (guessedLetters.indexOf(ltr) === -1) { //-1 not in array
                guessedLetters.push(ltr);
                console.log(guessedLetters);
            } else {
                alert("You've already guessed '" + ltr + "'");
            }
            if (counter === 0) {
                alert("You lost. The letter was '" + compLetter.toUpperCase() + "' Click ok to try your luck again!");
                startGame();
            }
        }
        // Updating counter
        document.getElementById("remaining_guesses").textContent = `Guesses remaining: ${counter}`;

        // Updating guessed letters 
        document.getElementById("your_guess").textContent = `Letters guessed: ${guessedLetters}`;

    }
}





