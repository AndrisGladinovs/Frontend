const input = document.querySelector("#inp"),
    startBtn = document.querySelector("#startBtn"),
    stopBtn = document.querySelector("#stopBtn"),
    result = document.querySelector(".result");

input.focus();
let count = parseInt(input.value);
let i;

startBtn.onclick = function() {
    count = parseInt(input.value);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    input.disabled = true;
    result.innerHTML = count;

    i = setInterval(function() {
        count--;
        if (count > 0) {
            result.innerHTML = count;
        } else {
            stopTimer();
        }
    }, 1000);
};

function stopTimer() {
    clearInterval(i);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    input.disabled = false;
    if (count > 0) {
        result.innerHTML = count;
        input.value = count;
    } else {
        result.innerHTML = "Times is over";
        input.value = "";
        input.focus();
    }
}

stopBtn.onclick = stopTimer;