const items = document.querySelectorAll(".gallery .item"),
    prevBtn = document.querySelector("#prevBtn"),
    nextBtn = document.querySelector("#nextBtn");

let currentIndex = 0;

// teacher solution

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