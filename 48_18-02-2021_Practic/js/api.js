// otvechaet za otpravku zaprosov na server

const BASE_URL = "http://contacts-telran.herokuapp.com/";

class Api {
    static registration(email, password) {
        // to, sto peredajom na server
        const auth = { email, password }; // sozdali objekt, email kotorie peredali i parolj na server
        // sozdajom objekt, potomu sto vse dannie hranim v objekte
        //{email: email, password: password}

        const requestBody = JSON.stringify(auth); // eto stroka kotoruju poluchili ot objekta
        return request(`${BASE_URL}/api/registration`, {
            // format togo, sto peredajom
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: requestBody,
            // }).then((response) => {
            //     // fetch vozvrashaet toljko zagolovki vsegda
            //     if (response.ok) {
            //         return response.json(); // obratno ot servera budem poluchatj objekt cherez json s zagolovkami i telom
            //     }
            //     throw new Error(response.status);
        });
    }

    static async login(email, password) {
        const requestBody = JSON.stringify({ email, password });
        try {
            const response = await fetch(`${BASE_URL}/api/login`, {
                // format togo, sto peredajom
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: requestBody,
            });
            const data = await response.json(); // u await netu resolve i reject. Nuzhno budet delatj Promise.reject i obvorachivatj kod v obolochku TRY
            if (response.ok) {
                return data;
            }
            return Promise.reject(data); // klientskaja osibka
        } catch (error) {
            return Promise.reject({ message: message.error }); // servernaja osibka
        }
    }

    static getAllContacts(token) {
        return request(`${BASE_URL}/api/contact`, {
            headers: {
                Authorization: token,
            },
        });
    }

    static addContact(token, contact) {
        const requestBody = JSON.stringify(contact);
        return request(`${BASE_URL}/api/contact`, {
            // format togo, sto peredajom
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: token,
            },
            body: requestBody,
        });
    }

    static deleteById(token, id) {
        return request(`${BASE_URL}/api/contact/${id}`, {
            // format togo, sto peredajom
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: token,
            },
        });
    }
}

function parseJSON(response) {
    // stobi poluchitj telo, nuzhno otpravitj eshe 1 osinhronij vizov, stobi poluchitj telo
    // sto delaem s otvetom ot servera
    return new Promise((resolve) => {
        response.json().then((json) =>
            resolve({
                // pozitivno poluchili i pishem v kakom formate budem hranitj
                status: response.status, // status
                ok: response.ok, // kod osibki
                json, // telo
            })
        );
    });
}

function request(url, options) {
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(parseJSON)
            .then((response) => {
                if (response.ok) {
                    return resolve(response.json); // esli vsjo horoso s otvetom, to verni telo
                }
                return reject(response.json); // klientskaja osibka esli false tozhe verni telo
            })
            .catch((error) => {
                reject({ message: error.message });
                //servisnaja osibka
            });
    });
}