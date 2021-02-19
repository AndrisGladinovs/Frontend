// Task 4
// vivedite cifri kratnie 3

let num = 12;
for (let i = 1; i <= num; i++) {
    if (i % 3 != 0) continue;
    console.log(i);
}

// Task 5
// poocherjodno vivesti razrjadi vvedjonogo chisla

let input = 521;
let number;
let array = [];

while (input > 0) {
    number = input % 10;
    console.log(number);
    input = parseInt(input / 10);
}

/********************************************************* */
// Task 6
// Prime numbers

let isPrime;
let num = 11;

for (let i = 2; i <= num; i++) {
    isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(i);
}

// Task 7
// Calculator

let firstNum, secondNum, operation;

while (isNaN(firstNum)) {
    firstNum = +prompt("Enter first number");
}

while (isNaN(secondNum)) {
    secondNum = +prompt("Enter second number");
}

operation = prompt("Enter which operation you choose + - / *");

switch (operation) {
    case "+":
        {
            alert(`${firstNum} ${operation} ${secondNum} = ${firstNum + secondNum}`);
            break;
        }
    case "-":
        {
            alert(`${firstNum} ${operation} ${secondNum} = ${firstNum - secondNum}`);
            break;
        }
    case "*":
        {
            alert(`${firstNum} ${operation} ${secondNum} = ${firstNum * secondNum}`);
            break;
        }
    case "/":
        {
            if (secondNum == 0) {
                alert("Error. You can not divide number to 0");
            } else {
                alert(`${firstNum} ${operation} ${secondNum} = ${firstNum / secondNum}`);
                break;
            }
        }
    default:
        {
            alert("Error. Wrong operator.");
        }
}

//******************************************************* */

// Game guess the number with exit mode

/*
const guessNumber = parseInt(Math.random() * 100);
console.log(guessNumber);
let maxTryCount = 3;

while (true) {
    let userReply = prompt("Guess the number from 1 to 100 \n to exit enter 'q'");
    if (userReply == "q") {
        alert(`Number was ${guessNumber}`);
        break;
    }
    userReply = parseInt(userReply);

    if (guessNumber == userReply) {
        alert(`You won! Number was ${guessNumber}`);
        break;
    } else if (userReply > guessNumber) {
        alert("Your number is too big");
    } else if (userReply < guessNumber) {
        alert("Yout number is too small");
    }
    /* if (tryCount != maxTryCount) {
            userReply = +prompt(
                `Try again. \n You have ${maxTryCount - tryCount} attempts more`
            );
        }
    }
    if (tryCount >= maxTryCount) {
        alert(`Game over. Correct number was ${guessNumber}`);
    }
*/