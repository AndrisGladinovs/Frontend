const numbers = fillArrayRandomNumbers(5, 100);
//const randomIndex = getRandomRangeNumber(numbers.length); // 0 1 2 3 4
const maxQuestions = 3;
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
    alert("Remember the numbers and their order: " + numbers);
}

function getUserAnswer(number) {
    return +prompt(`What was the ${number} number?`);
}

function checkAnswer(number, userAnswer) {
    if (userAnswer == number) {
        alert("Correct!");
    } else {
        alert("Wrong. Number was " + number);
        checkError = false;
    }
}

/*
showMessage(numbers);
const firstAnswer = getUserAnswer(1);
checkAnswer(numbers[0], firstAnswer);

const secondAnswer = getUserAnswer(numbers.length);
checkAnswer(numbers[numbers.length - 1], secondAnswer);

const thirdAnswer = getUserAnswer(randomIndex + 1);
checkAnswer(numbers[randomIndex], thirdAnswer);
*/

function startGame() {
    showMessage(numbers);
    for (let i = 0; i < maxQuestions; i++) {
        const randomIndex = getRandomRangeNumber(numbers.length); // 0 1 2 3 4
        const userAnswer = getUserAnswer(randomIndex + 1);
        checkAnswer(numbers[randomIndex], userAnswer);
    }
    if (checkError) alert("You have a great memory!");
}

startGame();