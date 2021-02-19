const timerInput = document.querySelector("#timerInput"),
    result = document.querySelector("#result"),
    startBtn = document.querySelector("#startBtn"),
    stopBtn = document.querySelector("#stopBtn");

result.style.display = "none";

const timer = new Timer(0, onUpdateCountHandler, onStopCountHandler); // {count: 0, interval: null}
// v konstruktore stoit count. Peredajom objektu znachenie count 0

startBtn.onclick = function() {
    const input = parseInt(timerInput.value);
    timer.count = input;
    timer.start();
    timerInput.style.display = "none";
    result.style.display = "block";
};

function onUpdateCountHandler(count) {
    result.innerHTML = count;
}

function onStopCountHandler(count) {
    timerInput.value = count;
    result.style.display = "none";
    timerInput.style.display = "block";
}

//stopBtn.onclick = timer.stop(); Doest work!!!

/* Also works!!!
stopBtn.onclick = function() {
    timer.stop();
};
*/

stopBtn.onclick = timer.stop.bind(timer); // better option