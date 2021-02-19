// Find out the number from 1 to 100. You have just 5 attempts

let min = 1;
let max = 100;
let maxTry = 2;

const secretNumber = Math.floor(min + Math.random() * (max - min + 1));
console.log(secretNumber);

let userAnswer = prompt(
    "Guess the number from " +
    min +
    " to " +
    max +
    " You have " +
    maxTry +
    " attempts"
);

userAnswer = parseInt(userAnswer);
//console.log(userAnswer);

for (var tries = 1; tries <= maxTry; tries++) {
    if (userAnswer == secretNumber) {
        alert("Congratulations, you won. The number was " + secretNumber);
        break;
    } else if (userAnswer > secretNumber) {
        alert(`Number is too big. You have ${maxTry - tries} attempts more`);
    } else if (userAnswer < secretNumber) {
        alert(`Number is too small. You have ${maxTry - tries} attempts more`);
    }
    if (tries != maxTry) {
        alert(`Try again. You have ${maxTry - tries} attempts more`);
        userAnswer = +prompt("Enter your next number");
    }
    if (tries > maxTry) {
        alert("You have lost. No attempts more. Correct number was" + secretNumber);
    }
}