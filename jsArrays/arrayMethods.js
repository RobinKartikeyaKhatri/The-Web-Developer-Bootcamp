const colors = ["Black", "White"];
console.log(colors);

colors.push("Red");

console.log(colors);

colors.pop();

console.log(colors);

colors.unshift("Pink");

console.log(colors);

colors.shift();

console.log(colors);

console.log(colors.indexOf("White"));

const fruits = ["Banana", "Oranges", "Lemon", "Apples", "Mango"];

console.log(fruits);

const citrus = fruits.slice(1, 3);
console.log(citrus);

const copiedArray = fruits.slice();
console.log(copiedArray);