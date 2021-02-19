const cards = document.querySelectorAll(".card");

/* Option 1 - works!
for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = toggleBorder;
}
*/

// Option 2 - works!
//cards.forEach((btn) => (btn.onclick = toggleBorder));

cards.forEach(function(btn) {
    btn.onclick = toggleBorder;
});

/*
function toggleBorder(event) {
    event.target.classList.toggle("my-border"); // WORKS !!!! classList imeet svojstvo perekljuchenija
}
*/

function toggleBorder() {
    this.classList.toggle("my-border");
}

// set interval sluchajnim obrazom vibiraet element i delaet emu ramku

setInterval(function() {
    const rnd = parseInt(Math.random() * cards.length);
    //cards[rnd].classList.toggle('my-border');
    toggleBorder.call(cards[rnd]);
}, 500);