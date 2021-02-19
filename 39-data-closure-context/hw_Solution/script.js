const input = document.querySelector("#inp"),
    startBtn = document.querySelector("#startBtn"),
    stopBtn = document.querySelector("#stopBtn"),
    result = document.querySelector(".result");

let count, i; // global - znachenija hranjatsja tut

input.focus();

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
            //clearInterval(i); uzhe ne nuzhen
            stopTimer();
            result.innerHTML = "Time is over";
            input.value = "";
            input.focus();
        }
    }, 1000); // raz v sekundu umenjshaetsja count
};

function stopTimer() {
    clearInterval(i);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    input.disabled = false;

    result.innerHTML = "Time is stopped";
    input.value = count;
}

stopBtn.onclick = stopTimer;