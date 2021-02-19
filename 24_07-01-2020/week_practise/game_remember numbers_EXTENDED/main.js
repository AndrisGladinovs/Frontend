// Game remember numbers. Memory game. EXTENDED version

// let arr = new Array('Riga', 'Berlin', 'Moscow');
// let arr2 = new Array(1,2,3,4);  vivedit massiv iz etih 4 elementov
// lett arr3 = new Array(4);  sozdast massiv s dlinj 4 !!!!!!!!

// arr.length = 5;
// console.log(arr);

/* const numbers = []; */
const numbers = fillArrayRandomNumbers(5, 100);
const randomIndex = getRandomRangeNumber(numbers.length); // 0 1 2 3 4
let maxQuestions = 3;
let checkError = true;

function getRandomRangeNumber(range) {
    return parseInt(Math.random() * range);
}

function fillArrayRandomNumbers(length, range) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(getRandomRangeNumber(range));
    }
    return array;
}
console.log(numbers);

function showMessage(numbers) {
    alert("Remember the numbers and their sequence: " + numbers);
}

function getUserAnswear(number) {
    // peredajom nomer elementa, chislo kotorogo hotim uznatj

    return (userAnswer = +prompt(`What was the ${number} number?`));
}

function checkAnswear(number, userAnswer) {
    // elementa chislo nashego massiva
    // otvet poljzovatelja

    if (userAnswer == number) {
        alert("Correct!");
    } else {
        alert("Wrong. Number was " + number);
        checkError = false;
    }
}

// Vizivaem vse metodi

/* 
showMessage(numbers);
const firstAnswear = getUserAnswear(1);
checkAnswear(numbers[0], firstAnswear);

const secondAnswear = getUserAnswear(numbers.length);
checkAnswear(numbers[numbers.length - 1], secondAnswear);

const thirdAnswear = getUserAnswear(randomIndex + 1);
checkAnswear(numbers[(randomIndex, thirdAnswear)]); 
*/

// simplify vizivaem vse metodi

function startGame() {
    showMessage(numbers);
    for (let i = 0; i < maxQuestions; i++) {
        const randomIndex = getRandomRangeNumber(numbers.length);
        const userAnswer = getUserAnswear(randomIndex + 1);
        checkAnswear(numbers[randomIndex], userAnswer);
    }
    if (checkError) {
        alert("You have a great memory!");
    }
}
startGame();