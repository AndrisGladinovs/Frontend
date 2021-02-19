//******************* Events / Sobitija *************** */
// ranjshe v HTML dobavljali sobotija cherez teg elementa

const one = document.querySelector(".one"),
    two = document.querySelector(".two"),
    three = document.querySelector("#three"),
    btnChangeSize = document.querySelector("#size30"),
    topText = document.querySelector(".topText"),
    btnSizeReset = document.querySelector("#size15"),
    btnSend = document.querySelector("#send"),
    mySelect = document.querySelector("#mySelect");

one.onclick = function() {
    console.log("clicked");
    one.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
};

function getRandom() {
    return parseInt(Math.random() * 256);
}

// hotim stobi pri navedenii mishki .two stanovilsja krasnim, a potom snova menjalsja na zeljonij

two.onmouseover = function() {
    two.style.backgroundColor = "red";
};

two.onmouseout = function() {
    two.style.backgroundColor = "green";
};

// tretij hotim stobi umenjshalsja pri navedenii mishki, a pri otvedenii mishki snova stanovilsja v original size

three.onmouseover = function() {
    three.style.cssText = "width: 100px; height: 100px";
};

three.onmouseout = function() {
    three.style.cssText = "width: 200px; height: 200px";
};

// menjaem text font pri nazhatii

btnChangeSize.onclick = function() {
    topText.style.fontSize = "30px";
};

// dobavljaem knopku reset size to original

btnSizeReset.onclick = function() {
    topText.style.fontSize = "1em";
};

// user insert name and surname, click the button SEND and after the button see some text

btnSend.onclick = function() {
    const firstName = document.querySelector("#firstName").value,
        lastName = document.querySelector("#lastName").value;

    document.querySelector(
        "#input"
    ).textContent = `Hello, my name is ${firstName} ${lastName}`;
};

// choose car

mySelect.onchange = function() {
    //kogda sto-to proishodit, otlezhivaet i peredajot funkciju
    document.querySelector("#demo").innerHTML =
        "You have selected " + mySelect.value;

    // const demo = document.querySelector("#demo");
    // demo.innerHTML = "You have selected " + mySelect.value;
};