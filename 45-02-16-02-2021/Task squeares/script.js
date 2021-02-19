/*
upLoad();

function upLoad() {
    //pri pervoj zagruzke budet otobrazhatsja toljko knopka
    const btn = document.createElement("button");
    const btnDiv = document.querySelector(".btnDiv");
    btn.innerHTML = "click me";
    // document.querySelector(".wrapper").append(btnDiv);
    btnDiv.append(btn);
    btn.onclick = onClickHandler;

    const colors = ["aquamarine", "blue", "lime"]; // massiv cvetov
    localStorage.setItem("colors", JSON.stringify(colors)); // Result: ["aquamarine","blue","lime"]

    // localStorage.setItem("colors", colors); //key budet colors, a znachenie budet: aquamarine,blue,lime
    // localStorage.setItem('colors', ["aquamarine", "blue", "lime"]); ALSO GOOD, vivod v vide stroki: aquamarine,blue,lime
}

function onClickHandler() {
    const wrapper = document.querySelector(".wrapper");
    const colors = JSON.parse(localStorage.getItem("colors")); //vernjot massiv, a ne stroku. Very good!
    for (let i = 0; i < 3; i++) {
        const div = document.createElement("div");
        div.className = "box";
        div.style.backgroundColor = colors[i];
        wrapper.prepend(div);
    }
}

// obrashaemsja k local storage. U engo budet hranitsja massiv cvetov. Po kliku cvet budet menjatsja u kvadratov

// console.log(localStorage.getItem("colors")); // vozvrashaetsja stroka
console.log(JSON.parse(localStorage.getItem("colors"))); // vozvrashaetsja massiv
*/

// Second Option, better one

upLoad();

function upLoad() {
    renderContent();
    dataBase();
}

function renderContent() {
    const btn = document.createElement("button");
    const btnDiv = document.querySelector(".btnDiv");
    btn.innerHTML = "click me";
    btnDiv.append(btn);
    btn.onclick = onClickHandler;
}

function onClickHandler() {
    const wrapper = document.querySelector(".wrapper");
    const colors = JSON.parse(localStorage.getItem("colors")); //vernjot massiv, a ne stroku. Very good!
    for (let i = 0; i < 3; i++) {
        const div = document.createElement("div");
        div.className = "box";
        div.style.backgroundColor = colors[i];
        wrapper.prepend(div);
    }
}

function dataBase() {
    const colors = ["aquamarine", "blue", "lime"]; // massiv cvetov
    localStorage.setItem("colors", JSON.stringify(colors)); // Result: ["aquamarine","blue","lime"]
}