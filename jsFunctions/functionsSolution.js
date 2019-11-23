// isEven()
const isEven = num => num % 2 === 0 ? true : false;
isEven(3);



// factorial()
const factorial = num => {
    let result = 1;
    for(let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

factorial(4);





// kebabToSnake()
const kebabToSnake = str => {
   const newStr = str.replace(/-/g , "_");
   return newStr;
}

kebabToSnake("robin-kartikeya-khatri");