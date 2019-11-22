const age = 144;

if (age < 0) {
    console.log("Please comeout from womb");
} else if (age === 21) {
    console.log("Happy 21st birthday!!");
} else if (age % 2 !== 0) {
    console.log("Your age is odd")
} else if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square");
}