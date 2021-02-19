const guessNumber = parseInt(Math.random() * 100);
console.log(guessNumber);
let userReply = +prompt("Guess the number from 1 to 100");
let maxTryCount = 3;

for (var tryCount = 1; tryCount <= maxTryCount; tryCount++) {
    if (guessNumber == userReply) {
        alert(`You won! Number was ${guessNumber}`);
    } else if (userReply > guessNumber) {
        alert("Your number is too big");
    } else if (userReply < guessNumber) {
        alert("Yout number is too small");
    }
    if (tryCount != maxTryCount) {
        userReply = +prompt(
            `Try again. \n You have ${maxTryCount - tryCount} attempts more`
        );
    }
}
if (tryCount >= maxTryCount) {
    alert(`Game over. Correct number was ${guessNumber}`);
}