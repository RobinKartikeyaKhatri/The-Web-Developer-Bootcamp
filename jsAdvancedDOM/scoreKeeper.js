const playerOneButton = document.querySelector("#p1-button");
const playerTwoButton = document.querySelector("#p2-button");
const resetButton = document.querySelector("#reset-button");

let winningScoreDisplay = document.querySelector("p span");

let playerOneScore = 0;
let playerTwoScore = 0;

const playerOneScoreDisplay = document.querySelector("#player-one-display");
const playerTwoScoreDisplay = document.querySelector("#player-two-display");

let gameOver = false;
let winningScore = 5;

var numInput = document.querySelector("input");



playerOneButton.addEventListener("click", () => {
    if (!gameOver) {
        playerOneScore += 1;
        if (playerOneScore === winningScore) {
            playerOneScoreDisplay.classList.add("winner")
            gameOver = true;
        }
        playerOneScoreDisplay.textContent = playerOneScore;
    }
});

playerTwoButton.addEventListener("click", () => {
    if(!gameOver) {
        playerTwoScore += 1;
        if (playerTwoScore === winningScore) {
            playerTwoScoreDisplay.classList.add("winner");
            gameOver = true;
        }
        playerTwoScoreDisplay.textContent = playerTwoScore;
    }
});

resetButton.addEventListener("click", () => {
    reset();
});

const reset = () => {
    playerOneScore = 0;
    playerTwoScore = 0;

    playerOneScoreDisplay.textContent = 0;
    playerTwoScoreDisplay.textContent = 0;

    playerOneScoreDisplay.classList.remove("winner");
    playerTwoScoreDisplay.classList.remove("winner");

    gameOver = false;
}

numInput.addEventListener("change", () => {
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});