//const CONTACTS_KEY = "CONTACTS";
/* with JSON.stringify
users = {
"john@mail.com" : "12345", -> after parse -> {john@gmail.com: 12345
                                               jack@mail.com: 56789}
"jack@mail.com" : "12345",
}
*/

/*
users = [
{login: 'john@mail.com', password: 12345,}
{login: 'jack@mail.com', password: 12345,}
]
*/

class Store {
    static login({ email, password }) {
        // user{login: 'john@mail.com', password: 12345,}
        const json = localStorage.getItem("users"); // prihodit stroka
        if (json !== null) {
            const users = JSON.parse(json); // delaem objekt
            for (let key in users) {
                if (key === email && users[key] === password) {
                    localStorage.setItem("currentUser", email); // posle login sozdaj kljuch currentUser s takim email
                    return true;
                }
            }
        }
        throw new Error("Wrong email or password"); // we will also need to catch this error to dnt stop the code here
    }

    static registration({ email, password }) {
        const json = localStorage.getItem("users"); // poluchili stroku
        let users = {}; // sozdajom pustoj objekt dlja novogo user
        if (json !== null) {
            users = JSON.parse(json);
            for (let key in users) {
                if (key === email) {
                    throw new Error(`User with email ${email} exists already!`);
                }
            }
        }
        users[email] === password;
        localStorage.setItem("users", JSON.stringify(users)); // {'mail': 12345, 'mail': 56789}
        localStorage.setItem("currentUser", email);
        return true;
    }

    static getCurrentUser() {
        return localStorage.getItem("currentUser");
    }

    static logout() {
        localStorage.removeItem("currentUser");
    }

    static addContact(email, contact) {
        const json = localStorage.getItem(email); // poluchili stroku
        let contacts = []; // massiv kontaktov opredelennogo user
        if (json !== null) {
            contacts = JSON.parse(json); // dobavj togda v nepustoj massiv novij kontakt
        }
        contacts[contacts.length] = contact; // dovabljaem novij kontakt v konec massiva. Mozhem tozhe push delatj
        localStorage.setItem(email, JSON.stringify(contacts));
        return true;
    }

    static deleteContact(email, index) {
        const json = localStorage.getItem(email);
        if (!json) {
            //nichego netu v local Storage
            throw new Error("Contact does not exists");
        }
        const contacts = JSON.parse(json);
        if (contacts.length < index) {
            throw new Error("Contact does not exists");
        }
        contacts.splice(index, 1);
        localStorage.setItem(email, JSON.stringify(contacts));
    }

    static getAllContacts(email) {
        let json = localStorage.getItem(email);
        if (!json) {
            // esli strochka pustaja
            return [];
        }
        return JSON.parse(json); // vozvrashaem massiv
    }

    static getContactByIndex(email, index) {
        const contacts = this.getAllContacts(email);
        if (contacts.length === 0 || contacts.length < index) {
            throw new Error("Contact does not exists");
        }
        return contacts[index];
    }
}