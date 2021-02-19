const BASE_URL = "http://jsonplaceholder.typicode.com";

const timeout = function(time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time); // pritormazhivaet ispolnenie koda na TIME
    });
};

timeout(2000).then(() => console.log("after 2 seconds"));

async function fetchPost() {
    await timeout(2000);
    const response = await fetch(`${BASE_URL}/posts`); // vozvrashaet promise v vide zagolovok
    const data = await response.json(); // vozrashaet uzhe v vide BODY i objekta
    console.log(response.status, data);
}

fetchPost();