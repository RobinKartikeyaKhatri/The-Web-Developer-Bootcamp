const secretNumber = 7;

const guess = Number(prompt("Guess a number!"));

if (guess > secretNumber) {
    alert("Too high. Try again.");
} else if (guess < secretNumber) {
    alert("Too low. Try again.");
} else {
    alert("You guessed it!!");
}