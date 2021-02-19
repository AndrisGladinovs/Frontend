// communication between our Contact and Storage
// funkciji nuzhni - sohranitj, udalitj, vernutj vsjo

const CONTACTS_KEY = "CONTACTS"; // okonchateljnaja peremenaja, kotoruju neljzja menjatj

class Store {
    // sushnostj kotoraja pomogaet kommunicirovatj s Storage. Nuzhni metodi - stobi obratitsja k Storage sohranitj tam, udalitj ili vernutj sto-to

    static save(contact) {
        // pridjot so storoni Frontend kak objekt
        //1. Objekt priobrazovatj v massiv
        //2. Massiv v strochku
        //3. Strochku otpravitj v Storage
        const allContacts = this.getAll(); // vernjotsja massiv
        allContacts.push(contact); // dobavljaem novij contact
        //const str = allContacts.map((item) => item.serialization()).join("&");
        //localStorage.setItem(CONTACTS_KEY, str);
        this.updateLocalStorage(allContacts);
    }

    static remove(index) {
        const allContacts = this.getAll();
        allContacts.splice(index, 1); // udalitj element
        if (allContacts.length === 0) {
            localStorage.removeItem(CONTACTS_KEY);
        } else {
            this.updateLocalStorage(allContacts);
        }
        //const str = allContacts.map((item) => item.serialization()).join("&");
        //localStorage.setItem(CONTACTS_KEY, str);
        this.updateLocalStorage(allContacts);
    }

    static getAll() {
        // obrashaetsja k local Storage i poluchaet strochku ot Storage
        let str = localStorage.getItem("CONTACTS_KEY");
        if (!str) {
            return [];
        }
        // esli sto-to estj v Storage, to priobrazovivaem stroku v massiv objektov
        const contacts = str.split("&"); // poluchili massiv
        return contacts.map(Contact.of); // vizivaem metod iz Contact, kotorij priobrazovivaem vsjo v massiv objektov
    }

    static updateLocalStorage(contacts) {
        const str = contacts.map((item) => item.serialization()).join("&");
        localStorage.setItem(CONTACTS_KEY, str);
    }
}

// estj kljuch CONTACTS i value
// CONTACTS : Joe,Doe,12345,john@gmail.com&Joe,Doe,12345,john@gmail.com