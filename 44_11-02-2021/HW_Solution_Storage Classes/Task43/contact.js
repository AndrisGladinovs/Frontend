class Contact {
    constructor(name, lastName, phone, email) {
            this.name = name;
            this.lastName = lastName;
            this.phone = phone;
            this.email = email;
        }
        // nash contakt dolzhnen umetj iz objekta priobrazovatj v stroku i obratno v objekt

    serialization() {
        // priobrazovivaem v stroku, stobi sohranitj v local storage
        return `${this.name}, ${this.lastName}, ${this.phone}, ${this.email}`; // sohranitsja v vide stroki cherez zapjatuju
    }

    static of(str) {
        // stroku perevodim v objekt obrashajasj k klasu
        const arr = str.split(","); // priobrazovivaem v massiv
        return new Contact(arr[0], arr[1], arr[2], arr[3]); // vozvrashaem kak objekt massiva
        // return new Contact(...arr);
    }
}

// c1 = new Contact('John', 'Doe', '873762762', 'hello@gmail.com');
// c1 => {name: John, lastName: Doe, phone: 7584783783, email: hello@gmail.com};
// c1.serialization("John, Doe, 7584783783")
// v static prishel John,Doe,4778782,hello@gmail.com
// mi ejo priobrazovivaem v massiv, razdeljaja po zapjatoj
// c2 = Contact.of(John, Doe, 7584783783) -> {name: John, lastName: Doe, phone: 7572334, email: hello@gmail.com}. Tozhe sozdajot iz strochki v
// static ne otnositsja k objektu, a podsoedinjaetsja k klassu