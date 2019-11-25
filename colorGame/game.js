const colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

const squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to the squares
    squares[i].addEventListener("click", () => {
        // grab color of clicked square
        let clickedColor = squares[i].style.backgroundColor;
        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            alert("Correct");
        } else {
            alert("Wrong");
        }
    });
}