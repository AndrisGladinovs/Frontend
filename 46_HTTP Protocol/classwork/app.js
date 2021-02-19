const BASE_URL = "http://contacts-telran.herokuapp.com";

function registration(email, password) {
    const auth = { email, password };
    const requestBody = JSON.stringify(auth);
    return fetch(`${BASE_URL}/api/registration`, {
        //end point
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset = utf-8",
        },
        body: requestBody,
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.status);
    });
}

function getAllContacts(token) {
    return fetch(`${BASE_URL}/api/contact`, {
        headers: {
            Authorization: token,
            "Content-Type": "application/json; charset = utf-8",
        },
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.status);
    });
}

function addContact(token) {
    return fetch(`${BASE_URL}/api/contact`, {
        headers: {
            Authorization: token,
            "Content-Type": "application/json; charset = utf-8",
        },
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.status);
    });
}