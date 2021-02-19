// Task to quess the number from 1 to 100. You have just 5 attempts
const guessNumber = parseInt(Math.random() * 100);
while (true) {
    let userAnswer = prompt(
        "Guess my secret number from 1 to 100. You have just 5 attempts \n to exit enter 'q' "
    );
    if (userAnswer == "q") {
        break;
    }
    userAnswer = parseInt(userAnswer);
    let maxTryCount = 3;

    for (var tryCount = 1; tryCount <= maxTryCount; tryCount++) {
        if (guessNumber == userAnswer) {
            alert("You win!");
            break;
        } else if (userAnswer > guessNumber) {
            alert("too big. Try again");
        } else if (userAnswer < guessNumber) {
            alert("too small. Try again");
        }
        if (tryCount != maxTryCount)
            userAnswer = +prompt(
                `try again. You have ${maxTryCount - tryCount} try more`
            );
    }
    if (tryCount > maxTryCount) {
        alert(`You have lost! No attempts more. Correct number was ${guessNumber}`);
    }
}