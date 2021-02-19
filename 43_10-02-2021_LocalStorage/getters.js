const user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        // vosprinimaetsja kak pole
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
};

console.log(user.fullName);
user.fullName = "Jack Sparow"; // getter nelzja izmenitj
console.log(user.fullName); // John Smith  John Smith

user.fullName = "Robert Lewandowski"; // pomenjaet na novoe imja Obrashaetsja k SET
console.log(user.fullName); // obrashaetsja k GET
console.log(user.name); // obrashaetsja k GET
user.name = "Anna"; // obrashaetsja k SET

class User {#
    name;#
    surname;

    constructor(name, surname) {
        this.#name = name;
        this.#surname = surname;
    }

    get name() {
        return this.#name;
    }

    get surname() {
        return this.#surname;
    }
    set name(name) {
        // to, sto priletit nam
        this.#name = name;
    }
}

let user1 = new User("Anna", "SMith"); // ne smozhem pomenjatj znachenija privatnogo objekta. Toljko poluchitj cherez GET
console.log(user1.name); // Anna
user1.name = "John";
console.log(user1.name); // John, pomenjalsja cherez SET