// **************** Task 1 *********************
//function powerNumber(3,2) -> 9
//function powerNumber(5,3) -> 125

//Option 1

function powerNumber(a, b) {
    return Math.pow(a, b);
}
console.log(powerNumber(3, 2));

// Option 2

let a = 5;
let b = 3;

function powerNumber() {
    let result = a ** b;
    return result;
}

console.log(powerNumber(a, b));

//************************** TASK 2 ************************ */
// const numbers = [2,3,4,5,6];
//function sumNumbers(numbers) -> 20;

let sum = 0;
const numbers = [2, 3, 4, 5, 6];

function sumNumbers(numbers) {
    for (let i = 0; i <= numbers.length - 1; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumNumbers(numbers));

//********************* TASK 3 ***************************** */
// const numbers = [2,3,4,5,6];
//function reversArray(numbers) -> [6,5,4,3,2]

const numbers = [2, 3, 4, 5, 6];

function reverseArray(numbers) {
    let output = new Array(numbers.length);
    for (let i = 0; i < numbers.length; i++) {
        output[i] = numbers[numbers.length - 1 - i];
        //output[output.length - 1 - i] = numbers[i];
    }
    return output;
}
console.log(reverseArray(numbers));