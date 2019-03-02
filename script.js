
// array of letters that will be used to get a random letter from
var availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// user guess which will be used to store the user input
var userGuess = "";
// empty array which will contain userGuess
var guessedLetters = [];
// store the letter picked at random from availableLetters array
var compLetter = "";
// how many guesses the user has 
var counter = 5;

// function to draw to the page, manipulate the DOM, and display to the user
function drawStuff() {
    // shows to the user the guesses remaining, through the counter variable, updating the DOM
    document.getElementById("remaining_guesses").textContent = `Guesses remaining: ${counter}`;
    // updating guessed letters to the users, updating the DOM
    document.getElementById("your_guess").textContent = `Letters guessed: ${guessedLetters}`;

}
// this function will start the game with certain conditions
function startGame() {
    // restarts the counter to 5
    counter = 5;
    // restarts the guessedLetters array to empty
    guessedLetters = [];
    // picks a letter from the array availableLetters and stores it in random, will this get a - z or just a - y???
    var random = Math.floor(Math.random() * availableLetters.length);
    // updates compLetter variable with random letter from availableLetters 
    compLetter = availableLetters[random];
    // debugging if the computer actually picks a random letter and it resets each time startGame is called
    console.log(compLetter);
    // calls drawStuff function, to reset the screen to start point
    drawStuff();
}

// the page is waiting for an event, a key which will run code within the  { }
document.onkeyup = function (event) {
    // the function startGame is called when the user presses a key 
    startGame();
    // the user presses a key again 
    document.onkeyup = function (event) {
        // the event of pressing a key will store that key pressed into the variable userGuess
        userGuess = event.key;
        // calls the function guess with the argument userGuess to be run later
        guess(userGuess);
    }
    // the function guess with argument ltr (in this case ltr represents userGuess)
    function guess(ltr) {
        // debugging, makes sure that the ltr is actually our userGuess
        console.log(ltr); //the already chose this will contain the if statements below so they can keep guessing ,, if letter is not in the array of chosen then do below - push to array of chosen - and if yes it is then alert youve chosen  - and if it wasn;t in the array before, add it 
        // if ltr is equal to compLetter then do actions below
        if (ltr === compLetter) {
            // alert to user, you have won because your guess matched the random letter the computer drew
            alert("Congrats, you won! The letter was '" + compLetter.toUpperCase() + "' Click ok to play again");
            // calls the startGame function to reset the game
            startGame();
            // if the guessed letter is not what compLetter is, what the computer has picked, do below
        } else if (ltr !== compLetter) {
            // if the letter you guessed is not in the array of guessedLetters do below
            if (guessedLetters.indexOf(ltr) === -1) {
                // take that guess and push it to the array guessedLetters
                guessedLetters.push(ltr);
                // debugging, making sure that the array is pushed and stored to guessedLetters
                console.log(guessedLetters);
                // decreases the counter when you guess a wrong letter
                counter--;
                // if the letter you guess is already in the array guessedLetters
            } else {
                // alert the user that they have already guessed that letter
                alert("You've already guessed '" + ltr + "'");
            }
            // when counter becomes zero, do below
            if (counter === 0) {
                // alert to the user that they have lost, what the correct letter was, and instructions how to restart game
                alert("You lost. The letter was '" + compLetter.toUpperCase() + "' Click ok to try your luck again!");
                // calls startGame function
                startGame();
            }
        }
        // calls the startGame function to update the DOM
        drawStuff();
    }
}





