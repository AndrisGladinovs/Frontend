const input = document.querySelector("#myInput");

input.onchange = function(event) {
    // kak toljko ubiraem fokus/mishku s elementa, nachinaet srabativatj
    console.log(event.target.value);
};

/*input.oninput = function(event) {
    // srazu otslezhivaet kazhdij simvol i vivodit v kolonku
    console.log(event.target.value);
};
*/

/* abba 
a
ab
abb
abba
*/

/*

input.onfocus = handlerEvent; // kazhdij raz kogda zahozhu na pole, proishodit sobitie i v console.log pojavljaetsja infa gde i kak proizoshla

input.onblur = handlerEvent; // sobitie proishodit, kogda mi vihodim iz polja elementa

input.focus(); // srazu input aktivnij i vnutri stoit kursor. Rabotaet dlja input

function handlerEvent(e) {
    // zahvativaetsja sobitie
    e.preventDefault(e); // otmenjajju primenenija po umolchaniju. Horoso dlja FORMS
    //console.log(e);
    console.log(e.target.elements); // posmotretj vse dannie, kotorie vvodjatsja
    console.log(e.target.email.value); // pokazhi formu so znacheniem email
}

input.onkeydown = function(e) {
    // kogda nazhimaet knopku
    if (e.keyCode === 13) {
        console.log(e.target.value);
    }
};
*/

//************************* FORMS ****************** */

/*
const form = document.querySelector("#myForm"),
    link = document.querySelector("a");

form.onsubmit = handlerEvent; // sto proishodit, kuda perevodit nas pri ispolnenii formi

link.onclick = function(e) {
    e.preventDefault(e);
    alert("no amazon");
};

console.log(document.forms); // vsja kollekcija form, kotoraja estj na stranice. Psevdomassiv
console.log(document.forms[0]);
console.log(document.forms.subscribe); // mozhno i po imeni dobiratsja

*/