const image = document.querySelectorAll(".gallery .item"),
    prevBtn = document.querySelector("#prevBtn"),
    nextBtn = document.querySelector("#nextBtn");

currentIndex = 0;

nextBtn.onclick = function() {
    image[currentIndex].style.display = "none";
    currentIndex++;
    if (currentIndex === image.length) {
        currentIndex = 0;
    }
    image[currentIndex].style.display = "block";
};

prevBtn.onclick = function() {
    image[currentIndex].style.display = "none";
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = image.length - 1;
    }
    image[currentIndex].style.display = "block";
};