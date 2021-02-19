const btnClickCount = document.querySelector(".click_me"),
    textCount = document.querySelector(".clickCount"),
    btn15 = document.querySelector(".btn_15"),
    btn25 = document.querySelector(".btn_25"),
    btn35 = document.querySelector(".btn_35"),
    text1 = document.querySelector(".text_first"),
    btn_red = document.querySelector(".btn_red"),
    btn_green = document.querySelector(".btn_green"),
    btn_blue = document.querySelector(".btn_blue"),
    allBtnsColor = document.querySelectorAll(".btns_colors buttons"),
    textTwo = document.querySelector(".loremTwo"),
    btnSetSize = document.querySelector(".setSize"),
    btnInputColor = document.querySelector(".setColor"),
    inputSize = document.querySelector(".inputSize"),
    btnAdd = document.querySelector(".add"),
    btnMinus = document.querySelector(".sub"),
    btnMulti = document.querySelector(".multi"),
    btnDiv = document.querySelector(".div"),
    btnPalindrome = document.querySelector(".check");

btn15.style.fontWeight = "300";
btn25.style.fontWeight = "600";
btn35.style.fontWeight = "900";

// *******************  TASK 4 ***************************

let count = 0;
btnClickCount.onclick = function() {
    count += 1;
    textCount.textContent = "Clicks: " + count;
};

btnClickCount.onmouseover = function() {
    btnClickCount.style.backgroundColor = "rgb(184, 107, 119)";
};

btnClickCount.onmouseout = function() {
    btnClickCount.style.cssText = "inherit";
};

//****************** TASK END ************************

//****************** Task 1 **************************
// to change font-size and color of the text.
// if color button is active show the relevant color ( btn_red = background red). If user clicks on the button second time, button went to innactive mode and has INHERIT color (original button color)

let redClickCount = 0;
let greenClickCount = 0;
let blueClickCount = 0;
let isActive = false;

btn15.onclick = function() {
    text1.style.fontSize = "15px";
};

btn25.onclick = function() {
    text1.style.fontSize = "25px";
};

btn35.onclick = function() {
    text1.style.fontSize = "35px";
};

btn_red.onclick = function() {
    redClickCount += 1;
    text1.style.cssText = "color: red;";
    btn_red.style.backgroundColor = "rgb(255,0,0)";
    if (redClickCount % 2 != 0) {
        btn_red.style.backgroundColor = "rgb(255,0,0)";
        isActive = true;
    } else {
        btn_red.style.backgroundColor = "inherit";
        isActive = false;
    }
};

btn_green.onclick = function() {
    greenClickCount += 1;
    text1.style.cssText = "color: green";
    btn_green.style.backgroundColor = "rgb(34,139,34)";
    if (greenClickCount % 2 != 0) {
        btn_green.style.backgroundColor = "rgb(34,139,34)";
        isActive = true;
    } else {
        btn_green.style.backgroundColor = "inherit";
        isActive = false;
    }
};

btn_blue.onclick = function() {
    blueClickCount += 1;
    text1.style.cssText = "color: blue";
    btn_blue.style.backgroundColor = "rgb(65,105,225)";
    if (blueClickCount % 2 != 0) {
        btn_blue.style.backgroundColor = "rgb(65,105,225)";
        isActive = true;
    } else {
        btn_blue.style.backgroundColor = "inherit";
        isActive = false;
    }
};

// PLEASE HELP WITH THIS CODE !!!!! DOESNT WORK

function checkActive() {
    if (btn_blue == isActive) {
        btn_red.style.backgroundColor == "inherit" &&
            btn_green.style.backgroundColor == "inherit";
    } else if (btn_red == isActive) {
        btn_blue.style.backgroundColor == "inherit" &&
            btn_green.style.backgroundColor == "inherit";
    } else if (btn_green == isActive) {
        btn_blue.style.backgroundColor == "inherit" &&
            btn_red.style.backgroundColor == "inherit";
    } else {
        allBtnsColor.style.backgroundColor == "inherit";
    }
}

// Task 1 (extra). Hover for the choosen button

btn15.onmouseover = function() {
    btn15.style.backgroundColor = "rgb(184, 107, 119)";
    btn15.style.fontWeight = "300";
};

btn15.onmouseout = function() {
    btn15.style.cssText = "inherit";
    btn15.style.fontWeight = "300";
};

btn25.onmouseover = function() {
    btn25.style.backgroundColor = "rgb(184, 107, 119)";
    btn25.style.fontWeight = "600";
};

btn25.onmouseout = function() {
    btn25.style.cssText = "inherit";
    btn25.style.fontWeight = "600";
};

btn35.onmouseover = function() {
    btn35.style.backgroundColor = "rgb(184, 107, 119)";
    btn35.style.fontWeight = "900";
};

btn35.onmouseout = function() {
    btn35.style.cssText = "inherit";
    btn35.style.fontWeight = "900";
};

// //****************** TASK 1 END ************************

// *******************  TASK 2 ***************************

/*btnSetSize.onclick = function() {
    textTwo.style.fontSize = "inputSize.value";
};
*/

/*function changeTextSize() {
    var input = document.querySelector(".input").value;

    textTwo.style.fontSize = input + "px";
}

*/

btnSetSize.onclick = function() {
    var input = document.querySelector(".input").value;
    textTwo.style.fontSize = input + "px";
};

btnInputColor.onclick = function() {
    textTwo.style.color = document.querySelector(".inputColor").value;
};

// *******************  TASK 3 Calculator ***************************

/*btnAdd.onclick = function() {
    const inputA = document.querySelector("#sumA").value;
    const inputB = document.querySelector("#sumB").value;
    document.querySelector("#sumInput").textContent = `Sum: §{inputA}`;
};
*/

btnAdd.onclick = function() {
    const inputA = document.querySelector(".sumA").value,
        inputB = document.querySelector(".sumB").value;
    const sumResult = parseInt(inputA) + parseInt(inputB);
    document.querySelector(".sumInput").textContent = ` \t ${sumResult}`;
};

btnMinus.onclick = function() {
    const inputA = document.querySelector(".minusA").value,
        inputB = document.querySelector(".minusB").value;
    const minusResult = parseInt(inputA) - parseInt(inputB);
    document.querySelector(".minusInput").textContent = ` \t ${minusResult}`;
};

btnMulti.onclick = function() {
    const inputA = document.querySelector(".multiA").value,
        inputB = document.querySelector(".multiB").value;
    const multiResult = Number(inputA * inputB);
    document.querySelector(".multiInput").textContent = ` \t ${multiResult}`;
};

btnDiv.onclick = function() {
    const inputA = document.querySelector(".divA").value,
        inputB = document.querySelector(".divB").value;
    if (+inputB == 0) {
        document.querySelector(
            ".divInput"
        ).textContent = ` Error. You can not divide number to 0`;
    } else {
        const divResult = Number(inputA) / Number(inputB);
        document.querySelector(".divInput").textContent = ` \t ${divResult}`;
    }
};

// *******************  TASK 5 - Palindrome ***************************

btnPalindrome.onclick = function() {
    let stringPal = document.querySelector(".inputPalindrome");
    stringPal = stringPal.toString().toLowerCase().replace(/ /g, "");
    let result = document.querySelector(".resultPalindrome");

    if (stringPal === stringPal.split("").reverse().join("")) {
        result.textContent = "Is a palindrome!";
    } else if (stringPal != stringPal.split("").reverse().join("")) {
        result.textContent = "Not palindrome!";
    }
};