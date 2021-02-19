const guessNumber = parseInt(Math.random() * 100);
console.log(guessNumber);
let userReply = +prompt("Guess the number from 1 to 100");
let maxTryCount = 3;

for (var tryCount = 1; tryCount <= maxTryCount; tryCount++) {
    if (guessNumber == userReply) {
        alert("You won! Correct");
        break;
    } else if (userReply > guessNumber) {
        alert("Number is too big. Try again");
    } else if (userReply < guessNumber) {
        alert("Number is too small. Try again");
    }
    if (tryCount != maxTryCount) {
        userReply = +prompt(
            `Try again. Enter your number.\n You have ${
        maxTryCount - tryCount
      } attempts more`
        );
    }
}

if (tryCount >= maxTryCount) {
    alert(`Game over. Correct number was ${guessNumber}`);
}