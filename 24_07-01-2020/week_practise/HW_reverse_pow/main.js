// Task 1
// Find pow of numbers (3,2) and (5,3))
// line method

let a = 3;
let b = 2;
const result = (a, b) => a ** b;
console.log(`POW of number ${a} in number ${b} result is ` + result(a, b));

// traditional and longer way with for loops
const a = 5;
const b = 3;
let result = 1;

function getPow(a, b) {
    for (let i = 1; i <= b; i++) {
        result *= a;
    }
    return result;
}
console.log(getPow(`Pow of number ${a} in ${b} is: ` + getPow(a, b)));

// Task 2
// find a sum of array elements
// option with function and for loop

let arr = [2, 3, 4, 5, 6]; // arr.length = 5
let sum = 0;

function getArraySum(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("Sum of all array elements is: " + getArraySum(arr));

// option with foreach loop
let arr = [2, 3, 4, 5, 6]; // arr.length = 5
let sum = 0;

function findArraySum(arr) {
    for (element of arr) {
        // in objects for (key in object)
        sum += element;
    }
    return sum;
}
console.log(findArraySum(arr));

// Task 3 "Reverse array"
// with method PUSH

let array = [2, 3, 4, 5, 6];

function reverseArray(arr) {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}
console.log(reverseArray(array));

// method with just for loop

let numbers = [5, 6, 7, 8, 9];

function makeReversed(numbers) {
    let reversedArray = [];
    for (let i = 0; i <= numbers.length - 1; i++) {
        reversedArray[i] = numbers[numbers.length - 1 - i];
    }
    return reversedArray;
}
makeReversed(numbers);
console.log("A new reversed array now is: [" + makeReversed(numbers) + "]");

// opcija s delelniem dlini na 2
let numbers = [5, 6, 7, 8, 9];

function reverseArray(array) {
    for (let i = 0; i < array.length / 2; i++) {
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
}
reverseArray(numbers);
console.log(numbers);