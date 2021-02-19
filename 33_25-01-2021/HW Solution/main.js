// Task 2

const inpSize = document.querySelector("#inpSize"),
    inpColor = document.querySelector("#inpColor"),
    setSizeBtn = document.querySelector("#setSizeBtn"),
    setColorBtn = document.querySelector("#setColorBtn"),
    bottomText = document.querySelector(".bottomText");

function updateBottomText() {
    bottomText.style = `font-size: ${inpSize.value}px; color: ${inpColor.value}`;
}

setColorBtn.onclick = updateBottomText;
setSizeBtn.onclick = updateBottomText;

// Task 3
// Calculator

const sumInpOp1 = document.querySelector("#sumOp1"),
    sumInpOp2 = document.querySelector("#sumOp2"),
    subInpOp1 = document.querySelector("#subOp1"),
    subInpOp2 = document.querySelector("#subOp2"),
    multiInpOp1 = document.querySelector("#multiOp1"),
    multiInpOp2 = document.querySelector("#multiOp2"),
    divInpOp1 = document.querySelector("#divOp1"),
    divInpOp2 = document.querySelector("#divOp2"),
    addBtn = document.querySelector("#addBtn"),
    subBtn = document.querySelector("#subBtn"),
    multiBtn = document.querySelector("#multiBtn"),
    divBtn = document.querySelector("#divBtn"),
    sumRes = document.querySelector("#sumRes"),
    subRes = document.querySelector("#subRes"),
    multiRes = document.querySelector("#multiRes"),
    divRes = document.querySelector("#divRes");

addBtn.onclick = function() {
    sumRes.innerHTML = Number(sumInpOp1.value) + parseFloat(sumInpOp2.value);
};

subBtn.onclick = function() {
    subRes.innerHTML = subInpOp1.value - subInpOp2.value;
};

multiBtn.onclick = function() {
    multiRes.innerHTML = multiInpOp1.value * multiInpOp2.value;
};

divBtn.onclick = function() {
    divRes.innerHTML = divInpOp1.value / divInpOp2.value;
};

// Task 5
// Palindrome

const inputText = document.querySelector("#inpText"),
    checkBtn = document.querySelector("#checkButton"),
    result = document.querySelector("#result");

function isPalindrom(value) {
    value = value.toLowerCase();
    for (let i = 0, j = value.length - 1; i < j; i++, j--) {
        if (value[i] != value[j]) {
            //aslo possible if (value.charAt(i) != value.charAt(j))
            return false;
        }
    }
    return true;
}

checkBtn.onclick = function() {
    if (isPalindrom(inputText.value)) {
        result.innerHTML = "Palindrome!";
        result.style.color = "green";
    } else {
        result.innerHTML = "Not palindrome!";
        result.style.color = "red";
    }
};

/*checkBtn.onclick = function(){
result.innerHTML = isPalindrom(inputText.value) ? 'Palindrome' : 'Not palindrome';
}
*/

// Task 4
// Click button

const counter = document.querySelector("#counter"),
    numberOfClick = document.querySelector("#numberOfClick");

let count = 0;

counter.onclick = function() {
    count++;
    numberOfClick.innerHTML = `click: ${count}`;
};