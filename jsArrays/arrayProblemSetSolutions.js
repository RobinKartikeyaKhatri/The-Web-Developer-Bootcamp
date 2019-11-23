// function printReverse (arr) {
//     for (let i = arr.length-1; i >= 0; i--) {
//         console.log(arr[i]);
//     }
// }

const printReverse = (arr) => {
    for (let i = arr.length-1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverse([1, 2, 3, 4,]);
printReverse(["a", "b", "c"]);



const isUniform = arr => {
    let first = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}

console.log(isUniform([2, 1, 2]));





function sumArray(arr) {
    var result = 0;
    arr.forEach(function (ele) {
        result += ele;
    });
    return result;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5, 100]));





const max = arr => {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(max([1, 2, 3, 123, 45678]));