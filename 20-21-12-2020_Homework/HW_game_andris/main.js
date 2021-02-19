const maxNumber = 10;
let count = 5;
let randomNumber = Math.floor(Math.random() * maxNumber + 1);
let numberofTrials = count;
let isCorrect = false;
let regex = new RegExp("^([0-9])+$");

for (i = 1; i <= count; i++) {
    let isInputOk = false;
    do {
        var userNumber = +prompt(
            "Enter your number from 1 to " +
            maxNumber +
            ". You have " +
            numberofTrials +
            " attempts more."
        );
        if (regex.test(userNumber) && userNumber != 0 && userNumber != null) {
            isInputOk = true;
        } else {
            alert(
                "You did not enter a correct number. Please enter number from 1 to " +
                maxNumber
            );
        }
    } while (!isInputOk);

    if (userNumber == randomNumber) {
        alert("Congratulations, you won! The number was " + randomNumber);
        isCorrect = true;
        break;
    } else if (userNumber < randomNumber) {
        alert(
            "Number is bigger than " +
            userNumber +
            " . You have " +
            numberofTrials +
            " attempts left"
        );
    } else if (userNumber > randomNumber) {
        alert(
            "Number is smaller that " +
            userNumber +
            " . You have " +
            numberofTrials +
            " attempts left"
        );
    } else {
        alert("Unknown error. Please try again");
    }
    numberofTrials--;
    console.log("Number of trials" + numberofTrials);
}
if (!isCorrect) {
    alert("No attempts more. Try again later");
}
/* do {
    let userNumber = +prompt(
        "Enter your number from 1 to " +
        maxNumber +
        ". You have " +
        count +
        " attempts more."
    );
    count--;
} while (userNumber != randomNumber && count != 0);
*/