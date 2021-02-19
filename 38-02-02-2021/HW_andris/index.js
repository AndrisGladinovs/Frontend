const input = document.querySelector("#userInput"),
    btnStart = document.querySelector("#btnStart"),
    btnStop = document.querySelector("#btnStop"),
    result = document.querySelector("#result");

input.focus();
/*
btnStart.onclick = function() {
    if (input.value === "" || input.value === null) {
        alert("Enter a number, please!");
    } else {
        btnStop.className.add = "inactive";
    }
};

btnStop.onclick = function() {
    if (input.value === "" || input.value === null) {
        alert("Enter a number, please!");
    } else {
        btnStart.className.add = "inactive";
    }
};
*/

let userInput = input.value;

btnStop.onmouseover = function() {
    btnStop.style.backgroundColor = "tomato";
};

btnStart.addEventListener(
    "click",
    setInterval(function() {
        userInput.value--;
        userInput.innerHTML = userInput.value;
    }, 1000)
);