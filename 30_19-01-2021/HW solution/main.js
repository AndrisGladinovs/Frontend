//******************* */ Task 01 *******************
// get a sum of the all numbers till n <10

function sumDigitalNumbers(number) {
    if (number / 10 < 1) {
        return number;
    }
    return sumDigitalNumbers(Math.floor(number / 10) + (number % 10));
}

console.log(sumDigitalNumber(1234568));

function sumDigitalNumber(num) {
    return num < 10 ?
        num :
        sumDigitalNumber(
            num
            .toString()
            .split("")
            .reduce((sum, number) => sum + parseInt(number), 0)
        );
}

console.log(sumDigitalNumber(1234568));

//*********************** Task 2 ******************
// get dividors
// function getDivisors(12 --> [2, 3, 4, 6]) divisors to save in ARRAY

function getDivisors(input) {
    let divisors = [];
    for (let i = 0; i < input; i++) {
        if (input % i == 0) {
            // can also use Math.isInteger(number / i)
            divisors.push(i);
        }
    }
    return divisors.length == 0 ? `${input} is a prime number` : divisors;
}

console.log(getDivisors(12));

//********************** Task 3 ********************
// make an output with names who has the length 4
// const names = ["Kolya", "Mark", "Misha M", "Anna", "1234"] --> ['Mark', 'Anna', '1234'];

const names = ["Kolya", "Mark", "Misha M", "Anna", "1234"];

function getArrayNames(array) {
    let newNames = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length == 4) {
            newNames.push(array[i]);
        }
    }
    return newNames;
}

console.log(getArrayNames(names));

// Option 2

const names = ["Kolya", "Mark", "Misha M", "Anna", "1234"];

function getArrayNames2(array) {
    return array.filter((item) => item.length == 4);
}

console.log(getArrayNames2(names));