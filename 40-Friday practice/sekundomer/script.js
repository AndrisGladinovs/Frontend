const input = document.querySelector("#inp"),
    startBtn = document.querySelector("#startBtn"),
    stopBtn = document.querySelector("#stopBtn"),
    result = document.querySelector(".result");

input.focus();
let count, i;

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
            clearInterval(i);
            result.innerHTML = "Time is over";
            input.value = "";
        }
    }, 1000);
};

function stopTimer() {
    clearInterval(i);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    input.disabled = false;
    result.innerHTML = count;

    if (count > 0) {
        result.innerHTML = count;
        input.value = count;
    } else {
        clearInterval(i);
        result.innerHTML = "Time is over";
        input.value = "";
        input.focus();
    }
}

stopBtn.onclick = stopTimer;