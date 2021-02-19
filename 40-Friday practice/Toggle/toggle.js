const clickBtn = document.querySelectorAll(".clickBtn");

for (let i = 0; i < clickBtn.length; i++) {
    clickBtn[i].onclick = toggleButton;
}

function toggleButton(event) {
    //this.classList.toggle("my-button");
    event.target.classList.toggle("my-button");
}

// random
setInterval(function() {
    const rnd = Math.floor(Math.random() * clickBtn.length);
    clickBtn[rnd].classList.toggle("my-button");
}, 1000);