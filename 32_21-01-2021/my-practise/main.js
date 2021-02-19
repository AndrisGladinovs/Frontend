const inputText = document.querySelector("#inpText"),
    checkBtn = document.querySelector("#checkButton"),
    result = document.querySelector("#result");

function isPalindrome(value) {
    value = value.toString().toLowerCase().replace(/ /g, "");
    console.log(value);

    for (let i = 0, j = value.length - 1; i < j; i++, j--) {
        if (value[i] != value[j]) {
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
        result.innerHTML = "Not palindrome";
        result.style.color = "red";
    }
};