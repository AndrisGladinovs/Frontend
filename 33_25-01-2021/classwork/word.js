const info = document.querySelector("#info"),
    userAnswer = document.querySelector("#userAnswer"),
    inputBtn = document.querySelector("#button"),
    box = document.querySelector(".box"),
    letter = document.createElement("input"), // <input> lezit uzhe
    checkBtn = document.createElement("a");

// apple     - - - - -    nuzhen massiv

let answerArray = [], // eto massiv otveta klienta
    word,
    remainingLetters,
    inputLetter;

function getAnswerArray() {
    const answerArray = []; // eto massiv s tire
    for (let i = 0; i < userAnswer.value.length; i++) {
        answerArray[i] = "-";
    }
    return answerArray;
}

function checkLetter(word, letter) {
    let letterContains = false;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter && answerArray[i] === "-") {
            answerArray[i] = letter;
            remainingLetters--;
            letterContains = true;
        }
    }
    return letterContains; // esli bukva estj vernjotsja true, esli net to false
}

function startGame() {
    word = userAnswer.value;
    if (!word) alert("enter a word, please");
    // esli budet 0 simvolov, to budet False i pojavitsja alert
    else {
        remainingLetters = word.length;
        answerArray = getAnswerArray();
        info.innerHTML = `Your word has ${
      answerArray.length
    } letters<br> <p style= 'font-size: 48px;'>${answerArray.join(
      ""
    )}</p><br> Enter a letter`;
        userAnswer.remove();
        inputBtn.remove();
        letter.type = "text";
        letter.setAttribute("id", "letter");
        box.append(letter);
        checkBtn.href = "#";
        checkBtn.innerText = "check"; // bez tegov bez nichego, prosto tekst
        checkBtn.id = "checkBtn";
        box.append(checkBtn);
    }
}

function playGame() {
    inputLetter = letter.value;
    if (checkLetter(word, inputLetter)) {
        info.innerHTML = `Super!<br> <p style= 'font-size: 48px;'>${answerArray.join(
      ""
    )}</p><br> one more letter?`;
    }
    if (remainingLetters === 0) {
        info.innerHTML = `You won! <br> <p style= 'font-size: 48px;'>${answerArray.join(
      ""
    )}</p><br> Game over! `;
        letter.remove();
        checkBtn.remove();
    }
    letter.value = "";
}

inputBtn.addEventListener("click", startGame); // tut multiple tasking, .onclick delaet toljko odno dejstvie

checkBtn.addEventListener("click", playGame);