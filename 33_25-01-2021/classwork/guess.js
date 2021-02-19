const input = document.querySelector("#userAnswer"),
    checkBtn = document.querySelector("#button"),
    repeatBtn = document.querySelector("#repeatBtn"),
    maxTryCount = 5;

let tryCount = 0,
    guessNumber = parseInt(Math.random() * 101);

function changeInfo(text) {
    document.querySelector("#info").innerHTML = text;
}

function hide(item) {
    item.style.display = "none";
}

hide(repeatBtn);

function show(item) {
    item.style.display = "block";
}

function gameResult(text) {
    hide(checkBtn);
    hide(input);
    changeInfo(text);
    show(repeatBtn);
}

checkBtn.onclick = function guess() {
    const userAnswer = input.value;
    tryCount++;
    if (userAnswer === "q") {
        hide(checkBtn);
        hide(input);
        changeInfo(`We will play another time`);
        show(repeatBtn);
    } else if (userAnswer == guessNumber) {
        hide(checkBtn);
        hide(input);
        changeInfo("You won!");
        show(repeatBtn);
    } else if (tryCount === maxTryCount) {
        hide(checkBtn);
        hide(input);
        changeInfo(`You have lost!( <br> Number was ${guessNumber}`);
        show(repeatBtn);
    } else if (userAnswer > guessNumber) {
        changeInfo(
            `The number is smaller <br> Try again. You have ${
        maxTryCount - tryCount
      } attempts more`
        );
        input.value = "";
    } else if (userAnswer < guessNumber) {
        changeInfo(
            `The number is bigger <br> Try again. You have ${
        maxTryCount - tryCount
      } attempts more`
        );
        input.value = "";
    }
};

repeatBtn.onclick = function() {
    guessNumber = parseInt(Math.random() * 101);
    tryCount = 0;
    input.value = "";
    hide(repeatBtn);
    show(checkBtn);
    show(input);
    changeInfo(`Guess number from 0 to 100 <br> To exit enter 'q'`);
};