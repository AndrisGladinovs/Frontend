const BASE_URL = "http://jsonplaceholder.typicode.com";

let promise = fetch(`${BASE_URL}/posts`); // sejchas realizuem GET i sozdajotsja promise
// fetch realizuet ljuboj metod: GET, POST, DELETE...

promise
    .then((response) => {
        // otvet ot servera
        if (response.ok) {
            // if success (200-299). Budut toljko zagolovki i ne budet otobrazhatsja BODY
            return response.json(); // json() vernjot promise s telom zaprosa. Polnij otvet s BODY
        }
        throw new Error(response.status); // esli false, to vivodim osibku i ejo nomer
    })
    .then((data) => {
        // kogda vernjotsja telo-rezuljtat, to vivozhu ego na console
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

//*****************************  FETCH and POST ********/

/*
const post = {
    title: "My title",
    count: 100,
};

fetch(`${BASE_URL}/posts`, {
        // esli ne GET, to dolzhni 2 parametrom peredatj objekt
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset = utf-8",
        },
        body: JSON.stringify(post),
    })
    .then((response) => response.json()) // soderzhit BODY v vide objekta
    //.then((response) => response.text()) // esli hotim v vide teksta
    .then((data) => console.log(data));
*/

//******************** */

const post = {
    title: "My title",
    count: 100,
};

fetch(`${BASE_URL}/posts`, {
        // esli ne GET, to dolzhni 2 parametrom peredatj objekt
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset = utf-8",
        },
        body: JSON.stringify(post),
    })
    .then((response) => parseJSON(response)) // vozvrashaet promise istobi poluchitj dati, to nuzhno ego obernutj v .then
    .then((response) => {
        if (response.ok) {
            console.log(response.body);
            return;
            // return response.json(); // v vide objekta
        }
        throw new Error(`Error: ${response.status}`);
    })
    .catch((error) => {
        console.log(error);
    });

function parseJSON(response) {
    // funkcija kotoraja soberjot vsju strukturu. Poka u nas toljko zagolovki bez tela
    return new Promise((resolve) => {
        response
            .json() // stobi on realizoval telo na otvet, kotorij poluchili ot servera
            .then((json) => {
                // telo sformirovanno
                resolve({
                    status: response.status, // eto zagolovki
                    ok: response.ok,
                    body: json, // telo so vsemi dannimi
                });
            });
    });
}