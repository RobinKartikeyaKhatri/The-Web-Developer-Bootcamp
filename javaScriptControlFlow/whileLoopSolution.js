// To run this file, install node and run this command-> node <file_name>

// Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");
let num = -10;
while (num <= 19) {
    console.log(num);
    num++
}

// Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
let num1 = 10;
while (num1 <= 40) {
    if(num1 % 2 === 0) {
        console.log(num1);
    }
    num1++;
}

console.log("Print all odd numbers between 300 and 333");
// Print all odd numbers between 300 and 333
let num3 = 300;
while (num3 <= 333) {
    if (num3 % 2 !== 0) {
        console.log(num3);
    }
    num3++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
// Print all numbers divisible by 5 AND 3 between 5 and 50
let num4 = 5;
while (num4 <= 50) {
    if ((num4 % 3 === 0) && (num4 % 5 === 0)) {
        console.log(num4);
    }
    num4++;
}

