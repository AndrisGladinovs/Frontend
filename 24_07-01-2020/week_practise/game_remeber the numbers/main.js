// Game remember numbers. Memory game

// let arr = new Array('Riga', 'Berlin', 'Moscow');
// let arr2 = new Array(1,2,3,4);  vivedit massiv iz etih 4 elementov
// lett arr3 = new Array(4);  sozdast massiv s dlinj 4 !!!!!!!!

// arr.length = 5;
// console.log(arr);

const numbers = [];

for (let i = 0; i < 5; i++) {
    let randomNumber = parseInt(Math.random() * 100);
    numbers.push(randomNumber);
}
console.log(numbers);

alert("Remember the numbers and their order: " + numbers);

let userAnswer = +prompt("What was the first number?");
if (userAnswer == numbers[0]) {
    alert("Correct!");
} else {
    alert("Wrong. Number was " + numbers[0]);
}

userAnswer = +prompt("What was the last number?");

if (userAnswer == numbers[numbers.length - 1]) {
    alert("Correct!");
} else {
    alert("Wrong. Number was " + numbers[numbers.length - 1]);
}

// stavim random indeks chisla (Neprimer kakim bilo vtoroe, tretje ili chetvertoe chislo))

let randomIndex = parseInt(Math.random() * numbers.length); // 0 1 2 3 4
userAnswer = +prompt(`What was the ${randomIndex + 1} number?`);

if (userAnswer == numbers[randomIndex]) {
    alert("Correct!");
} else {
    alert("Wrong. Number was " + numbers[randomIndex]);
}