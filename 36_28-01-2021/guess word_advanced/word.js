const info = document.querySelector("#info"),
    userAnswer = document.querySelector("#userAnswer"),
    inputBtn = document.querySelector("#button"),
    box = document.querySelector(".box"),
    letter = document.createElement("input"),
    checkBtn = document.createElement("a"); // knopka kak ssilka

// apple  - - - - -
let answerArray = [], //massiv v kotorom budet slovo raskladivatsja po bukvam
    word,
    remainingLetters,
    inputLetter;

function getAnswerArray() {
    const answerArray = [];
    for (let i = 0; i < userAnswer.value.length; i++) {
        answerArray[i] = "-";
    }
    return answerArray;
}

function checkLetter(word, letter) {
    // proverjaem soderzhitsja li takaja bukva v slove ili net
    let letterContains = false;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter && answerArray[i] === "-") {
            answerArray[i] = letter;
            letterContains = true;
            remainingLetters--;
        }
    }
    return letterContains;
}

function startGame() {
    word = userAnswer.value.toLowerCase();
    if (!word) alert("enter a word, please");
    // pustaja stroka NULL
    else {
        remainingLetters = word.length;
        answerArray = getAnswerArray();
        info.innerHTML = `Your word has ${
      word.length
    } letters <br> <p style= "font-size: 48px">${answerArray.join(
      " "
    )}</p> <br> Enter a letter`;
        userAnswer.remove();
        inputBtn.remove();
        letter.type = "text";
        letter.setAttribute("id", "letter");
        box.append(letter);
        checkBtn.href = "#";
        checkBtn.innerText = "check";
        checkBtn.id = "checkBtn";
        box.append(checkBtn);
    }
}

function playGame() {
    // obrabativaem sto prihodit v kachestve bukvi
    inputLetter = letter.value;
    if (checkLetter(word, inputLetter)) {
        info.innerHTML = `Super! <br> <p style= "font-size: 48px">${answerArray.join(
      " "
    )}</p> <br> one more letter?`;
        if (remainingLetters == 0) {
            info.innerHTML = `You have won! The correct word was <b>${word}</b>`;
            letter.remove();
            checkBtn.remove();
        }
        letter.value = "";
    } else {
        info.innerHTML = `No such letter! <br> <p style= "font-size: 48px">${answerArray.join(
      " "
    )}</p> <br> Try again!`;
        letter.value = "";
    }
}

inputBtn.addEventListener("click", startGame);
inputBtn.addEventListener("click", function() {
    console.log("game start");
});

checkBtn.addEventListener("click", playGame);