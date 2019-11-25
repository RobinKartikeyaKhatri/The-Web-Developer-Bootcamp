const playerOneButton = document.querySelector("#p1-button");
const playerTwoButton = document.querySelector("#p2-button");
const resetButton = document.querySelector("#reset-button");

let playerOneScore = 0;
let playerTwoScore = 0;

const playerOneScoreDisplay = document.querySelector("#player-one-display");
const playerTwoScoreDisplay = document.querySelector("#player-two-display");

let gameOver = false;
const winningScore = 5;


playerOneButton.addEventListener("click", () => {
    if (!gameOver) {
        playerOneScore += 1;
        if (playerOneScore === winningScore) {
            gameOver = true;
        }
        playerOneScoreDisplay.textContent = playerOneScore;
    }
});

playerTwoButton.addEventListener("click", () => {
    if(!gameOver) {
        playerTwoScore += 1;
        if (playerTwoScore === winningScore) {
            gameOver = true;
        }
        playerTwoScoreDisplay.textContent = playerTwoScore;
    }
});

resetButton.addEventListener("click", () => {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneScoreDisplay.textContent = 0;
    playerTwoScoreDisplay.textContent = 0;
    gameOver = false;
});