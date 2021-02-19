const items = document.querySelectorAll(".gallery .item"),
    nextBtn = document.querySelector("#nextBtn"),
    prevBtn = document.querySelector("#prevBtn");

let currentIndex = 0;

//Option 1

nextBtn.onclick = function() {
    items[currentIndex].style.display = "none";
    currentIndex++;
    console.log("Current index: " + currentIndex);
    if (currentIndex === items.length) {
        currentIndex = 0;
    }
    items[currentIndex].style.display = "block";
};

prevBtn.onclick = function() {
    items[currentIndex].style.display = "none";
    currentIndex--;
    console.log("Current index: " + currentIndex);
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }
    items[currentIndex].style.display = "block";
};

// PALINDROME
const inputText = document.querySelector("#inputText"),
    checkBtn = document.querySelector("#checkBtn"),
    result = document.querySelector("#result");

function isPalindrome(sentence) {
    sentence = sentence.toString().toLowerCase().replace(/ /g, "");
    for (let i = 0, j = sentence.length - 1; i < j; i++, j--) {
        if (sentence[i] != sentence[j]) {
            return false;
        }
    }
    return true;
}

checkBtn.onclick = function() {
    if (isPalindrome(inputText.value)) {
        result.innerHTML = "Is palindrome!";
        result.style.color = "green";
    } else {
        result.innerHTML = "Not a palindrome!";
        result.style.color = "tomato";
    }
    return result;
};