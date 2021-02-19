const BASE_URL = "http://jsonplaceholder.typicode.com";

// esli hotim obratitsja k serveru s zaprosom, dolzhni sozdatj objekt, ego zapolnitj i  toljko potom peredatj  na server
// odin zapros, odno soedinenie. Esli hotim novij zapros, to nuzhno sozdavatj novuju peremennuju s novim objektom
let xhr = new XMLHttpRequest();

// otkrivaem soedinenie i otpravljaem zapros
xhr.open("GET", `${BASE_URL}/posts`); // pervij metod, vtoroj end point (imja servera + endpoint route)
xhr.send();

//xhr.responseType = "json"; // otvet prijot v vide massiva objektov
xhr.setRequestHeader("Content-Type", "application/json; charset = utf-8"); // kljuch, znachenie

//kogda vipolnilsja zapros, mi mozhem s etim rezuljtatom daljshe sto-to delatj.
xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log(`Status: ${xhr.status}`);
        console.log(xhr.response); // esli budet osibka poluchim pustoe body v vide objekta {}
    } else {
        console.log(`Error: ${xhr.status}`);
    }
};

//**************** POST */
// otkritj i pomestitj
xhr.open("POST", `${BASE_URL}/posts`);
xhr.responseType = "json";

const post = {
    title: "My title",
    count: 100,
};

// Mozhem otpravitj toljko tekst. Objekt dolzhni priobrazovatj v stroku
xhr.send(JSON.stringify(post));

// kogda pridjot otvet, mozhem ego kak-to obrabotatj
xhr.onload = () => {
    console.log(`Status: ${xhr.status}`);
    console.log(xhr.response);
};

// prishel otvet ot servera v vide osibki
xhr.onerror = () => {
    console.log("Error was detected!");
};