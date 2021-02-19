const names = ["Ivan", "Anna", "Mariya", "Nikolay", "Petr", "Olga"];

const ul = document.querySelector("#list"),
    addBtn = document.querySelector("#addBtn");

const box = document.querySelector(".box");

//****************************** EVENT ************** */

box.onclick = function(event) {
    // pri kazhdom klike sozdajotsja objekt s koordinatami i polnim putjom
    console.log(event);
    console.log(event.target); // vozvrashaet element na kotorom bilo sovershenno jeto sobitie (v nashem sluchae <div></div>)
};

box.onclick = changeBg; // ne znaju kogda vizovitsja. Poluchaetsja kak link. Kogda budet klik, otpravit po ssilke na nash metod

function changeBg(event) {
    event.target.style.backgroundColor = getRndColor(); // uznaj kakoj element bil vo vremja event click i pomenjaj emu cvet
}

box.addEventListener("click", changeBg); // na kakuju funkciju stavim proslushku s zapisju v istoriju
box.addEventListener("click", changeBg, { once: true }); // srabotaet toljko odin raz. Eto event options
box.addEventListener("click", function() {
    console.log("click");
});

box.removeEventListener("click", changeBg); // otmenjaju eto sobitie. Stobu otmenitj dolzhno vitj imja. Funkciju mozhno otmenitj toljko perezapisav ejo cherez imja peremennoj

//************************************ IMJa s random color background */

addBtn.onclick = function() {
    const randomNumber = getRandom(names.length);
    //ul.innerHTML = ul.innerHTML + `<li>${names[randomNumber]}</li>`; innerHTML pri nazhatii zanovo pererisovivaet uzel znachenijami <li></li>

    // ul.innerHTML +=`<li>${names[randomNumber]}</li>`;

    //ul.append(`<li>${names[randomNumber]}</li>`); // dobavljaet elementi v konec, no pokazhet vsjo s <li></li> kak stroku

    // ul.prepend(`<li>${names[randomNumber]}</li>`);

    // ul.before(`<li>${names[randomNumber]}</li>`); // vstenet pered <ul>, za ul
    //ul.replaceWith(`<li>${names[randomNumber]}</li>`); // zamenit ODIN RAZ ul na li
    // ul.remove(); // udalit

    //ul.insertAdjacentHTML("beforebegin", (`<li>${names[randomNumber]}</li>`)); // do togo kak nachalsja element UL. Vidast vsjo normaljno bez <li></li>
    //ul.insertAdjacentHTML("afterbegin", `<li>${names[randomNumber]}</li>`);
    //ul.insertAdjacentHTML("beforeend", (`<li>${names[randomNumber]}</li>`));

    //let li = document.createElement("li");
    //li.innerHTML = names[randomNumber];
    //li.style.backgroundColor = getRndColor();
    //ul.append(li);

    //let row = createRow(names[randomNumber]);
    //ul.insertAdjacentHTML("afterbegin", row); // rabotaet toljko so strokoj
    ul.append(createRow(names[randomNumber])); // so znacheniem elementa!!!
};

function createRow(name) {
    let li = document.createElement("li"); // v skobkah nado pisatj element, u kotorogo estj tag <li></li>  ul, p, button ..... Prosto Vasya, Petya neljzja napisatj.
    // Sozdast <li></li>
    li.innerHTML = name;
    li.style.backgroundColor = getRndColor();
    li.onclick = function() {
        li.style.backgroundColor = getRndColor();
    };
    // return li.outerHTML; // vernjot prosto stroku , polnostju upakovku s li <li>${names[randomNumber]}</li>
    return li;
}

function getRndColor() {
    return `rgb(${getRandom(256)}, ${getRandom(256)}, ${getRandom(256)})`; //bez probela posle rgb
}

function getRandom(max) {
    return parseInt(Math.random() * max);
}

//************************************* */