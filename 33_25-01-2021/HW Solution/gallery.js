const items = document.querySelectorAll(".gallery .item"),
    nextBtn = document.querySelector("#nextBtn"),
    prevBtn = document.querySelector("#prevBtn");

let currentIndex = 0;

//Option 1

nextBtn.onclick = function() {
    items[currentIndex].style.display = "none";
    currentIndex++;
    if (currentIndex === items.length) {
        currentIndex = 0;
    }
    items[currentIndex].style.display = "block";
};

prevBtn.onclick = function() {
    items[currentIndex--].style.display = "none";
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }
    items[currentIndex].style.display = "block";
};

//Option 2
/*
nextBtn.onclick = function() {
    items[currentIndex++].style.display = "none";
    items[currentIndex].style.display = "block";
};
*/