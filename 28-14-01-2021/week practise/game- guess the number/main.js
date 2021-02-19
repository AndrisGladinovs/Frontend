// Guess the number from 1 to 100

const min = 1;
const max = 100;
let tryAmount = 5;

const secretNumber = Math.floor(min + Math.random() * (max - min + 1));
console.log(secretNumber);

let userInput = prompt(
    `Enter your number from ${min} to ${max} \n You have maximum ${tryAmount} attempts`
);
userInput = parseInt(userInput);

do {
    alert(
        `Incorrect input. Enter number from ${min} to ${max} \n You have maximum ${tryAmount} attempts`
    );
} while (
    userInput == "" ||
    userInput == null ||
    userInput == undefined ||
    userInput < min ||
    userInput > max
);

for (let tries = 1; tries <= tryAmount; tries++) {
    if (userInput == secretNumber) {
        alert(`Correct. You won! The number was ${secretNumber}`);
        break;
    } else if (userInput > secretNumber) {
        alert(`My number is smaller! You have ${tryAmount - tries} attempts more`);
    } else if (userInput < secretNumber) {
        alert(`My number is bigger! You have ${tryAmount - tries} attempts more`);
    }
    if (tries != tryAmount) {
        alert(`Try again. You have ${tryAmount - tries} attempts more`);
        userInput = +prompt("Enter your next number: ");
    }
    if (tries >= tryAmount) {
        alert(
            `You have lost. No attempts more! \n Correct number was ${secretNumber}`
        );
    }
}